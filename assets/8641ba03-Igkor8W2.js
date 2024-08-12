import{a4 as l,a0 as t,bN as g,eY as u,eZ as b,d as o,e_ as $,F as s}from"./index-CyMr76_m.js";const C=l.div`
  background-color: ${e=>e.$bgColor};
  max-width: ${e=>e.$maxWidth}px;
  min-height: ${e=>e.$minHeight};
  display: flex;
  flex-direction: column;

  > div {
    margin-bottom: 2px;
  }
`,v=l.div`
  position: relative;
`;function z(e){var n;const m=e.layout,{selectable:r,minHeight:d,maxWidth:c}=e,a=t.useContext(g),p=(((n=t.useContext(u))==null?void 0:n.theme)||b).canvas;return o(C,{$bgColor:p,$maxWidth:c,$minHeight:d,children:m.map((h,x)=>{const i=e.items[h.i];return i?o(v,{children:o($,{compType:i.compType,isSelectable:r,isDraggable:!1,isResizable:!1,resizeIconSize:"normal",onInnerResize:s.noop,onWrapperResize:s.noop,nameConfig:{show:!0,name:i.name,pos:x===0?"bottom":"top"},autoHeight:!1,resizeHandles:[],isSelected:a.selectedCompNames.has(i.name),onClick:()=>{a.setSelectedCompNames(new Set([i.name]))},hidden:i.hidden,children:i.view})},i.name):null})})}export{z as FlowContainerView};
