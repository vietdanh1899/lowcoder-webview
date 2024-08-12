import{a4 as $,ca as c,cb as h,cc as b,bT as p,bD as m,cd as x,bs as d,ce as g,c7 as w,cf as f,bF as u,d as i,as as o,k as n,bG as r,bH as a,aj as t,a0 as l,bN as y,bI as v,F as S,bL as s,bK as V}from"./index-CyMr76_m.js";const W=$(c)`
  margin-top: 3.5px;
  rotate:${e=>e.$style.rotation};
  .ant-divider-inner-text {
    height: 32px;
    display: flex;
    align-items: center;
    font-size: ${e=>e.$style.textSize};
    font-weight: ${e=>e.$style.textWeight};
    font-family: ${e=>e.$style.fontFamily};
    text-transform:${e=>e.$style.textTransform};
    text-decoration:${e=>e.$style.textDecoration};
    font-style:${e=>e.$style.fontStyle}
  }
  ${e=>e.$animationStyle}
  min-width: 0;	
  width: ${e=>h(e.$style.margin)};	
  min-height: ${e=>b(e.$style.margin)};	
  margin: ${e=>e.$style.margin};	
  padding: ${e=>e.$style.padding};
  border-radius:${e=>e.$style.radius};
  border-top: ${e=>e.$style.borderWidth&&e.$style.borderWidth!="0px"?e.$style.borderWidth:"1px"} ${e=>e.$style.borderStyle} ${e=>e.$style.border};
""
  .ant-divider-inner-text::before, .ant-divider-inner-text::after {
    border-block-start: ${e=>e.$style.borderWidth&&e.$style.borderWidth!="0px"?e.$style.borderWidth:"1px"} ${e=>e.dashed?"dashed":"solid"} ${e=>e.$style.border} !important;
    border-block-start-color: inherit;
    border-block-end: 0;
  }

  &.ant-divider-horizontal.ant-divider-with-text {
    margin: 0;
    border-top-color: ${e=>e.$style.color};
    color: ${e=>e.$style.text};
  }
`,D={title:p,dashed:m,align:x(),style:d(g),animationStyle:d(w)};function k(e){return e&&e.hasOwnProperty("color")?{...e,style:{color:e.color,text:""}}:e}const P=f(new u(D,e=>i(W,{orientation:e.align,dashed:e.dashed,$style:e.style,$animationStyle:e.animationStyle,children:e.title})).setPropertyViewFn(e=>o(n,{children:[i(r,{name:a.basic,children:e.title.propertyView({label:t("divider.title")})}),["logic","both"].includes(l.useContext(y).editorModeStatus)&&i(r,{name:a.interaction,children:v(e)}),["layout","both"].includes(l.useContext(y).editorModeStatus)&&o(n,{children:[i(r,{name:a.layout,children:!S.isEmpty(e.title.getView())&&e.align.propertyView({label:t("divider.align"),radioButton:!0})}),o(r,{name:a.style,children:[e.dashed.propertyView({label:t("divider.dashed")}),e.style.getPropertyView()]}),i(r,{name:a.animationStyle,hasTooltip:!0,children:e.animationStyle.getPropertyView()})]})]})).setExposeStateConfigs([new s("dashed",t("divider.dashedDesc")),new s("title",t("divider.titleDesc")),new s("align",t("divider.alignDesc")),V]).build(),k);export{P as DividerComp};
