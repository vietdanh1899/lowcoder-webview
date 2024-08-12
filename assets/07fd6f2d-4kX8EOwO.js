import{a4 as c,dp as b,a0 as w,bN as P,eK as x,d as n,as as C,di as $,dm as s,eL as S,dl as H,a6 as R}from"./index-CyMr76_m.js";const z=o=>R`
    border-color: ${o.border};
    border-width: ${o.borderWidth};
    border-radius: ${o.radius};
    border-style: ${o.borderStyle};
    overflow: hidden;
    padding: ${o.padding};
    ${o.background&&`background-color: ${o.background};`}
    ${o.backgroundImage&&`background-image: url(${o.backgroundImage});`}
    ${o.backgroundImageRepeat&&`background-repeat: ${o.backgroundImageRepeat};`}
    ${o.backgroundImageSize&&`background-size: ${o.backgroundImageSize};`}
    ${o.backgroundImagePosition&&`background-position: ${o.backgroundImagePosition};`}
    ${o.backgroundImageOrigin&&`background-origin: ${o.backgroundImageOrigin};`}
  `,O=c.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  border: 1px solid #d7d9e0;
  border-radius: 4px;
  ${o=>o.$style&&z(o.$style)}
  ${o=>o.$animationStyle&&o.$animationStyle}
`,W=c(b)`
  overflow: visible;
  ${o=>o.$backgroundColor&&`background-color: ${o.$backgroundColor};`}
  border-radius: 0;
`,N=c(b)`
  border-top: ${o=>`${o.$showBorder?o.$borderWidth:0} solid ${o.$borderColor}`};
  flex: 1;
  ${o=>o.$backgroundColor&&`background-color: ${o.$backgroundColor};`}
  border-radius: 0;
`,F=c(b)`
  border-top: ${o=>`${o.$showBorder?o.$borderWidth:0} solid ${o.$borderColor}`};
  overflow: visible;
  ${o=>o.$backgroundColor&&`background-color: ${o.$backgroundColor};`}
  border-radius: 0;
  ${o=>o.$footerBackgroundImage&&`background-image: url(${o.$footerBackgroundImage});`}
  ${o=>o.$footerBackgroundImageRepeat&&`background-repeat: ${o.$footerBackgroundImageRepeat};`}
  ${o=>o.$footerBackgroundImageSize&&`background-size: ${o.$footerBackgroundImageSize};`}
  ${o=>o.$footerBackgroundImagePosition&&`background-position: ${o.$footerBackgroundImagePosition};`}
  ${o=>o.$footerBackgroundImageOrigin&&`background-origin: ${o.$footerBackgroundImageOrigin};`}
`;function T(o){const{container:a,animationStyle:k}=o,{showHeader:d,showFooter:g}=a,i=a.showBody||!d&&!g,m=a.scrollbars,{items:h,...p}=a.header,{items:f,...B}=a.body[0].children.view.getView(),{items:I,...v}=a.footer,{style:e,headerStyle:u,bodyStyle:l,footerStyle:r}=a,y=w.useContext(P).getAppSettings().maxWidth,t=x(y)?8:0;return n("div",{style:{padding:e.margin,height:"100%"},children:C(O,{$style:e,$animationStyle:k,children:[d&&n($.Provider,{value:u.headerBackground,children:n(W,{...p,items:s(h),autoHeight:!0,emptyRows:5,minHeight:"46px",containerPadding:[t,3],showName:{bottom:i||g?20:0},$backgroundColor:(u==null?void 0:u.headerBackground)||"transparent",style:{padding:u.containerHeaderPadding}})}),i&&n($.Provider,{value:l.background,children:n(S,{style:{height:a.autoHeight?"auto":"100%",margin:"0px",padding:"0px"},hideScrollbar:!m,children:n(N,{$showBorder:d,...B,items:s(f),autoHeight:a.autoHeight,emptyRows:14,minHeight:d?"143px":"142px",containerPadding:d&&g||d?[t,11.5]:[t,11],hintPlaceholder:o.hintPlaceholder??H,$backgroundColor:(l==null?void 0:l.background)||"transparent",$borderColor:e==null?void 0:e.border,$borderWidth:e==null?void 0:e.borderWidth,style:{padding:l.containerBodyPadding}})})}),g&&n($.Provider,{value:r.footerBackground,children:n(F,{$showBorder:d||i,...v,items:s(I),autoHeight:!0,emptyRows:5,minHeight:i?"47px":"46px",containerPadding:i||d?[t,3.5]:[t,3],showName:{top:d||i?20:0},$backgroundColor:(r==null?void 0:r.footerBackground)||"transparent",$footerBackgroundImage:r==null?void 0:r.footerBackgroundImage,$footerBackgroundImageRepeat:r==null?void 0:r.footerBackgroundImageRepeat,$footerBackgroundImageSize:r==null?void 0:r.footerBackgroundImageSize,$footerBackgroundImagePosition:r==null?void 0:r.footerBackgroundImagePosition,$footerBackgroundImageOrigin:r==null?void 0:r.footerBackgroundImageOrigin,$borderColor:e==null?void 0:e.border,$borderWidth:e==null?void 0:e.borderWidth,style:{padding:r.containerFooterPadding}})})]})})}export{T as TriContainer};
