/* ============================================================
 * 知识包 #002：MCP 2026 新路线图与 Agent 基础设施演进
 * 生成日期：2026-08-31（由教练系统联网调研后生成）
 * 信息来源：Model Context Protocol 官方博客、WithO2、GIGAZINE、
 *           BestHub、ReptileHaus、GenAI PM Wiki 等公开报道
 * 装载方式：由 packs/manifest.js 登记，index.html 启动时自动装载
 * ============================================================ */
window.registerKnowledgePack({
  id: "pack-002-mcp-roadmap-2026-08",
  meta: {
    title: "MCP 2026 新路线图与 Agent 基础设施演进",
    date: "2026-08-31",
    source: [
      "Model Context Protocol 官方博客 (blog.modelcontextprotocol.io)",
      "WithO2 / GIGAZINE / ReptileHaus 技术解读",
      "BestHub / GenAI PM Wiki 行业分析",
      "今日头条 / 腾讯网 / 凤凰网 AI Agent 动态日报"
    ]
  },
  kb: [
    {
      id: "m1", domain: "trend",
      title: "MCP 2026 新路线图：五大优先方向速览",
      tags: ["mcp", "协议", "路线图", "agent基础设施", "2026", "无状态"],
      body: `<h4>背景</h4>
<p>2026-07-28 MCP 规范完成无状态重写（stateless rewrite），2026-08-22 核心维护者 David Soria Parra 与 Den Delimarsky 发布更新路线图，明确未来 6-12 个月的五大优先方向。该路线图在 Hacker News 获 170+ 点赞、120+ 评论，信号强度极高。</p>
<h4>五大优先方向</h4>
<ul>
<li><b>① Agentic Messaging Primitives（智能体消息原语）</b>：从简单工具调用升级为支持长时运行 Agent 的消息机制——Agent 不再只是「请求-响应」，而是能持续对话、汇报进度、中途协商。</li>
<li><b>② HTTP-Native Transport Unification（HTTP 原生传输统一）</b>：把此前分散的 stdio/SSE/WebSocket 传输方式统一到 HTTP 原生协议上，降低部署复杂度，让远程 MCP Server 像 REST API 一样好接。</li>
<li><b>③ Agent Identity & Enterprise Security（智能体身份与企业级安全）</b>：为 Agent 建立身份认证、委托权限、审计追踪的标准机制——这是企业采纳 Agent 的前提条件。</li>
<li><b>④ Improved Primitives（增强型基础原语）</b>：包括服务端主动事件推送（server-initiated events）、结果类型改进（result type improvements）等，让工具返回结构化数据而非纯文本。</li>
<li><b>⑤ SDK & Developer Experience（SDK 与开发者体验）</b>：统一多语言 SDK、改善文档与调试工具，降低接入成本。</li>
</ul>
<div class="callout">💡 PM 视角：MCP 路线图本质上是「Agent 基础设施的产品规划」。读懂它，你就能预判办公 Agent 产品在连接层、安全层、协作层的演进方向——这比追单个产品功能更有战略价值。</div>`
    },
    {
      id: "m2", domain: "trend",
      title: "从「工具调用」到「智能体消息原语」：为什么这很重要",
      tags: ["mcp", "消息原语", "长时任务", "agent协作", "a2a"],
      body: `<h4>旧模式的问题</h4>
<p>早期 MCP 的设计是「客户端发请求 → 服务端执行工具 → 返回结果」的一次性交互。这对查天气、读文件这类即时操作够用，但对需要数分钟甚至数小时的复杂任务（深度研究、批量数据处理、跨系统审批流转）就不够了——Agent 没法中途汇报进度、没法接收用户干预、没法跟另一个 Agent 协商分工。</p>
<h4>新模式：Agentic Messaging Primitives</h4>
<ul>
<li><b>流式进度</b>：Agent 可以在执行过程中持续发送中间状态，用户不必干等。</li>
<li><b>双向协商</b>：Agent 可以主动向用户或另一个 Agent 提问、请求确认、协商参数。</li>
<li><b>服务端主动推送</b>：Server-initiated events 让 MCP Server 能在没有请求时主动通知客户端（如监控告警、异步任务完成）。</li>
</ul>
<h4>与 A2A 协议的关系</h4>
<p>Google 提出的 A2A（Agent-to-Agent）协议专注于 Agent 间协作，MCP 专注于 Agent 与工具/数据的连接。两者不是替代关系，而是互补：MCP 解决「Agent 怎么用手脚」，A2A 解决「Agent 之间怎么说话」。2026 年的趋势是两个协议在实践中逐渐融合——MCP 的消息原语升级正是为了支持更复杂的 Agent 间交互场景。</p>
<div class="callout">💡 面试加分点：被问到「MCP 和 A2A 什么关系」，答「MCP 是 Agent 的工具接口标准，A2A 是 Agent 间的协作协议，两者互补；MCP 2026 路线图的消息原语升级正在模糊这个边界」。</div>`
    },
    {
      id: "m3", domain: "trend",
      title: "Agent 身份与企业安全：PM 必须关注的合规门槛",
      tags: ["mcp", "安全", "身份认证", "委托权限", "企业级", "合规"],
      body: `<h4>为什么 Agent Identity 被提到优先级别</h4>
<p>当 Agent 开始代替人操作企业系统（发邮件、改表格、调 API），一个根本问题浮出水面：<b>谁授权了这个 Agent？它有权做什么？出了问题追溯谁？</b>这不是技术问题，是企业采纳 Agent 的信任前提。</p>
<h4>MCP 路线图的安全三件事</h4>
<ul>
<li><b>Agent Identity（智能体身份）</b>：每个 Agent 有可验证的身份标识，不再是匿名脚本。</li>
<li><b>Delegated Permissions（委托权限）</b>：用户把自己的部分权限「委托」给 Agent，且可随时收回、可限定范围——类似 OAuth 的 scope 机制，但专为 Agent 设计。</li>
<li><b>Audit Trail（审计追踪）</b>：Agent 的每次操作都有日志、可溯源、可审计。</li>
</ul>
<h4>对 AI PM 的意义</h4>
<ul>
<li>做 B 端 Agent 产品，安全设计不是锦上添花，而是<b>准入条件</b>。没有身份与权限体系，企业客户不会买单。</li>
<li>PRD 里要单独写「Agent 权限模型」章节，包含：身份来源、权限粒度、委托机制、审计要求。</li>
<li>竞品分析时，看对手的 Agent 安全设计成熟度，是判断其 B 端竞争力的核心指标。</li>
</ul>
<div class="callout">💡 与 pack-001 联动：pack-001 讲了办公 Agent 的安全设计四原则（最小授权→风险分级→运行时隔离→审计留痕），本卡片补充了协议层的标准化进展——MCP 正在把这些最佳实践变成行业通用规范。</div>`
    },
    {
      id: "m4", domain: "trend",
      title: "豆包工作独立上线与字节三线整合：组织调整背后的产品逻辑",
      tags: ["豆包工作", "字节跳动", "trae", "扣子", "组织整合", "办公agent"],
      body: `<h4>事件回顾（2026-08-24~25）</h4>
<ul>
<li>8月24日：字节将 TRAE、扣子（Coze）团队整体并入豆包体系。TRAE Work 与扣子整合进豆包工作场景，TRAE IDE/CLI 作为豆包品牌下编程产品线保留。</li>
<li>8月25日：正式发布独立 AI 办公产品「豆包工作」，一口气上架 200+ 技能，支持手机远控电脑、Windows 虚拟桌面。</li>
<li>8月26日：阿里千问办公国际版 QwenWork 开启公测，战线拉到海外。</li>
</ul>
<h4>为什么是现在？三层逻辑</h4>
<ul>
<li><b>竞争倒逼</b>：WorkBuddy PC 月访问量破 2097 万，千问办公 8 月初公测——字节不能再把主力办公能力藏在聊天 App 里。</li>
<li><b>Token 商业闭环</b>：办公场景是离 Token 变现最近的地方（高频、刚需、可计量）。独立产品 = 独立计费入口。</li>
<li><b>组织收敛</b>：此前飞书、豆包、TRAE、扣子四条线并行，资源分散。合并后形成「豆包 C 端 + 豆包工作 B 端 + TRAE 开发者」三线清晰分工。</li>
</ul>
<h4>PM 启示</h4>
<p>大厂的组织调整就是最真实的产品战略信号。当你看到「团队合并」「产品线收口」「独立品牌上线」，背后一定是三个判断：<b>市场窗口到了、商业模式想清楚了、内部资源要集中了</b>。面试谈竞品分析时引用这些组织变动，比复述功能列表有力得多。</p>`
    }
  ],
  quiz: [
    {
      domain: "trend", type: "single",
      q: "MCP 2026-08-22 路线图中，以下哪项不属于五大优先方向？",
      opts: [
        "Agentic Messaging Primitives（智能体消息原语）",
        "HTTP-Native Transport Unification（HTTP 原生传输统一）",
        "Blockchain-based Agent Ledger（区块链智能体账本）",
        "Agent Identity & Enterprise Security（智能体身份与企业安全）"
      ],
      ans: 2,
      exp: "五大优先方向是：消息原语、HTTP 传输统一、Agent 身份与安全、增强型基础原语、SDK 与开发者体验。区块链账本不在其中。"
    },
    {
      domain: "trend", type: "single",
      q: "MCP 与 Google A2A 协议的关系是什么？",
      opts: [
        "A2A 是 MCP 的替代品，未来会取代 MCP",
        "MCP 解决 Agent 与工具/数据的连接，A2A 解决 Agent 间协作，两者互补",
        "两者完全相同，只是命名不同",
        "A2A 只用于聊天机器人，MCP 只用于代码生成"
      ],
      ans: 1,
      exp: "MCP 是 Agent 的工具接口标准（Agent↔Tools/Data），A2A 是 Agent 间的协作协议（Agent↔Agent），两者互补而非替代。"
    },
    {
      domain: "trend", type: "multi",
      q: "字节在 2026 年 8 月下旬的组织调整中，以下哪些描述是正确的？（多选）",
      opts: [
        "TRAE 和扣子团队整体并入豆包体系",
        "TRAE IDE 及 CLI 作为豆包品牌下编程产品线保留",
        "飞书被拆分为独立 BU 以加强办公协同",
        "豆包工作于 8 月 25 日正式作为独立产品上线"
      ],
      ans: [0, 1, 3],
      exp: "A/B/D 正确。C 错误——实际情况是飞书产品团队在 7 月 30 日已与豆包合并，飞书从独立 BU 降级为豆包的能力模块，而非拆分为独立 BU。"
    }
  ],
  interview: [
    {
      domain: "interview", cat: "前沿真题",
      q: "如果让你为一个企业级 Agent 平台设计 MCP 接入方案，你会如何向技术负责人阐述关键设计决策？",
      intent: "考察对 MCP 协议的理解深度、能否将协议规范转化为产品设计决策、以及与技术团队的沟通能力。",
      ref: "① <b>传输层选择</b>：推荐 HTTP-Native Transport（路线图优先方向），避免 stdio 的本地限制，支持远程部署与负载均衡。<br>② <b>身份与权限</b>：采用 MCP 的 Agent Identity + Delegated Permissions 机制，每个 Agent 有可验证身份，权限按 scope 委托，支持随时收回。<br>③ <b>消息模式</b>：对长时任务启用 Agentic Messaging Primitives，支持流式进度上报和中途干预，而非阻塞式等待。<br>④ <b>工具发现</b>：利用 Progressive Tool Discovery，按需加载工具列表，避免一次性暴露数百个工具导致上下文膨胀。<br>⑤ <b>落地节奏</b>：先跑通只读类工具（检索、查询）验证链路，再扩展写入类工具，最后开放 Agent 间协作。<br>⑥ 收尾：强调 MCP 是行业标准而非私有协议，选择它可以降低未来对接其他 Agent 平台的集成成本。",
      check: [
        "提到 HTTP-Native Transport 或传输层选型理由",
        "提到 Agent Identity / Delegated Permissions 等企业安全要素",
        "区分短任务与长时任务的消息模式差异",
        "提到工具发现/渐进式加载策略",
        "能从 PM 角度阐述「为什么选 MCP 而不是自建协议」"
      ]
    }
  ],
  hints: [
    "MCP 2026 路线图有哪些优先方向",
    "MCP 和 A2A 有什么区别",
    "Agent 身份认证为什么重要",
    "豆包工作是什么时候独立的",
    "字节为什么整合 TRAE 和扣子",
    "MCP 无状态重写是什么意思"
  ],
  tools: [
    {
      id: "tool-mcp-inspector",
      name: "MCP Inspector",
      category: "dev",
      tags: ["mcp", "调试", "开发者工具", "协议测试"],
      summary: "MCP 官方调试与测试工具，可视化检查 MCP Server 的工具列表、资源、提示词模板，实时发送请求并查看响应。",
      description: "Model Context Protocol 官方提供的交互式调试器。输入 MCP Server 地址即可浏览其暴露的 Tools/Resources/Prompts，支持手动构造请求、查看 JSON-RPC 原文、验证 Schema 合规性。适合 PM 快速了解一个 MCP Server 提供了什么能力，也适合开发阶段联调。",
      features: [
        "可视化浏览 MCP Server 暴露的工具、资源与提示词",
        "实时发送 JSON-RPC 请求并查看原始响应",
        "Schema 校验与错误提示",
        "支持 stdio 与 HTTP 两种传输模式"
      ],
      whyForPM: "不需要写代码就能直观理解一个 MCP Server 的能力边界，做竞品分析或评估第三方工具接入时非常高效。",
      url: "https://github.com/modelcontextprotocol/inspector",
      rating: 4.5
    },
    {
      id: "tool-genai-pm-wiki",
      name: "GenAI PM Wiki - MCP 专题",
      category: "search",
      tags: ["mcp", "知识库", "pm方法论", "行业追踪"],
      summary: "面向 AI PM 的 MCP 概念百科与行业动态聚合，包含协议解读、企业案例、Newsletter 摘要。",
      description: "GenAI PM Wiki 是一个专为 AI 产品经理打造的生成式 AI 知识库，其中 MCP 专题页持续更新协议演进、企业连接器案例、认证与权限设计等产品层面的解读。内容来自 Newsletter 聚合与社区贡献，适合非技术背景的 PM 快速建立对 MCP 的产品直觉。",
      features: [
        "MCP 概念解释与产品化视角解读",
        "企业级 MCP 连接器案例库（HubSpot、Vercel 等）",
        "Authentication / Delegated Permissions 等产品关注点专题",
        "持续更新的行业 Newsletter 摘要"
      ],
      whyForPM: "把技术协议翻译成产品语言，帮你理解 MCP 对产品设计和商业化的影响，而不是陷入协议细节。",
      url: "https://genaipm.com/wiki/concepts/mcp",
      rating: 4.0
    }
  ]
});
