import{a4 as r,hZ as $,h_ as L,h$ as M,a0 as f,b7 as c,d as t,gK as g,aj as x,as as m,k as N,i0 as P,i1 as z,i2 as C,i3 as E}from"./index-CyMr76_m.js";const D=r.div`
  display: flex;
  align-items: center;
  padding: 12px 16px 20px 16px;
  cursor: move;
  background-color: #ffffff;
  border-radius: inherit;
`,T=r.div`
  margin-right: 8px;
  height: 16px;

  svg {
    width: 16px;
    height: 16px;
  }
`,I=r.div`
  display: flex;
  align-items: center;
  flex-grow: 1;

  height: 24px;
  font-size: 13px;
  line-height: 13px;
  color: #222222;
  border-radius: 4px;
  border: none;
  word-break: break-all;
`,J=r.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  margin-right: 24px;
  color: #8b8fa3;
  line-height: 13px;
  margin-left: auto;
`,K=r.div`
  margin-left: auto;
  width: 16px;
  height: 16px;
  cursor: pointer;

  color: ${$};

  &:hover {
    color: ${L};
  }
`,X=r.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-gutter: stable;
  padding-left: 16px;
  background-color: #ffffff;

  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-thumb {
    border: 4px solid transparent;
    background-clip: content-box;
    border-radius: 9999px;
    background-color: rgba(139, 143, 163, 0.2);
    min-height: 50px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(139, 143, 163, 0.36);
  }
`,Z=r(M)`
  .ant-table {
    font-size: 13px;
    border: none;
  }

  .ant-table-thead {
    margin-bottom: 4px;
  }

  .ant-table-thead > tr > th {
    color: #8b8fa3;
    background: #ffffff;
    line-height: 13px;
    padding-bottom: 9px;
    // border-bottom: 1px solid #8b8fa3;
  }

  .ant-table-thead > tr > th::before {
    display: none;
  }

  .ant-table-tbody > tr > td {
    border: none;
  }

  .ant-table-row {
    margin-top: 4px;
  }

  .ant-table-cell {
    height: 22px;
    padding: 0 24px 0 0;
    margin-left: 24px;
    max-width: 184px; // actual width + padding right
  }

  // two-side shadow with scrollbar
  .ant-table-ping-left:not(.ant-table-has-fix-left) .ant-table-container::before {
    box-shadow: none;
  }

  .ant-table-ping-right:not(.ant-table-has-fix-right) .ant-table-container::after {
    box-shadow: none;
  }
`,w=r.pre`
  word-break: break-word;
  white-space: pre-wrap;
`,O=r.span`
  color: #b8b9bf;
  margin-left: 8px;
`,_=O;function F(n){const{success:l,errorMessage:h,dataType:a,data:e,title:j,runTime:k}=n,[p,y]=f.useState(!1);f.useEffect(()=>y(!1),[n.data]);const[v,A]=f.useMemo(()=>{if(a!=="default")return[!1,[]];if(Array.isArray(e)){let i=!0;const u=e.reduce((b,o)=>(o&&c.isPlainObject(o)?Object.keys(o).forEach(d=>b.add(d)):i=!1,b),new Set);if(i)return[!0,Array.from(u).reduce((b,o)=>[...b,{title:o,dataIndex:o,ellipsis:!0,render:d=>typeof d=="string"?d:JSON.stringify(d)}],[])]}return[!1,[]]},[e,a]),S=f.useMemo(()=>{if(h)return h;if(p)return t(g,{name:!1,src:e});switch(a){case"function":return t(w,{children:x("resultPanel.returnFunction")});case"json":return c.isObjectLike(e)?t(g,{name:!1,src:e}):t(w,{children:String(e)});default:return v?t(Z,{tableLayout:"auto",scroll:{x:"100%"},columns:A,dataSource:e.map((i,u)=>({...i,key:u})),pagination:!1}):c.isObjectLike(e)?t(g,{name:!1,src:e}):t(w,{children:e})}},[n,p]);let s=null;return a!=="function"&&(c.isArray(e)?s=`Array(${e.length})`:c.isObject(e)?s=`Object(${Object.keys(e).length} keys)`:s=typeof e),{header:m(N,{children:[m(I,{children:[t(T,{children:l?t(P,{}):t(z,{})}),j,k?t(O,{children:x("resultPanel.consume",{time:q(k)||""})}):null,s&&t(_,{children:s}),v&&m(J,{children:[t(C,{value:p,onChange:i=>y(i)}),x("resultPanel.JSON")]})]}),t(K,{onClick:n.onClose,children:t(E,{})})]}),body:t(X,{children:S})}}function q(n){let l=n;const h=["ms","s","min","h"],a=[1,1e3,60,60];for(let e=0;e<4;e++){if(l/a[e]<1)return l+h[e-1];l/=a[e]}}export{D as X,F as q};
