const __vite__fileDeps=["./57b344e7-BiDLrFu_.js","./index-CyMr76_m.js","./index-BMPuTij9.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a4 as C,en as q,M as I,t as j,d6 as T,bw as v,aj as s,bT as F,bD as x,eo as L,bS as N,bs as U,eh as Y,cM as $,bF as A,a0 as n,as as i,d as t,cE as G,bO as H,bQ as J,cX as z,k as y,bG as d,bH as u,bN as h,cx as K,bI as Q,bJ as W,bL as E,cy as X}from"./index-CyMr76_m.js";import{ButtonCompWrapper as Z,Button100 as ee,buttonRefMethods as te}from"./73e0b0c0-cg4qSQqq.js";const ae=C.div`
  color: #f5222d;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,ne=C.div`
  video,
  .ant-skeleton {
    height: 400px;
    max-height: 70vh;
    position: relative;
    object-fit: cover;
    background-color: #000;
  }
  .ant-skeleton {
    h3,
    li {
      background-color: transparent;
    }
  }
`,se=C(q)`
  top: 10vh;
  .react-draggable {
    max-width: 100%;
    width: 500px;
  }
`,oe=I.lazy(()=>j(()=>import("./57b344e7-BiDLrFu_.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(p=>p.i)),ie=function(){const p={data:T("data"),text:v(F,s("scanner.text")),continuous:x,uniqueData:v(x,!0),maskClosable:v(x,!0),onEvent:L,disabled:N,style:U(Y),viewRef:$};return new A(p,e=>{const[l,b]=n.useState(!1),[f,m]=n.useState(""),[g,M]=n.useState({facingMode:"environment"}),[V,D]=n.useState([]),[R,k]=n.useState(!1),[S,w]=n.useState(!1);n.useEffect(()=>{!l&&S&&e.onEvent("success")},[S,l]);const r=n.useRef([]),P=(a,c)=>{if(c)if(e.continuous){r.current=[...r.current,c.text];const o=e.uniqueData?[...new Set(r.current)]:r.current;e.data.onChange(o),e.onEvent("success")}else e.data.onChange([c.text]),b(!1),w(!0);else w(!1)},B=a=>{typeof a=="string"?m(a):a.message==="getUserMedia is not implemented in this browser"?m(s("scanner.errTip")):m(a.message),w(!1)},O=()=>{navigator.mediaDevices.enumerateDevices().then(a=>{const c=a.filter(o=>o.kind==="videoinput").map((o,_)=>({label:o.label||s("scanner.camera",{index:_+1}),key:o.deviceId}));D(c)})};return i(Z,{disabled:e.disabled,children:[t(ee,{ref:e.viewRef,$buttonStyle:e.style,disabled:e.disabled,onClick:()=>{e.onEvent("click"),b(!0),r.current=[]},children:t("span",{children:e.text})}),t(se,{showOkButton:!1,showCancelButton:!1,open:l,maskClosable:e.maskClosable,destroyOnClose:!0,onCancel:()=>{b(!1),e.onEvent("close")},children:f?t(ae,{children:f}):l&&i(ne,{children:[t(n.Suspense,{fallback:t(G,{}),children:t(oe,{delay:1e3,onUpdate:P,onError:B,videoConstraints:g},JSON.stringify(g))}),t("div",{style:{height:"42px"},onClick:()=>{k(!1)},children:t(H,{placement:"bottomRight",trigger:["click"],open:R,onOpenChange:a=>k(a),dropdownRender:()=>t(J,{items:V,onClick:a=>M({...g,deviceId:a.key})}),children:t(z,{style:{float:"right",marginTop:"10px"},onClick:a=>{a.stopPropagation(),O()},children:s("scanner.changeCamera")})})})]})})]})}).setPropertyViewFn(e=>i(y,{children:[t(d,{name:u.basic,children:e.text.propertyView({label:s("text")})}),(n.useContext(h).editorModeStatus==="logic"||n.useContext(h).editorModeStatus==="both")&&i(y,{children:[i(d,{name:u.interaction,children:[e.onEvent.getPropertyView(),K(e),Q(e)]}),i(d,{name:u.advanced,children:[e.continuous.propertyView({label:s("scanner.continuous")}),e.continuous.getView()&&e.uniqueData.propertyView({label:s("scanner.uniqueData")}),e.maskClosable.propertyView({label:s("scanner.maskClosable")})]})]}),(n.useContext(h).editorModeStatus==="layout"||n.useContext(h).editorModeStatus==="both")&&t(y,{children:t(d,{name:u.style,children:e.style.getPropertyView()})})]})).setExposeMethodConfigs(te).build()}(),le=W(ie,[new E("data",s("data")),new E("text",s("button.textDesc")),...X]);export{le as ScannerComp};
