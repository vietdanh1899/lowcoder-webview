import{a4 as h,bF as y,bT as $,bD as e,bs as d,cj as g,c7 as S,a3 as f,d as a,as as n,k as m,bG as r,bH as i,aj as l,a0 as c,bN as u,bI as x,bJ as V,bL as F,bK as P}from"./index-CyMr76_m.js";const k=h.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: ${o=>o.$style.borderWidth?o.$style.borderWidth:"1px"}
    solid ${o=>o.$style.border};
  border-radius: calc(min(${o=>o.$style.radius}, 20px));
rotate:${o=>o.$style.rotation};
margin:${o=>o.$style.margin};
padding:${o=>o.$style.padding};
${o=>o.$animationStyle}
  iframe {
    border: 0;
    width: 100%;
    height: 100%;
    display: block;
    background-color: ${o=>o.$style.background};
  }
`,b=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/g;let p=new y({url:$,allowDownload:e,allowSubmitForm:e,allowMicrophone:e,allowCamera:e,allowPopup:e,style:d(g),animationStyle:d(S)},o=>{const t=["allow-scripts","allow-same-origin"];o.allowSubmitForm&&t.push("allow-forms"),o.allowDownload&&t.push("allow-downloads"),o.allowPopup&&t.push("allow-popups");const s=[];o.allowCamera&&s.push("camera"),o.allowMicrophone&&s.push("microphone");const w=b.test(o.url)?o.url:"about:blank";return f.log(o.url,b.test(o.url)?o.url:"about:blank",w),a(k,{$style:o.style,$animationStyle:o.animationStyle,children:a("iframe",{src:w,sandbox:t.join(" "),allow:s.join(";")})})}).setPropertyViewFn(o=>n(m,{children:[a(r,{name:i.basic,children:o.url.propertyView({label:"Source URL",placeholder:"https://example.com",tooltip:l("iframe.URLDesc")})}),["logic","both"].includes(c.useContext(u).editorModeStatus)&&n(r,{name:i.interaction,children:[x(o),o.allowDownload.propertyView({label:l("iframe.allowDownload")}),o.allowSubmitForm.propertyView({label:l("iframe.allowSubmitForm")}),o.allowMicrophone.propertyView({label:l("iframe.allowMicrophone")}),o.allowCamera.propertyView({label:l("iframe.allowCamera")}),o.allowPopup.propertyView({label:l("iframe.allowPopup")})]}),["layout","both"].includes(c.useContext(u).editorModeStatus)&&n(m,{children:[a(r,{name:i.style,children:o.style.getPropertyView()}),a(r,{name:i.animationStyle,hasTooltip:!0,children:o.animationStyle.getPropertyView()})]})]})).build();p=class extends p{autoHeight(){return!1}};const D=V(p,[new F("url",l("iframe.URLDesc")),P]);export{D as IFrameComp};
