import{aj as o,a4 as S,bw as u,ck as v,bz as P,bs as y,ho as V,c7 as T,bD as s,fB as m,bR as b,bF as R,d as t,as as n,k as h,bG as i,bH as l,a0 as r,bN as w,bI as k,bJ as C,bL as d,bK as $,hp as x,hq as D}from"./index-CyMr76_m.js";import{mediaCommonChildren as E,mediaMethods as F}from"./b82efbc0-cu08SxsY.js";const H=[{label:o("video.play"),value:"play",description:o("video.playDesc")},{label:o("video.pause"),value:"pause",description:o("video.pauseDesc")},{label:o("video.load"),value:"load",description:o("video.loadDesc")},{label:o("video.ended"),value:"ended",description:o("video.endedDesc")}],M=S.div`
${e=>e.$style};
rotate:${e=>e.$style.rotation};
${e=>e.$animationStyle};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  div > video {
    object-fit: contain;
    pointer-events: auto;
    height: 100%;
    width: 100%;
    :focus-visible {
      outline: 0px;
    }
  }
`,j=e=>{const a=r.useRef(null);let[f,g]=r.useState(!1);return t(M,{ref:e.containerRef,$style:e.style,$animationStyle:e.animationStyle,children:t(x,{config:{file:{forceVideo:!0}},light:e.autoPlay?"":e.poster.value,ref:p=>{e.viewRef(p),a.current=p},url:e.src.value,onPlay:()=>e.onEvent("play"),onReady:()=>{a.current!=null&&e.duration.onChange(a.current.getDuration()),e.onEvent("load")},onPause:()=>e.onEvent("pause"),onEnded:()=>e.onEvent("ended"),loop:e.loop,controls:!e.controls,volume:e.volume,style:e.style,playbackRate:e.playbackRate,onClickPreview:()=>{g(!0)},draggable:!1,playIcon:D(),playing:e.autoPlay||f,onProgress:()=>{a.current!=null&&e.currentTimeStamp.onChange(a.current.getCurrentTime())}})})},I={src:u(v,o("video.defaultSrcUrl")),poster:u(v,o("video.defaultPosterUrl")),onEvent:P(H),style:y(V),animationStyle:y(T),autoPlay:s,loop:s,controls:s,volume:m.closed(0,1,1),playbackRate:m.closed(1,2,1),currentTimeStamp:b("currentTimeStamp",0),duration:b("duration"),...E};let c=function(){return new R(I,e=>t(j,{...e})).setPropertyViewFn(e=>n(h,{children:[t(i,{name:l.basic,children:e.src.propertyView({label:o("video.src"),tooltip:o("video.srcDesc")})}),(r.useContext(w).editorModeStatus==="logic"||r.useContext(w).editorModeStatus==="both")&&n(h,{children:[n(i,{name:l.interaction,children:[e.onEvent.getPropertyView(),k(e)]}),n(i,{name:l.advanced,children:[e.poster.propertyView({label:o("video.poster"),tooltip:o("video.posterTooltip")}),e.volume.propertyView({label:o("video.volume"),tooltip:o("video.volumeTooltip")}),e.playbackRate.propertyView({label:o("video.playbackRate"),tooltip:o("video.playbackRateTooltip")}),e.autoPlay.propertyView({label:o("video.autoPlay"),tooltip:o("video.autoPlayTooltip")}),e.loop.propertyView({label:o("video.loop")}),e.controls.propertyView({label:o("video.controls"),tooltip:o("video.controlsTooltip")})]}),t(i,{name:l.style,children:e.style.getPropertyView()}),t(i,{name:l.animationStyle,hasTooltip:!0,children:e.animationStyle.getPropertyView()})]})]})).setExposeMethodConfigs(F()).build()}();c=class extends c{autoHeight(){return!1}};const A=C(c,[new d("src",o("video.srcDesc")),new d("currentTimeStamp",o("video.currentTimeStamp")),new d("duration",o("video.duration")),$]);export{A as VideoComp};
