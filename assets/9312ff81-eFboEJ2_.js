import{a4 as V,a6 as k,cb as T,cc as I,bw as g,ck as M,bz as W,bs as f,cl as C,c7 as F,ci as J,bD as R,bT as j,bF as D,d as a,as as h,k as x,bG as n,bH as o,aj as d,a0 as s,bN as P,bI as G,bJ as K,bL as z,bK as B,bM as L,cm as H,F as S,c8 as Z,cn as _}from"./index-CyMr76_m.js";const A=V.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .ant-image,
  img {
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: contain;
    pointer-events: auto;
    ${e=>e.$animationStyle}
  }

  ${e=>e.$style&&O(e.$style)}
`,O=e=>k`
    img {
      border: ${l=>e.borderWidth?e.borderWidth:"1px"} solid ${e.border};
      border-radius: ${e.radius};
      margin: ${e.margin};
      padding: ${e.padding};
      max-width: ${T(e.margin)};
      max-height: ${I(e.margin)};
      rotate: ${e.rotation};
    }

    .ant-image-mask {
      border-radius: ${e.radius};
    }
  `,Q=[L],Y=e=>{const l=s.useRef(null),y=s.useRef(null),[c,E]=s.useState(0),[u,N]=s.useState(0),p=t=>{t.onload=function(){E(t.naturalWidth),N(t.naturalHeight)}};s.useEffect(()=>{const t=new Image(0,0);t.src=e.src.value,p(t),t.onerror=function(i){t.src=H,p(t)}},[e.src.value]),s.useEffect(()=>{u&&c&&w()},[u,c]);const b=(t,i)=>{const r=l.current,v=r==null?void 0:r.getElementsByTagName("div")[0],$=r==null?void 0:r.getElementsByTagName("img")[0];r.style.height=t,r.style.width=i,v.style.height=t,v.style.width=i,$.style.height=t,$.style.width=i},w=()=>{const t=l.current,i=y.current;!(t!=null&&t.clientWidth)||!(t!=null&&t.clientHeight)||e.autoHeight||!c||((S.divide(i==null?void 0:i.clientWidth,i==null?void 0:i.clientHeight)||0)>(S.divide(Number(c),Number(u))||0)?b("100%","auto"):b("auto","100%"))};return a(Z,{onResize:w,render:()=>a(A,{ref:y,$style:e.style,$animationStyle:e.animationStyle,children:a("div",{ref:l,style:e.autoHeight?{width:"100%",height:"100%"}:void 0,children:a(_,{src:e.src.value,referrerPolicy:"same-origin",draggable:!1,preview:e.supportPreview,fallback:H,onClick:()=>e.onEvent("click")})})})})},q={src:g(M,"https://temp.im/350x400"),onEvent:W(Q),style:f(C),animationStyle:f(F),autoHeight:g(J,"fixed"),supportPreview:R,restrictPaddingOnRotation:g(j,"image")};let m=new D(q,e=>a(Y,{...e})).setPropertyViewFn(e=>h(x,{children:[a(n,{name:o.basic,children:e.src.propertyView({label:d("image.src")})}),["logic","both"].includes(s.useContext(P).editorModeStatus)&&h(n,{name:o.interaction,children:[e.onEvent.getPropertyView(),G(e),e.supportPreview.propertyView({label:d("image.supportPreview"),tooltip:d("image.supportPreviewTip")})]}),["layout","both"].includes(s.useContext(P).editorModeStatus)&&h(x,{children:[a(n,{name:o.layout,children:e.autoHeight.getPropertyView()}),a(n,{name:o.style,children:e.style.getPropertyView()}),a(n,{name:o.animationStyle,hasTooltip:!0,children:e.animationStyle.getPropertyView()})]})]})).build();m=class extends m{autoHeight(){return this.children.autoHeight.getView()}};const X=K(m,[new z("src",d("image.srcDesc")),B]);export{X as ImageComp};
