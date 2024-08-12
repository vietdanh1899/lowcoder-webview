import{a4 as i,a0 as t,bU as u,d as e,c2 as d,dh as s,aj as C,di as g,dj as f,dk as p,a5 as b,dl as m,dm as w,dn as y,b_ as v,dp as x}from"./index-CyMr76_m.js";const k=i.div`
  .ant-modal-content {
    overflow: hidden;
    background-color: ${o=>o.$background};

    .ant-modal-body > div {
      background-color: ${o=>o.$background};
    }
  }
`,$=i.div`
  pointer-events: auto;

  .ant-modal-body > div {
    overflow: overlay;
  }
`,P=t.createContext({modalWidth:520}),V=o=>e(x,{...o,emptyRows:15,autoHeight:!0});function M(o){const{visible:n,containerProps:a,onCancel:r}=o,l=t.useContext(g),{modalWidth:c=520}=t.useContext(P);return n?e($,{children:e(f,{width:c,open:n,onCancel:r,getContainer:()=>document.querySelector(`#${p}`)||document.body,footer:null,styles:{body:{padding:"0"}},zIndex:b.modal,modalRender:h=>e(k,{$background:l,onClick:()=>{},children:h}),focusTriggerAfterClose:!1,children:e(V,{...a,hintPlaceholder:m,containerPadding:[36,36],items:w(a.items)})})}):null}const S={container:y,showConfigModal:v(!1)},j=new u(S,(o,n)=>e(M,{containerProps:o.container,visible:o.showConfigModal,onCancel:()=>n(d("showConfigModal",!1,!1))})).setPropertyViewFn((o,n)=>e(s,{onClick:()=>n(d("showConfigModal",!0,!1)),children:C("slotControl.configSlotView")})).build();class T extends j{propertyView(n){return e(s,{onClick:()=>this.dispatch(this.changeChildAction("showConfigModal",!0)),children:n.buttonText})}getPasteValue(n){return{...this.toJsonValue(),container:this.children.container.getPasteValue(n)}}}export{P as SlotConfigContext,T as SlotControl};
