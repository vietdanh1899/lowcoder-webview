const __vite__fileDeps=["./51a4d84d-1DReg7oU.js","./4eadd801-YNcx5bN-.js","./index-CyMr76_m.js","./index-BMPuTij9.css","./209c69f0-Co7_eCID.js","./2f65199c-n-_s74j7.js","./2c033cdc-DMrTp36_.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a4 as b,as as h,d as t,fW as s,aj as i,t as x,dk as $,dK as f,fR as p,fY as w,b7 as m}from"./index-CyMr76_m.js";import{v as k}from"./a210f5e6-DUYHgLOt.js";import{a as R}from"./3c1e04a8-bLQkYH-q.js";const _=(e=1)=>[...m.range(0,24,e).map(a=>{const n=(a<10?"0":"")+a;return{label:n,value:n}})],H=(e=1)=>[...m.range(0,12,e).map(a=>{const n=(a<10?"0":"")+a;return{label:n,value:n}})],v=(e=1)=>m.range(0,60,e).map(a=>{const n=(a<10?"0":"")+a;return{label:n,value:n}}),I=[{label:"AM",value:"am"},{label:"PM",value:"pm"}],u=async e=>{const a=(await x(()=>import("./51a4d84d-1DReg7oU.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(o=>o.R)).default,{disabledHours:n,disabledMinutes:g,disabledSeconds:C}=e.disabledTime();a.prompt({getContainer:()=>document.querySelector(`#${$}`)||document.body,mouseWheel:!0,destroyOnClose:!0,closeOnMaskClick:!0,columns:o=>{const l=f(o.join(":"),p);return[(e.use12Hours?H:_)(e.hourStep).filter(({label:c,value:r})=>!n().includes(Number(r)+(o[3]==="pm"?12:0))),v(e.minuteStep).filter(({label:c,value:r})=>!g(l.hour()).includes(Number(r))),v(e.secondStep).filter(({label:c,value:r})=>!C(l.hour(),l.minute()).includes(Number(r))),...e.use12Hours?[I]:[]]},defaultValue:e.value?e.value.format(e.use12Hours?w:s).split(":"):void 0,onConfirm:o=>{const l=f(o.join(":"),p);e.onChange(l)},onClose:e.onBlur}),e.onFocus()},y=b.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
  background-color: #ffffff;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #d7d9e0;

  ${e=>e.$style&&k(e.$style)}
`,d=b.div`
  overflow: hidden;
  white-space: nowrap;
  flex-grow: 1;
  display: flex;
  justify-content: center;
`,S=e=>h(y,{ref:e.viewRef,$style:e.$style,onClick:()=>{u(e)},children:[t(d,{children:e.value?e.value.format(e.format||s):i("time.placeholder")}),e.suffixIcon]}),V=e=>h(y,{ref:e.viewRef,$style:e.$style,children:[t(d,{onClick:()=>u({...e,value:e.start,onChange:a=>e.onChange(a,e.end)}),children:e.start?e.start.format(e.format||s):i("time.startTime")}),t(R,{}),t(d,{onClick:()=>u({...e,value:e.end,onChange:a=>e.onChange(e.start,a)}),children:e.end?e.end.format(e.format||s):i("time.endTime")}),e.suffixIcon]});export{S as TimeMobileUIView,V as TimeRangeMobileUIView};
