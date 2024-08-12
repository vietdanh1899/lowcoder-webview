import{a4 as u,aj as a,bw as c,ck as p,bz as y,bs as s,hk as b,c7 as m,bD as n,bF as h,d as t,as as l,k as w,bG as o,bH as i,a0 as r,bN as d,bI as f,bJ as v,bL as P,bK as $,hl as x}from"./index-CyMr76_m.js";import{mediaCommonChildren as S,mediaMethods as V}from"./b82efbc0-cu08SxsY.js";const g=u.div`
${e=>e.$style};
rotate:${e=>e.$style.rotation};
${e=>e.$animationStyle};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  div > audio {
    object-fit: contain;
    pointer-events: auto;
    height: 100%;
    width: 100%;
    :focus-visible {
      outline: 0px;
    }
  }
`,E=[{label:a("audio.play"),value:"play",description:a("audio.playDesc")},{label:a("audio.pause"),value:"pause",description:a("audio.pauseDesc")},{label:a("audio.ended"),value:"ended",description:a("audio.endedDesc")}],D=e=>t(g,{ref:e.containerRef,$style:e.style,$animationStyle:e.animationStyle,children:t(x,{audioRef:e.viewRef,url:e.src.value,onPlay:()=>e.onEvent("play"),onPause:()=>e.onEvent("pause"),onEnded:()=>e.onEvent("ended"),autoPlay:e.autoPlay,loop:e.loop})}),C={src:c(p,a("audio.defaultSrcUrl")),onEvent:y(E),style:s(b),animationStyle:s(m),autoPlay:n,loop:n,...S};let M=function(){return new h(C,e=>t(D,{...e})).setPropertyViewFn(e=>l(w,{children:[t(o,{name:i.basic,children:e.src.propertyView({label:a("audio.src"),tooltip:a("audio.srcDesc")})}),(r.useContext(d).editorModeStatus==="logic"||r.useContext(d).editorModeStatus==="both")&&l(o,{name:i.interaction,children:[e.onEvent.getPropertyView(),f(e),e.autoPlay.propertyView({label:a("audio.autoPlay")}),e.loop.propertyView({label:a("audio.loop")})]}),t(o,{name:i.style,children:e.style.getPropertyView()}),t(o,{name:i.animationStyle,hasTooltip:!0,children:e.animationStyle.getPropertyView()})]})).setExposeMethodConfigs(V()).build()}();const j=v(M,[new P("src",a("audio.srcDesc")),$]);export{j as AudioComp};
