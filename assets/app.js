const $=s=>document.querySelector(s);
const fmt=n=>n>=1000?(n/1000).toFixed(1).replace(/\.0$/,'')+'k':n;
const CAT={"recon-osint":"侦察 / OSINT","pentest":"渗透框架","web-security":"Web 安全","vuln-scan":"漏洞扫描","ctf-pwn":"CTF / Pwn","reverse":"逆向工程","exploit":"漏洞利用","malware":"恶意代码","forensics":"取证分析","blue-team":"蓝队防御","password":"密码破解","network":"网络安全","awesome":"精选合集","cloud-sec":"云安全","ai-sec":"AI 安全"};
let TOOLS=[],RES=[],PAPERS=[],ROAD=null;
/* checklist progress (localStorage) */
const store={get(){try{return JSON.parse(localStorage.getItem('csa-checks')||'{}')}catch(e){return{}}},set(v){localStorage.setItem('csa-checks',JSON.stringify(v))}};
function overall(){
  if(!ROAD) return; let tot=0,done=0;
  ROAD.levels.forEach(L=>L.check.forEach((c,i)=>{tot++; if(store.get()[L.id+'-'+i]) done++;}));
  const p=tot?Math.round(done/tot*100):0, fill=Math.round(p/5);
  $('#overall-bar').textContent='['+'█'.repeat(fill)+'░'.repeat(20-fill)+'] '+p+'%  ('+done+'/'+tot+' 项通关标准)';
}
function renderLevels(){
  $('#levels').innerHTML=ROAD.levels.map(L=>`
  <article class="level" id="lv-${L.id}">
    <div class="level-head"><span class="lid">${L.id}</span><h3>${L.name}</h3><span class="len">${L.en}</span><span class="weeks">⏱ ${L.weeks} · ${L.who}</span></div>
    <p class="goal">🎯 ${L.goal}</p>
    <h4>$ cat 知识点.txt</h4><ul>${L.topics.map(t=>`<li>${t}</li>`).join('')}</ul>
    <h4>$ ./实操任务.sh</h4><ul>${L.practice.map(t=>`<li>${t}</li>`).join('')}</ul>
    <h4>$ 通关标准 --check（全勾才算过）</h4>
    <ul class="checks">${L.check.map((c,i)=>{const k=L.id+'-'+i;return `<li><input type="checkbox" id="ck-${k}" data-k="${k}" ${store.get()[k]?'checked':''}><label for="ck-${k}">${c}</label></li>`}).join('')}</ul>
  </article>`).join('');
  document.querySelectorAll('.checks input').forEach(cb=>cb.addEventListener('change',()=>{const s=store.get();s[cb.dataset.k]=cb.checked;store.set(s);overall();}));
  $('#cert-grid').innerHTML=ROAD.certs.map(c=>`<div class="card"><div class="t">🏅 ${c.stage}</div><ul style="margin:4px 0;padding-left:18px">${c.items.map(i=>`<li>${i}</li>`).join('')}</ul></div>`).join('');
  overall();
}
/* tools */
let toolCat='all',toolShown=60;
function renderCats(){
  const cats=['all',...Object.keys(CAT).filter(c=>TOOLS.some(t=>t.category===c))];
  $('#tool-cats').innerHTML=cats.map(c=>`<button class="chip ${c===toolCat?'on':''}" data-c="${c}">${c==='all'?'全部':CAT[c]} (${c==='all'?TOOLS.length:TOOLS.filter(t=>t.category===c).length})</button>`).join('');
  document.querySelectorAll('#tool-cats .chip').forEach(b=>b.onclick=()=>{toolCat=b.dataset.c;toolShown=60;renderCats();renderTools();});
}
function renderTools(){
  const q=($('#tool-q').value||'').toLowerCase(), sort=$('#tool-sort').value;
  let list=TOOLS.filter(t=>(toolCat==='all'||t.category===toolCat)&&(!q||(t.name+' '+t.desc+' '+(t.topics||[]).join(' ')).toLowerCase().includes(q)));
  list.sort((a,b)=>sort==='stars'?b.stars-a.stars:sort==='name'?a.name.localeCompare(b.name):(b.updated||'').localeCompare(a.updated||''));
  $('#tool-count').textContent='共 '+list.length+' 个工具，当前显示 '+Math.min(toolShown,list.length)+' 个';
  $('#tool-more').style.display=list.length>toolShown?'':'none';
  $('#tool-grid').innerHTML=list.slice(0,toolShown).map(t=>`
   <div class="card"><div class="t"><a href="${t.url}" target="_blank" rel="noopener">${t.name}</a></div>
   <div class="d">${t.desc||'（该仓库未填写简介）'}</div>
   <div class="meta"><span class="star">★ ${fmt(t.stars)}</span><span>⑂ ${fmt(t.forks)}</span>${t.lang?`<span class="lang">${t.lang}</span>`:''}<span>${CAT[t.category]||t.category}</span>${t.official?'<span class="tag off">官方组织</span>':''}<span>更新 ${t.updated}</span></div></div>`).join('');
}
/* resources */
function resCard(r){return `<div class="card"><div class="t"><a href="${r.url}" target="_blank" rel="noopener">${r.name}</a></div><div class="d">${r.desc}</div><div class="meta"><span class="region">${r.region==='cn'?'🇨🇳 中文':'🌍 全球'}</span><span class="tag">${r.level}</span>${(r.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('')}</div></div>`}
function renderRes(type){ $('#res-grid').innerHTML=RES.filter(r=>r.type===type).map(resCard).join(''); }
async function init(){
  const [tools,res,papers,road]=await Promise.all(['data/tools.json','data/resources.json','data/papers.json','data/roadmap.json'].map(u=>fetch(u).then(r=>r.json())));
  TOOLS=tools.tools; RES=res; PAPERS=papers; ROAD=road;
  $('#st-tools').textContent=tools.total; $('#st-res').textContent=res.filter(r=>r.type!=='lab').length;
  $('#st-labs').textContent=res.filter(r=>r.type==='lab').length; $('#st-papers').textContent=papers.length;
  renderLevels(); renderCats(); renderTools();
  $('#lab-grid').innerHTML=res.filter(r=>r.type==='lab').map(resCard).join('');
  $('#know-grid').innerHTML=res.filter(r=>r.type==='knowledge').map(resCard).join('');
  renderRes('forum');
  $('#paper-list').innerHTML=papers.map(p=>`<div class="paper"><div class="t"><a href="${p.url}" target="_blank" rel="noopener">${p.title}</a></div><div class="v">${p.venue} · ${p.authors} · 适合 ${p.level}</div><div class="w">为什么读：${p.why}</div></div>`).join('');
  document.querySelectorAll('#res-chips .chip').forEach(b=>b.onclick=()=>{document.querySelectorAll('#res-chips .chip').forEach(x=>x.classList.remove('on'));b.classList.add('on');renderRes(b.dataset.t);});
  $('#tool-q').addEventListener('input',()=>{toolShown=60;renderTools();});
  $('#tool-sort').addEventListener('change',renderTools);
  $('#tool-more').onclick=()=>{toolShown+=60;renderTools();};
}
init().catch(e=>{document.body.insertAdjacentHTML('beforeend','<p style="color:#f87171;padding:20px">数据加载失败：请通过 http(s) 访问本站（GitHub Pages 或本地 python3 -m http.server），不要直接双击文件。</p>');console.error(e)});
/* typing effect */
(()=>{const el=document.getElementById('typed');if(!el)return;const full=el.textContent;let i=0;el.textContent='';const t=setInterval(()=>{el.textContent=full.slice(0,++i);if(i>=full.length)clearInterval(t)},34);})();
