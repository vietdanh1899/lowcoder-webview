import{a4 as u,co as y,bR as d,bD as h,bs as i,cq as b,c7 as $,bF as m,d as a,as as r,k as l,bG as o,bH as n,aj as t,a0 as c,bN as g,bI as w,bJ as f,bL as p,bK as S,a6 as x,cb as v,cc as I}from"./index-CyMr76_m.js";const k=s=>x`
    line-height: 2;
    .ant-progress-text {
      color: ${s.text};
      font-style:${s.fontStyle};
        font-family:${s.fontFamily};
        font-weight:${s.textWeight};
        font-size:${s.textSize};
    }
    width: ${v(s.margin)};	
    height: ${I(s.margin)};	
    margin: ${s.margin};	
    padding: ${s.padding};
    .ant-progress-inner {
      background-color: ${s.track};
      .ant-progress-bg {
        background-color: ${s.fill};
      }
    }
    &.ant-progress-status-success {
      .ant-progress-bg {
        background-color: ${s.success};
      }
      .ant-progress-text {
        color: ${s.success};
      }
    }
  `,P=u(y)`
  ${s=>s.$style&&k(s.$style)}
  ${s=>s.$animationStyle}
`,V=function(){const s={value:d("value",60),showInfo:h,style:i(b),animationStyle:i($)};return new m(s,e=>a(P,{percent:Math.round(e.value.value),showInfo:e.showInfo,$style:e.style,$animationStyle:e.animationStyle})).setPropertyViewFn(e=>r(l,{children:[a(o,{name:n.basic,children:e.value.propertyView({label:t("progress.value"),tooltip:t("progress.valueTooltip")})}),["logic","both"].includes(c.useContext(g).editorModeStatus)&&r(o,{name:n.interaction,children:[w(e),e.showInfo.propertyView({label:t("progress.showInfo")})]}),["layout","both"].includes(c.useContext(g).editorModeStatus)&&r(l,{children:[a(o,{name:n.style,children:e.style.getPropertyView()}),a(o,{name:n.animationStyle,hasTooltip:!0,children:e.animationStyle.getPropertyView()})]})]})).build()}(),J=f(V,[new p("value",t("progress.valueDesc")),new p("showInfo",t("progress.showInfoDesc")),S]);export{J as ProgressComp,P as ProgressStyled};
