import{a4 as n,fS as k,db as v,gi as r,mZ as C,m_ as m,d as e,cE as $,mJ as u,m$ as S,aj as d,n0 as A,jL as E,mw as q,jN as H,m3 as N,n1 as Q,a0 as T,as as h,k as U,n2 as Y,n3 as j,n4 as g,n5 as z,n6 as L,n7 as M,n8 as X,n9 as Z,na as _,dh as l,nb as J}from"./index-CyMr76_m.js";const O=n.div`
  font-weight: 500;
  font-size: 14px;
  color: ${o=>k(o.$bgColor)?"#ffffff":"#000000"};
  font-style: normal;
  line-height: 24px;
  margin-right: 8px;
  margin-left: 20px;
  max-width: 264px;
  ${v};
`,P=n.a`
  display: flex;
  align-items: center;
`,V=n(_)`
  height: 28px;
  width: 28px;
`,W=n(l)`
  min-width: 60px;
  padding: 0;
  height: 28px;
  margin-right: 4px;
`,G=n(l)`
  min-width: 60px;
  height: 28px;
`,I=n(l)`
  &&& {
    color: #ffffff;
    background: #8b8fa34c;
    border: none;
    height: 28px;
    margin-right: 8px;
    min-width: 60px;
    padding: 0;
    cursor: pointer;
  
    &:hover {
      background: #666666;
      color: #ffffff;
      border: none;
    }
  
    &:focus {
      background: #666666;
      color: #ffffff;
      border: none;
    }
  }
`,K=n(J)`
  margin-right: 4px;

  g g {
    fill: #ffffff;
  }
`,R=n(l)`
  min-width: 60px;
  height: 28px;
  margin-right: 24px;
  padding: 0;
`,B=n.div`
  display: inherit;
  @media screen and (max-width: 500px) {
    > div:nth-of-type(1),
    > button {
      display: none;
    }
  }
`;function D(o){const{user:i}=o,a=r(C),t=r(m);return a?e($.Avatar,{shape:"circle",size:28}):e("div",{children:i.isAnonymous?t?null:e(W,{buttonType:"primary",onClick:()=>u.push(S),children:d("userAuth.login")}):e(A,{user:i,profileSide:28,fontSize:12})})}const ee=()=>{const o=E(),i=r(q),a=r(H),t=N(),c=r(m),s=r(Q),[x,f]=T.useState(!1),p=o.viewMode==="view_marketplace",b=h(U,{children:[e(P,{onClick:()=>u.push(Y),children:e(V,{branding:!0})}),p&&e(j,{setEdit:()=>{},isViewMarketplaceMode:p}),!p&&e(O,{$bgColor:(s==null?void 0:s.headerColor)??"#2c2c2c",children:a&&a.name})]}),w=h(B,{children:[g(i,a)&&e(z,{applicationId:t,visible:x,onVisibleChange:y=>!y&&f(!1)}),g(i,a)&&e(I,{onClick:()=>f(!0),children:L}),M(i,a)&&h(R,{buttonType:"primary",onClick:()=>window.open(X(t,"edit")),children:[e(K,{}),d("edit")]}),!!c&&e(G,{style:{marginRight:i.isAnonymous?"":"24px"},buttonType:"primary",onClick:()=>{window.open(d("template.cloneUrl")+c)},children:d("header.clone")}),e(D,{user:i})]});return e(Z,{headerStart:b,headerEnd:w,style:{backgroundColor:s==null?void 0:s.headerColor}})};export{D as HeaderProfile,ee as PreviewHeader};
