/* ============================================================
 * 知识包 #004：Anthropic Fable 5.1 发布与 Agent 经济学
 *   —— 最强模型也开始卷成本，Agent 规模化落地有了新底座
 * 生成日期：2026-09-02（由教练系统联网调研后生成）
 * 信息来源：Anthropic 官方博客、华尔街见闻、腾讯新闻/深网、
 *           财联社/上游新闻、TokenFeed、AI Bacon、IT之家、
 *           新浪科技/DeepTech、机器之心、智东西等公开报道
 * 装载方式：由 packs/manifest.js 登记，index.html 启动时自动装载
 * ============================================================ */
window.registerKnowledgePack({
  id: "pack-004-fable5.1-agent-economics-2026-09",
  meta: {
    title: "Anthropic Fable 5.1 发布与 Agent 经济学",
    date: "2026-09-02",
    source: [
      "Anthropic 官方博客 (anthropic.com)",
      "华尔街见闻《2万亿美元IPO前夕打出组合拳》",
      "腾讯新闻/深网《Fable 5.1来了：号称全球最强，但Anthropic也开始卷价格》",
      "财联社/上游新闻《地球最强大模型也开始强调性价比》",
      "TokenFeed / AI Bacon / DeepTech / 机器之心 / IT之家",
      "智东西 / 新浪科技 等公开报道"
    ]
  },
  kb: [
    {
      id: "t1", domain: "trend",
      title: "Fable 5.1 发布全景：性能屠榜 + 成本革命 + 数据松绑",
      tags: ["fable5.1", "anthropic", "claude", "模型发布", "成本", "agent", "缓存", "ipo"],
      body: `<h4>事件速览</h4>
<p>当地时间 2026 年 9 月 1 日，Anthropic 发布 Claude Fable 5.1 和 Claude Mythos 5.1。两者共享同一基础模型，仅安全限制不同：Fable 广泛开放，Mythos 仅限审核后的网络安全/生命科学机构。这是 Anthropic 在 IPO 窗口临近之际的一次全方位产品更新，被媒体称为"性能+降本+数据松绑"组合拳。</p>
<h4>三大核心看点</h4>
<ul>
<li><b>性能全面领先</b>：横扫 8 项公开基准测试夺冠。Terminal-Bench-Science 0.1 得分 52.6%（Fable 5 仅 24.7%，翻倍以上）；编码测试提升 13%；蛋白质设计任务成功率接近 50%。</li>
<li><b>成本大幅降低</b>：输入/输出价格不变（$10/$50 per M tokens），但缓存读取从 $1.00 降至 $0.25（-75%）。典型工作负载整体成本降低约 25%，<b>高度 Agent 化任务最高降低约 45%</b>。</li>
<li><b>数据松绑与反蒸馏</b>：推出 Enterprise Frontier Safeguards (EFS)，允许企业数据留存于自有云端；同步上线反蒸馏签名验证机制，防止模型被窃取蒸馏。</li>
</ul>
<h4>PM 视角</h4>
<p>这是 AI 行业的一个转折点信号：当最强模型开始主动降价，意味着竞争从"唯性能论"进入"性能×成本×安全"三维竞争。对 AI PM 而言，模型的成本曲线正在变得比能力曲线更值得关注——因为成本决定了你的产品能否规模化。</p>
<div class="callout">💡 面试启发：被问到"模型选型策略"时，除了提能力对比，一定要提成本敏感性——Fable 5.1 的案例说明，同样的模型架构，通过缓存策略可以产生巨大的成本差异。这是 PM 需要理解的技术经济杠杆。</div>`
    },
    {
      id: "t2", domain: "trend",
      title: "Agent 经济学：为什么 Fable 5.1 降本 45% 是里程碑",
      tags: ["agent经济学", "成本", "缓存", "token", "规模化", "长周期任务", "成本结构"],
      body: `<h4>Agent 任务的成本结构特殊在哪</h4>
<p>传统聊天（单轮问答）每次调用成本固定。但 Agent 任务不同：<b>Agent 需要反复调用模型</b>——规划、执行、校验、纠错、再执行，一个完整任务可能产生 10-100 次模型调用。其中大量调用共享相同的上下文（系统提示、工具描述、任务目标），这些重复内容正是缓存发挥价值的地方。</p>
<h4>Fable 5.1 的降本机制拆解</h4>
<ul>
<li><b>缓存读取降价 75%</b>（$1.00 → $0.25/M tokens）：模型在连续推理中可以复用已缓存的上下文块，大幅减少重复计算。</li>
<li><b>Agent 任务受益最大</b>：Anthropic 官方口径——典型工作负载降 25%，但高度 Agent 化任务降 45%。原因是 Agent 任务中缓存命中率天然更高（多轮推理共享上下文）。</li>
<li><b>中低复杂度任务价格同步下调</b>：新模型在中低复杂度任务上也做了价格调整，覆盖更多日常使用场景。</li>
</ul>
<h4>对 AI 产品设计的启示</h4>
<ul>
<li><b>缓存友好设计</b>：产品应设计让 Agent 尽可能复用缓存的工作流（如结构化提示、共享上下文），主动降低 token 消耗。</li>
<li><b>成本模型中的路由策略</b>：简单任务用轻量模型，复杂任务才用旗舰模型——千问办公的标准模式已证明这套逻辑。</li>
<li><b>Long-horizon 任务的经济可行性</b>：Fable 5.1 证明了长时间多步骤任务可以做到经济上可行，这意味着更多"让 AI 干几小时活"的产品形态成为可能。</li>
</ul>
<div class="callout">💡 PM 面试金句：Agent 产品的单位经济模型，核心变量是"每任务完成成本"而非"每 token 成本"。缓存策略、模型路由、任务分解是 PM 手中三大降本杠杆。</div>`
    },
    {
      id: "t3", domain: "trend",
      title: "本周 Agent 基础设施密集上新：从工具到生态的加速",
      tags: ["agents-sdk", "openai", "chatgpt-work", "事件触发", "sandbox", "workbuddy", "生态会"],
      body: `<h4>OpenAI Agents SDK 生产版发布</h4>
<p>OpenAI 在 9 月初正式发布 Agents SDK 生产版（替代之前的 Swarm 实验项目），核心升级：<b>原生沙箱执行</b>（native sandbox execution）和 <b>模型原生 Harness</b>（model-native harness）。Agent 可在一个受控的容器化环境中执行文件操作、运行命令、编辑代码，并支持 7 家沙箱提供商无缝切换（Blaxel、Cloudflare、Daytona、E2B、Modal、Runloop、Vercel）。同时内置可配置记忆（configurable memory）与追踪（tracing）能力。</p>
<h4>ChatGPT Work 事件触发任务上线</h4>
<p>2026-08-25，OpenAI 给 ChatGPT Work 的 Scheduled Tasks 增加了事件触发能力：任务可基于 Gmail、Slack 和 GitHub 事件启动，从"定时轮询"进化为"事件驱动"。同时新增网站登录能力——Agent 遇到登录页时转交用户手动认证，凭据不对模型暴露。</p>
<h4>WorkBuddy 生态发布会今日举行</h4>
<p>2026-09-02 14:00 深圳，腾讯 WorkBuddy 生态发布会正式召开，主题"Build Together"。罗技、绿联 NAS 等合作伙伴亮相，探索 AI Agent 硬件入口与本地数据协同。WorkBuddy 首发接入的混元 Hy4 preview 因需求激增已紧急扩容。</p>
<h4>Devin 成本降低 54%</h4>
<p>Cognition 的 AI 软件工程师 Devin 升级到 Fable 5.1 底座，任务成本降低 54%，得益于 Anthropic 的缓存降价和 prompt caching 优化。</p>
<div class="callout">💡 PM 判断：Agent 基础设施正在进入"标准化+生产化"阶段。OpenAI 推 SDK（开发者视角）、ChatGPT Work 推事件触发（用户视角）、WorkBuddy 推生态（平台视角）——三条线同时推进，意味着 Agent 从"演示"到"日常"的门槛正在快速降低。</div>`
    },
    {
      id: "t4", domain: "trend",
      title: "AI Agent 产品经理方法论：从功能设计到经济模型设计",
      tags: ["方法论", "aipm", "经济模型", "成本设计", "token经济学", "能力模型", "转型"],
      body: `<h4>2026 年 AI PM 的角色进化</h4>
<p>行业共识正在形成：AI PM 正在从"功能设计者"进化为"智能体系统编排者"。核心转变包括：</p>
<ul>
<li><b>从画流程图到设计 Agent 协作拓扑</b>：传统客服产品画几十个对话树，现在构建由 7 个专用 Agent 组成的协作系统（意图识别/知识检索/情感分析等），PM 的工作是设计 Agent 间的协作协议和交接规则。</li>
<li><b>从功能优先级到成本优先级</b>：模型调用成本成为产品决策的关键约束。PM 需要理解缓存策略、模型路由、任务分解对成本的影响，并将其纳入产品方案评估。</li>
<li><b>从确定性功能到概率性系统</b>：AI 产品的输出不是确定性的，PM 需要设计回退机制、人工干预节点、评估指标和持续监控体系。</li>
</ul>
<h4>Workflow-as-Product 设计三原则</h4>
<ul>
<li><b>工具内聚</b>：把用户日常 5-8 个碎片化工具整合进一个环境，减少切换成本。</li>
<li><b>制品可审计</b>：输出是可复现、可同行审查的结构化产物，而非黑盒结果。</li>
<li><b>模型透明</b>：AI 在你的工作台上辅助你、每一步可见，而非"AI 替你做了"。</li>
</ul>
<h4>需求三问（来自腾讯内部分享）</h4>
<p>做 AI 产品先问自己三个问题：痛点够不够硬？自己是不是目标用户？AI 是不是刚好够到？第三个维度最容易被忽略——同一个需求，AI 能做的时点决定了产品成败。</p>
<div class="callout">💡 与 26 周计划的联动：W17 成本模型、W5-6 搭建 demo 时，把"经济模型设计"作为产品方案的独立章节加入。面试时，能说出"每任务完成成本"这个概念的 AI PM 会对面试官形成记忆点。</div>`
    }
  ],
  quiz: [
    {
      domain: "trend", type: "single",
      q: "Anthropic Fable 5.1 发布中，对 AI 产品经理最重要的数据是？",
      opts: [
        "Terminal-Bench-Science 得分 52.6%",
        "高度 Agent 化任务成本最高降低约 45%",
        "编码测试提升 13%",
        "蛋白质设计成功率接近 50%"
      ],
      ans: 1,
      exp: "虽然性能提升也很亮眼，但成本降低 45% 对产品层面的影响更深远——它决定了 Agent 类产品能否以经济可行的方式规模化。PM 应优先关注成本曲线。"
    },
    {
      domain: "trend", type: "single",
      q: "Fable 5.1 降低 Agent 任务成本的核心机制是什么？",
      opts: [
        "降低了输入和输出的基础价格",
        "缓存读取价格从 $1.00 降至 $0.25（-75%），Agent 多轮推理中缓存命中率天然更高",
        "增加了模型参数量",
        "减少了每次推理需要的 token 数量"
      ],
      ans: 1,
      exp: "输入/输出价格没变，但缓存读取降价 75%。Agent 任务天然需要多轮推理共享上下文，缓存命中率高，因此受益最大（降幅 45% vs 典型工作负载 25%）。"
    },
    {
      domain: "trend", type: "multi",
      q: "以下哪些是 2026 年 9 月初 Agent 基础设施密集上新的重要事件？（多选）",
      opts: [
        "OpenAI 发布 Agents SDK 生产版，支持原生沙箱执行",
        "ChatGPT Work 新增事件触发任务（Gmail/Slack/GitHub）",
        "腾讯 WorkBuddy 生态发布会（9月2日）",
        "Google 发布 Gemini 4.0"
      ],
      ans: [0, 1, 2],
      exp: "前三项均为本周真实发生的事件。Gemini 4.0 尚未发布（Google 计划发布 Gemini 3.8 Flash）。Agent 基础设施正在从零散工具走向标准化平台。"
    },
    {
      domain: "trend", type: "single",
      q: "2026 年 AI 产品经理的核心能力转变中，以下哪一项最准确？",
      opts: [
        "从功能设计者进化为智能体系统编排者，需要理解 Agent 协作拓扑和经济模型",
        "需要学会写代码",
        "只需要关注用户界面设计",
        "不需要理解模型成本"
      ],
      ans: 0,
      exp: "AI PM 的核心转变是：从画功能流程图到设计 Agent 协作拓扑，从功能优先级到成本优先级，从确定性功能到概率性系统。理解成本模型是 AI PM 区别于传统 PM 的关键能力。"
    }
  ],
  interview: [
    {
      domain: "interview", cat: "前沿真题",
      q: "假设你是一个办公 Agent 产品的 PM，模型调用成本占运营成本的 60% 以上。如果 Fable 5.1 能让 Agent 任务成本降低 45%，但需要重新设计工作流以充分利用缓存机制，你会如何评估是否切换模型？",
      intent: "考察成本意识、模型切换决策框架、技术经济理解，以及对「缓存友好设计」的产品化思考。",
      ref: "<b>决策框架（四步评估）：</b><br>① <b>性能基准测试</b>：在真实业务场景中跑 A/B 测试，对比 Fable 5.1 与当前模型的任务完成率、质量、失败率。不能只看公开基准。<br>② <b>成本模型重算</b>：基于实际使用模式（缓存命中率分布、任务长度分布、高/低峰期），计算切换后的单任务成本。注意：45% 是「最高」降幅，实际增益取决于缓存友好度。<br>③ <b>工作流改造投入</b>：评估是否需要重构 Prompt 结构、任务拆分逻辑以最大化缓存利用率。缓存友好设计本身也是一次产品投入。<br>④ <b>风险与迁移成本</b>：Fable 5.1 的 API 有 breaking changes（媒体已报道三个 API 变更破坏现有代码），需要评估迁移工作量、回退方案和灰度节奏。<br><br><b>PM 结论输出</b>：给出「切换/不切换/有条件切换」的明确建议，附上 ROI 测算和灰度计划。",
      check: [
        "提到真实业务场景 A/B 测试而非只看公开基准",
        "能区分「最高降幅 45%」和「实际降幅取决于缓存友好度」",
        "评估了工作流改造投入（缓存友好设计）",
        "提到 API breaking changes 的迁移风险",
        "给出明确建议+ROI 测算，而非模糊分析"
      ]
    }
  ],
  hints: [
    "Fable 5.1 的三个核心看点",
    "Agent 成本为什么比其他任务高",
    "缓存策略 + 模型路由 + 任务分解 = 三大降本杠杆",
    "OpenAI Agents SDK 生产版有什么新功能",
    "ChatGPT Work 事件触发任务怎么用",
    "AI PM 从功能设计到经济模型设计的进化"
  ],
  tools: [
    {
      id: "tool-004-1",
      name: "OpenAI Agents SDK",
      category: "agent-platform",
      tags: ["openai", "sdk", "multi-agent", "sandbox", "开源", "python"],
      summary: "OpenAI 官方开源的轻量级多 Agent 编排框架，2026 年 9 月发布生产版，新增原生沙箱执行和模型原生 Harness。",
      description: "基于 Agent/Handoff/Guardrail/Tracing 四个核心原语构建。支持 Python 和 TypeScript，内置 7 家沙箱提供商无缝切换，不绑定 OpenAI 模型（支持 100+ LLM），MIT 开源协议。可用于构建生产级的多 Agent 工作流。",
      features: [
        "原生沙箱执行（容器化隔离环境，支持文件操作/命令执行/代码编辑）",
        "模型原生 Harness 与 MCP 协议集成",
        "内置可配置记忆与追踪（Tracing）",
        "支持 7 家沙箱提供商无缝切换",
        "不绑定 OpenAI 模型，支持 100+ LLM",
        "MIT 开源，22k+ Star"
      ],
      whyForPM: "作为 AI PM，理解 Agents SDK 的架构选择（为什么是 4 个原语而非更多？为什么开源且不绑定模型？）能帮你判断 OpenAI 的平台策略，并在自己的产品架构设计中做参考。",
      url: "https://openai.github.io/openai-agents-python/",
      rating: 4
    },
    {
      id: "tool-004-2",
      name: "ChatGPT Work 事件触发任务",
      category: "agent-office",
      tags: ["openai", "chatgpt-work", "事件触发", "webhook", "自动化", "办公"],
      summary: "ChatGPT Work 内置的定时任务升级为事件驱动，支持 Gmail/Slack/GitHub 触发，让 Agent 从被动响应变为主动监听。",
      description: "2026 年 8 月 25 日上线。Plus/Pro 用户可创建基于 Gmail 邮件、Slack 消息、GitHub PR 事件触发的自动化任务。支持 Webhook 触发、筛选条件、共享任务（他人可创建独立副本）。新增网站登录能力，Agent 遇到认证页时转交用户手动操作。",
      features: [
        "Gmail 新邮件触发",
        "Slack 频道消息触发",
        "GitHub Pull Request 活动触发",
        "网站登录人工辅助认证（凭据不对模型暴露）",
        "共享任务机制"
      ],
      whyForPM: "事件触发是 Agent 从「工具」走向「数字员工」的关键一步。PM 应当理解：事件驱动架构让 Agent 从「被使用时才工作」变成「持续监听、按需响应」，这是产品形态的质变。",
      url: "https://chatgpt.com/work",
      rating: 4
    }
  ]
});