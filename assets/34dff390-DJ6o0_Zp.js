import{newCustomColumn as S}from"./bdca90af-Ey2_L0tV.js";import{a4 as g,g5 as E,iz as j,a6 as I,jk as M,jl as G,dA as T,hZ as P,aj as i,as as d,k as b,d as l,bG as n,dr as A,jm as L,bH as C,bI as D,eb as W,a0 as v,jn as $,dd as N,gB as K,iF as X,iG as q,dx as F,jo as J,jp as O,en as Q,jq as Y,gA as R,cK as k,g7 as Z}from"./index-CyMr76_m.js";import{getSelectedRowKeys as _}from"./8002df8f-3pwYLozv.js";import{ColumnTypeCompMap as U}from"./119198d1-DOPTi23L.js";import"./ad1328d1-BWLAZt-j.js";import"./0a6b3cae-DX_83YlB.js";import"./aa7442af-9y-PcNP7.js";import"./7a2fe5b9-_-VMc9tG.js";import"./bbcd8d34-UQLMzqWl.js";import"./73e0b0c0-cg4qSQqq.js";import"./3edfe717-MHa75G-T.js";import"./58f3786f-CAidjqLe.js";import"./a0462e8b-DZIRdcE2.js";import"./3b4688fc-D_wIQU04.js";import"./779f3b7b-amEsk8BD.js";import"./6273459c-DX34gMfV.js";import"./b6a2fc32-DwuV3HZx.js";import"./1cf690a1-I_QK1KnU.js";import"./78fe38f6-CDiAuiLE.js";import"./019144c6-D7yg04yX.js";import"./4a5e4036-B1Vv5Fk3.js";import"./528263cd-C4IHPG-V.js";import"./c9e82af5-CWpE2eMW.js";import"./a88cf471-CYUSef1b.js";import"./09457722-DqGlVZ8K.js";import"./0939bf73-t5w-dpUI.js";import"./c5075bb1-DugznTE7.js";import"./a5d57101-D6143Rva.js";import"./874205af-IDtItRsf.js";import"./3b333d0b-CW89wYop.js";import"./3806f8cf-BO9BPaTR.js";import"./cb943b07-CQ1qmLm2.js";import"./0e89e2a5-BZIvfWTd.js";import"./afec2121-C9tEEv6l.js";import"./2606e654-BU0arLul.js";import"./ddcbae00-C5tpClLZ.js";const ee=g.div`
  display: flex;
  justify-content: end;
  width: 100%;
  gap: 8px;
  align-items: center;
`,ie=g.span`
  ${E};
  color: #8b8fa3;
`,te=g(j)`
  width: 16px;
  height: 16px;
  cursor: pointer;

  &:hover {
    g g {
      stroke: #4965f2;
    }
  }
`,B=I`
  height: 16px;
  width: 16px;
  display: inline-block;

  &:hover {
    cursor: pointer;
  }

  &:hover path {
    fill: #315efb;
  }
`,le=g(M)`
  ${B}
`,re=g(G)`
  ${B}
`,oe=g(T)`
  width: 100px;

  &,
  > div {
    height: 22px;
  }

  .ant-segmented-item-label {
    height: 18px;
    min-height: 18px;
    line-height: 18px;
    padding: 0;
  }
`,ae=g.div`
  display: flex;
  align-items: center;
  color: ${P}
  line-height: 16px;
  font-size: 13px;
`,ne=[{label:i("table.allColumn"),value:"all"},{label:i("table.visibleColumn"),value:"visible"}],de=[{label:i("prop.hide"),value:"hide"},{label:i("table.editable"),value:"editable"},{label:i("table.autoWidth"),value:"autoWidth"},{label:i("table.sortable"),value:"sortable"},{label:i("table.align"),value:"align"}];function ce(e){const{hide:t,setHide:h}=e;return l(t?le:re,{onClick:s=>{h(!t)}})}function x(e,t){const h=o=>e==="autoWidth"?o.children.autoWidth.getView()==="auto":o.children[e].getView(),s=t??(o=>o);return o=>{const p=Array.isArray(o),y=p?o:[o],V=y.map(c=>{if(e!=="editable")return!1;const u=c.children.render.getOriginalComp().children.comp.children.compType.getView();return!U[u].canBeEditable()});let m=!0,w=!0;y.forEach((c,u)=>{if(V[u]){p||(m=!1);return}h(c)?w=!1:m=!1});const f=c=>{y.forEach((u,r)=>!V[r]&&u.children[e].dispatch(R(k(s(c),!0))))};return e==="hide"?l(ce,{hide:m,setHide:c=>f(c)}):l(Z,{indeterminate:!m&&!w,disabled:!p&&V[0],checked:m,onChange:c=>{f(c.target.checked)}})}}const H={hide:x("hide"),editable:x("editable"),sortable:x("sortable"),autoWidth:x("autoWidth",e=>e?"auto":"fixed"),align:e=>{const t=Array.isArray(e)?e:[e],h=Array.isArray(e)?void 0:e.children.align.getView();return l(oe,{options:Y,value:h,radioButton:!0,onChange:s=>{t.forEach(o=>o.children.align.dispatch(R(k(s,!0))))}})}};function he(e){const{comp:t}=e,h=_(t.children.selection)[0]??"0",[s,o]=v.useState("all"),p=t.children.columns.getView(),y=t.children.dataRowExample.getView(),V=t.children.dynamicColumn.getView(),m=t.children.data.getView(),[w,f]=v.useState("hide"),c=v.useMemo(()=>p.filter(r=>s==="all"||!r.children.hide.getView()),[s,p]),u=d(ee,{children:[d("div",{style:{display:"flex",alignItems:"center",marginRight:"auto"},children:[l($,{label:e.columnLabel}),l(ie,{children:" ("+p.length+")"})]}),y&&l(N,{title:i("table.refreshButtonTooltip"),children:l(te,{onClick:()=>{t.dispatch(K("columns",t.children.columns.dataChangedAction({rowExample:y,doGeneColumn:!0,dynamicColumn:V,data:m})))}})}),l(X,{icon:l(q,{}),text:i("addItem"),onClick:()=>{t.children.columns.dispatch(t.children.columns.pushAction(S()))}})]});return l(b,{children:l(F,{headerItem:l(J,{title:l(T,{border:!0,style:{width:"auto",marginLeft:"8px"},value:s,options:ne,label:"",onChange:r=>{o(r)}}),config:{dataIndex:"header"},draggable:!1,optionExtra:d(ae,{children:[l(T,{border:!0,style:{width:"auto"},value:w,options:de,label:"",onChange:r=>{f(r)}}),H[w](p)]})}),itemExtra:r=>l("div",{style:{display:"flex",alignItems:"center",height:"100%"},onClick:a=>a.stopPropagation(),children:H[w](r)}),items:c,optionToolbar:u,itemTitle:r=>{const a=r.getView();return a.hide?l("span",{style:{color:P},children:a.title}):a.title},popoverTitle:r=>{const a=r.getView();return a.isCustom?i("table.customColumn"):a.dataIndex},content:(r,a)=>d(b,{children:[r.propertyView(h),r.getView().isCustom&&l(O,{onClick:()=>{Q.confirm({title:i("table.deleteColumn"),content:i("table.confirmDeleteColumn")+`${r.getView().title}?`,onConfirm:()=>t.children.columns.dispatch(t.children.columns.deleteAction(a)),confirmBtnType:"delete",okText:i("delete")})},children:i("delete")})]}),onAdd:()=>{t.children.columns.dispatch(t.children.columns.pushAction(S()))},onMove:(r,a)=>{const z=t.children.columns.arrayMoveAction(r,a);t.children.columns.dispatch(z)},dataIndex:r=>r.getView().dataIndex,scrollable:!0})})}function se(e){const t=i("table.columnNum");return[A({filterText:t},l(he,{comp:e,columnLabel:t}))]}function Oe(e){const t=e.editorModeStatus,h=i("data");return d(b,{children:[["logic","both"].includes(t)&&l(n,{name:i("table.dataDesc"),children:A({filterText:h},l("div",{className:L,children:e.children.data.propertyView({label:h})}))}),["layout","both"].includes(t)&&l(n,{name:i("prop.columns"),children:se(e)}),["logic","both"].includes(t)&&d(b,{children:[d(n,{name:C.interaction,children:[e.children.onEvent.getPropertyView(),e.children.selection.getPropertyView(),D(e.children),W(e.children)]}),l(n,{name:i("prop.toolbar"),children:e.children.toolbar.getPropertyView()})]}),["layout","both"].includes(t)&&d(b,{children:[d(n,{name:C.layout,children:[e.children.size.propertyView({label:i("table.tableSize"),radioButton:!0}),e.children.autoHeight.getPropertyView(),e.children.fixedHeader.propertyView({label:i("table.fixedHeader"),tooltip:i("table.fixedHeaderTooltip")}),e.children.hideHeader.propertyView({label:i("table.hideHeader")}),e.children.viewModeResizable.propertyView({label:i("table.viewModeResizable"),tooltip:i("table.viewModeResizableTooltip")}),e.children.visibleResizables.propertyView({label:i("table.visibleResizables"),tooltip:i("table.visibleResizablesTooltip")})]}),l(n,{name:i("prop.pagination"),children:e.children.pagination.getPropertyView()})]}),["logic","both"].includes(t)&&l(b,{children:d(n,{name:C.advanced,children:[e.children.expansion.getPropertyView(),e.children.showDataLoadSpinner.propertyView({label:i("table.showDataLoadSpinner")}),e.children.dynamicColumn.propertyView({label:i("table.dynamicColumn")}),e.children.dynamicColumn.getView()&&e.children.dynamicColumnConfig.propertyView({label:i("table.dynamicColumnConfig"),tooltip:i("table.dynamicColumnConfigDesc")}),e.children.searchText.propertyView({label:i("table.searchText"),tooltip:i("table.searchTextTooltip"),placeholder:"{{input1.value}}"})]})}),["layout","both"].includes(t)&&d(b,{children:[l(n,{name:"Table Style",children:e.children.style.getPropertyView()}),l(n,{name:"Header Style",children:e.children.headerStyle.getPropertyView()}),l(n,{name:"Toolbar Style",children:e.children.toolbarStyle.getPropertyView()}),d(n,{name:"Row Style",children:[e.children.showRowGridBorder.propertyView({label:i("table.showVerticalRowGridBorder")}),e.children.showHRowGridBorder.propertyView({label:i("table.showHorizontalRowGridBorder")}),e.children.rowStyle.getPropertyView(),e.children.rowAutoHeight.getPropertyView(),e.children.rowHeight.getPropertyView(),e.children.rowColor.getPropertyView()]}),l(n,{name:"Column Style",children:e.children.columnsStyle.getPropertyView()})]})]})}export{Oe as compTablePropertyView};
