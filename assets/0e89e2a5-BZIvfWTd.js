import{C}from"./aa7442af-9y-PcNP7.js";import{a4 as v,j4 as y,j5 as g,bU as h,bT as l,bx as f,bV as n,as as d,k as m,aj as o,d as r,bW as w,bX as F,bY as V,bs as x,bZ as A,bw as s,by as p,bA as k,bD as T,bz as z,b_ as S,b$ as $,br as c,c1 as M,bM as G,c0 as I}from"./index-CyMr76_m.js";import"./7a2fe5b9-_-VMc9tG.js";v.div`
  > a {
    color: ${y} !important;

    &:hover {
      color: ${g} !important;
    }
  }
`;const b=["#fde68a","#eecff3","#a7f3d0","#bfdbfe","#bfdbfe","#c7d2fe","#fecaca","#fcd6bb"],j=v.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${e=>e.alignment};
  cursor: pointer;
`,E=new h({src:l,AvatarIcon:f,label:l,color:n,backgroundColor:n,Tooltip:l},e=>e).setPropertyViewFn(e=>d(m,{children:[e.src.propertyView({label:o("avatarComp.src"),placeholder:"",tooltip:o("avatarComp.avatarCompTooltip")}),e.label.propertyView({label:o("avatarComp.title"),tooltip:o("avatarComp.avatarCompTooltip")}),e.AvatarIcon.propertyView({label:o("avatarComp.icon"),IconType:"All",tooltip:o("avatarComp.avatarCompTooltip")}),e.color.propertyView({label:o("style.fill")}),e.backgroundColor.propertyView({label:o("style.background")}),e.Tooltip.propertyView({label:o("badge.tooltip")})]})).build(),U=[G,I],O=[{label:r(w,{}),value:"flex-start"},{label:r(F,{}),value:"center"},{label:r(V,{}),value:"flex-end"}],J=function(){const e={style:x(A),maxCount:s(p,3),avatarSize:s(p,40),alignment:k(O,"center"),autoColor:T.DEFAULT_TRUE,onEvent:z(U),currentAvatar:S({}),avatars:$(E,{initOptions:[{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=1",label:String.fromCharCode(65+Math.ceil(Math.random()*25))},{AvatarIcon:"/icon:antd/startwotone"},{label:String.fromCharCode(65+Math.ceil(Math.random()*25))},{label:String.fromCharCode(65+Math.ceil(Math.random()*25))}]})};return new C(e,a=>r(j,{$style:a.style,alignment:a.alignment,children:r(c.Group,{maxCount:a.maxCount,size:a.avatarSize,children:a.avatars.map((t,u)=>{var i;return r(M,{title:t.Tooltip,children:r(c,{src:t.src??void 0,icon:((i=t.AvatarIcon)==null?void 0:i.props.value)===""||t.label.trim()!==""?void 0:t.AvatarIcon,style:{color:t.color?t.color:a.style.fill!=="#FFFFFF"?a.style.fill:"#FFFFFF",backgroundColor:t.backgroundColor?t.backgroundColor:a.autoColor?b[u%b.length]:a.style.background},size:a.avatarSize,onClick:()=>{a.onEvent("click")},children:t.label})})})})}),()=>"").setPropertyViewFn(a=>d(m,{children:[a.avatars.propertyView({}),a.maxCount.propertyView({label:o("avatarGroup.maxCount")}),a.avatarSize.propertyView({label:o("avatarGroup.avatarSize")}),a.autoColor.propertyView({label:o("avatarGroup.autoColor")}),a.alignment.propertyView({label:o("table.avatarGroupAlignment"),radioButton:!0}),a.onEvent.propertyView()]})).build()}();export{J as ColumnAvatarsComp,O as alignOptions};
