import{M as j,b as A}from"./index-CyMr76_m.js";import{u as U,p as I}from"./5150925b-DzPoEFNW.js";import"./a0eec2c1-BtlwKA-A.js";import"./209c69f0-Co7_eCID.js";function M(a,t){for(var e=0;e<t.length;e++){const o=t[e];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in a)){const n=Object.getOwnPropertyDescriptor(o,r);n&&Object.defineProperty(a,r,n.get?n:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var V=Object.create,c=Object.defineProperty,L=Object.getOwnPropertyDescriptor,N=Object.getOwnPropertyNames,B=Object.getPrototypeOf,Y=Object.prototype.hasOwnProperty,z=(a,t,e)=>t in a?c(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,F=(a,t)=>{for(var e in t)c(a,e,{get:t[e],enumerable:!0})},v=(a,t,e,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of N(t))!Y.call(a,r)&&r!==e&&c(a,r,{get:()=>t[r],enumerable:!(o=L(t,r))||o.enumerable});return a},x=(a,t,e)=>(e=a!=null?V(B(a)):{},v(!a||!a.__esModule?c(e,"default",{value:a,enumerable:!0}):e,a)),G=a=>v(c({},"__esModule",{value:!0}),a),s=(a,t,e)=>(z(a,typeof t!="symbol"?t+"":t,e),e),D={};F(D,{default:()=>T});var E=G(D),b=x(j),p=U,_=I;const Q="https://www.youtube.com/iframe_api",O="YT",Z="onYouTubeIframeAPIReady",f=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,w=/user\/([a-zA-Z0-9_-]+)\/?/,H=/youtube-nocookie\.com/,K="https://www.youtube-nocookie.com";class T extends b.Component{constructor(){super(...arguments),s(this,"callPlayer",p.callPlayer),s(this,"parsePlaylist",t=>{if(t instanceof Array)return{listType:"playlist",playlist:t.map(this.getID).join(",")};if(f.test(t)){const[,e]=t.match(f);return{listType:"playlist",list:e.replace(/^UC/,"UU")}}if(w.test(t)){const[,e]=t.match(w);return{listType:"user_uploads",list:e}}return{}}),s(this,"onStateChange",t=>{const{data:e}=t,{onPlay:o,onPause:r,onBuffer:n,onBufferEnd:P,onEnded:m,onReady:g,loop:u,config:{playerVars:i,onUnstarted:h}}=this.props,{UNSTARTED:d,PLAYING:y,PAUSED:l,BUFFERING:k,ENDED:S,CUED:C}=window[O].PlayerState;if(e===d&&h(),e===y&&(o(),P()),e===l&&r(),e===k&&n(),e===S){const R=!!this.callPlayer("getPlaylist");u&&!R&&(i.start?this.seekTo(i.start):this.play()),m()}e===C&&g()}),s(this,"mute",()=>{this.callPlayer("mute")}),s(this,"unmute",()=>{this.callPlayer("unMute")}),s(this,"ref",t=>{this.container=t})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(t){return!t||t instanceof Array||f.test(t)?null:t.match(_.MATCH_URL_YOUTUBE)[1]}load(t,e){const{playing:o,muted:r,playsinline:n,controls:P,loop:m,config:g,onError:u}=this.props,{playerVars:i,embedOptions:h}=g,d=this.getID(t);if(e){if(f.test(t)||w.test(t)||t instanceof Array){this.player.loadPlaylist(this.parsePlaylist(t));return}this.player.cueVideoById({videoId:d,startSeconds:(0,p.parseStartTime)(t)||i.start,endSeconds:(0,p.parseEndTime)(t)||i.end});return}(0,p.getSDK)(Q,O,Z,y=>y.loaded).then(y=>{this.container&&(this.player=new y.Player(this.container,{width:"100%",height:"100%",videoId:d,playerVars:{autoplay:o?1:0,mute:r?1:0,controls:P?1:0,start:(0,p.parseStartTime)(t),end:(0,p.parseEndTime)(t),origin:window.location.origin,playsinline:n?1:0,...this.parsePlaylist(t),...i},events:{onReady:()=>{m&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:l=>this.props.onPlaybackRateChange(l.data),onPlaybackQualityChange:l=>this.props.onPlaybackQualityChange(l),onStateChange:this.onStateChange,onError:l=>u(l.data)},host:H.test(t)?K:void 0,...h}))},u),h.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(t,e=!1){this.callPlayer("seekTo",t),!e&&!this.props.playing&&this.pause()}setVolume(t){this.callPlayer("setVolume",t*100)}setPlaybackRate(t){this.callPlayer("setPlaybackRate",t)}setLoop(t){this.callPlayer("setLoop",t)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){const{display:t}=this.props,e={width:"100%",height:"100%",display:t};return b.default.createElement("div",{style:e},b.default.createElement("div",{ref:this.ref}))}}s(T,"displayName","YouTube");s(T,"canPlay",_.canPlay.youtube);const $=A(E),tt=M({__proto__:null,default:$},[E]);export{tt as Y};
