import{a4 as l,ir as h,dp as I,a0 as t,bN as v,eK as y,d,di as x,eL as f,as as S,cb as w,dm as z,dl as C,a6 as P}from"./index-CyMr76_m.js";const c=e=>P`
    border-color: ${e.border};
    border-width: ${e.borderWidth};
    border-radius: ${e.radius};
    overflow: hidden;
    padding: ${e.padding};
    ${e.background&&`background-color: ${e.background};`}
    ${e.backgroundImage&&`background-image: ${e.backgroundImage};`}
    ${e.backgroundImageRepeat&&`background-repeat: ${e.backgroundImageRepeat};`}
    ${e.backgroundImageSize&&`background-size: ${e.backgroundImageSize};`}
    ${e.backgroundImagePosition&&`background-position: ${e.backgroundImagePosition};`}
    ${e.backgroundImageOrigin&&`background-origin: ${e.backgroundImageOrigin};`}
  `,O=l.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  border: 1px solid #d7d9e0;
  border-radius: 4px;
  ${e=>e.$style&&c(e.$style)}
`,R=l(h)`;
  ${e=>e.$style&&c(e.$style)}
`,H=l(I)`
  border-top: ${e=>`${e.$showBorder?e.$borderWidth:0} solid ${e.$borderColor}`};
  flex: 1;
  ${e=>e.$backgroundColor&&`background-color: ${e.$backgroundColor};`}
  border-radius: 0;
  ${e=>e.$backgroundImage&&`background-image: ${e.$backgroundImage};`}
  ${e=>e.$backgroundImageRepeat&&`background-repeat: ${e.$backgroundImageRepeat};`}
  ${e=>e.$backgroundImageSize&&`background-size: ${e.$backgroundImageSize};`}
  ${e=>e.$backgroundImagePosition&&`background-position: ${e.$backgroundImagePosition};`}
  ${e=>e.$backgroundImageOrigin&&`background-origin: ${e.$backgroundImageOrigin};`}
`;function A(e){const{container:i,icon:n}=e,b=i.scrollbars,{items:$,...k}=i.body[0].children.view.getView(),{style:a,headerStyle:W,bodyStyle:o,footerStyle:E}=i,m=t.useContext(v).getAppSettings().maxWidth;y(m);let[g,p]=t.useState({value:"star",index:0});return t.useEffect(()=>{var u,s;if((u=n.props)!=null&&u.value){let r=(s=n.props)==null?void 0:s.value;p({index:parseInt(r==null?void 0:r.split("_")[0]),value:r==null?void 0:r.split("_")[1]})}},[n.props]),d("div",{style:{padding:a.margin,height:"100%"},children:d(O,{$style:a,children:d(x.Provider,{value:o.background,children:d(f,{style:{height:i.autoHeight?"auto":"100%",margin:"0px",padding:"0px"},hideScrollbar:!b,children:S("div",{style:{position:"relative",height:"100%"},children:[d(R,{$style:a,type:g==null?void 0:g.value,noise:!1,index:g.index,styles:{position:"absolute",top:"0",left:"50%",transform:"translateX(-50%)",width:w(a.margin),height:"100%"}}),d(H,{$showBorder:!1,...k,items:z($),autoHeight:i.autoHeight,emptyRows:14,minHeight:"142px",hintPlaceholder:e.hintPlaceholder??C,$backgroundColor:(o==null?void 0:o.background)||"transparent",$borderColor:a==null?void 0:a.border,$borderWidth:a==null?void 0:a.borderWidth,$backgroundImage:o==null?void 0:o.backgroundImage,$backgroundImageRepeat:o==null?void 0:o.backgroundImageRepeat,$backgroundImageSize:o==null?void 0:o.backgroundImageSize,$backgroundImagePosition:o==null?void 0:o.backgroundImagePosition,$backgroundImageOrigin:o==null?void 0:o.backgroundImageOrigin,style:{zIndex:999}})]})})})})})}export{A as ShapeTriContainer};
