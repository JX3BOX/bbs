(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e5bf6300"],{"04d1":function(e,t,a){var s=a("342f"),r=s.match(/firefox\/(\d+)/i);e.exports=!!r&&+r[1]},"4e82":function(e,t,a){"use strict";var s=a("23e7"),r=a("e330"),n=a("59ed"),i=a("7b0b"),o=a("07fa"),l=a("577e"),c=a("d039"),u=a("addb"),d=a("a640"),p=a("04d1"),m=a("d998"),h=a("2d00"),_=a("512ce"),g=[],f=r(g.sort),v=r(g.push),b=c((function(){g.sort(void 0)})),y=c((function(){g.sort(null)})),w=d("sort"),k=!c((function(){if(h)return h<70;if(!(p&&p>3)){if(m)return!0;if(_)return _<603;var e,t,a,s,r="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(s=0;s<47;s++)g.push({k:t+s,v:a})}for(g.sort((function(e,t){return t.v-e.v})),s=0;s<g.length;s++)t=g[s].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}})),I=b||!y||!w||!k,S=function(e){return function(t,a){return void 0===a?-1:void 0===t?1:void 0!==e?+e(t,a)||0:l(t)>l(a)?1:-1}};s({target:"Array",proto:!0,forced:I},{sort:function(e){void 0!==e&&n(e);var t=i(this);if(k)return void 0===e?f(t):f(t,e);var a,s,r=[],l=o(t);for(s=0;s<l;s++)s in t&&v(r,t[s]);u(r,S(e)),a=r.length,s=0;while(s<a)t[s]=r[s++];while(s<l)delete t[s++];return t}})},"512ce":function(e,t,a){var s=a("342f"),r=s.match(/AppleWebKit\/(\d+)\./);e.exports=!!r&&+r[1]},"7a12":function(e,t,a){"use strict";a("cb03")},a3d0:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"v-namespace"},[a("div",{key:"namespace-search",staticClass:"m-archive-search m-namespace-search",attrs:{slot:"search-before"},slot:"search-before"},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入搜索内容"},model:{value:e.search,callback:function(t){e.search="string"===typeof t?t.trim():t},expression:"search"}},[a("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("关键词")]),a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1),a("el-tabs",{staticClass:"m-namespace-tab",model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[a("el-tab-pane",{attrs:{label:"全部",name:"all"}}),e._l(e.types,(function(e){return a("el-tab-pane",{key:e.value,attrs:{label:e.label,name:e.value}})}))],2),e.query?a("el-alert",{staticClass:"m-namespace-warning",attrs:{type:"warning","show-icon":""}},[a("span",{attrs:{slot:"title"},slot:"title"},[a("b",[e._v(e._s(e.query))]),e._v(" 铭牌不存在或正在审核中 ")])]):e._e(),a("div",{staticClass:"m-namespace-filter"},[a("div",{staticClass:"m-namespace-add"},[a("a",{staticClass:"u-publish el-button el-button--primary el-button--small",attrs:{href:e.publish_link}},[e._v("+ 注册铭牌")]),e._m(0),a("div",{staticClass:"m-namespace-total"},[e._v(" 当前共 "),a("b",[e._v(e._s(e.total))]),e._v("个铭牌 ")])]),a("div",{staticClass:"m-namespace-order"},[a("orderBy",{staticClass:"u-item",on:{filter:e.changeOrder}})],1)]),e.list?a("div",{staticClass:"m-namespace-list"},e._l(e.list,(function(e,t){return a("div",{key:t,staticClass:"u-namespace"},[a("namespace-item",{attrs:{data:e}})],1)})),0):a("div",{staticClass:"m-namespace-null"},[a("el-alert",{attrs:{title:"没有相关条目",type:"info","show-icon":""}})],1),a("div",{staticClass:"m-namespace-pages"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next,jumper","hide-on-single-page":!0,"page-size":e.per,total:e.total,"current-page":e.page},on:{"update:currentPage":function(t){e.page=t},"update:current-page":function(t){e.page=t}}})],1)],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"u-publish el-button el-button--primary el-button--small",attrs:{href:"/publish/#/bucket/namespace"}},[a("span",{staticClass:"el-icon-receiving"}),e._v(" 我的铭牌 ")])}],n=(a("ac1f"),a("841c"),a("4e82"),a("d3b7"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"m-namespace-item",on:{click:function(t){return e.goNamespace(e.namespace.link)}}},[a("h5",{staticClass:"u-title"},[a("a",{attrs:{href:e.namespace.link,target:"_blank"},on:{click:function(e){e.stopPropagation()}}},[a("i",{staticClass:"u-icon el-icon-postcard"}),e._v(e._s(e.namespace.key||"未知")+" "),a("span",{staticClass:"u-preview"},[e._v("剑网3.com/"+e._s(e.namespace.key))])]),e.isMyNamespace(e.namespace.uid)?a("i",{staticClass:"u-my"},[e._v("由我创建的")]):e._e()]),a("p",{staticClass:"u-desc"},[e._v(e._s(e.namespace.desc||e.namespace.key||"未知"))]),a("div",{staticClass:"u-misc"},[a("span",{staticClass:"u-author"},[a("i",{staticClass:"el-icon-user"}),a("a",{attrs:{href:e._f("authorLink")(e.namespace.uid),target:"_blank"},on:{click:function(e){e.stopPropagation()}}},[e._v(" "+e._s(e.namespace.user.nickname||"匿名"))])]),a("time",{staticClass:"u-time"},[a("i",{staticClass:"el-icon-date"}),e._v(" "+e._s(e._f("dataFormat")(e.namespace.created)))])])])}),i=[],o=a("85e4"),l=a("e4f1"),c=a("c9d2"),u={name:"namespaceItem",props:["data"],data:function(){return{uid:c["a"].getInfo().uid}},computed:{namespace:function(){return this.data}},filters:{authorLink:o["authorLink"],dataFormat:function(e){return e&&Object(l["a"])(1e3*~~e)||"-"}},methods:{isMyNamespace:function(e){return this.uid&&e==this.uid},goNamespace:function(e){window.open(e,"_blank")}},mounted:function(){}},d=u,p=a("2877"),m=Object(p["a"])(d,n,i,!1,null,null,null),h=m.exports,_=a("41cb");function g(e){return Object(_["b"])().get("/api/namespaces",{params:e,headers:{Accept:"application/prs.helper.v2+json"}})}var f={name:"Namespace",props:[],data:function(){return{type:"all",types:[{label:"玩家",value:"player"},{label:"团队",value:"team"},{label:"系统",value:"system"},{label:"自定义",value:"custom"}],list:"",per:24,total:1,page:1,order:"update",search:"",query:"",loading:!1}},computed:{params:function(){var e={key:this.search,source_type:"all"==this.type?"":this.type,page:this.page,limit:this.per};return"podate"==this.order?e.sort={created:0}:e.sort={updated:1},e},publish_link:function(){return Object(o["publishLink"])("namespace")},buy_link:function(){return"/vip/namespace?from=bbs_namespace"}},methods:{loadNamespaceList:function(){var e=this;this.loading=!0,g(this.params).then((function(t){e.list=t.data.data.data||{},e.total=t.data.data.total})).finally((function(){e.loading=!1}))},changeOrder:function(e){this.order=e.val}},watch:{type:function(){this.page=1},params:{deep:!0,immediate:!0,handler:function(e){this.query="",this.loadNamespaceList()}}},filters:{},created:function(){this.query=this.$route.query.namespace},components:{"namespace-item":h}},v=f,b=(a("7a12"),Object(p["a"])(v,s,r,!1,null,null,null));t["default"]=b.exports},c9d2:function(e,t,a){"use strict";var s=a("85e4"),r=a("65c2"),n=a("c5d8"),i=a("c7b3"),o=a.n(i);function l(e){return console.log(e.response),Promise.reject(e)}function c(e,t){e["interceptors"]["response"].use((function(e){return e.data.code?Promise.reject(e):e}),(function(e){return l(e)}))}function u(e,t){e["interceptors"]["response"].use((function(e){return e.data.code?Promise.reject(e):e}),(function(e){return l(e)}))}function d(e){let t=e&&e.domain||r["__cms"],a={withCredentials:!0,auth:{username:localStorage&&localStorage.getItem("token")||"",password:"cms common request"},baseURL:t,headers:{}};const s=o.a.create(a);return u(s,e),s}function p(e){let t=e&&e.domain||r["__next"],a={withCredentials:!0,auth:{username:localStorage&&localStorage.getItem("token")||"",password:"next common request"},baseURL:t,headers:{}};const s=o.a.create(a);return c(s,e),s}function m(e){let t=e&&Object.assign(e,{domain:r["__pay"]})||{domain:r["__pay"]};return p(t)}class h{constructor(){this.expires=n["a"],this.created_at=0,this.logged_in=!1,this.profile={},this.anonymous={uid:0,group:0,name:"未登录",status:0,bind_wx:0,avatar:Object(s["showAvatar"])(null,"s"),avatar_origin:r["default_avatar"]},this.asset=""}check(){return this.isLogin()?(this.profile.uid=localStorage&&localStorage.getItem("uid"),this.profile.group=localStorage&&localStorage.getItem("group")||1,this.profile.token=localStorage&&localStorage.getItem("token"),this.profile.name=localStorage&&localStorage.getItem("name"),this.profile.status=localStorage&&localStorage.getItem("status"),this.profile.bind_wx=localStorage&&localStorage.getItem("bind_wx"),this.profile.avatar_origin=localStorage&&localStorage.getItem("avatar")||r["default_avatar"],this.profile.avatar=Object(s["showAvatar"])(this.profile.avatar_origin,"s")):this.profile=this.anonymous,this}refresh(e,t){return localStorage.setItem(e,t)}isLogin(){return this.created_at=localStorage.getItem("created_at")?localStorage.getItem("created_at"):-1/0,this.logged_in="true"==localStorage.getItem("logged_in"),this.logged_in&&Date.now()-this.created_at<this.expires}_save(e){localStorage.setItem("created_at",Date.now()),localStorage.setItem("logged_in",!0),localStorage.setItem("token",e.token),localStorage.setItem("uid",e.uid),localStorage.setItem("group",e.group),localStorage.setItem("name",e.name),localStorage.setItem("status",e.status),localStorage.setItem("bind_wx",e.bind_wx),localStorage.setItem("avatar",e.avatar)}update(e){return new Promise((t,a)=>{try{this._save(e),t(this)}catch(s){localStorage?(localStorage.clear(),this._save(e),t(value)):a(new Error("localStorage不可用"))}})}getInfo(){return this.check(),this.profile}destroy(){return d({domain:r["__server"]}).post("/account/logout").finally(()=>{localStorage.removeItem("created_at"),localStorage.setItem("logged_in","false"),localStorage.removeItem("token")})}toLogin(e){e=e?encodeURIComponent(e):encodeURIComponent(location.href),location.href=r["__Links"].account.login+"?redirect="+e}getToken(){return this.getInfo().token}getUUID(){return localStorage.getItem("device_id")}isEmailMember(){return this.getInfo().group>=8}isPhoneMember(){return this.getInfo().group>=16}isEditor(){return this.getInfo().group>=64}isAdmin(){return this.getInfo().group>=128}isDeveloper(){return this.getInfo().group>=256}isSuperAdmin(){return this.getInfo().group>=512}isSuperAuthor(){return this.isLogin()?d().get("/api/cms/user/is_super_author/"+this.getInfo().uid).then(e=>e.data.data):new Promise((e,t)=>{e(!1)})}hasBindwx(){return this.getInfo().bind_wx}_isVIP(e){let t=e.was_vip;if(t){let t=new Date(e.expire_date)-new Date>0;return t}return!1}_isPRO(e){let t=e.was_pro;if(t){let t=new Date(e.pro_expire_date)-new Date>0;return t}return!1}isVIP(){return this.asset?new Promise((e,t)=>{e(this._isPRO(this.asset)||this._isVIP(this.asset))}):this.getAsset().then(e=>this._isPRO(e)||this._isVIP(e))}isPRO(){return this.asset?new Promise((e,t)=>{e(this._isPRO(this.asset))}):this.getAsset().then(e=>this._isPRO(e))}getAsset(){return this.isLogin()?m().get("/api/vip/i").then(e=>{let t=e.data.data;return this.asset=t,t}):new Promise((e,t)=>{let a={was_vip:0,expire_date:"1970-02-02T16:00:00.000Z",total_day:0,was_pro:0,pro_expire_date:"1970-02-02T16:00:00.000Z",pro_total_day:0,rename_card_count:0,had_renamed:0,namespace_card_count:0,box_coin:0,points:0};this.asset=a,e(a)})}getLevel(e){for(let t in r["__userLevel"]){let a=r["__userLevel"][t];if(e>=a[0]&&e<a[1])return~~t}}}t["a"]=new h},cb03:function(e,t,a){},d998:function(e,t,a){var s=a("342f");e.exports=/MSIE|Trident/.test(s)},e4f1:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var s=a("c1df"),r=a.n(s);function n(e){return r()(e).format("YYYY-MM-DD")}function i(e){return r()(e).format("YYYY-MM-DD HH:mm:ss")}r.a.locale("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY年MM月DD日",LLL:"YYYY年MM月DD日Ah点mm分",LLLL:"YYYY年MM月DD日ddddAh点mm分",l:"YYYY-M-D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,t){return 12===e&&(e=0),"凌晨"===t||"早上"===t||"上午"===t?e:"下午"===t||"晚上"===t?e+12:e>=11?e:e+12},meridiem:function(e,t,a){const s=100*e+t;return s<600?"凌晨":s<900?"早上":s<1130?"上午":s<1230?"中午":s<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|周)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"周";default:return e}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",ss:"%d秒",m:"1分钟",mm:"%d分钟",h:"1小时",hh:"%d小时",d:"1天",dd:"%d天",M:"1个月",MM:"%d个月",y:"1年",yy:"%d年"},week:{dow:1,doy:4}})}}]);
//# sourceMappingURL=chunk-e5bf6300.ddd7c66a.js.map