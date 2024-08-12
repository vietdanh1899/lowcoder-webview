const __vite__fileDeps=["./9d802101-4Wjr_XWN.js","./4eadd801-YNcx5bN-.js","./index-CyMr76_m.js","./index-BMPuTij9.css","./51a4d84d-1DReg7oU.js","./209c69f0-Co7_eCID.js","./2f65199c-n-_s74j7.js","./2c033cdc-DMrTp36_.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a4 as h,fV as p,as as C,d as s,fE as d,fF as l,aj as i,t as y,dK as r,fD as m}from"./index-CyMr76_m.js";import{v as b}from"./a210f5e6-DUYHgLOt.js";import{a as D}from"./3c1e04a8-bLQkYH-q.js";const c=async e=>{const a=(await y(()=>import("./9d802101-4Wjr_XWN.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url).then(t=>t.b)).default,o=r(e.minDate,m,!0),u=r(e.maxDate,m,!0),{disabledHours:v,disabledMinutes:x,disabledSeconds:w}=e.disabledTime();a.prompt({getContainer:e.getContainer,mouseWheel:!0,cancelText:i("cancel"),confirmText:i("ok"),destroyOnClose:!0,closeOnMaskClick:!0,min:o.isValid()?o.toDate():void 0,max:u.isValid()?u.toDate():void 0,precision:e.showTime?"second":"day",defaultValue:e.value?e.value.toDate():void 0,filter:{hour:t=>!v().includes(t),minute:(t,{date:n})=>!x(n.getHours()).includes(t),second:(t,{date:n})=>!w(n.getHours(),n.getMinutes()).includes(t)},onConfirm:t=>{const n=r(t);e.onChange(n)},onClose:e.onBlur}),e.onFocus()},g=h.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
  background-color: #ffffff;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #d7d9e0;
  ${e=>e.$style&&b(e.$style)}
`,f=h.div`
  overflow: hidden;
  white-space: nowrap;
  flex-grow: 1;
  display: flex;
  justify-content: center;
`,V=e=>{const a=p();return C(g,{ref:e.viewRef,$style:e.$style,onClick:()=>c({...e,getContainer:a}),children:[s(f,{children:e.value?e.value.format(e.format||(e.showTime?d:l)):e.placeholder??i("date.placeholder")}),e.suffixIcon]})},_=e=>{const a=p();return C(g,{ref:e.viewRef,$style:e.$style,children:[s(f,{onClick:()=>c({...e,value:e.start,onChange:o=>e.onChange(o,e.end),getContainer:a}),children:e.start?e.start.format(e.format||(e.showTime?d:l)):i("date.startDate")}),s(D,{}),s(f,{onClick:()=>c({...e,value:e.end,onChange:o=>e.onChange(e.start,o),getContainer:a}),children:e.end?e.end.format(e.format||(e.showTime?d:l)):i("date.endDate")}),e.suffixIcon]})};export{V as DateMobileUIView,_ as DateRangeMobileUIView};
