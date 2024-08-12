import{z as le,T as ie,j as se,_ as ue,$ as ce}from"./4eadd801-YNcx5bN-.js";import{dK as g,fd as q,fz as Q,fA as Z,a0 as b,d as L}from"./index-CyMr76_m.js";import{b as de,P as fe,u as ge,r as pe}from"./51a4d84d-1DReg7oU.js";import"./209c69f0-Co7_eCID.js";import"./2f65199c-n-_s74j7.js";import"./2c033cdc-DMrTp36_.js";const P="TILL_NOW";g.extend(q);g.extend(Q);g.extend(Z);const C={year:0,month:1,day:2,hour:3,minute:4,second:5};function me(t,n,e,a,r,o,i){const s=[],S=n.getFullYear(),m=n.getMonth()+1,v=n.getDate(),w=n.getHours(),l=n.getMinutes(),d=n.getSeconds(),p=e.getFullYear(),N=e.getMonth()+1,T=e.getDate(),_=e.getHours(),j=e.getMinutes(),H=e.getSeconds(),y=C[a],R=parseInt(t[0]),A=g(K([t[0],t[1],"1"])),W=parseInt(t[1]),h=parseInt(t[2]),f=parseInt(t[3]),O=parseInt(t[4]),I=R===S,V=R===p,D=I&&W===m,k=V&&W===N,z=D&&h===v,B=k&&h===T,G=z&&f===w,J=B&&f===_,ne=G&&O===l,oe=J&&O===j,M=(c,u,$)=>{let x=[];for(let Y=c;Y<=u;Y++)x.push(Y);const re=t.slice(0,C[$]),E=o==null?void 0:o[$];return E&&typeof E=="function"&&(x=x.filter(Y=>E(Y,{get date(){const ae=[...re,Y.toString()];return K(ae)}}))),x};if(y>=C.year){const c=M(S,p,"year");s.push(c.map(u=>({label:r("year",u),value:u.toString()})))}if(y>=C.month){const c=M(I?m:1,V?N:12,"month");s.push(c.map(u=>({label:r("month",u),value:u.toString()})))}if(y>=C.day){const c=D?v:1,u=k?T:A.daysInMonth(),$=M(c,u,"day");s.push($.map(x=>({label:r("day",x),value:x.toString()})))}if(y>=C.hour){const c=M(z?w:0,B?_:23,"hour");s.push(c.map(u=>({label:r("hour",u),value:u.toString()})))}if(y>=C.minute){const c=M(G?l:0,J?j:59,"minute");s.push(c.map(u=>({label:r("minute",u),value:u.toString()})))}if(y>=C.second){const c=M(ne?d:0,oe?H:59,"second");s.push(c.map(u=>({label:r("second",u),value:u.toString()})))}if(i&&(s[0].push({label:r("now",null),value:P}),P===(t==null?void 0:t[0])))for(let c=1;c<s.length;c+=1)s[c]=[];return s}function ve(t){return t?[t.getFullYear().toString(),(t.getMonth()+1).toString(),t.getDate().toString(),t.getHours().toString(),t.getMinutes().toString(),t.getSeconds().toString()]:[]}function K(t){var n,e,a,r,o,i;const s=(n=t[0])!==null&&n!==void 0?n:"1900",S=(e=t[1])!==null&&e!==void 0?e:"1",m=(a=t[2])!==null&&a!==void 0?a:"1",v=(r=t[3])!==null&&r!==void 0?r:"0",w=(o=t[4])!==null&&o!==void 0?o:"0",l=(i=t[5])!==null&&i!==void 0?i:"0";return new Date(parseInt(s),parseInt(S)-1,parseInt(m),parseInt(v),parseInt(w),parseInt(l))}g.extend(q);g.extend(Q);g.extend(Z);const F={year:0,week:1,"week-day":2};function he(t,n,e,a,r,o){const i=[],s=n.getFullYear(),S=e.getFullYear(),m=F[a],v=parseInt(t[0]),w=v===s,l=v===S,d=g(n),p=g(e),N=d.isoWeek(),T=p.isoWeek(),_=d.isoWeekday(),j=p.isoWeekday(),H=parseInt(t[1]),y=w&&H===N,R=l&&H===T,A=g(`${v}-01-01`).isoWeeksInYear(),W=(h,f,O)=>{let I=[];for(let k=h;k<=f;k++)I.push(k);const V=t.slice(0,F[O]),D=o==null?void 0:o[O];return D&&typeof D=="function"&&(I=I.filter(k=>D(k,{get date(){const z=[...V,k.toString()];return ee(z)}}))),I};if(m>=F.year){const h=W(s,S,"year");i.push(h.map(f=>({label:r("year",f),value:f.toString()})))}if(m>=F.week){const h=W(w?N:1,l?T:A,"week");i.push(h.map(f=>({label:r("week",f),value:f.toString()})))}if(m>=F["week-day"]){const h=W(y?_:1,R?j:7,"week-day");i.push(h.map(f=>({label:r("week-day",f),value:f.toString()})))}return i}function Se(t){if(!t)return[];const n=g(t);return[n.isoWeekYear().toString(),n.isoWeek().toString(),n.isoWeekday().toString()]}function ee(t){var n,e,a;const r=(n=t[0])!==null&&n!==void 0?n:"1900",o=(e=t[1])!==null&&e!==void 0?e:"1",i=(a=t[2])!==null&&a!==void 0?a:"1";return g().year(parseInt(r)).isoWeek(parseInt(o)).isoWeekday(parseInt(i)).hour(0).minute(0).second(0).toDate()}const we={year:1,month:2,day:3,hour:4,minute:5,second:6},ke=(t,n)=>{if(n.includes("week"))return Se(t);{const e=n;return ve(t).slice(0,we[e])}},U=(t,n)=>{if((t==null?void 0:t[0])===P){const e=new Date;return e.tillNow=!0,e}return n.includes("week")?ee(t):K(t)},ye=(t,n,e,a,r,o,i)=>a.startsWith("week")?he(t,n,e,a,r,o):me(t,n,e,a,r,o,i);function Ce(t){const{locale:n}=ge();return b.useCallback((e,a)=>{if(t)return t(e,a);switch(e){case"minute":case"second":case"hour":return("0"+a.toString()).slice(-2);case"now":return n.DatePicker.tillNow;default:return a.toString()}},[t])}const X=new Date().getFullYear(),be={min:new Date(new Date().setFullYear(X-10)),max:new Date(new Date().setFullYear(X+10)),precision:"day",defaultValue:null},te=b.forwardRef((t,n)=>{const e=le(be,t),{renderLabel:a}=e,[r,o]=ie({value:e.value,defaultValue:e.defaultValue,onChange:l=>{var d;l!==null&&((d=e.onConfirm)===null||d===void 0||d.call(e,l))}}),i=b.useMemo(()=>new Date,[]),s=Ce(a),S=b.useMemo(()=>{let l=r??i;return l.tillNow?[P]:(l=new Date(de(l.getTime(),e.min.getTime(),e.max.getTime())),ke(l,e.precision))},[r,e.precision,e.min,e.max]),m=b.useCallback(l=>{const d=U(l,e.precision);o(d,!0)},[o,e.precision]),v=se(l=>{var d;const p=U(l,e.precision);(d=e.onSelect)===null||d===void 0||d.call(e,p)}),w=b.useCallback(l=>ye(l,e.min,e.max,e.precision,s,e.filter,e.tillNow),[e.min,e.max,e.precision,s,e.tillNow]);return ue(e,L(fe,{ref:n,columns:w,value:S,onCancel:e.onCancel,onClose:e.onClose,closeOnMaskClick:e.closeOnMaskClick,visible:e.visible,confirmText:e.confirmText,cancelText:e.cancelText,onConfirm:m,onSelect:v,getContainer:e.getContainer,loading:e.loading,loadingContent:e.loadingContent,afterShow:e.afterShow,afterClose:e.afterClose,onClick:e.onClick,title:e.title,stopPropagation:e.stopPropagation,mouseWheel:e.mouseWheel,destroyOnClose:e.destroyOnClose,forceRender:e.forceRender,children:(l,d)=>{var p;return(p=e.children)===null||p===void 0?void 0:p.call(e,r,d)}}))});function Ie(t){return new Promise(n=>{const e=pe(L(()=>{const[a,r]=b.useState(!1);return b.useEffect(()=>{r(!0)},[]),L(te,{...Object.assign({},t,{visible:a,onConfirm:o=>{var i;(i=t.onConfirm)===null||i===void 0||i.call(t,o),n(o)},onClose:()=>{var o;(o=t.onClose)===null||o===void 0||o.call(t),r(!1),n(null)},afterClose:()=>{var o;(o=t.afterClose)===null||o===void 0||o.call(t),e()}})})},{}))})}const xe=ce(te,{prompt:Ie,DATE_NOW:P}),Oe=Object.freeze(Object.defineProperty({__proto__:null,default:xe},Symbol.toStringTag,{value:"Module"}));export{P as T,U as a,Oe as b,ke as c,ye as g,xe as i,Ce as u};
