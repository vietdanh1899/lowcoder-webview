import{cP as k,fQ as $,cR as g,dK as n,fD as s,fR as l,b7 as d,a6 as p,fS as u,fT as b}from"./index-CyMr76_m.js";const f=(e,t,i)=>{t(e).then(()=>i("change"))},h=(e,t,i)=>{const a=t===""?void 0:t,r=n(i===""?void 0:i,s),o=n(a,s);return e&&e.isValid()&&(e.isAfter(r,"date")||e.isBefore(o,"date"))},v=(e,t)=>{const i=e===""?void 0:e,a=n(t===""?void 0:t,l),r=n(i,l);return{disabledHours:()=>{let o=[];return r.isValid()&&(o=[...o,...d.range(0,r.hour())]),a.isValid()&&(o=[...o,...d.range(a.hour()+1,24)]),o},disabledMinutes:o=>r.isValid()&&r.hour()===o?d.range(0,r.minute()):a.isValid()&&a.hour()===o?d.range(a.minute()+1,60):[],disabledSeconds:(o,c)=>r.isValid()&&r.hour()===o&&r.minute()===c?d.range(0,r.second()):a.isValid()&&a.hour()===o&&a.minute()===c?d.range(a.second()+1,60):[]}},V=e=>p`
    border-radius: ${e.radius};
    padding: ${e.padding};
    &:not(.ant-picker-disabled) {
      border-color: ${e.border};
      background-color: ${e.background};
      border-width: ${e.borderWidth};
      border-style: ${e.borderStyle};

      input {
        color: ${e.text};

        &::-webkit-input-placeholder {
          color: ${e.text};
          opacity: 0.25;
        }
      }

      &.ant-picker-focused,
      &:hover {
        border-color: ${e.accent};
      }

      .ant-picker-suffix,
      .ant-picker-clear,
      .ant-picker-separator {
        background-color: ${e.background};
        color: ${e.text==="#222222"?"#8B8FA3":u(e.text)?b(e.text,.2):e.text};
      }

      .ant-picker-clear {
        inset-inline-end: 1px;
        font-size: 16px;
      }

      .ant-picker-clear:hover {
        color: ${e.text==="#222222"?"#8B8FA3":u(e.text)?b(e.text,.1):e.text};
      }

      .ant-picker-active-bar {
        background-color: ${e.accent};
      }
    }
  `,m=e=>p`
    color: ${e.text};
    background-color: ${e.background};
    border-radius: ${e.radius};
    border-color: ${e.border};
  `,A=k([$,g]);export{V as D,v as M,A as T,h as f,f as k,m as v};
