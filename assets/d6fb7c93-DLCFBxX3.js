import{a4 as b,bw as r,bD as h,c3 as S,c4 as V,c5 as f,bs as y,c6 as x,c7 as D,bF as v,a0 as l,d as a,c8 as C,c9 as k,as as o,k as d,bG as s,bH as n,aj as i,bN as p,bI as E,bJ as F,bL as H,bK as N}from"./index-CyMr76_m.js";import{formDataChildren as G,FormDataPropertyView as J}from"./2606e654-BU0arLul.js";const M=b.div`
  background: ${t=>t.$src&&`url(${t.$src})`} no-repeat 50% 50%;
  background-size: contain;
`,z=b.div`
  &,
  .ant-carousel {
    height: 100%;
    background-color: ${t=>t.$bg};
    ${t=>t.$animationStyle}
  }
`;let u=function(){const t={autoPlay:r(h,!0),data:r(S,JSON.stringify(["https://temp.im/403x192","https://temp.im/403x192"])),onEvent:V,showDots:r(h,!0),dotPosition:r(f,"bottom"),style:y(x),animationStyle:y(D),...G};return new v(t,e=>{const c=l.useRef(null),[m,w]=l.useState(0),g=()=>{c.current&&w(c.current.clientHeight)};return a(z,{ref:c,$bg:e.style.background,$animationStyle:e.animationStyle,children:a(C,{onResize:g,children:a(k,{dots:e.showDots,dotPosition:e.dotPosition,autoplay:e.autoPlay,afterChange:()=>e.onEvent("change"),children:e.data.map((P,$)=>a("div",{children:a(M,{$src:P,style:{height:m}})},$))})})})}).setPropertyViewFn(e=>o(d,{children:[a(s,{name:n.basic,children:e.data.propertyView({label:i("data")})}),["logic","both"].includes(l.useContext(p).editorModeStatus)&&o(d,{children:[a(J,{...e}),o(s,{name:n.interaction,children:[e.onEvent.getPropertyView(),E(e),e.autoPlay.propertyView({label:i("carousel.autoPlay")})]})]}),["layout","both"].includes(l.useContext(p).editorModeStatus)&&o(d,{children:[o(s,{name:n.layout,children:[e.showDots.propertyView({label:i("carousel.showDots")}),e.dotPosition.propertyView({label:i("carousel.dotPosition"),radioButton:!0})]}),a(s,{name:n.style,children:e.style.getPropertyView()}),a(s,{name:n.animationStyle,hasTooltip:!0,children:e.animationStyle.getPropertyView()})]})]})).build()}();u=class extends u{autoHeight(){return!1}};const R=F(u,[new H("data",i("data")),N]);export{R as CarouselComp};
