(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bcc954e"],{"057f":function(t,e,n){var i=n("c6b6"),s=n("fc6a"),r=n("241c").f,a=n("4dae"),c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return r(t)}catch(e){return a(c)}};t.exports.f=function(t){return c&&"Window"==i(t)?o(t):r(s(t))}},3924:function(t,e,n){},"3d87":function(t,e,n){var i=n("4930");t.exports=i&&!!Symbol["for"]&&!!Symbol.keyFor},"428f":function(t,e,n){var i=n("da84");t.exports=i},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");var i=n("ade3");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"57b9":function(t,e,n){var i=n("c65b"),s=n("d066"),r=n("b622"),a=n("cb2d");t.exports=function(){var t=s("Symbol"),e=t&&t.prototype,n=e&&e.valueOf,c=r("toPrimitive");e&&!e[c]&&a(e,c,(function(t){return i(n,this)}),{arity:1})}},"5a47":function(t,e,n){var i=n("23e7"),s=n("4930"),r=n("d039"),a=n("7418"),c=n("7b0b"),o=!s||r((function(){a.f(1)}));i({target:"Object",stat:!0,forced:o},{getOwnPropertySymbols:function(t){var e=a.f;return e?e(c(t)):[]}})},"5ea3":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-search"},[n("div",{key:"exam-search",staticClass:"m-archive-search m-exam-search",attrs:{slot:"search-before"},slot:"search-before"},[n("a",{staticClass:"u-publish el-button el-button--primary",attrs:{href:t.publish_link}},[t._v("+ 发布作品")]),n("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入搜索内容"},model:{value:t.search,callback:function(e){t.search="string"===typeof e?e.trim():e},expression:"search"}},[n("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("关键词")]),n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1),n("div",{staticClass:"m-exam-tags"},t._l(t.tags,(function(e,i){return n("span",{key:i,staticClass:"el-tag el-tag--small el-tag--plain",class:t.tag_index==i?"active":"",on:{click:function(n){return t.selected(e,i)}}},[t._v(t._s(e))])})),0),n("div",{staticClass:"m-exam-tags"},t._l(t.clients,(function(e,i){return n("span",{key:i,staticClass:"el-tag el-tag--small el-tag--plain",class:t.client_index==i?"active":"",on:{click:function(n){return t.switchClient(e,i)}}},[t._v(t._s(e.value))])})),0)])},s=[],r=n("5530"),a=(n("c740"),n("6495")),c=n("85e4"),o=n("65c2"),u={name:"Search",data:function(){return{search:"",activeIndex:0,tags:a,tag:"",tag_index:0,client:"",client_index:0}},computed:{publish_link:function(){return Object(c["publishLink"])("exam")},clients:function(){var t=[];for(var e in o["__clients"])t.unshift({key:e,value:o["__clients"][e]});return t.unshift({key:"",value:"全部"}),t}},watch:{search:{handler:function(t){this.$emit("update",{key:"search",val:t})}},client:{handler:function(t){this.$emit("update",{key:"client",val:t})}},tag:{handler:function(t){this.tag!=this.$route.query.tag&&this.$router.push({query:Object(r["a"])(Object(r["a"])({},this.$route.query),{},{tag:t})}),this.$emit("update",{key:"tag",val:t})}}},methods:{selected:function(t,e){this.tag=t,this.tag_index=e},clickTabs:function(t,e){this.activeIndex=t},switchClient:function(t,e){this.client=t.key,this.client_index=e}},created:function(){var t=this;this.$route.query.tag&&(this.tag=this.$route.query.tag,this.tag_index=this.tags.findIndex((function(e){return e==t.tag})))}},l=u,f=(n("640b"),n("2877")),d=Object(f["a"])(l,i,s,!1,null,null,null);e["a"]=d.exports},"640b":function(t,e,n){"use strict";n("3924")},6495:function(t){t.exports=JSON.parse('["全部","PVE","PVP","PVX","PVBB","语文","数学","外语","信息","物理","化学","生物","政治","历史","地理","美术","音乐","体育","劳动","理综","文综"]')},"6a7f":function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return c})),n.d(e,"g",(function(){return o})),n.d(e,"h",(function(){return u})),n.d(e,"f",(function(){return l})),n.d(e,"a",(function(){return f}));n("99af");var i=n("41cb");function s(t){return Object(i["c"])().get("/api/question/user-exam-paper",{params:t})}function r(t){return Object(i["c"])().get("api/question/public-list",{params:t})}function a(t){return Object(i["c"])({proxy:!0}).get("api/question/user-exam-paper/"+t+"?details")}function c(t){return Object(i["c"])({proxy:!0}).get("api/question/"+t+"/no-answer")}function o(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(i["c"])({proxy:!0}).post("api/question/user-exam-paper/".concat(t,"/i-finish-all").concat(n?"?force":""),e)}function u(t,e){return Object(i["c"])({proxy:!0}).post("api/question/user-exam-paper/q/".concat(t,"/answer"),e)}function l(t,e){return Object(i["c"])({proxy:!0}).get("api/summary-any/"+t+"-"+e+"/stat")}function f(t,e){return Object(i["c"])({proxy:!0}).put("api/question/exam-paper/"+t+"/opt","",{params:{action:e},withCredentials:!0})}},"746f":function(t,e,n){var i=n("428f"),s=n("1a2d"),r=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});s(e,t)||a(e,t,{value:r.f(t)})}},7473:function(t,e,n){},"75b0":function(t,e,n){"use strict";n("7473")},9430:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item?n("div",{staticClass:"v-single-card"},[n("div",{staticClass:"m-single-question"},[n("div",{staticClass:"u-number"},[n("div",{staticClass:"u-left"},[t.index?n("span",{staticClass:"u-num"},[t._v(t._s(t.index))]):t._e(),t.index&&t.item_tags.length?t._l(t.item_tags,(function(e,i){return n("a",{key:i,staticClass:"u-tag",attrs:{href:t.tagsLink(e),target:"_blank"}},[t._v(t._s(e))])})):t._e()],2),n("div",{staticClass:"u-right"},[n("a",{staticClass:"u-user",attrs:{href:t.authorLink(t.item.createUserId),target:"_blank"}},[n("span",{staticClass:"u-label"},[t._v("出题人")]),t._v(t._s(t.item.createUser))]),n("a",{staticClass:"u-exam",attrs:{href:""+t.exam_link+t.item.id,target:"_blank"}},[n("span",{staticClass:"u-label"},[t._v("试题编号")]),t._v(t._s(t.item.id))])])]),n("div",{staticClass:"u-cont"},[n("div",{staticClass:"u-title"},[n("span",{staticClass:"u-hint"},[t._v(" ["+t._s("checkbox"==t.item.type?"多选题":"单选题")+"] ")]),n("span",{staticClass:"m-html-title",domProps:{innerHTML:t._s(t.resolveImagePath(t.item.title))}})]),n("div",{staticClass:"u-option"},["checkbox"===t.item.type?[n("el-checkbox-group",{on:{change:function(e){return t.checkAnswers(t.item.id,t.checkbox)}},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}},t._l(t.options,(function(e,i){return n("el-checkbox",{key:i,class:t.myWrongClass(i),attrs:{label:i,border:"",disabled:t.isSubmitted}},[n("div",{staticClass:"u-radio"},[n("span",{staticClass:"u-num"},[t._v(t._s(String.fromCharCode(65+i))+".")]),n("span",{staticClass:"m-option-content",domProps:{innerHTML:t._s(t.resolveImagePath(e))}})])])})),1)]:[n("el-radio-group",{on:{change:function(e){return t.checkAnswers(t.item.id,t.radio)}},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},t._l(t.options,(function(e,i){return n("el-radio",{key:i,class:t.myWrongClass(i),attrs:{label:i,border:"",disabled:t.isSubmitted}},[n("div",{staticClass:"u-radio"},[n("span",{staticClass:"u-num"},[t._v(t._s(String.fromCharCode(65+i))+".")]),n("span",{staticClass:"m-option-content",domProps:{innerHTML:t._s(t.resolveImagePath(e))}})])])})),1)]],2)])]),t.answer?n("div",{staticClass:"m-single-answer"},[n("div",{staticClass:"u-status",class:t.myAnswersClass(t.answer)},[t._v(" "+t._s(t.status)+" ")]),n("div",{staticClass:"u-answer"},[t._v(" 你的答案： "),t.answer.myAnswer?n("span",t._l(t.answer.myAnswer,(function(e){return n("b",{key:e},[t._v(t._s(t.letter(e)))])})),0):n("b",[t._v("-")])]),n("div",{staticClass:"u-answer"},[t._v(" 正确答案： "),t._l(t.answer.answerList,(function(e){return n("b",{key:e},[t._v(t._s(t.letter(e)))])}))],2),n("hr"),n("div",{staticClass:"m-analysis"},[n("span",{staticClass:"u-label"},[t._v("解析：")]),t.answer.whyami?n("span",{domProps:{innerHTML:t._s(t.answer.whyami)}}):n("div",[t._v("暂无解析")])])]):t._e()]):t._e()},s=[],r=n("ade3"),a=(n("4de4"),n("d3b7"),n("d81d"),n("fb6a"),n("caad"),n("2532"),n("159b"),n("85e4")),c=(n("65c2"),n("6495")),o={name:"Card",props:["item","answer","index","isSubmitted"],data:function(){return{checkbox:[],radio:{}}},computed:{options:function(){return this.item.options},status:function(){return this.answer.myAnswer?this.answer.myAnswerIsRight?"回答正确":"回答错误":"未作答"},exam_link:function(){return"/exam/question/"},item_tags:function(){var t=this,e=this.item.tags.map((function(e){if(-1!==t.tags.indexOf(e))return e})).filter(Boolean);return e.length||(e[0]=this.item.tags[0]),e.slice(0,1)},tags:function(){return c.slice(5,c.length)}},watch:{item:{deep:!0,immediate:!0,handler:function(){var t=this;this.$nextTick((function(){t.initImgViewer()}))}}},methods:{authorLink:a["authorLink"],resolveImagePath:a["resolveImagePath"],checkAnswers:function(t,e){var n=Array.isArray(e)?e:[e];this.$emit("changeVal",Object(r["a"])({},t,n))},myAnswersClass:function(t){var e=t.myAnswer,n=t.myAnswerIsRight;return e?n?"isCorrect":"isWrong":"noAnswer"},myWrongClass:function(t){if(!this.answer)return"";if(this.answer.myAnswerIsRight)return"";var e=this.answer.answerList,n=this.answer.myAnswer||[];return e.includes(t)?"isCorrect":n.includes(t)?"isWrong":void 0},letter:function(t){return String.fromCharCode(65+t)},tagsLink:function(t){return"/exam/?tag=".concat(t)},initImgViewer:function(){var t=this,e=document.querySelectorAll(".m-html-title img");e.forEach((function(e){e.onclick=function(){t.$hevueImgPreview({url:e.src,controlBar:!1,clickMaskCLose:!0})}}))}}},u=o,l=n("2877"),f=Object(l["a"])(u,i,s,!1,null,null,null);e["a"]=f.exports},a4d3:function(t,e,n){n("d9f5"),n("b4f8"),n("c513"),n("e9c4"),n("5a47")},ade3:function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return i}))},b4f8:function(t,e,n){var i=n("23e7"),s=n("d066"),r=n("1a2d"),a=n("577e"),c=n("5692"),o=n("3d87"),u=c("string-to-symbol-registry"),l=c("symbol-to-string-registry");i({target:"Symbol",stat:!0,forced:!o},{for:function(t){var e=a(t);if(r(u,e))return u[e];var n=s("Symbol")(e);return u[e]=n,l[n]=e,n}})},c513:function(t,e,n){var i=n("23e7"),s=n("1a2d"),r=n("d9b5"),a=n("0d51"),c=n("5692"),o=n("3d87"),u=c("symbol-to-string-registry");i({target:"Symbol",stat:!0,forced:!o},{keyFor:function(t){if(!r(t))throw TypeError(a(t)+" is not a symbol");if(s(u,t))return u[t]}})},c740:function(t,e,n){"use strict";var i=n("23e7"),s=n("b727").findIndex,r=n("44d2"),a="findIndex",c=!0;a in[]&&Array(1)[a]((function(){c=!1})),i({target:"Array",proto:!0,forced:c},{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),r(a)},d9f5:function(t,e,n){"use strict";var i=n("23e7"),s=n("da84"),r=n("c65b"),a=n("e330"),c=n("c430"),o=n("83ab"),u=n("4930"),l=n("d039"),f=n("1a2d"),d=n("3a9b"),m=n("825a"),h=n("fc6a"),p=n("a04b"),b=n("577e"),v=n("5c6c"),g=n("7c73"),y=n("df75"),_=n("241c"),w=n("057f"),k=n("7418"),C=n("06cf"),x=n("9bf2"),O=n("37e8"),j=n("d1e7"),P=n("cb2d"),S=n("5692"),L=n("f772"),I=n("d012"),q=n("90e3"),A=n("b622"),$=n("e538"),T=n("746f"),E=n("57b9"),D=n("d44e"),M=n("69f3"),V=n("b727").forEach,B=L("hidden"),W="Symbol",U="prototype",H=M.set,N=M.getterFor(W),F=Object[U],J=s.Symbol,R=J&&J[U],Q=s.TypeError,X=s.QObject,z=C.f,G=x.f,K=w.f,Y=j.f,Z=a([].push),tt=S("symbols"),et=S("op-symbols"),nt=S("wks"),it=!X||!X[U]||!X[U].findChild,st=o&&l((function(){return 7!=g(G({},"a",{get:function(){return G(this,"a",{value:7}).a}})).a}))?function(t,e,n){var i=z(F,e);i&&delete F[e],G(t,e,n),i&&t!==F&&G(F,e,i)}:G,rt=function(t,e){var n=tt[t]=g(R);return H(n,{type:W,tag:t,description:e}),o||(n.description=e),n},at=function(t,e,n){t===F&&at(et,e,n),m(t);var i=p(e);return m(n),f(tt,i)?(n.enumerable?(f(t,B)&&t[B][i]&&(t[B][i]=!1),n=g(n,{enumerable:v(0,!1)})):(f(t,B)||G(t,B,v(1,{})),t[B][i]=!0),st(t,i,n)):G(t,i,n)},ct=function(t,e){m(t);var n=h(e),i=y(n).concat(dt(n));return V(i,(function(e){o&&!r(ut,n,e)||at(t,e,n[e])})),t},ot=function(t,e){return void 0===e?g(t):ct(g(t),e)},ut=function(t){var e=p(t),n=r(Y,this,e);return!(this===F&&f(tt,e)&&!f(et,e))&&(!(n||!f(this,e)||!f(tt,e)||f(this,B)&&this[B][e])||n)},lt=function(t,e){var n=h(t),i=p(e);if(n!==F||!f(tt,i)||f(et,i)){var s=z(n,i);return!s||!f(tt,i)||f(n,B)&&n[B][i]||(s.enumerable=!0),s}},ft=function(t){var e=K(h(t)),n=[];return V(e,(function(t){f(tt,t)||f(I,t)||Z(n,t)})),n},dt=function(t){var e=t===F,n=K(e?et:h(t)),i=[];return V(n,(function(t){!f(tt,t)||e&&!f(F,t)||Z(i,tt[t])})),i};u||(J=function(){if(d(R,this))throw Q("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?b(arguments[0]):void 0,e=q(t),n=function(t){this===F&&r(n,et,t),f(this,B)&&f(this[B],e)&&(this[B][e]=!1),st(this,e,v(1,t))};return o&&it&&st(F,e,{configurable:!0,set:n}),rt(e,t)},R=J[U],P(R,"toString",(function(){return N(this).tag})),P(J,"withoutSetter",(function(t){return rt(q(t),t)})),j.f=ut,x.f=at,O.f=ct,C.f=lt,_.f=w.f=ft,k.f=dt,$.f=function(t){return rt(A(t),t)},o&&(G(R,"description",{configurable:!0,get:function(){return N(this).description}}),c||P(F,"propertyIsEnumerable",ut,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:J}),V(y(nt),(function(t){T(t)})),i({target:W,stat:!0,forced:!u},{useSetter:function(){it=!0},useSimple:function(){it=!1}}),i({target:"Object",stat:!0,forced:!u,sham:!o},{create:ot,defineProperty:at,defineProperties:ct,getOwnPropertyDescriptor:lt}),i({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:ft}),E(),D(J,W),I[B]=!0},dbb4:function(t,e,n){var i=n("23e7"),s=n("83ab"),r=n("56ef"),a=n("fc6a"),c=n("06cf"),o=n("8418");i({target:"Object",stat:!0,sham:!s},{getOwnPropertyDescriptors:function(t){var e,n,i=a(t),s=c.f,u=r(i),l={},f=0;while(u.length>f)n=s(i,e=u[f++]),void 0!==n&&o(l,e,n);return l}})},e439:function(t,e,n){var i=n("23e7"),s=n("d039"),r=n("fc6a"),a=n("06cf").f,c=n("83ab"),o=s((function(){a(1)})),u=!c||o;i({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(r(t),e)}})},e538:function(t,e,n){var i=n("b622");e.f=i},fb94:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item?n("div",{staticClass:"v-single-title"},[n("div",{staticClass:"m-title"},[t.isPaper?n("div",{staticClass:"u-title"},[t._v(t._s(t.title))]):t._e(),n("div",{staticClass:"u-info"},[n("div",{staticClass:"u-info-subblock"},[n("span",[t._v("适用客户端：")]),n("span",{class:"u-client i-client-"+(t.item.client||"std")},[t._v(t._s(t.clients[t.item.client||"std"]))])]),n("div",{staticClass:"u-info-subblock u-star"},[n("span",[t._v("难度：")]),n("el-rate",{attrs:{disabled:"","text-color":"#ff9900"},model:{value:t.item.hardStar,callback:function(e){t.$set(t.item,"hardStar",e)},expression:"item.hardStar"}})],1),n("div",{staticClass:"u-info-subblock u-tags u-line"},[n("span",[t._v("标签：")]),t.item.tags&&t.item.tags.length?t._l(t.item.tags,(function(e){return n("span",{key:e,staticClass:"u-tag"},[t._v(" "+t._s(e))])})):n("span",{staticClass:"u-tag-null"},[t._v("暂无")])],2),t.item.questionList?n("div",{staticClass:"u-info-subblock u-line"},[n("span",[t._v("计分：")]),n("b",[t._v("共"+t._s(t.item.questionDetailList.length)+"题，每题"+t._s(t.number)+"分，满分100分。")])]):t._e(),n("div",{staticClass:"u-info-subblock u-author"},[n("span",[t._v("出卷人：")]),n("a",{attrs:{href:t.authorLink(t.item.createUserId),target:"_blank"}},[t._v(t._s(t.item.createUser))])]),n("div",{staticClass:"u-info-subblock u-views"},[t._v(" 考生数："),n("span",[t._v(t._s(t.examinee(t.views)))])]),n("div",{staticClass:"u-info-subblock u-time"},[t._v(" 贡献时间："),n("span",[t._v(t._s(t.showTime(t.item.createTime)))])]),t.canManage?n("div",{staticClass:"u-info-subblock"},[n("a",{staticClass:"u-edit",attrs:{href:t.editLink(t.type,t.item.id)}},[n("i",{staticClass:"el-icon-edit-outline"}),n("span",[t._v("编辑")])])]):t._e()]),t.item.desc?n("div",{staticClass:"u-desc"},[t._v("简介："+t._s(t.desc||"-"))]):t._e()]),n("div",{staticClass:"m-setBar"}),t.score&&-1!==t.score?n("div",{staticClass:"m-score"},[n("div",{staticClass:"u-label"},[t._v("试卷成绩")]),n("div",{staticClass:"u-score"},[t._v(t._s(t.score))])]):t._e()]):t._e()},s=[],r=(n("caad"),n("2532"),n("85e4")),a=n("65c2"),c=n("6a7f"),o=n("c9d2"),u=n("e4f1"),l={name:"Title",props:["item","score","type"],components:{},data:function(){return{collected:!1,views:-1,clients:a["__clients"]}},computed:{client:function(){return location.href.includes("origin")?"origin":"std"},isPaper:function(){return"paper"==this.type},id:function(){return this.$route.params.id},title:function(){return"paper"==this.type?"《"+this.item.title+"》":this.item.title},desc:function(){return this.item.desc||"作者很懒，没有备注"},sharingTitle:function(){return"paper"==this.type?"试卷":"问题"},number:function(){return Math.floor(100/this.item.questionIdList.length)},canManage:function(){return o["a"].isEditor()||o["a"].getInfo().uid==this.item.createUserId}},watch:{},methods:{check:function(t){var e=this;"delete"==t?this.$alert("确定删除吗？","消息",{confirmButtonText:"确定",callback:function(n){"confirm"==n&&Object(c["a"])(e.id,t).then((function(t){e.$message({message:t.data.msg||"操作成功",type:"success"}),location.reload()}))}}):Object(c["a"])(this.id,t).then((function(t){e.$message({message:t.data.msg||"操作成功",type:"success"}),location.reload()}))},editLink:r["editLink"],showTime:function(t){return Object(u["b"])(new Date(1e3*t))},authorLink:r["authorLink"],publishLink:r["publishLink"],examinee:function(t){return t<1?"-":t}},created:function(){var t=this;Object(c["f"])(this.type,this.id).then((function(e){var n;t.views=null===(n=e.data)||void 0===n?void 0:n.views}))},mounted:function(){}},f=l,d=(n("75b0"),n("2877")),m=Object(d["a"])(f,i,s,!1,null,null,null);e["a"]=m.exports}}]);
//# sourceMappingURL=chunk-3bcc954e.088e86a5.js.map