import{a4 as d,dp as c,a0 as B,bN as x,eK as C,as as m,d as t,di as l,dm as $,dl as S,cW as P,a6 as z,cb as W,cc as H}from"./index-CyMr76_m.js";const R=o=>z`
    border-radius: ${o.radius?o.radius:"4px"};
    border: ${o.borderWidth?o.borderWidth:"0px"} solid ${o.border};
    color: ${o.text};
    font-size: ${o.textSize} !important;
    font-weight: ${o.textWeight} !important;
    font-family: ${o.fontFamily} !important;
    font-style:${o.fontStyle} !important;
    text-transform:${o.textTransform} !important;
    text-decoration:${o.textDecoration} !important;
    background-color: ${o.background};
    .markdown-body a {
      color: ${o.links};
    }
    .markdown-body {
      margin: ${o.margin} !important;	
      padding: ${o.padding};	
      width: ${W(o.margin)};	
      // height: ${H(o.margin)};
      h1 {
        line-height: 1.5;
      }
      h5 {
        line-height: 2.2;
      }
    }

    .markdown-body {
      &,
      p,
      div,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: ${o.text};
      }
      img,
      pre {
        background-color: ${o.background};
        code {
          color: #000000;
        }
      }
    }
  `,O=d.div`
${o=>o.$animationStyle&&o.$animationStyle}
  display: flex;
  flex-flow: column;
  height: 100%;
  border: ${o=>o.$style.borderWidth} solid ${o=>o.$style.border};
  border-radius: ${o=>o.$style.radius};
  background-color: ${o=>o.$style.background};
  padding: ${o=>o.$style.padding};
  margin: ${o=>o.$style.margin};
  ${o=>o.$style.backgroundImage&&`background-image: url(${o.$style.backgroundImage});`}
  ${o=>o.$style.backgroundImageRepeat&&`background-repeat: ${o.$style.backgroundImageRepeat};`}
  ${o=>o.$style.backgroundImageSize&&`background-size: ${o.$style.backgroundImageSize};`}
  ${o=>o.$style.backgroundImagePosition&&`background-position: ${o.$style.backgroundImagePosition};`}
  ${o=>o.$style.backgroundImageOrigin&&`background-origin: ${o.$style.backgroundImageOrigin};`}
`,A=d.div`
  ${o=>o.$style&&R(o.$style)}
  text-align: ${o=>o.$horizontalAlignment};
  padding: ${o=>o.$style.padding};
  margin: ${o=>o.$style.margin};
`,N=d(c)`
  overflow: visible;
  ${o=>o.$backgroundColor&&`background-color: ${o.$backgroundColor};`}
  border-radius: 0;
`,F=d(c)`
  border-top: ${o=>`${o.$showBorder?o.$borderWidth:0} solid ${o.$borderColor}`};
  flex: 1;
  ${o=>o.$backgroundColor&&`background-color: ${o.$backgroundColor};`}
  border-radius: 0;
`,T=d(c)`
  border-top: ${o=>`${o.$showBorder?o.$borderWidth:0} solid ${o.$borderColor}`};
  overflow: visible;
  ${o=>o.$backgroundColor&&`background-color: ${o.$backgroundColor};`}
  border-radius: 0;
  ${o=>o.$footerBackgroundImage&&`background-image: url(${o.$footerBackgroundImage});`}
  ${o=>o.$footerBackgroundImageRepeat&&`background-repeat: ${o.$footerBackgroundImageRepeat};`}
  ${o=>o.$footerBackgroundImageSize&&`background-size: ${o.$footerBackgroundImageSize};`}
  ${o=>o.$footerBackgroundImagePosition&&`background-position: ${o.$footerBackgroundImagePosition};`}
  ${o=>o.$footerBackgroundImageOrigin&&`background-origin: ${o.$footerBackgroundImageOrigin};`}
`;function D(o){const{container:e,text:s,animationStyle:b}=o,{showHeader:n,showFooter:i}=e,k=e.showBody||!n&&!i,{items:h,...y}=e.header,{items:p,...f}=e.body[0].children.view.getView(),{items:I,...v}=e.footer,w=B.useContext(x).getAppSettings().maxWidth;C(w);const{style:a,headerStyle:g,bodyStyle:u,footerStyle:r}=e;return m(O,{$style:a,$animationStyle:b,children:[n&&t(l.Provider,{value:e.style.background,children:t(N,{...y,items:$(h),autoHeight:!0,emptyRows:5,minHeight:"46px",containerPadding:[0,0],showName:{bottom:i?20:0},$backgroundColor:(g==null?void 0:g.headerBackground)||"transparent",style:{padding:g.containerHeaderPadding}})}),k&&t(l.Provider,{value:e.style.background,children:m("div",{style:{overflowY:"scroll",background:`${e.style.background}`},children:[t(F,{$showBorder:!1,...f,items:$(p),autoHeight:e.autoHeight,emptyRows:14,minHeight:n?"143px":"142px",containerPadding:[0,0],hintPlaceholder:o.hintPlaceholder??S,$backgroundColor:(u==null?void 0:u.background)||"transparent",$borderColor:a==null?void 0:a.border,$borderWidth:a==null?void 0:a.borderWidth,style:{float:`${o.float}`,width:`${o.float==="none"?"100%":`${o.width}%`}`,height:"100%",...e.bodyStyle}}),t(A,{$style:o.style,$horizontalAlignment:o.horizontalAlignment,children:t("p",{children:o.type==="markdown"?t(P,{children:s.value}):s.value})})]})}),i&&t(l.Provider,{value:e.style.background,children:t(T,{$showBorder:n,...v,items:$(I),autoHeight:!0,emptyRows:5,minHeight:"48px",containerPadding:[0,0],showName:{top:n?20:0},$backgroundColor:(r==null?void 0:r.footerBackground)||"transparent",$footerBackgroundImage:r==null?void 0:r.footerBackgroundImage,$footerBackgroundImageRepeat:r==null?void 0:r.footerBackgroundImageRepeat,$footerBackgroundImageSize:r==null?void 0:r.footerBackgroundImageSize,$footerBackgroundImagePosition:r==null?void 0:r.footerBackgroundImagePosition,$footerBackgroundImageOrigin:r==null?void 0:r.footerBackgroundImageOrigin,$borderColor:a==null?void 0:a.border,$borderWidth:a==null?void 0:a.borderWidth,style:{padding:r.containerFooterPadding}})})]})}export{D as TriContainer};
