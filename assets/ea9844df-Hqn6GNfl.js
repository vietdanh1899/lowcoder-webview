import{a4 as b,cX as m,bw as h,aj as i,bT as g,ea as w,bS as y,cf as I,bs as x,em as S,c7 as k,bx as $,cM as v,bF as C,dT as r,d as n,as as o,k as d,bG as a,bH as s,a0 as l,bN as c,cx as V,bI as M,eb as T,bJ as P,bL as p,cy as D}from"./index-CyMr76_m.js";import{ButtonCompWrapper as E,buttonRefMethods as F}from"./73e0b0c0-cg4qSQqq.js";const R=b(m)`
  ${e=>e.$animationStyle}
  ${e=>`
    color: ${e.$style.text};
    rotate: ${e.$style.rotation};
    margin: ${e.$style.margin};
    padding: ${e.$style.padding};
    font-size: ${e.$style.textSize};
    font-style:${e.$style.fontStyle};
    font-family:${e.$style.fontFamily};
    font-weight:${e.$style.textWeight};
    border: ${e.$style.borderWidth} ${e.$style.borderStyle} ${e.$style.border};
    border-radius:${e.$style.radius?e.$style.radius:"0px"};
    text-transform:${e.$style.textTransform?e.$style.textTransform:""};
    text-decoration:${e.$style.textDecoration?e.$style.textDecoration:""} !important;
    background-color: ${e.$style.background};
    &:hover {
      color: ${e.$style.hoverText} !important;
    }
    &:active {
      color: ${e.$style.activeText} !important;
    }
  `}

  &.ant-btn { 
    display: inline-flex;
    align-items: center;
    > span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      min-height: 1px;
    }
  }
`,f=b.span`
  display: flex;
`;function L(e){return e&&e.hasOwnProperty("color")?{text:e.color}:e}const B=function(){const e={text:h(g,i("link.link")),onEvent:w,disabled:y,loading:y,style:I(x(S),L),animationStyle:x(k),prefixIcon:$,suffixIcon:$,viewRef:v};return new C(e,t=>{const u=r(t.prefixIcon)||!!t.text||r(t.suffixIcon);return n(E,{disabled:t.disabled,children:n(R,{$animationStyle:t.animationStyle,ref:t.viewRef,$style:t.style,loading:t.loading,disabled:t.disabled,onClick:()=>t.onEvent("click"),type:"link",children:u&&o("span",{children:[r(t.prefixIcon)&&n(f,{children:t.prefixIcon}),!!t.text&&t.text,r(t.suffixIcon)&&n(f,{children:t.suffixIcon})]})})})}).setPropertyViewFn(t=>o(d,{children:[n(a,{name:s.basic,children:t.text.propertyView({label:i("text")})}),(l.useContext(c).editorModeStatus==="logic"||l.useContext(c).editorModeStatus==="both")&&o(d,{children:[o(a,{name:s.interaction,children:[t.onEvent.getPropertyView(),V(t),M(t),T(t)]}),o(a,{name:s.advanced,children:[t.prefixIcon.propertyView({label:i("button.prefixIcon")}),t.suffixIcon.propertyView({label:i("button.suffixIcon")})]})]}),(l.useContext(c).editorModeStatus==="layout"||l.useContext(c).editorModeStatus==="both")&&o(d,{children:[n(a,{name:s.style,children:t.style.getPropertyView()}),n(a,{name:s.animationStyle,hasTooltip:!0,children:t.animationStyle.getPropertyView()})]})]})).setExposeMethodConfigs(F).build()}(),j=P(B,[new p("text",i("link.textDesc")),new p("loading",i("link.loadingDesc")),...D]);export{j as LinkComp};
