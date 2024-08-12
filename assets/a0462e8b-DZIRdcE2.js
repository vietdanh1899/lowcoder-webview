import{a6 as a,db as h,a4 as b,ia as s,d6 as n,ct as u,bS as k,c4 as x,ib as p,bs as o,cu as f,cv as $,bA as y,cM as v,ic as m,c7 as g,bF as w,d,bJ as S,bL as B,aj as W,cy as F,cf as C}from"./index-CyMr76_m.js";import{SelectInputValidationChildren as I,useSelectInputValidate as V,selectDivRefMethods as D,SelectInputInvalidConfig as R}from"./3b4688fc-D_wIQU04.js";import{formDataChildren as z}from"./2606e654-BU0arLul.js";import{RadioLayoutOptions as K,RadioPropertyView as L}from"./779f3b7b-amEsk8BD.js";import{fixOldInputCompData as q}from"./6273459c-DX34gMfV.js";const M=e=>a`
    &,
    .ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled) {
      color: ${e.staticText};
      max-width: calc(100% - 8px);

      span:not(.ant-checkbox) {
        ${h};
      }

      .ant-checkbox .ant-checkbox-checked > .ant-checkbox-inner {
        border-color: ${e.checkedBorder};
        border-width:${e.borderWidth?e.borderWidth:"2px"};
      }

      .ant-checkbox:not(.ant-checkbox-checked) > .ant-checkbox-inner{
        border-color: ${e.uncheckedBorder};
        border-width:${e.borderWidth?e.borderWidth:"2px"};
      }

      .ant-checkbox-checked {
        .ant-checkbox-inner {
          background-color: ${e.checkedBackground};
          border-color: ${e.checkedBorder};
          border-width:${e.borderWidth?e.borderWidth:"2px"};

          &::after {
            border-color: ${e.checked};
          }
        }

        &::after {
          border-color: ${e.checkedBorder};
          border-width:${e.borderWidth?e.borderWidth:"2px"};
          border-radius: ${e.radius};
        }
      }
      
      .ant-checkbox-inner {
        background-color: ${e.uncheckedBackground};
        border-radius: ${e.radius};
        border-color: ${e.checkedBorder};
        border-width:${e.borderWidth?e.borderWidth:"2px"};
      }
    
      &:hover .ant-checkbox-inner, 
      .ant-checkbox:hover .ant-checkbox-inner,
      .ant-checkbox-input + ant-checkbox-inner {
        background-color:${e.hoverBackground?e.hoverBackground:"#fff"};
      }

      &:hover .ant-checkbox-checked .ant-checkbox-inner, 
      .ant-checkbox:hover .ant-checkbox-inner,
      .ant-checkbox-input + ant-checkbox-inner {
        background-color:${e.hoverBackground?e.hoverBackground:"#ffff"};
      }

      &:hover .ant-checkbox-inner,
      .ant-checkbox:hover .ant-checkbox-inner,
      .ant-checkbox-input:focus + .ant-checkbox-inner {
        border-color: ${e.checkedBorder};
        border-width:${e.borderWidth?e.borderWidth:"2px"};
      }
    }

    

    .ant-checkbox-group-item {
      font-family:${e.fontFamily};
      font-size:${e.textSize};
      font-weight:${e.textWeight};
      font-style:${e.fontStyle};
      text-transform:${e.textTransform};
      text-decoration:${e.textDecoration};
    }
    .ant-checkbox-wrapper {
      padding: ${e.padding};
      .ant-checkbox-inner,
      .ant-checkbox-checked::after {
        border-radius: ${e.radius};
      }
    }
  `,P=b(s)`
  min-height: 32px;
  ${e=>e.$style&&M(e.$style)}
  ${e=>{if(e.$layout==="horizontal")return a`
        display: flex;
        align-items: center;
        flex-wrap: wrap;
      `;if(e.$layout==="vertical")return a`
        display: flex;
        flex-direction: column;
      `;if(e.$layout==="auto_columns")return a`
        break-inside: avoid;
        columns: 160px;
      `}}
`;let c=function(){const e={defaultValue:n("defaultValue"),value:n("value"),label:u,disabled:k,onEvent:x,options:p,style:o(f),labelStyle:o($.filter(r=>["accent","validate"].includes(r.name)===!1)),layout:y(K,"horizontal"),viewRef:v,inputFieldStyle:o(m),animationStyle:o(g),...I,...z};return new w(e,r=>{const[i,l]=V(r);return r.label({required:r.required,style:r.style,labelStyle:r.labelStyle,inputFieldStyle:r.inputFieldStyle,animationStyle:r.animationStyle,children:d(P,{ref:r.viewRef,disabled:r.disabled,value:r.value.value,$style:r.inputFieldStyle,$layout:r.layout,options:r.options.filter(t=>t.value!==void 0&&!t.hidden).map(t=>({label:t.label,value:t.value,disabled:t.disabled})),onChange:t=>{l(t)}}),...i})}).setPropertyViewFn(r=>d(L,{...r})).setExposeMethodConfigs(D).build()}();c=C(c,q);const H=S(c,[new B("value",W("selectInput.valueDesc")),R,...F]);export{H as CheckboxComp,M as getStyle};
