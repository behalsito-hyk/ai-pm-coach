/* ============================================================
 * 知识包 #003：OpenClaw 2.0 发布深度解读
 *   —— 从开源 Agent Runtime 到协作式 Agent 平台
 * 生成日期：2026-09-01（由教练系统联网调研后生成）
 * 信息来源：OpenClaw 官方博客 (docs.openclaw.ai)、凤凰网/爱范儿实测、
 *           36氪/智东西实测、腾讯新闻/网易深度解读、Coinflive、
 *           StableLearn、QuestMobile 2026 AI 平台发展研究报告、
 *           CIO Dive / ZDNet Inside / AIMonk 定价分析
 * 装载方式：由 packs/manifest.js 登记，index.html 启动时自动装载
 * ============================================================ */
window.registerKnowledgePack({
  id: "pack-003-openclaw-2.0-2026-09",
  meta: {
    title: "OpenClaw 2.0 发布深度解读：从个人 Agent 到协作式平台",
    date: "2026-09-01",
    source: [
      "OpenClaw 官方博客 (docs.openclaw.ai/releases/2026.8.1)",
      "凤凰网/爱范儿实测报道 (2026-08-31)",
      "36氪/智东西实测 (2026-09-01)",
      "腾讯新闻/网易深度解读 (2026-08-31)",
      "QuestMobile 2026 AI 平台发展研究报告 (2026-09-01)",
      "CIO Dive / ZDNet Inside / AIMonk 定价分析"
    ]
  },
  kb: [
    {
      id: "o1", domain: "trend",
      title: "OpenClaw 2.0 发布：史上最大更新的三大主线",
      tags: ["openclaw", "agent runtime", "2.0", "长期记忆", "多agent协作", "harness", "开源"],
      body: `<h4>事件背景</h4>
<p>2026年8月31日，OpenClaw 正式发布 v2026.8.1（官方直接称为"OpenClaw 2.0"），这是项目诞生以来规模最大的一次更新：<b>933 名贡献者</b>参与（其中 569 人是首次贡献），包含超过 <b>16,000 个 Pull Request</b>，约占项目历史全部合并代码量的一半。团队此前停更近七周，原计划只简化安装+重做浏览器，结果越改越深，触及几乎所有核心模块。</p>
<h4>三大主线变化</h4>
<ul>
<li><b>主线一：记忆与自主学习</b>——Active Memory 让 Agent 在私人会话中调用过去的对话信息；Background Memory Consolidation 在后台整理长期记忆，保留来源信息与"Dream Diary"；Self-learning 让 Agent 从任务中积累可复用方法，自动转化为 Skills。</li>
<li><b>主线二：持续运行与跨设备</b>——Session 可在本地设备、配对机器和 Cloud Worker 之间移动，工作先在自己电脑开始，再交给云端继续执行；/loop 支持按固定时间或自身节奏持续检查；实验性 Swarm 让一个 Agent 启动多个 Subagent 并行处理独立子任务。</li>
<li><b>主线三：多 Agent 协作与权限体系</b>——Shared Cloud Sessions 允许团队成员进入同一个任务，在保留上下文的情况下接手；Shared Gateway 加入用户身份、在线状态、Session Creator、成员权限和不同 Agent 的访问范围；Private Credential Request 在 Agent 需要密码/Token 时通过遮罩输入获取，避免敏感信息进入聊天记录。</li>
</ul>
<h4>PM 视角</h4>
<p>OpenClaw 2.0 的三大主线恰好对应办公 Agent 产品化最核心的三个问题：<b>Agent 能记住多久</b>（记忆层）、<b>Agent 能跑多久</b>（运行时层）、<b>Agent 能和多少人一起工作</b>（协作层）。这三个问题在 WorkBuddy/豆包工作/千问办公中也有对应设计，但 OpenClaw 作为开源项目率先给出了端到端的实现方案。</p>
<div class="callout">💡 面试金句：OpenClaw 2.0 验证了 Agent = Model + Harness（DeepSeek 概括），Harness 包括 Runtime、Tools、Memory、Skills、Session、Sandbox、Permissions、Loop 和 Environment——模型能力固然重要，但真正决定 Agent 好不好用的，是它生活在什么环境里。</div>`
    },
    {
      id: "o2", domain: "trend",
      title: "OpenClaw 2.0 的安装革命：从「极客专属」到「普通用户可用」",
      tags: ["openclaw", "安装", "体验", "上手", "入门门槛", "harness", "产品化"],
      body: `<h4>安装之痛：OpenClaw 的成名与瓶颈</h4>
<p>OpenClaw 爆火后，国内迅速出现 14+ 国产版本（QClaw、ArkClaw、AutoClaw、CoPaw、Kimi Claw、MaxClaw、小米 MiClaw 等），核心切入点就是"安装太麻烦"。早期 OpenClaw 要求用户配置 Node.js、命令行、API Key、本地环境、国内 IM 接入，还得有一台长期在线的电脑——极客觉得自由，普通用户直接劝退。创始人 Peter Steinberger 曾故意不把安装做得太简单，希望用户认真思考"把一个拥有如此大权限的 Agent 装进电脑意味着什么"。</p>
<h4>2.0 的安装体验重构</h4>
<ul>
<li><b>自动检测</b>：新版自动识别电脑已有的 ChatGPT/Claude 订阅、API Key 和本地模型，能自动处理的配置尽量自动处理。</li>
<li><b>Browser App 成为 First-class Experience</b>：用户打开后直接进入 Agent 对话，新进度卡持续展示 Agent 在做什么，页面刷新后不消失，Subagent 状态可追踪。</li>
<li><b>降低决策负担</b>：暂时用不到的设置从第一次安装流程中移除，理念是"先让龙虾跑起来，再让龙虾帮用户完成配置"。</li>
</ul>
<h4>PM 视角：从"折腾"到"无感"的产品化路径</h4>
<p>OpenClaw 2.0 的安装重构，本质上是一个<b>从开发者工具到消费级产品的跃迁过程</b>。创始人从"故意设门槛以强化安全意识"到"降低门槛让更多人用起来"的转变，本身就是一个重要的产品决策案例：安全与易用不是非此即彼，而是可以通过设计（自动检测、渐进式权限、遮罩输入）来兼顾。</p>
<div class="callout">💡 面试题素材：被问到"怎么平衡 Agent 的安全与易用性"，可以引用 OpenClaw 2.0 的案例——安装时自动检测降低门槛，运行时用 Private Credential Request 和逐项授权来保障安全，两者不冲突。</div>`
    },
    {
      id: "o3", domain: "trend",
      title: "Agent 定价大转向：从 Token 计费到 Outcome-Based 模式",
      tags: ["定价", "outcome-based", "商业模式", "token", "seat", "商业化", "企业级"],
      body: `<h4>行业趋势：企业科技厂商集体转向</h4>
<p>2026年8月末，多个信号同时指向 Agent 定价模式的范式转变：Zendesk、Pegasystems 等企业科技厂商加速将 AI 定价与完成的业务结果挂钩；OpenAI 开始与部分企业客户测试"按结果付费"模式，计费依据从"消耗了多少算力"换成"有没有拿到成功结果"。</p>
<p>据 Futurum Research 2026 上半年调查：<b>仅 19% 的企业买家仍偏好传统按席位定价</b>，43% 偏好按用量消费定价，27% 偏好按结果付费。市场正在从"按人收费"转向"按任务/按结果收费"。</p>
<h4>四种定价模式的对比</h4>
<ul>
<li><b>按席位（Per-Seat）</b>：传统 SaaS 模式，单位是人。风险在买方（付了钱不一定用上），线性增长。适合基本 CRUD 应用。</li>
<li><b>按用量（Consumption/Token）</b>：单位是 Token/计算。风险在买方（账单不可预测），可变增长。适合通用 AI 能力。</li>
<li><b>按结果（Outcome-Based）</b>：单位是完成的任务。风险在卖方（没做成就没收入），指数增长。最适合专业 Agent。</li>
<li><b>混合模式（Hybrid）</b>：基础席位费 + 按结果/用量的浮动部分，当前最主流的企业采购方式。</li>
</ul>
<h4>PM 视角：为什么 Outcome-Based 对 Agent 产品至关重要</h4>
<p>Agent 的核心价值主张是"替人完成任务"，所以按任务完成结果收费是天然匹配的商业模式。但落地挑战巨大：<b>"任务完成"怎么定义？谁来评判？</b>OpenAI 测试中最大的技术难题就是"某类任务到底怎样才算成功"。这给 AI PM 提出了一个新问题——你的产品需要内置"任务完成度评估"能力，这不仅是一个产品功能，也是商业化的基础设施。</p>
<div class="callout">💡 与 pack-001 联动：千问办公的"标准/高级双模式"本质上是按任务难度路由的定价策略，属于用量定价 + 分级服务的混合模式。将其放到 Outcome-Based 的大趋势下看，更清楚它在产品定价谱系中的位置。</div>`
    },
    {
      id: "o4", domain: "trend",
      title: "QuestMobile 报告：AI 办公赛道亿级用户 + 三强格局初显",
      tags: ["questmobile", "报告", "办公agent", "三强", "workbuddy", "豆包工作", "千问办公", "数据"],
      body: `<h4>核心数据（2026年7月）</h4>
<ul>
<li><b>AI 效率办公赛道月活跃用户：1.02 亿</b>，同比增长 8.2%</li>
<li><b>办公赛道总使用次数翻倍增长</b>（+112.4%），说明工作流嵌入深度在提升</li>
<li><b>PC 客户端规模同比 +340.6%</b>，办公 AI 入口加速向客户端聚拢</li>
<li>WorkBuddy PC 月活跃用户 658.2 万，月人均使用 19.0 次</li>
<li>QClaw PC 月活跃用户 225.9 万（QClaw 后续并入 WorkBuddy）</li>
<li>TRAE Work PC 月活跃用户 190.4 万（后整合为豆包工作）</li>
</ul>
<h4>三强格局的差异化定位</h4>
<ul>
<li><b>腾讯 WorkBuddy</b>：锚定个人生产力与内外连接。以微信筑起规模，企业微信拉动频次，桌面原生打通深度。PC 月活 658 万居首。</li>
<li><b>阿里千问办公</b>：以钉钉为组织底座，锚定企业流程原生嵌入。把对话能力嵌入审批、会议、文档等真实工作流。</li>
<li><b>抖音豆包工作</b>：豆包提供高频智能入口，飞书提供协同与知识承接，扣子+TRAE 提供 Agent 执行能力。构建"个人智能使用→组织工作系统"的闭环。</li>
</ul>
<h4>PM 视角</h4>
<p>这个报告最值得关注的有两点：<b>一是"使用次数 +112.4%"说明用户粘性在快速提升</b>，办公 Agent 正在从"尝鲜品"变成"日常工具"；<b>二是监管分类治理</b>——拟人化智能体受控发展，工具型智能体迎来更大发展契机，这从政策层面为办公 Agent 扫清了不确定性。</p>`
    }
  ],
  quiz: [
    {
      domain: "trend", type: "single",
      q: "OpenClaw 2.0 的三大主线变化不包括以下哪一项？",
      opts: [
        "记忆与自主学习（Active Memory + Self-learning + Background Memory Consolidation）",
        "持续运行与跨设备（Session 迁移、/loop、Swarm 并行）",
        "多 Agent 协作与权限体系（Shared Cloud Sessions、Private Credential Request）",
        "内置大模型推理引擎，不再依赖外部模型"
      ],
      ans: 3,
      exp: "三大主线是：记忆与自主学习、持续运行与跨设备、多 Agent 协作与权限体系。OpenClaw 2.0 并未内置推理引擎，仍然依赖外部模型（ChatGPT、Claude、本地模型等）。"
    },
    {
      domain: "trend", type: "single",
      q: "OpenClaw 2.0 在安装体验上的最大变化是什么？",
      opts: [
        "取消了所有安全验证，一键安装即用",
        "自动检测电脑已有的 AI 订阅和 API Key，减少配置步骤",
        "改为纯网页版，无需本地安装",
        "增加了命令行配置选项，面向开发者"
      ],
      ans: 1,
      exp: "2.0 自动检测已有 ChatGPT/Claude 订阅、API Key 和本地模型，能自动处理的配置尽量自动处理；Browser App 成为首屏体验，暂时用不到的设置从第一次安装流程移除。"
    },
    {
      domain: "trend", type: "single",
      q: "2026 年 Agent 定价模式呈现的主要趋势是？",
      opts: [
        "按席位收费（Per-Seat）成为唯一主流，所有厂商统一采用",
        "从按席位/Token 收费转向 Outcome-Based（按结果收费），仅 19% 企业买家仍偏好纯按席位",
        "所有 Agent 产品全部免费，靠广告盈利",
        "按模型参数量定价，参数越大越贵"
      ],
      ans: 1,
      exp: "Futurum Research 调查显示：仅 19% 企业买家偏好纯按席位，43% 偏好按用量，27% 偏好按结果。Zendesk、Pegasystems、OpenAI 等正加速测试 Outcome-Based 定价。"
    },
    {
      domain: "trend", type: "multi",
      q: "QuestMobile 2026 年 7 月数据显示，以下哪些描述是正确的？（多选）",
      opts: [
        "AI 效率办公赛道月活跃用户达到 1.02 亿",
        "办公赛道总使用次数同比增长 112.4%",
        "WorkBuddy PC 月活用户达 658.2 万，居国产办公 Agent 首位",
        "AI 办公赛道 PC 客户端规模同比下降"
      ],
      ans: [0, 1, 2],
      exp: "A/B/C 正确。D 错误——PC 客户端规模同比增加 340.6%，说明办公 AI 入口正在加速向客户端聚拢，而非下降。"
    }
  ],
  interview: [
    {
      domain: "interview", cat: "前沿真题",
      q: "OpenClaw 2.0 提出了 Agent 的「记忆、持续运行、协作」三大能力升级。如果让你设计一个企业级办公 Agent 产品，你会如何设计这三个能力，以区别于个人开源项目？",
      intent: "考察能否将开源项目的技术理念转化为企业产品的设计决策，理解个人产品与企业产品的差异在于安全、治理、多租户和合规。",
      ref: "① <b>记忆层设计</b>：个人版用 Active Memory 调用全部历史对话，企业版必须区分「个人记忆」与「组织记忆」。个人记忆私有不可共享，组织记忆按角色/权限分级可访问，且遵循数据保留策略与合规要求（如 GDPR/个保法）。<br>② <b>持续运行设计</b>：个人版跨设备迁移就够了，企业版需要：多租户隔离的云端沙箱、任务队列与优先级调度、故障自动恢复与重试机制、资源使用审计与配额管理。<br>③ <b>协作层设计</b>：个人版共享 Session 是「人+Agent」协作，企业版需要支持「人+Agent」和「Agent+Agent」两种协作模式，且必须有：细粒度权限模型（谁可以查看/修改/审批）、操作审计日志、安全合规的敏感信息处理（如 OpenClaw 2.0 的 Private Credential Request 机制）。<br>④ <b>企业级差异总结</b>：个人产品追求「好用」，企业产品追求「可控」。记忆→合规、运行→审计、协作→权限，这是企业 Agent 产品设计中必须做的三道加法。",
      check: [
        "区分了个人记忆与组织记忆", 
        "提到企业级的多租户/沙箱/审计要求",
        "提到了权限模型与合规要求",
        "给出了具体的机制设计建议（如 Private Credential Request）",
        "能总结个人 vs 企业产品的核心差异"
      ]
    }
  ],
  hints: [
    "OpenClaw 2.0 有哪些更新",
    "OpenClaw 的安装体验有什么变化",
    "Agent 定价模式有什么新趋势",
    "Outcome-Based 定价是什么意思",
    "QuestMobile 报告里办公 Agent 三强格局",
    "OpenClaw 2.0 的三大主线是什么",
    "Agent = Model + Harness 是什么意思"
  ],
  tools: [
    {
      id: "tool-openclaw2",
      name: "OpenClaw 2.0",
      category: "agent-platform",
      tags: ["openclaw", "agent runtime", "harness", "开源", "多agent", "记忆"],
      summary: "开源 Agent Runtime 平台，最新 2.0 版本新增长期记忆、跨设备持续运行、多 Agent 协作与共享工作空间。",
      description: "OpenClaw 是最流行的开源个人 AI Agent 运行时之一，GitHub Stars 超 38.8 万。2.0 版本（v2026.8.1）是项目史上最大更新，由 933 名贡献者完成，新增 Active Memory 长期记忆、Session 跨设备迁移、Shared Cloud Sessions 多 Agent 协作、Private Credential 安全输入、实验性 Swarm 并行调度等核心能力。Browser App 提升为 First-class 体验，安装流程简化。",
      features: [
        "Active Memory 长期记忆 + Background Memory Consolidation 后台整理",
        "Self-learning 从任务中积累可复用方法并自动转化为 Skills",
        "Session 跨本地/云端/配对设备迁移",
        "Shared Cloud Sessions + Shared Gateway 多人多 Agent 协作",
        "Private Credential Request 遮罩输入敏感信息",
        "实验性 Swarm 并行子 Agent 调度",
        "Browser Agent 可读取页面、网络请求并模拟设备",
        "Desktop Control 远程操作配对桌面设备"
      ],
      whyForPM: "OpenClaw 是 Agent 产品化的教科书级案例——从极客工具到消费级产品的演进路径、从个人助手到协作平台的架构升级，对任何想理解 Agent 产品设计的人都有极高的学习价值。2.0 的三大主线也是当前所有办公 Agent 产品的核心能力方向。",
      url: "https://openclaw.ai",
      rating: 4.5
    },
    {
      id: "tool-questmobile-report",
      name: "QuestMobile 2026 AI 平台发展研究报告",
      category: "search",
      tags: ["questmobile", "报告", "办公agent", "行业数据", "竞争格局"],
      summary: "QuestMobile 2026 年 9 月发布的 AI 平台发展研究报告，涵盖办公 Agent 三强格局、用户规模、使用频次、信源引用策略等核心数据。",
      description: "QuestMobile 2026 年 AI 平台发展研究报告（2026-09-01 发布），核心内容包括：AI 效率办公赛道月活 1.02 亿，同比增长 8.2%；办公赛道总使用次数翻倍增长（+112.4%）；三强格局（腾讯 WorkBuddy 658.2 万月活领跑，抖音 TRAE Work 190.4 万，阿里多线布局）；以及拟人化智能体受监管后的工具型智能体发展路径分析。",
      features: [
        "AI 办公赛道月活 1.02 亿，同比增长 8.2%",
        "办公赛道总使用次数 +112.4%",
        "PC 客户端规模同比 +340.6%",
        "WorkBuddy 月活 658.2 万，月人均使用 19.0 次",
        "三强格局差异化定位分析",
        "拟人化智能体监管对行业的影响分析"
      ],
      whyForPM: "这是 2026 年办公 Agent 赛道最权威的第三方数据来源。报告中的用户规模、使用频次、竞争格局数据，可以直接用于竞品分析、市场判断和商业计划书中的数据支撑。",
      url: "https://new.qq.com/rain/a/20260901A03P9L00",
      rating: 4.5
    }
  ]
});