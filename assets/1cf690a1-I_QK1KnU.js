import{aj as t,d as r,j2 as l,gX as i,as as u,k as c,bw as s,bT as p,by as d}from"./index-CyMr76_m.js";import{C as g}from"./aa7442af-9y-PcNP7.js";import"./7a2fe5b9-_-VMc9tG.js";const m=t("table.columnValueTooltip"),b={src:s(p,"{{currentCell}}"),size:s(d,"50")},n=e=>e.src,h=function(){return new g(b,(e,o)=>{const a=e.changeValue??n(e);return r(l,{style:{pointerEvents:"auto"},src:a,width:e.size})},e=>e.src.value,n).setEditViewFn(e=>r(i,{defaultValue:e.value,autoFocus:!0,variant:"borderless",onChange:o=>{const a=o.target.value;e.onChange(a)},onBlur:e.onChangeEnd,onPressEnter:e.onChangeEnd})).setPropertyViewFn(e=>u(c,{children:[e.src.propertyView({label:t("table.imageSrc"),tooltip:m}),e.size.propertyView({label:t("table.imageSize")})]})).build()}();export{m as ColumnValueTooltip,h as ImageComp};
