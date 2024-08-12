import{a4 as m,a5 as c,mu as y,a0 as e,b1 as $,as as b,k as C,d as i,mv as E,mw as R,bN as M,b3 as k,hM as q,b5 as H}from"./index-CyMr76_m.js";import{q as I,X as O}from"./1a06f5c8-4DBojwrE.js";const Y=m.div`
  right: calc(313px + 4px); // FIXME: don't rely on the width of the right panel
  bottom: ${t=>t.$bottom?t.$bottom+4+"px":"289px"};
  position: fixed;
  z-index: ${c.queryResultPanel};

  display: flex;
  flex-direction: column;
  width: 592px;
  height: fit-content;
  max-height: 250px;
  background: #ffffff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  pointer-events: auto;
  padding-bottom: 16px;
`,F=t=>{const{bottom:o}=t,a=e.useContext(M),r=a.showResultComp(),d=r==null?void 0:r.result(),l=e.useRef(null),[p,n]=e.useState(!0),[f,g]=e.useState({left:0,top:0,bottom:0,right:0}),{header:w,body:v}=I({...d??{data:"",dataType:"default",success:!0},onClose:()=>a.setShowResultCompName(void 0)});return d?i(k,{disabled:p,bounds:f,enableUserSelectHack:!1,onStart:(P,u)=>{var h;const{clientWidth:z,clientHeight:S}=window.document.documentElement,s=(h=l.current)==null?void 0:h.getBoundingClientRect();s&&g({left:-s.left+u.x,right:z-(s.right-u.x),top:-s.top+u.y,bottom:S-(s.bottom-u.y)})},children:b(Y,{$bottom:o,ref:l,children:[i(O,{onMouseOver:()=>n(!1),onMouseOut:()=>n(!0),children:w}),v]})}):null},N=m(q)`
  position: relative;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-top: 1px solid #e1e3eb;
  z-index: ${c.bottomPanel};

  .react-resizable-handle {
    position: absolute;
    border-top: transparent solid 3px;
    width: 100%;
    padding: 0 3px 3px 0;
    top: 0;
    cursor: row-resize;
  }
`,x=t=>{t.preventDefault()},U=()=>{window.addEventListener("mousedown",x)},X=()=>{window.removeEventListener("mousedown",x)};function D(t){const o=e.useMemo(()=>$(),[]),a=document.documentElement.clientHeight,r=(p,n)=>{H({...o,bottom:{h:n.size.height}}),l(n.size.height),X()},[d,l]=e.useState(o.bottom.h);return b(C,{children:[i(F,{bottom:d}),i(N,{width:1/0,height:o.bottom.h,resizeHandles:["n"],minConstraints:[680,285],maxConstraints:[1/0,a-48-40],onResizeStart:U,onResizeStop:r,children:i(E,{})})]})}const L=t=>({orgId:R(t).currentOrgId,datasourceInfos:t.entities.datasource.data}),G=y(L,null)(D);export{G as default};
