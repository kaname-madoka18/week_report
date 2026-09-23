// Keep pages usable in both the catalog iframe and VS Code's HTML preview.
// VS Code previews can add another (sometimes sandboxed) iframe.  Navigating
// with target="_top" then tries to escape that container and is commonly
// blocked.  We only delegate the home action when the immediate parent is our
// catalog; every other viewer keeps normal relative-link behaviour.
(()=>{
  const script=document.currentScript;
  const scriptUrl=new URL(script?.src||'assets/page_navigation.js',document.baseURI);
  const root=new URL('../',scriptUrl);
  const here=new URL(location.href);
  const rootPath=root.pathname.endsWith('/')?root.pathname:root.pathname+'/';
  let catalogReady=false;
  const pagePath=()=>{
    if(here.origin!==root.origin||!here.pathname.startsWith(rootPath)) return null;
    try{return decodeURIComponent(here.pathname.slice(rootPath.length));}catch(_){return null}
  };
  const catalogParent=()=>{
    if(window.parent===window)return false;
    try{
      const doc=window.parent.document;
      const frame=doc.getElementById('page-frame');
      return doc.body?.hasAttribute('data-dataset-catalog') && frame?.contentWindow===window;
    }catch(_){return false}
  };
  const delegate=()=>catalogReady||catalogParent();
  document.querySelectorAll('a[data-catalog-home]').forEach(link=>{
    link.href=new URL('catalog.html',root).href;
  });
  const notify=message=>{if(window.parent!==window)window.parent.postMessage(message,'*')};
  window.addEventListener('message',event=>{
    if(event.source===window.parent&&event.data?.type==='dataset-catalog-ready')catalogReady=true;
  });
  const path=pagePath();
  if(path)notify({type:'dataset-catalog-page',path});
  document.addEventListener('click',event=>{
    if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
    const link=event.target.closest?.('a[href]');
    if(!link||!delegate())return;
    const href=link.getAttribute('href')||'';
    if(!href||href.startsWith('#'))return;
    let target;
    try{target=new URL(href,document.baseURI)}catch(_){return}
    if(target.origin!==root.origin||!target.pathname.startsWith(rootPath))return;
    let targetPath;
    try{targetPath=decodeURIComponent(target.pathname.slice(rootPath.length))}catch(_){return}
    if(targetPath!=='index.html'&&targetPath!=='catalog.html')return;
    // This is the only navigation that must leave the child frame.  The
    // catalog handles it without asking the browser to navigate its top frame.
    event.preventDefault();
    window.parent.postMessage({type:'dataset-catalog-home'},'*');
  },true);
})();
