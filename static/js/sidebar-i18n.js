(function(){
  // Replace sidebar category labels with localized strings from menu-labels.json
  async function applySidebarLabels(){
    try{
      // Try absolute and root-relative paths to avoid fetching locale-prefixed HTML
      const origin = window.location.origin || '';
      const candidates = [origin + '/menu-labels.json', '/menu-labels.json'];
      let res = null;
      for (const p of candidates) {
        try {
          res = await fetch(p, { cache: 'no-store' });
          if (res && res.ok) break;
        } catch (err) {
          res = null;
        }
      }
      if (!res || !res.ok) return;
      let labels;
      try {
        labels = await res.json();
      } catch (err) {
        console.error('sidebar-i18n: invalid JSON at', res && res.url, err);
        return;
      }
      // Determine current locale from html[data-theme] or window.__locale__ if available
      let locale = document.documentElement.getAttribute('lang') || window.__docusaurus?.i18n?.currentLocale || 'ko';
      const L = labels[locale] || labels['en'];
      // Sidebar category labels can appear as anchor text or inside a span
      const anchors = Array.from(document.querySelectorAll('.menu__list-item .menu__link'));
      anchors.forEach(a => {
        // prefer the direct textContent of the anchor (trim children)
        const raw = (a.childNodes && a.childNodes.length) ? Array.from(a.childNodes).map(n=>n.nodeType===3? n.textContent : '').join('').trim() : a.textContent && a.textContent.trim();
        const key = raw && raw.trim();
        if(!key) return;
        const lookup = (L[key] || L[key.toLowerCase()]);
        if(lookup){
          // replace text nodes only to preserve icons/children
          a.childNodes.forEach(n=>{
            if(n.nodeType===3){ n.textContent = lookup; }
          });
        }
      });
      // mark that the replacer ran
      document.documentElement.setAttribute('data-sidebar-i18n','client-applied');
      console.debug('sidebar-i18n: applied labels for', locale);
    }catch(e){
      // no-op
      console.error('sidebar-i18n error', e);
    }
  }
  // run on load and on locale change (if __docusaurus available)
  window.addEventListener('load', applySidebarLabels);
  if(window.__docusaurus && window.__docusaurus.i18n){
    // attempt to observe locale changes
    const original = window.__docusaurus.i18n.currentLocale;
    setInterval(applySidebarLabels, 800);
  }
})();
