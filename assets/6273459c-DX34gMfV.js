import{dX as V,aj as l,dY as L,F as R,dZ as T,cy as $,bB as v,bS as w,ct as S,bT as I,d_ as E,bD as h,by as f,bA as D,d$ as q,e0 as C,a0 as i,as as o,bG as s,bH as d,cC as O,cx as X,e1 as P,e2 as k,e3 as B,e4 as F,a6 as M,cP as U,cQ as Y,cR as j,e5 as z,e6 as A,cS as G,e7 as W,e8 as x}from"./index-CyMr76_m.js";import{formDataChildren as Z}from"./2606e654-BU0arLul.js";const g=[{label:"Text",value:"Text",extra:/.*/,help:""},{label:"Email",value:"Email",extra:V,help:l("validationDesc.email")},{label:"URL",value:"URL",extra:L,help:l("validationDesc.url")},{label:"Regex",value:"Regex",extra:void 0,help:l("validationDesc.regex")}],u=R.fromPairs(g.map(e=>[e.value,e])),m=e=>{var a;if(e.customRule)return{validateStatus:"error",help:e.customRule};const t=e.value.value;if(e.required&&t.length===0)return{validateStatus:"error",help:l("prop.required")};if(e.maxLength>0&&t.length>e.maxLength)return{validateStatus:"error",help:l("validationDesc.maxLength",{length:t.length,maxLength:e.maxLength})};if(e.minLength>0&&t.length<e.minLength)return{validateStatus:"error",help:l("validationDesc.minLength",{length:t.length,minLength:e.minLength})};const n=e.validationType,r=((a=u[n])==null?void 0:a.extra)??e.regex;return t&&!r.test(t)?{validateStatus:"error",help:u[n].help}:{validateStatus:""}},H=T({name:"invalid",desc:l("export.invalidDesc"),depKeys:["value","required","minLength","maxLength","validationType","regex","customRule"],func:e=>m({...e,value:{value:e.value}}).validateStatus!==""}),Q=[H,...$],_={defaultValue:v("defaultValue"),value:v("value"),disabled:w,label:S,placeholder:I,onEvent:E,readOnly:h,required:h,minLength:f,maxLength:f,validationType:D(g,"Text"),regex:q,customRule:C,...Z},J=e=>({disabled:e.disabled,readOnly:e.readOnly,placeholder:e.placeholder,defaultValue:e.defaultValue.value,value:e.value.value,onFocus:()=>e.onEvent("focus"),onBlur:()=>e.onEvent("blur"),onPressEnter:()=>e.onEvent("submit")}),ee=e=>{const[a,t]=i.useState({}),n=i.useRef(!1),r=i.useRef(e);r.current=e;const c={...e.defaultValue}.value,p={...e.value}.value;i.useEffect(()=>{e.value.onChange(c)},[c]),i.useEffect(()=>{n.current&&(t(m({...r.current,value:{value:p}})),r.current.onEvent("change"),n.current=!1)},[p]);const b=y=>{e.value.onChange(y.target.value),n.current=!0};return[{...J(e),onChange:b},a]},te=e=>o(s,{name:d.basic,children:[e.defaultValue.propertyView({label:l("prop.defaultValue")}),O(e)]}),ae=e=>o(s,{name:d.interaction,children:[e.onEvent.getPropertyView(),X(e)]}),ne=e=>{var a;return o(s,{name:d.validation,children:[P(e),e.validationType.propertyView({label:l("prop.textType")}),((a=u[e.validationType.getView()])==null?void 0:a.extra)===void 0&&k(e),B(e),F(e),e.customRule.propertyView({})]})};function le(e,a){return M`
    border-radius: ${e.radius};
    border-width: ${e.borderWidth};
    padding: ${e.padding};	
    // still use antd style when disabled
    &:not(.ant-input-disabled, .ant-input-affix-wrapper-disabled),
    input {
      color: ${e.text};
      font-size: ${e.textSize};
      font-weight: ${e.textWeight};
      font-family: ${e.fontFamily};
      font-style:${e.fontStyle};
      text-transform:${e.textTransform};
      text-decoration:${e.textDecoration};
      background-color: ${e.background};
      border-color: ${e.border};

      &:focus,
      &.ant-input-affix-wrapper-focused {
        border-color: ${e.accent};
      }

      &:hover {
        border-color: ${e.accent};
      }

      &::-webkit-input-placeholder {
        color: ${e.text};
        opacity: 0.4;
      }

      .ant-input-show-count-suffix,
      .ant-input-prefix,
      .ant-input-suffix svg {
        opacity: 0.45;
        color: ${e.text};
      }

      .ant-input-clear-icon svg:hover {
        opacity: 0.65;
      }
    }
  `}const re=[...U([Y,j,z,A]),{method:G,execute:(e,a)=>{var t,n;return(n=(t=e.children.viewRef.viewRef)==null?void 0:t.input)==null?void 0:n.click()}},{method:W,execute:(e,a)=>{var t,n,r;return(r=(n=(t=e.children.viewRef.viewRef)==null?void 0:t.input)==null?void 0:n.setRangeText)==null?void 0:r.call(n,...a)}}];function ie(e){if(e==="")return{};for(const a in e)x(e[a],["array"],a,t=>(x(t,["string"]),t));return e}function ue(e){if(!e)return e;if(e.value&&!e.defaultValue){const a=e.value;return{...e,defaultValue:a,value:""}}return e}export{te as TextInputBasicSection,Q as TextInputConfigs,ae as TextInputInteractionSection,g as TextInputValidationOptions,ne as TextInputValidationSection,ie as checkMentionListData,ue as fixOldInputCompData,le as getStyle,re as inputRefMethods,_ as textInputChildren,J as textInputProps,m as textInputValidate,ee as useTextInputProps};
