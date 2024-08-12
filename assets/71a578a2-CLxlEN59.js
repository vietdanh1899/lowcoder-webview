import{a4 as g,ei as f,aj as o,bU as v,d7 as V,bT as b,bw as r,by as S,bx as m,ea as B,bD as s,as as u,k as w,bB as $,bs as d,ej as x,ek as T,c7 as k,el as F,bA as y,bF as C,d as a,bG as n,bH as i,bI as P,bJ as q,bL as E,bK as G}from"./index-CyMr76_m.js";const h=g(f)`
  ${e=>e.$animationStyle}
`,A=g.div`
    width: 0px;
    height: 0px;
    overflow: hidden;
    .ant-float-btn-group {
        inset-block-end: 0px;
        right: -40px;
    }
    .ant-float-btn {
        right: 0px;
        inset-block-end: -8px;
    }
    .ant-float-btn-primary .ant-float-btn-body {
    background-color: ${e=>e.$style.background};
    border: ${e=>e.$style.border};
    border-style: ${e=>e.$style.borderStyle};
    border-width: ${e=>e.$style.borderWidth};
    }
`,D=[{label:o("floatButton.square"),value:"square"},{label:o("floatButton.circle"),value:"circle"}],I=[{label:o("floatButton.primary"),value:"primary"},{label:o("floatButton.default"),value:"default"}],U=new v({id:V(-1),label:b,badge:r(S,0),description:r(b,""),icon:r(m,"/icon:antd/questioncircleoutlined"),onEvent:B,hidden:s},e=>e).setPropertyViewFn(e=>u(w,{children:[e.label.propertyView({label:o("label")}),e.description.propertyView({label:o("floatButton.description")}),e.badge.propertyView({label:o("floatButton.badge")}),e.hidden.propertyView({label:o("floatButton.hidden")}),e.icon.propertyView({label:o("icon")}),e.onEvent.getPropertyView()]})).build(),j={value:$("value"),includeMargin:s.DEFAULT_TRUE,image:b,icon:r(m,"/icon:antd/questioncircleoutlined"),badgeStyle:d(x),style:d(T),animationStyle:d(k),buttons:F(U,{initOptions:[{id:0,label:o("optionsControl.optionI",{i:"1"}),icon:"/icon:antd/filetextoutlined",badge:"1"},{id:1,label:o("optionsControl.optionI",{i:"2"}),icon:"/icon:antd/filetextoutlined"}],autoIncField:"id"}),shape:y(D,"circle"),buttonTheme:y(I,"primary"),dot:s},H=e=>{const p=(t,l)=>t!=null&&t.hidden?"":a(h,{$animationStyle:e.animationStyle,icon:t==null?void 0:t.icon,onClick:()=>t.onEvent("click"),tooltip:t==null?void 0:t.label,description:t==null?void 0:t.description,badge:{count:t==null?void 0:t.badge,color:e.badgeStyle.badgeColor,dot:e==null?void 0:e.dot},type:l?e.buttonTheme:"default",shape:e.shape},t==null?void 0:t.id);return a(A,{$badgeStyle:e.badgeStyle,$style:e.style,children:e.buttons.length===1?p(e.buttons[0],!0):a(h.Group,{trigger:"hover",icon:e.icon,shape:e.shape,badge:{count:e.buttons.reduce((t,l)=>t+(l.buttonType==="custom"&&!l.hidden?l.badge:0),0),color:e.badgeStyle.badgeColor,dot:e.dot},type:e.buttonTheme,children:e.buttons.map(t=>p(t))})})};let c=function(){return new C(j,e=>a(H,{...e})).setPropertyViewFn(e=>u(w,{children:[u(n,{name:i.basic,children:[e.buttons.propertyView({}),e.icon.propertyView({label:o("icon")}),e.shape.propertyView({label:o("floatButton.buttonShape"),radioButton:!0}),e.buttonTheme.propertyView({label:o("floatButton.buttonTheme"),radioButton:!0}),e.dot.propertyView({label:o("floatButton.dot")})]}),a(n,{name:i.layout,children:P(e)}),a(n,{name:i.badgeStyle,children:e.badgeStyle.getPropertyView()}),a(n,{name:i.style,children:e.style.getPropertyView()}),a(n,{name:i.animationStyle,hasTooltip:!0,children:e.animationStyle.getPropertyView()})]})).build()}();c=class extends c{autoHeight(){return!0}};const N=q(c,[new E("value",o("QRCode.valueDesc")),G]);export{N as FloatButtonComp};
