(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70298e38"],{"4e8f":function(t,e,n){"use strict";n("bad3")},5054:function(t,e,n){"use strict";n("88f3")},"5a0c":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",a="minute",s="hour",o="day",x="week",u="month",l="quarter",c="year",f="date",d="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},b={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),a=n-i<0,s=e.clone().add(r+(a?-1:1),u);return+(-(r+(n-i)/(a?i-s:s-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:c,w:x,d:o,D:f,h:s,m:a,s:i,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},M="en",C={};C[M]=g;var D=function(t){return t instanceof H},p=function(t,e,n){var r;if(!t)return M;if("string"==typeof t)C[t]&&(r=t),e&&(C[t]=e,r=t);else{var i=t.name;C[i]=t,r=i}return!n&&r&&(M=r),r||!n&&M},w=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new H(n)},$=b;$.l=p,$.i=D,$.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var H=function(){function g(t){this.$L=p(t.locale,null,!0),this.parse(t)}var v=g.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if($.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return $},v.isValid=function(){return!(this.$d.toString()===d)},v.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return w(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<w(t)},v.$g=function(t,e,n){return $.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,r=!!$.u(e)||e,l=$.p(t),d=function(t,e){var i=$.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(o)},m=function(t,e){return $.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},h=this.$W,g=this.$M,v=this.$D,b="set"+(this.$u?"UTC":"");switch(l){case c:return r?d(1,0):d(31,11);case u:return r?d(1,g):d(0,g+1);case x:var M=this.$locale().weekStart||0,C=(h<M?h+7:h)-M;return d(r?v-C:v+(6-C),g);case o:case f:return m(b+"Hours",0);case s:return m(b+"Minutes",1);case a:return m(b+"Seconds",2);case i:return m(b+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var n,x=$.p(t),l="set"+(this.$u?"UTC":""),d=(n={},n[o]=l+"Date",n[f]=l+"Date",n[u]=l+"Month",n[c]=l+"FullYear",n[s]=l+"Hours",n[a]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[x],m=x===o?this.$D+(e-this.$W):e;if(x===u||x===c){var h=this.clone().set(f,1);h.$d[d](m),h.init(),this.$d=h.set(f,Math.min(this.$D,h.daysInMonth())).$d}else d&&this.$d[d](m);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[$.p(t)]()},v.add=function(r,l){var f,d=this;r=Number(r);var m=$.p(l),h=function(t){var e=w(d);return $.w(e.date(e.date()+Math.round(t*r)),d)};if(m===u)return this.set(u,this.$M+r);if(m===c)return this.set(c,this.$y+r);if(m===o)return h(1);if(m===x)return h(7);var g=(f={},f[a]=e,f[s]=n,f[i]=t,f)[m]||1,v=this.$d.getTime()+r*g;return $.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=$.z(this),a=this.$H,s=this.$m,o=this.$M,x=n.weekdays,u=n.months,l=function(t,n,i,a){return t&&(t[n]||t(e,r))||i[n].substr(0,a)},c=function(t){return $.s(a%12||12,t,"0")},f=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:$.s(o+1,2,"0"),MMM:l(n.monthsShort,o,u,3),MMMM:l(u,o),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,x,2),ddd:l(n.weekdaysShort,this.$W,x,3),dddd:x[this.$W],H:String(a),HH:$.s(a,2,"0"),h:c(1),hh:c(2),a:f(a,s,!0),A:f(a,s,!1),m:String(s),mm:$.s(s,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:i};return r.replace(h,(function(t,e){return e||m[t]||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,f,d){var m,h=$.p(f),g=w(r),v=(g.utcOffset()-this.utcOffset())*e,b=this-g,M=$.m(this,g);return M=(m={},m[c]=M/12,m[u]=M,m[l]=M/3,m[x]=(b-v)/6048e5,m[o]=(b-v)/864e5,m[s]=b/n,m[a]=b/e,m[i]=b/t,m)[h]||b,d?M:$.a(M)},v.daysInMonth=function(){return this.endOf(u).$D},v.$locale=function(){return C[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=p(t,e,!0);return r&&(n.$L=r),n},v.clone=function(){return $.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),y=H.prototype;return w.prototype=y,[["$ms",r],["$s",i],["$m",a],["$H",s],["$W",o],["$M",u],["$y",c],["$D",f]].forEach((function(t){y[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,H,w),t.$i=!0),w},w.locale=p,w.isDayjs=D,w.unix=function(t){return w(1e3*t)},w.en=C[M],w.Ls=C,w.p={},w}))},"88f3":function(t,e,n){},"93bf":function(t,e,n){
/*!
* screenfull
* v5.2.0 - 2021-11-03
* (c) Sindre Sorhus; MIT License
*/
(function(){"use strict";var e="undefined"!==typeof window&&"undefined"!==typeof window.document?window.document:{},n=t.exports,r=function(){for(var t,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],r=0,i=n.length,a={};r<i;r++)if(t=n[r],t&&t[1]in e){for(r=0;r<t.length;r++)a[n[0][r]]=t[r];return a}return!1}(),i={change:r.fullscreenchange,error:r.fullscreenerror},a={request:function(t,n){return new Promise(function(i,a){var s=function(){this.off("change",s),i()}.bind(this);this.on("change",s),t=t||e.documentElement;var o=t[r.requestFullscreen](n);o instanceof Promise&&o.then(s).catch(a)}.bind(this))},exit:function(){return new Promise(function(t,n){if(this.isFullscreen){var i=function(){this.off("change",i),t()}.bind(this);this.on("change",i);var a=e[r.exitFullscreen]();a instanceof Promise&&a.then(i).catch(n)}else t()}.bind(this))},toggle:function(t,e){return this.isFullscreen?this.exit():this.request(t,e)},onchange:function(t){this.on("change",t)},onerror:function(t){this.on("error",t)},on:function(t,n){var r=i[t];r&&e.addEventListener(r,n,!1)},off:function(t,n){var r=i[t];r&&e.removeEventListener(r,n,!1)},raw:r};r?(Object.defineProperties(a,{isFullscreen:{get:function(){return Boolean(e[r.fullscreenElement])}},element:{enumerable:!0,get:function(){return e[r.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(e[r.fullscreenEnabled])}}}),n?t.exports=a:window.screenfull=a):n?t.exports={isEnabled:!1}:window.screenfull={isEnabled:!1}})()},9406:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("dv-full-screen-container",{nativeOn:{click:function(e){return t.click(e)}}},[r("div",{staticClass:"header"}),r("div",{staticClass:"content"},[r("div",{staticClass:"left"},[r("div",{staticClass:"left-item-1"},[r("div",{staticClass:"title1"},[t._v("xxxxxxxxx")]),r("div",{staticClass:"grid"},[r("div",{staticClass:"grid-item"},[r("span",[t._v("xxx")]),r("img",{attrs:{src:n("ab55"),alt:""}})]),r("div",{staticClass:"grid-item"},[r("span",[t._v("xxx")]),r("dv-digital-flop",{attrs:{config:t.numberConfig1}})],1),r("div",{staticClass:"grid-item"},[r("span",[t._v("xxx")]),r("dv-digital-flop",{attrs:{config:t.numberConfig2}})],1),r("div",{staticClass:"grid-item"},[r("span",[t._v("xxx")]),r("img",{attrs:{src:n("ab55"),alt:""}})]),r("div",{staticClass:"grid-item"},[r("span",[t._v("xxx")]),r("dv-digital-flop",{attrs:{config:t.numberConfig3}})],1),r("div",{staticClass:"grid-item"},[r("span",[t._v("xxx")]),r("dv-digital-flop",{attrs:{config:t.numberConfig4}})],1),r("div",{staticClass:"grid-item"},[r("span",[t._v("xxx")]),r("img",{attrs:{src:n("ab55"),alt:""}})]),r("div",{staticClass:"grid-item"},[r("span",[t._v("xxx")]),r("dv-digital-flop",{attrs:{config:t.numberConfig5}})],1),r("div",{staticClass:"grid-item"},[r("span",[t._v("xxx")]),r("dv-digital-flop",{attrs:{config:t.numberConfig6}})],1)])]),r("div",{staticClass:"left-item-2"},[r("div",{staticClass:"title1"},[t._v("xxxxxxxxx")]),r("div",{staticClass:"grid"},[r("div",{staticClass:"grid-item"},[r("span",[t._v("xxx")]),r("dv-digital-flop",{attrs:{config:t.numberConfig7}})],1),r("div",{staticClass:"grid-item"},[r("span",[t._v("xxx")]),r("dv-digital-flop",{attrs:{config:t.numberConfig8}})],1),r("div",{staticClass:"grid-item"},[r("span",[t._v("xxx")]),r("dv-digital-flop",{attrs:{config:t.numberConfig9}})],1),r("div",{staticClass:"grid-item"},[r("span",[t._v("xxx")]),r("dv-digital-flop",{attrs:{config:t.numberConfig10}})],1)]),r("div",{staticClass:"chart"},[r("dv-charts",{attrs:{option:t.option}})],1)])]),r("div",{staticClass:"center"},[r("div",{staticClass:"title2"},[t._v("xxxxxxxxx")]),r("div",{staticClass:"center-content"},[r("div",{staticClass:"center-text-1"},[t._v("xxx")]),r("div",{staticClass:"center-text-2"},[t._v("9527")]),r("div",{staticClass:"center-text-3"},[t._v("xxx")]),r("div",{staticClass:"capsule"},[r("dv-capsule-chart",{attrs:{config:t.capsuleConfig}})],1),r("div",{staticClass:"scroll"},[r("dv-scroll-board",{attrs:{config:t.scroll1}})],1)])]),r("div",{staticClass:"right"},[r("div",{staticClass:"right-item-1"},[r("div",{staticClass:"title1"},[t._v("xxxxxxxxx")]),r("div",{staticClass:"img"},[r("img",{attrs:{src:n("ab55"),alt:""}}),r("img",{attrs:{src:n("ab55"),alt:""}}),r("img",{attrs:{src:n("ab55"),alt:""}})]),r("div",{staticClass:"scroll"},[r("dv-scroll-board",{attrs:{config:t.scroll2}})],1)]),r("div",{staticClass:"right-item-2"},[r("div",{staticClass:"title1"},[t._v("xxxxxxxxx")]),r("div",{staticClass:"grid"},[r("div",{staticClass:"grid-item"},[r("img",{attrs:{src:n("ff8d"),alt:""}}),r("div",[r("span",{staticClass:"title"},[t._v("xxx")]),r("dv-digital-flop",{attrs:{config:t.numberConfig11}})],1)]),r("div",{staticClass:"grid-item"},[r("img",{attrs:{src:n("bb1e"),alt:""}}),r("div",[r("span",{staticClass:"title"},[t._v("xxx")]),r("dv-digital-flop",{attrs:{config:t.numberConfig12}})],1)])]),r("div",{staticClass:"scroll"},[r("dv-scroll-board",{attrs:{config:t.scroll3}})],1)])])])])},i=[],a=(n("e9c4"),n("5a0c")),s=n.n(a),o=n("93bf"),x=n.n(o),u={name:"Dashboard",data:function(){return{option:{grid:{top:10},xAxis:{data:["xxx","xxx","xxx","xxx"],axisLine:{style:{stroke:"rgb(8,123,149)",lineWidth:1}},axisLabel:{style:{stroke:"rgb(8,123,149)",lineWidth:1,fontSize:12}}},yAxis:{data:"value",axisLine:{style:{stroke:"rgb(8,123,149)",lineWidth:1}},axisLabel:{style:{stroke:"rgb(8,123,149)",lineWidth:1}},splitLine:{show:!1}},series:[{data:[61,279,203,76],type:"bar",independentColor:!0,independentColors:["rgb(80,152,254)","rgb(80,220,193)","rgb(188,102,254)","rgb(254,140,67)"]}]},capsuleConfig:{data:[{name:"xx",value:167},{name:"xx",value:67},{name:"xx",value:123},{name:"xx",value:55},{name:"xx",value:98},{name:"xx",value:167},{name:"xx",value:67},{name:"xx",value:123},{name:"xx",value:55},{name:"xx",value:98},{name:"xx",value:123},{name:"xx",value:55},{name:"xx",value:98},{name:"xx",value:167},{name:"xx",value:123},{name:"xx",value:55},{name:"xx",value:98}]},scroll1:{header:["xxx","xxx","xxx","xxx","xxx"],data:[["xxx","xxx","xxxxxxxxx",s()(+new Date-Math.floor(30*Math.random()*60*1e3)).format("MM-DD HH:mm:ss"),"xx"],["xxx","xxx","xxxxxxxxx",s()(+new Date-Math.floor(30*Math.random()*60*1e3)).format("MM-DD HH:mm:ss"),"xx"],["xxx","xxx","xxxxxxxxx",s()(+new Date-Math.floor(30*Math.random()*60*1e3)).format("MM-DD HH:mm:ss"),"xx"],["xxx","xxx","xxxxxxxxx",s()(+new Date-Math.floor(30*Math.random()*60*1e3)).format("MM-DD HH:mm:ss"),"xx"],["xxx","xxx","xxxxxxxxx",s()(+new Date-Math.floor(30*Math.random()*60*1e3)).format("MM-DD HH:mm:ss"),"xx"]],rowNum:4,headerHeight:40,headerBGC:"rgb(12, 46, 86)",oddRowBGC:"rgba(12, 47, 86, 0.6)",evenRowBGC:"rgba(12, 47, 86, 0.3)"},scroll2:{header:["xxx","xxx","xxx"],data:[["xxxxxxxxx","xx",s()(+new Date-Math.floor(30*Math.random()*60*1e3)).format("MM-DD HH:mm:ss")],["xxxxxxxxx","xx",s()(+new Date-Math.floor(30*Math.random()*60*1e3)).format("MM-DD HH:mm:ss")],["xxxxxxxxx","xx",s()(+new Date-Math.floor(30*Math.random()*60*1e3)).format("MM-DD HH:mm:ss")],["xxxxxxxxx","xx",s()(+new Date-Math.floor(30*Math.random()*60*1e3)).format("MM-DD HH:mm:ss")],["xxxxxxxxx","xx",s()(+new Date-Math.floor(30*Math.random()*60*1e3)).format("MM-DD HH:mm:ss")]],rowNum:5,headerHeight:40,headerBGC:"rgb(12, 46, 86)",oddRowBGC:"rgba(12, 47, 86, 0.6)",evenRowBGC:"rgba(12, 47, 86, 0.3)"},scroll3:{header:["xxx","xxx","xxx","xxx"],data:[["xxxxxxxxx",s()(+new Date-Math.floor(30*Math.random()*60*1e3+3e5)).format("MM-DD HH:mm:ss"),s()(+new Date-Math.floor(5*Math.random()*60*1e3)).format("MM-DD HH:mm:ss"),"xxx"],["xxxxxxxxx",s()(+new Date-Math.floor(30*Math.random()*60*1e3+3e5)).format("MM-DD HH:mm:ss"),s()(+new Date-Math.floor(5*Math.random()*60*1e3)).format("MM-DD HH:mm:ss"),"xxx"],["xxxxxxxxx",s()(+new Date-Math.floor(30*Math.random()*60*1e3+3e5)).format("MM-DD HH:mm:ss"),s()(+new Date-Math.floor(5*Math.random()*60*1e3)).format("MM-DD HH:mm:ss"),"xxx"],["xxxxxxxxx",s()(+new Date-Math.floor(30*Math.random()*60*1e3+3e5)).format("MM-DD HH:mm:ss"),s()(+new Date-Math.floor(5*Math.random()*60*1e3)).format("MM-DD HH:mm:ss"),"xxx"],["xxxxxxxxx",s()(+new Date-Math.floor(30*Math.random()*60*1e3+3e5)).format("MM-DD HH:mm:ss"),s()(+new Date-Math.floor(5*Math.random()*60*1e3)).format("MM-DD HH:mm:ss"),"xxx"]],rowNum:3,headerHeight:40,headerBGC:"rgb(12, 46, 86)",oddRowBGC:"rgba(12, 47, 86, 0.6)",evenRowBGC:"rgba(12, 47, 86, 0.3)"},numberConfig1:{number:[45]},numberConfig2:{number:[82]},numberConfig3:{number:[887]},numberConfig4:{number:[1711]},numberConfig5:{number:[234]},numberConfig6:{number:[221]},numberConfig7:{number:[61]},numberConfig8:{number:[279]},numberConfig9:{number:[203]},numberConfig10:{number:[76]},numberConfig11:{number:[511]},numberConfig12:{number:[94]}}},mounted:function(){var t=this;setInterval((function(){t.numberConfig8={number:[t.numberConfig8.number[0]+Math.floor(6*Math.random())]},t.numberConfig9={number:[t.numberConfig9.number[0]+Math.floor(6*Math.random())]},t.numberConfig10={number:[t.numberConfig10.number[0]+Math.floor(6*Math.random())]},t.numberConfig11={number:[t.numberConfig11.number[0]+Math.floor(10*Math.random())-Math.floor(10*Math.random())]},t.numberConfig12={number:[t.numberConfig12.number[0]+Math.floor(10*Math.random())-Math.floor(10*Math.random())]},t.option.series[0].data=[t.numberConfig7.number[0],t.numberConfig8.number[0],t.numberConfig9.number[0],t.numberConfig10.number[0]],t.option=JSON.parse(JSON.stringify(t.option))}),5e3)},methods:{click:function(){x.a.toggle()}}},l=u,c=(n("4e8f"),n("5054"),n("2877")),f=Object(c["a"])(l,r,i,!1,null,"99016a52",null);e["default"]=f.exports},ab55:function(t,e,n){t.exports=n.p+"static/img/img.248a7b9f.png"},bad3:function(t,e,n){},bb1e:function(t,e,n){t.exports=n.p+"static/img/icon2.00150aea.png"},e9c4:function(t,e,n){var r=n("23e7"),i=n("d066"),a=n("d039"),s=i("JSON","stringify"),o=/[\uD800-\uDFFF]/g,x=/^[\uD800-\uDBFF]$/,u=/^[\uDC00-\uDFFF]$/,l=function(t,e,n){var r=n.charAt(e-1),i=n.charAt(e+1);return x.test(t)&&!u.test(i)||u.test(t)&&!x.test(r)?"\\u"+t.charCodeAt(0).toString(16):t},c=a((function(){return'"\\udf06\\ud834"'!==s("\udf06\ud834")||'"\\udead"'!==s("\udead")}));s&&r({target:"JSON",stat:!0,forced:c},{stringify:function(t,e,n){var r=s.apply(null,arguments);return"string"==typeof r?r.replace(o,l):r}})},ff8d:function(t,e,n){t.exports=n.p+"static/img/icon1.3a740313.png"}}]);