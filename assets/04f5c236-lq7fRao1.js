import{a4 as x,a6 as V,cb as z,cc as B,e9 as P,aj as s,bF as E,a0 as r,d as n,bN as c,c8 as I,as as l,k as y,bG as h,bH as b,cx as N,bI as M,eb as T,bJ as k,bL as A,cy as F,bw as p,bT as m,bA as J,ci as L,ea as W,bS as C,bx as j,cM as D,ec as G,dr as O,dA as q,b2 as K}from"./index-CyMr76_m.js";import{Button100 as U,ButtonStyleControl as Y}from"./ad679262-CWEUNdX4.js";const Z=x.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${e=>e.$style&&_(e.$style)}
`,_=e=>V`
    button {
      border: ${e.borderWidth} ${e.borderStyle} ${e.border};
      border-radius: ${e.radius};
      margin: ${e.margin};
      rotate: ${e.rotation};
      padding: ${e.padding};
      max-width: ${z(e.margin)};
      max-height: ${B(e.margin)};
    }
  `,Q=x(P)`
  font-size: 13px;
  margin-right: 4px;
`,X=x.div`
  display: flex;

  ${e=>e.$style&&ee(e.$style)}
`;function ee(e){return V`
    svg {
      width: ${e.size} !important;
      height: ${e.size} !important;
    }
  `}function te(e){return e.uiCompInfoList().filter(t=>t.type==="form").map(t=>({label:t.name,value:t.name}))}function v(e,t){const i=e==null?void 0:e.getUICompByName(t);if(i&&i.children.compType.getView()==="form")return i.children.comp}function ie(e,t){const i=v(e,t);if(i)return n(K.Provider,{value:t,children:i.onEventPropertyView(l(y,{children:[n(Q,{onClick:()=>e.setSelectedCompNames(new Set([t]),"rightPanel"),children:t}),s("button.formButtonEvent")]}))})}class ne extends G{getPropertyView(){const t=s("button.formToSubmit");return O({filterText:t},n(c.Consumer,{children:i=>l(y,{children:[n(q,{label:t,value:this.value,options:te(i),onChange:d=>this.dispatchChangeValueAction(d),allowClear:!0}),ie(i,this.value)]})}))}}const oe=[{label:s("button.default"),value:""},{label:s("button.submit"),value:"submit"}];function R(e){return!e}function ae(e,t){const i=v(e,t);i&&i.submit()}const re={iconSize:p(m,"20px"),type:J(oe,""),autoHeight:p(L,"fixed"),aspectRatio:p(m,"1 / 1"),onEvent:W,disabled:C,loading:C,form:ne,prefixIcon:j,style:Y,viewRef:D,restrictPaddingOnRotation:p(m,"controlButton")};let f=function(){return new E(re,e=>{const[t,i]=r.useState(120),[d,se]=r.useState(0),g=r.useRef(null),w=r.useRef(null);r.useEffect(()=>{d&&t&&$()},[d,t]);const H=(o,a)=>{const u=g.current,S=u==null?void 0:u.getElementsByTagName("button")[0];u.style.height=o,u.style.width=a,S.style.height=o,S.style.width=a},$=()=>{const o=g.current,a=w.current;!(o!=null&&o.clientWidth)||!(o!=null&&o.clientHeight)||e.autoHeight||!t||H((a==null?void 0:a.clientHeight)+"px",(a==null?void 0:a.clientWidth)+"px")};return n(c.Consumer,{children:o=>n(I,{onResize:$,render:()=>{var a;return n(Z,{ref:w,$style:e.style,children:n("div",{ref:g,style:e.autoHeight?{width:"100%",height:"100%"}:void 0,children:n(U,{ref:e.viewRef,$buttonStyle:e.style,loading:e.loading,style:e.autoHeight?{width:"100%",height:"100%",aspectRatio:e.aspectRatio,borderRadius:e.style.radius}:{aspectRatio:e.aspectRatio,borderRadius:e.style.radius},disabled:e.disabled||!R(e.type)&&((a=v(o,e.form))==null?void 0:a.disableSubmit()),onClick:()=>R(e.type)?e.onEvent("click"):ae(o,e.form),children:e.prefixIcon&&n(X,{$style:{...e.style,size:e.iconSize},children:e.prefixIcon})})})})}})})}).setPropertyViewFn(e=>l(y,{children:[n(h,{name:b.basic,children:e.prefixIcon.propertyView({label:s("button.icon")})}),(r.useContext(c).editorModeStatus==="logic"||r.useContext(c).editorModeStatus==="both")&&l(h,{name:b.interaction,children:[e.onEvent.getPropertyView(),N(e),M(e),T(e)]}),(r.useContext(c).editorModeStatus==="layout"||r.useContext(c).editorModeStatus==="both")&&l(y,{children:[l(h,{name:b.layout,children:[e.autoHeight.getPropertyView(),e.iconSize.propertyView({label:s("button.iconSize")})]}),l(h,{name:b.style,children:[e.style.getPropertyView(),e.aspectRatio.propertyView({label:s("style.aspectRatio")})]})]})]})).build()}();f=class extends f{autoHeight(){return this.children.autoHeight.getView()}};const de=k(f,[new A("loading",s("button.loadingDesc")),...F]);export{de as ControlButton};
