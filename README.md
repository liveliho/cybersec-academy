# CyberSec Academy — 网络安全从入门到精通

> 一套开源、可维护的学习体系：**7 个阶段（L0→L6）× 全球论坛/博客 × GitHub 工具库 × 靶场 × 顶会论文**。
>
> 🌐 在线网站（Linux 终端风）：**https://liveliho.github.io/cybersec-academy/**
>
> ⚠️ 法律红线：所有技术只用于自有设备、靶场与明确授权的测试。未授权入侵违法，先学规则，再学技术。

**当前收录**：GitHub 工具 **253** 个（GitHub API 实抓，数据截至 2026-11-05）· 论坛/博客/知识库 **43** 个 · 靶场 **18** 个 · 论文与顶会入口 **14** 项。

## 🗺️ 学习体系（从入门到精通）

### L0 · 地基层 — BOOT :: 计算机与 Linux 入门（4-6 周）

**适合**：零基础：第一次打开终端的人  
**目标**：先成为一个合格的计算机使用者，再谈安全。这一层不过关，后面全是背命令。

**知识点**
- 计算机组成与操作系统概念：进程/线程/内存/文件系统
- Linux 命令行：文件、权限、管道、grep/awk、SSH、systemd
- 网络第一课：IP、子网、端口、TCP 三次握手（用 Wireshark 抓给自己看）
- 编程起步：Python 基础语法 + 能读懂简单的 C 程序
- 安全伦理与法律：只测自己拥有或明确授权的系统（红线，先于一切技术）

**实操任务**
- [ ] OverTheWire Bandit 0-20 关
- [ ] Linux Journey 全部课程
- [ ] TryHackMe Pre-Security 路径
- [ ] 给自己装一台 Kali / Ubuntu 虚拟机并完成日常操作全命令行化

**通关标准**
- [ ] 能不查资料写出 30 个常用 Linux 命令并解释其作用
- [ ] 能用 Wireshark 抓一次 HTTP 登录并指出账号密码在第几个包
- [ ] 能写一个 Python 脚本批量 ping 一个网段并输出存活主机
- [ ] 能说清授权测试与非法入侵的法律边界

### L1 · 基础层 — FOUNDATION :: 网络 / 系统 / 密码学基础（6-8 周）

**适合**：会用 Linux，想系统入门的人  
**目标**：把协议、系统与密码学的基本功打牢，这是区分『脚本使用者』和『从业者』的分水岭。

**知识点**
- TCP/IP 深入：DNS、DHCP、HTTP/HTTPS、 TLS 握手全流程
- Windows 基础：注册表、服务、域与组策略的第一印象
- Web 原理：Cookie/Session、同源策略、REST、前后端如何交互
- 密码学基础：对称/非对称、哈希、签名、证书体系（能画图讲清）
- 数据库与 SQL 基础：增删改查与权限模型

**实操任务**
- [ ] TryHackMe Jr Penetration Tester 前置模块 / Cyber Security 101
- [ ] Cryptopals 前两组挑战（可选，学有余力）
- [ ] 本地 DVWA + Burp Suite 完成全部低难度模块
- [ ] 用 Python 写一个简易端口扫描器（对照 Nmap 原理）

**通关标准**
- [ ] 能完整画出一次 HTTPS 访问从 DNS 到 TLS 再到 HTTP 的时序
- [ ] 能解释哈希、加密、签名三者的区别与各自用途
- [ ] 能独立用 Burp 抓改包完成一次完整的请求重放
- [ ] SQL 能手写多表查询与常见注入点的成因解释

### L2 · 攻防入门 — OFFENSE-101 :: Web 安全与渗透方法论（8-10 周）

**适合**：基础过关，开始上手攻防的人  
**目标**：以 OWASP Top 10 为主线建立 Web 漏洞的完整认知，并跑通一次标准渗透测试流程。

**知识点**
- 信息收集：子域名、目录、指纹、Google Hacking、OSINT
- OWASP Top 10 逐项原理+利用+修复：注入、XSS、SSRF、访问控制、文件上传…
- 工具链：Nmap、Burp Suite、sqlmap、ffuf/gobuster、Nuclei
- 渗透方法论：PTES / OWASP WSTG 的流程与报告写法
- 提权入门：Linux SUID/cron/内核与 Windows 服务配置错误

**实操任务**
- [ ] PortSwigger Web Security Academy：每类漏洞至少完成 Apprentice+Practitioner 实验
- [ ] OWASP Juice Shop 完成前 3 星全部挑战
- [ ] VulnHub / HTB 各完成 3 台 Easy 靶机并写 WriteUp
- [ ] 用本站工具库自选 10 个工具各完成一次实操并记录命令

**通关标准**
- [ ] 拿到一个授权靶站，能在 2 小时内独立完成侦察→利用→提权→报告
- [ ] 能对每个 Top 10 漏洞讲清成因、利用条件与代码层修复
- [ ] WriteUp 结构完整：复现步骤、证据截图、影响与修复建议齐全

### L3 · 进阶实战 — PRACTITIONER :: 内网 / AD / 蓝队与应急（10-14 周）

**适合**：能独立完成单机渗透，想进企业实战的人  
**目标**：从打靶机升级到打网络：理解企业内网、域环境与防御体系，同时补齐蓝队视角。

**知识点**
- 内网渗透：隧道与代理、横向移动、凭据窃取与 Pass-the-Hash/Ticket
- Active Directory：Kerberos 攻击面、BloodHound 攻击路径分析
- 蓝队基础：日志与 SIEM、Sysmon、流量分析、MITRE ATT&CK 映射
- 应急响应流程：发现→遏制→根除→恢复→复盘，附真实事件案例复盘
- 云安全入门：云厂商 IAM、对象存储与元数据服务的常见错误配置

**实操任务**
- [ ] Hack The Box 完成 5 台 Medium 靶机 + 1 条 Pro Lab / TryHackMe 红队路径
- [ ] LetsDefend / CyberDefenders 各完成 10 个蓝队场景
- [ ] 在本地用 VulFocus 复现 5 个近两年 CVE 并写分析
- [ ] 参加至少 2 场 CTF（CTFtime 报名）并输出赛后复盘

**通关标准**
- [ ] 能用 BloodHound 独立找出一条从普通域用户到域管的路径
- [ ] 拿到一份可疑主机镜像，能按流程完成初步溯源并给出结论
- [ ] 能把一次真实攻击新闻完整映射到 ATT&CK 战术阶段

### L4 · 专精方向 — SPECIALIST :: 选择一条主线深挖（12+ 周）

**适合**：已入行或高阶学习者，开始选方向  
**目标**：精通来自专精。六条主线选一条做主攻、一条做副修，其余保持能对话的程度。

**知识点**
- 二进制方向：逆向工程、Pwn、漏洞挖掘与利用开发（Ghidra/IDA、pwntools、ROP）
- Web 与业务安全深挖：代码审计、逻辑漏洞、API 安全、供应链安全
- 蓝队深挖：威胁狩猎、恶意样本分析、内存取证、检测规则工程（Sigma/YARA）
- 云与云原生安全：Kubernetes 安全、云上攻防、IAM 最小权限体系
- 移动与 IoT 安全：Android/iOS 逆向、固件分析、硬件接口
- AI 安全：LLM 提示注入、模型数据窃取、对抗样本与 AI 系统红队

**实操任务**
- [ ] 主线方向完成一个可展示的项目（如：自研一个小型扫描器 / 一套检测规则库 / 一篇漏洞分析长文）
- [ ] 在 HackerOne / 补天等平台提交第一份真实漏洞报告（授权范围内）
- [ ] 系统阅读主线方向的 10 篇代表论文或长文并写读书笔记

**通关标准**
- [ ] 主线方向能独立解决工作中 80% 的常见问题并指导新人
- [ ] 有一份可公开的产出：报告、文章、工具或规则库
- [ ] 通过一个对口认证或同等难度的实战考核（见下方认证路线）

### L5 · 研究层 — RESEARCH :: 漏洞研究与论文（长期）

**适合**：想做研究、挖 0day 或读博的人  
**目标**：从使用知识到生产知识：读顶会、复现前沿工作、最终产出自己的研究。

**知识点**
- 精读四大顶会（S&P / USENIX Security / CCS / NDSS）近三年论文，建立文献笔记法
- 漏洞挖掘方法论：Fuzzing（AFL++/libFuzzer）、符号执行、静态分析
- 利用开发进阶：堆利用、内核利用、浏览器利用链
- 把复现做成研究：对一篇论文做复现→改进→投稿 workshop 或会议
- 学术写作与披露伦理：负责任披露流程与 CVE 申请

**实操任务**
- [ ] 完成 20 篇顶会论文精读笔记（本站论文区为起点）
- [ ] 用 AFL++ 对一个开源项目完成一次有效 Fuzz 并提交至少 1 个 Issue/Crash 分析
- [ ] 在先知/看雪/Project Zero 风格下发表一篇原创研究长文

**通关标准**
- [ ] 能独立评估一篇新论文的贡献、局限与可复现性
- [ ] 有 CVE、顶会/workshop 论文或高质量公开研究中的任意一项
- [ ] 能给 L2-L4 学习者开一次体系完整的分享

### L6 · 精通层 — MASTERY :: 体系化与领导力（持续精进）

**适合**：资深从业者 / 团队负责人  
**目标**：精通不是会得更多，而是能建立体系：为团队建能力、为行业留资产。

**知识点**
- 安全体系架构：零信任、SDL、DevSecOps 与安全度量
- 攻防体系建设：红蓝队常态化、紫队协作、BAS 持续验证
- 治理与合规：等保、GDPR、ISO 27001 与业务风险的翻译能力
- 技术领导力：技术选型、团队梯队、知识沉淀机制
- 持续跟进：顶会、顶级会议（Black Hat / DEF CON / KCon）与社区贡献

**实操任务**
- [ ] 主导一次完整的企业安全评估或红蓝对抗并沉淀方法论文档
- [ ] 在社区开源一个被真实使用的工具、规则或教程（回馈本站这类资源库）
- [ ] 担任一次 CTF 命题人 / 会议分享嘉宾 / 新人导师

**通关标准**
- [ ] 能独立设计一套与业务匹配的安全建设路线图并落地度量
- [ ] 在行业社区有持续可见的贡献与影响力
- [ ] 带出至少 2 名能独立工作的安全工程师

## 🏅 认证路线（按阶段对位，先会做再考证）

- **L1-L2 入门**：CompTIA Security+（国际通用入门）；eJPT（实操型渗透入门）；国内：CISP-PTE / 网络安全等级测评相关入门证书
- **L2-L3 实战**：HTB CPTS（实操口碑上升中）；PNPT（报告导向的渗透认证）；CEH（知名度高、偏理论，按需选择）
- **L3-L4 进阶**：OSCP（渗透实操的硬通货）；OSWE（Web 利用进阶）；BTL1 / GCIH（蓝队与应急方向）
- **L5-L6 专家**：OSEP / OSCE³（利用开发与免杀进阶）；CISSP（治理与管理方向标杆）；GIAC 高阶系列（GXPN/GREM 等按方向选）

## 🛠️ GitHub 工具库（Top 列表，完整数据见 data/tools.json / 网站）

### 侦察 / OSINT（24）

| 工具 | ★ | 语言 | 简介 |
|---|---:|---|---|
| [sherlock-project/sherlock](https://github.com/sherlock-project/sherlock) | 95619 | Python | Hunt down social media accounts by username across social networks |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | 90156 | TypeScript | Real-time global intelligence dashboard. AI-powered news aggregation, geopolitical monitor |
| [bilawalsidhu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view) | 62758 | JavaScript | A spy satellite simulator in your browser, except the data is real. Live open source spati |
| [soxoj/maigret](https://github.com/soxoj/maigret) | 39670 | Python | 🕵️‍♂️ Collect a dossier on a person by username from 6K websites |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 35578 | Python | 817 structured cybersecurity skills for AI agents · Mapped to 6 frameworks: MITRE ATT&CK,  |
| [lissy93/web-check](https://github.com/lissy93/web-check) | 35361 | TypeScript | 🕵️‍♂️ All-in-one OSINT tool for analysing any website |
| [jivoi/awesome-osint](https://github.com/jivoi/awesome-osint) | 30744 |  | :scream: A curated list of amazingly awesome OSINT |
| [qeeqbox/social-analyzer](https://github.com/qeeqbox/social-analyzer) | 24445 | JavaScript | API, CLI, and Web App for analyzing and finding a person's profile in 1000 social media \  |
| [smicallef/spiderfoot](https://github.com/smicallef/spiderfoot) | 24319 | Python | SpiderFoot automates OSINT for threat intelligence and mapping your attack surface. |
| [gildas-lormeau/SingleFile](https://github.com/gildas-lormeau/SingleFile) | 22830 | JavaScript | Web Extension for saving a faithful copy of a complete web page in a single HTML file |
| [HunxByts/GhostTrack](https://github.com/HunxByts/GhostTrack) | 20419 | Python | Useful tool to track location or mobile number |
| [mxrch/GHunt](https://github.com/mxrch/GHunt) | 19783 | Python | 🕵️‍♂️ Offensive Google framework. |

### 渗透框架（24）

| 工具 | ★ | 语言 | 简介 |
|---|---:|---|---|
| [Hack-with-Github/Awesome-Hacking](https://github.com/Hack-with-Github/Awesome-Hacking) | 124607 |  | A collection of various awesome lists for hackers, pentesters and security researchers |
| [swisskyrepo/PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings) | 82377 | Python | A list of useful payloads and bypass for Web Application Security and Pentest/CTF |
| [usestrix/strix](https://github.com/usestrix/strix) | 73765 | Python | Open-source AI penetration testing tool to find and fix your app’s vulnerabilities. |
| [KeygraphHQ/shannon](https://github.com/KeygraphHQ/shannon) | 51193 | TypeScript | Shannon is an AI pentester for web applications and APIs. It analyzes your source code, id |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 35578 | Python | 817 structured cybersecurity skills for AI agents · Mapped to 6 frameworks: MITRE ATT&CK,  |
| [vxcontrol/pentagi](https://github.com/vxcontrol/pentagi) | 33313 | Go | Fully autonomous AI Agents system capable of performing complex penetration testing tasks |
| [The-Art-of-Hacking/h4cker](https://github.com/The-Art-of-Hacking/h4cker) | 30026 | Jupyter Notebook | This repository is maintained by Omar Santos (@santosomar) and includes thousands of resou |
| [vitalysim/Awesome-Hacking-Resources](https://github.com/vitalysim/Awesome-Hacking-Resources) | 17602 |  | A collection of hacking / penetration testing resources to make you better! |
| [GreyDGL/PentestGPT](https://github.com/GreyDGL/PentestGPT) | 16270 | Python | Automated Penetration Testing Agentic Framework Powered by Large Language Models |
| [Datalux/Osintgram](https://github.com/Datalux/Osintgram) | 15423 | Python | Osintgram is a OSINT tool on Instagram. It offers an interactive shell to perform analysis |
| [maurosoria/dirsearch](https://github.com/maurosoria/dirsearch) | 15043 | Python | Web path scanner |
| [qazbnm456/awesome-web-security](https://github.com/qazbnm456/awesome-web-security) | 14000 | Python | 🐶 A curated list of Web Security materials and resources. |

### Web 安全（11）

| 工具 | ★ | 语言 | 简介 |
|---|---:|---|---|
| [chaitin/SafeLine](https://github.com/chaitin/SafeLine) | 23166 | Go | SafeLine is a self-hosted WAF(Web Application Firewall) / reverse proxy to protect your we |
| [MobSF/Mobile-Security-Framework-MobSF](https://github.com/MobSF/Mobile-Security-Framework-MobSF) | 22133 | Python | Mobile Security Framework (MobSF) is an automated, all-in-one mobile application (Android/ |
| [crowdsecurity/crowdsec](https://github.com/crowdsecurity/crowdsec) | 15458 | Go | Open-source IDS/IPS, WAF and bot detection for Linux, Windows, Docker and Kubernetes, with |
| [Hacker0x01/hacker101](https://github.com/Hacker0x01/hacker101) | 14624 | SCSS | Source code for Hacker101.com - a free online web and mobile security class. |
| [nahamsec/Resources-for-Beginner-Bug-Bounty-Hunters](https://github.com/nahamsec/Resources-for-Beginner-Bug-Bounty-Hunters) | 12315 |  | A list of resources for those interested in getting started in bug bounties |
| [bunkerity/bunkerweb](https://github.com/bunkerity/bunkerweb) | 11220 | Python | 🛡️ Open-source and cloud-native Web Application Firewall (WAF) |
| [infoslack/awesome-web-hacking](https://github.com/infoslack/awesome-web-hacking) | 7345 |  | A list of web application security |
| [vavkamil/awesome-bugbounty-tools](https://github.com/vavkamil/awesome-bugbounty-tools) | 6454 |  | A curated list of various bug bounty tools |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | 5422 | Python | A Claude Code skill bundle for bug hunting and external red-team work - 82 skills, 15 slas |
| [lirantal/awesome-nodejs-security](https://github.com/lirantal/awesome-nodejs-security) | 3057 |  | Awesome Node.js Security resources |
| [palahsu/DDoS-Ripper](https://github.com/palahsu/DDoS-Ripper) | 3015 | Python | DDos Ripper a Distributable Denied-of-Service (DDOS) attack server that cuts off targets o |

### 漏洞扫描（12）

| 工具 | ★ | 语言 | 简介 |
|---|---:|---|---|
| [projectdiscovery/nuclei](https://github.com/projectdiscovery/nuclei) | 32587 | Go | Nuclei is a fast, customizable vulnerability scanner powered by the global security commun |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 24350 | Python | Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security |
| [anchore/grype](https://github.com/anchore/grype) | 13176 | Go | A vulnerability scanner for container images and filesystems |
| [future-architect/vuls](https://github.com/future-architect/vuls) | 12325 | Go | Agent-less vulnerability scanner for Linux, FreeBSD, Container, WordPress, Programming lan |
| [google/osv-scanner](https://github.com/google/osv-scanner) | 11395 | Go | Vulnerability scanner written in Go which uses the data provided by https://osv.dev |
| [NVIDIA/garak](https://github.com/NVIDIA/garak) | 9860 | Python | the LLM vulnerability scanner |
| [google/tsunami-security-scanner](https://github.com/google/tsunami-security-scanner) | 8617 | Java | Tsunami is a general purpose network security scanner with an extensible plugin system for |
| [presidentbeef/brakeman](https://github.com/presidentbeef/brakeman) | 7294 | Ruby | A static analysis security vulnerability scanner for Ruby on Rails applications |
| [OWASP/Nettacker](https://github.com/OWASP/Nettacker) | 5705 | Python | Automated Penetration Testing Framework - Open-Source Vulnerability Scanner - Vulnerabilit |
| [andresriancho/w3af](https://github.com/andresriancho/w3af) | 4910 | Python | w3af: web application attack and audit framework, the open source web vulnerability scanne |
| [mitchellkrogza/nginx-ultimate-bad-bot-blocker](https://github.com/mitchellkrogza/nginx-ultimate-bad-bot-blocker) | 4837 | Shell | Nginx Block Bad Bots, Spam Referrer Blocker, Vulnerability Scanners, User-Agents, Malware, |
| [RetireJS/retire.js](https://github.com/RetireJS/retire.js) | 4203 | JavaScript | scanner detecting the use of JavaScript libraries with known vulnerabilities. Can also gen |

### CTF / Pwn（24）

| 工具 | ★ | 语言 | 简介 |
|---|---:|---|---|
| [x64dbg/x64dbg](https://github.com/x64dbg/x64dbg) | 50202 | C++ | An open-source user mode debugger for Windows. Optimized for reverse engineering and malwa |
| [bee-san/Ciphey](https://github.com/bee-san/Ciphey) | 21741 | Rust | ⚡ Automatically decrypt encryptions without knowing the key or cipher, decode encodings, a |
| [vitalysim/Awesome-Hacking-Resources](https://github.com/vitalysim/Awesome-Hacking-Resources) | 17602 |  | A collection of hacking / penetration testing resources to make you better! |
| [juice-shop/juice-shop](https://github.com/juice-shop/juice-shop) | 14357 | TypeScript | OWASP Juice Shop: Probably the most modern and sophisticated insecure web application |
| [Gallopsled/pwntools](https://github.com/Gallopsled/pwntools) | 13829 | Python | CTF framework and exploit development library |
| [apsdehal/awesome-ctf](https://github.com/apsdehal/awesome-ctf) | 11969 | JavaScript | A curated list of CTF frameworks, libraries, resources and softwares |
| [pwndbg/pwndbg](https://github.com/pwndbg/pwndbg) | 11149 | Python | Exploit Development and Reverse Engineering with GDB & LLDB Made Easy |
| [ctf-wiki/ctf-wiki](https://github.com/ctf-wiki/ctf-wiki) | 9752 | Python | Come and join us, we need you! |
| [hugsy/gef](https://github.com/hugsy/gef) | 8420 | Python | GEF (GDB Enhanced Features) - a modern experience for GDB with advanced debugging capabili |
| [CTFd/CTFd](https://github.com/CTFd/CTFd) | 6897 | Python | CTFs as you need them |
| [DominicBreuker/pspy](https://github.com/DominicBreuker/pspy) | 6234 | Go | Monitor linux processes without root permissions |
| [RPISEC/MBE](https://github.com/RPISEC/MBE) | 6098 | C | Course materials for Modern Binary Exploitation by RPISEC |

### 逆向工程（25）

| 工具 | ★ | 语言 | 简介 |
|---|---:|---|---|
| [Hack-with-Github/Awesome-Hacking](https://github.com/Hack-with-Github/Awesome-Hacking) | 124607 |  | A collection of various awesome lists for hackers, pentesters and security researchers |
| [NationalSecurityAgency/ghidra](https://github.com/NationalSecurityAgency/ghidra) | 97806 | Java | Ghidra is a software reverse engineering (SRE) framework |
| [xtekky/gpt4free](https://github.com/xtekky/gpt4free) | 67005 | Python | The official gpt4free repository / various collection of powerful language models / opus 4 |
| [WerWolv/ImHex](https://github.com/WerWolv/ImHex) | 55750 | C++ | 🔍 A Hex Editor for Reverse Engineers, Programmers and people who value their retinas when  |
| [x64dbg/x64dbg](https://github.com/x64dbg/x64dbg) | 50202 | C++ | An open-source user mode debugger for Windows. Optimized for reverse engineering and malwa |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | 38612 | TypeScript | Clone any website with one command using AI coding agents |
| [librepods-org/librepods](https://github.com/librepods-org/librepods) | 30600 | Kotlin | AirPods liberated from Apple's ecosystem. |
| [iBotPeaches/Apktool](https://github.com/iBotPeaches/Apktool) | 27000 | Java | A tool for reverse engineering Android apk files |
| [radareorg/radare2](https://github.com/radareorg/radare2) | 25315 | C | UNIX-like reverse engineering framework and command-line toolset |
| [rizinorg/cutter](https://github.com/rizinorg/cutter) | 20151 | C++ | Free and Open Source Reverse Engineering Platform powered by rizin |
| [vitalysim/Awesome-Hacking-Resources](https://github.com/vitalysim/Awesome-Hacking-Resources) | 17602 |  | A collection of hacking / penetration testing resources to make you better! |
| [Tyrrrz/YoutubeDownloader](https://github.com/Tyrrrz/YoutubeDownloader) | 16628 | C# | Downloads videos and playlists from YouTube |

### 取证分析（24）

| 工具 | ★ | 语言 | 简介 |
|---|---:|---|---|
| [sherlock-project/sherlock](https://github.com/sherlock-project/sherlock) | 95619 | Python | Hunt down social media accounts by username across social networks |
| [WerWolv/ImHex](https://github.com/WerWolv/ImHex) | 55750 | C++ | 🔍 A Hex Editor for Reverse Engineers, Programmers and people who value their retinas when  |
| [radareorg/radare2](https://github.com/radareorg/radare2) | 25315 | C | UNIX-like reverse engineering framework and command-line toolset |
| [mvt-project/mvt](https://github.com/mvt-project/mvt) | 15733 | Python | MVT (Mobile Verification Toolkit) helps with conducting forensics of mobile devices in ord |
| [prowler-cloud/prowler](https://github.com/prowler-cloud/prowler) | 15169 | Python | This repo hosts Prowler OSS (CLI and Local Server). Prowler is the world’s most widely use |
| [rmusser01/Infosec_Reference](https://github.com/rmusser01/Infosec_Reference) | 6034 | CSS | An Information Security Reference That Doesn't Suck; https://rmusser.net/git/admin-2/Infos |
| [AhmadHassan-BTed/SilentSniffer](https://github.com/AhmadHassan-BTed/SilentSniffer) | 5895 | JavaScript | A professional, high-fidelity de-anonymization and vulnerability diagnostic framework. Fea |
| [volatilityfoundation/volatility3](https://github.com/volatilityfoundation/volatility3) | 4567 | Python | Volatility 3.0 development |
| [jekil/awesome-hacking](https://github.com/jekil/awesome-hacking) | 4060 | Python | Awesome hacking is an awesome collection of hacking tools. |
| [WithSecureOpenSource/chainsaw](https://github.com/WithSecureOpenSource/chainsaw) | 3707 | Rust | Rapidly Search and Hunt through Windows Forensic Artefacts |
| [google/timesketch](https://github.com/google/timesketch) | 3447 | Python | Collaborative forensic timeline analysis |
| [decalage2/oletools](https://github.com/decalage2/oletools) | 3444 | Python | oletools - python tools to analyze MS OLE2 files (Structured Storage, Compound File Binary |

### 蓝队防御（20）

| 工具 | ★ | 语言 | 简介 |
|---|---:|---|---|
| [beenuar/AiSOC](https://github.com/beenuar/AiSOC) | 7222 | Python | Open-source AI Security Operations Center: alert fusion, LLM-agent triage, MITRE ATT&CK in |
| [decalage2/awesome-security-hardening](https://github.com/decalage2/awesome-security-hardening) | 6600 |  | A collection of awesome security hardening guides, tools and other resources |
| [Trusted-AI/adversarial-robustness-toolbox](https://github.com/Trusted-AI/adversarial-robustness-toolbox) | 6298 | Python | Adversarial Robustness Toolbox (ART) - Python Library for Machine Learning Security - Evas |
| [fabacab/awesome-cybersecurity-blueteam](https://github.com/fabacab/awesome-cybersecurity-blueteam) | 5631 |  | :computer:🛡️ A curated collection of awesome resources, tools, and other shiny things for  |
| [A-poc/BlueTeam-Tools](https://github.com/A-poc/BlueTeam-Tools) | 4563 |  | Tools and Techniques for Blue Team / Incident Response |
| [jiwoochris/artex-global](https://github.com/jiwoochris/artex-global) | 2698 | Go | Global edition of ARTEX — an LLM multi-agent autonomous penetration-testing framework. Eng |
| [rabbitstack/fibratus](https://github.com/rabbitstack/fibratus) | 2566 | Go | Security sensor for realtime threat detection and protection |
| [yogsec/Hacking-Tools](https://github.com/yogsec/Hacking-Tools) | 2208 |  | A curated list of 900+ penetration testing and ethical hacking tools. |
| [Bashfuscator/Bashfuscator](https://github.com/Bashfuscator/Bashfuscator) | 2013 | Python | A fully configurable and extendable Bash obfuscation framework. This tool is intended to h |
| [mytechnotalent/Hacking-Windows](https://github.com/mytechnotalent/Hacking-Windows) | 1641 | C | A FREE Windows C development course where we will learn the Win32API and reverse engineer  |
| [Viralmaniar/BigBountyRecon](https://github.com/Viralmaniar/BigBountyRecon) | 1575 | C# | BigBountyRecon tool utilises 58 different techniques using various Google dorks and open s |
| [ION28/BLUESPAWN](https://github.com/ION28/BLUESPAWN) | 1349 | C++ | An Active Defense and EDR software to empower Blue Teams |

### 密码破解（1）

| 工具 | ★ | 语言 | 简介 |
|---|---:|---|---|
| [GhostTroops/scan4all](https://github.com/GhostTroops/scan4all) | 6191 | Go | Official repository  vuls Scan: 15000+PoCs; 23 kinds of application password crack; 7000+W |

### 网络安全（25）

| 工具 | ★ | 语言 | 简介 |
|---|---:|---|---|
| [gojue/ecapture](https://github.com/gojue/ecapture) | 15531 | C | Capture SSL/TLS plaintext with eBPF—no MITM proxy or custom CA installation. Supports Linu |
| [owasp-amass/amass](https://github.com/owasp-amass/amass) | 15464 | Go | In-depth attack surface mapping and asset discovery |
| [txthinking/brook](https://github.com/txthinking/brook) | 15191 | Go | A cross-platform programmable network tool |
| [secdev/scapy](https://github.com/secdev/scapy) | 12674 | Python | Scapy: the Python-based interactive packet manipulation program & library. |
| [vanhauser-thc/thc-hydra](https://github.com/vanhauser-thc/thc-hydra) | 12460 | C | hydra |
| [kubeshark/kubeshark](https://github.com/kubeshark/kubeshark) | 12130 | Go | eBPF-powered network observability for Kubernetes. Indexes L4/L7 traffic with full K8s con |
| [telekom-security/tpotce](https://github.com/telekom-security/tpotce) | 9694 | Shell | 🍯 T-Pot - The All In One Multi Honeypot Platform 🐝 |
| [firezone/firezone](https://github.com/firezone/firezone) | 9165 | Elixir | Blazing-fast remote access |
| [aceberg/WatchYourLAN](https://github.com/aceberg/WatchYourLAN) | 7654 | Go | Lightweight network IP scanner written in Go. With notifications, history, export to Grafa |
| [netalertx/NetAlertX](https://github.com/netalertx/NetAlertX) | 7365 | Python | Centralized network visibility and continuous asset discovery.  Monitor devices, detect ch |
| [urbanadventurer/WhatWeb](https://github.com/urbanadventurer/WhatWeb) | 6985 | Ruby | Next generation web scanner |
| [infinition/Bjorn](https://github.com/infinition/Bjorn) | 6360 | Python | Bjorn is a powerful network scanning and offensive security tool for the Raspberry Pi with |

### 精选合集（2）

| 工具 | ★ | 语言 | 简介 |
|---|---:|---|---|
| [Hack-with-Github/Awesome-Hacking](https://github.com/Hack-with-Github/Awesome-Hacking) | 124607 |  | A collection of various awesome lists for hackers, pentesters and security researchers |
| [sbilly/awesome-security](https://github.com/sbilly/awesome-security) | 15067 |  | A collection of awesome software, libraries, documents, books, resources and cools stuffs  |

### 漏洞利用（25）

| 工具 | ★ | 语言 | 简介 |
|---|---:|---|---|
| [The-Art-of-Hacking/h4cker](https://github.com/The-Art-of-Hacking/h4cker) | 30026 | Jupyter Notebook | This repository is maintained by Omar Santos (@santosomar) and includes thousands of resou |
| [vitalysim/Awesome-Hacking-Resources](https://github.com/vitalysim/Awesome-Hacking-Resources) | 17602 |  | A collection of hacking / penetration testing resources to make you better! |
| [Gallopsled/pwntools](https://github.com/Gallopsled/pwntools) | 13829 | Python | CTF framework and exploit development library |
| [edoardottt/awesome-hacker-search-engines](https://github.com/edoardottt/awesome-hacker-search-engines) | 11467 | Shell | A curated list of awesome search engines useful during Penetration testing, Vulnerability  |
| [friuns2/BlackFriday-GPTs-Prompts](https://github.com/friuns2/BlackFriday-GPTs-Prompts) | 9873 |  | List of free GPTs that doesn't require plus subscription  |
| [frohoff/ysoserial](https://github.com/frohoff/ysoserial) | 9096 | Java | A proof-of-concept tool for generating payloads that exploit unsafe Java object deserializ |
| [SecWiki/windows-kernel-exploits](https://github.com/SecWiki/windows-kernel-exploits) | 8765 | C | windows-kernel-exploits   Windows平台提权漏洞集合 |
| [hugsy/gef](https://github.com/hugsy/gef) | 8420 | Python | GEF (GDB Enhanced Features) - a modern experience for GDB with advanced debugging capabili |
| [trickest/cve](https://github.com/trickest/cve) | 8183 | HTML | Gather and update all available and newest CVEs with their PoC. |
| [nomi-sec/PoC-in-GitHub](https://github.com/nomi-sec/PoC-in-GitHub) | 8177 |  | 📡 PoC auto collect from GitHub. ⚠️ Be careful Malware. |
| [yaklang/yakit](https://github.com/yaklang/yakit) | 7857 | TypeScript | Cyber Security ALL-IN-ONE Platform |
| [Mr-xn/Penetration_Testing_POC](https://github.com/Mr-xn/Penetration_Testing_POC) | 7561 | HTML | 渗透测试有关的POC、EXP、脚本、提权、小工具等---About penetration-testing python-script poc getshell csrf xss  |

### 恶意代码分析（22）

| 工具 | ★ | 语言 | 简介 |
|---|---:|---|---|
| [StevenBlack/hosts](https://github.com/StevenBlack/hosts) | 31392 | Python | 🔒 Consolidating and extending hosts files from several well-curated sources. Optionally pi |
| [hagezi/dns-blocklists](https://github.com/hagezi/dns-blocklists) | 28184 | Text | DNS-Blocklists: For a better internet - keep the internet clean! |
| [vxunderground/MalwareSourceCode](https://github.com/vxunderground/MalwareSourceCode) | 18891 | Assembly | Collection of malware source code for a variety of platforms in an array of different prog |
| [vitalysim/Awesome-Hacking-Resources](https://github.com/vitalysim/Awesome-Hacking-Resources) | 17602 |  | A collection of hacking / penetration testing resources to make you better! |
| [mytechnotalent/Reverse-Engineering](https://github.com/mytechnotalent/Reverse-Engineering) | 15101 | Assembly | A FREE comprehensive reverse engineering tutorial covering x86, x64, 32-bit/64-bit ARM, 8- |
| [wifiphisher/wifiphisher](https://github.com/wifiphisher/wifiphisher) | 14939 | Python | The Rogue Access Point Framework |
| [ytisf/theZoo](https://github.com/ytisf/theZoo) | 13542 | Python | A repository of LIVE malwares for your own joy and pleasure. theZoo is a project created t |
| [screetsec/TheFatRat](https://github.com/screetsec/TheFatRat) | 11580 | C | Thefatrat a massive exploiting tool : Easy tool to generate backdoor and easy tool to post |
| [stamparm/maltrail](https://github.com/stamparm/maltrail) | 8652 | Python | Malicious traffic detection system |
| [bee-san/pyWhat](https://github.com/bee-san/pyWhat) | 7342 | Python | 🐸   Identify anything. pyWhat easily lets you identify emails, IP addresses, and more. Fee |
| [ayoubfaouzi/al-khaser](https://github.com/ayoubfaouzi/al-khaser) | 7175 | C++ | Public malware techniques used in the wild: Virtual Machine, Emulation, Debuggers, Sandbox |
| [qilingframework/qiling](https://github.com/qilingframework/qiling) | 6165 | Python | A True Instrumentable Binary Emulation Framework |

### 云安全（21）

| 工具 | ★ | 语言 | 简介 |
|---|---:|---|---|
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | 35578 | Python | 817 structured cybersecurity skills for AI agents · Mapped to 6 frameworks: MITRE ATT&CK,  |
| [wazuh/wazuh](https://github.com/wazuh/wazuh) | 17567 | C++ | Wazuh - The Open Source Security Platform. Unified XDR and SIEM protection for endpoints a |
| [madhuakula/kubernetes-goat](https://github.com/madhuakula/kubernetes-goat) | 5935 | HTML | Kubernetes Goat is a "Vulnerable by Design" cluster environment to learn and practice Kube |
| [Hacking-the-Cloud/hackingthe.cloud](https://github.com/Hacking-the-Cloud/hackingthe.cloud) | 2793 | Dockerfile | An encyclopedia for offensive and defensive security knowledge in cloud native technologie |
| [BishopFox/cloudfox](https://github.com/BishopFox/cloudfox) | 2618 | Go | Automating situational awareness for cloud penetration tests. |
| [4ndersonLin/awesome-cloud-security](https://github.com/4ndersonLin/awesome-cloud-security) | 2514 |  | 🛡️ Awesome Cloud Security Resources ⚔️ |
| [DataDog/stratus-red-team](https://github.com/DataDog/stratus-red-team) | 2443 | Go | :cloud: :zap: Granular, Actionable Adversary Emulation for the Cloud |
| [salesforce/cloudsplaining](https://github.com/salesforce/cloudsplaining) | 2258 | JavaScript | Cloudsplaining is an AWS IAM Security Assessment tool that identifies violations of least  |
| [teamssix/awesome-cloud-security](https://github.com/teamssix/awesome-cloud-security) | 2127 |  | awesome cloud security 收集一些国内外不错的云安全资源，该项目主要面向国内的安全人员 |
| [fwdcloudsec/granted](https://github.com/fwdcloudsec/granted) | 1811 | Go | The easiest way to access AWS. |
| [matanolabs/matano](https://github.com/matanolabs/matano) | 1708 | Rust | Open source security data lake for threat hunting, detection & response, and cybersecurity |
| [chaitin/veinmind-tools](https://github.com/chaitin/veinmind-tools) | 1653 | Go | veinmind-tools 是由长亭科技自研，基于 veinmind-sdk 打造的容器安全工具集 |

### AI 安全（24）

| 工具 | ★ | 语言 | 简介 |
|---|---:|---|---|
| [usestrix/strix](https://github.com/usestrix/strix) | 73765 | Python | Open-source AI penetration testing tool to find and fix your app’s vulnerabilities. |
| [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) | 43381 | Python | Independent Auditing of AI Agents. Run by human or the agent itself, to answer the most cr |
| [NVIDIA/garak](https://github.com/NVIDIA/garak) | 9860 | Python | the LLM vulnerability scanner |
| [NVIDIA-NeMo/Guardrails](https://github.com/NVIDIA-NeMo/Guardrails) | 7434 | Python | NeMo Guardrails is an open-source toolkit for easily adding programmable guardrails to LLM |
| [Tencent/AI-Infra-Guard](https://github.com/Tencent/AI-Infra-Guard) | 7379 | Python | A full-stack AI Red Teaming platform securing AI ecosystems via Agent Scan, Skills Scan, M |
| [Giskard-AI/giskard-oss](https://github.com/Giskard-AI/giskard-oss) | 5946 | Python | 🐢 Open-Source Evaluation & Testing library for LLM Agents |
| [awarexone/Agentic-Bug-Hunter](https://github.com/awarexone/Agentic-Bug-Hunter) | 5610 | Python | AI-powered bug bounty hunting toolkit that works with or without subscription. |
| [nolabs-ai/nono](https://github.com/nolabs-ai/nono) | 4843 | Rust | agent runtime security - zero trust, zero setup, zero latency agent sandboxing |
| [verazuo/jailbreak_llms](https://github.com/verazuo/jailbreak_llms) | 3877 | Jupyter Notebook | [CCS'24] A dataset consists of 15,140 ChatGPT prompts from Reddit, Discord, websites, and  |
| [hemansnation/AI-Engineer-Headquarters](https://github.com/hemansnation/AI-Engineer-Headquarters) | 3779 | Jupyter Notebook | A collection of scientific methods, processes, algorithms, and systems to build stories &  |
| [CyberStrikeus/CyberStrike](https://github.com/CyberStrikeus/CyberStrike) | 3382 | TypeScript | Open-source AI-powered offensive security harness for automated penetration testing. |
| [qybaihe/bla](https://github.com/qybaihe/bla) | 2247 | TypeScript | 🛡️ BLA (Blind LLM Agents) — Adversarial defense shield that protects binaries, Electron ap |

## 💬 全球论坛与社区（14）

- [r/netsec](https://www.reddit.com/r/netsec/) — 全球最活跃的安全研究社区之一，只收技术干货、研究与工具发布，灌水会被删（全球 · L2-L6）
- [Information Security Stack Exchange](https://security.stackexchange.com/) — 问答式社区，问题质量高，适合查一个具体概念为什么这样设计（全球 · L1-L6）
- [r/cybersecurity](https://www.reddit.com/r/cybersecurity/) — 偏职业与行业讨论：转型、认证、蓝队日常（全球 · L0-L3）
- [0x00sec](https://0x00sec.org/) — 老牌英文技术论坛，逆向、恶意代码与漏洞利用氛围浓（全球 · L3-L6）
- [Hack The Box Forum](https://forum.hackthebox.com/) — HTB 官方论坛，退役靶机讨论与学习路线交流（全球 · L2-L5）
- [Hacker News (YC)](https://news.ycombinator.com/) — 安全事件与论文常在这里首发讨论，信息密度极高（全球 · L2-L6）
- [Bugcrowd Forum / HackerOne Hacktivity](https://hackerone.com/hacktivity) — 真实漏洞披露报告库：看高手怎么写报告、厂商怎么定级（全球 · L3-L5）
- [看雪安全社区](https://bbs.kanxue.com/) — 国内逆向与二进制安全的标杆论坛，精华帖与 KCTF 质量极高（中文 · L3-L6）
- [吾爱破解](https://www.52pojie.cn/) — 软件安全与病毒分析老牌论坛，新手教程与工具区对入门友好（中文 · L0-L4）
- [先知社区](https://xz.aliyun.com/) — 阿里云主办，Web/二进制/渗透实战文章密度高，国内一线水平（中文 · L2-L5）
- [FreeBuf](https://www.freebuf.com/) — 国内最大的安全媒体+社区，资讯、专栏与活动齐全（中文 · L0-L4）
- [安全客](https://www.anquanke.com/) — 漏洞情报与研究文章见长，事件时间线整理清楚（中文 · L1-L5）
- [奇安信攻防社区](https://forum.butian.net/) — 补天平台配套社区，攻防与应急响应实战帖多（中文 · L2-L5）
- [i春秋论坛](https://www.ichunqiu.com/) — 老牌在线学习与竞赛社区，课程+靶场一体（中文 · L0-L3）

## 📰 博客 / 媒体 / 安全实验室（15）

- [PortSwigger Research](https://portswigger.net/research) — Burp 团队的研究博客，Web 安全前沿手法的源头之一（全球 · L3-L6）
- [Google Project Zero](https://projectzero.google/) — 顶级漏洞研究团队博客，0day 分析的写法范本（全球 · L4-L6）
- [Krebs on Security](https://krebsonsecurity.com/) — 调查记者视角的网络犯罪报道，理解真实攻击产业链必读（全球 · L1-L5）
- [Schneier on Security](https://www.schneier.com/) — Bruce Schneier 的安全评论，练安全思维与政策视角（全球 · L1-L6）
- [The Hacker News](https://thehackernews.com/) — 更新最快的英文安全新闻站之一（全球 · L0-L4）
- [BleepingComputer](https://www.bleepingcomputer.com/) — 勒索与恶意软件事件报道快而全（全球 · L1-L4）
- [Troy Hunt's Blog](https://www.troyhunt.com/) — Have I Been Pwned 作者，数据泄露与 Web 安全科普标杆（全球 · L1-L4）
- [Daniel Miessler](https://danielmiessler.com/) — Unsupervised Learning 作者，安全+AI 的长期深度输出（全球 · L2-L6）
- [Microsoft Security Blog](https://www.microsoft.com/en-us/security/blog/) — 微软官方威胁情报与 AD/云安全一手资料（全球 · L2-L5）
- [Google Security Blog](https://security.googleblog.com/) — Google 官方安全工程与研究发布（全球 · L2-L5）
- [Cloudflare Security Blog](https://blog.cloudflare.com/tag/security/) — 边缘网络、DDoS、BGP 与协议安全的大厂实战（全球 · L2-L5）
- [Trail of Bits Blog](https://blog.trailofbits.com/) — 顶级安全咨询公司的审计与工具研究博客（全球 · L3-L6）
- [腾讯玄武实验室](https://xlab.tencent.com/) — 国内一线实验室，移动与系统漏洞研究（中文 · L3-L6）
- [Seebug Paper](https://paper.seebug.org/) — 知道创宇的论文式文章站，漏洞分析长文质量高（中文 · L2-L5）
- [长亭科技安全实验室](https://research.chaitin.cn/) — 长亭研究团队博客，攻防与产品研究结合（中文 · L2-L5）

## 🎯 靶场与实训平台（18）

- [TryHackMe](https://tryhackme.com/) — 对新手最友好的 guided 靶场，Pre-Security 路径是公认起点（全球 · L0-L3）
- [Hack The Box](https://www.hackthebox.com/) — 全球最知名的实战靶场，Academy 学体系、Labs 练机器（全球 · L2-L6）
- [PortSwigger Web Security Academy](https://portswigger.net/web-security) — 免费的 Web 安全学院，每个漏洞类别都有讲解+在线实验，金标准（全球 · L1-L4）
- [OverTheWire](https://overthewire.org/wargames/) — Bandit 是练 Linux 命令行最好的闯关游戏，没有之一（全球 · L0-L2）
- [picoCTF](https://picoctf.org/) — 卡内基梅隆出品，面向初学者的 CTF 平台，常年可练（全球 · L0-L2）
- [CTFtime](https://ctftime.org/) — 全球 CTF 赛事日历与排名，想打比赛先看这里（全球 · L2-L6）
- [Root Me](https://www.root-me.org/) — 法语区老牌挑战站，题目量大、类别全（全球 · L1-L4）
- [PentesterLab](https://pentesterlab.com/) — 小而精的 Web 渗透系统课，付费但口碑极佳（全球 · L2-L4）
- [VulnHub](https://www.vulnhub.com/) — 可下载的虚拟机靶机库，本地离线练提权与内网（全球 · L2-L4）
- [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/) — 最现代的故意漏洞电商应用，本地跑、配官方攻略学 Web（全球 · L1-L3）
- [DVWA](https://github.com/digininja/DVWA) — 经典的 PHP 漏洞练习应用，入门 Web 漏洞的第一站（全球 · L1-L2）
- [LetsDefend](https://letsdefend.io/) — 模拟 SOC 分析师日常的在线蓝队靶场（全球 · L2-L4）
- [CyberDefenders](https://cyberdefenders.org/) — 蓝队取证与威胁狩猎挑战库（全球 · L2-L5）
- [Blue Team Labs Online](https://blueteamlabs.online/) — 蓝队专项训练平台，应急与日志分析题目多（全球 · L2-L4）
- [BUUCTF](https://buuoj.cn/) — 国内最常用的 CTF 练习平台，题库巨大且免费（中文 · L1-L4）
- [攻防世界 XCTF](https://adworld.xctf.org.cn/) — 国内老牌 CTF 平台，新手区与赛事区齐全（中文 · L1-L4）
- [NSSCTF](https://www.nssctf.cn/) — 国内活跃 CTF 平台，题目更新快、社区氛围好（中文 · L1-L4）
- [VulFocus](https://fofapro.github.io/vulfocus/) — 一键 Docker 漏洞环境集成平台，复现 CVE 最方便的国产工具（中文 · L2-L4）

## 📚 知识体系与权威手册（14）

- [OWASP](https://owasp.org/) — 开放 Web 应用安全项目：Top 10、ASVS、Cheat Sheet 系列的总源头（全球 · L1-L5）
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) — 每个主题一页的防御速查手册，写代码与做审计时随手查（全球 · L1-L5）
- [MITRE ATT&CK](https://attack.mitre.org/) — 真实攻击者战术技术的百科全书，攻防双方共同语言（全球 · L2-L6）
- [NVD 国家漏洞库](https://nvd.nist.gov/) — CVE 的官方评分与详情库，查漏洞先来这里核对（全球 · L1-L6）
- [CTF Wiki](https://ctf-wiki.org/) — 中文 CTF 知识总站，Web/Pwn/逆向/密码/取证系统化整理（中文 · L1-L5）
- [Hello-CTF](https://hello-ctf.com/) — 面向零基础的中文 CTF 开源教程，配套题目齐全（GitHub 4k+ 星）（中文 · L0-L2）
- [HackTricks](https://book.hacktricks.xyz/) — 渗透技法大全，红队查手册的第一选择，持续更新（全球 · L2-L5）
- [PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings) — 各类漏洞 Payload 与绕过技巧合集，实战必备（全球 · L2-L5）
- [GTFOBins](https://gtfobins.github.io/) — Linux 提权速查：每个二进制能怎么被滥用都列好了（全球 · L2-L4）
- [Exploit-DB](https://www.exploit-db.com/) — OffSec 维护的公开 Exploit 档案库，配合 searchsploit 本地用（全球 · L2-L6）
- [CWE 弱点枚举](https://cwe.mitre.org/) — 漏洞的病理学：按弱点类型理解成因，而不是只记利用（全球 · L2-L5）
- [NIST 网络安全框架 CSF](https://www.nist.gov/cyberframework) — 企业安全治理的事实标准框架，做防御体系绕不开（全球 · L3-L6）
- [Cryptopals](https://cryptopals.com/) — 用编程闯关的方式学应用密码学，学完能看懂真实协议漏洞（全球 · L2-L4）
- [Linux Journey](https://linuxjourney.com/) — 免费交互式 Linux 入门课，零基础第一站（全球 · L0-L1）

## 📄 论文与研究（14）

- [Tor: The Second-Generation Onion Router](https://www.usenix.org/conference/13th-usenix-security-symposium/tor-second-generation-onion-router) — USENIX Security 2004，Dingledine, Mathewson, Syverson。为什么读：匿名通信的奠基论文，理解洋葱路由与隐私设计的起点（L3）
- [Bro: A System for Detecting Network Intruders in Real-Time (Zeek 前身)](https://www.usenix.org/conference/usenix-security-98/bro-system-detecting-network-intruders-real-time) — USENIX Security 1998，Vern Paxson。为什么读：网络入侵检测的开山之作，今天的 Zeek 源于此（L3）
- [Dynamic Taint Analysis for Automatic Detection, Analysis, and Signature Generation of Exploits](https://www.ndss-symposium.org/ndss2005/) — NDSS 2005，Newsome & Song。为什么读：污点分析自动检测利用的经典，程序分析方向必读（L4）
- [Deep Learning with Differential Privacy](https://arxiv.org/abs/1607.00133) — ACM CCS 2016，Abadi et al. (Google)。为什么读：差分隐私进入深度学习的里程碑，AI 隐私方向起点（L4）
- [Membership Inference Attacks Against Machine Learning Models](https://arxiv.org/abs/1610.05820) — IEEE S&P 2017，Shokri et al.。为什么读：成员推断攻击开山作，理解模型本身也是攻击面（L4）
- [Towards Evaluating the Robustness of Neural Networks (C&W Attack)](https://arxiv.org/abs/1608.04644) — IEEE S&P 2017，Carlini & Wagner。为什么读：对抗样本评估的方法论标杆，安全论文引用王之一（L4）
- [Meltdown: Reading Kernel Memory from User Space](https://arxiv.org/abs/1801.01207) — USENIX Security 2018，Lipp et al.。为什么读：瞬态执行侧信道时代的开端，硬件安全必读（L5）
- [Spectre Attacks: Exploiting Speculative Execution](https://arxiv.org/abs/1801.01203) — IEEE S&P 2019，Kocher et al.。为什么读：与 Meltdown 同期改变 CPU 安全格局的论文（L5）
- [Reflections on Trusting Trust](https://dl.acm.org/doi/10.1145/358198.358210) — ACM Turing Award Lecture 1984，Ken Thompson。为什么读：供应链与信任根的思想源头，安全从业者的哲学课（L2）
- [Smashing the Stack for Fun and Profit](http://phrack.org/issues/49/15.html) — Phrack 49, 1996，Aleph One。为什么读：栈溢出的启蒙文献，二进制方向人人读过的第一篇（L2）
- [Top-100 Security Papers (Normalized Ranking)](https://mlsec.org/topnotch/sec_ntop100.html) — 持续更新榜单，TU Berlin MLSEC。为什么读：按引用与年份归一化的安全论文总榜，精通阶段的阅读地图（L5）
- [arXiv cs.CR (Cryptography and Security)](https://arxiv.org/list/cs.CR/recent) — 预印本速递，arXiv。为什么读：最新研究先在这里出现，养成每周扫一遍的习惯（L4）
- [IACR ePrint Archive](https://eprint.iacr.org/) — 密码学预印本库，IACR。为什么读：密码学论文的官方集散地，做密码方向绕不开（L4）
- [四大顶会入口：IEEE S&P / USENIX Security / ACM CCS / NDSS](https://www.ndss-symposium.org/) — Security Big-4，—。为什么读：安全研究的四大顶会，精通阶段的目标与阅读主线；历年论文均官网公开（L5）

## 🔧 维护方式（这是一个活的工程）

```
data/tools.json      # python3 scripts/collect_tools.py 一键从 GitHub API 刷新（可设 GITHUB_TOKEN 提速）
data/resources.json  # 论坛/博客/靶场/知识库，人工核验后增删
data/roadmap.json    # 学习体系与认证路线
data/papers.json     # 论文清单
index.html + assets/ # 纯静态站，改数据即可改网站，无构建步骤
```

贡献要求：官网链接 + 一句真实说明 + 适用阶段（L0-L6）；工具只收 GitHub 上真实存在、非 fork、未归档的仓库。详见 CONTRIBUTING.md。

## 📜 许可
本站原创内容 MIT 许可；所链接的第三方资源版权归其各自作者/机构所有。
