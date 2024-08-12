import{a4 as h,by as l,bw as V,fB as m,bD as g,bT as s,bx as f,as as u,k as c,dT as b,d as t,gW as w,aj as n}from"./index-CyMr76_m.js";import{C}from"./aa7442af-9y-PcNP7.js";import{ColumnValueTooltip as y}from"./bbcd8d34-UQLMzqWl.js";import"./7a2fe5b9-_-VMc9tG.js";import"./73e0b0c0-cg4qSQqq.js";const I=h.div`
  .ant-input-number  {
    width: 100%;
    border-radius: 0;
    background: transparent !important;
    padding: 0 !important;
    box-shadow: none;

    input {
      padding: 0;
      border-radius: 0;
    }
  }
`,F={text:l,step:V(l,1),precision:m.closed(0,20,0),float:g,prefix:s,prefixIcon:f,suffixIcon:f,suffix:s};let i=!1,d=1,p=0;const x=e=>e.text,k=function(){return new C(F,(e,o)=>{i=e.float,d=e.step,p=e.precision;const a=e.changeValue??x(e);let r=i?a:Math.floor(a);return i&&(r=r.toFixed(p+1)),u(c,{children:[b(e.prefixIcon)&&t("span",{children:e.prefixIcon}),t("span",{children:e.prefix+r+e.suffix}),b(e.suffixIcon)&&t("span",{children:e.suffixIcon})," "]})},e=>e.text.value,x).setEditViewFn(e=>t(I,{children:t(w,{step:d,defaultValue:e.value,autoFocus:!0,variant:"borderless",onChange:o=>{o=o??0,e.onChange(i?o:Math.floor(o))},precision:i?p:0,onBlur:e.onChangeEnd,onPressEnter:e.onChangeEnd})})).setPropertyViewFn(e=>u(c,{children:[e.text.propertyView({label:n("table.columnValue"),tooltip:y}),e.step.propertyView({label:n("table.numberStep"),tooltip:n("table.numberStepTooltip"),onFocus:o=>{if(!o){const a=e.step.getView(),r=e.float.getView()?a:Math.floor(a);e.step.dispatchChangeValueAction(String(r))}}}),i&&e.precision.propertyView({label:n("table.precision")}),e.prefix.propertyView({label:n("table.prefix")}),e.prefixIcon.propertyView({label:n("button.prefixIcon")}),e.suffix.propertyView({label:n("table.suffix")}),e.suffixIcon.propertyView({label:n("button.suffixIcon")}),e.float.propertyView({label:n("table.float"),onChange:o=>{const a=e.step.getView(),r=o?a:Math.floor(a);e.step.dispatchChangeValueAction(String(r))}})]})).build()}();export{k as ColumnNumberComp};
