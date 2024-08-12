import{a4 as d,co as u,bR as h,bs as o,cp as m,c7 as y,bF as $,d as a,as as l,k as c,bG as s,bH as r,aj as i,a0 as p,bN as g,bI as b,bJ as w,bL as x,bK as S,a6 as f,cb as v,cc as k}from"./index-CyMr76_m.js";const C=e=>f`
    width: ${v(e.margin)};	
    height: ${k(e.margin)};	
    margin: ${e.margin};	
    padding: ${e.padding};
    border-radius:${e.radius};
    .ant-progress-text {
      color: ${e.text} !important;
      font-family:${e.fontFamily};
      font-style:${e.fontStyle};
      font-size:${e.textSize} !important;
      font-weight:${e.textWeight};
    }
    .ant-progress-circle-trail {
      stroke: ${e.track};
    }
    .ant-progress-inner .ant-progress-circle-path {
      stroke: ${e.fill} !important;
    }
    &.ant-progress-status-success {
      .ant-progress-inner .ant-progress-circle-path {
        stroke: ${e.success} !important;
      }
      .ant-progress-text {
        color: ${e.success} !important;
      }
    }
  `,P=d(u)`
  ${e=>e.$animationStyle}
  width: 100%;
  height: 100%;
  padding: 2px;
  .ant-progress-inner {
    width: 100% !important;
    height: 100% !important;
  }

  .ant-progress-circle {
    width: 100%;
    height: 100%;
  }
  ${e=>e.$style&&C(e.$style)}
`;let n=function(){const e={value:h("value",60),style:o(m),animationStyle:o(y)};return new $(e,t=>a(P,{$style:t.style,$animationStyle:t.animationStyle,percent:Math.round(t.value.value),type:"circle"})).setPropertyViewFn(t=>l(c,{children:[a(s,{name:r.basic,children:t.value.propertyView({label:i("progress.value"),tooltip:i("progress.valueTooltip")})}),["logic","both"].includes(p.useContext(g).editorModeStatus)&&a(s,{name:r.interaction,children:b(t)}),["layout","both"].includes(p.useContext(g).editorModeStatus)&&l(c,{children:[a(s,{name:r.style,children:t.style.getPropertyView()}),a(s,{name:r.animationStyle,hasTooltip:!0,children:t.animationStyle.getPropertyView()})]})]})).build()}();n=class extends n{autoHeight(){return!1}};const F=w(n,[new x("value",i("progress.valueDesc")),S]);export{F as ProgressCircleComp,P as StyledProgressCircle};
