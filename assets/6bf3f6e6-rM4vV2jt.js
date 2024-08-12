import{a4 as m,a0 as i,bN as B,hg as F,h6 as E,F as x,d as o,hh as U,eK as q,di as K,as as T,eL as _,c8 as J,hi as Q,hj as X,dm as Y,gA as Z,dp as ee,dl as te}from"./index-CyMr76_m.js";import{ContextContainerComp as ie}from"./4109a019-urJExrvy.js";const oe=m.div`
  height: 100%;
  border: 1px solid ${t=>t.$style.border};
  border-radius: ${t=>t.$style.radius};
  padding: 3px ${t=>t.$paddingWidth};
  rotate: ${t=>t.$style.rotation};
  background-color: ${t=>t.$style.background};
  ${t=>t.$animationStyle}
`,ne=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
`,ae=m.div`
  height: ${t=>t.$autoHeight?"100%":"calc(100% - 32px)"};
`,re=m.div` 
  height: 100%;
  display: flex;
  align-items: center;
  // justify-content: center;
`,se=m.div`
  height: ${t=>t.$autoHeight?"auto":"100%"};
  display: flex;
  flex-direction: ${t=>t.$isHorizontal&&!t.$isGrid?"row":"column"};
  height: 100%;
`,M=i.createContext({horizontalWidth:"100%",minHorizontalWidth:"100px"}),le=t=>{const{horizontalWidth:g,minHorizontalWidth:e}=i.useContext(M);return o("div",{style:{width:g,minWidth:e||"0px"},children:o(ee,{...t,emptyRows:15,containerPadding:[4,4],hintPlaceholder:te})})};function de({minHorizontalWidth:t,horizontalWidth:g,...e}){const{itemIdx:l,offset:a,containerProps:d,autoHeight:$,scrollContainerRef:w,minHeight:u}=e;return o(M.Provider,{value:{horizontalWidth:g,minHorizontalWidth:t},children:o(le,{layout:d.layout,items:Y(d.items),positionParams:d.positionParams,dispatch:l===a?d.dispatch:x.noop,style:{height:"100%",width:t||"100%",backgroundColor:"transparent"},autoHeight:$,isDroppable:l===a,isDraggable:l===a,isResizable:l===a,isSelectable:l===a,scrollContainerRef:w,overflow:"hidden",minHeight:u,enableGridLines:!0})})}function ce(t){const{comp:g}=t,e=g.children,l=i.useRef(null),a=i.useContext(B),d=a.isDragging,[$,w]=F(0,d),u=i.useMemo(()=>e.dynamicHeight.getView(),[e.dynamicHeight]),V=i.useMemo(()=>e.heightUnitOfRow.getView(),[e.heightUnitOfRow]),v=i.useMemo(()=>e.container.getView(),[e.container]),S=i.useMemo(()=>e.itemIndexName.getView(),[e.itemIndexName]),W=i.useMemo(()=>e.itemDataName.getView(),[e.itemDataName]),{data:R,itemCount:H}=i.useMemo(()=>E(e.noOfRows.getView()),[e.noOfRows]),p=i.useMemo(()=>e.autoHeight.getView(),[e.autoHeight]),P=i.useMemo(()=>e.scrollbars.getView(),[e.scrollbars]),b=i.useMemo(()=>e.horizontal.getView(),[e.horizontal]),O=i.useMemo(()=>e.minHorizontalWidth.getView(),[e.minHorizontalWidth]),c=i.useMemo(()=>Math.max(1,e.noOfColumns.getView()),[e.noOfColumns]),r=i.useMemo(()=>{const s=e.pagination.getView(),h=s.total||H;let n=s.current,f=(n-1)*s.pageSize;const z=Math.max(0,Math.min(s.pageSize,h-f));return{pagination:{...s,current:n,total:h},offset:f,currentPageSize:z,total:h}},[e.pagination,H]),C=e.style.getView(),D=e.animationStyle.getView(),N=g.realSimpleContainer().children.layout.getView(),y=r.currentPageSize>0&&(x.isEmpty(N)||a.isDragging),G=y?1:Math.floor((r.currentPageSize+c-1)/c),k=y?"100%":u?"auto":V*44+"px",I=d&&p?$+"px":"100%",L=x.range(0,G).map(s=>o("div",{style:{height:k,width:"100%"},children:o(re,{children:x.range(0,c).map(h=>{const n=s*c+h+r.offset;if(n>=r.total||n>=r.offset+r.pagination.pageSize||y&&n>r.offset)return o("div",{style:{flex:"auto"}},n);const f=v({[S]:n,[W]:U(R,n)},String(n)).getView(),z=()=>{g.children.container.dispatch(Z(ie.batchDeleteAction([String(n)])))};return o(de,{itemIdx:n,offset:r.offset,containerProps:f,autoHeight:d||u,scrollContainerRef:l,minHeight:I,unMountFn:z,horizontalWidth:`${100/c}%`,minHorizontalWidth:b?O:void 0},n)})})},s)),j=a.getAppSettings().maxWidth,A=q(j)?"4px":"16px";return o(K.Provider,{value:C.background,children:T(oe,{$style:C,$paddingWidth:A,$animationStyle:D,children:[o(ae,{ref:l,$autoHeight:p,children:o(_,{style:{height:p?"auto":"100%",margin:"0px",padding:"0px"},hideScrollbar:!P,children:o(J,{onResize:(s,h)=>{h&&w(h)},observerOptions:{box:"border-box"},render:()=>o(se,{$isHorizontal:b,$isGrid:c>1,$autoHeight:p,children:L})})})}),o(ne,{children:o(Q,{size:"small",itemRender:X,...r.pagination})})]})})}export{ce as ListView};
