import{a4 as l,cT as b,bW as y,bY as u,bX as x,aj as o,bB as w,ci as $,bA as m,cU as f,bs as c,cV as v,c7 as k,bF as S,d as a,cW as A,as as i,k as h,bG as n,bH as r,a0 as g,bN as p,bI as V,bJ as C,bL as z,bK as H,a6 as T,cb as W,cc as B}from"./index-CyMr76_m.js";import{MarginControl as M}from"./3b333d0b-CW89wYop.js";import{PaddingControl as P}from"./874205af-IDtItRsf.js";const D=t=>T`
    border-radius: ${t.radius?t.radius:"4px"};
    border: ${t.borderWidth?t.borderWidth:"0px"} solid ${t.border};
    color: ${t.text};
    text-transform:${t.textTransform} !important;
    text-decoration:${t.textDecoration} !important;
    background-color: ${t.background};
    .markdown-body a {
      color: ${t.links};
    }
    .markdown-body {
      margin: ${t.margin} !important;	
      padding: ${t.padding};	
      width: ${W(t.margin)};	
      font-family: ${t.fontFamily} !important;
      font-style:${t.fontStyle} !important;
      font-size: ${t.textSize} !important;
      // height: ${B(t.margin)};
      h1 {
        line-height: 1.5;
      }
      h5 {
        line-height: 2.2;
      }
    }

    .markdown-body {
      &,
      p,
      div,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: ${t.text};
        font-weight: ${t.textWeight} !important;
      }
      img,
      pre {
        background-color: ${t.background};
        code {
          color: #000000;
        }
      }
    }
  `,F=l.div`
  height: 100%;
  overflow: auto;
  margin: 0;
  ${t=>t.$animationStyle}
  ${t=>t.$type==="text"&&"white-space:break-spaces;line-height: 1.9;"};
  ${t=>t.$styleConfig&&D(t.$styleConfig)}
  display: flex;
  font-size: 13px;
  ${b};
  overflow-wrap: anywhere;
  .markdown-body {
    overflow-wrap: anywhere;
  }
`,J=l(y)`
  transform: rotate(90deg);
`,N=l(u)`
  transform: rotate(90deg);
`,j=l(x)`
  transform: rotate(90deg);
`,G=[{label:"Markdown",value:"markdown"},{label:o("text"),value:"text"}],E=[{label:a(J,{}),value:"flex-start"},{label:a(j,{}),value:"center"},{label:a(N,{}),value:"flex-end"}];let s=function(){const t={text:w("text",o("textShow.text",{name:"{{currentUser.name}}"})),autoHeight:$,type:m(G,"markdown"),horizontalAlignment:f(),verticalAlignment:m(E,"center"),style:c(v),animationStyle:c(k),margin:M,padding:P};return new S(t,e=>{const d=e.text.value;return a(F,{$animationStyle:e.animationStyle,$type:e.type,$styleConfig:e.style,style:{justifyContent:e.horizontalAlignment,alignItems:e.autoHeight?"center":e.verticalAlignment,textAlign:e.horizontalAlignment,rotate:e.style.rotation},children:e.type==="markdown"?a(A,{children:d}):d})}).setPropertyViewFn(e=>i(h,{children:[i(n,{name:r.basic,children:[e.type.propertyView({label:o("value"),tooltip:o("textShow.valueTooltip"),radioButton:!0}),e.text.propertyView({})]}),["logic","both"].includes(g.useContext(p).editorModeStatus)&&a(n,{name:r.interaction,children:V(e)}),["layout","both"].includes(g.useContext(p).editorModeStatus)&&i(h,{children:[i(n,{name:r.layout,children:[e.autoHeight.getPropertyView(),!e.autoHeight.getView()&&e.verticalAlignment.propertyView({label:o("textShow.verticalAlignment"),radioButton:!0}),e.horizontalAlignment.propertyView({label:o("textShow.horizontalAlignment"),radioButton:!0})]}),a(n,{name:r.style,children:e.style.getPropertyView()}),a(n,{name:r.animationStyle,hasTooltip:!0,children:e.animationStyle.getPropertyView()})]})]})).build()}();s=class extends s{autoHeight(){return this.children.autoHeight.getView()}};const X=C(s,[new z("text",o("textShow.textDesc")),H]);export{X as TextComp};
