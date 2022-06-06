(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3241489a"],{"38bb":function(t,e,a){},5393:function(t,e,a){},6829:function(t,e,a){"use strict";a("5393")},"7ad6":function(t,e,a){"use strict";a("38bb")},adce:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-question-list"},[a("el-table",{staticClass:"m-list",staticStyle:{width:"100%"},attrs:{data:t.list},on:{"row-click":t.takeQuestion}},[a("el-table-column",{attrs:{prop:"id",label:"编号",width:"56"}}),a("el-table-column",{attrs:{prop:"title",label:"标题","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{staticClass:"u-title"},[a("span",{class:"u-client i-client-"+e.row.client},[t._v(t._s(t.clients[e.row.client]))]),t._v(" "+t._s(e.row.title)+" ")])}}])}),a("el-table-column",{attrs:{prop:"tags",label:"标签",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.tags,(function(i){return a("el-tag",{key:e.row.id+"_"+i,staticClass:"u-tag",attrs:{effect:"plain",type:"info",size:"small"}},[t._v(t._s(i))])}))}}])}),a("el-table-column",{attrs:{prop:"hardStar",label:"难度",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-rate",{attrs:{disabled:"","text-color":"#ff9900"},model:{value:e.row.hardStar,callback:function(a){t.$set(e.row,"hardStar",a)},expression:"scope.row.hardStar"}})]}}])}),a("el-table-column",{attrs:{prop:"author",label:"出题人",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.createUser)+" ")]}}])}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"}},[[a("el-button",{attrs:{size:"small",plain:"",type:"primary",icon:"el-icon-edit"}},[t._v("去答题")])]],2)],1)],1)},n=[],s=(a("caad"),a("2532"),a("d81d"),a("ac1f"),a("5319"),a("fb6a"),a("65c2")),r={name:"QuestionList",props:["data"],components:{},data:function(){return{clients:s["__clients"]}},computed:{client:function(){return location.href.includes("origin")?"origin":"std"},list:function(){var t;return null===(t=this.data)||void 0===t?void 0:t.map((function(t,e){try{var a=/^<([a-z]+)([^>]+)*(>(.*)<\/\1>|\s+\/>)$/gm;t.title=t.title.replace(a,""),t.tags=JSON.parse(t.tags).slice(0,3)}catch(i){console.log("解析题目列表tag异常",i),t.tags=[]}return t}))}},watch:{},methods:{takeQuestion:function(t,e,a){var i=t.id;this.$router.push({name:"question",params:{id:i}})}}},o=r,l=(a("7ad6"),a("2877")),c=Object(l["a"])(o,i,n,!1,null,null,null);e["a"]=c.exports},b6b3:function(t,e,a){"use strict";a("f18c")},e254:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-question"},["list"==t.mode?[a("QuestionSearch",{attrs:{type:"paper"},on:{update:t.updateParams}}),t.data&&t.data.length?a("QuestionList",{attrs:{data:t.data}}):a("el-alert",{attrs:{title:"没有找到相关条目",type:"info","show-icon":""}}),a("el-pagination",{staticClass:"m-exam-pagination",attrs:{background:"","page-size":t.per,"hide-on-single-page":!0,"current-page":t.page,layout:"total, prev, pager, next, jumper",total:t.total},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"current-change":t.skipTop}})]:[a("QuestionSingle")]],2)},n=[],s=(a("ac1f"),a("841c"),a("5ea3")),r=a("adce"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"v-question-single"},[a("div",{staticClass:"m-goback"},[a("el-button",{staticClass:"u-back",attrs:{size:"mini",icon:"el-icon-arrow-left"},on:{click:t.goBack}},[t._v("返回列表")])],1),a("SingleTitle",{attrs:{item:t.data,type:"question"}}),a("SingleCard",{attrs:{item:t.data,answer:t.answer,isSubmitted:t.isSubmitted},on:{changeVal:t.finalAnswer}}),a("div",{staticClass:"m-exam-submit",class:{isSubmitted:t.isSubmitted},on:{click:t.submit}},[a("el-button",{staticClass:"u-btn",attrs:{disabled:t.isSubmitted}},[t._v("提交")])],1),a("Thx",{staticClass:"m-thx",attrs:{postId:t.id,postType:"question",postTitle:t.title,userId:t.user_id,adminBoxcoinEnable:!0,userBoxcoinEnable:!0,client:t.client}}),a("div",{staticClass:"m-single-comment"},[a("el-divider",{attrs:{"content-position":"left"}},[t._v("评论")]),a("Comment",{attrs:{id:t.id,category:"question"}})],1)],1)},l=[],c=a("5530"),u=(a("d3b7"),a("e9c4"),a("d81d"),a("4e82"),a("9430")),d=a("fb94"),p=a("23d8"),f=a("9616"),m=a("6a7f"),h=a("c9d2"),g={name:"QuestionSingle",props:[],components:{SingleCard:u["a"],SingleTitle:d["a"],Comment:p["a"]},data:function(){return{data:{},answer:"",userAnswers:{},isSubmitted:!1,loading:!1}},computed:{id:function(){return this.$route.params.id},user_id:function(){return this.data.createUserId},title:function(){return this.data.title},client:function(){return this.data.client||"all"}},watch:{},methods:{loadData:function(){var t=this;this.loading=!0,Object(m["e"])(this.id).then((function(e){var a=e.data;a.tags=JSON.parse(a.tags),a.options=JSON.parse(a.options),t.data=a,Object(f["b"])("question",t.id)})).finally((function(){t.loading=!1}))},finalAnswer:function(t){this.userAnswers=Object(c["a"])(Object(c["a"])({},this.userAnswers),t)},submit:function(){var t=this;if(!h["a"].isLogin())return this.$message.error("请先登录");if("{}"==JSON.stringify(this.userAnswers))this.$alert("你没有选择答案哦~","提交失败",{type:"error"});else{var e={},a=this.userAnswers;for(var i in a)e=a[i].map((function(e){return t.data.options[e]}));Object(m["h"])(this.id,e).then((function(e){e.data&&(document.documentElement.scrollTop=0,e.data.question.answerList=e.data.question.answerList.sort(),t.answer=Object(c["a"])(Object(c["a"])({},e.data.question),{},{myAnswer:t.userAnswers[t.id].sort()}),t.isSubmitted=!0)}))}},goBack:function(){this.$router.push({name:"index",params:{type:"question"}})}},filters:{},created:function(){this.loadData()}},b=g,v=(a("6829"),a("2877")),w=Object(v["a"])(b,o,l,!1,null,null,null),S=w.exports,_={name:"Question",components:{QuestionList:r["a"],QuestionSingle:S,QuestionSearch:s["a"]},data:function(){return{data:[],search:"",tag:"",client:"",per:12,page:1,total:0}},computed:{mode:function(){return this.$route.params.id?"single":"list"},params:function(){var t={pageIndex:this.page,pageSize:this.per};return this.tag&&(t.tag=this.tag),this.search&&(t.title=this.search),this.client&&(t.client=this.client),t}},methods:{getListData:function(){var t=this;Object(m["c"])(this.params).then((function(e){var a,i;t.data=(null===(a=e.data)||void 0===a?void 0:a.data)||"",t.total=~~(null===(i=e.data)||void 0===i?void 0:i.page.total)||0}))},updateParams:function(t){var e=t.key,a=t.val;"全部"==a&&(a=""),this[e]=a},skipTop:function(){window.scrollTo(0,0)}},created:function(){"list"==this.mode&&this.getListData()},watch:{params:{immediate:!0,deep:!0,handler:function(){this.getListData()}}}},k=_,y=(a("b6b3"),Object(v["a"])(k,i,n,!1,null,null,null));e["default"]=y.exports},f18c:function(t,e,a){}}]);
//# sourceMappingURL=chunk-3241489a.a309fde1.js.map