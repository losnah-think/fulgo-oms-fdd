import React, {useEffect, useState} from 'react';
import OriginalDocSidebar from '@theme-original/DocSidebar';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

class SidebarErrorBoundary extends React.Component{
  constructor(props){
    super(props);
    this.state = {hasError:false, error:null};
  }
  static getDerivedStateFromError(error){
    return {hasError:true, error};
  }
  componentDidCatch(error, info){
    console.error('[DocSidebar] Error in sidebar:', error, info);
  }
  render(){
    if(this.state.hasError){
      return <div className="sidebar-error" style={{padding:'1rem',color:'#ff4d4f'}}>Sidebar failed to load — check console.</div>;
    }
    return this.props.children;
  }
}

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

  // Debug: ensure OriginalDocSidebar is a valid component
  if (typeof OriginalDocSidebar === 'undefined' || OriginalDocSidebar == null) {
    console.error('[DocSidebar] OriginalDocSidebar is undefined — rendering fallback.');
    return (
      <SidebarErrorBoundary>
        <div style={{padding:'1rem',color:'#ff4d4f'}}>Sidebar component is unavailable.</div>
      </SidebarErrorBoundary>
    );
  }

  // If labels not loaded yet, render original sidebar
  if(!labels) return <OriginalDocSidebar {...props} />;

  const locale = (i18n && i18n.currentLocale) || (typeof window !== 'undefined' ? document.documentElement.getAttribute('lang') : null) || 'ko';
  const L = (labels && (labels[locale] || labels['en'])) || {};

  // Deep clone items to avoid mutating original props
  const newItems = JSON.parse(JSON.stringify(props.items || []));

  function applyLabels(items){
    if(!Array.isArray(items)) return items;
    return items.map(item=>{
      if(item && item.type === 'category'){
        const key = (item.label || '').toLowerCase();
        if(key && typeof L[key] === 'string') item.label = L[key];
        if(Array.isArray(item.items)) item.items = applyLabels(item.items);
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
  return (
    <SidebarErrorBoundary>
      <OriginalDocSidebar {...patchedProps} />
    </SidebarErrorBoundary>
  );
}
