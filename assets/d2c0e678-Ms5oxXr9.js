import{hA as b,hB as m,hC as y,aj as n,hD as g,M as x,hE as v,d as i,a4 as p,hF as w,dh as k,hb as C,a0 as c,as as l,hG as L,k as u,du as q,hH as V,d7 as I,hI as A,hJ as S,dH as E,dN as N,hK as $,hL as j}from"./index-CyMr76_m.js";var P=Object.defineProperty,D=(e,t,r)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t,r)=>(D(e,typeof t!="symbol"?t+"":t,r),r);class z{constructor(t,r){h(this,"queryLibraryComp"),h(this,"setQueryLibraryState"),this.queryLibraryComp=t,this.setQueryLibraryState=r}changeStateFn(t){this.setQueryLibraryState(r=>{const o=t(r);return b(r,o)})}setComp(t){this.changeStateFn(r=>({queryLibraryComp:t(r.queryLibraryComp)}))}getNameGenerator(){const t=new m,r=this.nameAndExposingInfo();return t.init(Object.keys(r)),t}nameAndExposingInfo(){return this.queryLibraryComp.nameAndExposingInfo()}checkRename(t,r){return y(r)||(r!==t&&this.nameAndExposingInfo().hasOwnProperty(r)?n("query.nameExists",{name:r}):"")}rename(t,r){return this.checkRename(t,r)?!1:(r!==t&&this.queryLibraryComp.dispatch(g(t,r)),!0)}}const f=x.createContext(void 0),F={name:V,description:I(""),value:A},O=e=>{const[t,r]=c.useState(e.showPopover),o=c.useContext(f),d=e.comp.children.name.getView();return l("div",{style:{position:"relative",width:"100%"},children:[e.comp.children.value.propertyView({key:d,label:i(S,{visible:t,setVisible:r,content:l(u,{children:[e.comp.children.name.propertyView({label:n("queryLibrary.inputName"),onValidate:(a,s)=>o.checkRename(a,s),onFinish:(a,s)=>o.rename(a,s)}),i(E,{label:n("queryLibrary.inputDesc"),children:i(N,{value:e.comp.children.description.getView(),onChange:a=>{e.comp.children.description.dispatchChangeValueAction(a.target.value)}})})]}),title:n("edit"),children:i("div",{style:{cursor:"pointer"},children:d})}),layout:"vertical",tooltip:e.comp.children.description.getView()}),i($,{items:[{text:n("edit"),onClick:()=>r(!0)}],del:e.onDelete,children:i(T,{tabIndex:-1})})]})},Q=class extends v(F){propertyView(e){return i(O,{comp:this,...e})}},G=j(Q,{},e=>e.children.value.exposingNode()),M=p.div`
  padding: 0 16px;
`,T=p(w)`
  cursor: pointer;
  flex-shrink: 0;
  position: absolute;
  top: 0;
  right: 0;

  g {
    fill: #8b8fa3;
  }

  &:hover {
    background: #eef0f3;
    border-radius: 4px;
    cursor: pointer;

    g {
      fill: #3377ff;
    }
  }
`,_=p(k)`
  height: 28px;
  width: 70px;
  background-color: #fafbff;
  color: #4965f2;
  border-color: #c9d1fc;
  display: flex;
  align-items: center;
  box-shadow: none;

  &:hover {
    color: #315efb;
    background-color: #f5faff;
    border-color: #c2d6ff;
  }

  &:focus {
    color: #315efb;
    background-color: #f5faff;
    border-color: #c2d6ff;
  }

  &:disabled,
  &:disabled:hover {
    background: #f9fbff;
    border: 1px solid #dee9ff;
    border-radius: 4px;
  }
`,J=p.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
`,K=C(q(G),e=>{const t=c.useContext(f),[r,o]=c.useState(void 0);c.useEffect(()=>{o(void 0)},[e]);const d=()=>{e.dispatch(e.pushAction({name:t.getNameGenerator().genItemName("queryInput")})),o(e.getView().length)};return i(M,{children:e.getView().length>0?l(J,{children:[e.getView().map((a,s)=>i(c.Fragment,{children:a.propertyView({onDelete:()=>e.dispatch(e.deleteAction(s)),showPopover:s===r})},s)),i(_,{onClick:d,children:n("addItem")})]}):i(L,{text:l(u,{children:[i("div",{children:n("queryLibrary.emptyInputs")}),i("span",{style:{color:"#4965f2",cursor:"pointer",margin:"0 4px"},onClick:d,children:n("queryLibrary.clickToAdd")})]})})})}),B=Object.freeze(Object.defineProperty({__proto__:null,InputListComp:K},Symbol.toStringTag,{value:"Module"}));export{K as I,f as Q,z as a,B as i};
