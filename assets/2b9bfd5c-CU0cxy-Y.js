import{a4 as n,i4 as i,bF as d,d as t,k as a,cP as o,fQ as u,cR as s,bJ as c,bL as y,aj as v,cy as h,bw as p}from"./index-CyMr76_m.js";import{CascaderPropertyView as $,defaultDataSource as S,CascaderChildren as F}from"./308f8f1f-C4YtmcGc.js";import"./3b333d0b-CW89wYop.js";import"./874205af-IDtItRsf.js";const I=n(i)`
  width: 100%;
  font-family:"Montserrat";
  ${l=>l.$style&&{...l.$style,"border-radius":l.$style.radius}}
`,b=n.div`
 background-color: ${l=>{var e;return(e=l.$childrenInputFieldStyle)==null?void 0:e.background}};
    border: ${l=>{var e;return(e=l.$childrenInputFieldStyle)==null?void 0:e.border}};
    border-style: ${l=>{var e;return(e=l.$childrenInputFieldStyle)==null?void 0:e.borderStyle}};
    border-width: ${l=>{var e;return(e=l.$childrenInputFieldStyle)==null?void 0:e.borderWidth}};
    border-radius: ${l=>{var e;return(e=l.$childrenInputFieldStyle)==null?void 0:e.radius}};
    rotate: ${l=>{var e;return(e=l.$childrenInputFieldStyle)==null?void 0:e.rotation}};
    margin: ${l=>{var e;return(e=l.$childrenInputFieldStyle)==null?void 0:e.margin}};
    padding: ${l=>{var e;return(e=l.$childrenInputFieldStyle)==null?void 0:e.padding}};
    .ant-cascader-menu-item-content{
    font-size: ${l=>{var e;return(e=l.$childrenInputFieldStyle)==null?void 0:e.textSize}};
    font-style: ${l=>{var e;return(e=l.$childrenInputFieldStyle)==null?void 0:e.fontStyle}};
    font-family: ${l=>{var e;return(e=l.$childrenInputFieldStyle)==null?void 0:e.fontFamily}};
    font-weight: ${l=>{var e;return(e=l.$childrenInputFieldStyle)==null?void 0:e.textWeight}};
    text-transform: ${l=>{var e;return(e=l.$childrenInputFieldStyle)==null?void 0:e.textTransform}};
    text-decoration: ${l=>{var e;return(e=l.$childrenInputFieldStyle)==null?void 0:e.textDecoration}};
    color: ${l=>{var e;return(e=l.$childrenInputFieldStyle)==null?void 0:e.text}};
    }
`;let f=function(){const l=F;return new d(l,e=>e.label({style:e.style,labelStyle:e.labelStyle,inputFieldStyle:e.inputFieldStyle,childrenInputFieldStyle:e.childrenInputFieldStyle,animationStyle:e.animationStyle,children:t(I,{ref:e.viewRef,value:e.value.value,disabled:e.disabled,defaultValue:e.value.value,options:e.options,allowClear:e.allowClear,placeholder:e.placeholder,showSearch:e.showSearch,$style:e.inputFieldStyle,$childrenInputFieldStyle:e.childrenInputFieldStyle,onFocus:()=>e.onEvent("focus"),onBlur:()=>e.onEvent("blur"),dropdownRender:r=>t(b,{$childrenInputFieldStyle:e.childrenInputFieldStyle,children:r}),onChange:r=>{e.value.onChange(r),e.onEvent("change")}})})).setPropertyViewFn(e=>t(a,{children:t($,{...e})})).setExposeMethodConfigs(o([u,s])).build()}();const m=c(f,[new y("value",v("selectInput.valueDesc")),...h]),k=p(m,{options:S});export{k as CascaderWithDefault};
