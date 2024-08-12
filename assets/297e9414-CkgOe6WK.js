import{cA as h,aj as s,a4 as b,cL as y,ct as p,bz as m,bS as w,bs as i,cu as v,c7 as S,cv as g,cM as C,cf as f,cN as k,bF as x,d as t,cO as P,as as o,k as u,bG as l,bH as n,a0 as c,bN as d,cx as F,bI as V,cP as $,cQ as D,cR as E,cS as M,bJ as I,bL as N,cy as X,a6 as K}from"./index-CyMr76_m.js";import{formDataChildren as L,FormDataPropertyView as O}from"./2606e654-BU0arLul.js";const R=[h,{label:s("switchComp.open"),value:"true",description:s("switchComp.openDesc")},{label:s("switchComp.close"),value:"false",description:s("switchComp.closeDesc")}],q=a=>K`
    .ant-switch-handle::before {
      background-color: ${a.handle};
    }
    button {
      background-image: none;
      background-color: ${a.unchecked};
      &.ant-switch-checked {
        background-color: ${a.checked};
      }
    }
  `,A=b.div`
  min-height: 32px;
  display: flex;
  align-items: center;
  // Can respond to drag & select events when disabled
  ${a=>a.disabled&&`
    cursor: not-allowed;
    >button:disabled {
      pointer-events: none;
    }
  `};
  ${a=>a.$style&&q(a.$style)}
`;function B(a){return a&&a.hasOwnProperty("unChecked")?{label:a.label,handle:a.handle,unchecked:a.unChecked,checked:a.checked}:a}let G=function(){const a={value:y("value"),label:p,onEvent:m(R),disabled:w,style:i(v),animationStyle:i(S),labelStyle:i(g.filter(e=>["accent","validate"].includes(e.name)===!1)),viewRef:C,inputFieldStyle:f(i(k),B),...L};return new x(a,e=>e.label({style:e.style,labelStyle:e.labelStyle,inputFieldStyle:e.inputFieldStyle,animationStyle:e.animationStyle,children:t(A,{disabled:e.disabled,$style:e.inputFieldStyle,children:t(P,{checked:e.value.value,disabled:e.disabled,ref:e.viewRef,onChange:r=>{e.value.onChange(r),e.onEvent("change"),e.onEvent(r?"true":"false")}})})})).setPropertyViewFn(e=>o(u,{children:[t(l,{name:n.basic,children:e.value.propertyView({label:s("switchComp.defaultValue")})}),t(O,{...e}),["logic","both"].includes(c.useContext(d).editorModeStatus)&&o(l,{name:n.interaction,children:[e.onEvent.getPropertyView(),F(e),V(e)]}),["layout","both"].includes(c.useContext(d).editorModeStatus)&&e.label.getPropertyView(),["layout","both"].includes(c.useContext(d).editorModeStatus)&&o(u,{children:[t(l,{name:n.style,children:e.style.getPropertyView()}),t(l,{name:n.labelStyle,children:e.labelStyle.getPropertyView()}),t(l,{name:n.inputFieldStyle,children:e.inputFieldStyle.getPropertyView()}),t(l,{name:n.animationStyle,hasTooltip:!0,children:e.animationStyle.getPropertyView()})]})]})).setExposeMethodConfigs($([D,E,M])).build()}();const Q=I(G,[new N("value",s("switchComp.valueDesc")),...X]);export{Q as SwitchComp};
