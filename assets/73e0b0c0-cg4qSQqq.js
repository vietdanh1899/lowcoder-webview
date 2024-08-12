import{ed as a,ee as r,a6 as d,a4 as n,cX as s,bs as i,ef as c,cf as l,cP as b,cQ as u,cR as $,cS as g}from"./index-CyMr76_m.js";function p(o){const t=a(o.background),e=r(o.background);return d`
    &&& {
      border-radius: ${o.radius};
      border-width:${o.borderWidth};
      margin: ${o.margin};
      padding: ${o.padding};
      rotate: ${o.rotation&&o.rotation};
      &:not(:disabled) {
        --antd-wave-shadow-color: ${o.border};
        border-color: ${o.border};
        color: ${o.text};
        font-size: ${o.textSize};
        font-weight: ${o.textWeight};
        font-family: ${o.fontFamily};
        font-style: ${o.fontStyle};
        text-transform:${o.textTransform};
        text-decoration:${o.textDecoration};
        background-color: ${o.background};
        border-radius: ${o.radius};
        margin: ${o.margin};
        padding: ${o.padding};

        &:hover,
        &:focus {
          color: ${o.text};
          background-color: ${t};
          border-color: ${o.border===o.background?t:o.border} !important;
        }
        &:active {
          color: ${o.text};
          background-color: ${e};
          border-color: ${o.border===o.background?e:o.border} !important;
        }
      }
    }
  `}const x=n(s)`
  ${o=>o.$buttonStyle&&p(o.$buttonStyle)}
  width: 100%;
  height: auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  gap: 6px; 
  span {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,w=n.div`
  // The button component is disabled but can respond to drag & select events
  ${o=>o.disabled&&`
    cursor: not-allowed;
    button:disabled {
      pointer-events: none;
    }
  `};
`;function f(o){return o&&(o.hasOwnProperty("backgroundColor")||o.hasOwnProperty("borderColor")||o.hasOwnProperty("color"))?{background:o.backgroundColor,border:o.borderColor,text:o.color}:o}const h=i(c),y=l(h,f),k=b([u,$,g]);export{x as Button100,w as ButtonCompWrapper,y as ButtonStyleControl,k as buttonRefMethods,p as getButtonStyle};
