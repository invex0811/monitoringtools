(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15f959e2"],{"028e":function(t,e,n){"use strict";n("8bef")},"0deb":function(t,e,n){"use strict";n("4864")},4864:function(t,e,n){},"8bef":function(t,e,n){},b16b:function(t,e,n){"use strict";n("b8a5")},b8a5:function(t,e,n){},d953:function(t,e,n){"use strict";n.r(e);var c=n("7a23"),r=Object(c["I"])("data-v-ff532b00");Object(c["u"])("data-v-ff532b00");var o={class:"convertingTime"},i=Object(c["i"])("h2",null,"Converting time",-1),u={class:"wrapperTenths"},a={class:"wrapper_buttons"};Object(c["s"])();var b=r((function(t,e,n,r,b,s){return Object(c["r"])(),Object(c["f"])("div",o,[i,Object(c["i"])("div",u,[Object(c["i"])("div",a,[Object(c["i"])("button",{onClick:e[1]||(e[1]=function(t){return b.currentTab="TenthToTime"}),class:["button-left buttons",{active:"TenthToTime"===b.currentTab}]}," Convert to time ",2),Object(c["i"])("button",{onClick:e[2]||(e[2]=function(t){return b.currentTab="TimeToTenth"}),class:["button-right buttons",{active:"TimeToTenth"===b.currentTab}]}," Convert to tenth ",2)]),(Object(c["r"])(),Object(c["f"])(c["b"],null,[(Object(c["r"])(),Object(c["f"])(Object(c["z"])(b.currentTab)))],1024))])])})),s=Object(c["I"])("data-v-c8376ae6");Object(c["u"])("data-v-c8376ae6");var l={class:"tenthToTime"},T=Object(c["i"])("h3",null,"Tenth to time",-1);Object(c["s"])();var d=s((function(t,e,n,r,o,i){return Object(c["r"])(),Object(c["f"])("div",l,[T,Object(c["H"])(Object(c["i"])("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.a=t}),placeholder:"Number"},null,512),[[c["E"],o.a,void 0,{number:!0}]]),Object(c["i"])("button",{onClick:e[2]||(e[2]=function(){return i.plusDec&&i.plusDec.apply(i,arguments)})},"OK"),Object(c["i"])("span",null,Object(c["B"])(o.answer),1)])})),m={name:"TenthToTime",data:function(){return{a:"",answer:""}},methods:{plusDec:function(){var t;t=this.a%1,console.log("ostatoc:"+t);var e=this.a-t;console.log("hours:"+e);var n=Math.round(60*t);return console.log("convertMinute:"+n),this.answer=e+":"+n}}};n("028e");m.render=d,m.__scopeId="data-v-c8376ae6";var v=m,O=Object(c["I"])("data-v-593e1960");Object(c["u"])("data-v-593e1960");var h={class:"timeToTenth"},j=Object(c["i"])("h3",null,"Time to tenth",-1),f={class:"wrapperInput"},p=Object(c["i"])("b",{style:{"font-size":"30px"}},":",-1);Object(c["s"])();var w=O((function(t,e,n,r,o,i){return Object(c["r"])(),Object(c["f"])("div",h,[j,Object(c["i"])("div",f,[Object(c["H"])(Object(c["i"])("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.hours=t}),placeholder:"Hours"},null,512),[[c["E"],o.hours,void 0,{number:!0}]]),p,Object(c["H"])(Object(c["i"])("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=function(t){return o.minutes=t}),placeholder:"Minutes"},null,512),[[c["E"],o.minutes,void 0,{number:!0}]])]),Object(c["i"])("button",{onClick:e[3]||(e[3]=function(){return i.convertToTime&&i.convertToTime.apply(i,arguments)})},"OK"),Object(c["i"])("span",null,Object(c["B"])(o.answer),1)])})),C={name:"TimeToTenth",data:function(){return{hours:"",minutes:"",answer:""}},methods:{convertToTime:function(){var t=this.minutes/60;return this.answer=this.hours+t}}};n("b16b");C.render=w,C.__scopeId="data-v-593e1960";var g=C,k={name:"ConvertingTime",components:{TimeToTenth:g,TenthToTime:v},data:function(){return{currentTab:"TenthToTime",tabs:[{title:"Convert to time",id:"TenthToTime"},{title:"Convert to tenth",id:"TimeToTenth"}]}},computed:{}};n("0deb");k.render=b,k.__scopeId="data-v-ff532b00";e["default"]=k}}]);
//# sourceMappingURL=chunk-15f959e2.c754ce9f.js.map