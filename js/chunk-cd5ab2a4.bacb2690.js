(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd5ab2a4"],{"03bd":function(t,e,i){},"0608":function(t){t.exports=JSON.parse('{"#下雨":"下雨.gif","#严寒":"严寒.gif","#亲亲":"亲亲.gif","#傲慢":"傲慢.gif","#冷汗":"冷汗.gif","#凶恶":"凶恶.gif","#刀":"刀.gif","#发怒":"发怒.gif","#口水":"口水.gif","#可怜":"可怜.gif","#吐":"吐.gif","#吓":"吓.gif","#呆":"呆.gif","#呲牙":"呲牙.gif","#咖啡":"咖啡.gif","#唇":"唇.gif","#喜欢":"喜欢.gif","#嘴":"嘴.gif","#噢":"噢.gif","#困":"困.gif","#大笑":"大笑.gif","#太阳":"太阳.gif","#媚眼":"媚眼.gif","#害羞":"害羞.gif","#寒":"寒.gif","#尴尬":"尴尬.gif","#差劲":"差劲.gif","#巴掌":"巴掌.gif","#强":"强.gif","#得意":"得意.gif","#微笑":"微笑.gif","#心碎":"心碎.gif","#恐慌":"恐慌.gif","#恶心":"恶心.gif","#感叹号":"感叹号.gif","#扁嘴":"扁嘴.gif","#打雷":"打雷.gif","#拍手":"拍手.gif","#握手":"握手.gif","#撇嘴":"撇嘴.gif","#无奈":"无奈.gif","#昏":"昏.gif","#晕":"晕.gif","#月亮":"月亮.gif","#标记":"标记.gif","#樱桃":"樱桃.gif","#欣喜":"欣喜.gif","#沉默":"沉默.gif","#流汗":"流汗.gif","#流泪":"流泪.gif","#灯泡":"灯泡.gif","#烟花":"烟花.gif","#爱心":"爱心.gif","#狂汗":"狂汗.gif","#狡猾":"狡猾.gif","#狡诈":"狡诈.gif","#猪":"猪.gif","#玫瑰":"玫瑰.gif","#生气":"生气.gif","#电话":"电话.gif","#睡":"睡.gif","#礼物":"礼物.gif","#笨猪":"笨猪.gif","#第一名":"第一名.gif","#第三名":"第三名.gif","#第二名":"第二名.gif","#红灯":"红灯.gif","#绿灯":"绿灯.gif","#胜利":"胜利.gif","#舌头":"舌头.gif","#色":"色.gif","#花":"花.gif","#苹果":"苹果.gif","#菠萝":"菠萝.gif","#蒜头":"蒜头.gif","#蜡烛":"蜡烛.gif","#衰":"衰.gif","#西瓜":"西瓜.gif","#讨厌":"讨厌.gif","#讶异":"讶异.gif","#鄙视":"鄙视.gif","#酷":"酷.gif","#钱":"钱.gif","#锤子":"锤子.gif","#问号":"问号.gif","#阴险":"阴险.gif","#难过":"难过.gif","#雪糕":"雪糕.gif","#饮料":"饮料.gif","#馒头":"馒头.gif","#香蕉":"香蕉.gif","#骷髅":"骷髅.gif","#鬼脸":"鬼脸.gif","#黄灯":"黄灯.gif"}')},"0941":function(t,e,i){"use strict";i("2997")},2997:function(t,e,i){},"33a5":function(t){t.exports=JSON.parse('{"0":"江湖","1":"天策","2":"万花","3":"纯阳","4":"七秀","5":"少林","6":"藏剑","7":"丐帮","8":"明教","9":"五毒","10":"唐门","18":"苍云","19":"长歌","20":"霸刀","21":"蓬莱","22":"凌雪","23":"衍天","24":"药宗","26":"刀宗","29":"万灵"}')},4208:function(t,e,i){!function(e,i){t.exports=i()}(0,(function(){"use strict";return function(t,e,i){t=t||{};var n=e.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(t,e,i,o){return n.fromToBase(t,e,i,o)}i.en.relativeTime=o,n.fromToBase=function(e,n,a,s,r){for(var c,l,u,d=a.$locale().relativeTime||o,f=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=f.length,p=0;p<h;p+=1){var g=f[p];g.d&&(c=s?i(e).diff(a,g.d,!0):a.diff(e,g.d,!0));var m=(t.rounding||Math.round)(Math.abs(c));if(u=c>0,m<=g.r||!g.r){m<=1&&p>0&&(g=f[p-1]);var k=d[g.l];r&&(m=r(""+m)),l="string"==typeof k?k.replace("%d",m):k(m,n,g.l,u);break}}if(n)return l;var v=u?d.future:d.past;return"function"==typeof v?v(l):v.replace("%s",l)},n.to=function(t,e){return a(t,e,this,!0)},n.from=function(t,e){return a(t,e,this)};var s=function(t){return t.$u?i.utc():i()};n.toNow=function(t){return this.to(s(this),t)},n.fromNow=function(t){return this.from(s(this),t)}}}))},"458f":function(t,e,i){},6440:function(t,e,i){"use strict";i("458f")},"77e1":function(t,e,i){"use strict";var n=function(){var t=this,e=t._self._c;return e("el-popover",{attrs:{"popper-class":"m-joke-popover",placement:"top",width:"500",offset:-200},model:{value:t.showPop,callback:function(e){t.showPop=e},expression:"showPop"}},[e("Emotion",{staticClass:"m-publish-joke-emotion",on:{selected:t.handleEmotionSelect}}),e("span",{staticClass:"m-publish-joke-button",staticStyle:{cursor:"pointer"},attrs:{slot:"reference",title:"选择表情"},slot:"reference"},[t._v("😀插入表情")])],1)},o=[],a=i("c840"),s={name:"joke_post",components:{Emotion:a["a"]},data:function(){return{showPop:!1}},methods:{handleEmotionSelect:function(t){this.$emit("emotion",t),this.showPop=!1}}},r=s,c=(i("0941"),i("2877")),l=Object(c["a"])(r,n,o,!1,null,null,null);e["a"]=l.exports},a0b5:function(t,e,i){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-left-tab"},[e("el-tabs",{attrs:{"tab-position":t.windowWidth<=768?"top":"left"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[e("el-tab-pane",{attrs:{name:"all",label:"全部"}},[e("span",{attrs:{slot:"label"},slot:"label"},[e("i",{staticClass:"u-icon el-icon-menu",staticStyle:{"vertical-align":"0"}})])]),t._l(t.schoolmap,(function(i,n){return e("el-tab-pane",{key:n,attrs:{name:n}},[e("div",{attrs:{slot:"label"},slot:"label"},[e("img",{staticClass:"u-icon",attrs:{src:t.showSchoolIcon(n),alt:i,title:i}})])])}))],2)],1)},o=[],a=i("33a5"),s=i("65c2"),r={name:"LeftTab",data:function(){return{type:"all",windowWidth:document.documentElement.clientWidth,schoolmap:a}},watch:{type:function(t){this.$emit("setType",t)}},methods:{showSchoolIcon:function(t){return s["__imgPath"]+"image/school/"+t+".png"}},mounted:function(){var t=this;window.onresize=function(){t.windowWidth=document.documentElement.clientWidth}}},c=r,l=(i("6440"),i("2877")),u=Object(l["a"])(c,n,o,!1,null,null,null);e["a"]=u.exports},c2c9:function(t,e,i){"use strict";i("03bd")},ecfb:function(t,e,i){"use strict";i.r(e);i("ac1f"),i("841c"),i("498a");var n=function(){var t=this,e=t._self._c;return e("ListLayout",[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"v-joke"},[t.id?e("div",{staticClass:"m-joke-single-container"},[e("div",{staticClass:"m-joke-goback"},[e("el-button",{staticClass:"u-back",attrs:{size:"mini",icon:"el-icon-arrow-left"},on:{click:t.goBack}},[t._v("返回列表")]),e("a",{staticClass:"u-doc",attrs:{href:"/tool/23239",target:"_blank"}},[e("i",{staticClass:"el-icon-info"}),t._v("游戏内获取或发布骚话 ")])],1),e("el-row",{staticClass:"m-joke-list",attrs:{gutter:20}},[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"m-joke-item"},[e("joke-item",{attrs:{joke:t.joke,mode:"single"}})],1)])],1),e("Thx",{staticClass:"m-thx",attrs:{postId:~~t.id,postType:"joke",postTitle:t.title,userId:t.user_id,adminBoxcoinEnable:!0,userBoxcoinEnable:!0,client:"all"}}),e("div",{staticClass:"m-single-comment"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v("评论")]),e("Comment",{attrs:{id:t.id,category:"joke"}})],1)],1):e("div",{staticClass:"m-joke-list-container"},[e("div",{staticClass:"m-archive-search m-joke-search",attrs:{slot:"search-before"},slot:"search-before"},[e("el-input",{attrs:{placeholder:"请输入搜索内容",clearable:""},on:{clear:t.onSearch},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSearch.apply(null,arguments)}},model:{value:t.search,callback:function(e){t.search="string"===typeof e?e.trim():e},expression:"search"}},[e("span",{attrs:{slot:"prepend"},slot:"prepend"},[e("i",{staticClass:"el-icon-search"}),t._v(" "),e("span",{staticClass:"u-search"},[t._v("关键词")])]),e("el-switch",{attrs:{slot:"append","inactive-value":0,"active-value":1,"inactive-text":"只看精选"},slot:"append",model:{value:t.star,callback:function(e){t.star=e},expression:"star"}})],1)],1),e("div",{staticClass:"m-joke-main"},[e("left-tab",{staticClass:"m-joke-types",on:{setType:t.setType}}),e("div",{staticClass:"m-joke-content"},[e("joke-post",{attrs:{type:t.type}}),t.jokes&&t.jokes.length?e("el-row",{staticClass:"m-joke-list",attrs:{gutter:20}},t._l(t.jokes,(function(i){return e("el-col",{key:i.id,attrs:{span:24}},[e("div",{staticClass:"m-joke-item"},[e("joke-item",{attrs:{joke:i,jokeRewardArr:t.jokeRewardArr},on:{doReward:t.doReward,update:t.handleJokeUpdate}})],1)])})),1):e("el-alert",{attrs:{title:"没有找到相关条目",type:"info","show-icon":""}}),e("div",{staticClass:"m-joke-footer"},[e("el-pagination",{staticClass:"m-joke-pagination",attrs:{background:"","page-size":t.per,"hide-on-single-page":!0,"current-page":t.page,layout:"total, prev, pager, next, jumper,sizes",total:t.total,"page-sizes":[10,30,50,70,90]},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"current-change":t.skipTop,"size-change":t.handleSizeChange}}),t.isEditor?e("div",{staticClass:"m-joke-reward"},[e("el-button",{staticClass:"m-joke-all",attrs:{type:"primary",size:"mini"},on:{click:t.rewardAll}},[t._v(t._s(this.rewardAllType?"取消":"")+" 全选")]),e("Thx",{attrs:{type:"batchReward",postType:"joke",postId:t.jokeRewardArr,adminBoxcoinEnable:!0,userBoxcoinEnable:!0,client:"all"}})],1):t._e()],1)],1)],1)])])])},o=[],a=(i("4de4"),i("d3b7"),i("b64b"),i("4e82"),i("159b"),i("14d9"),i("d81d"),i("a15b"),i("25f0"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-joke-item"},[e("div",{staticClass:"u-content",class:"single"===t.mode?"on":"",on:{click:t.handleContent}},[t.joke.star?e("i",{staticClass:"u-star",class:t.joke.star?"on":"",attrs:{title:"精选"}},[t._v("★")]):t._e(),e("span",{staticClass:"u-sentence",domProps:{innerHTML:t._s(t.parse(t.joke.content))}})]),e("div",{staticClass:"u-misc"},[e("div",{staticClass:"u-op"},[e("span",{staticClass:"u-user"},[e("img",{attrs:{width:"24",height:"24",src:t._f("showAvatar")(t.user_avatar)}}),t.joke.user_id?e("a",{attrs:{href:t._f("authorLink")(t.joke.user_id),target:"_blank"}},[t._v(t._s(t.user_name))]):e("span",[t._v(t._s(t.joke.author||"匿名"))])]),e("el-link",{staticClass:"u-copy",attrs:{type:"primary",disabled:t.disabled},on:{click:function(e){return t.handleCopy(t.joke.content)}}},[e("i",{staticClass:"el-icon-document-copy"}),t._v(" 复制 ")]),e("a",{staticClass:"u-like",class:{on:t.isLike},attrs:{title:"赞"},on:{click:t.addLike}},[e("i",{staticClass:"like-icon"},[t._v(t._s(t.isLike?"♥":"♡"))]),t._v("Like "),t.count?e("span",{staticClass:"like-count"},[t._v(t._s(t.count))]):t._e()]),"single"===t.mode&&(t.isAuthor||t.isEditor)?e("a",{staticClass:"u-edit el-link el-link--primary is-underline",attrs:{href:t.editLink("joke",t.joke.id),target:"_blank"}},[e("i",{staticClass:"el-icon-edit-outline"}),t._v(" 编辑 ")]):t._e()],1),e("div",{staticClass:"u-other"},[t.isEditor?[e("span",{staticClass:"u-op-item u-op-star el-link el-link--primary is-underline",on:{click:t.handleStar}},[e("i",{class:t.isStar?"el-icon-star-off":"el-icon-star-on"}),t._v(" "+t._s(t.isStar?"取消精选":"设为精选")+" ")]),e("span",{staticClass:"u-op-item u-op-delete el-link el-link--primary is-underline",on:{click:t.handleDelete}},[e("i",{staticClass:"el-icon-delete"}),t._v(" 删除 ")]),"single"!==t.mode?e("el-checkbox",{staticClass:"u-op-item u-op-gift",attrs:{disabled:!t.joke.user_id||t.isSelf},on:{change:t.doReward},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("打赏")]):t._e()]:t._e(),e("span",{staticClass:"u-date"},[e("i",{staticClass:"el-icon-date"}),t._v("  "),e("time",[t._v(t._s(t._f("dateFormat")(t.joke.created_at)))])])],2)])])}),s=[],r=i("506c"),c=i("fb92"),l=i("85e4"),u=i("41cb");function d(t){return Object(u["c"])().post("/api/joke/share",t)}var f=function(t){return Object(u["a"])().get("/api/cms/post/jokes",{params:t})};function h(t){return Object(u["a"])().get("/api/cms/post/joke/".concat(t))}var p=function(t){return Object(u["a"])().put("/api/cms/post/joke/".concat(t,"/star"))};function g(t){return Object(u["a"])().put("/api/cms/post/joke/".concat(t,"/unstar"))}var m=function(t){return Object(u["a"])().delete("/api/cms/post/joke/".concat(t))},k=i("c9d2"),v=i("9616"),j={name:"joke_item",props:["joke","mode","jokeRewardArr"],data:function(){return{disabled:!1,isStar:this.joke.star,count:0,isLike:!1,checked:!1}},filters:{dateFormat:function(t){return Object(c["a"])(new Date(t))},showAvatar:function(t){return Object(l["showAvatar"])(t)},authorLink:l["authorLink"]},computed:{isSelf:function(){return this.joke.user_id==k["a"].getInfo().uid},isListPage:function(){return"single"!==this.mode},isEditor:function(){return k["a"].isEditor()},user_avatar:function(){var t,e;return null===(t=this.joke)||void 0===t||null===(e=t.user_info)||void 0===e?void 0:e.user_avatar},user_name:function(){var t,e;return null===(t=this.joke)||void 0===t||null===(e=t.user_info)||void 0===e?void 0:e.display_name},isAuthor:function(){var t=k["a"].getInfo();return t.uid===this.joke.user_id}},watch:{joke:{handler:function(t){this.count=t.count},deep:!0,immediate:!0},jokeRewardArr:{handler:function(t){var e=this;this.checked=!(null===t||void 0===t||!t.filter((function(t){return t.article_id==e.joke.id})).length)},deep:!0,immediate:!0}},methods:{parse:function(t){var e=new r["a"](t);return e.code},handleCopy:function(t){var e=this;this.disabled=!0,navigator.clipboard.writeText(t).then((function(){e.copyLabel="已复制",setTimeout((function(){e.copyLabel="复制",e.disabled=!1}),3e3)}))},editLink:l["editLink"],addLike:function(){if(!this.isLike){var t;if(this.count++,!this.isLike)Object(v["b"])("joke",null===(t=this.joke)||void 0===t?void 0:t.id,"likes");this.isLike=!0}},handleStar:function(){var t=this;this.isStar?this.unStar():p(this.joke.id).then((function(){t.$notify({title:"成功",message:"加精成功",type:"success"}),t.isStar=!0,t.joke.star=!0,t.$forceUpdate()}))},unStar:function(){var t=this;g(this.joke.id).then((function(){t.$notify({title:"成功",message:"取消加精成功",type:"success"}),t.isStar=!1,t.joke.star=!1,t.$forceUpdate()}))},handleDelete:function(){var t=this;this.$confirm("此操作将会删除该表情，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){m(t.joke.id).then((function(){t.$notify({title:"成功",message:"删除成功",type:"success"}),"single"===t.mode?t.$router.go(-1):t.$emit("update")}))}))},handleContent:function(){this.$router.push("/joke/".concat(this.joke.id))},doReward:function(){this.$emit("doReward",this.joke)}}},y=j,b=i("2877"),_=Object(b["a"])(y,a,s,!1,null,null,null),w=_.exports,C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-joke-publish"},[e("el-input",{attrs:{type:"textarea",rows:4,placeholder:"快速发布一条骚话",id:"textarea",maxlength:128,minlength:1,"show-word-limit":""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),e("div",{staticClass:"u-actions"},[e("div",[e("joke-emotion",{on:{emotion:t.insertVariable}}),e("el-select",{staticClass:"u-type",attrs:{size:"small",placeholder:"选择门派"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},t._l(t.schoolmap,(function(i,n){return e("el-option",{key:n,attrs:{value:n,label:i}},[e("div",{staticStyle:{display:"flex","align-items":"center"}},[e("img",{staticClass:"u-icon",staticStyle:{"margin-right":"5px"},attrs:{width:"24",height:"24",src:t._f("showSchoolIcon")(n),alt:i}}),t._v(" "+t._s(i)+" ")])])})),1)],1),e("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-position",loading:t.processing,disabled:t.processing},on:{click:t.publish}},[t._v("提交")])],1)],1)},x=[],S=i("c7eb"),L=i("1da1"),E=(i("466d"),i("caad"),i("2532"),i("5319"),i("77e1")),T=i("0608"),O=i("33a5"),A=i("65c2"),R={components:{"joke-emotion":E["a"]},data:function(){return{content:"",type:"0",schoolmap:O,processing:!1}},computed:{isLogin:function(){return k["a"].isLogin()}},methods:{insertVariable:function(t){var e=this;return Object(L["a"])(Object(S["a"])().mark((function i(){var n,o,a,s;return Object(S["a"])().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(n=t.key,o=document.querySelector("#textarea"),!o.selectionStart&&0!==o.selectionStart){i.next=12;break}return a=o.selectionStart,s=o.selectionEnd,e.content=o.value.substring(0,a)+n+o.value.substring(s,o.value.length),i.next=8,e.$nextTick();case 8:o.focus(),o.setSelectionRange(s+n.length,s+n.length),i.next=13;break;case 12:e.content=n;case 13:case"end":return i.stop()}}),i)})))()},publish:function(){var t=this;if(this.isLogin){if(!this.check())return;this.processing=!0,d({type:"all"===this.type?"0":this.type,content:this.content}).then((function(e){var i;null===e||void 0===e||null===(i=e.data)||void 0===i||i.data;t.$message({message:"发布成功,请等待审核",type:"success"}),t.content=""})).finally((function(){t.processing=!1}))}else k["a"].toLogin()},check:function(){var t,e=Object.keys(T),i=this.content.trim(),n=/(#[\u4e00-\u9fa5]{1})/g,o=/(#[\u4e00-\u9fa5]{2})/g,a=/(#[\u4e00-\u9fa5]{3})/g;if(!i.length)return this.$notify({title:"错误",message:"内容不能为空",type:"error"}),!1;var s=i.match(n)?i.match(n).filter((function(t){return e.includes(t)})):[];s.forEach((function(t){return i.replace(t,"")}));var r=i.match(o)?i.match(o).filter((function(t){return e.includes(t)})):[];r.forEach((function(t){return i.replace(t,"")}));var c=i.match(a)?i.match(a).filter((function(t){return e.includes(t)})):[];c.forEach((function(t){return i.replace(t,"")}));var l=s.length+r.length+c.length;if(this.contentLength=l,l>10)return this.$notify({title:"错误",message:"表情个数不能超过10个",type:"error"}),!1;var u=(null===(t=i.match(/[^\x00-\xff]/g))||void 0===t?void 0:t.length)||0;return!(2*u+(i.length-u)>128)||(this.$notify({title:"错误",message:"内容长度不能超过128个字符",type:"error"}),!1)}},filters:{showSchoolIcon:function(t){return A["__imgPath"]+"image/school/"+t+".png"}}},$=R,z=Object(b["a"])($,C,x,!1,null,null,null),I=z.exports,P=i("23d8"),B=i("9398"),M=i("a0b5"),W=i("a27f"),J={name:"Joke",components:{"joke-item":w,Comment:P["a"],"joke-post":I,ListLayout:B["a"],LeftTab:M["a"]},data:function(){return{loading:!1,schoolmap:O,sortedEmotions:[],type:"all",star:0,search:"",per:10,page:1,total:0,jokes:[],joke:"",windowWidth:document.documentElement.clientWidth,jokeRewardArr:[]}},computed:{isNotSelf:function(){return function(t){return t!=k["a"].getInfo().uid}},isEditor:function(){return k["a"].isEditor()},publish_link:function(){return Object(l["publishLink"])("joke")},id:function(){return this.$route.params.id},params:function(){return{per:~~this.per,page:~~this.page,type:"all"==this.type?"":this.type,search:this.search,star:this.star?1:""}},keys:function(){return[this.id,this.type,this.star,this.page,this.per]},reset_keys:function(){return[this.type,this.star]},user_id:function(){var t;return(null===(t=this.joke)||void 0===t?void 0:t.user_id)||0},title:function(){var t;return null===(t=this.joke)||void 0===t?void 0:t.content},rewardAllType:function(){return this.jokeRewardArr.length===this.jokes.filter((function(t){return t.user_id})).length}},filters:{showSchoolIcon:function(t){return A["__imgPath"]+"image/school/"+t+".png"}},methods:{setType:function(t){this.type=t},handleSizeChange:function(t){this.per=t,this.loadList()},sortEmotion:function(){var t=this,e=Object.keys(T);e.sort((function(t,e){return t.localeCompare(e)})),e.forEach((function(e){var i={key:e,value:T[e]};t.sortedEmotions.push(i)}))},loadList:function(){var t=this;this.loading=!0,f(this.params).then((function(e){var i,n,o,a;t.jokes=null===e||void 0===e||null===(i=e.data)||void 0===i||null===(n=i.data)||void 0===n?void 0:n.list,t.total=null===e||void 0===e||null===(o=e.data)||void 0===o||null===(a=o.data)||void 0===a?void 0:a.total,t.loadLike()})).finally((function(){t.loading=!1}))},loadSingle:function(){var t=this;this.loading=!0,h(this.id).then((function(e){var i;t.joke=null===e||void 0===e||null===(i=e.data)||void 0===i?void 0:i.data})).finally((function(){t.loading=!1}))},handleJokeUpdate:function(){this.loadList()},init:function(){this.id?this.loadSingle():this.loadList()},goBack:function(){this.$router.push("/joke")},skipTop:function(){window.scrollTo(0,0)},loadLike:function(){var t=this;if(this.jokes&&this.jokes.length){var e=this.jokes.map((function(t){return"joke-"+t.id}));e=e.join(",");var i={post_type:"joke",post_action:"likes",id:e};Object(W["b"])(i).then((function(e){var i=e.data.data;Object.keys(i).length&&t.jokes.forEach((function(e){var n;t.$set(e,"count",null===i||void 0===i||null===(n=i["joke-"+e.id])||void 0===n?void 0:n.likes)}))}))}},doReward:function(t){var e=this.jokeRewardArr.filter((function(e){return e.article_id==t.id}));e.length?this.jokeRewardArr=this.jokeRewardArr.filter((function(e){return e.article_id!=t.id})):this.jokeRewardArr.push({user_id:t.user_id,article_id:t.id.toString(),article_type:"joke"})},rewardAll:function(){var t=this,e=[];this.jokes.map((function(i){i.user_id&&t.isNotSelf(i.user_id)&&e.push({user_id:i.user_id,article_id:i.id.toString(),article_type:"joke"})})),this.jokeRewardArr=this.rewardAllType?[]:e},onSearch:function(){1===this.page?this.init():this.page=1}},watch:{keys:{deep:!0,handler:function(){this.init()},immediate:!0},reset_keys:{deep:!0,handler:function(){this.jokeRewardArr=[],this.page=1}},page:{deep:!0,handler:function(){this.jokeRewardArr=[]}}},mounted:function(){var t=this;window.onresize=function(){t.windowWidth=document.documentElement.clientWidth}},created:function(){this.sortEmotion()}},N=J,D=(i("c2c9"),Object(b["a"])(N,n,o,!1,null,null,null));e["default"]=D.exports},fb92:function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return s}));i("99af");var n=i("5a0c"),o=i.n(n),a=i("4208");function s(t){return o()().from(o()(t))}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=t.getFullYear(),o=t.getMonth()+1,a=t.getDate(),s=i?"".concat(n).concat(e).concat(c(o)).concat(e).concat(c(a)):"".concat(n).concat(e).concat(o).concat(e).concat(a);return s}function c(t){return t<10?"0"+t:t}i("a471"),o.a.locale("zh-cn"),o.a.extend(a)}}]);
//# sourceMappingURL=chunk-cd5ab2a4.bacb2690.js.map