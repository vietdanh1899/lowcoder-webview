import{a4 as A,gW as _,aj as o,bB as C,bR as B,bT as O,bS as U,bD as y,ct as X,bA as K,bw as $,by as L,fB as W,d_ as G,cM as Y,bs as x,cu as H,cv as j,c7 as z,bx as J,dP as Q,e0 as Z,bF as tt,d as h,as as v,k as V,bG as c,bH as m,cC as et,a0 as l,bN as b,e1 as at,cx as rt,bI as nt,cD as ot,f1 as lt,cP as it,cQ as ut,cR as st,cS as dt,e5 as pt,e6 as ct,e7 as mt,bJ as bt,dZ as k,dV as ft,dW as vt,cy as ht,a6 as yt,cb as wt,cc as gt,g4 as xt,dT as St,cf as Nt}from"./index-CyMr76_m.js";import{formDataChildren as $t,FormDataPropertyView as Vt}from"./2606e654-BU0arLul.js";import{fixOldInputCompData as Et}from"./6273459c-DX34gMfV.js";function F(t,e){return e===void 0&&(e=15),+parseFloat(Number(t).toPrecision(e))}function d(t){var e=t.toString().split(/[eE]/),a=(e[0].split(".")[1]||"").length-+(e[1]||0);return a>0?a:0}function w(t){if(t.toString().indexOf("e")===-1)return Number(t.toString().replace(".",""));var e=d(t);return e>0?F(Number(t)*Math.pow(10,e)):Number(t)}function E(t){q&&(t>Number.MAX_SAFE_INTEGER||t<Number.MIN_SAFE_INTEGER)&&console.warn(t+" is beyond boundary when transfer to integer, the results may not be accurate")}function S(t){return function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];var r=e[0],u=e.slice(1);return u.reduce(function(s,p){return t(s,p)},r)}}var f=S(function(t,e){var a=w(t),r=w(e),u=d(t)+d(e),s=a*r;return E(s),s/Math.pow(10,u)}),Mt=S(function(t,e){var a=Math.pow(10,Math.max(d(t),d(e)));return(f(t,a)+f(e,a))/a}),It=S(function(t,e){var a=Math.pow(10,Math.max(d(t),d(e)));return(f(t,a)-f(e,a))/a}),P=S(function(t,e){var a=w(t),r=w(e);return E(a),E(r),f(a/r,F(Math.pow(10,d(e)-d(t))))});function Ft(t,e){var a=Math.pow(10,e),r=P(Math.round(Math.abs(f(t,a))),a);return t<0&&r!==0&&(r=f(r,-1)),r}var q=!0;function Ct(t){t===void 0&&(t=!0),q=t}var M={strip:F,plus:Mt,minus:It,times:f,divide:P,round:Ft,digitLength:d,float2Fixed:w,enableBoundaryChecking:Ct};const kt=t=>yt`
    border-radius: ${t.radius};
    border-width:${t.borderWidth} !important;
    // still use antd style when disabled
    &:not(.ant-input-number-disabled) {
      color: ${t.text};
      background-color: ${t.background};
      border-color: ${t.border};
      //margin: ${t.margin};	
      padding: 0;	
      width: ${wt(t.margin)};
      &.ant-input-number-focused {
        border-color: ${t.accent};
      }

      &:hover {
        border-color: ${t.accent};
      }

      &::-webkit-input-placeholder {
        color: ${t.text};
        opacity: 0.4;
      }
      .ant-input-number {	
        margin: 0;	
        
      }	
      .ant-input-number-input {	
        margin: 0;	
        padding: ${t.padding};	
        height: ${gt(t.margin)};	
        color:${t.text};
        font-family:${t.fontFamily} !important;
        font-weight:${t.textWeight} !important;
        font-size:${t.textSize} !important;
        font-style:${t.fontStyle} !important;
      }

      .ant-input-number-handler-wrap {
        background-color: ${t.background};
        border-radius: 0 ${t.radius} ${t.radius} 0;

        .ant-input-number-handler span {
          color: ${t.text};
          opacity: 0.45;

          &:hover {
            opacity: 1;
          }
        }

        .ant-input-number-handler-up {
          border-top-right-radius: ${t.radius};
        }

        .ant-input-number-handler-down {
          border-bottom-right-radius: ${t.radius};
        }
      }
    }
  `,Rt=A(_)`
  box-shadow: ${t=>{var e,a;return`${(e=t.$style)==null?void 0:e.boxShadow} ${(a=t.$style)==null?void 0:a.boxShadowColor}`}};
  width: 100%;
  ${t=>t.$style&&kt(t.$style)}
`,Tt=[{label:o("numberInput.standard"),value:"standard"},{label:o("numberInput.percent"),value:"percent"}];function R(t,e){const a=t.replace(/[^\d.-]/g,"");if(a){const r=Number(a);if(isFinite(r))return r}return e?Number.NaN:0}function Pt(t){const e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")}function qt(t,e,a,r,u){const s=t;if(isNaN(s))return"";let p=s.toFixed(r);switch(u&&(p=Pt(p)),a){case"standard":return p;case"percent":return p+"%"}}function Dt(t,e,a){const r=t;if(isNaN(r))return e?null:0;switch(a){case"standard":return r;case"percent":return M.divide(r,100)}}function D(t){if(t.customRule)return{validateStatus:"error",help:t.customRule};const e=t.value.value;return isNaN(e)?t.required?{validateStatus:"error",help:o("prop.required")}:{validateStatus:""}:t.max!==void 0&&e>t.max?{validateStatus:"error",help:o("validationDesc.maxValue",{value:e,max:t.max})}:t.min!==void 0&&e<t.min?{validateStatus:"error",help:o("validationDesc.minValue",{value:e,min:t.min})}:{validateStatus:""}}const T=xt(t=>{if(typeof t=="number")return t;const e=Number(t);return!t||isNaN(e)?void 0:e}),At={defaultValue:C("defaultValue"),value:B("value"),placeholder:O,disabled:U,readOnly:y,label:X,formatter:K(Tt,"standard"),step:$(L,1),controls:y.DEFAULT_TRUE,precision:W.closed(0,20,0),thousandsSeparator:y.DEFAULT_TRUE,allowNull:y,onEvent:G,viewRef:Y,style:$(x(H),{background:"transparent"}),labelStyle:x(j),prefixText:C("defaultValue"),animationStyle:x(z),prefixIcon:J,inputFieldStyle:$(x(Q),{borderWidth:"1px"}),required:y,min:T,max:T,customRule:Z,...$t},_t=t=>{const e=l.useRef(null),a=t.defaultValue.value;l.useEffect(()=>{let n=0;a==="null"&&t.allowNull?n=NaN:isNaN(Number(a))||(n=Number(a)),t.value.onChange(n)},[a]);const r=n=>qt(n,t.allowNull,t.formatter,t.precision,t.thousandsSeparator),[u,s]=l.useState(r(t.value.value)),p=()=>{const n=t.value.value,i=R(u,t.allowNull);t.value.onChange(i),n!==i&&t.onEvent("change")};return l.useEffect(()=>{s(r(t.value.value))},[t.value.value,t.allowNull,t.formatter,t.precision,t.thousandsSeparator]),h(Rt,{ref:n=>{t.viewRef(n),e.current=n},value:u,controls:t.controls,step:t.step,disabled:t.disabled,readOnly:t.readOnly,placeholder:t.placeholder,stringMode:!0,precision:t.precision,$style:t.inputFieldStyle,prefix:St(t.prefixIcon)?t.prefixIcon:t.prefixText.value,onPressEnter:()=>{p(),t.onEvent("submit")},onChangeCapture:n=>{var i;s((((i=n.target.value)==null?void 0:i.toString())??"").replace("。","."))},onStep:(n,i)=>{const g=M.plus(R(u),M.times(i.type==="up"?1:-1,Number(i.offset)));t.value.onChange(g),t.onEvent("change")},onFocus:()=>{t.onEvent("focus")},onBlur:()=>{p(),t.onEvent("blur")},onKeyPress:n=>{var i;const g=u,N=(i=e.current)==null?void 0:i.selectionStart;/\d/.test(n.key)||N===0&&n.key==="-"&&!/-/.test(g)||N!==0&&t.thousandsSeparator&&n.key===","||N!==0&&t.precision>0&&(n.key==="."||n.key==="。")&&!/[.]/.test(g)||n.preventDefault()}})};let I=function(){return new tt(At,t=>t.label({required:t.required,children:h(_t,{...t}),style:t.style,labelStyle:t.labelStyle,inputFieldStyle:t.inputFieldStyle,animationStyle:t.animationStyle,...D(t)})).setPropertyViewFn(t=>v(V,{children:[v(c,{name:m.basic,children:[t.defaultValue.propertyView({label:o("prop.defaultValue")}),et(t),t.formatter.propertyView({label:o("numberInput.formatter")})]}),h(Vt,{...t}),(l.useContext(b).editorModeStatus==="logic"||l.useContext(b).editorModeStatus==="both")&&v(V,{children:[v(c,{name:m.validation,children:[at(t),t.min.propertyView({label:o("prop.minimum")}),t.max.propertyView({label:o("prop.maximum")}),t.customRule.propertyView({})]}),v(c,{name:m.interaction,children:[t.onEvent.getPropertyView(),rt(t),nt(t)]})]}),(l.useContext(b).editorModeStatus==="layout"||l.useContext(b).editorModeStatus==="both")&&t.label.getPropertyView(),(l.useContext(b).editorModeStatus==="logic"||l.useContext(b).editorModeStatus==="both")&&v(c,{name:m.advanced,children:[t.step.propertyView({label:o("numberInput.step")}),t.precision.propertyView({label:o("numberInput.precision")}),t.prefixIcon.propertyView({label:o("button.prefixIcon")}),t.prefixText.propertyView({label:o("button.prefixText")}),t.allowNull.propertyView({label:o("numberInput.allowNull")}),t.thousandsSeparator.propertyView({label:o("numberInput.thousandsSeparator")}),t.controls.propertyView({label:o("numberInput.controls")}),ot(t)]}),(l.useContext(b).editorModeStatus==="layout"||l.useContext(b).editorModeStatus==="both")&&v(V,{children:[h(c,{name:m.style,children:t.style.getPropertyView()}),h(c,{name:m.labelStyle,children:t.labelStyle.getPropertyView()}),h(c,{name:m.inputFieldStyle,children:t.inputFieldStyle.getPropertyView()}),h(c,{name:m.animationStyle,hasTooltip:!0,children:t.animationStyle.getPropertyView()})]})]})).build()}();I=Nt(I,Et);const Bt=lt(I,it([ut,st,dt,pt,ct,mt])),Kt=bt(Bt,[k({name:"value",desc:o("export.inputValueDesc"),depKeys:["value","allowNull","formatter"],func:t=>Dt(t.value,t.allowNull,t.formatter)}),ft,vt,k({name:"invalid",desc:o("export.invalidDesc"),depKeys:["value","required","min","max","allowNull","customRule"],func:t=>D({...t,value:{value:t.value}}).validateStatus!==""}),...ht]);export{Kt as NumberInputComp};
