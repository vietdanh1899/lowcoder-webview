import{a4 as E,a6 as x,cb as z,cc as W,aj as t,bs as A,d4 as C,bz as j,bw as d,bT as m,bD as y,by as H,d5 as I,d6 as F,d7 as g,bF as J,d as i,as as h,k as O,bG as p,bH as b,bI as Y,bJ as D,bL as s,bK as G,cA as L,d8 as R,d9 as P,a0 as n,c8 as Q,da as U,c2 as f}from"./index-CyMr76_m.js";const X=E.div`
  height: 100%;
  width: 100%;
  ${e=>e.$style&&Z(e.$style)}
`,Z=e=>x`
    margin: ${e.margin};
    padding: ${e.padding};
    border-style: ${e.borderStyle};
    border-width: ${e.borderWidth};
    border-color: ${e.border};
    background: ${e.background};
    border-radius: ${e.radius};
    max-width: ${z(e.margin)};
    max-height: ${W(e.margin)};
  `,_=[{key:"1",title:t("transfer.content",{i:1})},{key:"2",title:t("transfer.content",{i:2})},{key:"3",title:t("transfer.content",{i:3})},{key:"4",title:t("transfer.content",{i:4})},{key:"5",title:t("transfer.content",{i:5})},{key:"6",title:t("transfer.content",{i:6})},{key:"7",title:t("transfer.content",{i:7})}],N=[L,R,P],q={style:A(C),onEvent:j(N),sourceTitle:d(m,t("transfer.sourceTitle")),targetTitle:d(m,t("transfer.targetTitle")),oneWay:y,pagination:y,showSearch:y.DEFAULT_TRUE,pageSize:d(H,10),items:I("items",_),targetKeys:F("targetKeys",[]),selectedKeys:g([[],[]]),targerObject:g([]),searchInfo:g(["",""])},B=e=>{const o=n.useRef(null),[l,S]=n.useState(0),[c,$]=n.useState(0),[T,K]=n.useState([]);n.useEffect(()=>{c&&l&&w()},[c,l]);const k=a=>{e.targetKeys.onChange(a),e.dispatch(f("targerObject",Array.isArray(e.items.value)?e.items.value.filter(r=>a.includes(r.key)):[],!1)),e.onEvent("change")},v=(a,r)=>{K([...a,...r]),e.dispatch(f("selectedKeys",[a,r],!1)),e.onEvent("selectedChange")},V=(a,r)=>{e.dispatch(f("searchInfo",[a,r],!1)),e.onEvent("search")},w=()=>{const a=o.current;S((a==null?void 0:a.clientWidth)??0),$((a==null?void 0:a.clientHeight)??0)};return i(Q,{onResize:w,children:i(X,{ref:o,$style:e.style,children:i(U,{listStyle:{width:l,height:c},showSearch:e.showSearch,dataSource:e.items.value,titles:[e.targetTitle,e.sourceTitle],targetKeys:e.targetKeys.value,selectedKeys:T,onChange:k,onSelectChange:v,render:a=>a.title,oneWay:e.oneWay,onSearch:V,pagination:e.pagination?{pageSize:e.pageSize||10}:!1})})})};let u=function(){return new J(q,(e,o)=>i(B,{...e,dispatch:o})).setPropertyViewFn(e=>h(O,{children:[h(p,{name:b.basic,children:[e.items.propertyView({label:t("transfer.items")}),e.targetKeys.propertyView({label:t("transfer.targetKeys")}),e.sourceTitle.propertyView({label:t("transfer.sourceTitle")}),e.targetTitle.propertyView({label:t("transfer.targetTitle")}),e.showSearch.propertyView({label:t("transfer.allowSearch")}),e.oneWay.propertyView({label:t("transfer.oneWay")}),e.pagination.propertyView({label:t("transfer.pagination")}),e.pagination.getView()&&e.pageSize.propertyView({label:t("transfer.pageSize")})]}),h(p,{name:b.layout,children:[e.onEvent.propertyView(),Y(e)]}),i(p,{name:b.style,children:e.style.getPropertyView()})]})).build()}();u=class extends u{autoHeight(){return!1}};const ee=D(u,[new s("items",t("transfer.items")),new s("targetKeys",t("transfer.targetKeys")),new s("targerObject",t("transfer.targerObject")),new s("selectedKeys",t("transfer.selectedKeys")),new s("searchInfo",t("transfer.searchInfo")),G]);export{ee as transferComp};
