import{as as s,k as u,d as o,aj as t,cA as R,b_ as S,c3 as O,bD as A,bS as G,bz as J,bs as E,fZ as B,c7 as K,f_ as Z,bw as D,bx as F,a4 as P,f$ as V,g0 as q,t as H,g1 as W,bT as X,bA as Y,bF as Q,bG as b,bH as y,a0 as x,bN as g,cx as ee,bI as te,f1 as ie,cJ as T,cK as p,bJ as le,bL as $,g2 as ae,cy as re,by as se,a6 as oe,cb as ne,cc as ce,g3 as I,dT as v,ai as L,F as M,cX as pe,g4 as de}from"./index-CyMr76_m.js";import{formDataChildren as fe,FormDataPropertyView as ue}from"./2606e654-BU0arLul.js";const _=de(e=>{var l;if(typeof e=="number")return e;if(typeof e=="string"){const a=e.trim();if(a==="")return 0;const n=Number(a);if(!M.isNaN(n))return n;const f=["bytes","kb","mb","gb","tb"];if(new RegExp("^\\d+\\s*[kmgt]b$","i").test(a)){const d=parseInt(((l=a.match("^\\d+"))==null?void 0:l[0])??"",10),m=f.findIndex(i=>a.search(new RegExp(i,"i"))!==-1);return d*Math.pow(1024,m)}}throw new TypeError(t("file.typeErrorMsg",{value:typeof e}))}),N=s(u,{children:[o("div",{children:t("file.parsedValueTooltip1")}),o("div",{children:t("file.parsedValueTooltip2")})]}),me=[R,{label:t("event.parse"),value:"parse",description:t("event.parseDesc")}],he={minSize:_,maxSize:_,maxFiles:se},be={value:S([]),files:S([]),fileType:O,showUploadList:A.DEFAULT_TRUE,disabled:G,onEvent:J(me),style:E(B),animationStyle:E(K),parseFiles:Z,parsedValue:S([]),prefixIcon:D(F,"/icon:solid/arrow-up-from-bracket"),suffixIcon:F,...he},ye=e=>[e.minSize.propertyView({label:t("file.minSize"),placeholder:"1kb",tooltip:t("file.minSizeTooltip")}),e.maxSize.propertyView({label:t("file.maxSize"),placeholder:"10kb",tooltip:t("file.maxSizeTooltip")})],xe=e=>({accept:e.fileType.toString(),multiple:e.uploadType==="multiple",directory:e.uploadType==="directory",showUploadList:e.showUploadList,customRequest:l=>l.onSuccess&&l.onSuccess({})}),ge=e=>oe`
    .ant-btn {
      border-radius: ${e.radius};
      rotate: ${e.rotation};
      margin: ${e.margin};	
      padding: ${e.padding};	
      width: ${ne(e.margin)};	
      height: ${ce(e.margin)};
      font-family:${e.fontFamily};
      font-size:${e.textSize};
      font-weight:${e.textWeight};
      font-style:${e.fontStyle};
      border-width:${e.borderWidth};
      border-style:${e.borderStyle};
      text-decoration:${e.textDecoration};
      text-transform:${e.textTransform};
      text-transform:${e.textTransform};
    }

    .ant-btn:not(:disabled) {
      border-color: ${e.border};
      background-color: ${e.background};
      color: ${e.text};

      &:hover,
      &:focus {
        border-color: ${e.accent};
        color: ${e.accent};
      }

      &:active {
        border-color: ${I(e.accent,.1)};
        color: ${I(e.accent,.1)};
      }
    }
  `,ve=P(V)`
  .ant-upload,
  .ant-btn {
    ${e=>e.$animationStyle}
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 6px;

    > span {
      overflow: hidden;
      display: inline-flex;
      justify-content: flex-start;
      align-items: center;
      gap: 6px;
      min-height: 1px;
    }
  }
  ${e=>e.$style&&ge(e.$style)}
`,k=P.span`
  display: flex;
`;function we(e){return Promise.all(e.map(l=>{var a;return((a=l.originFileObj)==null?void 0:a.arrayBuffer().then(n=>q.Buffer.from(n).toString("base64")).catch(()=>null))??null}))}function Se(e){return Promise.all(e.map(async l=>{var a;const n=await H(()=>import("./2112abba-CbAARnSo.js"),[],import.meta.url);return((a=l.originFileObj)==null?void 0:a.arrayBuffer().then(f=>{var d;const m=W.getExtension(((d=l.originFileObj)==null?void 0:d.type)??"");if(m==="xlsx"||m==="csv"){const c=n.read(f,{raw:!0,codepage:65001});return n.utils.sheet_to_json(c.Sheets[c.SheetNames[0]],{raw:!1})}const i=new TextDecoder("utf-8").decode(f);return i?JSON.parse(i):null}).catch(()=>null))??null}))}const $e=e=>{const{dispatch:l,files:a,style:n}=e,[f,d]=x.useState(a.map(i=>({...i,status:"done"})));x.useEffect(()=>{a.length===0&&f.length!==0&&d([])},[a]);const m=v(e.prefixIcon)||!!e.text||v(e.suffixIcon);return o(ve,{$animationStyle:e.animationStyle,...xe(e),$style:n,fileList:f,beforeUpload:i=>!i.size||i.size<=0?(L.error(`${i.name} `+t("file.fileEmptyErrorMsg")),V.LIST_IGNORE):e.minSize&&i.size<e.minSize||e.maxSize&&i.size>e.maxSize?(L.error(`${i.name} `+t("file.fileSizeExceedErrorMsg")),V.LIST_IGNORE):!0,onChange:i=>{if(i.fileList.filter(r=>r.status==="uploading").length!==0){d(i.fileList);return}let c=e.maxFiles;e.uploadType==="single"?c=1:e.maxFiles<=0&&(c=100);const h=i.fileList.filter(r=>r.status==="done");if(i.file.status==="removed"){const r=e.files.findIndex(w=>w.uid===i.file.uid);l(T({value:p([...e.value.slice(0,r),...e.value.slice(r+1)],!1),files:p([...e.files.slice(0,r),...e.files.slice(r+1)],!1),parsedValue:p([...e.parsedValue.slice(0,r),...e.parsedValue.slice(r+1)],!1)})),e.onEvent("change")}else{const r=Math.min(e.value.length,h.length),w=Math.min(e.parsedValue.length,h.length);Promise.all([we(h.slice(r)),Se(h.slice(w))]).then(([U,C])=>{l(T({value:p([...e.value,...U].slice(-c),!1),files:p(h.map(j=>M.pick(j,["uid","name","type","size","lastModified"])).slice(-c),!1),...e.parseFiles?{parsedValue:p([...e.parsedValue,...C].slice(-c),!1)}:{}})),e.onEvent("change"),e.onEvent("parse")})}d(h.slice(-c))},children:o(pe,{disabled:e.disabled,children:m&&s("span",{children:[v(e.prefixIcon)&&o(k,{children:e.prefixIcon}),!!e.text&&e.text,v(e.suffixIcon)&&o(k,{children:e.suffixIcon})]})})})},Ve=[{label:t("file.single"),value:"single"},{label:t("file.multiple"),value:"multiple"},{label:t("file.directory"),value:"directory"}],Te={text:D(X,t("file.upload")),uploadType:Y(Ve,"single"),...be,...fe};let z=new Q(Te,(e,l)=>o($e,{...e,dispatch:l})).setPropertyViewFn(e=>s(u,{children:[s(b,{name:y.basic,children:[e.text.propertyView({label:t("text")}),e.uploadType.propertyView({label:t("file.uploadType")})]}),o(ue,{...e}),(x.useContext(g).editorModeStatus==="logic"||x.useContext(g).editorModeStatus==="both")&&s(u,{children:[s(b,{name:y.validation,children:[e.uploadType.getView()!=="single"&&e.maxFiles.propertyView({label:t("file.maxFiles")}),ye(e)]}),s(b,{name:y.interaction,children:[e.onEvent.getPropertyView(),ee(e),te(e)]}),s(b,{name:y.advanced,children:[e.fileType.propertyView({label:t("file.fileType"),placeholder:'[".png"]',tooltip:s(u,{children:[t("file.reference")," ",o("a",{href:t("file.fileTypeTooltipUrl"),target:"_blank",rel:"noreferrer",children:t("file.fileTypeTooltip")})]})}),e.prefixIcon.propertyView({label:t("button.prefixIcon")}),e.suffixIcon.propertyView({label:t("button.suffixIcon")}),e.showUploadList.propertyView({label:t("file.showUploadList")}),e.parseFiles.propertyView({label:t("file.parseFiles"),tooltip:N,placement:"right"})]})]}),(x.useContext(g).editorModeStatus==="layout"||x.useContext(g).editorModeStatus==="both")&&s(u,{children:[o(b,{name:y.style,children:e.style.getPropertyView()}),o(b,{name:y.animationStyle,hasTooltip:!0,children:e.animationStyle.getPropertyView()})]})]})).build();z=ie(z,[{method:{name:"clearValue",description:t("file.clearValueDesc"),params:[]},execute:e=>e.dispatch(T({value:p([],!1),files:p([],!1),parsedValue:p([],!1)}))}]);const Fe=le(z,[new $("value",t("file.filesValueDesc")),new $("files",s(u,{children:[t("file.filesDesc"),(()=>{const e=ae("file");if(e)return s(u,{children:[" ",o("a",{href:e,target:"_blank",rel:"noreferrer",children:t("uiComp.fileUploadCompName")})]})})()]})),new $("parsedValue",N),...re]);export{Fe as FileComp,Se as resolveParsedValue,we as resolveValue};
