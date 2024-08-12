import{a4 as d,bQ as O,bT as D,bw as w,bz as E,cU as F,cf as L,bs as v,hv as R,c7 as j,aj as s,bF as N,d as o,k as m,as as r,bO as T,bG as a,bH as l,hw as A,a0 as t,bN as i,bI as C,bJ as G,bL as S,bK as H,bM as I}from"./index-CyMr76_m.js";import{navListComp as K}from"./88b4e17e-Bp8Mklo0.js";import{a as Q}from"./f2467551-CJE-62bB.js";const Y=d("div")`
${e=>e.$animationStyle}
  height: 100%;
  border-radius: ${e=>e.$borderRadius?e.$borderRadius:"2px"};
  box-sizing: border-box;
  border: ${e=>e.$borderWidth?`${e.$borderWidth}`:"1px"} ${e=>e.$borderStyle} ${e=>e.$borderColor};
  background-color: ${e=>e.$bgColor};
`,q=d("div")`
  // margin: 0 -16px;
  height: 100%;
  display: flex;
  justify-content: ${e=>e.$justify?"space-between":"left"};
`,B=d.div`
  height: 30px;
  line-height: 30px;
  padding: ${e=>e.$padding?e.$padding:"0 16px"};
  color: ${e=>e.$active?e.$activeColor:e.$color};
  font-weight: ${e=>e.$textWeight?e.$textWeight:500};
  font-family:${e=>e.$fontFamily?e.$fontFamily:"sans-serif"};
  font-style:${e=>e.$fontStyle?e.$fontStyle:"normal"};
  font-size:${e=>e.$textSize?e.$textSize:"14px"};
  text-transform:${e=>e.$textTransform?e.$textTransform:""};
  text-decoration:${e=>e.$textDecoration?e.$textDecoration:""};
  margin:${e=>e.$margin?e.$margin:"0px"};
  
  &:hover {
    color: ${e=>e.$activeColor};
    cursor: pointer;
  }

  .anticon {
    margin-left: 5px;
  }
`,J=d.div`
  cursor: pointer;
  height: 30px;
  line-height: 0;
  margin-left: 16px;

  img {
    height: 100%;
  }
`,Z=d.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: ${e=>e.$align};
`,X=d(O)`
  &.ant-dropdown-menu {
    min-width: 160px;
  }
`,_=[I];function ee(e){return e&&(e.hasOwnProperty("accentColor")||e.hasOwnProperty("backgroundColor")||e.hasOwnProperty("borderColor")||e.hasOwnProperty("color"))?{text:e.color,accent:e.accentColor,background:e.backgroundColor,border:e.borderColor}:e}const oe={logoUrl:D,logoEvent:w(E(_),[{name:"click"}]),horizontalAlignment:F(),style:L(v(R),ee),animationStyle:v(j),items:w(K(),[{label:s("menuItem")+" 1"}])},te=new N(oe,e=>{const k=e.items,y=o(m,{children:k.map((z,u)=>{const{hidden:V,label:U,items:g,active:M,onEvent:P}=z.getView();if(V)return null;const p=g.filter(n=>!n.children.hidden.getView()),x=[],$=[];p.forEach((n,h)=>{const c=h+"";n.children.active.getView()&&$.push(c),x.push({key:c,label:n.children.label.getView()})});const f=r(B,{$active:M||$.length>0,$color:e.style.text,$activeColor:e.style.accent,$fontFamily:e.style.fontFamily,$fontStyle:e.style.fontStyle,$textWeight:e.style.textWeight,$textSize:e.style.textSize,$padding:e.style.padding,$textTransform:e.style.textTransform,$textDecoration:e.style.textDecoration,$margin:e.style.margin,onClick:()=>P("click"),children:[U,g.length>0&&o(Q,{})]},u);if(p.length>0){const n=o(X,{onClick:h=>{var c;const{onEvent:W}=(c=g[Number(h.key)])==null?void 0:c.getView();W("click")},selectedKeys:$,items:x});return o(T,{dropdownRender:()=>n,children:f},u)}return f})}),b=e.horizontalAlignment==="justify";return o(Y,{$borderStyle:e.style.borderStyle,$animationStyle:e.animationStyle,$borderColor:e.style.border,$bgColor:e.style.background,$borderWidth:e.style.borderWidth,$borderRadius:e.style.radius,children:r(q,{$justify:b,children:[e.logoUrl&&o(J,{onClick:()=>e.logoEvent("click"),children:o("img",{src:e.logoUrl,alt:"LOGO"})}),b?y:o(Z,{$align:e.horizontalAlignment,children:y})]})})}).setPropertyViewFn(e=>r(m,{children:[o(a,{name:l.basic,children:A(e.items)}),(t.useContext(i).editorModeStatus==="logic"||t.useContext(i).editorModeStatus==="both")&&o(a,{name:l.interaction,children:C(e)}),(t.useContext(i).editorModeStatus==="layout"||t.useContext(i).editorModeStatus==="both")&&r(a,{name:l.layout,children:[e.horizontalAlignment.propertyView({label:s("navigation.horizontalAlignment"),radioButton:!0}),C(e)]}),(t.useContext(i).editorModeStatus==="logic"||t.useContext(i).editorModeStatus==="both")&&r(a,{name:l.advanced,children:[e.logoUrl.propertyView({label:s("navigation.logoURL"),tooltip:s("navigation.logoURLDesc")}),e.logoUrl.getView()&&e.logoEvent.propertyView({inline:!0})]}),(t.useContext(i).editorModeStatus==="layout"||t.useContext(i).editorModeStatus==="both")&&r(m,{children:[o(a,{name:l.style,children:e.style.getPropertyView()}),o(a,{name:l.animationStyle,hasTooltip:!0,children:e.animationStyle.getPropertyView()})]})]})).build(),ae=G(te,[new S("logoUrl",s("navigation.logoURLDesc")),H,new S("items",s("navigation.itemsDesc"))]);export{ae as NavComp};
