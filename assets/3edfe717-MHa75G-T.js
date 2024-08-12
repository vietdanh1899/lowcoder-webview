import{dK as r,iY as k,a4 as i,iZ as u,i_ as h,fU as b,b7 as x,a0 as m,fD as l,d as a,i$ as v,as as w,k as C,aj as y,fG as V,fF as f,bT as c,bw as E}from"./index-CyMr76_m.js";import{C as I}from"./aa7442af-9y-PcNP7.js";import{ColumnValueTooltip as $}from"./bbcd8d34-UQLMzqWl.js";import"./7a2fe5b9-_-VMc9tG.js";import"./73e0b0c0-cg4qSQqq.js";r.extend(k);const D=i(u)`
  transform: rotate(180deg);
`,N=i(h)`
  transform: rotate(180deg);
`,T=i(b)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  padding: 0;
  padding-left: 11px;
  .ant-picker-input {
    height: 100%;
  }
  input {
    padding-right: 18px;
    cursor: pointer;
  }
  &.ant-picker-focused .ant-picker-suffix svg g {
    stroke: ${e=>e.$open&&"#315EFB"};
  }
  .ant-picker-suffix {
    height: calc(100% - 1px);
    position: absolute;
    right: 0;
    top: 0.5px;
    display: flex;
    align-items: center;
    background: #fff;
    padding: 0 3px;
    border-left: 1px solid #d7d9e0;
  }
`,F=i.div`
  .ant-picker-header {
    padding: 0 12px;
    .ant-picker-header-super-prev-btn,
    .ant-picker-header-prev-btn,
    .ant-picker-header-next-btn,
    .ant-picker-header-super-next-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        max-width: 12px;
        max-height: 12px;
      }
      &:hover svg g {
        fill: #315efb;
      }
    }
  }
  .ant-picker-date-panel .ant-picker-body {
    padding: 8px 16px;
  }
  .ant-picker-ranges {
    padding: 10px 16px;
  }
  .ant-picker-now-btn {
    color: #4965f2;
    &:hover {
      color: #315efb;
    }
  }
  .ant-picker-cell {
    color: #b8b9bf;
  }
  .ant-picker-cell-in-view {
    color: rgba(0, 0, 0, 0.85);
  }
  .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner,
  .ant-picker-ok .ant-btn-primary {
    background: #4965f2;
    border: none;
    box-shadow: none;
    &:hover {
      background: #315efb;
      border: none;
      box-shadow: none;
    }
  }
  .ant-picker-cell:hover:not(.ant-picker-cell-in-view) .ant-picker-cell-inner,
  .ant-picker-cell:hover:not(.ant-picker-cell-selected):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end):not(.ant-picker-cell-range-hover-start):not(.ant-picker-cell-range-hover-end)
    .ant-picker-cell-inner {
    background-color: #f2f7fc;
    color: #4965f2;
  }
  .ant-picker-year-panel,
  .ant-picker-month-panel {
    & + div .ant-picker-now {
      display: none;
    }
  }
`,B=i.div`
  background: transparent !important;
`;function s(e,o){let n=r(e);return x.isNumber(Number(e))&&e!==""&&(n=r(Number(e))),n.isValid()||(n=r.utc(e).local()),n.isValid()?n.format(o):""}const O={text:c,format:E(c,f)},d=e=>e.text,R=e=>{const[o,n]=m.useState(!0);let p=r(e.value,l);return p.isValid()||(p=r(0,l)),a(B,{onKeyDown:t=>{t.key==="Enter"&&!o&&e.onChangeEnd()},children:a(T,{$open:o,suffixIcon:a(v,{}),prevIcon:a(u,{}),nextIcon:a(D,{}),superNextIcon:a(N,{}),superPrevIcon:a(h,{}),allowClear:!1,variant:"borderless",autoFocus:!0,defaultValue:p,showTime:e.showTime,showNow:!0,defaultOpen:!0,panelRender:t=>a(F,{children:t}),popupStyle:{borderRadius:"8px",boxShadow:"0 0 10px 0 rgba(0,0,0,0.10)",overflow:"hidden"},onOpenChange:t=>n(t),onChange:(t,g)=>e.onChange(g),onBlur:e.onChangeEnd})})},Y=function(){return new I(O,(e,o)=>{const n=e.changeValue??d(e);return s(n,e.format)},e=>s(e.text.value,e.format.value),d).setEditViewFn(e=>a(R,{value:e.value,onChange:e.onChange,onChangeEnd:e.onChangeEnd,showTime:!1})).setPropertyViewFn(e=>w(C,{children:[e.text.propertyView({label:y("table.columnValue"),tooltip:$}),V({children:e,placeholder:f})]})).build()}();export{Y as DateComp,R as DateEdit,s as formatDate};
