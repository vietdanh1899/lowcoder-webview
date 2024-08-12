import{a6 as b,fS as u,fT as p,a4 as c,gc as m,ct as y,bT as g,bS as v,i5 as x,ig as f,bD as h,b_ as S,cM as w,bs as V,ih as C,d as l,ii as F,c2 as I,as as o,dT as P,k as i,bG as a,bH as r,aj as T,cC as k,a0 as s,bN as d,cx as M,bI as D,dU as E,i9 as R,cP as W,fQ as B,cR as U}from"./index-CyMr76_m.js";import{PaddingControl as z}from"./874205af-IDtItRsf.js";import{MarginControl as L}from"./3b333d0b-CW89wYop.js";import{SelectInputValidationChildren as N,SelectInputValidationSection as A}from"./3b4688fc-D_wIQU04.js";import{formDataChildren as G,FormDataPropertyView as O}from"./2606e654-BU0arLul.js";const j=t=>b`
    &.ant-select .ant-select-selector,
    &.ant-select-multiple .ant-select-selection-item {
      border-radius: ${t.radius};
      padding: ${t.padding};	
      height: auto;	
    }	
    .ant-select-selection-search {	
      padding: ${t.padding};
    }	
    .ant-select-selection-search-input {
      font-family:${t.fontFamily} !important;
      text-transform:${t.textTransform} !important;
      text-decoration:${t.textDecoration} !important;
      font-size:${t.textSize} !important;
      font-weight:${t.textWeight};
      color:${t.text} !important;
      font-style:${t.fontStyle};
    }
    .ant-select-selector::after,	
    .ant-select-selection-placeholder,	
    .ant-select-selection-item {	
      line-height: 1.5715 !important;
    }

    &.ant-select:not(.ant-select-disabled) {
      color: ${t.text};
      .ant-select-selection-placeholder,
      .ant-select-selection-item {
        line-height: 1.5715 !important;
      }
      .ant-select-selection-placeholder,
      &.ant-select-single.ant-select-open .ant-select-selection-item {
        color: ${t.text};
        opacity: 0.4;
        width: 100%;
      }

      .ant-select-selector {
        background-color: ${t.background};
        border-color: ${t.border};
        border-width:${t.borderWidth};
        box-shadow:${t.boxShadow} ${t.boxShadowColor};
      }

      &.ant-select-focused,
      &:hover {
        .ant-select-selector {
          border-color: ${t.accent};
        }
      }

      .ant-select-arrow,
      .ant-select-clear {
        background-color: ${t.background};
        color: ${t.text==="#222222"?"#8B8FA3":u(t.text)?p(t.text,.2):t.text};
      }

      .ant-select-clear:hover {
        color: ${t.text==="#222222"?"#8B8FA3":u(t.text)?p(t.text,.1):t.text};
      }

      &.ant-select-multiple .ant-select-selection-item {
        border: none;
        background-color: ${t.tags};
        color: ${t.tagsText};
        border-radius: ${t.radius};

        .ant-select-selection-item-remove {
          color: ${t.tagsText};
          opacity: 0.5;
        }
      }
    }
  `,$=c(m)`
  width: 100%;
  ${t=>t.$inputFieldStyle&&j(t.$inputFieldStyle)}
`,H=c.div`
 background-color: ${t=>{var e;return(e=t.$style)==null?void 0:e.background}};
    border: ${t=>{var e;return(e=t.$style)==null?void 0:e.border}};
    border-style: ${t=>{var e;return(e=t.$style)==null?void 0:e.borderStyle}};
    border-width: ${t=>{var e;return(e=t.$style)==null?void 0:e.borderWidth}};
    border-radius: ${t=>{var e;return(e=t.$style)==null?void 0:e.radius}};
    rotate: ${t=>{var e;return(e=t.$style)==null?void 0:e.rotation}};
    margin: ${t=>{var e;return(e=t.$style)==null?void 0:e.margin}};
    padding: ${t=>{var e;return(e=t.$style)==null?void 0:e.padding}};
  .ant-select-item-option-content {
    font-size: ${t=>{var e;return(e=t.$style)==null?void 0:e.textSize}};
    font-style: ${t=>{var e;return(e=t.$style)==null?void 0:e.fontStyle}};
    font-family: ${t=>{var e;return(e=t.$style)==null?void 0:e.fontFamily}};
    font-weight: ${t=>{var e;return(e=t.$style)==null?void 0:e.textWeight}};
    text-transform: ${t=>{var e;return(e=t.$style)==null?void 0:e.textTransform}};
    color: ${t=>{var e;return(e=t.$style)==null?void 0:e.text}};
  }
  .option-label{
    text-decoration: ${t=>{var e;return(e=t.$style)==null?void 0:e.textDecoration}} !important;
  }
  .option-label img {
    min-width: 14px;
    margin-right: 0;
  }
`,X=c.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  img {
    margin-right: -6px;
  }
`,Q={label:y,placeholder:g,disabled:v,onEvent:x,options:f,allowClear:h,inputValue:S(""),showSearch:h.DEFAULT_TRUE,viewRef:w,margin:L,padding:z,inputFieldStyle:V(C),...N,...G},Z=t=>l($,{ref:t.viewRef,mode:t.mode,$inputFieldStyle:t.inputFieldStyle,$style:t.style,disabled:t.disabled,allowClear:t.allowClear,placeholder:t.placeholder,value:t.value,showSearch:t.showSearch,filterOption:(e,n)=>n==null?void 0:n.label.toLowerCase().includes(e.toLowerCase()),dropdownRender:e=>l(H,{$style:t.childrenInputFieldStyle,children:e}),dropdownStyle:{padding:0},menuItemSelectedIcon:t.mode?l(F,{title:""}):"",onChange:t.onChange,onFocus:()=>t.onEvent("focus"),onBlur:()=>t.onEvent("blur"),onSearch:t.showSearch?e=>{t.dispatch(I("inputValue",e,!1))}:void 0,children:t.options.filter(e=>e.value!==void 0&&!e.hidden).map(e=>l($.Option,{value:e.value,label:e.label,disabled:e.disabled,children:o(X,{className:"option-label",children:[t.options.findIndex(n=>P(n.prefixIcon))>-1&&e.prefixIcon,l("span",{children:e.label})]})},e.value))}),tt=t=>o(i,{children:[o(a,{name:r.basic,children:[t.options.propertyView({}),t.defaultValue.propertyView({label:T("prop.defaultValue")}),k(t)]}),["logic","both"].includes(s.useContext(d).editorModeStatus)&&o(i,{children:[o(i,{children:[l(A,{...t}),l(O,{...t})]}),o(a,{name:r.interaction,children:[t.onEvent.getPropertyView(),M(t),D(t)]})]}),["layout","both"].includes(s.useContext(d).editorModeStatus)&&t.label.getPropertyView(),["logic","both"].includes(s.useContext(d).editorModeStatus)&&o(a,{name:r.advanced,children:[E(t),R(t)]}),["layout","both"].includes(s.useContext(d).editorModeStatus)&&o(i,{children:[l(a,{name:r.style,children:t.style.getPropertyView()}),l(a,{name:r.labelStyle,children:t.labelStyle.getPropertyView()}),l(a,{name:r.inputFieldStyle,children:t.inputFieldStyle.getPropertyView()}),l(a,{name:"Children Input Field Styles",children:t.childrenInputFieldStyle.getPropertyView()})]})]}),et=W([B,U]);export{Q as SelectChildrenMap,tt as SelectPropertyView,Z as SelectUIView,et as baseSelectRefMethods,j as getStyle};
