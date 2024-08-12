import{a4 as h,dp as C,a0 as f,bN as V,eK as q,d as o,dR as G,f2 as J,f3 as Z,as as v,f4 as S,k as I,di as c,eL as p,dm as l,f5 as H,dl as W,a6 as _}from"./index-CyMr76_m.js";const{Header:j,Content:z,Footer:D,Sider:y}=S,O=h.div`
  width: 100%;
  top: 0;
  max-width: inherit;
  overflow: auto;
  height: 100%;
`,M=e=>_`
    border-color: ${e.border};
    border-width: ${e.borderWidth};
    border-radius: ${e.radius};
    overflow: hidden;
    padding: ${e.padding};
    ${e.background&&`background-color: ${e.background};`}
    ${e.backgroundImage&&`background-image: url(${e.backgroundImage});`}
    ${e.backgroundImageRepeat&&`background-repeat: ${e.backgroundImageRepeat};`}
    ${e.backgroundImageSize&&`background-size: ${e.backgroundImageSize};`}
    ${e.backgroundImagePosition&&`background-position: ${e.backgroundImagePosition};`}
    ${e.backgroundImageOrigin&&`background-origin: ${e.backgroundImageOrigin};`}
  `,Q=h.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  border: 1px solid #d7d9e0;
  border-radius: 4px;
  ${e=>e.$style&&M(e.$style)}
  ${e=>e.$animationStyle}
`,X=h(C)`
  overflow: visible;
  ${e=>e.$backgroundColor&&`background-color: ${e.$backgroundColor};`}
  border-radius: 0;
`,x=h(C)`
  overflow: auto;
  ${e=>e.$backgroundColor&&`background-color: ${e.$backgroundColor};`}
  border-radius: 0;
  ${e=>e.$siderBackgroundImage&&`background-image: url(${e.$siderBackgroundImage});`}
  ${e=>e.$siderBackgroundImageRepeat&&`background-repeat: ${e.$siderBackgroundImageRepeat};`}
  ${e=>e.$siderBackgroundImageSize&&`background-size: ${e.$siderBackgroundImageSize};`}
  ${e=>e.$siderBackgroundImagePosition&&`background-position: ${e.$siderBackgroundImagePosition};`}
  ${e=>e.$siderBackgroundImageOrigin&&`background-origin: ${e.$siderBackgroundImageOrigin};`}
`,A=h(C)`
  border-top: ${e=>`${e.$showBorder?e.$borderWidth:0} solid ${e.$borderColor}`};
  flex: 1;
  ${e=>e.$backgroundColor&&`background-color: ${e.$backgroundColor};`}
  border-radius: 0;
`,Y=h(C)`
  border-top: ${e=>`${e.$showBorder?e.$borderWidth:0} solid ${e.$borderColor}`};
  overflow: visible;
  ${e=>e.$backgroundColor&&`background-color: ${e.$backgroundColor};`}
  border-radius: 0;
  ${e=>e.$footerBackgroundImage&&`background-image: url(${e.$footerBackgroundImage});`}
  ${e=>e.$footerBackgroundImageRepeat&&`background-repeat: ${e.$footerBackgroundImageRepeat};`}
  ${e=>e.$footerBackgroundImageSize&&`background-size: ${e.$footerBackgroundImageSize};`}
  ${e=>e.$footerBackgroundImagePosition&&`background-position: ${e.$footerBackgroundImagePosition};`}
  ${e=>e.$footerBackgroundImageOrigin&&`background-origin: ${e.$footerBackgroundImageOrigin};`}
`;function re(e){const{container:d,siderCollapsed:m,setSiderCollapsed:$,animationStyle:N}=e,{showHeader:t,showFooter:u,showSider:s}=d,{items:L,...U}=d.header,{items:P,...w}=d.body[0].children.view.getView(),{items:E,...F}=d.footer,{items:b,...B}=d.sider,{style:i,headerStyle:k,siderStyle:r,bodyStyle:n,footerStyle:a}=d,T=f.useContext(V).getAppSettings().maxWidth;q(T);const R=f.useRef();function K(g){e.setSiderCollapsed(g)}return f.useEffect(()=>{$(d.siderCollapsed)},[d.siderCollapsed]),o("div",{style:{padding:i.margin,height:"100%"},children:o(G,{theme:{components:{Layout:{triggerBg:J(d.siderStyle.siderBackground),triggerColor:Z(d.siderStyle.siderBackground,"black","white"),siderBg:d.siderStyle.siderBackground}}},children:v(Q,{$style:i,$animationStyle:N,children:[v(S,{style:{padding:"0px"},hasSider:s&&!d.innerSider,children:[s&&!d.innerSider&&!d.siderRight&&o(I,{children:o(c.Provider,{value:r==null?void 0:r.siderBackground,children:o(y,{width:d.siderWidth,style:{padding:"0px",margin:"0px",backgroundColor:(r==null?void 0:r.siderBackground)||"transparent"},collapsible:d.siderCollapsible,breakpoint:"sm",collapsedWidth:d.siderCollapsedWidth,collapsed:m,onCollapse:g=>K(g),children:o(p,{style:{height:d.autoHeight?"auto":"100%",margin:"0px",padding:"0px"},hideScrollbar:!d.siderScrollbars,children:o(x,{...B,items:l(b),autoHeight:!0,emptyRows:30,minHeight:`calc(100vh - ${i.padding}px)`,containerPadding:[0,0],showName:{bottom:u?20:0},$backgroundColor:(r==null?void 0:r.siderBackground)||"transparent",$siderBackgroundImage:r==null?void 0:r.siderBackgroundImage,$siderBackgroundImageRepeat:r==null?void 0:r.siderBackgroundImageRepeat,$siderBackgroundImageSize:r==null?void 0:r.siderBackgroundImageSize,$siderBackgroundImagePosition:r==null?void 0:r.siderBackgroundImagePosition,$siderBackgroundImageOrigin:r==null?void 0:r.siderBackgroundImageOrigin,style:{padding:r.containerSiderPadding}})})})})}),v(S,{style:{padding:"0px"},children:[t&&o(I,{children:o(c.Provider,{value:i.background,children:o(j,{style:{backgroundColor:(k==null?void 0:k.headerBackground)||"transparent",padding:"0px",margin:"0px"},children:o(X,{...U,items:l(L),autoHeight:!0,emptyRows:5,minHeight:"46px",containerPadding:[0,0],showName:{bottom:u?20:0},$backgroundColor:(k==null?void 0:k.headerBackground)||"transparent",style:{padding:k.containerHeaderPadding}})})})}),s&&d.innerSider?o(I,{children:v(S,{style:{padding:"0px"},hasSider:s&&d.innerSider,children:[s&&!d.siderRight&&o(c.Provider,{value:r==null?void 0:r.siderBackground,children:o(y,{width:d.siderWidth,style:{padding:"0px",margin:"0px",marginTop:i.borderWidth,backgroundColor:(r==null?void 0:r.siderBackground)||"transparent"},collapsible:d.siderCollapsible,breakpoint:"sm",collapsedWidth:d.siderCollapsedWidth,collapsed:m,onCollapse:g=>$(g),children:o(p,{style:{height:d.autoHeight?"auto":"100%",margin:"0px",padding:"0px"},hideScrollbar:!d.siderScrollbars,children:o(x,{...B,items:l(b),autoHeight:!0,emptyRows:30,minHeight:`calc(100vh - ${i.padding}px)`,containerPadding:[0,0],showName:{bottom:u?20:0},$backgroundColor:(r==null?void 0:r.siderBackground)||"transparent",$siderBackgroundImage:r==null?void 0:r.siderBackgroundImage,$siderBackgroundImageRepeat:r==null?void 0:r.siderBackgroundImageRepeat,$siderBackgroundImageSize:r==null?void 0:r.siderBackgroundImageSize,$siderBackgroundImagePosition:r==null?void 0:r.siderBackgroundImagePosition,$siderBackgroundImageOrigin:r==null?void 0:r.siderBackgroundImageOrigin,style:{padding:r.containerSiderPadding}})})})}),o(z,{style:{padding:"0px",margin:"0px",backgroundColor:(n==null?void 0:n.background)||"transparent"},children:o(p,{style:{height:d.autoHeight?"auto":"100%",margin:"0px",padding:"0px"},hideScrollbar:!d.contentScrollbars,children:d.showApp&&d.contentApp!=""?o(c.Provider,{value:n==null?void 0:n.background,children:o(O,{children:o(H,{ref:R,appId:d.contentApp,baseUrl:d.baseUrl})})}):o(A,{$showBorder:t,...w,items:l(P),autoHeight:d.autoHeight,emptyRows:14,minHeight:t?"143px":"142px",containerPadding:[0,0],hintPlaceholder:e.hintPlaceholder??W,$backgroundColor:(n==null?void 0:n.background)||"transparent",$borderColor:i==null?void 0:i.border,$borderWidth:i==null?void 0:i.borderWidth,style:{padding:n.containerBodyPadding}})})}),s&&d.siderRight&&o(c.Provider,{value:r==null?void 0:r.siderBackground,children:o(y,{width:d.siderWidth,style:{padding:"0px",margin:"0px",backgroundColor:(r==null?void 0:r.siderBackground)||"transparent"},collapsible:d.siderCollapsible,breakpoint:"sm",collapsedWidth:d.siderCollapsedWidth,reverseArrow:!0,collapsed:m,onCollapse:g=>$(g),children:o(p,{style:{height:d.autoHeight?"auto":"100%",margin:"0px",padding:"0px"},hideScrollbar:!d.siderScrollbars,children:o(x,{...B,items:l(b),autoHeight:!0,emptyRows:30,minHeight:`calc(100vh - ${i.padding}px)`,containerPadding:[0,0],showName:{bottom:u?20:0},$backgroundColor:(r==null?void 0:r.siderBackground)||"transparent",$siderBackgroundImage:r==null?void 0:r.siderBackgroundImage,$siderBackgroundImageRepeat:r==null?void 0:r.siderBackgroundImageRepeat,$siderBackgroundImageSize:r==null?void 0:r.siderBackgroundImageSize,$siderBackgroundImagePosition:r==null?void 0:r.siderBackgroundImagePosition,$siderBackgroundImageOrigin:r==null?void 0:r.siderBackgroundImageOrigin,style:{padding:r.containerSiderPadding}})})})})]})}):o(z,{style:{padding:"0px",margin:"0px"},children:o(p,{style:{height:d.autoHeight?"auto":"100%",margin:"0px",padding:"0px"},hideScrollbar:!d.contentScrollbars,children:d.showApp&&d.contentApp!=""?o(c.Provider,{value:n==null?void 0:n.background,children:o(O,{children:o(H,{ref:R,appId:d.contentApp,baseUrl:d.baseUrl})})}):o(A,{$showBorder:t,...w,items:l(P),autoHeight:d.autoHeight,emptyRows:14,minHeight:t?"143px":"142px",containerPadding:[0,0],hintPlaceholder:e.hintPlaceholder??W,$backgroundColor:(n==null?void 0:n.background)||"transparent",$borderColor:i==null?void 0:i.border,$borderWidth:i==null?void 0:i.borderWidth,style:{padding:n.containerBodyPadding}})})}),u&&o(D,{style:{textAlign:"center",padding:"0px",margin:"0px",backgroundColor:(a==null?void 0:a.footerBackground)||"transparent"},children:o(Y,{$showBorder:t,...F,items:l(E),autoHeight:!0,emptyRows:5,minHeight:"48px",containerPadding:[0,0],showName:{top:t?20:0},$backgroundColor:(a==null?void 0:a.footerBackground)||"transparent",$footerBackgroundImage:a==null?void 0:a.footerBackgroundImage,$footerBackgroundImageRepeat:a==null?void 0:a.footerBackgroundImageRepeat,$footerBackgroundImageSize:a==null?void 0:a.footerBackgroundImageSize,$footerBackgroundImagePosition:a==null?void 0:a.footerBackgroundImagePosition,$footerBackgroundImageOrigin:a==null?void 0:a.footerBackgroundImageOrigin,$borderColor:i==null?void 0:i.border,$borderWidth:i==null?void 0:i.borderWidth,style:{padding:a.containerFooterPadding}})})]}),s&&!d.innerSider&&d.siderRight&&o(I,{children:o(c.Provider,{value:r==null?void 0:r.siderBackground,children:o(y,{width:d.siderWidth,style:{padding:"0px",margin:"0px",backgroundColor:(r==null?void 0:r.siderBackground)||"transparent"},collapsible:d.siderCollapsible,breakpoint:"sm",collapsedWidth:d.siderCollapsedWidth,reverseArrow:!0,collapsed:m,onCollapse:g=>$(g),children:o(p,{style:{height:d.autoHeight?"auto":"100%",margin:"0px",padding:"0px"},hideScrollbar:!d.siderScrollbars,children:o(x,{...B,items:l(b),autoHeight:!0,emptyRows:30,minHeight:`calc(100vh - ${i.padding}px)`,containerPadding:[0,0],showName:{bottom:u?20:0},$backgroundColor:(r==null?void 0:r.siderBackground)||"transparent",$siderBackgroundImage:r==null?void 0:r.siderBackgroundImage,$siderBackgroundImageRepeat:r==null?void 0:r.siderBackgroundImageRepeat,$siderBackgroundImageSize:r==null?void 0:r.siderBackgroundImageSize,$siderBackgroundImagePosition:r==null?void 0:r.siderBackgroundImagePosition,$siderBackgroundImageOrigin:r==null?void 0:r.siderBackgroundImageOrigin,style:{padding:r.containerSiderPadding}})})})})})]}),o("style",{children:`
              .ant-layout-sider-trigger {
                bottom: 4px !important;
                ${d.siderRight?`
                  right: 8px !important;
                `:`
                  left: 8px !important;}
                `}
                
              }
            `})]})})})}export{re as PageLayout};
