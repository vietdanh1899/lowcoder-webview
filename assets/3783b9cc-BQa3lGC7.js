const __vite__fileDeps=["./0f1af3d7-02MIGiVZ.js","./index-CyMr76_m.js","./index-BMPuTij9.css","./a210f5e6-DUYHgLOt.js","./3c1e04a8-bLQkYH-q.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a4 as i,d as o,M as l,t as n,a0 as s,bN as d,b7 as p,eK as u,dT as c,fX as m}from"./index-CyMr76_m.js";import{D as h}from"./a210f5e6-DUYHgLOt.js";import{useUIView as f}from"./0a66c108-BO-PYvVj.js";const{RangePicker:x}=m,g=i(e=>o(x,{...e}))`
  width: 100%;
  ${e=>e.$style&&h(e.$style)}
`,I=l.lazy(()=>n(()=>import("./0f1af3d7-02MIGiVZ.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(e=>({default:e.TimeRangeMobileUIView}))),b=e=>{const r=s.useContext(d);let t;return Array.isArray(e.placeholder)?t=e.placeholder:t=[e.placeholder||"Start Date",e.placeholder||"End Date"],f(o(I,{...e}),o(g,{...p.omit(e,"onChange"),value:[e.start,e.end],order:!0,hideDisabledOptions:!0,onCalendarChange:a=>{e.onChange(a==null?void 0:a[0],a==null?void 0:a[1])},inputReadOnly:u(r==null?void 0:r.getAppSettings().maxWidth),suffixIcon:c(e.suffixIcon)&&e.suffixIcon,placeholder:t}))};export{b as TimeRangeUIView};
