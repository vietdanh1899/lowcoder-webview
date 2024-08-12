import{a4 as m,jz as C,M as P,cM as F,bD as T,bw as b,ci as I,bs as h,cu as H,cv as R,dP as D,c7 as M,bF as q,d as a,as as d,k as S,a0 as r,bN as w,bG as o,bH as s,bI as K,dU as j,cD as k,f1 as N,cP as z,cQ as A,cR as B,bJ as E,bL as G,aj as L,dV as Q,dW as W,F as X,cf as Z,jA as J}from"./index-CyMr76_m.js";import{FormDataPropertyView as O}from"./2606e654-BU0arLul.js";import{getStyle as U,textInputChildren as Y,useTextInputProps as _,TextInputBasicSection as ee,TextInputInteractionSection as te,TextInputValidationSection as ae,TextInputConfigs as le,fixOldInputCompData as ne}from"./6273459c-DX34gMfV.js";const re=m(C)``;function ie(t,e){const{onChange:i,value:u,debounce:x=J,...$}=t,[v,f]=r.useState(u),p=r.useRef(0),c=r.useRef(i);c.current=i;const g=r.useRef(x>0?X.debounce(l=>{var n;window.clearTimeout(p.current),p.current=window.setTimeout(()=>p.current=0,100),(n=c.current)==null||n.call(c,l)},x):l=>{var n;return(n=c.current)==null?void 0:n.call(c,l)}),V=l=>{var n;f(l.target.value),(n=g.current)==null||n.call(g,l)};return r.useEffect(()=>{p.current||f(u)},[u]),a(re,{ref:e,value:v,placeholder:t.placeholder,onChange:l=>V(l),...$})}const oe=P.forwardRef(ie),se=m(oe)`
  box-shadow: ${t=>{var e,i;return`${(e=t.$style)==null?void 0:e.boxShadow} ${(i=t.$style)==null?void 0:i.boxShadowColor}`}};
  ${t=>t.$style&&U(t.$style)}
`,ue=m.div`
  height: 100% !important;
  
  .ant-input { 
    height:100%;
  }

  .ant-input-clear-icon {
    opacity: 0.75;
    color: ${t=>t.$style.text};
    top: 10px;

    &:hover {
      opacity: 0.9;
      color: ${t=>t.$style.text};
    }
  }
`;let y=function(){const t={...Y,viewRef:F,allowClear:T,autoHeight:b(I,"fixed"),style:b(h(H),{background:"transparent"}),labelStyle:h(R),inputFieldStyle:b(h(D),{borderWidth:"1px"}),animationStyle:h(M)};return new q(t,e=>{const[i,u]=_(e);return e.label({required:e.required,inputFieldStyle:e.inputFieldStyle,children:a(ue,{$style:e.inputFieldStyle,children:a(se,{...i,ref:e.viewRef,allowClear:e.allowClear,style:{height:"100% !important",resize:e.autoHeight?"vertical":"none"},$style:e.inputFieldStyle})}),style:e.style,labelStyle:e.labelStyle,animationStyle:e.animationStyle,...u})}).setPropertyViewFn(e=>d(S,{children:[a(ee,{...e}),a(O,{...e}),["layout","both"].includes(r.useContext(w).editorModeStatus)&&e.label.getPropertyView(),["logic","both"].includes(r.useContext(w).editorModeStatus)&&d(S,{children:[a(te,{...e}),d(o,{name:s.layout,children:[e.autoHeight.getPropertyView(),K(e)]}),d(o,{name:s.advanced,children:[j(e),k(e)]}),a(ae,{...e})]}),["layout","both"].includes(r.useContext(w).editorModeStatus)&&d(S,{children:[a(o,{name:s.style,children:e.style.getPropertyView()}),a(o,{name:s.labelStyle,children:e.labelStyle.getPropertyView()}),a(o,{name:s.inputFieldStyle,children:e.inputFieldStyle.getPropertyView()}),a(o,{name:s.animationStyle,hasTooltip:!0,children:e.animationStyle.getPropertyView()})]})]})).build()}();y=class extends y{autoHeight(){return this.children.autoHeight.getView()}};y=Z(y,ne);const ce=N(y,z([A,B])),he=E(ce,[new G("value",L("export.inputValueDesc")),Q,W,...le]);export{he as TextAreaComp};
