import{a4 as h,ik as g,bB as c,ct as f,bS as y,c4 as x,ig as w,bw as v,bs as u,il as S,c7 as $,cM as V,bF as C,d as a,dT as I,as as n,k as o,bG as i,bH as s,aj as m,a0 as l,bN as d,cx as k,bI as D,bJ as P,bL as F,cy as M,a6 as B,cf as E}from"./index-CyMr76_m.js";import{formDataChildren as L,FormDataPropertyView as N}from"./2606e654-BU0arLul.js";import{SelectInputValidationChildren as T,useSelectInputValidate as W,SelectInputValidationSection as q,selectDivRefMethods as H,SelectInputInvalidConfig as R}from"./3b4688fc-D_wIQU04.js";import{fixOldInputCompData as z}from"./6273459c-DX34gMfV.js";const G=e=>B`
    &.ant-segmented:not(.ant-segmented-disabled) {
      &,
      .ant-segmented-item-selected,
      .ant-segmented-thumb,
      .ant-segmented-item:hover,
      .ant-segmented-item:focus {
        color: ${e.text};
        border-radius: ${e.radius};
      }
      .ant-segmented-item {
        padding: ${e.padding};
      }
      .ant-segmented-item-selected,
      .ant-segmented-thumb {
        background-color: ${e.indicatorBackground};
      }
    }

    &.ant-segmented,
    .ant-segmented-item-selected {
      border-radius: ${e.radius};
    }
    &.ant-segmented, .ant-segmented-item-label {
      font-family:${e.fontFamily};
      font-style:${e.fontStyle};
      font-size:${e.textSize};
      font-weight:${e.textWeight};
      text-transform:${e.textTransform};
      text-decoration:${e.textDecoration};
    }
  `,J=h(g)`
  width: 100%;
  min-height: 24px; // keep the height unchanged when there are no options
  ${e=>e.$style&&G(e.$style)}
`,O={defaultValue:c("value"),value:c("value"),label:f,disabled:y,onEvent:x,options:w,style:v(u(S),{borderWidth:"1px"}),animationStyle:u($),viewRef:V,...T,...L};let r=function(){return new C(O,e=>{const[p,b]=W(e);return e.label({required:e.required,style:e.style,animationStyle:e.animationStyle,children:a(J,{ref:e.viewRef,block:!0,disabled:e.disabled,value:e.value.value,$style:e.style,onChange:t=>{b(t.toString())},options:e.options.filter(t=>t.value!==void 0&&!t.hidden).map(t=>({label:t.label,value:t.value,disabled:t.disabled,icon:I(t.prefixIcon)&&t.prefixIcon}))}),...p})}).setPropertyViewFn(e=>n(o,{children:[n(i,{name:s.basic,children:[e.options.propertyView({}),e.defaultValue.propertyView({label:m("prop.defaultValue")})]}),["logic","both"].includes(l.useContext(d).editorModeStatus)&&n(o,{children:[a(q,{...e}),a(N,{...e}),n(i,{name:s.interaction,children:[e.onEvent.getPropertyView(),k(e),D(e)]})]}),["layout","both"].includes(l.useContext(d).editorModeStatus)&&e.label.getPropertyView(),["layout","both"].includes(l.useContext(d).editorModeStatus)&&n(o,{children:[a(i,{name:s.style,children:e.style.getPropertyView()}),a(i,{name:s.animationStyle,hasTooltip:!0,children:e.animationStyle.getPropertyView()})]})]})).setExposeMethodConfigs(H).build()}();r=E(r,z);const Q=P(r,[new F("value",m("selectInput.valueDesc")),R,...M]);export{Q as SegmentedControlComp};
