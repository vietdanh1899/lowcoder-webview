import{a4 as o,gW as l,d as t,iW as p,cq as u,j6 as d,j7 as h,as as m,k as b,aj as a,by as g,bD as c}from"./index-CyMr76_m.js";import{C as x}from"./aa7442af-9y-PcNP7.js";import{ColumnValueTooltip as w}from"./bbcd8d34-UQLMzqWl.js";import{ProgressStyled as f}from"./c9e82af5-CWpE2eMW.js";import"./7a2fe5b9-_-VMc9tG.js";import"./73e0b0c0-cg4qSQqq.js";const V=o(f)`
  display: flex;
  align-items: center;
  .ant-progress-outer {
    height: 22px;
    display: flex;
    align-items: center;
  }
  .ant-progress-text {
    margin-left: 6px;
  }
`,y=o(l)`
  background: transparent !important;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  .ant-input-number-input-wrap {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .ant-input-number-handler-wrap {
    top: 1.5px;
    right: 1.5px;
    height: calc(100% - 3px);
    border-radius: 0;
  }
  .ant-input-number-handler-up {
    border-bottom: 1px solid #d7d9e0;
  }
  .ant-input-number-handler-up,
  .ant-input-number-handler-down {
    display: flex;
    align-items: center;
    justify-content: center;
    > span {
      width: 16px;
      height: 16px;
      margin-top: 0;
      position: unset;
      transform: none;
    }
    &:hover {
      &:not(.ant-input-number-handler-up-disabled):not(.ant-input-number-handler-down-disabled)
        path {
        fill: #315efb;
      }
    }
  }
`,C={text:g,showValue:c},r=e=>e.text,I=function(){return new x(C,(e,n)=>{const s=e.changeValue??r(e);return t(()=>{const i=p(u);return t(V,{percent:Math.round(s),showInfo:e.showValue,$style:i})},{})},e=>e.text.value,r).setEditViewFn(e=>t(y,{min:0,max:100,defaultValue:e.value,autoFocus:!0,variant:"borderless",controls:{upIcon:t(d,{}),downIcon:t(h,{})},onChange:n=>{e.onChange(Number(n))},onBlur:e.onChangeEnd,onPressEnter:e.onChangeEnd})).setPropertyViewFn(e=>m(b,{children:[e.text.propertyView({label:a("table.columnValue"),tooltip:w}),e.showValue.propertyView({label:a("table.showValue")})]})).build()}();export{I as ProgressComp};
