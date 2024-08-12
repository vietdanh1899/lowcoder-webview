import{a6 as p,a4 as d,hm as b,aj as r,bz as u,cA as h,bB as g,bs as y,hn as w,gO as f,bA as v,bD as c,bw as m,gJ as x,bF as P,d as t,F as k,as as s,k as V,bG as o,bH as l,cx as $,bI as C,bL as i}from"./index-CyMr76_m.js";import{FormDataPropertyView as A}from"./2606e654-BU0arLul.js";import{textInputChildren as F}from"./6273459c-DX34gMfV.js";import{presets as H}from"./3135181a-BaWk6kO7.js";function E(e){return p`
    border-radius: ${e.radius};
    &:not(.ant-input-disabled, .ant-input-affix-wrapper-disabled),
    input {
      background-color: ${e.background};
      color:${e.text};
      font-weight:${e.textWeight};
      font-family:${e.fontFamily};
      border-color: ${e.border};
      &:focus,
      &.ant-input-affix-wrapper-focused {
        border-color: ${e.accent};
      }
      &:hover {
        border-color: ${e.accent};
      }
      .ant-input-clear-icon svg:hover {
        opacity: 0.65;
      }
    }
  `}const S=d(b)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  ${e=>e.$style&&E(e.$style)}
`,U=[{label:r("colorPicker.click"),value:"click"},{label:r("colorPicker.hover"),value:"hover"}],D=u([h]),J={...F,value:g("value","#3377ff"),style:y(w),color:f("color",{}),trigger:v(U,"click"),disabledAlpha:c,showPresets:c,onEvent:D,presets:m(x,JSON.stringify(H,null,2))},G=new P(J,e=>{var n;return e.label({children:t(S,{$style:e.style,value:(n=e==null?void 0:e.value)==null?void 0:n.value,disabledAlpha:e.disabledAlpha,showText:a=>a.toHexString().toUpperCase(),allowClear:!0,trigger:e.trigger,disabled:e.disabled,onChange:a=>{e.value.onChange(a.toHexString().toUpperCase()),e.color.onChange({hex:a.toHexString().toUpperCase(),hsb:a.toHsb(),rgb:a.toRgb()}),e.onEvent("change")},presets:e.showPresets&&!k.isEmpty(e.presets)?[e.presets]:[]}),style:e.style})}).setPropertyViewFn(e=>s(V,{children:[t(o,{name:l.basic,children:e.value.propertyView({label:r("prop.defaultValue")})}),t(A,{...e}),e.label.getPropertyView(),s(o,{name:l.interaction,children:[e.onEvent.getPropertyView(),$(e)]}),s(o,{name:l.advanced,children:[e.trigger.propertyView({label:r("colorPicker.trigger"),radioButton:!0}),e.disabledAlpha.propertyView({label:r("colorPicker.disabledAlpha")}),e.showPresets.propertyView({label:r("colorPicker.showPresets")}),e.showPresets.getView()&&e.presets.propertyView({label:r("colorPicker.recommended")})]}),t(o,{name:l.layout,children:C(e)}),t(o,{name:l.style,children:e.style.getPropertyView()})]})).setExposeStateConfigs([new i("value",r("export.inputValueDesc")),new i("color",r("export.inputValueDesc")),new i("disabled",r("prop.disabled"))]).build();export{G as ColorPickerComp,D as colorPickerEvent,E as getStyle};
