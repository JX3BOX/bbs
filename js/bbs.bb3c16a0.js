(function(t){function e(e){for(var n,i,o=e[0],l=e[1],r=e[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return c.push.apply(c,r||[]),s()}function s(){for(var t,e=0;e<c.length;e++){for(var s=c[e],n=!0,o=1;o<s.length;o++){var l=s[o];0!==a[l]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},a={bbs:0},c=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="https://console.cnyixun.com/static/bbs/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var r=0;r<o.length;r++)e(o[r]);var u=l;c.push([1,"chunk-vendors"]),s()})({"069b":function(t,e,s){"use strict";s("7c82")},"0e1b":function(t,e,s){},"0ec0":function(t,e,s){"use strict";s("d8c3")},1:function(t,e,s){t.exports=s("19e9")},"19e9":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=s("5c96"),c=s.n(a),i=s("6a69"),o=(s("6b30"),s("c5b4"),s("4360")),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Header"),s("Breadcrumb",{attrs:{name:"茶馆交流",slug:"bbs",root:"/bbs",publishEnable:!1,adminEnable:!0,feedbackEnable:!0}},[s("svg",{attrs:{slot:"logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 511.988 511.988","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"},slot:"logo"},[s("path",{attrs:{d:"M394.655 202.654H95.988c-17.643 0-32 14.357-32 32v21.333c0 76.117 42.048 145.152 109.717 180.16 5.227 2.688 11.669.661 14.379-4.587 2.688-5.227.661-11.669-4.587-14.379-60.544-31.317-98.176-93.077-98.176-161.195v-21.333c0-5.888 4.779-10.667 10.667-10.667h298.667c5.888 0 10.667 4.779 10.667 10.667v21.333c0 68.117-37.632 129.877-98.197 161.173-5.248 2.709-7.275 9.152-4.587 14.379a10.69 10.69 0 009.493 5.781c1.664 0 3.328-.384 4.885-1.195 67.691-34.987 109.739-104 109.739-180.139v-21.333c0-17.641-14.358-31.998-32-31.998z"}}),s("path",{attrs:{d:"M489.865 422.558c-1.664-3.989-5.547-6.592-9.856-6.592H10.676c-4.309 0-8.192 2.603-9.856 6.592a10.643 10.643 0 002.304 11.627l23.915 23.936c14.123 14.101 32.853 21.867 52.8 21.867h330.965c19.947 0 38.699-7.765 52.843-21.867l23.915-23.936a10.644 10.644 0 002.303-11.627zm-41.322 20.48c-10.069 10.069-23.488 15.616-37.717 15.616H79.839c-14.229 0-27.648-5.547-37.717-15.616l-5.717-5.717H454.26l-5.717 5.717zM491.359 253.022c-28.736-18.475-74.645 1.579-79.787 3.904-5.355 2.453-7.744 8.768-5.291 14.144a10.657 10.657 0 0014.144 5.291c10.283-4.672 43.264-15.744 59.392-5.355 7.275 4.672 10.837 13.739 10.837 27.648 0 42.709-86.144 68.523-119.403 74.88l-7.552 1.493c-5.781 1.131-9.536 6.741-8.405 12.523 1.003 5.077 5.461 8.597 10.453 8.597.683 0 1.365-.064 2.069-.213l7.488-1.472c5.589-1.067 136.683-26.773 136.683-95.808.001-21.461-6.953-36.8-20.628-45.632zM328.372 113.31c17.344-21.675 17.344-55.616 0-77.291a10.634 10.634 0 00-14.997-1.664 10.655 10.655 0 00-1.664 14.997c10.987 13.717 10.987 36.907-.021 50.667-17.365 21.675-17.365 55.616 0 77.291a10.626 10.626 0 008.341 4.011c2.325 0 4.693-.768 6.656-2.347 4.608-3.691 5.355-10.411 1.664-14.997-11.008-13.718-11.008-36.907.021-50.667zM264.287 113.31c17.365-21.675 17.365-55.616 0-77.291-3.669-4.608-10.389-5.355-14.997-1.664-4.608 3.691-5.355 10.411-1.664 14.997 11.008 13.717 11.008 36.907-.021 50.667-17.344 21.675-17.344 55.616 0 77.291a10.626 10.626 0 008.341 4.011c2.325 0 4.672-.768 6.656-2.347a10.655 10.655 0 001.664-14.997c-10.987-13.718-10.987-36.907.021-50.667zM200.372 113.331c17.344-21.675 17.344-55.616 0-77.291a10.632 10.632 0 00-14.997-1.664c-4.587 3.669-5.333 10.389-1.664 14.976 10.987 13.717 10.987 36.907-.021 50.667-17.365 21.675-17.365 55.616 0 77.291a10.626 10.626 0 008.341 4.011 10.72 10.72 0 006.656-2.325c4.608-3.691 5.355-10.411 1.664-14.997-11.008-13.74-11.008-36.908.021-50.668z"}})]),s("publish-gate",{attrs:{slot:"op-append"},slot:"op-append"})],1),s("LeftSidebar",[s("Nav",{staticClass:"m-nav"})],1),s("Main",{attrs:{withoutRight:!1}},[s("single"),s("RightSidebar",[s("Side",{staticClass:"m-extend"})],1),s("Footer")],1)],1)},r=[],u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"m-single-nav"},[s("Author",{attrs:{uid:t.uid}})],1)},d=[],f={name:"single_nav",props:[],data:function(){return{}},computed:{uid:function(){return this.$store.state.user_id}},methods:{},mounted:function(){}},b=f,j=s("2877"),p=Object(j["a"])(b,u,d,!1,null,null,null),h=p.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"m-single-side"},[s("div",{staticClass:"m-single-director",attrs:{id:"directory"}}),t.collection_id&&t.data?s("div",{staticClass:"m-single-collection"},[t._m(0),t.list&&t.list.length?s("ul",{staticClass:"u-list"},t._l(t.list,(function(e,n){return s("li",{key:n},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.title,placement:"left"}},[s("a",{attrs:{href:t._f("showLink")(e),target:"_blank"}},[s("i",{staticClass:"el-icon-link"}),t._v(" "+t._s(e.title)+" ")])])],1)})),0):t._e()]):t._e()])},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"u-title"},[s("i",{staticClass:"el-icon-connection"}),t._v(" 关联 ")])}],g=s("41cb");function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(g["c"])()({method:"GET",url:"/api/post/collection/".concat(t),params:e})}var k=s("85e4"),w={name:"single_side",props:[],data:function(){return{data:""}},computed:{collection_id:function(){return this.$store.state.post.post_collection},list:function(){return this.data.posts||[]},collection_title:function(){return this.data.title||"-"}},watch:{collection_id:function(t){var e=this;t&&!isNaN(t)&&y(this.collection_id).then((function(t){e.data=t.data.data.collection,e.$store.commit("SET_COLLECTION",e.data)}))}},methods:{},filters:{showLink:function(t){return"custom"==t.type?t.url:Object(k["getLink"])(t.type,t.id)}},mounted:function(){}},O=w,C=(s("8abd"),Object(j["a"])(O,m,v,!1,null,null,null)),z=C.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("singlebox",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{post:t.post,stat:t.stat}},[s("div",{staticClass:"u-meta u-sub-block",attrs:{slot:"single-header"},slot:"single-header"},[s("em",{staticClass:"u-label"},[t._v("类型")]),s("span",{staticClass:"u-value"},[t._v(" "+t._s(t.post_subtype)+" ")])]),s("div",{staticClass:"u-collection"},[s("div",{staticClass:"u-collection-title",class:{on:t.showCollection},on:{click:t.handleShow}},[s("span",[t._v("该小册已关联")]),s("a",{attrs:{href:""},on:{click:function(t){t.stopPropagation()}}},[t._v("《"+t._s(t.collapseTitle)+"》")])]),s("transition",{attrs:{name:"fade"}},[t.showCollection?s("div",[t.collectionList&&t.collectionList.length?s("ul",{staticClass:"u-list u-collection-content",style:{display:t.showCollection?"block":"none"}},t._l(t.collectionList,(function(e,n){return s("li",{key:n},[e?s("a",{attrs:{href:t._f("showLink")(e),target:"_blank"}},[s("i",{staticClass:"el-icon-link"}),t._v(" "+t._s(e.title)+" ")]):t._e()])})),0):t._e()]):t._e()])],1),s("Thx",{staticClass:"m-thx",attrs:{slot:"single-append",postId:t.id,postType:"bbs",userId:t.user_id,adminBoxcoinEnable:!0,userBoxcoinEnable:!0},slot:"single-append"})],1)},E=[],$=(s("d3b7"),s("8c5f")),S=s("29c2"),L=s("9616"),T=(new n["default"],s("c9d2")),M={1:"玩法心得",2:"江湖回忆",3:"同人影音",4:"交流讨论"},I={name:"single",props:[],data:function(){return{loading:!1,post:{},author:{},stat:{},isSuperAdmin:T["a"].isSuperAdmin(),showCollection:!1}},computed:{id:function(){return this.$store.state.id},user_id:function(){return _.get(this.post,"post_author")||0},post_subtype:function(){var t=_.get(this.post,"post_subtype");return t?M[t]:""},collectionInfo:function(){return this.$store.state.collectionInfo},collapseTitle:function(){var t;return null===(t=this.collectionInfo)||void 0===t?void 0:t.title},collectionList:function(){var t;return null===(t=this.collectionInfo)||void 0===t?void 0:t.posts}},methods:{handleShow:function(){this.showCollection=!this.showCollection}},filters:{},created:function(){var t=this;this.id&&(this.loading=!0,Object(S["b"])(this.id,this).then((function(e){t.post=t.$store.state.post=e.data.data,t.$store.state.user_id=t.post.post_author,document.title=t.post.post_title})).finally((function(){t.loading=!1})),Object(L["a"])("bbs",this.id).then((function(e){t.stat=t.$store.state.stat=e.data})),Object(L["b"])("bbs",this.id))},components:{singlebox:$["a"]}},N=I,P=(s("069b"),Object(j["a"])(N,x,E,!1,null,null,null)),A=P.exports,H=s("98e8"),B={name:"App",props:[],data:function(){return{}},methods:{},components:{Nav:h,Side:z,single:A,"publish-gate":H["a"]}},D=B,q=(s("0ec0"),Object(j["a"])(D,l,r,!1,null,null,null)),F=q.exports;n["default"].config.productionTip=!1,n["default"].use(c.a),n["default"].use(i["a"]),new n["default"]({store:o["a"],render:function(t){return t(F)}}).$mount("#app")},"29c2":function(t,e,s){"use strict";s.d(e,"c",(function(){return a})),s.d(e,"b",(function(){return c})),s.d(e,"a",(function(){return i})),s.d(e,"d",(function(){return o}));var n=s("41cb");s("bc3a");function a(t){var e={type:"bbs"};return t&&(e=Object.assign(e,t)),Object(n["b"])().get("/api/cms/posts",{params:e})}function c(t){return Object(n["b"])().get("/api/cms/post/".concat(t))}function i(t){return Object(n["d"])().get("/api/summary/batch",{params:t})}function o(t){return Object(n["b"])().put("/api/cms/post/".concat(t,"/setting"),{post_status:"dustbin"})}},4360:function(t,e,s){"use strict";s("caad"),s("2532");var n=s("2b0e"),a=s("2f62"),c=s("85e4");n["default"].use(a["a"]);var i={state:{client:location.href.includes("origin")?"origin":"std",subtype:"",id:Object(c["getAppID"])(),user_id:0,post:"",collectionInfo:""},mutations:{switchClient:function(t,e){t.client=e||"std"},SET_COLLECTION:function(t,e){t.collectionInfo=e}},getters:{},actions:{},modules:{}};e["a"]=new a["a"].Store(i)},4678:function(t,e,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=c(t);return s(e)}function c(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=c,t.exports=a,a.id="4678"},"7c82":function(t,e,s){},"8abd":function(t,e,s){"use strict";s("0e1b")},"98e8":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"u-publish el-button el-button--primary el-button--medium",attrs:{href:t.publish_link}},[s("i",{staticClass:"el-icon-edit-outline"}),s("span",[t._v("发布")])])},a=[],c=(s("b0c0"),s("caad"),s("2532"),s("85e4")),i={name:"publishGate",props:[],data:function(){return{redirect_types:["index","forum","notice","feedback"]}},computed:{channel:function(){if(this.$route){var t=this.$route.name;return this.redirect_types.includes(t)&&(t="bbs"),t}return"bbs"},publish_link:function(){return Object(c["publishLink"])(this.channel)}},methods:{},mounted:function(){},components:{}},o=i,l=s("2877"),r=Object(l["a"])(o,n,a,!1,null,null,null);e["a"]=r.exports},d8c3:function(t,e,s){}});
//# sourceMappingURL=bbs.bb3c16a0.js.map