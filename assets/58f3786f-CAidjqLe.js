import{a4 as i,gZ as h,aj as l,d as a,j0 as u,iW as c,ic as p,dT as o,j1 as b,as as g,k as m,bS as y,bA as V,bx as n}from"./index-CyMr76_m.js";import{C}from"./aa7442af-9y-PcNP7.js";import{ColumnValueTooltip as f}from"./bbcd8d34-UQLMzqWl.js";import{getStyle as v}from"./a0462e8b-DZIRdcE2.js";import"./7a2fe5b9-_-VMc9tG.js";import"./73e0b0c0-cg4qSQqq.js";import"./3b4688fc-D_wIQU04.js";import"./779f3b7b-amEsk8BD.js";import"./6273459c-DX34gMfV.js";import"./2606e654-BU0arLul.js";const x=i(h)`
  ${e=>e.$style&&v(e.$style)}
`,$=i.div`
  background: transparent !important;
  padding: 0 8px;
`,k=i.div`
  pointer-events: none;
  height: 22px;
  svg {
    width: 14px;
    height: 22px;
    g {
      stroke: ${e=>e.$ifChecked&&e.$style.checkedBackground} !important;
    }
  }
`,w=[{label:l("table.empty"),value:""},{label:"-",value:"-"},{label:a(u,{width:10,height:10}),value:"x"}],F={text:y,falseValues:V(w,""),iconTrue:n,iconFalse:n,iconNull:n},s=e=>e.text,N=e=>{const r=c(p);return a($,{onBlur:()=>e.onChangeEnd(),onKeyDown:t=>{t.key==="Enter"&&e.onChangeEnd()},children:a(x,{autoFocus:!0,$style:r,defaultChecked:e.value,onChange:t=>e.onChange(t.target.checked)})})},A=function(){return new C(F,(e,r)=>{const t=e.changeValue??s(e);return a(()=>{const d=c(p);return a(k,{$style:d,$ifChecked:t,children:t===!0?o(e.iconTrue)?e.iconTrue:a(b,{}):t===!1?o(e.iconFalse)?e.iconFalse:e.falseValues==="x"?a(u,{}):e.falseValues:o(e.iconNull)?e.iconNull:"No Value"})},{})},e=>e.text.value,s).setEditViewFn(e=>a(N,{value:e.value,onChange:e.onChange,onChangeEnd:e.onChangeEnd})).setPropertyViewFn(e=>g(m,{children:[e.text.propertyView({label:l("table.columnValue"),tooltip:f}),e.falseValues.propertyView({label:l("table.falseValues"),radioButton:!0}),e.iconTrue.propertyView({label:l("table.iconTrue")}),e.iconFalse.propertyView({label:l("table.iconFalse")}),e.iconNull.propertyView({label:l("table.iconNull")})]})).build()}();export{A as BooleanComp};
