(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-244eac79"],{"1ce6":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-collection-single"},[t.collection?[r("div",{staticClass:"m-collection-detail-content"},[r("div",{staticClass:"m-collection-detail-header"},[r("header",{staticClass:"m-single-header"},[r("div",{staticClass:"m-single-title"},[r("span",{staticClass:"u-title u-sub-block",attrs:{href:t.url,title:t.collection.title}},[t.collection.public?t._e():r("i",{staticClass:"u-private el-icon-lock",attrs:{title:"仅自己可见"}}),r("span",{staticClass:"u-title-text"},[t._v(t._s(t.collection.title))])])]),r("div",{staticClass:"m-single-info"},[r("div",{staticClass:"u-author u-sub-block"},[r("i",{staticClass:"u-author-icon"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 16",width:"12",height:"16","aria-hidden":"true",fill:"#444","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M12 14.002a.998.998 0 01-.998.998H1.001A1 1 0 010 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"}})])]),r("a",{staticClass:"u-name",attrs:{href:t._f("authorLink")(t.collection.user_id)}},[t._v(t._s(t.collection.user_nickname))])]),r("span",{staticClass:"u-podate u-sub-block",attrs:{title:"发布日期"}},[r("i",{staticClass:"u-icon el-icon-date"}),r("time",[t._v(t._s(t.dateFormat(t.collection.created)))])]),r("span",{staticClass:"u-modate u-sub-block",attrs:{title:"最后更新"}},[r("i",{staticClass:"u-icon el-icon-refresh"}),r("time",[t._v(t._s(t.dateFormat(t.collection.updated)))])]),r("span",{staticClass:"u-views u-sub-block"},[r("i",{staticClass:"u-icon el-icon-view"}),t._v(" "+t._s(t.views)+" ")]),t.canEdit?r("a",{staticClass:"u-edit u-sub-block",attrs:{href:t.edit_link}},[r("i",{staticClass:"u-icon-edit el-icon-edit-outline"}),r("span",[t._v("编辑")])]):t._e(),t.canEdit?r("a",{staticClass:"u-delete u-sub-block",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.delete_handle(e,t.collection.id)}}},[r("i",{staticClass:"u-icon-remove el-icon-delete"}),r("span",[t._v("删除")])]):t._e()])])]),t.collection.description?[r("el-divider",{attrs:{"content-position":"left"}},[r("i",{staticClass:"el-icon-collection"}),t._v(" 小册简介 ")]),r("div",{staticClass:"u-description"},[r("p",{domProps:{innerHTML:t._s(t.resolveImagePath(t.collection.description))}})])]:t._e(),t.collection.posts&&t.collection.posts.length?[r("el-divider",{attrs:{"content-position":"left"}},[r("i",{staticClass:"el-icon-folder"}),t._v(" 小册文章 ")]),r("ul",{staticClass:"u-list"},t._l(t.collection.posts,(function(e,n){return r("li",{key:n,staticClass:"u-item"},[r("span",{staticClass:"u-item-order"},[t._v(t._s(n+1)+".")]),"custom"===e.type?r("span",{staticClass:"u-item-link"},[r("i",{staticClass:"el-icon-link"}),t._v("站外链接 ")]):t._e(),"custom"!==e.type&&e.user_id?r("a",{staticClass:"u-item-author",attrs:{target:"_blank",href:t._f("authorLink")(e.user_id)}},[r("img",{staticClass:"u-avatar",attrs:{src:t.showAvatar(e.user_avatar)}}),r("span",{staticClass:"u-nickname",domProps:{textContent:t._s(e.user_nickname)}}),r("span",{staticClass:"u-div"},[t._v("/")])]):t._e(),r("a",{staticClass:"u-item-title",attrs:{target:"_blank",href:"custom"===e.type?e.url:t.getLink(e.type,e.id)}},[t._v(t._s(e.title))]),e.updated?r("time",{staticClass:"u-updated",domProps:{textContent:t._s("最后更新于 "+t.dateFormat(e.updated))}}):t._e()])})),0)]:t._e()],2),r("Thx",{staticClass:"m-thx",attrs:{postId:t.id,postType:"collection",postTitle:t.title,userId:t.author_id,adminBoxcoinEnable:!0,userBoxcoinEnable:!0,client:"all"}}),t.id?r("div",{staticClass:"m-comments"},[r("el-divider",{attrs:{"content-position":"left"}},[r("span",{staticStyle:{color:"#999999"}},[r("i",{staticClass:"el-icon-chat-line-square"}),t._v(" 讨论 ")])]),r("jx3-comment",{attrs:{id:t.id,category:"collection"}})],1):t._e()]:r("el-alert",{attrs:{title:"该剑三小册不存在或已被删除",type:"info",center:"","show-icon":"",closable:!1}})],2)},i=[],o=(r("d3b7"),r("23d8"));const a=Object.freeze({PRIVATE:0,PUBLIC:1,all(){return[this.PRIVATE,this.PUBLIC]}});var c=a,l=r("73cd"),s=r("fb92"),u=r("85e4"),d=r("c9d2"),f=r("9616"),p={name:"CollectionSingle",props:[],components:{"jx3-comment":o["a"]},data:function(){return{collection:"",publish:c,url:location.href,views:0,loading:!1}},computed:{edit_link:function(){return Object(u["editLink"])("collection",this.collection.id)},id:function(){var t;return null===(t=this.collection)||void 0===t?void 0:t.id},author_id:function(){var t;return(null===(t=this.collection)||void 0===t?void 0:t.user_id)||0},canEdit:function(){return this.author_id==d["a"].getInfo().uid||d["a"].isEditor()},title:function(){return this.collection.title}},watch:{"$route.params.id":{immediate:!0,handler:function(t){t&&(this.loadData(t),this.execStat(t))}}},methods:{getThumbnail:u["getThumbnail"],getLink:u["getLink"],getTypeLabel:u["getTypeLabel"],showAvatar:u["showAvatar"],resolveImagePath:u["resolveImagePath"],dateFormat:function(t){return Object(s["a"])(new Date(1e3*t))},delete_handle:function(t,e){var r=this;t.preventDefault(),this.$confirm("确认是否删除该剑三小册？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(l["c"])(e).then((function(t){r.$message.success(t.message),r.$router.push({name:"collection"})}))}))},loadData:function(t){var e=this;this.loading=!0,Object(l["a"])(t,{post_extra:1}).then((function(t){var r,n;e.collection=(null===t||void 0===t||null===(r=t.data)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.collection)||{},e.$store.state.user_id=e.collection.user_id})).finally((function(){e.loading=!1}))},execStat:function(t){var e=this;Object(f["b"])("collection",t),Object(f["a"])("collection",t).then((function(t){e.views=t.data.views||0}))}},filters:{authorLink:u["authorLink"]},created:function(){},mounted:function(){}},m=p,h=(r("26ff"),r("2877")),y=Object(h["a"])(m,n,i,!1,null,"ccc03c4c",null);e["default"]=y.exports},"26ff":function(t,e,r){"use strict";r("3b90")},"3b90":function(t,e,r){},4127:function(t,e,r){"use strict";var n=r("d233"),i=r("b313"),o={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},a=Array.isArray,c=Array.prototype.push,l=function(t,e){c.apply(t,a(e)?e:[e])},s=Date.prototype.toISOString,u={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(t){return s.call(t)},skipNulls:!1,strictNullHandling:!1},d=function t(e,r,i,o,c,s,d,f,p,m,h,y){var v=e;if("function"===typeof d?v=d(r,v):v instanceof Date&&(v=m(v)),null===v){if(o)return s&&!y?s(r,u.encoder):r;v=""}if("string"===typeof v||"number"===typeof v||"boolean"===typeof v||n.isBuffer(v)){if(s){var b=y?r:s(r,u.encoder);return[h(b)+"="+h(s(v,u.encoder))]}return[h(r)+"="+h(String(v))]}var _,g=[];if("undefined"===typeof v)return g;if(a(d))_=d;else{var w=Object.keys(v);_=f?w.sort(f):w}for(var j=0;j<_.length;++j){var C=_[j];c&&null===v[C]||(a(v)?l(g,t(v[C],i(r,C),i,o,c,s,d,f,p,m,h,y)):l(g,t(v[C],r+(p?"."+C:"["+C+"]"),i,o,c,s,d,f,p,m,h,y)))}return g};t.exports=function(t,e){var r=t,c=e?n.assign({},e):{};if(null!==c.encoder&&"undefined"!==typeof c.encoder&&"function"!==typeof c.encoder)throw new TypeError("Encoder has to be a function.");var s="undefined"===typeof c.delimiter?u.delimiter:c.delimiter,f="boolean"===typeof c.strictNullHandling?c.strictNullHandling:u.strictNullHandling,p="boolean"===typeof c.skipNulls?c.skipNulls:u.skipNulls,m="boolean"===typeof c.encode?c.encode:u.encode,h="function"===typeof c.encoder?c.encoder:u.encoder,y="function"===typeof c.sort?c.sort:null,v="undefined"!==typeof c.allowDots&&c.allowDots,b="function"===typeof c.serializeDate?c.serializeDate:u.serializeDate,_="boolean"===typeof c.encodeValuesOnly?c.encodeValuesOnly:u.encodeValuesOnly;if("undefined"===typeof c.format)c.format=i["default"];else if(!Object.prototype.hasOwnProperty.call(i.formatters,c.format))throw new TypeError("Unknown format option provided.");var g,w,j=i.formatters[c.format];"function"===typeof c.filter?(w=c.filter,r=w("",r)):a(c.filter)&&(w=c.filter,g=w);var C,O=[];if("object"!==typeof r||null===r)return"";C=c.arrayFormat in o?c.arrayFormat:"indices"in c?c.indices?"indices":"repeat":"indices";var k=o[C];g||(g=Object.keys(r)),y&&g.sort(y);for(var x=0;x<g.length;++x){var L=g[x];p&&null===r[L]||l(O,d(r[L],L,k,f,p,m?h:null,w,y,v,b,j,_))}var A=O.join(s),Y=!0===c.addQueryPrefix?"?":"";return A.length>0?Y+A:""}},4208:function(t,e,r){!function(e,r){t.exports=r()}(0,(function(){"use strict";return function(t,e,r){t=t||{};var n=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(t,e,r,i){return n.fromToBase(t,e,r,i)}r.en.relativeTime=i,n.fromToBase=function(e,n,o,a,c){for(var l,s,u,d=o.$locale().relativeTime||i,f=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],p=f.length,m=0;m<p;m+=1){var h=f[m];h.d&&(l=a?r(e).diff(o,h.d,!0):o.diff(e,h.d,!0));var y=(t.rounding||Math.round)(Math.abs(l));if(u=l>0,y<=h.r||!h.r){y<=1&&m>0&&(h=f[m-1]);var v=d[h.l];c&&(y=c(""+y)),s="string"==typeof v?v.replace("%d",y):v(y,n,h.l,u);break}}if(n)return s;var b=u?d.future:d.past;return"function"==typeof b?b(s):b.replace("%s",s)},n.to=function(t,e){return o(t,e,this,!0)},n.from=function(t,e){return o(t,e,this)};var a=function(t){return t.$u?r.utc():r()};n.toNow=function(t){return this.to(a(this),t)},n.fromNow=function(t){return this.from(a(this),t)}}}))},4328:function(t,e,r){"use strict";var n=r("4127"),i=r("9e6a"),o=r("b313");t.exports={formats:o,parse:i,stringify:n}},"73cd":function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return l}));var n=r("41cb"),i=r("4328"),o=r.n(i);function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(n["b"])()({method:"GET",url:"/api/post/collection/".concat(t),params:e})}function c(t){return Object(n["b"])()({method:"GET",url:"/api/post/collections",params:t})}function l(t){return Object(n["b"])()({method:"PUT",url:"/api/post/collection/remove",data:o.a.stringify({id:t})})}},"9e6a":function(t,e,r){"use strict";var n=r("d233"),i=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(t,e){for(var r={},n=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,a=e.parameterLimit===1/0?void 0:e.parameterLimit,c=n.split(e.delimiter,a),l=0;l<c.length;++l){var s,u,d=c[l],f=d.indexOf("]="),p=-1===f?d.indexOf("="):f+1;-1===p?(s=e.decoder(d,o.decoder),u=e.strictNullHandling?null:""):(s=e.decoder(d.slice(0,p),o.decoder),u=e.decoder(d.slice(p+1),o.decoder)),i.call(r,s)?r[s]=[].concat(r[s]).concat(u):r[s]=u}return r},c=function(t,e,r){for(var n=e,i=t.length-1;i>=0;--i){var o,a=t[i];if("[]"===a&&r.parseArrays)o=[].concat(n);else{o=r.plainObjects?Object.create(null):{};var c="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,l=parseInt(c,10);r.parseArrays||""!==c?!isNaN(l)&&a!==c&&String(l)===c&&l>=0&&r.parseArrays&&l<=r.arrayLimit?(o=[],o[l]=n):"__proto__"!==c&&(o[c]=n):o={0:n}}n=o}return n},l=function(t,e,r){if(t){var n=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,o=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,l=o.exec(n),s=l?n.slice(0,l.index):n,u=[];if(s){if(!r.plainObjects&&i.call(Object.prototype,s)&&!r.allowPrototypes)return;u.push(s)}var d=0;while(null!==(l=a.exec(n))&&d<r.depth){if(d+=1,!r.plainObjects&&i.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+n.slice(l.index)+"]"),c(u,e,r)}};t.exports=function(t,e){var r=e?n.assign({},e):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!==typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"===typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:o.delimiter,r.depth="number"===typeof r.depth?r.depth:o.depth,r.arrayLimit="number"===typeof r.arrayLimit?r.arrayLimit:o.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"===typeof r.decoder?r.decoder:o.decoder,r.allowDots="boolean"===typeof r.allowDots?r.allowDots:o.allowDots,r.plainObjects="boolean"===typeof r.plainObjects?r.plainObjects:o.plainObjects,r.allowPrototypes="boolean"===typeof r.allowPrototypes?r.allowPrototypes:o.allowPrototypes,r.parameterLimit="number"===typeof r.parameterLimit?r.parameterLimit:o.parameterLimit,r.strictNullHandling="boolean"===typeof r.strictNullHandling?r.strictNullHandling:o.strictNullHandling,""===t||null===t||"undefined"===typeof t)return r.plainObjects?Object.create(null):{};for(var i="string"===typeof t?a(t,r):t,c=r.plainObjects?Object.create(null):{},s=Object.keys(i),u=0;u<s.length;++u){var d=s[u],f=l(d,i[d],r);c=n.merge(c,f,r)}return n.compact(c)}},a471:function(t,e,r){!function(e,n){t.exports=n(r("5a0c"))}(0,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=e(t),n={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,e){return"W"===e?t+"周":t+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,e){var r=100*t+e;return r<600?"凌晨":r<900?"早上":r<1100?"上午":r<1300?"中午":r<1800?"下午":"晚上"}};return r.default.locale(n,null,!0),n}))},b313:function(t,e,r){"use strict";var n=String.prototype.replace,i=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return n.call(t,i,"+")},RFC3986:function(t){return String(t)}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},d233:function(t,e,r){"use strict";var n=Object.prototype.hasOwnProperty,i=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),o=function(t){var e;while(t.length){var r=t.pop();if(e=r.obj[r.prop],Array.isArray(e)){for(var n=[],i=0;i<e.length;++i)"undefined"!==typeof e[i]&&n.push(e[i]);r.obj[r.prop]=n}}return e},a=function(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},n=0;n<t.length;++n)"undefined"!==typeof t[n]&&(r[n]=t[n]);return r},c=function t(e,r,i){if(!r)return e;if("object"!==typeof r){if(Array.isArray(e))e.push(r);else{if(!e||"object"!==typeof e)return[e,r];(i&&(i.plainObjects||i.allowPrototypes)||!n.call(Object.prototype,r))&&(e[r]=!0)}return e}if(!e||"object"!==typeof e)return[e].concat(r);var o=e;return Array.isArray(e)&&!Array.isArray(r)&&(o=a(e,i)),Array.isArray(e)&&Array.isArray(r)?(r.forEach((function(r,o){if(n.call(e,o)){var a=e[o];a&&"object"===typeof a&&r&&"object"===typeof r?e[o]=t(a,r,i):e.push(r)}else e[o]=r})),e):Object.keys(r).reduce((function(e,o){var a=r[o];return n.call(e,o)?e[o]=t(e[o],a,i):e[o]=a,e}),o)},l=function(t,e){return Object.keys(e).reduce((function(t,r){return t[r]=e[r],t}),t)},s=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},u=function(t){if(0===t.length)return t;for(var e="string"===typeof t?t:String(t),r="",n=0;n<e.length;++n){var o=e.charCodeAt(n);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?r+=e.charAt(n):o<128?r+=i[o]:o<2048?r+=i[192|o>>6]+i[128|63&o]:o<55296||o>=57344?r+=i[224|o>>12]+i[128|o>>6&63]+i[128|63&o]:(n+=1,o=65536+((1023&o)<<10|1023&e.charCodeAt(n)),r+=i[240|o>>18]+i[128|o>>12&63]+i[128|o>>6&63]+i[128|63&o])}return r},d=function(t){for(var e=[{obj:{o:t},prop:"o"}],r=[],n=0;n<e.length;++n)for(var i=e[n],a=i.obj[i.prop],c=Object.keys(a),l=0;l<c.length;++l){var s=c[l],u=a[s];"object"===typeof u&&null!==u&&-1===r.indexOf(u)&&(e.push({obj:a,prop:s}),r.push(u))}return o(e)},f=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},p=function(t){return null!==t&&"undefined"!==typeof t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))};t.exports={arrayToObject:a,assign:l,compact:d,decode:s,encode:u,isBuffer:p,isRegExp:f,merge:c}},fb92:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return a}));r("99af");var n=r("5a0c"),i=r.n(n),o=r("4208");function a(t){return i()().from(i()(t))}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=t.getFullYear(),i=t.getMonth()+1,o=t.getDate(),a=r?"".concat(n).concat(e).concat(l(i)).concat(e).concat(l(o)):"".concat(n).concat(e).concat(i).concat(e).concat(o);return a}function l(t){return t<10?"0"+t:t}r("a471"),i.a.locale("zh-cn"),i.a.extend(o)}}]);
//# sourceMappingURL=chunk-244eac79.cc1c13aa.js.map