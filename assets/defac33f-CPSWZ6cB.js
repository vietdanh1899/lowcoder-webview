import{dn as a,bw as s,eE as b,bD as i,bT as n,ci as g,bs as d,eM as u,eN as S,f6 as C,eO as P,eP as f,cf as m,eQ as T,bU as U,F as w,eR as A,eS as E,eT as c,dw as y,eU as F,aj as r}from"./index-CyMr76_m.js";import{ContainerBodyChildComp as R}from"./9ca169ef-FLPlA8au.js";const W={header:a,sider:a,body:s(b(R),{0:{view:{layout:{},items:{}}}}),showApp:i,contentApp:n,baseUrl:n,footer:a,showHeader:i.DEFAULT_TRUE,showSider:i.DEFAULT_TRUE,innerSider:i.DEFAULT_TRUE,siderCollapsible:s(i,!1),siderCollapsed:s(i,!1),siderRight:s(i,!1),siderWidth:s(n,"20%"),siderCollapsedWidth:s(n,"0"),showFooter:i,autoHeight:g,siderScrollbars:s(i,!1),contentScrollbars:s(i,!1),style:s(d(u),{borderWidth:"1px"}),headerStyle:d(S),siderStyle:d(C),bodyStyle:d(P),footerStyle:d(f)},x=m(new U(W,(p,e)=>({...p,dispatch:e})).build(),T);class v extends x{allContainers(){return[this.children.header,this.children.sider,...Object.values(this.children.body.getView()).map(e=>e.children.view),this.children.footer]}realSimpleContainer(e){return w.isNil(e)?this.children.body.getView()[0].children.view:this.allContainers().find(t=>t.realSimpleContainer(e))}getCompTree(){return A(this.allContainers().map(e=>e.getCompTree()))}findContainer(e){for(const t of this.allContainers()){const o=t.findContainer(e);if(o)return o===t?this:o}}getPasteValue(e){return{...this.toJsonValue(),header:this.children.header.getPasteValue(e),sider:this.children.sider.getPasteValue(e),body:w.mapValues(this.children.body.getView(),t=>({...t.toJsonValue(),view:t.children.view.getPasteValue(e)})),footer:this.children.footer.getPasteValue(e)}}autoHeight(){return this.children.autoHeight.getView()}exposingNode(){const e={};return E(this.getCompTree(),t=>{const o=t.children.comp;let l=o.exposingNode();if(c(l)&&!l.children.hasOwnProperty("formDataKey")){const h=o.children.formDataKey;h&&(l=y({...l.children,formDataKey:h.exposingNode()}))}return e[t.children.name.getView()]=l,!0}),F(this,"exposing_node",y(e),V)}getPropertyView(){return[this.areaPropertyView(),this.heightPropertyView()]}areaPropertyView(){return[this.children.showHeader.propertyView({label:r("prop.showHeader")}),this.children.showSider.propertyView({label:r("prop.showSider")}),this.children.siderRight.propertyView({label:r("prop.siderRight")}),this.children.innerSider.propertyView({label:r("prop.innerSider")}),this.children.siderCollapsible.propertyView({label:r("prop.siderCollapsible")}),this.children.siderCollapsed.propertyView({label:r("prop.siderCollapsed")}),this.children.showFooter.propertyView({label:r("prop.showFooter")}),this.children.siderWidth.propertyView({label:r("prop.siderWidth"),tooltip:r("prop.siderWidthTooltip")}),this.children.siderCollapsedWidth.propertyView({label:r("prop.siderCollapsedWidth"),tooltip:r("prop.siderCollapsedWidthTooltip")})]}heightPropertyView(){return[this.children.autoHeight.getPropertyView(),this.children.siderScrollbars.propertyView({label:r("prop.siderScrollbar")}),!this.children.autoHeight.getView()&&this.children.contentScrollbars.propertyView({label:r("prop.contentScrollbar")})]}appSelectorPropertyView(){return[this.children.showApp.propertyView({label:r("prop.showApp"),tooltip:r("prop.showAppTooltip")}),this.children.showApp.getView()&&this.children.contentApp.propertyView({label:r("prop.appID")}),this.children.showApp.getView()&&this.children.baseUrl.propertyView({label:r("prop.baseURL")})]}stylePropertyView(){return this.children.style.getPropertyView()}headerStylePropertyView(){return this.children.headerStyle.getPropertyView()}siderStylePropertyView(){return this.children.siderStyle.getPropertyView()}bodyStylePropertyView(){return this.children.bodyStyle.getPropertyView()}footerStylePropertyView(){return this.children.footerStyle.getPropertyView()}}function V(p,e){if(p===e)return!0;if(p&&e&&c(p)&&c(e)){const t=p.children,o=e.children,l=Object.keys(t);return l.length===Object.keys(o).length&&l.every(h=>V(t[h],o[h]))}return!1}export{v as PageLayoutComp};
