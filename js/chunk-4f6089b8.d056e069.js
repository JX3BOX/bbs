(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f6089b8"],{"089a":function(t,a,i){"use strict";i("65ef")},"0e1c":function(t,a,i){"use strict";var n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"m-single-nav"},[a("Author",{attrs:{uid:t.uid}})],1)},s=[],e={name:"single_nav",props:[],data:function(){return{}},computed:{uid:function(){return this.$store.state.user_id}},methods:{},mounted:function(){}},l=e,c=i("2877"),r=Object(c["a"])(l,n,s,!1,null,null,null);a["a"]=r.exports},"1b5d":function(t,a,i){"use strict";i("e2b8")},"1fb9":function(t){t.exports=JSON.parse('{"b":["collection"],"a":"bbs"}')},2822:function(t,a,i){"use strict";i("7a3d")},"3fac":function(t,a,i){"use strict";var n=function(){var t=this,a=t._self._c;return a("div",["list"==t.mode?a("list_nav",{staticClass:"m-nav"}):t._e(),"single"==t.mode?a("single_nav"):t._e()],1)},s=[],e=(i("caad"),i("2532"),function(){var t=this,a=t._self._c;return a("div",{staticClass:"m-list-nav"},[a("Banner",{staticClass:"m-ladder-carousel"}),a("div",{staticClass:"m-nav-app"},[a("h5",{staticClass:"u-title"},[t._v("茶馆矩阵")]),a("a",{class:{"is-active":t.routeActive("community")},attrs:{href:"/community"}},[a("i",{staticClass:"el-icon-cold-drink"}),a("span",[t._v("论坛")]),a("em",[t._v("Community")])]),a("a",{class:{"is-active":t.routeActive("joke")},attrs:{href:"/joke"}},[a("i",{staticClass:"el-icon-cherry"}),a("span",[t._v("骚话")]),a("em",[t._v("Joke")])]),a("a",{class:{"is-active":t.routeActive("emotion")},attrs:{href:"/emotion"}},[a("i",{staticClass:"el-icon-sugar"}),a("span",[t._v("趣图")]),a("em",[t._v("Emotion")])]),a("a",{class:{"is-active":t.routeActive("collection")},attrs:{href:"/collection"}},[a("i",{staticClass:"el-icon-paperclip"}),a("span",[t._v("小册")]),a("em",[t._v("Collection")])]),a("a",{class:{"is-active":t.routeActive("namespace")},attrs:{href:"/namespace"}},[a("i",{staticClass:"el-icon-postcard"}),a("span",[t._v("铭牌")]),a("em",[t._v("Namespace")])])])],1)}),l=[],c=(i("b0c0"),i("cc9a")),r=i("65c2"),o=i("85e4"),u=i("c402"),h=i("51b7"),d={name:"list_nav",props:[],data:function(){return{tags:[],feedback:r["feedback"],qq:"2471800",slideList:[]}},computed:{root:function(){return"localhost"==location.hostname?"":"/bbs"},client:function(){return this.$store.state.client}},methods:{getAppIcon:o["g"],isActive:function(t){return t==this.$route.name},isActivePage:function(t){return Object(o["h"])()&&Object(o["h"])()==t},onQQClick:function(){var t=this;navigator.clipboard.writeText(this.qq).then((function(){t.$notify({title:"复制成功",message:"内容："+t.qq,type:"success"})}))},loadTags:function(){var t=this;Object(c["b"])("bbs_links").then((function(a){t.tags=a||[]}))},loadMenu:function(){var t=this;Object(u["a"])({client:this.client,status:1,per:10,type:"banner",subtype:"bbs"}).then((function(a){t.slideList=a.data.data.list}))},routeActive:function(t){return this.$route.name.includes(t)}},mounted:function(){},components:{Banner:h["a"]}},f=d,v=(i("1b5d"),i("2877")),p=Object(v["a"])(f,e,l,!1,null,null,null),m=p.exports,b=i("0e1c"),g=i("1fb9"),_=(i("cf45"),{name:"Nav",props:[],components:{list_nav:m,single_nav:b["a"]},data:function(){return{mode:""}},computed:{},watch:{},methods:{},filters:{},created:function(){var t=location.pathname.split("/")[2],a=location.pathname.split("/")[1];g["b"].includes(a)&&t?this.mode="single":this.mode="list"},mounted:function(){}}),C=_,k=Object(v["a"])(C,n,s,!1,null,null,null);a["a"]=k.exports},"514b":function(t){t.exports=JSON.parse('{"Aquarius":"♒️","Aries":"♈️","Cancer":"♋️","Capricorn":"♑️","Gemini":"♊️","Leo":"♌️","Libra":"♎️","Pisces":"♓️","Sagittarius":"♐️","Scorpio":"♏️","Taurus":"♉️","Virgo":"♍️"}')},"51b7":function(t,a,i){"use strict";i("9911");var n=function(){var t=this,a=t._self._c;return t.list.length?a("div",{staticClass:"c-bbs-banner"},[a("el-carousel",{staticClass:"m-carousel",attrs:{autoplay:"","indicator-position":"none"}},t._l(t.list,(function(t,i){return a("el-carousel-item",{key:i},[a("a",{staticClass:"u-link",attrs:{href:t.link}},[a("el-image",{staticClass:"u-cover",attrs:{src:t.img,alt:t.title}})],1)])})),1)],1):t._e()},s=[],e=i("c402"),l={name:"BBsBanner",props:{subtype:{type:String,default:"bbs"}},data:function(){return{list:[]}},computed:{client:function(){return this.$store.state.client||"std"}},methods:{loadData:function(){var t=this;Object(e["a"])({client:this.client,status:1,per:10,type:"banner",subtype:this.subtype}).then((function(a){var i;t.list=(null===(i=a.data.data)||void 0===i?void 0:i.list)||[]}))}},mounted:function(){this.loadData()}},c=l,r=(i("89e2"),i("2877")),o=Object(r["a"])(c,n,s,!1,null,null,null);a["a"]=o.exports},"65ef":function(t,a,i){},"782f":function(t,a,i){},"7a3d":function(t,a,i){},"89e2":function(t,a,i){"use strict";i("f3d8")},"8f33":function(t,a,i){"use strict";var n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"m-info"},[a("div",{staticClass:"m-info-router"},[a("router-link",{attrs:{to:"/community"}},[a("i",{staticClass:"el-icon-receiving"})]),a("router-link",{attrs:{to:"/bbs"}},[a("i",{staticClass:"el-icon-collection"})]),a("router-link",{attrs:{to:"/joke"}},[a("i",{staticClass:"el-icon-cold-drink"})]),a("router-link",{attrs:{to:"/emotion"}},[a("i",{staticClass:"el-icon-sugar"})]),a("router-link",{attrs:{to:"/collection"}},[a("i",{staticClass:"el-icon-paperclip"})]),a("router-link",{attrs:{to:"/namespace"}},[a("i",{staticClass:"el-icon-postcard"})])],1)])},s=[],e=(i("a18c"),{name:"Info",props:[],data:function(){return{}},computed:{}}),l=e,c=(i("2822"),i("2877")),r=Object(c["a"])(l,n,s,!1,null,null,null);a["a"]=r.exports},b592:function(t,a,i){"use strict";i("782f")},cf45:function(t,a,i){"use strict";i.d(a,"a",(function(){return n})),i.d(a,"b",(function(){return s}));i("fb6a"),i("ac1f"),i("466d");function n(t){var a=t.split("-"),i=parseInt(a[2]),n=parseInt(a[1]);return 3===n&&i>=21||4===n&&i<=19?"Aries":4===n&&i>=20||5===n&&i<=20?"Taurus":5===n&&i>=21||6===n&&i<=20?"Gemini":6===n&&i>=21||7===n&&i<=22?"Cancer":7===n&&i>=23||8===n&&i<=22?"Leo":8===n&&i>=23||9===n&&i<=22?"Virgo":9===n&&i>=23||10===n&&i<=22?"Libra":10===n&&i>=23||11===n&&i<=21?"Scorpio":11===n&&i>=22||12===n&&i<=21?"Sagittarius":12===n&&i>=22||1===n&&i<=19?"Capricorn":1===n&&i>=20||2===n&&i<=18?"Aquarius":"Pisces"}function s(){var t=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return null!==t}},e2b8:function(t,a,i){},edcd:function(t,a,i){"use strict";i("f7b4")},ee7f:function(t,a,i){"use strict";var n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"m-extend-list"},[a("RightSideMsg",[a("em",[t._v("综合交流群")]),t._v(" : "),a("strong",{staticClass:"u-link",attrs:{title:"点击复制"},on:{click:t.onQQClick}},[a("a",[t._v(t._s(t.qq))])])]),a("minirank"),a("birthday")],1)},s=[],e=(i("9911"),function(){var t=this,a=t._self._c;return a("div",{staticClass:"m-jx3dat-rank-mini m-jx3dat-rank"},[a("h3",{staticClass:"c-sidebar-right-title"},[a("svg",{class:"u-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[a("g",{attrs:{fill:"#ffa91e"}},[a("path",{attrs:{d:"M324.891 167.266l16.262 94.815L256 217.314l-85.153 44.767 16.262-94.815-68.891-67.16 95.205-13.833L256 0l42.577 86.273 95.205 13.833z"}}),a("path",{attrs:{d:"M409.944 253.46v87.673L256.9 403.303l-.9-.36-153.944-61.76V253.46L256 315.219z"}}),a("path",{attrs:{d:"M409.944 362.157v87.673L256.9 512l-.9-.36-153.944-61.76v-87.723L256 423.916z"}})]),a("g",{attrs:{fill:"#ff8900"}},[a("path",{attrs:{d:"M341.153 262.081L256 217.314V0l42.577 86.273 95.205 13.833-68.891 67.16zM409.944 253.46v87.673L256.9 403.303l-.9-.36v-87.724zM256 423.916l153.944-61.759v87.673L256.9 512l-.9-.36z"}})])]),t._v("剑三年度大事件 ")]),a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},t._l(t.tabs,(function(t){return a("el-tab-pane",{key:t,attrs:{label:t,name:"bbs_rank_".concat(t)}})})),1),a("ul",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"u-list"},[t.data&&t.data.length?t._l(t.data,(function(i,n){return a("li",{key:n},[a("a",{staticClass:"u-link",attrs:{href:i.link,target:"_blank"}},[a("span",{staticClass:"u-order",class:t.highlight(n)},[t._v(t._s(n+1))]),a("span",{staticClass:"u-name"},[t._v(" "+t._s(i.label)+" ")])])])})):a("el-alert",{attrs:{title:"暂无事件",type:"info","show-icon":""}})],2)],1)}),l=[],c=(i("d3b7"),i("85e4")),r=i("65c2"),o=i("cc9a"),u={name:"rank",data:function(){return{loading:!1,data:[],active:"bbs_rank_2024",tabs:["2024","2023","2022"]}},computed:{client:function(){return this.$store.state.client}},methods:{postLink:c["q"],handleClick:function(){this.loadData()},viewRank:function(){var t="std"===this.client?r["__Root"]:r["__OriginRoot"];window.open("".concat(t,"dbm/pkg/rank"),"_blank")},highlight:function(t){return 0==t?"t1":1==t?"t2":2==t?"t3":void 0},loadData:function(){var t=this;this.loading=!0,Object(o["b"])(this.active).then((function(a){t.data=a})).finally((function(){t.loading=!1}))}},mounted:function(){this.loadData()}},h=u,d=(i("089a"),i("2877")),f=Object(d["a"])(h,e,l,!1,null,null,null),v=f.exports,p=(i("99af"),function(){var t=this,a=t._self._c;return a("div",{staticClass:"m-birthday m-jx3dat-rank-mini m-jx3dat-rank"},[a("h3",{staticClass:"c-sidebar-right-title"},[a("span",{staticClass:"u-title"},[a("svg",{staticClass:"icon",class:"u-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[a("path",{attrs:{d:"M336 512v-76c0-37.6 30.4-68 68-68h215.2c37.6 0 68 30.4 68 68v76",fill:"#FA004B"}}),a("path",{attrs:{d:"M336.8 416h48v31.2h-48zm302.4 0h48v31.2h-48z",fill:"#FFF"}}),a("path",{attrs:{d:"M399.2 416h33.6v31.2h-33.6z",fill:"#36C9A3"}}),a("path",{attrs:{d:"M447.2 416h33.6v31.2h-33.6z",fill:"#FFF"}}),a("path",{attrs:{d:"M495.2 416h33.6v31.2h-33.6z",fill:"#36C9A3"}}),a("path",{attrs:{d:"M543.2 416h33.6v31.2h-33.6z",fill:"#FFF"}}),a("path",{attrs:{d:"M591.2 416h33.6v31.2h-33.6zM240 704V587.2c0-41.6 33.6-75.2 75.2-75.2h409.6c41.6 0 75.2 33.6 75.2 75.2V704",fill:"#36C9A3"}}),a("path",{attrs:{d:"M800 608H240v-26.4c0-38.4 31.2-69.6 69.6-69.6h420.8c38.4 0 69.6 31.2 69.6 69.6V608z",fill:"#FFF"}}),a("path",{attrs:{d:"M160 1008V777.6c0-40.8 32.8-73.6 73.6-73.6h572c40.8 0 73.6 32.8 73.6 73.6V1008",fill:"#FA004B"}}),a("path",{attrs:{d:"M880 784l-16-16-64 32-64-32-64 32-64-32-64 32-64-32-64 32-64-32-64 32-64-32-64 32v-16c0-44 36-80 80-80h560c44 0 80 36 80 80zM637.6 39.2C606.4 8 556 8 524.8 39.2l-11.2 11.2-11.2-11.2C470.4 8 419.2 8 388 39.2c-31.2 31.2-31.2 81.6 0 112.8l124 136 125.6-135.2c31.2-32 31.2-82.4 0-113.6z",fill:"#FAEDD6"}}),a("path",{attrs:{d:"M208.8 816.8H240V848h-31.2zm128 0H368V848h-31.2zm127.2 0h31.2V848H464zm127.2 0h33.6V848h-33.6zm129.6 0H752V848h-31.2zm128 0H880V848h-31.2z",fill:"#36C9A3"}}),a("path",{attrs:{d:"M360 590.4c-6.4-6.4-16.8-6.4-24 0-6.4-6.4-16.8-6.4-24 0-6.4 6.4-6.4 16.8 0 24l24 24 24-24c6.4-7.2 6.4-17.6 0-24zm368 0c-6.4-6.4-16.8-6.4-24 0-6.4-6.4-16.8-6.4-24 0-6.4 6.4-6.4 16.8 0 24l24 24 24-24c6.4-7.2 6.4-17.6 0-24zm-192 0c-6.4-6.4-16.8-6.4-24 0-6.4-6.4-16.8-6.4-24 0-6.4 6.4-6.4 16.8 0 24l24 24 24-24c6.4-7.2 6.4-17.6 0-24z",fill:"#FA004B"}}),a("path",{attrs:{d:"M384.8 591.2H464v31.2h-79.2zm175.2 0h96v31.2h-96zm336 401.6V777.6c0-49.6-40-89.6-89.6-89.6h-572c-49.6 0-90.4 40-90.4 89.6V992H0v31.2h1024V992H896zM234.4 719.2h572c23.2 0 43.2 13.6 52.8 33.6l-58.4 29.6-64-32-64 32-64-32-64 32-64-32-64 32-64-32-64 32-64-32-48 24c.8-30.4 26.4-55.2 57.6-55.2zM864 992.8H176V809.6l48-24 64 32 64-32 64 32 64-32 64 32 64-32 64 32 64-32 64 32 60.8-30.4 3.2 3.2v202.4z",fill:"#232323"}}),a("path",{attrs:{d:"M256 622.4h32v-31.2h-32v-4c0-32.8 26.4-59.2 59.2-59.2h409.6c32.8 0 59.2 26.4 59.2 59.2v4h-32v31.2h32V672h31.2v-84.8c0-50.4-40.8-90.4-90.4-90.4H315.2c-50.4-.8-91.2 40-91.2 90.4V672h32v-49.6zM352 436c0-28.8 24-52.8 52.8-52.8H620c28.8 0 52.8 24 52.8 52.8v44H704v-44c0-46.4-38.4-84-84-84H404c-45.6 0-84 37.6-84 84v44h32v-44zm143.2-143.2V336h31.2v-40.8l122.4-132c17.6-18.4 28-41.6 28-67.2s-9.6-49.6-28-68c-18.4-17.6-42.4-28-68-28s-49.6 9.6-68 28c-18.4-17.6-42.4-28-68-28s-49.6 9.6-68 28c-37.6 37.6-37.6 97.6 0 135.2l118.4 129.6zm-96-242.4c12-12 28-19.2 45.6-19.2 16.8 0 33.6 6.4 45.6 19.2l22.4 22.4 22.4-22.4c12-12 28-19.2 45.6-19.2 16.8 0 33.6 6.4 45.6 19.2 12 12 19.2 28 19.2 45.6s-6.4 33.6-19.2 45.6L512 264.8 400 141.6l-.8-.8c-24.8-24.8-24.8-65.6 0-90.4z",fill:"#232323"}}),a("path",{attrs:{d:"M127.2 31.2h33.6v31.2h-33.6z",fill:"#FA004B"}}),a("path",{attrs:{d:"M0 64.8h31.2V96H0z",fill:"#FAEDD6"}}),a("path",{attrs:{d:"M79.2 512h33.6v31.2H79.2z",fill:"#36C9A3"}}),a("path",{attrs:{d:"M800 256.8h31.2V288H800z",fill:"#FA004B"}}),a("path",{attrs:{d:"M959.2 160.8h33.6V192h-33.6z",fill:"#36C9A3"}}),a("path",{attrs:{d:"M736 64.8h31.2V96H736zm256.8-48h31.2V48h-31.2z",fill:"#FAEDD6"}}),a("path",{attrs:{d:"M911.2 464h33.6v31.2h-33.6z",fill:"#36C9A3"}}),a("path",{attrs:{d:"M64.8 319.2H96v31.2H64.8z",fill:"#FAEDD6"}}),a("path",{attrs:{d:"M192 271.2h31.2v31.2H192z",fill:"#FA004B"}}),a("path",{attrs:{d:"M351.2 288h33.6v31.2h-33.6zm-258.4-7.2l-26.4-17.6 19.2-28.8c3.2-4.8 2.4-11.2-1.6-15.2-14.4-14.4-16.8-37.6-5.6-54.4L97.6 136l26.4 17.6-19.2 28.8c-3.2 4.8-2.4 11.2 1.6 15.2 14.4 14.4 16.8 37.6 5.6 54.4l-19.2 28.8z",fill:"#36C9A3"}}),a("path",{attrs:{d:"M252.8 184.8l-26.4-17.6 19.2-28.8c3.2-4.8 2.4-11.2-1.6-15.2-14.4-14.4-16.8-37.6-5.6-54.4L257.6 40 284 57.6l-19.2 28.8c-3.2 4.8-2.4 11.2 1.6 15.2 14.4 14.4 16.8 37.6 5.6 54.4l-19.2 28.8z",fill:"#FAEDD6"}}),a("path",{attrs:{d:"M220.8 488.8l-26.4-17.6 19.2-28.8c3.2-4.8 2.4-11.2-1.6-15.2-14.4-14.4-16.8-37.6-5.6-54.4l19.2-28.8 26.4 17.6-19.2 28.8c-3.2 4.8-2.4 11.2 1.6 15.2 14.4 14.4 16.8 37.6 5.6 54.4l-19.2 28.8z",fill:"#FA004B"}}),a("path",{attrs:{d:"M876.8 456.8l-26.4-17.6 19.2-28.8c3.2-4.8 2.4-11.2-1.6-15.2-14.4-14.4-16.8-37.6-5.6-54.4l19.2-28.8 26.4 17.6-19.2 28.8c-3.2 4.8-2.4 11.2 1.6 15.2 14.4 14.4 16.8 37.6 5.6 54.4l-19.2 28.8z",fill:"#FAEDD6"}}),a("path",{attrs:{d:"M716.8 296.8l-26.4-17.6 19.2-28.8c3.2-4.8 2.4-11.2-1.6-15.2-14.4-14.4-16.8-37.6-5.6-54.4l19.2-28.8 26.4 17.6-19.2 28.8c-3.2 4.8-2.4 11.2 1.6 15.2 14.4 14.4 16.8 37.6 5.6 54.4l-19.2 28.8z",fill:"#36C9A3"}}),a("path",{attrs:{d:"M860.8 200.8l-26.4-17.6 19.2-28.8c3.2-4.8 2.4-11.2-1.6-15.2-14.4-14.4-16.8-37.6-5.6-54.4L865.6 56 892 73.6l-19.2 28.8c-3.2 4.8-2.4 11.2 1.6 15.2 14.4 14.4 16.8 37.6 5.6 54.4l-19.2 28.8z",fill:"#FA004B"}})]),t._v("今日之星")]),a("span",{staticClass:"u-date"},[t._v(t._s("".concat(t.icon," ").concat(t.today)))])]),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[t.list&&t.list.length?a("ul",{staticClass:"u-list"},t._l(t.list,(function(i,n){return a("li",{key:n},[a("a",{staticClass:"u-link",attrs:{href:t.authorLink(i.uid),target:"_blank"}},[a("Avatar",{staticClass:"u-avatar",attrs:{url:i.avatar,size:14}}),a("span",{staticClass:"u-name"},[t._v(" "+t._s(i.username)+" ")])],1)])})),0):a("el-alert",{attrs:{"show-icon":"",type:"info",closable:!1,title:"暂无今日之星"}})],1)])}),m=[],b=i("a27f"),g=i("cf45"),_=i("514b"),C=i("5a0c"),k=i.n(C),z={name:"birthday",data:function(){return{list:[],loading:!1}},computed:{today:function(){return k()().format("MM-DD")},currentStarSign:function(){return Object(g["a"])(this.today)},icon:function(){return _[this.currentStarSign]}},mounted:function(){this.loadData()},methods:{loadData:function(){var t=this,a={limit:50};this.loading=!0,Object(b["a"])(a).then((function(a){t.list=a.data.data})).finally((function(){t.loading=!1}))},authorLink:c["a"]}},M=z,A=(i("b592"),Object(d["a"])(M,p,m,!1,null,null,null)),w=A.exports,y={name:"list_side",props:[],data:function(){return{activeDocGroup:[],jx3dat_newbie:[],jx3dat_senior:[],qq:"2471800",tags:[],rules:"",apis:[]}},methods:{onQQClick:function(){var t=this;navigator.clipboard.writeText(this.qq).then((function(){t.$notify({title:"复制成功",message:"内容："+t.qq,type:"success"})}))},highLight:function(t){return t?"color:"+t+";font-weight:bold;":""}},mounted:function(){},components:{minirank:v,birthday:w}},x=y,F=(i("edcd"),Object(d["a"])(x,n,s,!1,null,null,null));a["a"]=F.exports},f3d8:function(t,a,i){},f7b4:function(t,a,i){}}]);
//# sourceMappingURL=chunk-4f6089b8.d056e069.js.map