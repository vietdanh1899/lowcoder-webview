import{a4 as g,iy as B,aj as o,b7 as v,F as T,he as O,c2 as M,a0 as b,eY as X,d as a,eZ as w,as as x,iz as _,iA as J,iB as Z,iC as G,hi as P,hj as W,cX as R,a6 as Y,dB as j,iD as N,dg as V,iE as Q,iF as U,iG as ee,dh as F,iH as L,bD as $,b_ as te,bA as le,g7 as I,iI as ae,iJ as oe,iK as ie,iL as ne}from"./index-CyMr76_m.js";const re=g.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,se=(e,t,l,c,d)=>Y`
    background-color: ${e.background};
    // Implement horizontal scrollbar and vertical page number selection is not blocked
    padding: 13px 12px;
    position: sticky;
    postion: -webkit-sticky;
    left: 0px !important;
    margin: ${e.margin} !important;
    z-index: 999;

    ${d&&c==="below"&&"bottom: 0;"};
    ${d&&c==="above"&&"top: 0;"};

    .toolbar-icons {
      .refresh,
      .download {
        cursor: pointer;

        * {
          ${e.toolbarText!==w.textDark?`stroke: ${e.toolbarText}`:null};
        }

        &:hover * {
          stroke: ${l==null?void 0:l.primary};
        }
      }

      .filter {
        cursor: pointer;

        * {
          ${t?`stroke: ${w.primary}`:e.toolbarText!==w.textDark?`stroke: ${e.toolbarText}`:null}
        }

        &:hover * {
          stroke: ${l==null?void 0:l.primary};
        }
      }

      .column-setting {
        cursor: pointer;

        * {
          ${e.toolbarText!==w.textDark?`stroke: ${e.toolbarText}`:null}
        }

        &:hover * {
          stroke: ${l==null?void 0:l.primary};
        }
      }
    }

    .ant-pagination-prev,
    .ant-pagination-next {
      path {
        ${e.toolbarText!==w.textDark?`fill: ${e.toolbarText}`:null};
      }

      svg:hover {
        path {
          fill: ${l==null?void 0:l.primary};
        }
      }
    }

    .ant-pagination {
      color: ${e.toolbarText};
    }

    .ant-pagination-item-active {
      border-color: ${e.border||(l==null?void 0:l.primary)};

      a {
        color: ${l==null?void 0:l.textDark};
      }
    }

    .ant-pagination-item:not(.ant-pagination-item-active) a {
      color: ${e.toolbarText};

      &:hover {
        color: ${l==null?void 0:l.primary};
      }
    }

    .ant-select:not(.ant-select-disabled):hover .ant-select-selector,
    .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
      .ant-select-selector,
    .ant-pagination-options-quick-jumper input:hover,
    .ant-pagination-options-quick-jumper input:focus {
      border-color: ${e.border||(l==null?void 0:l.primary)};
    }
  `,ce=g.div`
  // overflow: auto;
  ${e=>e.$style&&se(e.$style,e.$filtered,e.$theme,e.$position,e.$fixedToolbar)}
`,de=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: max-content;
  height: 21px;
  width: 100%;
`,pe=g.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,ue=g(B)`
  height: 16px;
  width: 16px;

  ${e=>e.disabled&&`
      cursor: not-allowed;
      g g {
      stroke: #D7D9E0;
    }
  `}
  :hover:not([disabled]) {
    cursor: pointer;

    g g {
      stroke: #315efb;
    }
  }
`,he=g.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,be=g.div`
  min-height: 92px;
  overflow: auto;

  > div {
    margin-top: 4px;
  }
`,ge=g.div`
  display: flex;
  align-items: end;
  height: 44px;
  justify-content: end;
  gap: 4px;

  > button {
    width: 76px;
    height: 28px;
  }
`,H=g.div`
  display: flex;
  gap: 4px;
`,q=[{label:o("table.and"),value:"and"},{label:o("table.or"),value:"or"}],fe=[{label:a(oe,{}),value:"below"},{label:a(ie,{}),value:"above"},{label:a(ne,{}),value:"close"}],me=["contain","notContain","equal","notEqual","isEmpty","isNotEmpty","gt","gte","lt","lte"],z=["isEmpty","isNotEmpty"],ye={contain:{label:o("table.contains"),filter:(e,t)=>v.isNil(t)?!1:t.toString().toLowerCase().includes(e.toLowerCase())},notContain:{label:o("table.notContain"),filter:(e,t)=>v.isNil(t)?!0:!t.toString().toLowerCase().includes(e.toLowerCase())},equal:{label:o("table.equals"),filter:(e,t)=>v.isNil(t)?!1:t.toString()===e},notEqual:{label:o("table.isNotEqual"),filter:(e,t)=>v.isNil(t)?!0:t.toString()!==e},isEmpty:{label:o("table.isEmpty"),filter:(e,t)=>t===""||v.isNil(t)},isNotEmpty:{label:o("table.isNotEmpty"),filter:(e,t)=>t!==""&&!v.isNil(t)},gt:{label:o("table.greater"),filter:(e,t)=>T.gt(t,e)},gte:{label:o("table.greaterThanOrEquals"),filter:(e,t)=>T.gte(t,e)},lt:{label:o("table.lessThan"),filter:(e,t)=>T.gt(e,t)},lte:{label:o("table.lessThanOrEquals"),filter:(e,t)=>T.gte(e,t)}},D=(e="",t="",l)=>({key:j(),columnKey:e,filterValue:t,operator:l});function xe(e){return e.columnKey&&e.operator&&(e.filterValue!==""||z.includes(e.operator))}function ve(e){return!e.columnKey&&!e.operator&&e.filterValue===""}function we(e){const{columnKeyNames:t,tableFilter:l,onFilterChange:c,setVisible:d}=e,[u,p]=b.useState(l.stackType),[r,s]=b.useState(()=>l.filters.length<=0?[D()]:l.filters.map(i=>({key:j(),...i}))),f=i=>{s(r.map(m=>m.key===i.key?{...i}:m))};b.useEffect(()=>{c(r.filter(i=>xe(i)).map(i=>({filterValue:i.filterValue,operator:i.operator,columnKey:i.columnKey})),u)},[u,r]);const C=a(be,{children:r&&r.map((i,m)=>{var k;return x(he,{children:[m===0&&a(N,{style:{width:"65px"},children:o("table.filterRule")}),m>=1&&a(V,{style:{width:"65px"},border:!0,defaultValue:u,value:(k=q.find(n=>n.value===u))==null?void 0:k.value,disabled:m>1,onChange:n=>p(n),children:q.map((n,S)=>a(V.Option,{value:n.value,children:a("div",{style:{width:"72px",fontSize:"13px",lineHeight:"13px"},children:n.label})},n.value))}),a(V,{options:t.map(n=>({label:n[1],value:n[0]})),style:{width:"160px"},value:i.columnKey,placeholder:o("table.chooseColumnName"),allowClear:!0,onChange:n=>{f({...i,columnKey:n})}}),a(V,{defaultValue:i.operator,placeholder:o("table.chooseCondition"),style:{width:"160px"},allowClear:!0,options:me.map(n=>({label:ye[n].label,value:n})),onChange:n=>{f({...i,operator:n})}}),a(Q,{style:{width:"136px"},disabled:i.operator&&z.includes(i.operator),defaultValue:i.filterValue,onChange:n=>{f({...i,filterValue:n.target.value})}}),a(ue,{disabled:r.length===1&&ve(r[0]),onClick:()=>{r.length===1?s([D()]):s(r.filter(n=>n.key!==i.key))}})]},i.key)})}),E=x(ge,{children:[a(U,{style:{marginRight:"auto"},text:o("addItem"),icon:a(ee,{}),onClick:()=>{s(r.concat(D()))}}),a(F,{onClick:()=>{s([D()])},buttonType:"delete",children:o("table.clear")}),a(F,{buttonType:"primary",onClick:()=>d(!1),children:o("ok")})]});return a(L,{title:o("table.filter"),onClose:()=>d(!1),width:600,scrollable:!0,contentMaxHeight:292,content:C,footer:E})}const $e=function(){const e={showRefresh:$,showDownload:$,showFilter:$,columnSetting:$,fixedToolbar:$,filter:te({stackType:"and",filters:[]}),position:le(fe,"below")};return new O(e,(t,l)=>({...t,onFilterChange:(c,d)=>{l(M("filter",{stackType:d,filters:c},!1))}})).setPropertyViewFn(t=>[t.position.propertyView({label:o("table.position"),radioButton:!0}),t.fixedToolbar.propertyView({label:o("table.fixedToolbar"),tooltip:o("table.fixedToolbarTooltip")}),t.showFilter.propertyView({label:o("table.showFilter")}),t.showRefresh.propertyView({label:o("table.showRefresh")}),t.showDownload.propertyView({label:o("table.showDownload")}),t.columnSetting.propertyView({label:o("table.columnSetting")})]).build()}();function Ce(e){const{columns:t,setVisible:l}=e;let c=!0;const d=t.map(u=>{const p=u.getView(),r=!p.tempHide;return r||(c=!1),x(H,{children:[a(I,{checked:r,onChange:s=>{u.children.tempHide.dispatchChangeValueAction(!s.target.checked)}}),a(N,{children:p.title||p.dataIndex})]},p.dataIndex)});return a(L,{title:o("table.columnShows"),onClose:()=>l(!1),width:160,contentMaxHeight:150,scrollable:!0,content:a("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:d}),footer:a("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",height:"32px"},children:x(H,{children:[a(I,{checked:c,onChange:u=>{const p=u.target.checked;t.forEach(r=>{const s=r.children.tempHide.getView();p&&s?r.children.tempHide.dispatchChangeValueAction(!1):!p&&!s&&r.children.tempHide.dispatchChangeValueAction(!0)})}}),a(N,{children:o("table.selectAll")})]})})})}function K(e){const{visible:t,setVisible:l,Icon:c,iconClassName:d,content:u}=e,p=b.useRef(null),r=b.useRef(null);return a(ae,{open:t,overlayStyle:{pointerEvents:"auto"},overlayInnerStyle:{padding:"0"},content:a("div",{ref:r,tabIndex:-1,onBlur:s=>{!s.currentTarget.contains(s.relatedTarget)&&p.current!==s.relatedTarget&&l(!1)},children:u}),children:a(c,{className:d,tabIndex:-1,ref:p,onBlur:s=>{var f;(f=r.current)!=null&&f.contains(s.relatedTarget)||l(!1)},onClick:()=>l(!t)})})}function Te(e){var t;const{toolbar:l,pagination:c,columns:d,onRefresh:u,onDownload:p,hasChange:r,onSaveChanges:s,onCancelChanges:f,onEvent:C}=e,[E,i]=b.useState(!1),[m,k]=b.useState(!1),n=d.filter(h=>!h.children.hide.getView()),S=b.useMemo(()=>n.map(h=>{const y=h.getView();return[y.dataIndex,y.title||y.dataIndex]}),[d]),A=(t=b.useContext(X))==null?void 0:t.theme;return a(ce,{$style:e.$style,$theme:A||w,$filtered:l.filter.filters.length>0,$position:l.position,$fixedToolbar:l.fixedToolbar,children:x(de,{children:[x(pe,{className:"toolbar-icons",children:[l.showRefresh&&a(_,{className:"refresh",onClick:()=>{u(),C("refresh")}}),l.showFilter&&a(K,{visible:E,setVisible:i,content:a(we,{columnKeyNames:S,tableFilter:l.filter,onFilterChange:(h,y)=>{(!T.isEqual(h,l.filter.filters)||y!==l.filter.stackType)&&(l.onFilterChange(h,y),C("filterChange"))},setVisible:h=>i(h)}),Icon:J,iconClassName:"filter"}),l.showDownload&&a(Z,{className:"download",onClick:p}),l.columnSetting&&a(K,{visible:m,setVisible:k,content:a(Ce,{columns:n,setVisible:k}),Icon:G,iconClassName:"column-setting"})]}),a(P,{size:"small",itemRender:W,...c,onChange:(h,y)=>{c.onChange&&c.onChange(h,y),h!==c.current&&C("pageChange")}}),r&&x(re,{children:[a(R,{onClick:f,children:o("cancel")}),a(R,{type:"primary",onClick:s,children:o("table.saveChanges")})]})]})})}export{Te as TableToolbar,$e as TableToolbarComp,ye as tableFilterOperatorMap};
