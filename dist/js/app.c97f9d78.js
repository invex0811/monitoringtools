(function(e){function t(t){for(var r,a,u=t[0],i=t[1],l=t[2],s=0,d=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0fd68bf4":"e25c3b59","chunk-15f959e2":"04ce73bf","chunk-298fee74":"8ee0bb4e","chunk-8d3e9f70":"96c29b05"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-15f959e2":1,"chunk-298fee74":1,"chunk-8d3e9f70":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0fd68bf4":"31d6cfe0","chunk-15f959e2":"4e22fff1","chunk-298fee74":"df8d7589","chunk-8d3e9f70":"1ccd7d94"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var l=c[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/salary/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"12e6":function(e,t,n){},"17f7":function(e,t,n){"use strict";n("d84c")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,o,c){var u=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["e"])(Object(r["y"])(c.layout),null,{default:Object(r["F"])((function(){return[Object(r["h"])(u)]})),_:1})}var o=Object(r["H"])("data-v-2a11481e"),c=o((function(e,t,n,a,o,c){var u=Object(r["x"])("Navbar"),i=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(u),Object(r["h"])(i)],64)})),u=Object(r["H"])("data-v-1a237186");Object(r["t"])("data-v-1a237186");var i={class:"navbar"},l=Object(r["h"])("h1",null,"Monitoring tools",-1);Object(r["r"])();var s=u((function(e,t,n,a,o,c){var s=Object(r["x"])("router-link");return Object(r["q"])(),Object(r["e"])("nav",i,[Object(r["h"])(s,{tag:"a",to:e.url},{default:u((function(){return[l]})),_:1},8,["to"])])})),d={name:"Navbar",data:function(){return{url:"/"}}};n("72e8");d.render=s,d.__scopeId="data-v-1a237186";var f=d,b={name:"LayoutWithNavbar",components:{Navbar:f}};b.render=c,b.__scopeId="data-v-2a11481e";var v=b;function h(e,t,n,a,o,c){var u=Object(r["x"])("Navbar"),i=Object(r["x"])("Sidebar"),l=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(u),Object(r["h"])(i),Object(r["h"])(l)],64)}var p=Object(r["H"])("data-v-4941af56");Object(r["t"])("data-v-4941af56");var O={class:"sidebar"},j={class:"link-wrap"};Object(r["r"])();var m=p((function(e,t,n,a,o,c){var u=Object(r["x"])("router-link");return Object(r["q"])(),Object(r["e"])("div",O,[Object(r["h"])("div",j,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(e.links,(function(e){return Object(r["q"])(),Object(r["e"])(u,{class:"link",key:e.url,"active-class":"active",to:e.url,exact:e.exact},{default:p((function(){return[Object(r["h"])("i",{class:e.img},null,2)]})),_:2},1032,["to","exact"])})),128))])])})),g={name:"Sidebar",data:function(){return{links:[{img:"fi-rr-dollar",url:"/salary"},{img:"fi-rr-dashboard",url:"/overSpeed"},{img:"fi-rr-time-forward-ten",url:"/convertingTime"}]}}};n("67d7");g.render=m,g.__scopeId="data-v-4941af56";var y=g,k={name:"MainLayout",components:{Sidebar:y,Navbar:f}};k.render=h;var w=k,x={components:{LayoutWithNavbar:v,MainLayout:w},computed:{layout:function(){return this.$route.meta.layout||"LayoutWithNavbar"}}};n("94cf");x.render=a;var _=x,L=n("9483");Object(L["a"])("".concat("/salary/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var S=n("6c02"),N=Object(r["H"])("data-v-3ae4c4ba");Object(r["t"])("data-v-3ae4c4ba");var q={class:"home"},C=Object(r["h"])("h2",null,"Choose a tools",-1);Object(r["r"])();var T=N((function(e,t,n,a,o,c){var u=Object(r["x"])("Link"),i=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["h"])("div",q,[C,Object(r["h"])(u)]),Object(r["h"])(i)],64)})),A=Object(r["H"])("data-v-35755271");Object(r["t"])("data-v-35755271");var E={class:"all-wrap"},M={class:"link-wrap"},P={href:"#",class:"link-tool"};Object(r["r"])();var H=A((function(e,t,n,a,o,c){var u=Object(r["x"])("router-link");return Object(r["q"])(),Object(r["e"])("div",E,[Object(r["h"])("div",M,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(e.links,(function(e){return Object(r["q"])(),Object(r["e"])(u,{class:"link",key:e.url,"active-class":"active",to:e.url,exact:e.exact},{default:A((function(){return[Object(r["h"])("i",{class:e.img},null,2),Object(r["h"])("a",P,Object(r["A"])(e.title),1)]})),_:2},1032,["to","exact"])})),128))])])})),I={name:"Link",data:function(){return{links:[{img:"fi-rr-dollar",title:"Salary",url:"/salary"},{img:"fi-rr-dashboard",title:"Over speed",url:"/overSpeed"},{img:"fi-rr-time-forward-ten",title:"Converting time",url:"/convertingTime"}]}}};n("d05b");I.render=H,I.__scopeId="data-v-35755271";var W=I,B={name:"Home",components:{Link:W}};n("17f7");B.render=T,B.__scopeId="data-v-3ae4c4ba";var F=B,D=[{path:"/",name:"Home",meta:{layout:"LayoutWithNavbar"},component:F},{path:"/salary",name:"Salary",meta:{layout:"MainLayout"},component:function(){return n.e("chunk-8d3e9f70").then(n.bind(null,"19a4"))}},{path:"/overSpeed",name:"OverSpeed",meta:{layout:"MainLayout"},component:function(){return n.e("chunk-298fee74").then(n.bind(null,"0d77"))}},{path:"/speedList",name:"SpeedList",meta:{layout:"LayoutWithNavbar"},component:function(){return n.e("chunk-0fd68bf4").then(n.bind(null,"68ee"))}},{path:"/convertingTime",name:"ConvertingTime",meta:{layout:"MainLayout"},component:function(){return n.e("chunk-15f959e2").then(n.bind(null,"d953"))}}],J=Object(S["a"])({history:Object(S["b"])("/salary/"),routes:D}),K=J;Object(r["d"])(_).use(K).mount("#app")},"594a":function(e,t,n){},"67d7":function(e,t,n){"use strict";n("aa30")},"72e8":function(e,t,n){"use strict";n("12e6")},"94cf":function(e,t,n){"use strict";n("ebee")},aa30:function(e,t,n){},d05b:function(e,t,n){"use strict";n("594a")},d84c:function(e,t,n){},ebee:function(e,t,n){}});
//# sourceMappingURL=app.c97f9d78.js.map