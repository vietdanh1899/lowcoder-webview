import{cA as p,aj as a,a4 as r,cL as u,bS as i,bz as d,bs as h,cu as m,cM as v,d as t,cO as l,as as w,k as b,cx as C}from"./index-CyMr76_m.js";import{C as f}from"./aa7442af-9y-PcNP7.js";import{ColumnValueTooltip as g}from"./bbcd8d34-UQLMzqWl.js";import"./7a2fe5b9-_-VMc9tG.js";import"./73e0b0c0-cg4qSQqq.js";const V=[p,{label:a("switchComp.open"),value:"true",description:a("switchComp.openDesc")},{label:a("switchComp.close"),value:"false",description:a("switchComp.closeDesc")}];r.div`
  display: flex;
  align-items: center;
`;const E=r.div`
  background: transparent !important;
  padding: 0 8px;
`,x={value:u("value"),switchState:i,onEvent:d(V),disabled:i,style:h(m),viewRef:v},c=e=>e.switchState,D=function(){return new f(x,(e,o)=>{const n=e.changeValue??c(e);return t(()=>t(l,{checked:n,disabled:e.disabled||!0,ref:e.viewRef,onChange:s=>{e.value.onChange(s),e.onEvent("change"),e.onEvent(s?"true":"false")}}),{})},e=>e.switchState.value,c).setEditViewFn(e=>t(E,{onBlur:()=>{e.onChangeEnd()},children:t(l,{autoFocus:!0,defaultChecked:e.value,disabled:!1,onChange:(o,n)=>{e.onChange(o)}})})).setPropertyViewFn(e=>w(b,{children:[e.switchState.propertyView({label:a("table.columnValue"),tooltip:g}),e.onEvent.propertyView(),C(e)]})).build()}();export{D as SwitchComp};
