import{a0 as r,bN as m,jM as S,m3 as w,d as i,mx as g,my as k,fc as x,mz as u,mA as E,mB as h,mC as K}from"./index-CyMr76_m.js";import{E as C}from"./28655170-BWyz2Msd.js";import{h as f}from"./62e7049f-Btbpwd_y.js";function N(t,e,s,o,a,c){switch(f(t,"global")){case"toggleLeftPanel":o("left");break;case"toggleBottomPanel":o("bottom");break;case"toggleRightPanel":o("right");break;case"toggleAllPanels":o();break;case"preview":E(c);break;case"undo":s==null||s.undo();break;case"redo":s==null||s.redo();break;case"deleteComps":u.deleteComp(e,e.selectedComps());return;case"toggleShortcutList":a();return;case"executeQuery":{const n=e.selectedQueryComp();n==null||n.dispatch(x({afterExecFunc:()=>e.setShowResultCompName(n.children.name.getView())}));break}default:return}t.stopPropagation(),t.preventDefault()}function p(t,e){t.setForceShowGrid(e?h(e):!1),t.setDisableInteract(e?K(e):!1)}function v(t,e,s){if(!h(t))return;const o=t.target||t.srcElement;if(!o)return;if(o.className!==C){const n=o.parentElement;if(!n||n.className!==C)return}s();const a=o.innerText;if(e.getUICompByName(a)){e.setSelectedCompNames(new Set([a]));return}const c=e.getBottomResComp(a);if(c){e.setSelectedBottomRes(a,c.type());return}}function I(t){const e=r.useContext(m),{history:s}=r.useContext(S),{togglePanel:o,panelStatus:a,toggleShortcutList:c}=t,n=w(),b=r.useCallback(l=>{p(e,l),N(l,e,s,o,c,n),e.getAppSettingsComp().children.customShortcuts.handleKeyEvent(l)},[e,s,o,c,n]),d=r.useCallback(l=>p(e,l),[e]),y=r.useCallback(l=>{p(e,l),v(l,e,()=>!a.left&&o("left"))},[e,a,o]);return i(g,{disabled:t.disabled,onKeyDownCapture:b,onKeyUpCapture:d,onMouseMoveCapture:d,onMouseDownCapture:y,children:t.children})}function D(t,e){switch(f(t,"editor")){case"selectAllComps":e.setSelectedCompNames(new Set(Object.values(e.getUIComp().getTopCompItems()).map(s=>s.children.name.getView()))),t.preventDefault(),t.stopPropagation();return;case"copyComps":u.copyComp(e,e.selectedComps());return;case"pasteComps":u.pasteComp(e);return;case"cutComps":u.cutComp(e,e.selectedComps());return;case"deselectComps":e.setSelectedCompNames(new Set);return}}function L(t){const e=r.useContext(m),s=r.useCallback(o=>D(o,e),[e]);return i(k,{disabled:t.disabled,onKeyDown:s,style:{width:"100%",height:"100%"},children:t.children})}function M(t){const e=r.useContext(m),s=r.useCallback(o=>{e.getAppSettingsComp().children.customShortcuts.handleKeyEvent(o)},[e]);return i(g,{onKeyDownCapture:s,children:t.children})}export{M as CustomShortcutWrapper,I as EditorGlobalHotKeys,L as EditorHotKeys};
