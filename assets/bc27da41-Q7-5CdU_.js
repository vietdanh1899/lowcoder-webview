const __vite__fileDeps=["./883b663b-DDAYznLI.js","./index-CyMr76_m.js","./index-BMPuTij9.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a4 as S,cb as C,cc as E,cF as $,bw as p,aj as c,bT as F,c4 as V,ct as D,bs as h,cG as P,cv as k,bD as w,b_ as _,cH as N,M as I,t as U,bF as G,a0 as o,d as t,c8 as H,as as i,cE as K,cI as M,k as v,bG as n,bH as r,bN as u,bI as z,bJ as J,bL as L,bK as R,cJ as T,cK as j}from"./index-CyMr76_m.js";import{a as B}from"./e9802c6e-CHwHBeIV.js";import{formDataChildren as O,FormDataPropertyView as W}from"./2606e654-BU0arLul.js";const Y=S.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  border: ${e=>e.$style.borderWidth?e.$style.borderWidth:"1px"} solid ${e=>e.$style.border};
  border-radius: ${e=>e.$style.radius};
  overflow: hidden;
  width: 100%;
  height: 100%;
  width: ${e=>C(e.$style.margin)};	
  height: ${e=>E(e.$style.margin)};	
  margin: ${e=>e.$style.margin};	
  padding: ${e=>e.$style.padding};
  .signature {
    background-color: ${e=>e.$style.background};
    opacity: ${e=>e.$isEmpty?0:1};
    width: 100%;
    height: 100%;
  }

  .sigCanvas {
    flex-grow: 1;
  }
  .footer {
    position: absolute;
    bottom: 0;
    right: 0;
    padding-right: 8px;
    > span {
      margin: 0 8px 16px 8px;
      cursor: pointer;
      svg {
        color: ${e=>e.$style.footerIcon};
        width: 14px;
        height: 14px;
        path {
          fill: ${e=>e.$style.footerIcon};
        }
      }
      &:hover svg {
        color: ${e=>$(e.$style.footerIcon)};
        path {
          fill: ${e=>$(e.$style.footerIcon)};
        }
      }
    }
  }
  .empty {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${e=>e.$style.background};
    z-index: -1;
    color: ${e=>e.$style.tips};
  }
`,Z={tips:p(F,c("signature.signHere")),onEvent:V,label:p(D,{position:"column",text:""}),style:h(P),labelStyle:h(k),showUndo:p(w,!0),showClear:p(w,!0),value:_(""),inputFieldStyle:h(N),...O},A=I.lazy(()=>U(()=>import("./883b663b-DDAYznLI.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(e=>e.i));let y=function(){return new G(Z,(e,f)=>{let l=null;const[g,b]=o.useState(!1),[m,x]=o.useState([0,0]),d=(a=!1)=>{const s=a||(l==null?void 0:l.toData().length)===0;l&&(s&&(l==null||l.clear()),f(T({value:j(s?"":l.toDataURL(),!1)})))};return e.label({style:e.style,labelStyle:e.labelStyle,inputFieldStyle:e.inputFieldStyle,children:t(H,{onResize:(a,s)=>{a&&s&&x([a,s]),d(!0)},children:i(Y,{onMouseDown:a=>{a.preventDefault()},$style:e.inputFieldStyle,$isEmpty:!e.value&&!g,children:[t("div",{className:"signature",children:t(o.Suspense,{fallback:t(K,{}),children:t(A,{ref:a=>{l=a},penColor:e.inputFieldStyle.pen,clearOnResize:!1,canvasProps:{className:"sigCanvas",width:m[0],height:m[1]},onEnd:()=>{d(),b(!1),e.onEvent("change")},onBegin:()=>b(!0)})})}),(e.showClear||e.showUndo)&&i("div",{className:"footer",children:[e.showUndo&&t("span",{className:"anticon",children:t(M,{onClick:()=>{const a=l==null?void 0:l.toData();a&&(a==null||a.pop(),l==null||l.fromData(a),d(),e.onEvent("change"))}})}),e.showClear&&t(B,{onClick:()=>{d(!0),e.onEvent("change")}})]}),!(g||e.value)&&t("div",{className:"empty",children:e.tips})]})})})}).setPropertyViewFn(e=>i(v,{children:[t(n,{name:r.basic,children:e.tips.propertyView({label:c("signature.tips")})}),t(W,{...e}),["logic","both"].includes(o.useContext(u).editorModeStatus)&&i(n,{name:r.interaction,children:[e.onEvent.getPropertyView(),z(e),e.showUndo.propertyView({label:c("signature.showUndo")}),e.showClear.propertyView({label:c("signature.showClear")})]}),["layout","both"].includes(o.useContext(u).editorModeStatus)&&e.label.getPropertyView(),["layout","both"].includes(o.useContext(u).editorModeStatus)&&i(v,{children:[t(n,{name:r.style,children:e.style.getPropertyView()}),t(n,{name:r.labelStyle,children:e.labelStyle.getPropertyView()}),t(n,{name:r.inputFieldStyle,children:e.inputFieldStyle.getPropertyView()})]})]})).build()}();y=class extends y{autoHeight(){return!1}};const ee=J(y,[new L("value",c("value")),R]);export{ee as SignatureComp};
