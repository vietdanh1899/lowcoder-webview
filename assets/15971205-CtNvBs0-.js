import{a4 as $,eg as w,bw as f,aj as b,bT as k,bD as v,bE as M,bS as C,ea as E,bs as V,eh as I,bF as D,d as o,bO as F,M as m,as as i,k as u,bG as l,bH as d,a0 as r,bN as s,cx as H,bI as P,bJ as B,bL as G,cy as R,bQ as Y}from"./index-CyMr76_m.js";import{getButtonStyle as g,ButtonCompWrapper as j,Button100 as z}from"./73e0b0c0-cg4qSQqq.js";const L=$(w)`
  width: 100%;
  
  .ant-btn-group {
    width: 100%;
   
  }
`,N=$.div`
  width: calc(100%);
  ${t=>`margin: ${t.$buttonStyle.margin};`}
  margin-right: 0;
  .ant-btn span {
    ${t=>`text-decoration: ${t.$buttonStyle.textDecoration};`}
    ${t=>`font-family: ${t.$buttonStyle.fontFamily};`}
  }
  
  .ant-btn {
    ${t=>g(t.$buttonStyle)}
    margin: 0 !important;
    height: 100%;
    &.ant-btn-default {
      margin: 0 !important;
      ${t=>`border-radius: ${t.$buttonStyle.radius} 0 0 ${t.$buttonStyle.radius};`}
      ${t=>`text-transform: ${t.$buttonStyle.textTransform};`}
      ${t=>`font-weight: ${t.$buttonStyle.textWeight};`}
    }
    ${t=>`background-color: ${t.$buttonStyle.background};`}
    ${t=>`color: ${t.$buttonStyle.text};`}
    ${t=>`padding: ${t.$buttonStyle.padding};`}
    ${t=>`font-size: ${t.$buttonStyle.textSize};`}
    ${t=>`font-style: ${t.$buttonStyle.fontStyle};`}

    width: 100%;
  }
  
`,O=$.div`
  // width: 32px;
  ${t=>`margin: ${t.$buttonStyle.margin};`}
  margin-left: -1px;
  .ant-btn {
    ${t=>g(t.$buttonStyle)}
    margin: 0 !important;
    height: 100%;
    &.ant-btn-default {
      margin: 0 !important;
      ${t=>`border-radius: 0 ${t.$buttonStyle.radius} ${t.$buttonStyle.radius} 0;`}
    }
    width: 100%;
  }
`,T=function(){const t={text:f(k,b("menu")),onlyMenu:v,options:M,disabled:C,onEvent:E,style:V(I)};return new D(t,e=>{var y;const x=e.options.findIndex(n=>{var a;return(a=n.prefixIcon)==null?void 0:a.props.value})>-1,c=e.options.filter(n=>!n.hidden).map((n,a)=>({title:n.label,label:n.label,style:{padding:e.style.padding},key:n.label+" - "+a,disabled:n.disabled,icon:x&&o("span",{children:n.prefixIcon}),index:a})),p=o(Y,{items:c,onClick:({key:n})=>{var a;const h=c.find(S=>S.key===n);h&&((a=e.options[h.index])==null||a.onEvent("click"))}});return o(j,{disabled:e.disabled,children:e.onlyMenu?o(F,{disabled:e.disabled,dropdownRender:()=>p,children:o(z,{$buttonStyle:e.style,disabled:e.disabled,children:e.text||" "})}):o(L,{disabled:e.disabled,dropdownRender:()=>p,onClick:()=>e.onEvent("click"),buttonsRender:([n,a])=>[o(N,{$buttonStyle:e.style,children:m.cloneElement(n,{disabled:e.disabled})}),o(O,{$buttonStyle:e.style,children:m.cloneElement(a,{disabled:e.disabled})})],children:!e.text||((y=e.text)==null?void 0:y.length)===0?" ":e.text})})}).setPropertyViewFn(e=>i(u,{children:[o(l,{name:d.basic,children:e.options.propertyView({})}),(r.useContext(s).editorModeStatus==="logic"||r.useContext(s).editorModeStatus==="both")&&o(u,{children:i(l,{name:d.interaction,children:[!e.onlyMenu.getView()&&e.onEvent.getPropertyView(),H(e),P(e)]})}),(r.useContext(s).editorModeStatus==="layout"||r.useContext(s).editorModeStatus==="both")&&i(u,{children:[i(l,{name:d.layout,children:[e.text.propertyView({label:b("label")}),e.onlyMenu.propertyView({label:b("dropdown.onlyMenu")})]}),o(l,{name:d.style,children:e.style.getPropertyView()})]})]})).build()}(),q=B(T,[new G("text",b("dropdown.textDesc")),...R]);export{q as DropdownComp};
