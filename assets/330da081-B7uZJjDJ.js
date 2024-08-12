import{a4 as r,db as p,dc as h,F as u,as as m,d as l,dd as f,de as b,df as g,dg as d}from"./index-CyMr76_m.js";const v=r.div`
  flex-shrink: 0;
  width: ${i=>i.$placement==="right"?"96px":"112px"};
`,w=r.div`
  ${p};
  width: 100%;
  font-size: 13px;
  line-height: 15px;
`,x=r.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  align-items: center;

  .ant-select .ant-select-selector {
    margin: 0;
  }

  .ant-select-selection-item {
    height: 26px;
  }
`;function y(i,s){return class extends h{getDefaultValue(){return s}propertyView(e){const{placement:o="right"}=e,c=u.fromPairs(i.map(t=>[t.value,t]));return m(x,{children:[e.label&&l(v,{$placement:o,children:l(f,{title:e.tooltip,label:e.label})}),l(b,{title:e.label?void 0:e.tooltip,children:l(g,{$placement:o,children:l(d,{mode:"multiple",popupClassName:"ob-dropdown-control-select",filterOption:(t,a)=>{if(!(a!=null&&a.value))return!1;const n=c[a.value].label;return typeof n=="number"||typeof n=="string"||typeof n=="boolean"?n.toString().toLowerCase().includes(t):!1},border:e.border,defaultValue:this.getDefaultValue(),value:this.value,style:{width:"100%"},onChange:t=>{var a;e.disableDispatchValueChange||this.dispatchChangeValueAction(t),(a=e.onChange)==null||a.call(e,t)},disabled:e.disabled,allowClear:!0,placeholder:e.placeholder,optionLabelProp:"children",children:i.map(t=>l(d.Option,{value:t.value,children:l(w,{children:t.label})},t.value))})})})]})}getPropertyView(){throw new Error("Method not implemented.")}}}export{y as multiSelectControl};
