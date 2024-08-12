import{a4 as l,j4 as b,j5 as d,bU as m,bT as c,iX as h,bS as n,as as k,k as r,aj as i,bI as u,cx as f,el as w,d as o,bQ as C}from"./index-CyMr76_m.js";import{C as y}from"./aa7442af-9y-PcNP7.js";import{ColumnLink as g}from"./78fe38f6-CDiAuiLE.js";import"./7a2fe5b9-_-VMc9tG.js";const L=l.div`
  > a {
    color: ${b} !important;

    &:hover {
      color: ${d} !important;
    }
  }
`,V=l.div`
  ul {
    background: transparent !important;
    border-bottom: 0;

    li {
      padding: 0 10px 0 0 !important;
      line-height: normal !important;

      &::after {
        content: none !important;
      }
    }
  }  
`,x=new m({label:c,onClick:h,hidden:n,disabled:n},e=>e).setPropertyViewFn(e=>k(r,{children:[e.label.propertyView({label:i("label")}),e.onClick.propertyView({label:i("table.action"),placement:"table"}),u(e),f(e)]})).build(),I=function(){const e={options:w(x,{initOptions:[{label:i("table.option1")}]})};return new y(e,a=>{const p=a.options.filter(t=>!t.hidden).map((t,s)=>({key:s,label:o(L,{children:o(g,{disabled:t.disabled,label:t.label,onClick:t.onClick})})}));return o(V,{children:o(C,{mode:"horizontal",items:p})})},()=>"").setPropertyViewFn(a=>o(r,{children:a.options.propertyView({newOptionLabel:i("table.option"),title:i("table.optionList")})})).build()}();export{I as ColumnLinksComp};
