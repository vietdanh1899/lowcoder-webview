import{a4 as C,j4 as ie,g3 as ne,eZ as q,a0 as r,bN as ae,jf as le,jg as X,b2 as de,F as Q,ai as se,aj as J,d as b,jh as he,di as be,as as K,a6 as $e,h$ as pe,b4 as ce,ji as ge,jj as ue}from"./index-CyMr76_m.js";import{TableRowContext as ee,TableCellContext as me}from"./7a2fe5b9-_-VMc9tG.js";import{TableToolbar as we}from"./afec2121-C9tEEv6l.js";import{h as ye,i as xe,C as fe,o as Se,j as U,O as Y}from"./ddcbae00-C5tpClLZ.js";import{SlotConfigContext as ve}from"./75c4091e-vv9DScog.js";import"./aa7442af-9y-PcNP7.js";import"./bdca90af-Ey2_L0tV.js";import"./119198d1-DOPTi23L.js";import"./0a6b3cae-DX_83YlB.js";import"./bbcd8d34-UQLMzqWl.js";import"./73e0b0c0-cg4qSQqq.js";import"./3edfe717-MHa75G-T.js";import"./58f3786f-CAidjqLe.js";import"./a0462e8b-DZIRdcE2.js";import"./3b4688fc-D_wIQU04.js";import"./779f3b7b-amEsk8BD.js";import"./6273459c-DX34gMfV.js";import"./b6a2fc32-DwuV3HZx.js";import"./1cf690a1-I_QK1KnU.js";import"./78fe38f6-CDiAuiLE.js";import"./019144c6-D7yg04yX.js";import"./4a5e4036-B1Vv5Fk3.js";import"./528263cd-C4IHPG-V.js";import"./c9e82af5-CWpE2eMW.js";import"./a88cf471-CYUSef1b.js";import"./09457722-DqGlVZ8K.js";import"./0939bf73-t5w-dpUI.js";import"./c5075bb1-DugznTE7.js";import"./a5d57101-D6143Rva.js";import"./874205af-IDtItRsf.js";import"./3b333d0b-CW89wYop.js";import"./3806f8cf-BO9BPaTR.js";import"./cb943b07-CQ1qmLm2.js";import"./0e89e2a5-BZIvfWTd.js";import"./ad1328d1-BWLAZt-j.js";import"./2606e654-BU0arLul.js";function f(e){return`linear-gradient(${e}, ${e})`}const ke=(e,o,d,l)=>{const n=f(e.background),s=f(o.selectedRowBackground),g=f(o.hoverRowBackground),$=f(o.alternateBackground);return $e`
    .ant-table-body {
      background: ${f(e.background)};
    }
    .ant-table-tbody {
      > tr:nth-of-type(2n + 1) {
        &,
        > td {
          background: ${f(o.background)};
          border-bottom:${o.borderWidth} ${o.borderStyle} ${o.border} !important;
          border-right:${o.borderWidth} ${o.borderStyle} ${o.border} !important;
        }
      }

      > tr:nth-of-type(2n) {
        &,
        > td {
          background: ${$};
          border-bottom:${o.borderWidth} ${o.borderStyle} ${o.border} !important;
          border-right:${o.borderWidth} ${o.borderStyle} ${o.border} !important;
        }
      }

      // selected row
      > tr:nth-of-type(2n + 1).ant-table-row-selected {
        > td {
          background: ${s}, ${o.background} !important;
        }

        > td.ant-table-cell-row-hover,
        &:hover > td {
          background: ${g}, ${s}, ${o.background} !important;
        }
      }

      > tr:nth-of-type(2n).ant-table-row-selected {
        > td {
          background: ${s}, ${$} !important;
        }

        > td.ant-table-cell-row-hover,
        &:hover > td {
          background: ${g}, ${s}, ${$} !important;
        }
      }

      // hover row
      > tr:nth-of-type(2n + 1) > td.ant-table-cell-row-hover {
        &,
        > div:nth-of-type(2) {
          background: ${g}, ${o.background} !important;
        }
      }

      > tr:nth-of-type(2n) > td.ant-table-cell-row-hover {
        &,
        > div:nth-of-type(2) {
          background: ${g}, ${$} !important;
        }
      }

      > tr.ant-table-expanded-row > td {
        background: ${n};
      }
    }
  `},ze=C.span`
  position: absolute;
  top: 0;
  right: -5px;
  width: 10px;
  height: 100%;
  cursor: col-resize;
  z-index: 1;
`,Ce=C.div`  
  background: ${e=>e.$style.background} !important;
  // border: ${e=>`${e.$style.border} !important`};
  border-radius: ${e=>e.$style.radius} !important;
  // padding: unset !important;
  padding: ${e=>e.$style.padding} !important;
  margin: ${e=>e.$style.margin} !important;
  overflow: scroll !important;
  border-style:${e=>e.$style.borderStyle} !important;
  border-width: ${e=>`${e.$style.borderWidth} !important`};
  ${e=>e.$style}
`,Re=C.div`
  overflow: unset !important;

  .ant-table-wrapper {
    border-top: unset;
    border-color: inherit;
  }

  .ant-table-row-expand-icon {
    color: ${ie};
  }

  .ant-table .ant-table-cell-with-append .ant-table-row-expand-icon {
    margin: 0;
    top: 18px;
    left: 4px;
  }

  .ant-table.ant-table-small .ant-table-cell-with-append .ant-table-row-expand-icon {
    top: 10px;
  }

  .ant-table.ant-table-middle .ant-table-cell-with-append .ant-table-row-expand-icon {
    top: 14px;
  }

  .ant-table {
    background: ${e=>e.$style.background};
    .ant-table-container {
      border-left: unset;
      border-top: none !important;
      border-inline-start: none !important;

      &::after {
        box-shadow: none !important;
      }

      .ant-table-content {
        overflow: unset !important;
      }

      // A table expand row contains table
      .ant-table-tbody .ant-table-wrapper:only-child .ant-table {
        margin: 0;
      }

      table {
        border-top: unset;

        > .ant-table-thead {
          > tr > th {
            background-color: ${e=>e.$headerStyle.headerBackground};
           
            border-color: ${e=>e.$headerStyle.border};
            border-width: ${e=>e.$headerStyle.borderWidth};
            color: ${e=>e.$headerStyle.headerText};
            border-inline-end: ${e=>`${e.$headerStyle.borderWidth} solid ${e.$headerStyle.border}`} !important;
            ${e=>e.$fixedHeader&&`
                position: sticky;
                position: -webkit-sticky;
                top: ${e.$fixedToolbar?"47px":"0"};
                z-index: 99;
              `}

            > div {
              margin: ${e=>e.$headerStyle.margin};

              &, .ant-table-column-title > div {
                font-size: ${e=>e.$headerStyle.textSize};
                font-weight: ${e=>e.$headerStyle.textWeight};
                font-family: ${e=>e.$headerStyle.fontFamily};
                font-style: ${e=>e.$headerStyle.fontStyle};
                color:${e=>e.$headerStyle.text}
              }
            }

            &:last-child {
              border-inline-end: none !important;
            }
            &.ant-table-column-has-sorters:hover {
              background-color: ${e=>ne(e.$headerStyle.headerBackground,.05)};
            }
  
            > .ant-table-column-sorters > .ant-table-column-sorter {
              color: ${e=>e.$headerStyle.headerText===q.textDark?"#bfbfbf":e.$headerStyle.headerText};
            }

            &::before {
              background-color: ${e=>e.$headerStyle.border};
              width: ${e=>e.$visibleResizables?"1px":"0px"} !important;
            }
          }
        }

        > thead > tr > th,
        > tbody > tr > td {
          border-color: ${e=>e.$headerStyle.border};
          ${e=>!e.$showHRowGridBorder&&"border-bottom: 0px;"}
        }

        td {
          padding: 0px 0px;
        }

        thead > tr:first-child {
          th:last-child {
            border-right: unset;
          }
        }

        tbody > tr > td:last-child {
          border-right: unset;
        }

        .ant-empty-img-simple-g {
          fill: #fff;
        }

        > thead > tr:first-child {
          th:first-child {
            border-top-left-radius: 0px;
          }

          th:last-child {
            border-top-right-radius: 0px;
          }
        }

        // hide the bottom border of the last row
        ${e=>e.$toolbarPosition!=="below"&&`
            tbody > tr:last-child > td {
              border-bottom: unset;
            }
        `}
      }

      .ant-table-expanded-row-fixed:after {
        border-right: unset !important;
      }
    }
  }
  
  ${e=>e.$style&&ke(e.$style,e.$rowStyle,e.$headerStyle,e.$toolbarStyle)}
`,Z=C.th`
  overflow: hidden;

  > div {
    overflow: hidden;
    white-space: pre;
    text-overflow: ellipsis;
  }

  ${e=>e.width&&`width: ${e.width}px`};
`,He=C.td`
  .ant-table-row-expand-icon,
  .ant-table-row-indent {
    display: ${e=>e.$isEditing?"none":"initial"};
  }
  &.ant-table-row-expand-icon-cell {
    background: ${e=>e.$background};
    border-color: ${e=>e.$style.border};
  }
  background: ${e=>e.$background} !important;
  border-color: ${e=>e.$style.border} !important;
  border-radius: ${e=>e.$style.radius};

  padding: 0 !important;

  > div {
    margin: ${e=>e.$style.margin};
    color: ${e=>e.$style.text};
    font-weight: ${e=>e.$style.textWeight};
    font-family: ${e=>e.$style.fontFamily};
    
    ${e=>e.$tableSize==="small"&&`
      padding: 1px 8px;
      font-size: ${e.$defaultThemeDetail.textSize==e.$style.textSize?"14px !important":e.$style.textSize+" !important"};
    font-style:${e.$style.fontStyle} !important;
      min-height: ${e.$style.rowHeight||"14px"};
      line-height: 20px;
      ${!e.$autoHeight&&`
        overflow-y: auto;
        max-height: ${e.$style.rowHeight||"28px"};
      `};
    `};
    ${e=>e.$tableSize==="middle"&&`
      padding: 8px 8px;
      font-size: ${e.$defaultThemeDetail.textSize==e.$style.textSize?"16px !important":e.$style.textSize+" !important"};
      font-style:${e.$style.fontStyle} !important;
      min-height: ${e.$style.rowHeight||"24px"};
      line-height: 24px;
      ${!e.$autoHeight&&`
        overflow-y: auto;
        max-height: ${e.$style.rowHeight||"48px"};
      `};
    `};
    ${e=>e.$tableSize==="large"&&`
      padding: 16px 16px;
      font-size: ${e.$defaultThemeDetail.textSize==e.$style.textSize?"18px !important":e.$style.textSize+" !important"};
      font-style:${e.$style.fontStyle} !important;
      min-height: ${e.$style.rowHeight||"48px"};
      ${!e.$autoHeight&&`
        overflow-y: auto;
        max-height: ${e.$style.rowHeight||"96px"};
      `};
    `};
    
    > div > .ant-badge > .ant-badge-status-text,
    > div > div > .markdown-body {
      color: ${e=>e.$style.text};
    }

    > div > svg g {
      stroke: ${e=>e.$style.text};
    }

    // dark link|links color
    > a,
    > div  a {
      color: ${e=>{var o;return(o=e.$linkStyle)==null?void 0:o.text}};

      &:hover {
        color: ${e=>{var o;return(o=e.$linkStyle)==null?void 0:o.hoverText}};
      }

      &:active {
        color: ${e=>{var o;return(o=e.$linkStyle)==null?void 0:o.activeText}}};
      }
    }
  }
`,Ve=e=>{const{onResize:o,onResizeStop:d,width:l,viewModeResizable:n,...s}=e,[g,$]=r.useState(0),i=r.useRef(null),h=X(),w=()=>{l&&l>0||$(i.current.getBoundingClientRect().width)};r.useEffect(()=>{i.current&&w()},[]);const t=Q.isNil(s.title);return h&&!n||t?b(Z,{ref:i,...s,width:l}):b(ce,{width:l>0?l:g,height:0,onResize:(p,{size:u})=>o(u.width),onResizeStart:p=>{w(),p.stopPropagation(),p.preventDefault()},onResizeStop:d,draggableOpts:{enableUserSelectHack:!1},handle:(p,u)=>b(ze,{ref:u,onClick:c=>{c.preventDefault(),c.stopPropagation()}}),children:b(Z,{ref:i,...s})})};function Ee(e){const{record:o,title:d,rowIndex:l,rowColorFn:n,rowHeightFn:s,cellColorFn:g,children:$,columnsStyle:i,columnStyle:h,linkStyle:w,tableSize:t,autoHeight:p,...u}=e,[c,y]=r.useState(!1),R=r.useContext(ee);let z;if(!o)z=b("td",{...u,children:$});else{const F=n({currentRow:o,currentIndex:l,currentOriginalIndex:o[Y],columnTitle:d}),B=s({currentRow:o,currentIndex:l,currentOriginalIndex:o[Y],columnTitle:d}),H={background:g({currentCell:o[d]})||F||h.background||i.background,margin:h.margin||i.margin,text:h.text||i.text,border:h.border||i.border,radius:h.radius||i.radius,textSize:h.textSize||i.textSize,textWeight:i.textWeight||h.textWeight,fontFamily:i.fontFamily||h.fontFamily,fontStyle:i.fontStyle||h.fontStyle,rowHeight:B};let{background:m}=H;R.selected&&(m=f(ge(m))+","+m),R.hover&&(m=f(ue(m))+","+m),z=b(He,{...u,$background:m,$style:H,$defaultThemeDetail:q,$linkStyle:w,$isEditing:c,$tableSize:t,$autoHeight:p,children:$})}return b(me.Provider,{value:{isEditing:c,setIsEditing:y},children:z})}function Te(e){const[o,d]=r.useState(!1),[l,n]=r.useState(!1);return b(ee.Provider,{value:{hover:o,selected:l},children:b("tr",{...e,tabIndex:-1,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),onFocus:()=>n(!0),onBlur:()=>n(!1)})})}function te(e){const[o,d]=r.useState({index:-1,width:-1}),l=e.columns.map((n,s)=>{const{width:g,style:$,linkStyle:i,cellColorFn:h,...w}=n,t=(o.index===s?o.width:n.width)??0;let p="auto",u=U;return typeof t=="number"&&t>0&&(u="unset",p=t),{...w,RC_TABLE_INTERNAL_COL_DEFINE:{style:{minWidth:u,width:p}},onCell:(c,y)=>({record:c,title:n.titleText,rowColorFn:e.rowColorFn,rowHeightFn:e.rowHeightFn,cellColorFn:h,rowIndex:y,columnsStyle:e.columnsStyle,columnStyle:$,linkStyle:i,tableSize:e.size,autoHeight:e.rowAutoHeight,onClick:()=>{e.onCellClick(n.titleText,String(n.dataIndex))}}),onHeaderCell:()=>({width:t,title:n.titleText,viewModeResizable:e.viewModeResizable,onResize:c=>{c&&d({index:s,width:c})},onResizeStop:(c,{size:y})=>{d({index:-1,width:-1}),n.onWidthResize&&n.onWidthResize(y.width)}})}});return b(pe,{components:{header:{cell:Ve},body:{cell:Ee,row:Te}},...e,pagination:!1,columns:l,scroll:{x:U*l.length,y:void 0}})}te.whyDidYouRender=!0;function ct(e){const o=r.useContext(ae),{width:d,ref:l}=le({refreshMode:"debounce",refreshRate:600,handleHeight:!1}),n=X(),s=r.useContext(de),[g,$]=r.useState(!1),{comp:i,onDownload:h,onRefresh:w}=e,t=i.children,p=t.style.getView(),u=t.rowStyle.getView(),c=t.headerStyle.getView(),y=t.toolbarStyle.getView(),R=t.rowAutoHeight.getView(),z=i.getTableAutoHeight(),F=t.visibleResizables.getView(),B=t.showHRowGridBorder.getView(),H=t.columnsStyle.getView(),m=r.useMemo(()=>t.columns.getChangeSet(),[t.columns]),oe=r.useMemo(()=>!Q.isEmpty(m),[m]),D=r.useMemo(()=>t.columns.getView(),[t.columns]),I=r.useMemo(()=>D.map(a=>a.getView()),[D]),V=i.filterData,L=r.useMemo(()=>t.sort.getView(),[t.sort]),x=r.useMemo(()=>t.toolbar.getView(),[t.toolbar]),S=r.useMemo(()=>t.pagination.getView(),[t.pagination]),A=r.useMemo(()=>t.size.getView(),[t.size]),E=r.useMemo(()=>t.onEvent.getView(),[t.onEvent]),P=t.dynamicColumn.getView(),j=r.useMemo(()=>t.dynamicColumnConfig.getView(),[t.dynamicColumnConfig]),N=i.columnAggrData,O=r.useMemo(()=>t.expansion.getView(),[t.expansion]),_=r.useMemo(()=>ye(I,L,x.columnSetting,A,P,j,N,E),[I,L,x.columnSetting,A,P,j,N]),re=r.useMemo(()=>xe(t.data.getView()),[t.data]),W=r.useMemo(()=>{let a=V,v=S.current;const M=S.total||V.length;if(V.length>S.pageSize){let k=(v-1)*S.pageSize;k>=M&&(v=1,k=0),a=a.slice(k,k+S.pageSize)}return{total:M,current:v,data:a}},[S,V]),T=r.useCallback(a=>{if(a==="saveChanges"&&!t.onEvent.isBind(a)){!n&&se.warning(J("table.saveChangesNotBind"));return}t.onEvent.getView()(a),setTimeout(()=>t.columns.dispatchClearChangeSet())},[n,t.onEvent,t.columns]),G=b(we,{toolbar:x,$style:y,pagination:{...S,total:W.total,current:W.current},columns:D,onRefresh:()=>w(o.queryCompInfoList().map(a=>a.name),$),onDownload:()=>{T("download"),h(`${s}-data`)},hasChange:oe,onSaveChanges:()=>T("saveChanges"),onCancelChanges:()=>T("cancelChanges"),onEvent:E});return _.length===0?b(he,{text:J("table.emptyColumns")}):b(be.Provider,{value:p.background,children:K(Ce,{ref:l,$style:p,$tableAutoHeight:z,children:[x.position==="above"&&G,K(Re,{$style:p,$rowStyle:u,$headerStyle:c,$toolbarStyle:y,$toolbarPosition:x.position,$fixedHeader:t.fixedHeader.getView(),$fixedToolbar:x.fixedToolbar&&x.position==="above",$visibleResizables:F,$showHRowGridBorder:B,children:[b(te,{expandable:{...O.expandableConfig,childrenColumnName:re?fe:"OB_CHILDREN_KEY_PLACEHOLDER",fixed:"left",onExpand:a=>{T(a?"rowExpand":"rowShrink")}},rowColorFn:t.rowColor.getView(),rowHeightFn:t.rowHeight.getView(),...t.selection.getView()(E),bordered:t.showRowGridBorder.getView(),onChange:(a,v,M,k)=>{Se(a,v,M,k,i.dispatch,E)},showHeader:!t.hideHeader.getView(),columns:_,columnsStyle:H,viewModeResizable:t.viewModeResizable.getView(),visibleResizables:t.visibleResizables.getView(),dataSource:W.data,size:t.size.getView(),rowAutoHeight:R,tableLayout:"fixed",loading:g||t.showDataLoadSpinner.getView()&&t.data.isLoading()||t.loading.getView(),onCellClick:(a,v)=>{i.children.selectedCell.dispatchChangeValueAction({name:a,dataIndex:v})}}),b(ve.Provider,{value:{modalWidth:d&&Math.max(d,300)},children:O.expandModalView})]}),x.position==="below"&&G]})})}export{ct as TableCompView};
