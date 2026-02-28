📄 《菜小新》MVP 版本 产品需求文档 (PRD)
1. 产品概述与全局设定 (Product Overview)
产品定位：极简、智能的食材库存管理与 AI 菜谱推荐小程序。

核心用户旅程：截图录入电商订单 -> 自动计算临期状态 -> 根据剩余食材与饮食目标 AI 生成菜谱 -> 一键消耗打卡 -> 获得健康成就。

全局视觉规范 (UI/UX)：

主色调：象征健康的鲜活绿（Primary: #10B981）。

辅助色：临期预警黄（Warning: #F59E0B），过期警示红（Danger: #EF4444）。

交互原则：极其克制的手动输入。核心操作路径不超过 3 次点击；涉及大模型 API 请求时必须有明确的 Loading 态（如骨架屏或生动的“AI 思考中”动画），以掩盖 2-5 秒的接口延迟。

2. 技术架构与工程建议 (Architecture)
(建议 AI 编码助手参考此配置初始化项目)

前端框架：uni-app (Vue3 + Setup 语法糖) + Vite。跨平台编译至微信小程序。

状态管理：Pinia（全局维护食材列表 inventoryList 和用户健康目标 userGoal）。

UI 组件库：推荐使用轻量级的 uView-Plus 或手写基于 Tailwind CSS / UnoCSS 的原子化类名。

后端/云服务：MVP 阶段推荐直接使用 微信云开发 (CloudBase) 或 Supabase (PostgreSQL + Serverless Edge Functions)，极速实现 CRUD 和云函数。

AI 服务集成：

截图识别：调用多模态大模型 API（如 智谱 GLM-4V 或 阿里通义千问 VL）。

菜谱生成：调用文本大模型 API（如 DeepSeek-Chat 或 豆包大模型），必须支持流式输出 (Server-Sent Events) 以提升前端体验。

3. 页面与功能模块详述 (Core Features & UI)
Tab 1: 首页 - 「我的冰箱」(Inventory)
页面布局 (Layout)：

顶部 Header：显示总食材库数量，右上角为【+ 添加食材】主按钮。

筛选栏 (Tabs)：全部 / 临近过期 (≤2天) / 已过期。

列表区 (List)：卡片式列表，每个卡片展示：食材 Icon/Emoji、名称、剩余粗略估量（如 500g）、保鲜倒计时标签（动态变色）。

核心交互 (Interactions)：

添加途径：点击【+】弹出 BottomSheet，提供「相册上传截图」和「手动添加」两个选项。

滑动操作 (Swipe Action)：在列表项左滑，出现两个操作按钮：

🟢 [吃光/消耗] -> 触发库存扣减逻辑，并记录一条消耗日志。

🔴 [扔掉] -> 触发库存删除逻辑，记录浪费日志。

异常处理 (Edge Cases)：列表为空时，展示空状态插画 (Empty State) 引导用户上传第一张截图。

Tab 2: 发现 - 「AI 菜谱」(AI Recipe)
页面布局 (Layout)：

顶部选择器：饮食目标切换（减脂 / 增肌 / 正常饮食）。

食材选择区：横向滚动 (Scroll-view) 展示当前冰箱里状态为“正常”和“临期”的食材，支持多选（Checkbox 样式设计为胶囊按钮）。

行动呼唤 (CTA)：【✨ AI 帮我搭】悬浮大按钮。

内容展示区：Markdown 渲染容器，用于展示 AI 生成的菜谱（需支持流式打字机效果）。

核心交互 (Interactions)：

用户勾选 1-3 样食材（例如：西红柿、鸡蛋、鸡胸肉）。

点击生成后，下方容器展示 Skeleton Loading，随后逐字渲染大模型返回的菜谱（包含菜名、步骤、卡路里估算）。

一键扣减：菜谱底部提供【做这道菜并扣减食材】按钮，点击后自动扣除所选食材库存。

Tab 3: 我的 - 「成就中心」(Achievements)
页面布局 (Layout)：

个人面板：用户头像、昵称、连续打卡天数。

核心数据看板：

累计消灭食材（kg）

拯救临期食材次数

当前健康力评分（根据减脂/增肌目标的完成度模拟的虚拟分）。

动态反馈墙：时间轴形式展示每日结算文案（例如：“今日消耗了 200g 菠菜，摄入了丰富的维生素，简直是减脂届的自律标杆！”）。

4. 关键数据结构 (Data Models)
让 IDE 中的 AI 助手预先了解数据流，有助于生成准确的 TypeScript Interface 或数据库 Schema。

TypeScript
// 食材单品 (Inventory Item)
interface FoodItem {
  id: string;             // 唯一UUID
  name: string;           // 食材名称 (如: 西红柿)
  originalWeight: string; // 初始重量/数量 (如: 500g, 2个)
  status: 'FRESH' | 'WARNING' | 'EXPIRED'; // 状态计算属性
  entryDate: number;      // 录入时间戳
  expiryDays: number;     // 预计保质期(天)，由系统内置字典或AI赋初始值
  storageTips: string;    // 保存建议 (如: 建议冷藏)
}

// 消耗日志 (Consumption Log) - 用于每日结算与成就系统
interface ConsumeLog {
  id: string;
  foodId: string;
  foodName: string;
  action: 'CONSUMED' | 'WASTED'; // 吃掉还是扔掉
  date: number;           // 操作时间
}

// 用户配置 (User Profile)
interface UserConfig {
  goal: 'FAT_LOSS' | 'MUSCLE_GAIN' | 'NORMAL'; // 饮食目标
  dietaryRestrictions: string[]; // 忌口 (如: 葱姜蒜、海鲜)
}
5. 核心 AI 提示词工程 (Prompt Engineering Protocol)
在对接云函数或后端服务时，请将以下逻辑转化为代码：

A. 视觉大模型 Prompt (截图解析引擎)
System Prompt:

你是一个专业的生鲜电商订单解析器。我会发给你一张订单截图，请识别图片中的食材清单。
约束条件：

只提取生鲜、蔬菜、肉蛋奶等食材，忽略运费、包装袋、非食品。

结合常识，给每种食材预估一个合理的冰箱冷藏保质期天数（expiryDays，整数，例如绿叶菜3天，土豆15天）。

强制返回纯 JSON 数组格式，不要包含任何 markdown 标记或解释性文字。数据结构：[{"name": "食材名", "weight": "重量/数量", "expiryDays": 天数}]。

B. 文本大模型 Prompt (菜谱生成引擎)
System Prompt:

你是一个米其林级别的健康营养师。用户会提供他们现有的食材以及当前的饮食目标。
输入示例： 食材：[西红柿, 鸡胸肉]；目标：[减脂]。
任务：
为用户定制一道菜谱。要求：

契合其饮食目标（如果是减脂，强调少油少盐的做法；如果是增肌，强调蛋白质保留）。

给出粗略的卡路里和宏量营养素估算。

语言风格要幽默、带有鼓励感。

使用 Markdown 格式输出，包含：## 菜名、### 营养估算、### 极简做法。