(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ccc4ed1e"],{"33a5":function(t){t.exports=JSON.parse('{"0":"江湖","1":"天策","2":"万花","3":"纯阳","4":"七秀","5":"少林","6":"藏剑","7":"丐帮","8":"明教","9":"五毒","10":"唐门","18":"苍云","19":"长歌","20":"霸刀","21":"蓬莱","22":"凌雪","23":"衍天","24":"药宗"}')},4208:function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";return function(t,e,n){t=t||{};var i=e.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(t,e,n,s){return i.fromToBase(t,e,n,s)}n.en.relativeTime=s,i.fromToBase=function(e,i,a,r,o){for(var c,u,l,d=a.$locale().relativeTime||s,h=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=h.length,p=0;p<f;p+=1){var m=h[p];m.d&&(c=r?n(e).diff(a,m.d,!0):a.diff(e,m.d,!0));var v=(t.rounding||Math.round)(Math.abs(c));if(l=c>0,v<=m.r||!m.r){v<=1&&p>0&&(m=h[p-1]);var k=d[m.l];o&&(v=o(""+v)),u="string"==typeof k?k.replace("%d",v):k(v,i,m.l,l);break}}if(i)return u;var g=l?d.future:d.past;return"function"==typeof g?g(u):g.replace("%s",u)},i.to=function(t,e){return a(t,e,this,!0)},i.from=function(t,e){return a(t,e,this)};var r=function(t){return t.$u?n.utc():n()};i.toNow=function(t){return this.to(r(this),t)},i.fromNow=function(t){return this.from(r(this),t)}}}))},"466d":function(t,e,n){"use strict";var i=n("c65b"),s=n("d784"),a=n("825a"),r=n("50c4"),o=n("577e"),c=n("1d80"),u=n("dc4a"),l=n("8aa5"),d=n("14c3");s("match",(function(t,e,n){return[function(e){var n=c(this),s=void 0==e?void 0:u(e,t);return s?i(s,e,n):new RegExp(e)[t](o(n))},function(t){var i=a(this),s=o(t),c=n(e,i,s);if(c.done)return c.value;if(!i.global)return d(i,s);var u=i.unicode;i.lastIndex=0;var h,f=[],p=0;while(null!==(h=d(i,s))){var m=o(h[0]);f[p]=m,""===m&&(i.lastIndex=l(s,r(i.lastIndex),u)),p++}return 0===p?null:f}]}))},"498a":function(t,e,n){"use strict";var i=n("23e7"),s=n("58a8").trim,a=n("c8d2");i({target:"String",proto:!0,forced:a("trim")},{trim:function(){return s(this)}})},"5a0c":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",s="second",a="minute",r="hour",o="day",c="week",u="month",l="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},k=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},g={s:k,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+k(i,2,"0")+":"+k(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,u),a=n-s<0,r=e.clone().add(i+(a?-1:1),u);return+(-(i+(n-s)/(a?s-r:r-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:d,w:c,d:o,D:h,h:r,m:a,s:s,ms:i,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},_="en",y={};y[_]=v;var j=function(t){return t instanceof S},b=function(t,e,n){var i;if(!t)return _;if("string"==typeof t)y[t]&&(i=t),e&&(y[t]=e,i=t);else{var s=t.name;y[s]=t,i=s}return!n&&i&&(_=i),i||!n&&_},$=function(t,e){if(j(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},w=g;w.l=b,w.i=j,w.w=function(t,e){return $(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function v(t){this.$L=b(t.locale,null,!0),this.parse(t)}var k=v.prototype;return k.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(p);if(i){var s=i[2]-1||0,a=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},k.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},k.$utils=function(){return w},k.isValid=function(){return!(this.$d.toString()===f)},k.isSame=function(t,e){var n=$(t);return this.startOf(e)<=n&&n<=this.endOf(e)},k.isAfter=function(t,e){return $(t)<this.startOf(e)},k.isBefore=function(t,e){return this.endOf(e)<$(t)},k.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},k.unix=function(){return Math.floor(this.valueOf()/1e3)},k.valueOf=function(){return this.$d.getTime()},k.startOf=function(t,e){var n=this,i=!!w.u(e)||e,l=w.p(t),f=function(t,e){var s=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?s:s.endOf(o)},p=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,k=this.$D,g="set"+(this.$u?"UTC":"");switch(l){case d:return i?f(1,0):f(31,11);case u:return i?f(1,v):f(0,v+1);case c:var _=this.$locale().weekStart||0,y=(m<_?m+7:m)-_;return f(i?k-y:k+(6-y),v);case o:case h:return p(g+"Hours",0);case r:return p(g+"Minutes",1);case a:return p(g+"Seconds",2);case s:return p(g+"Milliseconds",3);default:return this.clone()}},k.endOf=function(t){return this.startOf(t,!1)},k.$set=function(t,e){var n,c=w.p(t),l="set"+(this.$u?"UTC":""),f=(n={},n[o]=l+"Date",n[h]=l+"Date",n[u]=l+"Month",n[d]=l+"FullYear",n[r]=l+"Hours",n[a]=l+"Minutes",n[s]=l+"Seconds",n[i]=l+"Milliseconds",n)[c],p=c===o?this.$D+(e-this.$W):e;if(c===u||c===d){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},k.set=function(t,e){return this.clone().$set(t,e)},k.get=function(t){return this[w.p(t)]()},k.add=function(i,l){var h,f=this;i=Number(i);var p=w.p(l),m=function(t){var e=$(f);return w.w(e.date(e.date()+Math.round(t*i)),f)};if(p===u)return this.set(u,this.$M+i);if(p===d)return this.set(d,this.$y+i);if(p===o)return m(1);if(p===c)return m(7);var v=(h={},h[a]=e,h[r]=n,h[s]=t,h)[p]||1,k=this.$d.getTime()+i*v;return w.w(k,this)},k.subtract=function(t,e){return this.add(-1*t,e)},k.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),a=this.$H,r=this.$m,o=this.$M,c=n.weekdays,u=n.months,l=function(t,n,s,a){return t&&(t[n]||t(e,i))||s[n].substr(0,a)},d=function(t){return w.s(a%12||12,t,"0")},h=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:w.s(o+1,2,"0"),MMM:l(n.monthsShort,o,u,3),MMMM:l(u,o),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,c,2),ddd:l(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(a),HH:w.s(a,2,"0"),h:d(1),hh:d(2),a:h(a,r,!0),A:h(a,r,!1),m:String(r),mm:w.s(r,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:s};return i.replace(m,(function(t,e){return e||p[t]||s.replace(":","")}))},k.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},k.diff=function(i,h,f){var p,m=w.p(h),v=$(i),k=(v.utcOffset()-this.utcOffset())*e,g=this-v,_=w.m(this,v);return _=(p={},p[d]=_/12,p[u]=_,p[l]=_/3,p[c]=(g-k)/6048e5,p[o]=(g-k)/864e5,p[r]=g/n,p[a]=g/e,p[s]=g/t,p)[m]||g,f?_:w.a(_)},k.daysInMonth=function(){return this.endOf(u).$D},k.$locale=function(){return y[this.$L]},k.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},k.clone=function(){return w.w(this.$d,this)},k.toDate=function(){return new Date(this.valueOf())},k.toJSON=function(){return this.isValid()?this.toISOString():null},k.toISOString=function(){return this.$d.toISOString()},k.toString=function(){return this.$d.toUTCString()},v}(),M=S.prototype;return $.prototype=M,[["$ms",i],["$s",s],["$m",a],["$H",r],["$W",o],["$M",u],["$y",d],["$D",h]].forEach((function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),$.extend=function(t,e){return t.$i||(t(e,S,$),t.$i=!0),$},$.locale=b,$.isDayjs=j,$.unix=function(t){return $(1e3*t)},$.en=y[_],$.Ls=y,$.p={},$}))},"5ca7":function(t,e,n){},6398:function(t,e,n){},"976f":function(t,e,n){"use strict";n("5ca7")},a15b:function(t,e,n){"use strict";var i=n("23e7"),s=n("e330"),a=n("44ad"),r=n("fc6a"),o=n("a640"),c=s([].join),u=a!=Object,l=o("join",",");i({target:"Array",proto:!0,forced:u||!l},{join:function(t){return c(r(this),void 0===t?",":t)}})},a27f:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("41cb");function s(t){return Object(i["d"])().get("/api/summary/batch",{params:t})}},a471:function(t,e,n){!function(e,i){t.exports=i(n("5a0c"))}(0,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t),i={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,e){switch(e){case"W":return t+"周";default:return t+"日"}},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,e){var n=100*t+e;return n<600?"凌晨":n<900?"早上":n<1100?"上午":n<1300?"中午":n<1800?"下午":"晚上"}};return n.default.locale(i,null,!0),i}))},c8a91:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"f",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return a})),n.d(e,"g",(function(){return u}));var i=n("41cb");function s(){return Object(i["d"])({mute:!0}).get("/api/joke/recommended")}function a(t){return Object(i["d"])().post("/api/joke/share",t)}var r=function(t){return Object(i["b"])().get("/api/cms/post/jokes",{params:t})};function o(t){return Object(i["b"])().get("/api/cms/post/joke/".concat(t))}var c=function(t){return Object(i["b"])().put("/api/cms/post/joke/".concat(t,"/star"))};function u(t){return Object(i["b"])().put("/api/cms/post/joke/".concat(t,"/unstar"))}var l=function(t){return Object(i["b"])().delete("/api/cms/post/joke/".concat(t))}},c8d2:function(t,e,n){var i=n("5e77").PROPER,s=n("d039"),a=n("5899"),r="​᠎";t.exports=function(t){return s((function(){return!!a[t]()||r[t]()!==r||i&&a[t].name!==t}))}},ecfb:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"v-joke"},[t.id?n("div",{staticClass:"m-joke-single-container"},[n("div",{staticClass:"m-joke-goback"},[n("el-button",{staticClass:"u-back",attrs:{size:"mini",icon:"el-icon-arrow-left"},on:{click:t.goBack}},[t._v("返回列表")]),t._m(0)],1),n("el-row",{staticClass:"m-joke-list",attrs:{gutter:20}},[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"m-joke-item"},[n("joke-item",{attrs:{joke:t.joke,mode:"single"}})],1)])],1),n("Thx",{staticClass:"m-thx",attrs:{postId:t.id,postType:"joke",userId:t.user_id,adminBoxcoinEnable:!1,userBoxcoinEnable:!0}}),n("div",{staticClass:"m-single-comment"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("评论")]),n("Comment",{attrs:{id:t.id,category:"joke"}})],1)],1):n("div",{staticClass:"m-joke-list-container"},[n("div",{staticClass:"m-joke-search",attrs:{slot:"search-before"},slot:"search-before"},[n("el-input",{attrs:{placeholder:"请输入搜索内容"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[n("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("关键词")]),n("el-switch",{attrs:{slot:"append","inactive-value":0,"active-value":1,"inactive-text":"只看精选"},slot:"append",model:{value:t.star,callback:function(e){t.star=e},expression:"star"}})],1)],1),n("div",{staticClass:"m-joke-types"},[n("el-tabs",{model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[n("el-tab-pane",{attrs:{name:"all",label:"全部"}},[n("span",{attrs:{slot:"label"},slot:"label"},[n("i",{staticClass:"u-icon el-icon-menu",staticStyle:{"vertical-align":"0"}}),t._v("全部 ")])]),t._l(t.schoolmap,(function(e,i){return n("el-tab-pane",{key:i,attrs:{name:i}},[n("div",{staticStyle:{"min-width":"57px"},attrs:{slot:"label"},slot:"label"},[n("img",{staticClass:"u-icon",attrs:{src:t._f("showSchoolIcon")(i),alt:e}}),t._v(" "+t._s(e)+" ")])])}))],2)],1),n("joke-post",{attrs:{type:t.type}}),t.jokes&&t.jokes.length?n("el-row",{staticClass:"m-joke-list",attrs:{gutter:20}},t._l(t.jokes,(function(e){return n("el-col",{key:e.id,attrs:{span:24}},[n("div",{staticClass:"m-joke-item"},[n("joke-item",{attrs:{joke:e},on:{update:t.handleJokeUpdate}})],1)])})),1):n("el-alert",{attrs:{title:"没有找到相关条目",type:"info","show-icon":""}}),n("el-pagination",{staticClass:"m-joke-pagination",attrs:{background:"","page-size":t.per,"hide-on-single-page":!0,"current-page":t.page,layout:"total, prev, pager, next, jumper",total:t.total},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"current-change":t.skipTop}})],1)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"u-doc",attrs:{href:"/tool/23239",target:"_blank"}},[n("i",{staticClass:"el-icon-info"}),t._v("游戏内获取或发布骚话 ")])}],a=(n("ac1f"),n("841c"),n("b64b"),n("4e82"),n("d3b7"),n("159b"),n("d81d"),n("a15b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-joke-item"},[n("div",{staticClass:"u-content",class:"single"===t.mode?"on":"",on:{click:t.handleContent}},[t.joke.star?n("i",{staticClass:"u-star",class:t.joke.star?"on":"",attrs:{title:"精选"}},[t._v("★")]):t._e(),n("span",{staticClass:"u-sentence",domProps:{innerHTML:t._s(t.parse(t.joke.content))}})]),n("div",{staticClass:"u-misc"},[n("div",{staticClass:"u-op"},[n("span",{staticClass:"u-user"},[n("img",{attrs:{width:"24",height:"24",src:t._f("showAvatar")(t.user_avatar)}}),t.joke.user_id?n("a",{attrs:{href:t._f("authorLink")(t.joke.user_id),target:"_blank"}},[t._v(t._s(t.user_name))]):n("span",[t._v(t._s(t.joke.author||"匿名"))])]),n("el-link",{staticClass:"u-copy",attrs:{type:"primary",disabled:t.disabled},on:{click:function(e){return t.handleCopy(t.joke.content)}}},[n("i",{staticClass:"el-icon-document-copy"}),t._v(" 复制 ")]),"single"===t.mode&&(t.isAuthor||t.isEditor)?n("a",{staticClass:"u-edit el-link el-link--primary is-underline",attrs:{href:t.editLink("joke",t.joke.id),target:"_blank"}},[n("i",{staticClass:"el-icon-edit-outline"}),t._v(" 编辑 ")]):t._e(),t.isListPage?n("a",{staticClass:"u-like",class:{on:t.isLike},attrs:{title:"赞"},on:{click:t.addLike}},[n("i",{staticClass:"like-icon"},[t._v(t._s(t.isLike?"♥":"♡"))]),t._v("Like "),t.count?n("span",{staticClass:"like-count"},[t._v(t._s(t.count))]):t._e()]):t._e(),t.isEditor?[n("span",{staticClass:"el-link el-link--primary is-underline",on:{click:t.handleStar}},[n("i",{class:t.isStar?"el-icon-star-off":"el-icon-star-on"}),t._v(" "+t._s(t.isStar?"取消精选":"设为精选")+" ")]),n("span",{staticClass:"el-link el-link--primary is-underline u-delete",on:{click:t.handleDelete}},[n("i",{staticClass:"el-icon-delete"}),t._v(" 删除 ")])]:t._e()],2),n("div",{staticClass:"u-other"},[n("span",{staticClass:"u-date"},[n("i",{staticClass:"el-icon-date"}),t._v("  "),n("time",[t._v(t._s(t._f("dateFormat")(t.joke.created_at)))])])])])])}),r=[],o=n("506c"),c=n("fb92"),u=n("85e4"),l=n("c8a91"),d=n("c9d2"),h=n("9616"),f={name:"joke_item",props:["joke","mode"],data:function(){return{disabled:!1,isStar:this.joke.star,count:0,isLike:!1}},filters:{dateFormat:function(t){return Object(c["a"])(new Date(t))},showAvatar:function(t){return Object(u["showAvatar"])(t,24)},authorLink:u["authorLink"]},computed:{isListPage:function(){return"single"!==this.mode},isEditor:function(){return d["a"].isEditor()},user_avatar:function(){var t,e;return null===(t=this.joke)||void 0===t||null===(e=t.user_info)||void 0===e?void 0:e.user_avatar},user_name:function(){var t,e;return null===(t=this.joke)||void 0===t||null===(e=t.user_info)||void 0===e?void 0:e.display_name},isAuthor:function(){var t=d["a"].getInfo();return t.uid===this.joke.user_id}},methods:{parse:function(t){var e=new o["a"](t);return e.code},handleCopy:function(t){var e=this;this.disabled=!0,navigator.clipboard.writeText(t).then((function(){e.copyLabel="已复制",setTimeout((function(){e.copyLabel="复制",e.disabled=!1}),3e3)}))},editLink:u["editLink"],addLike:function(){if(!this.isLike){var t;if(this.count++,!this.isLike)Object(h["b"])("joke",null===(t=this.joke)||void 0===t?void 0:t.id,"likes");this.isLike=!0}},handleStar:function(){var t=this;this.isStar?this.unStar():Object(l["f"])(this.joke.id).then((function(){t.$notify({title:"成功",message:"加精成功",type:"success"}),t.isStar=!0,t.joke.star=!0,t.$forceUpdate()}))},unStar:function(){var t=this;Object(l["g"])(this.joke.id).then((function(){t.$notify({title:"成功",message:"取消加精成功",type:"success"}),t.isStar=!1,t.joke.star=!1,t.$forceUpdate()}))},handleDelete:function(){var t=this;this.$confirm("此操作将会删除该表情，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(l["e"])(t.joke.id).then((function(){t.$notify({title:"成功",message:"删除成功",type:"success"}),"single"===t.mode?t.$router.go(-1):t.$emit("update")}))}))},handleContent:function(){this.$router.push("/joke/".concat(this.joke.id))}}},p=f,m=n("2877"),v=Object(m["a"])(p,a,r,!1,null,null,null),k=v.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-joke-publish"},[n("el-input",{attrs:{type:"textarea",rows:4,placeholder:"快速发布一条骚话",id:"textarea",maxlength:128,minlength:1,"show-word-limit":""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),n("div",{staticClass:"u-actions"},[n("div",[n("joke-emotion",{on:{emotion:t.insertVariable}}),n("el-select",{staticClass:"u-type",attrs:{size:"small",placeholder:"请选择门派"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},t._l(t.schoolmap,(function(e,i){return n("el-option",{key:i,attrs:{value:i,label:e}},[n("div",{staticStyle:{display:"flex","align-items":"center"}},[n("img",{staticClass:"u-icon",staticStyle:{"margin-right":"20px"},attrs:{width:"24",height:"24",src:t._f("showSchoolIcon")(i),alt:e}}),t._v(" "+t._s(e)+" ")])])})),1)],1),n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-position"},on:{click:t.publish}},[t._v("提交")])],1)],1)},_=[],y=n("1da1"),j=(n("498a"),n("466d"),n("4de4"),n("caad"),n("2532"),n("5319"),n("96cf"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-popover",{attrs:{"popper-class":"m-joke-popover",placement:"top",width:"500",offset:-200},model:{value:t.showPop,callback:function(e){t.showPop=e},expression:"showPop"}},[n("Emotion",{staticClass:"m-publish-joke-emotion",on:{selected:t.handleEmotionSelect}}),n("span",{staticClass:"m-publish-joke-button",staticStyle:{cursor:"pointer"},attrs:{slot:"reference",title:"选择表情"},slot:"reference"},[t._v("😀插入表情")])],1)}),b=[],$=n("c840"),w={name:"joke_post",components:{Emotion:$["a"]},data:function(){return{showPop:!1}},methods:{handleEmotionSelect:function(t){this.$emit("emotion",t),this.showPop=!1}}},S=w,M=(n("ff94"),Object(m["a"])(S,j,b,!1,null,null,null)),C=M.exports,x=n("0608"),L=n("33a5"),O=n("65c2"),D={components:{"joke-emotion":C},data:function(){return{content:"",type:"0",schoolmap:L,processing:!1}},computed:{isLogin:function(){return d["a"].isLogin()}},methods:{insertVariable:function(t){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function n(){var i,s,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=document.querySelector("#textarea"),!i.selectionStart&&0!==i.selectionStart){n.next=11;break}return s=i.selectionStart,a=i.selectionEnd,e.content=i.value.substring(0,s)+t+i.value.substring(a,i.value.length),n.next=7,e.$nextTick();case 7:i.focus(),i.setSelectionRange(a+t.length,a+t.length),n.next=12;break;case 11:e.content=t;case 12:case"end":return n.stop()}}),n)})))()},publish:function(){var t=this;if(this.isLogin){if(!this.check())return;this.processing=!0,Object(l["d"])({type:"all"===this.type?"0":this.type,content:this.content}).then((function(e){var n;null===e||void 0===e||null===(n=e.data)||void 0===n||n.data;t.$message({message:"发布成功,请等待审核",type:"success"}),t.content=""})).finally((function(){t.processing=!1}))}else d["a"].toLogin()},check:function(){var t,e=Object.keys(x),n=this.content.trim(),i=/(#[\u4e00-\u9fa5]{1})/g,s=/(#[\u4e00-\u9fa5]{2})/g,a=/(#[\u4e00-\u9fa5]{3})/g;if(!n.length)return this.$notify({title:"错误",message:"内容不能为空",type:"error"}),!1;var r=n.match(i)?n.match(i).filter((function(t){return e.includes(t)})):[];r.forEach((function(t){return n.replace(t,"")}));var o=n.match(s)?n.match(s).filter((function(t){return e.includes(t)})):[];o.forEach((function(t){return n.replace(t,"")}));var c=n.match(a)?n.match(a).filter((function(t){return e.includes(t)})):[];c.forEach((function(t){return n.replace(t,"")}));var u=r.length+o.length+c.length;if(this.contentLength=u,u>10)return this.$notify({title:"错误",message:"表情个数不能超过10个",type:"error"}),!1;var l=(null===(t=n.match(/[^\x00-\xff]/g))||void 0===t?void 0:t.length)||0;return!(2*l+(n.length-l)>128)||(this.$notify({title:"错误",message:"内容长度不能超过128个字符",type:"error"}),!1)}},filters:{showSchoolIcon:function(t){return O["__imgPath"]+"image/school/"+t+".png"}}},Y=D,T=Object(m["a"])(Y,g,_,!1,null,null,null),E=T.exports,H=n("23d8"),I=n("a27f"),A={name:"Joke",components:{"joke-item":k,Comment:H["a"],"joke-post":E},data:function(){return{loading:!1,schoolmap:L,sortedEmotions:[],type:"all",star:0,search:"",per:10,page:1,total:0,jokes:[],joke:""}},computed:{id:function(){return this.$route.params.id},params:function(){return{per:~~this.per,page:~~this.page,type:"all"==this.type?"":this.type,search:this.search,star:this.star}},keys:function(){return[this.id,this.search,this.type,this.star,this.page,this.per]},reset_keys:function(){return[this.search,this.type,this.star]},user_id:function(){var t;return(null===(t=this.joke)||void 0===t?void 0:t.user_id)||0}},filters:{showSchoolIcon:function(t){return O["__imgPath"]+"image/school/"+t+".png"}},methods:{sortEmotion:function(){var t=this,e=Object.keys(x);e.sort((function(t,e){return t.localeCompare(e)})),e.forEach((function(e){var n={key:e,value:x[e]};t.sortedEmotions.push(n)}))},loadList:function(){var t=this;this.loading=!0,Object(l["b"])(this.params).then((function(e){var n,i,s,a;t.jokes=null===e||void 0===e||null===(n=e.data)||void 0===n||null===(i=n.data)||void 0===i?void 0:i.list,t.total=null===e||void 0===e||null===(s=e.data)||void 0===s||null===(a=s.data)||void 0===a?void 0:a.total,t.loadLike()})).finally((function(){t.loading=!1}))},loadSingle:function(){var t=this;this.loading=!0,Object(l["a"])(this.id).then((function(e){var n;t.joke=null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.data})).finally((function(){t.loading=!1}))},handleJokeUpdate:function(){this.loadList()},init:function(){this.id?this.loadSingle():this.loadList()},goBack:function(){this.$router.push("/joke")},skipTop:function(){window.scrollTo(0,0)},loadLike:function(){var t=this;if(this.jokes&&this.jokes.length){var e=this.jokes.map((function(t){return"joke-"+t.id}));e=e.join(",");var n={post_type:"joke",post_action:"likes",id:e};Object(I["a"])(n).then((function(e){var n=e.data.data;Object.keys(n).length&&t.jokes.forEach((function(e){var i;t.$set(e,"count",null===n||void 0===n||null===(i=n["joke-"+e.id])||void 0===i?void 0:i.likes)}))}))}}},watch:{keys:{deep:!0,handler:function(){this.init()}},reset_keys:{deep:!0,handler:function(){this.page=1}},search:function(){this.type="all"},jokes:{deep:!0,handler:function(){this.loadLike()}}},created:function(){this.sortEmotion(),this.init()}},P=A,J=(n("976f"),Object(m["a"])(P,i,s,!1,null,null,null));e["default"]=J.exports},fb92:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));n("99af");var i=n("5a0c"),s=n.n(i),a=n("4208");function r(t){return s()().from(s()(t))}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=t.getFullYear(),s=t.getMonth()+1,a=t.getDate(),r=n?"".concat(i).concat(e).concat(c(s)).concat(e).concat(c(a)):"".concat(i).concat(e).concat(s).concat(e).concat(a);return r}function c(t){return t<10?"0"+t:t}n("a471"),s.a.locale("zh-cn"),s.a.extend(a)},ff94:function(t,e,n){"use strict";n("6398")}}]);
//# sourceMappingURL=chunk-ccc4ed1e.dc8d4024.js.map