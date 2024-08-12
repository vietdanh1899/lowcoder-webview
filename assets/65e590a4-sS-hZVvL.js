import{aj as e,bR as g,bB as h,bA as r,bD as m,bS as k,c4 as S,im as z,bw as D,bs as w,io as P,cM as T,c7 as I,bF as E,a4 as B,cb as C,cc as F,a0 as n,d as a,dR as M,ip as x,dT as N,as as i,k as u,bG as o,bH as l,bN as d,cx as R,bI as A,bJ as H,bL as b,cy as K}from"./index-CyMr76_m.js";import{selectDivRefMethods as W}from"./3b4688fc-D_wIQU04.js";const j=[{label:e("step.sizeSmall"),value:"small"},{label:e("step.sizeDefault"),value:"default"}],q=[{label:e("step.typeDefault"),value:"default"},{label:e("step.typeNavigation"),value:"navigation"},{label:e("step.typeInline"),value:"inline"}],v=[{label:e("step.directionHorizontal"),value:"horizontal"},{label:e("step.directionVertical"),value:"vertical"}];e("step.statusProcess"),e("step.statusWait"),e("step.statusFinish"),e("step.statusError");const G={initialValue:g("1"),value:h("value"),stepStatus:h("process"),stepPercent:g("60"),size:r(j,"default"),displayType:r(q,"default"),direction:r(v,"horizontal"),showDots:m,showIcons:m,selectable:m,labelPlacement:r(v,"horizontal"),disabled:k,onEvent:S,options:z,style:D(w(P),{text:"#D7D9E0"}),viewRef:T,animationStyle:w(I)};let L=function(){return new E(G,t=>{const f=B.div`
    ${s=>s.$animationStyle}
      min-height: 24px;
      max-width: ${C(t.style.margin)};
      max-height: ${F(t.style.margin)};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-decoration: ${t.style.textDecoration};
      font-style: ${t.style.fontStyle};
      font-weight: ${t.style.textWeight};
      font-size: ${t.style.textSize};
      text-transform: ${t.style.textTransform};
      margin: ${t.style.margin};
      rotate: ${t.style.rotation};
      padding: ${t.style.padding};
      background-color: ${t.style.background};
      border: ${t.style.borderWidth} solid ${t.style.border};
      border-radius: ${t.style.radius};
      background-image: url(${t.style.backgroundImage});
      background-repeat: ${t.style.backgroundImageRepeat};
      background-size: ${t.style.backgroundImageSize};
      background-position: ${t.style.backgroundImagePosition};
      background-origin: ${t.style.backgroundImageOrigin};
      .ant-steps-item { padding-top: 5px !important; }
      .ant-steps.ant-steps-label-vertical.ant-steps-small .ant-steps-item-icon { margin-top: 17px !important; }
      .ant-steps.ant-steps-label-vertical.ant-steps-default .ant-steps-item-icon { margin-top: 12px !important; }
      .ant-steps.ant-steps-dot .ant-steps-item-process .ant-steps-icon .ant-steps-icon-dot { margin-top: 4px !important; }
      .ant-steps.ant-steps-default .ant-steps-item-icon .ant-steps-icon-dot { margin-top: 9px !important; }
      .ant-steps.ant-steps-small .ant-steps-item-icon .ant-steps-icon-dot { margin-top: 4px !important; }
      .ant-steps.ant-steps-dot .ant-steps-item-title { margin-top: 10px !important; }
      .ant-steps.ant-steps-default.ant-steps-with-progress.ant-steps-label-horizontal .ant-steps-item.ant-steps-item-custom div.ant-steps-item-icon { margin-top:4px !important; }
      .ant-steps.ant-steps-default.ant-steps-with-progress.ant-steps-label-vertical .ant-steps-item.ant-steps-item-custom div.ant-steps-item-icon { margin-top:17px !important; }
      .ant-steps.ant-steps-dot.ant-steps-small.ant-steps-with-progress .ant-steps-item-icon .ant-progress { inset-block-start: -8px !important; inset-inline-start: -11px !important; }
      .ant-steps.ant-steps-dot.ant-steps-default.ant-steps-with-progress .ant-steps-item-icon .ant-progress { inset-block-start: -7px !important; inset-inline-start: -13px !important; }
      .ant-steps.ant-steps-small.ant-steps-with-progress .ant-steps-item:not(.ant-steps-item-custom) .ant-progress { inset-block-start: -5px !important; inset-inline-start: -5px !important; }
      .ant-steps.ant-steps-default.ant-steps-with-progress .ant-steps-item:not(.ant-steps-item-custom) .ant-progress { inset-block-start: -5px !important; inset-inline-start: -5px !important; }
      .ant-steps.ant-steps-small.ant-steps-with-progress .ant-steps-item.ant-steps-item-custom .ant-progress { inset-block-start: -5px !important; inset-inline-start: -10px !important; }
      .ant-steps.ant-steps-default.ant-steps-with-progress .ant-steps-item.ant-steps-item-custom .ant-progress { inset-block-start: -4px !important; inset-inline-start: -13px !important; }
    `,[V,y]=n.useState(t.initialValue.value-1);n.useEffect(()=>{const s=Number(t.value.value);y(s-1)},[t.value.value]);const $=s=>{var p;if(t.selectable==!1)return;const c=Math.max(0,s);y(c),((p=t.options[c])==null?void 0:p.value)!==void 0&&(t.value.onChange(c+1+""),t.onEvent("change"))};return a(M,{theme:{token:{colorPrimary:t.style.activeBackground,colorText:t.style.titleText,colorTextDescription:t.style.text,fontFamily:t.style.fontFamily}},children:a(f,{style:t.style,$animationStyle:t.animationStyle,children:a(x,{initial:t.initialValue.value-1,current:V,onChange:$,percent:t.stepPercent.value,status:t.stepStatus.value,type:t.displayType,size:t.size,labelPlacement:t.labelPlacement,progressDot:t.showDots,direction:t.direction,children:t.options.map((s,p)=>a(x.Step,{title:s.label,subTitle:s.subTitle,description:s.description,status:s.status,icon:t.showIcons&&N(s.icon)&&s.icon||void 0},p))})})})}).setPropertyViewFn(t=>i(u,{children:[i(o,{name:l.basic,children:[t.options.propertyView({}),t.initialValue.propertyView({label:e("step.initialValue"),tooltip:e("step.initialValueTooltip")})]}),["logic","both"].includes(n.useContext(d).editorModeStatus)&&a(u,{children:i(o,{name:l.interaction,children:[t.onEvent.getPropertyView(),R(t),A(t),t.stepStatus.propertyView({label:e("step.status")}),t.stepPercent.propertyView({label:e("step.percent")}),t.selectable.propertyView({label:e("step.selectable")})]})}),["layout","both"].includes(n.useContext(d).editorModeStatus)&&i(o,{name:l.layout,children:[t.size.propertyView({label:e("step.size"),radioButton:!0}),t.displayType.propertyView({label:e("step.type"),radioButton:!1}),t.direction.propertyView({label:e("step.direction"),radioButton:!0}),t.direction.getView()=="horizontal"&&t.labelPlacement.propertyView({label:e("step.labelPlacement"),radioButton:!0}),t.displayType.getView()!="inline"&&!t.showIcons.getView()&&t.showDots.propertyView({label:e("step.showDots")}),t.displayType.getView()!="inline"&&!t.showDots.getView()&&t.showIcons.propertyView({label:e("step.showIcons")})]}),["layout","both"].includes(n.useContext(d).editorModeStatus)&&i(u,{children:[a(o,{name:l.style,children:t.style.getPropertyView()}),a(o,{name:l.animationStyle,hasTooltip:!0,children:t.animationStyle.getPropertyView()})]})]})).setExposeMethodConfigs(W).build()}();const Q=H(L,[new b("value",e("step.valueDesc")),new b("stepStatus",e("step.status")),new b("stepPercent",e("step.percent")),...K]);export{Q as StepComp};
