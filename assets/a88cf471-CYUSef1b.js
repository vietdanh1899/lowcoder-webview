import{a4 as i,cz as l,d as n,k as s,aj as d,by as p}from"./index-CyMr76_m.js";import{C as u}from"./aa7442af-9y-PcNP7.js";import{ColumnValueTooltip as c}from"./bbcd8d34-UQLMzqWl.js";import"./7a2fe5b9-_-VMc9tG.js";import"./73e0b0c0-cg4qSQqq.js";const r=i(l)`
  display: inline-flex;
  align-items: center;
  width: 100%;
  overflow-x: auto;
  overflow-x: overlay;
  color: #ffd400;
  display: block;
  .ant-rate-star > div {
    height: 18px;
    width: 18px;
  }
  .ant-rate-star-half .ant-rate-star-first,
  .ant-rate-star-full .ant-rate-star-second {
    color: #ffd400;
    position: absolute;
  }
  .ant-rate-star-first {
    width: 100%;
  }
  .ant-rate-star-first,
  .ant-rate-star-second {
    display: inline-flex;
    align-items: center;
    color: #d7d9e0;
    max-height: 20px;
    bottom: 0;
  }
  svg {
    height: 18px;
    width: 18px;
  }
`,f=i.div`
  background: transparent !important;
  padding: 0 8px;
`,h={text:p},o=t=>t.text,b=function(){return new u(h,(t,a)=>{const e=t.changeValue??o(t);return n(r,{disabled:!0,value:e})},t=>t.text.value,o).setEditViewFn(t=>n(f,{onBlur:a=>{var e;(e=a.currentTarget)!=null&&e.contains(a.relatedTarget)||t.onChangeEnd()},children:n(r,{autoFocus:!0,isEdit:!0,defaultValue:t.value,onChange:a=>t.onChange(a),onKeyDown:a=>{a.key==="Enter"&&t.onChangeEnd()}})})).setPropertyViewFn(t=>n(s,{children:t.text.propertyView({label:d("table.columnValue"),tooltip:c})})).build()}();export{b as RatingComp};
