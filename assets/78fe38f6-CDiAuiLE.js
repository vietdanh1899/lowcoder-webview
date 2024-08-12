import{aj as t,bT as s,iX as r,bS as d,bs as c,j3 as u,a6 as b,a4 as p,d as e,gX as C,as as m,k as n,cx as k}from"./index-CyMr76_m.js";import{C as V}from"./aa7442af-9y-PcNP7.js";import"./7a2fe5b9-_-VMc9tG.js";const g=t("table.columnValueTooltip"),h={text:s,onClick:r,disabled:d,style:c(u)},w=b`
  &,
  &:hover {
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.25) !important;
  }
`,y=p.a`
  ${a=>a.$disabled&&w};
`,x=a=>e(y,{$disabled:a.disabled,onClick:()=>{!a.disabled&&a.onClick&&a.onClick()},children:a.label}),i=a=>a.text,F=function(){return new V(h,(a,o)=>{const l=a.changeValue??i(a);return e(x,{disabled:a.disabled,label:l,onClick:a.onClick})},a=>a.text.value,i).setEditViewFn(a=>e(C,{defaultValue:a.value,autoFocus:!0,variant:"borderless",onChange:o=>{const l=o.target.value;a.onChange(l)},onBlur:a.onChangeEnd,onPressEnter:a.onChangeEnd})).setPropertyViewFn(a=>m(n,{children:[a.text.propertyView({label:t("table.columnValue"),tooltip:g}),k(a),a.onClick.propertyView({label:t("table.action"),placement:"table"})]})).setStylePropertyViewFn(a=>e(n,{children:a.style.getPropertyView()})).build()}();export{x as ColumnLink,g as ColumnValueTooltip,F as LinkComp};
