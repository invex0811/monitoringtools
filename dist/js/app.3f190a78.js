(function(e){function t(t){for(var r,a,i=t[0],u=t[1],l=t[2],s=0,f=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-15f959e2":"c754ce9f","chunk-2e2e4fb9":"05d1344a","chunk-8d65acd4":"8f1e6629","chunk-a80c3e54":"c6b54a0d"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-15f959e2":1,"chunk-2e2e4fb9":1,"chunk-8d65acd4":1,"chunk-a80c3e54":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-15f959e2":"4e22fff1","chunk-2e2e4fb9":"763b9977","chunk-8d65acd4":"11b3ff95","chunk-a80c3e54":"b8e6f6e5"}[e]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/salary/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"12e6":function(e,t,n){},"17f7":function(e,t,n){"use strict";n("d84c")},"45f4":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,o,c){var i=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])(Object(r["z"])(c.layout),null,{default:Object(r["G"])((function(){return[Object(r["i"])(i)]})),_:1})}var o=Object(r["I"])("data-v-2a11481e"),c=o((function(e,t,n,a,o,c){var i=Object(r["y"])("Navbar"),u=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(i),Object(r["i"])(u)],64)})),i=Object(r["I"])("data-v-1a237186");Object(r["u"])("data-v-1a237186");var u={class:"navbar"},l=Object(r["i"])("h1",null,"Monitoring tools",-1);Object(r["s"])();var s=i((function(e,t,n,a,o,c){var s=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("nav",u,[Object(r["i"])(s,{tag:"a",to:e.url},{default:i((function(){return[l]})),_:1},8,["to"])])})),f={name:"Navbar",data:function(){return{url:"/"}}};n("72e8");f.render=s,f.__scopeId="data-v-1a237186";var d=f,b={name:"LayoutWithNavbar",components:{Navbar:d}};b.render=c,b.__scopeId="data-v-2a11481e";var v=b;function p(e,t,n,a,o,c){var i=Object(r["y"])("Navbar"),u=Object(r["y"])("Sidebar"),l=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(i),Object(r["i"])(u),Object(r["i"])(l)],64)}var O=Object(r["I"])("data-v-4941af56");Object(r["u"])("data-v-4941af56");var h={class:"sidebar"},j={class:"link-wrap"};Object(r["s"])();var m=O((function(e,t,n,a,o,c){var i=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",h,[Object(r["i"])("div",j,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(e.links,(function(e){return Object(r["r"])(),Object(r["f"])(i,{class:"link",key:e.url,"active-class":"active",to:e.url,exact:e.exact},{default:O((function(){return[Object(r["i"])("i",{class:e.img},null,2)]})),_:2},1032,["to","exact"])})),128))])])})),y={name:"Sidebar",data:function(){return{links:[{img:"fi-rr-dollar",url:"/salary"},{img:"fi-rr-dashboard",url:"/overSpeed"},{img:"fi-rr-time-forward-ten",url:"/convertingTime"}]}}};n("67d7");y.render=m,y.__scopeId="data-v-4941af56";var g=y,k={name:"MainLayout",components:{Sidebar:g,Navbar:d}};k.render=p;var w=k,_={components:{LayoutWithNavbar:v,MainLayout:w},computed:{layout:function(){return this.$route.meta.layout||"LayoutWithNavbar"}}};n("bb83");_.render=a;var L=_,S=n("9483");Object(S["a"])("".concat("/salary/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var N=n("6c02"),x=Object(r["I"])("data-v-3ae4c4ba");Object(r["u"])("data-v-3ae4c4ba");var C={class:"home"},I=Object(r["i"])("h2",null,"Choose a tools",-1);Object(r["s"])();var T=x((function(e,t,n,a,o,c){var i=Object(r["y"])("Link"),u=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["i"])("div",C,[I,Object(r["i"])(i)]),Object(r["i"])(u)],64)})),E=Object(r["I"])("data-v-35755271");Object(r["u"])("data-v-35755271");var M={class:"all-wrap"},P={class:"link-wrap"},A={href:"#",class:"link-tool"};Object(r["s"])();var B=E((function(e,t,n,a,o,c){var i=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",M,[Object(r["i"])("div",P,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(e.links,(function(e){return Object(r["r"])(),Object(r["f"])(i,{class:"link",key:e.url,"active-class":"active",to:e.url,exact:e.exact},{default:E((function(){return[Object(r["i"])("i",{class:e.img},null,2),Object(r["i"])("a",A,Object(r["B"])(e.title),1)]})),_:2},1032,["to","exact"])})),128))])])})),W={name:"Link",data:function(){return{links:[{img:"fi-rr-dollar",title:"Salary",url:"/salary"},{img:"fi-rr-dashboard",title:"Over speed",url:"/overSpeed"},{img:"fi-rr-time-forward-ten",title:"Converting time",url:"/convertingTime"}]}}};n("d05b");W.render=B,W.__scopeId="data-v-35755271";var q=W,F={name:"Home",components:{Link:q}};n("17f7");F.render=T,F.__scopeId="data-v-3ae4c4ba";var H=F,D=[{path:"/",name:"Home",meta:{layout:"LayoutWithNavbar"},component:H},{path:"/salary",name:"Salary",meta:{layout:"MainLayout"},component:function(){return n.e("chunk-a80c3e54").then(n.bind(null,"19a4"))}},{path:"/overSpeed",name:"OverSpeed",meta:{layout:"MainLayout"},component:function(){return n.e("chunk-8d65acd4").then(n.bind(null,"0d77"))}},{path:"/speedList",name:"SpeedList",meta:{layout:"LayoutWithNavbar"},component:function(){return n.e("chunk-2e2e4fb9").then(n.bind(null,"68ee"))}},{path:"/convertingTime",name:"ConvertingTime",meta:{layout:"MainLayout"},component:function(){return n.e("chunk-15f959e2").then(n.bind(null,"d953"))}}],J=Object(N["a"])({history:Object(N["b"])("/salary/"),routes:D}),z=J;Object(r["e"])(L).use(z).mount("#app")},"594a":function(e,t,n){},"67d7":function(e,t,n){"use strict";n("aa30")},"72e8":function(e,t,n){"use strict";n("12e6")},aa30:function(e,t,n){},bb83:function(e,t,n){"use strict";n("45f4")},d05b:function(e,t,n){"use strict";n("594a")},d84c:function(e,t,n){}});
//# sourceMappingURL=app.3f190a78.js.map