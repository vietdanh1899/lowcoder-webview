const __vite__fileDeps=["./20dec157-BfuBCQug.js","./index-CyMr76_m.js","./index-BMPuTij9.css","./a210f5e6-DUYHgLOt.js","./3c1e04a8-bLQkYH-q.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a4 as i,fU as l,M as s,t as d,a0 as p,bN as m,d as a,eK as h}from"./index-CyMr76_m.js";import{D as n,f as u}from"./a210f5e6-DUYHgLOt.js";import{useUIView as w}from"./0a66c108-BO-PYvVj.js";const c=i(l)`
  width: 100%;
  box-shadow: ${e=>`${e.$style.boxShadow} ${e.$style.boxShadowColor}`};
  ${e=>e.$style&&n(e.$style)}
`,f=s.lazy(()=>d(()=>import("./20dec157-BfuBCQug.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(e=>({default:e.DateMobileUIView}))),b=e=>{const t=p.useContext(m),o=Array.isArray(e.placeholder)?e.placeholder[0]:e.placeholder;return w(a(f,{...e}),a(c,{...e,ref:e.viewRef,disabledDate:r=>u(r,e.minDate,e.maxDate),picker:"date",inputReadOnly:h(t==null?void 0:t.getAppSettings().maxWidth),placeholder:o}))};export{b as DateUIView};
