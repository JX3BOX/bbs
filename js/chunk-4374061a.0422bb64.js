(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4374061a"],{3924:function(t,e,s){},5530:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));s("b64b"),s("a4d3"),s("4de4"),s("e439"),s("159b"),s("dbb4");var n=s("ade3");function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function a(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}},"5ea3":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"v-search"},[s("div",{key:"exam-search",staticClass:"m-archive-search m-exam-search",attrs:{slot:"search-before"},slot:"search-before"},[s("a",{staticClass:"u-publish el-button el-button--primary",attrs:{href:t.publish_link}},[t._v("+ 发布作品")]),s("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入搜索内容"},model:{value:t.search,callback:function(e){t.search="string"===typeof e?e.trim():e},expression:"search"}},[s("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("关键词")]),s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1),s("div",{staticClass:"m-exam-tags"},t._l(t.tags,(function(e,n){return s("span",{key:n,staticClass:"el-tag el-tag--small el-tag--plain",class:t.tag_index==n?"active":"",on:{click:function(s){return t.selected(e,n)}}},[t._v(t._s(e))])})),0),s("div",{staticClass:"m-exam-tags"},t._l(t.clients,(function(e,n){return s("span",{key:n,staticClass:"el-tag el-tag--small el-tag--plain",class:t.client_index==n?"active":"",on:{click:function(s){return t.switchClient(e,n)}}},[t._v(t._s(e.value))])})),0)])},i=[],a=s("5530"),r=(s("c740"),s("6495")),c=s("85e4"),o=s("65c2"),u={name:"Search",data:function(){return{search:"",activeIndex:0,tags:r,tag:"",tag_index:0,client:"",client_index:0}},computed:{publish_link:function(){return Object(c["publishLink"])("exam")},clients:function(){var t=[];for(var e in o["__clients"])t.unshift({key:e,value:o["__clients"][e]});return t.unshift({key:"",value:"全部"}),t}},watch:{search:{handler:function(t){this.$emit("update",{key:"search",val:t})}},client:{handler:function(t){this.$emit("update",{key:"client",val:t})}},tag:{handler:function(t){this.tag!=this.$route.query.tag&&this.$router.push({query:Object(a["a"])(Object(a["a"])({},this.$route.query),{},{tag:t})}),this.$emit("update",{key:"tag",val:t})}}},methods:{selected:function(t,e){this.tag=t,this.tag_index=e},clickTabs:function(t,e){this.activeIndex=t},switchClient:function(t,e){this.client=t.key,this.client_index=e}},created:function(){var t=this;this.$route.query.tag&&(this.tag=this.$route.query.tag,this.tag_index=this.tags.findIndex((function(e){return e==t.tag})))}},l=u,d=(s("640b"),s("2877")),f=Object(d["a"])(l,n,i,!1,null,null,null);e["a"]=f.exports},"640b":function(t,e,s){"use strict";s("3924")},6495:function(t){t.exports=JSON.parse('["全部","PVE","PVP","PVX","PVBB","语文","数学","外语","信息","物理","化学","生物","政治","历史","地理","美术","音乐","体育","劳动","理综","文综"]')},"6a7f":function(t,e,s){"use strict";s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return a})),s.d(e,"d",(function(){return r})),s.d(e,"e",(function(){return c})),s.d(e,"g",(function(){return o})),s.d(e,"h",(function(){return u})),s.d(e,"f",(function(){return l})),s.d(e,"a",(function(){return d}));s("99af");var n=s("41cb");function i(t){return Object(n["c"])().get("/api/question/user-exam-paper",{params:t})}function a(t){return Object(n["c"])().get("api/question/public-list",{params:t})}function r(t){return Object(n["c"])({proxy:!0}).get("api/question/user-exam-paper/"+t+"?details")}function c(t){return Object(n["c"])({proxy:!0}).get("api/question/"+t+"/no-answer")}function o(t,e){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(n["c"])({proxy:!0}).post("api/question/user-exam-paper/".concat(t,"/i-finish-all").concat(s?"?force":""),e)}function u(t,e){return Object(n["c"])({proxy:!0}).post("api/question/user-exam-paper/q/".concat(t,"/answer"),e)}function l(t,e){return Object(n["c"])({proxy:!0}).get("api/summary-any/"+t+"-"+e+"/stat")}function d(t,e){return Object(n["c"])({proxy:!0}).put("api/question/exam-paper/"+t+"/opt","",{params:{action:e},withCredentials:!0})}},7473:function(t,e,s){},"75b0":function(t,e,s){"use strict";s("7473")},9430:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.item?s("div",{staticClass:"v-single-card"},[s("div",{staticClass:"m-single-question"},[s("div",{staticClass:"u-number"},[s("div",{staticClass:"u-left"},[t.index?s("span",{staticClass:"u-num"},[t._v(t._s(t.index))]):t._e(),t.index&&t.item_tags.length?t._l(t.item_tags,(function(e,n){return s("a",{key:n,staticClass:"u-tag",attrs:{href:t.tagsLink(e),target:"_blank"}},[t._v(t._s(e))])})):t._e()],2),s("div",{staticClass:"u-right"},[s("a",{staticClass:"u-user",attrs:{href:t.authorLink(t.item.createUserId),target:"_blank"}},[s("span",{staticClass:"u-label"},[t._v("出题人")]),t._v(t._s(t.item.createUser))]),s("a",{staticClass:"u-exam",attrs:{href:""+t.exam_link+t.item.id,target:"_blank"}},[s("span",{staticClass:"u-label"},[t._v("试题编号")]),t._v(t._s(t.item.id))])])]),s("div",{staticClass:"u-cont"},[s("div",{staticClass:"u-title"},[s("span",{staticClass:"u-hint"},[t._v(" ["+t._s("checkbox"==t.item.type?"多选题":"单选题")+"] ")]),s("span",{staticClass:"m-html-title",domProps:{innerHTML:t._s(t.resolveImagePath(t.item.title))}})]),s("div",{staticClass:"u-option"},["checkbox"===t.item.type?[s("el-checkbox-group",{on:{change:function(e){return t.checkAnswers(t.item.id,t.checkbox)}},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}},t._l(t.options,(function(e,n){return s("el-checkbox",{key:n,class:t.myWrongClass(n),attrs:{label:n,border:"",disabled:t.isSubmitted}},[s("div",{staticClass:"u-radio"},[s("span",{staticClass:"u-num"},[t._v(t._s(String.fromCharCode(65+n))+".")]),s("span",{staticClass:"m-option-content",domProps:{innerHTML:t._s(t.resolveImagePath(e))}})])])})),1)]:[s("el-radio-group",{on:{change:function(e){return t.checkAnswers(t.item.id,t.radio)}},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},t._l(t.options,(function(e,n){return s("el-radio",{key:n,class:t.myWrongClass(n),attrs:{label:n,border:"",disabled:t.isSubmitted}},[s("div",{staticClass:"u-radio"},[s("span",{staticClass:"u-num"},[t._v(t._s(String.fromCharCode(65+n))+".")]),s("span",{staticClass:"m-option-content",domProps:{innerHTML:t._s(t.resolveImagePath(e))}})])])})),1)]],2)])]),t.answer?s("div",{staticClass:"m-single-answer"},[s("div",{staticClass:"u-status",class:t.myAnswersClass(t.answer)},[t._v(" "+t._s(t.status)+" ")]),s("div",{staticClass:"u-answer"},[t._v(" 你的答案： "),t.answer.myAnswer?s("span",t._l(t.answer.myAnswer,(function(e){return s("b",{key:e},[t._v(t._s(t.letter(e)))])})),0):s("b",[t._v("-")])]),s("div",{staticClass:"u-answer"},[t._v(" 正确答案： "),t._l(t.answer.answerList,(function(e){return s("b",{key:e},[t._v(t._s(t.letter(e)))])}))],2),s("hr"),s("div",{staticClass:"m-analysis"},[s("span",{staticClass:"u-label"},[t._v("解析：")]),t.answer.whyami?s("span",{domProps:{innerHTML:t._s(t.answer.whyami)}}):s("div",[t._v("暂无解析")])])]):t._e()]):t._e()},i=[],a=s("ade3"),r=(s("4de4"),s("d81d"),s("fb6a"),s("caad"),s("2532"),s("159b"),s("85e4")),c=(s("65c2"),s("6495")),o={name:"Card",props:["item","answer","index","isSubmitted"],data:function(){return{checkbox:[],radio:{}}},computed:{options:function(){return this.item.options},status:function(){return this.answer.myAnswer?this.answer.myAnswerIsRight?"回答正确":"回答错误":"未作答"},exam_link:function(){return"/exam/question/"},item_tags:function(){var t=this,e=this.item.tags.map((function(e){if(-1!==t.tags.indexOf(e))return e})).filter(Boolean);return e.length||(e[0]=this.item.tags[0]),e.slice(0,1)},tags:function(){return c.slice(5,c.length)}},watch:{item:{deep:!0,immediate:!0,handler:function(){var t=this;this.$nextTick((function(){t.initImgViewer()}))}}},methods:{authorLink:r["authorLink"],resolveImagePath:r["resolveImagePath"],checkAnswers:function(t,e){var s=Array.isArray(e)?e:[e];this.$emit("changeVal",Object(a["a"])({},t,s))},myAnswersClass:function(t){var e=t.myAnswer,s=t.myAnswerIsRight;return e?s?"isCorrect":"isWrong":"noAnswer"},myWrongClass:function(t){if(!this.answer)return"";if(this.answer.myAnswerIsRight)return"";var e=this.answer.answerList,s=this.answer.myAnswer||[];return e.includes(t)?"isCorrect":s.includes(t)?"isWrong":void 0},letter:function(t){return String.fromCharCode(65+t)},tagsLink:function(t){return"/exam/?tag=".concat(t)},initImgViewer:function(){var t=this,e=document.querySelectorAll(".m-html-title img");e.forEach((function(e){e.onclick=function(){t.$hevueImgPreview({url:e.src,controlBar:!1,clickMaskCLose:!0})}}))}}},u=o,l=s("2877"),d=Object(l["a"])(u,n,i,!1,null,null,null);e["a"]=d.exports},ade3:function(t,e,s){"use strict";function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}s.d(e,"a",(function(){return n}))},c740:function(t,e,s){"use strict";var n=s("23e7"),i=s("b727").findIndex,a=s("44d2"),r="findIndex",c=!0;r in[]&&Array(1)[r]((function(){c=!1})),n({target:"Array",proto:!0,forced:c},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a(r)},dbb4:function(t,e,s){var n=s("23e7"),i=s("83ab"),a=s("56ef"),r=s("fc6a"),c=s("06cf"),o=s("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,s,n=r(t),i=c.f,u=a(n),l={},d=0;while(u.length>d)s=i(n,e=u[d++]),void 0!==s&&o(l,e,s);return l}})},e439:function(t,e,s){var n=s("23e7"),i=s("d039"),a=s("fc6a"),r=s("06cf").f,c=s("83ab"),o=i((function(){r(1)})),u=!c||o;n({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return r(a(t),e)}})},fb94:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.item?s("div",{staticClass:"v-single-title"},[s("div",{staticClass:"m-title"},[t.isPaper?s("div",{staticClass:"u-title"},[t._v(t._s(t.title))]):t._e(),s("div",{staticClass:"u-info"},[s("div",{staticClass:"u-info-subblock"},[s("span",[t._v("适用客户端：")]),s("span",{class:"u-client i-client-"+(t.item.client||"std")},[t._v(t._s(t.clients[t.item.client||"std"]))])]),s("div",{staticClass:"u-info-subblock u-star"},[s("span",[t._v("难度：")]),s("el-rate",{attrs:{disabled:"","text-color":"#ff9900"},model:{value:t.item.hardStar,callback:function(e){t.$set(t.item,"hardStar",e)},expression:"item.hardStar"}})],1),s("div",{staticClass:"u-info-subblock u-tags u-line"},[s("span",[t._v("标签：")]),t.item.tags&&t.item.tags.length?t._l(t.item.tags,(function(e){return s("span",{key:e,staticClass:"u-tag"},[t._v(" "+t._s(e))])})):s("span",{staticClass:"u-tag-null"},[t._v("暂无")])],2),t.item.questionList?s("div",{staticClass:"u-info-subblock u-line"},[s("span",[t._v("计分：")]),s("b",[t._v("共"+t._s(t.item.questionDetailList.length)+"题，每题"+t._s(t.number)+"分，满分100分。")])]):t._e(),s("div",{staticClass:"u-info-subblock u-author"},[s("span",[t._v("出卷人：")]),s("a",{attrs:{href:t.authorLink(t.item.createUserId),target:"_blank"}},[t._v(t._s(t.item.createUser))])]),s("div",{staticClass:"u-info-subblock u-views"},[t._v(" 考生数："),s("span",[t._v(t._s(t.examinee(t.views)))])]),s("div",{staticClass:"u-info-subblock u-time"},[t._v(" 贡献时间："),s("span",[t._v(t._s(t.showTime(t.item.createTime)))])]),t.canManage?s("div",{staticClass:"u-info-subblock"},[s("a",{staticClass:"u-edit",attrs:{href:t.editLink(t.type,t.item.id)}},[s("i",{staticClass:"el-icon-edit-outline"}),s("span",[t._v("编辑")])])]):t._e()]),t.item.desc?s("div",{staticClass:"u-desc"},[t._v("简介："+t._s(t.desc||"-"))]):t._e()]),s("div",{staticClass:"m-setBar"}),t.score&&-1!==t.score?s("div",{staticClass:"m-score"},[s("div",{staticClass:"u-label"},[t._v("试卷成绩")]),s("div",{staticClass:"u-score"},[t._v(t._s(t.score))])]):t._e()]):t._e()},i=[],a=(s("caad"),s("2532"),s("85e4")),r=s("65c2"),c=s("6a7f"),o=s("c9d2"),u=s("e4f1"),l={name:"Title",props:["item","score","type"],components:{},data:function(){return{collected:!1,views:-1,clients:r["__clients"]}},computed:{client:function(){return location.href.includes("origin")?"origin":"std"},isPaper:function(){return"paper"==this.type},id:function(){return this.$route.params.id},title:function(){return"paper"==this.type?"《"+this.item.title+"》":this.item.title},desc:function(){return this.item.desc||"作者很懒，没有备注"},sharingTitle:function(){return"paper"==this.type?"试卷":"问题"},number:function(){return Math.floor(100/this.item.questionIdList.length)},canManage:function(){return o["a"].isEditor()||o["a"].getInfo().uid==this.item.createUserId}},watch:{},methods:{check:function(t){var e=this;"delete"==t?this.$alert("确定删除吗？","消息",{confirmButtonText:"确定",callback:function(s){"confirm"==s&&Object(c["a"])(e.id,t).then((function(t){e.$message({message:t.data.msg||"操作成功",type:"success"}),location.reload()}))}}):Object(c["a"])(this.id,t).then((function(t){e.$message({message:t.data.msg||"操作成功",type:"success"}),location.reload()}))},editLink:a["editLink"],showTime:function(t){return Object(u["b"])(new Date(1e3*t))},authorLink:a["authorLink"],publishLink:a["publishLink"],examinee:function(t){return t<1?"-":t}},created:function(){var t=this;Object(c["f"])(this.type,this.id).then((function(e){var s;t.views=null===(s=e.data)||void 0===s?void 0:s.views}))},mounted:function(){}},d=l,f=(s("75b0"),s("2877")),h=Object(f["a"])(d,n,i,!1,null,null,null);e["a"]=h.exports}}]);
//# sourceMappingURL=chunk-4374061a.0422bb64.js.map