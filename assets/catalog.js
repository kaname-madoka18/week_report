const CATALOG=JSON.parse(document.getElementById('catalog-data').textContent);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const home=document.getElementById('home'),viewer=document.getElementById('viewer'),frame=document.getElementById('page-frame'),pageSelect=document.getElementById('page-select');
const stateLabels={ready:'已有视频预览',partial:'部分资源可预览',unavailable:'暂无公开视频预览',reused:'复用已核验预览',pending:'整理中'};
const pageMap=new Map(CATALOG.pages.map(p=>[p.path,p]));
for(const p of CATALOG.pages){const o=document.createElement('option');o.value=p.path;o.textContent=p.title+(p.kind==='source'?' · 源网页':'');pageSelect.append(o)}
function openPage(path,push=true){const target=pageMap.get(path);if(!target){showHome(push);return}home.hidden=true;viewer.hidden=false;frame.src=target.path;pageSelect.value=path;document.getElementById('standalone').href=target.path;document.getElementById('current-page').textContent=target.title;if(push)history.pushState(null,'','?page='+encodeURIComponent(path));window.scrollTo(0,0)}
function showHome(push=true){viewer.hidden=true;home.hidden=false;frame.src='about:blank';document.getElementById('current-page').textContent=CATALOG.stats.papers+' 篇论文 · 数据概览与预览';if(push)history.pushState(null,'',location.pathname);window.scrollTo(0,0)}
document.querySelectorAll('[data-home]').forEach(el=>el.onclick=e=>{e.preventDefault();showHome()});
pageSelect.onchange=()=>openPage(pageSelect.value);
window.addEventListener('message',event=>{
  if(event.source!==frame.contentWindow||viewer.hidden)return;
  if(event.data?.type==='dataset-catalog-home'){showHome();return}
  if(event.data?.type!=='dataset-catalog-page')return;
  event.source?.postMessage({type:'dataset-catalog-ready'},'*');
  const page=pageMap.get(event.data.path);if(!page)return;
  pageSelect.value=page.path;document.getElementById('standalone').href=page.path;document.getElementById('current-page').textContent=page.title;history.replaceState(null,'','?page='+encodeURIComponent(page.path));
});
document.addEventListener('click',e=>{const link=e.target.closest('a[data-page]');if(!link||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||e.button!==0)return;e.preventDefault();openPage(link.dataset.page)});
window.addEventListener('popstate',()=>{const p=new URLSearchParams(location.search).get('page');p?openPage(p,false):showHome(false)});
const categories=[...new Set(CATALOG.projects.filter(x=>x.category).map(x=>x.category))].sort();
for(const c of categories){const o=document.createElement('option');o.value=c;o.textContent=c;document.getElementById('category-filter').append(o)}
function formatDate(value){return value?String(value).replaceAll('/','-').slice(0,10):'未取得'}
function paperMetaMarkup(p){
  const m=p.paper_metadata||{};
  if(!Object.keys(m).length)return '';
  const citation=typeof m.citation_count==='number'?m.citation_count.toLocaleString():'暂未取得';
  const stars=typeof m.github_stars==='number'?m.github_stars.toLocaleString():'—';
  const scope=p.relation_level?'<span class="meta-status"><b>关联</b> '+esc(p.relation_level)+'</span>':'';
  return '<div class="card-paper-meta"><span><b>arXiv</b> '+esc(formatDate(m.arxiv_published_at))+'</span><span><b>引用</b> '+esc(citation)+'</span><span><b>Stars</b> '+esc(stars)+'</span><span class="meta-status"><b>状态</b> '+esc(m.status_label||'未检索到公开会议状态')+'</span>'+scope+'<small>动态数据更新于 '+esc(formatDate(m.retrieved_at_utc))+'</small></div>';
}
function renderCards(){
  const query=document.getElementById('search').value.trim().toLowerCase(),category=document.getElementById('category-filter').value,only=document.getElementById('preview-only').checked,onlyNew=document.getElementById('new-only').checked;
  const visible=CATALOG.projects.filter(p=>{
    const m=p.paper_metadata||{};
    const haystack=[p.title,p.paper_title,p.summary,p.duration_summary,p.category,p.video_cases_count,p.relation_level,m.status_label,m.arxiv_published_at,m.citation_count,m.github_stars].join(' ').toLowerCase();
    return (!query||haystack.includes(query))&&(!category||p.category===category)&&(!only||p.video_preview_images>0||p.video_cases_count>0)&&(!onlyNew||p.added_batch==='2026-09-23');
  });
  document.getElementById('visible-count').textContent=visible.length+' / '+CATALOG.projects.length+' 篇';
  document.getElementById('cards').innerHTML=visible.map(p=>{
    const image=p.thumbnail?'<img class="card-thumb" loading="lazy" src="'+esc(p.thumbnail)+'" alt="'+esc(p.title)+' 真实预览">':'<div class="card-placeholder">'+esc(p.title)+'</div>';
    const counts=[];if(p.preview_images)counts.push(p.preview_images+' 张图');if(p.video_cases_count)counts.push(p.video_cases_count+' 个视频 case');
    const actions=p.overview_html?'<a class="button primary" href="'+esc(p.overview_html)+'" data-page="'+esc(p.overview_html)+'">数据概览</a><a class="button" href="'+esc(p.gallery_html)+'" data-page="'+esc(p.gallery_html)+'">'+(counts.length?counts.join(' · '):'预览与访问状态')+'</a>':'';
    return '<article class="dataset-card">'+image+'<div class="card-content"><div class="tags"><span class="tag">'+esc(p.category||'待整理')+'</span><span class="tag '+esc(p.preview_status||'pending')+'">'+esc(stateLabels[p.preview_status]||stateLabels.pending)+'</span></div><h2>'+esc(p.title)+'</h2><p>'+esc(p.summary||'正在核对论文与官方数据入口。')+'</p>'+(p.duration_summary?'<p class="duration">'+esc(p.duration_summary)+'</p>':'')+paperMetaMarkup(p)+'<div class="card-actions">'+actions+(p.paper_url?'<a class="button" href="'+esc(p.paper_url)+'" target="_blank" rel="noopener">论文 ↗</a>':'')+'</div></div></article>';
  }).join('')||'<div class="empty">没有匹配的论文。</div>';
}
document.getElementById('search').oninput=renderCards;document.getElementById('category-filter').onchange=renderCards;document.getElementById('preview-only').onchange=renderCards;document.getElementById('new-only').onchange=renderCards;
function renderUris(){const query=document.getElementById('uri-search').value.toLowerCase();const pages=CATALOG.pages.filter(p=>[p.title,p.path,p.kind].join(' ').toLowerCase().includes(query));document.getElementById('uri-list').innerHTML=pages.map(p=>'<li><a class="uri-title" data-page="'+esc(p.path)+'" href="'+esc(p.path)+'">'+esc(p.title)+'</a><code>'+esc(p.path)+'</code><span class="tag">'+esc(p.kind==='source'?'源网页快照':p.kind==='gallery'?'图册':p.kind==='overview'?'概览':'已有页面')+'</span></li>').join('')}
document.getElementById('uri-search').oninput=renderUris;renderCards();renderUris();const initial=new URLSearchParams(location.search).get('page');if(initial)openPage(initial,false);
