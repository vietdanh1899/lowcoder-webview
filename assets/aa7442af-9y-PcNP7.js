import{a4 as F,M as P,ix as S,b_ as L,bU as O,dv as R,dw as T,F as $,d as p,a0 as r,c2 as W,k as E,as as k}from"./index-CyMr76_m.js";import{TableCellContext as N}from"./7a2fe5b9-_-VMc9tG.js";var H=Object.defineProperty,z=(e,t,i)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,v=(e,t,i)=>(z(e,typeof t!="symbol"?t+"":t,i),i);const I=F.div`
  position: relative;
  ${e=>!e.$textOverflow&&`
    div {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: keep-all;
    }
  `}
`,U=F.div`
  position: absolute;
  height: ${e=>e.$adjustHeight?`${e.$adjustHeight}px`:"max-content"};
  width: ${e=>e.$adjustWidth?`${e.$adjustWidth}px`:"max-content"};
  visibility: ${e=>e.$visible?"visible":"hidden"};
  min-width: ${e=>e.$minWidth?`${e.$minWidth}px`:"unset"};
  max-height: 150px;
  max-width: 300px;
  overflow: auto;
  background: inherit;
  z-index: 3;
  padding: ${e=>e.$padding};
  top: ${e=>`${e.$adjustTop||0}px`};
  left: ${e=>`${e.$adjustLeft||0}px`};

  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-thumb {
    border: 5px solid transparent;
    background-clip: content-box;
    border-radius: 9999px;
    background-color: rgba(139, 143, 163, 0.2);
    min-height: 30px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(139, 143, 163, 0.5);
  }
`;function B(e){for(let t=0;t<e.length;t++){const i=e[t];return i.clientHeight<i.scrollHeight||i.clientWidth<i.scrollWidth?!0:B(i.children)}return!1}function A(e){var t;const i=r.useRef(null),d=r.useRef(null),[s,o]=r.useState(!1),[l,b]=r.useState(!1),[u,f]=r.useState({done:!1}),[g,m]=r.useState(),V=r.useMemo(()=>()=>m(setTimeout(()=>{o(!0)},300)),[]);return r.useEffect(()=>{const n=i.current;!s||!n||(n.clientHeight<n.scrollHeight||n.clientWidth<n.scrollWidth||B(n.children)?!l&&b(!0):l&&b(!1))},[s]),r.useEffect(()=>{var n;const a=i.current,h=d.current;if(!s||!l){a!=null&&a.parentElement&&(a.parentElement.style.zIndex=""),f({done:!1});return}const c=(n=i.current)==null?void 0:n.closest(".ant-table-content");if(!h||!c||!a)return;a.parentElement&&(a.parentElement.style.zIndex="999");const w=Math.min(h.getBoundingClientRect().width,c.getBoundingClientRect().width),y=Math.min(h.getBoundingClientRect().height,c.getBoundingClientRect().height);let x;const C=c.getBoundingClientRect().x-h.getBoundingClientRect().x,_=c.getBoundingClientRect().x+c.offsetWidth-(h.getBoundingClientRect().x+w);C>0?x=C:_<0&&(x=_);const j=c.getBoundingClientRect().y+c.offsetHeight-(h.getBoundingClientRect().y+y);f({left:x,top:j<0?j:void 0,height:y,width:w,done:!0})},[s,l]),k(E,{children:[p(I,{ref:i,$textOverflow:e.textOverflow,onMouseEnter:()=>{V()},onMouseLeave:()=>{clearTimeout(g),o(!1)},children:e.children}),s&&l&&i.current&&!e.textOverflow&&p(U,{ref:d,$visible:u.done,$minWidth:(t=i.current.offsetParent)==null?void 0:t.clientWidth,$adjustWidth:u.width,$adjustHeight:u.height,$adjustLeft:u.left,$adjustTop:u.top,$padding:`${i.current.offsetTop}px ${i.current.offsetLeft}px`,onMouseEnter:()=>{o(!0)},onMouseLeave:()=>o(!1),children:e.children})]})}const D=P.createContext([]),Y=P.createContext([]),q=F.div`
  position: absolute;
  top: 2px;
  right: 2px;
  z-index: 2;

  width: 0px;
  height: 0px;
  border: 4.5px solid transparent;
  border-radius: 2px;
  border-top-color: ${S[1].color};
  border-right-color: ${S[1].color};
`,G=F.div`
  position: absolute;
  border: 1.5px solid #315efb;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;function J(e){const{dispatch:t,normalView:i,editViewFn:d,changeValue:s,baseValue:o,candidateTags:l,candidateStatus:b,onTableEvent:u}=e,f=$.isNil(s)?"normal":"toSave",g=d?e.editable:!1,{isEditing:m,setIsEditing:V}=r.useContext(N),n=s??o,[a,h]=r.useState(n);r.useEffect(()=>{h(n)},[n]);const c=r.useCallback(C=>{h(C)},[h]),w=r.useCallback(()=>{V(!1),t(W("changeValue",$.isNil(a)||$.isEqual(a,o)?null:a,!1)),$.isEqual(a,n)||u==null||u("columnEdited")},[t,o,a]),y=r.useMemo(()=>(d==null?void 0:d({value:n,onChange:c,onChangeEnd:w}))??p(E,{}),[d,n,c,w]),x=r.useCallback(()=>{g&&V(!0)},[g]);return m?k(E,{children:[p(G,{}),p(D.Provider,{value:l??[],children:p(Y.Provider,{value:b??[],children:y})})]}):k(A,{textOverflow:e.textOverflow,children:[f==="toSave"&&!m&&p(q,{}),i,g&&p("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},onDoubleClick:x})]})}const M="__COLUMN_DISPLAY_VALUE_FN";class K{constructor(t,i,d,s){v(this,"childrenMap"),v(this,"propertyViewFn"),v(this,"stylePropertyViewFn"),v(this,"editViewFn"),this.viewFn=i,this.displayValueFn=d,this.baseValueFn=s,this.childrenMap={...t,changeValue:L(null)}}setEditViewFn(t){return this.editViewFn=t,this}setPropertyViewFn(t){return this.propertyViewFn=t,this}setStylePropertyViewFn(t){return this.stylePropertyViewFn=t,this}build(){if(!this.propertyViewFn)throw new Error("need property view fn");const t=(o,l)=>b=>{var u;const f=(u=this.baseValueFn)==null?void 0:u.call(this,o,l),g=this.viewFn(o,l);return p(J,{...b,normalView:g,dispatch:l,baseValue:f,changeValue:o.changeValue,editViewFn:this.editViewFn})},i=new O(this.childrenMap,t).setPropertyViewFn(this.propertyViewFn).build(),d=this.displayValueFn,s=this.editViewFn;return class extends i{constructor(){super(...arguments),v(this,"displayValue",null)}extraNode(){return{node:{[M]:R(T(this.childrenNode()),()=>d)},updateNodeFields:o=>{const l=o[M];return{displayValue:l(o)}}}}getDisplayValue(){return this.displayValue}static canBeEditable(){return!$.isNil(s)}}}}const Z=Object.freeze(Object.defineProperty({__proto__:null,ColumnTypeCompBuilder:K,__COLUMN_DISPLAY_VALUE_FN:M},Symbol.toStringTag,{value:"Module"}));export{K as C,Y as S,D as T,M as _,Z as c};
