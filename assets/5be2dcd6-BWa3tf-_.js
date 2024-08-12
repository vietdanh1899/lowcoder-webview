import{a4 as w,a6 as S,cb as f,cc as x,bs as b,ch as k,c7 as v,bw as c,bx as z,ci as C,by as H,bz as V,bF as E,d as i,as as r,k as g,bG as n,bH as a,aj as d,a0 as t,bN as h,bI as M,bJ as P,bK as T,bM as j,c8 as G}from"./index-CyMr76_m.js";const I=w.div`
  display: flex;
  align-items: center;
  justify-content: center;
${e=>e.$animationStyle}
  ${e=>e.$style&&S`
      height: calc(100% - ${e.$style.margin});
      width: calc(100% - ${e.$style.margin});
      padding: ${e.$style.padding};
      margin: ${e.$style.margin};
      border: ${e.$style.borderWidth} solid ${e.$style.border};
      border-radius: ${e.$style.radius};
      background: ${e.$style.background};
      rotate:${e.$style.rotation};
      svg {
        max-width: ${f(e.$style.margin)};
        max-height: ${x(e.$style.margin)};
        color: ${e.$style.fill};
        object-fit: contain;
        pointer-events: auto;
      }
    `}
`,J=[j],N={style:b(k),animationStyle:b(v),icon:c(z,"/icon:antd/homefilled"),autoHeight:c(C,"auto"),iconSize:c(H,20),onEvent:V(J)},A=e=>{const u=t.useRef(null),[o,m]=t.useState(0),[s,p]=t.useState(0);t.useEffect(()=>{s&&o&&$()},[s,o]);const $=()=>{const l=u.current;m((l==null?void 0:l.clientWidth)??0),p((l==null?void 0:l.clientHeight)??0)};return i(G,{onResize:$,render:()=>i(I,{ref:u,$style:e.style,$animationStyle:e.animationStyle,style:{fontSize:e.autoHeight?`${s<o?s:o}px`:e.iconSize,background:e.style.background},onClick:()=>e.onEvent("click"),children:e.icon})})};let y=function(){return new E(N,e=>i(A,{...e})).setPropertyViewFn(e=>r(g,{children:[i(n,{name:a.basic,children:e.icon.propertyView({label:d("iconComp.icon"),IconType:"All"})}),["logic","both"].includes(t.useContext(h).editorModeStatus)&&r(n,{name:a.interaction,children:[e.onEvent.getPropertyView(),M(e)]}),["layout","both"].includes(t.useContext(h).editorModeStatus)&&r(g,{children:[r(n,{name:a.layout,children:[e.autoHeight.propertyView({label:d("iconComp.autoSize")}),!e.autoHeight.getView()&&e.iconSize.propertyView({label:d("iconComp.iconSize")})]}),i(n,{name:a.style,children:e.style.getPropertyView()}),i(n,{name:a.animationStyle,hasTooltip:!0,children:e.animationStyle.getPropertyView()})]})]})).build()}();y=class extends y{autoHeight(){return!1}};const F=P(y,[T]);export{F as IconComp};
