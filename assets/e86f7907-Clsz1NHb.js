import{aj as l,np as z,bB as G,bw as c,eE as I,ci as L,bD as f,c5 as F,bz as R,bS as J,bs as m,nq as W,eN as A,nr as q,c7 as U,by as Y,a4 as Q,ns as Z,bF as X,d as s,eW as ee,as as h,k as C,bG as b,bH as u,a0 as k,bN as P,cx as te,bI as ae,bJ as ne,bL as re,bK as ie,dn as oe,a6 as se,nt as le,di as x,eL as H,dm as de,gB as $,ne as ce,mr as be,gw as O,F as S,ai as he,eR as ge,dp as ue,dl as pe,nf as K}from"./index-CyMr76_m.js";const ye=[{label:l("tabbedContainer.switchTab"),value:"change",description:l("tabbedContainer.switchTabDesc")}],me={tabs:z,selectedTabKey:G("key","Tab1"),containers:c(I(oe),{0:{layout:{},items:{}},1:{layout:{},items:{}}}),autoHeight:L,scrollbars:c(f,!1),placement:c(F,"top"),onEvent:R(ye),disabled:J,showHeader:c(f,!0),style:c(m(W),{borderWidth:"1px"}),headerStyle:c(m(A),{containerHeaderPadding:"0 10px"}),bodyStyle:m(q),animationStyle:m(U),tabsGutter:c(Y,32),tabsCentered:c(f,!1)},we=(e,t,a)=>se`
    &.ant-tabs {
      overflow: hidden;
      border: ${e.borderWidth} ${e.borderStyle} ${e.border};
      border-radius: ${e.radius};
      padding: ${e.padding};
      background-color: ${e.background};
      background-image: url(${e.backgroundImage});
      background-repeat: ${e.backgroundImageRepeat};
      background-size: ${e.backgroundImageSize};
      background-position: ${e.backgroundImagePosition};
      background-origin: ${e.backgroundImageOrigin};

      > .ant-tabs-content-holder > .ant-tabs-content > .ant-tabs-tabpane {
        height: 100%;
        .react-grid-layout {
          border-radius: 0;
          background-color: ${a.background||"transparent"};
          padding: ${a.containerBodyPadding};
        }
      }

      > .ant-tabs-nav {
        background-color: ${t.headerBackground||"transparent"};
        margin: ${t.containerHeaderPadding};

        .ant-tabs-tab {
          div {
            color: #8b8fa3;
          }

          &.ant-tabs-tab-active div {
            color: ${e.accent};
          }
        }

        .ant-tabs-tab-btn {
          color: ${e.tabText} !important;
          font-size: ${e.textSize};
          font-family:${e.fontFamily};
          font-weight:${e.textWeight};
          text-transform:${e.textTransform};
          text-decoration:${e.textDecoration};
          font-style:${e.fontStyle};
        }

        .ant-tabs-ink-bar {
          background-color: ${e.accent};
        }

        ::before {
          border-color: ${e.border};
        }
      }
    }
  `,fe=Q(Z)`
  &.ant-tabs {
    ${e=>e.$animationStyle}
  }

  ${e=>e.$style&&we(e.$style,e.$headerStyle,e.$bodyStyle)}
`,$e=e=>s(ue,{...e,emptyRows:15,hintPlaceholder:pe}),Se=e=>{let{tabs:t,containers:a,dispatch:n,style:r,headerStyle:d,bodyStyle:i}=e;const p=t.filter(o=>!o.hidden),V=p.find(o=>o.key===e.selectedTabKey.value),_=V?V.key:p.length>0?p[0].key:void 0,B=k.useCallback((o,y)=>{const g=y.target;g.parentNode.click?g.parentNode.click():g.parentNode.parentNode.click()},[]),{isMobile:v}=le(),M=e.showHeader.valueOf(),j=v?8:0,D=p.map(o=>{const y=String(o.id),g=K(K(n,"containers"),y),w=a[y].children,T=o.icon.props.value;return{label:h(C,{children:[o.iconPosition==="left"&&T&&s("span",{style:{marginRight:"4px"},children:o.icon}),o.label,o.iconPosition==="right"&&T&&s("span",{style:{marginLeft:"4px"},children:o.icon})]}),key:o.key,children:s(x.Provider,{value:i.background,children:s(H,{style:{height:e.autoHeight?"100%":"auto",margin:"0px",padding:"0px"},hideScrollbar:!e.scrollbars,children:s($e,{layout:w.layout.getView(),items:de(w.items.getView()),positionParams:w.positionParams.getView(),dispatch:g,autoHeight:e.autoHeight,containerPadding:[j,20]})})})}});return s(H,{style:{height:e.autoHeight?"100%":"auto",margin:"0px",padding:"0px"},hideScrollbar:!e.scrollbars,children:s("div",{style:{padding:e.style.margin,height:e.autoHeight?"100%":"auto"},children:s(x.Provider,{value:d.headerBackground,children:s(fe,{$animationStyle:e.animationStyle,tabPosition:e.placement,activeKey:_,$style:r,$headerStyle:d,$bodyStyle:i,$showHeader:M,onChange:o=>{o!==e.selectedTabKey.value&&(e.selectedTabKey.onChange(o),e.onEvent("change"))},onTabClick:B,animated:!0,$isMobile:v,items:D,tabBarGutter:e.tabsGutter,centered:e.tabsCentered})})})})},E=function(){return new X(me,(e,t)=>s(ee.Provider,{value:e.disabled,children:s(Se,{...e,dispatch:t})})).setPropertyViewFn(e=>h(C,{children:[h(b,{name:u.basic,children:[e.tabs.propertyView({title:l("tabbedContainer.tab"),newOptionLabel:"Tab"}),e.selectedTabKey.propertyView({label:l("prop.defaultValue")})]}),["logic","both"].includes(k.useContext(P).editorModeStatus)&&h(b,{name:u.interaction,children:[e.onEvent.getPropertyView(),te(e),e.showHeader.propertyView({label:l("tabbedContainer.showTabs")}),ae(e)]}),["layout","both"].includes(k.useContext(P).editorModeStatus)&&h(C,{children:[h(b,{name:u.layout,children:[e.placement.propertyView({label:l("tabbedContainer.placement"),radioButton:!0}),e.tabsCentered.propertyView({label:l("tabbedContainer.tabsCentered")}),e.tabsGutter.propertyView({label:l("tabbedContainer.gutter"),tooltip:l("tabbedContainer.gutterTooltip")}),e.autoHeight.getPropertyView(),!e.autoHeight.getView()&&e.scrollbars.propertyView({label:l("prop.scrollbar")})]}),s(b,{name:u.style,children:e.style.getPropertyView()}),e.showHeader.getView()&&s(b,{name:"Header Style",children:e.headerStyle.getPropertyView()}),s(b,{name:"Body Style",children:e.bodyStyle.getPropertyView()}),s(b,{name:u.animationStyle,hasTooltip:!0,children:e.animationStyle.getPropertyView()})]})]})).build()}();class Ce extends E{syncContainers(){const t=this.children.tabs.getView(),a=new Set(t.map(i=>String(i.id)));let n=this.children.containers.getView();const r=[];Object.keys(n).forEach(i=>{a.has(i)||r.push($("containers",$(i,ce())))}),a.forEach(i=>{n.hasOwnProperty(i)||r.push($("containers",be(i,{layout:{},items:{}})))});let d=this;return r.forEach(i=>{d=d.reduce(i)}),d}reduce(t){if(t.type===O.CUSTOM){const n=t.value;if(n.type==="push"){const r=n.value;S.isEmpty(r.key)&&(r.key=r.label),t={...t,value:{...n,value:{...r}}}}if(n.type==="delete"&&this.children.tabs.getView().length<=1)return he.warning(l("tabbedContainer.atLeastOneTabError")),this}let a=super.reduce(t);return t.type===O.UPDATE_NODES_V2&&(a=a.syncContainers()),a}realSimpleContainer(t){let a=this.children.selectedTabKey.getView().value;const n=this.children.tabs.getView(),r=n.find(i=>i.key===a)??n[0],d=String(r.id);return S.isNil(t)?this.children.containers.children[d]:Object.values(this.children.containers.children).find(i=>i.realSimpleContainer(t))}getCompTree(){const t=this.children.containers.getView(),a=Object.values(t).map(n=>n.getCompTree());return ge(a)}findContainer(t){const a=this.children.containers.getView();for(const n of Object.values(a)){const r=n.findContainer(t);if(r)return r===n?this:r}}getPasteValue(t){const a=this.children.containers.getView(),n=S.mapValues(a,r=>r.getPasteValue(t));return{...this.toJsonValue(),containers:n}}autoHeight(){return this.children.autoHeight.getView()}}const N=ne(Ce,[new re("selectedTabKey",l("tabbedContainer.selectedTabKeyDesc")),ie]),Ve=Object.freeze(Object.defineProperty({__proto__:null,TabbedContainerBaseComp:E,TabbedContainerComp:N},Symbol.toStringTag,{value:"Module"})),ve=Object.freeze(Object.defineProperty({__proto__:null,TabbedContainerComp:N},Symbol.toStringTag,{value:"Module"}));export{Ve as _,ve as e};
