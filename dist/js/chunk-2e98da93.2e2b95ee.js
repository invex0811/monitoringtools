(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e98da93","chunk-2e2e4fb9"],{"0d77":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a=Object(n["I"])("data-v-4e81f23a");Object(n["u"])("data-v-4e81f23a");var i={class:"over-speed"},s=Object(n["i"])("h2",null,"Over speed",-1),c={class:"time"},o=Object(n["i"])("b",{style:{"font-size":"30px"}},":",-1),u={class:"mile"},l={class:"speed"},p={class:"speedList"},d=Object(n["i"])("span",{class:"span-speed-list"},[Object(n["h"])("Speed "),Object(n["i"])("br"),Object(n["h"])(" list")],-1);Object(n["s"])();var b=a((function(e,t,r,a,b,f){var h=Object(n["y"])("SpeedList"),m=Object(n["y"])("router-view");return Object(n["r"])(),Object(n["f"])(n["a"],null,[Object(n["i"])("div",i,[s,Object(n["i"])("div",c,[Object(n["H"])(Object(n["i"])("input",{type:"number","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.timeHours=t}),placeholder:"Hours"},null,512),[[n["E"],e.timeHours,void 0,{number:!0}]]),o,Object(n["H"])(Object(n["i"])("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.timeMinutes=t}),placeholder:"Minutes"},null,512),[[n["E"],e.timeMinutes,void 0,{number:!0}]])]),Object(n["i"])("div",u,[Object(n["H"])(Object(n["i"])("input",{type:"number",id:"mile","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.miles=t}),placeholder:"Miles"},null,512),[[n["E"],e.miles,void 0,{number:!0}]])]),Object(n["i"])("button",{onClick:t[4]||(t[4]=function(){return f.calcSpeed&&f.calcSpeed.apply(f,arguments)})}," OK "),Object(n["i"])("div",l,[e.timeHours>0?(Object(n["r"])(),Object(n["f"])("span",{key:0,class:{redSpeed:e.overSpeed>95}},Object(n["B"])("Speed: "+e.speed),3)):Object(n["g"])("",!0)])]),Object(n["i"])("div",p,[Object(n["i"])("i",{class:"fi-rr-document ",onClick:t[5]||(t[5]=function(){return f.showModal&&f.showModal.apply(f,arguments)}),v:""}),d]),Object(n["i"])(h,{ref:"modal"},null,512),Object(n["i"])(m)],64)})),f=(r("a9e3"),r("b680"),r("68ee")),h={name:"OverSpeed",components:{SpeedList:f["default"]},data:function(){return{timeHours:"",timeMinutes:"",miles:"",totalTime:"",overSpeed:""}},methods:{calcSpeed:function(){this.totalTime=this.timeHours+this.timeMinutes/60,this.speed=this.miles/this.totalTime,this.overSpeed=Number(this.speed),this.speed=this.speed.toFixed(2)+" mph"},showModal:function(){return this.$refs.modal.show=!0}}};r("6f2a");h.render=b,h.__scopeId="data-v-4e81f23a";t["default"]=h},1148:function(e,t,r){"use strict";var n=r("a691"),a=r("1d80");e.exports=function(e){var t=String(a(this)),r="",i=n(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(r+=t);return r}},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"14c3":function(e,t,r){var n=r("c6b6"),a=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var i=r.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"1dde":function(e,t,r){var n=r("d039"),a=r("b622"),i=r("2d00"),s=a("species");e.exports=function(e){return i>=51||!n((function(){var t=[],r=t.constructor={};return r[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"408a":function(e,t,r){var n=r("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=n(e))throw TypeError("Incorrect invocation");return+e}},"4de4":function(e,t,r){"use strict";var n=r("23e7"),a=r("b727").filter,i=r("1dde"),s=i("filter");n({target:"Array",proto:!0,forced:!s},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("1d80"),a=r("5899"),i="["+a+"]",s=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),o=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(s,"")),2&e&&(r=r.replace(c,"")),r}};e.exports={start:o(1),end:o(2),trim:o(3)}},"65f0":function(e,t,r){var n=r("861d"),a=r("e8b5"),i=r("b622"),s=i("species");e.exports=function(e,t){var r;return a(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?n(r)&&(r=r[s],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},"68ee":function(e,t,r){"use strict";r.r(t);r("ac1f"),r("841c");var n=r("7a23"),a=Object(n["I"])("data-v-054a74b8");Object(n["u"])("data-v-054a74b8");var i={class:"wrap-blur-modal",key:"modalWindow"},s={class:"wrap-modal"},c={class:"input-wrapper"},o={class:"speedList"},u={class:"table-wrapper"},l=Object(n["i"])("thead",null,[Object(n["i"])("th",null,"Abbreviation"),Object(n["i"])("th",null,"State"),Object(n["i"])("th",null,"Speed")],-1);Object(n["s"])();var p=a((function(e,t,r,p,d,b){var f=Object(n["y"])("router-view");return Object(n["r"])(),Object(n["f"])(n["a"],null,[Object(n["i"])(n["c"],{name:"slide-fade"},{default:a((function(){return[d.show?(Object(n["r"])(),Object(n["f"])("div",i,[Object(n["i"])("div",s,[Object(n["i"])("i",{onClick:t[1]||(t[1]=function(){return b.closeModal&&b.closeModal.apply(b,arguments)}),class:"fi-rr-cross-circle"}),Object(n["i"])("div",c,[Object(n["H"])(Object(n["i"])("input",{type:"text",class:"search-input","onUpdate:modelValue":t[2]||(t[2]=function(e){return d.search=e}),placeholder:"Input abbreviation"},null,512),[[n["E"],d.search]])]),Object(n["i"])("div",o,[Object(n["i"])("div",u,[Object(n["i"])("table",null,[l,Object(n["i"])("tbody",null,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(b.todosByTitle,(function(e){return Object(n["r"])(),Object(n["f"])("tr",{key:e.id},[Object(n["i"])("td",null,Object(n["B"])(e.abbr),1),Object(n["i"])("td",null,Object(n["B"])(e.state),1),Object(n["i"])("td",null,Object(n["B"])(e.speed),1)])})),128))])])])])])])):Object(n["g"])("",!0)]})),_:1}),Object(n["i"])(f)],64)})),d=(r("4de4"),{name:"SpeedList",data:function(){return{show:!1,search:"",arrayState:[{abbr:"AL",state:"Alabama",speed:"85mph"},{abbr:"AK",state:"Alaska",speed:"80mph"},{abbr:"AZ",state:"Arizona",speed:"90mph"},{abbr:"AR",state:"Arkansas",speed:"85mph"},{abbr:"CA",state:"California",speed:"70mph"},{abbr:"CO",state:"Colorado",speed:"90mph"},{abbr:"CT",state:"Connecticut",speed:"80mph"},{abbr:"DE",state:"Delaware",speed:"80mph"},{abbr:"FL",state:"Florida",speed:"85mph"},{abbr:"GA",state:"Georgia",speed:"85mph"},{abbr:"HI",state:"Hawaii",speed:"75mph"},{abbr:"ID",state:"Idaho",speed:"85mph"},{abbr:"IL",state:"Illinois",speed:"85mph"},{abbr:"IN",state:"Indiana",speed:"80mph"},{abbr:"IA",state:"Iowa",speed:"85mph"},{abbr:"KS",state:"Kansas",speed:"90mph"},{abbr:"KY",state:"Kentucky",speed:"85mph"},{abbr:"LA",state:"Louisiana",speed:"90mph"},{abbr:"ME",state:"Maine",speed:"90mph"},{abbr:"MD",state:"Maryland",speed:"85mph"},{abbr:"MA",state:"Massachusetts",speed:"80mph"},{abbr:"MI",state:"Michigan",speed:"80mph"},{abbr:"MN",state:"Minnesota",speed:"85mph"},{abbr:"MS",state:"Mississippi",speed:"85mph"},{abbr:"MO",state:"Missouri",speed:"85mph"},{abbr:"MT",state:"Montana",speed:"80mph"},{abbr:"NE",state:"Nebraska",speed:"90mph"},{abbr:"NV",state:"Nevada",speed:"95mph"},{abbr:"NV",state:"New Hampshire",speed:"85mph"},{abbr:"NJ",state:"New Jersey",speed:"80mph"},{abbr:"NM",state:"New Mexico",speed:"90mph"},{abbr:"NY",state:"New York",speed:"80mph"},{abbr:"NC",state:"North Carolina",speed:"85mph"},{abbr:"ND",state:"North Dakota",speed:"90mph"},{abbr:"OH",state:"Ohio",speed:"85mph"},{abbr:"OK",state:"Oklahoma",speed:"85mph"},{abbr:"OR",state:"Oregon",speed:"80mph"},{abbr:"PA",state:"Pennsylvania",speed:"85mph"},{abbr:"RI",state:"Rhode Island",speed:"80mph"},{abbr:"SC",state:"South Carolina",speed:"85mph"},{abbr:"SD",state:"South Dakota",speed:"95mph"},{abbr:"TN",state:"Tennessee",speed:"85mph"},{abbr:"TX",state:"Texas",speed:"95mph"},{abbr:"UT",state:"Utah",speed:"95mph"},{abbr:"VT",state:"Vermont",speed:"80mph"},{abbr:"VA",state:"Virginia",speed:"85mph"},{abbr:"WA",state:"Washington",speed:"75mph"},{abbr:"WV",state:"West Virginia",speed:"85mph"},{abbr:"WI",state:"Wisconsin",speed:"85mph"},{abbr:"WY",state:"Wyoming",speed:"95mph"}]}},methods:{closeModal:function(){return this.show=!1}},computed:{todosByTitle:function(){var e=this;return this.arrayState.filter((function(t){return-1!==t.abbr.indexOf(e.search.toUpperCase())}))}}});r("68f7");d.render=p,d.__scopeId="data-v-054a74b8";t["default"]=d},"68f7":function(e,t,r){"use strict";r("9652")},"6f2a":function(e,t,r){"use strict";r("f89f")},7156:function(e,t,r){var n=r("861d"),a=r("d2bb");e.exports=function(e,t,r){var i,s;return a&&"function"==typeof(i=t.constructor)&&i!==r&&n(s=i.prototype)&&s!==r.prototype&&a(e,s),e}},"841c":function(e,t,r){"use strict";var n=r("d784"),a=r("825a"),i=r("1d80"),s=r("129f"),c=r("14c3");n("search",1,(function(e,t,r){return[function(t){var r=i(this),n=void 0==t?void 0:t[e];return void 0!==n?n.call(t,r):new RegExp(t)[e](String(r))},function(e){var n=r(t,e,this);if(n.done)return n.value;var i=a(e),o=String(this),u=i.lastIndex;s(u,0)||(i.lastIndex=0);var l=c(i,o);return s(i.lastIndex,u)||(i.lastIndex=u),null===l?-1:l.index}]}))},9263:function(e,t,r){"use strict";var n=r("ad6d"),a=r("9f7f"),i=r("5692"),s=RegExp.prototype.exec,c=i("native-string-replace",String.prototype.replace),o=s,u=function(){var e=/a/,t=/b*/g;return s.call(e,"a"),s.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,p=void 0!==/()??/.exec("")[1],d=u||p||l;d&&(o=function(e){var t,r,a,i,o=this,d=l&&o.sticky,b=n.call(o),f=o.source,h=0,m=e;return d&&(b=b.replace("y",""),-1===b.indexOf("g")&&(b+="g"),m=String(e).slice(o.lastIndex),o.lastIndex>0&&(!o.multiline||o.multiline&&"\n"!==e[o.lastIndex-1])&&(f="(?: "+f+")",m=" "+m,h++),r=new RegExp("^(?:"+f+")",b)),p&&(r=new RegExp("^"+f+"$(?!\\s)",b)),u&&(t=o.lastIndex),a=s.call(d?r:o,m),d?a?(a.input=a.input.slice(h),a[0]=a[0].slice(h),a.index=o.lastIndex,o.lastIndex+=a[0].length):o.lastIndex=0:u&&a&&(o.lastIndex=o.global?a.index+a[0].length:t),p&&a&&a.length>1&&c.call(a[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(a[i]=void 0)})),a}),e.exports=o},9652:function(e,t,r){},"9f7f":function(e,t,r){"use strict";var n=r("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a9e3:function(e,t,r){"use strict";var n=r("83ab"),a=r("da84"),i=r("94ca"),s=r("6eeb"),c=r("5135"),o=r("c6b6"),u=r("7156"),l=r("c04e"),p=r("d039"),d=r("7c73"),b=r("241c").f,f=r("06cf").f,h=r("9bf2").f,m=r("58a8").trim,v="Number",O=a[v],x=O.prototype,g=o(d(x))==v,j=function(e){var t,r,n,a,i,s,c,o,u=l(e,!1);if("string"==typeof u&&u.length>2)if(u=m(u),t=u.charCodeAt(0),43===t||45===t){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+u}for(i=u.slice(2),s=i.length,c=0;c<s;c++)if(o=i.charCodeAt(c),o<48||o>a)return NaN;return parseInt(i,n)}return+u};if(i(v,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var y,I=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof I&&(g?p((function(){x.valueOf.call(r)})):o(r)!=v)?u(new O(j(t)),r,I):j(t)},E=n?b(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;E.length>N;N++)c(O,y=E[N])&&!c(I,y)&&h(I,y,f(O,y));I.prototype=x,x.constructor=I,s(a,v,I)}},ac1f:function(e,t,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,r){"use strict";var n=r("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b680:function(e,t,r){"use strict";var n=r("23e7"),a=r("a691"),i=r("408a"),s=r("1148"),c=r("d039"),o=1..toFixed,u=Math.floor,l=function(e,t,r){return 0===t?r:t%2===1?l(e,t-1,r*e):l(e*e,t/2,r)},p=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},d=function(e,t,r){var n=-1,a=r;while(++n<6)a+=t*e[n],e[n]=a%1e7,a=u(a/1e7)},b=function(e,t){var r=6,n=0;while(--r>=0)n+=e[r],e[r]=u(n/t),n=n%t*1e7},f=function(e){var t=6,r="";while(--t>=0)if(""!==r||0===t||0!==e[t]){var n=String(e[t]);r=""===r?n:r+s.call("0",7-n.length)+n}return r},h=o&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){o.call({})}));n({target:"Number",proto:!0,forced:h},{toFixed:function(e){var t,r,n,c,o=i(this),u=a(e),h=[0,0,0,0,0,0],m="",v="0";if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return String(o);if(o<0&&(m="-",o=-o),o>1e-21)if(t=p(o*l(2,69,1))-69,r=t<0?o*l(2,-t,1):o/l(2,t,1),r*=4503599627370496,t=52-t,t>0){d(h,0,r),n=u;while(n>=7)d(h,1e7,0),n-=7;d(h,l(10,n,1),0),n=t-1;while(n>=23)b(h,1<<23),n-=23;b(h,1<<n),d(h,1,1),b(h,2),v=f(h)}else d(h,0,r),d(h,1<<-t,0),v=f(h)+s.call("0",u);return u>0?(c=v.length,v=m+(c<=u?"0."+s.call("0",u-c)+v:v.slice(0,c-u)+"."+v.slice(c-u))):v=m+v,v}})},b727:function(e,t,r){var n=r("0366"),a=r("44ad"),i=r("7b0b"),s=r("50c4"),c=r("65f0"),o=[].push,u=function(e){var t=1==e,r=2==e,u=3==e,l=4==e,p=6==e,d=7==e,b=5==e||p;return function(f,h,m,v){for(var O,x,g=i(f),j=a(g),y=n(h,m,3),I=s(j.length),E=0,N=v||c,w=t?N(f,I):r||d?N(f,0):void 0;I>E;E++)if((b||E in j)&&(O=j[E],x=y(O,E,g),e))if(t)w[E]=x;else if(x)switch(e){case 3:return!0;case 5:return O;case 6:return E;case 2:o.call(w,O)}else switch(e){case 4:return!1;case 7:o.call(w,O)}return p?-1:u||l?l:w}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),i=r("b622"),s=r("9112"),c=i("species"),o=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),l=i("replace"),p=function(){return!!/./[l]&&""===/./[l]("a","$0")}(),d=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,l){var b=i(e),f=!a((function(){var t={};return t[b]=function(){return 7},7!=""[e](t)})),h=f&&!a((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[b]=/./[b]),r.exec=function(){return t=!0,null},r[b](""),!t}));if(!f||!h||"replace"===e&&(!o||!u||p)||"split"===e&&!d){var m=/./[b],v=r(b,""[e],(function(e,t,r,n,a){return t.exec===RegExp.prototype.exec?f&&!a?{done:!0,value:m.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),O=v[0],x=v[1];n(String.prototype,e,O),n(RegExp.prototype,b,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}l&&s(RegExp.prototype[b],"sham",!0)}},e8b5:function(e,t,r){var n=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},f89f:function(e,t,r){}}]);
//# sourceMappingURL=chunk-2e98da93.2e2b95ee.js.map