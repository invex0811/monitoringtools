(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e2c663a4"],{"19b9":function(t,e,i){},"75e0":function(t,e,i){"use strict";i.r(e);var n=i("7a23"),s=Object(n["I"])("data-v-6b48bbbf");Object(n["u"])("data-v-6b48bbbf");var u={class:"wrap-plusTime"},c=Object(n["i"])("h2",null,"Plus time",-1),b={class:"wrap-navigation"},r=Object(n["h"])(" : "),a={class:"wrap-list"},l={class:"result"};Object(n["s"])();var o=s((function(t,e,i,s,o,m){return Object(n["r"])(),Object(n["f"])("div",u,[c,Object(n["i"])("div",b,[Object(n["H"])(Object(n["i"])("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.hours=t}),placeholder:"Hours"},null,512),[[n["E"],o.hours,void 0,{number:!0}]]),r,Object(n["H"])(Object(n["i"])("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=function(t){return o.minutes=t}),placeholder:"Minutes"},null,512),[[n["E"],o.minutes,void 0,{number:!0}]]),Object(n["i"])("button",{class:"wrap-button",onClick:e[3]||(e[3]=function(){return m.addTime&&m.addTime.apply(m,arguments)})}," + ")]),Object(n["i"])("div",a,[Object(n["i"])("ul",null,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(o.viewList,(function(t){return Object(n["r"])(),Object(n["f"])("li",{key:t},Object(n["B"])(t),1)})),128))])]),Object(n["i"])("div",l,Object(n["B"])(o.totalTime),1)])})),m={name:"PlusTime",data:function(){return{hours:"",minutes:"",time:"",listTime:[],totalTime:"",viewList:[],viewTime:""}},methods:{addTime:function(){return this.minutes=this.minutes/60,this.viewTime=this.hours+60*this.minutes,this.viewList.push(this.viewTime),this.time=this.hours+this.minutes,this.listTime.push(this.time),this.totalTime=this.listTime.reduce((function(t,e){return t+e})),this.time=""}}};i("bdb1");m.render=o,m.__scopeId="data-v-6b48bbbf";e["default"]=m},bdb1:function(t,e,i){"use strict";i("19b9")}}]);
//# sourceMappingURL=chunk-e2c663a4.1850eb37.js.map