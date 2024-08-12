import{ed as a,ee as n,a6 as d,a4 as t,cX as c,bs as s,ef as i,cf as l,cP as b,cQ as u,cR as g,cS as $}from"./index-CyMr76_m.js";function p(r){const e=a(r.background),o=n(r.background);return d`
    &&& {
      border-radius: ${r.radius};
      margin: ${r.margin};
      padding: ${r.padding};
      &:not(:disabled) {
        // click animation color
        --antd-wave-shadow-color: ${r.border};
        border-color: ${r.border};
        color: ${r.text};
        background-color: ${r.background};
        border-radius: ${r.radius};
        margin: ${r.margin};
        padding: ${r.padding};

        &:hover,
        &:focus {
          color: ${r.text};
          background-color: ${e};
          border-color: ${r.border===r.background?e:r.border};
        }

        &:active {
          color: ${r.text};
          background-color: ${o};
          border-color: ${r.border===r.background?o:r.border};
        }
      }
    }
  `}const w=t(c)`
  ${r=>r.$buttonStyle&&p(r.$buttonStyle)}
  width: 100%;
  height: auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  span {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  gap: 6px;
`,m=t.div`
  // The button component is disabled but can respond to drag & select events
  ${r=>r.disabled&&`
    cursor: not-allowed;
    button:disabled {
      pointer-events: none;
    }
  `};
`;function f(r){return r&&(r.hasOwnProperty("backgroundColor")||r.hasOwnProperty("borderColor")||r.hasOwnProperty("color"))?{background:r.backgroundColor,border:r.borderColor,text:r.color}:r}const h=s(i),v=l(h,f),x=b([u,g,$]);export{w as Button100,m as ButtonCompWrapper,v as ButtonStyleControl,x as buttonRefMethods,p as getButtonStyle};
