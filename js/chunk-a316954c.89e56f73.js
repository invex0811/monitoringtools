(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a316954c","chunk-fdcba76a"],{"0d77":function(e,t,r){"use strict";r.r(t);var a=r("7a23"),n=Object(a["I"])("data-v-3e9a932e");Object(a["u"])("data-v-3e9a932e");var i={class:"over-speed"},s=Object(a["i"])("h2",null,"Over speed",-1),c={class:"time"},o=Object(a["i"])("b",{style:{"font-size":"30px"}},":",-1),u={class:"mile"},l={class:"speed"},p={class:"speedList"};Object(a["s"])();var d=n((function(e,t,r,n,d,b){var f=Object(a["y"])("SpeedList"),h=Object(a["y"])("router-view");return Object(a["r"])(),Object(a["f"])(a["a"],null,[Object(a["i"])("div",i,[s,Object(a["i"])("div",c,[Object(a["H"])(Object(a["i"])("input",{type:"number","onUpdate:modelValue":t[1]||(t[1]=function(e){return d.timeHours=e}),placeholder:"Hours"},null,512),[[a["E"],d.timeHours,void 0,{number:!0}]]),o,Object(a["H"])(Object(a["i"])("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=function(e){return d.timeMinutes=e}),placeholder:"Minutes"},null,512),[[a["E"],d.timeMinutes,void 0,{number:!0}]])]),Object(a["i"])("div",u,[Object(a["H"])(Object(a["i"])("input",{type:"number",id:"mile","onUpdate:modelValue":t[3]||(t[3]=function(e){return d.miles=e}),placeholder:"Miles"},null,512),[[a["E"],d.miles,void 0,{number:!0}]])]),Object(a["i"])("button",{onClick:t[4]||(t[4]=function(){return b.calcSpeed&&b.calcSpeed.apply(b,arguments)})}," OK "),Object(a["i"])("div",l,[d.miles>0?(Object(a["r"])(),Object(a["f"])("span",{key:0,class:{redSpeed:d.overSpeed>95}},Object(a["B"])("Speed: "+d.speed),3)):Object(a["g"])("",!0)])]),Object(a["i"])("div",p,[Object(a["i"])("i",{class:"fi-rr-document",onClick:t[5]||(t[5]=function(){return b.showModal&&b.showModal.apply(b,arguments)}),title:"Speed list"})]),Object(a["i"])(f,{ref:"modal"},null,512),Object(a["i"])(h)],64)})),b=(r("a9e3"),r("b680"),r("68ee")),f={name:"OverSpeed",components:{SpeedList:b["default"]},data:function(){return{timeHours:"",timeMinutes:"",miles:"",totalTime:"",overSpeed:"",speed:""}},methods:{calcSpeed:function(){this.totalTime=this.timeHours+this.timeMinutes/60,this.speed=this.miles/this.totalTime,this.overSpeed=Number(this.speed),this.speed=this.speed.toFixed(2)+" mph"},showModal:function(){return this.$refs.modal.show=!0}}};r("d36c");f.render=d,f.__scopeId="data-v-3e9a932e";t["default"]=f},"0da6":function(e,t,r){},1148:function(e,t,r){"use strict";var a=r("a691"),n=r("1d80");e.exports=function(e){var t=String(n(this)),r="",i=a(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(r+=t);return r}},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"14c3":function(e,t,r){var a=r("c6b6"),n=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var i=r.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"1bca":function(e,t,r){},"1dde":function(e,t,r){var a=r("d039"),n=r("b622"),i=r("2d00"),s=n("species");e.exports=function(e){return i>=51||!a((function(){var t=[],r=t.constructor={};return r[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"408a":function(e,t,r){var a=r("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=a(e))throw TypeError("Incorrect invocation");return+e}},"4de4":function(e,t,r){"use strict";var a=r("23e7"),n=r("b727").filter,i=r("1dde"),s=i("filter");a({target:"Array",proto:!0,forced:!s},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var a=r("1d80"),n=r("5899"),i="["+n+"]",s=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),o=function(e){return function(t){var r=String(a(t));return 1&e&&(r=r.replace(s,"")),2&e&&(r=r.replace(c,"")),r}};e.exports={start:o(1),end:o(2),trim:o(3)}},"65f0":function(e,t,r){var a=r("861d"),n=r("e8b5"),i=r("b622"),s=i("species");e.exports=function(e,t){var r;return n(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!n(r.prototype)?a(r)&&(r=r[s],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},"68ee":function(e,t,r){"use strict";r.r(t);r("ac1f"),r("841c");var a=r("7a23"),n=Object(a["I"])("data-v-08207634");Object(a["u"])("data-v-08207634");var i={class:"wrap-blur-modal",key:"modalWindow"},s={class:"wrap-modal"},c={class:"input-wrapper"},o={class:"speedList"},u={class:"table-wrapper"},l=Object(a["i"])("thead",null,[Object(a["i"])("th",null,"Abbr"),Object(a["i"])("th",{class:"state"},"State"),Object(a["i"])("th",null,"Speed")],-1),p={class:"td-abbr"};Object(a["s"])();var d=n((function(e,t,r,d,b,f){var h=Object(a["y"])("router-view");return Object(a["r"])(),Object(a["f"])(a["a"],null,[Object(a["i"])(a["c"],{name:"slide-fade"},{default:n((function(){return[b.show?(Object(a["r"])(),Object(a["f"])("div",i,[Object(a["i"])("div",s,[Object(a["i"])("i",{onClick:t[1]||(t[1]=function(){return f.closeModal&&f.closeModal.apply(f,arguments)}),class:"fi-rr-cross-circle"}),Object(a["i"])("div",c,[Object(a["H"])(Object(a["i"])("input",{type:"text",class:"search-input","onUpdate:modelValue":t[2]||(t[2]=function(e){return b.search=e}),placeholder:"Input abbreviation"},null,512),[[a["E"],b.search]])]),Object(a["i"])("div",o,[Object(a["i"])("div",u,[Object(a["i"])("table",null,[l,Object(a["i"])("tbody",null,[(Object(a["r"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(f.todosByTitle,(function(e){return Object(a["r"])(),Object(a["f"])("tr",{key:e.id},[Object(a["i"])("td",p,Object(a["B"])(e.abbr),1),Object(a["i"])("td",null,Object(a["B"])(e.state),1),Object(a["i"])("td",null,Object(a["B"])(e.speed),1)])})),128))])])])])])])):Object(a["g"])("",!0)]})),_:1}),Object(a["i"])(h)],64)})),b=(r("4de4"),{name:"SpeedList",data:function(){return{show:!1,search:"",arrayState:[{abbr:"AL",state:"Alabama",speed:"85mph"},{abbr:"AK",state:"Alaska",speed:"80mph"},{abbr:"AZ",state:"Arizona",speed:"90mph"},{abbr:"AR",state:"Arkansas",speed:"85mph"},{abbr:"CA",state:"California",speed:"70mph"},{abbr:"CO",state:"Colorado",speed:"90mph"},{abbr:"CT",state:"Connecticut",speed:"80mph"},{abbr:"DE",state:"Delaware",speed:"80mph"},{abbr:"FL",state:"Florida",speed:"85mph"},{abbr:"GA",state:"Georgia",speed:"85mph"},{abbr:"HI",state:"Hawaii",speed:"75mph"},{abbr:"ID",state:"Idaho",speed:"85mph"},{abbr:"IL",state:"Illinois",speed:"85mph"},{abbr:"IN",state:"Indiana",speed:"80mph"},{abbr:"IA",state:"Iowa",speed:"85mph"},{abbr:"KS",state:"Kansas",speed:"90mph"},{abbr:"KY",state:"Kentucky",speed:"85mph"},{abbr:"LA",state:"Louisiana",speed:"90mph"},{abbr:"ME",state:"Maine",speed:"90mph"},{abbr:"MD",state:"Maryland",speed:"85mph"},{abbr:"MA",state:"Massachusetts",speed:"80mph"},{abbr:"MI",state:"Michigan",speed:"80mph"},{abbr:"MN",state:"Minnesota",speed:"85mph"},{abbr:"MS",state:"Mississippi",speed:"85mph"},{abbr:"MO",state:"Missouri",speed:"85mph"},{abbr:"MT",state:"Montana",speed:"80mph"},{abbr:"NE",state:"Nebraska",speed:"90mph"},{abbr:"NV",state:"Nevada",speed:"95mph"},{abbr:"NV",state:"New Hampshire",speed:"85mph"},{abbr:"NJ",state:"New Jersey",speed:"80mph"},{abbr:"NM",state:"New Mexico",speed:"90mph"},{abbr:"NY",state:"New York",speed:"80mph"},{abbr:"NC",state:"North Carolina",speed:"85mph"},{abbr:"ND",state:"North Dakota",speed:"90mph"},{abbr:"OH",state:"Ohio",speed:"85mph"},{abbr:"OK",state:"Oklahoma",speed:"85mph"},{abbr:"OR",state:"Oregon",speed:"80mph"},{abbr:"PA",state:"Pennsylvania",speed:"85mph"},{abbr:"RI",state:"Rhode Island",speed:"80mph"},{abbr:"SC",state:"South Carolina",speed:"85mph"},{abbr:"SD",state:"South Dakota",speed:"95mph"},{abbr:"TN",state:"Tennessee",speed:"85mph"},{abbr:"TX",state:"Texas",speed:"95mph"},{abbr:"UT",state:"Utah",speed:"95mph"},{abbr:"VT",state:"Vermont",speed:"80mph"},{abbr:"VA",state:"Virginia",speed:"85mph"},{abbr:"WA",state:"Washington",speed:"75mph"},{abbr:"WV",state:"West Virginia",speed:"85mph"},{abbr:"WI",state:"Wisconsin",speed:"85mph"},{abbr:"WY",state:"Wyoming",speed:"95mph"}]}},methods:{closeModal:function(){return this.show=!1}},computed:{todosByTitle:function(){var e=this;return this.arrayState.filter((function(t){return-1!==t.abbr.indexOf(e.search.toUpperCase())}))}}});r("96d7");b.render=d,b.__scopeId="data-v-08207634";t["default"]=b},7156:function(e,t,r){var a=r("861d"),n=r("d2bb");e.exports=function(e,t,r){var i,s;return n&&"function"==typeof(i=t.constructor)&&i!==r&&a(s=i.prototype)&&s!==r.prototype&&n(e,s),e}},"841c":function(e,t,r){"use strict";var a=r("d784"),n=r("825a"),i=r("1d80"),s=r("129f"),c=r("14c3");a("search",1,(function(e,t,r){return[function(t){var r=i(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,r):new RegExp(t)[e](String(r))},function(e){var a=r(t,e,this);if(a.done)return a.value;var i=n(e),o=String(this),u=i.lastIndex;s(u,0)||(i.lastIndex=0);var l=c(i,o);return s(i.lastIndex,u)||(i.lastIndex=u),null===l?-1:l.index}]}))},9263:function(e,t,r){"use strict";var a=r("ad6d"),n=r("9f7f"),i=r("5692"),s=RegExp.prototype.exec,c=i("native-string-replace",String.prototype.replace),o=s,u=function(){var e=/a/,t=/b*/g;return s.call(e,"a"),s.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=n.UNSUPPORTED_Y||n.BROKEN_CARET,p=void 0!==/()??/.exec("")[1],d=u||p||l;d&&(o=function(e){var t,r,n,i,o=this,d=l&&o.sticky,b=a.call(o),f=o.source,h=0,m=e;return d&&(b=b.replace("y",""),-1===b.indexOf("g")&&(b+="g"),m=String(e).slice(o.lastIndex),o.lastIndex>0&&(!o.multiline||o.multiline&&"\n"!==e[o.lastIndex-1])&&(f="(?: "+f+")",m=" "+m,h++),r=new RegExp("^(?:"+f+")",b)),p&&(r=new RegExp("^"+f+"$(?!\\s)",b)),u&&(t=o.lastIndex),n=s.call(d?r:o,m),d?n?(n.input=n.input.slice(h),n[0]=n[0].slice(h),n.index=o.lastIndex,o.lastIndex+=n[0].length):o.lastIndex=0:u&&n&&(o.lastIndex=o.global?n.index+n[0].length:t),p&&n&&n.length>1&&c.call(n[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(n[i]=void 0)})),n}),e.exports=o},"96d7":function(e,t,r){"use strict";r("1bca")},"9f7f":function(e,t,r){"use strict";var a=r("d039");function n(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=a((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a9e3:function(e,t,r){"use strict";var a=r("83ab"),n=r("da84"),i=r("94ca"),s=r("6eeb"),c=r("5135"),o=r("c6b6"),u=r("7156"),l=r("c04e"),p=r("d039"),d=r("7c73"),b=r("241c").f,f=r("06cf").f,h=r("9bf2").f,m=r("58a8").trim,v="Number",O=n[v],x=O.prototype,g=o(d(x))==v,j=function(e){var t,r,a,n,i,s,c,o,u=l(e,!1);if("string"==typeof u&&u.length>2)if(u=m(u),t=u.charCodeAt(0),43===t||45===t){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+u}for(i=u.slice(2),s=i.length,c=0;c<s;c++)if(o=i.charCodeAt(c),o<48||o>n)return NaN;return parseInt(i,a)}return+u};if(i(v,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var y,I=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof I&&(g?p((function(){x.valueOf.call(r)})):o(r)!=v)?u(new O(j(t)),r,I):j(t)},E=a?b(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;E.length>N;N++)c(O,y=E[N])&&!c(I,y)&&h(I,y,f(O,y));I.prototype=x,x.constructor=I,s(n,v,I)}},ac1f:function(e,t,r){"use strict";var a=r("23e7"),n=r("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(e,t,r){"use strict";var a=r("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b680:function(e,t,r){"use strict";var a=r("23e7"),n=r("a691"),i=r("408a"),s=r("1148"),c=r("d039"),o=1..toFixed,u=Math.floor,l=function(e,t,r){return 0===t?r:t%2===1?l(e,t-1,r*e):l(e*e,t/2,r)},p=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},d=function(e,t,r){var a=-1,n=r;while(++a<6)n+=t*e[a],e[a]=n%1e7,n=u(n/1e7)},b=function(e,t){var r=6,a=0;while(--r>=0)a+=e[r],e[r]=u(a/t),a=a%t*1e7},f=function(e){var t=6,r="";while(--t>=0)if(""!==r||0===t||0!==e[t]){var a=String(e[t]);r=""===r?a:r+s.call("0",7-a.length)+a}return r},h=o&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){o.call({})}));a({target:"Number",proto:!0,forced:h},{toFixed:function(e){var t,r,a,c,o=i(this),u=n(e),h=[0,0,0,0,0,0],m="",v="0";if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return String(o);if(o<0&&(m="-",o=-o),o>1e-21)if(t=p(o*l(2,69,1))-69,r=t<0?o*l(2,-t,1):o/l(2,t,1),r*=4503599627370496,t=52-t,t>0){d(h,0,r),a=u;while(a>=7)d(h,1e7,0),a-=7;d(h,l(10,a,1),0),a=t-1;while(a>=23)b(h,1<<23),a-=23;b(h,1<<a),d(h,1,1),b(h,2),v=f(h)}else d(h,0,r),d(h,1<<-t,0),v=f(h)+s.call("0",u);return u>0?(c=v.length,v=m+(c<=u?"0."+s.call("0",u-c)+v:v.slice(0,c-u)+"."+v.slice(c-u))):v=m+v,v}})},b727:function(e,t,r){var a=r("0366"),n=r("44ad"),i=r("7b0b"),s=r("50c4"),c=r("65f0"),o=[].push,u=function(e){var t=1==e,r=2==e,u=3==e,l=4==e,p=6==e,d=7==e,b=5==e||p;return function(f,h,m,v){for(var O,x,g=i(f),j=n(g),y=a(h,m,3),I=s(j.length),E=0,N=v||c,w=t?N(f,I):r||d?N(f,0):void 0;I>E;E++)if((b||E in j)&&(O=j[E],x=y(O,E,g),e))if(t)w[E]=x;else if(x)switch(e){case 3:return!0;case 5:return O;case 6:return E;case 2:o.call(w,O)}else switch(e){case 4:return!1;case 7:o.call(w,O)}return p?-1:u||l?l:w}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},d36c:function(e,t,r){"use strict";r("0da6")},d784:function(e,t,r){"use strict";r("ac1f");var a=r("6eeb"),n=r("d039"),i=r("b622"),s=r("9112"),c=i("species"),o=!n((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),l=i("replace"),p=function(){return!!/./[l]&&""===/./[l]("a","$0")}(),d=!n((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,l){var b=i(e),f=!n((function(){var t={};return t[b]=function(){return 7},7!=""[e](t)})),h=f&&!n((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[b]=/./[b]),r.exec=function(){return t=!0,null},r[b](""),!t}));if(!f||!h||"replace"===e&&(!o||!u||p)||"split"===e&&!d){var m=/./[b],v=r(b,""[e],(function(e,t,r,a,n){return t.exec===RegExp.prototype.exec?f&&!n?{done:!0,value:m.call(t,r,a)}:{done:!0,value:e.call(r,t,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),O=v[0],x=v[1];a(String.prototype,e,O),a(RegExp.prototype,b,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}l&&s(RegExp.prototype[b],"sham",!0)}},e8b5:function(e,t,r){var a=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==a(e)}}}]);
//# sourceMappingURL=chunk-a316954c.89e56f73.js.map