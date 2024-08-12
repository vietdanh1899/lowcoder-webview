import{a4 as C,aj as t,bA as E,bD as m,bw as F,ct as P,i5 as L,bs as u,cu as T,cv as $,jE as I,bF as K,d as a,as as c,k as p,bG as o,bH as i,a0 as s,bN as d,bJ as A,c8 as D,jF as M}from"./index-CyMr76_m.js";import{treeCommonChildren as G,treeDataPropertyView as N,formSection as W,valuePropertyView as j,TreeNameConfigs as q,useTree as B}from"./1db48ff0-MhWGuqUi.js";import{SelectInputValidationSection as H,selectInputValidate as z}from"./3b4688fc-D_wIQU04.js";import"./a709ec52-D-ibbKJj.js";import"./2606e654-BU0arLul.js";const R=C.div`
  height: 100%;
  padding: 4px;
  background: ${e=>e.background};
  border: 1px solid ${e=>e.border};
  border-radius: ${e=>e.radius};
  .ant-tree-show-line .ant-tree-switcher {
    background: ${e=>e.background};
  }
  .ant-tree:hover .ant-tree-list-scrollbar-show {
    display: block !important;
  }
  .ant-tree-list-scrollbar {
    width: 6px !important;
  }
  .ant-tree-list-scrollbar-thumb {
    border-radius: 9999px !important;
    background: rgba(139, 143, 163, 0.2) !important;
  }
  .ant-tree-list-scrollbar-thumb:hover {
    background: rgba(139, 143, 163, 0.5) !important;
  }
`,Y=[{label:t("tree.noSelect"),value:"none"},{label:t("tree.singleSelect"),value:"single"},{label:t("tree.multiSelect"),value:"multi"},{label:t("tree.checkbox"),value:"check"}],Z={...G,selectType:E(Y,"single"),checkStrictly:m,autoExpandParent:m,label:F(P,{position:"column"}),onEvent:L,style:u(T),labelStyle:u($.filter(e=>["accent","validate"].includes(e.name)===!1)),inputFieldStyle:u(I)},J=e=>{const{treeData:S,selectType:r,value:l,expanded:b,checkStrictly:y,style:k,labelStyle:v}=e,[x,V]=s.useState(),g=r==="single"||r==="multi",w=r==="check";return s.useEffect(()=>{r==="none"&&l.value.length>0?l.onChange([]):r==="single"&&l.value.length>1&&l.onChange(l.value.slice(0,1))},[r]),B(e),e.label({required:e.required,...z(e),style:k,labelStyle:v,inputFieldStyle:e.inputFieldStyle,children:a(D,{onResize:(n,f)=>V(f),render:()=>a(R,{...e.inputFieldStyle,children:a(M,{disabled:e.disabled,height:x,rootStyle:{background:"transparent",color:e.inputFieldStyle.text},fieldNames:{title:"label",key:"value"},treeData:S,selectable:g,multiple:r==="multi",selectedKeys:g?l.value:[],checkable:w,checkedKeys:w?y?{checked:l.value,halfChecked:[]}:l.value:void 0,checkStrictly:y,showLine:e.showLine?{showLeafIcon:e.showLeafIcon}:!1,expandedKeys:b.value,autoExpandParent:e.autoExpandParent,onSelect:n=>{l.onChange(n),e.onEvent("change")},onCheck:n=>{l.onChange(Array.isArray(n)?n:n.checked),e.onEvent("change")},onExpand:n=>{b.onChange(n)},onFocus:()=>e.onEvent("focus"),onBlur:()=>e.onEvent("blur")},r)})})})};let h=function(){return new K(Z,e=>a(J,{...e})).setPropertyViewFn(e=>c(p,{children:[a(o,{name:i.basic,children:N(e)}),["logic","both"].includes(s.useContext(d).editorModeStatus)&&c(p,{children:[a(H,{...e}),W(e),c(o,{name:i.interaction,children:[e.onEvent.getPropertyView(),e.hidden.propertyView({label:t("prop.hide")}),e.disabled.propertyView({label:t("prop.disabled")}),e.selectType.propertyView({label:t("tree.selectType")}),e.selectType.getView()!=="none"&&j(e),e.selectType.getView()==="check"&&e.checkStrictly.propertyView({label:t("tree.checkStrictly"),tooltip:t("tree.checkStrictlyTooltip")})]})]}),["layout","both"].includes(s.useContext(d).editorModeStatus)&&c(o,{name:i.layout,children:[e.expanded.propertyView({label:t("tree.expanded")}),e.defaultExpandAll.propertyView({label:t("tree.defaultExpandAll")}),e.showLine.propertyView({label:t("tree.showLine")}),e.showLine.getView()&&e.showLeafIcon.propertyView({label:t("tree.showLeafIcon")})]}),["layout","both"].includes(s.useContext(d).editorModeStatus)&&e.label.getPropertyView(),["layout","both"].includes(s.useContext(d).editorModeStatus)&&c(p,{children:[a(o,{name:i.style,children:e.style.getPropertyView()}),a(o,{name:i.labelStyle,children:e.labelStyle.getPropertyView()}),a(o,{name:i.inputFieldStyle,children:e.inputFieldStyle.getPropertyView()})]})]})).build()}();h=class extends h{autoHeight(){return!1}};const ee=A(h,q);export{ee as TreeComp};
