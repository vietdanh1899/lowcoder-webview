import{aj as o,a4 as Q,f8 as j,bw as q,bT as F,bs as $,f9 as H,c7 as P,bF as T,d,k as M,a0 as a,bN as E,as as I,bG as b,bH as g,bI as A,bJ as G,bL as R,bK as J,fa as K,fb as U,fc as O}from"./index-CyMr76_m.js";var c=(e=>(e.Invoke="invoke",e.Data="data",e.Init="init",e))(c||{});const z={name:"{{currentUser.name}}",text:o("customComp.text"),query:"query1"},W=`
  <style type="text/css">
  body {
    padding: 5px;
  }
  </style>
  
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/antd@4.21.4/dist/antd.min.css"/>
  <script type="text/javascript" src="https://unpkg.com/antd@4.21.4/dist/antd.min.js" ><\/script>
  
  <div id="root"></div>
  
  <script type="text/babel">
  
  const { Button, Card, Space } = antd;
  
  const MyCustomComponent = ({ runQuery, model, updateModel}) => (
    <Card title={"Hello, " + model.name}>
        <p>{model.text}</p>
        <Space>
          <Button
            type="primary"
            onClick={() => runQuery(model.query)}
         >
            ${o("customComp.triggerQuery")}
          </Button>
          <Button
            onClick={() => updateModel({ text: "${o("customComp.updateText")}" })}
          >
          ${o("customComp.updateData")}
          </Button>
      </Space>
    </Card>
  );
  
  const ConnectedComponent = ${o("customComp.sdkGlobalVarName")}.connect(MyCustomComponent);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<ConnectedComponent />);
  
  <\/script>
  `,Y=Q.div`
  width: 100%;
  height: 100%;
  ${e=>e.$style};
  rotate: ${e=>e.$style.rotation};
  ${e=>e.$animationStyle};
  iframe {
    border: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
`;function m(e,s){var n;(n=e==null?void 0:e.contentWindow)==null||n.postMessage(s,"*")}function Z(e){const s=a.useRef(String(Date.now())),{model:n,code:i,onModelChange:p,dispatch:B}=e,u=a.useRef(null),r=a.useRef(n),y=a.useRef(!1),D=a.useRef({runQuery:async t=>{const{queryName:l}=t;return K(B,U(l,O({}))).catch(h=>Promise.resolve({}))},getModel:async t=>r.current,updateModel:async t=>(r.current={...r.current,...t},m(u.current,{type:c.Data,payload:{model:r.current}}),p(r.current),r.current)});return a.useEffect(()=>{m(u.current,{type:c.Data,payload:{model:n}}),r.current=n},[n]),a.useEffect(()=>{if(!u.current)return;const t=u.current,l=C=>{const{type:v,payload:x,hostId:S}=C.data;if(!v||!x||!S||S!==s.current)return;const{method:k,data:L,id:V}=x;if(v===c.Invoke){const f=D.current[k];if(!f||typeof f!="function")return;f(L).then(N=>{m(t,{type:c.Invoke,payload:{id:V,method:k,response:N}})})}},h=()=>{m(t,{type:c.Init,payload:{hostId:s.current,code:i}})};window.addEventListener("message",l),t.addEventListener("load",h);const w=t.getAttribute("src");if(w&&y){y.current=!1;const C=new URL("?_t="+Date.now(),w);t.setAttribute("src",C.toString())}return()=>{y.current=!0,window.removeEventListener("message",l),t.removeEventListener("load",h)}},[i]),d(Y,{$style:e.style,$animationStyle:e.animationStyle,children:d("iframe",{ref:u,title:"custom-comp",src:o("customComponent.entryUrl")})})}const _={model:j(z),code:q(F,W),style:$(H),animationStyle:$(P)},X=new T(_,(e,s)=>{const{code:n,model:i}=e;return d(Z,{style:e.style,animationStyle:e.animationStyle,code:n,model:i.value,onModelChange:p=>i.onChange(p),dispatch:s})}).setPropertyViewFn(e=>d(M,{children:(a.useContext(E).editorModeStatus==="logic"||a.useContext(E).editorModeStatus==="both")&&I(M,{children:[I(b,{name:g.interaction,children:[e.model.propertyView({label:o("customComp.data")}),e.code.propertyView({label:o("customComp.code"),language:"html"}),A(e)]}),d(b,{name:g.style,children:e.style.getPropertyView()}),d(b,{name:g.animationStyle,hasTooltip:!0,children:e.animationStyle.getPropertyView()})]})})).build();class ee extends X{autoHeight(){return!1}}const oe=G(ee,[new R("model",o("data")),new R("code",o("code")),J]);export{oe as CustomComp};
