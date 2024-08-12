import{a4 as D,cM as E,bD as k,ci as H,bs as m,dP as M,c7 as R,dO as q,bz as T,cL as F,bF as I,a0 as n,d as o,dR as O,eA as z,as as s,k as p,bG as l,bH as r,aj as i,bN as u,cx as W,bI as B,cD as N,e1 as Q,e3 as X,e4 as j,f1 as A,cP as G,cQ as J,cR as K,bJ as Y,bL as c,dV as Z,dW as U,fH as _,fI as ee,cA as te,ew as ae,eu as ne,cf as oe}from"./index-CyMr76_m.js";import{FormDataPropertyView as ie}from"./2606e654-BU0arLul.js";import{textInputChildren as le,checkMentionListData as re,textInputValidate as se,fixOldInputCompData as de}from"./6273459c-DX34gMfV.js";const ue=D.div`
  box-sizing:border-box;
  .rc-textarea {
    background-color:${a=>a.$style.background};
    padding:${a=>a.$style.padding};
    text-transform:${a=>a.$style.textTransform};
    text-decoration:${a=>a.$style.textDecoration};
    margin: 0px 3px 0px 3px !important;
  }

  .ant-input-clear-icon {
    opacity: 0.45;
    color: ${a=>a.$style.text};
    top: 10px;

    &:hover {
      opacity: 0.65;
      color: ${a=>a.$style.text};
    }
  }
`,ce=[_,ee,te,ae,ne];let d=function(){const a={...le,viewRef:E,allowClear:k,autoHeight:H,style:m(M),animationStyle:m(R),mentionList:q(re,{"@":["Li Lei","Han Meimei"],"#":["123","456","789"]}),onEvent:T(ce),invalid:F("invalid")};return new I(a,e=>{const{mentionList:y}=e,[h,x]=n.useState({}),[v,b]=n.useState(!1),[g,f]=n.useState("@"),S=(t,P)=>{f(P)},w=t=>{e.value.onChange(t),e.onEvent("change")},V=t=>{t.shiftKey&&(t.preventDefault(),e.onEvent("submit"))},L=t=>{e.onEvent("mention")},$=t=>t.hasOwnProperty("validateStatus")&&t.validateStatus==="error"?"error":"",C=()=>({value:{value:e.value.value},required:e.required,minLength:(e==null?void 0:e.minLength)??0,maxLength:(e==null?void 0:e.maxLength)??0,validationType:e.validationType,regex:e.regex,customRule:e.customRule});return n.useEffect(()=>{if(v){const t=se(C());x(t),e.invalid.onChange(t.validateStatus!=="")}},[e.value.value,e.required,e==null?void 0:e.minLength,e==null?void 0:e.maxLength,e.validationType,e.regex,e.customRule]),e.label({required:e.required,children:o(ue,{$style:e.style,children:o(O,{theme:{token:{colorBgContainer:e.style.background,colorBorder:e.style.border,borderRadius:parseInt(e.style.radius),colorText:e.style.text,colorPrimary:e.style.accent}},children:o(z,{prefix:Object.keys(y),onFocus:()=>{b(!0),e.onEvent("focus")},onBlur:()=>e.onEvent("blur"),onPressEnter:V,onSearch:S,onChange:w,onSelect:L,placeholder:e.placeholder,value:e.value.value,disabled:e.disabled,status:$(h),options:(y[g]||[]).map(t=>({key:t,value:t,label:t})),autoSize:e.autoHeight,style:{height:"100%",maxHeight:"100%",resize:"none",fontStyle:e.style.fontStyle,fontFamily:e.style.fontFamily,borderWidth:e.style.borderWidth,fontWeight:e.style.textWeight,fontSize:e.style.textSize},readOnly:e.readOnly})})}),style:e.style,animationStyle:e.animationStyle,...h})}).setPropertyViewFn(e=>s(p,{children:[s(l,{name:r.basic,children:[e.value.propertyView({label:i("prop.defaultValue")}),e.placeholder.propertyView({label:i("prop.placeholder")}),["logic","both"].includes(n.useContext(u).editorModeStatus)&&e.mentionList.propertyView({label:i("mention.mentionList")})]}),o(ie,{...e}),["layout","both"].includes(n.useContext(u).editorModeStatus)&&e.label.getPropertyView(),["logic","both"].includes(n.useContext(u).editorModeStatus)&&s(p,{children:[s(l,{name:r.interaction,children:[e.onEvent.getPropertyView(),W(e)]}),o(l,{name:r.layout,children:B(e)}),o(l,{name:r.advanced,children:N(e)}),s(l,{name:r.validation,children:[Q(e),e.validationType.propertyView({label:i("prop.textType")}),X(e),j(e),e.customRule.propertyView({})]})]}),["layout","both"].includes(n.useContext(u).editorModeStatus)&&s(p,{children:[o(l,{name:r.style,children:e.style.getPropertyView()}),o(l,{name:r.animationStyle,hasTooltip:!0,children:e.animationStyle.getPropertyView()})]})]})).build()}();d=class extends d{autoHeight(){return this.children.autoHeight.getView()}};d=oe(d,de);const pe=A(d,G([J,K])),xe=Y(pe,[new c("value",i("export.inputValueDesc")),Z,U,new c("invalid",i("export.invalidDesc")),new c("hidden",i("export.hiddenDesc")),new c("disabled",i("export.disabledDesc"))]);export{xe as MentionComp};
