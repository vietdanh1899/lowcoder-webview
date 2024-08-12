import{a4 as r,cT as l,d as t,cW as i,gX as s,k as u,aj as m,bT as p}from"./index-CyMr76_m.js";import{C as d}from"./aa7442af-9y-PcNP7.js";import{ColumnValueTooltip as h}from"./bbcd8d34-UQLMzqWl.js";import"./7a2fe5b9-_-VMc9tG.js";import"./73e0b0c0-cg4qSQqq.js";const c=r.div`
  ${l};
  max-height: 32px;

  > .markdown-body {
    margin: 0;
    p {
      line-height: 21px;
    }
  }
`,g={text:p},o=e=>e.text,f=function(){return new d(g,(e,a)=>{const n=e.changeValue??o(e);return t(c,{children:t(i,{children:n})})},e=>e.text.value,o).setEditViewFn(e=>t(s,{defaultValue:e.value,autoFocus:!0,variant:"borderless",onChange:a=>{const n=a.target.value;e.onChange(n)},onBlur:e.onChangeEnd,onPressEnter:e.onChangeEnd})).setPropertyViewFn(e=>t(u,{children:e.text.propertyView({label:m("table.columnValue"),tooltip:h})})).build()}();export{f as ColumnMarkdownComp};
