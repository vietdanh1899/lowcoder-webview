const __vite__fileDeps=["./20dec157-BfuBCQug.js","./index-CyMr76_m.js","./index-BMPuTij9.css","./a210f5e6-DUYHgLOt.js","./3c1e04a8-bLQkYH-q.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a4 as r,M as s,t as i,a0 as n,bN as d,d as l,b7 as u,eK as p,dT as f,fU as h}from"./index-CyMr76_m.js";import{D as m,f as c}from"./a210f5e6-DUYHgLOt.js";import{useUIView as x}from"./0a66c108-BO-PYvVj.js";const{RangePicker:D}=h,w=r(D)`
  width: 100%;
  box-shadow: ${a=>`${a.$style.boxShadow} ${a.$style.boxShadowColor}`};
  ${a=>a.$style&&m(a.$style)}
`,y=s.lazy(()=>i(()=>import("./20dec157-BfuBCQug.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(a=>({default:a.DateRangeMobileUIView}))),v=a=>{const o=n.useContext(d);let t;return Array.isArray(a.placeholder)?t=a.placeholder:t=[a.placeholder||"Start Date",a.placeholder||"End Date"],x(l(y,{...a}),l(w,{...u.omit(a,"onChange"),ref:a.viewRef,value:[a.start,a.end],disabledDate:e=>c(e,a.minDate,a.maxDate),onCalendarChange:e=>{a.onChange(e==null?void 0:e[0],e==null?void 0:e[1])},inputReadOnly:p(o==null?void 0:o.getAppSettings().maxWidth),suffixIcon:f(a.suffixIcon)&&a.suffixIcon,placeholder:t}))};export{v as DateRangeUIView};
