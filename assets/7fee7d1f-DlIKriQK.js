import{a_ as U,_ as f,a0 as R,a4 as D,dg as je,g5 as Ge,g6 as _e,b0 as Xe,g7 as Se,as as F,k as re,d as p,aj as E,en as Ve,aV as q,at as b,aT as se,g8 as ce,g9 as de,aW as g,fi as ue,ga as he,al as Te,gb as V,gc as ie,gd as ze,ge as Ue,gf as qe,gg as Ye,dh as Qe,b as Ze,fk as Je,F as et,ai as ee,gh as tt,gi as ae,gj as nt,gk as ot,a3 as ge,gl as rt}from"./index-CyMr76_m.js";import{getDataSourceTypeConfig as it}from"./f52ee168-CndtDUrJ.js";import"./de2e4e92-CLGZnZd1.js";import"./bf2ffa97-CE4h1tFV.js";import"./90e6d3f7-0GLayY-W.js";import"./3eacf14a-jaqUEiFu.js";import"./a353f3e4-DD4QcEPO.js";import"./a6ed71f1-CFlnijMj.js";function te(t){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?Object(arguments[n]):{},i=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&i.push.apply(i,Object.getOwnPropertySymbols(o).filter(function(d){return Object.getOwnPropertyDescriptor(o,d).enumerable})),i.forEach(function(d){b(t,d,o[d])})}return t}var at=function(t,n,o,i,d,c,r,e){if(!t){var m;if(n===void 0)m=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var a=[o,i,d,c,r,e],l=0;m=new Error(n.replace(/%s/g,function(){return a[l++]})),m.name="Invariant Violation"}throw m.framesToPop=1,m}},lt=at;const H=Ze(lt);var st=function(){function t(){q(this,t),b(this,"refs",{})}return U(t,[{key:"add",value:function(n,o){this.refs[n]||(this.refs[n]=[]),this.refs[n].push(o)}},{key:"remove",value:function(n,o){var i=this.getIndex(n,o);i!==-1&&this.refs[n].splice(i,1)}},{key:"isActive",value:function(){return this.active}},{key:"getActive",value:function(){var n=this;return this.refs[this.active.collection].find(function(o){var i=o.node;return i.sortableInfo.index==n.active.index})}},{key:"getIndex",value:function(n,o){return this.refs[n].indexOf(o)}},{key:"getOrderedRefs",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.active.collection;return this.refs[n].sort(ct)}}]),t}();function ct(t,n){var o=t.node.sortableInfo.index,i=n.node.sortableInfo.index;return o-i}function dt(t,n,o){return t=t.slice(),t.splice(o<0?t.length+o:o,0,t.splice(n,1)[0]),t}function Ie(t,n){return Object.keys(t).reduce(function(o,i){return n.indexOf(i)===-1&&(o[i]=t[i]),o},{})}var K={end:["touchend","touchcancel","mouseup"],move:["touchmove","mousemove"],start:["touchstart","mousedown"]},Oe=function(){if(typeof window>"u"||typeof document>"u")return"";var t=window.getComputedStyle(document.documentElement,"")||["-moz-hidden-iframe"],n=(Array.prototype.slice.call(t).join("").match(/-(moz|webkit|ms)-/)||t.OLink===""&&["","o"])[1];switch(n){case"ms":return"ms";default:return n&&n.length?n[0].toUpperCase()+n.substr(1):""}}();function Q(t,n){Object.keys(n).forEach(function(o){t.style[o]=n[o]})}function Z(t,n){t.style["".concat(Oe,"Transform")]=n==null?"":"translate3d(".concat(n.x,"px,").concat(n.y,"px,0)")}function ne(t,n){t.style["".concat(Oe,"TransitionDuration")]=n==null?"":"".concat(n,"ms")}function z(t,n){for(;t;){if(n(t))return t;t=t.parentNode}return null}function xe(t,n,o){return Math.max(t,Math.min(o,n))}function $(t){return t.substr(-2)==="px"?parseFloat(t):0}function ut(t){var n=window.getComputedStyle(t);return{bottom:$(n.marginBottom),left:$(n.marginLeft),right:$(n.marginRight),top:$(n.marginTop)}}function fe(t,n){var o=n.displayName||n.name;return o?"".concat(t,"(").concat(o,")"):t}function oe(t,n){var o=t.getBoundingClientRect();return{top:o.top+n.top,left:o.left+n.left}}function X(t){return t.touches&&t.touches.length?{x:t.touches[0].pageX,y:t.touches[0].pageY}:t.changedTouches&&t.changedTouches.length?{x:t.changedTouches[0].pageX,y:t.changedTouches[0].pageY}:{x:t.pageX,y:t.pageY}}function ht(t){return t.touches&&t.touches.length||t.changedTouches&&t.changedTouches.length}function J(t,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{left:0,top:0};if(t){var i={left:o.left+t.offsetLeft,top:o.top+t.offsetTop};return t.parentNode===n?i:J(t.parentNode,n,i)}}function ft(t,n,o){return t<o&&t>n?t-1:t>o&&t<n?t+1:t}function ve(t){var n=t.lockOffset,o=t.width,i=t.height,d=n,c=n,r="px";if(typeof n=="string"){var e=/^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(n);H(e!==null,'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s',n),d=parseFloat(n),c=parseFloat(n),r=e[1]}return H(isFinite(d)&&isFinite(c),"lockOffset value should be a finite. Given %s",n),r==="%"&&(d=d*o/100,c=c*i/100),{x:d,y:c}}function pt(t){var n=t.height,o=t.width,i=t.lockOffset,d=Array.isArray(i)?i:[i,i];H(d.length===2,"lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s",i);var c=Te(d,2),r=c[0],e=c[1];return[ve({height:n,lockOffset:r,width:o}),ve({height:n,lockOffset:e,width:o})]}function mt(t){var n=window.getComputedStyle(t),o=/(auto|scroll)/,i=["overflow","overflowX","overflowY"];return i.find(function(d){return o.test(n[d])})}function ke(t){return t instanceof HTMLElement?mt(t)?t:ke(t.parentNode):null}function gt(t){var n=window.getComputedStyle(t);return n.display==="grid"?{x:$(n.gridColumnGap),y:$(n.gridRowGap)}:{x:0,y:0}}var L={TAB:9,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40},B={Anchor:"A",Button:"BUTTON",Canvas:"CANVAS",Input:"INPUT",Option:"OPTION",Textarea:"TEXTAREA",Select:"SELECT"};function xt(t){var n="input, textarea, select, canvas, [contenteditable]",o=t.querySelectorAll(n),i=t.cloneNode(!0),d=Je(i.querySelectorAll(n));return d.forEach(function(c,r){if(c.type!=="file"&&(c.value=o[r].value),c.type==="radio"&&c.name&&(c.name="__sortableClone__".concat(c.name)),c.tagName===B.Canvas&&o[r].width>0&&o[r].height>0){var e=c.getContext("2d");e.drawImage(o[r],0,0)}}),i}function vt(t){var n,o,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{withRef:!1};return o=n=function(d){se(c,d);function c(){var r,e;q(this,c);for(var m=arguments.length,a=new Array(m),l=0;l<m;l++)a[l]=arguments[l];return e=ce(this,(r=de(c)).call.apply(r,[this].concat(a))),b(g(g(e)),"wrappedInstance",R.createRef()),e}return U(c,[{key:"componentDidMount",value:function(){var r=ue.findDOMNode(this);r.sortableHandle=!0}},{key:"getWrappedInstance",value:function(){return H(i.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call"),this.wrappedInstance.current}},{key:"render",value:function(){var r=i.withRef?this.wrappedInstance:null;return R.createElement(t,he({ref:r},this.props))}}]),c}(R.Component),b(n,"displayName",fe("sortableHandle",t)),o}function ye(t){return t.sortableHandle!=null}var yt=function(){function t(n,o){q(this,t),this.container=n,this.onScrollCallback=o}return U(t,[{key:"clear",value:function(){this.interval!=null&&(clearInterval(this.interval),this.interval=null)}},{key:"update",value:function(n){var o=this,i=n.translate,d=n.minTranslate,c=n.maxTranslate,r=n.width,e=n.height,m={x:0,y:0},a={x:1,y:1},l={x:10,y:10},u=this.container,h=u.scrollTop,s=u.scrollLeft,v=u.scrollHeight,y=u.scrollWidth,w=u.clientHeight,T=u.clientWidth,k=h===0,x=v-h-w===0,N=s===0,C=y-s-T===0;i.y>=c.y-e/2&&!x?(m.y=1,a.y=l.y*Math.abs((c.y-e/2-i.y)/e)):i.x>=c.x-r/2&&!C?(m.x=1,a.x=l.x*Math.abs((c.x-r/2-i.x)/r)):i.y<=d.y+e/2&&!k?(m.y=-1,a.y=l.y*Math.abs((i.y-e/2-d.y)/e)):i.x<=d.x+r/2&&!N&&(m.x=-1,a.x=l.x*Math.abs((i.x-r/2-d.x)/r)),this.interval&&(this.clear(),this.isAutoScrolling=!1),(m.x!==0||m.y!==0)&&(this.interval=setInterval(function(){o.isAutoScrolling=!0;var I={left:a.x*m.x,top:a.y*m.y};o.container.scrollTop+=I.top,o.container.scrollLeft+=I.left,o.onScrollCallback(I)},5))}}]),t}();function wt(t){var n=t.node;return{height:n.offsetHeight,width:n.offsetWidth}}function bt(t){var n=[B.Input,B.Textarea,B.Select,B.Option,B.Button];return!!(n.indexOf(t.target.tagName)!==-1||z(t.target,function(o){return o.contentEditable==="true"}))}var Ee={axis:f.oneOf(["x","y","xy"]),contentWindow:f.any,disableAutoscroll:f.bool,distance:f.number,getContainer:f.func,getHelperDimensions:f.func,helperClass:f.string,helperContainer:f.oneOfType([f.func,typeof HTMLElement>"u"?f.any:f.instanceOf(HTMLElement)]),hideSortableGhost:f.bool,keyboardSortingTransitionDuration:f.number,lockAxis:f.string,lockOffset:f.oneOfType([f.number,f.string,f.arrayOf(f.oneOfType([f.number,f.string]))]),lockToContainerEdges:f.bool,onSortEnd:f.func,onSortMove:f.func,onSortOver:f.func,onSortStart:f.func,pressDelay:f.number,pressThreshold:f.number,keyCodes:f.shape({lift:f.arrayOf(f.number),drop:f.arrayOf(f.number),cancel:f.arrayOf(f.number),up:f.arrayOf(f.number),down:f.arrayOf(f.number)}),shouldCancelStart:f.func,transitionDuration:f.number,updateBeforeSortStart:f.func,useDragHandle:f.bool,useWindowAsScrollContainer:f.bool},De={lift:[L.SPACE],drop:[L.SPACE],cancel:[L.ESC],up:[L.UP,L.LEFT],down:[L.DOWN,L.RIGHT]},Ct={axis:"y",disableAutoscroll:!1,distance:0,getHelperDimensions:wt,hideSortableGhost:!0,lockOffset:"50%",lockToContainerEdges:!1,pressDelay:0,pressThreshold:5,keyCodes:De,shouldCancelStart:bt,transitionDuration:300,useWindowAsScrollContainer:!1},St=Object.keys(Ee);function Tt(t){H(!(t.distance&&t.pressDelay),"Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.")}function It(t,n){try{var o=t()}catch(i){return n(!0,i)}return o&&o.then?o.then(n.bind(null,!1),n.bind(null,!0)):n(!1,value)}var Ne=R.createContext({manager:{}});function Ot(t){var n,o,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{withRef:!1};return o=n=function(d){se(c,d);function c(r){var e;q(this,c),e=ce(this,de(c).call(this,r)),b(g(g(e)),"state",{}),b(g(g(e)),"handleStart",function(a){var l=e.props,u=l.distance,h=l.shouldCancelStart;if(!(a.button===2||h(a))){e.touched=!0,e.position=X(a);var s=z(a.target,function(x){return x.sortableInfo!=null});if(s&&s.sortableInfo&&e.nodeIsChild(s)&&!e.state.sorting){var v=e.props.useDragHandle,y=s.sortableInfo,w=y.index,T=y.collection,k=y.disabled;if(k||v&&!z(a.target,ye))return;e.manager.active={collection:T,index:w},!ht(a)&&a.target.tagName===B.Anchor&&a.preventDefault(),u||(e.props.pressDelay===0?e.handlePress(a):e.pressTimer=setTimeout(function(){return e.handlePress(a)},e.props.pressDelay))}}}),b(g(g(e)),"nodeIsChild",function(a){return a.sortableInfo.manager===e.manager}),b(g(g(e)),"handleMove",function(a){var l=e.props,u=l.distance,h=l.pressThreshold;if(!e.state.sorting&&e.touched&&!e._awaitingUpdateBeforeSortStart){var s=X(a),v={x:e.position.x-s.x,y:e.position.y-s.y},y=Math.abs(v.x)+Math.abs(v.y);e.delta=v,!u&&(!h||y>=h)?(clearTimeout(e.cancelTimer),e.cancelTimer=setTimeout(e.cancel,0)):u&&y>=u&&e.manager.isActive()&&e.handlePress(a)}}),b(g(g(e)),"handleEnd",function(){e.touched=!1,e.cancel()}),b(g(g(e)),"cancel",function(){var a=e.props.distance,l=e.state.sorting;l||(a||clearTimeout(e.pressTimer),e.manager.active=null)}),b(g(g(e)),"handlePress",function(a){try{var l=e.manager.getActive(),u=function(){if(l){var h=function(){var O=C.sortableInfo.index,S=ut(C),M=gt(e.container),P=e.scrollContainer.getBoundingClientRect(),G=y({index:O,node:C,collection:I});if(e.node=C,e.margin=S,e.gridGap=M,e.width=G.width,e.height=G.height,e.marginOffset={x:e.margin.left+e.margin.right+e.gridGap.x,y:Math.max(e.margin.top,e.margin.bottom,e.gridGap.y)},e.boundingClientRect=C.getBoundingClientRect(),e.containerBoundingRect=P,e.index=O,e.newIndex=O,e.axis={x:v.indexOf("x")>=0,y:v.indexOf("y")>=0},e.offsetEdge=J(C,e.container),A?e.initialOffset=X(te({},a,{pageX:e.boundingClientRect.left,pageY:e.boundingClientRect.top})):e.initialOffset=X(a),e.initialScroll={left:e.scrollContainer.scrollLeft,top:e.scrollContainer.scrollTop},e.initialWindowScroll={left:window.pageXOffset,top:window.pageYOffset},e.helper=e.helperContainer.appendChild(xt(C)),Q(e.helper,{boxSizing:"border-box",height:"".concat(e.height,"px"),left:"".concat(e.boundingClientRect.left-S.left,"px"),pointerEvents:"none",position:"fixed",top:"".concat(e.boundingClientRect.top-S.top,"px"),width:"".concat(e.width,"px")}),A&&e.helper.focus(),T&&(e.sortableGhost=C,Q(C,{opacity:0,visibility:"hidden"})),e.minTranslate={},e.maxTranslate={},A){var Y=N?{top:0,left:0,width:e.contentWindow.innerWidth,height:e.contentWindow.innerHeight}:e.containerBoundingRect,pe=Y.top,me=Y.left,Be=Y.width,He=Y.height,Ke=pe+He,$e=me+Be;e.axis.x&&(e.minTranslate.x=me-e.boundingClientRect.left,e.maxTranslate.x=$e-(e.boundingClientRect.left+e.width)),e.axis.y&&(e.minTranslate.y=pe-e.boundingClientRect.top,e.maxTranslate.y=Ke-(e.boundingClientRect.top+e.height))}else e.axis.x&&(e.minTranslate.x=(N?0:P.left)-e.boundingClientRect.left-e.width/2,e.maxTranslate.x=(N?e.contentWindow.innerWidth:P.left+P.width)-e.boundingClientRect.left-e.width/2),e.axis.y&&(e.minTranslate.y=(N?0:P.top)-e.boundingClientRect.top-e.height/2,e.maxTranslate.y=(N?e.contentWindow.innerHeight:P.top+P.height)-e.boundingClientRect.top-e.height/2);w&&w.split(" ").forEach(function(_){return e.helper.classList.add(_)}),e.listenerNode=a.touches?a.target:e.contentWindow,A?(e.listenerNode.addEventListener("wheel",e.handleKeyEnd,!0),e.listenerNode.addEventListener("mousedown",e.handleKeyEnd,!0),e.listenerNode.addEventListener("keydown",e.handleKeyDown)):(K.move.forEach(function(_){return e.listenerNode.addEventListener(_,e.handleSortMove,!1)}),K.end.forEach(function(_){return e.listenerNode.addEventListener(_,e.handleSortEnd,!1)})),e.setState({sorting:!0,sortingIndex:O}),x&&x({node:C,index:O,collection:I,isKeySorting:A,nodes:e.manager.getOrderedRefs(),helper:e.helper},a),A&&e.keyMove(0)},s=e.props,v=s.axis,y=s.getHelperDimensions,w=s.helperClass,T=s.hideSortableGhost,k=s.updateBeforeSortStart,x=s.onSortStart,N=s.useWindowAsScrollContainer,C=l.node,I=l.collection,A=e.manager.isKeySorting,W=function(){if(typeof k=="function"){e._awaitingUpdateBeforeSortStart=!0;var O=It(function(){var S=C.sortableInfo.index;return Promise.resolve(k({collection:I,index:S,node:C,isKeySorting:A},a)).then(function(){})},function(S,M){if(e._awaitingUpdateBeforeSortStart=!1,S)throw M;return M});if(O&&O.then)return O.then(function(){})}}();return W&&W.then?W.then(h):h(W)}}();return Promise.resolve(u&&u.then?u.then(function(){}):void 0)}catch(h){return Promise.reject(h)}}),b(g(g(e)),"handleSortMove",function(a){var l=e.props.onSortMove;typeof a.preventDefault=="function"&&a.cancelable&&a.preventDefault(),e.updateHelperPosition(a),e.animateNodes(),e.autoscroll(),l&&l(a)}),b(g(g(e)),"handleSortEnd",function(a){var l=e.props,u=l.hideSortableGhost,h=l.onSortEnd,s=e.manager,v=s.active.collection,y=s.isKeySorting,w=e.manager.getOrderedRefs();e.listenerNode&&(y?(e.listenerNode.removeEventListener("wheel",e.handleKeyEnd,!0),e.listenerNode.removeEventListener("mousedown",e.handleKeyEnd,!0),e.listenerNode.removeEventListener("keydown",e.handleKeyDown)):(K.move.forEach(function(C){return e.listenerNode.removeEventListener(C,e.handleSortMove)}),K.end.forEach(function(C){return e.listenerNode.removeEventListener(C,e.handleSortEnd)}))),e.helper.parentNode.removeChild(e.helper),u&&e.sortableGhost&&Q(e.sortableGhost,{opacity:"",visibility:""});for(var T=0,k=w.length;T<k;T++){var x=w[T],N=x.node;x.edgeOffset=null,x.boundingClientRect=null,Z(N,null),ne(N,null),x.translate=null}e.autoScroller.clear(),e.manager.active=null,e.manager.isKeySorting=!1,e.setState({sorting:!1,sortingIndex:null}),typeof h=="function"&&h({collection:v,newIndex:e.newIndex,oldIndex:e.index,isKeySorting:y,nodes:w},a),e.touched=!1}),b(g(g(e)),"autoscroll",function(){var a=e.props.disableAutoscroll,l=e.manager.isKeySorting;if(a){e.autoScroller.clear();return}if(l){var u=te({},e.translate),h=0,s=0;e.axis.x&&(u.x=Math.min(e.maxTranslate.x,Math.max(e.minTranslate.x,e.translate.x)),h=e.translate.x-u.x),e.axis.y&&(u.y=Math.min(e.maxTranslate.y,Math.max(e.minTranslate.y,e.translate.y)),s=e.translate.y-u.y),e.translate=u,Z(e.helper,e.translate),e.scrollContainer.scrollLeft+=h,e.scrollContainer.scrollTop+=s;return}e.autoScroller.update({height:e.height,maxTranslate:e.maxTranslate,minTranslate:e.minTranslate,translate:e.translate,width:e.width})}),b(g(g(e)),"onAutoScroll",function(a){e.translate.x+=a.left,e.translate.y+=a.top,e.animateNodes()}),b(g(g(e)),"handleKeyDown",function(a){var l=a.keyCode,u=e.props,h=u.shouldCancelStart,s=u.keyCodes,v=s===void 0?{}:s,y=te({},De,v);e.manager.active&&!e.manager.isKeySorting||!e.manager.active&&(!y.lift.includes(l)||h(a)||!e.isValidSortingTarget(a))||(a.stopPropagation(),a.preventDefault(),y.lift.includes(l)&&!e.manager.active?e.keyLift(a):y.drop.includes(l)&&e.manager.active?e.keyDrop(a):y.cancel.includes(l)?(e.newIndex=e.manager.active.index,e.keyDrop(a)):y.up.includes(l)?e.keyMove(-1):y.down.includes(l)&&e.keyMove(1))}),b(g(g(e)),"keyLift",function(a){var l=a.target,u=z(l,function(y){return y.sortableInfo!=null}),h=u.sortableInfo,s=h.index,v=h.collection;e.initialFocusedNode=l,e.manager.isKeySorting=!0,e.manager.active={index:s,collection:v},e.handlePress(a)}),b(g(g(e)),"keyMove",function(a){var l=e.manager.getOrderedRefs(),u=l[l.length-1].node.sortableInfo.index,h=e.newIndex+a,s=e.newIndex;if(!(h<0||h>u)){e.prevIndex=s,e.newIndex=h;var v=ft(e.newIndex,e.prevIndex,e.index),y=l.find(function(A){var W=A.node;return W.sortableInfo.index===v}),w=y.node,T=e.containerScrollDelta,k=y.boundingClientRect||oe(w,T),x=y.translate||{x:0,y:0},N={top:k.top+x.y-T.top,left:k.left+x.x-T.left},C=s<h,I={x:C&&e.axis.x?w.offsetWidth-e.width:0,y:C&&e.axis.y?w.offsetHeight-e.height:0};e.handleSortMove({pageX:N.left+I.x,pageY:N.top+I.y,ignoreTransition:a===0})}}),b(g(g(e)),"keyDrop",function(a){e.handleSortEnd(a),e.initialFocusedNode&&e.initialFocusedNode.focus()}),b(g(g(e)),"handleKeyEnd",function(a){e.manager.active&&e.keyDrop(a)}),b(g(g(e)),"isValidSortingTarget",function(a){var l=e.props.useDragHandle,u=a.target,h=z(u,function(s){return s.sortableInfo!=null});return h&&h.sortableInfo&&!h.sortableInfo.disabled&&(l?ye(u):u.sortableInfo)});var m=new st;return Tt(r),e.manager=m,e.wrappedInstance=R.createRef(),e.sortableContextValue={manager:m},e.events={end:e.handleEnd,move:e.handleMove,start:e.handleStart},e}return U(c,[{key:"componentDidMount",value:function(){var r=this,e=this.props.useWindowAsScrollContainer,m=this.getContainer();Promise.resolve(m).then(function(a){r.container=a,r.document=r.container.ownerDocument||document;var l=r.props.contentWindow||r.document.defaultView||window;r.contentWindow=typeof l=="function"?l():l,r.scrollContainer=e?r.document.scrollingElement||r.document.documentElement:ke(r.container)||r.container,r.autoScroller=new yt(r.scrollContainer,r.onAutoScroll),Object.keys(r.events).forEach(function(u){return K[u].forEach(function(h){return r.container.addEventListener(h,r.events[u],!1)})}),r.container.addEventListener("keydown",r.handleKeyDown)})}},{key:"componentWillUnmount",value:function(){var r=this;this.helper&&this.helper.parentNode&&this.helper.parentNode.removeChild(this.helper),this.container&&(Object.keys(this.events).forEach(function(e){return K[e].forEach(function(m){return r.container.removeEventListener(m,r.events[e])})}),this.container.removeEventListener("keydown",this.handleKeyDown))}},{key:"updateHelperPosition",value:function(r){var e=this.props,m=e.lockAxis,a=e.lockOffset,l=e.lockToContainerEdges,u=e.transitionDuration,h=e.keyboardSortingTransitionDuration,s=h===void 0?u:h,v=this.manager.isKeySorting,y=r.ignoreTransition,w=X(r),T={x:w.x-this.initialOffset.x,y:w.y-this.initialOffset.y};if(T.y-=window.pageYOffset-this.initialWindowScroll.top,T.x-=window.pageXOffset-this.initialWindowScroll.left,this.translate=T,l){var k=pt({height:this.height,lockOffset:a,width:this.width}),x=Te(k,2),N=x[0],C=x[1],I={x:this.width/2-N.x,y:this.height/2-N.y},A={x:this.width/2-C.x,y:this.height/2-C.y};T.x=xe(this.minTranslate.x+I.x,this.maxTranslate.x-A.x,T.x),T.y=xe(this.minTranslate.y+I.y,this.maxTranslate.y-A.y,T.y)}m==="x"?T.y=0:m==="y"&&(T.x=0),v&&s&&!y&&ne(this.helper,s),Z(this.helper,T)}},{key:"animateNodes",value:function(){var r=this.props,e=r.transitionDuration,m=r.hideSortableGhost,a=r.onSortOver,l=this.containerScrollDelta,u=this.windowScrollDelta,h=this.manager.getOrderedRefs(),s={left:this.offsetEdge.left+this.translate.x+l.left,top:this.offsetEdge.top+this.translate.y+l.top},v=this.manager.isKeySorting,y=this.newIndex;this.newIndex=null;for(var w=0,T=h.length;w<T;w++){var k=h[w].node,x=k.sortableInfo.index,N=k.offsetWidth,C=k.offsetHeight,I={height:this.height>C?C/2:this.height/2,width:this.width>N?N/2:this.width/2},A=v&&x>this.index&&x<=y,W=v&&x<this.index&&x>=y,O={x:0,y:0},S=h[w].edgeOffset;S||(S=J(k,this.container),h[w].edgeOffset=S,v&&(h[w].boundingClientRect=oe(k,l)));var M=w<h.length-1&&h[w+1],P=w>0&&h[w-1];if(M&&!M.edgeOffset&&(M.edgeOffset=J(M.node,this.container),v&&(M.boundingClientRect=oe(M.node,l))),x===this.index){m&&(this.sortableGhost=k,Q(k,{opacity:0,visibility:"hidden"}));continue}e&&ne(k,e),this.axis.x?this.axis.y?W||x<this.index&&(s.left+u.left-I.width<=S.left&&s.top+u.top<=S.top+I.height||s.top+u.top+I.height<=S.top)?(O.x=this.width+this.marginOffset.x,S.left+O.x>this.containerBoundingRect.width-I.width&&M&&(O.x=M.edgeOffset.left-S.left,O.y=M.edgeOffset.top-S.top),this.newIndex===null&&(this.newIndex=x)):(A||x>this.index&&(s.left+u.left+I.width>=S.left&&s.top+u.top+I.height>=S.top||s.top+u.top+I.height>=S.top+C))&&(O.x=-(this.width+this.marginOffset.x),S.left+O.x<this.containerBoundingRect.left+I.width&&P&&(O.x=P.edgeOffset.left-S.left,O.y=P.edgeOffset.top-S.top),this.newIndex=x):A||x>this.index&&s.left+u.left+I.width>=S.left?(O.x=-(this.width+this.marginOffset.x),this.newIndex=x):(W||x<this.index&&s.left+u.left<=S.left+I.width)&&(O.x=this.width+this.marginOffset.x,this.newIndex==null&&(this.newIndex=x)):this.axis.y&&(A||x>this.index&&s.top+u.top+I.height>=S.top?(O.y=-(this.height+this.marginOffset.y),this.newIndex=x):(W||x<this.index&&s.top+u.top<=S.top+I.height)&&(O.y=this.height+this.marginOffset.y,this.newIndex==null&&(this.newIndex=x))),Z(k,O),h[w].translate=O}this.newIndex==null&&(this.newIndex=this.index),v&&(this.newIndex=y);var G=v?this.prevIndex:y;a&&this.newIndex!==G&&a({collection:this.manager.active.collection,index:this.index,newIndex:this.newIndex,oldIndex:G,isKeySorting:v,nodes:h,helper:this.helper})}},{key:"getWrappedInstance",value:function(){return H(i.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"),this.wrappedInstance.current}},{key:"getContainer",value:function(){var r=this.props.getContainer;return typeof r!="function"?ue.findDOMNode(this):r(i.withRef?this.getWrappedInstance():void 0)}},{key:"render",value:function(){var r=i.withRef?this.wrappedInstance:null;return R.createElement(Ne.Provider,{value:this.sortableContextValue},R.createElement(t,he({ref:r},Ie(this.props,St))))}},{key:"helperContainer",get:function(){var r=this.props.helperContainer;return typeof r=="function"?r():this.props.helperContainer||this.document.body}},{key:"containerScrollDelta",get:function(){var r=this.props.useWindowAsScrollContainer;return r?{left:0,top:0}:{left:this.scrollContainer.scrollLeft-this.initialScroll.left,top:this.scrollContainer.scrollTop-this.initialScroll.top}}},{key:"windowScrollDelta",get:function(){return{left:this.contentWindow.pageXOffset-this.initialWindowScroll.left,top:this.contentWindow.pageYOffset-this.initialWindowScroll.top}}}]),c}(R.Component),b(n,"displayName",fe("sortableList",t)),b(n,"defaultProps",Ct),b(n,"propTypes",Ee),o}var Re={index:f.number.isRequired,collection:f.oneOfType([f.number,f.string]),disabled:f.bool},kt=Object.keys(Re);function Et(t){var n,o,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{withRef:!1};return o=n=function(d){se(c,d);function c(){var r,e;q(this,c);for(var m=arguments.length,a=new Array(m),l=0;l<m;l++)a[l]=arguments[l];return e=ce(this,(r=de(c)).call.apply(r,[this].concat(a))),b(g(g(e)),"wrappedInstance",R.createRef()),e}return U(c,[{key:"componentDidMount",value:function(){this.register()}},{key:"componentDidUpdate",value:function(r){this.node&&(r.index!==this.props.index&&(this.node.sortableInfo.index=this.props.index),r.disabled!==this.props.disabled&&(this.node.sortableInfo.disabled=this.props.disabled)),r.collection!==this.props.collection&&(this.unregister(r.collection),this.register())}},{key:"componentWillUnmount",value:function(){this.unregister()}},{key:"register",value:function(){var r=this.props,e=r.collection,m=r.disabled,a=r.index,l=ue.findDOMNode(this);l.sortableInfo={collection:e,disabled:m,index:a,manager:this.context.manager},this.node=l,this.ref={node:l},this.context.manager.add(e,this.ref)}},{key:"unregister",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props.collection;this.context.manager.remove(r,this.ref)}},{key:"getWrappedInstance",value:function(){return H(i.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"),this.wrappedInstance.current}},{key:"render",value:function(){var r=i.withRef?this.wrappedInstance:null;return R.createElement(t,he({ref:r},Ie(this.props,kt)))}}]),c}(R.Component),b(n,"displayName",fe("sortableElement",t)),b(n,"contextType",Ne),b(n,"propTypes",Re),b(n,"defaultProps",{collection:0}),o}const Dt=D.span`
  &:hover {
    cursor: pointer;
  }

  color: #4965f2;
`,Ae=D.div`
  width: 100%;
  display: flex;
  align-items: center;
`,Nt=D.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 8px;
`,Rt=D.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 8px;
`,le=D(je)`
  .ant-select .ant-select-selector .ant-select-selection-item {
    padding-right: 20px;
  }
`,we=D.label`
  ${Ge};
  user-select: text;
  margin-right: 8px;
  max-width: 100px;
  white-space: nowrap;
`,be=D.div`
  display: inline-block;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
`,At=D.div`
  display: flex;
  width: 100%;
  align-items: center;
`,j=D(_e)`
  margin: 0;
  line-height: 13px;
  width: 100%;

  .ant-form-item-explain {
    font-size: 12px;
  }

  .ant-form-item-control-input {
    min-height: auto;
  }
`,Mt=D.div`
  font-size: 13px;
  color: #b8b9bf;
  text-align: center;
  line-height: 13px;
  height: 276px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Pt=D.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  width: 100%;
  height: 36px;
  background: #f5f5f6;
  font-weight: 500;
  font-size: 13px;
  color: #222222;
  line-height: 13px;
`,Wt=D.div`
  overflow: auto;
  height: 263px;

  &::-webkit-scrollbar {
    width: 14px;
  }

  &::-webkit-scrollbar-thumb {
    border: 4px solid transparent;
    background-clip: content-box;
    border-radius: 9999px;
    background-color: rgba(139, 143, 163, 0.12);
  }
`,Ft=D.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 43px;
  z-index: 2000;
  vertical-align: middle;
  border-bottom: 1px solid #f0f0f0;
  background: ${t=>t.disabled?"#FAFAFA":"#ffffff"};

  font-size: 13px;
  color: ${t=>t.disabled?"#B8B9BF":"#333333"};
  line-height: 13px;
`,Me=D.div`
  width: 176px;
  padding-left: ${t=>t.$head?"16px":"10px"};
`,Pe=D.div`
  width: 128px;
  padding-left: 16px;
`,We=D.div`
  width: 104px;
  padding-left: ${t=>t.$head?"16px":"10px"};
`,Fe=D.div`
  width: 126px;
  padding-left: 16px;
`,Le=D.div`
  /* width: 52px; */
  padding-left: 16px;
`,Lt=D(Xe)`
  cursor: grab;
  width: 16px;
  height: 16px;
`,Ce=D.div`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`,Bt=D.div`
  .taco-edit-text-wrapper {
    width: 94px;
    height: 24px;
    padding: 0 6px;
    margin: 0;
    border-radius: 4px;

    font-size: 13px;
    color: ${t=>t.disabled?"#B8B9BF":"#333333"};
    line-height: 13px;

    &:hover {
      background-color: #f5f5f6;
    }
  }

  .taco-edit-text-body {
    height: auto;
  }

  .taco-edit-text-icon {
    margin: 0;
  }

  .taco-edit-text-input {
    width: 94px;
    height: 24px;
    padding: 0 6px;
    margin: 0;
    border-radius: 4px;

    font-size: 13px;
    color: #333333;
    line-height: 13px;
    background-color: #ffffff;
    border: 1px solid #315efb;

    &:focus {
      border-color: #315efb;
      box-shadow: 0 0 0 2px #d6e4ff;
    }
  }
`,Ht=D(j)`
  .ant-select {
    font-size: 13px;
    color: #333333;
    line-height: 13px;

    &:hover {
      color: #315efb;
    }
  }
`,Kt=D(Se)`
  .ant-checkbox-checked {
    .ant-checkbox-inner::after {
      border: 2px solid ${t=>t.disabled?"#B8B9BF":"#4965f2"};
      border-top: 0;
      border-left: 0;
    }
  }
`;function $t(t,n){const o=t.getCompSelection(n);if(!o){ge.error(E("formComp.compSelectionError"),t.type,n);return}const i=[];if(o.comps.forEach(c=>{var r;const e=(r=rt[c.type])==null?void 0:r.name;if(!e){ge.error(E("formComp.compTypeNameError"),c.type,n);return}i.push({comp:c,compTypeName:e})}),i.length===0)return;let d=o.defaultCompType;return i.find(({comp:c})=>c.type===d)||(d=i[0].comp.type),{compItems:i,defaultCompType:d}}function jt(t,n){var o;const i=[],d={};return(o=n==null?void 0:n.columns)==null||o.forEach(({name:c,type:r,isAutogenerated:e})=>{if(t&&c&&r){const m=$t(t,r);m&&(i.push({columnName:c,columnType:r,compItems:m.compItems}),d[c]={enabled:!e,label:c.split("_").map(et.upperFirst).join(" "),compType:m.defaultCompType,required:!0})}}),{initItems:i,initColumns:d}}function Gt(t,n,o,i,d){if(!t.dataSourceId||!n){d(E("formComp.noDataSourceSelected"));return}if(!t.tableName){d(E("formComp.noTableSelected"));return}if(!t.columns||Object.keys(t.columns).length===0){d(E("formComp.noColumn"));return}const c=[];if(o.map(({columnName:r,columnType:e,compItems:m})=>{var a;const l=(a=t.columns)==null?void 0:a[r];if(l&&l.enabled){const u=m.find(({comp:h})=>h.type===l.compType);u&&c.push({type:e,name:r,comp:u.comp,label:l.label,required:!!l.required})}}),c.length===0){d(E("formComp.noColumnSelected"));return}return i({dataSourceId:t.dataSourceId,dataSourceTypeConfig:n,tableName:t.tableName,columns:c}).then(r=>d(r))}function _t(t,n,o,i){t.validateFields().then(d=>Gt(d,n,o,i,c=>{c?ee.error(c):ee.success(E("formComp.success"))})).catch(d=>{ee.error(JSON.stringify(d))})}const Xt=t=>p(Bt,{disabled:t.disabled,children:p(tt,{text:t.value??"",onChange:n=>{var o;n&&((o=t.onChange)==null||o.call(t,n))},onFinish:()=>{},disabled:t.disabled})}),Vt=vt(()=>p(Lt,{})),zt=Et(t=>{const{item:n,form:o}=t,{columnName:i,columnType:d,compItems:c}=n,r=!V.useWatch(["columns",i,"enabled"],o);return F(Ft,{disabled:r,children:[p(Me,{children:F(Ae,{children:[p(Vt,{}),p(j,{name:["columns",i,"enabled"],valuePropName:"checked",style:{width:"auto",marginLeft:"4px",marginRight:"8px"},children:p(Se,{})}),p(Ce,{title:i,children:i})]})}),p(Pe,{children:p(Ce,{title:d,children:d})}),p(We,{children:p(j,{name:["columns",i,"label"],children:p(Xt,{disabled:r})})}),p(Fe,{children:p(Ht,{name:["columns",i,"compType"],children:p(le,{placeholder:E("formComp.selectCompType"),border:!0,disabled:r,children:c.map(({comp:e,compTypeName:m})=>p(ie.Option,{value:e.type,children:m},e.type))})})}),p(Le,{children:p(j,{name:["columns",i,"required"],valuePropName:"checked",children:p(Kt,{disabled:r})})})]})}),Ut=Ot(t=>p(Wt,{children:t.items.map((n,o)=>p(zt,{index:o,item:n,form:t.form},n.columnName))}));function qt(t,n,o){return t===0?E("formComp.noDataSourceFound"):n===0?E("formComp.noTableFound"):o===0?E("formComp.noColumnFound"):""}function Yt(){const t=ae(nt),n=ae(ot),o={};t==null||t.forEach(({id:d})=>{const c=it(d);c&&(o[d]=c)});const i=[];return n==null||n.forEach(({datasource:d})=>{const c=o[d.type];c&&i.push({dataSource:d,typeConfig:c})}),i}function Qt(t){const n=ae(o=>o.entities.datasource.structure);return t&&n?(n[t]??[]).filter(o=>o.type==="TABLE"):[]}const Zt=t=>{const[n]=V.useForm(),o=V.useWatch("dataSourceId",n),i=Yt(),d=i.find(s=>s.dataSource.id===o);R.useEffect(()=>{if(!d){const s=i.length>0?i[0].dataSource.id:void 0;n.setFieldsValue({dataSourceId:s})}},[i]);const c=ze();R.useEffect(()=>{o&&c(Ue({datasourceId:o}))},[o]);const r=V.useWatch("tableName",n),e=Qt(o),m=e.find(s=>s.name===r);R.useEffect(()=>{if(!m){const s=e.length>0?e[0].name:void 0;n.setFieldsValue({tableName:s})}},[e]);const[a,l]=R.useState([]),u=d==null?void 0:d.typeConfig;R.useEffect(()=>{const{initItems:s,initColumns:v}=jt(u,m);n.setFieldsValue({columns:v}),l(s)},[u,m]);const h=qt(i.length,e.length,a.length);return p(re,{children:F(V,{form:n,preserve:!1,children:[F(Ae,{children:[F(Nt,{children:[p(we,{children:E("formComp.dataSource")}),p(j,{name:"dataSourceId",children:p(le,{style:{width:"208px"},placeholder:E("formComp.selectSource"),children:i.map(({dataSource:s})=>p(ie.Option,{value:s.id,children:F(At,{children:[s.type&&p(qe,{dataSourceType:s.type}),p(be,{title:s.name,children:s.name})]})},s.id))})})]}),F(Rt,{children:[p(we,{children:E("formComp.table")}),p(j,{name:"tableName",children:p(le,{style:{width:"208px"},placeholder:E("formComp.selectTable"),showSearch:!0,children:e.map(s=>p(ie.Option,{value:s.name,children:p(be,{title:s.name,children:s.name+" ("+s.columns.length+")"})},s.name))})})]})]}),h?p(Mt,{children:h}):F(re,{children:[F(Pt,{children:[p(Me,{$head:!0,children:E("formComp.columnName")}),p(Pe,{$head:!0,children:E("formComp.dataType")}),p(We,{$head:!0,children:E("label")}),p(Fe,{$head:!0,children:E("formComp.compType")}),p(Le,{$head:!0,children:E("formComp.required")})]}),p(Ut,{items:a,form:n,useDragHandle:!0,onSortEnd:({oldIndex:s,newIndex:v})=>{s!==v&&l(dt(a,s,v))}}),p(Ye,{children:p(Qe,{buttonType:"primary",loading:!1,onClick:()=>_t(n,u,a,t.onCreate),children:E("formComp.generateForm")})})]})]})})},sn=t=>{const[n,o]=R.useState(!1);return F(re,{children:[p(Dt,{onMouseDown:i=>{o(!0),i.stopPropagation()},children:E("formComp.openDialogButton")}),p("div",{onKeyDown:i=>i.stopPropagation(),onMouseDown:i=>i.stopPropagation(),onClick:i=>i.stopPropagation(),children:p(Ve,{open:n,destroyOnClose:!0,title:E("formComp.generateForm"),footer:null,onCancel:()=>o(!1),width:"600px",children:p(Zt,{...t}),styles:{body:{padding:0}}})})]})};export{sn as CreateForm};
