var $i = (t, e, r) => new Promise((a, n) => {
  var i = (u) => {
    try {
      o(r.next(u));
    } catch (l) {
      n(l);
    }
  }, s = (u) => {
    try {
      o(r.throw(u));
    } catch (l) {
      n(l);
    }
  }, o = (u) => u.done ? a(u.value) : Promise.resolve(u.value).then(i, s);
  o((r = r.apply(t, e)).next());
});
import { c as hi, g as al, l as Er, e as ci, U as nl, v as il, W as ja, f as en, j as sl, at as ol, au as ul, av as ll, Y as fl } from "./9d6a94a3.js";
import { a as hl } from "./cf45a922.js";
function Xe(t) {
  "@babel/helpers - typeof";
  return Xe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Xe(t);
}
function vi(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Yi(t, e) {
  for (var r = 0; r < e.length; r++) {
    var a = e[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
  }
}
function di(t, e, r) {
  return e && Yi(t.prototype, e), r && Yi(t, r), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function io(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function St(t, e) {
  return cl(t) || vl(t, e) || so(t, e) || dl();
}
function cl(t) {
  if (Array.isArray(t))
    return t;
}
function vl(t, e) {
  var r = t == null ? null : typeof Symbol != "undefined" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var a = [], n = !0, i = !1, s, o;
    try {
      for (r = r.call(t); !(n = (s = r.next()).done) && (a.push(s.value), !(e && a.length === e)); n = !0)
        ;
    } catch (u) {
      i = !0, o = u;
    } finally {
      try {
        !n && r.return != null && r.return();
      } finally {
        if (i)
          throw o;
      }
    }
    return a;
  }
}
function so(t, e) {
  if (t) {
    if (typeof t == "string")
      return _i(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return _i(t, e);
  }
}
function _i(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, a = new Array(e); r < e; r++)
    a[r] = t[r];
  return a;
}
function dl() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gl(t, e) {
  var r = typeof Symbol != "undefined" && t[Symbol.iterator] || t["@@iterator"];
  if (!r) {
    if (Array.isArray(t) || (r = so(t)) || e && t && typeof t.length == "number") {
      r && (t = r);
      var a = 0, n = function() {
      };
      return {
        s: n,
        n: function() {
          return a >= t.length ? {
            done: !0
          } : {
            done: !1,
            value: t[a++]
          };
        },
        e: function(u) {
          throw u;
        },
        f: n
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i = !0, s = !1, o;
  return {
    s: function() {
      r = r.call(t);
    },
    n: function() {
      var u = r.next();
      return i = u.done, u;
    },
    e: function(u) {
      s = !0, o = u;
    },
    f: function() {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (s)
          throw o;
      }
    }
  };
}
var Ye = typeof window == "undefined" ? null : window, Hi = Ye ? Ye.navigator : null;
Ye && Ye.document;
var pl = Xe(""), oo = Xe({}), yl = Xe(function() {
}), ml = typeof HTMLElement == "undefined" ? "undefined" : Xe(HTMLElement), xa = function(e) {
  return e && e.instanceString && Ge(e.instanceString) ? e.instanceString() : null;
}, ve = function(e) {
  return e != null && Xe(e) == pl;
}, Ge = function(e) {
  return e != null && Xe(e) === yl;
}, Re = function(e) {
  return !pt(e) && (Array.isArray ? Array.isArray(e) : e != null && e instanceof Array);
}, Ce = function(e) {
  return e != null && Xe(e) === oo && !Re(e) && e.constructor === Object;
}, bl = function(e) {
  return e != null && Xe(e) === oo;
}, ne = function(e) {
  return e != null && Xe(e) === Xe(1) && !isNaN(e);
}, El = function(e) {
  return ne(e) && Math.floor(e) === e;
}, tn = function(e) {
  if (ml !== "undefined")
    return e != null && e instanceof HTMLElement;
}, pt = function(e) {
  return Ta(e) || uo(e);
}, Ta = function(e) {
  return xa(e) === "collection" && e._private.single;
}, uo = function(e) {
  return xa(e) === "collection" && !e._private.single;
}, gi = function(e) {
  return xa(e) === "core";
}, lo = function(e) {
  return xa(e) === "stylesheet";
}, wl = function(e) {
  return xa(e) === "event";
}, jt = function(e) {
  return e == null ? !0 : !!(e === "" || e.match(/^\s+$/));
}, xl = function(e) {
  return typeof HTMLElement == "undefined" ? !1 : e instanceof HTMLElement;
}, Tl = function(e) {
  return Ce(e) && ne(e.x1) && ne(e.x2) && ne(e.y1) && ne(e.y2);
}, Cl = function(e) {
  return bl(e) && Ge(e.then);
}, Dl = function() {
  return Hi && Hi.userAgent.match(/msie|trident|edge/i);
}, ha = function(e, r) {
  r || (r = function() {
    if (arguments.length === 1)
      return arguments[0];
    if (arguments.length === 0)
      return "undefined";
    for (var i = [], s = 0; s < arguments.length; s++)
      i.push(arguments[s]);
    return i.join("$");
  });
  var a = function n() {
    var i = this, s = arguments, o, u = r.apply(i, s), l = n.cache;
    return (o = l[u]) || (o = l[u] = e.apply(i, s)), o;
  };
  return a.cache = {}, a;
}, pi = ha(function(t) {
  return t.replace(/([A-Z])/g, function(e) {
    return "-" + e.toLowerCase();
  });
}), vn = ha(function(t) {
  return t.replace(/(-\w)/g, function(e) {
    return e[1].toUpperCase();
  });
}), fo = ha(function(t, e) {
  return t + e[0].toUpperCase() + e.substring(1);
}, function(t, e) {
  return t + "$" + e;
}), Xi = function(e) {
  return jt(e) ? e : e.charAt(0).toUpperCase() + e.substring(1);
}, He = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))", Sl = "rgb[a]?\\((" + He + "[%]?)\\s*,\\s*(" + He + "[%]?)\\s*,\\s*(" + He + "[%]?)(?:\\s*,\\s*(" + He + "))?\\)", Ll = "rgb[a]?\\((?:" + He + "[%]?)\\s*,\\s*(?:" + He + "[%]?)\\s*,\\s*(?:" + He + "[%]?)(?:\\s*,\\s*(?:" + He + "))?\\)", Al = "hsl[a]?\\((" + He + ")\\s*,\\s*(" + He + "[%])\\s*,\\s*(" + He + "[%])(?:\\s*,\\s*(" + He + "))?\\)", Ol = "hsl[a]?\\((?:" + He + ")\\s*,\\s*(?:" + He + "[%])\\s*,\\s*(?:" + He + "[%])(?:\\s*,\\s*(?:" + He + "))?\\)", Nl = "\\#[0-9a-fA-F]{3}", Il = "\\#[0-9a-fA-F]{6}", ho = function(e, r) {
  return e < r ? -1 : e > r ? 1 : 0;
}, Ml = function(e, r) {
  return -1 * ho(e, r);
}, be = Object.assign != null ? Object.assign.bind(Object) : function(t) {
  for (var e = arguments, r = 1; r < e.length; r++) {
    var a = e[r];
    if (a != null)
      for (var n = Object.keys(a), i = 0; i < n.length; i++) {
        var s = n[i];
        t[s] = a[s];
      }
  }
  return t;
}, Rl = function(e) {
  if (!(!(e.length === 4 || e.length === 7) || e[0] !== "#")) {
    var r = e.length === 4, a, n, i, s = 16;
    return r ? (a = parseInt(e[1] + e[1], s), n = parseInt(e[2] + e[2], s), i = parseInt(e[3] + e[3], s)) : (a = parseInt(e[1] + e[2], s), n = parseInt(e[3] + e[4], s), i = parseInt(e[5] + e[6], s)), [a, n, i];
  }
}, kl = function(e) {
  var r, a, n, i, s, o, u, l;
  function f(v, p, g) {
    return g < 0 && (g += 1), g > 1 && (g -= 1), g < 1 / 6 ? v + (p - v) * 6 * g : g < 1 / 2 ? p : g < 2 / 3 ? v + (p - v) * (2 / 3 - g) * 6 : v;
  }
  var h = new RegExp("^" + Al + "$").exec(e);
  if (h) {
    if (a = parseInt(h[1]), a < 0 ? a = (360 - -1 * a % 360) % 360 : a > 360 && (a = a % 360), a /= 360, n = parseFloat(h[2]), n < 0 || n > 100 || (n = n / 100, i = parseFloat(h[3]), i < 0 || i > 100) || (i = i / 100, s = h[4], s !== void 0 && (s = parseFloat(s), s < 0 || s > 1)))
      return;
    if (n === 0)
      o = u = l = Math.round(i * 255);
    else {
      var d = i < 0.5 ? i * (1 + n) : i + n - i * n, c = 2 * i - d;
      o = Math.round(255 * f(c, d, a + 1 / 3)), u = Math.round(255 * f(c, d, a)), l = Math.round(255 * f(c, d, a - 1 / 3));
    }
    r = [o, u, l, s];
  }
  return r;
}, Pl = function(e) {
  var r, a = new RegExp("^" + Sl + "$").exec(e);
  if (a) {
    r = [];
    for (var n = [], i = 1; i <= 3; i++) {
      var s = a[i];
      if (s[s.length - 1] === "%" && (n[i] = !0), s = parseFloat(s), n[i] && (s = s / 100 * 255), s < 0 || s > 255)
        return;
      r.push(Math.floor(s));
    }
    var o = n[1] || n[2] || n[3], u = n[1] && n[2] && n[3];
    if (o && !u)
      return;
    var l = a[4];
    if (l !== void 0) {
      if (l = parseFloat(l), l < 0 || l > 1)
        return;
      r.push(l);
    }
  }
  return r;
}, Bl = function(e) {
  return Gl[e.toLowerCase()];
}, Fl = function(e) {
  return (Re(e) ? e : null) || Bl(e) || Rl(e) || Pl(e) || kl(e);
}, Gl = {
  // special colour names
  transparent: [0, 0, 0, 0],
  // NB alpha === 0
  // regular colours
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  grey: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
}, co = function(e) {
  for (var r = e.map, a = e.keys, n = a.length, i = 0; i < n; i++) {
    var s = a[i];
    if (Ce(s))
      throw Error("Tried to set map with object key");
    i < a.length - 1 ? (r[s] == null && (r[s] = {}), r = r[s]) : r[s] = e.value;
  }
}, vo = function(e) {
  for (var r = e.map, a = e.keys, n = a.length, i = 0; i < n; i++) {
    var s = a[i];
    if (Ce(s))
      throw Error("Tried to get map with object key");
    if (r = r[s], r == null)
      return r;
  }
  return r;
};
function zl(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var vr = zl, na = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function Vl(t, e) {
  return e = { exports: {} }, t(e, e.exports), e.exports;
}
var Ul = typeof na == "object" && na && na.Object === Object && na, $l = Ul, Yl = typeof self == "object" && self && self.Object === Object && self, _l = $l || Yl || Function("return this")(), dn = _l, Hl = function() {
  return dn.Date.now();
}, Rn = Hl, Xl = /\s/;
function ql(t) {
  for (var e = t.length; e-- && Xl.test(t.charAt(e)); )
    ;
  return e;
}
var Wl = ql, Kl = /^\s+/;
function Zl(t) {
  return t && t.slice(0, Wl(t) + 1).replace(Kl, "");
}
var Ql = Zl, Jl = dn.Symbol, Fr = Jl, go = Object.prototype, jl = go.hasOwnProperty, ef = go.toString, jr = Fr ? Fr.toStringTag : void 0;
function tf(t) {
  var e = jl.call(t, jr), r = t[jr];
  try {
    t[jr] = void 0;
    var a = !0;
  } catch (i) {
  }
  var n = ef.call(t);
  return a && (e ? t[jr] = r : delete t[jr]), n;
}
var rf = tf, af = Object.prototype, nf = af.toString;
function sf(t) {
  return nf.call(t);
}
var of = sf, uf = "[object Null]", lf = "[object Undefined]", qi = Fr ? Fr.toStringTag : void 0;
function ff(t) {
  return t == null ? t === void 0 ? lf : uf : qi && qi in Object(t) ? rf(t) : of(t);
}
var po = ff;
function hf(t) {
  return t != null && typeof t == "object";
}
var cf = hf, vf = "[object Symbol]";
function df(t) {
  return typeof t == "symbol" || cf(t) && po(t) == vf;
}
var Ca = df, Wi = 0 / 0, gf = /^[-+]0x[0-9a-f]+$/i, pf = /^0b[01]+$/i, yf = /^0o[0-7]+$/i, mf = parseInt;
function bf(t) {
  if (typeof t == "number")
    return t;
  if (Ca(t))
    return Wi;
  if (vr(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = vr(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Ql(t);
  var r = pf.test(t);
  return r || yf.test(t) ? mf(t.slice(2), r ? 2 : 8) : gf.test(t) ? Wi : +t;
}
var Ki = bf, Ef = "Expected a function", wf = Math.max, xf = Math.min;
function Tf(t, e, r) {
  var a, n, i, s, o, u, l = 0, f = !1, h = !1, d = !0;
  if (typeof t != "function")
    throw new TypeError(Ef);
  e = Ki(e) || 0, vr(r) && (f = !!r.leading, h = "maxWait" in r, i = h ? wf(Ki(r.maxWait) || 0, e) : i, d = "trailing" in r ? !!r.trailing : d);
  function c(S) {
    var E = a, x = n;
    return a = n = void 0, l = S, s = t.apply(x, E), s;
  }
  function v(S) {
    return l = S, o = setTimeout(y, e), f ? c(S) : s;
  }
  function p(S) {
    var E = S - u, x = S - l, w = e - E;
    return h ? xf(w, i - x) : w;
  }
  function g(S) {
    var E = S - u, x = S - l;
    return u === void 0 || E >= e || E < 0 || h && x >= i;
  }
  function y() {
    var S = Rn();
    if (g(S))
      return b(S);
    o = setTimeout(y, p(S));
  }
  function b(S) {
    return o = void 0, d && a ? c(S) : (a = n = void 0, s);
  }
  function m() {
    o !== void 0 && clearTimeout(o), l = 0, a = u = n = o = void 0;
  }
  function T() {
    return o === void 0 ? s : b(Rn());
  }
  function C() {
    var S = Rn(), E = g(S);
    if (a = arguments, n = this, u = S, E) {
      if (o === void 0)
        return v(u);
      if (h)
        return clearTimeout(o), o = setTimeout(y, e), c(u);
    }
    return o === void 0 && (o = setTimeout(y, e)), s;
  }
  return C.cancel = m, C.flush = T, C;
}
var gn = Tf, kn = Ye ? Ye.performance : null, yo = kn && kn.now ? function() {
  return kn.now();
} : function() {
  return Date.now();
}, Cf = function() {
  if (Ye) {
    if (Ye.requestAnimationFrame)
      return function(t) {
        Ye.requestAnimationFrame(t);
      };
    if (Ye.mozRequestAnimationFrame)
      return function(t) {
        Ye.mozRequestAnimationFrame(t);
      };
    if (Ye.webkitRequestAnimationFrame)
      return function(t) {
        Ye.webkitRequestAnimationFrame(t);
      };
    if (Ye.msRequestAnimationFrame)
      return function(t) {
        Ye.msRequestAnimationFrame(t);
      };
  }
  return function(t) {
    t && setTimeout(function() {
      t(yo());
    }, 1e3 / 60);
  };
}(), rn = function(e) {
  return Cf(e);
}, $t = yo, Nr = 9261, mo = 65599, ia = 5381, bo = function(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Nr, a = r, n; n = e.next(), !n.done; )
    a = a * mo + n.value | 0;
  return a;
}, ca = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Nr;
  return r * mo + e | 0;
}, va = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ia;
  return (r << 5) + r + e | 0;
}, Df = function(e, r) {
  return e * 2097152 + r;
}, qt = function(e) {
  return e[0] * 2097152 + e[1];
}, Ma = function(e, r) {
  return [ca(e[0], r[0]), va(e[1], r[1])];
}, Sf = function(e, r) {
  var a = {
    value: 0,
    done: !1
  }, n = 0, i = e.length, s = {
    next: function() {
      return n < i ? a.value = e[n++] : a.done = !0, a;
    }
  };
  return bo(s, r);
}, dr = function(e, r) {
  var a = {
    value: 0,
    done: !1
  }, n = 0, i = e.length, s = {
    next: function() {
      return n < i ? a.value = e.charCodeAt(n++) : a.done = !0, a;
    }
  };
  return bo(s, r);
}, Eo = function() {
  return Lf(arguments);
}, Lf = function(e) {
  for (var r, a = 0; a < e.length; a++) {
    var n = e[a];
    a === 0 ? r = dr(n) : r = dr(n, r);
  }
  return r;
}, Zi = !0, Af = console.warn != null, Of = console.trace != null, yi = Number.MAX_SAFE_INTEGER || 9007199254740991, wo = function() {
  return !0;
}, an = function() {
  return !1;
}, Qi = function() {
  return 0;
}, mi = function() {
}, ze = function(e) {
  throw new Error(e);
}, xo = function(e) {
  if (e !== void 0)
    Zi = !!e;
  else
    return Zi;
}, Ne = function(e) {
  xo() && (Af ? console.warn(e) : (console.log(e), Of && console.trace()));
}, Nf = function(e) {
  return be({}, e);
}, Pt = function(e) {
  return e == null ? e : Re(e) ? e.slice() : Ce(e) ? Nf(e) : e;
}, If = function(e) {
  return e.slice();
}, To = function(e, r) {
  for (
    // loop :)
    r = e = "";
    // b - result , a - numeric letiable
    e++ < 36;
    //
    r += e * 51 & 52 ? (
      //  return a random number or 4
      (e ^ 15 ? (
        // generate a random number from 0 to 15
        8 ^ Math.random() * (e ^ 20 ? 16 : 4)
      ) : 4).toString(16)
    ) : "-"
  )
    ;
  return r;
}, Mf = {}, Co = function() {
  return Mf;
}, tt = function(e) {
  var r = Object.keys(e);
  return function(a) {
    for (var n = {}, i = 0; i < r.length; i++) {
      var s = r[i], o = a == null ? void 0 : a[s];
      n[s] = o === void 0 ? e[s] : o;
    }
    return n;
  };
}, er = function(e, r, a) {
  for (var n = e.length - 1; n >= 0 && !(e[n] === r && (e.splice(n, 1), a)); n--)
    ;
}, bi = function(e) {
  e.splice(0, e.length);
}, Rf = function(e, r) {
  for (var a = 0; a < r.length; a++) {
    var n = r[a];
    e.push(n);
  }
}, At = function(e, r, a) {
  return a && (r = fo(a, r)), e[r];
}, Kt = function(e, r, a, n) {
  a && (r = fo(a, r)), e[r] = n;
}, kf = /* @__PURE__ */ function() {
  function t() {
    vi(this, t), this._obj = {};
  }
  return di(t, [{
    key: "set",
    value: function(r, a) {
      return this._obj[r] = a, this;
    }
  }, {
    key: "delete",
    value: function(r) {
      return this._obj[r] = void 0, this;
    }
  }, {
    key: "clear",
    value: function() {
      this._obj = {};
    }
  }, {
    key: "has",
    value: function(r) {
      return this._obj[r] !== void 0;
    }
  }, {
    key: "get",
    value: function(r) {
      return this._obj[r];
    }
  }]), t;
}(), Bt = typeof Map != "undefined" ? Map : kf, Pf = "undefined", Bf = /* @__PURE__ */ function() {
  function t(e) {
    if (vi(this, t), this._obj = /* @__PURE__ */ Object.create(null), this.size = 0, e != null) {
      var r;
      e.instanceString != null && e.instanceString() === this.instanceString() ? r = e.toArray() : r = e;
      for (var a = 0; a < r.length; a++)
        this.add(r[a]);
    }
  }
  return di(t, [{
    key: "instanceString",
    value: function() {
      return "set";
    }
  }, {
    key: "add",
    value: function(r) {
      var a = this._obj;
      a[r] !== 1 && (a[r] = 1, this.size++);
    }
  }, {
    key: "delete",
    value: function(r) {
      var a = this._obj;
      a[r] === 1 && (a[r] = 0, this.size--);
    }
  }, {
    key: "clear",
    value: function() {
      this._obj = /* @__PURE__ */ Object.create(null);
    }
  }, {
    key: "has",
    value: function(r) {
      return this._obj[r] === 1;
    }
  }, {
    key: "toArray",
    value: function() {
      var r = this;
      return Object.keys(this._obj).filter(function(a) {
        return r.has(a);
      });
    }
  }, {
    key: "forEach",
    value: function(r, a) {
      return this.toArray().forEach(r, a);
    }
  }]), t;
}(), Ur = (typeof Set == "undefined" ? "undefined" : Xe(Set)) !== Pf ? Set : Bf, pn = function(e, r) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (e === void 0 || r === void 0 || !gi(e)) {
    ze("An element must have a core reference and parameters set");
    return;
  }
  var n = r.group;
  if (n == null && (r.data && r.data.source != null && r.data.target != null ? n = "edges" : n = "nodes"), n !== "nodes" && n !== "edges") {
    ze("An element must be of type `nodes` or `edges`; you specified `" + n + "`");
    return;
  }
  this.length = 1, this[0] = this;
  var i = this._private = {
    cy: e,
    single: !0,
    // indicates this is an element
    data: r.data || {},
    // data object
    position: r.position || {
      x: 0,
      y: 0
    },
    // (x, y) position pair
    autoWidth: void 0,
    // width and height of nodes calculated by the renderer when set to special 'auto' value
    autoHeight: void 0,
    autoPadding: void 0,
    compoundBoundsClean: !1,
    // whether the compound dimensions need to be recalculated the next time dimensions are read
    listeners: [],
    // array of bound listeners
    group: n,
    // string; 'nodes' or 'edges'
    style: {},
    // properties as set by the style
    rstyle: {},
    // properties for style sent from the renderer to the core
    styleCxts: [],
    // applied style contexts from the styler
    styleKeys: {},
    // per-group keys of style property values
    removed: !0,
    // whether it's inside the vis; true if removed (set true here since we call restore)
    selected: !!r.selected,
    // whether it's selected
    selectable: r.selectable === void 0 ? !0 : !!r.selectable,
    // whether it's selectable
    locked: !!r.locked,
    // whether the element is locked (cannot be moved)
    grabbed: !1,
    // whether the element is grabbed by the mouse; renderer sets this privately
    grabbable: r.grabbable === void 0 ? !0 : !!r.grabbable,
    // whether the element can be grabbed
    pannable: r.pannable === void 0 ? n === "edges" : !!r.pannable,
    // whether the element has passthrough panning enabled
    active: !1,
    // whether the element is active from user interaction
    classes: new Ur(),
    // map ( className => true )
    animation: {
      // object for currently-running animations
      current: [],
      queue: []
    },
    rscratch: {},
    // object in which the renderer can store information
    scratch: r.scratch || {},
    // scratch objects
    edges: [],
    // array of connected edges
    children: [],
    // array of children
    parent: r.parent && r.parent.isNode() ? r.parent : null,
    // parent ref
    traversalCache: {},
    // cache of output of traversal functions
    backgrounding: !1,
    // whether background images are loading
    bbCache: null,
    // cache of the current bounding box
    bbCacheShift: {
      x: 0,
      y: 0
    },
    // shift applied to cached bb to be applied on next get
    bodyBounds: null,
    // bounds cache of element body, w/o overlay
    overlayBounds: null,
    // bounds cache of element body, including overlay
    labelBounds: {
      // bounds cache of labels
      all: null,
      source: null,
      target: null,
      main: null
    },
    arrowBounds: {
      // bounds cache of edge arrows
      source: null,
      target: null,
      "mid-source": null,
      "mid-target": null
    }
  };
  if (i.position.x == null && (i.position.x = 0), i.position.y == null && (i.position.y = 0), r.renderedPosition) {
    var s = r.renderedPosition, o = e.pan(), u = e.zoom();
    i.position = {
      x: (s.x - o.x) / u,
      y: (s.y - o.y) / u
    };
  }
  var l = [];
  Re(r.classes) ? l = r.classes : ve(r.classes) && (l = r.classes.split(/\s+/));
  for (var f = 0, h = l.length; f < h; f++) {
    var d = l[f];
    !d || d === "" || i.classes.add(d);
  }
  this.createEmitter();
  var c = r.style || r.css;
  c && (Ne("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead."), this.style(c)), (a === void 0 || a) && this.restore();
}, Ji = function(e) {
  return e = {
    bfs: e.bfs || !e.dfs,
    dfs: e.dfs || !e.bfs
  }, function(a, n, i) {
    var s;
    Ce(a) && !pt(a) && (s = a, a = s.roots || s.root, n = s.visit, i = s.directed), i = arguments.length === 2 && !Ge(n) ? n : i, n = Ge(n) ? n : function() {
    };
    for (var o = this._private.cy, u = a = ve(a) ? this.filter(a) : a, l = [], f = [], h = {}, d = {}, c = {}, v = 0, p, g = this.byGroup(), y = g.nodes, b = g.edges, m = 0; m < u.length; m++) {
      var T = u[m], C = T.id();
      T.isNode() && (l.unshift(T), e.bfs && (c[C] = !0, f.push(T)), d[C] = 0);
    }
    for (var S = function() {
      var I = e.bfs ? l.shift() : l.pop(), O = I.id();
      if (e.dfs) {
        if (c[O])
          return "continue";
        c[O] = !0, f.push(I);
      }
      var M = d[O], R = h[O], k = R != null ? R.source() : null, P = R != null ? R.target() : null, B = R == null ? void 0 : I.same(k) ? P[0] : k[0], V = void 0;
      if (V = n(I, R, B, v++, M), V === !0)
        return p = I, "break";
      if (V === !1)
        return "break";
      for (var F = I.connectedEdges().filter(function(U) {
        return (!i || U.source().same(I)) && b.has(U);
      }), G = 0; G < F.length; G++) {
        var Y = F[G], _ = Y.connectedNodes().filter(function(U) {
          return !U.same(I) && y.has(U);
        }), q = _.id();
        _.length !== 0 && !c[q] && (_ = _[0], l.push(_), e.bfs && (c[q] = !0, f.push(_)), h[q] = Y, d[q] = d[O] + 1);
      }
    }; l.length !== 0; ) {
      var E = S();
      if (E !== "continue" && E === "break")
        break;
    }
    for (var x = o.collection(), w = 0; w < f.length; w++) {
      var D = f[w], L = h[D.id()];
      L != null && x.push(L), x.push(D);
    }
    return {
      path: o.collection(x),
      found: o.collection(p)
    };
  };
}, da = {
  breadthFirstSearch: Ji({
    bfs: !0
  }),
  depthFirstSearch: Ji({
    dfs: !0
  })
};
da.bfs = da.breadthFirstSearch;
da.dfs = da.depthFirstSearch;
var Ff = Vl(function(t, e) {
  (function() {
    var r, a, n, i, s, o, u, l, f, h, d, c, v, p, g;
    n = Math.floor, h = Math.min, a = function(y, b) {
      return y < b ? -1 : y > b ? 1 : 0;
    }, f = function(y, b, m, T, C) {
      var S;
      if (m == null && (m = 0), C == null && (C = a), m < 0)
        throw new Error("lo must be non-negative");
      for (T == null && (T = y.length); m < T; )
        S = n((m + T) / 2), C(b, y[S]) < 0 ? T = S : m = S + 1;
      return [].splice.apply(y, [m, m - m].concat(b)), b;
    }, o = function(y, b, m) {
      return m == null && (m = a), y.push(b), p(y, 0, y.length - 1, m);
    }, s = function(y, b) {
      var m, T;
      return b == null && (b = a), m = y.pop(), y.length ? (T = y[0], y[0] = m, g(y, 0, b)) : T = m, T;
    }, l = function(y, b, m) {
      var T;
      return m == null && (m = a), T = y[0], y[0] = b, g(y, 0, m), T;
    }, u = function(y, b, m) {
      var T;
      return m == null && (m = a), y.length && m(y[0], b) < 0 && (T = [y[0], b], b = T[0], y[0] = T[1], g(y, 0, m)), b;
    }, i = function(y, b) {
      var m, T, C, S, E, x;
      for (b == null && (b = a), S = function() {
        x = [];
        for (var w = 0, D = n(y.length / 2); 0 <= D ? w < D : w > D; 0 <= D ? w++ : w--)
          x.push(w);
        return x;
      }.apply(this).reverse(), E = [], T = 0, C = S.length; T < C; T++)
        m = S[T], E.push(g(y, m, b));
      return E;
    }, v = function(y, b, m) {
      var T;
      if (m == null && (m = a), T = y.indexOf(b), T !== -1)
        return p(y, 0, T, m), g(y, T, m);
    }, d = function(y, b, m) {
      var T, C, S, E, x;
      if (m == null && (m = a), C = y.slice(0, b), !C.length)
        return C;
      for (i(C, m), x = y.slice(b), S = 0, E = x.length; S < E; S++)
        T = x[S], u(C, T, m);
      return C.sort(m).reverse();
    }, c = function(y, b, m) {
      var T, C, S, E, x, w, D, L, A;
      if (m == null && (m = a), b * 10 <= y.length) {
        if (S = y.slice(0, b).sort(m), !S.length)
          return S;
        for (C = S[S.length - 1], D = y.slice(b), E = 0, w = D.length; E < w; E++)
          T = D[E], m(T, C) < 0 && (f(S, T, 0, null, m), S.pop(), C = S[S.length - 1]);
        return S;
      }
      for (i(y, m), A = [], x = 0, L = h(b, y.length); 0 <= L ? x < L : x > L; 0 <= L ? ++x : --x)
        A.push(s(y, m));
      return A;
    }, p = function(y, b, m, T) {
      var C, S, E;
      for (T == null && (T = a), C = y[m]; m > b; ) {
        if (E = m - 1 >> 1, S = y[E], T(C, S) < 0) {
          y[m] = S, m = E;
          continue;
        }
        break;
      }
      return y[m] = C;
    }, g = function(y, b, m) {
      var T, C, S, E, x;
      for (m == null && (m = a), C = y.length, x = b, S = y[b], T = 2 * b + 1; T < C; )
        E = T + 1, E < C && !(m(y[T], y[E]) < 0) && (T = E), y[b] = y[T], b = T, T = 2 * b + 1;
      return y[b] = S, p(y, x, b, m);
    }, r = function() {
      y.push = o, y.pop = s, y.replace = l, y.pushpop = u, y.heapify = i, y.updateItem = v, y.nlargest = d, y.nsmallest = c;
      function y(b) {
        this.cmp = b != null ? b : a, this.nodes = [];
      }
      return y.prototype.push = function(b) {
        return o(this.nodes, b, this.cmp);
      }, y.prototype.pop = function() {
        return s(this.nodes, this.cmp);
      }, y.prototype.peek = function() {
        return this.nodes[0];
      }, y.prototype.contains = function(b) {
        return this.nodes.indexOf(b) !== -1;
      }, y.prototype.replace = function(b) {
        return l(this.nodes, b, this.cmp);
      }, y.prototype.pushpop = function(b) {
        return u(this.nodes, b, this.cmp);
      }, y.prototype.heapify = function() {
        return i(this.nodes, this.cmp);
      }, y.prototype.updateItem = function(b) {
        return v(this.nodes, b, this.cmp);
      }, y.prototype.clear = function() {
        return this.nodes = [];
      }, y.prototype.empty = function() {
        return this.nodes.length === 0;
      }, y.prototype.size = function() {
        return this.nodes.length;
      }, y.prototype.clone = function() {
        var b;
        return b = new y(), b.nodes = this.nodes.slice(0), b;
      }, y.prototype.toArray = function() {
        return this.nodes.slice(0);
      }, y.prototype.insert = y.prototype.push, y.prototype.top = y.prototype.peek, y.prototype.front = y.prototype.peek, y.prototype.has = y.prototype.contains, y.prototype.copy = y.prototype.clone, y;
    }(), function(y, b) {
      return t.exports = b();
    }(this, function() {
      return r;
    });
  }).call(na);
}), Da = Ff, Gf = tt({
  root: null,
  weight: function(e) {
    return 1;
  },
  directed: !1
}), zf = {
  dijkstra: function(e) {
    if (!Ce(e)) {
      var r = arguments;
      e = {
        root: r[0],
        weight: r[1],
        directed: r[2]
      };
    }
    var a = Gf(e), n = a.root, i = a.weight, s = a.directed, o = this, u = i, l = ve(n) ? this.filter(n)[0] : n[0], f = {}, h = {}, d = {}, c = this.byGroup(), v = c.nodes, p = c.edges;
    p.unmergeBy(function(M) {
      return M.isLoop();
    });
    for (var g = function(R) {
      return f[R.id()];
    }, y = function(R, k) {
      f[R.id()] = k, b.updateItem(R);
    }, b = new Da(function(M, R) {
      return g(M) - g(R);
    }), m = 0; m < v.length; m++) {
      var T = v[m];
      f[T.id()] = T.same(l) ? 0 : 1 / 0, b.push(T);
    }
    for (var C = function(R, k) {
      for (var P = (s ? R.edgesTo(k) : R.edgesWith(k)).intersect(p), B = 1 / 0, V, F = 0; F < P.length; F++) {
        var G = P[F], Y = u(G);
        (Y < B || !V) && (B = Y, V = G);
      }
      return {
        edge: V,
        dist: B
      };
    }; b.size() > 0; ) {
      var S = b.pop(), E = g(S), x = S.id();
      if (d[x] = E, E !== 1 / 0)
        for (var w = S.neighborhood().intersect(v), D = 0; D < w.length; D++) {
          var L = w[D], A = L.id(), I = C(S, L), O = E + I.dist;
          O < g(L) && (y(L, O), h[A] = {
            node: S,
            edge: I.edge
          });
        }
    }
    return {
      distanceTo: function(R) {
        var k = ve(R) ? v.filter(R)[0] : R[0];
        return d[k.id()];
      },
      pathTo: function(R) {
        var k = ve(R) ? v.filter(R)[0] : R[0], P = [], B = k, V = B.id();
        if (k.length > 0)
          for (P.unshift(k); h[V]; ) {
            var F = h[V];
            P.unshift(F.edge), P.unshift(F.node), B = F.node, V = B.id();
          }
        return o.spawn(P);
      }
    };
  }
}, Vf = {
  // kruskal's algorithm (finds min spanning tree, assuming undirected graph)
  // implemented from pseudocode from wikipedia
  kruskal: function(e) {
    e = e || function(m) {
      return 1;
    };
    for (var r = this.byGroup(), a = r.nodes, n = r.edges, i = a.length, s = new Array(i), o = a, u = function(T) {
      for (var C = 0; C < s.length; C++) {
        var S = s[C];
        if (S.has(T))
          return C;
      }
    }, l = 0; l < i; l++)
      s[l] = this.spawn(a[l]);
    for (var f = n.sort(function(m, T) {
      return e(m) - e(T);
    }), h = 0; h < f.length; h++) {
      var d = f[h], c = d.source()[0], v = d.target()[0], p = u(c), g = u(v), y = s[p], b = s[g];
      p !== g && (o.merge(d), y.merge(b), s.splice(g, 1));
    }
    return o;
  }
}, Uf = tt({
  root: null,
  goal: null,
  weight: function(e) {
    return 1;
  },
  heuristic: function(e) {
    return 0;
  },
  directed: !1
}), $f = {
  // Implemented from pseudocode from wikipedia
  aStar: function(e) {
    var r = this.cy(), a = Uf(e), n = a.root, i = a.goal, s = a.heuristic, o = a.directed, u = a.weight;
    n = r.collection(n)[0], i = r.collection(i)[0];
    var l = n.id(), f = i.id(), h = {}, d = {}, c = {}, v = new Da(function(V, F) {
      return d[V.id()] - d[F.id()];
    }), p = new Ur(), g = {}, y = {}, b = function(F, G) {
      v.push(F), p.add(G);
    }, m, T, C = function() {
      m = v.pop(), T = m.id(), p.delete(T);
    }, S = function(F) {
      return p.has(F);
    };
    b(n, l), h[l] = 0, d[l] = s(n);
    for (var E = 0; v.size() > 0; ) {
      if (C(), E++, T === f) {
        for (var x = [], w = i, D = f, L = y[D]; x.unshift(w), L != null && x.unshift(L), w = g[D], w != null; )
          D = w.id(), L = y[D];
        return {
          found: !0,
          distance: h[T],
          path: this.spawn(x),
          steps: E
        };
      }
      c[T] = !0;
      for (var A = m._private.edges, I = 0; I < A.length; I++) {
        var O = A[I];
        if (this.hasElementWithId(O.id()) && !(o && O.data("source") !== T)) {
          var M = O.source(), R = O.target(), k = M.id() !== T ? M : R, P = k.id();
          if (this.hasElementWithId(P) && !c[P]) {
            var B = h[T] + u(O);
            if (!S(P)) {
              h[P] = B, d[P] = B + s(k), b(k, P), g[P] = m, y[P] = O;
              continue;
            }
            B < h[P] && (h[P] = B, d[P] = B + s(k), g[P] = m, y[P] = O);
          }
        }
      }
    }
    return {
      found: !1,
      distance: void 0,
      path: void 0,
      steps: E
    };
  }
}, Yf = tt({
  weight: function(e) {
    return 1;
  },
  directed: !1
}), _f = {
  // Implemented from pseudocode from wikipedia
  floydWarshall: function(e) {
    for (var r = this.cy(), a = Yf(e), n = a.weight, i = a.directed, s = n, o = this.byGroup(), u = o.nodes, l = o.edges, f = u.length, h = f * f, d = function(Y) {
      return u.indexOf(Y);
    }, c = function(Y) {
      return u[Y];
    }, v = new Array(h), p = 0; p < h; p++) {
      var g = p % f, y = (p - g) / f;
      y === g ? v[p] = 0 : v[p] = 1 / 0;
    }
    for (var b = new Array(h), m = new Array(h), T = 0; T < l.length; T++) {
      var C = l[T], S = C.source()[0], E = C.target()[0];
      if (S !== E) {
        var x = d(S), w = d(E), D = x * f + w, L = s(C);
        if (v[D] > L && (v[D] = L, b[D] = w, m[D] = C), !i) {
          var A = w * f + x;
          !i && v[A] > L && (v[A] = L, b[A] = x, m[A] = C);
        }
      }
    }
    for (var I = 0; I < f; I++)
      for (var O = 0; O < f; O++)
        for (var M = O * f + I, R = 0; R < f; R++) {
          var k = O * f + R, P = I * f + R;
          v[M] + v[P] < v[k] && (v[k] = v[M] + v[P], b[k] = b[M]);
        }
    var B = function(Y) {
      return (ve(Y) ? r.filter(Y) : Y)[0];
    }, V = function(Y) {
      return d(B(Y));
    }, F = {
      distance: function(Y, _) {
        var q = V(Y), U = V(_);
        return v[q * f + U];
      },
      path: function(Y, _) {
        var q = V(Y), U = V(_), z = c(q);
        if (q === U)
          return z.collection();
        if (b[q * f + U] == null)
          return r.collection();
        var H = r.collection(), W = q, J;
        for (H.merge(z); q !== U; )
          W = q, q = b[q * f + U], J = m[W * f + q], H.merge(J), H.merge(c(q));
        return H;
      }
    };
    return F;
  }
  // floydWarshall
}, Hf = tt({
  weight: function(e) {
    return 1;
  },
  directed: !1,
  root: null
}), Xf = {
  // Implemented from pseudocode from wikipedia
  bellmanFord: function(e) {
    var r = this, a = Hf(e), n = a.weight, i = a.directed, s = a.root, o = n, u = this, l = this.cy(), f = this.byGroup(), h = f.edges, d = f.nodes, c = d.length, v = new Bt(), p = !1, g = [];
    s = l.collection(s)[0], h.unmergeBy(function(ce) {
      return ce.isLoop();
    });
    for (var y = h.length, b = function(fe) {
      var ge = v.get(fe.id());
      return ge || (ge = {}, v.set(fe.id(), ge)), ge;
    }, m = function(fe) {
      return (ve(fe) ? l.$(fe) : fe)[0];
    }, T = function(fe) {
      return b(m(fe)).dist;
    }, C = function(fe) {
      for (var ge = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s, Ae = m(fe), xe = [], we = Ae; ; ) {
        if (we == null)
          return r.spawn();
        var De = b(we), j = De.edge, N = De.pred;
        if (xe.unshift(we[0]), we.same(ge) && xe.length > 0)
          break;
        j != null && xe.unshift(j), we = N;
      }
      return u.spawn(xe);
    }, S = 0; S < c; S++) {
      var E = d[S], x = b(E);
      E.same(s) ? x.dist = 0 : x.dist = 1 / 0, x.pred = null, x.edge = null;
    }
    for (var w = !1, D = function(fe, ge, Ae, xe, we, De) {
      var j = xe.dist + De;
      j < we.dist && !Ae.same(xe.edge) && (we.dist = j, we.pred = fe, we.edge = Ae, w = !0);
    }, L = 1; L < c; L++) {
      w = !1;
      for (var A = 0; A < y; A++) {
        var I = h[A], O = I.source(), M = I.target(), R = o(I), k = b(O), P = b(M);
        D(O, M, I, k, P, R), i || D(M, O, I, P, k, R);
      }
      if (!w)
        break;
    }
    if (w)
      for (var B = [], V = 0; V < y; V++) {
        var F = h[V], G = F.source(), Y = F.target(), _ = o(F), q = b(G).dist, U = b(Y).dist;
        if (q + _ < U || !i && U + _ < q)
          if (p || (Ne("Graph contains a negative weight cycle for Bellman-Ford"), p = !0), e.findNegativeWeightCycles !== !1) {
            var z = [];
            q + _ < U && z.push(G), !i && U + _ < q && z.push(Y);
            for (var H = z.length, W = 0; W < H; W++) {
              var J = z[W], ee = [J];
              ee.push(b(J).edge);
              for (var oe = b(J).pred; ee.indexOf(oe) === -1; )
                ee.push(oe), ee.push(b(oe).edge), oe = b(oe).pred;
              ee = ee.slice(ee.indexOf(oe));
              for (var me = ee[0].id(), te = 0, ie = 2; ie < ee.length; ie += 2)
                ee[ie].id() < me && (me = ee[ie].id(), te = ie);
              ee = ee.slice(te).concat(ee.slice(0, te)), ee.push(ee[0]);
              var ue = ee.map(function(ce) {
                return ce.id();
              }).join(",");
              B.indexOf(ue) === -1 && (g.push(u.spawn(ee)), B.push(ue));
            }
          } else
            break;
      }
    return {
      distanceTo: T,
      pathTo: C,
      hasNegativeWeightCycle: p,
      negativeWeightCycles: g
    };
  }
  // bellmanFord
}, qf = Math.sqrt(2), Wf = function(e, r, a) {
  a.length === 0 && ze("Karger-Stein must be run on a connected (sub)graph");
  for (var n = a[e], i = n[1], s = n[2], o = r[i], u = r[s], l = a, f = l.length - 1; f >= 0; f--) {
    var h = l[f], d = h[1], c = h[2];
    (r[d] === o && r[c] === u || r[d] === u && r[c] === o) && l.splice(f, 1);
  }
  for (var v = 0; v < l.length; v++) {
    var p = l[v];
    p[1] === u ? (l[v] = p.slice(), l[v][1] = o) : p[2] === u && (l[v] = p.slice(), l[v][2] = o);
  }
  for (var g = 0; g < r.length; g++)
    r[g] === u && (r[g] = o);
  return l;
}, Pn = function(e, r, a, n) {
  for (; a > n; ) {
    var i = Math.floor(Math.random() * r.length);
    r = Wf(i, e, r), a--;
  }
  return r;
}, Kf = {
  // Computes the minimum cut of an undirected graph
  // Returns the correct answer with high probability
  kargerStein: function() {
    var e = this, r = this.byGroup(), a = r.nodes, n = r.edges;
    n.unmergeBy(function(P) {
      return P.isLoop();
    });
    var i = a.length, s = n.length, o = Math.ceil(Math.pow(Math.log(i) / Math.LN2, 2)), u = Math.floor(i / qf);
    if (i < 2) {
      ze("At least 2 nodes are required for Karger-Stein algorithm");
      return;
    }
    for (var l = [], f = 0; f < s; f++) {
      var h = n[f];
      l.push([f, a.indexOf(h.source()), a.indexOf(h.target())]);
    }
    for (var d = 1 / 0, c = [], v = new Array(i), p = new Array(i), g = new Array(i), y = function(B, V) {
      for (var F = 0; F < i; F++)
        V[F] = B[F];
    }, b = 0; b <= o; b++) {
      for (var m = 0; m < i; m++)
        p[m] = m;
      var T = Pn(p, l.slice(), i, u), C = T.slice();
      y(p, g);
      var S = Pn(p, T, u, 2), E = Pn(g, C, u, 2);
      S.length <= E.length && S.length < d ? (d = S.length, c = S, y(p, v)) : E.length <= S.length && E.length < d && (d = E.length, c = E, y(g, v));
    }
    for (var x = this.spawn(c.map(function(P) {
      return n[P[0]];
    })), w = this.spawn(), D = this.spawn(), L = v[0], A = 0; A < v.length; A++) {
      var I = v[A], O = a[A];
      I === L ? w.merge(O) : D.merge(O);
    }
    var M = function(B) {
      var V = e.spawn();
      return B.forEach(function(F) {
        V.merge(F), F.connectedEdges().forEach(function(G) {
          e.contains(G) && !x.contains(G) && V.merge(G);
        });
      }), V;
    }, R = [M(w), M(D)], k = {
      cut: x,
      components: R,
      // n.b. partitions are included to be compatible with the old api spec
      // (could be removed in a future major version)
      partition1: w,
      partition2: D
    };
    return k;
  }
}, Zf = function(e) {
  return {
    x: e.x,
    y: e.y
  };
}, yn = function(e, r, a) {
  return {
    x: e.x * r + a.x,
    y: e.y * r + a.y
  };
}, Do = function(e, r, a) {
  return {
    x: (e.x - a.x) / r,
    y: (e.y - a.y) / r
  };
}, Ir = function(e) {
  return {
    x: e[0],
    y: e[1]
  };
}, Qf = function(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = 1 / 0, i = r; i < a; i++) {
    var s = e[i];
    isFinite(s) && (n = Math.min(s, n));
  }
  return n;
}, Jf = function(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = -1 / 0, i = r; i < a; i++) {
    var s = e[i];
    isFinite(s) && (n = Math.max(s, n));
  }
  return n;
}, jf = function(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = 0, i = 0, s = r; s < a; s++) {
    var o = e[s];
    isFinite(o) && (n += o, i++);
  }
  return n / i;
}, eh = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0;
  n ? e = e.slice(r, a) : (a < e.length && e.splice(a, e.length - a), r > 0 && e.splice(0, r));
  for (var o = 0, u = e.length - 1; u >= 0; u--) {
    var l = e[u];
    s ? isFinite(l) || (e[u] = -1 / 0, o++) : e.splice(u, 1);
  }
  i && e.sort(function(d, c) {
    return d - c;
  });
  var f = e.length, h = Math.floor(f / 2);
  return f % 2 !== 0 ? e[h + 1 + o] : (e[h - 1 + o] + e[h + o]) / 2;
}, th = function(e) {
  return Math.PI * e / 180;
}, Ra = function(e, r) {
  return Math.atan2(r, e) - Math.PI / 2;
}, Ei = Math.log2 || function(t) {
  return Math.log(t) / Math.log(2);
}, So = function(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}, gr = function(e, r) {
  return Math.sqrt(ur(e, r));
}, ur = function(e, r) {
  var a = r.x - e.x, n = r.y - e.y;
  return a * a + n * n;
}, rh = function(e) {
  for (var r = e.length, a = 0, n = 0; n < r; n++)
    a += e[n];
  for (var i = 0; i < r; i++)
    e[i] = e[i] / a;
  return e;
}, Ke = function(e, r, a, n) {
  return (1 - n) * (1 - n) * e + 2 * (1 - n) * n * r + n * n * a;
}, Rr = function(e, r, a, n) {
  return {
    x: Ke(e.x, r.x, a.x, n),
    y: Ke(e.y, r.y, a.y, n)
  };
}, ah = function(e, r, a, n) {
  var i = {
    x: r.x - e.x,
    y: r.y - e.y
  }, s = gr(e, r), o = {
    x: i.x / s,
    y: i.y / s
  };
  return a = a == null ? 0 : a, n = n != null ? n : a * s, {
    x: e.x + o.x * n,
    y: e.y + o.y * n
  };
}, ga = function(e, r, a) {
  return Math.max(e, Math.min(a, r));
}, gt = function(e) {
  if (e == null)
    return {
      x1: 1 / 0,
      y1: 1 / 0,
      x2: -1 / 0,
      y2: -1 / 0,
      w: 0,
      h: 0
    };
  if (e.x1 != null && e.y1 != null) {
    if (e.x2 != null && e.y2 != null && e.x2 >= e.x1 && e.y2 >= e.y1)
      return {
        x1: e.x1,
        y1: e.y1,
        x2: e.x2,
        y2: e.y2,
        w: e.x2 - e.x1,
        h: e.y2 - e.y1
      };
    if (e.w != null && e.h != null && e.w >= 0 && e.h >= 0)
      return {
        x1: e.x1,
        y1: e.y1,
        x2: e.x1 + e.w,
        y2: e.y1 + e.h,
        w: e.w,
        h: e.h
      };
  }
}, nh = function(e) {
  return {
    x1: e.x1,
    x2: e.x2,
    w: e.w,
    y1: e.y1,
    y2: e.y2,
    h: e.h
  };
}, ih = function(e) {
  e.x1 = 1 / 0, e.y1 = 1 / 0, e.x2 = -1 / 0, e.y2 = -1 / 0, e.w = 0, e.h = 0;
}, sh = function(e, r, a) {
  return {
    x1: e.x1 + r,
    x2: e.x2 + r,
    y1: e.y1 + a,
    y2: e.y2 + a,
    w: e.w,
    h: e.h
  };
}, Lo = function(e, r) {
  e.x1 = Math.min(e.x1, r.x1), e.x2 = Math.max(e.x2, r.x2), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, r.y1), e.y2 = Math.max(e.y2, r.y2), e.h = e.y2 - e.y1;
}, oh = function(e, r, a) {
  e.x1 = Math.min(e.x1, r), e.x2 = Math.max(e.x2, r), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, a), e.y2 = Math.max(e.y2, a), e.h = e.y2 - e.y1;
}, _a = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.x1 -= r, e.x2 += r, e.y1 -= r, e.y2 += r, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
}, Ha = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [0], a, n, i, s;
  if (r.length === 1)
    a = n = i = s = r[0];
  else if (r.length === 2)
    a = i = r[0], s = n = r[1];
  else if (r.length === 4) {
    var o = St(r, 4);
    a = o[0], n = o[1], i = o[2], s = o[3];
  }
  return e.x1 -= s, e.x2 += n, e.y1 -= a, e.y2 += i, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
}, ji = function(e, r) {
  e.x1 = r.x1, e.y1 = r.y1, e.x2 = r.x2, e.y2 = r.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1;
}, wi = function(e, r) {
  return !(e.x1 > r.x2 || r.x1 > e.x2 || e.x2 < r.x1 || r.x2 < e.x1 || e.y2 < r.y1 || r.y2 < e.y1 || e.y1 > r.y2 || r.y1 > e.y2);
}, Gr = function(e, r, a) {
  return e.x1 <= r && r <= e.x2 && e.y1 <= a && a <= e.y2;
}, uh = function(e, r) {
  return Gr(e, r.x, r.y);
}, Ao = function(e, r) {
  return Gr(e, r.x1, r.y1) && Gr(e, r.x2, r.y2);
}, Oo = function(e, r, a, n, i, s, o) {
  var u = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "auto", l = u === "auto" ? pr(i, s) : u, f = i / 2, h = s / 2;
  l = Math.min(l, f, h);
  var d = l !== f, c = l !== h, v;
  if (d) {
    var p = a - f + l - o, g = n - h - o, y = a + f - l + o, b = g;
    if (v = Zt(e, r, a, n, p, g, y, b, !1), v.length > 0)
      return v;
  }
  if (c) {
    var m = a + f + o, T = n - h + l - o, C = m, S = n + h - l + o;
    if (v = Zt(e, r, a, n, m, T, C, S, !1), v.length > 0)
      return v;
  }
  if (d) {
    var E = a - f + l - o, x = n + h + o, w = a + f - l + o, D = x;
    if (v = Zt(e, r, a, n, E, x, w, D, !1), v.length > 0)
      return v;
  }
  if (c) {
    var L = a - f - o, A = n - h + l - o, I = L, O = n + h - l + o;
    if (v = Zt(e, r, a, n, L, A, I, O, !1), v.length > 0)
      return v;
  }
  var M;
  {
    var R = a - f + l, k = n - h + l;
    if (M = sa(e, r, a, n, R, k, l + o), M.length > 0 && M[0] <= R && M[1] <= k)
      return [M[0], M[1]];
  }
  {
    var P = a + f - l, B = n - h + l;
    if (M = sa(e, r, a, n, P, B, l + o), M.length > 0 && M[0] >= P && M[1] <= B)
      return [M[0], M[1]];
  }
  {
    var V = a + f - l, F = n + h - l;
    if (M = sa(e, r, a, n, V, F, l + o), M.length > 0 && M[0] >= V && M[1] >= F)
      return [M[0], M[1]];
  }
  {
    var G = a - f + l, Y = n + h - l;
    if (M = sa(e, r, a, n, G, Y, l + o), M.length > 0 && M[0] <= G && M[1] >= Y)
      return [M[0], M[1]];
  }
  return [];
}, lh = function(e, r, a, n, i, s, o) {
  var u = o, l = Math.min(a, i), f = Math.max(a, i), h = Math.min(n, s), d = Math.max(n, s);
  return l - u <= e && e <= f + u && h - u <= r && r <= d + u;
}, fh = function(e, r, a, n, i, s, o, u, l) {
  var f = {
    x1: Math.min(a, o, i) - l,
    x2: Math.max(a, o, i) + l,
    y1: Math.min(n, u, s) - l,
    y2: Math.max(n, u, s) + l
  };
  return !(e < f.x1 || e > f.x2 || r < f.y1 || r > f.y2);
}, hh = function(e, r, a, n) {
  a -= n;
  var i = r * r - 4 * e * a;
  if (i < 0)
    return [];
  var s = Math.sqrt(i), o = 2 * e, u = (-r + s) / o, l = (-r - s) / o;
  return [u, l];
}, ch = function(e, r, a, n, i) {
  var s = 1e-5;
  e === 0 && (e = s), r /= e, a /= e, n /= e;
  var o, u, l, f, h, d, c, v;
  if (u = (3 * a - r * r) / 9, l = -(27 * n) + r * (9 * a - 2 * (r * r)), l /= 54, o = u * u * u + l * l, i[1] = 0, c = r / 3, o > 0) {
    h = l + Math.sqrt(o), h = h < 0 ? -Math.pow(-h, 1 / 3) : Math.pow(h, 1 / 3), d = l - Math.sqrt(o), d = d < 0 ? -Math.pow(-d, 1 / 3) : Math.pow(d, 1 / 3), i[0] = -c + h + d, c += (h + d) / 2, i[4] = i[2] = -c, c = Math.sqrt(3) * (-d + h) / 2, i[3] = c, i[5] = -c;
    return;
  }
  if (i[5] = i[3] = 0, o === 0) {
    v = l < 0 ? -Math.pow(-l, 1 / 3) : Math.pow(l, 1 / 3), i[0] = -c + 2 * v, i[4] = i[2] = -(v + c);
    return;
  }
  u = -u, f = u * u * u, f = Math.acos(l / Math.sqrt(f)), v = 2 * Math.sqrt(u), i[0] = -c + v * Math.cos(f / 3), i[2] = -c + v * Math.cos((f + 2 * Math.PI) / 3), i[4] = -c + v * Math.cos((f + 4 * Math.PI) / 3);
}, vh = function(e, r, a, n, i, s, o, u) {
  var l = 1 * a * a - 4 * a * i + 2 * a * o + 4 * i * i - 4 * i * o + o * o + n * n - 4 * n * s + 2 * n * u + 4 * s * s - 4 * s * u + u * u, f = 1 * 9 * a * i - 3 * a * a - 3 * a * o - 6 * i * i + 3 * i * o + 9 * n * s - 3 * n * n - 3 * n * u - 6 * s * s + 3 * s * u, h = 1 * 3 * a * a - 6 * a * i + a * o - a * e + 2 * i * i + 2 * i * e - o * e + 3 * n * n - 6 * n * s + n * u - n * r + 2 * s * s + 2 * s * r - u * r, d = 1 * a * i - a * a + a * e - i * e + n * s - n * n + n * r - s * r, c = [];
  ch(l, f, h, d, c);
  for (var v = 1e-7, p = [], g = 0; g < 6; g += 2)
    Math.abs(c[g + 1]) < v && c[g] >= 0 && c[g] <= 1 && p.push(c[g]);
  p.push(1), p.push(0);
  for (var y = -1, b, m, T, C = 0; C < p.length; C++)
    b = Math.pow(1 - p[C], 2) * a + 2 * (1 - p[C]) * p[C] * i + p[C] * p[C] * o, m = Math.pow(1 - p[C], 2) * n + 2 * (1 - p[C]) * p[C] * s + p[C] * p[C] * u, T = Math.pow(b - e, 2) + Math.pow(m - r, 2), y >= 0 ? T < y && (y = T) : y = T;
  return y;
}, dh = function(e, r, a, n, i, s) {
  var o = [e - a, r - n], u = [i - a, s - n], l = u[0] * u[0] + u[1] * u[1], f = o[0] * o[0] + o[1] * o[1], h = o[0] * u[0] + o[1] * u[1], d = h * h / l;
  return h < 0 ? f : d > l ? (e - i) * (e - i) + (r - s) * (r - s) : f - d;
}, dt = function(e, r, a) {
  for (var n, i, s, o, u, l = 0, f = 0; f < a.length / 2; f++)
    if (n = a[f * 2], i = a[f * 2 + 1], f + 1 < a.length / 2 ? (s = a[(f + 1) * 2], o = a[(f + 1) * 2 + 1]) : (s = a[(f + 1 - a.length / 2) * 2], o = a[(f + 1 - a.length / 2) * 2 + 1]), !(n == e && s == e))
      if (n >= e && e >= s || n <= e && e <= s)
        u = (e - n) / (s - n) * (o - i) + i, u > r && l++;
      else
        continue;
  return l % 2 !== 0;
}, Yt = function(e, r, a, n, i, s, o, u, l) {
  var f = new Array(a.length), h;
  u[0] != null ? (h = Math.atan(u[1] / u[0]), u[0] < 0 ? h = h + Math.PI / 2 : h = -h - Math.PI / 2) : h = u;
  for (var d = Math.cos(-h), c = Math.sin(-h), v = 0; v < f.length / 2; v++)
    f[v * 2] = s / 2 * (a[v * 2] * d - a[v * 2 + 1] * c), f[v * 2 + 1] = o / 2 * (a[v * 2 + 1] * d + a[v * 2] * c), f[v * 2] += n, f[v * 2 + 1] += i;
  var p;
  if (l > 0) {
    var g = sn(f, -l);
    p = nn(g);
  } else
    p = f;
  return dt(e, r, p);
}, gh = function(e, r, a, n, i, s, o, u) {
  for (var l = new Array(a.length * 2), f = 0; f < u.length; f++) {
    var h = u[f];
    l[f * 4 + 0] = h.startX, l[f * 4 + 1] = h.startY, l[f * 4 + 2] = h.stopX, l[f * 4 + 3] = h.stopY;
    var d = Math.pow(h.cx - e, 2) + Math.pow(h.cy - r, 2);
    if (d <= Math.pow(h.radius, 2))
      return !0;
  }
  return dt(e, r, l);
}, nn = function(e) {
  for (var r = new Array(e.length / 2), a, n, i, s, o, u, l, f, h = 0; h < e.length / 4; h++) {
    a = e[h * 4], n = e[h * 4 + 1], i = e[h * 4 + 2], s = e[h * 4 + 3], h < e.length / 4 - 1 ? (o = e[(h + 1) * 4], u = e[(h + 1) * 4 + 1], l = e[(h + 1) * 4 + 2], f = e[(h + 1) * 4 + 3]) : (o = e[0], u = e[1], l = e[2], f = e[3]);
    var d = Zt(a, n, i, s, o, u, l, f, !0);
    r[h * 2] = d[0], r[h * 2 + 1] = d[1];
  }
  return r;
}, sn = function(e, r) {
  for (var a = new Array(e.length * 2), n, i, s, o, u = 0; u < e.length / 2; u++) {
    n = e[u * 2], i = e[u * 2 + 1], u < e.length / 2 - 1 ? (s = e[(u + 1) * 2], o = e[(u + 1) * 2 + 1]) : (s = e[0], o = e[1]);
    var l = o - i, f = -(s - n), h = Math.sqrt(l * l + f * f), d = l / h, c = f / h;
    a[u * 4] = n + d * r, a[u * 4 + 1] = i + c * r, a[u * 4 + 2] = s + d * r, a[u * 4 + 3] = o + c * r;
  }
  return a;
}, ph = function(e, r, a, n, i, s) {
  var o = a - e, u = n - r;
  o /= i, u /= s;
  var l = Math.sqrt(o * o + u * u), f = l - 1;
  if (f < 0)
    return [];
  var h = f / l;
  return [(a - e) * h + e, (n - r) * h + r];
}, cr = function(e, r, a, n, i, s, o) {
  return e -= i, r -= s, e /= a / 2 + o, r /= n / 2 + o, e * e + r * r <= 1;
}, sa = function(e, r, a, n, i, s, o) {
  var u = [a - e, n - r], l = [e - i, r - s], f = u[0] * u[0] + u[1] * u[1], h = 2 * (l[0] * u[0] + l[1] * u[1]), d = l[0] * l[0] + l[1] * l[1] - o * o, c = h * h - 4 * f * d;
  if (c < 0)
    return [];
  var v = (-h + Math.sqrt(c)) / (2 * f), p = (-h - Math.sqrt(c)) / (2 * f), g = Math.min(v, p), y = Math.max(v, p), b = [];
  if (g >= 0 && g <= 1 && b.push(g), y >= 0 && y <= 1 && b.push(y), b.length === 0)
    return [];
  var m = b[0] * u[0] + e, T = b[0] * u[1] + r;
  if (b.length > 1) {
    if (b[0] == b[1])
      return [m, T];
    var C = b[1] * u[0] + e, S = b[1] * u[1] + r;
    return [m, T, C, S];
  } else
    return [m, T];
}, Bn = function(e, r, a) {
  return r <= e && e <= a || a <= e && e <= r ? e : e <= r && r <= a || a <= r && r <= e ? r : a;
}, Zt = function(e, r, a, n, i, s, o, u, l) {
  var f = e - i, h = a - e, d = o - i, c = r - s, v = n - r, p = u - s, g = d * c - p * f, y = h * c - v * f, b = p * h - d * v;
  if (b !== 0) {
    var m = g / b, T = y / b, C = 1e-3, S = 0 - C, E = 1 + C;
    return S <= m && m <= E && S <= T && T <= E ? [e + m * h, r + m * v] : l ? [e + m * h, r + m * v] : [];
  } else
    return g === 0 || y === 0 ? Bn(e, a, o) === o ? [o, u] : Bn(e, a, i) === i ? [i, s] : Bn(i, o, a) === a ? [a, n] : [] : [];
}, pa = function(e, r, a, n, i, s, o, u) {
  var l = [], f, h = new Array(a.length), d = !0;
  s == null && (d = !1);
  var c;
  if (d) {
    for (var v = 0; v < h.length / 2; v++)
      h[v * 2] = a[v * 2] * s + n, h[v * 2 + 1] = a[v * 2 + 1] * o + i;
    if (u > 0) {
      var p = sn(h, -u);
      c = nn(p);
    } else
      c = h;
  } else
    c = a;
  for (var g, y, b, m, T = 0; T < c.length / 2; T++)
    g = c[T * 2], y = c[T * 2 + 1], T < c.length / 2 - 1 ? (b = c[(T + 1) * 2], m = c[(T + 1) * 2 + 1]) : (b = c[0], m = c[1]), f = Zt(e, r, n, i, g, y, b, m), f.length !== 0 && l.push(f[0], f[1]);
  return l;
}, yh = function(e, r, a, n, i, s, o, u, l) {
  var f = [], h, d = new Array(a.length * 2);
  l.forEach(function(b, m) {
    m === 0 ? (d[d.length - 2] = b.startX, d[d.length - 1] = b.startY) : (d[m * 4 - 2] = b.startX, d[m * 4 - 1] = b.startY), d[m * 4] = b.stopX, d[m * 4 + 1] = b.stopY, h = sa(e, r, n, i, b.cx, b.cy, b.radius), h.length !== 0 && f.push(h[0], h[1]);
  });
  for (var c = 0; c < d.length / 4; c++)
    h = Zt(e, r, n, i, d[c * 4], d[c * 4 + 1], d[c * 4 + 2], d[c * 4 + 3], !1), h.length !== 0 && f.push(h[0], h[1]);
  if (f.length > 2) {
    for (var v = [f[0], f[1]], p = Math.pow(v[0] - e, 2) + Math.pow(v[1] - r, 2), g = 1; g < f.length / 2; g++) {
      var y = Math.pow(f[g * 2] - e, 2) + Math.pow(f[g * 2 + 1] - r, 2);
      y <= p && (v[0] = f[g * 2], v[1] = f[g * 2 + 1], p = y);
    }
    return v;
  }
  return f;
}, ka = function(e, r, a) {
  var n = [e[0] - r[0], e[1] - r[1]], i = Math.sqrt(n[0] * n[0] + n[1] * n[1]), s = (i - a) / i;
  return s < 0 && (s = 1e-5), [r[0] + s * n[0], r[1] + s * n[1]];
}, ht = function(e, r) {
  var a = Wn(e, r);
  return a = No(a), a;
}, No = function(e) {
  for (var r, a, n = e.length / 2, i = 1 / 0, s = 1 / 0, o = -1 / 0, u = -1 / 0, l = 0; l < n; l++)
    r = e[2 * l], a = e[2 * l + 1], i = Math.min(i, r), o = Math.max(o, r), s = Math.min(s, a), u = Math.max(u, a);
  for (var f = 2 / (o - i), h = 2 / (u - s), d = 0; d < n; d++)
    r = e[2 * d] = e[2 * d] * f, a = e[2 * d + 1] = e[2 * d + 1] * h, i = Math.min(i, r), o = Math.max(o, r), s = Math.min(s, a), u = Math.max(u, a);
  if (s < -1)
    for (var c = 0; c < n; c++)
      a = e[2 * c + 1] = e[2 * c + 1] + (-1 - s);
  return e;
}, Wn = function(e, r) {
  var a = 1 / e * 2 * Math.PI, n = e % 2 === 0 ? Math.PI / 2 + a / 2 : Math.PI / 2;
  n += r;
  for (var i = new Array(e * 2), s, o = 0; o < e; o++)
    s = o * a + n, i[2 * o] = Math.cos(s), i[2 * o + 1] = Math.sin(-s);
  return i;
}, pr = function(e, r) {
  return Math.min(e / 4, r / 4, 8);
}, Io = function(e, r) {
  return Math.min(e / 10, r / 10, 8);
}, xi = function() {
  return 8;
}, mh = function(e, r, a) {
  return [e - 2 * r + a, 2 * (r - e), e];
}, Kn = function(e, r) {
  return {
    heightOffset: Math.min(15, 0.05 * r),
    widthOffset: Math.min(100, 0.25 * e),
    ctrlPtOffsetPct: 0.05
  };
}, bh = tt({
  dampingFactor: 0.8,
  precision: 1e-6,
  iterations: 200,
  weight: function(e) {
    return 1;
  }
}), Eh = {
  pageRank: function(e) {
    for (var r = bh(e), a = r.dampingFactor, n = r.precision, i = r.iterations, s = r.weight, o = this._private.cy, u = this.byGroup(), l = u.nodes, f = u.edges, h = l.length, d = h * h, c = f.length, v = new Array(d), p = new Array(h), g = (1 - a) / h, y = 0; y < h; y++) {
      for (var b = 0; b < h; b++) {
        var m = y * h + b;
        v[m] = 0;
      }
      p[y] = 0;
    }
    for (var T = 0; T < c; T++) {
      var C = f[T], S = C.data("source"), E = C.data("target");
      if (S !== E) {
        var x = l.indexOfId(S), w = l.indexOfId(E), D = s(C), L = w * h + x;
        v[L] += D, p[x] += D;
      }
    }
    for (var A = 1 / h + g, I = 0; I < h; I++)
      if (p[I] === 0)
        for (var O = 0; O < h; O++) {
          var M = O * h + I;
          v[M] = A;
        }
      else
        for (var R = 0; R < h; R++) {
          var k = R * h + I;
          v[k] = v[k] / p[I] + g;
        }
    for (var P = new Array(h), B = new Array(h), V, F = 0; F < h; F++)
      P[F] = 1;
    for (var G = 0; G < i; G++) {
      for (var Y = 0; Y < h; Y++)
        B[Y] = 0;
      for (var _ = 0; _ < h; _++)
        for (var q = 0; q < h; q++) {
          var U = _ * h + q;
          B[_] += v[U] * P[q];
        }
      rh(B), V = P, P = B, B = V;
      for (var z = 0, H = 0; H < h; H++) {
        var W = V[H] - P[H];
        z += W * W;
      }
      if (z < n)
        break;
    }
    var J = {
      rank: function(oe) {
        return oe = o.collection(oe)[0], P[l.indexOf(oe)];
      }
    };
    return J;
  }
  // pageRank
}, es = tt({
  root: null,
  weight: function(e) {
    return 1;
  },
  directed: !1,
  alpha: 0
}), kr = {
  degreeCentralityNormalized: function(e) {
    e = es(e);
    var r = this.cy(), a = this.nodes(), n = a.length;
    if (e.directed) {
      for (var f = {}, h = {}, d = 0, c = 0, v = 0; v < n; v++) {
        var p = a[v], g = p.id();
        e.root = p;
        var y = this.degreeCentrality(e);
        d < y.indegree && (d = y.indegree), c < y.outdegree && (c = y.outdegree), f[g] = y.indegree, h[g] = y.outdegree;
      }
      return {
        indegree: function(m) {
          return d == 0 ? 0 : (ve(m) && (m = r.filter(m)), f[m.id()] / d);
        },
        outdegree: function(m) {
          return c === 0 ? 0 : (ve(m) && (m = r.filter(m)), h[m.id()] / c);
        }
      };
    } else {
      for (var i = {}, s = 0, o = 0; o < n; o++) {
        var u = a[o];
        e.root = u;
        var l = this.degreeCentrality(e);
        s < l.degree && (s = l.degree), i[u.id()] = l.degree;
      }
      return {
        degree: function(m) {
          return s === 0 ? 0 : (ve(m) && (m = r.filter(m)), i[m.id()] / s);
        }
      };
    }
  },
  // degreeCentralityNormalized
  // Implemented from the algorithm in Opsahl's paper
  // "Node centrality in weighted networks: Generalizing degree and shortest paths"
  // check the heading 2 "Degree"
  degreeCentrality: function(e) {
    e = es(e);
    var r = this.cy(), a = this, n = e, i = n.root, s = n.weight, o = n.directed, u = n.alpha;
    if (i = r.collection(i)[0], o) {
      for (var c = i.connectedEdges(), v = c.filter(function(S) {
        return S.target().same(i) && a.has(S);
      }), p = c.filter(function(S) {
        return S.source().same(i) && a.has(S);
      }), g = v.length, y = p.length, b = 0, m = 0, T = 0; T < v.length; T++)
        b += s(v[T]);
      for (var C = 0; C < p.length; C++)
        m += s(p[C]);
      return {
        indegree: Math.pow(g, 1 - u) * Math.pow(b, u),
        outdegree: Math.pow(y, 1 - u) * Math.pow(m, u)
      };
    } else {
      for (var l = i.connectedEdges().intersection(a), f = l.length, h = 0, d = 0; d < l.length; d++)
        h += s(l[d]);
      return {
        degree: Math.pow(f, 1 - u) * Math.pow(h, u)
      };
    }
  }
  // degreeCentrality
};
kr.dc = kr.degreeCentrality;
kr.dcn = kr.degreeCentralityNormalised = kr.degreeCentralityNormalized;
var ts = tt({
  harmonic: !0,
  weight: function() {
    return 1;
  },
  directed: !1,
  root: null
}), Pr = {
  closenessCentralityNormalized: function(e) {
    for (var r = ts(e), a = r.harmonic, n = r.weight, i = r.directed, s = this.cy(), o = {}, u = 0, l = this.nodes(), f = this.floydWarshall({
      weight: n,
      directed: i
    }), h = 0; h < l.length; h++) {
      for (var d = 0, c = l[h], v = 0; v < l.length; v++)
        if (h !== v) {
          var p = f.distance(c, l[v]);
          a ? d += 1 / p : d += p;
        }
      a || (d = 1 / d), u < d && (u = d), o[c.id()] = d;
    }
    return {
      closeness: function(y) {
        return u == 0 ? 0 : (ve(y) ? y = s.filter(y)[0].id() : y = y.id(), o[y] / u);
      }
    };
  },
  // Implemented from pseudocode from wikipedia
  closenessCentrality: function(e) {
    var r = ts(e), a = r.root, n = r.weight, i = r.directed, s = r.harmonic;
    a = this.filter(a)[0];
    for (var o = this.dijkstra({
      root: a,
      weight: n,
      directed: i
    }), u = 0, l = this.nodes(), f = 0; f < l.length; f++) {
      var h = l[f];
      if (!h.same(a)) {
        var d = o.distanceTo(h);
        s ? u += 1 / d : u += d;
      }
    }
    return s ? u : 1 / u;
  }
  // closenessCentrality
};
Pr.cc = Pr.closenessCentrality;
Pr.ccn = Pr.closenessCentralityNormalised = Pr.closenessCentralityNormalized;
var wh = tt({
  weight: null,
  directed: !1
}), Zn = {
  // Implemented from the algorithm in the paper "On Variants of Shortest-Path Betweenness Centrality and their Generic Computation" by Ulrik Brandes
  betweennessCentrality: function(e) {
    for (var r = wh(e), a = r.directed, n = r.weight, i = n != null, s = this.cy(), o = this.nodes(), u = {}, l = {}, f = 0, h = {
      set: function(m, T) {
        l[m] = T, T > f && (f = T);
      },
      get: function(m) {
        return l[m];
      }
    }, d = 0; d < o.length; d++) {
      var c = o[d], v = c.id();
      a ? u[v] = c.outgoers().nodes() : u[v] = c.openNeighborhood().nodes(), h.set(v, 0);
    }
    for (var p = function(m) {
      for (var T = o[m].id(), C = [], S = {}, E = {}, x = {}, w = new Da(function(q, U) {
        return x[q] - x[U];
      }), D = 0; D < o.length; D++) {
        var L = o[D].id();
        S[L] = [], E[L] = 0, x[L] = 1 / 0;
      }
      for (E[T] = 1, x[T] = 0, w.push(T); !w.empty(); ) {
        var A = w.pop();
        if (C.push(A), i)
          for (var I = 0; I < u[A].length; I++) {
            var O = u[A][I], M = s.getElementById(A), R = void 0;
            M.edgesTo(O).length > 0 ? R = M.edgesTo(O)[0] : R = O.edgesTo(M)[0];
            var k = n(R);
            O = O.id(), x[O] > x[A] + k && (x[O] = x[A] + k, w.nodes.indexOf(O) < 0 ? w.push(O) : w.updateItem(O), E[O] = 0, S[O] = []), x[O] == x[A] + k && (E[O] = E[O] + E[A], S[O].push(A));
          }
        else
          for (var P = 0; P < u[A].length; P++) {
            var B = u[A][P].id();
            x[B] == 1 / 0 && (w.push(B), x[B] = x[A] + 1), x[B] == x[A] + 1 && (E[B] = E[B] + E[A], S[B].push(A));
          }
      }
      for (var V = {}, F = 0; F < o.length; F++)
        V[o[F].id()] = 0;
      for (; C.length > 0; ) {
        for (var G = C.pop(), Y = 0; Y < S[G].length; Y++) {
          var _ = S[G][Y];
          V[_] = V[_] + E[_] / E[G] * (1 + V[G]);
        }
        G != o[m].id() && h.set(G, h.get(G) + V[G]);
      }
    }, g = 0; g < o.length; g++)
      p(g);
    var y = {
      betweenness: function(m) {
        var T = s.collection(m).id();
        return h.get(T);
      },
      betweennessNormalized: function(m) {
        if (f == 0)
          return 0;
        var T = s.collection(m).id();
        return h.get(T) / f;
      }
    };
    return y.betweennessNormalised = y.betweennessNormalized, y;
  }
  // betweennessCentrality
};
Zn.bc = Zn.betweennessCentrality;
var xh = tt({
  expandFactor: 2,
  // affects time of computation and cluster granularity to some extent: M * M
  inflateFactor: 2,
  // affects cluster granularity (the greater the value, the more clusters): M(i,j) / E(j)
  multFactor: 1,
  // optional self loops for each node. Use a neutral value to improve cluster computations.
  maxIterations: 20,
  // maximum number of iterations of the MCL algorithm in a single run
  attributes: [
    // attributes/features used to group nodes, ie. similarity values between nodes
    function(t) {
      return 1;
    }
  ]
}), Th = function(e) {
  return xh(e);
}, Ch = function(e, r) {
  for (var a = 0, n = 0; n < r.length; n++)
    a += r[n](e);
  return a;
}, Dh = function(e, r, a) {
  for (var n = 0; n < r; n++)
    e[n * r + n] = a;
}, Mo = function(e, r) {
  for (var a, n = 0; n < r; n++) {
    a = 0;
    for (var i = 0; i < r; i++)
      a += e[i * r + n];
    for (var s = 0; s < r; s++)
      e[s * r + n] = e[s * r + n] / a;
  }
}, Sh = function(e, r, a) {
  for (var n = new Array(a * a), i = 0; i < a; i++) {
    for (var s = 0; s < a; s++)
      n[i * a + s] = 0;
    for (var o = 0; o < a; o++)
      for (var u = 0; u < a; u++)
        n[i * a + u] += e[i * a + o] * r[o * a + u];
  }
  return n;
}, Lh = function(e, r, a) {
  for (var n = e.slice(0), i = 1; i < a; i++)
    e = Sh(e, n, r);
  return e;
}, Ah = function(e, r, a) {
  for (var n = new Array(r * r), i = 0; i < r * r; i++)
    n[i] = Math.pow(e[i], a);
  return Mo(n, r), n;
}, Oh = function(e, r, a, n) {
  for (var i = 0; i < a; i++) {
    var s = Math.round(e[i] * Math.pow(10, n)) / Math.pow(10, n), o = Math.round(r[i] * Math.pow(10, n)) / Math.pow(10, n);
    if (s !== o)
      return !1;
  }
  return !0;
}, Nh = function(e, r, a, n) {
  for (var i = [], s = 0; s < r; s++) {
    for (var o = [], u = 0; u < r; u++)
      Math.round(e[s * r + u] * 1e3) / 1e3 > 0 && o.push(a[u]);
    o.length !== 0 && i.push(n.collection(o));
  }
  return i;
}, Ih = function(e, r) {
  for (var a = 0; a < e.length; a++)
    if (!r[a] || e[a].id() !== r[a].id())
      return !1;
  return !0;
}, Mh = function(e) {
  for (var r = 0; r < e.length; r++)
    for (var a = 0; a < e.length; a++)
      r != a && Ih(e[r], e[a]) && e.splice(a, 1);
  return e;
}, rs = function(e) {
  for (var r = this.nodes(), a = this.edges(), n = this.cy(), i = Th(e), s = {}, o = 0; o < r.length; o++)
    s[r[o].id()] = o;
  for (var u = r.length, l = u * u, f = new Array(l), h, d = 0; d < l; d++)
    f[d] = 0;
  for (var c = 0; c < a.length; c++) {
    var v = a[c], p = s[v.source().id()], g = s[v.target().id()], y = Ch(v, i.attributes);
    f[p * u + g] += y, f[g * u + p] += y;
  }
  Dh(f, u, i.multFactor), Mo(f, u);
  for (var b = !0, m = 0; b && m < i.maxIterations; )
    b = !1, h = Lh(f, u, i.expandFactor), f = Ah(h, u, i.inflateFactor), Oh(f, h, l, 4) || (b = !0), m++;
  var T = Nh(f, u, r, n);
  return T = Mh(T), T;
}, Rh = {
  markovClustering: rs,
  mcl: rs
}, kh = function(e) {
  return e;
}, Ro = function(e, r) {
  return Math.abs(r - e);
}, as = function(e, r, a) {
  return e + Ro(r, a);
}, ns = function(e, r, a) {
  return e + Math.pow(a - r, 2);
}, Ph = function(e) {
  return Math.sqrt(e);
}, Bh = function(e, r, a) {
  return Math.max(e, Ro(r, a));
}, ea = function(e, r, a, n, i) {
  for (var s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : kh, o = n, u, l, f = 0; f < e; f++)
    u = r(f), l = a(f), o = i(o, u, l);
  return s(o);
}, zr = {
  euclidean: function(e, r, a) {
    return e >= 2 ? ea(e, r, a, 0, ns, Ph) : ea(e, r, a, 0, as);
  },
  squaredEuclidean: function(e, r, a) {
    return ea(e, r, a, 0, ns);
  },
  manhattan: function(e, r, a) {
    return ea(e, r, a, 0, as);
  },
  max: function(e, r, a) {
    return ea(e, r, a, -1 / 0, Bh);
  }
};
zr["squared-euclidean"] = zr.squaredEuclidean;
zr.squaredeuclidean = zr.squaredEuclidean;
function mn(t, e, r, a, n, i) {
  var s;
  return Ge(t) ? s = t : s = zr[t] || zr.euclidean, e === 0 && Ge(t) ? s(n, i) : s(e, r, a, n, i);
}
var Fh = tt({
  k: 2,
  m: 2,
  sensitivityThreshold: 1e-4,
  distance: "euclidean",
  maxIterations: 10,
  attributes: [],
  testMode: !1,
  testCentroids: null
}), Ti = function(e) {
  return Fh(e);
}, on = function(e, r, a, n, i) {
  var s = i !== "kMedoids", o = s ? function(h) {
    return a[h];
  } : function(h) {
    return n[h](a);
  }, u = function(d) {
    return n[d](r);
  }, l = a, f = r;
  return mn(e, n.length, o, u, l, f);
}, Fn = function(e, r, a) {
  for (var n = a.length, i = new Array(n), s = new Array(n), o = new Array(r), u = null, l = 0; l < n; l++)
    i[l] = e.min(a[l]).value, s[l] = e.max(a[l]).value;
  for (var f = 0; f < r; f++) {
    u = [];
    for (var h = 0; h < n; h++)
      u[h] = Math.random() * (s[h] - i[h]) + i[h];
    o[f] = u;
  }
  return o;
}, ko = function(e, r, a, n, i) {
  for (var s = 1 / 0, o = 0, u = 0; u < r.length; u++) {
    var l = on(a, e, r[u], n, i);
    l < s && (s = l, o = u);
  }
  return o;
}, Po = function(e, r, a) {
  for (var n = [], i = null, s = 0; s < r.length; s++)
    i = r[s], a[i.id()] === e && n.push(i);
  return n;
}, Gh = function(e, r, a) {
  return Math.abs(r - e) <= a;
}, zh = function(e, r, a) {
  for (var n = 0; n < e.length; n++)
    for (var i = 0; i < e[n].length; i++) {
      var s = Math.abs(e[n][i] - r[n][i]);
      if (s > a)
        return !1;
    }
  return !0;
}, Vh = function(e, r, a) {
  for (var n = 0; n < a; n++)
    if (e === r[n])
      return !0;
  return !1;
}, is = function(e, r) {
  var a = new Array(r);
  if (e.length < 50)
    for (var n = 0; n < r; n++) {
      for (var i = e[Math.floor(Math.random() * e.length)]; Vh(i, a, n); )
        i = e[Math.floor(Math.random() * e.length)];
      a[n] = i;
    }
  else
    for (var s = 0; s < r; s++)
      a[s] = e[Math.floor(Math.random() * e.length)];
  return a;
}, ss = function(e, r, a) {
  for (var n = 0, i = 0; i < r.length; i++)
    n += on("manhattan", r[i], e, a, "kMedoids");
  return n;
}, Uh = function(e) {
  var r = this.cy(), a = this.nodes(), n = null, i = Ti(e), s = new Array(i.k), o = {}, u;
  i.testMode ? typeof i.testCentroids == "number" ? (i.testCentroids, u = Fn(a, i.k, i.attributes)) : Xe(i.testCentroids) === "object" ? u = i.testCentroids : u = Fn(a, i.k, i.attributes) : u = Fn(a, i.k, i.attributes);
  for (var l = !0, f = 0; l && f < i.maxIterations; ) {
    for (var h = 0; h < a.length; h++)
      n = a[h], o[n.id()] = ko(n, u, i.distance, i.attributes, "kMeans");
    l = !1;
    for (var d = 0; d < i.k; d++) {
      var c = Po(d, a, o);
      if (c.length !== 0) {
        for (var v = i.attributes.length, p = u[d], g = new Array(v), y = new Array(v), b = 0; b < v; b++) {
          y[b] = 0;
          for (var m = 0; m < c.length; m++)
            n = c[m], y[b] += i.attributes[b](n);
          g[b] = y[b] / c.length, Gh(g[b], p[b], i.sensitivityThreshold) || (l = !0);
        }
        u[d] = g, s[d] = r.collection(c);
      }
    }
    f++;
  }
  return s;
}, $h = function(e) {
  var r = this.cy(), a = this.nodes(), n = null, i = Ti(e), s = new Array(i.k), o, u = {}, l, f = new Array(i.k);
  i.testMode ? typeof i.testCentroids == "number" || (Xe(i.testCentroids) === "object" ? o = i.testCentroids : o = is(a, i.k)) : o = is(a, i.k);
  for (var h = !0, d = 0; h && d < i.maxIterations; ) {
    for (var c = 0; c < a.length; c++)
      n = a[c], u[n.id()] = ko(n, o, i.distance, i.attributes, "kMedoids");
    h = !1;
    for (var v = 0; v < o.length; v++) {
      var p = Po(v, a, u);
      if (p.length !== 0) {
        f[v] = ss(o[v], p, i.attributes);
        for (var g = 0; g < p.length; g++)
          l = ss(p[g], p, i.attributes), l < f[v] && (f[v] = l, o[v] = p[g], h = !0);
        s[v] = r.collection(p);
      }
    }
    d++;
  }
  return s;
}, Yh = function(e, r, a, n, i) {
  for (var s, o, u = 0; u < r.length; u++)
    for (var l = 0; l < e.length; l++)
      n[u][l] = Math.pow(a[u][l], i.m);
  for (var f = 0; f < e.length; f++)
    for (var h = 0; h < i.attributes.length; h++) {
      s = 0, o = 0;
      for (var d = 0; d < r.length; d++)
        s += n[d][f] * i.attributes[h](r[d]), o += n[d][f];
      e[f][h] = s / o;
    }
}, _h = function(e, r, a, n, i) {
  for (var s = 0; s < e.length; s++)
    r[s] = e[s].slice();
  for (var o, u, l, f = 2 / (i.m - 1), h = 0; h < a.length; h++)
    for (var d = 0; d < n.length; d++) {
      o = 0;
      for (var c = 0; c < a.length; c++)
        u = on(i.distance, n[d], a[h], i.attributes, "cmeans"), l = on(i.distance, n[d], a[c], i.attributes, "cmeans"), o += Math.pow(u / l, f);
      e[d][h] = 1 / o;
    }
}, Hh = function(e, r, a, n) {
  for (var i = new Array(a.k), s = 0; s < i.length; s++)
    i[s] = [];
  for (var o, u, l = 0; l < r.length; l++) {
    o = -1 / 0, u = -1;
    for (var f = 0; f < r[0].length; f++)
      r[l][f] > o && (o = r[l][f], u = f);
    i[u].push(e[l]);
  }
  for (var h = 0; h < i.length; h++)
    i[h] = n.collection(i[h]);
  return i;
}, os = function(e) {
  var r = this.cy(), a = this.nodes(), n = Ti(e), i, s, o, u, l;
  u = new Array(a.length);
  for (var f = 0; f < a.length; f++)
    u[f] = new Array(n.k);
  o = new Array(a.length);
  for (var h = 0; h < a.length; h++)
    o[h] = new Array(n.k);
  for (var d = 0; d < a.length; d++) {
    for (var c = 0, v = 0; v < n.k; v++)
      o[d][v] = Math.random(), c += o[d][v];
    for (var p = 0; p < n.k; p++)
      o[d][p] = o[d][p] / c;
  }
  s = new Array(n.k);
  for (var g = 0; g < n.k; g++)
    s[g] = new Array(n.attributes.length);
  l = new Array(a.length);
  for (var y = 0; y < a.length; y++)
    l[y] = new Array(n.k);
  for (var b = !0, m = 0; b && m < n.maxIterations; )
    b = !1, Yh(s, a, o, l, n), _h(o, u, s, a, n), zh(o, u, n.sensitivityThreshold) || (b = !0), m++;
  return i = Hh(a, o, n, r), {
    clusters: i,
    degreeOfMembership: o
  };
}, Xh = {
  kMeans: Uh,
  kMedoids: $h,
  fuzzyCMeans: os,
  fcm: os
}, qh = tt({
  distance: "euclidean",
  // distance metric to compare nodes
  linkage: "min",
  // linkage criterion : how to determine the distance between clusters of nodes
  mode: "threshold",
  // mode:'threshold' => clusters must be threshold distance apart
  threshold: 1 / 0,
  // the distance threshold
  // mode:'dendrogram' => the nodes are organised as leaves in a tree (siblings are close), merging makes clusters
  addDendrogram: !1,
  // whether to add the dendrogram to the graph for viz
  dendrogramDepth: 0,
  // depth at which dendrogram branches are merged into the returned clusters
  attributes: []
  // array of attr functions
}), Wh = {
  single: "min",
  complete: "max"
}, Kh = function(e) {
  var r = qh(e), a = Wh[r.linkage];
  return a != null && (r.linkage = a), r;
}, us = function(e, r, a, n, i) {
  for (var s = 0, o = 1 / 0, u, l = i.attributes, f = function(w, D) {
    return mn(i.distance, l.length, function(L) {
      return l[L](w);
    }, function(L) {
      return l[L](D);
    }, w, D);
  }, h = 0; h < e.length; h++) {
    var d = e[h].key, c = a[d][n[d]];
    c < o && (s = d, o = c);
  }
  if (i.mode === "threshold" && o >= i.threshold || i.mode === "dendrogram" && e.length === 1)
    return !1;
  var v = r[s], p = r[n[s]], g;
  i.mode === "dendrogram" ? g = {
    left: v,
    right: p,
    key: v.key
  } : g = {
    value: v.value.concat(p.value),
    key: v.key
  }, e[v.index] = g, e.splice(p.index, 1), r[v.key] = g;
  for (var y = 0; y < e.length; y++) {
    var b = e[y];
    v.key === b.key ? u = 1 / 0 : i.linkage === "min" ? (u = a[v.key][b.key], a[v.key][b.key] > a[p.key][b.key] && (u = a[p.key][b.key])) : i.linkage === "max" ? (u = a[v.key][b.key], a[v.key][b.key] < a[p.key][b.key] && (u = a[p.key][b.key])) : i.linkage === "mean" ? u = (a[v.key][b.key] * v.size + a[p.key][b.key] * p.size) / (v.size + p.size) : i.mode === "dendrogram" ? u = f(b.value, v.value) : u = f(b.value[0], v.value[0]), a[v.key][b.key] = a[b.key][v.key] = u;
  }
  for (var m = 0; m < e.length; m++) {
    var T = e[m].key;
    if (n[T] === v.key || n[T] === p.key) {
      for (var C = T, S = 0; S < e.length; S++) {
        var E = e[S].key;
        a[T][E] < a[T][C] && (C = E);
      }
      n[T] = C;
    }
    e[m].index = m;
  }
  return v.key = p.key = v.index = p.index = null, !0;
}, Pa = function t(e, r, a) {
  e && (e.value ? r.push(e.value) : (e.left && t(e.left, r), e.right && t(e.right, r)));
}, Zh = function t(e, r) {
  if (!e)
    return "";
  if (e.left && e.right) {
    var a = t(e.left, r), n = t(e.right, r), i = r.add({
      group: "nodes",
      data: {
        id: a + "," + n
      }
    });
    return r.add({
      group: "edges",
      data: {
        source: a,
        target: i.id()
      }
    }), r.add({
      group: "edges",
      data: {
        source: n,
        target: i.id()
      }
    }), i.id();
  } else if (e.value)
    return e.value.id();
}, Qh = function t(e, r, a) {
  if (!e)
    return [];
  var n = [], i = [], s = [];
  return r === 0 ? (e.left && Pa(e.left, n), e.right && Pa(e.right, i), s = n.concat(i), [a.collection(s)]) : r === 1 ? e.value ? [a.collection(e.value)] : (e.left && Pa(e.left, n), e.right && Pa(e.right, i), [a.collection(n), a.collection(i)]) : e.value ? [a.collection(e.value)] : (e.left && (n = t(e.left, r - 1, a)), e.right && (i = t(e.right, r - 1, a)), n.concat(i));
}, ls = function(e) {
  for (var r = this.cy(), a = this.nodes(), n = Kh(e), i = n.attributes, s = function(m, T) {
    return mn(n.distance, i.length, function(C) {
      return i[C](m);
    }, function(C) {
      return i[C](T);
    }, m, T);
  }, o = [], u = [], l = [], f = [], h = 0; h < a.length; h++) {
    var d = {
      value: n.mode === "dendrogram" ? a[h] : [a[h]],
      key: h,
      index: h
    };
    o[h] = d, f[h] = d, u[h] = [], l[h] = 0;
  }
  for (var c = 0; c < o.length; c++)
    for (var v = 0; v <= c; v++) {
      var p = void 0;
      n.mode === "dendrogram" ? p = c === v ? 1 / 0 : s(o[c].value, o[v].value) : p = c === v ? 1 / 0 : s(o[c].value[0], o[v].value[0]), u[c][v] = p, u[v][c] = p, p < u[c][l[c]] && (l[c] = v);
    }
  for (var g = us(o, f, u, l, n); g; )
    g = us(o, f, u, l, n);
  var y;
  return n.mode === "dendrogram" ? (y = Qh(o[0], n.dendrogramDepth, r), n.addDendrogram && Zh(o[0], r)) : (y = new Array(o.length), o.forEach(function(b, m) {
    b.key = b.index = null, y[m] = r.collection(b.value);
  })), y;
}, Jh = {
  hierarchicalClustering: ls,
  hca: ls
}, jh = tt({
  distance: "euclidean",
  // distance metric to compare attributes between two nodes
  preference: "median",
  // suitability of a data point to serve as an exemplar
  damping: 0.8,
  // damping factor between [0.5, 1)
  maxIterations: 1e3,
  // max number of iterations to run
  minIterations: 100,
  // min number of iterations to run in order for clustering to stop
  attributes: [
    // functions to quantify the similarity between any two points
    // e.g. node => node.data('weight')
  ]
}), ec = function(e) {
  var r = e.damping, a = e.preference;
  0.5 <= r && r < 1 || ze("Damping must range on [0.5, 1).  Got: ".concat(r));
  var n = ["median", "mean", "min", "max"];
  return n.some(function(i) {
    return i === a;
  }) || ne(a) || ze("Preference must be one of [".concat(n.map(function(i) {
    return "'".concat(i, "'");
  }).join(", "), "] or a number.  Got: ").concat(a)), jh(e);
}, tc = function(e, r, a, n) {
  var i = function(o, u) {
    return n[u](o);
  };
  return -mn(e, n.length, function(s) {
    return i(r, s);
  }, function(s) {
    return i(a, s);
  }, r, a);
}, rc = function(e, r) {
  var a = null;
  return r === "median" ? a = eh(e) : r === "mean" ? a = jf(e) : r === "min" ? a = Qf(e) : r === "max" ? a = Jf(e) : a = r, a;
}, ac = function(e, r, a) {
  for (var n = [], i = 0; i < e; i++)
    r[i * e + i] + a[i * e + i] > 0 && n.push(i);
  return n;
}, fs = function(e, r, a) {
  for (var n = [], i = 0; i < e; i++) {
    for (var s = -1, o = -1 / 0, u = 0; u < a.length; u++) {
      var l = a[u];
      r[i * e + l] > o && (s = l, o = r[i * e + l]);
    }
    s > 0 && n.push(s);
  }
  for (var f = 0; f < a.length; f++)
    n[a[f]] = a[f];
  return n;
}, nc = function(e, r, a) {
  for (var n = fs(e, r, a), i = 0; i < a.length; i++) {
    for (var s = [], o = 0; o < n.length; o++)
      n[o] === a[i] && s.push(o);
    for (var u = -1, l = -1 / 0, f = 0; f < s.length; f++) {
      for (var h = 0, d = 0; d < s.length; d++)
        h += r[s[d] * e + s[f]];
      h > l && (u = f, l = h);
    }
    a[i] = s[u];
  }
  return n = fs(e, r, a), n;
}, hs = function(e) {
  for (var r = this.cy(), a = this.nodes(), n = ec(e), i = {}, s = 0; s < a.length; s++)
    i[a[s].id()] = s;
  var o, u, l, f, h, d;
  o = a.length, u = o * o, l = new Array(u);
  for (var c = 0; c < u; c++)
    l[c] = -1 / 0;
  for (var v = 0; v < o; v++)
    for (var p = 0; p < o; p++)
      v !== p && (l[v * o + p] = tc(n.distance, a[v], a[p], n.attributes));
  f = rc(l, n.preference);
  for (var g = 0; g < o; g++)
    l[g * o + g] = f;
  h = new Array(u);
  for (var y = 0; y < u; y++)
    h[y] = 0;
  d = new Array(u);
  for (var b = 0; b < u; b++)
    d[b] = 0;
  for (var m = new Array(o), T = new Array(o), C = new Array(o), S = 0; S < o; S++)
    m[S] = 0, T[S] = 0, C[S] = 0;
  for (var E = new Array(o * n.minIterations), x = 0; x < E.length; x++)
    E[x] = 0;
  var w;
  for (w = 0; w < n.maxIterations; w++) {
    for (var D = 0; D < o; D++) {
      for (var L = -1 / 0, A = -1 / 0, I = -1, O = 0, M = 0; M < o; M++)
        m[M] = h[D * o + M], O = d[D * o + M] + l[D * o + M], O >= L ? (A = L, L = O, I = M) : O > A && (A = O);
      for (var R = 0; R < o; R++)
        h[D * o + R] = (1 - n.damping) * (l[D * o + R] - L) + n.damping * m[R];
      h[D * o + I] = (1 - n.damping) * (l[D * o + I] - A) + n.damping * m[I];
    }
    for (var k = 0; k < o; k++) {
      for (var P = 0, B = 0; B < o; B++)
        m[B] = d[B * o + k], T[B] = Math.max(0, h[B * o + k]), P += T[B];
      P -= T[k], T[k] = h[k * o + k], P += T[k];
      for (var V = 0; V < o; V++)
        d[V * o + k] = (1 - n.damping) * Math.min(0, P - T[V]) + n.damping * m[V];
      d[k * o + k] = (1 - n.damping) * (P - T[k]) + n.damping * m[k];
    }
    for (var F = 0, G = 0; G < o; G++) {
      var Y = d[G * o + G] + h[G * o + G] > 0 ? 1 : 0;
      E[w % n.minIterations * o + G] = Y, F += Y;
    }
    if (F > 0 && (w >= n.minIterations - 1 || w == n.maxIterations - 1)) {
      for (var _ = 0, q = 0; q < o; q++) {
        C[q] = 0;
        for (var U = 0; U < n.minIterations; U++)
          C[q] += E[U * o + q];
        (C[q] === 0 || C[q] === n.minIterations) && _++;
      }
      if (_ === o)
        break;
    }
  }
  for (var z = ac(o, h, d), H = nc(o, l, z), W = {}, J = 0; J < z.length; J++)
    W[z[J]] = [];
  for (var ee = 0; ee < a.length; ee++) {
    var oe = i[a[ee].id()], me = H[oe];
    me != null && W[me].push(a[ee]);
  }
  for (var te = new Array(z.length), ie = 0; ie < z.length; ie++)
    te[ie] = r.collection(W[z[ie]]);
  return te;
}, ic = {
  affinityPropagation: hs,
  ap: hs
}, sc = tt({
  root: void 0,
  directed: !1
}), oc = {
  hierholzer: function(e) {
    if (!Ce(e)) {
      var r = arguments;
      e = {
        root: r[0],
        directed: r[1]
      };
    }
    var a = sc(e), n = a.root, i = a.directed, s = this, o = !1, u, l, f;
    n && (f = ve(n) ? this.filter(n)[0].id() : n[0].id());
    var h = {}, d = {};
    i ? s.forEach(function(b) {
      var m = b.id();
      if (b.isNode()) {
        var T = b.indegree(!0), C = b.outdegree(!0), S = T - C, E = C - T;
        S == 1 ? u ? o = !0 : u = m : E == 1 ? l ? o = !0 : l = m : (E > 1 || S > 1) && (o = !0), h[m] = [], b.outgoers().forEach(function(x) {
          x.isEdge() && h[m].push(x.id());
        });
      } else
        d[m] = [void 0, b.target().id()];
    }) : s.forEach(function(b) {
      var m = b.id();
      if (b.isNode()) {
        var T = b.degree(!0);
        T % 2 && (u ? l ? o = !0 : l = m : u = m), h[m] = [], b.connectedEdges().forEach(function(C) {
          return h[m].push(C.id());
        });
      } else
        d[m] = [b.source().id(), b.target().id()];
    });
    var c = {
      found: !1,
      trail: void 0
    };
    if (o)
      return c;
    if (l && u)
      if (i) {
        if (f && l != f)
          return c;
        f = l;
      } else {
        if (f && l != f && u != f)
          return c;
        f || (f = l);
      }
    else
      f || (f = s[0].id());
    var v = function(m) {
      for (var T = m, C = [m], S, E, x; h[T].length; )
        S = h[T].shift(), E = d[S][0], x = d[S][1], T != x ? (h[x] = h[x].filter(function(w) {
          return w != S;
        }), T = x) : !i && T != E && (h[E] = h[E].filter(function(w) {
          return w != S;
        }), T = E), C.unshift(S), C.unshift(T);
      return C;
    }, p = [], g = [];
    for (g = v(f); g.length != 1; )
      h[g[0]].length == 0 ? (p.unshift(s.getElementById(g.shift())), p.unshift(s.getElementById(g.shift()))) : g = v(g.shift()).concat(g);
    p.unshift(s.getElementById(g.shift()));
    for (var y in h)
      if (h[y].length)
        return c;
    return c.found = !0, c.trail = this.spawn(p, !0), c;
  }
}, Ba = function() {
  var e = this, r = {}, a = 0, n = 0, i = [], s = [], o = {}, u = function(d, c) {
    for (var v = s.length - 1, p = [], g = e.spawn(); s[v].x != d || s[v].y != c; )
      p.push(s.pop().edge), v--;
    p.push(s.pop().edge), p.forEach(function(y) {
      var b = y.connectedNodes().intersection(e);
      g.merge(y), b.forEach(function(m) {
        var T = m.id(), C = m.connectedEdges().intersection(e);
        g.merge(m), r[T].cutVertex ? g.merge(C.filter(function(S) {
          return S.isLoop();
        })) : g.merge(C);
      });
    }), i.push(g);
  }, l = function h(d, c, v) {
    d === v && (n += 1), r[c] = {
      id: a,
      low: a++,
      cutVertex: !1
    };
    var p = e.getElementById(c).connectedEdges().intersection(e);
    if (p.size() === 0)
      i.push(e.spawn(e.getElementById(c)));
    else {
      var g, y, b, m;
      p.forEach(function(T) {
        g = T.source().id(), y = T.target().id(), b = g === c ? y : g, b !== v && (m = T.id(), o[m] || (o[m] = !0, s.push({
          x: c,
          y: b,
          edge: T
        })), b in r ? r[c].low = Math.min(r[c].low, r[b].id) : (h(d, b, c), r[c].low = Math.min(r[c].low, r[b].low), r[c].id <= r[b].low && (r[c].cutVertex = !0, u(c, b))));
      });
    }
  };
  e.forEach(function(h) {
    if (h.isNode()) {
      var d = h.id();
      d in r || (n = 0, l(d, d), r[d].cutVertex = n > 1);
    }
  });
  var f = Object.keys(r).filter(function(h) {
    return r[h].cutVertex;
  }).map(function(h) {
    return e.getElementById(h);
  });
  return {
    cut: e.spawn(f),
    components: i
  };
}, uc = {
  hopcroftTarjanBiconnected: Ba,
  htbc: Ba,
  htb: Ba,
  hopcroftTarjanBiconnectedComponents: Ba
}, Fa = function() {
  var e = this, r = {}, a = 0, n = [], i = [], s = e.spawn(e), o = function u(l) {
    i.push(l), r[l] = {
      index: a,
      low: a++,
      explored: !1
    };
    var f = e.getElementById(l).connectedEdges().intersection(e);
    if (f.forEach(function(p) {
      var g = p.target().id();
      g !== l && (g in r || u(g), r[g].explored || (r[l].low = Math.min(r[l].low, r[g].low)));
    }), r[l].index === r[l].low) {
      for (var h = e.spawn(); ; ) {
        var d = i.pop();
        if (h.merge(e.getElementById(d)), r[d].low = r[l].index, r[d].explored = !0, d === l)
          break;
      }
      var c = h.edgesWith(h), v = h.merge(c);
      n.push(v), s = s.difference(v);
    }
  };
  return e.forEach(function(u) {
    if (u.isNode()) {
      var l = u.id();
      l in r || o(l);
    }
  }), {
    cut: s,
    components: n
  };
}, lc = {
  tarjanStronglyConnected: Fa,
  tsc: Fa,
  tscc: Fa,
  tarjanStronglyConnectedComponents: Fa
}, Bo = {};
[da, zf, Vf, $f, _f, Xf, Kf, Eh, kr, Pr, Zn, Rh, Xh, Jh, ic, oc, uc, lc].forEach(function(t) {
  be(Bo, t);
});
/*!
Embeddable Minimum Strictly-Compliant Promises/A+ 1.1.1 Thenable
Copyright (c) 2013-2014 Ralf S. Engelschall (http://engelschall.com)
Licensed under The MIT License (http://opensource.org/licenses/MIT)
*/
var Fo = 0, Go = 1, zo = 2, _t = function t(e) {
  if (!(this instanceof t))
    return new t(e);
  this.id = "Thenable/1.0.7", this.state = Fo, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], this.proxy = {
    then: this.then.bind(this)
  }, typeof e == "function" && e.call(this, this.fulfill.bind(this), this.reject.bind(this));
};
_t.prototype = {
  /*  promise resolving methods  */
  fulfill: function(e) {
    return cs(this, Go, "fulfillValue", e);
  },
  reject: function(e) {
    return cs(this, zo, "rejectReason", e);
  },
  /*  "The then Method" [Promises/A+ 1.1, 1.2, 2.2]  */
  then: function(e, r) {
    var a = this, n = new _t();
    return a.onFulfilled.push(ds(e, n, "fulfill")), a.onRejected.push(ds(r, n, "reject")), Vo(a), n.proxy;
  }
};
var cs = function(e, r, a, n) {
  return e.state === Fo && (e.state = r, e[a] = n, Vo(e)), e;
}, Vo = function(e) {
  e.state === Go ? vs(e, "onFulfilled", e.fulfillValue) : e.state === zo && vs(e, "onRejected", e.rejectReason);
}, vs = function(e, r, a) {
  if (e[r].length !== 0) {
    var n = e[r];
    e[r] = [];
    var i = function() {
      for (var o = 0; o < n.length; o++)
        n[o](a);
    };
    typeof setImmediate == "function" ? setImmediate(i) : setTimeout(i, 0);
  }
}, ds = function(e, r, a) {
  return function(n) {
    if (typeof e != "function")
      r[a].call(r, n);
    else {
      var i;
      try {
        i = e(n);
      } catch (s) {
        r.reject(s);
        return;
      }
      fc(r, i);
    }
  };
}, fc = function t(e, r) {
  if (e === r || e.proxy === r) {
    e.reject(new TypeError("cannot resolve promise with itself"));
    return;
  }
  var a;
  if (Xe(r) === "object" && r !== null || typeof r == "function")
    try {
      a = r.then;
    } catch (i) {
      e.reject(i);
      return;
    }
  if (typeof a == "function") {
    var n = !1;
    try {
      a.call(
        r,
        /*  resolvePromise  */
        /*  [Promises/A+ 2.3.3.3.1]  */
        function(i) {
          n || (n = !0, i === r ? e.reject(new TypeError("circular thenable chain")) : t(e, i));
        },
        /*  rejectPromise  */
        /*  [Promises/A+ 2.3.3.3.2]  */
        function(i) {
          n || (n = !0, e.reject(i));
        }
      );
    } catch (i) {
      n || e.reject(i);
    }
    return;
  }
  e.fulfill(r);
};
_t.all = function(t) {
  return new _t(function(e, r) {
    for (var a = new Array(t.length), n = 0, i = function(u, l) {
      a[u] = l, n++, n === t.length && e(a);
    }, s = 0; s < t.length; s++)
      (function(o) {
        var u = t[o], l = u != null && u.then != null;
        if (l)
          u.then(function(h) {
            i(o, h);
          }, function(h) {
            r(h);
          });
        else {
          var f = u;
          i(o, f);
        }
      })(s);
  });
};
_t.resolve = function(t) {
  return new _t(function(e, r) {
    e(t);
  });
};
_t.reject = function(t) {
  return new _t(function(e, r) {
    r(t);
  });
};
var $r = typeof Promise != "undefined" ? Promise : _t, Qn = function(e, r, a) {
  var n = gi(e), i = !n, s = this._private = be({
    duration: 1e3
  }, r, a);
  if (s.target = e, s.style = s.style || s.css, s.started = !1, s.playing = !1, s.hooked = !1, s.applying = !1, s.progress = 0, s.completes = [], s.frames = [], s.complete && Ge(s.complete) && s.completes.push(s.complete), i) {
    var o = e.position();
    s.startPosition = s.startPosition || {
      x: o.x,
      y: o.y
    }, s.startStyle = s.startStyle || e.cy().style().getAnimationStartStyle(e, s.style);
  }
  if (n) {
    var u = e.pan();
    s.startPan = {
      x: u.x,
      y: u.y
    }, s.startZoom = e.zoom();
  }
  this.length = 1, this[0] = this;
}, yr = Qn.prototype;
be(yr, {
  instanceString: function() {
    return "animation";
  },
  hook: function() {
    var e = this._private;
    if (!e.hooked) {
      var r, a = e.target._private.animation;
      e.queue ? r = a.queue : r = a.current, r.push(this), pt(e.target) && e.target.cy().addToAnimationPool(e.target), e.hooked = !0;
    }
    return this;
  },
  play: function() {
    var e = this._private;
    return e.progress === 1 && (e.progress = 0), e.playing = !0, e.started = !1, e.stopped = !1, this.hook(), this;
  },
  playing: function() {
    return this._private.playing;
  },
  apply: function() {
    var e = this._private;
    return e.applying = !0, e.started = !1, e.stopped = !1, this.hook(), this;
  },
  applying: function() {
    return this._private.applying;
  },
  pause: function() {
    var e = this._private;
    return e.playing = !1, e.started = !1, this;
  },
  stop: function() {
    var e = this._private;
    return e.playing = !1, e.started = !1, e.stopped = !0, this;
  },
  rewind: function() {
    return this.progress(0);
  },
  fastforward: function() {
    return this.progress(1);
  },
  time: function(e) {
    var r = this._private;
    return e === void 0 ? r.progress * r.duration : this.progress(e / r.duration);
  },
  progress: function(e) {
    var r = this._private, a = r.playing;
    return e === void 0 ? r.progress : (a && this.pause(), r.progress = e, r.started = !1, a && this.play(), this);
  },
  completed: function() {
    return this._private.progress === 1;
  },
  reverse: function() {
    var e = this._private, r = e.playing;
    r && this.pause(), e.progress = 1 - e.progress, e.started = !1;
    var a = function(l, f) {
      var h = e[l];
      h != null && (e[l] = e[f], e[f] = h);
    };
    if (a("zoom", "startZoom"), a("pan", "startPan"), a("position", "startPosition"), e.style)
      for (var n = 0; n < e.style.length; n++) {
        var i = e.style[n], s = i.name, o = e.startStyle[s];
        e.startStyle[s] = i, e.style[n] = o;
      }
    return r && this.play(), this;
  },
  promise: function(e) {
    var r = this._private, a;
    switch (e) {
      case "frame":
        a = r.frames;
        break;
      default:
      case "complete":
      case "completed":
        a = r.completes;
    }
    return new $r(function(n, i) {
      a.push(function() {
        n();
      });
    });
  }
});
yr.complete = yr.completed;
yr.run = yr.play;
yr.running = yr.playing;
var hc = {
  animated: function() {
    return function() {
      var r = this, a = r.length !== void 0, n = a ? r : [r], i = this._private.cy || this;
      if (!i.styleEnabled())
        return !1;
      var s = n[0];
      if (s)
        return s._private.animation.current.length > 0;
    };
  },
  // animated
  clearQueue: function() {
    return function() {
      var r = this, a = r.length !== void 0, n = a ? r : [r], i = this._private.cy || this;
      if (!i.styleEnabled())
        return this;
      for (var s = 0; s < n.length; s++) {
        var o = n[s];
        o._private.animation.queue = [];
      }
      return this;
    };
  },
  // clearQueue
  delay: function() {
    return function(r, a) {
      var n = this._private.cy || this;
      return n.styleEnabled() ? this.animate({
        delay: r,
        duration: r,
        complete: a
      }) : this;
    };
  },
  // delay
  delayAnimation: function() {
    return function(r, a) {
      var n = this._private.cy || this;
      return n.styleEnabled() ? this.animation({
        delay: r,
        duration: r,
        complete: a
      }) : this;
    };
  },
  // delay
  animation: function() {
    return function(r, a) {
      var n = this, i = n.length !== void 0, s = i ? n : [n], o = this._private.cy || this, u = !i, l = !u;
      if (!o.styleEnabled())
        return this;
      var f = o.style();
      r = be({}, r, a);
      var h = Object.keys(r).length === 0;
      if (h)
        return new Qn(s[0], r);
      switch (r.duration === void 0 && (r.duration = 400), r.duration) {
        case "slow":
          r.duration = 600;
          break;
        case "fast":
          r.duration = 200;
          break;
      }
      if (l && (r.style = f.getPropsList(r.style || r.css), r.css = void 0), l && r.renderedPosition != null) {
        var d = r.renderedPosition, c = o.pan(), v = o.zoom();
        r.position = Do(d, v, c);
      }
      if (u && r.panBy != null) {
        var p = r.panBy, g = o.pan();
        r.pan = {
          x: g.x + p.x,
          y: g.y + p.y
        };
      }
      var y = r.center || r.centre;
      if (u && y != null) {
        var b = o.getCenterPan(y.eles, r.zoom);
        b != null && (r.pan = b);
      }
      if (u && r.fit != null) {
        var m = r.fit, T = o.getFitViewport(m.eles || m.boundingBox, m.padding);
        T != null && (r.pan = T.pan, r.zoom = T.zoom);
      }
      if (u && Ce(r.zoom)) {
        var C = o.getZoomedViewport(r.zoom);
        C != null ? (C.zoomed && (r.zoom = C.zoom), C.panned && (r.pan = C.pan)) : r.zoom = null;
      }
      return new Qn(s[0], r);
    };
  },
  // animate
  animate: function() {
    return function(r, a) {
      var n = this, i = n.length !== void 0, s = i ? n : [n], o = this._private.cy || this;
      if (!o.styleEnabled())
        return this;
      a && (r = be({}, r, a));
      for (var u = 0; u < s.length; u++) {
        var l = s[u], f = l.animated() && (r.queue === void 0 || r.queue), h = l.animation(r, f ? {
          queue: !0
        } : void 0);
        h.play();
      }
      return this;
    };
  },
  // animate
  stop: function() {
    return function(r, a) {
      var n = this, i = n.length !== void 0, s = i ? n : [n], o = this._private.cy || this;
      if (!o.styleEnabled())
        return this;
      for (var u = 0; u < s.length; u++) {
        for (var l = s[u], f = l._private, h = f.animation.current, d = 0; d < h.length; d++) {
          var c = h[d], v = c._private;
          a && (v.duration = 0);
        }
        r && (f.animation.queue = []), a || (f.animation.current = []);
      }
      return o.notify("draw"), this;
    };
  }
  // stop
}, cc = Array.isArray, bn = cc, vc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, dc = /^\w*$/;
function gc(t, e) {
  if (bn(t))
    return !1;
  var r = typeof t;
  return r == "number" || r == "symbol" || r == "boolean" || t == null || Ca(t) ? !0 : dc.test(t) || !vc.test(t) || e != null && t in Object(e);
}
var pc = gc, yc = "[object AsyncFunction]", mc = "[object Function]", bc = "[object GeneratorFunction]", Ec = "[object Proxy]";
function wc(t) {
  if (!vr(t))
    return !1;
  var e = po(t);
  return e == mc || e == bc || e == yc || e == Ec;
}
var xc = wc, Tc = dn["__core-js_shared__"], Gn = Tc, gs = function() {
  var t = /[^.]+$/.exec(Gn && Gn.keys && Gn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Cc(t) {
  return !!gs && gs in t;
}
var Dc = Cc, Sc = Function.prototype, Lc = Sc.toString;
function Ac(t) {
  if (t != null) {
    try {
      return Lc.call(t);
    } catch (e) {
    }
    try {
      return t + "";
    } catch (e) {
    }
  }
  return "";
}
var Oc = Ac, Nc = /[\\^$.*+?()[\]{}|]/g, Ic = /^\[object .+?Constructor\]$/, Mc = Function.prototype, Rc = Object.prototype, kc = Mc.toString, Pc = Rc.hasOwnProperty, Bc = RegExp(
  "^" + kc.call(Pc).replace(Nc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Fc(t) {
  if (!vr(t) || Dc(t))
    return !1;
  var e = xc(t) ? Bc : Ic;
  return e.test(Oc(t));
}
var Gc = Fc;
function zc(t, e) {
  return t == null ? void 0 : t[e];
}
var Vc = zc;
function Uc(t, e) {
  var r = Vc(t, e);
  return Gc(r) ? r : void 0;
}
var Ci = Uc, $c = Ci(Object, "create"), ya = $c;
function Yc() {
  this.__data__ = ya ? ya(null) : {}, this.size = 0;
}
var _c = Yc;
function Hc(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Xc = Hc, qc = "__lodash_hash_undefined__", Wc = Object.prototype, Kc = Wc.hasOwnProperty;
function Zc(t) {
  var e = this.__data__;
  if (ya) {
    var r = e[t];
    return r === qc ? void 0 : r;
  }
  return Kc.call(e, t) ? e[t] : void 0;
}
var Qc = Zc, Jc = Object.prototype, jc = Jc.hasOwnProperty;
function ev(t) {
  var e = this.__data__;
  return ya ? e[t] !== void 0 : jc.call(e, t);
}
var tv = ev, rv = "__lodash_hash_undefined__";
function av(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = ya && e === void 0 ? rv : e, this;
}
var nv = av;
function Yr(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var a = t[e];
    this.set(a[0], a[1]);
  }
}
Yr.prototype.clear = _c;
Yr.prototype.delete = Xc;
Yr.prototype.get = Qc;
Yr.prototype.has = tv;
Yr.prototype.set = nv;
var ps = Yr;
function iv() {
  this.__data__ = [], this.size = 0;
}
var sv = iv;
function ov(t, e) {
  return t === e || t !== t && e !== e;
}
var Uo = ov;
function uv(t, e) {
  for (var r = t.length; r--; )
    if (Uo(t[r][0], e))
      return r;
  return -1;
}
var En = uv, lv = Array.prototype, fv = lv.splice;
function hv(t) {
  var e = this.__data__, r = En(e, t);
  if (r < 0)
    return !1;
  var a = e.length - 1;
  return r == a ? e.pop() : fv.call(e, r, 1), --this.size, !0;
}
var cv = hv;
function vv(t) {
  var e = this.__data__, r = En(e, t);
  return r < 0 ? void 0 : e[r][1];
}
var dv = vv;
function gv(t) {
  return En(this.__data__, t) > -1;
}
var pv = gv;
function yv(t, e) {
  var r = this.__data__, a = En(r, t);
  return a < 0 ? (++this.size, r.push([t, e])) : r[a][1] = e, this;
}
var mv = yv;
function _r(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var a = t[e];
    this.set(a[0], a[1]);
  }
}
_r.prototype.clear = sv;
_r.prototype.delete = cv;
_r.prototype.get = dv;
_r.prototype.has = pv;
_r.prototype.set = mv;
var bv = _r, Ev = Ci(dn, "Map"), wv = Ev;
function xv() {
  this.size = 0, this.__data__ = {
    hash: new ps(),
    map: new (wv || bv)(),
    string: new ps()
  };
}
var Tv = xv;
function Cv(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
var Dv = Cv;
function Sv(t, e) {
  var r = t.__data__;
  return Dv(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
var wn = Sv;
function Lv(t) {
  var e = wn(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
var Av = Lv;
function Ov(t) {
  return wn(this, t).get(t);
}
var Nv = Ov;
function Iv(t) {
  return wn(this, t).has(t);
}
var Mv = Iv;
function Rv(t, e) {
  var r = wn(this, t), a = r.size;
  return r.set(t, e), this.size += r.size == a ? 0 : 1, this;
}
var kv = Rv;
function Hr(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var a = t[e];
    this.set(a[0], a[1]);
  }
}
Hr.prototype.clear = Tv;
Hr.prototype.delete = Av;
Hr.prototype.get = Nv;
Hr.prototype.has = Mv;
Hr.prototype.set = kv;
var $o = Hr, Pv = "Expected a function";
function Di(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Pv);
  var r = function() {
    var a = arguments, n = e ? e.apply(this, a) : a[0], i = r.cache;
    if (i.has(n))
      return i.get(n);
    var s = t.apply(this, a);
    return r.cache = i.set(n, s) || i, s;
  };
  return r.cache = new (Di.Cache || $o)(), r;
}
Di.Cache = $o;
var Bv = Di, Fv = 500;
function Gv(t) {
  var e = Bv(t, function(a) {
    return r.size === Fv && r.clear(), a;
  }), r = e.cache;
  return e;
}
var zv = Gv, Vv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Uv = /\\(\\)?/g, $v = zv(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(Vv, function(r, a, n, i) {
    e.push(n ? i.replace(Uv, "$1") : a || r);
  }), e;
}), Yo = $v;
function Yv(t, e) {
  for (var r = -1, a = t == null ? 0 : t.length, n = Array(a); ++r < a; )
    n[r] = e(t[r], r, t);
  return n;
}
var _o = Yv, _v = 1 / 0, ys = Fr ? Fr.prototype : void 0, ms = ys ? ys.toString : void 0;
function Ho(t) {
  if (typeof t == "string")
    return t;
  if (bn(t))
    return _o(t, Ho) + "";
  if (Ca(t))
    return ms ? ms.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -_v ? "-0" : e;
}
var Hv = Ho;
function Xv(t) {
  return t == null ? "" : Hv(t);
}
var Xo = Xv;
function qv(t, e) {
  return bn(t) ? t : pc(t, e) ? [t] : Yo(Xo(t));
}
var qo = qv, Wv = 1 / 0;
function Kv(t) {
  if (typeof t == "string" || Ca(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -Wv ? "-0" : e;
}
var Si = Kv;
function Zv(t, e) {
  e = qo(e, t);
  for (var r = 0, a = e.length; t != null && r < a; )
    t = t[Si(e[r++])];
  return r && r == a ? t : void 0;
}
var Qv = Zv;
function Jv(t, e, r) {
  var a = t == null ? void 0 : Qv(t, e);
  return a === void 0 ? r : a;
}
var jv = Jv, ed = function() {
  try {
    var t = Ci(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch (e) {
  }
}(), bs = ed;
function td(t, e, r) {
  e == "__proto__" && bs ? bs(t, e, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : t[e] = r;
}
var rd = td, ad = Object.prototype, nd = ad.hasOwnProperty;
function id(t, e, r) {
  var a = t[e];
  (!(nd.call(t, e) && Uo(a, r)) || r === void 0 && !(e in t)) && rd(t, e, r);
}
var sd = id, od = 9007199254740991, ud = /^(?:0|[1-9]\d*)$/;
function ld(t, e) {
  var r = typeof t;
  return e = e == null ? od : e, !!e && (r == "number" || r != "symbol" && ud.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
var fd = ld;
function hd(t, e, r, a) {
  if (!vr(t))
    return t;
  e = qo(e, t);
  for (var n = -1, i = e.length, s = i - 1, o = t; o != null && ++n < i; ) {
    var u = Si(e[n]), l = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return t;
    if (n != s) {
      var f = o[u];
      l = a ? a(f, u, o) : void 0, l === void 0 && (l = vr(f) ? f : fd(e[n + 1]) ? [] : {});
    }
    sd(o, u, l), o = o[u];
  }
  return t;
}
var cd = hd;
function vd(t, e, r) {
  return t == null ? t : cd(t, e, r);
}
var dd = vd;
function gd(t, e) {
  var r = -1, a = t.length;
  for (e || (e = Array(a)); ++r < a; )
    e[r] = t[r];
  return e;
}
var pd = gd;
function yd(t) {
  return bn(t) ? _o(t, Si) : Ca(t) ? [t] : pd(Yo(Xo(t)));
}
var md = yd, bd = {
  // access data field
  data: function(e) {
    var r = {
      field: "data",
      bindingEvent: "data",
      allowBinding: !1,
      allowSetting: !1,
      allowGetting: !1,
      settingEvent: "data",
      settingTriggersEvent: !1,
      triggerFnName: "trigger",
      immutableKeys: {},
      // key => true if immutable
      updateStyle: !1,
      beforeGet: function(n) {
      },
      beforeSet: function(n, i) {
      },
      onSet: function(n) {
      },
      canSet: function(n) {
        return !0;
      }
    };
    return e = be({}, r, e), function(n, i) {
      var s = e, o = this, u = o.length !== void 0, l = u ? o : [o], f = u ? o[0] : o;
      if (ve(n)) {
        var h = n.indexOf(".") !== -1, d = h && md(n);
        if (s.allowGetting && i === void 0) {
          var c;
          return f && (s.beforeGet(f), d && f._private[s.field][n] === void 0 ? c = jv(f._private[s.field], d) : c = f._private[s.field][n]), c;
        } else if (s.allowSetting && i !== void 0) {
          var v = !s.immutableKeys[n];
          if (v) {
            var p = io({}, n, i);
            s.beforeSet(o, p);
            for (var g = 0, y = l.length; g < y; g++) {
              var b = l[g];
              s.canSet(b) && (d && f._private[s.field][n] === void 0 ? dd(b._private[s.field], d, i) : b._private[s.field][n] = i);
            }
            s.updateStyle && o.updateStyle(), s.onSet(o), s.settingTriggersEvent && o[s.triggerFnName](s.settingEvent);
          }
        }
      } else if (s.allowSetting && Ce(n)) {
        var m = n, T, C, S = Object.keys(m);
        s.beforeSet(o, m);
        for (var E = 0; E < S.length; E++) {
          T = S[E], C = m[T];
          var x = !s.immutableKeys[T];
          if (x)
            for (var w = 0; w < l.length; w++) {
              var D = l[w];
              s.canSet(D) && (D._private[s.field][T] = C);
            }
        }
        s.updateStyle && o.updateStyle(), s.onSet(o), s.settingTriggersEvent && o[s.triggerFnName](s.settingEvent);
      } else if (s.allowBinding && Ge(n)) {
        var L = n;
        o.on(s.bindingEvent, L);
      } else if (s.allowGetting && n === void 0) {
        var A;
        return f && (s.beforeGet(f), A = f._private[s.field]), A;
      }
      return o;
    };
  },
  // data
  // remove data field
  removeData: function(e) {
    var r = {
      field: "data",
      event: "data",
      triggerFnName: "trigger",
      triggerEvent: !1,
      immutableKeys: {}
      // key => true if immutable
    };
    return e = be({}, r, e), function(n) {
      var i = e, s = this, o = s.length !== void 0, u = o ? s : [s];
      if (ve(n)) {
        for (var l = n.split(/\s+/), f = l.length, h = 0; h < f; h++) {
          var d = l[h];
          if (!jt(d)) {
            var c = !i.immutableKeys[d];
            if (c)
              for (var v = 0, p = u.length; v < p; v++)
                u[v]._private[i.field][d] = void 0;
          }
        }
        i.triggerEvent && s[i.triggerFnName](i.event);
      } else if (n === void 0) {
        for (var g = 0, y = u.length; g < y; g++)
          for (var b = u[g]._private[i.field], m = Object.keys(b), T = 0; T < m.length; T++) {
            var C = m[T], S = !i.immutableKeys[C];
            S && (b[C] = void 0);
          }
        i.triggerEvent && s[i.triggerFnName](i.event);
      }
      return s;
    };
  }
  // removeData
}, Ed = {
  eventAliasesOn: function(e) {
    var r = e;
    r.addListener = r.listen = r.bind = r.on, r.unlisten = r.unbind = r.off = r.removeListener, r.trigger = r.emit, r.pon = r.promiseOn = function(a, n) {
      var i = this, s = Array.prototype.slice.call(arguments, 0);
      return new $r(function(o, u) {
        var l = function(c) {
          i.off.apply(i, h), o(c);
        }, f = s.concat([l]), h = f.concat([]);
        i.on.apply(i, f);
      });
    };
  }
}, Oe = {};
[hc, bd, Ed].forEach(function(t) {
  be(Oe, t);
});
var wd = {
  animate: Oe.animate(),
  animation: Oe.animation(),
  animated: Oe.animated(),
  clearQueue: Oe.clearQueue(),
  delay: Oe.delay(),
  delayAnimation: Oe.delayAnimation(),
  stop: Oe.stop()
}, Xa = {
  classes: function(e) {
    var r = this;
    if (e === void 0) {
      var a = [];
      return r[0]._private.classes.forEach(function(v) {
        return a.push(v);
      }), a;
    } else
      Re(e) || (e = (e || "").match(/\S+/g) || []);
    for (var n = [], i = new Ur(e), s = 0; s < r.length; s++) {
      for (var o = r[s], u = o._private, l = u.classes, f = !1, h = 0; h < e.length; h++) {
        var d = e[h], c = l.has(d);
        if (!c) {
          f = !0;
          break;
        }
      }
      f || (f = l.size !== e.length), f && (u.classes = i, n.push(o));
    }
    return n.length > 0 && this.spawn(n).updateStyle().emit("class"), r;
  },
  addClass: function(e) {
    return this.toggleClass(e, !0);
  },
  hasClass: function(e) {
    var r = this[0];
    return r != null && r._private.classes.has(e);
  },
  toggleClass: function(e, r) {
    Re(e) || (e = e.match(/\S+/g) || []);
    for (var a = this, n = r === void 0, i = [], s = 0, o = a.length; s < o; s++)
      for (var u = a[s], l = u._private.classes, f = !1, h = 0; h < e.length; h++) {
        var d = e[h], c = l.has(d), v = !1;
        r || n && !c ? (l.add(d), v = !0) : (!r || n && c) && (l.delete(d), v = !0), !f && v && (i.push(u), f = !0);
      }
    return i.length > 0 && this.spawn(i).updateStyle().emit("class"), a;
  },
  removeClass: function(e) {
    return this.toggleClass(e, !1);
  },
  flashClass: function(e, r) {
    var a = this;
    if (r == null)
      r = 250;
    else if (r === 0)
      return a;
    return a.addClass(e), setTimeout(function() {
      a.removeClass(e);
    }, r), a;
  }
};
Xa.className = Xa.classNames = Xa.classes;
var Te = {
  metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
  // chars we need to escape in let names, etc
  comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
  // binary comparison op (used in data selectors)
  boolOp: "\\?|\\!|\\^",
  // boolean (unary) operators (used in data selectors)
  string: `"(?:\\\\"|[^"])*"|'(?:\\\\'|[^'])*'`,
  // string literals (used in data selectors) -- doublequotes | singlequotes
  number: He,
  // number literal (used in data selectors) --- e.g. 0.1234, 1234, 12e123
  meta: "degree|indegree|outdegree",
  // allowed metadata fields (i.e. allowed functions to use from Collection)
  separator: "\\s*,\\s*",
  // queries are separated by commas, e.g. edge[foo = 'bar'], node.someClass
  descendant: "\\s+",
  child: "\\s+>\\s+",
  subject: "\\$",
  group: "node|edge|\\*",
  directedEdge: "\\s+->\\s+",
  undirectedEdge: "\\s+<->\\s+"
};
Te.variable = "(?:[\\w-.]|(?:\\\\" + Te.metaChar + "))+";
Te.className = "(?:[\\w-]|(?:\\\\" + Te.metaChar + "))+";
Te.value = Te.string + "|" + Te.number;
Te.id = Te.variable;
(function() {
  var t, e, r;
  for (t = Te.comparatorOp.split("|"), r = 0; r < t.length; r++)
    e = t[r], Te.comparatorOp += "|@" + e;
  for (t = Te.comparatorOp.split("|"), r = 0; r < t.length; r++)
    e = t[r], !(e.indexOf("!") >= 0) && e !== "=" && (Te.comparatorOp += "|\\!" + e);
})();
var Ie = function() {
  return {
    checks: []
  };
}, se = {
  /** E.g. node */
  GROUP: 0,
  /** A collection of elements */
  COLLECTION: 1,
  /** A filter(ele) function */
  FILTER: 2,
  /** E.g. [foo > 1] */
  DATA_COMPARE: 3,
  /** E.g. [foo] */
  DATA_EXIST: 4,
  /** E.g. [?foo] */
  DATA_BOOL: 5,
  /** E.g. [[degree > 2]] */
  META_COMPARE: 6,
  /** E.g. :selected */
  STATE: 7,
  /** E.g. #foo */
  ID: 8,
  /** E.g. .foo */
  CLASS: 9,
  /** E.g. #foo <-> #bar */
  UNDIRECTED_EDGE: 10,
  /** E.g. #foo -> #bar */
  DIRECTED_EDGE: 11,
  /** E.g. $#foo -> #bar */
  NODE_SOURCE: 12,
  /** E.g. #foo -> $#bar */
  NODE_TARGET: 13,
  /** E.g. $#foo <-> #bar */
  NODE_NEIGHBOR: 14,
  /** E.g. #foo > #bar */
  CHILD: 15,
  /** E.g. #foo #bar */
  DESCENDANT: 16,
  /** E.g. $#foo > #bar */
  PARENT: 17,
  /** E.g. $#foo #bar */
  ANCESTOR: 18,
  /** E.g. #foo > $bar > #baz */
  COMPOUND_SPLIT: 19,
  /** Always matches, useful placeholder for subject in `COMPOUND_SPLIT` */
  TRUE: 20
}, Jn = [{
  selector: ":selected",
  matches: function(e) {
    return e.selected();
  }
}, {
  selector: ":unselected",
  matches: function(e) {
    return !e.selected();
  }
}, {
  selector: ":selectable",
  matches: function(e) {
    return e.selectable();
  }
}, {
  selector: ":unselectable",
  matches: function(e) {
    return !e.selectable();
  }
}, {
  selector: ":locked",
  matches: function(e) {
    return e.locked();
  }
}, {
  selector: ":unlocked",
  matches: function(e) {
    return !e.locked();
  }
}, {
  selector: ":visible",
  matches: function(e) {
    return e.visible();
  }
}, {
  selector: ":hidden",
  matches: function(e) {
    return !e.visible();
  }
}, {
  selector: ":transparent",
  matches: function(e) {
    return e.transparent();
  }
}, {
  selector: ":grabbed",
  matches: function(e) {
    return e.grabbed();
  }
}, {
  selector: ":free",
  matches: function(e) {
    return !e.grabbed();
  }
}, {
  selector: ":removed",
  matches: function(e) {
    return e.removed();
  }
}, {
  selector: ":inside",
  matches: function(e) {
    return !e.removed();
  }
}, {
  selector: ":grabbable",
  matches: function(e) {
    return e.grabbable();
  }
}, {
  selector: ":ungrabbable",
  matches: function(e) {
    return !e.grabbable();
  }
}, {
  selector: ":animated",
  matches: function(e) {
    return e.animated();
  }
}, {
  selector: ":unanimated",
  matches: function(e) {
    return !e.animated();
  }
}, {
  selector: ":parent",
  matches: function(e) {
    return e.isParent();
  }
}, {
  selector: ":childless",
  matches: function(e) {
    return e.isChildless();
  }
}, {
  selector: ":child",
  matches: function(e) {
    return e.isChild();
  }
}, {
  selector: ":orphan",
  matches: function(e) {
    return e.isOrphan();
  }
}, {
  selector: ":nonorphan",
  matches: function(e) {
    return e.isChild();
  }
}, {
  selector: ":compound",
  matches: function(e) {
    return e.isNode() ? e.isParent() : e.source().isParent() || e.target().isParent();
  }
}, {
  selector: ":loop",
  matches: function(e) {
    return e.isLoop();
  }
}, {
  selector: ":simple",
  matches: function(e) {
    return e.isSimple();
  }
}, {
  selector: ":active",
  matches: function(e) {
    return e.active();
  }
}, {
  selector: ":inactive",
  matches: function(e) {
    return !e.active();
  }
}, {
  selector: ":backgrounding",
  matches: function(e) {
    return e.backgrounding();
  }
}, {
  selector: ":nonbackgrounding",
  matches: function(e) {
    return !e.backgrounding();
  }
}].sort(function(t, e) {
  return Ml(t.selector, e.selector);
}), xd = function() {
  for (var t = {}, e, r = 0; r < Jn.length; r++)
    e = Jn[r], t[e.selector] = e.matches;
  return t;
}(), Td = function(e, r) {
  return xd[e](r);
}, Cd = "(" + Jn.map(function(t) {
  return t.selector;
}).join("|") + ")", Cr = function(e) {
  return e.replace(new RegExp("\\\\(" + Te.metaChar + ")", "g"), function(r, a) {
    return a;
  });
}, Wt = function(e, r, a) {
  e[e.length - 1] = a;
}, jn = [{
  name: "group",
  // just used for identifying when debugging
  query: !0,
  regex: "(" + Te.group + ")",
  populate: function(e, r, a) {
    var n = St(a, 1), i = n[0];
    r.checks.push({
      type: se.GROUP,
      value: i === "*" ? i : i + "s"
    });
  }
}, {
  name: "state",
  query: !0,
  regex: Cd,
  populate: function(e, r, a) {
    var n = St(a, 1), i = n[0];
    r.checks.push({
      type: se.STATE,
      value: i
    });
  }
}, {
  name: "id",
  query: !0,
  regex: "\\#(" + Te.id + ")",
  populate: function(e, r, a) {
    var n = St(a, 1), i = n[0];
    r.checks.push({
      type: se.ID,
      value: Cr(i)
    });
  }
}, {
  name: "className",
  query: !0,
  regex: "\\.(" + Te.className + ")",
  populate: function(e, r, a) {
    var n = St(a, 1), i = n[0];
    r.checks.push({
      type: se.CLASS,
      value: Cr(i)
    });
  }
}, {
  name: "dataExists",
  query: !0,
  regex: "\\[\\s*(" + Te.variable + ")\\s*\\]",
  populate: function(e, r, a) {
    var n = St(a, 1), i = n[0];
    r.checks.push({
      type: se.DATA_EXIST,
      field: Cr(i)
    });
  }
}, {
  name: "dataCompare",
  query: !0,
  regex: "\\[\\s*(" + Te.variable + ")\\s*(" + Te.comparatorOp + ")\\s*(" + Te.value + ")\\s*\\]",
  populate: function(e, r, a) {
    var n = St(a, 3), i = n[0], s = n[1], o = n[2], u = new RegExp("^" + Te.string + "$").exec(o) != null;
    u ? o = o.substring(1, o.length - 1) : o = parseFloat(o), r.checks.push({
      type: se.DATA_COMPARE,
      field: Cr(i),
      operator: s,
      value: o
    });
  }
}, {
  name: "dataBool",
  query: !0,
  regex: "\\[\\s*(" + Te.boolOp + ")\\s*(" + Te.variable + ")\\s*\\]",
  populate: function(e, r, a) {
    var n = St(a, 2), i = n[0], s = n[1];
    r.checks.push({
      type: se.DATA_BOOL,
      field: Cr(s),
      operator: i
    });
  }
}, {
  name: "metaCompare",
  query: !0,
  regex: "\\[\\[\\s*(" + Te.meta + ")\\s*(" + Te.comparatorOp + ")\\s*(" + Te.number + ")\\s*\\]\\]",
  populate: function(e, r, a) {
    var n = St(a, 3), i = n[0], s = n[1], o = n[2];
    r.checks.push({
      type: se.META_COMPARE,
      field: Cr(i),
      operator: s,
      value: parseFloat(o)
    });
  }
}, {
  name: "nextQuery",
  separator: !0,
  regex: Te.separator,
  populate: function(e, r) {
    var a = e.currentSubject, n = e.edgeCount, i = e.compoundCount, s = e[e.length - 1];
    a != null && (s.subject = a, e.currentSubject = null), s.edgeCount = n, s.compoundCount = i, e.edgeCount = 0, e.compoundCount = 0;
    var o = e[e.length++] = Ie();
    return o;
  }
}, {
  name: "directedEdge",
  separator: !0,
  regex: Te.directedEdge,
  populate: function(e, r) {
    if (e.currentSubject == null) {
      var a = Ie(), n = r, i = Ie();
      return a.checks.push({
        type: se.DIRECTED_EDGE,
        source: n,
        target: i
      }), Wt(e, r, a), e.edgeCount++, i;
    } else {
      var s = Ie(), o = r, u = Ie();
      return s.checks.push({
        type: se.NODE_SOURCE,
        source: o,
        target: u
      }), Wt(e, r, s), e.edgeCount++, u;
    }
  }
}, {
  name: "undirectedEdge",
  separator: !0,
  regex: Te.undirectedEdge,
  populate: function(e, r) {
    if (e.currentSubject == null) {
      var a = Ie(), n = r, i = Ie();
      return a.checks.push({
        type: se.UNDIRECTED_EDGE,
        nodes: [n, i]
      }), Wt(e, r, a), e.edgeCount++, i;
    } else {
      var s = Ie(), o = r, u = Ie();
      return s.checks.push({
        type: se.NODE_NEIGHBOR,
        node: o,
        neighbor: u
      }), Wt(e, r, s), u;
    }
  }
}, {
  name: "child",
  separator: !0,
  regex: Te.child,
  populate: function(e, r) {
    if (e.currentSubject == null) {
      var a = Ie(), n = Ie(), i = e[e.length - 1];
      return a.checks.push({
        type: se.CHILD,
        parent: i,
        child: n
      }), Wt(e, r, a), e.compoundCount++, n;
    } else if (e.currentSubject === r) {
      var s = Ie(), o = e[e.length - 1], u = Ie(), l = Ie(), f = Ie(), h = Ie();
      return s.checks.push({
        type: se.COMPOUND_SPLIT,
        left: o,
        right: u,
        subject: l
      }), l.checks = r.checks, r.checks = [{
        type: se.TRUE
      }], h.checks.push({
        type: se.TRUE
      }), u.checks.push({
        type: se.PARENT,
        // type is swapped on right side queries
        parent: h,
        child: f
        // empty for now
      }), Wt(e, o, s), e.currentSubject = l, e.compoundCount++, f;
    } else {
      var d = Ie(), c = Ie(), v = [{
        type: se.PARENT,
        parent: d,
        child: c
      }];
      return d.checks = r.checks, r.checks = v, e.compoundCount++, c;
    }
  }
}, {
  name: "descendant",
  separator: !0,
  regex: Te.descendant,
  populate: function(e, r) {
    if (e.currentSubject == null) {
      var a = Ie(), n = Ie(), i = e[e.length - 1];
      return a.checks.push({
        type: se.DESCENDANT,
        ancestor: i,
        descendant: n
      }), Wt(e, r, a), e.compoundCount++, n;
    } else if (e.currentSubject === r) {
      var s = Ie(), o = e[e.length - 1], u = Ie(), l = Ie(), f = Ie(), h = Ie();
      return s.checks.push({
        type: se.COMPOUND_SPLIT,
        left: o,
        right: u,
        subject: l
      }), l.checks = r.checks, r.checks = [{
        type: se.TRUE
      }], h.checks.push({
        type: se.TRUE
      }), u.checks.push({
        type: se.ANCESTOR,
        // type is swapped on right side queries
        ancestor: h,
        descendant: f
        // empty for now
      }), Wt(e, o, s), e.currentSubject = l, e.compoundCount++, f;
    } else {
      var d = Ie(), c = Ie(), v = [{
        type: se.ANCESTOR,
        ancestor: d,
        descendant: c
      }];
      return d.checks = r.checks, r.checks = v, e.compoundCount++, c;
    }
  }
}, {
  name: "subject",
  modifier: !0,
  regex: Te.subject,
  populate: function(e, r) {
    if (e.currentSubject != null && e.currentSubject !== r)
      return Ne("Redefinition of subject in selector `" + e.toString() + "`"), !1;
    e.currentSubject = r;
    var a = e[e.length - 1], n = a.checks[0], i = n == null ? null : n.type;
    i === se.DIRECTED_EDGE ? n.type = se.NODE_TARGET : i === se.UNDIRECTED_EDGE && (n.type = se.NODE_NEIGHBOR, n.node = n.nodes[1], n.neighbor = n.nodes[0], n.nodes = null);
  }
}];
jn.forEach(function(t) {
  return t.regexObj = new RegExp("^" + t.regex);
});
var Dd = function(e) {
  for (var r, a, n, i = 0; i < jn.length; i++) {
    var s = jn[i], o = s.name, u = e.match(s.regexObj);
    if (u != null) {
      a = u, r = s, n = o;
      var l = u[0];
      e = e.substring(l.length);
      break;
    }
  }
  return {
    expr: r,
    match: a,
    name: n,
    remaining: e
  };
}, Sd = function(e) {
  var r = e.match(/^\s+/);
  if (r) {
    var a = r[0];
    e = e.substring(a.length);
  }
  return e;
}, Ld = function(e) {
  var r = this, a = r.inputText = e, n = r[0] = Ie();
  for (r.length = 1, a = Sd(a); ; ) {
    var i = Dd(a);
    if (i.expr == null)
      return Ne("The selector `" + e + "`is invalid"), !1;
    var s = i.match.slice(1), o = i.expr.populate(r, n, s);
    if (o === !1)
      return !1;
    if (o != null && (n = o), a = i.remaining, a.match(/^\s*$/))
      break;
  }
  var u = r[r.length - 1];
  r.currentSubject != null && (u.subject = r.currentSubject), u.edgeCount = r.edgeCount, u.compoundCount = r.compoundCount;
  for (var l = 0; l < r.length; l++) {
    var f = r[l];
    if (f.compoundCount > 0 && f.edgeCount > 0)
      return Ne("The selector `" + e + "` is invalid because it uses both a compound selector and an edge selector"), !1;
    if (f.edgeCount > 1)
      return Ne("The selector `" + e + "` is invalid because it uses multiple edge selectors"), !1;
    f.edgeCount === 1 && Ne("The selector `" + e + "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.");
  }
  return !0;
}, Ad = function() {
  if (this.toStringCache != null)
    return this.toStringCache;
  for (var e = function(f) {
    return f == null ? "" : f;
  }, r = function(f) {
    return ve(f) ? '"' + f + '"' : e(f);
  }, a = function(f) {
    return " " + f + " ";
  }, n = function(f, h) {
    var d = f.type, c = f.value;
    switch (d) {
      case se.GROUP: {
        var v = e(c);
        return v.substring(0, v.length - 1);
      }
      case se.DATA_COMPARE: {
        var p = f.field, g = f.operator;
        return "[" + p + a(e(g)) + r(c) + "]";
      }
      case se.DATA_BOOL: {
        var y = f.operator, b = f.field;
        return "[" + e(y) + b + "]";
      }
      case se.DATA_EXIST: {
        var m = f.field;
        return "[" + m + "]";
      }
      case se.META_COMPARE: {
        var T = f.operator, C = f.field;
        return "[[" + C + a(e(T)) + r(c) + "]]";
      }
      case se.STATE:
        return c;
      case se.ID:
        return "#" + c;
      case se.CLASS:
        return "." + c;
      case se.PARENT:
      case se.CHILD:
        return i(f.parent, h) + a(">") + i(f.child, h);
      case se.ANCESTOR:
      case se.DESCENDANT:
        return i(f.ancestor, h) + " " + i(f.descendant, h);
      case se.COMPOUND_SPLIT: {
        var S = i(f.left, h), E = i(f.subject, h), x = i(f.right, h);
        return S + (S.length > 0 ? " " : "") + E + x;
      }
      case se.TRUE:
        return "";
    }
  }, i = function(f, h) {
    return f.checks.reduce(function(d, c, v) {
      return d + (h === f && v === 0 ? "$" : "") + n(c, h);
    }, "");
  }, s = "", o = 0; o < this.length; o++) {
    var u = this[o];
    s += i(u, u.subject), this.length > 1 && o < this.length - 1 && (s += ", ");
  }
  return this.toStringCache = s, s;
}, Od = {
  parse: Ld,
  toString: Ad
}, Wo = function(e, r, a) {
  var n, i = ve(e), s = ne(e), o = ve(a), u, l, f = !1, h = !1, d = !1;
  switch (r.indexOf("!") >= 0 && (r = r.replace("!", ""), h = !0), r.indexOf("@") >= 0 && (r = r.replace("@", ""), f = !0), (i || o || f) && (u = !i && !s ? "" : "" + e, l = "" + a), f && (e = u = u.toLowerCase(), a = l = l.toLowerCase()), r) {
    case "*=":
      n = u.indexOf(l) >= 0;
      break;
    case "$=":
      n = u.indexOf(l, u.length - l.length) >= 0;
      break;
    case "^=":
      n = u.indexOf(l) === 0;
      break;
    case "=":
      n = e === a;
      break;
    case ">":
      d = !0, n = e > a;
      break;
    case ">=":
      d = !0, n = e >= a;
      break;
    case "<":
      d = !0, n = e < a;
      break;
    case "<=":
      d = !0, n = e <= a;
      break;
    default:
      n = !1;
      break;
  }
  return h && (e != null || !d) && (n = !n), n;
}, Nd = function(e, r) {
  switch (r) {
    case "?":
      return !!e;
    case "!":
      return !e;
    case "^":
      return e === void 0;
  }
}, Id = function(e) {
  return e !== void 0;
}, Li = function(e, r) {
  return e.data(r);
}, Md = function(e, r) {
  return e[r]();
}, Ve = [], Be = function(e, r) {
  return e.checks.every(function(a) {
    return Ve[a.type](a, r);
  });
};
Ve[se.GROUP] = function(t, e) {
  var r = t.value;
  return r === "*" || r === e.group();
};
Ve[se.STATE] = function(t, e) {
  var r = t.value;
  return Td(r, e);
};
Ve[se.ID] = function(t, e) {
  var r = t.value;
  return e.id() === r;
};
Ve[se.CLASS] = function(t, e) {
  var r = t.value;
  return e.hasClass(r);
};
Ve[se.META_COMPARE] = function(t, e) {
  var r = t.field, a = t.operator, n = t.value;
  return Wo(Md(e, r), a, n);
};
Ve[se.DATA_COMPARE] = function(t, e) {
  var r = t.field, a = t.operator, n = t.value;
  return Wo(Li(e, r), a, n);
};
Ve[se.DATA_BOOL] = function(t, e) {
  var r = t.field, a = t.operator;
  return Nd(Li(e, r), a);
};
Ve[se.DATA_EXIST] = function(t, e) {
  var r = t.field;
  return t.operator, Id(Li(e, r));
};
Ve[se.UNDIRECTED_EDGE] = function(t, e) {
  var r = t.nodes[0], a = t.nodes[1], n = e.source(), i = e.target();
  return Be(r, n) && Be(a, i) || Be(a, n) && Be(r, i);
};
Ve[se.NODE_NEIGHBOR] = function(t, e) {
  return Be(t.node, e) && e.neighborhood().some(function(r) {
    return r.isNode() && Be(t.neighbor, r);
  });
};
Ve[se.DIRECTED_EDGE] = function(t, e) {
  return Be(t.source, e.source()) && Be(t.target, e.target());
};
Ve[se.NODE_SOURCE] = function(t, e) {
  return Be(t.source, e) && e.outgoers().some(function(r) {
    return r.isNode() && Be(t.target, r);
  });
};
Ve[se.NODE_TARGET] = function(t, e) {
  return Be(t.target, e) && e.incomers().some(function(r) {
    return r.isNode() && Be(t.source, r);
  });
};
Ve[se.CHILD] = function(t, e) {
  return Be(t.child, e) && Be(t.parent, e.parent());
};
Ve[se.PARENT] = function(t, e) {
  return Be(t.parent, e) && e.children().some(function(r) {
    return Be(t.child, r);
  });
};
Ve[se.DESCENDANT] = function(t, e) {
  return Be(t.descendant, e) && e.ancestors().some(function(r) {
    return Be(t.ancestor, r);
  });
};
Ve[se.ANCESTOR] = function(t, e) {
  return Be(t.ancestor, e) && e.descendants().some(function(r) {
    return Be(t.descendant, r);
  });
};
Ve[se.COMPOUND_SPLIT] = function(t, e) {
  return Be(t.subject, e) && Be(t.left, e) && Be(t.right, e);
};
Ve[se.TRUE] = function() {
  return !0;
};
Ve[se.COLLECTION] = function(t, e) {
  var r = t.value;
  return r.has(e);
};
Ve[se.FILTER] = function(t, e) {
  var r = t.value;
  return r(e);
};
var Rd = function(e) {
  var r = this;
  if (r.length === 1 && r[0].checks.length === 1 && r[0].checks[0].type === se.ID)
    return e.getElementById(r[0].checks[0].value).collection();
  var a = function(i) {
    for (var s = 0; s < r.length; s++) {
      var o = r[s];
      if (Be(o, i))
        return !0;
    }
    return !1;
  };
  return r.text() == null && (a = function() {
    return !0;
  }), e.filter(a);
}, kd = function(e) {
  for (var r = this, a = 0; a < r.length; a++) {
    var n = r[a];
    if (Be(n, e))
      return !0;
  }
  return !1;
}, Pd = {
  matches: kd,
  filter: Rd
}, tr = function(e) {
  this.inputText = e, this.currentSubject = null, this.compoundCount = 0, this.edgeCount = 0, this.length = 0, e == null || ve(e) && e.match(/^\s*$/) || (pt(e) ? this.addQuery({
    checks: [{
      type: se.COLLECTION,
      value: e.collection()
    }]
  }) : Ge(e) ? this.addQuery({
    checks: [{
      type: se.FILTER,
      value: e
    }]
  }) : ve(e) ? this.parse(e) || (this.invalid = !0) : ze("A selector must be created from a string; found "));
}, rr = tr.prototype;
[Od, Pd].forEach(function(t) {
  return be(rr, t);
});
rr.text = function() {
  return this.inputText;
};
rr.size = function() {
  return this.length;
};
rr.eq = function(t) {
  return this[t];
};
rr.sameText = function(t) {
  return !this.invalid && !t.invalid && this.text() === t.text();
};
rr.addQuery = function(t) {
  this[this.length++] = t;
};
rr.selector = rr.toString;
var Qt = {
  allAre: function(e) {
    var r = new tr(e);
    return this.every(function(a) {
      return r.matches(a);
    });
  },
  is: function(e) {
    var r = new tr(e);
    return this.some(function(a) {
      return r.matches(a);
    });
  },
  some: function(e, r) {
    for (var a = 0; a < this.length; a++) {
      var n = r ? e.apply(r, [this[a], a, this]) : e(this[a], a, this);
      if (n)
        return !0;
    }
    return !1;
  },
  every: function(e, r) {
    for (var a = 0; a < this.length; a++) {
      var n = r ? e.apply(r, [this[a], a, this]) : e(this[a], a, this);
      if (!n)
        return !1;
    }
    return !0;
  },
  same: function(e) {
    if (this === e)
      return !0;
    e = this.cy().collection(e);
    var r = this.length, a = e.length;
    return r !== a ? !1 : r === 1 ? this[0] === e[0] : this.every(function(n) {
      return e.hasElementWithId(n.id());
    });
  },
  anySame: function(e) {
    return e = this.cy().collection(e), this.some(function(r) {
      return e.hasElementWithId(r.id());
    });
  },
  allAreNeighbors: function(e) {
    e = this.cy().collection(e);
    var r = this.neighborhood();
    return e.every(function(a) {
      return r.hasElementWithId(a.id());
    });
  },
  contains: function(e) {
    e = this.cy().collection(e);
    var r = this;
    return e.every(function(a) {
      return r.hasElementWithId(a.id());
    });
  }
};
Qt.allAreNeighbours = Qt.allAreNeighbors;
Qt.has = Qt.contains;
Qt.equal = Qt.equals = Qt.same;
var wt = function(e, r) {
  return function(n, i, s, o) {
    var u = n, l = this, f;
    if (u == null ? f = "" : pt(u) && u.length === 1 && (f = u.id()), l.length === 1 && f) {
      var h = l[0]._private, d = h.traversalCache = h.traversalCache || {}, c = d[r] = d[r] || [], v = dr(f), p = c[v];
      return p || (c[v] = e.call(l, n, i, s, o));
    } else
      return e.call(l, n, i, s, o);
  };
}, Vr = {
  parent: function(e) {
    var r = [];
    if (this.length === 1) {
      var a = this[0]._private.parent;
      if (a)
        return a;
    }
    for (var n = 0; n < this.length; n++) {
      var i = this[n], s = i._private.parent;
      s && r.push(s);
    }
    return this.spawn(r, !0).filter(e);
  },
  parents: function(e) {
    for (var r = [], a = this.parent(); a.nonempty(); ) {
      for (var n = 0; n < a.length; n++) {
        var i = a[n];
        r.push(i);
      }
      a = a.parent();
    }
    return this.spawn(r, !0).filter(e);
  },
  commonAncestors: function(e) {
    for (var r, a = 0; a < this.length; a++) {
      var n = this[a], i = n.parents();
      r = r || i, r = r.intersect(i);
    }
    return r.filter(e);
  },
  orphans: function(e) {
    return this.stdFilter(function(r) {
      return r.isOrphan();
    }).filter(e);
  },
  nonorphans: function(e) {
    return this.stdFilter(function(r) {
      return r.isChild();
    }).filter(e);
  },
  children: wt(function(t) {
    for (var e = [], r = 0; r < this.length; r++)
      for (var a = this[r], n = a._private.children, i = 0; i < n.length; i++)
        e.push(n[i]);
    return this.spawn(e, !0).filter(t);
  }, "children"),
  siblings: function(e) {
    return this.parent().children().not(this).filter(e);
  },
  isParent: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.children.length !== 0;
  },
  isChildless: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.children.length === 0;
  },
  isChild: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.parent != null;
  },
  isOrphan: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.parent == null;
  },
  descendants: function(e) {
    var r = [];
    function a(n) {
      for (var i = 0; i < n.length; i++) {
        var s = n[i];
        r.push(s), s.children().nonempty() && a(s.children());
      }
    }
    return a(this.children()), this.spawn(r, !0).filter(e);
  }
};
function Ai(t, e, r, a) {
  for (var n = [], i = new Ur(), s = t.cy(), o = s.hasCompoundNodes(), u = 0; u < t.length; u++) {
    var l = t[u];
    r ? n.push(l) : o && a(n, i, l);
  }
  for (; n.length > 0; ) {
    var f = n.shift();
    e(f), i.add(f.id()), o && a(n, i, f);
  }
  return t;
}
function Ko(t, e, r) {
  if (r.isParent())
    for (var a = r._private.children, n = 0; n < a.length; n++) {
      var i = a[n];
      e.has(i.id()) || t.push(i);
    }
}
Vr.forEachDown = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return Ai(this, t, e, Ko);
};
function Zo(t, e, r) {
  if (r.isChild()) {
    var a = r._private.parent;
    e.has(a.id()) || t.push(a);
  }
}
Vr.forEachUp = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return Ai(this, t, e, Zo);
};
function Bd(t, e, r) {
  Zo(t, e, r), Ko(t, e, r);
}
Vr.forEachUpAndDown = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return Ai(this, t, e, Bd);
};
Vr.ancestors = Vr.parents;
var ma, Qo;
ma = Qo = {
  data: Oe.data({
    field: "data",
    bindingEvent: "data",
    allowBinding: !0,
    allowSetting: !0,
    settingEvent: "data",
    settingTriggersEvent: !0,
    triggerFnName: "trigger",
    allowGetting: !0,
    immutableKeys: {
      id: !0,
      source: !0,
      target: !0,
      parent: !0
    },
    updateStyle: !0
  }),
  removeData: Oe.removeData({
    field: "data",
    event: "data",
    triggerFnName: "trigger",
    triggerEvent: !0,
    immutableKeys: {
      id: !0,
      source: !0,
      target: !0,
      parent: !0
    },
    updateStyle: !0
  }),
  scratch: Oe.data({
    field: "scratch",
    bindingEvent: "scratch",
    allowBinding: !0,
    allowSetting: !0,
    settingEvent: "scratch",
    settingTriggersEvent: !0,
    triggerFnName: "trigger",
    allowGetting: !0,
    updateStyle: !0
  }),
  removeScratch: Oe.removeData({
    field: "scratch",
    event: "scratch",
    triggerFnName: "trigger",
    triggerEvent: !0,
    updateStyle: !0
  }),
  rscratch: Oe.data({
    field: "rscratch",
    allowBinding: !1,
    allowSetting: !0,
    settingTriggersEvent: !1,
    allowGetting: !0
  }),
  removeRscratch: Oe.removeData({
    field: "rscratch",
    triggerEvent: !1
  }),
  id: function() {
    var e = this[0];
    if (e)
      return e._private.data.id;
  }
};
ma.attr = ma.data;
ma.removeAttr = ma.removeData;
var Fd = Qo, xn = {};
function zn(t) {
  return function(e) {
    var r = this;
    if (e === void 0 && (e = !0), r.length !== 0)
      if (r.isNode() && !r.removed()) {
        for (var a = 0, n = r[0], i = n._private.edges, s = 0; s < i.length; s++) {
          var o = i[s];
          !e && o.isLoop() || (a += t(n, o));
        }
        return a;
      } else
        return;
  };
}
be(xn, {
  degree: zn(function(t, e) {
    return e.source().same(e.target()) ? 2 : 1;
  }),
  indegree: zn(function(t, e) {
    return e.target().same(t) ? 1 : 0;
  }),
  outdegree: zn(function(t, e) {
    return e.source().same(t) ? 1 : 0;
  })
});
function Dr(t, e) {
  return function(r) {
    for (var a, n = this.nodes(), i = 0; i < n.length; i++) {
      var s = n[i], o = s[t](r);
      o !== void 0 && (a === void 0 || e(o, a)) && (a = o);
    }
    return a;
  };
}
be(xn, {
  minDegree: Dr("degree", function(t, e) {
    return t < e;
  }),
  maxDegree: Dr("degree", function(t, e) {
    return t > e;
  }),
  minIndegree: Dr("indegree", function(t, e) {
    return t < e;
  }),
  maxIndegree: Dr("indegree", function(t, e) {
    return t > e;
  }),
  minOutdegree: Dr("outdegree", function(t, e) {
    return t < e;
  }),
  maxOutdegree: Dr("outdegree", function(t, e) {
    return t > e;
  })
});
be(xn, {
  totalDegree: function(e) {
    for (var r = 0, a = this.nodes(), n = 0; n < a.length; n++)
      r += a[n].degree(e);
    return r;
  }
});
var Ot, Jo, jo = function(e, r, a) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    if (!i.locked()) {
      var s = i._private.position, o = {
        x: r.x != null ? r.x - s.x : 0,
        y: r.y != null ? r.y - s.y : 0
      };
      i.isParent() && !(o.x === 0 && o.y === 0) && i.children().shift(o, a), i.dirtyBoundingBoxCache();
    }
  }
}, Es = {
  field: "position",
  bindingEvent: "position",
  allowBinding: !0,
  allowSetting: !0,
  settingEvent: "position",
  settingTriggersEvent: !0,
  triggerFnName: "emitAndNotify",
  allowGetting: !0,
  validKeys: ["x", "y"],
  beforeGet: function(e) {
    e.updateCompoundBounds();
  },
  beforeSet: function(e, r) {
    jo(e, r, !1);
  },
  onSet: function(e) {
    e.dirtyCompoundBoundsCache();
  },
  canSet: function(e) {
    return !e.locked();
  }
};
Ot = Jo = {
  position: Oe.data(Es),
  // position but no notification to renderer
  silentPosition: Oe.data(be({}, Es, {
    allowBinding: !1,
    allowSetting: !0,
    settingTriggersEvent: !1,
    allowGetting: !1,
    beforeSet: function(e, r) {
      jo(e, r, !0);
    },
    onSet: function(e) {
      e.dirtyCompoundBoundsCache();
    }
  })),
  positions: function(e, r) {
    if (Ce(e))
      r ? this.silentPosition(e) : this.position(e);
    else if (Ge(e)) {
      var a = e, n = this.cy();
      n.startBatch();
      for (var i = 0; i < this.length; i++) {
        var s = this[i], o = void 0;
        (o = a(s, i)) && (r ? s.silentPosition(o) : s.position(o));
      }
      n.endBatch();
    }
    return this;
  },
  silentPositions: function(e) {
    return this.positions(e, !0);
  },
  shift: function(e, r, a) {
    var n;
    if (Ce(e) ? (n = {
      x: ne(e.x) ? e.x : 0,
      y: ne(e.y) ? e.y : 0
    }, a = r) : ve(e) && ne(r) && (n = {
      x: 0,
      y: 0
    }, n[e] = r), n != null) {
      var i = this.cy();
      i.startBatch();
      for (var s = 0; s < this.length; s++) {
        var o = this[s];
        if (!(i.hasCompoundNodes() && o.isChild() && o.ancestors().anySame(this))) {
          var u = o.position(), l = {
            x: u.x + n.x,
            y: u.y + n.y
          };
          a ? o.silentPosition(l) : o.position(l);
        }
      }
      i.endBatch();
    }
    return this;
  },
  silentShift: function(e, r) {
    return Ce(e) ? this.shift(e, !0) : ve(e) && ne(r) && this.shift(e, r, !0), this;
  },
  // get/set the rendered (i.e. on screen) positon of the element
  renderedPosition: function(e, r) {
    var a = this[0], n = this.cy(), i = n.zoom(), s = n.pan(), o = Ce(e) ? e : void 0, u = o !== void 0 || r !== void 0 && ve(e);
    if (a && a.isNode())
      if (u)
        for (var l = 0; l < this.length; l++) {
          var f = this[l];
          r !== void 0 ? f.position(e, (r - s[e]) / i) : o !== void 0 && f.position(Do(o, i, s));
        }
      else {
        var h = a.position();
        return o = yn(h, i, s), e === void 0 ? o : o[e];
      }
    else if (!u)
      return;
    return this;
  },
  // get/set the position relative to the parent
  relativePosition: function(e, r) {
    var a = this[0], n = this.cy(), i = Ce(e) ? e : void 0, s = i !== void 0 || r !== void 0 && ve(e), o = n.hasCompoundNodes();
    if (a && a.isNode())
      if (s)
        for (var u = 0; u < this.length; u++) {
          var l = this[u], f = o ? l.parent() : null, h = f && f.length > 0, d = h;
          h && (f = f[0]);
          var c = d ? f.position() : {
            x: 0,
            y: 0
          };
          r !== void 0 ? l.position(e, r + c[e]) : i !== void 0 && l.position({
            x: i.x + c.x,
            y: i.y + c.y
          });
        }
      else {
        var v = a.position(), p = o ? a.parent() : null, g = p && p.length > 0, y = g;
        g && (p = p[0]);
        var b = y ? p.position() : {
          x: 0,
          y: 0
        };
        return i = {
          x: v.x - b.x,
          y: v.y - b.y
        }, e === void 0 ? i : i[e];
      }
    else if (!s)
      return;
    return this;
  }
};
Ot.modelPosition = Ot.point = Ot.position;
Ot.modelPositions = Ot.points = Ot.positions;
Ot.renderedPoint = Ot.renderedPosition;
Ot.relativePoint = Ot.relativePosition;
var Gd = Jo, Br, ir;
Br = ir = {};
ir.renderedBoundingBox = function(t) {
  var e = this.boundingBox(t), r = this.cy(), a = r.zoom(), n = r.pan(), i = e.x1 * a + n.x, s = e.x2 * a + n.x, o = e.y1 * a + n.y, u = e.y2 * a + n.y;
  return {
    x1: i,
    x2: s,
    y1: o,
    y2: u,
    w: s - i,
    h: u - o
  };
};
ir.dirtyCompoundBoundsCache = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = this.cy();
  return !e.styleEnabled() || !e.hasCompoundNodes() ? this : (this.forEachUp(function(r) {
    if (r.isParent()) {
      var a = r._private;
      a.compoundBoundsClean = !1, a.bbCache = null, t || r.emitAndNotify("bounds");
    }
  }), this);
};
ir.updateCompoundBounds = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = this.cy();
  if (!e.styleEnabled() || !e.hasCompoundNodes())
    return this;
  if (!t && e.batching())
    return this;
  function r(s) {
    if (!s.isParent())
      return;
    var o = s._private, u = s.children(), l = s.pstyle("compound-sizing-wrt-labels").value === "include", f = {
      width: {
        val: s.pstyle("min-width").pfValue,
        left: s.pstyle("min-width-bias-left"),
        right: s.pstyle("min-width-bias-right")
      },
      height: {
        val: s.pstyle("min-height").pfValue,
        top: s.pstyle("min-height-bias-top"),
        bottom: s.pstyle("min-height-bias-bottom")
      }
    }, h = u.boundingBox({
      includeLabels: l,
      includeOverlays: !1,
      // updating the compound bounds happens outside of the regular
      // cache cycle (i.e. before fired events)
      useCache: !1
    }), d = o.position;
    (h.w === 0 || h.h === 0) && (h = {
      w: s.pstyle("width").pfValue,
      h: s.pstyle("height").pfValue
    }, h.x1 = d.x - h.w / 2, h.x2 = d.x + h.w / 2, h.y1 = d.y - h.h / 2, h.y2 = d.y + h.h / 2);
    function c(w, D, L) {
      var A = 0, I = 0, O = D + L;
      return w > 0 && O > 0 && (A = D / O * w, I = L / O * w), {
        biasDiff: A,
        biasComplementDiff: I
      };
    }
    function v(w, D, L, A) {
      if (L.units === "%")
        switch (A) {
          case "width":
            return w > 0 ? L.pfValue * w : 0;
          case "height":
            return D > 0 ? L.pfValue * D : 0;
          case "average":
            return w > 0 && D > 0 ? L.pfValue * (w + D) / 2 : 0;
          case "min":
            return w > 0 && D > 0 ? w > D ? L.pfValue * D : L.pfValue * w : 0;
          case "max":
            return w > 0 && D > 0 ? w > D ? L.pfValue * w : L.pfValue * D : 0;
          default:
            return 0;
        }
      else
        return L.units === "px" ? L.pfValue : 0;
    }
    var p = f.width.left.value;
    f.width.left.units === "px" && f.width.val > 0 && (p = p * 100 / f.width.val);
    var g = f.width.right.value;
    f.width.right.units === "px" && f.width.val > 0 && (g = g * 100 / f.width.val);
    var y = f.height.top.value;
    f.height.top.units === "px" && f.height.val > 0 && (y = y * 100 / f.height.val);
    var b = f.height.bottom.value;
    f.height.bottom.units === "px" && f.height.val > 0 && (b = b * 100 / f.height.val);
    var m = c(f.width.val - h.w, p, g), T = m.biasDiff, C = m.biasComplementDiff, S = c(f.height.val - h.h, y, b), E = S.biasDiff, x = S.biasComplementDiff;
    o.autoPadding = v(h.w, h.h, s.pstyle("padding"), s.pstyle("padding-relative-to").value), o.autoWidth = Math.max(h.w, f.width.val), d.x = (-T + h.x1 + h.x2 + C) / 2, o.autoHeight = Math.max(h.h, f.height.val), d.y = (-E + h.y1 + h.y2 + x) / 2;
  }
  for (var a = 0; a < this.length; a++) {
    var n = this[a], i = n._private;
    (!i.compoundBoundsClean || t) && (r(n), e.batching() || (i.compoundBoundsClean = !0));
  }
  return this;
};
var Et = function(e) {
  return e === 1 / 0 || e === -1 / 0 ? 0 : e;
}, Lt = function(e, r, a, n, i) {
  n - r === 0 || i - a === 0 || r == null || a == null || n == null || i == null || (e.x1 = r < e.x1 ? r : e.x1, e.x2 = n > e.x2 ? n : e.x2, e.y1 = a < e.y1 ? a : e.y1, e.y2 = i > e.y2 ? i : e.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1);
}, lr = function(e, r) {
  return r == null ? e : Lt(e, r.x1, r.y1, r.x2, r.y2);
}, ta = function(e, r, a) {
  return At(e, r, a);
}, Ga = function(e, r, a) {
  if (!r.cy().headless()) {
    var n = r._private, i = n.rstyle, s = i.arrowWidth / 2, o = r.pstyle(a + "-arrow-shape").value, u, l;
    if (o !== "none") {
      a === "source" ? (u = i.srcX, l = i.srcY) : a === "target" ? (u = i.tgtX, l = i.tgtY) : (u = i.midX, l = i.midY);
      var f = n.arrowBounds = n.arrowBounds || {}, h = f[a] = f[a] || {};
      h.x1 = u - s, h.y1 = l - s, h.x2 = u + s, h.y2 = l + s, h.w = h.x2 - h.x1, h.h = h.y2 - h.y1, _a(h, 1), Lt(e, h.x1, h.y1, h.x2, h.y2);
    }
  }
}, Vn = function(e, r, a) {
  if (!r.cy().headless()) {
    var n;
    a ? n = a + "-" : n = "";
    var i = r._private, s = i.rstyle, o = r.pstyle(n + "label").strValue;
    if (o) {
      var u = r.pstyle("text-halign"), l = r.pstyle("text-valign"), f = ta(s, "labelWidth", a), h = ta(s, "labelHeight", a), d = ta(s, "labelX", a), c = ta(s, "labelY", a), v = r.pstyle(n + "text-margin-x").pfValue, p = r.pstyle(n + "text-margin-y").pfValue, g = r.isEdge(), y = r.pstyle(n + "text-rotation"), b = r.pstyle("text-outline-width").pfValue, m = r.pstyle("text-border-width").pfValue, T = m / 2, C = r.pstyle("text-background-padding").pfValue, S = 2, E = h, x = f, w = x / 2, D = E / 2, L, A, I, O;
      if (g)
        L = d - w, A = d + w, I = c - D, O = c + D;
      else {
        switch (u.value) {
          case "left":
            L = d - x, A = d;
            break;
          case "center":
            L = d - w, A = d + w;
            break;
          case "right":
            L = d, A = d + x;
            break;
        }
        switch (l.value) {
          case "top":
            I = c - E, O = c;
            break;
          case "center":
            I = c - D, O = c + D;
            break;
          case "bottom":
            I = c, O = c + E;
            break;
        }
      }
      L += v - Math.max(b, T) - C - S, A += v + Math.max(b, T) + C + S, I += p - Math.max(b, T) - C - S, O += p + Math.max(b, T) + C + S;
      var M = a || "main", R = i.labelBounds, k = R[M] = R[M] || {};
      k.x1 = L, k.y1 = I, k.x2 = A, k.y2 = O, k.w = A - L, k.h = O - I;
      var P = g && y.strValue === "autorotate", B = y.pfValue != null && y.pfValue !== 0;
      if (P || B) {
        var V = P ? ta(i.rstyle, "labelAngle", a) : y.pfValue, F = Math.cos(V), G = Math.sin(V), Y = (L + A) / 2, _ = (I + O) / 2;
        if (!g) {
          switch (u.value) {
            case "left":
              Y = A;
              break;
            case "right":
              Y = L;
              break;
          }
          switch (l.value) {
            case "top":
              _ = O;
              break;
            case "bottom":
              _ = I;
              break;
          }
        }
        var q = function(me, te) {
          return me = me - Y, te = te - _, {
            x: me * F - te * G + Y,
            y: me * G + te * F + _
          };
        }, U = q(L, I), z = q(L, O), H = q(A, I), W = q(A, O);
        L = Math.min(U.x, z.x, H.x, W.x), A = Math.max(U.x, z.x, H.x, W.x), I = Math.min(U.y, z.y, H.y, W.y), O = Math.max(U.y, z.y, H.y, W.y);
      }
      var J = M + "Rot", ee = R[J] = R[J] || {};
      ee.x1 = L, ee.y1 = I, ee.x2 = A, ee.y2 = O, ee.w = A - L, ee.h = O - I, Lt(e, L, I, A, O), Lt(i.labelBounds.all, L, I, A, O);
    }
    return e;
  }
}, zd = function(e, r) {
  if (!r.cy().headless()) {
    var a = r.pstyle("outline-opacity").value, n = r.pstyle("outline-width").value;
    if (a > 0 && n > 0) {
      var i = r.pstyle("outline-offset").value, s = r.pstyle("shape").value, o = n + i, u = (e.w + o * 2) / e.w, l = (e.h + o * 2) / e.h, f = 0, h = 0;
      ["diamond", "pentagon", "round-triangle"].includes(s) ? (u = (e.w + o * 2.4) / e.w, h = -o / 3.6) : ["concave-hexagon", "rhomboid", "right-rhomboid"].includes(s) ? u = (e.w + o * 2.4) / e.w : s === "star" ? (u = (e.w + o * 2.8) / e.w, l = (e.h + o * 2.6) / e.h, h = -o / 3.8) : s === "triangle" ? (u = (e.w + o * 2.8) / e.w, l = (e.h + o * 2.4) / e.h, h = -o / 1.4) : s === "vee" && (u = (e.w + o * 4.4) / e.w, l = (e.h + o * 3.8) / e.h, h = -o * 0.5);
      var d = e.h * l - e.h, c = e.w * u - e.w;
      if (Ha(e, [Math.ceil(d / 2), Math.ceil(c / 2)]), f != 0 || h !== 0) {
        var v = sh(e, f, h);
        Lo(e, v);
      }
    }
  }
}, Vd = function(e, r) {
  var a = e._private.cy, n = a.styleEnabled(), i = a.headless(), s = gt(), o = e._private, u = e.isNode(), l = e.isEdge(), f, h, d, c, v, p, g = o.rstyle, y = u && n ? e.pstyle("bounds-expansion").pfValue : [0], b = function(ue) {
    return ue.pstyle("display").value !== "none";
  }, m = !n || b(e) && (!l || b(e.source()) && b(e.target()));
  if (m) {
    var T = 0, C = 0;
    n && r.includeOverlays && (T = e.pstyle("overlay-opacity").value, T !== 0 && (C = e.pstyle("overlay-padding").value));
    var S = 0, E = 0;
    n && r.includeUnderlays && (S = e.pstyle("underlay-opacity").value, S !== 0 && (E = e.pstyle("underlay-padding").value));
    var x = Math.max(C, E), w = 0, D = 0;
    if (n && (w = e.pstyle("width").pfValue, D = w / 2), u && r.includeNodes) {
      var L = e.position();
      v = L.x, p = L.y;
      var A = e.outerWidth(), I = A / 2, O = e.outerHeight(), M = O / 2;
      f = v - I, h = v + I, d = p - M, c = p + M, Lt(s, f, d, h, c), n && r.includeOutlines && zd(s, e);
    } else if (l && r.includeEdges)
      if (n && !i) {
        var R = e.pstyle("curve-style").strValue;
        if (f = Math.min(g.srcX, g.midX, g.tgtX), h = Math.max(g.srcX, g.midX, g.tgtX), d = Math.min(g.srcY, g.midY, g.tgtY), c = Math.max(g.srcY, g.midY, g.tgtY), f -= D, h += D, d -= D, c += D, Lt(s, f, d, h, c), R === "haystack") {
          var k = g.haystackPts;
          if (k && k.length === 2) {
            if (f = k[0].x, d = k[0].y, h = k[1].x, c = k[1].y, f > h) {
              var P = f;
              f = h, h = P;
            }
            if (d > c) {
              var B = d;
              d = c, c = B;
            }
            Lt(s, f - D, d - D, h + D, c + D);
          }
        } else if (R === "bezier" || R === "unbundled-bezier" || R.endsWith("segments") || R.endsWith("taxi")) {
          var V;
          switch (R) {
            case "bezier":
            case "unbundled-bezier":
              V = g.bezierPts;
              break;
            case "segments":
            case "taxi":
            case "round-segments":
            case "round-taxi":
              V = g.linePts;
              break;
          }
          if (V != null)
            for (var F = 0; F < V.length; F++) {
              var G = V[F];
              f = G.x - D, h = G.x + D, d = G.y - D, c = G.y + D, Lt(s, f, d, h, c);
            }
        }
      } else {
        var Y = e.source(), _ = Y.position(), q = e.target(), U = q.position();
        if (f = _.x, h = U.x, d = _.y, c = U.y, f > h) {
          var z = f;
          f = h, h = z;
        }
        if (d > c) {
          var H = d;
          d = c, c = H;
        }
        f -= D, h += D, d -= D, c += D, Lt(s, f, d, h, c);
      }
    if (n && r.includeEdges && l && (Ga(s, e, "mid-source"), Ga(s, e, "mid-target"), Ga(s, e, "source"), Ga(s, e, "target")), n) {
      var W = e.pstyle("ghost").value === "yes";
      if (W) {
        var J = e.pstyle("ghost-offset-x").pfValue, ee = e.pstyle("ghost-offset-y").pfValue;
        Lt(s, s.x1 + J, s.y1 + ee, s.x2 + J, s.y2 + ee);
      }
    }
    var oe = o.bodyBounds = o.bodyBounds || {};
    ji(oe, s), Ha(oe, y), _a(oe, 1), n && (f = s.x1, h = s.x2, d = s.y1, c = s.y2, Lt(s, f - x, d - x, h + x, c + x));
    var me = o.overlayBounds = o.overlayBounds || {};
    ji(me, s), Ha(me, y), _a(me, 1);
    var te = o.labelBounds = o.labelBounds || {};
    te.all != null ? ih(te.all) : te.all = gt(), n && r.includeLabels && (r.includeMainLabels && Vn(s, e, null), l && (r.includeSourceLabels && Vn(s, e, "source"), r.includeTargetLabels && Vn(s, e, "target")));
  }
  return s.x1 = Et(s.x1), s.y1 = Et(s.y1), s.x2 = Et(s.x2), s.y2 = Et(s.y2), s.w = Et(s.x2 - s.x1), s.h = Et(s.y2 - s.y1), s.w > 0 && s.h > 0 && m && (Ha(s, y), _a(s, 1)), s;
}, eu = function(e) {
  var r = 0, a = function(s) {
    return (s ? 1 : 0) << r++;
  }, n = 0;
  return n += a(e.incudeNodes), n += a(e.includeEdges), n += a(e.includeLabels), n += a(e.includeMainLabels), n += a(e.includeSourceLabels), n += a(e.includeTargetLabels), n += a(e.includeOverlays), n += a(e.includeOutlines), n;
}, tu = function(e) {
  if (e.isEdge()) {
    var r = e.source().position(), a = e.target().position(), n = function(s) {
      return Math.round(s);
    };
    return Sf([n(r.x), n(r.y), n(a.x), n(a.y)]);
  } else
    return 0;
}, ws = function(e, r) {
  var a = e._private, n, i = e.isEdge(), s = r == null ? xs : eu(r), o = s === xs, u = tu(e), l = a.bbCachePosKey === u, f = r.useCache && l, h = function(p) {
    return p._private.bbCache == null || p._private.styleDirty;
  }, d = !f || h(e) || i && h(e.source()) || h(e.target());
  if (d ? (l || e.recalculateRenderedStyle(f), n = Vd(e, ba), a.bbCache = n, a.bbCachePosKey = u) : n = a.bbCache, !o) {
    var c = e.isNode();
    n = gt(), (r.includeNodes && c || r.includeEdges && !c) && (r.includeOverlays ? lr(n, a.overlayBounds) : lr(n, a.bodyBounds)), r.includeLabels && (r.includeMainLabels && (!i || r.includeSourceLabels && r.includeTargetLabels) ? lr(n, a.labelBounds.all) : (r.includeMainLabels && lr(n, a.labelBounds.mainRot), r.includeSourceLabels && lr(n, a.labelBounds.sourceRot), r.includeTargetLabels && lr(n, a.labelBounds.targetRot))), n.w = n.x2 - n.x1, n.h = n.y2 - n.y1;
  }
  return n;
}, ba = {
  includeNodes: !0,
  includeEdges: !0,
  includeLabels: !0,
  includeMainLabels: !0,
  includeSourceLabels: !0,
  includeTargetLabels: !0,
  includeOverlays: !0,
  includeUnderlays: !0,
  includeOutlines: !0,
  useCache: !0
}, xs = eu(ba), Ts = tt(ba);
ir.boundingBox = function(t) {
  var e;
  if (this.length === 1 && this[0]._private.bbCache != null && !this[0]._private.styleDirty && (t === void 0 || t.useCache === void 0 || t.useCache === !0))
    t === void 0 ? t = ba : t = Ts(t), e = ws(this[0], t);
  else {
    e = gt(), t = t || ba;
    var r = Ts(t), a = this, n = a.cy(), i = n.styleEnabled();
    if (i)
      for (var s = 0; s < a.length; s++) {
        var o = a[s], u = o._private, l = tu(o), f = u.bbCachePosKey === l, h = r.useCache && f && !u.styleDirty;
        o.recalculateRenderedStyle(h);
      }
    this.updateCompoundBounds(!t.useCache);
    for (var d = 0; d < a.length; d++) {
      var c = a[d];
      lr(e, ws(c, r));
    }
  }
  return e.x1 = Et(e.x1), e.y1 = Et(e.y1), e.x2 = Et(e.x2), e.y2 = Et(e.y2), e.w = Et(e.x2 - e.x1), e.h = Et(e.y2 - e.y1), e;
};
ir.dirtyBoundingBoxCache = function() {
  for (var t = 0; t < this.length; t++) {
    var e = this[t]._private;
    e.bbCache = null, e.bbCachePosKey = null, e.bodyBounds = null, e.overlayBounds = null, e.labelBounds.all = null, e.labelBounds.source = null, e.labelBounds.target = null, e.labelBounds.main = null, e.labelBounds.sourceRot = null, e.labelBounds.targetRot = null, e.labelBounds.mainRot = null, e.arrowBounds.source = null, e.arrowBounds.target = null, e.arrowBounds["mid-source"] = null, e.arrowBounds["mid-target"] = null;
  }
  return this.emitAndNotify("bounds"), this;
};
ir.boundingBoxAt = function(t) {
  var e = this.nodes(), r = this.cy(), a = r.hasCompoundNodes(), n = r.collection();
  if (a && (n = e.filter(function(l) {
    return l.isParent();
  }), e = e.not(n)), Ce(t)) {
    var i = t;
    t = function() {
      return i;
    };
  }
  var s = function(f, h) {
    return f._private.bbAtOldPos = t(f, h);
  }, o = function(f) {
    return f._private.bbAtOldPos;
  };
  r.startBatch(), e.forEach(s).silentPositions(t), a && (n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), n.updateCompoundBounds(!0));
  var u = nh(this.boundingBox({
    useCache: !1
  }));
  return e.silentPositions(o), a && (n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), n.updateCompoundBounds(!0)), r.endBatch(), u;
};
Br.boundingbox = Br.bb = Br.boundingBox;
Br.renderedBoundingbox = Br.renderedBoundingBox;
var Ud = ir, oa, Sa;
oa = Sa = {};
var ru = function(e) {
  e.uppercaseName = Xi(e.name), e.autoName = "auto" + e.uppercaseName, e.labelName = "label" + e.uppercaseName, e.outerName = "outer" + e.uppercaseName, e.uppercaseOuterName = Xi(e.outerName), oa[e.name] = function() {
    var a = this[0], n = a._private, i = n.cy, s = i._private.styleEnabled;
    if (a)
      if (s) {
        if (a.isParent())
          return a.updateCompoundBounds(), n[e.autoName] || 0;
        var o = a.pstyle(e.name);
        switch (o.strValue) {
          case "label":
            return a.recalculateRenderedStyle(), n.rstyle[e.labelName] || 0;
          default:
            return o.pfValue;
        }
      } else
        return 1;
  }, oa["outer" + e.uppercaseName] = function() {
    var a = this[0], n = a._private, i = n.cy, s = i._private.styleEnabled;
    if (a)
      if (s) {
        var o = a[e.name](), u = a.pstyle("border-width").pfValue, l = 2 * a.padding();
        return o + u + l;
      } else
        return 1;
  }, oa["rendered" + e.uppercaseName] = function() {
    var a = this[0];
    if (a) {
      var n = a[e.name]();
      return n * this.cy().zoom();
    }
  }, oa["rendered" + e.uppercaseOuterName] = function() {
    var a = this[0];
    if (a) {
      var n = a[e.outerName]();
      return n * this.cy().zoom();
    }
  };
};
ru({
  name: "width"
});
ru({
  name: "height"
});
Sa.padding = function() {
  var t = this[0], e = t._private;
  return t.isParent() ? (t.updateCompoundBounds(), e.autoPadding !== void 0 ? e.autoPadding : t.pstyle("padding").pfValue) : t.pstyle("padding").pfValue;
};
Sa.paddedHeight = function() {
  var t = this[0];
  return t.height() + 2 * t.padding();
};
Sa.paddedWidth = function() {
  var t = this[0];
  return t.width() + 2 * t.padding();
};
var $d = Sa, Yd = function(e, r) {
  if (e.isEdge())
    return r(e);
}, _d = function(e, r) {
  if (e.isEdge()) {
    var a = e.cy();
    return yn(r(e), a.zoom(), a.pan());
  }
}, Hd = function(e, r) {
  if (e.isEdge()) {
    var a = e.cy(), n = a.pan(), i = a.zoom();
    return r(e).map(function(s) {
      return yn(s, i, n);
    });
  }
}, Xd = function(e) {
  return e.renderer().getControlPoints(e);
}, qd = function(e) {
  return e.renderer().getSegmentPoints(e);
}, Wd = function(e) {
  return e.renderer().getSourceEndpoint(e);
}, Kd = function(e) {
  return e.renderer().getTargetEndpoint(e);
}, Zd = function(e) {
  return e.renderer().getEdgeMidpoint(e);
}, Cs = {
  controlPoints: {
    get: Xd,
    mult: !0
  },
  segmentPoints: {
    get: qd,
    mult: !0
  },
  sourceEndpoint: {
    get: Wd
  },
  targetEndpoint: {
    get: Kd
  },
  midpoint: {
    get: Zd
  }
}, Qd = function(e) {
  return "rendered" + e[0].toUpperCase() + e.substr(1);
}, Jd = Object.keys(Cs).reduce(function(t, e) {
  var r = Cs[e], a = Qd(e);
  return t[e] = function() {
    return Yd(this, r.get);
  }, r.mult ? t[a] = function() {
    return Hd(this, r.get);
  } : t[a] = function() {
    return _d(this, r.get);
  }, t;
}, {}), jd = be({}, Gd, Ud, $d, Jd);
/*!
Event object based on jQuery events, MIT license

https://jquery.org/license/
https://tldrlegal.com/license/mit-license
https://github.com/jquery/jquery/blob/master/src/event.js
*/
var au = function(e, r) {
  this.recycle(e, r);
};
function ra() {
  return !1;
}
function za() {
  return !0;
}
au.prototype = {
  instanceString: function() {
    return "event";
  },
  recycle: function(e, r) {
    if (this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = ra, e != null && e.preventDefault ? (this.type = e.type, this.isDefaultPrevented = e.defaultPrevented ? za : ra) : e != null && e.type ? r = e : this.type = e, r != null && (this.originalEvent = r.originalEvent, this.type = r.type != null ? r.type : this.type, this.cy = r.cy, this.target = r.target, this.position = r.position, this.renderedPosition = r.renderedPosition, this.namespace = r.namespace, this.layout = r.layout), this.cy != null && this.position != null && this.renderedPosition == null) {
      var a = this.position, n = this.cy.zoom(), i = this.cy.pan();
      this.renderedPosition = {
        x: a.x * n + i.x,
        y: a.y * n + i.y
      };
    }
    this.timeStamp = e && e.timeStamp || Date.now();
  },
  preventDefault: function() {
    this.isDefaultPrevented = za;
    var e = this.originalEvent;
    e && e.preventDefault && e.preventDefault();
  },
  stopPropagation: function() {
    this.isPropagationStopped = za;
    var e = this.originalEvent;
    e && e.stopPropagation && e.stopPropagation();
  },
  stopImmediatePropagation: function() {
    this.isImmediatePropagationStopped = za, this.stopPropagation();
  },
  isDefaultPrevented: ra,
  isPropagationStopped: ra,
  isImmediatePropagationStopped: ra
};
var nu = /^([^.]+)(\.(?:[^.]+))?$/, eg = ".*", iu = {
  qualifierCompare: function(e, r) {
    return e === r;
  },
  eventMatches: function() {
    return !0;
  },
  addEventFields: function() {
  },
  callbackContext: function(e) {
    return e;
  },
  beforeEmit: function() {
  },
  afterEmit: function() {
  },
  bubble: function() {
    return !1;
  },
  parent: function() {
    return null;
  },
  context: null
}, Ds = Object.keys(iu), tg = {};
function Tn() {
  for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : tg, e = arguments.length > 1 ? arguments[1] : void 0, r = 0; r < Ds.length; r++) {
    var a = Ds[r];
    this[a] = t[a] || iu[a];
  }
  this.context = e || this.context, this.listeners = [], this.emitting = 0;
}
var ar = Tn.prototype, su = function(e, r, a, n, i, s, o) {
  Ge(n) && (i = n, n = null), o && (s == null ? s = o : s = be({}, s, o));
  for (var u = Re(a) ? a : a.split(/\s+/), l = 0; l < u.length; l++) {
    var f = u[l];
    if (!jt(f)) {
      var h = f.match(nu);
      if (h) {
        var d = h[1], c = h[2] ? h[2] : null, v = r(e, f, d, c, n, i, s);
        if (v === !1)
          break;
      }
    }
  }
}, Ss = function(e, r) {
  return e.addEventFields(e.context, r), new au(r.type, r);
}, rg = function(e, r, a) {
  if (wl(a)) {
    r(e, a);
    return;
  } else if (Ce(a)) {
    r(e, Ss(e, a));
    return;
  }
  for (var n = Re(a) ? a : a.split(/\s+/), i = 0; i < n.length; i++) {
    var s = n[i];
    if (!jt(s)) {
      var o = s.match(nu);
      if (o) {
        var u = o[1], l = o[2] ? o[2] : null, f = Ss(e, {
          type: u,
          namespace: l,
          target: e.context
        });
        r(e, f);
      }
    }
  }
};
ar.on = ar.addListener = function(t, e, r, a, n) {
  return su(this, function(i, s, o, u, l, f, h) {
    Ge(f) && i.listeners.push({
      event: s,
      // full event string
      callback: f,
      // callback to run
      type: o,
      // the event type (e.g. 'click')
      namespace: u,
      // the event namespace (e.g. ".foo")
      qualifier: l,
      // a restriction on whether to match this emitter
      conf: h
      // additional configuration
    });
  }, t, e, r, a, n), this;
};
ar.one = function(t, e, r, a) {
  return this.on(t, e, r, a, {
    one: !0
  });
};
ar.removeListener = ar.off = function(t, e, r, a) {
  var n = this;
  this.emitting !== 0 && (this.listeners = If(this.listeners));
  for (var i = this.listeners, s = function(l) {
    var f = i[l];
    su(n, function(h, d, c, v, p, g) {
      if ((f.type === c || t === "*") && (!v && f.namespace !== ".*" || f.namespace === v) && (!p || h.qualifierCompare(f.qualifier, p)) && (!g || f.callback === g))
        return i.splice(l, 1), !1;
    }, t, e, r, a);
  }, o = i.length - 1; o >= 0; o--)
    s(o);
  return this;
};
ar.removeAllListeners = function() {
  return this.removeListener("*");
};
ar.emit = ar.trigger = function(t, e, r) {
  var a = this.listeners, n = a.length;
  return this.emitting++, Re(e) || (e = [e]), rg(this, function(i, s) {
    r != null && (a = [{
      event: s.event,
      type: s.type,
      namespace: s.namespace,
      callback: r
    }], n = a.length);
    for (var o = function(f) {
      var h = a[f];
      if (h.type === s.type && (!h.namespace || h.namespace === s.namespace || h.namespace === eg) && i.eventMatches(i.context, h, s)) {
        var d = [s];
        e != null && Rf(d, e), i.beforeEmit(i.context, h, s), h.conf && h.conf.one && (i.listeners = i.listeners.filter(function(p) {
          return p !== h;
        }));
        var c = i.callbackContext(i.context, h, s), v = h.callback.apply(c, d);
        i.afterEmit(i.context, h, s), v === !1 && (s.stopPropagation(), s.preventDefault());
      }
    }, u = 0; u < n; u++)
      o(u);
    i.bubble(i.context) && !s.isPropagationStopped() && i.parent(i.context).emit(s, e);
  }, t), this.emitting--, this;
};
var ag = {
  qualifierCompare: function(e, r) {
    return e == null || r == null ? e == null && r == null : e.sameText(r);
  },
  eventMatches: function(e, r, a) {
    var n = r.qualifier;
    return n != null ? e !== a.target && Ta(a.target) && n.matches(a.target) : !0;
  },
  addEventFields: function(e, r) {
    r.cy = e.cy(), r.target = e;
  },
  callbackContext: function(e, r, a) {
    return r.qualifier != null ? a.target : e;
  },
  beforeEmit: function(e, r) {
    r.conf && r.conf.once && r.conf.onceCollection.removeListener(r.event, r.qualifier, r.callback);
  },
  bubble: function() {
    return !0;
  },
  parent: function(e) {
    return e.isChild() ? e.parent() : e.cy();
  }
}, Va = function(e) {
  return ve(e) ? new tr(e) : e;
}, ou = {
  createEmitter: function() {
    for (var e = 0; e < this.length; e++) {
      var r = this[e], a = r._private;
      a.emitter || (a.emitter = new Tn(ag, r));
    }
    return this;
  },
  emitter: function() {
    return this._private.emitter;
  },
  on: function(e, r, a) {
    for (var n = Va(r), i = 0; i < this.length; i++) {
      var s = this[i];
      s.emitter().on(e, n, a);
    }
    return this;
  },
  removeListener: function(e, r, a) {
    for (var n = Va(r), i = 0; i < this.length; i++) {
      var s = this[i];
      s.emitter().removeListener(e, n, a);
    }
    return this;
  },
  removeAllListeners: function() {
    for (var e = 0; e < this.length; e++) {
      var r = this[e];
      r.emitter().removeAllListeners();
    }
    return this;
  },
  one: function(e, r, a) {
    for (var n = Va(r), i = 0; i < this.length; i++) {
      var s = this[i];
      s.emitter().one(e, n, a);
    }
    return this;
  },
  once: function(e, r, a) {
    for (var n = Va(r), i = 0; i < this.length; i++) {
      var s = this[i];
      s.emitter().on(e, n, a, {
        once: !0,
        onceCollection: this
      });
    }
  },
  emit: function(e, r) {
    for (var a = 0; a < this.length; a++) {
      var n = this[a];
      n.emitter().emit(e, r);
    }
    return this;
  },
  emitAndNotify: function(e, r) {
    if (this.length !== 0)
      return this.cy().notify(e, this), this.emit(e, r), this;
  }
};
Oe.eventAliasesOn(ou);
var uu = {
  nodes: function(e) {
    return this.filter(function(r) {
      return r.isNode();
    }).filter(e);
  },
  edges: function(e) {
    return this.filter(function(r) {
      return r.isEdge();
    }).filter(e);
  },
  // internal helper to get nodes and edges as separate collections with single iteration over elements
  byGroup: function() {
    for (var e = this.spawn(), r = this.spawn(), a = 0; a < this.length; a++) {
      var n = this[a];
      n.isNode() ? e.push(n) : r.push(n);
    }
    return {
      nodes: e,
      edges: r
    };
  },
  filter: function(e, r) {
    if (e === void 0)
      return this;
    if (ve(e) || pt(e))
      return new tr(e).filter(this);
    if (Ge(e)) {
      for (var a = this.spawn(), n = this, i = 0; i < n.length; i++) {
        var s = n[i], o = r ? e.apply(r, [s, i, n]) : e(s, i, n);
        o && a.push(s);
      }
      return a;
    }
    return this.spawn();
  },
  not: function(e) {
    if (e) {
      ve(e) && (e = this.filter(e));
      for (var r = this.spawn(), a = 0; a < this.length; a++) {
        var n = this[a], i = e.has(n);
        i || r.push(n);
      }
      return r;
    } else
      return this;
  },
  absoluteComplement: function() {
    var e = this.cy();
    return e.mutableElements().not(this);
  },
  intersect: function(e) {
    if (ve(e)) {
      var r = e;
      return this.filter(r);
    }
    for (var a = this.spawn(), n = this, i = e, s = this.length < e.length, o = s ? n : i, u = s ? i : n, l = 0; l < o.length; l++) {
      var f = o[l];
      u.has(f) && a.push(f);
    }
    return a;
  },
  xor: function(e) {
    var r = this._private.cy;
    ve(e) && (e = r.$(e));
    var a = this.spawn(), n = this, i = e, s = function(u, l) {
      for (var f = 0; f < u.length; f++) {
        var h = u[f], d = h._private.data.id, c = l.hasElementWithId(d);
        c || a.push(h);
      }
    };
    return s(n, i), s(i, n), a;
  },
  diff: function(e) {
    var r = this._private.cy;
    ve(e) && (e = r.$(e));
    var a = this.spawn(), n = this.spawn(), i = this.spawn(), s = this, o = e, u = function(f, h, d) {
      for (var c = 0; c < f.length; c++) {
        var v = f[c], p = v._private.data.id, g = h.hasElementWithId(p);
        g ? i.merge(v) : d.push(v);
      }
    };
    return u(s, o, a), u(o, s, n), {
      left: a,
      right: n,
      both: i
    };
  },
  add: function(e) {
    var r = this._private.cy;
    if (!e)
      return this;
    if (ve(e)) {
      var a = e;
      e = r.mutableElements().filter(a);
    }
    for (var n = this.spawnSelf(), i = 0; i < e.length; i++) {
      var s = e[i], o = !this.has(s);
      o && n.push(s);
    }
    return n;
  },
  // in place merge on calling collection
  merge: function(e) {
    var r = this._private, a = r.cy;
    if (!e)
      return this;
    if (e && ve(e)) {
      var n = e;
      e = a.mutableElements().filter(n);
    }
    for (var i = r.map, s = 0; s < e.length; s++) {
      var o = e[s], u = o._private.data.id, l = !i.has(u);
      if (l) {
        var f = this.length++;
        this[f] = o, i.set(u, {
          ele: o,
          index: f
        });
      }
    }
    return this;
  },
  unmergeAt: function(e) {
    var r = this[e], a = r.id(), n = this._private, i = n.map;
    this[e] = void 0, i.delete(a);
    var s = e === this.length - 1;
    if (this.length > 1 && !s) {
      var o = this.length - 1, u = this[o], l = u._private.data.id;
      this[o] = void 0, this[e] = u, i.set(l, {
        ele: u,
        index: e
      });
    }
    return this.length--, this;
  },
  // remove single ele in place in calling collection
  unmergeOne: function(e) {
    e = e[0];
    var r = this._private, a = e._private.data.id, n = r.map, i = n.get(a);
    if (!i)
      return this;
    var s = i.index;
    return this.unmergeAt(s), this;
  },
  // remove eles in place on calling collection
  unmerge: function(e) {
    var r = this._private.cy;
    if (!e)
      return this;
    if (e && ve(e)) {
      var a = e;
      e = r.mutableElements().filter(a);
    }
    for (var n = 0; n < e.length; n++)
      this.unmergeOne(e[n]);
    return this;
  },
  unmergeBy: function(e) {
    for (var r = this.length - 1; r >= 0; r--) {
      var a = this[r];
      e(a) && this.unmergeAt(r);
    }
    return this;
  },
  map: function(e, r) {
    for (var a = [], n = this, i = 0; i < n.length; i++) {
      var s = n[i], o = r ? e.apply(r, [s, i, n]) : e(s, i, n);
      a.push(o);
    }
    return a;
  },
  reduce: function(e, r) {
    for (var a = r, n = this, i = 0; i < n.length; i++)
      a = e(a, n[i], i, n);
    return a;
  },
  max: function(e, r) {
    for (var a = -1 / 0, n, i = this, s = 0; s < i.length; s++) {
      var o = i[s], u = r ? e.apply(r, [o, s, i]) : e(o, s, i);
      u > a && (a = u, n = o);
    }
    return {
      value: a,
      ele: n
    };
  },
  min: function(e, r) {
    for (var a = 1 / 0, n, i = this, s = 0; s < i.length; s++) {
      var o = i[s], u = r ? e.apply(r, [o, s, i]) : e(o, s, i);
      u < a && (a = u, n = o);
    }
    return {
      value: a,
      ele: n
    };
  }
}, Le = uu;
Le.u = Le["|"] = Le["+"] = Le.union = Le.or = Le.add;
Le["\\"] = Le["!"] = Le["-"] = Le.difference = Le.relativeComplement = Le.subtract = Le.not;
Le.n = Le["&"] = Le["."] = Le.and = Le.intersection = Le.intersect;
Le["^"] = Le["(+)"] = Le["(-)"] = Le.symmetricDifference = Le.symdiff = Le.xor;
Le.fnFilter = Le.filterFn = Le.stdFilter = Le.filter;
Le.complement = Le.abscomp = Le.absoluteComplement;
var ng = {
  isNode: function() {
    return this.group() === "nodes";
  },
  isEdge: function() {
    return this.group() === "edges";
  },
  isLoop: function() {
    return this.isEdge() && this.source()[0] === this.target()[0];
  },
  isSimple: function() {
    return this.isEdge() && this.source()[0] !== this.target()[0];
  },
  group: function() {
    var e = this[0];
    if (e)
      return e._private.group;
  }
}, lu = function(e, r) {
  var a = e.cy(), n = a.hasCompoundNodes();
  function i(f) {
    var h = f.pstyle("z-compound-depth");
    return h.value === "auto" ? n ? f.zDepth() : 0 : h.value === "bottom" ? -1 : h.value === "top" ? yi : 0;
  }
  var s = i(e) - i(r);
  if (s !== 0)
    return s;
  function o(f) {
    var h = f.pstyle("z-index-compare");
    return h.value === "auto" && f.isNode() ? 1 : 0;
  }
  var u = o(e) - o(r);
  if (u !== 0)
    return u;
  var l = e.pstyle("z-index").value - r.pstyle("z-index").value;
  return l !== 0 ? l : e.poolIndex() - r.poolIndex();
}, un = {
  forEach: function(e, r) {
    if (Ge(e))
      for (var a = this.length, n = 0; n < a; n++) {
        var i = this[n], s = r ? e.apply(r, [i, n, this]) : e(i, n, this);
        if (s === !1)
          break;
      }
    return this;
  },
  toArray: function() {
    for (var e = [], r = 0; r < this.length; r++)
      e.push(this[r]);
    return e;
  },
  slice: function(e, r) {
    var a = [], n = this.length;
    r == null && (r = n), e == null && (e = 0), e < 0 && (e = n + e), r < 0 && (r = n + r);
    for (var i = e; i >= 0 && i < r && i < n; i++)
      a.push(this[i]);
    return this.spawn(a);
  },
  size: function() {
    return this.length;
  },
  eq: function(e) {
    return this[e] || this.spawn();
  },
  first: function() {
    return this[0] || this.spawn();
  },
  last: function() {
    return this[this.length - 1] || this.spawn();
  },
  empty: function() {
    return this.length === 0;
  },
  nonempty: function() {
    return !this.empty();
  },
  sort: function(e) {
    if (!Ge(e))
      return this;
    var r = this.toArray().sort(e);
    return this.spawn(r);
  },
  sortByZIndex: function() {
    return this.sort(lu);
  },
  zDepth: function() {
    var e = this[0];
    if (e) {
      var r = e._private, a = r.group;
      if (a === "nodes") {
        var n = r.data.parent ? e.parents().size() : 0;
        return e.isParent() ? n : yi - 1;
      } else {
        var i = r.source, s = r.target, o = i.zDepth(), u = s.zDepth();
        return Math.max(o, u, 0);
      }
    }
  }
};
un.each = un.forEach;
var ig = function() {
  var e = "undefined", r = (typeof Symbol == "undefined" ? "undefined" : Xe(Symbol)) != e && Xe(Symbol.iterator) != e;
  r && (un[Symbol.iterator] = function() {
    var a = this, n = {
      value: void 0,
      done: !1
    }, i = 0, s = this.length;
    return io({
      next: function() {
        return i < s ? n.value = a[i++] : (n.value = void 0, n.done = !0), n;
      }
    }, Symbol.iterator, function() {
      return this;
    });
  });
};
ig();
var sg = tt({
  nodeDimensionsIncludeLabels: !1
}), qa = {
  // Calculates and returns node dimensions { x, y } based on options given
  layoutDimensions: function(e) {
    e = sg(e);
    var r;
    if (!this.takesUpSpace())
      r = {
        w: 0,
        h: 0
      };
    else if (e.nodeDimensionsIncludeLabels) {
      var a = this.boundingBox();
      r = {
        w: a.w,
        h: a.h
      };
    } else
      r = {
        w: this.outerWidth(),
        h: this.outerHeight()
      };
    return (r.w === 0 || r.h === 0) && (r.w = r.h = 1), r;
  },
  // using standard layout options, apply position function (w/ or w/o animation)
  layoutPositions: function(e, r, a) {
    var n = this.nodes().filter(function(C) {
      return !C.isParent();
    }), i = this.cy(), s = r.eles, o = function(S) {
      return S.id();
    }, u = ha(a, o);
    e.emit({
      type: "layoutstart",
      layout: e
    }), e.animations = [];
    var l = function(S, E, x) {
      var w = {
        x: E.x1 + E.w / 2,
        y: E.y1 + E.h / 2
      }, D = {
        // scale from center of bounding box (not necessarily 0,0)
        x: (x.x - w.x) * S,
        y: (x.y - w.y) * S
      };
      return {
        x: w.x + D.x,
        y: w.y + D.y
      };
    }, f = r.spacingFactor && r.spacingFactor !== 1, h = function() {
      if (!f)
        return null;
      for (var S = gt(), E = 0; E < n.length; E++) {
        var x = n[E], w = u(x, E);
        oh(S, w.x, w.y);
      }
      return S;
    }, d = h(), c = ha(function(C, S) {
      var E = u(C, S);
      if (f) {
        var x = Math.abs(r.spacingFactor);
        E = l(x, d, E);
      }
      return r.transform != null && (E = r.transform(C, E)), E;
    }, o);
    if (r.animate) {
      for (var v = 0; v < n.length; v++) {
        var p = n[v], g = c(p, v), y = r.animateFilter == null || r.animateFilter(p, v);
        if (y) {
          var b = p.animation({
            position: g,
            duration: r.animationDuration,
            easing: r.animationEasing
          });
          e.animations.push(b);
        } else
          p.position(g);
      }
      if (r.fit) {
        var m = i.animation({
          fit: {
            boundingBox: s.boundingBoxAt(c),
            padding: r.padding
          },
          duration: r.animationDuration,
          easing: r.animationEasing
        });
        e.animations.push(m);
      } else if (r.zoom !== void 0 && r.pan !== void 0) {
        var T = i.animation({
          zoom: r.zoom,
          pan: r.pan,
          duration: r.animationDuration,
          easing: r.animationEasing
        });
        e.animations.push(T);
      }
      e.animations.forEach(function(C) {
        return C.play();
      }), e.one("layoutready", r.ready), e.emit({
        type: "layoutready",
        layout: e
      }), $r.all(e.animations.map(function(C) {
        return C.promise();
      })).then(function() {
        e.one("layoutstop", r.stop), e.emit({
          type: "layoutstop",
          layout: e
        });
      });
    } else
      n.positions(c), r.fit && i.fit(r.eles, r.padding), r.zoom != null && i.zoom(r.zoom), r.pan && i.pan(r.pan), e.one("layoutready", r.ready), e.emit({
        type: "layoutready",
        layout: e
      }), e.one("layoutstop", r.stop), e.emit({
        type: "layoutstop",
        layout: e
      });
    return this;
  },
  layout: function(e) {
    var r = this.cy();
    return r.makeLayout(be({}, e, {
      eles: this
    }));
  }
};
qa.createLayout = qa.makeLayout = qa.layout;
function fu(t, e, r) {
  var a = r._private, n = a.styleCache = a.styleCache || [], i;
  return (i = n[t]) != null || (i = n[t] = e(r)), i;
}
function Cn(t, e) {
  return t = dr(t), function(a) {
    return fu(t, e, a);
  };
}
function Dn(t, e) {
  t = dr(t);
  var r = function(n) {
    return e.call(n);
  };
  return function() {
    var n = this[0];
    if (n)
      return fu(t, r, n);
  };
}
var je = {
  recalculateRenderedStyle: function(e) {
    var r = this.cy(), a = r.renderer(), n = r.styleEnabled();
    return a && n && a.recalculateRenderedStyle(this, e), this;
  },
  dirtyStyleCache: function() {
    var e = this.cy(), r = function(i) {
      return i._private.styleCache = null;
    };
    if (e.hasCompoundNodes()) {
      var a;
      a = this.spawnSelf().merge(this.descendants()).merge(this.parents()), a.merge(a.connectedEdges()), a.forEach(r);
    } else
      this.forEach(function(n) {
        r(n), n.connectedEdges().forEach(r);
      });
    return this;
  },
  // fully updates (recalculates) the style for the elements
  updateStyle: function(e) {
    var r = this._private.cy;
    if (!r.styleEnabled())
      return this;
    if (r.batching()) {
      var a = r._private.batchStyleEles;
      return a.merge(this), this;
    }
    var n = r.hasCompoundNodes(), i = this;
    e = !!(e || e === void 0), n && (i = this.spawnSelf().merge(this.descendants()).merge(this.parents()));
    var s = i;
    return e ? s.emitAndNotify("style") : s.emit("style"), i.forEach(function(o) {
      return o._private.styleDirty = !0;
    }), this;
  },
  // private: clears dirty flag and recalculates style
  cleanStyle: function() {
    var e = this.cy();
    if (e.styleEnabled())
      for (var r = 0; r < this.length; r++) {
        var a = this[r];
        a._private.styleDirty && (a._private.styleDirty = !1, e.style().apply(a));
      }
  },
  // get the internal parsed style object for the specified property
  parsedStyle: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, a = this[0], n = a.cy();
    if (n.styleEnabled() && a) {
      this.cleanStyle();
      var i = a._private.style[e];
      return i != null ? i : r ? n.style().getDefaultProperty(e) : null;
    }
  },
  numericStyle: function(e) {
    var r = this[0];
    if (r.cy().styleEnabled() && r) {
      var a = r.pstyle(e);
      return a.pfValue !== void 0 ? a.pfValue : a.value;
    }
  },
  numericStyleUnits: function(e) {
    var r = this[0];
    if (r.cy().styleEnabled() && r)
      return r.pstyle(e).units;
  },
  // get the specified css property as a rendered value (i.e. on-screen value)
  // or get the whole rendered style if no property specified (NB doesn't allow setting)
  renderedStyle: function(e) {
    var r = this.cy();
    if (!r.styleEnabled())
      return this;
    var a = this[0];
    if (a)
      return r.style().getRenderedStyle(a, e);
  },
  // read the calculated css style of the element or override the style (via a bypass)
  style: function(e, r) {
    var a = this.cy();
    if (!a.styleEnabled())
      return this;
    var n = !1, i = a.style();
    if (Ce(e)) {
      var s = e;
      i.applyBypass(this, s, n), this.emitAndNotify("style");
    } else if (ve(e))
      if (r === void 0) {
        var o = this[0];
        return o ? i.getStylePropertyValue(o, e) : void 0;
      } else
        i.applyBypass(this, e, r, n), this.emitAndNotify("style");
    else if (e === void 0) {
      var u = this[0];
      return u ? i.getRawStyle(u) : void 0;
    }
    return this;
  },
  removeStyle: function(e) {
    var r = this.cy();
    if (!r.styleEnabled())
      return this;
    var a = !1, n = r.style(), i = this;
    if (e === void 0)
      for (var s = 0; s < i.length; s++) {
        var o = i[s];
        n.removeAllBypasses(o, a);
      }
    else {
      e = e.split(/\s+/);
      for (var u = 0; u < i.length; u++) {
        var l = i[u];
        n.removeBypasses(l, e, a);
      }
    }
    return this.emitAndNotify("style"), this;
  },
  show: function() {
    return this.css("display", "element"), this;
  },
  hide: function() {
    return this.css("display", "none"), this;
  },
  effectiveOpacity: function() {
    var e = this.cy();
    if (!e.styleEnabled())
      return 1;
    var r = e.hasCompoundNodes(), a = this[0];
    if (a) {
      var n = a._private, i = a.pstyle("opacity").value;
      if (!r)
        return i;
      var s = n.data.parent ? a.parents() : null;
      if (s)
        for (var o = 0; o < s.length; o++) {
          var u = s[o], l = u.pstyle("opacity").value;
          i = l * i;
        }
      return i;
    }
  },
  transparent: function() {
    var e = this.cy();
    if (!e.styleEnabled())
      return !1;
    var r = this[0], a = r.cy().hasCompoundNodes();
    if (r)
      return a ? r.effectiveOpacity() === 0 : r.pstyle("opacity").value === 0;
  },
  backgrounding: function() {
    var e = this.cy();
    if (!e.styleEnabled())
      return !1;
    var r = this[0];
    return !!r._private.backgrounding;
  }
};
function Un(t, e) {
  var r = t._private, a = r.data.parent ? t.parents() : null;
  if (a)
    for (var n = 0; n < a.length; n++) {
      var i = a[n];
      if (!e(i))
        return !1;
    }
  return !0;
}
function Oi(t) {
  var e = t.ok, r = t.edgeOkViaNode || t.ok, a = t.parentOk || t.ok;
  return function() {
    var n = this.cy();
    if (!n.styleEnabled())
      return !0;
    var i = this[0], s = n.hasCompoundNodes();
    if (i) {
      var o = i._private;
      if (!e(i))
        return !1;
      if (i.isNode())
        return !s || Un(i, a);
      var u = o.source, l = o.target;
      return r(u) && (!s || Un(u, r)) && (u === l || r(l) && (!s || Un(l, r)));
    }
  };
}
var Xr = Cn("eleTakesUpSpace", function(t) {
  return t.pstyle("display").value === "element" && t.width() !== 0 && (t.isNode() ? t.height() !== 0 : !0);
});
je.takesUpSpace = Dn("takesUpSpace", Oi({
  ok: Xr
}));
var og = Cn("eleInteractive", function(t) {
  return t.pstyle("events").value === "yes" && t.pstyle("visibility").value === "visible" && Xr(t);
}), ug = Cn("parentInteractive", function(t) {
  return t.pstyle("visibility").value === "visible" && Xr(t);
});
je.interactive = Dn("interactive", Oi({
  ok: og,
  parentOk: ug,
  edgeOkViaNode: Xr
}));
je.noninteractive = function() {
  var t = this[0];
  if (t)
    return !t.interactive();
};
var lg = Cn("eleVisible", function(t) {
  return t.pstyle("visibility").value === "visible" && t.pstyle("opacity").pfValue !== 0 && Xr(t);
}), fg = Xr;
je.visible = Dn("visible", Oi({
  ok: lg,
  edgeOkViaNode: fg
}));
je.hidden = function() {
  var t = this[0];
  if (t)
    return !t.visible();
};
je.isBundledBezier = Dn("isBundledBezier", function() {
  return this.cy().styleEnabled() ? !this.removed() && this.pstyle("curve-style").value === "bezier" && this.takesUpSpace() : !1;
});
je.bypass = je.css = je.style;
je.renderedCss = je.renderedStyle;
je.removeBypass = je.removeCss = je.removeStyle;
je.pstyle = je.parsedStyle;
var Jt = {};
function Ls(t) {
  return function() {
    var e = arguments, r = [];
    if (e.length === 2) {
      var a = e[0], n = e[1];
      this.on(t.event, a, n);
    } else if (e.length === 1 && Ge(e[0])) {
      var i = e[0];
      this.on(t.event, i);
    } else if (e.length === 0 || e.length === 1 && Re(e[0])) {
      for (var s = e.length === 1 ? e[0] : null, o = 0; o < this.length; o++) {
        var u = this[o], l = !t.ableField || u._private[t.ableField], f = u._private[t.field] != t.value;
        if (t.overrideAble) {
          var h = t.overrideAble(u);
          if (h !== void 0 && (l = h, !h))
            return this;
        }
        l && (u._private[t.field] = t.value, f && r.push(u));
      }
      var d = this.spawn(r);
      d.updateStyle(), d.emit(t.event), s && d.emit(s);
    }
    return this;
  };
}
function qr(t) {
  Jt[t.field] = function() {
    var e = this[0];
    if (e) {
      if (t.overrideField) {
        var r = t.overrideField(e);
        if (r !== void 0)
          return r;
      }
      return e._private[t.field];
    }
  }, Jt[t.on] = Ls({
    event: t.on,
    field: t.field,
    ableField: t.ableField,
    overrideAble: t.overrideAble,
    value: !0
  }), Jt[t.off] = Ls({
    event: t.off,
    field: t.field,
    ableField: t.ableField,
    overrideAble: t.overrideAble,
    value: !1
  });
}
qr({
  field: "locked",
  overrideField: function(e) {
    return e.cy().autolock() ? !0 : void 0;
  },
  on: "lock",
  off: "unlock"
});
qr({
  field: "grabbable",
  overrideField: function(e) {
    return e.cy().autoungrabify() || e.pannable() ? !1 : void 0;
  },
  on: "grabify",
  off: "ungrabify"
});
qr({
  field: "selected",
  ableField: "selectable",
  overrideAble: function(e) {
    return e.cy().autounselectify() ? !1 : void 0;
  },
  on: "select",
  off: "unselect"
});
qr({
  field: "selectable",
  overrideField: function(e) {
    return e.cy().autounselectify() ? !1 : void 0;
  },
  on: "selectify",
  off: "unselectify"
});
Jt.deselect = Jt.unselect;
Jt.grabbed = function() {
  var t = this[0];
  if (t)
    return t._private.grabbed;
};
qr({
  field: "active",
  on: "activate",
  off: "unactivate"
});
qr({
  field: "pannable",
  on: "panify",
  off: "unpanify"
});
Jt.inactive = function() {
  var t = this[0];
  if (t)
    return !t._private.active;
};
var it = {}, As = function(e) {
  return function(a) {
    for (var n = this, i = [], s = 0; s < n.length; s++) {
      var o = n[s];
      if (o.isNode()) {
        for (var u = !1, l = o.connectedEdges(), f = 0; f < l.length; f++) {
          var h = l[f], d = h.source(), c = h.target();
          if (e.noIncomingEdges && c === o && d !== o || e.noOutgoingEdges && d === o && c !== o) {
            u = !0;
            break;
          }
        }
        u || i.push(o);
      }
    }
    return this.spawn(i, !0).filter(a);
  };
}, Os = function(e) {
  return function(r) {
    for (var a = this, n = [], i = 0; i < a.length; i++) {
      var s = a[i];
      if (s.isNode())
        for (var o = s.connectedEdges(), u = 0; u < o.length; u++) {
          var l = o[u], f = l.source(), h = l.target();
          e.outgoing && f === s ? (n.push(l), n.push(h)) : e.incoming && h === s && (n.push(l), n.push(f));
        }
    }
    return this.spawn(n, !0).filter(r);
  };
}, Ns = function(e) {
  return function(r) {
    for (var a = this, n = [], i = {}; ; ) {
      var s = e.outgoing ? a.outgoers() : a.incomers();
      if (s.length === 0)
        break;
      for (var o = !1, u = 0; u < s.length; u++) {
        var l = s[u], f = l.id();
        i[f] || (i[f] = !0, n.push(l), o = !0);
      }
      if (!o)
        break;
      a = s;
    }
    return this.spawn(n, !0).filter(r);
  };
};
it.clearTraversalCache = function() {
  for (var t = 0; t < this.length; t++)
    this[t]._private.traversalCache = null;
};
be(it, {
  // get the root nodes in the DAG
  roots: As({
    noIncomingEdges: !0
  }),
  // get the leaf nodes in the DAG
  leaves: As({
    noOutgoingEdges: !0
  }),
  // normally called children in graph theory
  // these nodes =edges=> outgoing nodes
  outgoers: wt(Os({
    outgoing: !0
  }), "outgoers"),
  // aka DAG descendants
  successors: Ns({
    outgoing: !0
  }),
  // normally called parents in graph theory
  // these nodes <=edges= incoming nodes
  incomers: wt(Os({
    incoming: !0
  }), "incomers"),
  // aka DAG ancestors
  predecessors: Ns({
    incoming: !0
  })
});
be(it, {
  neighborhood: wt(function(t) {
    for (var e = [], r = this.nodes(), a = 0; a < r.length; a++)
      for (var n = r[a], i = n.connectedEdges(), s = 0; s < i.length; s++) {
        var o = i[s], u = o.source(), l = o.target(), f = n === u ? l : u;
        f.length > 0 && e.push(f[0]), e.push(o[0]);
      }
    return this.spawn(e, !0).filter(t);
  }, "neighborhood"),
  closedNeighborhood: function(e) {
    return this.neighborhood().add(this).filter(e);
  },
  openNeighborhood: function(e) {
    return this.neighborhood(e);
  }
});
it.neighbourhood = it.neighborhood;
it.closedNeighbourhood = it.closedNeighborhood;
it.openNeighbourhood = it.openNeighborhood;
be(it, {
  source: wt(function(e) {
    var r = this[0], a;
    return r && (a = r._private.source || r.cy().collection()), a && e ? a.filter(e) : a;
  }, "source"),
  target: wt(function(e) {
    var r = this[0], a;
    return r && (a = r._private.target || r.cy().collection()), a && e ? a.filter(e) : a;
  }, "target"),
  sources: Is({
    attr: "source"
  }),
  targets: Is({
    attr: "target"
  })
});
function Is(t) {
  return function(r) {
    for (var a = [], n = 0; n < this.length; n++) {
      var i = this[n], s = i._private[t.attr];
      s && a.push(s);
    }
    return this.spawn(a, !0).filter(r);
  };
}
be(it, {
  edgesWith: wt(Ms(), "edgesWith"),
  edgesTo: wt(Ms({
    thisIsSrc: !0
  }), "edgesTo")
});
function Ms(t) {
  return function(r) {
    var a = [], n = this._private.cy, i = t || {};
    ve(r) && (r = n.$(r));
    for (var s = 0; s < r.length; s++)
      for (var o = r[s]._private.edges, u = 0; u < o.length; u++) {
        var l = o[u], f = l._private.data, h = this.hasElementWithId(f.source) && r.hasElementWithId(f.target), d = r.hasElementWithId(f.source) && this.hasElementWithId(f.target), c = h || d;
        c && ((i.thisIsSrc || i.thisIsTgt) && (i.thisIsSrc && !h || i.thisIsTgt && !d) || a.push(l));
      }
    return this.spawn(a, !0);
  };
}
be(it, {
  connectedEdges: wt(function(t) {
    for (var e = [], r = this, a = 0; a < r.length; a++) {
      var n = r[a];
      if (n.isNode())
        for (var i = n._private.edges, s = 0; s < i.length; s++) {
          var o = i[s];
          e.push(o);
        }
    }
    return this.spawn(e, !0).filter(t);
  }, "connectedEdges"),
  connectedNodes: wt(function(t) {
    for (var e = [], r = this, a = 0; a < r.length; a++) {
      var n = r[a];
      n.isEdge() && (e.push(n.source()[0]), e.push(n.target()[0]));
    }
    return this.spawn(e, !0).filter(t);
  }, "connectedNodes"),
  parallelEdges: wt(Rs(), "parallelEdges"),
  codirectedEdges: wt(Rs({
    codirected: !0
  }), "codirectedEdges")
});
function Rs(t) {
  var e = {
    codirected: !1
  };
  return t = be({}, e, t), function(a) {
    for (var n = [], i = this.edges(), s = t, o = 0; o < i.length; o++)
      for (var u = i[o], l = u._private, f = l.source, h = f._private.data.id, d = l.data.target, c = f._private.edges, v = 0; v < c.length; v++) {
        var p = c[v], g = p._private.data, y = g.target, b = g.source, m = y === d && b === h, T = h === y && d === b;
        (s.codirected && m || !s.codirected && (m || T)) && n.push(p);
      }
    return this.spawn(n, !0).filter(a);
  };
}
be(it, {
  components: function(e) {
    var r = this, a = r.cy(), n = a.collection(), i = e == null ? r.nodes() : e.nodes(), s = [];
    e != null && i.empty() && (i = e.sources());
    var o = function(f, h) {
      n.merge(f), i.unmerge(f), h.merge(f);
    };
    if (i.empty())
      return r.spawn();
    var u = function() {
      var f = a.collection();
      s.push(f);
      var h = i[0];
      o(h, f), r.bfs({
        directed: !1,
        roots: h,
        visit: function(c) {
          return o(c, f);
        }
      }), f.forEach(function(d) {
        d.connectedEdges().forEach(function(c) {
          r.has(c) && f.has(c.source()) && f.has(c.target()) && f.merge(c);
        });
      });
    };
    do
      u();
    while (i.length > 0);
    return s;
  },
  component: function() {
    var e = this[0];
    return e.cy().mutableElements().components(e)[0];
  }
});
it.componentsOf = it.components;
var et = function(e, r) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (e === void 0) {
    ze("A collection must have a reference to the core");
    return;
  }
  var i = new Bt(), s = !1;
  if (!r)
    r = [];
  else if (r.length > 0 && Ce(r[0]) && !Ta(r[0])) {
    s = !0;
    for (var o = [], u = new Ur(), l = 0, f = r.length; l < f; l++) {
      var h = r[l];
      h.data == null && (h.data = {});
      var d = h.data;
      if (d.id == null)
        d.id = To();
      else if (e.hasElementWithId(d.id) || u.has(d.id))
        continue;
      var c = new pn(e, h, !1);
      o.push(c), u.add(d.id);
    }
    r = o;
  }
  this.length = 0;
  for (var v = 0, p = r.length; v < p; v++) {
    var g = r[v][0];
    if (g != null) {
      var y = g._private.data.id;
      (!a || !i.has(y)) && (a && i.set(y, {
        index: this.length,
        ele: g
      }), this[this.length] = g, this.length++);
    }
  }
  this._private = {
    eles: this,
    cy: e,
    get map() {
      return this.lazyMap == null && this.rebuildMap(), this.lazyMap;
    },
    set map(b) {
      this.lazyMap = b;
    },
    rebuildMap: function() {
      for (var m = this.lazyMap = new Bt(), T = this.eles, C = 0; C < T.length; C++) {
        var S = T[C];
        m.set(S.id(), {
          index: C,
          ele: S
        });
      }
    }
  }, a && (this._private.map = i), s && !n && this.restore();
}, Pe = pn.prototype = et.prototype = Object.create(Array.prototype);
Pe.instanceString = function() {
  return "collection";
};
Pe.spawn = function(t, e) {
  return new et(this.cy(), t, e);
};
Pe.spawnSelf = function() {
  return this.spawn(this);
};
Pe.cy = function() {
  return this._private.cy;
};
Pe.renderer = function() {
  return this._private.cy.renderer();
};
Pe.element = function() {
  return this[0];
};
Pe.collection = function() {
  return uo(this) ? this : new et(this._private.cy, [this]);
};
Pe.unique = function() {
  return new et(this._private.cy, this, !0);
};
Pe.hasElementWithId = function(t) {
  return t = "" + t, this._private.map.has(t);
};
Pe.getElementById = function(t) {
  t = "" + t;
  var e = this._private.cy, r = this._private.map.get(t);
  return r ? r.ele : new et(e);
};
Pe.$id = Pe.getElementById;
Pe.poolIndex = function() {
  var t = this._private.cy, e = t._private.elements, r = this[0]._private.data.id;
  return e._private.map.get(r).index;
};
Pe.indexOf = function(t) {
  var e = t[0]._private.data.id;
  return this._private.map.get(e).index;
};
Pe.indexOfId = function(t) {
  return t = "" + t, this._private.map.get(t).index;
};
Pe.json = function(t) {
  var e = this.element(), r = this.cy();
  if (e == null && t)
    return this;
  if (e != null) {
    var a = e._private;
    if (Ce(t)) {
      if (r.startBatch(), t.data) {
        e.data(t.data);
        var n = a.data;
        if (e.isEdge()) {
          var i = !1, s = {}, o = t.data.source, u = t.data.target;
          o != null && o != n.source && (s.source = "" + o, i = !0), u != null && u != n.target && (s.target = "" + u, i = !0), i && (e = e.move(s));
        } else {
          var l = "parent" in t.data, f = t.data.parent;
          l && (f != null || n.parent != null) && f != n.parent && (f === void 0 && (f = null), f != null && (f = "" + f), e = e.move({
            parent: f
          }));
        }
      }
      t.position && e.position(t.position);
      var h = function(p, g, y) {
        var b = t[p];
        b != null && b !== a[p] && (b ? e[g]() : e[y]());
      };
      return h("removed", "remove", "restore"), h("selected", "select", "unselect"), h("selectable", "selectify", "unselectify"), h("locked", "lock", "unlock"), h("grabbable", "grabify", "ungrabify"), h("pannable", "panify", "unpanify"), t.classes != null && e.classes(t.classes), r.endBatch(), this;
    } else if (t === void 0) {
      var d = {
        data: Pt(a.data),
        position: Pt(a.position),
        group: a.group,
        removed: a.removed,
        selected: a.selected,
        selectable: a.selectable,
        locked: a.locked,
        grabbable: a.grabbable,
        pannable: a.pannable,
        classes: null
      };
      d.classes = "";
      var c = 0;
      return a.classes.forEach(function(v) {
        return d.classes += c++ === 0 ? v : " " + v;
      }), d;
    }
  }
};
Pe.jsons = function() {
  for (var t = [], e = 0; e < this.length; e++) {
    var r = this[e], a = r.json();
    t.push(a);
  }
  return t;
};
Pe.clone = function() {
  for (var t = this.cy(), e = [], r = 0; r < this.length; r++) {
    var a = this[r], n = a.json(), i = new pn(t, n, !1);
    e.push(i);
  }
  return new et(t, e);
};
Pe.copy = Pe.clone;
Pe.restore = function() {
  for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = this, a = r.cy(), n = a._private, i = [], s = [], o, u = 0, l = r.length; u < l; u++) {
    var f = r[u];
    e && !f.removed() || (f.isNode() ? i.push(f) : s.push(f));
  }
  o = i.concat(s);
  var h, d = function() {
    o.splice(h, 1), h--;
  };
  for (h = 0; h < o.length; h++) {
    var c = o[h], v = c._private, p = v.data;
    if (c.clearTraversalCache(), !(!e && !v.removed)) {
      if (p.id === void 0)
        p.id = To();
      else if (ne(p.id))
        p.id = "" + p.id;
      else if (jt(p.id) || !ve(p.id)) {
        ze("Can not create element with invalid string ID `" + p.id + "`"), d();
        continue;
      } else if (a.hasElementWithId(p.id)) {
        ze("Can not create second element with ID `" + p.id + "`"), d();
        continue;
      }
    }
    var g = p.id;
    if (c.isNode()) {
      var y = v.position;
      y.x == null && (y.x = 0), y.y == null && (y.y = 0);
    }
    if (c.isEdge()) {
      for (var b = c, m = ["source", "target"], T = m.length, C = !1, S = 0; S < T; S++) {
        var E = m[S], x = p[E];
        ne(x) && (x = p[E] = "" + p[E]), x == null || x === "" ? (ze("Can not create edge `" + g + "` with unspecified " + E), C = !0) : a.hasElementWithId(x) || (ze("Can not create edge `" + g + "` with nonexistant " + E + " `" + x + "`"), C = !0);
      }
      if (C) {
        d();
        continue;
      }
      var w = a.getElementById(p.source), D = a.getElementById(p.target);
      w.same(D) ? w._private.edges.push(b) : (w._private.edges.push(b), D._private.edges.push(b)), b._private.source = w, b._private.target = D;
    }
    v.map = new Bt(), v.map.set(g, {
      ele: c,
      index: 0
    }), v.removed = !1, e && a.addToPool(c);
  }
  for (var L = 0; L < i.length; L++) {
    var A = i[L], I = A._private.data;
    ne(I.parent) && (I.parent = "" + I.parent);
    var O = I.parent, M = O != null;
    if (M || A._private.parent) {
      var R = A._private.parent ? a.collection().merge(A._private.parent) : a.getElementById(O);
      if (R.empty())
        I.parent = void 0;
      else if (R[0].removed())
        Ne("Node added with missing parent, reference to parent removed"), I.parent = void 0, A._private.parent = null;
      else {
        for (var k = !1, P = R; !P.empty(); ) {
          if (A.same(P)) {
            k = !0, I.parent = void 0;
            break;
          }
          P = P.parent();
        }
        k || (R[0]._private.children.push(A), A._private.parent = R[0], n.hasCompoundNodes = !0);
      }
    }
  }
  if (o.length > 0) {
    for (var B = o.length === r.length ? r : new et(a, o), V = 0; V < B.length; V++) {
      var F = B[V];
      F.isNode() || (F.parallelEdges().clearTraversalCache(), F.source().clearTraversalCache(), F.target().clearTraversalCache());
    }
    var G;
    n.hasCompoundNodes ? G = a.collection().merge(B).merge(B.connectedNodes()).merge(B.parent()) : G = B, G.dirtyCompoundBoundsCache().dirtyBoundingBoxCache().updateStyle(t), t ? B.emitAndNotify("add") : e && B.emit("add");
  }
  return r;
};
Pe.removed = function() {
  var t = this[0];
  return t && t._private.removed;
};
Pe.inside = function() {
  var t = this[0];
  return t && !t._private.removed;
};
Pe.remove = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = this, a = [], n = {}, i = r._private.cy;
  function s(O) {
    for (var M = O._private.edges, R = 0; R < M.length; R++)
      u(M[R]);
  }
  function o(O) {
    for (var M = O._private.children, R = 0; R < M.length; R++)
      u(M[R]);
  }
  function u(O) {
    var M = n[O.id()];
    e && O.removed() || M || (n[O.id()] = !0, O.isNode() ? (a.push(O), s(O), o(O)) : a.unshift(O));
  }
  for (var l = 0, f = r.length; l < f; l++) {
    var h = r[l];
    u(h);
  }
  function d(O, M) {
    var R = O._private.edges;
    er(R, M), O.clearTraversalCache();
  }
  function c(O) {
    O.clearTraversalCache();
  }
  var v = [];
  v.ids = {};
  function p(O, M) {
    M = M[0], O = O[0];
    var R = O._private.children, k = O.id();
    er(R, M), M._private.parent = null, v.ids[k] || (v.ids[k] = !0, v.push(O));
  }
  r.dirtyCompoundBoundsCache(), e && i.removeFromPool(a);
  for (var g = 0; g < a.length; g++) {
    var y = a[g];
    if (y.isEdge()) {
      var b = y.source()[0], m = y.target()[0];
      d(b, y), d(m, y);
      for (var T = y.parallelEdges(), C = 0; C < T.length; C++) {
        var S = T[C];
        c(S), S.isBundledBezier() && S.dirtyBoundingBoxCache();
      }
    } else {
      var E = y.parent();
      E.length !== 0 && p(E, y);
    }
    e && (y._private.removed = !0);
  }
  var x = i._private.elements;
  i._private.hasCompoundNodes = !1;
  for (var w = 0; w < x.length; w++) {
    var D = x[w];
    if (D.isParent()) {
      i._private.hasCompoundNodes = !0;
      break;
    }
  }
  var L = new et(this.cy(), a);
  L.size() > 0 && (t ? L.emitAndNotify("remove") : e && L.emit("remove"));
  for (var A = 0; A < v.length; A++) {
    var I = v[A];
    (!e || !I.removed()) && I.updateStyle();
  }
  return L;
};
Pe.move = function(t) {
  var e = this._private.cy, r = this, a = !1, n = !1, i = function(v) {
    return v == null ? v : "" + v;
  };
  if (t.source !== void 0 || t.target !== void 0) {
    var s = i(t.source), o = i(t.target), u = s != null && e.hasElementWithId(s), l = o != null && e.hasElementWithId(o);
    (u || l) && (e.batch(function() {
      r.remove(a, n), r.emitAndNotify("moveout");
      for (var c = 0; c < r.length; c++) {
        var v = r[c], p = v._private.data;
        v.isEdge() && (u && (p.source = s), l && (p.target = o));
      }
      r.restore(a, n);
    }), r.emitAndNotify("move"));
  } else if (t.parent !== void 0) {
    var f = i(t.parent), h = f === null || e.hasElementWithId(f);
    if (h) {
      var d = f === null ? void 0 : f;
      e.batch(function() {
        var c = r.remove(a, n);
        c.emitAndNotify("moveout");
        for (var v = 0; v < r.length; v++) {
          var p = r[v], g = p._private.data;
          p.isNode() && (g.parent = d);
        }
        c.restore(a, n);
      }), r.emitAndNotify("move");
    }
  }
  return this;
};
[Bo, wd, Xa, Qt, Vr, Fd, xn, jd, ou, uu, ng, un, qa, je, Jt, it].forEach(function(t) {
  be(Pe, t);
});
var hg = {
  add: function(e) {
    var r, a = this;
    if (pt(e)) {
      var n = e;
      if (n._private.cy === a)
        r = n.restore();
      else {
        for (var i = [], s = 0; s < n.length; s++) {
          var o = n[s];
          i.push(o.json());
        }
        r = new et(a, i);
      }
    } else if (Re(e)) {
      var u = e;
      r = new et(a, u);
    } else if (Ce(e) && (Re(e.nodes) || Re(e.edges))) {
      for (var l = e, f = [], h = ["nodes", "edges"], d = 0, c = h.length; d < c; d++) {
        var v = h[d], p = l[v];
        if (Re(p))
          for (var g = 0, y = p.length; g < y; g++) {
            var b = be({
              group: v
            }, p[g]);
            f.push(b);
          }
      }
      r = new et(a, f);
    } else {
      var m = e;
      r = new pn(a, m).collection();
    }
    return r;
  },
  remove: function(e) {
    if (!pt(e)) {
      if (ve(e)) {
        var r = e;
        e = this.$(r);
      }
    }
    return e.remove();
  }
};
/*! Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
function cg(t, e, r, a) {
  var n = 4, i = 1e-3, s = 1e-7, o = 10, u = 11, l = 1 / (u - 1), f = typeof Float32Array != "undefined";
  if (arguments.length !== 4)
    return !1;
  for (var h = 0; h < 4; ++h)
    if (typeof arguments[h] != "number" || isNaN(arguments[h]) || !isFinite(arguments[h]))
      return !1;
  t = Math.min(t, 1), r = Math.min(r, 1), t = Math.max(t, 0), r = Math.max(r, 0);
  var d = f ? new Float32Array(u) : new Array(u);
  function c(D, L) {
    return 1 - 3 * L + 3 * D;
  }
  function v(D, L) {
    return 3 * L - 6 * D;
  }
  function p(D) {
    return 3 * D;
  }
  function g(D, L, A) {
    return ((c(L, A) * D + v(L, A)) * D + p(L)) * D;
  }
  function y(D, L, A) {
    return 3 * c(L, A) * D * D + 2 * v(L, A) * D + p(L);
  }
  function b(D, L) {
    for (var A = 0; A < n; ++A) {
      var I = y(L, t, r);
      if (I === 0)
        return L;
      var O = g(L, t, r) - D;
      L -= O / I;
    }
    return L;
  }
  function m() {
    for (var D = 0; D < u; ++D)
      d[D] = g(D * l, t, r);
  }
  function T(D, L, A) {
    var I, O, M = 0;
    do
      O = L + (A - L) / 2, I = g(O, t, r) - D, I > 0 ? A = O : L = O;
    while (Math.abs(I) > s && ++M < o);
    return O;
  }
  function C(D) {
    for (var L = 0, A = 1, I = u - 1; A !== I && d[A] <= D; ++A)
      L += l;
    --A;
    var O = (D - d[A]) / (d[A + 1] - d[A]), M = L + O * l, R = y(M, t, r);
    return R >= i ? b(D, M) : R === 0 ? M : T(D, L, L + l);
  }
  var S = !1;
  function E() {
    S = !0, (t !== e || r !== a) && m();
  }
  var x = function(L) {
    return S || E(), t === e && r === a ? L : L === 0 ? 0 : L === 1 ? 1 : g(C(L), e, a);
  };
  x.getControlPoints = function() {
    return [{
      x: t,
      y: e
    }, {
      x: r,
      y: a
    }];
  };
  var w = "generateBezier(" + [t, e, r, a] + ")";
  return x.toString = function() {
    return w;
  }, x;
}
/*! Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
var vg = function() {
  function t(a) {
    return -a.tension * a.x - a.friction * a.v;
  }
  function e(a, n, i) {
    var s = {
      x: a.x + i.dx * n,
      v: a.v + i.dv * n,
      tension: a.tension,
      friction: a.friction
    };
    return {
      dx: s.v,
      dv: t(s)
    };
  }
  function r(a, n) {
    var i = {
      dx: a.v,
      dv: t(a)
    }, s = e(a, n * 0.5, i), o = e(a, n * 0.5, s), u = e(a, n, o), l = 1 / 6 * (i.dx + 2 * (s.dx + o.dx) + u.dx), f = 1 / 6 * (i.dv + 2 * (s.dv + o.dv) + u.dv);
    return a.x = a.x + l * n, a.v = a.v + f * n, a;
  }
  return function a(n, i, s) {
    var o = {
      x: -1,
      v: 0,
      tension: null,
      friction: null
    }, u = [0], l = 0, f = 1 / 1e4, h = 16 / 1e3, d, c, v;
    for (n = parseFloat(n) || 500, i = parseFloat(i) || 20, s = s || null, o.tension = n, o.friction = i, d = s !== null, d ? (l = a(n, i), c = l / s * h) : c = h; v = r(v || o, c), u.push(1 + v.x), l += 16, Math.abs(v.x) > f && Math.abs(v.v) > f; )
      ;
    return d ? function(p) {
      return u[p * (u.length - 1) | 0];
    } : l;
  };
}(), ke = function(e, r, a, n) {
  var i = cg(e, r, a, n);
  return function(s, o, u) {
    return s + (o - s) * i(u);
  };
}, Wa = {
  linear: function(e, r, a) {
    return e + (r - e) * a;
  },
  // default easings
  ease: ke(0.25, 0.1, 0.25, 1),
  "ease-in": ke(0.42, 0, 1, 1),
  "ease-out": ke(0, 0, 0.58, 1),
  "ease-in-out": ke(0.42, 0, 0.58, 1),
  // sine
  "ease-in-sine": ke(0.47, 0, 0.745, 0.715),
  "ease-out-sine": ke(0.39, 0.575, 0.565, 1),
  "ease-in-out-sine": ke(0.445, 0.05, 0.55, 0.95),
  // quad
  "ease-in-quad": ke(0.55, 0.085, 0.68, 0.53),
  "ease-out-quad": ke(0.25, 0.46, 0.45, 0.94),
  "ease-in-out-quad": ke(0.455, 0.03, 0.515, 0.955),
  // cubic
  "ease-in-cubic": ke(0.55, 0.055, 0.675, 0.19),
  "ease-out-cubic": ke(0.215, 0.61, 0.355, 1),
  "ease-in-out-cubic": ke(0.645, 0.045, 0.355, 1),
  // quart
  "ease-in-quart": ke(0.895, 0.03, 0.685, 0.22),
  "ease-out-quart": ke(0.165, 0.84, 0.44, 1),
  "ease-in-out-quart": ke(0.77, 0, 0.175, 1),
  // quint
  "ease-in-quint": ke(0.755, 0.05, 0.855, 0.06),
  "ease-out-quint": ke(0.23, 1, 0.32, 1),
  "ease-in-out-quint": ke(0.86, 0, 0.07, 1),
  // expo
  "ease-in-expo": ke(0.95, 0.05, 0.795, 0.035),
  "ease-out-expo": ke(0.19, 1, 0.22, 1),
  "ease-in-out-expo": ke(1, 0, 0, 1),
  // circ
  "ease-in-circ": ke(0.6, 0.04, 0.98, 0.335),
  "ease-out-circ": ke(0.075, 0.82, 0.165, 1),
  "ease-in-out-circ": ke(0.785, 0.135, 0.15, 0.86),
  // user param easings...
  spring: function(e, r, a) {
    if (a === 0)
      return Wa.linear;
    var n = vg(e, r, a);
    return function(i, s, o) {
      return i + (s - i) * n(o);
    };
  },
  "cubic-bezier": ke
};
function ks(t, e, r, a, n) {
  if (a === 1 || e === r)
    return r;
  var i = n(e, r, a);
  return t == null || ((t.roundValue || t.color) && (i = Math.round(i)), t.min !== void 0 && (i = Math.max(i, t.min)), t.max !== void 0 && (i = Math.min(i, t.max))), i;
}
function Ps(t, e) {
  return t.pfValue != null || t.value != null ? t.pfValue != null && (e == null || e.type.units !== "%") ? t.pfValue : t.value : t;
}
function Sr(t, e, r, a, n) {
  var i = n != null ? n.type : null;
  r < 0 ? r = 0 : r > 1 && (r = 1);
  var s = Ps(t, n), o = Ps(e, n);
  if (ne(s) && ne(o))
    return ks(i, s, o, r, a);
  if (Re(s) && Re(o)) {
    for (var u = [], l = 0; l < o.length; l++) {
      var f = s[l], h = o[l];
      if (f != null && h != null) {
        var d = ks(i, f, h, r, a);
        u.push(d);
      } else
        u.push(h);
    }
    return u;
  }
}
function dg(t, e, r, a) {
  var n = !a, i = t._private, s = e._private, o = s.easing, u = s.startTime, l = a ? t : t.cy(), f = l.style();
  if (!s.easingImpl)
    if (o == null)
      s.easingImpl = Wa.linear;
    else {
      var h;
      if (ve(o)) {
        var d = f.parse("transition-timing-function", o);
        h = d.value;
      } else
        h = o;
      var c, v;
      ve(h) ? (c = h, v = []) : (c = h[1], v = h.slice(2).map(function(B) {
        return +B;
      })), v.length > 0 ? (c === "spring" && v.push(s.duration), s.easingImpl = Wa[c].apply(null, v)) : s.easingImpl = Wa[c];
    }
  var p = s.easingImpl, g;
  if (s.duration === 0 ? g = 1 : g = (r - u) / s.duration, s.applying && (g = s.progress), g < 0 ? g = 0 : g > 1 && (g = 1), s.delay == null) {
    var y = s.startPosition, b = s.position;
    if (b && n && !t.locked()) {
      var m = {};
      aa(y.x, b.x) && (m.x = Sr(y.x, b.x, g, p)), aa(y.y, b.y) && (m.y = Sr(y.y, b.y, g, p)), t.position(m);
    }
    var T = s.startPan, C = s.pan, S = i.pan, E = C != null && a;
    E && (aa(T.x, C.x) && (S.x = Sr(T.x, C.x, g, p)), aa(T.y, C.y) && (S.y = Sr(T.y, C.y, g, p)), t.emit("pan"));
    var x = s.startZoom, w = s.zoom, D = w != null && a;
    D && (aa(x, w) && (i.zoom = ga(i.minZoom, Sr(x, w, g, p), i.maxZoom)), t.emit("zoom")), (E || D) && t.emit("viewport");
    var L = s.style;
    if (L && L.length > 0 && n) {
      for (var A = 0; A < L.length; A++) {
        var I = L[A], O = I.name, M = I, R = s.startStyle[O], k = f.properties[R.name], P = Sr(R, M, g, p, k);
        f.overrideBypass(t, O, P);
      }
      t.emit("style");
    }
  }
  return s.progress = g, g;
}
function aa(t, e) {
  return t == null || e == null ? !1 : ne(t) && ne(e) ? !0 : !!(t && e);
}
function gg(t, e, r, a) {
  var n = e._private;
  n.started = !0, n.startTime = r - n.progress * n.duration;
}
function Bs(t, e) {
  var r = e._private.aniEles, a = [];
  function n(f, h) {
    var d = f._private, c = d.animation.current, v = d.animation.queue, p = !1;
    if (c.length === 0) {
      var g = v.shift();
      g && c.push(g);
    }
    for (var y = function(S) {
      for (var E = S.length - 1; E >= 0; E--) {
        var x = S[E];
        x();
      }
      S.splice(0, S.length);
    }, b = c.length - 1; b >= 0; b--) {
      var m = c[b], T = m._private;
      if (T.stopped) {
        c.splice(b, 1), T.hooked = !1, T.playing = !1, T.started = !1, y(T.frames);
        continue;
      }
      !T.playing && !T.applying || (T.playing && T.applying && (T.applying = !1), T.started || gg(f, m, t), dg(f, m, t, h), T.applying && (T.applying = !1), y(T.frames), T.step != null && T.step(t), m.completed() && (c.splice(b, 1), T.hooked = !1, T.playing = !1, T.started = !1, y(T.completes)), p = !0);
    }
    return !h && c.length === 0 && v.length === 0 && a.push(f), p;
  }
  for (var i = !1, s = 0; s < r.length; s++) {
    var o = r[s], u = n(o);
    i = i || u;
  }
  var l = n(e, !0);
  (i || l) && (r.length > 0 ? e.notify("draw", r) : e.notify("draw")), r.unmerge(a), e.emit("step");
}
var pg = {
  // pull in animation functions
  animate: Oe.animate(),
  animation: Oe.animation(),
  animated: Oe.animated(),
  clearQueue: Oe.clearQueue(),
  delay: Oe.delay(),
  delayAnimation: Oe.delayAnimation(),
  stop: Oe.stop(),
  addToAnimationPool: function(e) {
    var r = this;
    r.styleEnabled() && r._private.aniEles.merge(e);
  },
  stopAnimationLoop: function() {
    this._private.animationsRunning = !1;
  },
  startAnimationLoop: function() {
    var e = this;
    if (e._private.animationsRunning = !0, !e.styleEnabled())
      return;
    function r() {
      e._private.animationsRunning && rn(function(i) {
        Bs(i, e), r();
      });
    }
    var a = e.renderer();
    a && a.beforeRender ? a.beforeRender(function(i, s) {
      Bs(s, e);
    }, a.beforeRenderPriorities.animations) : r();
  }
}, yg = {
  qualifierCompare: function(e, r) {
    return e == null || r == null ? e == null && r == null : e.sameText(r);
  },
  eventMatches: function(e, r, a) {
    var n = r.qualifier;
    return n != null ? e !== a.target && Ta(a.target) && n.matches(a.target) : !0;
  },
  addEventFields: function(e, r) {
    r.cy = e, r.target = e;
  },
  callbackContext: function(e, r, a) {
    return r.qualifier != null ? a.target : e;
  }
}, Ua = function(e) {
  return ve(e) ? new tr(e) : e;
}, hu = {
  createEmitter: function() {
    var e = this._private;
    return e.emitter || (e.emitter = new Tn(yg, this)), this;
  },
  emitter: function() {
    return this._private.emitter;
  },
  on: function(e, r, a) {
    return this.emitter().on(e, Ua(r), a), this;
  },
  removeListener: function(e, r, a) {
    return this.emitter().removeListener(e, Ua(r), a), this;
  },
  removeAllListeners: function() {
    return this.emitter().removeAllListeners(), this;
  },
  one: function(e, r, a) {
    return this.emitter().one(e, Ua(r), a), this;
  },
  once: function(e, r, a) {
    return this.emitter().one(e, Ua(r), a), this;
  },
  emit: function(e, r) {
    return this.emitter().emit(e, r), this;
  },
  emitAndNotify: function(e, r) {
    return this.emit(e), this.notify(e, r), this;
  }
};
Oe.eventAliasesOn(hu);
var ei = {
  png: function(e) {
    var r = this._private.renderer;
    return e = e || {}, r.png(e);
  },
  jpg: function(e) {
    var r = this._private.renderer;
    return e = e || {}, e.bg = e.bg || "#fff", r.jpg(e);
  }
};
ei.jpeg = ei.jpg;
var Ka = {
  layout: function(e) {
    var r = this;
    if (e == null) {
      ze("Layout options must be specified to make a layout");
      return;
    }
    if (e.name == null) {
      ze("A `name` must be specified to make a layout");
      return;
    }
    var a = e.name, n = r.extension("layout", a);
    if (n == null) {
      ze("No such layout `" + a + "` found.  Did you forget to import it and `cytoscape.use()` it?");
      return;
    }
    var i;
    ve(e.eles) ? i = r.$(e.eles) : i = e.eles != null ? e.eles : r.$();
    var s = new n(be({}, e, {
      cy: r,
      eles: i
    }));
    return s;
  }
};
Ka.createLayout = Ka.makeLayout = Ka.layout;
var mg = {
  notify: function(e, r) {
    var a = this._private;
    if (this.batching()) {
      a.batchNotifications = a.batchNotifications || {};
      var n = a.batchNotifications[e] = a.batchNotifications[e] || this.collection();
      r != null && n.merge(r);
      return;
    }
    if (a.notificationsEnabled) {
      var i = this.renderer();
      this.destroyed() || !i || i.notify(e, r);
    }
  },
  notifications: function(e) {
    var r = this._private;
    return e === void 0 ? r.notificationsEnabled : (r.notificationsEnabled = !!e, this);
  },
  noNotifications: function(e) {
    this.notifications(!1), e(), this.notifications(!0);
  },
  batching: function() {
    return this._private.batchCount > 0;
  },
  startBatch: function() {
    var e = this._private;
    return e.batchCount == null && (e.batchCount = 0), e.batchCount === 0 && (e.batchStyleEles = this.collection(), e.batchNotifications = {}), e.batchCount++, this;
  },
  endBatch: function() {
    var e = this._private;
    if (e.batchCount === 0)
      return this;
    if (e.batchCount--, e.batchCount === 0) {
      e.batchStyleEles.updateStyle();
      var r = this.renderer();
      Object.keys(e.batchNotifications).forEach(function(a) {
        var n = e.batchNotifications[a];
        n.empty() ? r.notify(a) : r.notify(a, n);
      });
    }
    return this;
  },
  batch: function(e) {
    return this.startBatch(), e(), this.endBatch(), this;
  },
  // for backwards compatibility
  batchData: function(e) {
    var r = this;
    return this.batch(function() {
      for (var a = Object.keys(e), n = 0; n < a.length; n++) {
        var i = a[n], s = e[i], o = r.getElementById(i);
        o.data(s);
      }
    });
  }
}, bg = tt({
  hideEdgesOnViewport: !1,
  textureOnViewport: !1,
  motionBlur: !1,
  motionBlurOpacity: 0.05,
  pixelRatio: void 0,
  desktopTapThreshold: 4,
  touchTapThreshold: 8,
  wheelSensitivity: 1,
  debug: !1,
  showFps: !1
}), ti = {
  renderTo: function(e, r, a, n) {
    var i = this._private.renderer;
    return i.renderTo(e, r, a, n), this;
  },
  renderer: function() {
    return this._private.renderer;
  },
  forceRender: function() {
    return this.notify("draw"), this;
  },
  resize: function() {
    return this.invalidateSize(), this.emitAndNotify("resize"), this;
  },
  initRenderer: function(e) {
    var r = this, a = r.extension("renderer", e.name);
    if (a == null) {
      ze("Can not initialise: No such renderer `".concat(e.name, "` found. Did you forget to import it and `cytoscape.use()` it?"));
      return;
    }
    e.wheelSensitivity !== void 0 && Ne("You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine.");
    var n = bg(e);
    n.cy = r, r._private.renderer = new a(n), this.notify("init");
  },
  destroyRenderer: function() {
    var e = this;
    e.notify("destroy");
    var r = e.container();
    if (r)
      for (r._cyreg = null; r.childNodes.length > 0; )
        r.removeChild(r.childNodes[0]);
    e._private.renderer = null, e.mutableElements().forEach(function(a) {
      var n = a._private;
      n.rscratch = {}, n.rstyle = {}, n.animation.current = [], n.animation.queue = [];
    });
  },
  onRender: function(e) {
    return this.on("render", e);
  },
  offRender: function(e) {
    return this.off("render", e);
  }
};
ti.invalidateDimensions = ti.resize;
var Za = {
  // get a collection
  // - empty collection on no args
  // - collection of elements in the graph on selector arg
  // - guarantee a returned collection when elements or collection specified
  collection: function(e, r) {
    return ve(e) ? this.$(e) : pt(e) ? e.collection() : Re(e) ? (r || (r = {}), new et(this, e, r.unique, r.removed)) : new et(this);
  },
  nodes: function(e) {
    var r = this.$(function(a) {
      return a.isNode();
    });
    return e ? r.filter(e) : r;
  },
  edges: function(e) {
    var r = this.$(function(a) {
      return a.isEdge();
    });
    return e ? r.filter(e) : r;
  },
  // search the graph like jQuery
  $: function(e) {
    var r = this._private.elements;
    return e ? r.filter(e) : r.spawnSelf();
  },
  mutableElements: function() {
    return this._private.elements;
  }
};
Za.elements = Za.filter = Za.$;
var ot = {}, la = "t", Eg = "f";
ot.apply = function(t) {
  for (var e = this, r = e._private, a = r.cy, n = a.collection(), i = 0; i < t.length; i++) {
    var s = t[i], o = e.getContextMeta(s);
    if (!o.empty) {
      var u = e.getContextStyle(o), l = e.applyContextStyle(o, u, s);
      s._private.appliedInitStyle ? e.updateTransitions(s, l.diffProps) : s._private.appliedInitStyle = !0;
      var f = e.updateStyleHints(s);
      f && n.push(s);
    }
  }
  return n;
};
ot.getPropertiesDiff = function(t, e) {
  var r = this, a = r._private.propDiffs = r._private.propDiffs || {}, n = t + "-" + e, i = a[n];
  if (i)
    return i;
  for (var s = [], o = {}, u = 0; u < r.length; u++) {
    var l = r[u], f = t[u] === la, h = e[u] === la, d = f !== h, c = l.mappedProperties.length > 0;
    if (d || h && c) {
      var v = void 0;
      d && c || d ? v = l.properties : c && (v = l.mappedProperties);
      for (var p = 0; p < v.length; p++) {
        for (var g = v[p], y = g.name, b = !1, m = u + 1; m < r.length; m++) {
          var T = r[m], C = e[m] === la;
          if (C && (b = T.properties[g.name] != null, b))
            break;
        }
        !o[y] && !b && (o[y] = !0, s.push(y));
      }
    }
  }
  return a[n] = s, s;
};
ot.getContextMeta = function(t) {
  for (var e = this, r = "", a, n = t._private.styleCxtKey || "", i = 0; i < e.length; i++) {
    var s = e[i], o = s.selector && s.selector.matches(t);
    o ? r += la : r += Eg;
  }
  return a = e.getPropertiesDiff(n, r), t._private.styleCxtKey = r, {
    key: r,
    diffPropNames: a,
    empty: a.length === 0
  };
};
ot.getContextStyle = function(t) {
  var e = t.key, r = this, a = this._private.contextStyles = this._private.contextStyles || {};
  if (a[e])
    return a[e];
  for (var n = {
    _private: {
      key: e
    }
  }, i = 0; i < r.length; i++) {
    var s = r[i], o = e[i] === la;
    if (o)
      for (var u = 0; u < s.properties.length; u++) {
        var l = s.properties[u];
        n[l.name] = l;
      }
  }
  return a[e] = n, n;
};
ot.applyContextStyle = function(t, e, r) {
  for (var a = this, n = t.diffPropNames, i = {}, s = a.types, o = 0; o < n.length; o++) {
    var u = n[o], l = e[u], f = r.pstyle(u);
    if (!l)
      if (f)
        f.bypass ? l = {
          name: u,
          deleteBypassed: !0
        } : l = {
          name: u,
          delete: !0
        };
      else
        continue;
    if (f !== l) {
      if (l.mapped === s.fn && f != null && f.mapping != null && f.mapping.value === l.value) {
        var h = f.mapping, d = h.fnValue = l.value(r);
        if (d === h.prevFnValue)
          continue;
      }
      var c = i[u] = {
        prev: f
      };
      a.applyParsedProperty(r, l), c.next = r.pstyle(u), c.next && c.next.bypass && (c.next = c.next.bypassed);
    }
  }
  return {
    diffProps: i
  };
};
ot.updateStyleHints = function(t) {
  var e = t._private, r = this, a = r.propertyGroupNames, n = r.propertyGroupKeys, i = function(ee, oe, me) {
    return r.getPropertiesHash(ee, oe, me);
  }, s = e.styleKey;
  if (t.removed())
    return !1;
  var o = e.group === "nodes", u = t._private.style;
  a = Object.keys(u);
  for (var l = 0; l < n.length; l++) {
    var f = n[l];
    e.styleKeys[f] = [Nr, ia];
  }
  for (var h = function(ee, oe) {
    return e.styleKeys[oe][0] = ca(ee, e.styleKeys[oe][0]);
  }, d = function(ee, oe) {
    return e.styleKeys[oe][1] = va(ee, e.styleKeys[oe][1]);
  }, c = function(ee, oe) {
    h(ee, oe), d(ee, oe);
  }, v = function(ee, oe) {
    for (var me = 0; me < ee.length; me++) {
      var te = ee.charCodeAt(me);
      h(te, oe), d(te, oe);
    }
  }, p = 2e9, g = function(ee) {
    return -128 < ee && ee < 128 && Math.floor(ee) !== ee ? p - (ee * 1024 | 0) : ee;
  }, y = 0; y < a.length; y++) {
    var b = a[y], m = u[b];
    if (m != null) {
      var T = this.properties[b], C = T.type, S = T.groupKey, E = void 0;
      T.hashOverride != null ? E = T.hashOverride(t, m) : m.pfValue != null && (E = m.pfValue);
      var x = T.enums == null ? m.value : null, w = E != null, D = x != null, L = w || D, A = m.units;
      if (C.number && L && !C.multiple) {
        var I = w ? E : x;
        c(g(I), S), !w && A != null && v(A, S);
      } else
        v(m.strValue, S);
    }
  }
  for (var O = [Nr, ia], M = 0; M < n.length; M++) {
    var R = n[M], k = e.styleKeys[R];
    O[0] = ca(k[0], O[0]), O[1] = va(k[1], O[1]);
  }
  e.styleKey = Df(O[0], O[1]);
  var P = e.styleKeys;
  e.labelDimsKey = qt(P.labelDimensions);
  var B = i(t, ["label"], P.labelDimensions);
  if (e.labelKey = qt(B), e.labelStyleKey = qt(Ma(P.commonLabel, B)), !o) {
    var V = i(t, ["source-label"], P.labelDimensions);
    e.sourceLabelKey = qt(V), e.sourceLabelStyleKey = qt(Ma(P.commonLabel, V));
    var F = i(t, ["target-label"], P.labelDimensions);
    e.targetLabelKey = qt(F), e.targetLabelStyleKey = qt(Ma(P.commonLabel, F));
  }
  if (o) {
    var G = e.styleKeys, Y = G.nodeBody, _ = G.nodeBorder, q = G.nodeOutline, U = G.backgroundImage, z = G.compound, H = G.pie, W = [Y, _, q, U, z, H].filter(function(J) {
      return J != null;
    }).reduce(Ma, [Nr, ia]);
    e.nodeKey = qt(W), e.hasPie = H != null && H[0] !== Nr && H[1] !== ia;
  }
  return s !== e.styleKey;
};
ot.clearStyleHints = function(t) {
  var e = t._private;
  e.styleCxtKey = "", e.styleKeys = {}, e.styleKey = null, e.labelKey = null, e.labelStyleKey = null, e.sourceLabelKey = null, e.sourceLabelStyleKey = null, e.targetLabelKey = null, e.targetLabelStyleKey = null, e.nodeKey = null, e.hasPie = null;
};
ot.applyParsedProperty = function(t, e) {
  var r = this, a = e, n = t._private.style, i, s = r.types, o = r.properties[a.name].type, u = a.bypass, l = n[a.name], f = l && l.bypass, h = t._private, d = "mapping", c = function(Y) {
    return Y == null ? null : Y.pfValue != null ? Y.pfValue : Y.value;
  }, v = function() {
    var Y = c(l), _ = c(a);
    r.checkTriggers(t, a.name, Y, _);
  };
  if (e.name === "curve-style" && t.isEdge() && // loops must be bundled beziers
  (e.value !== "bezier" && t.isLoop() || // edges connected to compound nodes can not be haystacks
  e.value === "haystack" && (t.source().isParent() || t.target().isParent())) && (a = e = this.parse(e.name, "bezier", u)), a.delete)
    return n[a.name] = void 0, v(), !0;
  if (a.deleteBypassed)
    return l ? l.bypass ? (l.bypassed = void 0, v(), !0) : !1 : (v(), !0);
  if (a.deleteBypass)
    return l ? l.bypass ? (n[a.name] = l.bypassed, v(), !0) : !1 : (v(), !0);
  var p = function() {
    Ne("Do not assign mappings to elements without corresponding data (i.e. ele `" + t.id() + "` has no mapping for property `" + a.name + "` with data field `" + a.field + "`); try a `[" + a.field + "]` selector to limit scope to elements with `" + a.field + "` defined");
  };
  switch (a.mapped) {
    case s.mapData: {
      for (var g = a.field.split("."), y = h.data, b = 0; b < g.length && y; b++) {
        var m = g[b];
        y = y[m];
      }
      if (y == null)
        return p(), !1;
      var T;
      if (ne(y)) {
        var C = a.fieldMax - a.fieldMin;
        C === 0 ? T = 0 : T = (y - a.fieldMin) / C;
      } else
        return Ne("Do not use continuous mappers without specifying numeric data (i.e. `" + a.field + ": " + y + "` for `" + t.id() + "` is non-numeric)"), !1;
      if (T < 0 ? T = 0 : T > 1 && (T = 1), o.color) {
        var S = a.valueMin[0], E = a.valueMax[0], x = a.valueMin[1], w = a.valueMax[1], D = a.valueMin[2], L = a.valueMax[2], A = a.valueMin[3] == null ? 1 : a.valueMin[3], I = a.valueMax[3] == null ? 1 : a.valueMax[3], O = [Math.round(S + (E - S) * T), Math.round(x + (w - x) * T), Math.round(D + (L - D) * T), Math.round(A + (I - A) * T)];
        i = {
          // colours are simple, so just create the flat property instead of expensive string parsing
          bypass: a.bypass,
          // we're a bypass if the mapping property is a bypass
          name: a.name,
          value: O,
          strValue: "rgb(" + O[0] + ", " + O[1] + ", " + O[2] + ")"
        };
      } else if (o.number) {
        var M = a.valueMin + (a.valueMax - a.valueMin) * T;
        i = this.parse(a.name, M, a.bypass, d);
      } else
        return !1;
      if (!i)
        return p(), !1;
      i.mapping = a, a = i;
      break;
    }
    case s.data: {
      for (var R = a.field.split("."), k = h.data, P = 0; P < R.length && k; P++) {
        var B = R[P];
        k = k[B];
      }
      if (k != null && (i = this.parse(a.name, k, a.bypass, d)), !i)
        return p(), !1;
      i.mapping = a, a = i;
      break;
    }
    case s.fn: {
      var V = a.value, F = a.fnValue != null ? a.fnValue : V(t);
      if (a.prevFnValue = F, F == null)
        return Ne("Custom function mappers may not return null (i.e. `" + a.name + "` for ele `" + t.id() + "` is null)"), !1;
      if (i = this.parse(a.name, F, a.bypass, d), !i)
        return Ne("Custom function mappers may not return invalid values for the property type (i.e. `" + a.name + "` for ele `" + t.id() + "` is invalid)"), !1;
      i.mapping = Pt(a), a = i;
      break;
    }
    case void 0:
      break;
    default:
      return !1;
  }
  return u ? (f ? a.bypassed = l.bypassed : a.bypassed = l, n[a.name] = a) : f ? l.bypassed = a : n[a.name] = a, v(), !0;
};
ot.cleanElements = function(t, e) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    if (this.clearStyleHints(a), a.dirtyCompoundBoundsCache(), a.dirtyBoundingBoxCache(), !e)
      a._private.style = {};
    else
      for (var n = a._private.style, i = Object.keys(n), s = 0; s < i.length; s++) {
        var o = i[s], u = n[o];
        u != null && (u.bypass ? u.bypassed = null : n[o] = null);
      }
  }
};
ot.update = function() {
  var t = this._private.cy, e = t.mutableElements();
  e.updateStyle();
};
ot.updateTransitions = function(t, e) {
  var r = this, a = t._private, n = t.pstyle("transition-property").value, i = t.pstyle("transition-duration").pfValue, s = t.pstyle("transition-delay").pfValue;
  if (n.length > 0 && i > 0) {
    for (var o = {}, u = !1, l = 0; l < n.length; l++) {
      var f = n[l], h = t.pstyle(f), d = e[f];
      if (d) {
        var c = d.prev, v = c, p = d.next != null ? d.next : h, g = !1, y = void 0, b = 1e-6;
        v && (ne(v.pfValue) && ne(p.pfValue) ? (g = p.pfValue - v.pfValue, y = v.pfValue + b * g) : ne(v.value) && ne(p.value) ? (g = p.value - v.value, y = v.value + b * g) : Re(v.value) && Re(p.value) && (g = v.value[0] !== p.value[0] || v.value[1] !== p.value[1] || v.value[2] !== p.value[2], y = v.strValue), g && (o[f] = p.strValue, this.applyBypass(t, f, y), u = !0));
      }
    }
    if (!u)
      return;
    a.transitioning = !0, new $r(function(m) {
      s > 0 ? t.delayAnimation(s).play().promise().then(m) : m();
    }).then(function() {
      return t.animation({
        style: o,
        duration: i,
        easing: t.pstyle("transition-timing-function").value,
        queue: !1
      }).play().promise();
    }).then(function() {
      r.removeBypasses(t, n), t.emitAndNotify("style"), a.transitioning = !1;
    });
  } else
    a.transitioning && (this.removeBypasses(t, n), t.emitAndNotify("style"), a.transitioning = !1);
};
ot.checkTrigger = function(t, e, r, a, n, i) {
  var s = this.properties[e], o = n(s);
  o != null && o(r, a) && i(s);
};
ot.checkZOrderTrigger = function(t, e, r, a) {
  var n = this;
  this.checkTrigger(t, e, r, a, function(i) {
    return i.triggersZOrder;
  }, function() {
    n._private.cy.notify("zorder", t);
  });
};
ot.checkBoundsTrigger = function(t, e, r, a) {
  this.checkTrigger(t, e, r, a, function(n) {
    return n.triggersBounds;
  }, function(n) {
    t.dirtyCompoundBoundsCache(), t.dirtyBoundingBoxCache(), // only for beziers -- so performance of other edges isn't affected
    n.triggersBoundsOfParallelBeziers && e === "curve-style" && (r === "bezier" || a === "bezier") && t.parallelEdges().forEach(function(i) {
      i.isBundledBezier() && i.dirtyBoundingBoxCache();
    }), n.triggersBoundsOfConnectedEdges && e === "display" && (r === "none" || a === "none") && t.connectedEdges().forEach(function(i) {
      i.dirtyBoundingBoxCache();
    });
  });
};
ot.checkTriggers = function(t, e, r, a) {
  t.dirtyStyleCache(), this.checkZOrderTrigger(t, e, r, a), this.checkBoundsTrigger(t, e, r, a);
};
var La = {};
La.applyBypass = function(t, e, r, a) {
  var n = this, i = [], s = !0;
  if (e === "*" || e === "**") {
    if (r !== void 0)
      for (var o = 0; o < n.properties.length; o++) {
        var u = n.properties[o], l = u.name, f = this.parse(l, r, !0);
        f && i.push(f);
      }
  } else if (ve(e)) {
    var h = this.parse(e, r, !0);
    h && i.push(h);
  } else if (Ce(e)) {
    var d = e;
    a = r;
    for (var c = Object.keys(d), v = 0; v < c.length; v++) {
      var p = c[v], g = d[p];
      if (g === void 0 && (g = d[vn(p)]), g !== void 0) {
        var y = this.parse(p, g, !0);
        y && i.push(y);
      }
    }
  } else
    return !1;
  if (i.length === 0)
    return !1;
  for (var b = !1, m = 0; m < t.length; m++) {
    for (var T = t[m], C = {}, S = void 0, E = 0; E < i.length; E++) {
      var x = i[E];
      if (a) {
        var w = T.pstyle(x.name);
        S = C[x.name] = {
          prev: w
        };
      }
      b = this.applyParsedProperty(T, Pt(x)) || b, a && (S.next = T.pstyle(x.name));
    }
    b && this.updateStyleHints(T), a && this.updateTransitions(T, C, s);
  }
  return b;
};
La.overrideBypass = function(t, e, r) {
  e = pi(e);
  for (var a = 0; a < t.length; a++) {
    var n = t[a], i = n._private.style[e], s = this.properties[e].type, o = s.color, u = s.mutiple, l = i ? i.pfValue != null ? i.pfValue : i.value : null;
    !i || !i.bypass ? this.applyBypass(n, e, r) : (i.value = r, i.pfValue != null && (i.pfValue = r), o ? i.strValue = "rgb(" + r.join(",") + ")" : u ? i.strValue = r.join(" ") : i.strValue = "" + r, this.updateStyleHints(n)), this.checkTriggers(n, e, l, r);
  }
};
La.removeAllBypasses = function(t, e) {
  return this.removeBypasses(t, this.propertyNames, e);
};
La.removeBypasses = function(t, e, r) {
  for (var a = !0, n = 0; n < t.length; n++) {
    for (var i = t[n], s = {}, o = 0; o < e.length; o++) {
      var u = e[o], l = this.properties[u], f = i.pstyle(l.name);
      if (!(!f || !f.bypass)) {
        var h = "", d = this.parse(u, h, !0), c = s[l.name] = {
          prev: f
        };
        this.applyParsedProperty(i, d), c.next = i.pstyle(l.name);
      }
    }
    this.updateStyleHints(i), r && this.updateTransitions(i, s, a);
  }
};
var Ni = {};
Ni.getEmSizeInPixels = function() {
  var t = this.containerCss("font-size");
  return t != null ? parseFloat(t) : 1;
};
Ni.containerCss = function(t) {
  var e = this._private.cy, r = e.container(), a = e.window();
  if (a && r && a.getComputedStyle)
    return a.getComputedStyle(r).getPropertyValue(t);
};
var Ft = {};
Ft.getRenderedStyle = function(t, e) {
  return e ? this.getStylePropertyValue(t, e, !0) : this.getRawStyle(t, !0);
};
Ft.getRawStyle = function(t, e) {
  var r = this;
  if (t = t[0], t) {
    for (var a = {}, n = 0; n < r.properties.length; n++) {
      var i = r.properties[n], s = r.getStylePropertyValue(t, i.name, e);
      s != null && (a[i.name] = s, a[vn(i.name)] = s);
    }
    return a;
  }
};
Ft.getIndexedStyle = function(t, e, r, a) {
  var n = t.pstyle(e)[r][a];
  return n != null ? n : t.cy().style().getDefaultProperty(e)[r][0];
};
Ft.getStylePropertyValue = function(t, e, r) {
  var a = this;
  if (t = t[0], t) {
    var n = a.properties[e];
    n.alias && (n = n.pointsTo);
    var i = n.type, s = t.pstyle(n.name);
    if (s) {
      var o = s.value, u = s.units, l = s.strValue;
      if (r && i.number && o != null && ne(o)) {
        var f = t.cy().zoom(), h = function(g) {
          return g * f;
        }, d = function(g, y) {
          return h(g) + y;
        }, c = Re(o), v = c ? u.every(function(p) {
          return p != null;
        }) : u != null;
        return v ? c ? o.map(function(p, g) {
          return d(p, u[g]);
        }).join(" ") : d(o, u) : c ? o.map(function(p) {
          return ve(p) ? p : "" + h(p);
        }).join(" ") : "" + h(o);
      } else if (l != null)
        return l;
    }
    return null;
  }
};
Ft.getAnimationStartStyle = function(t, e) {
  for (var r = {}, a = 0; a < e.length; a++) {
    var n = e[a], i = n.name, s = t.pstyle(i);
    s !== void 0 && (Ce(s) ? s = this.parse(i, s.strValue) : s = this.parse(i, s)), s && (r[i] = s);
  }
  return r;
};
Ft.getPropsList = function(t) {
  var e = this, r = [], a = t, n = e.properties;
  if (a)
    for (var i = Object.keys(a), s = 0; s < i.length; s++) {
      var o = i[s], u = a[o], l = n[o] || n[pi(o)], f = this.parse(l.name, u);
      f && r.push(f);
    }
  return r;
};
Ft.getNonDefaultPropertiesHash = function(t, e, r) {
  var a = r.slice(), n, i, s, o, u, l;
  for (u = 0; u < e.length; u++)
    if (n = e[u], i = t.pstyle(n, !1), i != null)
      if (i.pfValue != null)
        a[0] = ca(o, a[0]), a[1] = va(o, a[1]);
      else
        for (s = i.strValue, l = 0; l < s.length; l++)
          o = s.charCodeAt(l), a[0] = ca(o, a[0]), a[1] = va(o, a[1]);
  return a;
};
Ft.getPropertiesHash = Ft.getNonDefaultPropertiesHash;
var Sn = {};
Sn.appendFromJson = function(t) {
  for (var e = this, r = 0; r < t.length; r++) {
    var a = t[r], n = a.selector, i = a.style || a.css, s = Object.keys(i);
    e.selector(n);
    for (var o = 0; o < s.length; o++) {
      var u = s[o], l = i[u];
      e.css(u, l);
    }
  }
  return e;
};
Sn.fromJson = function(t) {
  var e = this;
  return e.resetToDefault(), e.appendFromJson(t), e;
};
Sn.json = function() {
  for (var t = [], e = this.defaultLength; e < this.length; e++) {
    for (var r = this[e], a = r.selector, n = r.properties, i = {}, s = 0; s < n.length; s++) {
      var o = n[s];
      i[o.name] = o.strValue;
    }
    t.push({
      selector: a ? a.toString() : "core",
      style: i
    });
  }
  return t;
};
var Ii = {};
Ii.appendFromString = function(t) {
  var e = this, r = this, a = "" + t, n, i, s;
  a = a.replace(/[/][*](\s|.)+?[*][/]/g, "");
  function o() {
    a.length > n.length ? a = a.substr(n.length) : a = "";
  }
  function u() {
    i.length > s.length ? i = i.substr(s.length) : i = "";
  }
  for (; ; ) {
    var l = a.match(/^\s*$/);
    if (l)
      break;
    var f = a.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
    if (!f) {
      Ne("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: " + a);
      break;
    }
    n = f[0];
    var h = f[1];
    if (h !== "core") {
      var d = new tr(h);
      if (d.invalid) {
        Ne("Skipping parsing of block: Invalid selector found in string stylesheet: " + h), o();
        continue;
      }
    }
    var c = f[2], v = !1;
    i = c;
    for (var p = []; ; ) {
      var g = i.match(/^\s*$/);
      if (g)
        break;
      var y = i.match(/^\s*(.+?)\s*:\s*(.+?)(?:\s*;|\s*$)/);
      if (!y) {
        Ne("Skipping parsing of block: Invalid formatting of style property and value definitions found in:" + c), v = !0;
        break;
      }
      s = y[0];
      var b = y[1], m = y[2], T = e.properties[b];
      if (!T) {
        Ne("Skipping property: Invalid property name in: " + s), u();
        continue;
      }
      var C = r.parse(b, m);
      if (!C) {
        Ne("Skipping property: Invalid property definition in: " + s), u();
        continue;
      }
      p.push({
        name: b,
        val: m
      }), u();
    }
    if (v) {
      o();
      break;
    }
    r.selector(h);
    for (var S = 0; S < p.length; S++) {
      var E = p[S];
      r.css(E.name, E.val);
    }
    o();
  }
  return r;
};
Ii.fromString = function(t) {
  var e = this;
  return e.resetToDefault(), e.appendFromString(t), e;
};
var Je = {};
(function() {
  var t = He, e = Ll, r = Ol, a = Nl, n = Il, i = function(W) {
    return "^" + W + "\\s*\\(\\s*([\\w\\.]+)\\s*\\)$";
  }, s = function(W) {
    var J = t + "|\\w+|" + e + "|" + r + "|" + a + "|" + n;
    return "^" + W + "\\s*\\(([\\w\\.]+)\\s*\\,\\s*(" + t + ")\\s*\\,\\s*(" + t + ")\\s*,\\s*(" + J + ")\\s*\\,\\s*(" + J + ")\\)$";
  }, o = [`^url\\s*\\(\\s*['"]?(.+?)['"]?\\s*\\)$`, "^(none)$", "^(.+)$"];
  Je.types = {
    time: {
      number: !0,
      min: 0,
      units: "s|ms",
      implicitUnits: "ms"
    },
    percent: {
      number: !0,
      min: 0,
      max: 100,
      units: "%",
      implicitUnits: "%"
    },
    percentages: {
      number: !0,
      min: 0,
      max: 100,
      units: "%",
      implicitUnits: "%",
      multiple: !0
    },
    zeroOneNumber: {
      number: !0,
      min: 0,
      max: 1,
      unitless: !0
    },
    zeroOneNumbers: {
      number: !0,
      min: 0,
      max: 1,
      unitless: !0,
      multiple: !0
    },
    nOneOneNumber: {
      number: !0,
      min: -1,
      max: 1,
      unitless: !0
    },
    nonNegativeInt: {
      number: !0,
      min: 0,
      integer: !0,
      unitless: !0
    },
    nonNegativeNumber: {
      number: !0,
      min: 0,
      unitless: !0
    },
    position: {
      enums: ["parent", "origin"]
    },
    nodeSize: {
      number: !0,
      min: 0,
      enums: ["label"]
    },
    number: {
      number: !0,
      unitless: !0
    },
    numbers: {
      number: !0,
      unitless: !0,
      multiple: !0
    },
    positiveNumber: {
      number: !0,
      unitless: !0,
      min: 0,
      strictMin: !0
    },
    size: {
      number: !0,
      min: 0
    },
    bidirectionalSize: {
      number: !0
    },
    // allows negative
    bidirectionalSizeMaybePercent: {
      number: !0,
      allowPercent: !0
    },
    // allows negative
    bidirectionalSizes: {
      number: !0,
      multiple: !0
    },
    // allows negative
    sizeMaybePercent: {
      number: !0,
      min: 0,
      allowPercent: !0
    },
    axisDirection: {
      enums: ["horizontal", "leftward", "rightward", "vertical", "upward", "downward", "auto"]
    },
    paddingRelativeTo: {
      enums: ["width", "height", "average", "min", "max"]
    },
    bgWH: {
      number: !0,
      min: 0,
      allowPercent: !0,
      enums: ["auto"],
      multiple: !0
    },
    bgPos: {
      number: !0,
      allowPercent: !0,
      multiple: !0
    },
    bgRelativeTo: {
      enums: ["inner", "include-padding"],
      multiple: !0
    },
    bgRepeat: {
      enums: ["repeat", "repeat-x", "repeat-y", "no-repeat"],
      multiple: !0
    },
    bgFit: {
      enums: ["none", "contain", "cover"],
      multiple: !0
    },
    bgCrossOrigin: {
      enums: ["anonymous", "use-credentials", "null"],
      multiple: !0
    },
    bgClip: {
      enums: ["none", "node"],
      multiple: !0
    },
    bgContainment: {
      enums: ["inside", "over"],
      multiple: !0
    },
    color: {
      color: !0
    },
    colors: {
      color: !0,
      multiple: !0
    },
    fill: {
      enums: ["solid", "linear-gradient", "radial-gradient"]
    },
    bool: {
      enums: ["yes", "no"]
    },
    bools: {
      enums: ["yes", "no"],
      multiple: !0
    },
    lineStyle: {
      enums: ["solid", "dotted", "dashed"]
    },
    lineCap: {
      enums: ["butt", "round", "square"]
    },
    linePosition: {
      enums: ["center", "inside", "outside"]
    },
    lineJoin: {
      enums: ["round", "bevel", "miter"]
    },
    borderStyle: {
      enums: ["solid", "dotted", "dashed", "double"]
    },
    curveStyle: {
      enums: ["bezier", "unbundled-bezier", "haystack", "segments", "straight", "straight-triangle", "taxi", "round-segments", "round-taxi"]
    },
    radiusType: {
      enums: ["arc-radius", "influence-radius"],
      multiple: !0
    },
    fontFamily: {
      regex: '^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$'
    },
    fontStyle: {
      enums: ["italic", "normal", "oblique"]
    },
    fontWeight: {
      enums: ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "800", "900", 100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    textDecoration: {
      enums: ["none", "underline", "overline", "line-through"]
    },
    textTransform: {
      enums: ["none", "uppercase", "lowercase"]
    },
    textWrap: {
      enums: ["none", "wrap", "ellipsis"]
    },
    textOverflowWrap: {
      enums: ["whitespace", "anywhere"]
    },
    textBackgroundShape: {
      enums: ["rectangle", "roundrectangle", "round-rectangle"]
    },
    nodeShape: {
      enums: ["rectangle", "roundrectangle", "round-rectangle", "cutrectangle", "cut-rectangle", "bottomroundrectangle", "bottom-round-rectangle", "barrel", "ellipse", "triangle", "round-triangle", "square", "pentagon", "round-pentagon", "hexagon", "round-hexagon", "concavehexagon", "concave-hexagon", "heptagon", "round-heptagon", "octagon", "round-octagon", "tag", "round-tag", "star", "diamond", "round-diamond", "vee", "rhomboid", "right-rhomboid", "polygon"]
    },
    overlayShape: {
      enums: ["roundrectangle", "round-rectangle", "ellipse"]
    },
    cornerRadius: {
      number: !0,
      min: 0,
      units: "px|em",
      implicitUnits: "px",
      enums: ["auto"]
    },
    compoundIncludeLabels: {
      enums: ["include", "exclude"]
    },
    arrowShape: {
      enums: ["tee", "triangle", "triangle-tee", "circle-triangle", "triangle-cross", "triangle-backcurve", "vee", "square", "circle", "diamond", "chevron", "none"]
    },
    arrowFill: {
      enums: ["filled", "hollow"]
    },
    arrowWidth: {
      number: !0,
      units: "%|px|em",
      implicitUnits: "px",
      enums: ["match-line"]
    },
    display: {
      enums: ["element", "none"]
    },
    visibility: {
      enums: ["hidden", "visible"]
    },
    zCompoundDepth: {
      enums: ["bottom", "orphan", "auto", "top"]
    },
    zIndexCompare: {
      enums: ["auto", "manual"]
    },
    valign: {
      enums: ["top", "center", "bottom"]
    },
    halign: {
      enums: ["left", "center", "right"]
    },
    justification: {
      enums: ["left", "center", "right", "auto"]
    },
    text: {
      string: !0
    },
    data: {
      mapping: !0,
      regex: i("data")
    },
    layoutData: {
      mapping: !0,
      regex: i("layoutData")
    },
    scratch: {
      mapping: !0,
      regex: i("scratch")
    },
    mapData: {
      mapping: !0,
      regex: s("mapData")
    },
    mapLayoutData: {
      mapping: !0,
      regex: s("mapLayoutData")
    },
    mapScratch: {
      mapping: !0,
      regex: s("mapScratch")
    },
    fn: {
      mapping: !0,
      fn: !0
    },
    url: {
      regexes: o,
      singleRegexMatchValue: !0
    },
    urls: {
      regexes: o,
      singleRegexMatchValue: !0,
      multiple: !0
    },
    propList: {
      propList: !0
    },
    angle: {
      number: !0,
      units: "deg|rad",
      implicitUnits: "rad"
    },
    textRotation: {
      number: !0,
      units: "deg|rad",
      implicitUnits: "rad",
      enums: ["none", "autorotate"]
    },
    polygonPointList: {
      number: !0,
      multiple: !0,
      evenMultiple: !0,
      min: -1,
      max: 1,
      unitless: !0
    },
    edgeDistances: {
      enums: ["intersection", "node-position", "endpoints"]
    },
    edgeEndpoint: {
      number: !0,
      multiple: !0,
      units: "%|px|em|deg|rad",
      implicitUnits: "px",
      enums: ["inside-to-node", "outside-to-node", "outside-to-node-or-label", "outside-to-line", "outside-to-line-or-label"],
      singleEnum: !0,
      validate: function(W, J) {
        switch (W.length) {
          case 2:
            return J[0] !== "deg" && J[0] !== "rad" && J[1] !== "deg" && J[1] !== "rad";
          case 1:
            return ve(W[0]) || J[0] === "deg" || J[0] === "rad";
          default:
            return !1;
        }
      }
    },
    easing: {
      regexes: ["^(spring)\\s*\\(\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*\\)$", "^(cubic-bezier)\\s*\\(\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*\\)$"],
      enums: ["linear", "ease", "ease-in", "ease-out", "ease-in-out", "ease-in-sine", "ease-out-sine", "ease-in-out-sine", "ease-in-quad", "ease-out-quad", "ease-in-out-quad", "ease-in-cubic", "ease-out-cubic", "ease-in-out-cubic", "ease-in-quart", "ease-out-quart", "ease-in-out-quart", "ease-in-quint", "ease-out-quint", "ease-in-out-quint", "ease-in-expo", "ease-out-expo", "ease-in-out-expo", "ease-in-circ", "ease-out-circ", "ease-in-out-circ"]
    },
    gradientDirection: {
      enums: [
        "to-bottom",
        "to-top",
        "to-left",
        "to-right",
        "to-bottom-right",
        "to-bottom-left",
        "to-top-right",
        "to-top-left",
        "to-right-bottom",
        "to-left-bottom",
        "to-right-top",
        "to-left-top"
        // different order
      ]
    },
    boundsExpansion: {
      number: !0,
      multiple: !0,
      min: 0,
      validate: function(W) {
        var J = W.length;
        return J === 1 || J === 2 || J === 4;
      }
    }
  };
  var u = {
    zeroNonZero: function(W, J) {
      return (W == null || J == null) && W !== J || W == 0 && J != 0 ? !0 : W != 0 && J == 0;
    },
    any: function(W, J) {
      return W != J;
    },
    emptyNonEmpty: function(W, J) {
      var ee = jt(W), oe = jt(J);
      return ee && !oe || !ee && oe;
    }
  }, l = Je.types, f = [{
    name: "label",
    type: l.text,
    triggersBounds: u.any,
    triggersZOrder: u.emptyNonEmpty
  }, {
    name: "text-rotation",
    type: l.textRotation,
    triggersBounds: u.any
  }, {
    name: "text-margin-x",
    type: l.bidirectionalSize,
    triggersBounds: u.any
  }, {
    name: "text-margin-y",
    type: l.bidirectionalSize,
    triggersBounds: u.any
  }], h = [{
    name: "source-label",
    type: l.text,
    triggersBounds: u.any
  }, {
    name: "source-text-rotation",
    type: l.textRotation,
    triggersBounds: u.any
  }, {
    name: "source-text-margin-x",
    type: l.bidirectionalSize,
    triggersBounds: u.any
  }, {
    name: "source-text-margin-y",
    type: l.bidirectionalSize,
    triggersBounds: u.any
  }, {
    name: "source-text-offset",
    type: l.size,
    triggersBounds: u.any
  }], d = [{
    name: "target-label",
    type: l.text,
    triggersBounds: u.any
  }, {
    name: "target-text-rotation",
    type: l.textRotation,
    triggersBounds: u.any
  }, {
    name: "target-text-margin-x",
    type: l.bidirectionalSize,
    triggersBounds: u.any
  }, {
    name: "target-text-margin-y",
    type: l.bidirectionalSize,
    triggersBounds: u.any
  }, {
    name: "target-text-offset",
    type: l.size,
    triggersBounds: u.any
  }], c = [{
    name: "font-family",
    type: l.fontFamily,
    triggersBounds: u.any
  }, {
    name: "font-style",
    type: l.fontStyle,
    triggersBounds: u.any
  }, {
    name: "font-weight",
    type: l.fontWeight,
    triggersBounds: u.any
  }, {
    name: "font-size",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "text-transform",
    type: l.textTransform,
    triggersBounds: u.any
  }, {
    name: "text-wrap",
    type: l.textWrap,
    triggersBounds: u.any
  }, {
    name: "text-overflow-wrap",
    type: l.textOverflowWrap,
    triggersBounds: u.any
  }, {
    name: "text-max-width",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "text-outline-width",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "line-height",
    type: l.positiveNumber,
    triggersBounds: u.any
  }], v = [{
    name: "text-valign",
    type: l.valign,
    triggersBounds: u.any
  }, {
    name: "text-halign",
    type: l.halign,
    triggersBounds: u.any
  }, {
    name: "color",
    type: l.color
  }, {
    name: "text-outline-color",
    type: l.color
  }, {
    name: "text-outline-opacity",
    type: l.zeroOneNumber
  }, {
    name: "text-background-color",
    type: l.color
  }, {
    name: "text-background-opacity",
    type: l.zeroOneNumber
  }, {
    name: "text-background-padding",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "text-border-opacity",
    type: l.zeroOneNumber
  }, {
    name: "text-border-color",
    type: l.color
  }, {
    name: "text-border-width",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "text-border-style",
    type: l.borderStyle,
    triggersBounds: u.any
  }, {
    name: "text-background-shape",
    type: l.textBackgroundShape,
    triggersBounds: u.any
  }, {
    name: "text-justification",
    type: l.justification
  }], p = [{
    name: "events",
    type: l.bool,
    triggersZOrder: u.any
  }, {
    name: "text-events",
    type: l.bool,
    triggersZOrder: u.any
  }], g = [{
    name: "display",
    type: l.display,
    triggersZOrder: u.any,
    triggersBounds: u.any,
    triggersBoundsOfConnectedEdges: !0
  }, {
    name: "visibility",
    type: l.visibility,
    triggersZOrder: u.any
  }, {
    name: "opacity",
    type: l.zeroOneNumber,
    triggersZOrder: u.zeroNonZero
  }, {
    name: "text-opacity",
    type: l.zeroOneNumber
  }, {
    name: "min-zoomed-font-size",
    type: l.size
  }, {
    name: "z-compound-depth",
    type: l.zCompoundDepth,
    triggersZOrder: u.any
  }, {
    name: "z-index-compare",
    type: l.zIndexCompare,
    triggersZOrder: u.any
  }, {
    name: "z-index",
    type: l.number,
    triggersZOrder: u.any
  }], y = [{
    name: "overlay-padding",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "overlay-color",
    type: l.color
  }, {
    name: "overlay-opacity",
    type: l.zeroOneNumber,
    triggersBounds: u.zeroNonZero
  }, {
    name: "overlay-shape",
    type: l.overlayShape,
    triggersBounds: u.any
  }, {
    name: "overlay-corner-radius",
    type: l.cornerRadius
  }], b = [{
    name: "underlay-padding",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "underlay-color",
    type: l.color
  }, {
    name: "underlay-opacity",
    type: l.zeroOneNumber,
    triggersBounds: u.zeroNonZero
  }, {
    name: "underlay-shape",
    type: l.overlayShape,
    triggersBounds: u.any
  }, {
    name: "underlay-corner-radius",
    type: l.cornerRadius
  }], m = [{
    name: "transition-property",
    type: l.propList
  }, {
    name: "transition-duration",
    type: l.time
  }, {
    name: "transition-delay",
    type: l.time
  }, {
    name: "transition-timing-function",
    type: l.easing
  }], T = function(W, J) {
    return J.value === "label" ? -W.poolIndex() : J.pfValue;
  }, C = [{
    name: "height",
    type: l.nodeSize,
    triggersBounds: u.any,
    hashOverride: T
  }, {
    name: "width",
    type: l.nodeSize,
    triggersBounds: u.any,
    hashOverride: T
  }, {
    name: "shape",
    type: l.nodeShape,
    triggersBounds: u.any
  }, {
    name: "shape-polygon-points",
    type: l.polygonPointList,
    triggersBounds: u.any
  }, {
    name: "corner-radius",
    type: l.cornerRadius
  }, {
    name: "background-color",
    type: l.color
  }, {
    name: "background-fill",
    type: l.fill
  }, {
    name: "background-opacity",
    type: l.zeroOneNumber
  }, {
    name: "background-blacken",
    type: l.nOneOneNumber
  }, {
    name: "background-gradient-stop-colors",
    type: l.colors
  }, {
    name: "background-gradient-stop-positions",
    type: l.percentages
  }, {
    name: "background-gradient-direction",
    type: l.gradientDirection
  }, {
    name: "padding",
    type: l.sizeMaybePercent,
    triggersBounds: u.any
  }, {
    name: "padding-relative-to",
    type: l.paddingRelativeTo,
    triggersBounds: u.any
  }, {
    name: "bounds-expansion",
    type: l.boundsExpansion,
    triggersBounds: u.any
  }], S = [{
    name: "border-color",
    type: l.color
  }, {
    name: "border-opacity",
    type: l.zeroOneNumber
  }, {
    name: "border-width",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "border-style",
    type: l.borderStyle
  }, {
    name: "border-cap",
    type: l.lineCap
  }, {
    name: "border-join",
    type: l.lineJoin
  }, {
    name: "border-dash-pattern",
    type: l.numbers
  }, {
    name: "border-dash-offset",
    type: l.number
  }, {
    name: "border-position",
    type: l.linePosition
  }], E = [{
    name: "outline-color",
    type: l.color
  }, {
    name: "outline-opacity",
    type: l.zeroOneNumber
  }, {
    name: "outline-width",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "outline-style",
    type: l.borderStyle
  }, {
    name: "outline-offset",
    type: l.size,
    triggersBounds: u.any
  }], x = [{
    name: "background-image",
    type: l.urls
  }, {
    name: "background-image-crossorigin",
    type: l.bgCrossOrigin
  }, {
    name: "background-image-opacity",
    type: l.zeroOneNumbers
  }, {
    name: "background-image-containment",
    type: l.bgContainment
  }, {
    name: "background-image-smoothing",
    type: l.bools
  }, {
    name: "background-position-x",
    type: l.bgPos
  }, {
    name: "background-position-y",
    type: l.bgPos
  }, {
    name: "background-width-relative-to",
    type: l.bgRelativeTo
  }, {
    name: "background-height-relative-to",
    type: l.bgRelativeTo
  }, {
    name: "background-repeat",
    type: l.bgRepeat
  }, {
    name: "background-fit",
    type: l.bgFit
  }, {
    name: "background-clip",
    type: l.bgClip
  }, {
    name: "background-width",
    type: l.bgWH
  }, {
    name: "background-height",
    type: l.bgWH
  }, {
    name: "background-offset-x",
    type: l.bgPos
  }, {
    name: "background-offset-y",
    type: l.bgPos
  }], w = [{
    name: "position",
    type: l.position,
    triggersBounds: u.any
  }, {
    name: "compound-sizing-wrt-labels",
    type: l.compoundIncludeLabels,
    triggersBounds: u.any
  }, {
    name: "min-width",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "min-width-bias-left",
    type: l.sizeMaybePercent,
    triggersBounds: u.any
  }, {
    name: "min-width-bias-right",
    type: l.sizeMaybePercent,
    triggersBounds: u.any
  }, {
    name: "min-height",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "min-height-bias-top",
    type: l.sizeMaybePercent,
    triggersBounds: u.any
  }, {
    name: "min-height-bias-bottom",
    type: l.sizeMaybePercent,
    triggersBounds: u.any
  }], D = [{
    name: "line-style",
    type: l.lineStyle
  }, {
    name: "line-color",
    type: l.color
  }, {
    name: "line-fill",
    type: l.fill
  }, {
    name: "line-cap",
    type: l.lineCap
  }, {
    name: "line-opacity",
    type: l.zeroOneNumber
  }, {
    name: "line-dash-pattern",
    type: l.numbers
  }, {
    name: "line-dash-offset",
    type: l.number
  }, {
    name: "line-gradient-stop-colors",
    type: l.colors
  }, {
    name: "line-gradient-stop-positions",
    type: l.percentages
  }, {
    name: "curve-style",
    type: l.curveStyle,
    triggersBounds: u.any,
    triggersBoundsOfParallelBeziers: !0
  }, {
    name: "haystack-radius",
    type: l.zeroOneNumber,
    triggersBounds: u.any
  }, {
    name: "source-endpoint",
    type: l.edgeEndpoint,
    triggersBounds: u.any
  }, {
    name: "target-endpoint",
    type: l.edgeEndpoint,
    triggersBounds: u.any
  }, {
    name: "control-point-step-size",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "control-point-distances",
    type: l.bidirectionalSizes,
    triggersBounds: u.any
  }, {
    name: "control-point-weights",
    type: l.numbers,
    triggersBounds: u.any
  }, {
    name: "segment-distances",
    type: l.bidirectionalSizes,
    triggersBounds: u.any
  }, {
    name: "segment-weights",
    type: l.numbers,
    triggersBounds: u.any
  }, {
    name: "segment-radii",
    type: l.numbers,
    triggersBounds: u.any
  }, {
    name: "radius-type",
    type: l.radiusType,
    triggersBounds: u.any
  }, {
    name: "taxi-turn",
    type: l.bidirectionalSizeMaybePercent,
    triggersBounds: u.any
  }, {
    name: "taxi-turn-min-distance",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "taxi-direction",
    type: l.axisDirection,
    triggersBounds: u.any
  }, {
    name: "taxi-radius",
    type: l.number,
    triggersBounds: u.any
  }, {
    name: "edge-distances",
    type: l.edgeDistances,
    triggersBounds: u.any
  }, {
    name: "arrow-scale",
    type: l.positiveNumber,
    triggersBounds: u.any
  }, {
    name: "loop-direction",
    type: l.angle,
    triggersBounds: u.any
  }, {
    name: "loop-sweep",
    type: l.angle,
    triggersBounds: u.any
  }, {
    name: "source-distance-from-node",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "target-distance-from-node",
    type: l.size,
    triggersBounds: u.any
  }], L = [{
    name: "ghost",
    type: l.bool,
    triggersBounds: u.any
  }, {
    name: "ghost-offset-x",
    type: l.bidirectionalSize,
    triggersBounds: u.any
  }, {
    name: "ghost-offset-y",
    type: l.bidirectionalSize,
    triggersBounds: u.any
  }, {
    name: "ghost-opacity",
    type: l.zeroOneNumber
  }], A = [{
    name: "selection-box-color",
    type: l.color
  }, {
    name: "selection-box-opacity",
    type: l.zeroOneNumber
  }, {
    name: "selection-box-border-color",
    type: l.color
  }, {
    name: "selection-box-border-width",
    type: l.size
  }, {
    name: "active-bg-color",
    type: l.color
  }, {
    name: "active-bg-opacity",
    type: l.zeroOneNumber
  }, {
    name: "active-bg-size",
    type: l.size
  }, {
    name: "outside-texture-bg-color",
    type: l.color
  }, {
    name: "outside-texture-bg-opacity",
    type: l.zeroOneNumber
  }], I = [];
  Je.pieBackgroundN = 16, I.push({
    name: "pie-size",
    type: l.sizeMaybePercent
  });
  for (var O = 1; O <= Je.pieBackgroundN; O++)
    I.push({
      name: "pie-" + O + "-background-color",
      type: l.color
    }), I.push({
      name: "pie-" + O + "-background-size",
      type: l.percent
    }), I.push({
      name: "pie-" + O + "-background-opacity",
      type: l.zeroOneNumber
    });
  var M = [], R = Je.arrowPrefixes = ["source", "mid-source", "target", "mid-target"];
  [{
    name: "arrow-shape",
    type: l.arrowShape,
    triggersBounds: u.any
  }, {
    name: "arrow-color",
    type: l.color
  }, {
    name: "arrow-fill",
    type: l.arrowFill
  }, {
    name: "arrow-width",
    type: l.arrowWidth
  }].forEach(function(H) {
    R.forEach(function(W) {
      var J = W + "-" + H.name, ee = H.type, oe = H.triggersBounds;
      M.push({
        name: J,
        type: ee,
        triggersBounds: oe
      });
    });
  }, {});
  var k = Je.properties = [].concat(p, m, g, y, b, L, v, c, f, h, d, C, S, E, x, I, w, D, M, A), P = Je.propertyGroups = {
    // common to all eles
    behavior: p,
    transition: m,
    visibility: g,
    overlay: y,
    underlay: b,
    ghost: L,
    // labels
    commonLabel: v,
    labelDimensions: c,
    mainLabel: f,
    sourceLabel: h,
    targetLabel: d,
    // node props
    nodeBody: C,
    nodeBorder: S,
    nodeOutline: E,
    backgroundImage: x,
    pie: I,
    compound: w,
    // edge props
    edgeLine: D,
    edgeArrow: M,
    core: A
  }, B = Je.propertyGroupNames = {}, V = Je.propertyGroupKeys = Object.keys(P);
  V.forEach(function(H) {
    B[H] = P[H].map(function(W) {
      return W.name;
    }), P[H].forEach(function(W) {
      return W.groupKey = H;
    });
  });
  var F = Je.aliases = [{
    name: "content",
    pointsTo: "label"
  }, {
    name: "control-point-distance",
    pointsTo: "control-point-distances"
  }, {
    name: "control-point-weight",
    pointsTo: "control-point-weights"
  }, {
    name: "segment-distance",
    pointsTo: "segment-distances"
  }, {
    name: "segment-weight",
    pointsTo: "segment-weights"
  }, {
    name: "segment-radius",
    pointsTo: "segment-radii"
  }, {
    name: "edge-text-rotation",
    pointsTo: "text-rotation"
  }, {
    name: "padding-left",
    pointsTo: "padding"
  }, {
    name: "padding-right",
    pointsTo: "padding"
  }, {
    name: "padding-top",
    pointsTo: "padding"
  }, {
    name: "padding-bottom",
    pointsTo: "padding"
  }];
  Je.propertyNames = k.map(function(H) {
    return H.name;
  });
  for (var G = 0; G < k.length; G++) {
    var Y = k[G];
    k[Y.name] = Y;
  }
  for (var _ = 0; _ < F.length; _++) {
    var q = F[_], U = k[q.pointsTo], z = {
      name: q.name,
      alias: !0,
      pointsTo: U
    };
    k.push(z), k[q.name] = z;
  }
})();
Je.getDefaultProperty = function(t) {
  return this.getDefaultProperties()[t];
};
Je.getDefaultProperties = function() {
  var t = this._private;
  if (t.defaultProperties != null)
    return t.defaultProperties;
  for (var e = be({
    // core props
    "selection-box-color": "#ddd",
    "selection-box-opacity": 0.65,
    "selection-box-border-color": "#aaa",
    "selection-box-border-width": 1,
    "active-bg-color": "black",
    "active-bg-opacity": 0.15,
    "active-bg-size": 30,
    "outside-texture-bg-color": "#000",
    "outside-texture-bg-opacity": 0.125,
    // common node/edge props
    events: "yes",
    "text-events": "no",
    "text-valign": "top",
    "text-halign": "center",
    "text-justification": "auto",
    "line-height": 1,
    color: "#000",
    "text-outline-color": "#000",
    "text-outline-width": 0,
    "text-outline-opacity": 1,
    "text-opacity": 1,
    "text-decoration": "none",
    "text-transform": "none",
    "text-wrap": "none",
    "text-overflow-wrap": "whitespace",
    "text-max-width": 9999,
    "text-background-color": "#000",
    "text-background-opacity": 0,
    "text-background-shape": "rectangle",
    "text-background-padding": 0,
    "text-border-opacity": 0,
    "text-border-width": 0,
    "text-border-style": "solid",
    "text-border-color": "#000",
    "font-family": "Helvetica Neue, Helvetica, sans-serif",
    "font-style": "normal",
    "font-weight": "normal",
    "font-size": 16,
    "min-zoomed-font-size": 0,
    "text-rotation": "none",
    "source-text-rotation": "none",
    "target-text-rotation": "none",
    visibility: "visible",
    display: "element",
    opacity: 1,
    "z-compound-depth": "auto",
    "z-index-compare": "auto",
    "z-index": 0,
    label: "",
    "text-margin-x": 0,
    "text-margin-y": 0,
    "source-label": "",
    "source-text-offset": 0,
    "source-text-margin-x": 0,
    "source-text-margin-y": 0,
    "target-label": "",
    "target-text-offset": 0,
    "target-text-margin-x": 0,
    "target-text-margin-y": 0,
    "overlay-opacity": 0,
    "overlay-color": "#000",
    "overlay-padding": 10,
    "overlay-shape": "round-rectangle",
    "overlay-corner-radius": "auto",
    "underlay-opacity": 0,
    "underlay-color": "#000",
    "underlay-padding": 10,
    "underlay-shape": "round-rectangle",
    "underlay-corner-radius": "auto",
    "transition-property": "none",
    "transition-duration": 0,
    "transition-delay": 0,
    "transition-timing-function": "linear",
    // node props
    "background-blacken": 0,
    "background-color": "#999",
    "background-fill": "solid",
    "background-opacity": 1,
    "background-image": "none",
    "background-image-crossorigin": "anonymous",
    "background-image-opacity": 1,
    "background-image-containment": "inside",
    "background-image-smoothing": "yes",
    "background-position-x": "50%",
    "background-position-y": "50%",
    "background-offset-x": 0,
    "background-offset-y": 0,
    "background-width-relative-to": "include-padding",
    "background-height-relative-to": "include-padding",
    "background-repeat": "no-repeat",
    "background-fit": "none",
    "background-clip": "node",
    "background-width": "auto",
    "background-height": "auto",
    "border-color": "#000",
    "border-opacity": 1,
    "border-width": 0,
    "border-style": "solid",
    "border-dash-pattern": [4, 2],
    "border-dash-offset": 0,
    "border-cap": "butt",
    "border-join": "miter",
    "border-position": "center",
    "outline-color": "#999",
    "outline-opacity": 1,
    "outline-width": 0,
    "outline-offset": 0,
    "outline-style": "solid",
    height: 30,
    width: 30,
    shape: "ellipse",
    "shape-polygon-points": "-1, -1,   1, -1,   1, 1,   -1, 1",
    "corner-radius": "auto",
    "bounds-expansion": 0,
    // node gradient
    "background-gradient-direction": "to-bottom",
    "background-gradient-stop-colors": "#999",
    "background-gradient-stop-positions": "0%",
    // ghost props
    ghost: "no",
    "ghost-offset-y": 0,
    "ghost-offset-x": 0,
    "ghost-opacity": 0,
    // compound props
    padding: 0,
    "padding-relative-to": "width",
    position: "origin",
    "compound-sizing-wrt-labels": "include",
    "min-width": 0,
    "min-width-bias-left": 0,
    "min-width-bias-right": 0,
    "min-height": 0,
    "min-height-bias-top": 0,
    "min-height-bias-bottom": 0
  }, {
    // node pie bg
    "pie-size": "100%"
  }, [{
    name: "pie-{{i}}-background-color",
    value: "black"
  }, {
    name: "pie-{{i}}-background-size",
    value: "0%"
  }, {
    name: "pie-{{i}}-background-opacity",
    value: 1
  }].reduce(function(u, l) {
    for (var f = 1; f <= Je.pieBackgroundN; f++) {
      var h = l.name.replace("{{i}}", f), d = l.value;
      u[h] = d;
    }
    return u;
  }, {}), {
    // edge props
    "line-style": "solid",
    "line-color": "#999",
    "line-fill": "solid",
    "line-cap": "butt",
    "line-opacity": 1,
    "line-gradient-stop-colors": "#999",
    "line-gradient-stop-positions": "0%",
    "control-point-step-size": 40,
    "control-point-weights": 0.5,
    "segment-weights": 0.5,
    "segment-distances": 20,
    "segment-radii": 15,
    "radius-type": "arc-radius",
    "taxi-turn": "50%",
    "taxi-radius": 15,
    "taxi-turn-min-distance": 10,
    "taxi-direction": "auto",
    "edge-distances": "intersection",
    "curve-style": "haystack",
    "haystack-radius": 0,
    "arrow-scale": 1,
    "loop-direction": "-45deg",
    "loop-sweep": "-90deg",
    "source-distance-from-node": 0,
    "target-distance-from-node": 0,
    "source-endpoint": "outside-to-node",
    "target-endpoint": "outside-to-node",
    "line-dash-pattern": [6, 3],
    "line-dash-offset": 0
  }, [{
    name: "arrow-shape",
    value: "none"
  }, {
    name: "arrow-color",
    value: "#999"
  }, {
    name: "arrow-fill",
    value: "filled"
  }, {
    name: "arrow-width",
    value: 1
  }].reduce(function(u, l) {
    return Je.arrowPrefixes.forEach(function(f) {
      var h = f + "-" + l.name, d = l.value;
      u[h] = d;
    }), u;
  }, {})), r = {}, a = 0; a < this.properties.length; a++) {
    var n = this.properties[a];
    if (!n.pointsTo) {
      var i = n.name, s = e[i], o = this.parse(i, s);
      r[i] = o;
    }
  }
  return t.defaultProperties = r, t.defaultProperties;
};
Je.addDefaultStylesheet = function() {
  this.selector(":parent").css({
    shape: "rectangle",
    padding: 10,
    "background-color": "#eee",
    "border-color": "#ccc",
    "border-width": 1
  }).selector("edge").css({
    width: 3
  }).selector(":loop").css({
    "curve-style": "bezier"
  }).selector("edge:compound").css({
    "curve-style": "bezier",
    "source-endpoint": "outside-to-line",
    "target-endpoint": "outside-to-line"
  }).selector(":selected").css({
    "background-color": "#0169D9",
    "line-color": "#0169D9",
    "source-arrow-color": "#0169D9",
    "target-arrow-color": "#0169D9",
    "mid-source-arrow-color": "#0169D9",
    "mid-target-arrow-color": "#0169D9"
  }).selector(":parent:selected").css({
    "background-color": "#CCE1F9",
    "border-color": "#aec8e5"
  }).selector(":active").css({
    "overlay-color": "black",
    "overlay-padding": 10,
    "overlay-opacity": 0.25
  }), this.defaultLength = this.length;
};
var Ln = {};
Ln.parse = function(t, e, r, a) {
  var n = this;
  if (Ge(e))
    return n.parseImplWarn(t, e, r, a);
  var i = a === "mapping" || a === !0 || a === !1 || a == null ? "dontcare" : a, s = r ? "t" : "f", o = "" + e, u = Eo(t, o, s, i), l = n.propCache = n.propCache || [], f;
  return (f = l[u]) || (f = l[u] = n.parseImplWarn(t, e, r, a)), (r || a === "mapping") && (f = Pt(f), f && (f.value = Pt(f.value))), f;
};
Ln.parseImplWarn = function(t, e, r, a) {
  var n = this.parseImpl(t, e, r, a);
  return !n && e != null && Ne("The style property `".concat(t, ": ").concat(e, "` is invalid")), n && (n.name === "width" || n.name === "height") && e === "label" && Ne("The style value of `label` is deprecated for `" + n.name + "`"), n;
};
Ln.parseImpl = function(t, e, r, a) {
  var n = this;
  t = pi(t);
  var i = n.properties[t], s = e, o = n.types;
  if (!i || e === void 0)
    return null;
  i.alias && (i = i.pointsTo, t = i.name);
  var u = ve(e);
  u && (e = e.trim());
  var l = i.type;
  if (!l)
    return null;
  if (r && (e === "" || e === null))
    return {
      name: t,
      value: e,
      bypass: !0,
      deleteBypass: !0
    };
  if (Ge(e))
    return {
      name: t,
      value: e,
      strValue: "fn",
      mapped: o.fn,
      bypass: r
    };
  var f, h;
  if (!(!u || a || e.length < 7 || e[1] !== "a")) {
    if (e.length >= 7 && e[0] === "d" && (f = new RegExp(o.data.regex).exec(e))) {
      if (r)
        return !1;
      var d = o.data;
      return {
        name: t,
        value: f,
        strValue: "" + e,
        mapped: d,
        field: f[1],
        bypass: r
      };
    } else if (e.length >= 10 && e[0] === "m" && (h = new RegExp(o.mapData.regex).exec(e))) {
      if (r || l.multiple)
        return !1;
      var c = o.mapData;
      if (!(l.color || l.number))
        return !1;
      var v = this.parse(t, h[4]);
      if (!v || v.mapped)
        return !1;
      var p = this.parse(t, h[5]);
      if (!p || p.mapped)
        return !1;
      if (v.pfValue === p.pfValue || v.strValue === p.strValue)
        return Ne("`" + t + ": " + e + "` is not a valid mapper because the output range is zero; converting to `" + t + ": " + v.strValue + "`"), this.parse(t, v.strValue);
      if (l.color) {
        var g = v.value, y = p.value, b = g[0] === y[0] && g[1] === y[1] && g[2] === y[2] && // optional alpha
        (g[3] === y[3] || (g[3] == null || g[3] === 1) && (y[3] == null || y[3] === 1));
        if (b)
          return !1;
      }
      return {
        name: t,
        value: h,
        strValue: "" + e,
        mapped: c,
        field: h[1],
        fieldMin: parseFloat(h[2]),
        // min & max are numeric
        fieldMax: parseFloat(h[3]),
        valueMin: v.value,
        valueMax: p.value,
        bypass: r
      };
    }
  }
  if (l.multiple && a !== "multiple") {
    var m;
    if (u ? m = e.split(/\s+/) : Re(e) ? m = e : m = [e], l.evenMultiple && m.length % 2 !== 0)
      return null;
    for (var T = [], C = [], S = [], E = "", x = !1, w = 0; w < m.length; w++) {
      var D = n.parse(t, m[w], r, "multiple");
      x = x || ve(D.value), T.push(D.value), S.push(D.pfValue != null ? D.pfValue : D.value), C.push(D.units), E += (w > 0 ? " " : "") + D.strValue;
    }
    return l.validate && !l.validate(T, C) ? null : l.singleEnum && x ? T.length === 1 && ve(T[0]) ? {
      name: t,
      value: T[0],
      strValue: T[0],
      bypass: r
    } : null : {
      name: t,
      value: T,
      pfValue: S,
      strValue: E,
      bypass: r,
      units: C
    };
  }
  var L = function() {
    for (var W = 0; W < l.enums.length; W++) {
      var J = l.enums[W];
      if (J === e)
        return {
          name: t,
          value: e,
          strValue: "" + e,
          bypass: r
        };
    }
    return null;
  };
  if (l.number) {
    var A, I = "px";
    if (l.units && (A = l.units), l.implicitUnits && (I = l.implicitUnits), !l.unitless)
      if (u) {
        var O = "px|em" + (l.allowPercent ? "|\\%" : "");
        A && (O = A);
        var M = e.match("^(" + He + ")(" + O + ")?$");
        M && (e = M[1], A = M[2] || I);
      } else
        (!A || l.implicitUnits) && (A = I);
    if (e = parseFloat(e), isNaN(e) && l.enums === void 0)
      return null;
    if (isNaN(e) && l.enums !== void 0)
      return e = s, L();
    if (l.integer && !El(e) || l.min !== void 0 && (e < l.min || l.strictMin && e === l.min) || l.max !== void 0 && (e > l.max || l.strictMax && e === l.max))
      return null;
    var R = {
      name: t,
      value: e,
      strValue: "" + e + (A || ""),
      units: A,
      bypass: r
    };
    return l.unitless || A !== "px" && A !== "em" ? R.pfValue = e : R.pfValue = A === "px" || !A ? e : this.getEmSizeInPixels() * e, (A === "ms" || A === "s") && (R.pfValue = A === "ms" ? e : 1e3 * e), (A === "deg" || A === "rad") && (R.pfValue = A === "rad" ? e : th(e)), A === "%" && (R.pfValue = e / 100), R;
  } else if (l.propList) {
    var k = [], P = "" + e;
    if (P !== "none") {
      for (var B = P.split(/\s*,\s*|\s+/), V = 0; V < B.length; V++) {
        var F = B[V].trim();
        n.properties[F] ? k.push(F) : Ne("`" + F + "` is not a valid property name");
      }
      if (k.length === 0)
        return null;
    }
    return {
      name: t,
      value: k,
      strValue: k.length === 0 ? "none" : k.join(" "),
      bypass: r
    };
  } else if (l.color) {
    var G = Fl(e);
    return G ? {
      name: t,
      value: G,
      pfValue: G,
      strValue: "rgb(" + G[0] + "," + G[1] + "," + G[2] + ")",
      // n.b. no spaces b/c of multiple support
      bypass: r
    } : null;
  } else if (l.regex || l.regexes) {
    if (l.enums) {
      var Y = L();
      if (Y)
        return Y;
    }
    for (var _ = l.regexes ? l.regexes : [l.regex], q = 0; q < _.length; q++) {
      var U = new RegExp(_[q]), z = U.exec(e);
      if (z)
        return {
          name: t,
          value: l.singleRegexMatchValue ? z[1] : z,
          strValue: "" + e,
          bypass: r
        };
    }
    return null;
  } else
    return l.string ? {
      name: t,
      value: "" + e,
      strValue: "" + e,
      bypass: r
    } : l.enums ? L() : null;
};
var nt = function t(e) {
  if (!(this instanceof t))
    return new t(e);
  if (!gi(e)) {
    ze("A style must have a core reference");
    return;
  }
  this._private = {
    cy: e,
    coreStyle: {}
  }, this.length = 0, this.resetToDefault();
}, st = nt.prototype;
st.instanceString = function() {
  return "style";
};
st.clear = function() {
  for (var t = this._private, e = t.cy, r = e.elements(), a = 0; a < this.length; a++)
    this[a] = void 0;
  return this.length = 0, t.contextStyles = {}, t.propDiffs = {}, this.cleanElements(r, !0), r.forEach(function(n) {
    var i = n[0]._private;
    i.styleDirty = !0, i.appliedInitStyle = !1;
  }), this;
};
st.resetToDefault = function() {
  return this.clear(), this.addDefaultStylesheet(), this;
};
st.core = function(t) {
  return this._private.coreStyle[t] || this.getDefaultProperty(t);
};
st.selector = function(t) {
  var e = t === "core" ? null : new tr(t), r = this.length++;
  return this[r] = {
    selector: e,
    properties: [],
    mappedProperties: [],
    index: r
  }, this;
};
st.css = function() {
  var t = this, e = arguments;
  if (e.length === 1)
    for (var r = e[0], a = 0; a < t.properties.length; a++) {
      var n = t.properties[a], i = r[n.name];
      i === void 0 && (i = r[vn(n.name)]), i !== void 0 && this.cssRule(n.name, i);
    }
  else
    e.length === 2 && this.cssRule(e[0], e[1]);
  return this;
};
st.style = st.css;
st.cssRule = function(t, e) {
  var r = this.parse(t, e);
  if (r) {
    var a = this.length - 1;
    this[a].properties.push(r), this[a].properties[r.name] = r, r.name.match(/pie-(\d+)-background-size/) && r.value && (this._private.hasPie = !0), r.mapped && this[a].mappedProperties.push(r);
    var n = !this[a].selector;
    n && (this._private.coreStyle[r.name] = r);
  }
  return this;
};
st.append = function(t) {
  return lo(t) ? t.appendToStyle(this) : Re(t) ? this.appendFromJson(t) : ve(t) && this.appendFromString(t), this;
};
nt.fromJson = function(t, e) {
  var r = new nt(t);
  return r.fromJson(e), r;
};
nt.fromString = function(t, e) {
  return new nt(t).fromString(e);
};
[ot, La, Ni, Ft, Sn, Ii, Je, Ln].forEach(function(t) {
  be(st, t);
});
nt.types = st.types;
nt.properties = st.properties;
nt.propertyGroups = st.propertyGroups;
nt.propertyGroupNames = st.propertyGroupNames;
nt.propertyGroupKeys = st.propertyGroupKeys;
var wg = {
  style: function(e) {
    if (e) {
      var r = this.setStyle(e);
      r.update();
    }
    return this._private.style;
  },
  setStyle: function(e) {
    var r = this._private;
    return lo(e) ? r.style = e.generateStyle(this) : Re(e) ? r.style = nt.fromJson(this, e) : ve(e) ? r.style = nt.fromString(this, e) : r.style = nt(this), r.style;
  },
  // e.g. cy.data() changed => recalc ele mappers
  updateStyle: function() {
    this.mutableElements().updateStyle();
  }
}, xg = "single", mr = {
  autolock: function(e) {
    if (e !== void 0)
      this._private.autolock = !!e;
    else
      return this._private.autolock;
    return this;
  },
  autoungrabify: function(e) {
    if (e !== void 0)
      this._private.autoungrabify = !!e;
    else
      return this._private.autoungrabify;
    return this;
  },
  autounselectify: function(e) {
    if (e !== void 0)
      this._private.autounselectify = !!e;
    else
      return this._private.autounselectify;
    return this;
  },
  selectionType: function(e) {
    var r = this._private;
    if (r.selectionType == null && (r.selectionType = xg), e !== void 0)
      (e === "additive" || e === "single") && (r.selectionType = e);
    else
      return r.selectionType;
    return this;
  },
  panningEnabled: function(e) {
    if (e !== void 0)
      this._private.panningEnabled = !!e;
    else
      return this._private.panningEnabled;
    return this;
  },
  userPanningEnabled: function(e) {
    if (e !== void 0)
      this._private.userPanningEnabled = !!e;
    else
      return this._private.userPanningEnabled;
    return this;
  },
  zoomingEnabled: function(e) {
    if (e !== void 0)
      this._private.zoomingEnabled = !!e;
    else
      return this._private.zoomingEnabled;
    return this;
  },
  userZoomingEnabled: function(e) {
    if (e !== void 0)
      this._private.userZoomingEnabled = !!e;
    else
      return this._private.userZoomingEnabled;
    return this;
  },
  boxSelectionEnabled: function(e) {
    if (e !== void 0)
      this._private.boxSelectionEnabled = !!e;
    else
      return this._private.boxSelectionEnabled;
    return this;
  },
  pan: function() {
    var e = arguments, r = this._private.pan, a, n, i, s, o;
    switch (e.length) {
      case 0:
        return r;
      case 1:
        if (ve(e[0]))
          return a = e[0], r[a];
        if (Ce(e[0])) {
          if (!this._private.panningEnabled)
            return this;
          i = e[0], s = i.x, o = i.y, ne(s) && (r.x = s), ne(o) && (r.y = o), this.emit("pan viewport");
        }
        break;
      case 2:
        if (!this._private.panningEnabled)
          return this;
        a = e[0], n = e[1], (a === "x" || a === "y") && ne(n) && (r[a] = n), this.emit("pan viewport");
        break;
    }
    return this.notify("viewport"), this;
  },
  panBy: function(e, r) {
    var a = arguments, n = this._private.pan, i, s, o, u, l;
    if (!this._private.panningEnabled)
      return this;
    switch (a.length) {
      case 1:
        Ce(e) && (o = a[0], u = o.x, l = o.y, ne(u) && (n.x += u), ne(l) && (n.y += l), this.emit("pan viewport"));
        break;
      case 2:
        i = e, s = r, (i === "x" || i === "y") && ne(s) && (n[i] += s), this.emit("pan viewport");
        break;
    }
    return this.notify("viewport"), this;
  },
  fit: function(e, r) {
    var a = this.getFitViewport(e, r);
    if (a) {
      var n = this._private;
      n.zoom = a.zoom, n.pan = a.pan, this.emit("pan zoom viewport"), this.notify("viewport");
    }
    return this;
  },
  getFitViewport: function(e, r) {
    if (ne(e) && r === void 0 && (r = e, e = void 0), !(!this._private.panningEnabled || !this._private.zoomingEnabled)) {
      var a;
      if (ve(e)) {
        var n = e;
        e = this.$(n);
      } else if (Tl(e)) {
        var i = e;
        a = {
          x1: i.x1,
          y1: i.y1,
          x2: i.x2,
          y2: i.y2
        }, a.w = a.x2 - a.x1, a.h = a.y2 - a.y1;
      } else
        pt(e) || (e = this.mutableElements());
      if (!(pt(e) && e.empty())) {
        a = a || e.boundingBox();
        var s = this.width(), o = this.height(), u;
        if (r = ne(r) ? r : 0, !isNaN(s) && !isNaN(o) && s > 0 && o > 0 && !isNaN(a.w) && !isNaN(a.h) && a.w > 0 && a.h > 0) {
          u = Math.min((s - 2 * r) / a.w, (o - 2 * r) / a.h), u = u > this._private.maxZoom ? this._private.maxZoom : u, u = u < this._private.minZoom ? this._private.minZoom : u;
          var l = {
            // now pan to middle
            x: (s - u * (a.x1 + a.x2)) / 2,
            y: (o - u * (a.y1 + a.y2)) / 2
          };
          return {
            zoom: u,
            pan: l
          };
        }
      }
    }
  },
  zoomRange: function(e, r) {
    var a = this._private;
    if (r == null) {
      var n = e;
      e = n.min, r = n.max;
    }
    return ne(e) && ne(r) && e <= r ? (a.minZoom = e, a.maxZoom = r) : ne(e) && r === void 0 && e <= a.maxZoom ? a.minZoom = e : ne(r) && e === void 0 && r >= a.minZoom && (a.maxZoom = r), this;
  },
  minZoom: function(e) {
    return e === void 0 ? this._private.minZoom : this.zoomRange({
      min: e
    });
  },
  maxZoom: function(e) {
    return e === void 0 ? this._private.maxZoom : this.zoomRange({
      max: e
    });
  },
  getZoomedViewport: function(e) {
    var r = this._private, a = r.pan, n = r.zoom, i, s, o = !1;
    if (r.zoomingEnabled || (o = !0), ne(e) ? s = e : Ce(e) && (s = e.level, e.position != null ? i = yn(e.position, n, a) : e.renderedPosition != null && (i = e.renderedPosition), i != null && !r.panningEnabled && (o = !0)), s = s > r.maxZoom ? r.maxZoom : s, s = s < r.minZoom ? r.minZoom : s, o || !ne(s) || s === n || i != null && (!ne(i.x) || !ne(i.y)))
      return null;
    if (i != null) {
      var u = a, l = n, f = s, h = {
        x: -f / l * (i.x - u.x) + i.x,
        y: -f / l * (i.y - u.y) + i.y
      };
      return {
        zoomed: !0,
        panned: !0,
        zoom: f,
        pan: h
      };
    } else
      return {
        zoomed: !0,
        panned: !1,
        zoom: s,
        pan: a
      };
  },
  zoom: function(e) {
    if (e === void 0)
      return this._private.zoom;
    var r = this.getZoomedViewport(e), a = this._private;
    return r == null || !r.zoomed ? this : (a.zoom = r.zoom, r.panned && (a.pan.x = r.pan.x, a.pan.y = r.pan.y), this.emit("zoom" + (r.panned ? " pan" : "") + " viewport"), this.notify("viewport"), this);
  },
  viewport: function(e) {
    var r = this._private, a = !0, n = !0, i = [], s = !1, o = !1;
    if (!e)
      return this;
    if (ne(e.zoom) || (a = !1), Ce(e.pan) || (n = !1), !a && !n)
      return this;
    if (a) {
      var u = e.zoom;
      u < r.minZoom || u > r.maxZoom || !r.zoomingEnabled ? s = !0 : (r.zoom = u, i.push("zoom"));
    }
    if (n && (!s || !e.cancelOnFailedZoom) && r.panningEnabled) {
      var l = e.pan;
      ne(l.x) && (r.pan.x = l.x, o = !1), ne(l.y) && (r.pan.y = l.y, o = !1), o || i.push("pan");
    }
    return i.length > 0 && (i.push("viewport"), this.emit(i.join(" ")), this.notify("viewport")), this;
  },
  center: function(e) {
    var r = this.getCenterPan(e);
    return r && (this._private.pan = r, this.emit("pan viewport"), this.notify("viewport")), this;
  },
  getCenterPan: function(e, r) {
    if (this._private.panningEnabled) {
      if (ve(e)) {
        var a = e;
        e = this.mutableElements().filter(a);
      } else
        pt(e) || (e = this.mutableElements());
      if (e.length !== 0) {
        var n = e.boundingBox(), i = this.width(), s = this.height();
        r = r === void 0 ? this._private.zoom : r;
        var o = {
          // middle
          x: (i - r * (n.x1 + n.x2)) / 2,
          y: (s - r * (n.y1 + n.y2)) / 2
        };
        return o;
      }
    }
  },
  reset: function() {
    return !this._private.panningEnabled || !this._private.zoomingEnabled ? this : (this.viewport({
      pan: {
        x: 0,
        y: 0
      },
      zoom: 1
    }), this);
  },
  invalidateSize: function() {
    this._private.sizeCache = null;
  },
  size: function() {
    var e = this._private, r = e.container, a = this;
    return e.sizeCache = e.sizeCache || (r ? function() {
      var n = a.window().getComputedStyle(r), i = function(o) {
        return parseFloat(n.getPropertyValue(o));
      };
      return {
        width: r.clientWidth - i("padding-left") - i("padding-right"),
        height: r.clientHeight - i("padding-top") - i("padding-bottom")
      };
    }() : {
      // fallback if no container (not 0 b/c can be used for dividing etc)
      width: 1,
      height: 1
    });
  },
  width: function() {
    return this.size().width;
  },
  height: function() {
    return this.size().height;
  },
  extent: function() {
    var e = this._private.pan, r = this._private.zoom, a = this.renderedExtent(), n = {
      x1: (a.x1 - e.x) / r,
      x2: (a.x2 - e.x) / r,
      y1: (a.y1 - e.y) / r,
      y2: (a.y2 - e.y) / r
    };
    return n.w = n.x2 - n.x1, n.h = n.y2 - n.y1, n;
  },
  renderedExtent: function() {
    var e = this.width(), r = this.height();
    return {
      x1: 0,
      y1: 0,
      x2: e,
      y2: r,
      w: e,
      h: r
    };
  },
  multiClickDebounceTime: function(e) {
    if (e)
      this._private.multiClickDebounceTime = e;
    else
      return this._private.multiClickDebounceTime;
    return this;
  }
};
mr.centre = mr.center;
mr.autolockNodes = mr.autolock;
mr.autoungrabifyNodes = mr.autoungrabify;
var Ea = {
  data: Oe.data({
    field: "data",
    bindingEvent: "data",
    allowBinding: !0,
    allowSetting: !0,
    settingEvent: "data",
    settingTriggersEvent: !0,
    triggerFnName: "trigger",
    allowGetting: !0,
    updateStyle: !0
  }),
  removeData: Oe.removeData({
    field: "data",
    event: "data",
    triggerFnName: "trigger",
    triggerEvent: !0,
    updateStyle: !0
  }),
  scratch: Oe.data({
    field: "scratch",
    bindingEvent: "scratch",
    allowBinding: !0,
    allowSetting: !0,
    settingEvent: "scratch",
    settingTriggersEvent: !0,
    triggerFnName: "trigger",
    allowGetting: !0,
    updateStyle: !0
  }),
  removeScratch: Oe.removeData({
    field: "scratch",
    event: "scratch",
    triggerFnName: "trigger",
    triggerEvent: !0,
    updateStyle: !0
  })
};
Ea.attr = Ea.data;
Ea.removeAttr = Ea.removeData;
var wa = function(e) {
  var r = this;
  e = be({}, e);
  var a = e.container;
  a && !tn(a) && tn(a[0]) && (a = a[0]);
  var n = a ? a._cyreg : null;
  n = n || {}, n && n.cy && (n.cy.destroy(), n = {});
  var i = n.readies = n.readies || [];
  a && (a._cyreg = n), n.cy = r;
  var s = Ye !== void 0 && a !== void 0 && !e.headless, o = e;
  o.layout = be({
    name: s ? "grid" : "null"
  }, o.layout), o.renderer = be({
    name: s ? "canvas" : "null"
  }, o.renderer);
  var u = function(v, p, g) {
    return p !== void 0 ? p : g !== void 0 ? g : v;
  }, l = this._private = {
    container: a,
    // html dom ele container
    ready: !1,
    // whether ready has been triggered
    options: o,
    // cached options
    elements: new et(this),
    // elements in the graph
    listeners: [],
    // list of listeners
    aniEles: new et(this),
    // elements being animated
    data: o.data || {},
    // data for the core
    scratch: {},
    // scratch object for core
    layout: null,
    renderer: null,
    destroyed: !1,
    // whether destroy was called
    notificationsEnabled: !0,
    // whether notifications are sent to the renderer
    minZoom: 1e-50,
    maxZoom: 1e50,
    zoomingEnabled: u(!0, o.zoomingEnabled),
    userZoomingEnabled: u(!0, o.userZoomingEnabled),
    panningEnabled: u(!0, o.panningEnabled),
    userPanningEnabled: u(!0, o.userPanningEnabled),
    boxSelectionEnabled: u(!0, o.boxSelectionEnabled),
    autolock: u(!1, o.autolock, o.autolockNodes),
    autoungrabify: u(!1, o.autoungrabify, o.autoungrabifyNodes),
    autounselectify: u(!1, o.autounselectify),
    styleEnabled: o.styleEnabled === void 0 ? s : o.styleEnabled,
    zoom: ne(o.zoom) ? o.zoom : 1,
    pan: {
      x: Ce(o.pan) && ne(o.pan.x) ? o.pan.x : 0,
      y: Ce(o.pan) && ne(o.pan.y) ? o.pan.y : 0
    },
    animation: {
      // object for currently-running animations
      current: [],
      queue: []
    },
    hasCompoundNodes: !1,
    multiClickDebounceTime: u(250, o.multiClickDebounceTime)
  };
  this.createEmitter(), this.selectionType(o.selectionType), this.zoomRange({
    min: o.minZoom,
    max: o.maxZoom
  });
  var f = function(v, p) {
    var g = v.some(Cl);
    if (g)
      return $r.all(v).then(p);
    p(v);
  };
  l.styleEnabled && r.setStyle([]);
  var h = be({}, o, o.renderer);
  r.initRenderer(h);
  var d = function(v, p, g) {
    r.notifications(!1);
    var y = r.mutableElements();
    y.length > 0 && y.remove(), v != null && (Ce(v) || Re(v)) && r.add(v), r.one("layoutready", function(m) {
      r.notifications(!0), r.emit(m), r.one("load", p), r.emitAndNotify("load");
    }).one("layoutstop", function() {
      r.one("done", g), r.emit("done");
    });
    var b = be({}, r._private.options.layout);
    b.eles = r.elements(), r.layout(b).run();
  };
  f([o.style, o.elements], function(c) {
    var v = c[0], p = c[1];
    l.styleEnabled && r.style().append(v), d(p, function() {
      r.startAnimationLoop(), l.ready = !0, Ge(o.ready) && r.on("ready", o.ready);
      for (var g = 0; g < i.length; g++) {
        var y = i[g];
        r.on("ready", y);
      }
      n && (n.readies = []), r.emit("ready");
    }, o.done);
  });
}, ln = wa.prototype;
be(ln, {
  instanceString: function() {
    return "core";
  },
  isReady: function() {
    return this._private.ready;
  },
  destroyed: function() {
    return this._private.destroyed;
  },
  ready: function(e) {
    return this.isReady() ? this.emitter().emit("ready", [], e) : this.on("ready", e), this;
  },
  destroy: function() {
    var e = this;
    if (!e.destroyed())
      return e.stopAnimationLoop(), e.destroyRenderer(), this.emit("destroy"), e._private.destroyed = !0, e;
  },
  hasElementWithId: function(e) {
    return this._private.elements.hasElementWithId(e);
  },
  getElementById: function(e) {
    return this._private.elements.getElementById(e);
  },
  hasCompoundNodes: function() {
    return this._private.hasCompoundNodes;
  },
  headless: function() {
    return this._private.renderer.isHeadless();
  },
  styleEnabled: function() {
    return this._private.styleEnabled;
  },
  addToPool: function(e) {
    return this._private.elements.merge(e), this;
  },
  removeFromPool: function(e) {
    return this._private.elements.unmerge(e), this;
  },
  container: function() {
    return this._private.container || null;
  },
  window: function() {
    var e = this._private.container;
    if (e == null)
      return Ye;
    var r = this._private.container.ownerDocument;
    return r === void 0 || r == null ? Ye : r.defaultView || Ye;
  },
  mount: function(e) {
    if (e != null) {
      var r = this, a = r._private, n = a.options;
      return !tn(e) && tn(e[0]) && (e = e[0]), r.stopAnimationLoop(), r.destroyRenderer(), a.container = e, a.styleEnabled = !0, r.invalidateSize(), r.initRenderer(be({}, n, n.renderer, {
        // allow custom renderer name to be re-used, otherwise use canvas
        name: n.renderer.name === "null" ? "canvas" : n.renderer.name
      })), r.startAnimationLoop(), r.style(n.style), r.emit("mount"), r;
    }
  },
  unmount: function() {
    var e = this;
    return e.stopAnimationLoop(), e.destroyRenderer(), e.initRenderer({
      name: "null"
    }), e.emit("unmount"), e;
  },
  options: function() {
    return Pt(this._private.options);
  },
  json: function(e) {
    var r = this, a = r._private, n = r.mutableElements(), i = function(T) {
      return r.getElementById(T.id());
    };
    if (Ce(e)) {
      if (r.startBatch(), e.elements) {
        var s = {}, o = function(T, C) {
          for (var S = [], E = [], x = 0; x < T.length; x++) {
            var w = T[x];
            if (!w.data.id) {
              Ne("cy.json() cannot handle elements without an ID attribute");
              continue;
            }
            var D = "" + w.data.id, L = r.getElementById(D);
            s[D] = !0, L.length !== 0 ? E.push({
              ele: L,
              json: w
            }) : (C && (w.group = C), S.push(w));
          }
          r.add(S);
          for (var A = 0; A < E.length; A++) {
            var I = E[A], O = I.ele, M = I.json;
            O.json(M);
          }
        };
        if (Re(e.elements))
          o(e.elements);
        else
          for (var u = ["nodes", "edges"], l = 0; l < u.length; l++) {
            var f = u[l], h = e.elements[f];
            Re(h) && o(h, f);
          }
        var d = r.collection();
        n.filter(function(m) {
          return !s[m.id()];
        }).forEach(function(m) {
          m.isParent() ? d.merge(m) : m.remove();
        }), d.forEach(function(m) {
          return m.children().move({
            parent: null
          });
        }), d.forEach(function(m) {
          return i(m).remove();
        });
      }
      e.style && r.style(e.style), e.zoom != null && e.zoom !== a.zoom && r.zoom(e.zoom), e.pan && (e.pan.x !== a.pan.x || e.pan.y !== a.pan.y) && r.pan(e.pan), e.data && r.data(e.data);
      for (var c = ["minZoom", "maxZoom", "zoomingEnabled", "userZoomingEnabled", "panningEnabled", "userPanningEnabled", "boxSelectionEnabled", "autolock", "autoungrabify", "autounselectify", "multiClickDebounceTime"], v = 0; v < c.length; v++) {
        var p = c[v];
        e[p] != null && r[p](e[p]);
      }
      return r.endBatch(), this;
    } else {
      var g = !!e, y = {};
      g ? y.elements = this.elements().map(function(m) {
        return m.json();
      }) : (y.elements = {}, n.forEach(function(m) {
        var T = m.group();
        y.elements[T] || (y.elements[T] = []), y.elements[T].push(m.json());
      })), this._private.styleEnabled && (y.style = r.style().json()), y.data = Pt(r.data());
      var b = a.options;
      return y.zoomingEnabled = a.zoomingEnabled, y.userZoomingEnabled = a.userZoomingEnabled, y.zoom = a.zoom, y.minZoom = a.minZoom, y.maxZoom = a.maxZoom, y.panningEnabled = a.panningEnabled, y.userPanningEnabled = a.userPanningEnabled, y.pan = Pt(a.pan), y.boxSelectionEnabled = a.boxSelectionEnabled, y.renderer = Pt(b.renderer), y.hideEdgesOnViewport = b.hideEdgesOnViewport, y.textureOnViewport = b.textureOnViewport, y.wheelSensitivity = b.wheelSensitivity, y.motionBlur = b.motionBlur, y.multiClickDebounceTime = b.multiClickDebounceTime, y;
    }
  }
});
ln.$id = ln.getElementById;
[hg, pg, hu, ei, Ka, mg, ti, Za, wg, mr, Ea].forEach(function(t) {
  be(ln, t);
});
var Tg = {
  fit: !0,
  // whether to fit the viewport to the graph
  directed: !1,
  // whether the tree is directed downwards (or edges can point in any direction if false)
  padding: 30,
  // padding on fit
  circle: !1,
  // put depths in concentric circles if true, put depths top down if false
  grid: !1,
  // whether to create an even grid into which the DAG is placed (circle:false only)
  spacingFactor: 1.75,
  // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: !0,
  // prevents node overlap, may overflow boundingBox if not enough space
  nodeDimensionsIncludeLabels: !1,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  roots: void 0,
  // the roots of the trees
  depthSort: void 0,
  // a sorting function to order nodes at equal depth. e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled,
  animateFilter: function(e, r) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, r) {
    return r;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts
}, Cg = {
  maximal: !1,
  // whether to shift nodes down their natural BFS depths in order to avoid upwards edges (DAGS only); setting acyclic to true sets maximal to true also
  acyclic: !1
  // whether the tree is acyclic and thus a node could be shifted (due to the maximal option) multiple times without causing an infinite loop; setting to true sets maximal to true also; if you are uncertain whether a tree is acyclic, set to false to avoid potential infinite loops
}, Lr = function(e) {
  return e.scratch("breadthfirst");
}, Fs = function(e, r) {
  return e.scratch("breadthfirst", r);
};
function cu(t) {
  this.options = be({}, Tg, Cg, t);
}
cu.prototype.run = function() {
  var t = this.options, e = t, r = t.cy, a = e.eles, n = a.nodes().filter(function(te) {
    return !te.isParent();
  }), i = a, s = e.directed, o = e.acyclic || e.maximal || e.maximalAdjustments > 0, u = gt(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: r.width(),
    h: r.height()
  }), l;
  if (pt(e.roots))
    l = e.roots;
  else if (Re(e.roots)) {
    for (var f = [], h = 0; h < e.roots.length; h++) {
      var d = e.roots[h], c = r.getElementById(d);
      f.push(c);
    }
    l = r.collection(f);
  } else if (ve(e.roots))
    l = r.$(e.roots);
  else if (s)
    l = n.roots();
  else {
    var v = a.components();
    l = r.collection();
    for (var p = function(ie) {
      var ue = v[ie], ce = ue.maxDegree(!1), fe = ue.filter(function(ge) {
        return ge.degree(!1) === ce;
      });
      l = l.add(fe);
    }, g = 0; g < v.length; g++)
      p(g);
  }
  var y = [], b = {}, m = function(ie, ue) {
    y[ue] == null && (y[ue] = []);
    var ce = y[ue].length;
    y[ue].push(ie), Fs(ie, {
      index: ce,
      depth: ue
    });
  }, T = function(ie, ue) {
    var ce = Lr(ie), fe = ce.depth, ge = ce.index;
    y[fe][ge] = null, m(ie, ue);
  };
  i.bfs({
    roots: l,
    directed: e.directed,
    visit: function(ie, ue, ce, fe, ge) {
      var Ae = ie[0], xe = Ae.id();
      m(Ae, ge), b[xe] = !0;
    }
  });
  for (var C = [], S = 0; S < n.length; S++) {
    var E = n[S];
    b[E.id()] || C.push(E);
  }
  var x = function(ie) {
    for (var ue = y[ie], ce = 0; ce < ue.length; ce++) {
      var fe = ue[ce];
      if (fe == null) {
        ue.splice(ce, 1), ce--;
        continue;
      }
      Fs(fe, {
        depth: ie,
        index: ce
      });
    }
  }, w = function() {
    for (var ie = 0; ie < y.length; ie++)
      x(ie);
  }, D = function(ie, ue) {
    for (var ce = Lr(ie), fe = ie.incomers().filter(function(N) {
      return N.isNode() && a.has(N);
    }), ge = -1, Ae = ie.id(), xe = 0; xe < fe.length; xe++) {
      var we = fe[xe], De = Lr(we);
      ge = Math.max(ge, De.depth);
    }
    if (ce.depth <= ge) {
      if (!e.acyclic && ue[Ae])
        return null;
      var j = ge + 1;
      return T(ie, j), ue[Ae] = j, !0;
    }
    return !1;
  };
  if (s && o) {
    var L = [], A = {}, I = function(ie) {
      return L.push(ie);
    }, O = function() {
      return L.shift();
    };
    for (n.forEach(function(te) {
      return L.push(te);
    }); L.length > 0; ) {
      var M = O(), R = D(M, A);
      if (R)
        M.outgoers().filter(function(te) {
          return te.isNode() && a.has(te);
        }).forEach(I);
      else if (R === null) {
        Ne("Detected double maximal shift for node `" + M.id() + "`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs.");
        break;
      }
    }
  }
  w();
  var k = 0;
  if (e.avoidOverlap)
    for (var P = 0; P < n.length; P++) {
      var B = n[P], V = B.layoutDimensions(e), F = V.w, G = V.h;
      k = Math.max(k, F, G);
    }
  var Y = {}, _ = function(ie) {
    if (Y[ie.id()])
      return Y[ie.id()];
    for (var ue = Lr(ie).depth, ce = ie.neighborhood(), fe = 0, ge = 0, Ae = 0; Ae < ce.length; Ae++) {
      var xe = ce[Ae];
      if (!(xe.isEdge() || xe.isParent() || !n.has(xe))) {
        var we = Lr(xe);
        if (we != null) {
          var De = we.index, j = we.depth;
          if (!(De == null || j == null)) {
            var N = y[j].length;
            j < ue && (fe += De / N, ge++);
          }
        }
      }
    }
    return ge = Math.max(1, ge), fe = fe / ge, ge === 0 && (fe = 0), Y[ie.id()] = fe, fe;
  }, q = function(ie, ue) {
    var ce = _(ie), fe = _(ue), ge = ce - fe;
    return ge === 0 ? ho(ie.id(), ue.id()) : ge;
  };
  e.depthSort !== void 0 && (q = e.depthSort);
  for (var U = 0; U < y.length; U++)
    y[U].sort(q), x(U);
  for (var z = [], H = 0; H < C.length; H++)
    z.push(C[H]);
  y.unshift(z), w();
  for (var W = 0, J = 0; J < y.length; J++)
    W = Math.max(y[J].length, W);
  var ee = {
    x: u.x1 + u.w / 2,
    y: u.x1 + u.h / 2
  }, oe = y.reduce(function(te, ie) {
    return Math.max(te, ie.length);
  }, 0), me = function(ie) {
    var ue = Lr(ie), ce = ue.depth, fe = ue.index, ge = y[ce].length, Ae = Math.max(u.w / ((e.grid ? oe : ge) + 1), k), xe = Math.max(u.h / (y.length + 1), k), we = Math.min(u.w / 2 / y.length, u.h / 2 / y.length);
    if (we = Math.max(we, k), e.circle) {
      var j = we * ce + we - (y.length > 0 && y[0].length <= 3 ? we / 2 : 0), N = 2 * Math.PI / y[ce].length * fe;
      return ce === 0 && y[0].length === 1 && (j = 1), {
        x: ee.x + j * Math.cos(N),
        y: ee.y + j * Math.sin(N)
      };
    } else {
      var De = {
        x: ee.x + (fe + 1 - (ge + 1) / 2) * Ae,
        y: (ce + 1) * xe
      };
      return De;
    }
  };
  return a.nodes().layoutPositions(this, e, me), this;
};
var Dg = {
  fit: !0,
  // whether to fit the viewport to the graph
  padding: 30,
  // the padding on fit
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: !0,
  // prevents node overlap, may overflow boundingBox and radius if not enough space
  nodeDimensionsIncludeLabels: !1,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  radius: void 0,
  // the radius of the circle
  startAngle: 3 / 2 * Math.PI,
  // where nodes start in radians
  sweep: void 0,
  // how many radians should be between the first and last node (defaults to full circle)
  clockwise: !0,
  // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
  sort: void 0,
  // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, r) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, r) {
    return r;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts 
};
function vu(t) {
  this.options = be({}, Dg, t);
}
vu.prototype.run = function() {
  var t = this.options, e = t, r = t.cy, a = e.eles, n = e.counterclockwise !== void 0 ? !e.counterclockwise : e.clockwise, i = a.nodes().not(":parent");
  e.sort && (i = i.sort(e.sort));
  for (var s = gt(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: r.width(),
    h: r.height()
  }), o = {
    x: s.x1 + s.w / 2,
    y: s.y1 + s.h / 2
  }, u = e.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / i.length : e.sweep, l = u / Math.max(1, i.length - 1), f, h = 0, d = 0; d < i.length; d++) {
    var c = i[d], v = c.layoutDimensions(e), p = v.w, g = v.h;
    h = Math.max(h, p, g);
  }
  if (ne(e.radius) ? f = e.radius : i.length <= 1 ? f = 0 : f = Math.min(s.h, s.w) / 2 - h, i.length > 1 && e.avoidOverlap) {
    h *= 1.75;
    var y = Math.cos(l) - Math.cos(0), b = Math.sin(l) - Math.sin(0), m = Math.sqrt(h * h / (y * y + b * b));
    f = Math.max(m, f);
  }
  var T = function(S, E) {
    var x = e.startAngle + E * l * (n ? 1 : -1), w = f * Math.cos(x), D = f * Math.sin(x), L = {
      x: o.x + w,
      y: o.y + D
    };
    return L;
  };
  return a.nodes().layoutPositions(this, e, T), this;
};
var Sg = {
  fit: !0,
  // whether to fit the viewport to the graph
  padding: 30,
  // the padding on fit
  startAngle: 3 / 2 * Math.PI,
  // where nodes start in radians
  sweep: void 0,
  // how many radians should be between the first and last node (defaults to full circle)
  clockwise: !0,
  // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
  equidistant: !1,
  // whether levels have an equal radial distance betwen them, may cause bounding box overflow
  minNodeSpacing: 10,
  // min spacing between outside of nodes (used for radius adjustment)
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: !0,
  // prevents node overlap, may overflow boundingBox if not enough space
  nodeDimensionsIncludeLabels: !1,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  height: void 0,
  // height of layout area (overrides container height)
  width: void 0,
  // width of layout area (overrides container width)
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  concentric: function(e) {
    return e.degree();
  },
  levelWidth: function(e) {
    return e.maxDegree() / 4;
  },
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, r) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, r) {
    return r;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts
};
function du(t) {
  this.options = be({}, Sg, t);
}
du.prototype.run = function() {
  for (var t = this.options, e = t, r = e.counterclockwise !== void 0 ? !e.counterclockwise : e.clockwise, a = t.cy, n = e.eles, i = n.nodes().not(":parent"), s = gt(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: a.width(),
    h: a.height()
  }), o = {
    x: s.x1 + s.w / 2,
    y: s.y1 + s.h / 2
  }, u = [], l = 0, f = 0; f < i.length; f++) {
    var h = i[f], d = void 0;
    d = e.concentric(h), u.push({
      value: d,
      node: h
    }), h._private.scratch.concentric = d;
  }
  i.updateStyle();
  for (var c = 0; c < i.length; c++) {
    var v = i[c], p = v.layoutDimensions(e);
    l = Math.max(l, p.w, p.h);
  }
  u.sort(function(te, ie) {
    return ie.value - te.value;
  });
  for (var g = e.levelWidth(i), y = [[]], b = y[0], m = 0; m < u.length; m++) {
    var T = u[m];
    if (b.length > 0) {
      var C = Math.abs(b[0].value - T.value);
      C >= g && (b = [], y.push(b));
    }
    b.push(T);
  }
  var S = l + e.minNodeSpacing;
  if (!e.avoidOverlap) {
    var E = y.length > 0 && y[0].length > 1, x = Math.min(s.w, s.h) / 2 - S, w = x / (y.length + E ? 1 : 0);
    S = Math.min(S, w);
  }
  for (var D = 0, L = 0; L < y.length; L++) {
    var A = y[L], I = e.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / A.length : e.sweep, O = A.dTheta = I / Math.max(1, A.length - 1);
    if (A.length > 1 && e.avoidOverlap) {
      var M = Math.cos(O) - Math.cos(0), R = Math.sin(O) - Math.sin(0), k = Math.sqrt(S * S / (M * M + R * R));
      D = Math.max(k, D);
    }
    A.r = D, D += S;
  }
  if (e.equidistant) {
    for (var P = 0, B = 0, V = 0; V < y.length; V++) {
      var F = y[V], G = F.r - B;
      P = Math.max(P, G);
    }
    B = 0;
    for (var Y = 0; Y < y.length; Y++) {
      var _ = y[Y];
      Y === 0 && (B = _.r), _.r = B, B += P;
    }
  }
  for (var q = {}, U = 0; U < y.length; U++)
    for (var z = y[U], H = z.dTheta, W = z.r, J = 0; J < z.length; J++) {
      var ee = z[J], oe = e.startAngle + (r ? 1 : -1) * H * J, me = {
        x: o.x + W * Math.cos(oe),
        y: o.y + W * Math.sin(oe)
      };
      q[ee.node.id()] = me;
    }
  return n.nodes().layoutPositions(this, e, function(te) {
    var ie = te.id();
    return q[ie];
  }), this;
};
var $n, Lg = {
  // Called on `layoutready`
  ready: function() {
  },
  // Called on `layoutstop`
  stop: function() {
  },
  // Whether to animate while running the layout
  // true : Animate continuously as the layout is running
  // false : Just show the end result
  // 'end' : Animate with the end result, from the initial positions to the end positions
  animate: !0,
  // Easing of the animation for animate:'end'
  animationEasing: void 0,
  // The duration of the animation for animate:'end'
  animationDuration: void 0,
  // A function that determines whether the node should be animated
  // All nodes animated by default on animate enabled
  // Non-animated nodes are positioned immediately when the layout starts
  animateFilter: function(e, r) {
    return !0;
  },
  // The layout animates only after this many milliseconds for animate:true
  // (prevents flashing on fast runs)
  animationThreshold: 250,
  // Number of iterations between consecutive screen positions update
  refresh: 20,
  // Whether to fit the network view after when done
  fit: !0,
  // Padding on fit
  padding: 30,
  // Constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  boundingBox: void 0,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  nodeDimensionsIncludeLabels: !1,
  // Randomize the initial positions of the nodes (true) or use existing positions (false)
  randomize: !1,
  // Extra spacing between components in non-compound graphs
  componentSpacing: 40,
  // Node repulsion (non overlapping) multiplier
  nodeRepulsion: function(e) {
    return 2048;
  },
  // Node repulsion (overlapping) multiplier
  nodeOverlap: 4,
  // Ideal edge (non nested) length
  idealEdgeLength: function(e) {
    return 32;
  },
  // Divisor to compute edge forces
  edgeElasticity: function(e) {
    return 32;
  },
  // Nesting factor (multiplier) to compute ideal edge length for nested edges
  nestingFactor: 1.2,
  // Gravity force (constant)
  gravity: 1,
  // Maximum number of iterations to perform
  numIter: 1e3,
  // Initial temperature (maximum node displacement)
  initialTemp: 1e3,
  // Cooling factor (how the temperature is reduced between consecutive iterations
  coolingFactor: 0.99,
  // Lower temperature threshold (below this point the layout will end)
  minTemp: 1
};
function An(t) {
  this.options = be({}, Lg, t), this.options.layout = this;
  var e = this.options.eles.nodes(), r = this.options.eles.edges(), a = r.filter(function(n) {
    var i = n.source().data("id"), s = n.target().data("id"), o = e.some(function(l) {
      return l.data("id") === i;
    }), u = e.some(function(l) {
      return l.data("id") === s;
    });
    return !o || !u;
  });
  this.options.eles = this.options.eles.not(a);
}
An.prototype.run = function() {
  var t = this.options, e = t.cy, r = this;
  r.stopped = !1, (t.animate === !0 || t.animate === !1) && r.emit({
    type: "layoutstart",
    layout: r
  }), t.debug === !0 ? $n = !0 : $n = !1;
  var a = Ag(e, r, t);
  $n && Ig(a), t.randomize && Mg(a);
  var n = $t(), i = function() {
    Rg(a, e, t), t.fit === !0 && e.fit(t.padding);
  }, s = function(d) {
    return !(r.stopped || d >= t.numIter || (kg(a, t), a.temperature = a.temperature * t.coolingFactor, a.temperature < t.minTemp));
  }, o = function() {
    if (t.animate === !0 || t.animate === !1)
      i(), r.one("layoutstop", t.stop), r.emit({
        type: "layoutstop",
        layout: r
      });
    else {
      var d = t.eles.nodes(), c = gu(a, t, d);
      d.layoutPositions(r, t, c);
    }
  }, u = 0, l = !0;
  if (t.animate === !0) {
    var f = function h() {
      for (var d = 0; l && d < t.refresh; )
        l = s(u), u++, d++;
      if (!l)
        zs(a, t), o();
      else {
        var c = $t();
        c - n >= t.animationThreshold && i(), rn(h);
      }
    };
    f();
  } else {
    for (; l; )
      l = s(u), u++;
    zs(a, t), o();
  }
  return this;
};
An.prototype.stop = function() {
  return this.stopped = !0, this.thread && this.thread.stop(), this.emit("layoutstop"), this;
};
An.prototype.destroy = function() {
  return this.thread && this.thread.stop(), this;
};
var Ag = function(e, r, a) {
  for (var n = a.eles.edges(), i = a.eles.nodes(), s = gt(a.boundingBox ? a.boundingBox : {
    x1: 0,
    y1: 0,
    w: e.width(),
    h: e.height()
  }), o = {
    isCompound: e.hasCompoundNodes(),
    layoutNodes: [],
    idToIndex: {},
    nodeSize: i.size(),
    graphSet: [],
    indexToGraph: [],
    layoutEdges: [],
    edgeSize: n.size(),
    temperature: a.initialTemp,
    clientWidth: s.w,
    clientHeight: s.h,
    boundingBox: s
  }, u = a.eles.components(), l = {}, f = 0; f < u.length; f++)
    for (var h = u[f], d = 0; d < h.length; d++) {
      var c = h[d];
      l[c.id()] = f;
    }
  for (var f = 0; f < o.nodeSize; f++) {
    var v = i[f], p = v.layoutDimensions(a), g = {};
    g.isLocked = v.locked(), g.id = v.data("id"), g.parentId = v.data("parent"), g.cmptId = l[v.id()], g.children = [], g.positionX = v.position("x"), g.positionY = v.position("y"), g.offsetX = 0, g.offsetY = 0, g.height = p.w, g.width = p.h, g.maxX = g.positionX + g.width / 2, g.minX = g.positionX - g.width / 2, g.maxY = g.positionY + g.height / 2, g.minY = g.positionY - g.height / 2, g.padLeft = parseFloat(v.style("padding")), g.padRight = parseFloat(v.style("padding")), g.padTop = parseFloat(v.style("padding")), g.padBottom = parseFloat(v.style("padding")), g.nodeRepulsion = Ge(a.nodeRepulsion) ? a.nodeRepulsion(v) : a.nodeRepulsion, o.layoutNodes.push(g), o.idToIndex[g.id] = f;
  }
  for (var y = [], b = 0, m = -1, T = [], f = 0; f < o.nodeSize; f++) {
    var v = o.layoutNodes[f], C = v.parentId;
    C != null ? o.layoutNodes[o.idToIndex[C]].children.push(v.id) : (y[++m] = v.id, T.push(v.id));
  }
  for (o.graphSet.push(T); b <= m; ) {
    var S = y[b++], E = o.idToIndex[S], c = o.layoutNodes[E], x = c.children;
    if (x.length > 0) {
      o.graphSet.push(x);
      for (var f = 0; f < x.length; f++)
        y[++m] = x[f];
    }
  }
  for (var f = 0; f < o.graphSet.length; f++)
    for (var w = o.graphSet[f], d = 0; d < w.length; d++) {
      var D = o.idToIndex[w[d]];
      o.indexToGraph[D] = f;
    }
  for (var f = 0; f < o.edgeSize; f++) {
    var L = n[f], A = {};
    A.id = L.data("id"), A.sourceId = L.data("source"), A.targetId = L.data("target");
    var I = Ge(a.idealEdgeLength) ? a.idealEdgeLength(L) : a.idealEdgeLength, O = Ge(a.edgeElasticity) ? a.edgeElasticity(L) : a.edgeElasticity, M = o.idToIndex[A.sourceId], R = o.idToIndex[A.targetId], k = o.indexToGraph[M], P = o.indexToGraph[R];
    if (k != P) {
      for (var B = Og(A.sourceId, A.targetId, o), V = o.graphSet[B], F = 0, g = o.layoutNodes[M]; V.indexOf(g.id) === -1; )
        g = o.layoutNodes[o.idToIndex[g.parentId]], F++;
      for (g = o.layoutNodes[R]; V.indexOf(g.id) === -1; )
        g = o.layoutNodes[o.idToIndex[g.parentId]], F++;
      I *= F * a.nestingFactor;
    }
    A.idealLength = I, A.elasticity = O, o.layoutEdges.push(A);
  }
  return o;
}, Og = function(e, r, a) {
  var n = Ng(e, r, 0, a);
  return 2 > n.count ? 0 : n.graph;
}, Ng = function t(e, r, a, n) {
  var i = n.graphSet[a];
  if (-1 < i.indexOf(e) && -1 < i.indexOf(r))
    return {
      count: 2,
      graph: a
    };
  for (var s = 0, o = 0; o < i.length; o++) {
    var u = i[o], l = n.idToIndex[u], f = n.layoutNodes[l].children;
    if (f.length !== 0) {
      var h = n.indexToGraph[n.idToIndex[f[0]]], d = t(e, r, h, n);
      if (d.count !== 0)
        if (d.count === 1) {
          if (s++, s === 2)
            break;
        } else
          return d;
    }
  }
  return {
    count: s,
    graph: a
  };
}, Ig, Mg = function(e, r) {
  for (var a = e.clientWidth, n = e.clientHeight, i = 0; i < e.nodeSize; i++) {
    var s = e.layoutNodes[i];
    s.children.length === 0 && !s.isLocked && (s.positionX = Math.random() * a, s.positionY = Math.random() * n);
  }
}, gu = function(e, r, a) {
  var n = e.boundingBox, i = {
    x1: 1 / 0,
    x2: -1 / 0,
    y1: 1 / 0,
    y2: -1 / 0
  };
  return r.boundingBox && (a.forEach(function(s) {
    var o = e.layoutNodes[e.idToIndex[s.data("id")]];
    i.x1 = Math.min(i.x1, o.positionX), i.x2 = Math.max(i.x2, o.positionX), i.y1 = Math.min(i.y1, o.positionY), i.y2 = Math.max(i.y2, o.positionY);
  }), i.w = i.x2 - i.x1, i.h = i.y2 - i.y1), function(s, o) {
    var u = e.layoutNodes[e.idToIndex[s.data("id")]];
    if (r.boundingBox) {
      var l = (u.positionX - i.x1) / i.w, f = (u.positionY - i.y1) / i.h;
      return {
        x: n.x1 + l * n.w,
        y: n.y1 + f * n.h
      };
    } else
      return {
        x: u.positionX,
        y: u.positionY
      };
  };
}, Rg = function(e, r, a) {
  var n = a.layout, i = a.eles.nodes(), s = gu(e, a, i);
  i.positions(s), e.ready !== !0 && (e.ready = !0, n.one("layoutready", a.ready), n.emit({
    type: "layoutready",
    layout: this
  }));
}, kg = function(e, r, a) {
  Pg(e, r), Gg(e), zg(e, r), Vg(e), Ug(e);
}, Pg = function(e, r) {
  for (var a = 0; a < e.graphSet.length; a++)
    for (var n = e.graphSet[a], i = n.length, s = 0; s < i; s++)
      for (var o = e.layoutNodes[e.idToIndex[n[s]]], u = s + 1; u < i; u++) {
        var l = e.layoutNodes[e.idToIndex[n[u]]];
        Bg(o, l, e, r);
      }
}, Gs = function(e) {
  return -e + 2 * e * Math.random();
}, Bg = function(e, r, a, n) {
  var i = e.cmptId, s = r.cmptId;
  if (!(i !== s && !a.isCompound)) {
    var o = r.positionX - e.positionX, u = r.positionY - e.positionY, l = 1;
    o === 0 && u === 0 && (o = Gs(l), u = Gs(l));
    var f = Fg(e, r, o, u);
    if (f > 0)
      var h = n.nodeOverlap * f, d = Math.sqrt(o * o + u * u), c = h * o / d, v = h * u / d;
    else
      var p = fn(e, o, u), g = fn(r, -1 * o, -1 * u), y = g.x - p.x, b = g.y - p.y, m = y * y + b * b, d = Math.sqrt(m), h = (e.nodeRepulsion + r.nodeRepulsion) / m, c = h * y / d, v = h * b / d;
    e.isLocked || (e.offsetX -= c, e.offsetY -= v), r.isLocked || (r.offsetX += c, r.offsetY += v);
  }
}, Fg = function(e, r, a, n) {
  if (a > 0)
    var i = e.maxX - r.minX;
  else
    var i = r.maxX - e.minX;
  if (n > 0)
    var s = e.maxY - r.minY;
  else
    var s = r.maxY - e.minY;
  return i >= 0 && s >= 0 ? Math.sqrt(i * i + s * s) : 0;
}, fn = function(e, r, a) {
  var n = e.positionX, i = e.positionY, s = e.height || 1, o = e.width || 1, u = a / r, l = s / o, f = {};
  return r === 0 && 0 < a || r === 0 && 0 > a ? (f.x = n, f.y = i + s / 2, f) : 0 < r && -1 * l <= u && u <= l ? (f.x = n + o / 2, f.y = i + o * a / 2 / r, f) : 0 > r && -1 * l <= u && u <= l ? (f.x = n - o / 2, f.y = i - o * a / 2 / r, f) : 0 < a && (u <= -1 * l || u >= l) ? (f.x = n + s * r / 2 / a, f.y = i + s / 2, f) : (0 > a && (u <= -1 * l || u >= l) && (f.x = n - s * r / 2 / a, f.y = i - s / 2), f);
}, Gg = function(e, r) {
  for (var a = 0; a < e.edgeSize; a++) {
    var n = e.layoutEdges[a], i = e.idToIndex[n.sourceId], s = e.layoutNodes[i], o = e.idToIndex[n.targetId], u = e.layoutNodes[o], l = u.positionX - s.positionX, f = u.positionY - s.positionY;
    if (!(l === 0 && f === 0)) {
      var h = fn(s, l, f), d = fn(u, -1 * l, -1 * f), c = d.x - h.x, v = d.y - h.y, p = Math.sqrt(c * c + v * v), g = Math.pow(n.idealLength - p, 2) / n.elasticity;
      if (p !== 0)
        var y = g * c / p, b = g * v / p;
      else
        var y = 0, b = 0;
      s.isLocked || (s.offsetX += y, s.offsetY += b), u.isLocked || (u.offsetX -= y, u.offsetY -= b);
    }
  }
}, zg = function(e, r) {
  if (r.gravity !== 0)
    for (var a = 1, n = 0; n < e.graphSet.length; n++) {
      var i = e.graphSet[n], s = i.length;
      if (n === 0)
        var o = e.clientHeight / 2, u = e.clientWidth / 2;
      else
        var l = e.layoutNodes[e.idToIndex[i[0]]], f = e.layoutNodes[e.idToIndex[l.parentId]], o = f.positionX, u = f.positionY;
      for (var h = 0; h < s; h++) {
        var d = e.layoutNodes[e.idToIndex[i[h]]];
        if (!d.isLocked) {
          var c = o - d.positionX, v = u - d.positionY, p = Math.sqrt(c * c + v * v);
          if (p > a) {
            var g = r.gravity * c / p, y = r.gravity * v / p;
            d.offsetX += g, d.offsetY += y;
          }
        }
      }
    }
}, Vg = function(e, r) {
  var a = [], n = 0, i = -1;
  for (a.push.apply(a, e.graphSet[0]), i += e.graphSet[0].length; n <= i; ) {
    var s = a[n++], o = e.idToIndex[s], u = e.layoutNodes[o], l = u.children;
    if (0 < l.length && !u.isLocked) {
      for (var f = u.offsetX, h = u.offsetY, d = 0; d < l.length; d++) {
        var c = e.layoutNodes[e.idToIndex[l[d]]];
        c.offsetX += f, c.offsetY += h, a[++i] = l[d];
      }
      u.offsetX = 0, u.offsetY = 0;
    }
  }
}, Ug = function(e, r) {
  for (var a = 0; a < e.nodeSize; a++) {
    var n = e.layoutNodes[a];
    0 < n.children.length && (n.maxX = void 0, n.minX = void 0, n.maxY = void 0, n.minY = void 0);
  }
  for (var a = 0; a < e.nodeSize; a++) {
    var n = e.layoutNodes[a];
    if (!(0 < n.children.length || n.isLocked)) {
      var i = $g(n.offsetX, n.offsetY, e.temperature);
      n.positionX += i.x, n.positionY += i.y, n.offsetX = 0, n.offsetY = 0, n.minX = n.positionX - n.width, n.maxX = n.positionX + n.width, n.minY = n.positionY - n.height, n.maxY = n.positionY + n.height, Yg(n, e);
    }
  }
  for (var a = 0; a < e.nodeSize; a++) {
    var n = e.layoutNodes[a];
    0 < n.children.length && !n.isLocked && (n.positionX = (n.maxX + n.minX) / 2, n.positionY = (n.maxY + n.minY) / 2, n.width = n.maxX - n.minX, n.height = n.maxY - n.minY);
  }
}, $g = function(e, r, a) {
  var n = Math.sqrt(e * e + r * r);
  if (n > a)
    var i = {
      x: a * e / n,
      y: a * r / n
    };
  else
    var i = {
      x: e,
      y: r
    };
  return i;
}, Yg = function t(e, r) {
  var a = e.parentId;
  if (a != null) {
    var n = r.layoutNodes[r.idToIndex[a]], i = !1;
    if ((n.maxX == null || e.maxX + n.padRight > n.maxX) && (n.maxX = e.maxX + n.padRight, i = !0), (n.minX == null || e.minX - n.padLeft < n.minX) && (n.minX = e.minX - n.padLeft, i = !0), (n.maxY == null || e.maxY + n.padBottom > n.maxY) && (n.maxY = e.maxY + n.padBottom, i = !0), (n.minY == null || e.minY - n.padTop < n.minY) && (n.minY = e.minY - n.padTop, i = !0), i)
      return t(n, r);
  }
}, zs = function(e, r) {
  for (var a = e.layoutNodes, n = [], i = 0; i < a.length; i++) {
    var s = a[i], o = s.cmptId, u = n[o] = n[o] || [];
    u.push(s);
  }
  for (var l = 0, i = 0; i < n.length; i++) {
    var f = n[i];
    if (f) {
      f.x1 = 1 / 0, f.x2 = -1 / 0, f.y1 = 1 / 0, f.y2 = -1 / 0;
      for (var h = 0; h < f.length; h++) {
        var d = f[h];
        f.x1 = Math.min(f.x1, d.positionX - d.width / 2), f.x2 = Math.max(f.x2, d.positionX + d.width / 2), f.y1 = Math.min(f.y1, d.positionY - d.height / 2), f.y2 = Math.max(f.y2, d.positionY + d.height / 2);
      }
      f.w = f.x2 - f.x1, f.h = f.y2 - f.y1, l += f.w * f.h;
    }
  }
  n.sort(function(b, m) {
    return m.w * m.h - b.w * b.h;
  });
  for (var c = 0, v = 0, p = 0, g = 0, y = Math.sqrt(l) * e.clientWidth / e.clientHeight, i = 0; i < n.length; i++) {
    var f = n[i];
    if (f) {
      for (var h = 0; h < f.length; h++) {
        var d = f[h];
        d.isLocked || (d.positionX += c - f.x1, d.positionY += v - f.y1);
      }
      c += f.w + r.componentSpacing, p += f.w + r.componentSpacing, g = Math.max(g, f.h), p > y && (v += g + r.componentSpacing, c = 0, p = 0, g = 0);
    }
  }
}, _g = {
  fit: !0,
  // whether to fit the viewport to the graph
  padding: 30,
  // padding used on fit
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: !0,
  // prevents node overlap, may overflow boundingBox if not enough space
  avoidOverlapPadding: 10,
  // extra spacing around nodes when avoidOverlap: true
  nodeDimensionsIncludeLabels: !1,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  condense: !1,
  // uses all available space on false, uses minimal space on true
  rows: void 0,
  // force num of rows in the grid
  cols: void 0,
  // force num of columns in the grid
  position: function(e) {
  },
  // returns { row, col } for element
  sort: void 0,
  // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, r) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, r) {
    return r;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts 
};
function pu(t) {
  this.options = be({}, _g, t);
}
pu.prototype.run = function() {
  var t = this.options, e = t, r = t.cy, a = e.eles, n = a.nodes().not(":parent");
  e.sort && (n = n.sort(e.sort));
  var i = gt(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: r.width(),
    h: r.height()
  });
  if (i.h === 0 || i.w === 0)
    a.nodes().layoutPositions(this, e, function(Y) {
      return {
        x: i.x1,
        y: i.y1
      };
    });
  else {
    var s = n.size(), o = Math.sqrt(s * i.h / i.w), u = Math.round(o), l = Math.round(i.w / i.h * o), f = function(_) {
      if (_ == null)
        return Math.min(u, l);
      var q = Math.min(u, l);
      q == u ? u = _ : l = _;
    }, h = function(_) {
      if (_ == null)
        return Math.max(u, l);
      var q = Math.max(u, l);
      q == u ? u = _ : l = _;
    }, d = e.rows, c = e.cols != null ? e.cols : e.columns;
    if (d != null && c != null)
      u = d, l = c;
    else if (d != null && c == null)
      u = d, l = Math.ceil(s / u);
    else if (d == null && c != null)
      l = c, u = Math.ceil(s / l);
    else if (l * u > s) {
      var v = f(), p = h();
      (v - 1) * p >= s ? f(v - 1) : (p - 1) * v >= s && h(p - 1);
    } else
      for (; l * u < s; ) {
        var g = f(), y = h();
        (y + 1) * g >= s ? h(y + 1) : f(g + 1);
      }
    var b = i.w / l, m = i.h / u;
    if (e.condense && (b = 0, m = 0), e.avoidOverlap)
      for (var T = 0; T < n.length; T++) {
        var C = n[T], S = C._private.position;
        (S.x == null || S.y == null) && (S.x = 0, S.y = 0);
        var E = C.layoutDimensions(e), x = e.avoidOverlapPadding, w = E.w + x, D = E.h + x;
        b = Math.max(b, w), m = Math.max(m, D);
      }
    for (var L = {}, A = function(_, q) {
      return !!L["c-" + _ + "-" + q];
    }, I = function(_, q) {
      L["c-" + _ + "-" + q] = !0;
    }, O = 0, M = 0, R = function() {
      M++, M >= l && (M = 0, O++);
    }, k = {}, P = 0; P < n.length; P++) {
      var B = n[P], V = e.position(B);
      if (V && (V.row !== void 0 || V.col !== void 0)) {
        var F = {
          row: V.row,
          col: V.col
        };
        if (F.col === void 0)
          for (F.col = 0; A(F.row, F.col); )
            F.col++;
        else if (F.row === void 0)
          for (F.row = 0; A(F.row, F.col); )
            F.row++;
        k[B.id()] = F, I(F.row, F.col);
      }
    }
    var G = function(_, q) {
      var U, z;
      if (_.locked() || _.isParent())
        return !1;
      var H = k[_.id()];
      if (H)
        U = H.col * b + b / 2 + i.x1, z = H.row * m + m / 2 + i.y1;
      else {
        for (; A(O, M); )
          R();
        U = M * b + b / 2 + i.x1, z = O * m + m / 2 + i.y1, I(O, M), R();
      }
      return {
        x: U,
        y: z
      };
    };
    n.layoutPositions(this, e, G);
  }
  return this;
};
var Hg = {
  ready: function() {
  },
  // on layoutready
  stop: function() {
  }
  // on layoutstop
};
function Mi(t) {
  this.options = be({}, Hg, t);
}
Mi.prototype.run = function() {
  var t = this.options, e = t.eles, r = this;
  return t.cy, r.emit("layoutstart"), e.nodes().positions(function() {
    return {
      x: 0,
      y: 0
    };
  }), r.one("layoutready", t.ready), r.emit("layoutready"), r.one("layoutstop", t.stop), r.emit("layoutstop"), this;
};
Mi.prototype.stop = function() {
  return this;
};
var Xg = {
  positions: void 0,
  // map of (node id) => (position obj); or function(node){ return somPos; }
  zoom: void 0,
  // the zoom level to set (prob want fit = false if set)
  pan: void 0,
  // the pan level to set (prob want fit = false if set)
  fit: !0,
  // whether to fit to viewport
  padding: 30,
  // padding on fit
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, r) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, r) {
    return r;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts
};
function yu(t) {
  this.options = be({}, Xg, t);
}
yu.prototype.run = function() {
  var t = this.options, e = t.eles, r = e.nodes(), a = Ge(t.positions);
  function n(i) {
    if (t.positions == null)
      return Zf(i.position());
    if (a)
      return t.positions(i);
    var s = t.positions[i._private.data.id];
    return s == null ? null : s;
  }
  return r.layoutPositions(this, t, function(i, s) {
    var o = n(i);
    return i.locked() || o == null ? !1 : o;
  }), this;
};
var qg = {
  fit: !0,
  // whether to fit to viewport
  padding: 30,
  // fit padding
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, r) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, r) {
    return r;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts 
};
function mu(t) {
  this.options = be({}, qg, t);
}
mu.prototype.run = function() {
  var t = this.options, e = t.cy, r = t.eles, a = gt(t.boundingBox ? t.boundingBox : {
    x1: 0,
    y1: 0,
    w: e.width(),
    h: e.height()
  }), n = function(s, o) {
    return {
      x: a.x1 + Math.round(Math.random() * a.w),
      y: a.y1 + Math.round(Math.random() * a.h)
    };
  };
  return r.nodes().layoutPositions(this, t, n), this;
};
var Wg = [{
  name: "breadthfirst",
  impl: cu
}, {
  name: "circle",
  impl: vu
}, {
  name: "concentric",
  impl: du
}, {
  name: "cose",
  impl: An
}, {
  name: "grid",
  impl: pu
}, {
  name: "null",
  impl: Mi
}, {
  name: "preset",
  impl: yu
}, {
  name: "random",
  impl: mu
}];
function bu(t) {
  this.options = t, this.notifications = 0;
}
var Vs = function() {
}, Us = function() {
  throw new Error("A headless instance can not render images");
};
bu.prototype = {
  recalculateRenderedStyle: Vs,
  notify: function() {
    this.notifications++;
  },
  init: Vs,
  isHeadless: function() {
    return !0;
  },
  png: Us,
  jpg: Us
};
var Ri = {};
Ri.arrowShapeWidth = 0.3;
Ri.registerArrowShapes = function() {
  var t = this.arrowShapes = {}, e = this, r = function(l, f, h, d, c, v, p) {
    var g = c.x - h / 2 - p, y = c.x + h / 2 + p, b = c.y - h / 2 - p, m = c.y + h / 2 + p, T = g <= l && l <= y && b <= f && f <= m;
    return T;
  }, a = function(l, f, h, d, c) {
    var v = l * Math.cos(d) - f * Math.sin(d), p = l * Math.sin(d) + f * Math.cos(d), g = v * h, y = p * h, b = g + c.x, m = y + c.y;
    return {
      x: b,
      y: m
    };
  }, n = function(l, f, h, d) {
    for (var c = [], v = 0; v < l.length; v += 2) {
      var p = l[v], g = l[v + 1];
      c.push(a(p, g, f, h, d));
    }
    return c;
  }, i = function(l) {
    for (var f = [], h = 0; h < l.length; h++) {
      var d = l[h];
      f.push(d.x, d.y);
    }
    return f;
  }, s = function(l) {
    return l.pstyle("width").pfValue * l.pstyle("arrow-scale").pfValue * 2;
  }, o = function(l, f) {
    ve(f) && (f = t[f]), t[l] = be({
      name: l,
      points: [-0.15, -0.3, 0.15, -0.3, 0.15, 0.3, -0.15, 0.3],
      collide: function(d, c, v, p, g, y) {
        var b = i(n(this.points, v + 2 * y, p, g)), m = dt(d, c, b);
        return m;
      },
      roughCollide: r,
      draw: function(d, c, v, p) {
        var g = n(this.points, c, v, p);
        e.arrowShapeImpl("polygon")(d, g);
      },
      spacing: function(d) {
        return 0;
      },
      gap: s
    }, f);
  };
  o("none", {
    collide: an,
    roughCollide: an,
    draw: mi,
    spacing: Qi,
    gap: Qi
  }), o("triangle", {
    points: [-0.15, -0.3, 0, 0, 0.15, -0.3]
  }), o("arrow", "triangle"), o("triangle-backcurve", {
    points: t.triangle.points,
    controlPoint: [0, -0.15],
    roughCollide: r,
    draw: function(l, f, h, d, c) {
      var v = n(this.points, f, h, d), p = this.controlPoint, g = a(p[0], p[1], f, h, d);
      e.arrowShapeImpl(this.name)(l, v, g);
    },
    gap: function(l) {
      return s(l) * 0.8;
    }
  }), o("triangle-tee", {
    points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
    pointsTee: [-0.15, -0.4, -0.15, -0.5, 0.15, -0.5, 0.15, -0.4],
    collide: function(l, f, h, d, c, v, p) {
      var g = i(n(this.points, h + 2 * p, d, c)), y = i(n(this.pointsTee, h + 2 * p, d, c)), b = dt(l, f, g) || dt(l, f, y);
      return b;
    },
    draw: function(l, f, h, d, c) {
      var v = n(this.points, f, h, d), p = n(this.pointsTee, f, h, d);
      e.arrowShapeImpl(this.name)(l, v, p);
    }
  }), o("circle-triangle", {
    radius: 0.15,
    pointsTr: [0, -0.15, 0.15, -0.45, -0.15, -0.45, 0, -0.15],
    collide: function(l, f, h, d, c, v, p) {
      var g = c, y = Math.pow(g.x - l, 2) + Math.pow(g.y - f, 2) <= Math.pow((h + 2 * p) * this.radius, 2), b = i(n(this.points, h + 2 * p, d, c));
      return dt(l, f, b) || y;
    },
    draw: function(l, f, h, d, c) {
      var v = n(this.pointsTr, f, h, d);
      e.arrowShapeImpl(this.name)(l, v, d.x, d.y, this.radius * f);
    },
    spacing: function(l) {
      return e.getArrowWidth(l.pstyle("width").pfValue, l.pstyle("arrow-scale").value) * this.radius;
    }
  }), o("triangle-cross", {
    points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
    baseCrossLinePts: [
      -0.15,
      -0.4,
      // first half of the rectangle
      -0.15,
      -0.4,
      0.15,
      -0.4,
      // second half of the rectangle
      0.15,
      -0.4
    ],
    crossLinePts: function(l, f) {
      var h = this.baseCrossLinePts.slice(), d = f / l, c = 3, v = 5;
      return h[c] = h[c] - d, h[v] = h[v] - d, h;
    },
    collide: function(l, f, h, d, c, v, p) {
      var g = i(n(this.points, h + 2 * p, d, c)), y = i(n(this.crossLinePts(h, v), h + 2 * p, d, c)), b = dt(l, f, g) || dt(l, f, y);
      return b;
    },
    draw: function(l, f, h, d, c) {
      var v = n(this.points, f, h, d), p = n(this.crossLinePts(f, c), f, h, d);
      e.arrowShapeImpl(this.name)(l, v, p);
    }
  }), o("vee", {
    points: [-0.15, -0.3, 0, 0, 0.15, -0.3, 0, -0.15],
    gap: function(l) {
      return s(l) * 0.525;
    }
  }), o("circle", {
    radius: 0.15,
    collide: function(l, f, h, d, c, v, p) {
      var g = c, y = Math.pow(g.x - l, 2) + Math.pow(g.y - f, 2) <= Math.pow((h + 2 * p) * this.radius, 2);
      return y;
    },
    draw: function(l, f, h, d, c) {
      e.arrowShapeImpl(this.name)(l, d.x, d.y, this.radius * f);
    },
    spacing: function(l) {
      return e.getArrowWidth(l.pstyle("width").pfValue, l.pstyle("arrow-scale").value) * this.radius;
    }
  }), o("tee", {
    points: [-0.15, 0, -0.15, -0.1, 0.15, -0.1, 0.15, 0],
    spacing: function(l) {
      return 1;
    },
    gap: function(l) {
      return 1;
    }
  }), o("square", {
    points: [-0.15, 0, 0.15, 0, 0.15, -0.3, -0.15, -0.3]
  }), o("diamond", {
    points: [-0.15, -0.15, 0, -0.3, 0.15, -0.15, 0, 0],
    gap: function(l) {
      return l.pstyle("width").pfValue * l.pstyle("arrow-scale").value;
    }
  }), o("chevron", {
    points: [0, 0, -0.15, -0.15, -0.1, -0.2, 0, -0.1, 0.1, -0.2, 0.15, -0.15],
    gap: function(l) {
      return 0.95 * l.pstyle("width").pfValue * l.pstyle("arrow-scale").value;
    }
  });
};
var wr = {};
wr.projectIntoViewport = function(t, e) {
  var r = this.cy, a = this.findContainerClientCoords(), n = a[0], i = a[1], s = a[4], o = r.pan(), u = r.zoom(), l = ((t - n) / s - o.x) / u, f = ((e - i) / s - o.y) / u;
  return [l, f];
};
wr.findContainerClientCoords = function() {
  if (this.containerBB)
    return this.containerBB;
  var t = this.container, e = t.getBoundingClientRect(), r = this.cy.window().getComputedStyle(t), a = function(y) {
    return parseFloat(r.getPropertyValue(y));
  }, n = {
    left: a("padding-left"),
    right: a("padding-right"),
    top: a("padding-top"),
    bottom: a("padding-bottom")
  }, i = {
    left: a("border-left-width"),
    right: a("border-right-width"),
    top: a("border-top-width"),
    bottom: a("border-bottom-width")
  }, s = t.clientWidth, o = t.clientHeight, u = n.left + n.right, l = n.top + n.bottom, f = i.left + i.right, h = e.width / (s + f), d = s - u, c = o - l, v = e.left + n.left + i.left, p = e.top + n.top + i.top;
  return this.containerBB = [v, p, d, c, h];
};
wr.invalidateContainerClientCoordsCache = function() {
  this.containerBB = null;
};
wr.findNearestElement = function(t, e, r, a) {
  return this.findNearestElements(t, e, r, a)[0];
};
wr.findNearestElements = function(t, e, r, a) {
  var n = this, i = this, s = i.getCachedZSortedEles(), o = [], u = i.cy.zoom(), l = i.cy.hasCompoundNodes(), f = (a ? 24 : 8) / u, h = (a ? 8 : 2) / u, d = (a ? 8 : 2) / u, c = 1 / 0, v, p;
  r && (s = s.interactive);
  function g(E, x) {
    if (E.isNode()) {
      if (p)
        return;
      p = E, o.push(E);
    }
    if (E.isEdge() && (x == null || x < c))
      if (v) {
        if (v.pstyle("z-compound-depth").value === E.pstyle("z-compound-depth").value && v.pstyle("z-compound-depth").value === E.pstyle("z-compound-depth").value) {
          for (var w = 0; w < o.length; w++)
            if (o[w].isEdge()) {
              o[w] = E, v = E, c = x != null ? x : c;
              break;
            }
        }
      } else
        o.push(E), v = E, c = x != null ? x : c;
  }
  function y(E) {
    var x = E.outerWidth() + 2 * h, w = E.outerHeight() + 2 * h, D = x / 2, L = w / 2, A = E.position(), I = E.pstyle("corner-radius").value === "auto" ? "auto" : E.pstyle("corner-radius").pfValue, O = E._private.rscratch;
    if (A.x - D <= t && t <= A.x + D && A.y - L <= e && e <= A.y + L) {
      var M = i.nodeShapes[n.getNodeShape(E)];
      if (M.checkPoint(t, e, 0, x, w, A.x, A.y, I, O))
        return g(E, 0), !0;
    }
  }
  function b(E) {
    var x = E._private, w = x.rscratch, D = E.pstyle("width").pfValue, L = E.pstyle("arrow-scale").value, A = D / 2 + f, I = A * A, O = A * 2, P = x.source, B = x.target, M;
    if (w.edgeType === "segments" || w.edgeType === "straight" || w.edgeType === "haystack") {
      for (var R = w.allpts, k = 0; k + 3 < R.length; k += 2)
        if (lh(t, e, R[k], R[k + 1], R[k + 2], R[k + 3], O) && I > (M = dh(t, e, R[k], R[k + 1], R[k + 2], R[k + 3])))
          return g(E, M), !0;
    } else if (w.edgeType === "bezier" || w.edgeType === "multibezier" || w.edgeType === "self" || w.edgeType === "compound") {
      for (var R = w.allpts, k = 0; k + 5 < w.allpts.length; k += 4)
        if (fh(t, e, R[k], R[k + 1], R[k + 2], R[k + 3], R[k + 4], R[k + 5], O) && I > (M = vh(t, e, R[k], R[k + 1], R[k + 2], R[k + 3], R[k + 4], R[k + 5])))
          return g(E, M), !0;
    }
    for (var P = P || x.source, B = B || x.target, V = n.getArrowWidth(D, L), F = [{
      name: "source",
      x: w.arrowStartX,
      y: w.arrowStartY,
      angle: w.srcArrowAngle
    }, {
      name: "target",
      x: w.arrowEndX,
      y: w.arrowEndY,
      angle: w.tgtArrowAngle
    }, {
      name: "mid-source",
      x: w.midX,
      y: w.midY,
      angle: w.midsrcArrowAngle
    }, {
      name: "mid-target",
      x: w.midX,
      y: w.midY,
      angle: w.midtgtArrowAngle
    }], k = 0; k < F.length; k++) {
      var G = F[k], Y = i.arrowShapes[E.pstyle(G.name + "-arrow-shape").value], _ = E.pstyle("width").pfValue;
      if (Y.roughCollide(t, e, V, G.angle, {
        x: G.x,
        y: G.y
      }, _, f) && Y.collide(t, e, V, G.angle, {
        x: G.x,
        y: G.y
      }, _, f))
        return g(E), !0;
    }
    l && o.length > 0 && (y(P), y(B));
  }
  function m(E, x, w) {
    return At(E, x, w);
  }
  function T(E, x) {
    var w = E._private, D = d, L;
    x ? L = x + "-" : L = "", E.boundingBox();
    var A = w.labelBounds[x || "main"], I = E.pstyle(L + "label").value, O = E.pstyle("text-events").strValue === "yes";
    if (!(!O || !I)) {
      var M = m(w.rscratch, "labelX", x), R = m(w.rscratch, "labelY", x), k = m(w.rscratch, "labelAngle", x), P = E.pstyle(L + "text-margin-x").pfValue, B = E.pstyle(L + "text-margin-y").pfValue, V = A.x1 - D - P, F = A.x2 + D - P, G = A.y1 - D - B, Y = A.y2 + D - B;
      if (k) {
        var _ = Math.cos(k), q = Math.sin(k), U = function(me, te) {
          return me = me - M, te = te - R, {
            x: me * _ - te * q + M,
            y: me * q + te * _ + R
          };
        }, z = U(V, G), H = U(V, Y), W = U(F, G), J = U(F, Y), ee = [
          // with the margin added after the rotation is applied
          z.x + P,
          z.y + B,
          W.x + P,
          W.y + B,
          J.x + P,
          J.y + B,
          H.x + P,
          H.y + B
        ];
        if (dt(t, e, ee))
          return g(E), !0;
      } else if (Gr(A, t, e))
        return g(E), !0;
    }
  }
  for (var C = s.length - 1; C >= 0; C--) {
    var S = s[C];
    S.isNode() ? y(S) || T(S) : b(S) || T(S) || T(S, "source") || T(S, "target");
  }
  return o;
};
wr.getAllInBox = function(t, e, r, a) {
  var n = this.getCachedZSortedEles().interactive, i = [], s = Math.min(t, r), o = Math.max(t, r), u = Math.min(e, a), l = Math.max(e, a);
  t = s, r = o, e = u, a = l;
  for (var f = gt({
    x1: t,
    y1: e,
    x2: r,
    y2: a
  }), h = 0; h < n.length; h++) {
    var d = n[h];
    if (d.isNode()) {
      var c = d, v = c.boundingBox({
        includeNodes: !0,
        includeEdges: !1,
        includeLabels: !1
      });
      wi(f, v) && !Ao(v, f) && i.push(c);
    } else {
      var p = d, g = p._private, y = g.rscratch;
      if (y.startX != null && y.startY != null && !Gr(f, y.startX, y.startY) || y.endX != null && y.endY != null && !Gr(f, y.endX, y.endY))
        continue;
      if (y.edgeType === "bezier" || y.edgeType === "multibezier" || y.edgeType === "self" || y.edgeType === "compound" || y.edgeType === "segments" || y.edgeType === "haystack") {
        for (var b = g.rstyle.bezierPts || g.rstyle.linePts || g.rstyle.haystackPts, m = !0, T = 0; T < b.length; T++)
          if (!uh(f, b[T])) {
            m = !1;
            break;
          }
        m && i.push(p);
      } else
        (y.edgeType === "haystack" || y.edgeType === "straight") && i.push(p);
    }
  }
  return i;
};
var hn = {};
hn.calculateArrowAngles = function(t) {
  var e = t._private.rscratch, r = e.edgeType === "haystack", a = e.edgeType === "bezier", n = e.edgeType === "multibezier", i = e.edgeType === "segments", s = e.edgeType === "compound", o = e.edgeType === "self", u, l, f, h, d, c, y, b;
  if (r ? (f = e.haystackPts[0], h = e.haystackPts[1], d = e.haystackPts[2], c = e.haystackPts[3]) : (f = e.arrowStartX, h = e.arrowStartY, d = e.arrowEndX, c = e.arrowEndY), y = e.midX, b = e.midY, i)
    u = f - e.segpts[0], l = h - e.segpts[1];
  else if (n || s || o || a) {
    var v = e.allpts, p = Ke(v[0], v[2], v[4], 0.1), g = Ke(v[1], v[3], v[5], 0.1);
    u = f - p, l = h - g;
  } else
    u = f - y, l = h - b;
  e.srcArrowAngle = Ra(u, l);
  var y = e.midX, b = e.midY;
  if (r && (y = (f + d) / 2, b = (h + c) / 2), u = d - f, l = c - h, i) {
    var v = e.allpts;
    if (v.length / 2 % 2 === 0) {
      var m = v.length / 2, T = m - 2;
      u = v[m] - v[T], l = v[m + 1] - v[T + 1];
    } else if (e.isRound)
      u = e.midVector[1], l = -e.midVector[0];
    else {
      var m = v.length / 2 - 1, T = m - 2;
      u = v[m] - v[T], l = v[m + 1] - v[T + 1];
    }
  } else if (n || s || o) {
    var v = e.allpts, C = e.ctrlpts, S, E, x, w;
    if (C.length / 2 % 2 === 0) {
      var D = v.length / 2 - 1, L = D + 2, A = L + 2;
      S = Ke(v[D], v[L], v[A], 0), E = Ke(v[D + 1], v[L + 1], v[A + 1], 0), x = Ke(v[D], v[L], v[A], 1e-4), w = Ke(v[D + 1], v[L + 1], v[A + 1], 1e-4);
    } else {
      var L = v.length / 2 - 1, D = L - 2, A = L + 2;
      S = Ke(v[D], v[L], v[A], 0.4999), E = Ke(v[D + 1], v[L + 1], v[A + 1], 0.4999), x = Ke(v[D], v[L], v[A], 0.5), w = Ke(v[D + 1], v[L + 1], v[A + 1], 0.5);
    }
    u = x - S, l = w - E;
  }
  if (e.midtgtArrowAngle = Ra(u, l), e.midDispX = u, e.midDispY = l, u *= -1, l *= -1, i) {
    var v = e.allpts;
    if (v.length / 2 % 2 !== 0) {
      if (!e.isRound) {
        var m = v.length / 2 - 1, I = m + 2;
        u = -(v[I] - v[m]), l = -(v[I + 1] - v[m + 1]);
      }
    }
  }
  if (e.midsrcArrowAngle = Ra(u, l), i)
    u = d - e.segpts[e.segpts.length - 2], l = c - e.segpts[e.segpts.length - 1];
  else if (n || s || o || a) {
    var v = e.allpts, O = v.length, p = Ke(v[O - 6], v[O - 4], v[O - 2], 0.9), g = Ke(v[O - 5], v[O - 3], v[O - 1], 0.9);
    u = d - p, l = c - g;
  } else
    u = d - y, l = c - b;
  e.tgtArrowAngle = Ra(u, l);
};
hn.getArrowWidth = hn.getArrowHeight = function(t, e) {
  var r = this.arrowWidthCache = this.arrowWidthCache || {}, a = r[t + ", " + e];
  return a || (a = Math.max(Math.pow(t * 13.37, 0.9), 29) * e, r[t + ", " + e] = a, a);
};
var ri, ai, kt = {}, bt = {}, $s, Ys, hr, Qa, Ut, or, fr, Rt, Ar, $a, Eu, wu, ni, ii, _s, Hs = function(e, r, a) {
  a.x = r.x - e.x, a.y = r.y - e.y, a.len = Math.sqrt(a.x * a.x + a.y * a.y), a.nx = a.x / a.len, a.ny = a.y / a.len, a.ang = Math.atan2(a.ny, a.nx);
}, Kg = function(e, r) {
  r.x = e.x * -1, r.y = e.y * -1, r.nx = e.nx * -1, r.ny = e.ny * -1, r.ang = e.ang > 0 ? -(Math.PI - e.ang) : Math.PI + e.ang;
}, Zg = function(e, r, a, n, i) {
  if (e !== _s ? Hs(r, e, kt) : Kg(bt, kt), Hs(r, a, bt), $s = kt.nx * bt.ny - kt.ny * bt.nx, Ys = kt.nx * bt.nx - kt.ny * -bt.ny, Ut = Math.asin(Math.max(-1, Math.min(1, $s))), Math.abs(Ut) < 1e-6) {
    ri = r.x, ai = r.y, fr = Ar = 0;
    return;
  }
  hr = 1, Qa = !1, Ys < 0 ? Ut < 0 ? Ut = Math.PI + Ut : (Ut = Math.PI - Ut, hr = -1, Qa = !0) : Ut > 0 && (hr = -1, Qa = !0), r.radius !== void 0 ? Ar = r.radius : Ar = n, or = Ut / 2, $a = Math.min(kt.len / 2, bt.len / 2), i ? (Rt = Math.abs(Math.cos(or) * Ar / Math.sin(or)), Rt > $a ? (Rt = $a, fr = Math.abs(Rt * Math.sin(or) / Math.cos(or))) : fr = Ar) : (Rt = Math.min($a, Ar), fr = Math.abs(Rt * Math.sin(or) / Math.cos(or))), ni = r.x + bt.nx * Rt, ii = r.y + bt.ny * Rt, ri = ni - bt.ny * fr * hr, ai = ii + bt.nx * fr * hr, Eu = r.x + kt.nx * Rt, wu = r.y + kt.ny * Rt, _s = r;
};
function xu(t, e) {
  e.radius === 0 ? t.lineTo(e.cx, e.cy) : t.arc(e.cx, e.cy, e.radius, e.startAngle, e.endAngle, e.counterClockwise);
}
function ki(t, e, r, a) {
  var n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0;
  return a === 0 || e.radius === 0 ? {
    cx: e.x,
    cy: e.y,
    radius: 0,
    startX: e.x,
    startY: e.y,
    stopX: e.x,
    stopY: e.y,
    startAngle: void 0,
    endAngle: void 0,
    counterClockwise: void 0
  } : (Zg(t, e, r, a, n), {
    cx: ri,
    cy: ai,
    radius: fr,
    startX: Eu,
    startY: wu,
    stopX: ni,
    stopY: ii,
    startAngle: kt.ang + Math.PI / 2 * hr,
    endAngle: bt.ang - Math.PI / 2 * hr,
    counterClockwise: Qa
  });
}
var ut = {};
ut.findMidptPtsEtc = function(t, e) {
  var r = e.posPts, a = e.intersectionPts, n = e.vectorNormInverse, i, s = t.pstyle("source-endpoint"), o = t.pstyle("target-endpoint"), u = s.units != null && o.units != null, l = function(C, S, E, x) {
    var w = x - S, D = E - C, L = Math.sqrt(D * D + w * w);
    return {
      x: -w / L,
      y: D / L
    };
  }, f = t.pstyle("edge-distances").value;
  switch (f) {
    case "node-position":
      i = r;
      break;
    case "intersection":
      i = a;
      break;
    case "endpoints": {
      if (u) {
        var h = this.manualEndptToPx(t.source()[0], s), d = St(h, 2), c = d[0], v = d[1], p = this.manualEndptToPx(t.target()[0], o), g = St(p, 2), y = g[0], b = g[1], m = {
          x1: c,
          y1: v,
          x2: y,
          y2: b
        };
        n = l(c, v, y, b), i = m;
      } else
        Ne("Edge ".concat(t.id(), " has edge-distances:endpoints specified without manual endpoints specified via source-endpoint and target-endpoint.  Falling back on edge-distances:intersection (default).")), i = a;
      break;
    }
  }
  return {
    midptPts: i,
    vectorNormInverse: n
  };
};
ut.findHaystackPoints = function(t) {
  for (var e = 0; e < t.length; e++) {
    var r = t[e], a = r._private, n = a.rscratch;
    if (!n.haystack) {
      var i = Math.random() * 2 * Math.PI;
      n.source = {
        x: Math.cos(i),
        y: Math.sin(i)
      }, i = Math.random() * 2 * Math.PI, n.target = {
        x: Math.cos(i),
        y: Math.sin(i)
      };
    }
    var s = a.source, o = a.target, u = s.position(), l = o.position(), f = s.width(), h = o.width(), d = s.height(), c = o.height(), v = r.pstyle("haystack-radius").value, p = v / 2;
    n.haystackPts = n.allpts = [n.source.x * f * p + u.x, n.source.y * d * p + u.y, n.target.x * h * p + l.x, n.target.y * c * p + l.y], n.midX = (n.allpts[0] + n.allpts[2]) / 2, n.midY = (n.allpts[1] + n.allpts[3]) / 2, n.edgeType = "haystack", n.haystack = !0, this.storeEdgeProjections(r), this.calculateArrowAngles(r), this.recalculateEdgeLabelProjections(r), this.calculateLabelAngles(r);
  }
};
ut.findSegmentsPoints = function(t, e) {
  var r = t._private.rscratch, a = t.pstyle("segment-weights"), n = t.pstyle("segment-distances"), i = t.pstyle("segment-radii"), s = t.pstyle("radius-type"), o = Math.min(a.pfValue.length, n.pfValue.length), u = i.pfValue[i.pfValue.length - 1], l = s.pfValue[s.pfValue.length - 1];
  r.edgeType = "segments", r.segpts = [], r.radii = [], r.isArcRadius = [];
  for (var f = 0; f < o; f++) {
    var h = a.pfValue[f], d = n.pfValue[f], c = 1 - h, v = h, p = this.findMidptPtsEtc(t, e), g = p.midptPts, y = p.vectorNormInverse, b = {
      x: g.x1 * c + g.x2 * v,
      y: g.y1 * c + g.y2 * v
    };
    r.segpts.push(b.x + y.x * d, b.y + y.y * d), r.radii.push(i.pfValue[f] !== void 0 ? i.pfValue[f] : u), r.isArcRadius.push((s.pfValue[f] !== void 0 ? s.pfValue[f] : l) === "arc-radius");
  }
};
ut.findLoopPoints = function(t, e, r, a) {
  var n = t._private.rscratch, i = e.dirCounts, s = e.srcPos, o = t.pstyle("control-point-distances"), u = o ? o.pfValue[0] : void 0, l = t.pstyle("loop-direction").pfValue, f = t.pstyle("loop-sweep").pfValue, h = t.pstyle("control-point-step-size").pfValue;
  n.edgeType = "self";
  var d = r, c = h;
  a && (d = 0, c = u);
  var v = l - Math.PI / 2, p = v - f / 2, g = v + f / 2, y = l + "_" + f;
  d = i[y] === void 0 ? i[y] = 0 : ++i[y], n.ctrlpts = [s.x + Math.cos(p) * 1.4 * c * (d / 3 + 1), s.y + Math.sin(p) * 1.4 * c * (d / 3 + 1), s.x + Math.cos(g) * 1.4 * c * (d / 3 + 1), s.y + Math.sin(g) * 1.4 * c * (d / 3 + 1)];
};
ut.findCompoundLoopPoints = function(t, e, r, a) {
  var n = t._private.rscratch;
  n.edgeType = "compound";
  var i = e.srcPos, s = e.tgtPos, o = e.srcW, u = e.srcH, l = e.tgtW, f = e.tgtH, h = t.pstyle("control-point-step-size").pfValue, d = t.pstyle("control-point-distances"), c = d ? d.pfValue[0] : void 0, v = r, p = h;
  a && (v = 0, p = c);
  var g = 50, y = {
    x: i.x - o / 2,
    y: i.y - u / 2
  }, b = {
    x: s.x - l / 2,
    y: s.y - f / 2
  }, m = {
    x: Math.min(y.x, b.x),
    y: Math.min(y.y, b.y)
  }, T = 0.5, C = Math.max(T, Math.log(o * 0.01)), S = Math.max(T, Math.log(l * 0.01));
  n.ctrlpts = [m.x, m.y - (1 + Math.pow(g, 1.12) / 100) * p * (v / 3 + 1) * C, m.x - (1 + Math.pow(g, 1.12) / 100) * p * (v / 3 + 1) * S, m.y];
};
ut.findStraightEdgePoints = function(t) {
  t._private.rscratch.edgeType = "straight";
};
ut.findBezierPoints = function(t, e, r, a, n) {
  var i = t._private.rscratch, s = t.pstyle("control-point-step-size").pfValue, o = t.pstyle("control-point-distances"), u = t.pstyle("control-point-weights"), l = o && u ? Math.min(o.value.length, u.value.length) : 1, f = o ? o.pfValue[0] : void 0, h = u.value[0], d = a;
  i.edgeType = d ? "multibezier" : "bezier", i.ctrlpts = [];
  for (var c = 0; c < l; c++) {
    var v = (0.5 - e.eles.length / 2 + r) * s * (n ? -1 : 1), p = void 0, g = So(v);
    d && (f = o ? o.pfValue[c] : s, h = u.value[c]), a ? p = f : p = f !== void 0 ? g * f : void 0;
    var y = p !== void 0 ? p : v, b = 1 - h, m = h, T = this.findMidptPtsEtc(t, e), C = T.midptPts, S = T.vectorNormInverse, E = {
      x: C.x1 * b + C.x2 * m,
      y: C.y1 * b + C.y2 * m
    };
    i.ctrlpts.push(E.x + S.x * y, E.y + S.y * y);
  }
};
ut.findTaxiPoints = function(t, e) {
  var r = t._private.rscratch;
  r.edgeType = "segments";
  var a = "vertical", n = "horizontal", i = "leftward", s = "rightward", o = "downward", u = "upward", l = "auto", f = e.posPts, h = e.srcW, d = e.srcH, c = e.tgtW, v = e.tgtH, p = t.pstyle("edge-distances").value, g = p !== "node-position", y = t.pstyle("taxi-direction").value, b = y, m = t.pstyle("taxi-turn"), T = m.units === "%", C = m.pfValue, S = C < 0, E = t.pstyle("taxi-turn-min-distance").pfValue, x = g ? (h + c) / 2 : 0, w = g ? (d + v) / 2 : 0, D = f.x2 - f.x1, L = f.y2 - f.y1, A = function(pe, ye) {
    return pe > 0 ? Math.max(pe - ye, 0) : Math.min(pe + ye, 0);
  }, I = A(D, x), O = A(L, w), M = !1;
  b === l ? y = Math.abs(I) > Math.abs(O) ? n : a : b === u || b === o ? (y = a, M = !0) : (b === i || b === s) && (y = n, M = !0);
  var R = y === a, k = R ? O : I, P = R ? L : D, B = So(P), V = !1;
  !(M && (T || S)) && (b === o && P < 0 || b === u && P > 0 || b === i && P > 0 || b === s && P < 0) && (B *= -1, k = B * Math.abs(k), V = !0);
  var F;
  if (T) {
    var G = C < 0 ? 1 + C : C;
    F = G * k;
  } else {
    var Y = C < 0 ? k : 0;
    F = Y + C * B;
  }
  var _ = function(pe) {
    return Math.abs(pe) < E || Math.abs(pe) >= Math.abs(k);
  }, q = _(F), U = _(Math.abs(k) - Math.abs(F)), z = q || U;
  if (z && !V)
    if (R) {
      var H = Math.abs(P) <= d / 2, W = Math.abs(D) <= c / 2;
      if (H) {
        var J = (f.x1 + f.x2) / 2, ee = f.y1, oe = f.y2;
        r.segpts = [J, ee, J, oe];
      } else if (W) {
        var me = (f.y1 + f.y2) / 2, te = f.x1, ie = f.x2;
        r.segpts = [te, me, ie, me];
      } else
        r.segpts = [f.x1, f.y2];
    } else {
      var ue = Math.abs(P) <= h / 2, ce = Math.abs(L) <= v / 2;
      if (ue) {
        var fe = (f.y1 + f.y2) / 2, ge = f.x1, Ae = f.x2;
        r.segpts = [ge, fe, Ae, fe];
      } else if (ce) {
        var xe = (f.x1 + f.x2) / 2, we = f.y1, De = f.y2;
        r.segpts = [xe, we, xe, De];
      } else
        r.segpts = [f.x2, f.y1];
    }
  else if (R) {
    var j = f.y1 + F + (g ? d / 2 * B : 0), N = f.x1, $ = f.x2;
    r.segpts = [N, j, $, j];
  } else {
    var Q = f.x1 + F + (g ? h / 2 * B : 0), K = f.y1, X = f.y2;
    r.segpts = [Q, K, Q, X];
  }
  if (r.isRound) {
    var ae = t.pstyle("taxi-radius").value, Z = t.pstyle("radius-type").value[0] === "arc-radius";
    r.radii = new Array(r.segpts.length / 2).fill(ae), r.isArcRadius = new Array(r.segpts.length / 2).fill(Z);
  }
};
ut.tryToCorrectInvalidPoints = function(t, e) {
  var r = t._private.rscratch;
  if (r.edgeType === "bezier") {
    var a = e.srcPos, n = e.tgtPos, i = e.srcW, s = e.srcH, o = e.tgtW, u = e.tgtH, l = e.srcShape, f = e.tgtShape, h = e.srcCornerRadius, d = e.tgtCornerRadius, c = e.srcRs, v = e.tgtRs, p = !ne(r.startX) || !ne(r.startY), g = !ne(r.arrowStartX) || !ne(r.arrowStartY), y = !ne(r.endX) || !ne(r.endY), b = !ne(r.arrowEndX) || !ne(r.arrowEndY), m = 3, T = this.getArrowWidth(t.pstyle("width").pfValue, t.pstyle("arrow-scale").value) * this.arrowShapeWidth, C = m * T, S = gr({
      x: r.ctrlpts[0],
      y: r.ctrlpts[1]
    }, {
      x: r.startX,
      y: r.startY
    }), E = S < C, x = gr({
      x: r.ctrlpts[0],
      y: r.ctrlpts[1]
    }, {
      x: r.endX,
      y: r.endY
    }), w = x < C, D = !1;
    if (p || g || E) {
      D = !0;
      var L = {
        // delta
        x: r.ctrlpts[0] - a.x,
        y: r.ctrlpts[1] - a.y
      }, A = Math.sqrt(L.x * L.x + L.y * L.y), I = {
        // normalised delta
        x: L.x / A,
        y: L.y / A
      }, O = Math.max(i, s), M = {
        // *2 radius guarantees outside shape
        x: r.ctrlpts[0] + I.x * 2 * O,
        y: r.ctrlpts[1] + I.y * 2 * O
      }, R = l.intersectLine(a.x, a.y, i, s, M.x, M.y, 0, h, c);
      E ? (r.ctrlpts[0] = r.ctrlpts[0] + I.x * (C - S), r.ctrlpts[1] = r.ctrlpts[1] + I.y * (C - S)) : (r.ctrlpts[0] = R[0] + I.x * C, r.ctrlpts[1] = R[1] + I.y * C);
    }
    if (y || b || w) {
      D = !0;
      var k = {
        // delta
        x: r.ctrlpts[0] - n.x,
        y: r.ctrlpts[1] - n.y
      }, P = Math.sqrt(k.x * k.x + k.y * k.y), B = {
        // normalised delta
        x: k.x / P,
        y: k.y / P
      }, V = Math.max(i, s), F = {
        // *2 radius guarantees outside shape
        x: r.ctrlpts[0] + B.x * 2 * V,
        y: r.ctrlpts[1] + B.y * 2 * V
      }, G = f.intersectLine(n.x, n.y, o, u, F.x, F.y, 0, d, v);
      w ? (r.ctrlpts[0] = r.ctrlpts[0] + B.x * (C - x), r.ctrlpts[1] = r.ctrlpts[1] + B.y * (C - x)) : (r.ctrlpts[0] = G[0] + B.x * C, r.ctrlpts[1] = G[1] + B.y * C);
    }
    D && this.findEndpoints(t);
  }
};
ut.storeAllpts = function(t) {
  var e = t._private.rscratch;
  if (e.edgeType === "multibezier" || e.edgeType === "bezier" || e.edgeType === "self" || e.edgeType === "compound") {
    e.allpts = [], e.allpts.push(e.startX, e.startY);
    for (var r = 0; r + 1 < e.ctrlpts.length; r += 2)
      e.allpts.push(e.ctrlpts[r], e.ctrlpts[r + 1]), r + 3 < e.ctrlpts.length && e.allpts.push((e.ctrlpts[r] + e.ctrlpts[r + 2]) / 2, (e.ctrlpts[r + 1] + e.ctrlpts[r + 3]) / 2);
    e.allpts.push(e.endX, e.endY);
    var a, n;
    e.ctrlpts.length / 2 % 2 === 0 ? (a = e.allpts.length / 2 - 1, e.midX = e.allpts[a], e.midY = e.allpts[a + 1]) : (a = e.allpts.length / 2 - 3, n = 0.5, e.midX = Ke(e.allpts[a], e.allpts[a + 2], e.allpts[a + 4], n), e.midY = Ke(e.allpts[a + 1], e.allpts[a + 3], e.allpts[a + 5], n));
  } else if (e.edgeType === "straight")
    e.allpts = [e.startX, e.startY, e.endX, e.endY], e.midX = (e.startX + e.endX + e.arrowStartX + e.arrowEndX) / 4, e.midY = (e.startY + e.endY + e.arrowStartY + e.arrowEndY) / 4;
  else if (e.edgeType === "segments") {
    if (e.allpts = [], e.allpts.push(e.startX, e.startY), e.allpts.push.apply(e.allpts, e.segpts), e.allpts.push(e.endX, e.endY), e.isRound) {
      e.roundCorners = [];
      for (var i = 2; i + 3 < e.allpts.length; i += 2) {
        var s = e.radii[i / 2 - 1], o = e.isArcRadius[i / 2 - 1];
        e.roundCorners.push(ki({
          x: e.allpts[i - 2],
          y: e.allpts[i - 1]
        }, {
          x: e.allpts[i],
          y: e.allpts[i + 1],
          radius: s
        }, {
          x: e.allpts[i + 2],
          y: e.allpts[i + 3]
        }, s, o));
      }
    }
    if (e.segpts.length % 4 === 0) {
      var u = e.segpts.length / 2, l = u - 2;
      e.midX = (e.segpts[l] + e.segpts[u]) / 2, e.midY = (e.segpts[l + 1] + e.segpts[u + 1]) / 2;
    } else {
      var f = e.segpts.length / 2 - 1;
      if (!e.isRound)
        e.midX = e.segpts[f], e.midY = e.segpts[f + 1];
      else {
        var h = {
          x: e.segpts[f],
          y: e.segpts[f + 1]
        }, d = e.roundCorners[f / 2], c = [h.x - d.cx, h.y - d.cy], v = d.radius / Math.sqrt(Math.pow(c[0], 2) + Math.pow(c[1], 2));
        c = c.map(function(p) {
          return p * v;
        }), e.midX = d.cx + c[0], e.midY = d.cy + c[1], e.midVector = c;
      }
    }
  }
};
ut.checkForInvalidEdgeWarning = function(t) {
  var e = t[0]._private.rscratch;
  e.nodesOverlap || ne(e.startX) && ne(e.startY) && ne(e.endX) && ne(e.endY) ? e.loggedErr = !1 : e.loggedErr || (e.loggedErr = !0, Ne("Edge `" + t.id() + "` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap."));
};
ut.findEdgeControlPoints = function(t) {
  var e = this;
  if (!(!t || t.length === 0)) {
    for (var r = this, a = r.cy, n = a.hasCompoundNodes(), i = {
      map: new Bt(),
      get: function(E) {
        var x = this.map.get(E[0]);
        return x != null ? x.get(E[1]) : null;
      },
      set: function(E, x) {
        var w = this.map.get(E[0]);
        w == null && (w = new Bt(), this.map.set(E[0], w)), w.set(E[1], x);
      }
    }, s = [], o = [], u = 0; u < t.length; u++) {
      var l = t[u], f = l._private, h = l.pstyle("curve-style").value;
      if (!(l.removed() || !l.takesUpSpace())) {
        if (h === "haystack") {
          o.push(l);
          continue;
        }
        var d = h === "unbundled-bezier" || h.endsWith("segments") || h === "straight" || h === "straight-triangle" || h.endsWith("taxi"), c = h === "unbundled-bezier" || h === "bezier", v = f.source, p = f.target, g = v.poolIndex(), y = p.poolIndex(), b = [g, y].sort(), m = i.get(b);
        m == null && (m = {
          eles: []
        }, i.set(b, m), s.push(b)), m.eles.push(l), d && (m.hasUnbundled = !0), c && (m.hasBezier = !0);
      }
    }
    for (var T = function(E) {
      var x = s[E], w = i.get(x), D = void 0;
      if (!w.hasUnbundled) {
        var L = w.eles[0].parallelEdges().filter(function(Q) {
          return Q.isBundledBezier();
        });
        bi(w.eles), L.forEach(function(Q) {
          return w.eles.push(Q);
        }), w.eles.sort(function(Q, K) {
          return Q.poolIndex() - K.poolIndex();
        });
      }
      var A = w.eles[0], I = A.source(), O = A.target();
      if (I.poolIndex() > O.poolIndex()) {
        var M = I;
        I = O, O = M;
      }
      var R = w.srcPos = I.position(), k = w.tgtPos = O.position(), P = w.srcW = I.outerWidth(), B = w.srcH = I.outerHeight(), V = w.tgtW = O.outerWidth(), F = w.tgtH = O.outerHeight(), G = w.srcShape = r.nodeShapes[e.getNodeShape(I)], Y = w.tgtShape = r.nodeShapes[e.getNodeShape(O)], _ = w.srcCornerRadius = I.pstyle("corner-radius").value === "auto" ? "auto" : I.pstyle("corner-radius").pfValue, q = w.tgtCornerRadius = O.pstyle("corner-radius").value === "auto" ? "auto" : O.pstyle("corner-radius").pfValue, U = w.tgtRs = O._private.rscratch, z = w.srcRs = I._private.rscratch;
      w.dirCounts = {
        north: 0,
        west: 0,
        south: 0,
        east: 0,
        northwest: 0,
        southwest: 0,
        northeast: 0,
        southeast: 0
      };
      for (var H = 0; H < w.eles.length; H++) {
        var W = w.eles[H], J = W[0]._private.rscratch, ee = W.pstyle("curve-style").value, oe = ee === "unbundled-bezier" || ee.endsWith("segments") || ee.endsWith("taxi"), me = !I.same(W.source());
        if (!w.calculatedIntersection && I !== O && (w.hasBezier || w.hasUnbundled)) {
          w.calculatedIntersection = !0;
          var te = G.intersectLine(R.x, R.y, P, B, k.x, k.y, 0, _, z), ie = w.srcIntn = te, ue = Y.intersectLine(k.x, k.y, V, F, R.x, R.y, 0, q, U), ce = w.tgtIntn = ue, fe = w.intersectionPts = {
            x1: te[0],
            x2: ue[0],
            y1: te[1],
            y2: ue[1]
          }, ge = w.posPts = {
            x1: R.x,
            x2: k.x,
            y1: R.y,
            y2: k.y
          }, Ae = ue[1] - te[1], xe = ue[0] - te[0], we = Math.sqrt(xe * xe + Ae * Ae), De = w.vector = {
            x: xe,
            y: Ae
          }, j = w.vectorNorm = {
            x: De.x / we,
            y: De.y / we
          }, N = {
            x: -j.y,
            y: j.x
          };
          w.nodesOverlap = !ne(we) || Y.checkPoint(te[0], te[1], 0, V, F, k.x, k.y, q, U) || G.checkPoint(ue[0], ue[1], 0, P, B, R.x, R.y, _, z), w.vectorNormInverse = N, D = {
            nodesOverlap: w.nodesOverlap,
            dirCounts: w.dirCounts,
            calculatedIntersection: !0,
            hasBezier: w.hasBezier,
            hasUnbundled: w.hasUnbundled,
            eles: w.eles,
            srcPos: k,
            tgtPos: R,
            srcW: V,
            srcH: F,
            tgtW: P,
            tgtH: B,
            srcIntn: ce,
            tgtIntn: ie,
            srcShape: Y,
            tgtShape: G,
            posPts: {
              x1: ge.x2,
              y1: ge.y2,
              x2: ge.x1,
              y2: ge.y1
            },
            intersectionPts: {
              x1: fe.x2,
              y1: fe.y2,
              x2: fe.x1,
              y2: fe.y1
            },
            vector: {
              x: -De.x,
              y: -De.y
            },
            vectorNorm: {
              x: -j.x,
              y: -j.y
            },
            vectorNormInverse: {
              x: -N.x,
              y: -N.y
            }
          };
        }
        var $ = me ? D : w;
        J.nodesOverlap = $.nodesOverlap, J.srcIntn = $.srcIntn, J.tgtIntn = $.tgtIntn, J.isRound = ee.startsWith("round"), n && (I.isParent() || I.isChild() || O.isParent() || O.isChild()) && (I.parents().anySame(O) || O.parents().anySame(I) || I.same(O) && I.isParent()) ? e.findCompoundLoopPoints(W, $, H, oe) : I === O ? e.findLoopPoints(W, $, H, oe) : ee.endsWith("segments") ? e.findSegmentsPoints(W, $) : ee.endsWith("taxi") ? e.findTaxiPoints(W, $) : ee === "straight" || !oe && w.eles.length % 2 === 1 && H === Math.floor(w.eles.length / 2) ? e.findStraightEdgePoints(W) : e.findBezierPoints(W, $, H, oe, me), e.findEndpoints(W), e.tryToCorrectInvalidPoints(W, $), e.checkForInvalidEdgeWarning(W), e.storeAllpts(W), e.storeEdgeProjections(W), e.calculateArrowAngles(W), e.recalculateEdgeLabelProjections(W), e.calculateLabelAngles(W);
      }
    }, C = 0; C < s.length; C++)
      T(C);
    this.findHaystackPoints(o);
  }
};
function Tu(t) {
  var e = [];
  if (t != null) {
    for (var r = 0; r < t.length; r += 2) {
      var a = t[r], n = t[r + 1];
      e.push({
        x: a,
        y: n
      });
    }
    return e;
  }
}
ut.getSegmentPoints = function(t) {
  var e = t[0]._private.rscratch, r = e.edgeType;
  if (r === "segments")
    return this.recalculateRenderedStyle(t), Tu(e.segpts);
};
ut.getControlPoints = function(t) {
  var e = t[0]._private.rscratch, r = e.edgeType;
  if (r === "bezier" || r === "multibezier" || r === "self" || r === "compound")
    return this.recalculateRenderedStyle(t), Tu(e.ctrlpts);
};
ut.getEdgeMidpoint = function(t) {
  var e = t[0]._private.rscratch;
  return this.recalculateRenderedStyle(t), {
    x: e.midX,
    y: e.midY
  };
};
var Aa = {};
Aa.manualEndptToPx = function(t, e) {
  var r = this, a = t.position(), n = t.outerWidth(), i = t.outerHeight(), s = t._private.rscratch;
  if (e.value.length === 2) {
    var o = [e.pfValue[0], e.pfValue[1]];
    return e.units[0] === "%" && (o[0] = o[0] * n), e.units[1] === "%" && (o[1] = o[1] * i), o[0] += a.x, o[1] += a.y, o;
  } else {
    var u = e.pfValue[0];
    u = -Math.PI / 2 + u;
    var l = 2 * Math.max(n, i), f = [a.x + Math.cos(u) * l, a.y + Math.sin(u) * l];
    return r.nodeShapes[this.getNodeShape(t)].intersectLine(a.x, a.y, n, i, f[0], f[1], 0, t.pstyle("corner-radius").value === "auto" ? "auto" : t.pstyle("corner-radius").pfValue, s);
  }
};
Aa.findEndpoints = function(t) {
  var e = this, r, a = t.source()[0], n = t.target()[0], i = a.position(), s = n.position(), o = t.pstyle("target-arrow-shape").value, u = t.pstyle("source-arrow-shape").value, l = t.pstyle("target-distance-from-node").pfValue, f = t.pstyle("source-distance-from-node").pfValue, h = a._private.rscratch, d = n._private.rscratch, c = t.pstyle("curve-style").value, v = t._private.rscratch, p = v.edgeType, g = c === "taxi", y = p === "self" || p === "compound", b = p === "bezier" || p === "multibezier" || y, m = p !== "bezier", T = p === "straight" || p === "segments", C = p === "segments", S = b || m || T, E = y || g, x = t.pstyle("source-endpoint"), w = E ? "outside-to-node" : x.value, D = a.pstyle("corner-radius").value === "auto" ? "auto" : a.pstyle("corner-radius").pfValue, L = t.pstyle("target-endpoint"), A = E ? "outside-to-node" : L.value, I = n.pstyle("corner-radius").value === "auto" ? "auto" : n.pstyle("corner-radius").pfValue;
  v.srcManEndpt = x, v.tgtManEndpt = L;
  var O, M, R, k;
  if (b) {
    var P = [v.ctrlpts[0], v.ctrlpts[1]], B = m ? [v.ctrlpts[v.ctrlpts.length - 2], v.ctrlpts[v.ctrlpts.length - 1]] : P;
    O = B, M = P;
  } else if (T) {
    var V = C ? v.segpts.slice(0, 2) : [s.x, s.y], F = C ? v.segpts.slice(v.segpts.length - 2) : [i.x, i.y];
    O = F, M = V;
  }
  if (A === "inside-to-node")
    r = [s.x, s.y];
  else if (L.units)
    r = this.manualEndptToPx(n, L);
  else if (A === "outside-to-line")
    r = v.tgtIntn;
  else if (A === "outside-to-node" || A === "outside-to-node-or-label" ? R = O : (A === "outside-to-line" || A === "outside-to-line-or-label") && (R = [i.x, i.y]), r = e.nodeShapes[this.getNodeShape(n)].intersectLine(s.x, s.y, n.outerWidth(), n.outerHeight(), R[0], R[1], 0, I, d), A === "outside-to-node-or-label" || A === "outside-to-line-or-label") {
    var G = n._private.rscratch, Y = G.labelWidth, _ = G.labelHeight, q = G.labelX, U = G.labelY, z = Y / 2, H = _ / 2, W = n.pstyle("text-valign").value;
    W === "top" ? U -= H : W === "bottom" && (U += H);
    var J = n.pstyle("text-halign").value;
    J === "left" ? q -= z : J === "right" && (q += z);
    var ee = pa(R[0], R[1], [q - z, U - H, q + z, U - H, q + z, U + H, q - z, U + H], s.x, s.y);
    if (ee.length > 0) {
      var oe = i, me = ur(oe, Ir(r)), te = ur(oe, Ir(ee)), ie = me;
      if (te < me && (r = ee, ie = te), ee.length > 2) {
        var ue = ur(oe, {
          x: ee[2],
          y: ee[3]
        });
        ue < ie && (r = [ee[2], ee[3]]);
      }
    }
  }
  var ce = ka(r, O, e.arrowShapes[o].spacing(t) + l), fe = ka(r, O, e.arrowShapes[o].gap(t) + l);
  if (v.endX = fe[0], v.endY = fe[1], v.arrowEndX = ce[0], v.arrowEndY = ce[1], w === "inside-to-node")
    r = [i.x, i.y];
  else if (x.units)
    r = this.manualEndptToPx(a, x);
  else if (w === "outside-to-line")
    r = v.srcIntn;
  else if (w === "outside-to-node" || w === "outside-to-node-or-label" ? k = M : (w === "outside-to-line" || w === "outside-to-line-or-label") && (k = [s.x, s.y]), r = e.nodeShapes[this.getNodeShape(a)].intersectLine(i.x, i.y, a.outerWidth(), a.outerHeight(), k[0], k[1], 0, D, h), w === "outside-to-node-or-label" || w === "outside-to-line-or-label") {
    var ge = a._private.rscratch, Ae = ge.labelWidth, xe = ge.labelHeight, we = ge.labelX, De = ge.labelY, j = Ae / 2, N = xe / 2, $ = a.pstyle("text-valign").value;
    $ === "top" ? De -= N : $ === "bottom" && (De += N);
    var Q = a.pstyle("text-halign").value;
    Q === "left" ? we -= j : Q === "right" && (we += j);
    var K = pa(k[0], k[1], [we - j, De - N, we + j, De - N, we + j, De + N, we - j, De + N], i.x, i.y);
    if (K.length > 0) {
      var X = s, ae = ur(X, Ir(r)), Z = ur(X, Ir(K)), re = ae;
      if (Z < ae && (r = [K[0], K[1]], re = Z), K.length > 2) {
        var pe = ur(X, {
          x: K[2],
          y: K[3]
        });
        pe < re && (r = [K[2], K[3]]);
      }
    }
  }
  var ye = ka(r, M, e.arrowShapes[u].spacing(t) + f), he = ka(r, M, e.arrowShapes[u].gap(t) + f);
  v.startX = he[0], v.startY = he[1], v.arrowStartX = ye[0], v.arrowStartY = ye[1], S && (!ne(v.startX) || !ne(v.startY) || !ne(v.endX) || !ne(v.endY) ? v.badLine = !0 : v.badLine = !1);
};
Aa.getSourceEndpoint = function(t) {
  var e = t[0]._private.rscratch;
  switch (this.recalculateRenderedStyle(t), e.edgeType) {
    case "haystack":
      return {
        x: e.haystackPts[0],
        y: e.haystackPts[1]
      };
    default:
      return {
        x: e.arrowStartX,
        y: e.arrowStartY
      };
  }
};
Aa.getTargetEndpoint = function(t) {
  var e = t[0]._private.rscratch;
  switch (this.recalculateRenderedStyle(t), e.edgeType) {
    case "haystack":
      return {
        x: e.haystackPts[2],
        y: e.haystackPts[3]
      };
    default:
      return {
        x: e.arrowEndX,
        y: e.arrowEndY
      };
  }
};
var Pi = {};
function Qg(t, e, r) {
  for (var a = function(l, f, h, d) {
    return Ke(l, f, h, d);
  }, n = e._private, i = n.rstyle.bezierPts, s = 0; s < t.bezierProjPcts.length; s++) {
    var o = t.bezierProjPcts[s];
    i.push({
      x: a(r[0], r[2], r[4], o),
      y: a(r[1], r[3], r[5], o)
    });
  }
}
Pi.storeEdgeProjections = function(t) {
  var e = t._private, r = e.rscratch, a = r.edgeType;
  if (e.rstyle.bezierPts = null, e.rstyle.linePts = null, e.rstyle.haystackPts = null, a === "multibezier" || a === "bezier" || a === "self" || a === "compound") {
    e.rstyle.bezierPts = [];
    for (var n = 0; n + 5 < r.allpts.length; n += 4)
      Qg(this, t, r.allpts.slice(n, n + 6));
  } else if (a === "segments")
    for (var i = e.rstyle.linePts = [], n = 0; n + 1 < r.allpts.length; n += 2)
      i.push({
        x: r.allpts[n],
        y: r.allpts[n + 1]
      });
  else if (a === "haystack") {
    var s = r.haystackPts;
    e.rstyle.haystackPts = [{
      x: s[0],
      y: s[1]
    }, {
      x: s[2],
      y: s[3]
    }];
  }
  e.rstyle.arrowWidth = this.getArrowWidth(t.pstyle("width").pfValue, t.pstyle("arrow-scale").value) * this.arrowShapeWidth;
};
Pi.recalculateEdgeProjections = function(t) {
  this.findEdgeControlPoints(t);
};
var Gt = {};
Gt.recalculateNodeLabelProjection = function(t) {
  var e = t.pstyle("label").strValue;
  if (!jt(e)) {
    var r, a, n = t._private, i = t.width(), s = t.height(), o = t.padding(), u = t.position(), l = t.pstyle("text-halign").strValue, f = t.pstyle("text-valign").strValue, h = n.rscratch, d = n.rstyle;
    switch (l) {
      case "left":
        r = u.x - i / 2 - o;
        break;
      case "right":
        r = u.x + i / 2 + o;
        break;
      default:
        r = u.x;
    }
    switch (f) {
      case "top":
        a = u.y - s / 2 - o;
        break;
      case "bottom":
        a = u.y + s / 2 + o;
        break;
      default:
        a = u.y;
    }
    h.labelX = r, h.labelY = a, d.labelX = r, d.labelY = a, this.calculateLabelAngles(t), this.applyLabelDimensions(t);
  }
};
var Cu = function(e, r) {
  var a = Math.atan(r / e);
  return e === 0 && a < 0 && (a = a * -1), a;
}, Du = function(e, r) {
  var a = r.x - e.x, n = r.y - e.y;
  return Cu(a, n);
}, Jg = function(e, r, a, n) {
  var i = ga(0, n - 1e-3, 1), s = ga(0, n + 1e-3, 1), o = Rr(e, r, a, i), u = Rr(e, r, a, s);
  return Du(o, u);
};
Gt.recalculateEdgeLabelProjections = function(t) {
  var e, r = t._private, a = r.rscratch, n = this, i = {
    mid: t.pstyle("label").strValue,
    source: t.pstyle("source-label").strValue,
    target: t.pstyle("target-label").strValue
  };
  if (i.mid || i.source || i.target) {
    e = {
      x: a.midX,
      y: a.midY
    };
    var s = function(h, d, c) {
      Kt(r.rscratch, h, d, c), Kt(r.rstyle, h, d, c);
    };
    s("labelX", null, e.x), s("labelY", null, e.y);
    var o = Cu(a.midDispX, a.midDispY);
    s("labelAutoAngle", null, o);
    var u = function f() {
      if (f.cache)
        return f.cache;
      for (var h = [], d = 0; d + 5 < a.allpts.length; d += 4) {
        var c = {
          x: a.allpts[d],
          y: a.allpts[d + 1]
        }, v = {
          x: a.allpts[d + 2],
          y: a.allpts[d + 3]
        }, p = {
          x: a.allpts[d + 4],
          y: a.allpts[d + 5]
        };
        h.push({
          p0: c,
          p1: v,
          p2: p,
          startDist: 0,
          length: 0,
          segments: []
        });
      }
      var g = r.rstyle.bezierPts, y = n.bezierProjPcts.length;
      function b(E, x, w, D, L) {
        var A = gr(x, w), I = E.segments[E.segments.length - 1], O = {
          p0: x,
          p1: w,
          t0: D,
          t1: L,
          startDist: I ? I.startDist + I.length : 0,
          length: A
        };
        E.segments.push(O), E.length += A;
      }
      for (var m = 0; m < h.length; m++) {
        var T = h[m], C = h[m - 1];
        C && (T.startDist = C.startDist + C.length), b(T, T.p0, g[m * y], 0, n.bezierProjPcts[0]);
        for (var S = 0; S < y - 1; S++)
          b(T, g[m * y + S], g[m * y + S + 1], n.bezierProjPcts[S], n.bezierProjPcts[S + 1]);
        b(T, g[m * y + y - 1], T.p2, n.bezierProjPcts[y - 1], 1);
      }
      return f.cache = h;
    }, l = function(h) {
      var d, c = h === "source";
      if (i[h]) {
        var v = t.pstyle(h + "-text-offset").pfValue;
        switch (a.edgeType) {
          case "self":
          case "compound":
          case "bezier":
          case "multibezier": {
            for (var p = u(), g, y = 0, b = 0, m = 0; m < p.length; m++) {
              for (var T = p[c ? m : p.length - 1 - m], C = 0; C < T.segments.length; C++) {
                var S = T.segments[c ? C : T.segments.length - 1 - C], E = m === p.length - 1 && C === T.segments.length - 1;
                if (y = b, b += S.length, b >= v || E) {
                  g = {
                    cp: T,
                    segment: S
                  };
                  break;
                }
              }
              if (g)
                break;
            }
            var x = g.cp, w = g.segment, D = (v - y) / w.length, L = w.t1 - w.t0, A = c ? w.t0 + L * D : w.t1 - L * D;
            A = ga(0, A, 1), e = Rr(x.p0, x.p1, x.p2, A), d = Jg(x.p0, x.p1, x.p2, A);
            break;
          }
          case "straight":
          case "segments":
          case "haystack": {
            for (var I = 0, O, M, R, k, P = a.allpts.length, B = 0; B + 3 < P && (c ? (R = {
              x: a.allpts[B],
              y: a.allpts[B + 1]
            }, k = {
              x: a.allpts[B + 2],
              y: a.allpts[B + 3]
            }) : (R = {
              x: a.allpts[P - 2 - B],
              y: a.allpts[P - 1 - B]
            }, k = {
              x: a.allpts[P - 4 - B],
              y: a.allpts[P - 3 - B]
            }), O = gr(R, k), M = I, I += O, !(I >= v)); B += 2)
              ;
            var V = v - M, F = V / O;
            F = ga(0, F, 1), e = ah(R, k, F), d = Du(R, k);
            break;
          }
        }
        s("labelX", h, e.x), s("labelY", h, e.y), s("labelAutoAngle", h, d);
      }
    };
    l("source"), l("target"), this.applyLabelDimensions(t);
  }
};
Gt.applyLabelDimensions = function(t) {
  this.applyPrefixedLabelDimensions(t), t.isEdge() && (this.applyPrefixedLabelDimensions(t, "source"), this.applyPrefixedLabelDimensions(t, "target"));
};
Gt.applyPrefixedLabelDimensions = function(t, e) {
  var r = t._private, a = this.getLabelText(t, e), n = this.calculateLabelDimensions(t, a), i = t.pstyle("line-height").pfValue, s = t.pstyle("text-wrap").strValue, o = At(r.rscratch, "labelWrapCachedLines", e) || [], u = s !== "wrap" ? 1 : Math.max(o.length, 1), l = n.height / u, f = l * i, h = n.width, d = n.height + (u - 1) * (i - 1) * l;
  Kt(r.rstyle, "labelWidth", e, h), Kt(r.rscratch, "labelWidth", e, h), Kt(r.rstyle, "labelHeight", e, d), Kt(r.rscratch, "labelHeight", e, d), Kt(r.rscratch, "labelLineHeight", e, f);
};
Gt.getLabelText = function(t, e) {
  var r = t._private, a = e ? e + "-" : "", n = t.pstyle(a + "label").strValue, i = t.pstyle("text-transform").value, s = function(V, F) {
    return F ? (Kt(r.rscratch, V, e, F), F) : At(r.rscratch, V, e);
  };
  if (!n)
    return "";
  i == "none" || (i == "uppercase" ? n = n.toUpperCase() : i == "lowercase" && (n = n.toLowerCase()));
  var o = t.pstyle("text-wrap").value;
  if (o === "wrap") {
    var u = s("labelKey");
    if (u != null && s("labelWrapKey") === u)
      return s("labelWrapCachedText");
    for (var l = "​", f = n.split(`
`), h = t.pstyle("text-max-width").pfValue, d = t.pstyle("text-overflow-wrap").value, c = d === "anywhere", v = [], p = /[\s\u200b]+/, g = c ? "" : " ", y = 0; y < f.length; y++) {
      var b = f[y], m = this.calculateLabelDimensions(t, b), T = m.width;
      if (c) {
        var C = b.split("").join(l);
        b = C;
      }
      if (T > h) {
        for (var S = b.split(p), E = "", x = 0; x < S.length; x++) {
          var w = S[x], D = E.length === 0 ? w : E + g + w, L = this.calculateLabelDimensions(t, D), A = L.width;
          A <= h ? E += w + g : (E && v.push(E), E = w + g);
        }
        E.match(/^[\s\u200b]+$/) || v.push(E);
      } else
        v.push(b);
    }
    s("labelWrapCachedLines", v), n = s("labelWrapCachedText", v.join(`
`)), s("labelWrapKey", u);
  } else if (o === "ellipsis") {
    var I = t.pstyle("text-max-width").pfValue, O = "", M = "…", R = !1;
    if (this.calculateLabelDimensions(t, n).width < I)
      return n;
    for (var k = 0; k < n.length; k++) {
      var P = this.calculateLabelDimensions(t, O + n[k] + M).width;
      if (P > I)
        break;
      O += n[k], k === n.length - 1 && (R = !0);
    }
    return R || (O += M), O;
  }
  return n;
};
Gt.getLabelJustification = function(t) {
  var e = t.pstyle("text-justification").strValue, r = t.pstyle("text-halign").strValue;
  if (e === "auto")
    if (t.isNode())
      switch (r) {
        case "left":
          return "right";
        case "right":
          return "left";
        default:
          return "center";
      }
    else
      return "center";
  else
    return e;
};
Gt.calculateLabelDimensions = function(t, e) {
  var r = this, a = dr(e, t._private.labelDimsKey), n = r.labelDimCache || (r.labelDimCache = []), i = n[a];
  if (i != null)
    return i;
  var s = 0, o = t.pstyle("font-style").strValue, u = t.pstyle("font-size").pfValue, l = t.pstyle("font-family").strValue, f = t.pstyle("font-weight").strValue, h = this.labelCalcCanvas, d = this.labelCalcCanvasContext;
  if (!h) {
    h = this.labelCalcCanvas = document.createElement("canvas"), d = this.labelCalcCanvasContext = h.getContext("2d");
    var c = h.style;
    c.position = "absolute", c.left = "-9999px", c.top = "-9999px", c.zIndex = "-1", c.visibility = "hidden", c.pointerEvents = "none";
  }
  d.font = "".concat(o, " ").concat(f, " ").concat(u, "px ").concat(l);
  for (var v = 0, p = 0, g = e.split(`
`), y = 0; y < g.length; y++) {
    var b = g[y], m = d.measureText(b), T = Math.ceil(m.width), C = u;
    v = Math.max(T, v), p += C;
  }
  return v += s, p += s, n[a] = {
    width: v,
    height: p
  };
};
Gt.calculateLabelAngle = function(t, e) {
  var r = t._private, a = r.rscratch, n = t.isEdge(), i = e ? e + "-" : "", s = t.pstyle(i + "text-rotation"), o = s.strValue;
  return o === "none" ? 0 : n && o === "autorotate" ? a.labelAutoAngle : o === "autorotate" ? 0 : s.pfValue;
};
Gt.calculateLabelAngles = function(t) {
  var e = this, r = t.isEdge(), a = t._private, n = a.rscratch;
  n.labelAngle = e.calculateLabelAngle(t), r && (n.sourceLabelAngle = e.calculateLabelAngle(t, "source"), n.targetLabelAngle = e.calculateLabelAngle(t, "target"));
};
var Su = {}, Xs = 28, qs = !1;
Su.getNodeShape = function(t) {
  var e = this, r = t.pstyle("shape").value;
  if (r === "cutrectangle" && (t.width() < Xs || t.height() < Xs))
    return qs || (Ne("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead"), qs = !0), "rectangle";
  if (t.isParent())
    return r === "rectangle" || r === "roundrectangle" || r === "round-rectangle" || r === "cutrectangle" || r === "cut-rectangle" || r === "barrel" ? r : "rectangle";
  if (r === "polygon") {
    var a = t.pstyle("shape-polygon-points").value;
    return e.nodeShapes.makePolygon(a).name;
  }
  return r;
};
var On = {};
On.registerCalculationListeners = function() {
  var t = this.cy, e = t.collection(), r = this, a = function(s) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    if (e.merge(s), o)
      for (var u = 0; u < s.length; u++) {
        var l = s[u], f = l._private, h = f.rstyle;
        h.clean = !1, h.cleanConnected = !1;
      }
  };
  r.binder(t).on("bounds.* dirty.*", function(s) {
    var o = s.target;
    a(o);
  }).on("style.* background.*", function(s) {
    var o = s.target;
    a(o, !1);
  });
  var n = function(s) {
    if (s) {
      var o = r.onUpdateEleCalcsFns;
      e.cleanStyle();
      for (var u = 0; u < e.length; u++) {
        var l = e[u], f = l._private.rstyle;
        l.isNode() && !f.cleanConnected && (a(l.connectedEdges()), f.cleanConnected = !0);
      }
      if (o)
        for (var h = 0; h < o.length; h++) {
          var d = o[h];
          d(s, e);
        }
      r.recalculateRenderedStyle(e), e = t.collection();
    }
  };
  r.flushRenderedStyleQueue = function() {
    n(!0);
  }, r.beforeRender(n, r.beforeRenderPriorities.eleCalcs);
};
On.onUpdateEleCalcs = function(t) {
  var e = this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || [];
  e.push(t);
};
On.recalculateRenderedStyle = function(t, e) {
  var r = function(T) {
    return T._private.rstyle.cleanConnected;
  }, a = [], n = [];
  if (!this.destroyed) {
    e === void 0 && (e = !0);
    for (var i = 0; i < t.length; i++) {
      var s = t[i], o = s._private, u = o.rstyle;
      s.isEdge() && (!r(s.source()) || !r(s.target())) && (u.clean = !1), !(e && u.clean || s.removed()) && s.pstyle("display").value !== "none" && (o.group === "nodes" ? n.push(s) : a.push(s), u.clean = !0);
    }
    for (var l = 0; l < n.length; l++) {
      var f = n[l], h = f._private, d = h.rstyle, c = f.position();
      this.recalculateNodeLabelProjection(f), d.nodeX = c.x, d.nodeY = c.y, d.nodeW = f.pstyle("width").pfValue, d.nodeH = f.pstyle("height").pfValue;
    }
    this.recalculateEdgeProjections(a);
    for (var v = 0; v < a.length; v++) {
      var p = a[v], g = p._private, y = g.rstyle, b = g.rscratch;
      y.srcX = b.arrowStartX, y.srcY = b.arrowStartY, y.tgtX = b.arrowEndX, y.tgtY = b.arrowEndY, y.midX = b.midX, y.midY = b.midY, y.labelAngle = b.labelAngle, y.sourceLabelAngle = b.sourceLabelAngle, y.targetLabelAngle = b.targetLabelAngle;
    }
  }
};
var Nn = {};
Nn.updateCachedGrabbedEles = function() {
  var t = this.cachedZSortedEles;
  if (t) {
    t.drag = [], t.nondrag = [];
    for (var e = [], r = 0; r < t.length; r++) {
      var a = t[r], n = a._private.rscratch;
      a.grabbed() && !a.isParent() ? e.push(a) : n.inDragLayer ? t.drag.push(a) : t.nondrag.push(a);
    }
    for (var r = 0; r < e.length; r++) {
      var a = e[r];
      t.drag.push(a);
    }
  }
};
Nn.invalidateCachedZSortedEles = function() {
  this.cachedZSortedEles = null;
};
Nn.getCachedZSortedEles = function(t) {
  if (t || !this.cachedZSortedEles) {
    var e = this.cy.mutableElements().toArray();
    e.sort(lu), e.interactive = e.filter(function(r) {
      return r.interactive();
    }), this.cachedZSortedEles = e, this.updateCachedGrabbedEles();
  } else
    e = this.cachedZSortedEles;
  return e;
};
var Lu = {};
[wr, hn, ut, Aa, Pi, Gt, Su, On, Nn].forEach(function(t) {
  be(Lu, t);
});
var Au = {};
Au.getCachedImage = function(t, e, r) {
  var a = this, n = a.imageCache = a.imageCache || {}, i = n[t];
  if (i)
    return i.image.complete || i.image.addEventListener("load", r), i.image;
  i = n[t] = n[t] || {};
  var s = i.image = new Image();
  s.addEventListener("load", r), s.addEventListener("error", function() {
    s.error = !0;
  });
  var o = "data:", u = t.substring(0, o.length).toLowerCase() === o;
  return u || (e = e === "null" ? null : e, s.crossOrigin = e), s.src = t, s;
};
var Wr = {};
Wr.registerBinding = function(t, e, r, a) {
  var n = Array.prototype.slice.apply(arguments, [1]), i = this.binder(t);
  return i.on.apply(i, n);
};
Wr.binder = function(t) {
  var e = this, r = e.cy.window(), a = t === r || t === r.document || t === r.document.body || xl(t);
  if (e.supportsPassiveEvents == null) {
    var n = !1;
    try {
      var i = Object.defineProperty({}, "passive", {
        get: function() {
          return n = !0, !0;
        }
      });
      r.addEventListener("test", null, i);
    } catch (o) {
    }
    e.supportsPassiveEvents = n;
  }
  var s = function(u, l, f) {
    var h = Array.prototype.slice.call(arguments);
    return a && e.supportsPassiveEvents && (h[2] = {
      capture: f != null ? f : !1,
      passive: !1,
      once: !1
    }), e.bindings.push({
      target: t,
      args: h
    }), (t.addEventListener || t.on).apply(t, h), this;
  };
  return {
    on: s,
    addEventListener: s,
    addListener: s,
    bind: s
  };
};
Wr.nodeIsDraggable = function(t) {
  return t && t.isNode() && !t.locked() && t.grabbable();
};
Wr.nodeIsGrabbable = function(t) {
  return this.nodeIsDraggable(t) && t.interactive();
};
Wr.load = function() {
  var t = this, e = t.cy.window(), r = function(N) {
    return N.selected();
  }, a = function(N, $, Q, K) {
    N == null && (N = t.cy);
    for (var X = 0; X < $.length; X++) {
      var ae = $[X];
      N.emit({
        originalEvent: Q,
        type: ae,
        position: K
      });
    }
  }, n = function(N) {
    return N.shiftKey || N.metaKey || N.ctrlKey;
  }, i = function(N, $) {
    var Q = !0;
    if (t.cy.hasCompoundNodes() && N && N.pannable())
      for (var K = 0; $ && K < $.length; K++) {
        var N = $[K];
        if (N.isNode() && N.isParent() && !N.pannable()) {
          Q = !1;
          break;
        }
      }
    else
      Q = !0;
    return Q;
  }, s = function(N) {
    N[0]._private.grabbed = !0;
  }, o = function(N) {
    N[0]._private.grabbed = !1;
  }, u = function(N) {
    N[0]._private.rscratch.inDragLayer = !0;
  }, l = function(N) {
    N[0]._private.rscratch.inDragLayer = !1;
  }, f = function(N) {
    N[0]._private.rscratch.isGrabTarget = !0;
  }, h = function(N) {
    N[0]._private.rscratch.isGrabTarget = !1;
  }, d = function(N, $) {
    var Q = $.addToList, K = Q.has(N);
    !K && N.grabbable() && !N.locked() && (Q.merge(N), s(N));
  }, c = function(N, $) {
    if (N.cy().hasCompoundNodes() && !($.inDragLayer == null && $.addToList == null)) {
      var Q = N.descendants();
      $.inDragLayer && (Q.forEach(u), Q.connectedEdges().forEach(u)), $.addToList && d(Q, $);
    }
  }, v = function(N, $) {
    $ = $ || {};
    var Q = N.cy().hasCompoundNodes();
    $.inDragLayer && (N.forEach(u), N.neighborhood().stdFilter(function(K) {
      return !Q || K.isEdge();
    }).forEach(u)), $.addToList && N.forEach(function(K) {
      d(K, $);
    }), c(N, $), y(N, {
      inDragLayer: $.inDragLayer
    }), t.updateCachedGrabbedEles();
  }, p = v, g = function(N) {
    N && (t.getCachedZSortedEles().forEach(function($) {
      o($), l($), h($);
    }), t.updateCachedGrabbedEles());
  }, y = function(N, $) {
    if (!($.inDragLayer == null && $.addToList == null) && N.cy().hasCompoundNodes()) {
      var Q = N.ancestors().orphans();
      if (!Q.same(N)) {
        var K = Q.descendants().spawnSelf().merge(Q).unmerge(N).unmerge(N.descendants()), X = K.connectedEdges();
        $.inDragLayer && (X.forEach(u), K.forEach(u)), $.addToList && K.forEach(function(ae) {
          d(ae, $);
        });
      }
    }
  }, b = function() {
    document.activeElement != null && document.activeElement.blur != null && document.activeElement.blur();
  }, m = typeof MutationObserver != "undefined", T = typeof ResizeObserver != "undefined";
  m ? (t.removeObserver = new MutationObserver(function(j) {
    for (var N = 0; N < j.length; N++) {
      var $ = j[N], Q = $.removedNodes;
      if (Q)
        for (var K = 0; K < Q.length; K++) {
          var X = Q[K];
          if (X === t.container) {
            t.destroy();
            break;
          }
        }
    }
  }), t.container.parentNode && t.removeObserver.observe(t.container.parentNode, {
    childList: !0
  })) : t.registerBinding(t.container, "DOMNodeRemoved", function(j) {
    t.destroy();
  });
  var C = gn(function() {
    t.cy.resize();
  }, 100);
  m && (t.styleObserver = new MutationObserver(C), t.styleObserver.observe(t.container, {
    attributes: !0
  })), t.registerBinding(e, "resize", C), T && (t.resizeObserver = new ResizeObserver(C), t.resizeObserver.observe(t.container));
  var S = function(N, $) {
    for (; N != null; )
      $(N), N = N.parentNode;
  }, E = function() {
    t.invalidateContainerClientCoordsCache();
  };
  S(t.container, function(j) {
    t.registerBinding(j, "transitionend", E), t.registerBinding(j, "animationend", E), t.registerBinding(j, "scroll", E);
  }), t.registerBinding(t.container, "contextmenu", function(j) {
    j.preventDefault();
  });
  var x = function() {
    return t.selection[4] !== 0;
  }, w = function(N) {
    for (var $ = t.findContainerClientCoords(), Q = $[0], K = $[1], X = $[2], ae = $[3], Z = N.touches ? N.touches : [N], re = !1, pe = 0; pe < Z.length; pe++) {
      var ye = Z[pe];
      if (Q <= ye.clientX && ye.clientX <= Q + X && K <= ye.clientY && ye.clientY <= K + ae) {
        re = !0;
        break;
      }
    }
    if (!re)
      return !1;
    for (var he = t.container, Ee = N.target, le = Ee.parentNode, de = !1; le; ) {
      if (le === he) {
        de = !0;
        break;
      }
      le = le.parentNode;
    }
    return !!de;
  };
  t.registerBinding(t.container, "mousedown", function(N) {
    if (w(N)) {
      N.preventDefault(), b(), t.hoverData.capture = !0, t.hoverData.which = N.which;
      var $ = t.cy, Q = [N.clientX, N.clientY], K = t.projectIntoViewport(Q[0], Q[1]), X = t.selection, ae = t.findNearestElements(K[0], K[1], !0, !1), Z = ae[0], re = t.dragData.possibleDragElements;
      t.hoverData.mdownPos = K, t.hoverData.mdownGPos = Q;
      var pe = function() {
        t.hoverData.tapholdCancelled = !1, clearTimeout(t.hoverData.tapholdTimeout), t.hoverData.tapholdTimeout = setTimeout(function() {
          if (!t.hoverData.tapholdCancelled) {
            var Fe = t.hoverData.down;
            Fe ? Fe.emit({
              originalEvent: N,
              type: "taphold",
              position: {
                x: K[0],
                y: K[1]
              }
            }) : $.emit({
              originalEvent: N,
              type: "taphold",
              position: {
                x: K[0],
                y: K[1]
              }
            });
          }
        }, t.tapholdDuration);
      };
      if (N.which == 3) {
        t.hoverData.cxtStarted = !0;
        var ye = {
          originalEvent: N,
          type: "cxttapstart",
          position: {
            x: K[0],
            y: K[1]
          }
        };
        Z ? (Z.activate(), Z.emit(ye), t.hoverData.down = Z) : $.emit(ye), t.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime(), t.hoverData.cxtDragged = !1;
      } else if (N.which == 1) {
        Z && Z.activate();
        {
          if (Z != null && t.nodeIsGrabbable(Z)) {
            var he = function(Fe) {
              return {
                originalEvent: N,
                type: Fe,
                position: {
                  x: K[0],
                  y: K[1]
                }
              };
            }, Ee = function(Fe) {
              Fe.emit(he("grab"));
            };
            if (f(Z), !Z.selected())
              re = t.dragData.possibleDragElements = $.collection(), p(Z, {
                addToList: re
              }), Z.emit(he("grabon")).emit(he("grab"));
            else {
              re = t.dragData.possibleDragElements = $.collection();
              var le = $.$(function(de) {
                return de.isNode() && de.selected() && t.nodeIsGrabbable(de);
              });
              v(le, {
                addToList: re
              }), Z.emit(he("grabon")), le.forEach(Ee);
            }
            t.redrawHint("eles", !0), t.redrawHint("drag", !0);
          }
          t.hoverData.down = Z, t.hoverData.downs = ae, t.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime();
        }
        a(Z, ["mousedown", "tapstart", "vmousedown"], N, {
          x: K[0],
          y: K[1]
        }), Z == null ? (X[4] = 1, t.data.bgActivePosistion = {
          x: K[0],
          y: K[1]
        }, t.redrawHint("select", !0), t.redraw()) : Z.pannable() && (X[4] = 1), pe();
      }
      X[0] = X[2] = K[0], X[1] = X[3] = K[1];
    }
  }, !1), t.registerBinding(e, "mousemove", function(N) {
    var $ = t.hoverData.capture;
    if (!(!$ && !w(N))) {
      var Q = !1, K = t.cy, X = K.zoom(), ae = [N.clientX, N.clientY], Z = t.projectIntoViewport(ae[0], ae[1]), re = t.hoverData.mdownPos, pe = t.hoverData.mdownGPos, ye = t.selection, he = null;
      !t.hoverData.draggingEles && !t.hoverData.dragging && !t.hoverData.selecting && (he = t.findNearestElement(Z[0], Z[1], !0, !1));
      var Ee = t.hoverData.last, le = t.hoverData.down, de = [Z[0] - ye[2], Z[1] - ye[3]], Fe = t.dragData.possibleDragElements, Me;
      if (pe) {
        var lt = ae[0] - pe[0], Ze = lt * lt, Ue = ae[1] - pe[1], ct = Ue * Ue, Qe = Ze + ct;
        t.hoverData.isOverThresholdDrag = Me = Qe >= t.desktopTapThreshold2;
      }
      var ft = n(N);
      Me && (t.hoverData.tapholdCancelled = !0);
      var xt = function() {
        var Mt = t.hoverData.dragDelta = t.hoverData.dragDelta || [];
        Mt.length === 0 ? (Mt.push(de[0]), Mt.push(de[1])) : (Mt[0] += de[0], Mt[1] += de[1]);
      };
      Q = !0, a(he, ["mousemove", "vmousemove", "tapdrag"], N, {
        x: Z[0],
        y: Z[1]
      });
      var mt = function() {
        t.data.bgActivePosistion = void 0, t.hoverData.selecting || K.emit({
          originalEvent: N,
          type: "boxstart",
          position: {
            x: Z[0],
            y: Z[1]
          }
        }), ye[4] = 1, t.hoverData.selecting = !0, t.redrawHint("select", !0), t.redraw();
      };
      if (t.hoverData.which === 3) {
        if (Me) {
          var vt = {
            originalEvent: N,
            type: "cxtdrag",
            position: {
              x: Z[0],
              y: Z[1]
            }
          };
          le ? le.emit(vt) : K.emit(vt), t.hoverData.cxtDragged = !0, (!t.hoverData.cxtOver || he !== t.hoverData.cxtOver) && (t.hoverData.cxtOver && t.hoverData.cxtOver.emit({
            originalEvent: N,
            type: "cxtdragout",
            position: {
              x: Z[0],
              y: Z[1]
            }
          }), t.hoverData.cxtOver = he, he && he.emit({
            originalEvent: N,
            type: "cxtdragover",
            position: {
              x: Z[0],
              y: Z[1]
            }
          }));
        }
      } else if (t.hoverData.dragging) {
        if (Q = !0, K.panningEnabled() && K.userPanningEnabled()) {
          var It;
          if (t.hoverData.justStartedPan) {
            var Vt = t.hoverData.mdownPos;
            It = {
              x: (Z[0] - Vt[0]) * X,
              y: (Z[1] - Vt[1]) * X
            }, t.hoverData.justStartedPan = !1;
          } else
            It = {
              x: de[0] * X,
              y: de[1] * X
            };
          K.panBy(It), K.emit("dragpan"), t.hoverData.dragged = !0;
        }
        Z = t.projectIntoViewport(N.clientX, N.clientY);
      } else if (ye[4] == 1 && (le == null || le.pannable())) {
        if (Me) {
          if (!t.hoverData.dragging && K.boxSelectionEnabled() && (ft || !K.panningEnabled() || !K.userPanningEnabled()))
            mt();
          else if (!t.hoverData.selecting && K.panningEnabled() && K.userPanningEnabled()) {
            var Tt = i(le, t.hoverData.downs);
            Tt && (t.hoverData.dragging = !0, t.hoverData.justStartedPan = !0, ye[4] = 0, t.data.bgActivePosistion = Ir(re), t.redrawHint("select", !0), t.redraw());
          }
          le && le.pannable() && le.active() && le.unactivate();
        }
      } else {
        if (le && le.pannable() && le.active() && le.unactivate(), (!le || !le.grabbed()) && he != Ee && (Ee && a(Ee, ["mouseout", "tapdragout"], N, {
          x: Z[0],
          y: Z[1]
        }), he && a(he, ["mouseover", "tapdragover"], N, {
          x: Z[0],
          y: Z[1]
        }), t.hoverData.last = he), le)
          if (Me) {
            if (K.boxSelectionEnabled() && ft)
              le && le.grabbed() && (g(Fe), le.emit("freeon"), Fe.emit("free"), t.dragData.didDrag && (le.emit("dragfreeon"), Fe.emit("dragfree"))), mt();
            else if (le && le.grabbed() && t.nodeIsDraggable(le)) {
              var $e = !t.dragData.didDrag;
              $e && t.redrawHint("eles", !0), t.dragData.didDrag = !0, t.hoverData.draggingEles || v(Fe, {
                inDragLayer: !0
              });
              var We = {
                x: 0,
                y: 0
              };
              if (ne(de[0]) && ne(de[1]) && (We.x += de[0], We.y += de[1], $e)) {
                var at = t.hoverData.dragDelta;
                at && ne(at[0]) && ne(at[1]) && (We.x += at[0], We.y += at[1]);
              }
              t.hoverData.draggingEles = !0, Fe.silentShift(We).emit("position drag"), t.redrawHint("drag", !0), t.redraw();
            }
          } else
            xt();
        Q = !0;
      }
      if (ye[2] = Z[0], ye[3] = Z[1], Q)
        return N.stopPropagation && N.stopPropagation(), N.preventDefault && N.preventDefault(), !1;
    }
  }, !1);
  var D, L, A;
  t.registerBinding(e, "mouseup", function(N) {
    var $ = t.hoverData.capture;
    if ($) {
      t.hoverData.capture = !1;
      var Q = t.cy, K = t.projectIntoViewport(N.clientX, N.clientY), X = t.selection, ae = t.findNearestElement(K[0], K[1], !0, !1), Z = t.dragData.possibleDragElements, re = t.hoverData.down, pe = n(N);
      if (t.data.bgActivePosistion && (t.redrawHint("select", !0), t.redraw()), t.hoverData.tapholdCancelled = !0, t.data.bgActivePosistion = void 0, re && re.unactivate(), t.hoverData.which === 3) {
        var ye = {
          originalEvent: N,
          type: "cxttapend",
          position: {
            x: K[0],
            y: K[1]
          }
        };
        if (re ? re.emit(ye) : Q.emit(ye), !t.hoverData.cxtDragged) {
          var he = {
            originalEvent: N,
            type: "cxttap",
            position: {
              x: K[0],
              y: K[1]
            }
          };
          re ? re.emit(he) : Q.emit(he);
        }
        t.hoverData.cxtDragged = !1, t.hoverData.which = null;
      } else if (t.hoverData.which === 1) {
        if (a(ae, ["mouseup", "tapend", "vmouseup"], N, {
          x: K[0],
          y: K[1]
        }), !t.dragData.didDrag && // didn't move a node around
        !t.hoverData.dragged && // didn't pan
        !t.hoverData.selecting && // not box selection
        !t.hoverData.isOverThresholdDrag && (a(re, ["click", "tap", "vclick"], N, {
          x: K[0],
          y: K[1]
        }), L = !1, N.timeStamp - A <= Q.multiClickDebounceTime() ? (D && clearTimeout(D), L = !0, A = null, a(re, ["dblclick", "dbltap", "vdblclick"], N, {
          x: K[0],
          y: K[1]
        })) : (D = setTimeout(function() {
          L || a(re, ["oneclick", "onetap", "voneclick"], N, {
            x: K[0],
            y: K[1]
          });
        }, Q.multiClickDebounceTime()), A = N.timeStamp)), re == null && !t.dragData.didDrag && !t.hoverData.selecting && !t.hoverData.dragged && !n(N) && (Q.$(r).unselect(["tapunselect"]), Z.length > 0 && t.redrawHint("eles", !0), t.dragData.possibleDragElements = Z = Q.collection()), ae == re && !t.dragData.didDrag && !t.hoverData.selecting && ae != null && ae._private.selectable && (t.hoverData.dragging || (Q.selectionType() === "additive" || pe ? ae.selected() ? ae.unselect(["tapunselect"]) : ae.select(["tapselect"]) : pe || (Q.$(r).unmerge(ae).unselect(["tapunselect"]), ae.select(["tapselect"]))), t.redrawHint("eles", !0)), t.hoverData.selecting) {
          var Ee = Q.collection(t.getAllInBox(X[0], X[1], X[2], X[3]));
          t.redrawHint("select", !0), Ee.length > 0 && t.redrawHint("eles", !0), Q.emit({
            type: "boxend",
            originalEvent: N,
            position: {
              x: K[0],
              y: K[1]
            }
          });
          var le = function(Me) {
            return Me.selectable() && !Me.selected();
          };
          Q.selectionType() === "additive" || pe || Q.$(r).unmerge(Ee).unselect(), Ee.emit("box").stdFilter(le).select().emit("boxselect"), t.redraw();
        }
        if (t.hoverData.dragging && (t.hoverData.dragging = !1, t.redrawHint("select", !0), t.redrawHint("eles", !0), t.redraw()), !X[4]) {
          t.redrawHint("drag", !0), t.redrawHint("eles", !0);
          var de = re && re.grabbed();
          g(Z), de && (re.emit("freeon"), Z.emit("free"), t.dragData.didDrag && (re.emit("dragfreeon"), Z.emit("dragfree")));
        }
      }
      X[4] = 0, t.hoverData.down = null, t.hoverData.cxtStarted = !1, t.hoverData.draggingEles = !1, t.hoverData.selecting = !1, t.hoverData.isOverThresholdDrag = !1, t.dragData.didDrag = !1, t.hoverData.dragged = !1, t.hoverData.dragDelta = [], t.hoverData.mdownPos = null, t.hoverData.mdownGPos = null;
    }
  }, !1);
  var I = function(N) {
    if (!t.scrollingPage) {
      var $ = t.cy, Q = $.zoom(), K = $.pan(), X = t.projectIntoViewport(N.clientX, N.clientY), ae = [X[0] * Q + K.x, X[1] * Q + K.y];
      if (t.hoverData.draggingEles || t.hoverData.dragging || t.hoverData.cxtStarted || x()) {
        N.preventDefault();
        return;
      }
      if ($.panningEnabled() && $.userPanningEnabled() && $.zoomingEnabled() && $.userZoomingEnabled()) {
        N.preventDefault(), t.data.wheelZooming = !0, clearTimeout(t.data.wheelTimeout), t.data.wheelTimeout = setTimeout(function() {
          t.data.wheelZooming = !1, t.redrawHint("eles", !0), t.redraw();
        }, 150);
        var Z;
        N.deltaY != null ? Z = N.deltaY / -250 : N.wheelDeltaY != null ? Z = N.wheelDeltaY / 1e3 : Z = N.wheelDelta / 1e3, Z = Z * t.wheelSensitivity;
        var re = N.deltaMode === 1;
        re && (Z *= 33);
        var pe = $.zoom() * Math.pow(10, Z);
        N.type === "gesturechange" && (pe = t.gestureStartZoom * N.scale), $.zoom({
          level: pe,
          renderedPosition: {
            x: ae[0],
            y: ae[1]
          }
        }), $.emit(N.type === "gesturechange" ? "pinchzoom" : "scrollzoom");
      }
    }
  };
  t.registerBinding(t.container, "wheel", I, !0), t.registerBinding(e, "scroll", function(N) {
    t.scrollingPage = !0, clearTimeout(t.scrollingPageTimeout), t.scrollingPageTimeout = setTimeout(function() {
      t.scrollingPage = !1;
    }, 250);
  }, !0), t.registerBinding(t.container, "gesturestart", function(N) {
    t.gestureStartZoom = t.cy.zoom(), t.hasTouchStarted || N.preventDefault();
  }, !0), t.registerBinding(t.container, "gesturechange", function(j) {
    t.hasTouchStarted || I(j);
  }, !0), t.registerBinding(t.container, "mouseout", function(N) {
    var $ = t.projectIntoViewport(N.clientX, N.clientY);
    t.cy.emit({
      originalEvent: N,
      type: "mouseout",
      position: {
        x: $[0],
        y: $[1]
      }
    });
  }, !1), t.registerBinding(t.container, "mouseover", function(N) {
    var $ = t.projectIntoViewport(N.clientX, N.clientY);
    t.cy.emit({
      originalEvent: N,
      type: "mouseover",
      position: {
        x: $[0],
        y: $[1]
      }
    });
  }, !1);
  var O, M, R, k, P, B, V, F, G, Y, _, q, U, z = function(N, $, Q, K) {
    return Math.sqrt((Q - N) * (Q - N) + (K - $) * (K - $));
  }, H = function(N, $, Q, K) {
    return (Q - N) * (Q - N) + (K - $) * (K - $);
  }, W;
  t.registerBinding(t.container, "touchstart", W = function(N) {
    if (t.hasTouchStarted = !0, !!w(N)) {
      b(), t.touchData.capture = !0, t.data.bgActivePosistion = void 0;
      var $ = t.cy, Q = t.touchData.now, K = t.touchData.earlier;
      if (N.touches[0]) {
        var X = t.projectIntoViewport(N.touches[0].clientX, N.touches[0].clientY);
        Q[0] = X[0], Q[1] = X[1];
      }
      if (N.touches[1]) {
        var X = t.projectIntoViewport(N.touches[1].clientX, N.touches[1].clientY);
        Q[2] = X[0], Q[3] = X[1];
      }
      if (N.touches[2]) {
        var X = t.projectIntoViewport(N.touches[2].clientX, N.touches[2].clientY);
        Q[4] = X[0], Q[5] = X[1];
      }
      if (N.touches[1]) {
        t.touchData.singleTouchMoved = !0, g(t.dragData.touchDragEles);
        var ae = t.findContainerClientCoords();
        G = ae[0], Y = ae[1], _ = ae[2], q = ae[3], O = N.touches[0].clientX - G, M = N.touches[0].clientY - Y, R = N.touches[1].clientX - G, k = N.touches[1].clientY - Y, U = 0 <= O && O <= _ && 0 <= R && R <= _ && 0 <= M && M <= q && 0 <= k && k <= q;
        var Z = $.pan(), re = $.zoom();
        P = z(O, M, R, k), B = H(O, M, R, k), V = [(O + R) / 2, (M + k) / 2], F = [(V[0] - Z.x) / re, (V[1] - Z.y) / re];
        var pe = 200, ye = pe * pe;
        if (B < ye && !N.touches[2]) {
          var he = t.findNearestElement(Q[0], Q[1], !0, !0), Ee = t.findNearestElement(Q[2], Q[3], !0, !0);
          he && he.isNode() ? (he.activate().emit({
            originalEvent: N,
            type: "cxttapstart",
            position: {
              x: Q[0],
              y: Q[1]
            }
          }), t.touchData.start = he) : Ee && Ee.isNode() ? (Ee.activate().emit({
            originalEvent: N,
            type: "cxttapstart",
            position: {
              x: Q[0],
              y: Q[1]
            }
          }), t.touchData.start = Ee) : $.emit({
            originalEvent: N,
            type: "cxttapstart",
            position: {
              x: Q[0],
              y: Q[1]
            }
          }), t.touchData.start && (t.touchData.start._private.grabbed = !1), t.touchData.cxt = !0, t.touchData.cxtDragged = !1, t.data.bgActivePosistion = void 0, t.redraw();
          return;
        }
      }
      if (N.touches[2])
        $.boxSelectionEnabled() && N.preventDefault();
      else if (!N.touches[1]) {
        if (N.touches[0]) {
          var le = t.findNearestElements(Q[0], Q[1], !0, !0), de = le[0];
          if (de != null && (de.activate(), t.touchData.start = de, t.touchData.starts = le, t.nodeIsGrabbable(de))) {
            var Fe = t.dragData.touchDragEles = $.collection(), Me = null;
            t.redrawHint("eles", !0), t.redrawHint("drag", !0), de.selected() ? (Me = $.$(function(Qe) {
              return Qe.selected() && t.nodeIsGrabbable(Qe);
            }), v(Me, {
              addToList: Fe
            })) : p(de, {
              addToList: Fe
            }), f(de);
            var lt = function(ft) {
              return {
                originalEvent: N,
                type: ft,
                position: {
                  x: Q[0],
                  y: Q[1]
                }
              };
            };
            de.emit(lt("grabon")), Me ? Me.forEach(function(Qe) {
              Qe.emit(lt("grab"));
            }) : de.emit(lt("grab"));
          }
          a(de, ["touchstart", "tapstart", "vmousedown"], N, {
            x: Q[0],
            y: Q[1]
          }), de == null && (t.data.bgActivePosistion = {
            x: X[0],
            y: X[1]
          }, t.redrawHint("select", !0), t.redraw()), t.touchData.singleTouchMoved = !1, t.touchData.singleTouchStartTime = +/* @__PURE__ */ new Date(), clearTimeout(t.touchData.tapholdTimeout), t.touchData.tapholdTimeout = setTimeout(function() {
            t.touchData.singleTouchMoved === !1 && !t.pinching && !t.touchData.selecting && a(t.touchData.start, ["taphold"], N, {
              x: Q[0],
              y: Q[1]
            });
          }, t.tapholdDuration);
        }
      }
      if (N.touches.length >= 1) {
        for (var Ze = t.touchData.startPosition = [null, null, null, null, null, null], Ue = 0; Ue < Q.length; Ue++)
          Ze[Ue] = K[Ue] = Q[Ue];
        var ct = N.touches[0];
        t.touchData.startGPosition = [ct.clientX, ct.clientY];
      }
    }
  }, !1);
  var J;
  t.registerBinding(window, "touchmove", J = function(N) {
    var $ = t.touchData.capture;
    if (!(!$ && !w(N))) {
      var Q = t.selection, K = t.cy, X = t.touchData.now, ae = t.touchData.earlier, Z = K.zoom();
      if (N.touches[0]) {
        var re = t.projectIntoViewport(N.touches[0].clientX, N.touches[0].clientY);
        X[0] = re[0], X[1] = re[1];
      }
      if (N.touches[1]) {
        var re = t.projectIntoViewport(N.touches[1].clientX, N.touches[1].clientY);
        X[2] = re[0], X[3] = re[1];
      }
      if (N.touches[2]) {
        var re = t.projectIntoViewport(N.touches[2].clientX, N.touches[2].clientY);
        X[4] = re[0], X[5] = re[1];
      }
      var pe = t.touchData.startGPosition, ye;
      if ($ && N.touches[0] && pe) {
        for (var he = [], Ee = 0; Ee < X.length; Ee++)
          he[Ee] = X[Ee] - ae[Ee];
        var le = N.touches[0].clientX - pe[0], de = le * le, Fe = N.touches[0].clientY - pe[1], Me = Fe * Fe, lt = de + Me;
        ye = lt >= t.touchTapThreshold2;
      }
      if ($ && t.touchData.cxt) {
        N.preventDefault();
        var Ze = N.touches[0].clientX - G, Ue = N.touches[0].clientY - Y, ct = N.touches[1].clientX - G, Qe = N.touches[1].clientY - Y, ft = H(Ze, Ue, ct, Qe), xt = ft / B, mt = 150, vt = mt * mt, It = 1.5, Vt = It * It;
        if (xt >= Vt || ft >= vt) {
          t.touchData.cxt = !1, t.data.bgActivePosistion = void 0, t.redrawHint("select", !0);
          var Tt = {
            originalEvent: N,
            type: "cxttapend",
            position: {
              x: X[0],
              y: X[1]
            }
          };
          t.touchData.start ? (t.touchData.start.unactivate().emit(Tt), t.touchData.start = null) : K.emit(Tt);
        }
      }
      if ($ && t.touchData.cxt) {
        var Tt = {
          originalEvent: N,
          type: "cxtdrag",
          position: {
            x: X[0],
            y: X[1]
          }
        };
        t.data.bgActivePosistion = void 0, t.redrawHint("select", !0), t.touchData.start ? t.touchData.start.emit(Tt) : K.emit(Tt), t.touchData.start && (t.touchData.start._private.grabbed = !1), t.touchData.cxtDragged = !0;
        var $e = t.findNearestElement(X[0], X[1], !0, !0);
        (!t.touchData.cxtOver || $e !== t.touchData.cxtOver) && (t.touchData.cxtOver && t.touchData.cxtOver.emit({
          originalEvent: N,
          type: "cxtdragout",
          position: {
            x: X[0],
            y: X[1]
          }
        }), t.touchData.cxtOver = $e, $e && $e.emit({
          originalEvent: N,
          type: "cxtdragover",
          position: {
            x: X[0],
            y: X[1]
          }
        }));
      } else if ($ && N.touches[2] && K.boxSelectionEnabled())
        N.preventDefault(), t.data.bgActivePosistion = void 0, this.lastThreeTouch = +/* @__PURE__ */ new Date(), t.touchData.selecting || K.emit({
          originalEvent: N,
          type: "boxstart",
          position: {
            x: X[0],
            y: X[1]
          }
        }), t.touchData.selecting = !0, t.touchData.didSelect = !0, Q[4] = 1, !Q || Q.length === 0 || Q[0] === void 0 ? (Q[0] = (X[0] + X[2] + X[4]) / 3, Q[1] = (X[1] + X[3] + X[5]) / 3, Q[2] = (X[0] + X[2] + X[4]) / 3 + 1, Q[3] = (X[1] + X[3] + X[5]) / 3 + 1) : (Q[2] = (X[0] + X[2] + X[4]) / 3, Q[3] = (X[1] + X[3] + X[5]) / 3), t.redrawHint("select", !0), t.redraw();
      else if ($ && N.touches[1] && !t.touchData.didSelect && K.zoomingEnabled() && K.panningEnabled() && K.userZoomingEnabled() && K.userPanningEnabled()) {
        N.preventDefault(), t.data.bgActivePosistion = void 0, t.redrawHint("select", !0);
        var We = t.dragData.touchDragEles;
        if (We) {
          t.redrawHint("drag", !0);
          for (var at = 0; at < We.length; at++) {
            var Tr = We[at]._private;
            Tr.grabbed = !1, Tr.rscratch.inDragLayer = !1;
          }
        }
        var Mt = t.touchData.start, Ze = N.touches[0].clientX - G, Ue = N.touches[0].clientY - Y, ct = N.touches[1].clientX - G, Qe = N.touches[1].clientY - Y, Gi = z(Ze, Ue, ct, Qe), Wu = Gi / P;
        if (U) {
          var Ku = Ze - O, Zu = Ue - M, Qu = ct - R, Ju = Qe - k, ju = (Ku + Qu) / 2, el = (Zu + Ju) / 2, Qr = K.zoom(), In = Qr * Wu, Ia = K.pan(), zi = F[0] * Qr + Ia.x, Vi = F[1] * Qr + Ia.y, tl = {
            x: -In / Qr * (zi - Ia.x - ju) + zi,
            y: -In / Qr * (Vi - Ia.y - el) + Vi
          };
          if (Mt && Mt.active()) {
            var We = t.dragData.touchDragEles;
            g(We), t.redrawHint("drag", !0), t.redrawHint("eles", !0), Mt.unactivate().emit("freeon"), We.emit("free"), t.dragData.didDrag && (Mt.emit("dragfreeon"), We.emit("dragfree"));
          }
          K.viewport({
            zoom: In,
            pan: tl,
            cancelOnFailedZoom: !0
          }), K.emit("pinchzoom"), P = Gi, O = Ze, M = Ue, R = ct, k = Qe, t.pinching = !0;
        }
        if (N.touches[0]) {
          var re = t.projectIntoViewport(N.touches[0].clientX, N.touches[0].clientY);
          X[0] = re[0], X[1] = re[1];
        }
        if (N.touches[1]) {
          var re = t.projectIntoViewport(N.touches[1].clientX, N.touches[1].clientY);
          X[2] = re[0], X[3] = re[1];
        }
        if (N.touches[2]) {
          var re = t.projectIntoViewport(N.touches[2].clientX, N.touches[2].clientY);
          X[4] = re[0], X[5] = re[1];
        }
      } else if (N.touches[0] && !t.touchData.didSelect) {
        var Ct = t.touchData.start, Mn = t.touchData.last, $e;
        if (!t.hoverData.draggingEles && !t.swipePanning && ($e = t.findNearestElement(X[0], X[1], !0, !0)), $ && Ct != null && N.preventDefault(), $ && Ct != null && t.nodeIsDraggable(Ct))
          if (ye) {
            var We = t.dragData.touchDragEles, Ui = !t.dragData.didDrag;
            Ui && v(We, {
              inDragLayer: !0
            }), t.dragData.didDrag = !0;
            var Jr = {
              x: 0,
              y: 0
            };
            if (ne(he[0]) && ne(he[1]) && (Jr.x += he[0], Jr.y += he[1], Ui)) {
              t.redrawHint("eles", !0);
              var Dt = t.touchData.dragDelta;
              Dt && ne(Dt[0]) && ne(Dt[1]) && (Jr.x += Dt[0], Jr.y += Dt[1]);
            }
            t.hoverData.draggingEles = !0, We.silentShift(Jr).emit("position drag"), t.redrawHint("drag", !0), t.touchData.startPosition[0] == ae[0] && t.touchData.startPosition[1] == ae[1] && t.redrawHint("eles", !0), t.redraw();
          } else {
            var Dt = t.touchData.dragDelta = t.touchData.dragDelta || [];
            Dt.length === 0 ? (Dt.push(he[0]), Dt.push(he[1])) : (Dt[0] += he[0], Dt[1] += he[1]);
          }
        if (a(Ct || $e, ["touchmove", "tapdrag", "vmousemove"], N, {
          x: X[0],
          y: X[1]
        }), (!Ct || !Ct.grabbed()) && $e != Mn && (Mn && Mn.emit({
          originalEvent: N,
          type: "tapdragout",
          position: {
            x: X[0],
            y: X[1]
          }
        }), $e && $e.emit({
          originalEvent: N,
          type: "tapdragover",
          position: {
            x: X[0],
            y: X[1]
          }
        })), t.touchData.last = $e, $)
          for (var at = 0; at < X.length; at++)
            X[at] && t.touchData.startPosition[at] && ye && (t.touchData.singleTouchMoved = !0);
        if ($ && (Ct == null || Ct.pannable()) && K.panningEnabled() && K.userPanningEnabled()) {
          var rl = i(Ct, t.touchData.starts);
          rl && (N.preventDefault(), t.data.bgActivePosistion || (t.data.bgActivePosistion = Ir(t.touchData.startPosition)), t.swipePanning ? (K.panBy({
            x: he[0] * Z,
            y: he[1] * Z
          }), K.emit("dragpan")) : ye && (t.swipePanning = !0, K.panBy({
            x: le * Z,
            y: Fe * Z
          }), K.emit("dragpan"), Ct && (Ct.unactivate(), t.redrawHint("select", !0), t.touchData.start = null)));
          var re = t.projectIntoViewport(N.touches[0].clientX, N.touches[0].clientY);
          X[0] = re[0], X[1] = re[1];
        }
      }
      for (var Ee = 0; Ee < X.length; Ee++)
        ae[Ee] = X[Ee];
      $ && N.touches.length > 0 && !t.hoverData.draggingEles && !t.swipePanning && t.data.bgActivePosistion != null && (t.data.bgActivePosistion = void 0, t.redrawHint("select", !0), t.redraw());
    }
  }, !1);
  var ee;
  t.registerBinding(e, "touchcancel", ee = function(N) {
    var $ = t.touchData.start;
    t.touchData.capture = !1, $ && $.unactivate();
  });
  var oe, me, te, ie;
  if (t.registerBinding(e, "touchend", oe = function(N) {
    var $ = t.touchData.start, Q = t.touchData.capture;
    if (Q)
      N.touches.length === 0 && (t.touchData.capture = !1), N.preventDefault();
    else
      return;
    var K = t.selection;
    t.swipePanning = !1, t.hoverData.draggingEles = !1;
    var X = t.cy, ae = X.zoom(), Z = t.touchData.now, re = t.touchData.earlier;
    if (N.touches[0]) {
      var pe = t.projectIntoViewport(N.touches[0].clientX, N.touches[0].clientY);
      Z[0] = pe[0], Z[1] = pe[1];
    }
    if (N.touches[1]) {
      var pe = t.projectIntoViewport(N.touches[1].clientX, N.touches[1].clientY);
      Z[2] = pe[0], Z[3] = pe[1];
    }
    if (N.touches[2]) {
      var pe = t.projectIntoViewport(N.touches[2].clientX, N.touches[2].clientY);
      Z[4] = pe[0], Z[5] = pe[1];
    }
    $ && $.unactivate();
    var ye;
    if (t.touchData.cxt) {
      if (ye = {
        originalEvent: N,
        type: "cxttapend",
        position: {
          x: Z[0],
          y: Z[1]
        }
      }, $ ? $.emit(ye) : X.emit(ye), !t.touchData.cxtDragged) {
        var he = {
          originalEvent: N,
          type: "cxttap",
          position: {
            x: Z[0],
            y: Z[1]
          }
        };
        $ ? $.emit(he) : X.emit(he);
      }
      t.touchData.start && (t.touchData.start._private.grabbed = !1), t.touchData.cxt = !1, t.touchData.start = null, t.redraw();
      return;
    }
    if (!N.touches[2] && X.boxSelectionEnabled() && t.touchData.selecting) {
      t.touchData.selecting = !1;
      var Ee = X.collection(t.getAllInBox(K[0], K[1], K[2], K[3]));
      K[0] = void 0, K[1] = void 0, K[2] = void 0, K[3] = void 0, K[4] = 0, t.redrawHint("select", !0), X.emit({
        type: "boxend",
        originalEvent: N,
        position: {
          x: Z[0],
          y: Z[1]
        }
      });
      var le = function(vt) {
        return vt.selectable() && !vt.selected();
      };
      Ee.emit("box").stdFilter(le).select().emit("boxselect"), Ee.nonempty() && t.redrawHint("eles", !0), t.redraw();
    }
    if ($ != null && $.unactivate(), N.touches[2])
      t.data.bgActivePosistion = void 0, t.redrawHint("select", !0);
    else if (!N.touches[1]) {
      if (!N.touches[0]) {
        if (!N.touches[0]) {
          t.data.bgActivePosistion = void 0, t.redrawHint("select", !0);
          var de = t.dragData.touchDragEles;
          if ($ != null) {
            var Fe = $._private.grabbed;
            g(de), t.redrawHint("drag", !0), t.redrawHint("eles", !0), Fe && ($.emit("freeon"), de.emit("free"), t.dragData.didDrag && ($.emit("dragfreeon"), de.emit("dragfree"))), a($, ["touchend", "tapend", "vmouseup", "tapdragout"], N, {
              x: Z[0],
              y: Z[1]
            }), $.unactivate(), t.touchData.start = null;
          } else {
            var Me = t.findNearestElement(Z[0], Z[1], !0, !0);
            a(Me, ["touchend", "tapend", "vmouseup", "tapdragout"], N, {
              x: Z[0],
              y: Z[1]
            });
          }
          var lt = t.touchData.startPosition[0] - Z[0], Ze = lt * lt, Ue = t.touchData.startPosition[1] - Z[1], ct = Ue * Ue, Qe = Ze + ct, ft = Qe * ae * ae;
          t.touchData.singleTouchMoved || ($ || X.$(":selected").unselect(["tapunselect"]), a($, ["tap", "vclick"], N, {
            x: Z[0],
            y: Z[1]
          }), me = !1, N.timeStamp - ie <= X.multiClickDebounceTime() ? (te && clearTimeout(te), me = !0, ie = null, a($, ["dbltap", "vdblclick"], N, {
            x: Z[0],
            y: Z[1]
          })) : (te = setTimeout(function() {
            me || a($, ["onetap", "voneclick"], N, {
              x: Z[0],
              y: Z[1]
            });
          }, X.multiClickDebounceTime()), ie = N.timeStamp)), $ != null && !t.dragData.didDrag && $._private.selectable && ft < t.touchTapThreshold2 && !t.pinching && (X.selectionType() === "single" ? (X.$(r).unmerge($).unselect(["tapunselect"]), $.select(["tapselect"])) : $.selected() ? $.unselect(["tapunselect"]) : $.select(["tapselect"]), t.redrawHint("eles", !0)), t.touchData.singleTouchMoved = !0;
        }
      }
    }
    for (var xt = 0; xt < Z.length; xt++)
      re[xt] = Z[xt];
    t.dragData.didDrag = !1, N.touches.length === 0 && (t.touchData.dragDelta = [], t.touchData.startPosition = [null, null, null, null, null, null], t.touchData.startGPosition = null, t.touchData.didSelect = !1), N.touches.length < 2 && (N.touches.length === 1 && (t.touchData.startGPosition = [N.touches[0].clientX, N.touches[0].clientY]), t.pinching = !1, t.redrawHint("eles", !0), t.redraw());
  }, !1), typeof TouchEvent == "undefined") {
    var ue = [], ce = function(N) {
      return {
        clientX: N.clientX,
        clientY: N.clientY,
        force: 1,
        identifier: N.pointerId,
        pageX: N.pageX,
        pageY: N.pageY,
        radiusX: N.width / 2,
        radiusY: N.height / 2,
        screenX: N.screenX,
        screenY: N.screenY,
        target: N.target
      };
    }, fe = function(N) {
      return {
        event: N,
        touch: ce(N)
      };
    }, ge = function(N) {
      ue.push(fe(N));
    }, Ae = function(N) {
      for (var $ = 0; $ < ue.length; $++) {
        var Q = ue[$];
        if (Q.event.pointerId === N.pointerId) {
          ue.splice($, 1);
          return;
        }
      }
    }, xe = function(N) {
      var $ = ue.filter(function(Q) {
        return Q.event.pointerId === N.pointerId;
      })[0];
      $.event = N, $.touch = ce(N);
    }, we = function(N) {
      N.touches = ue.map(function($) {
        return $.touch;
      });
    }, De = function(N) {
      return N.pointerType === "mouse" || N.pointerType === 4;
    };
    t.registerBinding(t.container, "pointerdown", function(j) {
      De(j) || (j.preventDefault(), ge(j), we(j), W(j));
    }), t.registerBinding(t.container, "pointerup", function(j) {
      De(j) || (Ae(j), we(j), oe(j));
    }), t.registerBinding(t.container, "pointercancel", function(j) {
      De(j) || (Ae(j), we(j), ee(j));
    }), t.registerBinding(t.container, "pointermove", function(j) {
      De(j) || (j.preventDefault(), xe(j), we(j), J(j));
    });
  }
};
var Ht = {};
Ht.generatePolygon = function(t, e) {
  return this.nodeShapes[t] = {
    renderer: this,
    name: t,
    points: e,
    draw: function(a, n, i, s, o, u) {
      this.renderer.nodeShapeImpl("polygon", a, n, i, s, o, this.points);
    },
    intersectLine: function(a, n, i, s, o, u, l, f) {
      return pa(o, u, this.points, a, n, i / 2, s / 2, l);
    },
    checkPoint: function(a, n, i, s, o, u, l, f) {
      return Yt(a, n, this.points, u, l, s, o, [0, -1], i);
    }
  };
};
Ht.generateEllipse = function() {
  return this.nodeShapes.ellipse = {
    renderer: this,
    name: "ellipse",
    draw: function(e, r, a, n, i, s) {
      this.renderer.nodeShapeImpl(this.name, e, r, a, n, i);
    },
    intersectLine: function(e, r, a, n, i, s, o, u) {
      return ph(i, s, e, r, a / 2 + o, n / 2 + o);
    },
    checkPoint: function(e, r, a, n, i, s, o, u) {
      return cr(e, r, n, i, s, o, a);
    }
  };
};
Ht.generateRoundPolygon = function(t, e) {
  return this.nodeShapes[t] = {
    renderer: this,
    name: t,
    points: e,
    getOrCreateCorners: function(a, n, i, s, o, u, l) {
      if (u[l] !== void 0 && u[l + "-cx"] === a && u[l + "-cy"] === n)
        return u[l];
      u[l] = new Array(e.length / 2), u[l + "-cx"] = a, u[l + "-cy"] = n;
      var f = i / 2, h = s / 2;
      o = o === "auto" ? Io(i, s) : o;
      for (var d = new Array(e.length / 2), c = 0; c < e.length / 2; c++)
        d[c] = {
          x: a + f * e[c * 2],
          y: n + h * e[c * 2 + 1]
        };
      var v, p, g, y, b = d.length;
      for (p = d[b - 1], v = 0; v < b; v++)
        g = d[v % b], y = d[(v + 1) % b], u[l][v] = ki(p, g, y, o), p = g, g = y;
      return u[l];
    },
    draw: function(a, n, i, s, o, u, l) {
      this.renderer.nodeShapeImpl("round-polygon", a, n, i, s, o, this.points, this.getOrCreateCorners(n, i, s, o, u, l, "drawCorners"));
    },
    intersectLine: function(a, n, i, s, o, u, l, f, h) {
      return yh(o, u, this.points, a, n, i, s, l, this.getOrCreateCorners(a, n, i, s, f, h, "corners"));
    },
    checkPoint: function(a, n, i, s, o, u, l, f, h) {
      return gh(a, n, this.points, u, l, s, o, this.getOrCreateCorners(u, l, s, o, f, h, "corners"));
    }
  };
};
Ht.generateRoundRectangle = function() {
  return this.nodeShapes["round-rectangle"] = this.nodeShapes.roundrectangle = {
    renderer: this,
    name: "round-rectangle",
    points: ht(4, 0),
    draw: function(e, r, a, n, i, s) {
      this.renderer.nodeShapeImpl(this.name, e, r, a, n, i, this.points, s);
    },
    intersectLine: function(e, r, a, n, i, s, o, u) {
      return Oo(i, s, e, r, a, n, o, u);
    },
    checkPoint: function(e, r, a, n, i, s, o, u) {
      var l = n / 2, f = i / 2;
      u = u === "auto" ? pr(n, i) : u, u = Math.min(l, f, u);
      var h = u * 2;
      return !!(Yt(e, r, this.points, s, o, n, i - h, [0, -1], a) || Yt(e, r, this.points, s, o, n - h, i, [0, -1], a) || cr(e, r, h, h, s - l + u, o - f + u, a) || cr(e, r, h, h, s + l - u, o - f + u, a) || cr(e, r, h, h, s + l - u, o + f - u, a) || cr(e, r, h, h, s - l + u, o + f - u, a));
    }
  };
};
Ht.generateCutRectangle = function() {
  return this.nodeShapes["cut-rectangle"] = this.nodeShapes.cutrectangle = {
    renderer: this,
    name: "cut-rectangle",
    cornerLength: xi(),
    points: ht(4, 0),
    draw: function(e, r, a, n, i, s) {
      this.renderer.nodeShapeImpl(this.name, e, r, a, n, i, null, s);
    },
    generateCutTrianglePts: function(e, r, a, n, i) {
      var s = i === "auto" ? this.cornerLength : i, o = r / 2, u = e / 2, l = a - u, f = a + u, h = n - o, d = n + o;
      return {
        topLeft: [l, h + s, l + s, h, l + s, h + s],
        topRight: [f - s, h, f, h + s, f - s, h + s],
        bottomRight: [f, d - s, f - s, d, f - s, d - s],
        bottomLeft: [l + s, d, l, d - s, l + s, d - s]
      };
    },
    intersectLine: function(e, r, a, n, i, s, o, u) {
      var l = this.generateCutTrianglePts(a + 2 * o, n + 2 * o, e, r, u), f = [].concat.apply([], [l.topLeft.splice(0, 4), l.topRight.splice(0, 4), l.bottomRight.splice(0, 4), l.bottomLeft.splice(0, 4)]);
      return pa(i, s, f, e, r);
    },
    checkPoint: function(e, r, a, n, i, s, o, u) {
      var l = u === "auto" ? this.cornerLength : u;
      if (Yt(e, r, this.points, s, o, n, i - 2 * l, [0, -1], a) || Yt(e, r, this.points, s, o, n - 2 * l, i, [0, -1], a))
        return !0;
      var f = this.generateCutTrianglePts(n, i, s, o);
      return dt(e, r, f.topLeft) || dt(e, r, f.topRight) || dt(e, r, f.bottomRight) || dt(e, r, f.bottomLeft);
    }
  };
};
Ht.generateBarrel = function() {
  return this.nodeShapes.barrel = {
    renderer: this,
    name: "barrel",
    points: ht(4, 0),
    draw: function(e, r, a, n, i, s) {
      this.renderer.nodeShapeImpl(this.name, e, r, a, n, i);
    },
    intersectLine: function(e, r, a, n, i, s, o, u) {
      var l = 0.15, f = 0.5, h = 0.85, d = this.generateBarrelBezierPts(a + 2 * o, n + 2 * o, e, r), c = function(g) {
        var y = Rr({
          x: g[0],
          y: g[1]
        }, {
          x: g[2],
          y: g[3]
        }, {
          x: g[4],
          y: g[5]
        }, l), b = Rr({
          x: g[0],
          y: g[1]
        }, {
          x: g[2],
          y: g[3]
        }, {
          x: g[4],
          y: g[5]
        }, f), m = Rr({
          x: g[0],
          y: g[1]
        }, {
          x: g[2],
          y: g[3]
        }, {
          x: g[4],
          y: g[5]
        }, h);
        return [g[0], g[1], y.x, y.y, b.x, b.y, m.x, m.y, g[4], g[5]];
      }, v = [].concat(c(d.topLeft), c(d.topRight), c(d.bottomRight), c(d.bottomLeft));
      return pa(i, s, v, e, r);
    },
    generateBarrelBezierPts: function(e, r, a, n) {
      var i = r / 2, s = e / 2, o = a - s, u = a + s, l = n - i, f = n + i, h = Kn(e, r), d = h.heightOffset, c = h.widthOffset, v = h.ctrlPtOffsetPct * e, p = {
        topLeft: [o, l + d, o + v, l, o + c, l],
        topRight: [u - c, l, u - v, l, u, l + d],
        bottomRight: [u, f - d, u - v, f, u - c, f],
        bottomLeft: [o + c, f, o + v, f, o, f - d]
      };
      return p.topLeft.isTop = !0, p.topRight.isTop = !0, p.bottomLeft.isBottom = !0, p.bottomRight.isBottom = !0, p;
    },
    checkPoint: function(e, r, a, n, i, s, o, u) {
      var l = Kn(n, i), f = l.heightOffset, h = l.widthOffset;
      if (Yt(e, r, this.points, s, o, n, i - 2 * f, [0, -1], a) || Yt(e, r, this.points, s, o, n - 2 * h, i, [0, -1], a))
        return !0;
      for (var d = this.generateBarrelBezierPts(n, i, s, o), c = function(x, w, D) {
        var L = D[4], A = D[2], I = D[0], O = D[5], M = D[1], R = Math.min(L, I), k = Math.max(L, I), P = Math.min(O, M), B = Math.max(O, M);
        if (R <= x && x <= k && P <= w && w <= B) {
          var V = mh(L, A, I), F = hh(V[0], V[1], V[2], x), G = F.filter(function(Y) {
            return 0 <= Y && Y <= 1;
          });
          if (G.length > 0)
            return G[0];
        }
        return null;
      }, v = Object.keys(d), p = 0; p < v.length; p++) {
        var g = v[p], y = d[g], b = c(e, r, y);
        if (b != null) {
          var m = y[5], T = y[3], C = y[1], S = Ke(m, T, C, b);
          if (y.isTop && S <= r || y.isBottom && r <= S)
            return !0;
        }
      }
      return !1;
    }
  };
};
Ht.generateBottomRoundrectangle = function() {
  return this.nodeShapes["bottom-round-rectangle"] = this.nodeShapes.bottomroundrectangle = {
    renderer: this,
    name: "bottom-round-rectangle",
    points: ht(4, 0),
    draw: function(e, r, a, n, i, s) {
      this.renderer.nodeShapeImpl(this.name, e, r, a, n, i, this.points, s);
    },
    intersectLine: function(e, r, a, n, i, s, o, u) {
      var l = e - (a / 2 + o), f = r - (n / 2 + o), h = f, d = e + (a / 2 + o), c = Zt(i, s, e, r, l, f, d, h, !1);
      return c.length > 0 ? c : Oo(i, s, e, r, a, n, o, u);
    },
    checkPoint: function(e, r, a, n, i, s, o, u) {
      u = u === "auto" ? pr(n, i) : u;
      var l = 2 * u;
      if (Yt(e, r, this.points, s, o, n, i - l, [0, -1], a) || Yt(e, r, this.points, s, o, n - l, i, [0, -1], a))
        return !0;
      var f = n / 2 + 2 * a, h = i / 2 + 2 * a, d = [s - f, o - h, s - f, o, s + f, o, s + f, o - h];
      return !!(dt(e, r, d) || cr(e, r, l, l, s + n / 2 - u, o + i / 2 - u, a) || cr(e, r, l, l, s - n / 2 + u, o + i / 2 - u, a));
    }
  };
};
Ht.registerNodeShapes = function() {
  var t = this.nodeShapes = {}, e = this;
  this.generateEllipse(), this.generatePolygon("triangle", ht(3, 0)), this.generateRoundPolygon("round-triangle", ht(3, 0)), this.generatePolygon("rectangle", ht(4, 0)), t.square = t.rectangle, this.generateRoundRectangle(), this.generateCutRectangle(), this.generateBarrel(), this.generateBottomRoundrectangle();
  {
    var r = [0, 1, 1, 0, 0, -1, -1, 0];
    this.generatePolygon("diamond", r), this.generateRoundPolygon("round-diamond", r);
  }
  this.generatePolygon("pentagon", ht(5, 0)), this.generateRoundPolygon("round-pentagon", ht(5, 0)), this.generatePolygon("hexagon", ht(6, 0)), this.generateRoundPolygon("round-hexagon", ht(6, 0)), this.generatePolygon("heptagon", ht(7, 0)), this.generateRoundPolygon("round-heptagon", ht(7, 0)), this.generatePolygon("octagon", ht(8, 0)), this.generateRoundPolygon("round-octagon", ht(8, 0));
  var a = new Array(20);
  {
    var n = Wn(5, 0), i = Wn(5, Math.PI / 5), s = 0.5 * (3 - Math.sqrt(5));
    s *= 1.57;
    for (var o = 0; o < i.length / 2; o++)
      i[o * 2] *= s, i[o * 2 + 1] *= s;
    for (var o = 0; o < 20 / 4; o++)
      a[o * 4] = n[o * 2], a[o * 4 + 1] = n[o * 2 + 1], a[o * 4 + 2] = i[o * 2], a[o * 4 + 3] = i[o * 2 + 1];
  }
  a = No(a), this.generatePolygon("star", a), this.generatePolygon("vee", [-1, -1, 0, -0.333, 1, -1, 0, 1]), this.generatePolygon("rhomboid", [-1, -1, 0.333, -1, 1, 1, -0.333, 1]), this.generatePolygon("right-rhomboid", [-0.333, -1, 1, -1, 0.333, 1, -1, 1]), this.nodeShapes.concavehexagon = this.generatePolygon("concave-hexagon", [-1, -0.95, -0.75, 0, -1, 0.95, 1, 0.95, 0.75, 0, 1, -0.95]);
  {
    var u = [-1, -1, 0.25, -1, 1, 0, 0.25, 1, -1, 1];
    this.generatePolygon("tag", u), this.generateRoundPolygon("round-tag", u);
  }
  t.makePolygon = function(l) {
    var f = l.join("$"), h = "polygon-" + f, d;
    return (d = this[h]) ? d : e.generatePolygon(h, l);
  };
};
var Oa = {};
Oa.timeToRender = function() {
  return this.redrawTotalTime / this.redrawCount;
};
Oa.redraw = function(t) {
  t = t || Co();
  var e = this;
  e.averageRedrawTime === void 0 && (e.averageRedrawTime = 0), e.lastRedrawTime === void 0 && (e.lastRedrawTime = 0), e.lastDrawTime === void 0 && (e.lastDrawTime = 0), e.requestedFrame = !0, e.renderOptions = t;
};
Oa.beforeRender = function(t, e) {
  if (!this.destroyed) {
    e == null && ze("Priority is not optional for beforeRender");
    var r = this.beforeRenderCallbacks;
    r.push({
      fn: t,
      priority: e
    }), r.sort(function(a, n) {
      return n.priority - a.priority;
    });
  }
};
var Ws = function(e, r, a) {
  for (var n = e.beforeRenderCallbacks, i = 0; i < n.length; i++)
    n[i].fn(r, a);
};
Oa.startRenderLoop = function() {
  var t = this, e = t.cy;
  if (!t.renderLoopStarted) {
    t.renderLoopStarted = !0;
    var r = function a(n) {
      if (!t.destroyed) {
        if (!e.batching())
          if (t.requestedFrame && !t.skipFrame) {
            Ws(t, !0, n);
            var i = $t();
            t.render(t.renderOptions);
            var s = t.lastDrawTime = $t();
            t.averageRedrawTime === void 0 && (t.averageRedrawTime = s - i), t.redrawCount === void 0 && (t.redrawCount = 0), t.redrawCount++, t.redrawTotalTime === void 0 && (t.redrawTotalTime = 0);
            var o = s - i;
            t.redrawTotalTime += o, t.lastRedrawTime = o, t.averageRedrawTime = t.averageRedrawTime / 2 + o / 2, t.requestedFrame = !1;
          } else
            Ws(t, !1, n);
        t.skipFrame = !1, rn(a);
      }
    };
    rn(r);
  }
};
var jg = function(e) {
  this.init(e);
}, Ou = jg, Kr = Ou.prototype;
Kr.clientFunctions = ["redrawHint", "render", "renderTo", "matchCanvasSize", "nodeShapeImpl", "arrowShapeImpl"];
Kr.init = function(t) {
  var e = this;
  e.options = t, e.cy = t.cy;
  var r = e.container = t.cy.container(), a = e.cy.window();
  if (a) {
    var n = a.document, i = n.head, s = "__________cytoscape_stylesheet", o = "__________cytoscape_container", u = n.getElementById(s) != null;
    if (r.className.indexOf(o) < 0 && (r.className = (r.className || "") + " " + o), !u) {
      var l = n.createElement("style");
      l.id = s, l.textContent = "." + o + " { position: relative; }", i.insertBefore(l, i.children[0]);
    }
    var f = a.getComputedStyle(r), h = f.getPropertyValue("position");
    h === "static" && Ne("A Cytoscape container has style position:static and so can not use UI extensions properly");
  }
  e.selection = [void 0, void 0, void 0, void 0, 0], e.bezierProjPcts = [0.05, 0.225, 0.4, 0.5, 0.6, 0.775, 0.95], e.hoverData = {
    down: null,
    last: null,
    downTime: null,
    triggerMode: null,
    dragging: !1,
    initialPan: [null, null],
    capture: !1
  }, e.dragData = {
    possibleDragElements: []
  }, e.touchData = {
    start: null,
    capture: !1,
    // These 3 fields related to tap, taphold events
    startPosition: [null, null, null, null, null, null],
    singleTouchStartTime: null,
    singleTouchMoved: !0,
    now: [null, null, null, null, null, null],
    earlier: [null, null, null, null, null, null]
  }, e.redraws = 0, e.showFps = t.showFps, e.debug = t.debug, e.hideEdgesOnViewport = t.hideEdgesOnViewport, e.textureOnViewport = t.textureOnViewport, e.wheelSensitivity = t.wheelSensitivity, e.motionBlurEnabled = t.motionBlur, e.forcedPixelRatio = ne(t.pixelRatio) ? t.pixelRatio : null, e.motionBlur = t.motionBlur, e.motionBlurOpacity = t.motionBlurOpacity, e.motionBlurTransparency = 1 - e.motionBlurOpacity, e.motionBlurPxRatio = 1, e.mbPxRBlurry = 1, e.minMbLowQualFrames = 4, e.fullQualityMb = !1, e.clearedForMotionBlur = [], e.desktopTapThreshold = t.desktopTapThreshold, e.desktopTapThreshold2 = t.desktopTapThreshold * t.desktopTapThreshold, e.touchTapThreshold = t.touchTapThreshold, e.touchTapThreshold2 = t.touchTapThreshold * t.touchTapThreshold, e.tapholdDuration = 500, e.bindings = [], e.beforeRenderCallbacks = [], e.beforeRenderPriorities = {
    // higher priority execs before lower one
    animations: 400,
    eleCalcs: 300,
    eleTxrDeq: 200,
    lyrTxrDeq: 150,
    lyrTxrSkip: 100
  }, e.registerNodeShapes(), e.registerArrowShapes(), e.registerCalculationListeners();
};
Kr.notify = function(t, e) {
  var r = this, a = r.cy;
  if (!this.destroyed) {
    if (t === "init") {
      r.load();
      return;
    }
    if (t === "destroy") {
      r.destroy();
      return;
    }
    (t === "add" || t === "remove" || t === "move" && a.hasCompoundNodes() || t === "load" || t === "zorder" || t === "mount") && r.invalidateCachedZSortedEles(), t === "viewport" && r.redrawHint("select", !0), (t === "load" || t === "resize" || t === "mount") && (r.invalidateContainerClientCoordsCache(), r.matchCanvasSize(r.container)), r.redrawHint("eles", !0), r.redrawHint("drag", !0), this.startRenderLoop(), this.redraw();
  }
};
Kr.destroy = function() {
  var t = this;
  t.destroyed = !0, t.cy.stopAnimationLoop();
  for (var e = 0; e < t.bindings.length; e++) {
    var r = t.bindings[e], a = r, n = a.target;
    (n.off || n.removeEventListener).apply(n, a.args);
  }
  if (t.bindings = [], t.beforeRenderCallbacks = [], t.onUpdateEleCalcsFns = [], t.removeObserver && t.removeObserver.disconnect(), t.styleObserver && t.styleObserver.disconnect(), t.resizeObserver && t.resizeObserver.disconnect(), t.labelCalcDiv)
    try {
      document.body.removeChild(t.labelCalcDiv);
    } catch (i) {
    }
};
Kr.isHeadless = function() {
  return !1;
};
[Ri, Lu, Au, Wr, Ht, Oa].forEach(function(t) {
  be(Kr, t);
});
var Yn = 1e3 / 60, Nu = {
  setupDequeueing: function(e) {
    return function() {
      var a = this, n = this.renderer;
      if (!a.dequeueingSetup) {
        a.dequeueingSetup = !0;
        var i = gn(function() {
          n.redrawHint("eles", !0), n.redrawHint("drag", !0), n.redraw();
        }, e.deqRedrawThreshold), s = function(l, f) {
          var h = $t(), d = n.averageRedrawTime, c = n.lastRedrawTime, v = [], p = n.cy.extent(), g = n.getPixelRatio();
          for (l || n.flushRenderedStyleQueue(); ; ) {
            var y = $t(), b = y - h, m = y - f;
            if (c < Yn) {
              var T = Yn - (l ? d : 0);
              if (m >= e.deqFastCost * T)
                break;
            } else if (l) {
              if (b >= e.deqCost * c || b >= e.deqAvgCost * d)
                break;
            } else if (m >= e.deqNoDrawCost * Yn)
              break;
            var C = e.deq(a, g, p);
            if (C.length > 0)
              for (var S = 0; S < C.length; S++)
                v.push(C[S]);
            else
              break;
          }
          v.length > 0 && (e.onDeqd(a, v), !l && e.shouldRedraw(a, v, g, p) && i());
        }, o = e.priority || mi;
        n.beforeRender(s, o(a));
      }
    };
  }
}, ep = /* @__PURE__ */ function() {
  function t(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : an;
    vi(this, t), this.idsByKey = new Bt(), this.keyForId = new Bt(), this.cachesByLvl = new Bt(), this.lvls = [], this.getKey = e, this.doesEleInvalidateKey = r;
  }
  return di(t, [{
    key: "getIdsFor",
    value: function(r) {
      r == null && ze("Can not get id list for null key");
      var a = this.idsByKey, n = this.idsByKey.get(r);
      return n || (n = new Ur(), a.set(r, n)), n;
    }
  }, {
    key: "addIdForKey",
    value: function(r, a) {
      r != null && this.getIdsFor(r).add(a);
    }
  }, {
    key: "deleteIdForKey",
    value: function(r, a) {
      r != null && this.getIdsFor(r).delete(a);
    }
  }, {
    key: "getNumberOfIdsForKey",
    value: function(r) {
      return r == null ? 0 : this.getIdsFor(r).size;
    }
  }, {
    key: "updateKeyMappingFor",
    value: function(r) {
      var a = r.id(), n = this.keyForId.get(a), i = this.getKey(r);
      this.deleteIdForKey(n, a), this.addIdForKey(i, a), this.keyForId.set(a, i);
    }
  }, {
    key: "deleteKeyMappingFor",
    value: function(r) {
      var a = r.id(), n = this.keyForId.get(a);
      this.deleteIdForKey(n, a), this.keyForId.delete(a);
    }
  }, {
    key: "keyHasChangedFor",
    value: function(r) {
      var a = r.id(), n = this.keyForId.get(a), i = this.getKey(r);
      return n !== i;
    }
  }, {
    key: "isInvalid",
    value: function(r) {
      return this.keyHasChangedFor(r) || this.doesEleInvalidateKey(r);
    }
  }, {
    key: "getCachesAt",
    value: function(r) {
      var a = this.cachesByLvl, n = this.lvls, i = a.get(r);
      return i || (i = new Bt(), a.set(r, i), n.push(r)), i;
    }
  }, {
    key: "getCache",
    value: function(r, a) {
      return this.getCachesAt(a).get(r);
    }
  }, {
    key: "get",
    value: function(r, a) {
      var n = this.getKey(r), i = this.getCache(n, a);
      return i != null && this.updateKeyMappingFor(r), i;
    }
  }, {
    key: "getForCachedKey",
    value: function(r, a) {
      var n = this.keyForId.get(r.id()), i = this.getCache(n, a);
      return i;
    }
  }, {
    key: "hasCache",
    value: function(r, a) {
      return this.getCachesAt(a).has(r);
    }
  }, {
    key: "has",
    value: function(r, a) {
      var n = this.getKey(r);
      return this.hasCache(n, a);
    }
  }, {
    key: "setCache",
    value: function(r, a, n) {
      n.key = r, this.getCachesAt(a).set(r, n);
    }
  }, {
    key: "set",
    value: function(r, a, n) {
      var i = this.getKey(r);
      this.setCache(i, a, n), this.updateKeyMappingFor(r);
    }
  }, {
    key: "deleteCache",
    value: function(r, a) {
      this.getCachesAt(a).delete(r);
    }
  }, {
    key: "delete",
    value: function(r, a) {
      var n = this.getKey(r);
      this.deleteCache(n, a);
    }
  }, {
    key: "invalidateKey",
    value: function(r) {
      var a = this;
      this.lvls.forEach(function(n) {
        return a.deleteCache(r, n);
      });
    }
    // returns true if no other eles reference the invalidated cache (n.b. other eles may need the cache with the same key)
  }, {
    key: "invalidate",
    value: function(r) {
      var a = r.id(), n = this.keyForId.get(a);
      this.deleteKeyMappingFor(r);
      var i = this.doesEleInvalidateKey(r);
      return i && this.invalidateKey(n), i || this.getNumberOfIdsForKey(n) === 0;
    }
  }]), t;
}(), Ks = 25, Ya = 50, Ja = -4, si = 3, tp = 7.99, rp = 8, ap = 1024, np = 1024, ip = 1024, sp = 0.2, op = 0.8, up = 10, lp = 0.15, fp = 0.1, hp = 0.9, cp = 0.9, vp = 100, dp = 1, Mr = {
  dequeue: "dequeue",
  downscale: "downscale",
  highQuality: "highQuality"
}, gp = tt({
  getKey: null,
  doesEleInvalidateKey: an,
  drawElement: null,
  getBoundingBox: null,
  getRotationPoint: null,
  getRotationOffset: null,
  isVisible: wo,
  allowEdgeTxrCaching: !0,
  allowParentTxrCaching: !0
}), ua = function(e, r) {
  var a = this;
  a.renderer = e, a.onDequeues = [];
  var n = gp(r);
  be(a, n), a.lookup = new ep(n.getKey, n.doesEleInvalidateKey), a.setupDequeueing();
}, qe = ua.prototype;
qe.reasons = Mr;
qe.getTextureQueue = function(t) {
  var e = this;
  return e.eleImgCaches = e.eleImgCaches || {}, e.eleImgCaches[t] = e.eleImgCaches[t] || [];
};
qe.getRetiredTextureQueue = function(t) {
  var e = this, r = e.eleImgCaches.retired = e.eleImgCaches.retired || {}, a = r[t] = r[t] || [];
  return a;
};
qe.getElementQueue = function() {
  var t = this, e = t.eleCacheQueue = t.eleCacheQueue || new Da(function(r, a) {
    return a.reqs - r.reqs;
  });
  return e;
};
qe.getElementKeyToQueue = function() {
  var t = this, e = t.eleKeyToCacheQueue = t.eleKeyToCacheQueue || {};
  return e;
};
qe.getElement = function(t, e, r, a, n) {
  var i = this, s = this.renderer, o = s.cy.zoom(), u = this.lookup;
  if (!e || e.w === 0 || e.h === 0 || isNaN(e.w) || isNaN(e.h) || !t.visible() || t.removed() || !i.allowEdgeTxrCaching && t.isEdge() || !i.allowParentTxrCaching && t.isParent())
    return null;
  if (a == null && (a = Math.ceil(Ei(o * r))), a < Ja)
    a = Ja;
  else if (o >= tp || a > si)
    return null;
  var l = Math.pow(2, a), f = e.h * l, h = e.w * l, d = s.eleTextBiggerThanMin(t, l);
  if (!this.isVisible(t, d))
    return null;
  var c = u.get(t, a);
  if (c && c.invalidated && (c.invalidated = !1, c.texture.invalidatedWidth -= c.width), c)
    return c;
  var v;
  if (f <= Ks ? v = Ks : f <= Ya ? v = Ya : v = Math.ceil(f / Ya) * Ya, f > ip || h > np)
    return null;
  var p = i.getTextureQueue(v), g = p[p.length - 2], y = function() {
    return i.recycleTexture(v, h) || i.addTexture(v, h);
  };
  g || (g = p[p.length - 1]), g || (g = y()), g.width - g.usedWidth < h && (g = y());
  for (var b = function(R) {
    return R && R.scaledLabelShown === d;
  }, m = n && n === Mr.dequeue, T = n && n === Mr.highQuality, C = n && n === Mr.downscale, S, E = a + 1; E <= si; E++) {
    var x = u.get(t, E);
    if (x) {
      S = x;
      break;
    }
  }
  var w = S && S.level === a + 1 ? S : null, D = function() {
    g.context.drawImage(w.texture.canvas, w.x, 0, w.width, w.height, g.usedWidth, 0, h, f);
  };
  if (g.context.setTransform(1, 0, 0, 1, 0, 0), g.context.clearRect(g.usedWidth, 0, h, v), b(w))
    D();
  else if (b(S))
    if (T) {
      for (var L = S.level; L > a; L--)
        w = i.getElement(t, e, r, L, Mr.downscale);
      D();
    } else
      return i.queueElement(t, S.level - 1), S;
  else {
    var A;
    if (!m && !T && !C)
      for (var I = a - 1; I >= Ja; I--) {
        var O = u.get(t, I);
        if (O) {
          A = O;
          break;
        }
      }
    if (b(A))
      return i.queueElement(t, a), A;
    g.context.translate(g.usedWidth, 0), g.context.scale(l, l), this.drawElement(g.context, t, e, d, !1), g.context.scale(1 / l, 1 / l), g.context.translate(-g.usedWidth, 0);
  }
  return c = {
    x: g.usedWidth,
    texture: g,
    level: a,
    scale: l,
    width: h,
    height: f,
    scaledLabelShown: d
  }, g.usedWidth += Math.ceil(h + rp), g.eleCaches.push(c), u.set(t, a, c), i.checkTextureFullness(g), c;
};
qe.invalidateElements = function(t) {
  for (var e = 0; e < t.length; e++)
    this.invalidateElement(t[e]);
};
qe.invalidateElement = function(t) {
  var e = this, r = e.lookup, a = [], n = r.isInvalid(t);
  if (n) {
    for (var i = Ja; i <= si; i++) {
      var s = r.getForCachedKey(t, i);
      s && a.push(s);
    }
    var o = r.invalidate(t);
    if (o)
      for (var u = 0; u < a.length; u++) {
        var l = a[u], f = l.texture;
        f.invalidatedWidth += l.width, l.invalidated = !0, e.checkTextureUtility(f);
      }
    e.removeFromQueue(t);
  }
};
qe.checkTextureUtility = function(t) {
  t.invalidatedWidth >= sp * t.width && this.retireTexture(t);
};
qe.checkTextureFullness = function(t) {
  var e = this, r = e.getTextureQueue(t.height);
  t.usedWidth / t.width > op && t.fullnessChecks >= up ? er(r, t) : t.fullnessChecks++;
};
qe.retireTexture = function(t) {
  var e = this, r = t.height, a = e.getTextureQueue(r), n = this.lookup;
  er(a, t), t.retired = !0;
  for (var i = t.eleCaches, s = 0; s < i.length; s++) {
    var o = i[s];
    n.deleteCache(o.key, o.level);
  }
  bi(i);
  var u = e.getRetiredTextureQueue(r);
  u.push(t);
};
qe.addTexture = function(t, e) {
  var r = this, a = r.getTextureQueue(t), n = {};
  return a.push(n), n.eleCaches = [], n.height = t, n.width = Math.max(ap, e), n.usedWidth = 0, n.invalidatedWidth = 0, n.fullnessChecks = 0, n.canvas = r.renderer.makeOffscreenCanvas(n.width, n.height), n.context = n.canvas.getContext("2d"), n;
};
qe.recycleTexture = function(t, e) {
  for (var r = this, a = r.getTextureQueue(t), n = r.getRetiredTextureQueue(t), i = 0; i < n.length; i++) {
    var s = n[i];
    if (s.width >= e)
      return s.retired = !1, s.usedWidth = 0, s.invalidatedWidth = 0, s.fullnessChecks = 0, bi(s.eleCaches), s.context.setTransform(1, 0, 0, 1, 0, 0), s.context.clearRect(0, 0, s.width, s.height), er(n, s), a.push(s), s;
  }
};
qe.queueElement = function(t, e) {
  var r = this, a = r.getElementQueue(), n = r.getElementKeyToQueue(), i = this.getKey(t), s = n[i];
  if (s)
    s.level = Math.max(s.level, e), s.eles.merge(t), s.reqs++, a.updateItem(s);
  else {
    var o = {
      eles: t.spawn().merge(t),
      level: e,
      reqs: 1,
      key: i
    };
    a.push(o), n[i] = o;
  }
};
qe.dequeue = function(t) {
  for (var e = this, r = e.getElementQueue(), a = e.getElementKeyToQueue(), n = [], i = e.lookup, s = 0; s < dp && r.size() > 0; s++) {
    var o = r.pop(), u = o.key, l = o.eles[0], f = i.hasCache(l, o.level);
    if (a[u] = null, f)
      continue;
    n.push(o);
    var h = e.getBoundingBox(l);
    e.getElement(l, h, t, o.level, Mr.dequeue);
  }
  return n;
};
qe.removeFromQueue = function(t) {
  var e = this, r = e.getElementQueue(), a = e.getElementKeyToQueue(), n = this.getKey(t), i = a[n];
  i != null && (i.eles.length === 1 ? (i.reqs = yi, r.updateItem(i), r.pop(), a[n] = null) : i.eles.unmerge(t));
};
qe.onDequeue = function(t) {
  this.onDequeues.push(t);
};
qe.offDequeue = function(t) {
  er(this.onDequeues, t);
};
qe.setupDequeueing = Nu.setupDequeueing({
  deqRedrawThreshold: vp,
  deqCost: lp,
  deqAvgCost: fp,
  deqNoDrawCost: hp,
  deqFastCost: cp,
  deq: function(e, r, a) {
    return e.dequeue(r, a);
  },
  onDeqd: function(e, r) {
    for (var a = 0; a < e.onDequeues.length; a++) {
      var n = e.onDequeues[a];
      n(r);
    }
  },
  shouldRedraw: function(e, r, a, n) {
    for (var i = 0; i < r.length; i++)
      for (var s = r[i].eles, o = 0; o < s.length; o++) {
        var u = s[o].boundingBox();
        if (wi(u, n))
          return !0;
      }
    return !1;
  },
  priority: function(e) {
    return e.renderer.beforeRenderPriorities.eleTxrDeq;
  }
});
var pp = 1, fa = -4, cn = 2, yp = 3.99, mp = 50, bp = 50, Ep = 0.15, wp = 0.1, xp = 0.9, Tp = 0.9, Cp = 1, Zs = 250, Dp = 4e3 * 4e3, Sp = !0, Iu = function(e) {
  var r = this, a = r.renderer = e, n = a.cy;
  r.layersByLevel = {}, r.firstGet = !0, r.lastInvalidationTime = $t() - 2 * Zs, r.skipping = !1, r.eleTxrDeqs = n.collection(), r.scheduleElementRefinement = gn(function() {
    r.refineElementTextures(r.eleTxrDeqs), r.eleTxrDeqs.unmerge(r.eleTxrDeqs);
  }, bp), a.beforeRender(function(s, o) {
    o - r.lastInvalidationTime <= Zs ? r.skipping = !0 : r.skipping = !1;
  }, a.beforeRenderPriorities.lyrTxrSkip);
  var i = function(o, u) {
    return u.reqs - o.reqs;
  };
  r.layersQueue = new Da(i), r.setupDequeueing();
}, rt = Iu.prototype, Qs = 0, Lp = Math.pow(2, 53) - 1;
rt.makeLayer = function(t, e) {
  var r = Math.pow(2, e), a = Math.ceil(t.w * r), n = Math.ceil(t.h * r), i = this.renderer.makeOffscreenCanvas(a, n), s = {
    id: Qs = ++Qs % Lp,
    bb: t,
    level: e,
    width: a,
    height: n,
    canvas: i,
    context: i.getContext("2d"),
    eles: [],
    elesQueue: [],
    reqs: 0
  }, o = s.context, u = -s.bb.x1, l = -s.bb.y1;
  return o.scale(r, r), o.translate(u, l), s;
};
rt.getLayers = function(t, e, r) {
  var a = this, n = a.renderer, i = n.cy, s = i.zoom(), o = a.firstGet;
  if (a.firstGet = !1, r == null) {
    if (r = Math.ceil(Ei(s * e)), r < fa)
      r = fa;
    else if (s >= yp || r > cn)
      return null;
  }
  a.validateLayersElesOrdering(r, t);
  var u = a.layersByLevel, l = Math.pow(2, r), f = u[r] = u[r] || [], h, d = a.levelIsComplete(r, t), c, v = function() {
    var D = function(M) {
      if (a.validateLayersElesOrdering(M, t), a.levelIsComplete(M, t))
        return c = u[M], !0;
    }, L = function(M) {
      if (!c)
        for (var R = r + M; fa <= R && R <= cn && !D(R); R += M)
          ;
    };
    L(1), L(-1);
    for (var A = f.length - 1; A >= 0; A--) {
      var I = f[A];
      I.invalid && er(f, I);
    }
  };
  if (!d)
    v();
  else
    return f;
  var p = function() {
    if (!h) {
      h = gt();
      for (var D = 0; D < t.length; D++)
        Lo(h, t[D].boundingBox());
    }
    return h;
  }, g = function(D) {
    D = D || {};
    var L = D.after;
    p();
    var A = h.w * l * (h.h * l);
    if (A > Dp)
      return null;
    var I = a.makeLayer(h, r);
    if (L != null) {
      var O = f.indexOf(L) + 1;
      f.splice(O, 0, I);
    } else
      (D.insert === void 0 || D.insert) && f.unshift(I);
    return I;
  };
  if (a.skipping && !o)
    return null;
  for (var y = null, b = t.length / pp, m = !o, T = 0; T < t.length; T++) {
    var C = t[T], S = C._private.rscratch, E = S.imgLayerCaches = S.imgLayerCaches || {}, x = E[r];
    if (x) {
      y = x;
      continue;
    }
    if ((!y || y.eles.length >= b || !Ao(y.bb, C.boundingBox())) && (y = g({
      insert: !0,
      after: y
    }), !y))
      return null;
    c || m ? a.queueLayer(y, C) : a.drawEleInLayer(y, C, r, e), y.eles.push(C), E[r] = y;
  }
  return c || (m ? null : f);
};
rt.getEleLevelForLayerLevel = function(t, e) {
  return t;
};
rt.drawEleInLayer = function(t, e, r, a) {
  var n = this, i = this.renderer, s = t.context, o = e.boundingBox();
  o.w === 0 || o.h === 0 || !e.visible() || (r = n.getEleLevelForLayerLevel(r, a), i.setImgSmoothing(s, !1), i.drawCachedElement(s, e, null, null, r, Sp), i.setImgSmoothing(s, !0));
};
rt.levelIsComplete = function(t, e) {
  var r = this, a = r.layersByLevel[t];
  if (!a || a.length === 0)
    return !1;
  for (var n = 0, i = 0; i < a.length; i++) {
    var s = a[i];
    if (s.reqs > 0 || s.invalid)
      return !1;
    n += s.eles.length;
  }
  return n === e.length;
};
rt.validateLayersElesOrdering = function(t, e) {
  var r = this.layersByLevel[t];
  if (r)
    for (var a = 0; a < r.length; a++) {
      for (var n = r[a], i = -1, s = 0; s < e.length; s++)
        if (n.eles[0] === e[s]) {
          i = s;
          break;
        }
      if (i < 0) {
        this.invalidateLayer(n);
        continue;
      }
      for (var o = i, s = 0; s < n.eles.length; s++)
        if (n.eles[s] !== e[o + s]) {
          this.invalidateLayer(n);
          break;
        }
    }
};
rt.updateElementsInLayers = function(t, e) {
  for (var r = this, a = Ta(t[0]), n = 0; n < t.length; n++)
    for (var i = a ? null : t[n], s = a ? t[n] : t[n].ele, o = s._private.rscratch, u = o.imgLayerCaches = o.imgLayerCaches || {}, l = fa; l <= cn; l++) {
      var f = u[l];
      f && (i && r.getEleLevelForLayerLevel(f.level) !== i.level || e(f, s, i));
    }
};
rt.haveLayers = function() {
  for (var t = this, e = !1, r = fa; r <= cn; r++) {
    var a = t.layersByLevel[r];
    if (a && a.length > 0) {
      e = !0;
      break;
    }
  }
  return e;
};
rt.invalidateElements = function(t) {
  var e = this;
  t.length !== 0 && (e.lastInvalidationTime = $t(), !(t.length === 0 || !e.haveLayers()) && e.updateElementsInLayers(t, function(a, n, i) {
    e.invalidateLayer(a);
  }));
};
rt.invalidateLayer = function(t) {
  if (this.lastInvalidationTime = $t(), !t.invalid) {
    var e = t.level, r = t.eles, a = this.layersByLevel[e];
    er(a, t), t.elesQueue = [], t.invalid = !0, t.replacement && (t.replacement.invalid = !0);
    for (var n = 0; n < r.length; n++) {
      var i = r[n]._private.rscratch.imgLayerCaches;
      i && (i[e] = null);
    }
  }
};
rt.refineElementTextures = function(t) {
  var e = this;
  e.updateElementsInLayers(t, function(a, n, i) {
    var s = a.replacement;
    if (s || (s = a.replacement = e.makeLayer(a.bb, a.level), s.replaces = a, s.eles = a.eles), !s.reqs)
      for (var o = 0; o < s.eles.length; o++)
        e.queueLayer(s, s.eles[o]);
  });
};
rt.enqueueElementRefinement = function(t) {
  this.eleTxrDeqs.merge(t), this.scheduleElementRefinement();
};
rt.queueLayer = function(t, e) {
  var r = this, a = r.layersQueue, n = t.elesQueue, i = n.hasId = n.hasId || {};
  if (!t.replacement) {
    if (e) {
      if (i[e.id()])
        return;
      n.push(e), i[e.id()] = !0;
    }
    t.reqs ? (t.reqs++, a.updateItem(t)) : (t.reqs = 1, a.push(t));
  }
};
rt.dequeue = function(t) {
  for (var e = this, r = e.layersQueue, a = [], n = 0; n < Cp && r.size() !== 0; ) {
    var i = r.peek();
    if (i.replacement) {
      r.pop();
      continue;
    }
    if (i.replaces && i !== i.replaces.replacement) {
      r.pop();
      continue;
    }
    if (i.invalid) {
      r.pop();
      continue;
    }
    var s = i.elesQueue.shift();
    s && (e.drawEleInLayer(i, s, i.level, t), n++), a.length === 0 && a.push(!0), i.elesQueue.length === 0 && (r.pop(), i.reqs = 0, i.replaces && e.applyLayerReplacement(i), e.requestRedraw());
  }
  return a;
};
rt.applyLayerReplacement = function(t) {
  var e = this, r = e.layersByLevel[t.level], a = t.replaces, n = r.indexOf(a);
  if (!(n < 0 || a.invalid)) {
    r[n] = t;
    for (var i = 0; i < t.eles.length; i++) {
      var s = t.eles[i]._private, o = s.imgLayerCaches = s.imgLayerCaches || {};
      o && (o[t.level] = t);
    }
    e.requestRedraw();
  }
};
rt.requestRedraw = gn(function() {
  var t = this.renderer;
  t.redrawHint("eles", !0), t.redrawHint("drag", !0), t.redraw();
}, 100);
rt.setupDequeueing = Nu.setupDequeueing({
  deqRedrawThreshold: mp,
  deqCost: Ep,
  deqAvgCost: wp,
  deqNoDrawCost: xp,
  deqFastCost: Tp,
  deq: function(e, r) {
    return e.dequeue(r);
  },
  onDeqd: mi,
  shouldRedraw: wo,
  priority: function(e) {
    return e.renderer.beforeRenderPriorities.lyrTxrDeq;
  }
});
var Mu = {}, Js;
function Ap(t, e) {
  for (var r = 0; r < e.length; r++) {
    var a = e[r];
    t.lineTo(a.x, a.y);
  }
}
function Op(t, e, r) {
  for (var a, n = 0; n < e.length; n++) {
    var i = e[n];
    n === 0 && (a = i), t.lineTo(i.x, i.y);
  }
  t.quadraticCurveTo(r.x, r.y, a.x, a.y);
}
function js(t, e, r) {
  t.beginPath && t.beginPath();
  for (var a = e, n = 0; n < a.length; n++) {
    var i = a[n];
    t.lineTo(i.x, i.y);
  }
  var s = r, o = r[0];
  t.moveTo(o.x, o.y);
  for (var n = 1; n < s.length; n++) {
    var i = s[n];
    t.lineTo(i.x, i.y);
  }
  t.closePath && t.closePath();
}
function Np(t, e, r, a, n) {
  t.beginPath && t.beginPath(), t.arc(r, a, n, 0, Math.PI * 2, !1);
  var i = e, s = i[0];
  t.moveTo(s.x, s.y);
  for (var o = 0; o < i.length; o++) {
    var u = i[o];
    t.lineTo(u.x, u.y);
  }
  t.closePath && t.closePath();
}
function Ip(t, e, r, a) {
  t.arc(e, r, a, 0, Math.PI * 2, !1);
}
Mu.arrowShapeImpl = function(t) {
  return (Js || (Js = {
    polygon: Ap,
    "triangle-backcurve": Op,
    "triangle-tee": js,
    "circle-triangle": Np,
    "triangle-cross": js,
    circle: Ip
  }))[t];
};
var zt = {};
zt.drawElement = function(t, e, r, a, n, i) {
  var s = this;
  e.isNode() ? s.drawNode(t, e, r, a, n, i) : s.drawEdge(t, e, r, a, n, i);
};
zt.drawElementOverlay = function(t, e) {
  var r = this;
  e.isNode() ? r.drawNodeOverlay(t, e) : r.drawEdgeOverlay(t, e);
};
zt.drawElementUnderlay = function(t, e) {
  var r = this;
  e.isNode() ? r.drawNodeUnderlay(t, e) : r.drawEdgeUnderlay(t, e);
};
zt.drawCachedElementPortion = function(t, e, r, a, n, i, s, o) {
  var u = this, l = r.getBoundingBox(e);
  if (!(l.w === 0 || l.h === 0)) {
    var f = r.getElement(e, l, a, n, i);
    if (f != null) {
      var h = o(u, e);
      if (h === 0)
        return;
      var d = s(u, e), c = l.x1, v = l.y1, p = l.w, g = l.h, y, b, m, T, C;
      if (d !== 0) {
        var S = r.getRotationPoint(e);
        m = S.x, T = S.y, t.translate(m, T), t.rotate(d), C = u.getImgSmoothing(t), C || u.setImgSmoothing(t, !0);
        var E = r.getRotationOffset(e);
        y = E.x, b = E.y;
      } else
        y = c, b = v;
      var x;
      h !== 1 && (x = t.globalAlpha, t.globalAlpha = x * h), t.drawImage(f.texture.canvas, f.x, 0, f.width, f.height, y, b, p, g), h !== 1 && (t.globalAlpha = x), d !== 0 && (t.rotate(-d), t.translate(-m, -T), C || u.setImgSmoothing(t, !1));
    } else
      r.drawElement(t, e);
  }
};
var Mp = function() {
  return 0;
}, Rp = function(e, r) {
  return e.getTextAngle(r, null);
}, kp = function(e, r) {
  return e.getTextAngle(r, "source");
}, Pp = function(e, r) {
  return e.getTextAngle(r, "target");
}, Bp = function(e, r) {
  return r.effectiveOpacity();
}, _n = function(e, r) {
  return r.pstyle("text-opacity").pfValue * r.effectiveOpacity();
};
zt.drawCachedElement = function(t, e, r, a, n, i) {
  var s = this, o = s.data, u = o.eleTxrCache, l = o.lblTxrCache, f = o.slbTxrCache, h = o.tlbTxrCache, d = e.boundingBox(), c = i === !0 ? u.reasons.highQuality : null;
  if (!(d.w === 0 || d.h === 0 || !e.visible()) && (!a || wi(d, a))) {
    var v = e.isEdge(), p = e.element()._private.rscratch.badLine;
    s.drawElementUnderlay(t, e), s.drawCachedElementPortion(t, e, u, r, n, c, Mp, Bp), (!v || !p) && s.drawCachedElementPortion(t, e, l, r, n, c, Rp, _n), v && !p && (s.drawCachedElementPortion(t, e, f, r, n, c, kp, _n), s.drawCachedElementPortion(t, e, h, r, n, c, Pp, _n)), s.drawElementOverlay(t, e);
  }
};
zt.drawElements = function(t, e) {
  for (var r = this, a = 0; a < e.length; a++) {
    var n = e[a];
    r.drawElement(t, n);
  }
};
zt.drawCachedElements = function(t, e, r, a) {
  for (var n = this, i = 0; i < e.length; i++) {
    var s = e[i];
    n.drawCachedElement(t, s, r, a);
  }
};
zt.drawCachedNodes = function(t, e, r, a) {
  for (var n = this, i = 0; i < e.length; i++) {
    var s = e[i];
    s.isNode() && n.drawCachedElement(t, s, r, a);
  }
};
zt.drawLayeredElements = function(t, e, r, a) {
  var n = this, i = n.data.lyrTxrCache.getLayers(e, r);
  if (i)
    for (var s = 0; s < i.length; s++) {
      var o = i[s], u = o.bb;
      u.w === 0 || u.h === 0 || t.drawImage(o.canvas, u.x1, u.y1, u.w, u.h);
    }
  else
    n.drawCachedElements(t, e, r, a);
};
var Xt = {};
Xt.drawEdge = function(t, e, r) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0, s = this, o = e._private.rscratch;
  if (!(i && !e.visible()) && !(o.badLine || o.allpts == null || isNaN(o.allpts[0]))) {
    var u;
    r && (u = r, t.translate(-u.x1, -u.y1));
    var l = i ? e.pstyle("opacity").value : 1, f = i ? e.pstyle("line-opacity").value : 1, h = e.pstyle("curve-style").value, d = e.pstyle("line-style").value, c = e.pstyle("width").pfValue, v = e.pstyle("line-cap").value, p = l * f, g = l * f, y = function() {
      var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : p;
      h === "straight-triangle" ? (s.eleStrokeStyle(t, e, A), s.drawEdgeTrianglePath(e, t, o.allpts)) : (t.lineWidth = c, t.lineCap = v, s.eleStrokeStyle(t, e, A), s.drawEdgePath(e, t, o.allpts, d), t.lineCap = "butt");
    }, b = function() {
      n && s.drawEdgeOverlay(t, e);
    }, m = function() {
      n && s.drawEdgeUnderlay(t, e);
    }, T = function() {
      var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : g;
      s.drawArrowheads(t, e, A);
    }, C = function() {
      s.drawElementText(t, e, null, a);
    };
    t.lineJoin = "round";
    var S = e.pstyle("ghost").value === "yes";
    if (S) {
      var E = e.pstyle("ghost-offset-x").pfValue, x = e.pstyle("ghost-offset-y").pfValue, w = e.pstyle("ghost-opacity").value, D = p * w;
      t.translate(E, x), y(D), T(D), t.translate(-E, -x);
    }
    m(), y(), T(), b(), C(), r && t.translate(u.x1, u.y1);
  }
};
var Ru = function(e) {
  if (!["overlay", "underlay"].includes(e))
    throw new Error("Invalid state");
  return function(r, a) {
    if (a.visible()) {
      var n = a.pstyle("".concat(e, "-opacity")).value;
      if (n !== 0) {
        var i = this, s = i.usePaths(), o = a._private.rscratch, u = a.pstyle("".concat(e, "-padding")).pfValue, l = 2 * u, f = a.pstyle("".concat(e, "-color")).value;
        r.lineWidth = l, o.edgeType === "self" && !s ? r.lineCap = "butt" : r.lineCap = "round", i.colorStrokeStyle(r, f[0], f[1], f[2], n), i.drawEdgePath(a, r, o.allpts, "solid");
      }
    }
  };
};
Xt.drawEdgeOverlay = Ru("overlay");
Xt.drawEdgeUnderlay = Ru("underlay");
Xt.drawEdgePath = function(t, e, r, a) {
  var n = t._private.rscratch, i = e, s, o = !1, u = this.usePaths(), l = t.pstyle("line-dash-pattern").pfValue, f = t.pstyle("line-dash-offset").pfValue;
  if (u) {
    var h = r.join("$"), d = n.pathCacheKey && n.pathCacheKey === h;
    d ? (s = e = n.pathCache, o = !0) : (s = e = new Path2D(), n.pathCacheKey = h, n.pathCache = s);
  }
  if (i.setLineDash)
    switch (a) {
      case "dotted":
        i.setLineDash([1, 1]);
        break;
      case "dashed":
        i.setLineDash(l), i.lineDashOffset = f;
        break;
      case "solid":
        i.setLineDash([]);
        break;
    }
  if (!o && !n.badLine)
    switch (e.beginPath && e.beginPath(), e.moveTo(r[0], r[1]), n.edgeType) {
      case "bezier":
      case "self":
      case "compound":
      case "multibezier":
        for (var c = 2; c + 3 < r.length; c += 4)
          e.quadraticCurveTo(r[c], r[c + 1], r[c + 2], r[c + 3]);
        break;
      case "straight":
      case "haystack":
        for (var v = 2; v + 1 < r.length; v += 2)
          e.lineTo(r[v], r[v + 1]);
        break;
      case "segments":
        if (n.isRound) {
          var p = gl(n.roundCorners), g;
          try {
            for (p.s(); !(g = p.n()).done; ) {
              var y = g.value;
              xu(e, y);
            }
          } catch (m) {
            p.e(m);
          } finally {
            p.f();
          }
          e.lineTo(r[r.length - 2], r[r.length - 1]);
        } else
          for (var b = 2; b + 1 < r.length; b += 2)
            e.lineTo(r[b], r[b + 1]);
        break;
    }
  e = i, u ? e.stroke(s) : e.stroke(), e.setLineDash && e.setLineDash([]);
};
Xt.drawEdgeTrianglePath = function(t, e, r) {
  e.fillStyle = e.strokeStyle;
  for (var a = t.pstyle("width").pfValue, n = 0; n + 1 < r.length; n += 2) {
    var i = [r[n + 2] - r[n], r[n + 3] - r[n + 1]], s = Math.sqrt(i[0] * i[0] + i[1] * i[1]), o = [i[1] / s, -i[0] / s], u = [o[0] * a / 2, o[1] * a / 2];
    e.beginPath(), e.moveTo(r[n] - u[0], r[n + 1] - u[1]), e.lineTo(r[n] + u[0], r[n + 1] + u[1]), e.lineTo(r[n + 2], r[n + 3]), e.closePath(), e.fill();
  }
};
Xt.drawArrowheads = function(t, e, r) {
  var a = e._private.rscratch, n = a.edgeType === "haystack";
  n || this.drawArrowhead(t, e, "source", a.arrowStartX, a.arrowStartY, a.srcArrowAngle, r), this.drawArrowhead(t, e, "mid-target", a.midX, a.midY, a.midtgtArrowAngle, r), this.drawArrowhead(t, e, "mid-source", a.midX, a.midY, a.midsrcArrowAngle, r), n || this.drawArrowhead(t, e, "target", a.arrowEndX, a.arrowEndY, a.tgtArrowAngle, r);
};
Xt.drawArrowhead = function(t, e, r, a, n, i, s) {
  if (!(isNaN(a) || a == null || isNaN(n) || n == null || isNaN(i) || i == null)) {
    var o = this, u = e.pstyle(r + "-arrow-shape").value;
    if (u !== "none") {
      var l = e.pstyle(r + "-arrow-fill").value === "hollow" ? "both" : "filled", f = e.pstyle(r + "-arrow-fill").value, h = e.pstyle("width").pfValue, d = e.pstyle(r + "-arrow-width"), c = d.value === "match-line" ? h : d.pfValue;
      d.units === "%" && (c *= h);
      var v = e.pstyle("opacity").value;
      s === void 0 && (s = v);
      var p = t.globalCompositeOperation;
      (s !== 1 || f === "hollow") && (t.globalCompositeOperation = "destination-out", o.colorFillStyle(t, 255, 255, 255, 1), o.colorStrokeStyle(t, 255, 255, 255, 1), o.drawArrowShape(e, t, l, h, u, c, a, n, i), t.globalCompositeOperation = p);
      var g = e.pstyle(r + "-arrow-color").value;
      o.colorFillStyle(t, g[0], g[1], g[2], s), o.colorStrokeStyle(t, g[0], g[1], g[2], s), o.drawArrowShape(e, t, f, h, u, c, a, n, i);
    }
  }
};
Xt.drawArrowShape = function(t, e, r, a, n, i, s, o, u) {
  var l = this, f = this.usePaths() && n !== "triangle-cross", h = !1, d, c = e, v = {
    x: s,
    y: o
  }, p = t.pstyle("arrow-scale").value, g = this.getArrowWidth(a, p), y = l.arrowShapes[n];
  if (f) {
    var b = l.arrowPathCache = l.arrowPathCache || [], m = dr(n), T = b[m];
    T != null ? (d = e = T, h = !0) : (d = e = new Path2D(), b[m] = d);
  }
  h || (e.beginPath && e.beginPath(), f ? y.draw(e, 1, 0, {
    x: 0,
    y: 0
  }, 1) : y.draw(e, g, u, v, a), e.closePath && e.closePath()), e = c, f && (e.translate(s, o), e.rotate(u), e.scale(g, g)), (r === "filled" || r === "both") && (f ? e.fill(d) : e.fill()), (r === "hollow" || r === "both") && (e.lineWidth = i / (f ? g : 1), e.lineJoin = "miter", f ? e.stroke(d) : e.stroke()), f && (e.scale(1 / g, 1 / g), e.rotate(-u), e.translate(-s, -o));
};
var Bi = {};
Bi.safeDrawImage = function(t, e, r, a, n, i, s, o, u, l) {
  if (!(n <= 0 || i <= 0 || u <= 0 || l <= 0))
    try {
      t.drawImage(e, r, a, n, i, s, o, u, l);
    } catch (f) {
      Ne(f);
    }
};
Bi.drawInscribedImage = function(t, e, r, a, n) {
  var i = this, s = r.position(), o = s.x, u = s.y, l = r.cy().style(), f = l.getIndexedStyle.bind(l), h = f(r, "background-fit", "value", a), d = f(r, "background-repeat", "value", a), c = r.width(), v = r.height(), p = r.padding() * 2, g = c + (f(r, "background-width-relative-to", "value", a) === "inner" ? 0 : p), y = v + (f(r, "background-height-relative-to", "value", a) === "inner" ? 0 : p), b = r._private.rscratch, m = f(r, "background-clip", "value", a), T = m === "node", C = f(r, "background-image-opacity", "value", a) * n, S = f(r, "background-image-smoothing", "value", a), E = r.pstyle("corner-radius").value;
  E !== "auto" && (E = r.pstyle("corner-radius").pfValue);
  var x = e.width || e.cachedW, w = e.height || e.cachedH;
  (x == null || w == null) && (document.body.appendChild(e), x = e.cachedW = e.width || e.offsetWidth, w = e.cachedH = e.height || e.offsetHeight, document.body.removeChild(e));
  var D = x, L = w;
  if (f(r, "background-width", "value", a) !== "auto" && (f(r, "background-width", "units", a) === "%" ? D = f(r, "background-width", "pfValue", a) * g : D = f(r, "background-width", "pfValue", a)), f(r, "background-height", "value", a) !== "auto" && (f(r, "background-height", "units", a) === "%" ? L = f(r, "background-height", "pfValue", a) * y : L = f(r, "background-height", "pfValue", a)), !(D === 0 || L === 0)) {
    if (h === "contain") {
      var A = Math.min(g / D, y / L);
      D *= A, L *= A;
    } else if (h === "cover") {
      var A = Math.max(g / D, y / L);
      D *= A, L *= A;
    }
    var I = o - g / 2, O = f(r, "background-position-x", "units", a), M = f(r, "background-position-x", "pfValue", a);
    O === "%" ? I += (g - D) * M : I += M;
    var R = f(r, "background-offset-x", "units", a), k = f(r, "background-offset-x", "pfValue", a);
    R === "%" ? I += (g - D) * k : I += k;
    var P = u - y / 2, B = f(r, "background-position-y", "units", a), V = f(r, "background-position-y", "pfValue", a);
    B === "%" ? P += (y - L) * V : P += V;
    var F = f(r, "background-offset-y", "units", a), G = f(r, "background-offset-y", "pfValue", a);
    F === "%" ? P += (y - L) * G : P += G, b.pathCache && (I -= o, P -= u, o = 0, u = 0);
    var Y = t.globalAlpha;
    t.globalAlpha = C;
    var _ = i.getImgSmoothing(t), q = !1;
    if (S === "no" && _ ? (i.setImgSmoothing(t, !1), q = !0) : S === "yes" && !_ && (i.setImgSmoothing(t, !0), q = !0), d === "no-repeat")
      T && (t.save(), b.pathCache ? t.clip(b.pathCache) : (i.nodeShapes[i.getNodeShape(r)].draw(t, o, u, g, y, E, b), t.clip())), i.safeDrawImage(t, e, 0, 0, x, w, I, P, D, L), T && t.restore();
    else {
      var U = t.createPattern(e, d);
      t.fillStyle = U, i.nodeShapes[i.getNodeShape(r)].draw(t, o, u, g, y, E, b), t.translate(I, P), t.fill(), t.translate(-I, -P);
    }
    t.globalAlpha = Y, q && i.setImgSmoothing(t, _);
  }
};
var xr = {};
xr.eleTextBiggerThanMin = function(t, e) {
  if (!e) {
    var r = t.cy().zoom(), a = this.getPixelRatio(), n = Math.ceil(Ei(r * a));
    e = Math.pow(2, n);
  }
  var i = t.pstyle("font-size").pfValue * e, s = t.pstyle("min-zoomed-font-size").pfValue;
  return !(i < s);
};
xr.drawElementText = function(t, e, r, a, n) {
  var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0, s = this;
  if (a == null) {
    if (i && !s.eleTextBiggerThanMin(e))
      return;
  } else if (a === !1)
    return;
  if (e.isNode()) {
    var o = e.pstyle("label");
    if (!o || !o.value)
      return;
    var u = s.getLabelJustification(e);
    t.textAlign = u, t.textBaseline = "bottom";
  } else {
    var l = e.element()._private.rscratch.badLine, f = e.pstyle("label"), h = e.pstyle("source-label"), d = e.pstyle("target-label");
    if (l || (!f || !f.value) && (!h || !h.value) && (!d || !d.value))
      return;
    t.textAlign = "center", t.textBaseline = "bottom";
  }
  var c = !r, v;
  r && (v = r, t.translate(-v.x1, -v.y1)), n == null ? (s.drawText(t, e, null, c, i), e.isEdge() && (s.drawText(t, e, "source", c, i), s.drawText(t, e, "target", c, i))) : s.drawText(t, e, n, c, i), r && t.translate(v.x1, v.y1);
};
xr.getFontCache = function(t) {
  var e;
  this.fontCaches = this.fontCaches || [];
  for (var r = 0; r < this.fontCaches.length; r++)
    if (e = this.fontCaches[r], e.context === t)
      return e;
  return e = {
    context: t
  }, this.fontCaches.push(e), e;
};
xr.setupTextStyle = function(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, a = e.pstyle("font-style").strValue, n = e.pstyle("font-size").pfValue + "px", i = e.pstyle("font-family").strValue, s = e.pstyle("font-weight").strValue, o = r ? e.effectiveOpacity() * e.pstyle("text-opacity").value : 1, u = e.pstyle("text-outline-opacity").value * o, l = e.pstyle("color").value, f = e.pstyle("text-outline-color").value;
  t.font = a + " " + s + " " + n + " " + i, t.lineJoin = "round", this.colorFillStyle(t, l[0], l[1], l[2], o), this.colorStrokeStyle(t, f[0], f[1], f[2], u);
};
function Hn(t, e, r, a, n) {
  var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 5, s = arguments.length > 6 ? arguments[6] : void 0;
  t.beginPath(), t.moveTo(e + i, r), t.lineTo(e + a - i, r), t.quadraticCurveTo(e + a, r, e + a, r + i), t.lineTo(e + a, r + n - i), t.quadraticCurveTo(e + a, r + n, e + a - i, r + n), t.lineTo(e + i, r + n), t.quadraticCurveTo(e, r + n, e, r + n - i), t.lineTo(e, r + i), t.quadraticCurveTo(e, r, e + i, r), t.closePath(), s ? t.stroke() : t.fill();
}
xr.getTextAngle = function(t, e) {
  var r, a = t._private, n = a.rscratch, i = e ? e + "-" : "", s = t.pstyle(i + "text-rotation"), o = At(n, "labelAngle", e);
  return s.strValue === "autorotate" ? r = t.isEdge() ? o : 0 : s.strValue === "none" ? r = 0 : r = s.pfValue, r;
};
xr.drawText = function(t, e, r) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = e._private, s = i.rscratch, o = n ? e.effectiveOpacity() : 1;
  if (!(n && (o === 0 || e.pstyle("text-opacity").value === 0))) {
    r === "main" && (r = null);
    var u = At(s, "labelX", r), l = At(s, "labelY", r), f, h, d = this.getLabelText(e, r);
    if (d != null && d !== "" && !isNaN(u) && !isNaN(l)) {
      this.setupTextStyle(t, e, n);
      var c = r ? r + "-" : "", v = At(s, "labelWidth", r), p = At(s, "labelHeight", r), g = e.pstyle(c + "text-margin-x").pfValue, y = e.pstyle(c + "text-margin-y").pfValue, b = e.isEdge(), m = e.pstyle("text-halign").value, T = e.pstyle("text-valign").value;
      b && (m = "center", T = "center"), u += g, l += y;
      var C;
      switch (a ? C = this.getTextAngle(e, r) : C = 0, C !== 0 && (f = u, h = l, t.translate(f, h), t.rotate(C), u = 0, l = 0), T) {
        case "top":
          break;
        case "center":
          l += p / 2;
          break;
        case "bottom":
          l += p;
          break;
      }
      var S = e.pstyle("text-background-opacity").value, E = e.pstyle("text-border-opacity").value, x = e.pstyle("text-border-width").pfValue, w = e.pstyle("text-background-padding").pfValue, D = e.pstyle("text-background-shape").strValue, L = D.indexOf("round") === 0, A = 2;
      if (S > 0 || x > 0 && E > 0) {
        var I = u - w;
        switch (m) {
          case "left":
            I -= v;
            break;
          case "center":
            I -= v / 2;
            break;
        }
        var O = l - p - w, M = v + 2 * w, R = p + 2 * w;
        if (S > 0) {
          var k = t.fillStyle, P = e.pstyle("text-background-color").value;
          t.fillStyle = "rgba(" + P[0] + "," + P[1] + "," + P[2] + "," + S * o + ")", L ? Hn(t, I, O, M, R, A) : t.fillRect(I, O, M, R), t.fillStyle = k;
        }
        if (x > 0 && E > 0) {
          var B = t.strokeStyle, V = t.lineWidth, F = e.pstyle("text-border-color").value, G = e.pstyle("text-border-style").value;
          if (t.strokeStyle = "rgba(" + F[0] + "," + F[1] + "," + F[2] + "," + E * o + ")", t.lineWidth = x, t.setLineDash)
            switch (G) {
              case "dotted":
                t.setLineDash([1, 1]);
                break;
              case "dashed":
                t.setLineDash([4, 2]);
                break;
              case "double":
                t.lineWidth = x / 4, t.setLineDash([]);
                break;
              case "solid":
                t.setLineDash([]);
                break;
            }
          if (L ? Hn(t, I, O, M, R, A, "stroke") : t.strokeRect(I, O, M, R), G === "double") {
            var Y = x / 2;
            L ? Hn(t, I + Y, O + Y, M - Y * 2, R - Y * 2, A, "stroke") : t.strokeRect(I + Y, O + Y, M - Y * 2, R - Y * 2);
          }
          t.setLineDash && t.setLineDash([]), t.lineWidth = V, t.strokeStyle = B;
        }
      }
      var _ = 2 * e.pstyle("text-outline-width").pfValue;
      if (_ > 0 && (t.lineWidth = _), e.pstyle("text-wrap").value === "wrap") {
        var q = At(s, "labelWrapCachedLines", r), U = At(s, "labelLineHeight", r), z = v / 2, H = this.getLabelJustification(e);
        switch (H === "auto" || (m === "left" ? H === "left" ? u += -v : H === "center" && (u += -z) : m === "center" ? H === "left" ? u += -z : H === "right" && (u += z) : m === "right" && (H === "center" ? u += z : H === "right" && (u += v))), T) {
          case "top":
            l -= (q.length - 1) * U;
            break;
          case "center":
          case "bottom":
            l -= (q.length - 1) * U;
            break;
        }
        for (var W = 0; W < q.length; W++)
          _ > 0 && t.strokeText(q[W], u, l), t.fillText(q[W], u, l), l += U;
      } else
        _ > 0 && t.strokeText(d, u, l), t.fillText(d, u, l);
      C !== 0 && (t.rotate(-C), t.translate(-f, -h));
    }
  }
};
var Zr = {};
Zr.drawNode = function(t, e, r) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0, s = this, o, u, l = e._private, f = l.rscratch, h = e.position();
  if (!(!ne(h.x) || !ne(h.y)) && !(i && !e.visible())) {
    var d = i ? e.effectiveOpacity() : 1, c = s.usePaths(), v, p = !1, g = e.padding();
    o = e.width() + 2 * g, u = e.height() + 2 * g;
    var y;
    r && (y = r, t.translate(-y.x1, -y.y1));
    for (var b = e.pstyle("background-image"), m = b.value, T = new Array(m.length), C = new Array(m.length), S = 0, E = 0; E < m.length; E++) {
      var x = m[E], w = T[E] = x != null && x !== "none";
      if (w) {
        var D = e.cy().style().getIndexedStyle(e, "background-image-crossorigin", "value", E);
        S++, C[E] = s.getCachedImage(x, D, function() {
          l.backgroundTimestamp = Date.now(), e.emitAndNotify("background");
        });
      }
    }
    var L = e.pstyle("background-blacken").value, A = e.pstyle("border-width").pfValue, I = e.pstyle("background-opacity").value * d, O = e.pstyle("border-color").value, M = e.pstyle("border-style").value, R = e.pstyle("border-join").value, k = e.pstyle("border-cap").value, P = e.pstyle("border-position").value, B = e.pstyle("border-dash-pattern").pfValue, V = e.pstyle("border-dash-offset").pfValue, F = e.pstyle("border-opacity").value * d, G = e.pstyle("outline-width").pfValue, Y = e.pstyle("outline-color").value, _ = e.pstyle("outline-style").value, q = e.pstyle("outline-opacity").value * d, U = e.pstyle("outline-offset").value, z = e.pstyle("corner-radius").value;
    z !== "auto" && (z = e.pstyle("corner-radius").pfValue);
    var H = function() {
      var ae = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : I;
      s.eleFillStyle(t, e, ae);
    }, W = function() {
      var ae = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : F;
      s.colorStrokeStyle(t, O[0], O[1], O[2], ae);
    }, J = function() {
      var ae = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : q;
      s.colorStrokeStyle(t, Y[0], Y[1], Y[2], ae);
    }, ee = function(ae, Z, re, pe) {
      var ye = s.nodePathCache = s.nodePathCache || [], he = Eo(re === "polygon" ? re + "," + pe.join(",") : re, "" + Z, "" + ae, "" + z), Ee = ye[he], le, de = !1;
      return Ee != null ? (le = Ee, de = !0, f.pathCache = le) : (le = new Path2D(), ye[he] = f.pathCache = le), {
        path: le,
        cacheHit: de
      };
    }, oe = e.pstyle("shape").strValue, me = e.pstyle("shape-polygon-points").pfValue;
    if (c) {
      t.translate(h.x, h.y);
      var te = ee(o, u, oe, me);
      v = te.path, p = te.cacheHit;
    }
    var ie = function() {
      if (!p) {
        var ae = h;
        c && (ae = {
          x: 0,
          y: 0
        }), s.nodeShapes[s.getNodeShape(e)].draw(v || t, ae.x, ae.y, o, u, z, f);
      }
      c ? t.fill(v) : t.fill();
    }, ue = function() {
      for (var ae = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d, Z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, re = l.backgrounding, pe = 0, ye = 0; ye < C.length; ye++) {
        var he = e.cy().style().getIndexedStyle(e, "background-image-containment", "value", ye);
        if (Z && he === "over" || !Z && he === "inside") {
          pe++;
          continue;
        }
        T[ye] && C[ye].complete && !C[ye].error && (pe++, s.drawInscribedImage(t, C[ye], e, ye, ae));
      }
      l.backgrounding = pe !== S, re !== l.backgrounding && e.updateStyle(!1);
    }, ce = function() {
      var ae = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, Z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : d;
      s.hasPie(e) && (s.drawPie(t, e, Z), ae && (c || s.nodeShapes[s.getNodeShape(e)].draw(t, h.x, h.y, o, u, z, f)));
    }, fe = function() {
      var ae = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : d, Z = (L > 0 ? L : -L) * ae, re = L > 0 ? 0 : 255;
      L !== 0 && (s.colorFillStyle(t, re, re, re, Z), c ? t.fill(v) : t.fill());
    }, ge = function() {
      if (A > 0) {
        if (t.lineWidth = A, t.lineCap = k, t.lineJoin = R, t.setLineDash)
          switch (M) {
            case "dotted":
              t.setLineDash([1, 1]);
              break;
            case "dashed":
              t.setLineDash(B), t.lineDashOffset = V;
              break;
            case "solid":
            case "double":
              t.setLineDash([]);
              break;
          }
        if (P !== "center") {
          if (t.save(), t.lineWidth *= 2, P === "inside")
            c ? t.clip(v) : t.clip();
          else {
            var ae = new Path2D();
            ae.rect(-o / 2 - A, -u / 2 - A, o + 2 * A, u + 2 * A), ae.addPath(v), t.clip(ae, "evenodd");
          }
          c ? t.stroke(v) : t.stroke(), t.restore();
        } else
          c ? t.stroke(v) : t.stroke();
        if (M === "double") {
          t.lineWidth = A / 3;
          var Z = t.globalCompositeOperation;
          t.globalCompositeOperation = "destination-out", c ? t.stroke(v) : t.stroke(), t.globalCompositeOperation = Z;
        }
        t.setLineDash && t.setLineDash([]);
      }
    }, Ae = function() {
      if (G > 0) {
        if (t.lineWidth = G, t.lineCap = "butt", t.setLineDash)
          switch (_) {
            case "dotted":
              t.setLineDash([1, 1]);
              break;
            case "dashed":
              t.setLineDash([4, 2]);
              break;
            case "solid":
            case "double":
              t.setLineDash([]);
              break;
          }
        var ae = h;
        c && (ae = {
          x: 0,
          y: 0
        });
        var Z = s.getNodeShape(e), re = A;
        P === "inside" && (re = 0), P === "outside" && (re *= 2);
        var pe = (o + re + (G + U)) / o, ye = (u + re + (G + U)) / u, he = o * pe, Ee = u * ye, le = s.nodeShapes[Z].points, de;
        if (c) {
          var Fe = ee(he, Ee, Z, le);
          de = Fe.path;
        }
        if (Z === "ellipse")
          s.drawEllipsePath(de || t, ae.x, ae.y, he, Ee);
        else if (["round-diamond", "round-heptagon", "round-hexagon", "round-octagon", "round-pentagon", "round-polygon", "round-triangle", "round-tag"].includes(Z)) {
          var Me = 0, lt = 0, Ze = 0;
          Z === "round-diamond" ? Me = (re + U + G) * 1.4 : Z === "round-heptagon" ? (Me = (re + U + G) * 1.075, Ze = -(re / 2 + U + G) / 35) : Z === "round-hexagon" ? Me = (re + U + G) * 1.12 : Z === "round-pentagon" ? (Me = (re + U + G) * 1.13, Ze = -(re / 2 + U + G) / 15) : Z === "round-tag" ? (Me = (re + U + G) * 1.12, lt = (re / 2 + G + U) * 0.07) : Z === "round-triangle" && (Me = (re + U + G) * (Math.PI / 2), Ze = -(re + U / 2 + G) / Math.PI), Me !== 0 && (pe = (o + Me) / o, he = o * pe, ["round-hexagon", "round-tag"].includes(Z) || (ye = (u + Me) / u, Ee = u * ye)), z = z === "auto" ? Io(he, Ee) : z;
          for (var Ue = he / 2, ct = Ee / 2, Qe = z + (re + G + U) / 2, ft = new Array(le.length / 2), xt = new Array(le.length / 2), mt = 0; mt < le.length / 2; mt++)
            ft[mt] = {
              x: ae.x + lt + Ue * le[mt * 2],
              y: ae.y + Ze + ct * le[mt * 2 + 1]
            };
          var vt, It, Vt, Tt, $e = ft.length;
          for (It = ft[$e - 1], vt = 0; vt < $e; vt++)
            Vt = ft[vt % $e], Tt = ft[(vt + 1) % $e], xt[vt] = ki(It, Vt, Tt, Qe), It = Vt, Vt = Tt;
          s.drawRoundPolygonPath(de || t, ae.x + lt, ae.y + Ze, o * pe, u * ye, le, xt);
        } else if (["roundrectangle", "round-rectangle"].includes(Z))
          z = z === "auto" ? pr(he, Ee) : z, s.drawRoundRectanglePath(de || t, ae.x, ae.y, he, Ee, z + (re + G + U) / 2);
        else if (["cutrectangle", "cut-rectangle"].includes(Z))
          z = z === "auto" ? xi() : z, s.drawCutRectanglePath(de || t, ae.x, ae.y, he, Ee, null, z + (re + G + U) / 4);
        else if (["bottomroundrectangle", "bottom-round-rectangle"].includes(Z))
          z = z === "auto" ? pr(he, Ee) : z, s.drawBottomRoundRectanglePath(de || t, ae.x, ae.y, he, Ee, z + (re + G + U) / 2);
        else if (Z === "barrel")
          s.drawBarrelPath(de || t, ae.x, ae.y, he, Ee);
        else if (Z.startsWith("polygon") || ["rhomboid", "right-rhomboid", "round-tag", "tag", "vee"].includes(Z)) {
          var We = (re + G + U) / o;
          le = nn(sn(le, We)), s.drawPolygonPath(de || t, ae.x, ae.y, o, u, le);
        } else {
          var at = (re + G + U) / o;
          le = nn(sn(le, -at)), s.drawPolygonPath(de || t, ae.x, ae.y, o, u, le);
        }
        if (c ? t.stroke(de) : t.stroke(), _ === "double") {
          t.lineWidth = re / 3;
          var Tr = t.globalCompositeOperation;
          t.globalCompositeOperation = "destination-out", c ? t.stroke(de) : t.stroke(), t.globalCompositeOperation = Tr;
        }
        t.setLineDash && t.setLineDash([]);
      }
    }, xe = function() {
      n && s.drawNodeOverlay(t, e, h, o, u);
    }, we = function() {
      n && s.drawNodeUnderlay(t, e, h, o, u);
    }, De = function() {
      s.drawElementText(t, e, null, a);
    }, j = e.pstyle("ghost").value === "yes";
    if (j) {
      var N = e.pstyle("ghost-offset-x").pfValue, $ = e.pstyle("ghost-offset-y").pfValue, Q = e.pstyle("ghost-opacity").value, K = Q * d;
      t.translate(N, $), J(), Ae(), H(Q * I), ie(), ue(K, !0), W(Q * F), ge(), ce(L !== 0 || A !== 0), ue(K, !1), fe(K), t.translate(-N, -$);
    }
    c && t.translate(-h.x, -h.y), we(), c && t.translate(h.x, h.y), J(), Ae(), H(), ie(), ue(d, !0), W(), ge(), ce(L !== 0 || A !== 0), ue(d, !1), fe(), c && t.translate(-h.x, -h.y), De(), xe(), r && t.translate(y.x1, y.y1);
  }
};
var ku = function(e) {
  if (!["overlay", "underlay"].includes(e))
    throw new Error("Invalid state");
  return function(r, a, n, i, s) {
    var o = this;
    if (a.visible()) {
      var u = a.pstyle("".concat(e, "-padding")).pfValue, l = a.pstyle("".concat(e, "-opacity")).value, f = a.pstyle("".concat(e, "-color")).value, h = a.pstyle("".concat(e, "-shape")).value, d = a.pstyle("".concat(e, "-corner-radius")).value;
      if (l > 0) {
        if (n = n || a.position(), i == null || s == null) {
          var c = a.padding();
          i = a.width() + 2 * c, s = a.height() + 2 * c;
        }
        o.colorFillStyle(r, f[0], f[1], f[2], l), o.nodeShapes[h].draw(r, n.x, n.y, i + u * 2, s + u * 2, d), r.fill();
      }
    }
  };
};
Zr.drawNodeOverlay = ku("overlay");
Zr.drawNodeUnderlay = ku("underlay");
Zr.hasPie = function(t) {
  return t = t[0], t._private.hasPie;
};
Zr.drawPie = function(t, e, r, a) {
  e = e[0], a = a || e.position();
  var n = e.cy().style(), i = e.pstyle("pie-size"), s = a.x, o = a.y, u = e.width(), l = e.height(), f = Math.min(u, l) / 2, h = 0, d = this.usePaths();
  d && (s = 0, o = 0), i.units === "%" ? f = f * i.pfValue : i.pfValue !== void 0 && (f = i.pfValue / 2);
  for (var c = 1; c <= n.pieBackgroundN; c++) {
    var v = e.pstyle("pie-" + c + "-background-size").value, p = e.pstyle("pie-" + c + "-background-color").value, g = e.pstyle("pie-" + c + "-background-opacity").value * r, y = v / 100;
    y + h > 1 && (y = 1 - h);
    var b = 1.5 * Math.PI + 2 * Math.PI * h, m = 2 * Math.PI * y, T = b + m;
    v === 0 || h >= 1 || h + y > 1 || (t.beginPath(), t.moveTo(s, o), t.arc(s, o, f, b, T), t.closePath(), this.colorFillStyle(t, p[0], p[1], p[2], g), t.fill(), h += y);
  }
};
var yt = {}, Fp = 100;
yt.getPixelRatio = function() {
  var t = this.data.contexts[0];
  if (this.forcedPixelRatio != null)
    return this.forcedPixelRatio;
  var e = t.backingStorePixelRatio || t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
  return (window.devicePixelRatio || 1) / e;
};
yt.paintCache = function(t) {
  for (var e = this.paintCaches = this.paintCaches || [], r = !0, a, n = 0; n < e.length; n++)
    if (a = e[n], a.context === t) {
      r = !1;
      break;
    }
  return r && (a = {
    context: t
  }, e.push(a)), a;
};
yt.createGradientStyleFor = function(t, e, r, a, n) {
  var i, s = this.usePaths(), o = r.pstyle(e + "-gradient-stop-colors").value, u = r.pstyle(e + "-gradient-stop-positions").pfValue;
  if (a === "radial-gradient")
    if (r.isEdge()) {
      var l = r.sourceEndpoint(), f = r.targetEndpoint(), h = r.midpoint(), d = gr(l, h), c = gr(f, h);
      i = t.createRadialGradient(h.x, h.y, 0, h.x, h.y, Math.max(d, c));
    } else {
      var v = s ? {
        x: 0,
        y: 0
      } : r.position(), p = r.paddedWidth(), g = r.paddedHeight();
      i = t.createRadialGradient(v.x, v.y, 0, v.x, v.y, Math.max(p, g));
    }
  else if (r.isEdge()) {
    var y = r.sourceEndpoint(), b = r.targetEndpoint();
    i = t.createLinearGradient(y.x, y.y, b.x, b.y);
  } else {
    var m = s ? {
      x: 0,
      y: 0
    } : r.position(), T = r.paddedWidth(), C = r.paddedHeight(), S = T / 2, E = C / 2, x = r.pstyle("background-gradient-direction").value;
    switch (x) {
      case "to-bottom":
        i = t.createLinearGradient(m.x, m.y - E, m.x, m.y + E);
        break;
      case "to-top":
        i = t.createLinearGradient(m.x, m.y + E, m.x, m.y - E);
        break;
      case "to-left":
        i = t.createLinearGradient(m.x + S, m.y, m.x - S, m.y);
        break;
      case "to-right":
        i = t.createLinearGradient(m.x - S, m.y, m.x + S, m.y);
        break;
      case "to-bottom-right":
      case "to-right-bottom":
        i = t.createLinearGradient(m.x - S, m.y - E, m.x + S, m.y + E);
        break;
      case "to-top-right":
      case "to-right-top":
        i = t.createLinearGradient(m.x - S, m.y + E, m.x + S, m.y - E);
        break;
      case "to-bottom-left":
      case "to-left-bottom":
        i = t.createLinearGradient(m.x + S, m.y - E, m.x - S, m.y + E);
        break;
      case "to-top-left":
      case "to-left-top":
        i = t.createLinearGradient(m.x + S, m.y + E, m.x - S, m.y - E);
        break;
    }
  }
  if (!i)
    return null;
  for (var w = u.length === o.length, D = o.length, L = 0; L < D; L++)
    i.addColorStop(w ? u[L] : L / (D - 1), "rgba(" + o[L][0] + "," + o[L][1] + "," + o[L][2] + "," + n + ")");
  return i;
};
yt.gradientFillStyle = function(t, e, r, a) {
  var n = this.createGradientStyleFor(t, "background", e, r, a);
  if (!n)
    return null;
  t.fillStyle = n;
};
yt.colorFillStyle = function(t, e, r, a, n) {
  t.fillStyle = "rgba(" + e + "," + r + "," + a + "," + n + ")";
};
yt.eleFillStyle = function(t, e, r) {
  var a = e.pstyle("background-fill").value;
  if (a === "linear-gradient" || a === "radial-gradient")
    this.gradientFillStyle(t, e, a, r);
  else {
    var n = e.pstyle("background-color").value;
    this.colorFillStyle(t, n[0], n[1], n[2], r);
  }
};
yt.gradientStrokeStyle = function(t, e, r, a) {
  var n = this.createGradientStyleFor(t, "line", e, r, a);
  if (!n)
    return null;
  t.strokeStyle = n;
};
yt.colorStrokeStyle = function(t, e, r, a, n) {
  t.strokeStyle = "rgba(" + e + "," + r + "," + a + "," + n + ")";
};
yt.eleStrokeStyle = function(t, e, r) {
  var a = e.pstyle("line-fill").value;
  if (a === "linear-gradient" || a === "radial-gradient")
    this.gradientStrokeStyle(t, e, a, r);
  else {
    var n = e.pstyle("line-color").value;
    this.colorStrokeStyle(t, n[0], n[1], n[2], r);
  }
};
yt.matchCanvasSize = function(t) {
  var e = this, r = e.data, a = e.findContainerClientCoords(), n = a[2], i = a[3], s = e.getPixelRatio(), o = e.motionBlurPxRatio;
  (t === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_NODE] || t === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_DRAG]) && (s = o);
  var u = n * s, l = i * s, f;
  if (!(u === e.canvasWidth && l === e.canvasHeight)) {
    e.fontCaches = null;
    var h = r.canvasContainer;
    h.style.width = n + "px", h.style.height = i + "px";
    for (var d = 0; d < e.CANVAS_LAYERS; d++)
      f = r.canvases[d], f.width = u, f.height = l, f.style.width = n + "px", f.style.height = i + "px";
    for (var d = 0; d < e.BUFFER_COUNT; d++)
      f = r.bufferCanvases[d], f.width = u, f.height = l, f.style.width = n + "px", f.style.height = i + "px";
    e.textureMult = 1, s <= 1 && (f = r.bufferCanvases[e.TEXTURE_BUFFER], e.textureMult = 2, f.width = u * e.textureMult, f.height = l * e.textureMult), e.canvasWidth = u, e.canvasHeight = l;
  }
};
yt.renderTo = function(t, e, r, a) {
  this.render({
    forcedContext: t,
    forcedZoom: e,
    forcedPan: r,
    drawAllLayers: !0,
    forcedPxRatio: a
  });
};
yt.render = function(t) {
  t = t || Co();
  var e = t.forcedContext, r = t.drawAllLayers, a = t.drawOnlyNodeLayer, n = t.forcedZoom, i = t.forcedPan, s = this, o = t.forcedPxRatio === void 0 ? this.getPixelRatio() : t.forcedPxRatio, u = s.cy, l = s.data, f = l.canvasNeedsRedraw, h = s.textureOnViewport && !e && (s.pinching || s.hoverData.dragging || s.swipePanning || s.data.wheelZooming), d = t.motionBlur !== void 0 ? t.motionBlur : s.motionBlur, c = s.motionBlurPxRatio, v = u.hasCompoundNodes(), p = s.hoverData.draggingEles, g = !!(s.hoverData.selecting || s.touchData.selecting);
  d = d && !e && s.motionBlurEnabled && !g;
  var y = d;
  e || (s.prevPxRatio !== o && (s.invalidateContainerClientCoordsCache(), s.matchCanvasSize(s.container), s.redrawHint("eles", !0), s.redrawHint("drag", !0)), s.prevPxRatio = o), !e && s.motionBlurTimeout && clearTimeout(s.motionBlurTimeout), d && (s.mbFrames == null && (s.mbFrames = 0), s.mbFrames++, s.mbFrames < 3 && (y = !1), s.mbFrames > s.minMbLowQualFrames && (s.motionBlurPxRatio = s.mbPxRBlurry)), s.clearingMotionBlur && (s.motionBlurPxRatio = 1), s.textureDrawLastFrame && !h && (f[s.NODE] = !0, f[s.SELECT_BOX] = !0);
  var b = u.style(), m = u.zoom(), T = n !== void 0 ? n : m, C = u.pan(), S = {
    x: C.x,
    y: C.y
  }, E = {
    zoom: m,
    pan: {
      x: C.x,
      y: C.y
    }
  }, x = s.prevViewport, w = x === void 0 || E.zoom !== x.zoom || E.pan.x !== x.pan.x || E.pan.y !== x.pan.y;
  !w && !(p && !v) && (s.motionBlurPxRatio = 1), i && (S = i), T *= o, S.x *= o, S.y *= o;
  var D = s.getCachedZSortedEles();
  function L(te, ie, ue, ce, fe) {
    var ge = te.globalCompositeOperation;
    te.globalCompositeOperation = "destination-out", s.colorFillStyle(te, 255, 255, 255, s.motionBlurTransparency), te.fillRect(ie, ue, ce, fe), te.globalCompositeOperation = ge;
  }
  function A(te, ie) {
    var ue, ce, fe, ge;
    !s.clearingMotionBlur && (te === l.bufferContexts[s.MOTIONBLUR_BUFFER_NODE] || te === l.bufferContexts[s.MOTIONBLUR_BUFFER_DRAG]) ? (ue = {
      x: C.x * c,
      y: C.y * c
    }, ce = m * c, fe = s.canvasWidth * c, ge = s.canvasHeight * c) : (ue = S, ce = T, fe = s.canvasWidth, ge = s.canvasHeight), te.setTransform(1, 0, 0, 1, 0, 0), ie === "motionBlur" ? L(te, 0, 0, fe, ge) : !e && (ie === void 0 || ie) && te.clearRect(0, 0, fe, ge), r || (te.translate(ue.x, ue.y), te.scale(ce, ce)), i && te.translate(i.x, i.y), n && te.scale(n, n);
  }
  if (h || (s.textureDrawLastFrame = !1), h) {
    if (s.textureDrawLastFrame = !0, !s.textureCache) {
      s.textureCache = {}, s.textureCache.bb = u.mutableElements().boundingBox(), s.textureCache.texture = s.data.bufferCanvases[s.TEXTURE_BUFFER];
      var I = s.data.bufferContexts[s.TEXTURE_BUFFER];
      I.setTransform(1, 0, 0, 1, 0, 0), I.clearRect(0, 0, s.canvasWidth * s.textureMult, s.canvasHeight * s.textureMult), s.render({
        forcedContext: I,
        drawOnlyNodeLayer: !0,
        forcedPxRatio: o * s.textureMult
      });
      var E = s.textureCache.viewport = {
        zoom: u.zoom(),
        pan: u.pan(),
        width: s.canvasWidth,
        height: s.canvasHeight
      };
      E.mpan = {
        x: (0 - E.pan.x) / E.zoom,
        y: (0 - E.pan.y) / E.zoom
      };
    }
    f[s.DRAG] = !1, f[s.NODE] = !1;
    var O = l.contexts[s.NODE], M = s.textureCache.texture, E = s.textureCache.viewport;
    O.setTransform(1, 0, 0, 1, 0, 0), d ? L(O, 0, 0, E.width, E.height) : O.clearRect(0, 0, E.width, E.height);
    var R = b.core("outside-texture-bg-color").value, k = b.core("outside-texture-bg-opacity").value;
    s.colorFillStyle(O, R[0], R[1], R[2], k), O.fillRect(0, 0, E.width, E.height);
    var m = u.zoom();
    A(O, !1), O.clearRect(E.mpan.x, E.mpan.y, E.width / E.zoom / o, E.height / E.zoom / o), O.drawImage(M, E.mpan.x, E.mpan.y, E.width / E.zoom / o, E.height / E.zoom / o);
  } else
    s.textureOnViewport && !e && (s.textureCache = null);
  var P = u.extent(), B = s.pinching || s.hoverData.dragging || s.swipePanning || s.data.wheelZooming || s.hoverData.draggingEles || s.cy.animated(), V = s.hideEdgesOnViewport && B, F = [];
  if (F[s.NODE] = !f[s.NODE] && d && !s.clearedForMotionBlur[s.NODE] || s.clearingMotionBlur, F[s.NODE] && (s.clearedForMotionBlur[s.NODE] = !0), F[s.DRAG] = !f[s.DRAG] && d && !s.clearedForMotionBlur[s.DRAG] || s.clearingMotionBlur, F[s.DRAG] && (s.clearedForMotionBlur[s.DRAG] = !0), f[s.NODE] || r || a || F[s.NODE]) {
    var G = d && !F[s.NODE] && c !== 1, O = e || (G ? s.data.bufferContexts[s.MOTIONBLUR_BUFFER_NODE] : l.contexts[s.NODE]), Y = d && !G ? "motionBlur" : void 0;
    A(O, Y), V ? s.drawCachedNodes(O, D.nondrag, o, P) : s.drawLayeredElements(O, D.nondrag, o, P), s.debug && s.drawDebugPoints(O, D.nondrag), !r && !d && (f[s.NODE] = !1);
  }
  if (!a && (f[s.DRAG] || r || F[s.DRAG])) {
    var G = d && !F[s.DRAG] && c !== 1, O = e || (G ? s.data.bufferContexts[s.MOTIONBLUR_BUFFER_DRAG] : l.contexts[s.DRAG]);
    A(O, d && !G ? "motionBlur" : void 0), V ? s.drawCachedNodes(O, D.drag, o, P) : s.drawCachedElements(O, D.drag, o, P), s.debug && s.drawDebugPoints(O, D.drag), !r && !d && (f[s.DRAG] = !1);
  }
  if (s.showFps || !a && f[s.SELECT_BOX] && !r) {
    var O = e || l.contexts[s.SELECT_BOX];
    if (A(O), s.selection[4] == 1 && (s.hoverData.selecting || s.touchData.selecting)) {
      var m = s.cy.zoom(), _ = b.core("selection-box-border-width").value / m;
      O.lineWidth = _, O.fillStyle = "rgba(" + b.core("selection-box-color").value[0] + "," + b.core("selection-box-color").value[1] + "," + b.core("selection-box-color").value[2] + "," + b.core("selection-box-opacity").value + ")", O.fillRect(s.selection[0], s.selection[1], s.selection[2] - s.selection[0], s.selection[3] - s.selection[1]), _ > 0 && (O.strokeStyle = "rgba(" + b.core("selection-box-border-color").value[0] + "," + b.core("selection-box-border-color").value[1] + "," + b.core("selection-box-border-color").value[2] + "," + b.core("selection-box-opacity").value + ")", O.strokeRect(s.selection[0], s.selection[1], s.selection[2] - s.selection[0], s.selection[3] - s.selection[1]));
    }
    if (l.bgActivePosistion && !s.hoverData.selecting) {
      var m = s.cy.zoom(), q = l.bgActivePosistion;
      O.fillStyle = "rgba(" + b.core("active-bg-color").value[0] + "," + b.core("active-bg-color").value[1] + "," + b.core("active-bg-color").value[2] + "," + b.core("active-bg-opacity").value + ")", O.beginPath(), O.arc(q.x, q.y, b.core("active-bg-size").pfValue / m, 0, 2 * Math.PI), O.fill();
    }
    var U = s.lastRedrawTime;
    if (s.showFps && U) {
      U = Math.round(U);
      var z = Math.round(1e3 / U);
      O.setTransform(1, 0, 0, 1, 0, 0), O.fillStyle = "rgba(255, 0, 0, 0.75)", O.strokeStyle = "rgba(255, 0, 0, 0.75)", O.lineWidth = 1, O.fillText("1 frame = " + U + " ms = " + z + " fps", 0, 20);
      var H = 60;
      O.strokeRect(0, 30, 250, 20), O.fillRect(0, 30, 250 * Math.min(z / H, 1), 20);
    }
    r || (f[s.SELECT_BOX] = !1);
  }
  if (d && c !== 1) {
    var W = l.contexts[s.NODE], J = s.data.bufferCanvases[s.MOTIONBLUR_BUFFER_NODE], ee = l.contexts[s.DRAG], oe = s.data.bufferCanvases[s.MOTIONBLUR_BUFFER_DRAG], me = function(ie, ue, ce) {
      ie.setTransform(1, 0, 0, 1, 0, 0), ce || !y ? ie.clearRect(0, 0, s.canvasWidth, s.canvasHeight) : L(ie, 0, 0, s.canvasWidth, s.canvasHeight);
      var fe = c;
      ie.drawImage(
        ue,
        // img
        0,
        0,
        // sx, sy
        s.canvasWidth * fe,
        s.canvasHeight * fe,
        // sw, sh
        0,
        0,
        // x, y
        s.canvasWidth,
        s.canvasHeight
        // w, h
      );
    };
    (f[s.NODE] || F[s.NODE]) && (me(W, J, F[s.NODE]), f[s.NODE] = !1), (f[s.DRAG] || F[s.DRAG]) && (me(ee, oe, F[s.DRAG]), f[s.DRAG] = !1);
  }
  s.prevViewport = E, s.clearingMotionBlur && (s.clearingMotionBlur = !1, s.motionBlurCleared = !0, s.motionBlur = !0), d && (s.motionBlurTimeout = setTimeout(function() {
    s.motionBlurTimeout = null, s.clearedForMotionBlur[s.NODE] = !1, s.clearedForMotionBlur[s.DRAG] = !1, s.motionBlur = !1, s.clearingMotionBlur = !h, s.mbFrames = 0, f[s.NODE] = !0, f[s.DRAG] = !0, s.redraw();
  }, Fp)), e || u.emit("render");
};
var sr = {};
sr.drawPolygonPath = function(t, e, r, a, n, i) {
  var s = a / 2, o = n / 2;
  t.beginPath && t.beginPath(), t.moveTo(e + s * i[0], r + o * i[1]);
  for (var u = 1; u < i.length / 2; u++)
    t.lineTo(e + s * i[u * 2], r + o * i[u * 2 + 1]);
  t.closePath();
};
sr.drawRoundPolygonPath = function(t, e, r, a, n, i, s) {
  s.forEach(function(o) {
    return xu(t, o);
  }), t.closePath();
};
sr.drawRoundRectanglePath = function(t, e, r, a, n, i) {
  var s = a / 2, o = n / 2, u = i === "auto" ? pr(a, n) : Math.min(i, o, s);
  t.beginPath && t.beginPath(), t.moveTo(e, r - o), t.arcTo(e + s, r - o, e + s, r, u), t.arcTo(e + s, r + o, e, r + o, u), t.arcTo(e - s, r + o, e - s, r, u), t.arcTo(e - s, r - o, e, r - o, u), t.lineTo(e, r - o), t.closePath();
};
sr.drawBottomRoundRectanglePath = function(t, e, r, a, n, i) {
  var s = a / 2, o = n / 2, u = i === "auto" ? pr(a, n) : i;
  t.beginPath && t.beginPath(), t.moveTo(e, r - o), t.lineTo(e + s, r - o), t.lineTo(e + s, r), t.arcTo(e + s, r + o, e, r + o, u), t.arcTo(e - s, r + o, e - s, r, u), t.lineTo(e - s, r - o), t.lineTo(e, r - o), t.closePath();
};
sr.drawCutRectanglePath = function(t, e, r, a, n, i, s) {
  var o = a / 2, u = n / 2, l = s === "auto" ? xi() : s;
  t.beginPath && t.beginPath(), t.moveTo(e - o + l, r - u), t.lineTo(e + o - l, r - u), t.lineTo(e + o, r - u + l), t.lineTo(e + o, r + u - l), t.lineTo(e + o - l, r + u), t.lineTo(e - o + l, r + u), t.lineTo(e - o, r + u - l), t.lineTo(e - o, r - u + l), t.closePath();
};
sr.drawBarrelPath = function(t, e, r, a, n) {
  var i = a / 2, s = n / 2, o = e - i, u = e + i, l = r - s, f = r + s, h = Kn(a, n), d = h.widthOffset, c = h.heightOffset, v = h.ctrlPtOffsetPct * d;
  t.beginPath && t.beginPath(), t.moveTo(o, l + c), t.lineTo(o, f - c), t.quadraticCurveTo(o + v, f, o + d, f), t.lineTo(u - d, f), t.quadraticCurveTo(u - v, f, u, f - c), t.lineTo(u, l + c), t.quadraticCurveTo(u - v, l, u - d, l), t.lineTo(o + d, l), t.quadraticCurveTo(o + v, l, o, l + c), t.closePath();
};
var eo = Math.sin(0), to = Math.cos(0), oi = {}, ui = {}, Pu = Math.PI / 40;
for (var Or = 0 * Math.PI; Or < 2 * Math.PI; Or += Pu)
  oi[Or] = Math.sin(Or), ui[Or] = Math.cos(Or);
sr.drawEllipsePath = function(t, e, r, a, n) {
  if (t.beginPath && t.beginPath(), t.ellipse)
    t.ellipse(e, r, a / 2, n / 2, 0, 0, 2 * Math.PI);
  else
    for (var i, s, o = a / 2, u = n / 2, l = 0 * Math.PI; l < 2 * Math.PI; l += Pu)
      i = e - o * oi[l] * eo + o * ui[l] * to, s = r + u * ui[l] * eo + u * oi[l] * to, l === 0 ? t.moveTo(i, s) : t.lineTo(i, s);
  t.closePath();
};
var Na = {};
Na.createBuffer = function(t, e) {
  var r = document.createElement("canvas");
  return r.width = t, r.height = e, [r, r.getContext("2d")];
};
Na.bufferCanvasImage = function(t) {
  var e = this.cy, r = e.mutableElements(), a = r.boundingBox(), n = this.findContainerClientCoords(), i = t.full ? Math.ceil(a.w) : n[2], s = t.full ? Math.ceil(a.h) : n[3], o = ne(t.maxWidth) || ne(t.maxHeight), u = this.getPixelRatio(), l = 1;
  if (t.scale !== void 0)
    i *= t.scale, s *= t.scale, l = t.scale;
  else if (o) {
    var f = 1 / 0, h = 1 / 0;
    ne(t.maxWidth) && (f = l * t.maxWidth / i), ne(t.maxHeight) && (h = l * t.maxHeight / s), l = Math.min(f, h), i *= l, s *= l;
  }
  o || (i *= u, s *= u, l *= u);
  var d = document.createElement("canvas");
  d.width = i, d.height = s, d.style.width = i + "px", d.style.height = s + "px";
  var c = d.getContext("2d");
  if (i > 0 && s > 0) {
    c.clearRect(0, 0, i, s), c.globalCompositeOperation = "source-over";
    var v = this.getCachedZSortedEles();
    if (t.full)
      c.translate(-a.x1 * l, -a.y1 * l), c.scale(l, l), this.drawElements(c, v), c.scale(1 / l, 1 / l), c.translate(a.x1 * l, a.y1 * l);
    else {
      var p = e.pan(), g = {
        x: p.x * l,
        y: p.y * l
      };
      l *= e.zoom(), c.translate(g.x, g.y), c.scale(l, l), this.drawElements(c, v), c.scale(1 / l, 1 / l), c.translate(-g.x, -g.y);
    }
    t.bg && (c.globalCompositeOperation = "destination-over", c.fillStyle = t.bg, c.rect(0, 0, i, s), c.fill());
  }
  return d;
};
function Gp(t, e) {
  for (var r = atob(t), a = new ArrayBuffer(r.length), n = new Uint8Array(a), i = 0; i < r.length; i++)
    n[i] = r.charCodeAt(i);
  return new Blob([a], {
    type: e
  });
}
function ro(t) {
  var e = t.indexOf(",");
  return t.substr(e + 1);
}
function Bu(t, e, r) {
  var a = function() {
    return e.toDataURL(r, t.quality);
  };
  switch (t.output) {
    case "blob-promise":
      return new $r(function(n, i) {
        try {
          e.toBlob(function(s) {
            s != null ? n(s) : i(new Error("`canvas.toBlob()` sent a null value in its callback"));
          }, r, t.quality);
        } catch (s) {
          i(s);
        }
      });
    case "blob":
      return Gp(ro(a()), r);
    case "base64":
      return ro(a());
    case "base64uri":
    default:
      return a();
  }
}
Na.png = function(t) {
  return Bu(t, this.bufferCanvasImage(t), "image/png");
};
Na.jpg = function(t) {
  return Bu(t, this.bufferCanvasImage(t), "image/jpeg");
};
var Fu = {};
Fu.nodeShapeImpl = function(t, e, r, a, n, i, s, o) {
  switch (t) {
    case "ellipse":
      return this.drawEllipsePath(e, r, a, n, i);
    case "polygon":
      return this.drawPolygonPath(e, r, a, n, i, s);
    case "round-polygon":
      return this.drawRoundPolygonPath(e, r, a, n, i, s, o);
    case "roundrectangle":
    case "round-rectangle":
      return this.drawRoundRectanglePath(e, r, a, n, i, o);
    case "cutrectangle":
    case "cut-rectangle":
      return this.drawCutRectanglePath(e, r, a, n, i, s, o);
    case "bottomroundrectangle":
    case "bottom-round-rectangle":
      return this.drawBottomRoundRectanglePath(e, r, a, n, i, o);
    case "barrel":
      return this.drawBarrelPath(e, r, a, n, i);
  }
};
var zp = Gu, Se = Gu.prototype;
Se.CANVAS_LAYERS = 3;
Se.SELECT_BOX = 0;
Se.DRAG = 1;
Se.NODE = 2;
Se.BUFFER_COUNT = 3;
Se.TEXTURE_BUFFER = 0;
Se.MOTIONBLUR_BUFFER_NODE = 1;
Se.MOTIONBLUR_BUFFER_DRAG = 2;
function Gu(t) {
  var e = this;
  e.data = {
    canvases: new Array(Se.CANVAS_LAYERS),
    contexts: new Array(Se.CANVAS_LAYERS),
    canvasNeedsRedraw: new Array(Se.CANVAS_LAYERS),
    bufferCanvases: new Array(Se.BUFFER_COUNT),
    bufferContexts: new Array(Se.CANVAS_LAYERS)
  };
  var r = "-webkit-tap-highlight-color", a = "rgba(0,0,0,0)";
  e.data.canvasContainer = document.createElement("div");
  var n = e.data.canvasContainer.style;
  e.data.canvasContainer.style[r] = a, n.position = "relative", n.zIndex = "0", n.overflow = "hidden";
  var i = t.cy.container();
  i.appendChild(e.data.canvasContainer), i.style[r] = a;
  var s = {
    "-webkit-user-select": "none",
    "-moz-user-select": "-moz-none",
    "user-select": "none",
    "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
    "outline-style": "none"
  };
  Dl() && (s["-ms-touch-action"] = "none", s["touch-action"] = "none");
  for (var o = 0; o < Se.CANVAS_LAYERS; o++) {
    var u = e.data.canvases[o] = document.createElement("canvas");
    e.data.contexts[o] = u.getContext("2d"), Object.keys(s).forEach(function(U) {
      u.style[U] = s[U];
    }), u.style.position = "absolute", u.setAttribute("data-id", "layer" + o), u.style.zIndex = String(Se.CANVAS_LAYERS - o), e.data.canvasContainer.appendChild(u), e.data.canvasNeedsRedraw[o] = !1;
  }
  e.data.topCanvas = e.data.canvases[0], e.data.canvases[Se.NODE].setAttribute("data-id", "layer" + Se.NODE + "-node"), e.data.canvases[Se.SELECT_BOX].setAttribute("data-id", "layer" + Se.SELECT_BOX + "-selectbox"), e.data.canvases[Se.DRAG].setAttribute("data-id", "layer" + Se.DRAG + "-drag");
  for (var o = 0; o < Se.BUFFER_COUNT; o++)
    e.data.bufferCanvases[o] = document.createElement("canvas"), e.data.bufferContexts[o] = e.data.bufferCanvases[o].getContext("2d"), e.data.bufferCanvases[o].style.position = "absolute", e.data.bufferCanvases[o].setAttribute("data-id", "buffer" + o), e.data.bufferCanvases[o].style.zIndex = String(-o - 1), e.data.bufferCanvases[o].style.visibility = "hidden";
  e.pathsEnabled = !0;
  var l = gt(), f = function(z) {
    return {
      x: (z.x1 + z.x2) / 2,
      y: (z.y1 + z.y2) / 2
    };
  }, h = function(z) {
    return {
      x: -z.w / 2,
      y: -z.h / 2
    };
  }, d = function(z) {
    var H = z[0]._private, W = H.oldBackgroundTimestamp === H.backgroundTimestamp;
    return !W;
  }, c = function(z) {
    return z[0]._private.nodeKey;
  }, v = function(z) {
    return z[0]._private.labelStyleKey;
  }, p = function(z) {
    return z[0]._private.sourceLabelStyleKey;
  }, g = function(z) {
    return z[0]._private.targetLabelStyleKey;
  }, y = function(z, H, W, J, ee) {
    return e.drawElement(z, H, W, !1, !1, ee);
  }, b = function(z, H, W, J, ee) {
    return e.drawElementText(z, H, W, J, "main", ee);
  }, m = function(z, H, W, J, ee) {
    return e.drawElementText(z, H, W, J, "source", ee);
  }, T = function(z, H, W, J, ee) {
    return e.drawElementText(z, H, W, J, "target", ee);
  }, C = function(z) {
    return z.boundingBox(), z[0]._private.bodyBounds;
  }, S = function(z) {
    return z.boundingBox(), z[0]._private.labelBounds.main || l;
  }, E = function(z) {
    return z.boundingBox(), z[0]._private.labelBounds.source || l;
  }, x = function(z) {
    return z.boundingBox(), z[0]._private.labelBounds.target || l;
  }, w = function(z, H) {
    return H;
  }, D = function(z) {
    return f(C(z));
  }, L = function(z, H, W) {
    var J = z ? z + "-" : "";
    return {
      x: H.x + W.pstyle(J + "text-margin-x").pfValue,
      y: H.y + W.pstyle(J + "text-margin-y").pfValue
    };
  }, A = function(z, H, W) {
    var J = z[0]._private.rscratch;
    return {
      x: J[H],
      y: J[W]
    };
  }, I = function(z) {
    return L("", A(z, "labelX", "labelY"), z);
  }, O = function(z) {
    return L("source", A(z, "sourceLabelX", "sourceLabelY"), z);
  }, M = function(z) {
    return L("target", A(z, "targetLabelX", "targetLabelY"), z);
  }, R = function(z) {
    return h(C(z));
  }, k = function(z) {
    return h(E(z));
  }, P = function(z) {
    return h(x(z));
  }, B = function(z) {
    var H = S(z), W = h(S(z));
    if (z.isNode()) {
      switch (z.pstyle("text-halign").value) {
        case "left":
          W.x = -H.w;
          break;
        case "right":
          W.x = 0;
          break;
      }
      switch (z.pstyle("text-valign").value) {
        case "top":
          W.y = -H.h;
          break;
        case "bottom":
          W.y = 0;
          break;
      }
    }
    return W;
  }, V = e.data.eleTxrCache = new ua(e, {
    getKey: c,
    doesEleInvalidateKey: d,
    drawElement: y,
    getBoundingBox: C,
    getRotationPoint: D,
    getRotationOffset: R,
    allowEdgeTxrCaching: !1,
    allowParentTxrCaching: !1
  }), F = e.data.lblTxrCache = new ua(e, {
    getKey: v,
    drawElement: b,
    getBoundingBox: S,
    getRotationPoint: I,
    getRotationOffset: B,
    isVisible: w
  }), G = e.data.slbTxrCache = new ua(e, {
    getKey: p,
    drawElement: m,
    getBoundingBox: E,
    getRotationPoint: O,
    getRotationOffset: k,
    isVisible: w
  }), Y = e.data.tlbTxrCache = new ua(e, {
    getKey: g,
    drawElement: T,
    getBoundingBox: x,
    getRotationPoint: M,
    getRotationOffset: P,
    isVisible: w
  }), _ = e.data.lyrTxrCache = new Iu(e);
  e.onUpdateEleCalcs(function(z, H) {
    V.invalidateElements(H), F.invalidateElements(H), G.invalidateElements(H), Y.invalidateElements(H), _.invalidateElements(H);
    for (var W = 0; W < H.length; W++) {
      var J = H[W]._private;
      J.oldBackgroundTimestamp = J.backgroundTimestamp;
    }
  });
  var q = function(z) {
    for (var H = 0; H < z.length; H++)
      _.enqueueElementRefinement(z[H].ele);
  };
  V.onDequeue(q), F.onDequeue(q), G.onDequeue(q), Y.onDequeue(q);
}
Se.redrawHint = function(t, e) {
  var r = this;
  switch (t) {
    case "eles":
      r.data.canvasNeedsRedraw[Se.NODE] = e;
      break;
    case "drag":
      r.data.canvasNeedsRedraw[Se.DRAG] = e;
      break;
    case "select":
      r.data.canvasNeedsRedraw[Se.SELECT_BOX] = e;
      break;
  }
};
var Vp = typeof Path2D != "undefined";
Se.path2dEnabled = function(t) {
  if (t === void 0)
    return this.pathsEnabled;
  this.pathsEnabled = !!t;
};
Se.usePaths = function() {
  return Vp && this.pathsEnabled;
};
Se.setImgSmoothing = function(t, e) {
  t.imageSmoothingEnabled != null ? t.imageSmoothingEnabled = e : (t.webkitImageSmoothingEnabled = e, t.mozImageSmoothingEnabled = e, t.msImageSmoothingEnabled = e);
};
Se.getImgSmoothing = function(t) {
  return t.imageSmoothingEnabled != null ? t.imageSmoothingEnabled : t.webkitImageSmoothingEnabled || t.mozImageSmoothingEnabled || t.msImageSmoothingEnabled;
};
Se.makeOffscreenCanvas = function(t, e) {
  var r;
  return (typeof OffscreenCanvas == "undefined" ? "undefined" : Xe(OffscreenCanvas)) !== "undefined" ? r = new OffscreenCanvas(t, e) : (r = document.createElement("canvas"), r.width = t, r.height = e), r;
};
[Mu, zt, Xt, Bi, xr, Zr, yt, sr, Na, Fu].forEach(function(t) {
  be(Se, t);
});
var Up = [{
  name: "null",
  impl: bu
}, {
  name: "base",
  impl: Ou
}, {
  name: "canvas",
  impl: zp
}], $p = [{
  type: "layout",
  extensions: Wg
}, {
  type: "renderer",
  extensions: Up
}], zu = {}, Vu = {};
function Uu(t, e, r) {
  var a = r, n = function(x) {
    Ne("Can not register `" + e + "` for `" + t + "` since `" + x + "` already exists in the prototype and can not be overridden");
  };
  if (t === "core") {
    if (wa.prototype[e])
      return n(e);
    wa.prototype[e] = r;
  } else if (t === "collection") {
    if (et.prototype[e])
      return n(e);
    et.prototype[e] = r;
  } else if (t === "layout") {
    for (var i = function(x) {
      this.options = x, r.call(this, x), Ce(this._private) || (this._private = {}), this._private.cy = x.cy, this._private.listeners = [], this.createEmitter();
    }, s = i.prototype = Object.create(r.prototype), o = [], u = 0; u < o.length; u++) {
      var l = o[u];
      s[l] = s[l] || function() {
        return this;
      };
    }
    s.start && !s.run ? s.run = function() {
      return this.start(), this;
    } : !s.start && s.run && (s.start = function() {
      return this.run(), this;
    });
    var f = r.prototype.stop;
    s.stop = function() {
      var E = this.options;
      if (E && E.animate) {
        var x = this.animations;
        if (x)
          for (var w = 0; w < x.length; w++)
            x[w].stop();
      }
      return f ? f.call(this) : this.emit("layoutstop"), this;
    }, s.destroy || (s.destroy = function() {
      return this;
    }), s.cy = function() {
      return this._private.cy;
    };
    var h = function(x) {
      return x._private.cy;
    }, d = {
      addEventFields: function(x, w) {
        w.layout = x, w.cy = h(x), w.target = x;
      },
      bubble: function() {
        return !0;
      },
      parent: function(x) {
        return h(x);
      }
    };
    be(s, {
      createEmitter: function() {
        return this._private.emitter = new Tn(d, this), this;
      },
      emitter: function() {
        return this._private.emitter;
      },
      on: function(x, w) {
        return this.emitter().on(x, w), this;
      },
      one: function(x, w) {
        return this.emitter().one(x, w), this;
      },
      once: function(x, w) {
        return this.emitter().one(x, w), this;
      },
      removeListener: function(x, w) {
        return this.emitter().removeListener(x, w), this;
      },
      removeAllListeners: function() {
        return this.emitter().removeAllListeners(), this;
      },
      emit: function(x, w) {
        return this.emitter().emit(x, w), this;
      }
    }), Oe.eventAliasesOn(s), a = i;
  } else if (t === "renderer" && e !== "null" && e !== "base") {
    var c = $u("renderer", "base"), v = c.prototype, p = r, g = r.prototype, y = function() {
      c.apply(this, arguments), p.apply(this, arguments);
    }, b = y.prototype;
    for (var m in v) {
      var T = v[m], C = g[m] != null;
      if (C)
        return n(m);
      b[m] = T;
    }
    for (var S in g)
      b[S] = g[S];
    v.clientFunctions.forEach(function(E) {
      b[E] = b[E] || function() {
        ze("Renderer does not implement `renderer." + E + "()` on its prototype");
      };
    }), a = y;
  } else if (t === "__proto__" || t === "constructor" || t === "prototype")
    return ze(t + " is an illegal type to be registered, possibly lead to prototype pollutions");
  return co({
    map: zu,
    keys: [t, e],
    value: a
  });
}
function $u(t, e) {
  return vo({
    map: zu,
    keys: [t, e]
  });
}
function Yp(t, e, r, a, n) {
  return co({
    map: Vu,
    keys: [t, e, r, a],
    value: n
  });
}
function _p(t, e, r, a) {
  return vo({
    map: Vu,
    keys: [t, e, r, a]
  });
}
var li = function() {
  if (arguments.length === 2)
    return $u.apply(null, arguments);
  if (arguments.length === 3)
    return Uu.apply(null, arguments);
  if (arguments.length === 4)
    return _p.apply(null, arguments);
  if (arguments.length === 5)
    return Yp.apply(null, arguments);
  ze("Invalid extension access syntax");
};
wa.prototype.extension = li;
$p.forEach(function(t) {
  t.extensions.forEach(function(e) {
    Uu(t.type, e.name, e.impl);
  });
});
var Yu = function t() {
  if (!(this instanceof t))
    return new t();
  this.length = 0;
}, br = Yu.prototype;
br.instanceString = function() {
  return "stylesheet";
};
br.selector = function(t) {
  var e = this.length++;
  return this[e] = {
    selector: t,
    properties: []
  }, this;
};
br.css = function(t, e) {
  var r = this.length - 1;
  if (ve(t))
    this[r].properties.push({
      name: t,
      value: e
    });
  else if (Ce(t))
    for (var a = t, n = Object.keys(a), i = 0; i < n.length; i++) {
      var s = n[i], o = a[s];
      if (o != null) {
        var u = nt.properties[s] || nt.properties[vn(s)];
        if (u != null) {
          var l = u.name, f = o;
          this[r].properties.push({
            name: l,
            value: f
          });
        }
      }
    }
  return this;
};
br.style = br.css;
br.generateStyle = function(t) {
  var e = new nt(t);
  return this.appendToStyle(e);
};
br.appendToStyle = function(t) {
  for (var e = 0; e < this.length; e++) {
    var r = this[e], a = r.selector, n = r.properties;
    t.selector(a);
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      t.css(s.name, s.value);
    }
  }
  return t;
};
var Hp = "3.29.2", nr = function(e) {
  if (e === void 0 && (e = {}), Ce(e))
    return new wa(e);
  if (ve(e))
    return li.apply(li, arguments);
};
nr.use = function(t) {
  var e = Array.prototype.slice.call(arguments, 1);
  return e.unshift(nr), t.apply(null, e), this;
};
nr.warnings = function(t) {
  return xo(t);
};
nr.version = Hp;
nr.stylesheet = nr.Stylesheet = Yu;
var _u = { exports: {} }, Xn = { exports: {} }, qn = { exports: {} }, ao;
function Xp() {
  return ao || (ao = 1, function(t, e) {
    (function(a, n) {
      t.exports = n();
    })(hi, function() {
      return (
        /******/
        function(r) {
          var a = {};
          function n(i) {
            if (a[i])
              return a[i].exports;
            var s = a[i] = {
              /******/
              i,
              /******/
              l: !1,
              /******/
              exports: {}
              /******/
            };
            return r[i].call(s.exports, s, s.exports, n), s.l = !0, s.exports;
          }
          return n.m = r, n.c = a, n.i = function(i) {
            return i;
          }, n.d = function(i, s, o) {
            n.o(i, s) || Object.defineProperty(i, s, {
              /******/
              configurable: !1,
              /******/
              enumerable: !0,
              /******/
              get: o
              /******/
            });
          }, n.n = function(i) {
            var s = i && i.__esModule ? (
              /******/
              function() {
                return i.default;
              }
            ) : (
              /******/
              function() {
                return i;
              }
            );
            return n.d(s, "a", s), s;
          }, n.o = function(i, s) {
            return Object.prototype.hasOwnProperty.call(i, s);
          }, n.p = "", n(n.s = 26);
        }([
          /* 0 */
          /***/
          function(r, a, n) {
            function i() {
            }
            i.QUALITY = 1, i.DEFAULT_CREATE_BENDS_AS_NEEDED = !1, i.DEFAULT_INCREMENTAL = !1, i.DEFAULT_ANIMATION_ON_LAYOUT = !0, i.DEFAULT_ANIMATION_DURING_LAYOUT = !1, i.DEFAULT_ANIMATION_PERIOD = 50, i.DEFAULT_UNIFORM_LEAF_NODE_SIZES = !1, i.DEFAULT_GRAPH_MARGIN = 15, i.NODE_DIMENSIONS_INCLUDE_LABELS = !1, i.SIMPLE_NODE_SIZE = 40, i.SIMPLE_NODE_HALF_SIZE = i.SIMPLE_NODE_SIZE / 2, i.EMPTY_COMPOUND_NODE_SIZE = 40, i.MIN_EDGE_LENGTH = 1, i.WORLD_BOUNDARY = 1e6, i.INITIAL_WORLD_BOUNDARY = i.WORLD_BOUNDARY / 1e3, i.WORLD_CENTER_X = 1200, i.WORLD_CENTER_Y = 900, r.exports = i;
          },
          /* 1 */
          /***/
          function(r, a, n) {
            var i = n(2), s = n(8), o = n(9);
            function u(f, h, d) {
              i.call(this, d), this.isOverlapingSourceAndTarget = !1, this.vGraphObject = d, this.bendpoints = [], this.source = f, this.target = h;
            }
            u.prototype = Object.create(i.prototype);
            for (var l in i)
              u[l] = i[l];
            u.prototype.getSource = function() {
              return this.source;
            }, u.prototype.getTarget = function() {
              return this.target;
            }, u.prototype.isInterGraph = function() {
              return this.isInterGraph;
            }, u.prototype.getLength = function() {
              return this.length;
            }, u.prototype.isOverlapingSourceAndTarget = function() {
              return this.isOverlapingSourceAndTarget;
            }, u.prototype.getBendpoints = function() {
              return this.bendpoints;
            }, u.prototype.getLca = function() {
              return this.lca;
            }, u.prototype.getSourceInLca = function() {
              return this.sourceInLca;
            }, u.prototype.getTargetInLca = function() {
              return this.targetInLca;
            }, u.prototype.getOtherEnd = function(f) {
              if (this.source === f)
                return this.target;
              if (this.target === f)
                return this.source;
              throw "Node is not incident with this edge";
            }, u.prototype.getOtherEndInGraph = function(f, h) {
              for (var d = this.getOtherEnd(f), c = h.getGraphManager().getRoot(); ; ) {
                if (d.getOwner() == h)
                  return d;
                if (d.getOwner() == c)
                  break;
                d = d.getOwner().getParent();
              }
              return null;
            }, u.prototype.updateLength = function() {
              var f = new Array(4);
              this.isOverlapingSourceAndTarget = s.getIntersection(this.target.getRect(), this.source.getRect(), f), this.isOverlapingSourceAndTarget || (this.lengthX = f[0] - f[2], this.lengthY = f[1] - f[3], Math.abs(this.lengthX) < 1 && (this.lengthX = o.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = o.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
            }, u.prototype.updateLengthSimple = function() {
              this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), Math.abs(this.lengthX) < 1 && (this.lengthX = o.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = o.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
            }, r.exports = u;
          },
          /* 2 */
          /***/
          function(r, a, n) {
            function i(s) {
              this.vGraphObject = s;
            }
            r.exports = i;
          },
          /* 3 */
          /***/
          function(r, a, n) {
            var i = n(2), s = n(10), o = n(13), u = n(0), l = n(16), f = n(4);
            function h(c, v, p, g) {
              p == null && g == null && (g = v), i.call(this, g), c.graphManager != null && (c = c.graphManager), this.estimatedSize = s.MIN_VALUE, this.inclusionTreeDepth = s.MAX_VALUE, this.vGraphObject = g, this.edges = [], this.graphManager = c, p != null && v != null ? this.rect = new o(v.x, v.y, p.width, p.height) : this.rect = new o();
            }
            h.prototype = Object.create(i.prototype);
            for (var d in i)
              h[d] = i[d];
            h.prototype.getEdges = function() {
              return this.edges;
            }, h.prototype.getChild = function() {
              return this.child;
            }, h.prototype.getOwner = function() {
              return this.owner;
            }, h.prototype.getWidth = function() {
              return this.rect.width;
            }, h.prototype.setWidth = function(c) {
              this.rect.width = c;
            }, h.prototype.getHeight = function() {
              return this.rect.height;
            }, h.prototype.setHeight = function(c) {
              this.rect.height = c;
            }, h.prototype.getCenterX = function() {
              return this.rect.x + this.rect.width / 2;
            }, h.prototype.getCenterY = function() {
              return this.rect.y + this.rect.height / 2;
            }, h.prototype.getCenter = function() {
              return new f(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
            }, h.prototype.getLocation = function() {
              return new f(this.rect.x, this.rect.y);
            }, h.prototype.getRect = function() {
              return this.rect;
            }, h.prototype.getDiagonal = function() {
              return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
            }, h.prototype.getHalfTheDiagonal = function() {
              return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
            }, h.prototype.setRect = function(c, v) {
              this.rect.x = c.x, this.rect.y = c.y, this.rect.width = v.width, this.rect.height = v.height;
            }, h.prototype.setCenter = function(c, v) {
              this.rect.x = c - this.rect.width / 2, this.rect.y = v - this.rect.height / 2;
            }, h.prototype.setLocation = function(c, v) {
              this.rect.x = c, this.rect.y = v;
            }, h.prototype.moveBy = function(c, v) {
              this.rect.x += c, this.rect.y += v;
            }, h.prototype.getEdgeListToNode = function(c) {
              var v = [], p = this;
              return p.edges.forEach(function(g) {
                if (g.target == c) {
                  if (g.source != p)
                    throw "Incorrect edge source!";
                  v.push(g);
                }
              }), v;
            }, h.prototype.getEdgesBetween = function(c) {
              var v = [], p = this;
              return p.edges.forEach(function(g) {
                if (!(g.source == p || g.target == p))
                  throw "Incorrect edge source and/or target";
                (g.target == c || g.source == c) && v.push(g);
              }), v;
            }, h.prototype.getNeighborsList = function() {
              var c = /* @__PURE__ */ new Set(), v = this;
              return v.edges.forEach(function(p) {
                if (p.source == v)
                  c.add(p.target);
                else {
                  if (p.target != v)
                    throw "Incorrect incidency!";
                  c.add(p.source);
                }
              }), c;
            }, h.prototype.withChildren = function() {
              var c = /* @__PURE__ */ new Set(), v, p;
              if (c.add(this), this.child != null)
                for (var g = this.child.getNodes(), y = 0; y < g.length; y++)
                  v = g[y], p = v.withChildren(), p.forEach(function(b) {
                    c.add(b);
                  });
              return c;
            }, h.prototype.getNoOfChildren = function() {
              var c = 0, v;
              if (this.child == null)
                c = 1;
              else
                for (var p = this.child.getNodes(), g = 0; g < p.length; g++)
                  v = p[g], c += v.getNoOfChildren();
              return c == 0 && (c = 1), c;
            }, h.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == s.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, h.prototype.calcEstimatedSize = function() {
              return this.child == null ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this.estimatedSize = this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this.estimatedSize);
            }, h.prototype.scatter = function() {
              var c, v, p = -u.INITIAL_WORLD_BOUNDARY, g = u.INITIAL_WORLD_BOUNDARY;
              c = u.WORLD_CENTER_X + l.nextDouble() * (g - p) + p;
              var y = -u.INITIAL_WORLD_BOUNDARY, b = u.INITIAL_WORLD_BOUNDARY;
              v = u.WORLD_CENTER_Y + l.nextDouble() * (b - y) + y, this.rect.x = c, this.rect.y = v;
            }, h.prototype.updateBounds = function() {
              if (this.getChild() == null)
                throw "assert failed";
              if (this.getChild().getNodes().length != 0) {
                var c = this.getChild();
                if (c.updateBounds(!0), this.rect.x = c.getLeft(), this.rect.y = c.getTop(), this.setWidth(c.getRight() - c.getLeft()), this.setHeight(c.getBottom() - c.getTop()), u.NODE_DIMENSIONS_INCLUDE_LABELS) {
                  var v = c.getRight() - c.getLeft(), p = c.getBottom() - c.getTop();
                  this.labelWidth > v && (this.rect.x -= (this.labelWidth - v) / 2, this.setWidth(this.labelWidth)), this.labelHeight > p && (this.labelPos == "center" ? this.rect.y -= (this.labelHeight - p) / 2 : this.labelPos == "top" && (this.rect.y -= this.labelHeight - p), this.setHeight(this.labelHeight));
                }
              }
            }, h.prototype.getInclusionTreeDepth = function() {
              if (this.inclusionTreeDepth == s.MAX_VALUE)
                throw "assert failed";
              return this.inclusionTreeDepth;
            }, h.prototype.transform = function(c) {
              var v = this.rect.x;
              v > u.WORLD_BOUNDARY ? v = u.WORLD_BOUNDARY : v < -u.WORLD_BOUNDARY && (v = -u.WORLD_BOUNDARY);
              var p = this.rect.y;
              p > u.WORLD_BOUNDARY ? p = u.WORLD_BOUNDARY : p < -u.WORLD_BOUNDARY && (p = -u.WORLD_BOUNDARY);
              var g = new f(v, p), y = c.inverseTransformPoint(g);
              this.setLocation(y.x, y.y);
            }, h.prototype.getLeft = function() {
              return this.rect.x;
            }, h.prototype.getRight = function() {
              return this.rect.x + this.rect.width;
            }, h.prototype.getTop = function() {
              return this.rect.y;
            }, h.prototype.getBottom = function() {
              return this.rect.y + this.rect.height;
            }, h.prototype.getParent = function() {
              return this.owner == null ? null : this.owner.getParent();
            }, r.exports = h;
          },
          /* 4 */
          /***/
          function(r, a, n) {
            function i(s, o) {
              s == null && o == null ? (this.x = 0, this.y = 0) : (this.x = s, this.y = o);
            }
            i.prototype.getX = function() {
              return this.x;
            }, i.prototype.getY = function() {
              return this.y;
            }, i.prototype.setX = function(s) {
              this.x = s;
            }, i.prototype.setY = function(s) {
              this.y = s;
            }, i.prototype.getDifference = function(s) {
              return new DimensionD(this.x - s.x, this.y - s.y);
            }, i.prototype.getCopy = function() {
              return new i(this.x, this.y);
            }, i.prototype.translate = function(s) {
              return this.x += s.width, this.y += s.height, this;
            }, r.exports = i;
          },
          /* 5 */
          /***/
          function(r, a, n) {
            var i = n(2), s = n(10), o = n(0), u = n(6), l = n(3), f = n(1), h = n(13), d = n(12), c = n(11);
            function v(g, y, b) {
              i.call(this, b), this.estimatedSize = s.MIN_VALUE, this.margin = o.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = !1, this.parent = g, y != null && y instanceof u ? this.graphManager = y : y != null && y instanceof Layout && (this.graphManager = y.graphManager);
            }
            v.prototype = Object.create(i.prototype);
            for (var p in i)
              v[p] = i[p];
            v.prototype.getNodes = function() {
              return this.nodes;
            }, v.prototype.getEdges = function() {
              return this.edges;
            }, v.prototype.getGraphManager = function() {
              return this.graphManager;
            }, v.prototype.getParent = function() {
              return this.parent;
            }, v.prototype.getLeft = function() {
              return this.left;
            }, v.prototype.getRight = function() {
              return this.right;
            }, v.prototype.getTop = function() {
              return this.top;
            }, v.prototype.getBottom = function() {
              return this.bottom;
            }, v.prototype.isConnected = function() {
              return this.isConnected;
            }, v.prototype.add = function(g, y, b) {
              if (y == null && b == null) {
                var m = g;
                if (this.graphManager == null)
                  throw "Graph has no graph mgr!";
                if (this.getNodes().indexOf(m) > -1)
                  throw "Node already in graph!";
                return m.owner = this, this.getNodes().push(m), m;
              } else {
                var T = g;
                if (!(this.getNodes().indexOf(y) > -1 && this.getNodes().indexOf(b) > -1))
                  throw "Source or target not in graph!";
                if (!(y.owner == b.owner && y.owner == this))
                  throw "Both owners must be this graph!";
                return y.owner != b.owner ? null : (T.source = y, T.target = b, T.isInterGraph = !1, this.getEdges().push(T), y.edges.push(T), b != y && b.edges.push(T), T);
              }
            }, v.prototype.remove = function(g) {
              var y = g;
              if (g instanceof l) {
                if (y == null)
                  throw "Node is null!";
                if (!(y.owner != null && y.owner == this))
                  throw "Owner graph is invalid!";
                if (this.graphManager == null)
                  throw "Owner graph manager is invalid!";
                for (var b = y.edges.slice(), m, T = b.length, C = 0; C < T; C++)
                  m = b[C], m.isInterGraph ? this.graphManager.remove(m) : m.source.owner.remove(m);
                var S = this.nodes.indexOf(y);
                if (S == -1)
                  throw "Node not in owner node list!";
                this.nodes.splice(S, 1);
              } else if (g instanceof f) {
                var m = g;
                if (m == null)
                  throw "Edge is null!";
                if (!(m.source != null && m.target != null))
                  throw "Source and/or target is null!";
                if (!(m.source.owner != null && m.target.owner != null && m.source.owner == this && m.target.owner == this))
                  throw "Source and/or target owner is invalid!";
                var E = m.source.edges.indexOf(m), x = m.target.edges.indexOf(m);
                if (!(E > -1 && x > -1))
                  throw "Source and/or target doesn't know this edge!";
                m.source.edges.splice(E, 1), m.target != m.source && m.target.edges.splice(x, 1);
                var S = m.source.owner.getEdges().indexOf(m);
                if (S == -1)
                  throw "Not in owner's edge list!";
                m.source.owner.getEdges().splice(S, 1);
              }
            }, v.prototype.updateLeftTop = function() {
              for (var g = s.MAX_VALUE, y = s.MAX_VALUE, b, m, T, C = this.getNodes(), S = C.length, E = 0; E < S; E++) {
                var x = C[E];
                b = x.getTop(), m = x.getLeft(), g > b && (g = b), y > m && (y = m);
              }
              return g == s.MAX_VALUE ? null : (C[0].getParent().paddingLeft != null ? T = C[0].getParent().paddingLeft : T = this.margin, this.left = y - T, this.top = g - T, new d(this.left, this.top));
            }, v.prototype.updateBounds = function(g) {
              for (var y = s.MAX_VALUE, b = -s.MAX_VALUE, m = s.MAX_VALUE, T = -s.MAX_VALUE, C, S, E, x, w, D = this.nodes, L = D.length, A = 0; A < L; A++) {
                var I = D[A];
                g && I.child != null && I.updateBounds(), C = I.getLeft(), S = I.getRight(), E = I.getTop(), x = I.getBottom(), y > C && (y = C), b < S && (b = S), m > E && (m = E), T < x && (T = x);
              }
              var O = new h(y, m, b - y, T - m);
              y == s.MAX_VALUE && (this.left = this.parent.getLeft(), this.right = this.parent.getRight(), this.top = this.parent.getTop(), this.bottom = this.parent.getBottom()), D[0].getParent().paddingLeft != null ? w = D[0].getParent().paddingLeft : w = this.margin, this.left = O.x - w, this.right = O.x + O.width + w, this.top = O.y - w, this.bottom = O.y + O.height + w;
            }, v.calculateBounds = function(g) {
              for (var y = s.MAX_VALUE, b = -s.MAX_VALUE, m = s.MAX_VALUE, T = -s.MAX_VALUE, C, S, E, x, w = g.length, D = 0; D < w; D++) {
                var L = g[D];
                C = L.getLeft(), S = L.getRight(), E = L.getTop(), x = L.getBottom(), y > C && (y = C), b < S && (b = S), m > E && (m = E), T < x && (T = x);
              }
              var A = new h(y, m, b - y, T - m);
              return A;
            }, v.prototype.getInclusionTreeDepth = function() {
              return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
            }, v.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == s.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, v.prototype.calcEstimatedSize = function() {
              for (var g = 0, y = this.nodes, b = y.length, m = 0; m < b; m++) {
                var T = y[m];
                g += T.calcEstimatedSize();
              }
              return g == 0 ? this.estimatedSize = o.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = g / Math.sqrt(this.nodes.length), this.estimatedSize;
            }, v.prototype.updateConnected = function() {
              var g = this;
              if (this.nodes.length == 0) {
                this.isConnected = !0;
                return;
              }
              var y = new c(), b = /* @__PURE__ */ new Set(), m = this.nodes[0], T, C, S = m.withChildren();
              for (S.forEach(function(A) {
                y.push(A), b.add(A);
              }); y.length !== 0; ) {
                m = y.shift(), T = m.getEdges();
                for (var E = T.length, x = 0; x < E; x++) {
                  var w = T[x];
                  if (C = w.getOtherEndInGraph(m, this), C != null && !b.has(C)) {
                    var D = C.withChildren();
                    D.forEach(function(A) {
                      y.push(A), b.add(A);
                    });
                  }
                }
              }
              if (this.isConnected = !1, b.size >= this.nodes.length) {
                var L = 0;
                b.forEach(function(A) {
                  A.owner == g && L++;
                }), L == this.nodes.length && (this.isConnected = !0);
              }
            }, r.exports = v;
          },
          /* 6 */
          /***/
          function(r, a, n) {
            var i, s = n(1);
            function o(u) {
              i = n(5), this.layout = u, this.graphs = [], this.edges = [];
            }
            o.prototype.addRoot = function() {
              var u = this.layout.newGraph(), l = this.layout.newNode(null), f = this.add(u, l);
              return this.setRootGraph(f), this.rootGraph;
            }, o.prototype.add = function(u, l, f, h, d) {
              if (f == null && h == null && d == null) {
                if (u == null)
                  throw "Graph is null!";
                if (l == null)
                  throw "Parent node is null!";
                if (this.graphs.indexOf(u) > -1)
                  throw "Graph already in this graph mgr!";
                if (this.graphs.push(u), u.parent != null)
                  throw "Already has a parent!";
                if (l.child != null)
                  throw "Already has a child!";
                return u.parent = l, l.child = u, u;
              } else {
                d = f, h = l, f = u;
                var c = h.getOwner(), v = d.getOwner();
                if (!(c != null && c.getGraphManager() == this))
                  throw "Source not in this graph mgr!";
                if (!(v != null && v.getGraphManager() == this))
                  throw "Target not in this graph mgr!";
                if (c == v)
                  return f.isInterGraph = !1, c.add(f, h, d);
                if (f.isInterGraph = !0, f.source = h, f.target = d, this.edges.indexOf(f) > -1)
                  throw "Edge already in inter-graph edge list!";
                if (this.edges.push(f), !(f.source != null && f.target != null))
                  throw "Edge source and/or target is null!";
                if (!(f.source.edges.indexOf(f) == -1 && f.target.edges.indexOf(f) == -1))
                  throw "Edge already in source and/or target incidency list!";
                return f.source.edges.push(f), f.target.edges.push(f), f;
              }
            }, o.prototype.remove = function(u) {
              if (u instanceof i) {
                var l = u;
                if (l.getGraphManager() != this)
                  throw "Graph not in this graph mgr";
                if (!(l == this.rootGraph || l.parent != null && l.parent.graphManager == this))
                  throw "Invalid parent node!";
                var f = [];
                f = f.concat(l.getEdges());
                for (var h, d = f.length, c = 0; c < d; c++)
                  h = f[c], l.remove(h);
                var v = [];
                v = v.concat(l.getNodes());
                var p;
                d = v.length;
                for (var c = 0; c < d; c++)
                  p = v[c], l.remove(p);
                l == this.rootGraph && this.setRootGraph(null);
                var g = this.graphs.indexOf(l);
                this.graphs.splice(g, 1), l.parent = null;
              } else if (u instanceof s) {
                if (h = u, h == null)
                  throw "Edge is null!";
                if (!h.isInterGraph)
                  throw "Not an inter-graph edge!";
                if (!(h.source != null && h.target != null))
                  throw "Source and/or target is null!";
                if (!(h.source.edges.indexOf(h) != -1 && h.target.edges.indexOf(h) != -1))
                  throw "Source and/or target doesn't know this edge!";
                var g = h.source.edges.indexOf(h);
                if (h.source.edges.splice(g, 1), g = h.target.edges.indexOf(h), h.target.edges.splice(g, 1), !(h.source.owner != null && h.source.owner.getGraphManager() != null))
                  throw "Edge owner graph or owner graph manager is null!";
                if (h.source.owner.getGraphManager().edges.indexOf(h) == -1)
                  throw "Not in owner graph manager's edge list!";
                var g = h.source.owner.getGraphManager().edges.indexOf(h);
                h.source.owner.getGraphManager().edges.splice(g, 1);
              }
            }, o.prototype.updateBounds = function() {
              this.rootGraph.updateBounds(!0);
            }, o.prototype.getGraphs = function() {
              return this.graphs;
            }, o.prototype.getAllNodes = function() {
              if (this.allNodes == null) {
                for (var u = [], l = this.getGraphs(), f = l.length, h = 0; h < f; h++)
                  u = u.concat(l[h].getNodes());
                this.allNodes = u;
              }
              return this.allNodes;
            }, o.prototype.resetAllNodes = function() {
              this.allNodes = null;
            }, o.prototype.resetAllEdges = function() {
              this.allEdges = null;
            }, o.prototype.resetAllNodesToApplyGravitation = function() {
              this.allNodesToApplyGravitation = null;
            }, o.prototype.getAllEdges = function() {
              if (this.allEdges == null) {
                var u = [], l = this.getGraphs();
                l.length;
                for (var f = 0; f < l.length; f++)
                  u = u.concat(l[f].getEdges());
                u = u.concat(this.edges), this.allEdges = u;
              }
              return this.allEdges;
            }, o.prototype.getAllNodesToApplyGravitation = function() {
              return this.allNodesToApplyGravitation;
            }, o.prototype.setAllNodesToApplyGravitation = function(u) {
              if (this.allNodesToApplyGravitation != null)
                throw "assert failed";
              this.allNodesToApplyGravitation = u;
            }, o.prototype.getRoot = function() {
              return this.rootGraph;
            }, o.prototype.setRootGraph = function(u) {
              if (u.getGraphManager() != this)
                throw "Root not in this graph mgr!";
              this.rootGraph = u, u.parent == null && (u.parent = this.layout.newNode("Root node"));
            }, o.prototype.getLayout = function() {
              return this.layout;
            }, o.prototype.isOneAncestorOfOther = function(u, l) {
              if (!(u != null && l != null))
                throw "assert failed";
              if (u == l)
                return !0;
              var f = u.getOwner(), h;
              do {
                if (h = f.getParent(), h == null)
                  break;
                if (h == l)
                  return !0;
                if (f = h.getOwner(), f == null)
                  break;
              } while (!0);
              f = l.getOwner();
              do {
                if (h = f.getParent(), h == null)
                  break;
                if (h == u)
                  return !0;
                if (f = h.getOwner(), f == null)
                  break;
              } while (!0);
              return !1;
            }, o.prototype.calcLowestCommonAncestors = function() {
              for (var u, l, f, h, d, c = this.getAllEdges(), v = c.length, p = 0; p < v; p++) {
                if (u = c[p], l = u.source, f = u.target, u.lca = null, u.sourceInLca = l, u.targetInLca = f, l == f) {
                  u.lca = l.getOwner();
                  continue;
                }
                for (h = l.getOwner(); u.lca == null; ) {
                  for (u.targetInLca = f, d = f.getOwner(); u.lca == null; ) {
                    if (d == h) {
                      u.lca = d;
                      break;
                    }
                    if (d == this.rootGraph)
                      break;
                    if (u.lca != null)
                      throw "assert failed";
                    u.targetInLca = d.getParent(), d = u.targetInLca.getOwner();
                  }
                  if (h == this.rootGraph)
                    break;
                  u.lca == null && (u.sourceInLca = h.getParent(), h = u.sourceInLca.getOwner());
                }
                if (u.lca == null)
                  throw "assert failed";
              }
            }, o.prototype.calcLowestCommonAncestor = function(u, l) {
              if (u == l)
                return u.getOwner();
              var f = u.getOwner();
              do {
                if (f == null)
                  break;
                var h = l.getOwner();
                do {
                  if (h == null)
                    break;
                  if (h == f)
                    return h;
                  h = h.getParent().getOwner();
                } while (!0);
                f = f.getParent().getOwner();
              } while (!0);
              return f;
            }, o.prototype.calcInclusionTreeDepths = function(u, l) {
              u == null && l == null && (u = this.rootGraph, l = 1);
              for (var f, h = u.getNodes(), d = h.length, c = 0; c < d; c++)
                f = h[c], f.inclusionTreeDepth = l, f.child != null && this.calcInclusionTreeDepths(f.child, l + 1);
            }, o.prototype.includesInvalidEdge = function() {
              for (var u, l = this.edges.length, f = 0; f < l; f++)
                if (u = this.edges[f], this.isOneAncestorOfOther(u.source, u.target))
                  return !0;
              return !1;
            }, r.exports = o;
          },
          /* 7 */
          /***/
          function(r, a, n) {
            var i = n(0);
            function s() {
            }
            for (var o in i)
              s[o] = i[o];
            s.MAX_ITERATIONS = 2500, s.DEFAULT_EDGE_LENGTH = 50, s.DEFAULT_SPRING_STRENGTH = 0.45, s.DEFAULT_REPULSION_STRENGTH = 4500, s.DEFAULT_GRAVITY_STRENGTH = 0.4, s.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, s.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, s.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, s.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = !0, s.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = !0, s.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3, s.COOLING_ADAPTATION_FACTOR = 0.33, s.ADAPTATION_LOWER_NODE_LIMIT = 1e3, s.ADAPTATION_UPPER_NODE_LIMIT = 5e3, s.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, s.MAX_NODE_DISPLACEMENT = s.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, s.MIN_REPULSION_DIST = s.DEFAULT_EDGE_LENGTH / 10, s.CONVERGENCE_CHECK_PERIOD = 100, s.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1, s.MIN_EDGE_LENGTH = 1, s.GRID_CALCULATION_CHECK_PERIOD = 10, r.exports = s;
          },
          /* 8 */
          /***/
          function(r, a, n) {
            var i = n(12);
            function s() {
            }
            s.calcSeparationAmount = function(o, u, l, f) {
              if (!o.intersects(u))
                throw "assert failed";
              var h = new Array(2);
              this.decideDirectionsForOverlappingNodes(o, u, h), l[0] = Math.min(o.getRight(), u.getRight()) - Math.max(o.x, u.x), l[1] = Math.min(o.getBottom(), u.getBottom()) - Math.max(o.y, u.y), o.getX() <= u.getX() && o.getRight() >= u.getRight() ? l[0] += Math.min(u.getX() - o.getX(), o.getRight() - u.getRight()) : u.getX() <= o.getX() && u.getRight() >= o.getRight() && (l[0] += Math.min(o.getX() - u.getX(), u.getRight() - o.getRight())), o.getY() <= u.getY() && o.getBottom() >= u.getBottom() ? l[1] += Math.min(u.getY() - o.getY(), o.getBottom() - u.getBottom()) : u.getY() <= o.getY() && u.getBottom() >= o.getBottom() && (l[1] += Math.min(o.getY() - u.getY(), u.getBottom() - o.getBottom()));
              var d = Math.abs((u.getCenterY() - o.getCenterY()) / (u.getCenterX() - o.getCenterX()));
              u.getCenterY() === o.getCenterY() && u.getCenterX() === o.getCenterX() && (d = 1);
              var c = d * l[0], v = l[1] / d;
              l[0] < v ? v = l[0] : c = l[1], l[0] = -1 * h[0] * (v / 2 + f), l[1] = -1 * h[1] * (c / 2 + f);
            }, s.decideDirectionsForOverlappingNodes = function(o, u, l) {
              o.getCenterX() < u.getCenterX() ? l[0] = -1 : l[0] = 1, o.getCenterY() < u.getCenterY() ? l[1] = -1 : l[1] = 1;
            }, s.getIntersection2 = function(o, u, l) {
              var f = o.getCenterX(), h = o.getCenterY(), d = u.getCenterX(), c = u.getCenterY();
              if (o.intersects(u))
                return l[0] = f, l[1] = h, l[2] = d, l[3] = c, !0;
              var v = o.getX(), p = o.getY(), g = o.getRight(), y = o.getX(), b = o.getBottom(), m = o.getRight(), T = o.getWidthHalf(), C = o.getHeightHalf(), S = u.getX(), E = u.getY(), x = u.getRight(), w = u.getX(), D = u.getBottom(), L = u.getRight(), A = u.getWidthHalf(), I = u.getHeightHalf(), O = !1, M = !1;
              if (f === d) {
                if (h > c)
                  return l[0] = f, l[1] = p, l[2] = d, l[3] = D, !1;
                if (h < c)
                  return l[0] = f, l[1] = b, l[2] = d, l[3] = E, !1;
              } else if (h === c) {
                if (f > d)
                  return l[0] = v, l[1] = h, l[2] = x, l[3] = c, !1;
                if (f < d)
                  return l[0] = g, l[1] = h, l[2] = S, l[3] = c, !1;
              } else {
                var R = o.height / o.width, k = u.height / u.width, P = (c - h) / (d - f), B = void 0, V = void 0, F = void 0, G = void 0, Y = void 0, _ = void 0;
                if (-R === P ? f > d ? (l[0] = y, l[1] = b, O = !0) : (l[0] = g, l[1] = p, O = !0) : R === P && (f > d ? (l[0] = v, l[1] = p, O = !0) : (l[0] = m, l[1] = b, O = !0)), -k === P ? d > f ? (l[2] = w, l[3] = D, M = !0) : (l[2] = x, l[3] = E, M = !0) : k === P && (d > f ? (l[2] = S, l[3] = E, M = !0) : (l[2] = L, l[3] = D, M = !0)), O && M)
                  return !1;
                if (f > d ? h > c ? (B = this.getCardinalDirection(R, P, 4), V = this.getCardinalDirection(k, P, 2)) : (B = this.getCardinalDirection(-R, P, 3), V = this.getCardinalDirection(-k, P, 1)) : h > c ? (B = this.getCardinalDirection(-R, P, 1), V = this.getCardinalDirection(-k, P, 3)) : (B = this.getCardinalDirection(R, P, 2), V = this.getCardinalDirection(k, P, 4)), !O)
                  switch (B) {
                    case 1:
                      G = p, F = f + -C / P, l[0] = F, l[1] = G;
                      break;
                    case 2:
                      F = m, G = h + T * P, l[0] = F, l[1] = G;
                      break;
                    case 3:
                      G = b, F = f + C / P, l[0] = F, l[1] = G;
                      break;
                    case 4:
                      F = y, G = h + -T * P, l[0] = F, l[1] = G;
                      break;
                  }
                if (!M)
                  switch (V) {
                    case 1:
                      _ = E, Y = d + -I / P, l[2] = Y, l[3] = _;
                      break;
                    case 2:
                      Y = L, _ = c + A * P, l[2] = Y, l[3] = _;
                      break;
                    case 3:
                      _ = D, Y = d + I / P, l[2] = Y, l[3] = _;
                      break;
                    case 4:
                      Y = w, _ = c + -A * P, l[2] = Y, l[3] = _;
                      break;
                  }
              }
              return !1;
            }, s.getCardinalDirection = function(o, u, l) {
              return o > u ? l : 1 + l % 4;
            }, s.getIntersection = function(o, u, l, f) {
              if (f == null)
                return this.getIntersection2(o, u, l);
              var h = o.x, d = o.y, c = u.x, v = u.y, p = l.x, g = l.y, y = f.x, b = f.y, m = void 0, T = void 0, C = void 0, S = void 0, E = void 0, x = void 0, w = void 0, D = void 0, L = void 0;
              return C = v - d, E = h - c, w = c * d - h * v, S = b - g, x = p - y, D = y * g - p * b, L = C * x - S * E, L === 0 ? null : (m = (E * D - x * w) / L, T = (S * w - C * D) / L, new i(m, T));
            }, s.angleOfVector = function(o, u, l, f) {
              var h = void 0;
              return o !== l ? (h = Math.atan((f - u) / (l - o)), l < o ? h += Math.PI : f < u && (h += this.TWO_PI)) : f < u ? h = this.ONE_AND_HALF_PI : h = this.HALF_PI, h;
            }, s.doIntersect = function(o, u, l, f) {
              var h = o.x, d = o.y, c = u.x, v = u.y, p = l.x, g = l.y, y = f.x, b = f.y, m = (c - h) * (b - g) - (y - p) * (v - d);
              if (m === 0)
                return !1;
              var T = ((b - g) * (y - h) + (p - y) * (b - d)) / m, C = ((d - v) * (y - h) + (c - h) * (b - d)) / m;
              return 0 < T && T < 1 && 0 < C && C < 1;
            }, s.HALF_PI = 0.5 * Math.PI, s.ONE_AND_HALF_PI = 1.5 * Math.PI, s.TWO_PI = 2 * Math.PI, s.THREE_PI = 3 * Math.PI, r.exports = s;
          },
          /* 9 */
          /***/
          function(r, a, n) {
            function i() {
            }
            i.sign = function(s) {
              return s > 0 ? 1 : s < 0 ? -1 : 0;
            }, i.floor = function(s) {
              return s < 0 ? Math.ceil(s) : Math.floor(s);
            }, i.ceil = function(s) {
              return s < 0 ? Math.floor(s) : Math.ceil(s);
            }, r.exports = i;
          },
          /* 10 */
          /***/
          function(r, a, n) {
            function i() {
            }
            i.MAX_VALUE = 2147483647, i.MIN_VALUE = -2147483648, r.exports = i;
          },
          /* 11 */
          /***/
          function(r, a, n) {
            var i = function() {
              function h(d, c) {
                for (var v = 0; v < c.length; v++) {
                  var p = c[v];
                  p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(d, p.key, p);
                }
              }
              return function(d, c, v) {
                return c && h(d.prototype, c), v && h(d, v), d;
              };
            }();
            function s(h, d) {
              if (!(h instanceof d))
                throw new TypeError("Cannot call a class as a function");
            }
            var o = function(d) {
              return { value: d, next: null, prev: null };
            }, u = function(d, c, v, p) {
              return d !== null ? d.next = c : p.head = c, v !== null ? v.prev = c : p.tail = c, c.prev = d, c.next = v, p.length++, c;
            }, l = function(d, c) {
              var v = d.prev, p = d.next;
              return v !== null ? v.next = p : c.head = p, p !== null ? p.prev = v : c.tail = v, d.prev = d.next = null, c.length--, d;
            }, f = function() {
              function h(d) {
                var c = this;
                s(this, h), this.length = 0, this.head = null, this.tail = null, d != null && d.forEach(function(v) {
                  return c.push(v);
                });
              }
              return i(h, [{
                key: "size",
                value: function() {
                  return this.length;
                }
              }, {
                key: "insertBefore",
                value: function(c, v) {
                  return u(v.prev, o(c), v, this);
                }
              }, {
                key: "insertAfter",
                value: function(c, v) {
                  return u(v, o(c), v.next, this);
                }
              }, {
                key: "insertNodeBefore",
                value: function(c, v) {
                  return u(v.prev, c, v, this);
                }
              }, {
                key: "insertNodeAfter",
                value: function(c, v) {
                  return u(v, c, v.next, this);
                }
              }, {
                key: "push",
                value: function(c) {
                  return u(this.tail, o(c), null, this);
                }
              }, {
                key: "unshift",
                value: function(c) {
                  return u(null, o(c), this.head, this);
                }
              }, {
                key: "remove",
                value: function(c) {
                  return l(c, this);
                }
              }, {
                key: "pop",
                value: function() {
                  return l(this.tail, this).value;
                }
              }, {
                key: "popNode",
                value: function() {
                  return l(this.tail, this);
                }
              }, {
                key: "shift",
                value: function() {
                  return l(this.head, this).value;
                }
              }, {
                key: "shiftNode",
                value: function() {
                  return l(this.head, this);
                }
              }, {
                key: "get_object_at",
                value: function(c) {
                  if (c <= this.length()) {
                    for (var v = 1, p = this.head; v < c; )
                      p = p.next, v++;
                    return p.value;
                  }
                }
              }, {
                key: "set_object_at",
                value: function(c, v) {
                  if (c <= this.length()) {
                    for (var p = 1, g = this.head; p < c; )
                      g = g.next, p++;
                    g.value = v;
                  }
                }
              }]), h;
            }();
            r.exports = f;
          },
          /* 12 */
          /***/
          function(r, a, n) {
            function i(s, o, u) {
              this.x = null, this.y = null, s == null && o == null && u == null ? (this.x = 0, this.y = 0) : typeof s == "number" && typeof o == "number" && u == null ? (this.x = s, this.y = o) : s.constructor.name == "Point" && o == null && u == null && (u = s, this.x = u.x, this.y = u.y);
            }
            i.prototype.getX = function() {
              return this.x;
            }, i.prototype.getY = function() {
              return this.y;
            }, i.prototype.getLocation = function() {
              return new i(this.x, this.y);
            }, i.prototype.setLocation = function(s, o, u) {
              s.constructor.name == "Point" && o == null && u == null ? (u = s, this.setLocation(u.x, u.y)) : typeof s == "number" && typeof o == "number" && u == null && (parseInt(s) == s && parseInt(o) == o ? this.move(s, o) : (this.x = Math.floor(s + 0.5), this.y = Math.floor(o + 0.5)));
            }, i.prototype.move = function(s, o) {
              this.x = s, this.y = o;
            }, i.prototype.translate = function(s, o) {
              this.x += s, this.y += o;
            }, i.prototype.equals = function(s) {
              if (s.constructor.name == "Point") {
                var o = s;
                return this.x == o.x && this.y == o.y;
              }
              return this == s;
            }, i.prototype.toString = function() {
              return new i().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
            }, r.exports = i;
          },
          /* 13 */
          /***/
          function(r, a, n) {
            function i(s, o, u, l) {
              this.x = 0, this.y = 0, this.width = 0, this.height = 0, s != null && o != null && u != null && l != null && (this.x = s, this.y = o, this.width = u, this.height = l);
            }
            i.prototype.getX = function() {
              return this.x;
            }, i.prototype.setX = function(s) {
              this.x = s;
            }, i.prototype.getY = function() {
              return this.y;
            }, i.prototype.setY = function(s) {
              this.y = s;
            }, i.prototype.getWidth = function() {
              return this.width;
            }, i.prototype.setWidth = function(s) {
              this.width = s;
            }, i.prototype.getHeight = function() {
              return this.height;
            }, i.prototype.setHeight = function(s) {
              this.height = s;
            }, i.prototype.getRight = function() {
              return this.x + this.width;
            }, i.prototype.getBottom = function() {
              return this.y + this.height;
            }, i.prototype.intersects = function(s) {
              return !(this.getRight() < s.x || this.getBottom() < s.y || s.getRight() < this.x || s.getBottom() < this.y);
            }, i.prototype.getCenterX = function() {
              return this.x + this.width / 2;
            }, i.prototype.getMinX = function() {
              return this.getX();
            }, i.prototype.getMaxX = function() {
              return this.getX() + this.width;
            }, i.prototype.getCenterY = function() {
              return this.y + this.height / 2;
            }, i.prototype.getMinY = function() {
              return this.getY();
            }, i.prototype.getMaxY = function() {
              return this.getY() + this.height;
            }, i.prototype.getWidthHalf = function() {
              return this.width / 2;
            }, i.prototype.getHeightHalf = function() {
              return this.height / 2;
            }, r.exports = i;
          },
          /* 14 */
          /***/
          function(r, a, n) {
            var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
              return typeof o;
            } : function(o) {
              return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
            };
            function s() {
            }
            s.lastID = 0, s.createID = function(o) {
              return s.isPrimitive(o) ? o : (o.uniqueID != null || (o.uniqueID = s.getString(), s.lastID++), o.uniqueID);
            }, s.getString = function(o) {
              return o == null && (o = s.lastID), "Object#" + o;
            }, s.isPrimitive = function(o) {
              var u = typeof o == "undefined" ? "undefined" : i(o);
              return o == null || u != "object" && u != "function";
            }, r.exports = s;
          },
          /* 15 */
          /***/
          function(r, a, n) {
            function i(p) {
              if (Array.isArray(p)) {
                for (var g = 0, y = Array(p.length); g < p.length; g++)
                  y[g] = p[g];
                return y;
              } else
                return Array.from(p);
            }
            var s = n(0), o = n(6), u = n(3), l = n(1), f = n(5), h = n(4), d = n(17), c = n(27);
            function v(p) {
              c.call(this), this.layoutQuality = s.QUALITY, this.createBendsAsNeeded = s.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = s.DEFAULT_INCREMENTAL, this.animationOnLayout = s.DEFAULT_ANIMATION_ON_LAYOUT, this.animationDuringLayout = s.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = s.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = s.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = /* @__PURE__ */ new Map(), this.graphManager = new o(this), this.isLayoutFinished = !1, this.isSubLayout = !1, this.isRemoteUse = !1, p != null && (this.isRemoteUse = p);
            }
            v.RANDOM_SEED = 1, v.prototype = Object.create(c.prototype), v.prototype.getGraphManager = function() {
              return this.graphManager;
            }, v.prototype.getAllNodes = function() {
              return this.graphManager.getAllNodes();
            }, v.prototype.getAllEdges = function() {
              return this.graphManager.getAllEdges();
            }, v.prototype.getAllNodesToApplyGravitation = function() {
              return this.graphManager.getAllNodesToApplyGravitation();
            }, v.prototype.newGraphManager = function() {
              var p = new o(this);
              return this.graphManager = p, p;
            }, v.prototype.newGraph = function(p) {
              return new f(null, this.graphManager, p);
            }, v.prototype.newNode = function(p) {
              return new u(this.graphManager, p);
            }, v.prototype.newEdge = function(p) {
              return new l(null, null, p);
            }, v.prototype.checkLayoutSuccess = function() {
              return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
            }, v.prototype.runLayout = function() {
              this.isLayoutFinished = !1, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters();
              var p;
              return this.checkLayoutSuccess() ? p = !1 : p = this.layout(), s.ANIMATE === "during" ? !1 : (p && (this.isSubLayout || this.doPostLayout()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = !0, p);
            }, v.prototype.doPostLayout = function() {
              this.incremental || this.transform(), this.update();
            }, v.prototype.update2 = function() {
              if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager.resetAllEdges()), !this.isRemoteUse) {
                for (var p = this.graphManager.getAllEdges(), g = 0; g < p.length; g++)
                  p[g];
                for (var y = this.graphManager.getRoot().getNodes(), g = 0; g < y.length; g++)
                  y[g];
                this.update(this.graphManager.getRoot());
              }
            }, v.prototype.update = function(p) {
              if (p == null)
                this.update2();
              else if (p instanceof u) {
                var g = p;
                if (g.getChild() != null)
                  for (var y = g.getChild().getNodes(), b = 0; b < y.length; b++)
                    update(y[b]);
                if (g.vGraphObject != null) {
                  var m = g.vGraphObject;
                  m.update(g);
                }
              } else if (p instanceof l) {
                var T = p;
                if (T.vGraphObject != null) {
                  var C = T.vGraphObject;
                  C.update(T);
                }
              } else if (p instanceof f) {
                var S = p;
                if (S.vGraphObject != null) {
                  var E = S.vGraphObject;
                  E.update(S);
                }
              }
            }, v.prototype.initParameters = function() {
              this.isSubLayout || (this.layoutQuality = s.QUALITY, this.animationDuringLayout = s.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = s.DEFAULT_ANIMATION_PERIOD, this.animationOnLayout = s.DEFAULT_ANIMATION_ON_LAYOUT, this.incremental = s.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = s.DEFAULT_CREATE_BENDS_AS_NEEDED, this.uniformLeafNodeSizes = s.DEFAULT_UNIFORM_LEAF_NODE_SIZES), this.animationDuringLayout && (this.animationOnLayout = !1);
            }, v.prototype.transform = function(p) {
              if (p == null)
                this.transform(new h(0, 0));
              else {
                var g = new d(), y = this.graphManager.getRoot().updateLeftTop();
                if (y != null) {
                  g.setWorldOrgX(p.x), g.setWorldOrgY(p.y), g.setDeviceOrgX(y.x), g.setDeviceOrgY(y.y);
                  for (var b = this.getAllNodes(), m, T = 0; T < b.length; T++)
                    m = b[T], m.transform(g);
                }
              }
            }, v.prototype.positionNodesRandomly = function(p) {
              if (p == null)
                this.positionNodesRandomly(this.getGraphManager().getRoot()), this.getGraphManager().getRoot().updateBounds(!0);
              else
                for (var g, y, b = p.getNodes(), m = 0; m < b.length; m++)
                  g = b[m], y = g.getChild(), y == null || y.getNodes().length == 0 ? g.scatter() : (this.positionNodesRandomly(y), g.updateBounds());
            }, v.prototype.getFlatForest = function() {
              for (var p = [], g = !0, y = this.graphManager.getRoot().getNodes(), b = !0, m = 0; m < y.length; m++)
                y[m].getChild() != null && (b = !1);
              if (!b)
                return p;
              var T = /* @__PURE__ */ new Set(), C = [], S = /* @__PURE__ */ new Map(), E = [];
              for (E = E.concat(y); E.length > 0 && g; ) {
                for (C.push(E[0]); C.length > 0 && g; ) {
                  var x = C[0];
                  C.splice(0, 1), T.add(x);
                  for (var w = x.getEdges(), m = 0; m < w.length; m++) {
                    var D = w[m].getOtherEnd(x);
                    if (S.get(x) != D)
                      if (!T.has(D))
                        C.push(D), S.set(D, x);
                      else {
                        g = !1;
                        break;
                      }
                  }
                }
                if (!g)
                  p = [];
                else {
                  var L = [].concat(i(T));
                  p.push(L);
                  for (var m = 0; m < L.length; m++) {
                    var A = L[m], I = E.indexOf(A);
                    I > -1 && E.splice(I, 1);
                  }
                  T = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Map();
                }
              }
              return p;
            }, v.prototype.createDummyNodesForBendpoints = function(p) {
              for (var g = [], y = p.source, b = this.graphManager.calcLowestCommonAncestor(p.source, p.target), m = 0; m < p.bendpoints.length; m++) {
                var T = this.newNode(null);
                T.setRect(new Point(0, 0), new Dimension(1, 1)), b.add(T);
                var C = this.newEdge(null);
                this.graphManager.add(C, y, T), g.add(T), y = T;
              }
              var C = this.newEdge(null);
              return this.graphManager.add(C, y, p.target), this.edgeToDummyNodes.set(p, g), p.isInterGraph() ? this.graphManager.remove(p) : b.remove(p), g;
            }, v.prototype.createBendpointsFromDummyNodes = function() {
              var p = [];
              p = p.concat(this.graphManager.getAllEdges()), p = [].concat(i(this.edgeToDummyNodes.keys())).concat(p);
              for (var g = 0; g < p.length; g++) {
                var y = p[g];
                if (y.bendpoints.length > 0) {
                  for (var b = this.edgeToDummyNodes.get(y), m = 0; m < b.length; m++) {
                    var T = b[m], C = new h(T.getCenterX(), T.getCenterY()), S = y.bendpoints.get(m);
                    S.x = C.x, S.y = C.y, T.getOwner().remove(T);
                  }
                  this.graphManager.add(y, y.source, y.target);
                }
              }
            }, v.transform = function(p, g, y, b) {
              if (y != null && b != null) {
                var m = g;
                if (p <= 50) {
                  var T = g / y;
                  m -= (g - T) / 50 * (50 - p);
                } else {
                  var C = g * b;
                  m += (C - g) / 50 * (p - 50);
                }
                return m;
              } else {
                var S, E;
                return p <= 50 ? (S = 9 * g / 500, E = g / 10) : (S = 9 * g / 50, E = -8 * g), S * p + E;
              }
            }, v.findCenterOfTree = function(p) {
              var g = [];
              g = g.concat(p);
              var y = [], b = /* @__PURE__ */ new Map(), m = !1, T = null;
              (g.length == 1 || g.length == 2) && (m = !0, T = g[0]);
              for (var C = 0; C < g.length; C++) {
                var S = g[C], E = S.getNeighborsList().size;
                b.set(S, S.getNeighborsList().size), E == 1 && y.push(S);
              }
              var x = [];
              for (x = x.concat(y); !m; ) {
                var w = [];
                w = w.concat(x), x = [];
                for (var C = 0; C < g.length; C++) {
                  var S = g[C], D = g.indexOf(S);
                  D >= 0 && g.splice(D, 1);
                  var L = S.getNeighborsList();
                  L.forEach(function(O) {
                    if (y.indexOf(O) < 0) {
                      var M = b.get(O), R = M - 1;
                      R == 1 && x.push(O), b.set(O, R);
                    }
                  });
                }
                y = y.concat(x), (g.length == 1 || g.length == 2) && (m = !0, T = g[0]);
              }
              return T;
            }, v.prototype.setGraphManager = function(p) {
              this.graphManager = p;
            }, r.exports = v;
          },
          /* 16 */
          /***/
          function(r, a, n) {
            function i() {
            }
            i.seed = 1, i.x = 0, i.nextDouble = function() {
              return i.x = Math.sin(i.seed++) * 1e4, i.x - Math.floor(i.x);
            }, r.exports = i;
          },
          /* 17 */
          /***/
          function(r, a, n) {
            var i = n(4);
            function s(o, u) {
              this.lworldOrgX = 0, this.lworldOrgY = 0, this.ldeviceOrgX = 0, this.ldeviceOrgY = 0, this.lworldExtX = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this.ldeviceExtY = 1;
            }
            s.prototype.getWorldOrgX = function() {
              return this.lworldOrgX;
            }, s.prototype.setWorldOrgX = function(o) {
              this.lworldOrgX = o;
            }, s.prototype.getWorldOrgY = function() {
              return this.lworldOrgY;
            }, s.prototype.setWorldOrgY = function(o) {
              this.lworldOrgY = o;
            }, s.prototype.getWorldExtX = function() {
              return this.lworldExtX;
            }, s.prototype.setWorldExtX = function(o) {
              this.lworldExtX = o;
            }, s.prototype.getWorldExtY = function() {
              return this.lworldExtY;
            }, s.prototype.setWorldExtY = function(o) {
              this.lworldExtY = o;
            }, s.prototype.getDeviceOrgX = function() {
              return this.ldeviceOrgX;
            }, s.prototype.setDeviceOrgX = function(o) {
              this.ldeviceOrgX = o;
            }, s.prototype.getDeviceOrgY = function() {
              return this.ldeviceOrgY;
            }, s.prototype.setDeviceOrgY = function(o) {
              this.ldeviceOrgY = o;
            }, s.prototype.getDeviceExtX = function() {
              return this.ldeviceExtX;
            }, s.prototype.setDeviceExtX = function(o) {
              this.ldeviceExtX = o;
            }, s.prototype.getDeviceExtY = function() {
              return this.ldeviceExtY;
            }, s.prototype.setDeviceExtY = function(o) {
              this.ldeviceExtY = o;
            }, s.prototype.transformX = function(o) {
              var u = 0, l = this.lworldExtX;
              return l != 0 && (u = this.ldeviceOrgX + (o - this.lworldOrgX) * this.ldeviceExtX / l), u;
            }, s.prototype.transformY = function(o) {
              var u = 0, l = this.lworldExtY;
              return l != 0 && (u = this.ldeviceOrgY + (o - this.lworldOrgY) * this.ldeviceExtY / l), u;
            }, s.prototype.inverseTransformX = function(o) {
              var u = 0, l = this.ldeviceExtX;
              return l != 0 && (u = this.lworldOrgX + (o - this.ldeviceOrgX) * this.lworldExtX / l), u;
            }, s.prototype.inverseTransformY = function(o) {
              var u = 0, l = this.ldeviceExtY;
              return l != 0 && (u = this.lworldOrgY + (o - this.ldeviceOrgY) * this.lworldExtY / l), u;
            }, s.prototype.inverseTransformPoint = function(o) {
              var u = new i(this.inverseTransformX(o.x), this.inverseTransformY(o.y));
              return u;
            }, r.exports = s;
          },
          /* 18 */
          /***/
          function(r, a, n) {
            function i(c) {
              if (Array.isArray(c)) {
                for (var v = 0, p = Array(c.length); v < c.length; v++)
                  p[v] = c[v];
                return p;
              } else
                return Array.from(c);
            }
            var s = n(15), o = n(7), u = n(0), l = n(8), f = n(9);
            function h() {
              s.call(this), this.useSmartIdealEdgeLengthCalculation = o.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.idealEdgeLength = o.DEFAULT_EDGE_LENGTH, this.springConstant = o.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = o.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = o.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = o.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = o.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = o.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * o.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = o.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = o.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = o.MAX_ITERATIONS;
            }
            h.prototype = Object.create(s.prototype);
            for (var d in s)
              h[d] = s[d];
            h.prototype.initParameters = function() {
              s.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = o.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
            }, h.prototype.calcIdealEdgeLengths = function() {
              for (var c, v, p, g, y, b, m = this.getGraphManager().getAllEdges(), T = 0; T < m.length; T++)
                c = m[T], c.idealLength = this.idealEdgeLength, c.isInterGraph && (p = c.getSource(), g = c.getTarget(), y = c.getSourceInLca().getEstimatedSize(), b = c.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (c.idealLength += y + b - 2 * u.SIMPLE_NODE_SIZE), v = c.getLca().getInclusionTreeDepth(), c.idealLength += o.DEFAULT_EDGE_LENGTH * o.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (p.getInclusionTreeDepth() + g.getInclusionTreeDepth() - 2 * v));
            }, h.prototype.initSpringEmbedder = function() {
              var c = this.getAllNodes().length;
              this.incremental ? (c > o.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = Math.max(this.coolingFactor * o.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (c - o.ADAPTATION_LOWER_NODE_LIMIT) / (o.ADAPTATION_UPPER_NODE_LIMIT - o.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - o.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = o.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (c > o.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = Math.max(o.COOLING_ADAPTATION_FACTOR, 1 - (c - o.ADAPTATION_LOWER_NODE_LIMIT) / (o.ADAPTATION_UPPER_NODE_LIMIT - o.ADAPTATION_LOWER_NODE_LIMIT) * (1 - o.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = o.MAX_NODE_DISPLACEMENT), this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations), this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = this.calcRepulsionRange();
            }, h.prototype.calcSpringForces = function() {
              for (var c = this.getAllEdges(), v, p = 0; p < c.length; p++)
                v = c[p], this.calcSpringForce(v, v.idealLength);
            }, h.prototype.calcRepulsionForces = function() {
              var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, p, g, y, b, m = this.getAllNodes(), T;
              if (this.useFRGridVariant)
                for (this.totalIterations % o.GRID_CALCULATION_CHECK_PERIOD == 1 && c && this.updateGrid(), T = /* @__PURE__ */ new Set(), p = 0; p < m.length; p++)
                  y = m[p], this.calculateRepulsionForceOfANode(y, T, c, v), T.add(y);
              else
                for (p = 0; p < m.length; p++)
                  for (y = m[p], g = p + 1; g < m.length; g++)
                    b = m[g], y.getOwner() == b.getOwner() && this.calcRepulsionForce(y, b);
            }, h.prototype.calcGravitationalForces = function() {
              for (var c, v = this.getAllNodesToApplyGravitation(), p = 0; p < v.length; p++)
                c = v[p], this.calcGravitationalForce(c);
            }, h.prototype.moveNodes = function() {
              for (var c = this.getAllNodes(), v, p = 0; p < c.length; p++)
                v = c[p], v.move();
            }, h.prototype.calcSpringForce = function(c, v) {
              var p = c.getSource(), g = c.getTarget(), y, b, m, T;
              if (this.uniformLeafNodeSizes && p.getChild() == null && g.getChild() == null)
                c.updateLengthSimple();
              else if (c.updateLength(), c.isOverlapingSourceAndTarget)
                return;
              y = c.getLength(), y != 0 && (b = this.springConstant * (y - v), m = b * (c.lengthX / y), T = b * (c.lengthY / y), p.springForceX += m, p.springForceY += T, g.springForceX -= m, g.springForceY -= T);
            }, h.prototype.calcRepulsionForce = function(c, v) {
              var p = c.getRect(), g = v.getRect(), y = new Array(2), b = new Array(4), m, T, C, S, E, x, w;
              if (p.intersects(g)) {
                l.calcSeparationAmount(p, g, y, o.DEFAULT_EDGE_LENGTH / 2), x = 2 * y[0], w = 2 * y[1];
                var D = c.noOfChildren * v.noOfChildren / (c.noOfChildren + v.noOfChildren);
                c.repulsionForceX -= D * x, c.repulsionForceY -= D * w, v.repulsionForceX += D * x, v.repulsionForceY += D * w;
              } else
                this.uniformLeafNodeSizes && c.getChild() == null && v.getChild() == null ? (m = g.getCenterX() - p.getCenterX(), T = g.getCenterY() - p.getCenterY()) : (l.getIntersection(p, g, b), m = b[2] - b[0], T = b[3] - b[1]), Math.abs(m) < o.MIN_REPULSION_DIST && (m = f.sign(m) * o.MIN_REPULSION_DIST), Math.abs(T) < o.MIN_REPULSION_DIST && (T = f.sign(T) * o.MIN_REPULSION_DIST), C = m * m + T * T, S = Math.sqrt(C), E = this.repulsionConstant * c.noOfChildren * v.noOfChildren / C, x = E * m / S, w = E * T / S, c.repulsionForceX -= x, c.repulsionForceY -= w, v.repulsionForceX += x, v.repulsionForceY += w;
            }, h.prototype.calcGravitationalForce = function(c) {
              var v, p, g, y, b, m, T, C;
              v = c.getOwner(), p = (v.getRight() + v.getLeft()) / 2, g = (v.getTop() + v.getBottom()) / 2, y = c.getCenterX() - p, b = c.getCenterY() - g, m = Math.abs(y) + c.getWidth() / 2, T = Math.abs(b) + c.getHeight() / 2, c.getOwner() == this.graphManager.getRoot() ? (C = v.getEstimatedSize() * this.gravityRangeFactor, (m > C || T > C) && (c.gravitationForceX = -this.gravityConstant * y, c.gravitationForceY = -this.gravityConstant * b)) : (C = v.getEstimatedSize() * this.compoundGravityRangeFactor, (m > C || T > C) && (c.gravitationForceX = -this.gravityConstant * y * this.compoundGravityConstant, c.gravitationForceY = -this.gravityConstant * b * this.compoundGravityConstant));
            }, h.prototype.isConverged = function() {
              var c, v = !1;
              return this.totalIterations > this.maxIterations / 3 && (v = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2), c = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, c || v;
            }, h.prototype.animate = function() {
              this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
            }, h.prototype.calcNoOfChildrenForAllNodes = function() {
              for (var c, v = this.graphManager.getAllNodes(), p = 0; p < v.length; p++)
                c = v[p], c.noOfChildren = c.getNoOfChildren();
            }, h.prototype.calcGrid = function(c) {
              var v = 0, p = 0;
              v = parseInt(Math.ceil((c.getRight() - c.getLeft()) / this.repulsionRange)), p = parseInt(Math.ceil((c.getBottom() - c.getTop()) / this.repulsionRange));
              for (var g = new Array(v), y = 0; y < v; y++)
                g[y] = new Array(p);
              for (var y = 0; y < v; y++)
                for (var b = 0; b < p; b++)
                  g[y][b] = new Array();
              return g;
            }, h.prototype.addNodeToGrid = function(c, v, p) {
              var g = 0, y = 0, b = 0, m = 0;
              g = parseInt(Math.floor((c.getRect().x - v) / this.repulsionRange)), y = parseInt(Math.floor((c.getRect().width + c.getRect().x - v) / this.repulsionRange)), b = parseInt(Math.floor((c.getRect().y - p) / this.repulsionRange)), m = parseInt(Math.floor((c.getRect().height + c.getRect().y - p) / this.repulsionRange));
              for (var T = g; T <= y; T++)
                for (var C = b; C <= m; C++)
                  this.grid[T][C].push(c), c.setGridCoordinates(g, y, b, m);
            }, h.prototype.updateGrid = function() {
              var c, v, p = this.getAllNodes();
              for (this.grid = this.calcGrid(this.graphManager.getRoot()), c = 0; c < p.length; c++)
                v = p[c], this.addNodeToGrid(v, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
            }, h.prototype.calculateRepulsionForceOfANode = function(c, v, p, g) {
              if (this.totalIterations % o.GRID_CALCULATION_CHECK_PERIOD == 1 && p || g) {
                var y = /* @__PURE__ */ new Set();
                c.surrounding = new Array();
                for (var b, m = this.grid, T = c.startX - 1; T < c.finishX + 2; T++)
                  for (var C = c.startY - 1; C < c.finishY + 2; C++)
                    if (!(T < 0 || C < 0 || T >= m.length || C >= m[0].length)) {
                      for (var S = 0; S < m[T][C].length; S++)
                        if (b = m[T][C][S], !(c.getOwner() != b.getOwner() || c == b) && !v.has(b) && !y.has(b)) {
                          var E = Math.abs(c.getCenterX() - b.getCenterX()) - (c.getWidth() / 2 + b.getWidth() / 2), x = Math.abs(c.getCenterY() - b.getCenterY()) - (c.getHeight() / 2 + b.getHeight() / 2);
                          E <= this.repulsionRange && x <= this.repulsionRange && y.add(b);
                        }
                    }
                c.surrounding = [].concat(i(y));
              }
              for (T = 0; T < c.surrounding.length; T++)
                this.calcRepulsionForce(c, c.surrounding[T]);
            }, h.prototype.calcRepulsionRange = function() {
              return 0;
            }, r.exports = h;
          },
          /* 19 */
          /***/
          function(r, a, n) {
            var i = n(1), s = n(7);
            function o(l, f, h) {
              i.call(this, l, f, h), this.idealLength = s.DEFAULT_EDGE_LENGTH;
            }
            o.prototype = Object.create(i.prototype);
            for (var u in i)
              o[u] = i[u];
            r.exports = o;
          },
          /* 20 */
          /***/
          function(r, a, n) {
            var i = n(3);
            function s(u, l, f, h) {
              i.call(this, u, l, f, h), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
            }
            s.prototype = Object.create(i.prototype);
            for (var o in i)
              s[o] = i[o];
            s.prototype.setGridCoordinates = function(u, l, f, h) {
              this.startX = u, this.finishX = l, this.startY = f, this.finishY = h;
            }, r.exports = s;
          },
          /* 21 */
          /***/
          function(r, a, n) {
            function i(s, o) {
              this.width = 0, this.height = 0, s !== null && o !== null && (this.height = o, this.width = s);
            }
            i.prototype.getWidth = function() {
              return this.width;
            }, i.prototype.setWidth = function(s) {
              this.width = s;
            }, i.prototype.getHeight = function() {
              return this.height;
            }, i.prototype.setHeight = function(s) {
              this.height = s;
            }, r.exports = i;
          },
          /* 22 */
          /***/
          function(r, a, n) {
            var i = n(14);
            function s() {
              this.map = {}, this.keys = [];
            }
            s.prototype.put = function(o, u) {
              var l = i.createID(o);
              this.contains(l) || (this.map[l] = u, this.keys.push(o));
            }, s.prototype.contains = function(o) {
              return i.createID(o), this.map[o] != null;
            }, s.prototype.get = function(o) {
              var u = i.createID(o);
              return this.map[u];
            }, s.prototype.keySet = function() {
              return this.keys;
            }, r.exports = s;
          },
          /* 23 */
          /***/
          function(r, a, n) {
            var i = n(14);
            function s() {
              this.set = {};
            }
            s.prototype.add = function(o) {
              var u = i.createID(o);
              this.contains(u) || (this.set[u] = o);
            }, s.prototype.remove = function(o) {
              delete this.set[i.createID(o)];
            }, s.prototype.clear = function() {
              this.set = {};
            }, s.prototype.contains = function(o) {
              return this.set[i.createID(o)] == o;
            }, s.prototype.isEmpty = function() {
              return this.size() === 0;
            }, s.prototype.size = function() {
              return Object.keys(this.set).length;
            }, s.prototype.addAllTo = function(o) {
              for (var u = Object.keys(this.set), l = u.length, f = 0; f < l; f++)
                o.push(this.set[u[f]]);
            }, s.prototype.size = function() {
              return Object.keys(this.set).length;
            }, s.prototype.addAll = function(o) {
              for (var u = o.length, l = 0; l < u; l++) {
                var f = o[l];
                this.add(f);
              }
            }, r.exports = s;
          },
          /* 24 */
          /***/
          function(r, a, n) {
            var i = function() {
              function l(f, h) {
                for (var d = 0; d < h.length; d++) {
                  var c = h[d];
                  c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(f, c.key, c);
                }
              }
              return function(f, h, d) {
                return h && l(f.prototype, h), d && l(f, d), f;
              };
            }();
            function s(l, f) {
              if (!(l instanceof f))
                throw new TypeError("Cannot call a class as a function");
            }
            var o = n(11), u = function() {
              function l(f, h) {
                s(this, l), (h !== null || h !== void 0) && (this.compareFunction = this._defaultCompareFunction);
                var d = void 0;
                f instanceof o ? d = f.size() : d = f.length, this._quicksort(f, 0, d - 1);
              }
              return i(l, [{
                key: "_quicksort",
                value: function(h, d, c) {
                  if (d < c) {
                    var v = this._partition(h, d, c);
                    this._quicksort(h, d, v), this._quicksort(h, v + 1, c);
                  }
                }
              }, {
                key: "_partition",
                value: function(h, d, c) {
                  for (var v = this._get(h, d), p = d, g = c; ; ) {
                    for (; this.compareFunction(v, this._get(h, g)); )
                      g--;
                    for (; this.compareFunction(this._get(h, p), v); )
                      p++;
                    if (p < g)
                      this._swap(h, p, g), p++, g--;
                    else
                      return g;
                  }
                }
              }, {
                key: "_get",
                value: function(h, d) {
                  return h instanceof o ? h.get_object_at(d) : h[d];
                }
              }, {
                key: "_set",
                value: function(h, d, c) {
                  h instanceof o ? h.set_object_at(d, c) : h[d] = c;
                }
              }, {
                key: "_swap",
                value: function(h, d, c) {
                  var v = this._get(h, d);
                  this._set(h, d, this._get(h, c)), this._set(h, c, v);
                }
              }, {
                key: "_defaultCompareFunction",
                value: function(h, d) {
                  return d > h;
                }
              }]), l;
            }();
            r.exports = u;
          },
          /* 25 */
          /***/
          function(r, a, n) {
            var i = function() {
              function u(l, f) {
                for (var h = 0; h < f.length; h++) {
                  var d = f[h];
                  d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(l, d.key, d);
                }
              }
              return function(l, f, h) {
                return f && u(l.prototype, f), h && u(l, h), l;
              };
            }();
            function s(u, l) {
              if (!(u instanceof l))
                throw new TypeError("Cannot call a class as a function");
            }
            var o = function() {
              function u(l, f) {
                var h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
                s(this, u), this.sequence1 = l, this.sequence2 = f, this.match_score = h, this.mismatch_penalty = d, this.gap_penalty = c, this.iMax = l.length + 1, this.jMax = f.length + 1, this.grid = new Array(this.iMax);
                for (var v = 0; v < this.iMax; v++) {
                  this.grid[v] = new Array(this.jMax);
                  for (var p = 0; p < this.jMax; p++)
                    this.grid[v][p] = 0;
                }
                this.tracebackGrid = new Array(this.iMax);
                for (var g = 0; g < this.iMax; g++) {
                  this.tracebackGrid[g] = new Array(this.jMax);
                  for (var y = 0; y < this.jMax; y++)
                    this.tracebackGrid[g][y] = [null, null, null];
                }
                this.alignments = [], this.score = -1, this.computeGrids();
              }
              return i(u, [{
                key: "getScore",
                value: function() {
                  return this.score;
                }
              }, {
                key: "getAlignments",
                value: function() {
                  return this.alignments;
                }
                // Main dynamic programming procedure
              }, {
                key: "computeGrids",
                value: function() {
                  for (var f = 1; f < this.jMax; f++)
                    this.grid[0][f] = this.grid[0][f - 1] + this.gap_penalty, this.tracebackGrid[0][f] = [!1, !1, !0];
                  for (var h = 1; h < this.iMax; h++)
                    this.grid[h][0] = this.grid[h - 1][0] + this.gap_penalty, this.tracebackGrid[h][0] = [!1, !0, !1];
                  for (var d = 1; d < this.iMax; d++)
                    for (var c = 1; c < this.jMax; c++) {
                      var v = void 0;
                      this.sequence1[d - 1] === this.sequence2[c - 1] ? v = this.grid[d - 1][c - 1] + this.match_score : v = this.grid[d - 1][c - 1] + this.mismatch_penalty;
                      var p = this.grid[d - 1][c] + this.gap_penalty, g = this.grid[d][c - 1] + this.gap_penalty, y = [v, p, g], b = this.arrayAllMaxIndexes(y);
                      this.grid[d][c] = y[b[0]], this.tracebackGrid[d][c] = [b.includes(0), b.includes(1), b.includes(2)];
                    }
                  this.score = this.grid[this.iMax - 1][this.jMax - 1];
                }
                // Gets all possible valid sequence combinations
              }, {
                key: "alignmentTraceback",
                value: function() {
                  var f = [];
                  for (f.push({
                    pos: [this.sequence1.length, this.sequence2.length],
                    seq1: "",
                    seq2: ""
                  }); f[0]; ) {
                    var h = f[0], d = this.tracebackGrid[h.pos[0]][h.pos[1]];
                    d[0] && f.push({
                      pos: [h.pos[0] - 1, h.pos[1] - 1],
                      seq1: this.sequence1[h.pos[0] - 1] + h.seq1,
                      seq2: this.sequence2[h.pos[1] - 1] + h.seq2
                    }), d[1] && f.push({
                      pos: [h.pos[0] - 1, h.pos[1]],
                      seq1: this.sequence1[h.pos[0] - 1] + h.seq1,
                      seq2: "-" + h.seq2
                    }), d[2] && f.push({
                      pos: [h.pos[0], h.pos[1] - 1],
                      seq1: "-" + h.seq1,
                      seq2: this.sequence2[h.pos[1] - 1] + h.seq2
                    }), h.pos[0] === 0 && h.pos[1] === 0 && this.alignments.push({
                      sequence1: h.seq1,
                      sequence2: h.seq2
                    }), f.shift();
                  }
                  return this.alignments;
                }
                // Helper Functions
              }, {
                key: "getAllIndexes",
                value: function(f, h) {
                  for (var d = [], c = -1; (c = f.indexOf(h, c + 1)) !== -1; )
                    d.push(c);
                  return d;
                }
              }, {
                key: "arrayAllMaxIndexes",
                value: function(f) {
                  return this.getAllIndexes(f, Math.max.apply(null, f));
                }
              }]), u;
            }();
            r.exports = o;
          },
          /* 26 */
          /***/
          function(r, a, n) {
            var i = function() {
            };
            i.FDLayout = n(18), i.FDLayoutConstants = n(7), i.FDLayoutEdge = n(19), i.FDLayoutNode = n(20), i.DimensionD = n(21), i.HashMap = n(22), i.HashSet = n(23), i.IGeometry = n(8), i.IMath = n(9), i.Integer = n(10), i.Point = n(12), i.PointD = n(4), i.RandomSeed = n(16), i.RectangleD = n(13), i.Transform = n(17), i.UniqueIDGeneretor = n(14), i.Quicksort = n(24), i.LinkedList = n(11), i.LGraphObject = n(2), i.LGraph = n(5), i.LEdge = n(1), i.LGraphManager = n(6), i.LNode = n(3), i.Layout = n(15), i.LayoutConstants = n(0), i.NeedlemanWunsch = n(25), r.exports = i;
          },
          /* 27 */
          /***/
          function(r, a, n) {
            function i() {
              this.listeners = [];
            }
            var s = i.prototype;
            s.addListener = function(o, u) {
              this.listeners.push({
                event: o,
                callback: u
              });
            }, s.removeListener = function(o, u) {
              for (var l = this.listeners.length; l >= 0; l--) {
                var f = this.listeners[l];
                f.event === o && f.callback === u && this.listeners.splice(l, 1);
              }
            }, s.emit = function(o, u) {
              for (var l = 0; l < this.listeners.length; l++) {
                var f = this.listeners[l];
                o === f.event && f.callback(u);
              }
            }, r.exports = i;
          }
          /******/
        ])
      );
    });
  }(qn)), qn.exports;
}
var no;
function qp() {
  return no || (no = 1, function(t, e) {
    (function(a, n) {
      t.exports = n(Xp());
    })(hi, function(r) {
      return (
        /******/
        function(a) {
          var n = {};
          function i(s) {
            if (n[s])
              return n[s].exports;
            var o = n[s] = {
              /******/
              i: s,
              /******/
              l: !1,
              /******/
              exports: {}
              /******/
            };
            return a[s].call(o.exports, o, o.exports, i), o.l = !0, o.exports;
          }
          return i.m = a, i.c = n, i.i = function(s) {
            return s;
          }, i.d = function(s, o, u) {
            i.o(s, o) || Object.defineProperty(s, o, {
              /******/
              configurable: !1,
              /******/
              enumerable: !0,
              /******/
              get: u
              /******/
            });
          }, i.n = function(s) {
            var o = s && s.__esModule ? (
              /******/
              function() {
                return s.default;
              }
            ) : (
              /******/
              function() {
                return s;
              }
            );
            return i.d(o, "a", o), o;
          }, i.o = function(s, o) {
            return Object.prototype.hasOwnProperty.call(s, o);
          }, i.p = "", i(i.s = 7);
        }([
          /* 0 */
          /***/
          function(a, n) {
            a.exports = r;
          },
          /* 1 */
          /***/
          function(a, n, i) {
            var s = i(0).FDLayoutConstants;
            function o() {
            }
            for (var u in s)
              o[u] = s[u];
            o.DEFAULT_USE_MULTI_LEVEL_SCALING = !1, o.DEFAULT_RADIAL_SEPARATION = s.DEFAULT_EDGE_LENGTH, o.DEFAULT_COMPONENT_SEPERATION = 60, o.TILE = !0, o.TILING_PADDING_VERTICAL = 10, o.TILING_PADDING_HORIZONTAL = 10, o.TREE_REDUCTION_ON_INCREMENTAL = !1, a.exports = o;
          },
          /* 2 */
          /***/
          function(a, n, i) {
            var s = i(0).FDLayoutEdge;
            function o(l, f, h) {
              s.call(this, l, f, h);
            }
            o.prototype = Object.create(s.prototype);
            for (var u in s)
              o[u] = s[u];
            a.exports = o;
          },
          /* 3 */
          /***/
          function(a, n, i) {
            var s = i(0).LGraph;
            function o(l, f, h) {
              s.call(this, l, f, h);
            }
            o.prototype = Object.create(s.prototype);
            for (var u in s)
              o[u] = s[u];
            a.exports = o;
          },
          /* 4 */
          /***/
          function(a, n, i) {
            var s = i(0).LGraphManager;
            function o(l) {
              s.call(this, l);
            }
            o.prototype = Object.create(s.prototype);
            for (var u in s)
              o[u] = s[u];
            a.exports = o;
          },
          /* 5 */
          /***/
          function(a, n, i) {
            var s = i(0).FDLayoutNode, o = i(0).IMath;
            function u(f, h, d, c) {
              s.call(this, f, h, d, c);
            }
            u.prototype = Object.create(s.prototype);
            for (var l in s)
              u[l] = s[l];
            u.prototype.move = function() {
              var f = this.graphManager.getLayout();
              this.displacementX = f.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY = f.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren, Math.abs(this.displacementX) > f.coolingFactor * f.maxNodeDisplacement && (this.displacementX = f.coolingFactor * f.maxNodeDisplacement * o.sign(this.displacementX)), Math.abs(this.displacementY) > f.coolingFactor * f.maxNodeDisplacement && (this.displacementY = f.coolingFactor * f.maxNodeDisplacement * o.sign(this.displacementY)), this.child == null ? this.moveBy(this.displacementX, this.displacementY) : this.child.getNodes().length == 0 ? this.moveBy(this.displacementX, this.displacementY) : this.propogateDisplacementToChildren(this.displacementX, this.displacementY), f.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
            }, u.prototype.propogateDisplacementToChildren = function(f, h) {
              for (var d = this.getChild().getNodes(), c, v = 0; v < d.length; v++)
                c = d[v], c.getChild() == null ? (c.moveBy(f, h), c.displacementX += f, c.displacementY += h) : c.propogateDisplacementToChildren(f, h);
            }, u.prototype.setPred1 = function(f) {
              this.pred1 = f;
            }, u.prototype.getPred1 = function() {
              return pred1;
            }, u.prototype.getPred2 = function() {
              return pred2;
            }, u.prototype.setNext = function(f) {
              this.next = f;
            }, u.prototype.getNext = function() {
              return next;
            }, u.prototype.setProcessed = function(f) {
              this.processed = f;
            }, u.prototype.isProcessed = function() {
              return processed;
            }, a.exports = u;
          },
          /* 6 */
          /***/
          function(a, n, i) {
            var s = i(0).FDLayout, o = i(4), u = i(3), l = i(5), f = i(2), h = i(1), d = i(0).FDLayoutConstants, c = i(0).LayoutConstants, v = i(0).Point, p = i(0).PointD, g = i(0).Layout, y = i(0).Integer, b = i(0).IGeometry, m = i(0).LGraph, T = i(0).Transform;
            function C() {
              s.call(this), this.toBeTiled = {};
            }
            C.prototype = Object.create(s.prototype);
            for (var S in s)
              C[S] = s[S];
            C.prototype.newGraphManager = function() {
              var E = new o(this);
              return this.graphManager = E, E;
            }, C.prototype.newGraph = function(E) {
              return new u(null, this.graphManager, E);
            }, C.prototype.newNode = function(E) {
              return new l(this.graphManager, E);
            }, C.prototype.newEdge = function(E) {
              return new f(null, null, E);
            }, C.prototype.initParameters = function() {
              s.prototype.initParameters.call(this, arguments), this.isSubLayout || (h.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = h.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = h.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.springConstant = d.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = d.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = d.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = d.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = d.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = d.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = !1, this.isGrowthFinished = !1, this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / d.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = d.CONVERGENCE_CHECK_PERIOD / this.maxIterations, this.coolingAdjuster = 1);
            }, C.prototype.layout = function() {
              var E = c.DEFAULT_CREATE_BENDS_AS_NEEDED;
              return E && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
            }, C.prototype.classicLayout = function() {
              if (this.nodesWithGravity = this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
                if (h.TREE_REDUCTION_ON_INCREMENTAL) {
                  this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                  var x = new Set(this.getAllNodes()), w = this.nodesWithGravity.filter(function(A) {
                    return x.has(A);
                  });
                  this.graphManager.setAllNodesToApplyGravitation(w);
                }
              } else {
                var E = this.getFlatForest();
                if (E.length > 0)
                  this.positionNodesRadially(E);
                else {
                  this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                  var x = new Set(this.getAllNodes()), w = this.nodesWithGravity.filter(function(D) {
                    return x.has(D);
                  });
                  this.graphManager.setAllNodesToApplyGravitation(w), this.positionNodesRandomly();
                }
              }
              return this.initSpringEmbedder(), this.runSpringEmbedder(), !0;
            }, C.prototype.tick = function() {
              if (this.totalIterations++, this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished)
                if (this.prunedNodesAll.length > 0)
                  this.isTreeGrowing = !0;
                else
                  return !0;
              if (this.totalIterations % d.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
                if (this.isConverged())
                  if (this.prunedNodesAll.length > 0)
                    this.isTreeGrowing = !0;
                  else
                    return !0;
                this.coolingCycle++, this.layoutQuality == 0 ? this.coolingAdjuster = this.coolingCycle : this.layoutQuality == 1 && (this.coolingAdjuster = this.coolingCycle / 3), this.coolingFactor = Math.max(this.initialCoolingFactor - Math.pow(this.coolingCycle, Math.log(100 * (this.initialCoolingFactor - this.finalTemperature)) / Math.log(this.maxCoolingCycle)) / 100 * this.coolingAdjuster, this.finalTemperature), this.animationPeriod = Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
              }
              if (this.isTreeGrowing) {
                if (this.growTreeIterations % 10 == 0)
                  if (this.prunedNodesAll.length > 0) {
                    this.graphManager.updateBounds(), this.updateGrid(), this.growTree(this.prunedNodesAll), this.graphManager.resetAllNodesToApplyGravitation();
                    var E = new Set(this.getAllNodes()), x = this.nodesWithGravity.filter(function(L) {
                      return E.has(L);
                    });
                    this.graphManager.setAllNodesToApplyGravitation(x), this.graphManager.updateBounds(), this.updateGrid(), this.coolingFactor = d.DEFAULT_COOLING_FACTOR_INCREMENTAL;
                  } else
                    this.isTreeGrowing = !1, this.isGrowthFinished = !0;
                this.growTreeIterations++;
              }
              if (this.isGrowthFinished) {
                if (this.isConverged())
                  return !0;
                this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), this.coolingFactor = d.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
              }
              var w = !this.isTreeGrowing && !this.isGrowthFinished, D = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
              return this.totalDisplacement = 0, this.graphManager.updateBounds(), this.calcSpringForces(), this.calcRepulsionForces(w, D), this.calcGravitationalForces(), this.moveNodes(), this.animate(), !1;
            }, C.prototype.getPositionsData = function() {
              for (var E = this.graphManager.getAllNodes(), x = {}, w = 0; w < E.length; w++) {
                var D = E[w].rect, L = E[w].id;
                x[L] = {
                  id: L,
                  x: D.getCenterX(),
                  y: D.getCenterY(),
                  w: D.width,
                  h: D.height
                };
              }
              return x;
            }, C.prototype.runSpringEmbedder = function() {
              this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
              var E = !1;
              if (d.ANIMATE === "during")
                this.emit("layoutstarted");
              else {
                for (; !E; )
                  E = this.tick();
                this.graphManager.updateBounds();
              }
            }, C.prototype.calculateNodesToApplyGravitationTo = function() {
              var E = [], x, w = this.graphManager.getGraphs(), D = w.length, L;
              for (L = 0; L < D; L++)
                x = w[L], x.updateConnected(), x.isConnected || (E = E.concat(x.getNodes()));
              return E;
            }, C.prototype.createBendpoints = function() {
              var E = [];
              E = E.concat(this.graphManager.getAllEdges());
              var x = /* @__PURE__ */ new Set(), w;
              for (w = 0; w < E.length; w++) {
                var D = E[w];
                if (!x.has(D)) {
                  var L = D.getSource(), A = D.getTarget();
                  if (L == A)
                    D.getBendpoints().push(new p()), D.getBendpoints().push(new p()), this.createDummyNodesForBendpoints(D), x.add(D);
                  else {
                    var I = [];
                    if (I = I.concat(L.getEdgeListToNode(A)), I = I.concat(A.getEdgeListToNode(L)), !x.has(I[0])) {
                      if (I.length > 1) {
                        var O;
                        for (O = 0; O < I.length; O++) {
                          var M = I[O];
                          M.getBendpoints().push(new p()), this.createDummyNodesForBendpoints(M);
                        }
                      }
                      I.forEach(function(R) {
                        x.add(R);
                      });
                    }
                  }
                }
                if (x.size == E.length)
                  break;
              }
            }, C.prototype.positionNodesRadially = function(E) {
              for (var x = new v(0, 0), w = Math.ceil(Math.sqrt(E.length)), D = 0, L = 0, A = 0, I = new p(0, 0), O = 0; O < E.length; O++) {
                O % w == 0 && (A = 0, L = D, O != 0 && (L += h.DEFAULT_COMPONENT_SEPERATION), D = 0);
                var M = E[O], R = g.findCenterOfTree(M);
                x.x = A, x.y = L, I = C.radialLayout(M, R, x), I.y > D && (D = Math.floor(I.y)), A = Math.floor(I.x + h.DEFAULT_COMPONENT_SEPERATION);
              }
              this.transform(new p(c.WORLD_CENTER_X - I.x / 2, c.WORLD_CENTER_Y - I.y / 2));
            }, C.radialLayout = function(E, x, w) {
              var D = Math.max(this.maxDiagonalInTree(E), h.DEFAULT_RADIAL_SEPARATION);
              C.branchRadialLayout(x, null, 0, 359, 0, D);
              var L = m.calculateBounds(E), A = new T();
              A.setDeviceOrgX(L.getMinX()), A.setDeviceOrgY(L.getMinY()), A.setWorldOrgX(w.x), A.setWorldOrgY(w.y);
              for (var I = 0; I < E.length; I++) {
                var O = E[I];
                O.transform(A);
              }
              var M = new p(L.getMaxX(), L.getMaxY());
              return A.inverseTransformPoint(M);
            }, C.branchRadialLayout = function(E, x, w, D, L, A) {
              var I = (D - w + 1) / 2;
              I < 0 && (I += 180);
              var O = (I + w) % 360, M = O * b.TWO_PI / 360, R = L * Math.cos(M), k = L * Math.sin(M);
              E.setCenter(R, k);
              var P = [];
              P = P.concat(E.getEdges());
              var B = P.length;
              x != null && B--;
              for (var V = 0, F = P.length, G, Y = E.getEdgesBetween(x); Y.length > 1; ) {
                var _ = Y[0];
                Y.splice(0, 1);
                var q = P.indexOf(_);
                q >= 0 && P.splice(q, 1), F--, B--;
              }
              x != null ? G = (P.indexOf(Y[0]) + 1) % F : G = 0;
              for (var U = Math.abs(D - w) / B, z = G; V != B; z = ++z % F) {
                var H = P[z].getOtherEnd(E);
                if (H != x) {
                  var W = (w + V * U) % 360, J = (W + U) % 360;
                  C.branchRadialLayout(H, E, W, J, L + A, A), V++;
                }
              }
            }, C.maxDiagonalInTree = function(E) {
              for (var x = y.MIN_VALUE, w = 0; w < E.length; w++) {
                var D = E[w], L = D.getDiagonal();
                L > x && (x = L);
              }
              return x;
            }, C.prototype.calcRepulsionRange = function() {
              return 2 * (this.level + 1) * this.idealEdgeLength;
            }, C.prototype.groupZeroDegreeMembers = function() {
              var E = this, x = {};
              this.memberGroups = {}, this.idToDummyNode = {};
              for (var w = [], D = this.graphManager.getAllNodes(), L = 0; L < D.length; L++) {
                var A = D[L], I = A.getParent();
                this.getNodeDegreeWithChildren(A) === 0 && (I.id == null || !this.getToBeTiled(I)) && w.push(A);
              }
              for (var L = 0; L < w.length; L++) {
                var A = w[L], O = A.getParent().id;
                typeof x[O] == "undefined" && (x[O] = []), x[O] = x[O].concat(A);
              }
              Object.keys(x).forEach(function(M) {
                if (x[M].length > 1) {
                  var R = "DummyCompound_" + M;
                  E.memberGroups[R] = x[M];
                  var k = x[M][0].getParent(), P = new l(E.graphManager);
                  P.id = R, P.paddingLeft = k.paddingLeft || 0, P.paddingRight = k.paddingRight || 0, P.paddingBottom = k.paddingBottom || 0, P.paddingTop = k.paddingTop || 0, E.idToDummyNode[R] = P;
                  var B = E.getGraphManager().add(E.newGraph(), P), V = k.getChild();
                  V.add(P);
                  for (var F = 0; F < x[M].length; F++) {
                    var G = x[M][F];
                    V.remove(G), B.add(G);
                  }
                }
              });
            }, C.prototype.clearCompounds = function() {
              var E = {}, x = {};
              this.performDFSOnCompounds();
              for (var w = 0; w < this.compoundOrder.length; w++)
                x[this.compoundOrder[w].id] = this.compoundOrder[w], E[this.compoundOrder[w].id] = [].concat(this.compoundOrder[w].getChild().getNodes()), this.graphManager.remove(this.compoundOrder[w].getChild()), this.compoundOrder[w].child = null;
              this.graphManager.resetAllNodes(), this.tileCompoundMembers(E, x);
            }, C.prototype.clearZeroDegreeMembers = function() {
              var E = this, x = this.tiledZeroDegreePack = [];
              Object.keys(this.memberGroups).forEach(function(w) {
                var D = E.idToDummyNode[w];
                x[w] = E.tileNodes(E.memberGroups[w], D.paddingLeft + D.paddingRight), D.rect.width = x[w].width, D.rect.height = x[w].height;
              });
            }, C.prototype.repopulateCompounds = function() {
              for (var E = this.compoundOrder.length - 1; E >= 0; E--) {
                var x = this.compoundOrder[E], w = x.id, D = x.paddingLeft, L = x.paddingTop;
                this.adjustLocations(this.tiledMemberPack[w], x.rect.x, x.rect.y, D, L);
              }
            }, C.prototype.repopulateZeroDegreeMembers = function() {
              var E = this, x = this.tiledZeroDegreePack;
              Object.keys(x).forEach(function(w) {
                var D = E.idToDummyNode[w], L = D.paddingLeft, A = D.paddingTop;
                E.adjustLocations(x[w], D.rect.x, D.rect.y, L, A);
              });
            }, C.prototype.getToBeTiled = function(E) {
              var x = E.id;
              if (this.toBeTiled[x] != null)
                return this.toBeTiled[x];
              var w = E.getChild();
              if (w == null)
                return this.toBeTiled[x] = !1, !1;
              for (var D = w.getNodes(), L = 0; L < D.length; L++) {
                var A = D[L];
                if (this.getNodeDegree(A) > 0)
                  return this.toBeTiled[x] = !1, !1;
                if (A.getChild() == null) {
                  this.toBeTiled[A.id] = !1;
                  continue;
                }
                if (!this.getToBeTiled(A))
                  return this.toBeTiled[x] = !1, !1;
              }
              return this.toBeTiled[x] = !0, !0;
            }, C.prototype.getNodeDegree = function(E) {
              E.id;
              for (var x = E.getEdges(), w = 0, D = 0; D < x.length; D++) {
                var L = x[D];
                L.getSource().id !== L.getTarget().id && (w = w + 1);
              }
              return w;
            }, C.prototype.getNodeDegreeWithChildren = function(E) {
              var x = this.getNodeDegree(E);
              if (E.getChild() == null)
                return x;
              for (var w = E.getChild().getNodes(), D = 0; D < w.length; D++) {
                var L = w[D];
                x += this.getNodeDegreeWithChildren(L);
              }
              return x;
            }, C.prototype.performDFSOnCompounds = function() {
              this.compoundOrder = [], this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
            }, C.prototype.fillCompexOrderByDFS = function(E) {
              for (var x = 0; x < E.length; x++) {
                var w = E[x];
                w.getChild() != null && this.fillCompexOrderByDFS(w.getChild().getNodes()), this.getToBeTiled(w) && this.compoundOrder.push(w);
              }
            }, C.prototype.adjustLocations = function(E, x, w, D, L) {
              x += D, w += L;
              for (var A = x, I = 0; I < E.rows.length; I++) {
                var O = E.rows[I];
                x = A;
                for (var M = 0, R = 0; R < O.length; R++) {
                  var k = O[R];
                  k.rect.x = x, k.rect.y = w, x += k.rect.width + E.horizontalPadding, k.rect.height > M && (M = k.rect.height);
                }
                w += M + E.verticalPadding;
              }
            }, C.prototype.tileCompoundMembers = function(E, x) {
              var w = this;
              this.tiledMemberPack = [], Object.keys(E).forEach(function(D) {
                var L = x[D];
                w.tiledMemberPack[D] = w.tileNodes(E[D], L.paddingLeft + L.paddingRight), L.rect.width = w.tiledMemberPack[D].width, L.rect.height = w.tiledMemberPack[D].height;
              });
            }, C.prototype.tileNodes = function(E, x) {
              var w = h.TILING_PADDING_VERTICAL, D = h.TILING_PADDING_HORIZONTAL, L = {
                rows: [],
                rowWidth: [],
                rowHeight: [],
                width: 0,
                height: x,
                // assume minHeight equals to minWidth
                verticalPadding: w,
                horizontalPadding: D
              };
              E.sort(function(O, M) {
                return O.rect.width * O.rect.height > M.rect.width * M.rect.height ? -1 : O.rect.width * O.rect.height < M.rect.width * M.rect.height ? 1 : 0;
              });
              for (var A = 0; A < E.length; A++) {
                var I = E[A];
                L.rows.length == 0 ? this.insertNodeToRow(L, I, 0, x) : this.canAddHorizontal(L, I.rect.width, I.rect.height) ? this.insertNodeToRow(L, I, this.getShortestRowIndex(L), x) : this.insertNodeToRow(L, I, L.rows.length, x), this.shiftToLastRow(L);
              }
              return L;
            }, C.prototype.insertNodeToRow = function(E, x, w, D) {
              var L = D;
              if (w == E.rows.length) {
                var A = [];
                E.rows.push(A), E.rowWidth.push(L), E.rowHeight.push(0);
              }
              var I = E.rowWidth[w] + x.rect.width;
              E.rows[w].length > 0 && (I += E.horizontalPadding), E.rowWidth[w] = I, E.width < I && (E.width = I);
              var O = x.rect.height;
              w > 0 && (O += E.verticalPadding);
              var M = 0;
              O > E.rowHeight[w] && (M = E.rowHeight[w], E.rowHeight[w] = O, M = E.rowHeight[w] - M), E.height += M, E.rows[w].push(x);
            }, C.prototype.getShortestRowIndex = function(E) {
              for (var x = -1, w = Number.MAX_VALUE, D = 0; D < E.rows.length; D++)
                E.rowWidth[D] < w && (x = D, w = E.rowWidth[D]);
              return x;
            }, C.prototype.getLongestRowIndex = function(E) {
              for (var x = -1, w = Number.MIN_VALUE, D = 0; D < E.rows.length; D++)
                E.rowWidth[D] > w && (x = D, w = E.rowWidth[D]);
              return x;
            }, C.prototype.canAddHorizontal = function(E, x, w) {
              var D = this.getShortestRowIndex(E);
              if (D < 0)
                return !0;
              var L = E.rowWidth[D];
              if (L + E.horizontalPadding + x <= E.width)
                return !0;
              var A = 0;
              E.rowHeight[D] < w && D > 0 && (A = w + E.verticalPadding - E.rowHeight[D]);
              var I;
              E.width - L >= x + E.horizontalPadding ? I = (E.height + A) / (L + x + E.horizontalPadding) : I = (E.height + A) / E.width, A = w + E.verticalPadding;
              var O;
              return E.width < x ? O = (E.height + A) / x : O = (E.height + A) / E.width, O < 1 && (O = 1 / O), I < 1 && (I = 1 / I), I < O;
            }, C.prototype.shiftToLastRow = function(E) {
              var x = this.getLongestRowIndex(E), w = E.rowWidth.length - 1, D = E.rows[x], L = D[D.length - 1], A = L.width + E.horizontalPadding;
              if (E.width - E.rowWidth[w] > A && x != w) {
                D.splice(-1, 1), E.rows[w].push(L), E.rowWidth[x] = E.rowWidth[x] - A, E.rowWidth[w] = E.rowWidth[w] + A, E.width = E.rowWidth[instance.getLongestRowIndex(E)];
                for (var I = Number.MIN_VALUE, O = 0; O < D.length; O++)
                  D[O].height > I && (I = D[O].height);
                x > 0 && (I += E.verticalPadding);
                var M = E.rowHeight[x] + E.rowHeight[w];
                E.rowHeight[x] = I, E.rowHeight[w] < L.height + E.verticalPadding && (E.rowHeight[w] = L.height + E.verticalPadding);
                var R = E.rowHeight[x] + E.rowHeight[w];
                E.height += R - M, this.shiftToLastRow(E);
              }
            }, C.prototype.tilingPreLayout = function() {
              h.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
            }, C.prototype.tilingPostLayout = function() {
              h.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
            }, C.prototype.reduceTrees = function() {
              for (var E = [], x = !0, w; x; ) {
                var D = this.graphManager.getAllNodes(), L = [];
                x = !1;
                for (var A = 0; A < D.length; A++)
                  w = D[A], w.getEdges().length == 1 && !w.getEdges()[0].isInterGraph && w.getChild() == null && (L.push([w, w.getEdges()[0], w.getOwner()]), x = !0);
                if (x == !0) {
                  for (var I = [], O = 0; O < L.length; O++)
                    L[O][0].getEdges().length == 1 && (I.push(L[O]), L[O][0].getOwner().remove(L[O][0]));
                  E.push(I), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
                }
              }
              this.prunedNodesAll = E;
            }, C.prototype.growTree = function(E) {
              for (var x = E.length, w = E[x - 1], D, L = 0; L < w.length; L++)
                D = w[L], this.findPlaceforPrunedNode(D), D[2].add(D[0]), D[2].add(D[1], D[1].source, D[1].target);
              E.splice(E.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
            }, C.prototype.findPlaceforPrunedNode = function(E) {
              var x, w, D = E[0];
              D == E[1].source ? w = E[1].target : w = E[1].source;
              var L = w.startX, A = w.finishX, I = w.startY, O = w.finishY, M = 0, R = 0, k = 0, P = 0, B = [M, k, R, P];
              if (I > 0)
                for (var V = L; V <= A; V++)
                  B[0] += this.grid[V][I - 1].length + this.grid[V][I].length - 1;
              if (A < this.grid.length - 1)
                for (var V = I; V <= O; V++)
                  B[1] += this.grid[A + 1][V].length + this.grid[A][V].length - 1;
              if (O < this.grid[0].length - 1)
                for (var V = L; V <= A; V++)
                  B[2] += this.grid[V][O + 1].length + this.grid[V][O].length - 1;
              if (L > 0)
                for (var V = I; V <= O; V++)
                  B[3] += this.grid[L - 1][V].length + this.grid[L][V].length - 1;
              for (var F = y.MAX_VALUE, G, Y, _ = 0; _ < B.length; _++)
                B[_] < F ? (F = B[_], G = 1, Y = _) : B[_] == F && G++;
              if (G == 3 && F == 0)
                B[0] == 0 && B[1] == 0 && B[2] == 0 ? x = 1 : B[0] == 0 && B[1] == 0 && B[3] == 0 ? x = 0 : B[0] == 0 && B[2] == 0 && B[3] == 0 ? x = 3 : B[1] == 0 && B[2] == 0 && B[3] == 0 && (x = 2);
              else if (G == 2 && F == 0) {
                var q = Math.floor(Math.random() * 2);
                B[0] == 0 && B[1] == 0 ? q == 0 ? x = 0 : x = 1 : B[0] == 0 && B[2] == 0 ? q == 0 ? x = 0 : x = 2 : B[0] == 0 && B[3] == 0 ? q == 0 ? x = 0 : x = 3 : B[1] == 0 && B[2] == 0 ? q == 0 ? x = 1 : x = 2 : B[1] == 0 && B[3] == 0 ? q == 0 ? x = 1 : x = 3 : q == 0 ? x = 2 : x = 3;
              } else if (G == 4 && F == 0) {
                var q = Math.floor(Math.random() * 4);
                x = q;
              } else
                x = Y;
              x == 0 ? D.setCenter(w.getCenterX(), w.getCenterY() - w.getHeight() / 2 - d.DEFAULT_EDGE_LENGTH - D.getHeight() / 2) : x == 1 ? D.setCenter(w.getCenterX() + w.getWidth() / 2 + d.DEFAULT_EDGE_LENGTH + D.getWidth() / 2, w.getCenterY()) : x == 2 ? D.setCenter(w.getCenterX(), w.getCenterY() + w.getHeight() / 2 + d.DEFAULT_EDGE_LENGTH + D.getHeight() / 2) : D.setCenter(w.getCenterX() - w.getWidth() / 2 - d.DEFAULT_EDGE_LENGTH - D.getWidth() / 2, w.getCenterY());
            }, a.exports = C;
          },
          /* 7 */
          /***/
          function(a, n, i) {
            var s = {};
            s.layoutBase = i(0), s.CoSEConstants = i(1), s.CoSEEdge = i(2), s.CoSEGraph = i(3), s.CoSEGraphManager = i(4), s.CoSELayout = i(6), s.CoSENode = i(5), a.exports = s;
          }
          /******/
        ])
      );
    });
  }(Xn)), Xn.exports;
}
(function(t, e) {
  (function(a, n) {
    t.exports = n(qp());
  })(hi, function(r) {
    return (
      /******/
      function(a) {
        var n = {};
        function i(s) {
          if (n[s])
            return n[s].exports;
          var o = n[s] = {
            /******/
            i: s,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return a[s].call(o.exports, o, o.exports, i), o.l = !0, o.exports;
        }
        return i.m = a, i.c = n, i.i = function(s) {
          return s;
        }, i.d = function(s, o, u) {
          i.o(s, o) || Object.defineProperty(s, o, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: u
            /******/
          });
        }, i.n = function(s) {
          var o = s && s.__esModule ? (
            /******/
            function() {
              return s.default;
            }
          ) : (
            /******/
            function() {
              return s;
            }
          );
          return i.d(o, "a", o), o;
        }, i.o = function(s, o) {
          return Object.prototype.hasOwnProperty.call(s, o);
        }, i.p = "", i(i.s = 1);
      }([
        /* 0 */
        /***/
        function(a, n) {
          a.exports = r;
        },
        /* 1 */
        /***/
        function(a, n, i) {
          var s = i(0).layoutBase.LayoutConstants, o = i(0).layoutBase.FDLayoutConstants, u = i(0).CoSEConstants, l = i(0).CoSELayout, f = i(0).CoSENode, h = i(0).layoutBase.PointD, d = i(0).layoutBase.DimensionD, c = {
            // Called on `layoutready`
            ready: function() {
            },
            // Called on `layoutstop`
            stop: function() {
            },
            // 'draft', 'default' or 'proof" 
            // - 'draft' fast cooling rate 
            // - 'default' moderate cooling rate 
            // - "proof" slow cooling rate
            quality: "default",
            // include labels in node dimensions
            nodeDimensionsIncludeLabels: !1,
            // number of ticks per frame; higher is faster but more jerky
            refresh: 30,
            // Whether to fit the network view after when done
            fit: !0,
            // Padding on fit
            padding: 10,
            // Whether to enable incremental mode
            randomize: !0,
            // Node repulsion (non overlapping) multiplier
            nodeRepulsion: 4500,
            // Ideal edge (non nested) length
            idealEdgeLength: 50,
            // Divisor to compute edge forces
            edgeElasticity: 0.45,
            // Nesting factor (multiplier) to compute ideal edge length for nested edges
            nestingFactor: 0.1,
            // Gravity force (constant)
            gravity: 0.25,
            // Maximum number of iterations to perform
            numIter: 2500,
            // For enabling tiling
            tile: !0,
            // Type of layout animation. The option set is {'during', 'end', false}
            animate: "end",
            // Duration for animate:end
            animationDuration: 500,
            // Represents the amount of the vertical space to put between the zero degree members during the tiling operation(can also be a function)
            tilingPaddingVertical: 10,
            // Represents the amount of the horizontal space to put between the zero degree members during the tiling operation(can also be a function)
            tilingPaddingHorizontal: 10,
            // Gravity range (constant) for compounds
            gravityRangeCompound: 1.5,
            // Gravity force (constant) for compounds
            gravityCompound: 1,
            // Gravity range (constant)
            gravityRange: 3.8,
            // Initial cooling factor for incremental layout
            initialEnergyOnIncremental: 0.5
          };
          function v(b, m) {
            var T = {};
            for (var C in b)
              T[C] = b[C];
            for (var C in m)
              T[C] = m[C];
            return T;
          }
          function p(b) {
            this.options = v(c, b), g(this.options);
          }
          var g = function(m) {
            m.nodeRepulsion != null && (u.DEFAULT_REPULSION_STRENGTH = o.DEFAULT_REPULSION_STRENGTH = m.nodeRepulsion), m.idealEdgeLength != null && (u.DEFAULT_EDGE_LENGTH = o.DEFAULT_EDGE_LENGTH = m.idealEdgeLength), m.edgeElasticity != null && (u.DEFAULT_SPRING_STRENGTH = o.DEFAULT_SPRING_STRENGTH = m.edgeElasticity), m.nestingFactor != null && (u.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = o.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = m.nestingFactor), m.gravity != null && (u.DEFAULT_GRAVITY_STRENGTH = o.DEFAULT_GRAVITY_STRENGTH = m.gravity), m.numIter != null && (u.MAX_ITERATIONS = o.MAX_ITERATIONS = m.numIter), m.gravityRange != null && (u.DEFAULT_GRAVITY_RANGE_FACTOR = o.DEFAULT_GRAVITY_RANGE_FACTOR = m.gravityRange), m.gravityCompound != null && (u.DEFAULT_COMPOUND_GRAVITY_STRENGTH = o.DEFAULT_COMPOUND_GRAVITY_STRENGTH = m.gravityCompound), m.gravityRangeCompound != null && (u.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = o.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = m.gravityRangeCompound), m.initialEnergyOnIncremental != null && (u.DEFAULT_COOLING_FACTOR_INCREMENTAL = o.DEFAULT_COOLING_FACTOR_INCREMENTAL = m.initialEnergyOnIncremental), m.quality == "draft" ? s.QUALITY = 0 : m.quality == "proof" ? s.QUALITY = 2 : s.QUALITY = 1, u.NODE_DIMENSIONS_INCLUDE_LABELS = o.NODE_DIMENSIONS_INCLUDE_LABELS = s.NODE_DIMENSIONS_INCLUDE_LABELS = m.nodeDimensionsIncludeLabels, u.DEFAULT_INCREMENTAL = o.DEFAULT_INCREMENTAL = s.DEFAULT_INCREMENTAL = !m.randomize, u.ANIMATE = o.ANIMATE = s.ANIMATE = m.animate, u.TILE = m.tile, u.TILING_PADDING_VERTICAL = typeof m.tilingPaddingVertical == "function" ? m.tilingPaddingVertical.call() : m.tilingPaddingVertical, u.TILING_PADDING_HORIZONTAL = typeof m.tilingPaddingHorizontal == "function" ? m.tilingPaddingHorizontal.call() : m.tilingPaddingHorizontal;
          };
          p.prototype.run = function() {
            var b, m, T = this.options;
            this.idToLNode = {};
            var C = this.layout = new l(), S = this;
            S.stopped = !1, this.cy = this.options.cy, this.cy.trigger({ type: "layoutstart", layout: this });
            var E = C.newGraphManager();
            this.gm = E;
            var x = this.options.eles.nodes(), w = this.options.eles.edges();
            this.root = E.addRoot(), this.processChildrenList(this.root, this.getTopMostNodes(x), C);
            for (var D = 0; D < w.length; D++) {
              var L = w[D], A = this.idToLNode[L.data("source")], I = this.idToLNode[L.data("target")];
              if (A !== I && A.getEdgesBetween(I).length == 0) {
                var O = E.add(C.newEdge(), A, I);
                O.id = L.id();
              }
            }
            var M = function(P, B) {
              typeof P == "number" && (P = B);
              var V = P.data("id"), F = S.idToLNode[V];
              return {
                x: F.getRect().getCenterX(),
                y: F.getRect().getCenterY()
              };
            }, R = function k() {
              for (var P = function() {
                T.fit && T.cy.fit(T.eles, T.padding), b || (b = !0, S.cy.one("layoutready", T.ready), S.cy.trigger({ type: "layoutready", layout: S }));
              }, B = S.options.refresh, V, F = 0; F < B && !V; F++)
                V = S.stopped || S.layout.tick();
              if (V) {
                C.checkLayoutSuccess() && !C.isSubLayout && C.doPostLayout(), C.tilingPostLayout && C.tilingPostLayout(), C.isLayoutFinished = !0, S.options.eles.nodes().positions(M), P(), S.cy.one("layoutstop", S.options.stop), S.cy.trigger({ type: "layoutstop", layout: S }), m && cancelAnimationFrame(m), b = !1;
                return;
              }
              var G = S.layout.getPositionsData();
              T.eles.nodes().positions(function(Y, _) {
                if (typeof Y == "number" && (Y = _), !Y.isParent()) {
                  for (var q = Y.id(), U = G[q], z = Y; U == null && (U = G[z.data("parent")] || G["DummyCompound_" + z.data("parent")], G[q] = U, z = z.parent()[0], z != null); )
                    ;
                  return U != null ? {
                    x: U.x,
                    y: U.y
                  } : {
                    x: Y.position("x"),
                    y: Y.position("y")
                  };
                }
              }), P(), m = requestAnimationFrame(k);
            };
            return C.addListener("layoutstarted", function() {
              S.options.animate === "during" && (m = requestAnimationFrame(R));
            }), C.runLayout(), this.options.animate !== "during" && (S.options.eles.nodes().not(":parent").layoutPositions(S, S.options, M), b = !1), this;
          }, p.prototype.getTopMostNodes = function(b) {
            for (var m = {}, T = 0; T < b.length; T++)
              m[b[T].id()] = !0;
            var C = b.filter(function(S, E) {
              typeof S == "number" && (S = E);
              for (var x = S.parent()[0]; x != null; ) {
                if (m[x.id()])
                  return !1;
                x = x.parent()[0];
              }
              return !0;
            });
            return C;
          }, p.prototype.processChildrenList = function(b, m, T) {
            for (var C = m.length, S = 0; S < C; S++) {
              var E = m[S], x = E.children(), w, D = E.layoutDimensions({
                nodeDimensionsIncludeLabels: this.options.nodeDimensionsIncludeLabels
              });
              if (E.outerWidth() != null && E.outerHeight() != null ? w = b.add(new f(T.graphManager, new h(E.position("x") - D.w / 2, E.position("y") - D.h / 2), new d(parseFloat(D.w), parseFloat(D.h)))) : w = b.add(new f(this.graphManager)), w.id = E.data("id"), w.paddingLeft = parseInt(E.css("padding")), w.paddingTop = parseInt(E.css("padding")), w.paddingRight = parseInt(E.css("padding")), w.paddingBottom = parseInt(E.css("padding")), this.options.nodeDimensionsIncludeLabels && E.isParent()) {
                var L = E.boundingBox({ includeLabels: !0, includeNodes: !1 }).w, A = E.boundingBox({ includeLabels: !0, includeNodes: !1 }).h, I = E.css("text-halign");
                w.labelWidth = L, w.labelHeight = A, w.labelPos = I;
              }
              if (this.idToLNode[E.data("id")] = w, isNaN(w.rect.x) && (w.rect.x = 0), isNaN(w.rect.y) && (w.rect.y = 0), x != null && x.length > 0) {
                var O;
                O = T.getGraphManager().add(T.newGraph(), w), this.processChildrenList(O, x, T);
              }
            }
          }, p.prototype.stop = function() {
            return this.stopped = !0, this;
          };
          var y = function(m) {
            m("layout", "cose-bilkent", p);
          };
          typeof cytoscape != "undefined" && y(cytoscape), a.exports = y;
        }
        /******/
      ])
    );
  });
})(_u);
var Wp = _u.exports;
const Kp = /* @__PURE__ */ al(Wp);
var fi = function() {
  var t = function(T, C, S, E) {
    for (S = S || {}, E = T.length; E--; S[T[E]] = C)
      ;
    return S;
  }, e = [1, 4], r = [1, 13], a = [1, 12], n = [1, 15], i = [1, 16], s = [1, 20], o = [1, 19], u = [6, 7, 8], l = [1, 26], f = [1, 24], h = [1, 25], d = [6, 7, 11], c = [1, 6, 13, 15, 16, 19, 22], v = [1, 33], p = [1, 34], g = [1, 6, 7, 11, 13, 15, 16, 19, 22], y = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, mindMap: 4, spaceLines: 5, SPACELINE: 6, NL: 7, MINDMAP: 8, document: 9, stop: 10, EOF: 11, statement: 12, SPACELIST: 13, node: 14, ICON: 15, CLASS: 16, nodeWithId: 17, nodeWithoutId: 18, NODE_DSTART: 19, NODE_DESCR: 20, NODE_DEND: 21, NODE_ID: 22, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 6: "SPACELINE", 7: "NL", 8: "MINDMAP", 11: "EOF", 13: "SPACELIST", 15: "ICON", 16: "CLASS", 19: "NODE_DSTART", 20: "NODE_DESCR", 21: "NODE_DEND", 22: "NODE_ID" },
    productions_: [0, [3, 1], [3, 2], [5, 1], [5, 2], [5, 2], [4, 2], [4, 3], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [9, 3], [9, 2], [12, 2], [12, 2], [12, 2], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [14, 1], [14, 1], [18, 3], [17, 1], [17, 4]],
    performAction: function(C, S, E, x, w, D, L) {
      var A = D.length - 1;
      switch (w) {
        case 6:
        case 7:
          return x;
        case 8:
          x.getLogger().trace("Stop NL ");
          break;
        case 9:
          x.getLogger().trace("Stop EOF ");
          break;
        case 11:
          x.getLogger().trace("Stop NL2 ");
          break;
        case 12:
          x.getLogger().trace("Stop EOF2 ");
          break;
        case 15:
          x.getLogger().info("Node: ", D[A].id), x.addNode(D[A - 1].length, D[A].id, D[A].descr, D[A].type);
          break;
        case 16:
          x.getLogger().trace("Icon: ", D[A]), x.decorateNode({ icon: D[A] });
          break;
        case 17:
        case 21:
          x.decorateNode({ class: D[A] });
          break;
        case 18:
          x.getLogger().trace("SPACELIST");
          break;
        case 19:
          x.getLogger().trace("Node: ", D[A].id), x.addNode(0, D[A].id, D[A].descr, D[A].type);
          break;
        case 20:
          x.decorateNode({ icon: D[A] });
          break;
        case 25:
          x.getLogger().trace("node found ..", D[A - 2]), this.$ = { id: D[A - 1], descr: D[A - 1], type: x.getType(D[A - 2], D[A]) };
          break;
        case 26:
          this.$ = { id: D[A], descr: D[A], type: x.nodeType.DEFAULT };
          break;
        case 27:
          x.getLogger().trace("node found ..", D[A - 3]), this.$ = { id: D[A - 3], descr: D[A - 1], type: x.getType(D[A - 2], D[A]) };
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 5: 3, 6: [1, 5], 8: e }, { 1: [3] }, { 1: [2, 1] }, { 4: 6, 6: [1, 7], 7: [1, 8], 8: e }, { 6: r, 7: [1, 10], 9: 9, 12: 11, 13: a, 14: 14, 15: n, 16: i, 17: 17, 18: 18, 19: s, 22: o }, t(u, [2, 3]), { 1: [2, 2] }, t(u, [2, 4]), t(u, [2, 5]), { 1: [2, 6], 6: r, 12: 21, 13: a, 14: 14, 15: n, 16: i, 17: 17, 18: 18, 19: s, 22: o }, { 6: r, 9: 22, 12: 11, 13: a, 14: 14, 15: n, 16: i, 17: 17, 18: 18, 19: s, 22: o }, { 6: l, 7: f, 10: 23, 11: h }, t(d, [2, 22], { 17: 17, 18: 18, 14: 27, 15: [1, 28], 16: [1, 29], 19: s, 22: o }), t(d, [2, 18]), t(d, [2, 19]), t(d, [2, 20]), t(d, [2, 21]), t(d, [2, 23]), t(d, [2, 24]), t(d, [2, 26], { 19: [1, 30] }), { 20: [1, 31] }, { 6: l, 7: f, 10: 32, 11: h }, { 1: [2, 7], 6: r, 12: 21, 13: a, 14: 14, 15: n, 16: i, 17: 17, 18: 18, 19: s, 22: o }, t(c, [2, 14], { 7: v, 11: p }), t(g, [2, 8]), t(g, [2, 9]), t(g, [2, 10]), t(d, [2, 15]), t(d, [2, 16]), t(d, [2, 17]), { 20: [1, 35] }, { 21: [1, 36] }, t(c, [2, 13], { 7: v, 11: p }), t(g, [2, 11]), t(g, [2, 12]), { 21: [1, 37] }, t(d, [2, 25]), t(d, [2, 27])],
    defaultActions: { 2: [2, 1], 6: [2, 2] },
    parseError: function(C, S) {
      if (S.recoverable)
        this.trace(C);
      else {
        var E = new Error(C);
        throw E.hash = S, E;
      }
    },
    parse: function(C) {
      var S = this, E = [0], x = [], w = [null], D = [], L = this.table, A = "", I = 0, O = 0, M = 2, R = 1, k = D.slice.call(arguments, 1), P = Object.create(this.lexer), B = { yy: {} };
      for (var V in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, V) && (B.yy[V] = this.yy[V]);
      P.setInput(C, B.yy), B.yy.lexer = P, B.yy.parser = this, typeof P.yylloc == "undefined" && (P.yylloc = {});
      var F = P.yylloc;
      D.push(F);
      var G = P.options && P.options.ranges;
      typeof B.yy.parseError == "function" ? this.parseError = B.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function Y() {
        var te;
        return te = x.pop() || P.lex() || R, typeof te != "number" && (te instanceof Array && (x = te, te = x.pop()), te = S.symbols_[te] || te), te;
      }
      for (var _, q, U, z, H = {}, W, J, ee, oe; ; ) {
        if (q = E[E.length - 1], this.defaultActions[q] ? U = this.defaultActions[q] : ((_ === null || typeof _ == "undefined") && (_ = Y()), U = L[q] && L[q][_]), typeof U == "undefined" || !U.length || !U[0]) {
          var me = "";
          oe = [];
          for (W in L[q])
            this.terminals_[W] && W > M && oe.push("'" + this.terminals_[W] + "'");
          P.showPosition ? me = "Parse error on line " + (I + 1) + `:
` + P.showPosition() + `
Expecting ` + oe.join(", ") + ", got '" + (this.terminals_[_] || _) + "'" : me = "Parse error on line " + (I + 1) + ": Unexpected " + (_ == R ? "end of input" : "'" + (this.terminals_[_] || _) + "'"), this.parseError(me, {
            text: P.match,
            token: this.terminals_[_] || _,
            line: P.yylineno,
            loc: F,
            expected: oe
          });
        }
        if (U[0] instanceof Array && U.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + q + ", token: " + _);
        switch (U[0]) {
          case 1:
            E.push(_), w.push(P.yytext), D.push(P.yylloc), E.push(U[1]), _ = null, O = P.yyleng, A = P.yytext, I = P.yylineno, F = P.yylloc;
            break;
          case 2:
            if (J = this.productions_[U[1]][1], H.$ = w[w.length - J], H._$ = {
              first_line: D[D.length - (J || 1)].first_line,
              last_line: D[D.length - 1].last_line,
              first_column: D[D.length - (J || 1)].first_column,
              last_column: D[D.length - 1].last_column
            }, G && (H._$.range = [
              D[D.length - (J || 1)].range[0],
              D[D.length - 1].range[1]
            ]), z = this.performAction.apply(H, [
              A,
              O,
              I,
              B.yy,
              U[1],
              w,
              D
            ].concat(k)), typeof z != "undefined")
              return z;
            J && (E = E.slice(0, -1 * J * 2), w = w.slice(0, -1 * J), D = D.slice(0, -1 * J)), E.push(this.productions_[U[1]][0]), w.push(H.$), D.push(H._$), ee = L[E[E.length - 2]][E[E.length - 1]], E.push(ee);
            break;
          case 3:
            return !0;
        }
      }
      return !0;
    }
  }, b = function() {
    var T = {
      EOF: 1,
      parseError: function(S, E) {
        if (this.yy.parser)
          this.yy.parser.parseError(S, E);
        else
          throw new Error(S);
      },
      // resets the lexer, sets new input
      setInput: function(C, S) {
        return this.yy = S || this.yy || {}, this._input = C, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var C = this._input[0];
        this.yytext += C, this.yyleng++, this.offset++, this.match += C, this.matched += C;
        var S = C.match(/(?:\r\n?|\n).*/g);
        return S ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), C;
      },
      // unshifts one char (or a string) into the input
      unput: function(C) {
        var S = C.length, E = C.split(/(?:\r\n?|\n)/g);
        this._input = C + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - S), this.offset -= S;
        var x = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), E.length - 1 && (this.yylineno -= E.length - 1);
        var w = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: E ? (E.length === x.length ? this.yylloc.first_column : 0) + x[x.length - E.length].length - E[0].length : this.yylloc.first_column - S
        }, this.options.ranges && (this.yylloc.range = [w[0], w[0] + this.yyleng - S]), this.yyleng = this.yytext.length, this;
      },
      // When called from action, caches matched text and appends it on next action
      more: function() {
        return this._more = !0, this;
      },
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: function() {
        if (this.options.backtrack_lexer)
          this._backtrack = !0;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      },
      // retain first n characters of the match
      less: function(C) {
        this.unput(this.match.slice(C));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var C = this.matched.substr(0, this.matched.length - this.match.length);
        return (C.length > 20 ? "..." : "") + C.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var C = this.match;
        return C.length < 20 && (C += this._input.substr(0, 20 - C.length)), (C.substr(0, 20) + (C.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var C = this.pastInput(), S = new Array(C.length + 1).join("-");
        return C + this.upcomingInput() + `
` + S + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(C, S) {
        var E, x, w;
        if (this.options.backtrack_lexer && (w = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (w.yylloc.range = this.yylloc.range.slice(0))), x = C[0].match(/(?:\r\n?|\n).*/g), x && (this.yylineno += x.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: x ? x[x.length - 1].length - x[x.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + C[0].length
        }, this.yytext += C[0], this.match += C[0], this.matches = C, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(C[0].length), this.matched += C[0], E = this.performAction.call(this, this.yy, this, S, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), E)
          return E;
        if (this._backtrack) {
          for (var D in w)
            this[D] = w[D];
          return !1;
        }
        return !1;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = !0);
        var C, S, E, x;
        this._more || (this.yytext = "", this.match = "");
        for (var w = this._currentRules(), D = 0; D < w.length; D++)
          if (E = this._input.match(this.rules[w[D]]), E && (!S || E[0].length > S[0].length)) {
            if (S = E, x = D, this.options.backtrack_lexer) {
              if (C = this.test_match(E, w[D]), C !== !1)
                return C;
              if (this._backtrack) {
                S = !1;
                continue;
              } else
                return !1;
            } else if (!this.options.flex)
              break;
          }
        return S ? (C = this.test_match(S, w[x]), C !== !1 ? C : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var S = this.next();
        return S || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(S) {
        this.conditionStack.push(S);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var S = this.conditionStack.length - 1;
        return S > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(S) {
        return S = this.conditionStack.length - 1 - Math.abs(S || 0), S >= 0 ? this.conditionStack[S] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(S) {
        this.begin(S);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": !0 },
      performAction: function(S, E, x, w) {
        switch (x) {
          case 0:
            return S.getLogger().trace("Found comment", E.yytext), 6;
          case 1:
            return 8;
          case 2:
            this.begin("CLASS");
            break;
          case 3:
            return this.popState(), 16;
          case 4:
            this.popState();
            break;
          case 5:
            S.getLogger().trace("Begin icon"), this.begin("ICON");
            break;
          case 6:
            return S.getLogger().trace("SPACELINE"), 6;
          case 7:
            return 7;
          case 8:
            return 15;
          case 9:
            S.getLogger().trace("end icon"), this.popState();
            break;
          case 10:
            return S.getLogger().trace("Exploding node"), this.begin("NODE"), 19;
          case 11:
            return S.getLogger().trace("Cloud"), this.begin("NODE"), 19;
          case 12:
            return S.getLogger().trace("Explosion Bang"), this.begin("NODE"), 19;
          case 13:
            return S.getLogger().trace("Cloud Bang"), this.begin("NODE"), 19;
          case 14:
            return this.begin("NODE"), 19;
          case 15:
            return this.begin("NODE"), 19;
          case 16:
            return this.begin("NODE"), 19;
          case 17:
            return this.begin("NODE"), 19;
          case 18:
            return 13;
          case 19:
            return 22;
          case 20:
            return 11;
          case 21:
            this.begin("NSTR2");
            break;
          case 22:
            return "NODE_DESCR";
          case 23:
            this.popState();
            break;
          case 24:
            S.getLogger().trace("Starting NSTR"), this.begin("NSTR");
            break;
          case 25:
            return S.getLogger().trace("description:", E.yytext), "NODE_DESCR";
          case 26:
            this.popState();
            break;
          case 27:
            return this.popState(), S.getLogger().trace("node end ))"), "NODE_DEND";
          case 28:
            return this.popState(), S.getLogger().trace("node end )"), "NODE_DEND";
          case 29:
            return this.popState(), S.getLogger().trace("node end ...", E.yytext), "NODE_DEND";
          case 30:
            return this.popState(), S.getLogger().trace("node end (("), "NODE_DEND";
          case 31:
            return this.popState(), S.getLogger().trace("node end (-"), "NODE_DEND";
          case 32:
            return this.popState(), S.getLogger().trace("node end (-"), "NODE_DEND";
          case 33:
            return this.popState(), S.getLogger().trace("node end (("), "NODE_DEND";
          case 34:
            return this.popState(), S.getLogger().trace("node end (("), "NODE_DEND";
          case 35:
            return S.getLogger().trace("Long description:", E.yytext), 20;
          case 36:
            return S.getLogger().trace("Long description:", E.yytext), 20;
        }
      },
      rules: [/^(?:\s*%%.*)/i, /^(?:mindmap\b)/i, /^(?::::)/i, /^(?:.+)/i, /^(?:\n)/i, /^(?:::icon\()/i, /^(?:[\s]+[\n])/i, /^(?:[\n]+)/i, /^(?:[^\)]+)/i, /^(?:\))/i, /^(?:-\))/i, /^(?:\(-)/i, /^(?:\)\))/i, /^(?:\))/i, /^(?:\(\()/i, /^(?:\{\{)/i, /^(?:\()/i, /^(?:\[)/i, /^(?:[\s]+)/i, /^(?:[^\(\[\n\)\{\}]+)/i, /^(?:$)/i, /^(?:["][`])/i, /^(?:[^`"]+)/i, /^(?:[`]["])/i, /^(?:["])/i, /^(?:[^"]+)/i, /^(?:["])/i, /^(?:[\)]\))/i, /^(?:[\)])/i, /^(?:[\]])/i, /^(?:\}\})/i, /^(?:\(-)/i, /^(?:-\))/i, /^(?:\(\()/i, /^(?:\()/i, /^(?:[^\)\]\(\}]+)/i, /^(?:.+(?!\(\())/i],
      conditions: { CLASS: { rules: [3, 4], inclusive: !1 }, ICON: { rules: [8, 9], inclusive: !1 }, NSTR2: { rules: [22, 23], inclusive: !1 }, NSTR: { rules: [25, 26], inclusive: !1 }, NODE: { rules: [21, 24, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], inclusive: !1 }, INITIAL: { rules: [0, 1, 2, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], inclusive: !0 } }
    };
    return T;
  }();
  y.lexer = b;
  function m() {
    this.yy = {};
  }
  return m.prototype = y, y.Parser = m, new m();
}();
fi.parser = fi;
const Zp = fi;
let Nt = [], Hu = 0, Fi = {};
const Qp = () => {
  Nt = [], Hu = 0, Fi = {};
}, Jp = function(t) {
  for (let e = Nt.length - 1; e >= 0; e--)
    if (Nt[e].level < t)
      return Nt[e];
  return null;
}, jp = () => Nt.length > 0 ? Nt[0] : null, ey = (t, e, r, a) => {
  var f, h;
  var n, i;
  Er.info("addNode", t, e, r, a);
  const s = ci();
  let o = (f = (n = s.mindmap) == null ? void 0 : n.padding) != null ? f : ja.mindmap.padding;
  switch (a) {
    case _e.ROUNDED_RECT:
    case _e.RECT:
    case _e.HEXAGON:
      o *= 2;
  }
  const u = {
    id: Hu++,
    nodeId: en(e, s),
    level: t,
    descr: en(r, s),
    type: a,
    children: [],
    width: (h = (i = s.mindmap) == null ? void 0 : i.maxNodeWidth) != null ? h : ja.mindmap.maxNodeWidth,
    padding: o
  }, l = Jp(t);
  if (l)
    l.children.push(u), Nt.push(u);
  else if (Nt.length === 0)
    Nt.push(u);
  else
    throw new Error(
      'There can be only one root. No parent could be found for ("' + u.descr + '")'
    );
}, _e = {
  DEFAULT: 0,
  NO_BORDER: 0,
  ROUNDED_RECT: 1,
  RECT: 2,
  CIRCLE: 3,
  CLOUD: 4,
  BANG: 5,
  HEXAGON: 6
}, ty = (t, e) => {
  switch (Er.debug("In get type", t, e), t) {
    case "[":
      return _e.RECT;
    case "(":
      return e === ")" ? _e.ROUNDED_RECT : _e.CLOUD;
    case "((":
      return _e.CIRCLE;
    case ")":
      return _e.CLOUD;
    case "))":
      return _e.BANG;
    case "{{":
      return _e.HEXAGON;
    default:
      return _e.DEFAULT;
  }
}, ry = (t, e) => {
  Fi[t] = e;
}, ay = (t) => {
  if (!t)
    return;
  const e = ci(), r = Nt[Nt.length - 1];
  t.icon && (r.icon = en(t.icon, e)), t.class && (r.class = en(t.class, e));
}, ny = (t) => {
  switch (t) {
    case _e.DEFAULT:
      return "no-border";
    case _e.RECT:
      return "rect";
    case _e.ROUNDED_RECT:
      return "rounded-rect";
    case _e.CIRCLE:
      return "circle";
    case _e.CLOUD:
      return "cloud";
    case _e.BANG:
      return "bang";
    case _e.HEXAGON:
      return "hexgon";
    default:
      return "no-border";
  }
}, iy = () => Er, sy = (t) => Fi[t], oy = {
  clear: Qp,
  addNode: ey,
  getMindmap: jp,
  nodeType: _e,
  getType: ty,
  setElementForId: ry,
  decorateNode: ay,
  type2Str: ny,
  getLogger: iy,
  getElementById: sy
}, uy = oy, ly = 12, fy = function(t, e, r, a) {
  e.append("path").attr("id", "node-" + r.id).attr("class", "node-bkg node-" + t.type2Str(r.type)).attr(
    "d",
    `M0 ${r.height - 5} v${-r.height + 2 * 5} q0,-5 5,-5 h${r.width - 2 * 5} q5,0 5,5 v${r.height - 5} H0 Z`
  ), e.append("line").attr("class", "node-line-" + a).attr("x1", 0).attr("y1", r.height).attr("x2", r.width).attr("y2", r.height);
}, hy = function(t, e, r) {
  e.append("rect").attr("id", "node-" + r.id).attr("class", "node-bkg node-" + t.type2Str(r.type)).attr("height", r.height).attr("width", r.width);
}, cy = function(t, e, r) {
  const a = r.width, n = r.height, i = 0.15 * a, s = 0.25 * a, o = 0.35 * a, u = 0.2 * a;
  e.append("path").attr("id", "node-" + r.id).attr("class", "node-bkg node-" + t.type2Str(r.type)).attr(
    "d",
    `M0 0 a${i},${i} 0 0,1 ${a * 0.25},${-1 * a * 0.1}
      a${o},${o} 1 0,1 ${a * 0.4},${-1 * a * 0.1}
      a${s},${s} 1 0,1 ${a * 0.35},${1 * a * 0.2}

      a${i},${i} 1 0,1 ${a * 0.15},${1 * n * 0.35}
      a${u},${u} 1 0,1 ${-1 * a * 0.15},${1 * n * 0.65}

      a${s},${i} 1 0,1 ${-1 * a * 0.25},${a * 0.15}
      a${o},${o} 1 0,1 ${-1 * a * 0.5},0
      a${i},${i} 1 0,1 ${-1 * a * 0.25},${-1 * a * 0.15}

      a${i},${i} 1 0,1 ${-1 * a * 0.1},${-1 * n * 0.35}
      a${u},${u} 1 0,1 ${a * 0.1},${-1 * n * 0.65}

    H0 V0 Z`
  );
}, vy = function(t, e, r) {
  const a = r.width, n = r.height, i = 0.15 * a;
  e.append("path").attr("id", "node-" + r.id).attr("class", "node-bkg node-" + t.type2Str(r.type)).attr(
    "d",
    `M0 0 a${i},${i} 1 0,0 ${a * 0.25},${-1 * n * 0.1}
      a${i},${i} 1 0,0 ${a * 0.25},0
      a${i},${i} 1 0,0 ${a * 0.25},0
      a${i},${i} 1 0,0 ${a * 0.25},${1 * n * 0.1}

      a${i},${i} 1 0,0 ${a * 0.15},${1 * n * 0.33}
      a${i * 0.8},${i * 0.8} 1 0,0 0,${1 * n * 0.34}
      a${i},${i} 1 0,0 ${-1 * a * 0.15},${1 * n * 0.33}

      a${i},${i} 1 0,0 ${-1 * a * 0.25},${n * 0.15}
      a${i},${i} 1 0,0 ${-1 * a * 0.25},0
      a${i},${i} 1 0,0 ${-1 * a * 0.25},0
      a${i},${i} 1 0,0 ${-1 * a * 0.25},${-1 * n * 0.15}

      a${i},${i} 1 0,0 ${-1 * a * 0.1},${-1 * n * 0.33}
      a${i * 0.8},${i * 0.8} 1 0,0 0,${-1 * n * 0.34}
      a${i},${i} 1 0,0 ${a * 0.1},${-1 * n * 0.33}

    H0 V0 Z`
  );
}, dy = function(t, e, r) {
  e.append("circle").attr("id", "node-" + r.id).attr("class", "node-bkg node-" + t.type2Str(r.type)).attr("r", r.width / 2);
};
function gy(t, e, r, a, n) {
  return t.insert("polygon", ":first-child").attr(
    "points",
    a.map(function(i) {
      return i.x + "," + i.y;
    }).join(" ")
  ).attr("transform", "translate(" + (n.width - e) / 2 + ", " + r + ")");
}
const py = function(t, e, r) {
  const a = r.height, i = a / 4, s = r.width - r.padding + 2 * i, o = [
    { x: i, y: 0 },
    { x: s - i, y: 0 },
    { x: s, y: -a / 2 },
    { x: s - i, y: -a },
    { x: i, y: -a },
    { x: 0, y: -a / 2 }
  ];
  gy(e, s, a, o, r);
}, yy = function(t, e, r) {
  e.append("rect").attr("id", "node-" + r.id).attr("class", "node-bkg node-" + t.type2Str(r.type)).attr("height", r.height).attr("rx", r.padding).attr("ry", r.padding).attr("width", r.width);
}, my = function(t, e, r, a, n) {
  const i = n.htmlLabels, s = a % (ly - 1), o = e.append("g");
  r.section = s;
  let u = "section-" + s;
  s < 0 && (u += " section-root"), o.attr("class", (r.class ? r.class + " " : "") + "mindmap-node " + u);
  const l = o.append("g"), f = o.append("g"), h = r.descr.replace(/(<br\/*>)/g, `
`);
  hl(f, h, {
    useHtmlLabels: i,
    width: r.width,
    classes: "mindmap-node-label"
  }), i || f.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle");
  const d = f.node().getBBox(), [c] = fl(n.fontSize);
  if (r.height = d.height + c * 1.1 * 0.5 + r.padding, r.width = d.width + 2 * r.padding, r.icon)
    if (r.type === t.nodeType.CIRCLE)
      r.height += 50, r.width += 50, o.append("foreignObject").attr("height", "50px").attr("width", r.width).attr("style", "text-align: center;").append("div").attr("class", "icon-container").append("i").attr("class", "node-icon-" + s + " " + r.icon), f.attr(
        "transform",
        "translate(" + r.width / 2 + ", " + (r.height / 2 - 1.5 * r.padding) + ")"
      );
    else {
      r.width += 50;
      const v = r.height;
      r.height = Math.max(v, 60);
      const p = Math.abs(r.height - v);
      o.append("foreignObject").attr("width", "60px").attr("height", r.height).attr("style", "text-align: center;margin-top:" + p / 2 + "px;").append("div").attr("class", "icon-container").append("i").attr("class", "node-icon-" + s + " " + r.icon), f.attr(
        "transform",
        "translate(" + (25 + r.width / 2) + ", " + (p / 2 + r.padding / 2) + ")"
      );
    }
  else if (i) {
    const v = (r.width - d.width) / 2, p = (r.height - d.height) / 2;
    f.attr("transform", "translate(" + v + ", " + p + ")");
  } else {
    const v = r.width / 2, p = r.padding / 2;
    f.attr("transform", "translate(" + v + ", " + p + ")");
  }
  switch (r.type) {
    case t.nodeType.DEFAULT:
      fy(t, l, r, s);
      break;
    case t.nodeType.ROUNDED_RECT:
      yy(t, l, r);
      break;
    case t.nodeType.RECT:
      hy(t, l, r);
      break;
    case t.nodeType.CIRCLE:
      l.attr("transform", "translate(" + r.width / 2 + ", " + +r.height / 2 + ")"), dy(t, l, r);
      break;
    case t.nodeType.CLOUD:
      cy(t, l, r);
      break;
    case t.nodeType.BANG:
      vy(t, l, r);
      break;
    case t.nodeType.HEXAGON:
      py(t, l, r);
      break;
  }
  return t.setElementForId(r.id, o), r.height;
}, by = function(t, e) {
  const r = t.getElementById(e.id), a = e.x || 0, n = e.y || 0;
  r.attr("transform", "translate(" + a + "," + n + ")");
};
nr.use(Kp);
function Xu(t, e, r, a, n) {
  my(t, e, r, a, n), r.children && r.children.forEach((i, s) => {
    Xu(t, e, i, a < 0 ? s : a, n);
  });
}
function Ey(t, e) {
  e.edges().map((r, a) => {
    const n = r.data();
    if (r[0]._private.bodyBounds) {
      const i = r[0]._private.rscratch;
      Er.trace("Edge: ", a, n), t.insert("path").attr(
        "d",
        `M ${i.startX},${i.startY} L ${i.midX},${i.midY} L${i.endX},${i.endY} `
      ).attr("class", "edge section-edge-" + n.section + " edge-depth-" + n.depth);
    }
  });
}
function qu(t, e, r, a) {
  e.add({
    group: "nodes",
    data: {
      id: t.id.toString(),
      labelText: t.descr,
      height: t.height,
      width: t.width,
      level: a,
      nodeId: t.id,
      padding: t.padding,
      type: t.type
    },
    position: {
      x: t.x,
      y: t.y
    }
  }), t.children && t.children.forEach((n) => {
    qu(n, e, r, a + 1), e.add({
      group: "edges",
      data: {
        id: `${t.id}_${n.id}`,
        source: t.id,
        target: n.id,
        depth: a,
        section: n.section
      }
    });
  });
}
function wy(t, e) {
  return new Promise((r) => {
    const a = sl("body").append("div").attr("id", "cy").attr("style", "display:none"), n = nr({
      container: document.getElementById("cy"),
      // container to render in
      style: [
        {
          selector: "edge",
          style: {
            "curve-style": "bezier"
          }
        }
      ]
    });
    a.remove(), qu(t, n, e, 0), n.nodes().forEach(function(i) {
      i.layoutDimensions = () => {
        const s = i.data();
        return { w: s.width, h: s.height };
      };
    }), n.layout({
      name: "cose-bilkent",
      // @ts-ignore Types for cose-bilkent are not correct?
      quality: "proof",
      styleEnabled: !1,
      animate: !1
    }).run(), n.ready((i) => {
      Er.info("Ready", i), r(n);
    });
  });
}
function xy(t, e) {
  e.nodes().map((r, a) => {
    const n = r.data();
    n.x = r.position().x, n.y = r.position().y, by(t, n);
    const i = t.getElementById(n.nodeId);
    Er.info("Id:", a, "Position: (", r.position().x, ", ", r.position().y, ")", n), i.attr(
      "transform",
      `translate(${r.position().x - n.width / 2}, ${r.position().y - n.height / 2})`
    ), i.attr("attr", `apa-${a})`);
  });
}
const Ty = (t, e, r, a) => $i(void 0, null, function* () {
  var c, v;
  var n, i;
  Er.debug(`Rendering mindmap diagram
` + t);
  const s = a.db, o = s.getMindmap();
  if (!o)
    return;
  const u = ci();
  u.htmlLabels = !1;
  const l = nl(e), f = l.append("g");
  f.attr("class", "mindmap-edges");
  const h = l.append("g");
  h.attr("class", "mindmap-nodes"), Xu(s, h, o, -1, u);
  const d = yield wy(o, u);
  Ey(f, d), xy(s, d), il(
    void 0,
    l,
    (c = (n = u.mindmap) == null ? void 0 : n.padding) != null ? c : ja.mindmap.padding,
    (v = (i = u.mindmap) == null ? void 0 : i.useMaxWidth) != null ? v : ja.mindmap.useMaxWidth
  );
}), Cy = {
  draw: Ty
}, Dy = (t) => {
  let e = "";
  for (let r = 0; r < t.THEME_COLOR_LIMIT; r++)
    t["lineColor" + r] = t["lineColor" + r] || t["cScaleInv" + r], ol(t["lineColor" + r]) ? t["lineColor" + r] = ul(t["lineColor" + r], 20) : t["lineColor" + r] = ll(t["lineColor" + r], 20);
  for (let r = 0; r < t.THEME_COLOR_LIMIT; r++) {
    const a = "" + (17 - 3 * r);
    e += `
    .section-${r - 1} rect, .section-${r - 1} path, .section-${r - 1} circle, .section-${r - 1} polygon, .section-${r - 1} path  {
      fill: ${t["cScale" + r]};
    }
    .section-${r - 1} text {
     fill: ${t["cScaleLabel" + r]};
    }
    .node-icon-${r - 1} {
      font-size: 40px;
      color: ${t["cScaleLabel" + r]};
    }
    .section-edge-${r - 1}{
      stroke: ${t["cScale" + r]};
    }
    .edge-depth-${r - 1}{
      stroke-width: ${a};
    }
    .section-${r - 1} line {
      stroke: ${t["cScaleInv" + r]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
  }
  return e;
}, Sy = (t) => `
  .edge {
    stroke-width: 3;
  }
  ${Dy(t)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${t.git0};
  }
  .section-root text {
    fill: ${t.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .mindmap-node-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
`, Ly = Sy, Iy = {
  db: uy,
  renderer: Cy,
  parser: Zp,
  styles: Ly
};
export {
  Iy as diagram
};
