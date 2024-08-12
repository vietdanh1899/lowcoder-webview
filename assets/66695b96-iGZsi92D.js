const __vite__fileDeps=["./0f1af3d7-02MIGiVZ.js","./index-CyMr76_m.js","./index-BMPuTij9.css","./a210f5e6-DUYHgLOt.js","./3c1e04a8-bLQkYH-q.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a4 as i,fX as o,M as l,t as s,a0 as p,bN as d,d as a,eK as m}from"./index-CyMr76_m.js";import{D as n}from"./a210f5e6-DUYHgLOt.js";import{useUIView as u}from"./0a66c108-BO-PYvVj.js";const h=i(o)`
  width: 100%;
  ${e=>e.$style&&n(e.$style)}
`,c=l.lazy(()=>s(()=>import("./0f1af3d7-02MIGiVZ.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(e=>({default:e.TimeMobileUIView}))),y=e=>{const t=p.useContext(d),r=Array.isArray(e.placeholder)?e.placeholder[0]:e.placeholder;return u(a(c,{...e}),a(h,{...e,ref:e.viewRef,hideDisabledOptions:!0,inputReadOnly:m(t==null?void 0:t.getAppSettings().maxWidth),placeholder:r}))};export{y as TimeUIView};
