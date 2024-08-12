import{a4 as t,hM as V,a5 as L,hE as P,d as e,as as n,k as f,hN as m,aj as a,hO as k,gd as C,a0 as s,hP as S,aL as z,hQ as E,hR as I,hS as R,gh as $,hD as T,hK as Q,en as F,hT as H,eL as D,hF as M,hU as N,dh as Y,gi as j,hV as K,hW as X,hb as Z,aK as A,hX as B,hY as G,fc as J}from"./index-CyMr76_m.js";import{a as O,Q as U,I as W}from"./d2c0e678-Ms5oxXr9.js";import{q as _,X as ee}from"./1a06f5c8-4DBojwrE.js";const ie=t.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: min-content;
`,re=t.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 95px;
  flex-shrink: 0;
  padding: 32px 36px 0 16px;
  border-bottom: 1px solid #e1e3eb;
`,te=t.div`
  display: flex;
  flex-direction: column;

  .taco-edit-text-wrapper {
    width: 252px;
    color: #222222;
    font-size: 18px;
    font-weight: 500;
    margin-left: -8px;

    &:hover {
      background-color: #f5f5f6;
    }
  }

  .taco-edit-text-input {
    width: 252px;
    color: #222222;
    font-weight: 500;
    font-size: 18px;
    background-color: #f5f5f6;
    border: 1px solid #3377ff;
    margin-left: -8px;

    &:focus {
      border-color: #3377ff;
      box-shadow: 0 0 0 2px #d6e4ff;
    }
  }
`,ne=t.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 13px;
  color: #b8b9bf;
`,oe=t.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,de=t.div`
  position: relative;
  display: flex;
  height: calc(100% - 95px);
  width: 100%;
`,ae=t.div`
  position: relative;
  padding: 16px 16px 80px;
  flex-grow: 1;
  width: calc(100% - 297px);
`,le=t.div`
  height: 100%;
  width: 297px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border-left: 1px solid #e1e3eb;
`,se=r=>{var i;const{comp:o,title:h,subTitle:c,headerRight:p,bodyLeft:l,bodyRight:u}=r,x=o.children.query,y=j(K),[d,g]=s.useState();return s.useEffect(()=>{const v=new O(o,q=>{g(b=>b?q(b):void 0)});g(v)},[]),s.useEffect(()=>{d!=null&&d.setComp(()=>o)},[o]),d?e(U.Provider,{value:d,children:n(ie,{children:[n(re,{children:[n(te,{children:[h,n(ne,{children:[X((i=y[x.children.id.getView()])==null?void 0:i.createTime,30*24*60*60*1e3),c]})]}),e(oe,{children:p})]}),n(de,{children:[e(ae,{children:l}),e(le,{children:u})]})]})}):null},he=t(V)`
  position: absolute;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-top: 1px solid #e1e3eb;
  z-index: ${L.queryResultPanel};
  width: 100%;
  bottom: 0;
  left: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  .react-resizable-handle {
    position: absolute;
    border-top: transparent solid 3px;
    width: 100%;
    padding: 0 3px 3px 0;
    top: 0;
    cursor: row-resize;
  }
`,ce=t.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`,w=r=>{r.preventDefault()},pe=()=>{window.addEventListener("mousedown",w)},ue=()=>{window.removeEventListener("mousedown",w)},xe=r=>{var i;const o=(i=r.comp)==null?void 0:i.result(),[h,c]=s.useState(360),{header:p,body:l}=_({...o??{data:"",dataType:"default",success:!0},onClose:r.onClose});if(!o)return null;const u=document.documentElement.clientHeight,x=(y,d)=>{c(d.size.height),ue()};return e(he,{width:1/0,height:h,resizeHandles:["n"],minConstraints:[680,285],maxConstraints:[1/0,u-48-95],onResizeStart:pe,onResizeStop:x,children:n(ce,{children:[e(ee,{style:{cursor:"default"},children:p}),l]})})},ye={query:Z(G,r=>e(A.Provider,{value:{datasourceId:r.children.datasourceId.getView(),disableJSCompletion:!0,placement:"queryLibrary"},children:e(B,{comp:r,placement:"queryLibrary"})})),inputs:W},fe=P(ye),Pe=class extends fe{propertyView(r){return e(ge,{comp:this,onPublish:r.onPublish,onHistoryShow:r.onHistoryShow})}getQueryPropertyView(){return this.children.query.getPropertyView()}getRightPropertyView(){return n(f,{children:[e(m,{name:a("prop.inputs"),width:296,noMargin:!0,children:this.children.inputs.getPropertyView()},"inputs"),e(m,{name:a("prop.meta"),width:296,noMargin:!0,children:e("div",{style:{padding:" 0 8px"},children:e(k,{dataSourceId:this.children.query.children.datasourceId.getView(),datasourceType:this.children.query.children.compType.getView()})})},"meta")]})}nameAndExposingInfo(){const r={};return this.children.inputs.getView().forEach(i=>{r[i.children.name.getView()]=i.exposingInfo()}),r}},ge=r=>{const{comp:i,onPublish:o,onHistoryShow:h}=r,c=C(),[p,l]=s.useState(!1),u=i.children.query.children.datasourceId.getView(),x=S(u);s.useEffect(()=>{l(!1)},[i.children.query.children.id.getView()]);const y=()=>i.children.query.dispatch(J({afterExecFunc:()=>l(!0)}));return e(z.Provider,{value:x,children:e(E.Provider,{value:I(i.nameAndExposingInfo(),!1),children:e(R,{global:!0,keyName:"command+enter",onKeyDown:y,allowRepeat:!0,wrapperStyle:{width:"100%"},children:e(se,{comp:i,title:e($,{text:i.children.query.children.name.getView(),onFinish:d=>d!==i.children.query.children.name.getView()&&i.dispatch(T(i.children.query.children.name.getView(),d))}),headerRight:n(f,{children:[e(Q,{items:[{text:a("queryLibrary.publish"),onClick:o},{text:a("queryLibrary.historyVersion"),onClick:h}],del:()=>F.confirm({title:a("queryLibrary.deleteQueryLabel"),content:a("queryLibrary.deleteQueryContent"),onConfirm:()=>c(H({queryLibraryId:i.children.query.children.id.getView()})),confirmBtnType:"delete",okText:a("delete")}),children:e(me,{children:e(be,{tabIndex:-1})})}),n(ve,{onClick:y,loading:i.children.query.children.isFetching.getView(),buttonType:"primary",children:[e(we,{}),a("queryLibrary.run")]})]}),bodyLeft:n(f,{children:[i.getQueryPropertyView(),p&&e(xe,{comp:i.children.query,onClose:()=>l(!1)})]}),bodyRight:e(D,{children:i.getRightPropertyView()})})})})})},be=t(M)`
  flex-shrink: 0;

  g {
    fill: #8b8fa3;
  }
`,me=t.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border: 1px solid #d7d9e0;
  border-radius: 4px;

  &:hover {
    background-color: #f5f5f6;
    border: 1px solid #d7d9e0;

    g {
      fill: #222222;
    }
  }
`,we=t(N)`
  transform: rotate(-90deg);
  display: inline-block;
  padding-right: 2px;
  margin-right: 4px;
`,ve=t(Y)`
  padding: 0;
  width: 80px;
  height: 32px;
  border: none;

  &:hover {
    padding: 0;
    border: none;
    box-shadow: none;
  }

  &:focus {
    padding: 0;
    border: none;
    box-shadow: none;
  }

  &:after {
    content: "";
  }
`;export{Pe as QueryLibraryComp};
