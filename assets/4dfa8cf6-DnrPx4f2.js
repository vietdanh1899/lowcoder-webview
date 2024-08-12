const __vite__fileDeps=["./6e0f176b-BR94qPpL.js","./index-CyMr76_m.js","./index-BMPuTij9.css","./e31ad0b9-CvgrfNar.js","./18c4bdff-C7Ic10_K.js","./2f65199c-n-_s74j7.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a6 as $,aj as r,a4 as V,bB as F,bD as y,bw as q,ci as N,bT as T,c4 as z,bs as J,cB as M,M as W,t as B,bF as L,d as u,as as b,k,bG as p,bH as f,cC as A,a0 as t,bN as E,bI as I,cD as Y,bJ as Z,bL as x,bK as j,F as G,cE as K}from"./index-CyMr76_m.js";import{formDataChildren as Q,FormDataPropertyView as U}from"./2606e654-BU0arLul.js";function X(e,i){var o=t.useRef(!1),a=t.useRef(),c=t.useRef(e),h=t.useCallback(function(){return o.current},[]),d=t.useCallback(function(){o.current=!1,a.current&&clearTimeout(a.current),a.current=setTimeout(function(){o.current=!0,c.current()},i)},[i]),s=t.useCallback(function(){o.current=null,a.current&&clearTimeout(a.current)},[]);return t.useEffect(function(){c.current=e},[e]),t.useEffect(function(){return d(),s},[i]),[h,s,d]}function ee(e,i,o){o===void 0&&(o=[]);var a=X(e,i),c=a[0],h=a[1],d=a[2];return t.useEffect(d,o),[c,h]}const C=$`
  & .ql-snow {
    .ql-picker.ql-header {
      .ql-picker-label::before,
      .ql-picker-item::before {
        content: "${r("richTextEditor.content")}";
      }

      .ql-picker-label[data-value="1"]::before,
      .ql-picker-item[data-value="1"]::before {
        content: "${r("richTextEditor.title")} 1";
      }

      .ql-picker-label[data-value="2"]::before,
      .ql-picker-item[data-value="2"]::before {
        content: "${r("richTextEditor.title")} 2";
      }

      .ql-picker-label[data-value="3"]::before,
      .ql-picker-item[data-value="3"]::before {
        content: "${r("richTextEditor.title")} 3";
      }

      .ql-picker-item[data-value="1"]::before {
        font-size: 26px;
      }

      .ql-picker-item[data-value="3"]::before {
        font-size: 19px;
      }

      .ql-picker-item[data-value="3"]::before {
        font-size: 15px;
      }
    }
    & .ql-tooltip.ql-editing a.ql-action::after {
      content: "${r("richTextEditor.save")}";
    }
    & .ql-tooltip::before {
      content: "${r("richTextEditor.link")}";
    }
    & .ql-tooltip {
      a.ql-action::after {
        content: "${r("richTextEditor.edit")}";
      }
      a.ql-remove::before {
        content: "${r("richTextEditor.remove")}";
      }
    }
  }
`,R=e=>$`
  height: 100%;

  & .ql-editor {
    min-height: 85px;
  }
  & .ql-snow .ql-tooltip.ql-editing {
    input[type="text"] {
      width: 130px;
    }
  }
  & .ql-snow {
    &.ql-container,
    &.ql-toolbar {
      border-color: ${e.border};
      background-color: ${e.background};
      
    }
  }
  & .ql-toolbar {
    border-radius: ${e.radius} ${e.radius} 0 0;
    border-width: ${e.borderWidth?e.borderWidth:"1px"};
  }
  & .ql-container {
    border-radius: 0 0 ${e.radius} ${e.radius};
    background-color: ${e.background};
    border-width: ${e.borderWidth?e.borderWidth:"1px"};
  }
`,D=e=>$`
  .ql-snow.ql-toolbar {
    height: 0;
    overflow: hidden;
    padding: 0;
    border-bottom: 0;
    border: none;
  }
  .quill .ql-snow.ql-container {
    border-radius: ${e.radius};
    border: 1px solid ${e.border};
  }
`,te=V.div`
  ${C}
  ${e=>R(e.$style)}
  & .ql-container .ql-editor {
    min-height: 125px;
  }
  ${e=>e.$hideToolbar?D(e.$style):""};
`,re=V.div`
  ${C}
  ${e=>R(e.$style)}
  & .quill {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  & .ql-snow {
    &.ql-container {
      flex: 1;
      overflow: auto;
    }
  }
  ${e=>e.$hideToolbar?D(e.$style):""};
`,oe=[[{header:[1,2,3,!1]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],[{color:[]},{background:[]},{align:[]}],["link","image"],["clean"]],ae={value:F("value"),hideToolbar:y,readOnly:y,autoHeight:q(N,"fixed"),placeholder:q(T,r("richTextEditor.placeholder")),toolbar:q(T,JSON.stringify(oe)),onEvent:z,style:J(M),...Q},le=W.lazy(()=>B(()=>import("./6e0f176b-BR94qPpL.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(e=>e.i));function ie(e){const[i,o]=t.useState(0),[a,c]=t.useState(""),h=t.useRef(null),d=t.useRef(null),s=t.useRef(0),v=t.useRef(e.onChange);v.current=e.onChange;const H=t.useRef(G.debounce(l=>{var n;window.clearTimeout(s.current),s.current=window.setTimeout(()=>s.current=0,100),(n=v.current)==null||n.call(v,l)}));ee(()=>{o(Math.random())},500,[e.placeholder]);const O=(l,n)=>{try{n.parentNode}catch{return!1}return l.contains(n)},P=l=>{c(l),H.current(l)};t.useEffect(()=>{let l=e.value;/^<\w+>.+<\/\w+>$/.test(e.value)||(l=`<p class="">${e.value}</p>`),c(l)},[e.value]);const S=l=>{var n,w;(w=((n=d.current)==null?void 0:n.editor).theme.pickers)==null||w.forEach(g=>{O(g.container,l.nativeEvent.target)||g.close()})},m="rtf-editor",_=e.autoHeight?te:re;return u(_,{id:m,onClick:S,ref:h,$hideToolbar:e.hideToolbar,$style:e.$style,children:u(t.Suspense,{fallback:u(K,{}),children:u(le,{ref:d,bounds:`#${m}`,modules:{toolbar:JSON.parse(e.toolbar)},theme:"snow",value:a,placeholder:e.placeholder,readOnly:e.readOnly,onChange:P},i)})})}const ne=new L(ae,e=>{const i=o=>{e.value.onChange(o),e.onEvent("change")};return u(ie,{autoHeight:e.autoHeight,hideToolbar:e.hideToolbar,toolbar:e.toolbar,readOnly:e.readOnly,value:e.value.value,placeholder:e.placeholder,onChange:i,$style:e.style})}).setPropertyViewFn(e=>b(k,{children:[b(p,{name:f.basic,children:[e.value.propertyView({label:r("richTextEditor.defaultValue")}),A(e)]}),u(U,{...e}),["logic","both"].includes(t.useContext(E).editorModeStatus)&&b(p,{name:f.interaction,children:[e.onEvent.getPropertyView(),I(e),Y(e)]}),["layout","both"].includes(t.useContext(E).editorModeStatus)&&b(k,{children:[b(p,{name:f.layout,children:[e.autoHeight.getPropertyView(),e.toolbar.propertyView({label:r("richTextEditor.toolbar"),tooltip:r("richTextEditor.toolbarDescription")}),e.hideToolbar.propertyView({label:r("richTextEditor.hideToolbar")})]}),u(p,{name:f.style,children:e.style.getPropertyView()})]})]})).build();class ce extends ne{autoHeight(){return this.children.autoHeight.getView()}}const se=Z(ce,[new x("value",r("export.richTextEditorValueDesc")),new x("readOnly",r("export.richTextEditorReadOnlyDesc")),new x("hideToolbar",r("export.richTextEditorHideToolBarDesc")),j]);export{se as RichTextEditorComp};
