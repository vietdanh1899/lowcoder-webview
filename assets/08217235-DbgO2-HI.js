import{a4 as s,br as C,aj as t,bs as d,bt as S,bu as P,bv as $,bw as c,bx as V,by as z,bz as k,bA as m,bB as p,bC as D,bD as E,bE as T,bF as B,d as a,as as n,k as L,bG as o,bH as r,bI as G,bJ as I,bK as A,bL as F,bM as M,a0 as v,bN as R,b2 as U,bO as W,bP as j,bQ as q}from"./index-CyMr76_m.js";import{badgeChildren as J,BadgeBasicSection as K}from"./b406c696-C27RDlhx.js";const N=s(C)`
  background: ${e=>e.$style.background};
  color: ${e=>e.$style.fill};
  cursor: ${e=>e.$cursorPointer?"pointer":""};
`,H=s.div`
display: flex;
width: 100%;
height: 100%;
align-items: center;
flex-direction: ${e=>e.labelPosition==="left"?"row":"row-reverse"};
${e=>e.$style&&{...e.$style,borderRadius:e.$style.radius}}
`,Q=s.div`
width: calc(100% - ${e=>e.iconSize}px);
display: flex;
padding-left: 5px;
padding-right: 5px;
flex-direction: column;
justify-content: flex-end;
align-items: ${e=>e.alignmentPosition==="left"?"flex-start":"flex-end"};
`,Y=s.span`
max-width: 100%;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
font-weight: ${e=>e.$style.textWeight};
border-radius: ${e=>e.$style.radius};
font-size: ${e=>e.$style.textSize};
text-transform: ${e=>e.$style.textTransform};
color: ${e=>e.$style.text};
border: ${e=>e.$style.border};
border-style: ${e=>e.$style.borderStyle};
border-width: ${e=>e.$style.borderWidth};
font-family: ${e=>e.$style.fontFamily};
font-style: ${e=>e.$style.fontStyle};
margin: ${e=>e.$style.margin};
padding: ${e=>e.$style.padding};
background: ${e=>e.$style.background};
text-decoration: ${e=>e.$style.textDecoration};
`,Z=s.span`
max-width: 100%;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
font-weight: ${e=>e.$style.textWeight};
border-radius: ${e=>e.$style.radius};
font-size: ${e=>e.$style.textSize};
text-transform: ${e=>e.$style.textTransform};
color: ${e=>e.$style.text};
border: ${e=>e.$style.border};
border-style: ${e=>e.$style.borderStyle};
border-width: ${e=>e.$style.borderWidth};
font-family: ${e=>e.$style.fontFamily};
font-style: ${e=>e.$style.fontStyle};
margin: ${e=>e.$style.margin};
padding: ${e=>e.$style.padding};
background: ${e=>e.$style.background};
text-decoration: ${e=>e.$style.textDecoration};
`,O=[M],X=[{label:t("avatarComp.square"),value:"square"},{label:t("avatarComp.circle"),value:"circle"}],_=[{label:t("labelProp.left"),value:"left"},{label:t("labelProp.right"),value:"right"}],ee={style:d(S),avatarStyle:d(P),labelStyle:d($),captionStyle:d($),icon:c(V,"/icon:solid/user"),iconSize:c(z,40),onEvent:k(O),shape:m(X,"circle"),title:p("title",""),src:p("src",""),avatarLabel:p("avatarLabel","{{currentUser.name}}"),avatarCatption:p("avatarCatption","{{currentUser.email}}"),labelPosition:m(_,"left"),alignmentPosition:c(D,"left"),enableDropdownMenu:E,options:T,...J},te=e=>{const{shape:u,title:y,src:f,iconSize:w}=e;v.useContext(R).getUICompByName(v.useContext(U));const g=e.options.findIndex(l=>{var i;return(i=l.prefixIcon)==null?void 0:i.props.value})>-1,b=e.options.filter(l=>!l.hidden).map((l,i)=>({title:l.label,label:l.label,key:l.label+" - "+i,disabled:l.disabled,icon:g&&a("span",{children:l.prefixIcon}),onEvent:l.onEvent})),h=a(q,{items:b,onClick:({key:l})=>{var i;return(i=b.find(x=>x.key===l))==null?void 0:i.onEvent("click")}});return a(W,{menu:{items:b},placement:e.labelPosition==="left"?"bottomLeft":"bottomRight",arrow:!0,disabled:!e.enableDropdownMenu,dropdownRender:()=>h,children:n(H,{iconSize:e.iconSize,labelPosition:e.labelPosition,$style:e.style,children:[a(j,{count:e.badgeCount.value,dot:e.badgeType==="dot",size:e.badgeSize,overflowCount:e.overflowCount,title:e.badgeTitle,offset:e.shape==="circle"?[-2,6]:[0,0],children:a(N,{size:w,icon:y.value!==""?null:e.icon,shape:u,$style:e.avatarStyle,src:f.value,onClick:()=>e.onEvent("click"),children:y.value})}),n(Q,{iconSize:e.iconSize,alignmentPosition:e.alignmentPosition,children:[a(Y,{$style:e.labelStyle,children:e.avatarLabel.value}),a(Z,{$style:e.captionStyle,children:e.avatarCatption.value})]})]})})};let ae=function(){return new B(ee,e=>a(te,{...e})).setPropertyViewFn(e=>n(L,{children:[n(o,{name:r.basic,children:[e.src.propertyView({label:t("avatarComp.src"),placeholder:"http://xxxx/xx.jpg",tooltip:t("avatarComp.avatarCompTooltip")}),e.title.propertyView({label:t("avatarComp.title"),tooltip:t("avatarComp.avatarCompTooltip")}),e.icon.propertyView({label:t("avatarComp.icon"),IconType:"All",tooltip:t("avatarComp.avatarCompTooltip")}),e.shape.propertyView({label:t("avatarComp.shape"),radioButton:!0}),e.iconSize.propertyView({label:t("avatarComp.iconSize")}),e.enableDropdownMenu.propertyView({label:t("avatarComp.enableDropDown")}),e.enableDropdownMenu.getView()&&e.options.propertyView({})]}),n(o,{name:t("avatarComp.label"),children:[e.avatarLabel.propertyView({label:t("avatarComp.label")}),e.avatarCatption.propertyView({label:t("avatarComp.caption")}),e.labelPosition.propertyView({label:t("avatarComp.labelPosition"),radioButton:!0}),e.alignmentPosition.propertyView({label:t("avatarComp.alignmentPosition"),radioButton:!0})]}),a(K,{...e}),a(o,{name:r.interaction,children:e.onEvent.getPropertyView()}),a(o,{name:r.layout,children:G(e)}),a(o,{name:r.style,children:e.style.getPropertyView()}),a(o,{name:r.avatarStyle,children:e.avatarStyle.getPropertyView()}),a(o,{name:r.labelStyle,children:e.labelStyle.getPropertyView()}),a(o,{name:r.captionStyle,children:e.captionStyle.getPropertyView()})]})).build()}();const ie=I(ae,[A,new F("badgeCount",t("button.textDesc"))]);export{ie as AvatarComp};
