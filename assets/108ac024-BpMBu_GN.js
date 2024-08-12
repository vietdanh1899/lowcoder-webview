import{a4 as d,ij as a,a6 as i,bF as u,d as o,bJ as c,bL as s,aj as p,cy as v,db as f,cf as h}from"./index-CyMr76_m.js";import{RadioChildrenMap as $,RadioPropertyView as y}from"./779f3b7b-amEsk8BD.js";import{useSelectInputValidate as b,selectDivRefMethods as m,SelectInputInvalidConfig as x}from"./3b4688fc-D_wIQU04.js";import{fixOldInputCompData as g}from"./6273459c-DX34gMfV.js";import"./2606e654-BU0arLul.js";const k=(t,e)=>i`
    .ant-radio-wrapper:not(.ant-radio-wrapper-disabled) {
      color: ${e==null?void 0:e.staticText};
      // height: 22px;
      max-width: calc(100% - 8px);
      padding: ${e==null?void 0:e.padding};
      span:not(.ant-radio) {
        ${f};
        font-family:${e==null?void 0:e.fontFamily};
        font-size:${e==null?void 0:e.textSize};
        font-weight:${e==null?void 0:e.textWeight};
        font-style:${e==null?void 0:e.fontStyle};
        text-transform:${e==null?void 0:e.textTransform};
        text-decoration:${e==null?void 0:e.textDecoration};
      }

      .ant-radio-checked {
        .ant-radio-inner {
          background-color: ${e==null?void 0:e.checkedBackground};
          border-color: ${e==null?void 0:e.uncheckedBorder};
        }

        &::after {
          border-color: ${e==null?void 0:e.uncheckedBorder};
        }
      }

      .ant-radio-inner {
        background-color: ${e==null?void 0:e.uncheckedBackground};
        border-color: ${e==null?void 0:e.uncheckedBorder};
        border-width:${e==null?void 0:e.borderWidth};
        &::after {
          background-color: ${e==null?void 0:e.checked};
        }
      }

      &:hover .ant-radio-inner, 
      .ant-radio:hover .ant-radio-inner,
      .ant-radio-input + ant-radio-inner {
        background-color:${e!=null&&e.hoverBackground?e==null?void 0:e.hoverBackground:"#ffff"};
      }

      &:hover .ant-radio-inner,
      .ant-radio:hover .ant-radio-inner,
      .ant-radio-input:focus + .ant-radio-inner {
        border-color: ${e==null?void 0:e.uncheckedBorder};
      }
    }
  `,w=d(a)`
  width: 100%;
  min-height: 32px;

  ${t=>t.$style&&k(t.$style,t.$inputFieldStyle)}
  ${t=>{if(t.$layout==="horizontal")return i`
        display: flex;
        align-items: center;
        flex-wrap: wrap;
      `;if(t.$layout==="vertical")return i`
        display: flex;
        flex-direction: column;
      `;if(t.$layout==="auto_columns")return i`
        break-inside: avoid;
        columns: 160px;
      `}}
`;let l=function(){return new u($,t=>{const[e,r]=b(t);return t.label({required:t.required,style:t.style,labelStyle:t.labelStyle,inputFieldStyle:t.inputFieldStyle,animationStyle:t.animationStyle,children:o(w,{ref:t.viewRef,disabled:t.disabled,value:t.value.value,$style:t.style,$inputFieldStyle:t.inputFieldStyle,$layout:t.layout,onChange:n=>{r(n.target.value)},options:t.options.filter(n=>n.value!==void 0&&!n.hidden).map(n=>({label:n.label,value:n.value,disabled:n.disabled}))}),...e})}).setPropertyViewFn(t=>o(y,{...t})).setExposeMethodConfigs(m).build()}();l=h(l,g);const R=c(l,[new s("value",p("selectInput.valueDesc")),x,...v]);export{R as RadioComp};
