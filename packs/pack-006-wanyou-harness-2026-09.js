/* ============================================================
 * 知识包 #006：万有无界公测 + Harness Engineering 深度认知
 * 生成日期：2026-09-04（由教练系统每日联网调研后生成）
 * 信息来源：36氪、证券时报、上海证券报、人人都是产品经理、
 *           杰富瑞研报、AIGC工具导航、钛媒体、CSDN
 * 装载方式：由 packs/manifest.js 登记，index.html 启动时自动装载
 * ============================================================ */
window.registerKnowledgePack({
  id: "pack-006-wanyou-harness-2026-09",
  meta: {
    title: "万有无界公测 + Harness Engineering：AI 产品经理必须掌握的下一套思维框架",
    date: "2026-09-04",
    source: [
      "36氪｜阿里又多了一个Agent赛马",
      "证券时报｜阿里云企业级Agent协作平台「万有无界」开启公测",
      "上海证券报｜杰富瑞实测八款中美主流AI Agent",
      "人人都是产品经理｜AI 办公的产品仗已经打完了",
      "AIGC工具导航｜杰富瑞实测八款AI Agent:千问办公夺冠",
      "钛媒体/AI资本观｜三问AI办公：当智能成为标配，新的稀缺在哪里",
      "CSDN｜Harness Engineering 驾驭工程:2026年AI产品经理最该学的工程思维",
      "人人都是产品经理｜Agent = Model + Harness:理解AI Agent可靠性的关键概念"
    ]
  },
  kb: [
    {
      id: "t1", domain: "trend",
      title: "2026-09-02 大事件：阿里云「万有无界」公测，多Agent协作新范式",
      tags: ["万有无界", "阿里云", "多Agent", "协作", "项目空间", "PMO Agent", "2026-09"],
      body: `<h4>事件概述</h4>
<ul>
<li><b>2026-09-02</b>：阿里云旗下企业级人与Agent协作平台「万有无界」正式开启公测。</li>
<li>定位：<b>多角色Agent协作工作台</b>——不是让一个Agent大包大揽，而是把复杂任务拆解给多位有不同职责的Agent，像人类团队一样协作。</li>
<li>可调用阿里最新旗舰模型 Qwen3.8-Max（CodeArena前端编程榜1691分登顶）。</li>
</ul>
<h4>四大核心功能</h4>
<ol>
<li><b>项目空间</b>：协作的容器，把群聊、成员、资产归拢到同一项目下。每个项目有独立的上下文和权限体系。</li>
<li><b>Agent群聊</b>：多位不同角色的Agent在同一个群聊中围绕任务接力推进。人类可以随时加入或退出群聊。</li>
<li><b>PMO Agent「小有」</b>：内置项目经理Agent，依据SOP模板动态规划任务拆解、分派与进度追踪，充当项目的中枢调度角色。</li>
<li><b>资产库</b>：过程中的产出自动沉淀，成为企业可复用的数字资产。支持知识检索与跨项目复用。</li>
</ol>
<h4>为什么值得关注</h4>
<p>万有无界的存在，补全了阿里AI办公版图的重要一块：</p>
<ul>
<li><b>千问办公</b> → 单人日常办公、文档处理、自动化任务</li>
<li><b>万有无界</b> → 多人+多Agent团队协作、复杂项目交付</li>
<li>阿里用两条产品线并行，一条覆盖「个人效率」，一条覆盖「组织协同」。</li>
</ul>
<div class="callout">💡 PM 视角：万有无界最值得关注的设计决策是「群聊式协作」——它没有把Agent做成后台静默执行，而是放在群聊中让人类可见、可干预。这体现了对"人与Agent协作"而非"Agent替代人"的产品哲学。PMO Agent「小有」作为调度中枢的设计，也值得思考：Agent团队是否需要类似Scrum Master的角色？</div>`
    },
    {
      id: "t2", domain: "trend",
      title: "杰富瑞实测引爆行业认知：Agent = Model + Harness",
      tags: ["杰富瑞", "harness", "千问办公", "模型vs工程", "评测", "产品方法论", "2026-08"],
      body: `<h4>事件回顾</h4>
<p>2026年8月，华尔街投行杰富瑞(Jefferies)对八款中美主流AI Agent进行了五项真实办公任务实测：</p>
<ul>
<li>多文件检索与证据提取</li>
<li>自主联网研究</li>
<li>浏览器操控</li>
<li>PPT制作</li>
<li>多模态内容生成（营销海报）</li>
</ul>
<h4>排行榜（颠覆直觉）</h4>
<table>
<tr><th>排名</th><th>产品</th><th>总分</th><th>背后模型智能分</th></tr>
<tr><td>1</td><td>千问办公（阿里）</td><td>95</td><td>56（第四）</td></tr>
<tr><td>2</td><td>Claude Cowork（Anthropic）</td><td>94</td><td>61（第一）</td></tr>
<tr><td>3</td><td>Codex（OpenAI）</td><td>92</td><td>59（第二）</td></tr>
<tr><td>4</td><td>Kimi Work</td><td>86</td><td>—</td></tr>
<tr><td>5</td><td>豆包办公</td><td>77</td><td>—</td></tr>
<tr><td>6</td><td>MiniMax Code</td><td>71</td><td>—</td></tr>
<tr><td>7</td><td>WorkBuddy（腾讯）</td><td>66</td><td>—</td></tr>
<tr><td>7</td><td>Gemini Spark（谷歌）</td><td>66</td><td>—</td></tr>
</table>
<h4>核心结论：Harness > Model</h4>
<p>杰富瑞分析师在报告中写道：「<b>Harness优势足以弥补模型智能差距</b>。」同一模型换一套Harness班子，实测能差18个百分点。</p>
<p>千问办公的模型智能分仅排第四，但Harness分最高，最终总分95夺冠。WorkBuddy模型不弱，但Harness分在中国Agent中垫底，最终66分。</p>
<div class="callout">💡 PM 金句：模型决定Agent的能力上限，Harness决定Agent的稳定下限。当所有厂商都能租到同样的前沿模型时，Harness就是产品真正的护城河。</div>`
    },
    {
      id: "t3", domain: "trend",
      title: "Harness Engineering 拆解：AI 产品经理必须理解的七大组件",
      tags: ["harness", "架构", "工程思维", "方法论", "产品经理", "组件", "可靠"],
      body: `<h4>什么是 Harness？</h4>
<p>公式：<b>Agent = Model + Harness</b></p>
<p>Harness（驾驭工程/套索）是Agent中除模型外的所有组件：上下文管道、工具调用框架、验证机制、权限控制、可观测性、状态持久化、反馈闭环。2026年行业共识：它已经从「可选优化」上升为「必备工程」。</p>
<h4>七大核心组件（PM视角）</h4>
<ol>
<li><b>上下文管道（Context Pipeline）</b>：Agent如何获取所需信息？RAG、MCP、记忆、实时数据源。设计决策：上下文窗口有限，优先级策略是什么？</li>
<li><b>工具编排（Tool Orchestration）</b>：Agent如何选择和调用工具？并行还是串行？重试策略？超时处理？</li>
<li><b>验证机制（Validation Gates）</b>：Agent的输出是否可信？格式校验、事实核查、合规过滤。是事后检查还是实时拦截？</li>
<li><b>权限控制（Permission Layer）</b>：Agent能访问哪些数据、执行哪些操作？最小权限原则如何落地？敏感操作是否需要人工确认？</li>
<li><b>可观测性（Observability）</b>：Agent为什么这么决策？Trace链路、日志、成本追踪。没有可观测性，Agent就是黑箱。</li>
<li><b>状态持久化（State Persistence）</b>：Agent如何记住跨会话的状态？项目上下文、进度、中间结果。记忆是长期还是短期？</li>
<li><b>反馈闭环（Feedback Loop）</b>：Agent如何从错误中学习？用户反馈如何转化为Prompt改进或Harness调整？</li>
</ol>
<h4>PM 的 Harness 检视清单</h4>
<ul>
<li>☐ 你的Agent产品有没有明确的上下文管理策略？</li>
<li>☐ 工具调用失败时，Agent是优雅降级还是直接崩溃？</li>
<li>☐ 用户能否理解Agent的每一步决策依据？</li>
<li>☐ 敏感操作是否有「人机确认」的兜底机制？</li>
<li>☐ 你的Agent出错了，团队能快速定位到是模型问题还是Harness问题吗？</li>
<li>☐ 你的Agent能否从每次交互中学习和改进？</li>
</ul>
<div class="callout">💡 面试高频题：「你认为AI Agent产品经理和传统PM最大的区别是什么？」——答案方向：传统PM管理确定性功能，Agent PM管理概率性系统；传统PM关注功能列表，Agent PM关注Harness框架（上下文、工具、验证、权限、可观测性、反馈）。</div>`
    },
    {
      id: "t4", domain: "trend",
      title: "产品设计启示：从「单Agent对话」到「多Agent协作」的架构跃迁",
      tags: ["多Agent", "协作", "架构", "产品设计", "万有无界", "群聊", "PMO"],
      body: `<h4>为什么万有无界选择了「群聊」而不是「工作流」？</h4>
<p>目前多Agent协作的主流架构有两种：</p>
<ul>
<li><b>工作流型（Pipeline）</b>：Agent A做完→Agent B做→Agent C做。典型例子：豆包工作的多Agent并行（任务拆解后并行执行再汇总）。</li>
<li><b>群聊型（Collaborative）</b>：多个Agent在共享空间里接力推进，可并行、可串行、可迭代。典型例子：万有无界的项目空间+群聊。</li>
</ul>
<p>万有无界选择群聊型的设计思考：</p>
<ol>
<li><b>可见性</b>：人类在群聊中可以看到每个Agent的中间产出，可以在任何节点介入修正。</li>
<li><b>灵活性</b>：任务拆解不是一次性的，可以在执行过程中动态调整。</li>
<li><b>组织适配</b>：企业的真实工作方式是「项目组+群聊」，而不是「流水线」。</li>
<li><b>SOP沉淀</b>：PMO Agent「小有」可以把成功的协作模式沉淀为模板，下次复用。</li>
</ol>
<h4>对AI产品经理的启示</h4>
<ul>
<li>单Agent产品设计关注的是「对话体验+工具调用」</li>
<li>多Agent产品设计关注的是「角色分工+协作协议+调度策略」</li>
<li>未来的Agent PM需要有「组织设计」的思维——不是设计功能，而是设计团队</li>
</ul>
<div class="callout">💡 思考题：如果让你设计一个面向企业的多Agent产品，你会选择Pipeline架构还是Collaborative架构？决策因素是什么？任务复杂度、错误容忍度、用户角色——不同的场景需要不同的架构选型。</div>`
    }
  ],
  quiz: [
    {
      domain: "trend", type: "single",
      q: "2026年9月2日，阿里云公测的「万有无界」是什么定位的产品？",
      opts: ["单人AI办公助手，替代千问办公", "企业级人与Agent协作平台，多角色Agent在项目空间中协作", "AI模型训练平台", "RPA自动化工具"],
      ans: 1,
      exp: "万有无界是阿里云推出的企业级多角色Agent协作工作台，通过项目空间、群聊、PMO Agent「小有」和资产库，实现复杂项目的多Agent接力交付，与千问办公形成互补。"
    },
    {
      domain: "trend", type: "single",
      q: "杰富瑞实测八款AI Agent的核心结论是什么？",
      opts: ["模型越强，Agent表现越好", "Agent的表现主要由定价决定", "Harness（驾驭工程）比模型智能更关键", "产品的用户量越大，得分越高"],
      ans: 2,
      exp: "千问办公以模型智能分第四（56分）但总分95夺冠，WorkBuddy流量第一但66分垫底，证明决定Agent表现的关键是Harness而非模型。杰富瑞指出同一模型换Harness能差18个百分点。"
    },
    {
      domain: "trend", type: "single",
      q: "以下哪一项不属于Harness Engineering的七大核心组件？",
      opts: ["上下文管道（Context Pipeline）", "工具编排（Tool Orchestration）", "大模型训练策略（Training Strategy）", "反馈闭环（Feedback Loop）"],
      ans: 2,
      exp: "Harness是Agent中除模型外的所有组件，包括上下文管道、工具编排、验证机制、权限控制、可观测性、状态持久化和反馈闭环。大模型训练策略不属于Harness，它属于模型层。"
    }
  ],
  interview: [
    {
      domain: "interview", cat: "前沿真题",
      q: "假设你是一家AI办公创业公司的产品负责人，团队规模30人，预算有限。你需要设计一个多Agent协作产品来服务中小企业的项目管理场景。你会如何设计产品架构？请重点说明你的Harness设计思路。",
      intent: "考察候选人对多Agent产品架构的理解深度，以及Harness Engineering在实际产品设计中的落地能力。",
      ref: "参考框架：<br><b>① 明确产品定位与目标用户</b>：中小企业项目管理场景，团队5-50人，核心痛点是任务分配不透明、进度追踪困难、沟通成本高。<br><b>② 单Agent vs 多Agent选型</b>：选择Collaborative(群聊型)架构，因为中小企业项目协同比Pipeline更灵活。设计3个角色Agent：PM Agent（调度+追踪）、执行Agent（干活）、质检Agent（检查+提醒）。<br><b>③ Harness七大组件设计</b>：<br>— 上下文管道：接入企业已有IM（飞书/企微）+ 项目文件（腾讯文档/飞书文档），通过MCP协议连接。<br>— 工具编排：让PM Agent调用执行Agent，执行Agent调用外部工具（日历、Todo、云盘）。<br>— 验证机制：执行Agent输出须经质检Agent检查，PM Agent做最终确认。<br>— 权限控制：Agent只能读取分配给项目的文件，不能越权访问。敏感操作（删除、修改预算）须人工确认。<br>— 可观测性：每个Agent的决策链路由Trace记录，PM可以在Dashboard上查看进展。<br>— 状态持久化：项目进度、任务状态、中间结果存入项目空间，跨会话持续。<br>— 反馈闭环：用户对Agent输出的「点赞/踩」反馈自动分析，优化Agent行为。<br><b>④ 差异化策略</b>：不做大厂的全栈生态，专注「项目协作」垂直场景。定价按「项目数」而非「人头数」，贴合中小企业需求。",
      check: ["有明确的产品定位和目标用户", "能说出单Agent vs 多Agent的选型理由", "至少覆盖Harness七大组件中的5个以上", "有差异化策略，不是简单复制大厂", "考虑到了预算限制和团队规模约束"]
    }
  ],
  hints: [
    "万有无界四大核心功能：项目空间、Agent群聊、PMO Agent小有、资产库",
    "杰富瑞八款Agent实测排名：千问办公95 > Claude Cowork 94 > Codex 92 > ... WorkBuddy 66",
    "Harness Engineering七大组件：上下文管道、工具编排、验证机制、权限控制、可观测性、状态持久化、反馈闭环",
    "多Agent协作的两种架构：Pipeline（工作流型）vs Collaborative（群聊型）",
    "模型决定能力上限，Harness决定稳定下限",
    "千问办公 vs 万有无界：一个是单人效率工具，一个是团队协作平台"
  ],
  tools: [
    {
      id: "tool-006-01",
      name: "万有无界",
      category: "agent-office",
      tags: ["万有无界", "阿里云", "多Agent", "协作", "项目空间", "PMO"],
      summary: "阿里云企业级人与Agent协作平台，多角色Agent在项目空间中组队完成复杂任务。",
      description: "2026年9月2日公测，定位区别于千问办公的单人效率工具，主打团队级多Agent协作。核心设计：项目空间作为协作容器，Agent群聊接力推进，PMO Agent「小有」调度任务，资产库沉淀知识。可调用Qwen3.8-Max旗舰模型。",
      features: [
        "项目空间：上下文隔离、成员管理、权限控制",
        "Agent群聊：多角色Agent接力推进，人类可随时参与",
        "PMO Agent「小有」：基于SOP模板的任务拆解与调度",
        "资产库：产出自动沉淀，跨项目复用",
        "支持Qwen3.8-Max，CodeArena编程榜1691分"
      ],
      whyForPM: "万有无界是「多Agent协作」产品设计的标杆案例。它的群聊型架构、PMO Agent调度、资产库沉淀等设计决策，对AI产品经理理解Agent团队协作模式有极高的参考价值。面试中谈到多Agent产品时，引用万有无界的架构设计是加分项。",
      url: "https://www.qianwenai.com/agents/wanyou",
      rating: 4.5
    },
    {
      id: "tool-006-02",
      name: "Harness Engineering 方法论（2026核心框架）",
      category: "design",
      tags: ["harness", "方法论", "工程", "架构", "产品经理", "框架"],
      summary: "2026年AI产品经理必须掌握的Harness Engineering框架，源自Google/OpenAI/Anthropic/LangChain等行业实践。",
      description: "Harness Engineering（驾驭工程）是2026年AI领域最重要的工程方法论。核心公式：Agent = Model + Harness。Harness包含上下文管道、工具编排、验证机制、权限控制、可观测性、状态持久化和反馈闭环七大组件。斯坦福Meta-Harness研究发现，仅凭Harness设计的差异，相同模型的表现差距可达6倍。Claude Code的代码体系中仅1.6%是模型交互代码，98.4%是Harness层代码。",
      features: [
        "七大组件覆盖Agent全生命周期",
        "已验证可弥补模型智能差距达18个百分点",
        "适用于任何Agent产品的架构设计",
        "从Prompt Engineering到Context Engineering到Harness Engineering的三段进化"
      ],
      whyForPM: "Harness Engineering是2026年AI产品经理区别于传统PM的核心能力标志。它提供了一套系统化的框架来思考Agent产品的可靠性、安全性和可观测性。面试中能清晰阐述Harness七大组件，说明你具备了AI Agent产品设计的系统思维。",
      url: "https://www.woshipm.com/ai/6361954.html",
      rating: 5.0
    },
    {
      id: "tool-006-03",
      name: "Qwen3.8-Max（阿里旗舰模型）",
      category: "llm-chat",
      tags: ["Qwen", "阿里", "旗舰模型", "编程", "CodeArena", "2026-09"],
      summary: "阿里2026年9月2日更新的旗舰模型，CodeArena前端编程榜1691分登顶，已接入千问办公和万有无界。",
      description: "Qwen3.8-Max 0902版本，参数2.4万亿，支持百万上下文，每百万Tokens均价约5美元。在CodeArena前端编程总榜以1691分登顶，经编程与办公专项后训练。同步应用于千问办公、Qoder、千问App及万有无界平台。",
      features: [
        "CodeArena前端编程榜1691分（第一名）",
        "2.4万亿参数，百万上下文窗口",
        "每百万Tokens均价约5美元",
        "经编程与办公场景专项后训练"
      ],
      whyForPM: "Qwen3.8-Max体现了阿里在模型层的最新进展，但更重要的是——杰富瑞评测中千问办公用这个模型击败了模型更强的Claude Cowork，证明产品Harness比模型更强。这是PM向团队争取「不要只卷模型，要在Harness上投入」的最佳论据。",
      url: "https://tongyi.aliyun.com/qianwen",
      rating: 4.5
    }
  ]
});