(function(){"use strict";var t={1492:function(t,n,e){var r=e(9242),i=e(3396),o=e(7139);const u=(0,i._)("h1",null,"这是一个互动视频的测试",-1),a=(0,i._)("h3",null,"视频路径",-1),l=["onClick"];function s(t,n,e,r,s,c){const p=(0,i.up)("MySpace"),f=(0,i.up)("MyTest");return(0,i.wg)(),(0,i.j4)(p,{vertical:"",gap:"0"},{default:(0,i.w5)((()=>[u,(0,i.Wm)(p,{justify:"space-between",style:{width:"600px"}},{default:(0,i.w5)((()=>[(0,i._)("h3",null,"视频编号 "+(0,o.zw)(s.num),1),(0,i.Wm)(p,null,{default:(0,i.w5)((()=>[a,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.path,((t,n)=>((0,i.wg)(),(0,i.iD)("h3",{key:n},(0,o.zw)(t),1)))),128))])),_:1})])),_:1}),(0,i.Wm)(f,{src:s.videos[s.num].src,p:s.videos[s.num].p},null,8,["src","p"]),(0,i._)("h3",null,(0,o.zw)(s.videos[s.num].desc?s.videos[s.num].desc:"你的选择是"),1),(0,i.Wm)(p,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.videos[s.num].options,((t,n)=>((0,i.wg)(),(0,i.iD)("button",{key:n,onClick:n=>(s.num=t.jump,c.append(t.jump))},(0,o.zw)(t.text),9,l)))),128))])),_:1})])),_:1})}const c=["src"];function p(t,n,e,r,o,u){return(0,i.wg)(),(0,i.iD)("iframe",{class:"ne-thirdparty-iframe","data-testid":"ne-thirdparty-reader-iframe",sandbox:"allow-forms allow-orientation-lock allow-presentation allow-same-origin allow-scripts allow-popups allow-downloads",src:"https://player.bilibili.com/player.html?bvid="+e.src+"&p="+e.p,frameborder:"0",allowfullscreen:""},null,8,c)}var f={props:["src","p"]},d=e(89);const v=(0,d.Z)(f,[["render",p],["__scopeId","data-v-b01df868"]]);var h=v;function m(t,n,e,r,u,a){return(0,i.wg)(),(0,i.iD)("div",{style:(0,o.j5)({display:"flex",justifyContent:e.justify,alignItems:e.align,flexDirection:e.vertical?"column":"row",gap:e.gap})},[(0,i.WI)(t.$slots,"default")],4)}var w={props:{vertical:{type:Boolean,default:!1},align:{type:String,default:"center"},justify:{type:String,default:"center"},gap:{type:String,default:"20px"}}};const y=(0,d.Z)(w,[["render",m]]);var g=y,b={name:"App",components:{MyTest:h,MySpace:g},data(){return{num:0,path:[0],videos:[{src:"BV1kv411P7Sz",desc:"你愿意成为伥鬼吗",options:[{text:"我就是伥鬼本鬼",jump:1},{text:"什么是伥鬼",jump:2}]},{src:"BV15A411c7nc",p:11,desc:"结局一",options:[{text:"回到开始",jump:0}]},{src:"BV1ha411672q",options:[{text:"去看看伥鬼现场",jump:1}]}]}},methods:{append(t){if(this.path.indexOf(t)>=0){let n=this.path.indexOf(t);this.path.splice(n+1,this.path.length-n-1)}else this.path.push(t)}}};const j=(0,d.Z)(b,[["render",s]]);var x=j;(0,r.ri)(x).mount("#app")}},n={};function e(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={exports:{}};return t[r](o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,r,i,o){if(!r){var u=1/0;for(c=0;c<t.length;c++){r=t[c][0],i=t[c][1],o=t[c][2];for(var a=!0,l=0;l<r.length;l++)(!1&o||u>=o)&&Object.keys(e.O).every((function(t){return e.O[t](r[l])}))?r.splice(l--,1):(a=!1,o<u&&(u=o));if(a){t.splice(c--,1);var s=i();void 0!==s&&(n=s)}}return n}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[r,i,o]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var i,o,u=r[0],a=r[1],l=r[2],s=0;if(u.some((function(n){return 0!==t[n]}))){for(i in a)e.o(a,i)&&(e.m[i]=a[i]);if(l)var c=l(e)}for(n&&n(r);s<u.length;s++)o=u[s],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(c)},r=self["webpackChunkinteractive_video"]=self["webpackChunkinteractive_video"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(1492)}));r=e.O(r)})();
//# sourceMappingURL=app.898f93ab.js.map