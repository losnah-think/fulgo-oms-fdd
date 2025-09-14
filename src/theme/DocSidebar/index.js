import React, {useEffect, useState} from 'react';
import OriginalDocSidebar from '@theme-original/DocSidebar';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function useMenuLabels(){
  const [labels, setLabels] = useState(null);
  useEffect(()=>{
    let mounted = true;
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const paths = [origin + '/menu-labels.json', '/menu-labels.json'];
    (async ()=>{
      for(const p of paths){
        try{
          const res = await fetch(p, {cache: 'no-store'});
          if(res && res.ok){
            const json = await res.json();
            if(mounted) setLabels(json);
            break;
          }
        }catch(e){/* try next */}
      }
    })();
    return ()=>{mounted=false};
  },[]);
  return labels;
}

export default function DocSidebar(props){
  const {i18n} = useDocusaurusContext();
  const labels = useMenuLabels();

  // If labels not loaded yet, render original sidebar
  if(!labels) return <OriginalDocSidebar {...props} />;

  const locale = (i18n && i18n.currentLocale) || document.documentElement.getAttribute('lang') || 'ko';
  const L = labels[locale] || labels['en'];

  // Deep clone items to avoid mutating original props
  const newItems = JSON.parse(JSON.stringify(props.items || []));

  function applyLabels(items){
    if(!items) return items;
    return items.map(item=>{
      if(item.type === 'category'){
        const key = (item.label || '').toLowerCase();
        if(key && L[key]) item.label = L[key];
        if(item.items) item.items = applyLabels(item.items);
        return item;
      }
      return item;
    });
  }

  const patchedProps = Object.assign({}, props, {items: applyLabels(newItems)});
  useEffect(()=>{
    if(labels){
      try{
        document.documentElement.setAttribute('data-sidebar-i18n','react-applied');
        console.log('[DocSidebar-i18n] labels applied for locale', locale);
      }catch(e){}
    }
  }, [labels, locale]);
  return <OriginalDocSidebar {...patchedProps} />;
}
