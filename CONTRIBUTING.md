# 贡献指南
1. 论坛/博客/靶场/知识库 → 编辑 `data/resources.json`（字段：name/url/desc/type/region/level/tags）
2. 论文 → 编辑 `data/papers.json`（须给出处与「为什么读」）
3. 学习体系 → 编辑 `data/roadmap.json`（每级须含 topics/practice/check 三件套）
4. 工具 → 不要手改 `data/tools.json`，运行 `python3 scripts/collect_tools.py` 从 GitHub API 刷新；想加分类就改脚本里的 CATEGORIES
5. 提交前本地验证：`python3 -m http.server 8000` 打开网站，确认对应板块正常渲染、无横向溢出
6. 所有链接必须是官网/官方仓库；禁止未授权攻击教程、禁止来路不明的「黑客工具包」下载站
