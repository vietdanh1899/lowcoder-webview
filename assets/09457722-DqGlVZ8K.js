import{aj as d,bT as v,j8 as g,d as a,bP as x,as as m,k as C,a0 as p,dg as h,j9 as f,eL as w}from"./index-CyMr76_m.js";import{C as b,S}from"./aa7442af-9y-PcNP7.js";import{Wrapper as V,DropdownStyled as y}from"./0939bf73-t5w-dpUI.js";import"./7a2fe5b9-_-VMc9tG.js";import"./bbcd8d34-UQLMzqWl.js";import"./73e0b0c0-cg4qSQqq.js";const E=d("table.columnValueTooltip"),T=["none","success","error","default","warning","processing"],j={text:v,status:g(T,"none")},c=t=>({value:t.text,status:t.status}),k=t=>{const n=p.useContext(S),[o,l]=p.useState(n),[u,i]=p.useState(!0);return a(V,{children:a(h,{autoFocus:!0,defaultOpen:!0,variant:"borderless",optionLabelProp:"children",open:u,defaultValue:t.value.value,style:{width:"100%"},suffixIcon:a(f,{}),showSearch:!0,onSearch:e=>{var s;n.findIndex(r=>r.text.includes(e))<0?l([...n,{text:e,status:"none"}]):l(n),t.onChange({value:e,status:((s=o.find(r=>r.text===e))==null?void 0:s.status)||"none"})},onChange:e=>{var s;t.onChange({value:e,status:((s=o.find(r=>r.text===e))==null?void 0:s.status)||"none"})},dropdownRender:e=>a(y,{children:a(w,{style:{maxHeight:"256px"},children:e})}),dropdownStyle:{marginTop:"7px",padding:"8px 0 6px 0"},onBlur:t.onChangeEnd,onKeyDown:e=>{e.key==="Enter"&&t.onChangeEnd()},onClick:()=>i(!u),children:o.map((e,s)=>a(h.Option,{value:e.text,children:e.status==="none"?e.text:a(x,{status:e.status,text:e.text})},s))})})},D=function(){return new b(j,(t,n)=>{var o,l;const u=((o=t.changeValue)==null?void 0:o.value)??c(t).value,i=((l=t.changeValue)==null?void 0:l.status)??c(t).status;return i==="none"?u:a(x,{status:i,text:u})},t=>[t.status.value,t.text.value].filter(n=>n).join(" "),c).setEditViewFn(t=>a(k,{value:t.value,onChange:t.onChange,onChangeEnd:t.onChangeEnd})).setPropertyViewFn(t=>m(C,{children:[t.text.propertyView({label:d("table.columnValue"),tooltip:E}),t.status.propertyView({label:d("table.status"),tooltip:d("table.statusTooltip")})]})).build()}();export{D as BadgeStatusComp,T as BadgeStatusOptions,E as ColumnValueTooltip};
