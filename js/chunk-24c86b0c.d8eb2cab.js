(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24c86b0c"],{"02aa":function(t,e,i){"use strict";i.r(e);i("99af");var s=function(){var t=this,e=t._self._c;return e("CommunitySingleLayout",{attrs:{post:t.post}},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-community-single"},[e("div",{staticClass:"m-community-header"},[e("PostHeader",{attrs:{post:t.postHeader,stat:t.stat},scopedSlots:t._u([{key:"title_before",fn:function(){return[e("div",{staticClass:"m-topic-category-box"},[e("div",{class:"m-topic-category",style:"background-color: ".concat(t.styles.hoverColor,";color:").concat(t.styles.color,";")},[e("img",{directives:[{name:"svg-inline",rawName:"v-svg-inline"}],staticClass:"u-icon",attrs:{src:i("1c2f")("./".concat(t.styles.icon,".svg"))}}),e("div",[t._v(t._s(t.post.category))])])])]},proxy:!0}])}),e("el-divider",{attrs:{"content-position":"left"}},[t._v("JX3BOX")])],1),e("div",{staticClass:"m-list-box"},[e("div",{staticClass:"m-master-box"},[1===this.page?e("ReplyItem",{attrs:{isMaster:!0,post:t.post}}):t._e()],1),e("div",{staticClass:"m-reply-box"},t._l(t.replyList,(function(t,i){return e("ReplyItem",{key:i,attrs:{post:t}})})),1)]),e("div",{staticClass:"m-community-footer"},[e("div",{staticClass:"m-pagination-box"},[e("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","hide-on-single-page":!0,"page-size":t.per,total:t.total,"current-page":t.page},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"current-change":t.changePage}})],1),e("el-divider",{attrs:{"content-position":"left"}},[t._v("回帖")]),e("div",{staticClass:"u-editor"},[e("CommentEditor",{on:{submit:t.onReplyTopic}})],1)],1)])])},n=[],o=i("5530"),a=(i("7db0"),i("caad"),i("a15b"),i("d81d"),i("14d9"),i("b0c0"),i("b64b"),i("d3b7"),i("2532"),i("ade3")),r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-comment-wrapper",attrs:{id:"layer-".concat(t.post.layer)}},[e("div",{staticClass:"m-comment-wrapper__left"},[e("CommentUser",{attrs:{uid:t.userInfo.id}})],1),e("div",{staticClass:"m-comment-wrapper__right"},[e("div",{staticClass:"m-comment-wrapper__right-box"},[e("div",[e("div",{staticClass:"u-layer"},[t._v(" "+t._s(t.isMaster?"楼主":t.post.layer+"楼")+" "),e("div",{staticClass:"u-layer-toolbar"},[t.isPostOwner?e("el-button",{staticClass:"u-layer-btn",attrs:{type:"warning",icon:"el-icon-edit"},on:{click:t.onEditClick}},[t._v("编辑")]):t._e(),t.isMaster?e("el-button",{class:"u-layer-btn u-only-btn ".concat(t.onlyAuthor&&"u-unset"),attrs:{type:"primary"},on:{click:function(e){return t.setOnlyAuthor(!t.onlyAuthor)}}},[e("svg",{directives:[{name:"show",rawName:"v-show",value:!t.onlyAuthor,expression:"!onlyAuthor"}],attrs:Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","svg-inline":""},"width","14"),"height","14"),"role","presentation"),"focusable","false"),"tabindex","-1")},[e("path",{attrs:{"fill-rule":"evenodd",fill:"#FFF",d:"M8 .667c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zM8 2a2.666 2.666 0 110 5.333A2.666 2.666 0 118 2zm6 9.333v-.666a2 2 0 00-4 0v.666h-.667v3.334h5.333v-3.334H14zM2.667 14.667H4a4 4 0 014-4V9.333a5.333 5.333 0 00-5.333 5.334zM12 10c.368 0 .666.299.666.667v.666h-1.333v-.666c0-.368.299-.667.667-.667z"}})]),t._v(" "+t._s(t.onlyAuthor?"取消只看楼主":"只看楼主")+" ")]):t._e()],1)]),e("div",{staticClass:"u-content"},[t.isMaster?e("Article",{attrs:{content:t.post.content||""}}):e("div",{domProps:{innerHTML:t._s(t.renderContent)}})],1)]),e("div",[e("div",{staticClass:"u-time"},[t._v(t._s(t.post.updated_at||t.post.created_at))]),e("div",{staticClass:"u-toolbar"},[e("div"),e("div",[e("DeleteButton",{attrs:{post:t.post,type:"reply",isMaster:t.isMaster}}),t.allowBlackHole?e("el-button",{attrs:{type:"text"}},[e("i",{staticClass:"el-icon-attract"}),t._v(" 黑洞 ")]):t._e(),e("AddBlockButton",{attrs:{post:t.post}}),e("ComplaintButton",{attrs:{post:t.post}}),e("el-button",{staticClass:"u-reply-btn",attrs:{type:"primary",size:"small"},on:{click:function(e){return t.onShowReply()}}},[e("div",{staticClass:"u-btn"},[e("img",{attrs:{src:i("076f"),alt:""}}),e("span",[t._v(t._s(t.isMaster?"跟帖":"回复"))])])]),e("el-button",{staticClass:"u-praise-btn",attrs:{disabled:t.isLike,type:"primary",size:"small"},on:{click:t.addLike}},[e("div",{staticClass:"u-btn"},[e("img",{attrs:{src:i("4a11"),alt:""}}),e("span",[t._v("赞")]),e("span",[t._v(t._s(t.likeCountRender))])])])],1)])]),t.showReplyForReplyFrom?e("ReplyForReply",{attrs:{username:t.userInfo.display_name,"user-href":t.authorLink(t.userId)},on:{hideForm:function(e){t.showReplyForReplyFrom=!1},doReply:t.doReply}}):t._e()],1),!t.isMaster&&t.post.comments_count>3?e("div",{staticClass:"m-comment-collapse"},[t.isCollapse?e("div",{on:{click:t.onCollapseChange}},[e("img",{attrs:{width:"14",src:i("f315"),alt:""}}),e("span",[t._v("折叠评论")])]):e("div",{on:{click:t.onCollapseChange}},[e("img",{attrs:{width:"14",src:i("e59c"),alt:""}}),e("span",[t._v("展开评论")])])]):t._e(),!t.isMaster&&t.commentsList.length?e("div",{staticClass:"m-reply-list"},t._l(t.commentsList,(function(t){return e("CommentItem",{key:t.id,attrs:{post:t}})})),1):t._e(),t.isCollapse?e("div",{staticClass:"m-pagination-box"},[e("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","hide-on-single-page":!0,"page-size":t.per,total:t.total,"current-page":t.page},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"current-change":t.changePage}})],1):t._e()])])},c=[],l=i("c7eb"),u=i("1da1"),p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-comment-user c-author"},[e("AuthorInfo",{attrs:{uid:t.uid},on:{ready:t.installModules}}),t.data?[e("div",{staticClass:"u-interact"},[e("AuthorFollow",{staticStyle:{"margin-right":"8px"},attrs:{uid:t.uid}}),e("el-button",{staticClass:"u-btn",attrs:{icon:"el-icon-message",size:"mini"},on:{click:t.onMessage}},[t._v("私信")])],1),e("AuthorMedals",{staticClass:"u-block u-trophy",attrs:{uid:t.uid}}),t._t("default")]:t._e()],2)},d=[],h=i("af4b"),m=i("16ef"),f=i("6b7e"),v={props:["uid"],data:function(){return{data:""}},methods:{installModules:function(t){this.data=t},onMessage:function(){window.open("/dashboard/letter?receiver="+this.uid,"_blank")}},components:{AuthorInfo:h["a"],AuthorFollow:m["a"],AuthorMedals:f["a"]}},y=v,g=(i("09fb"),i("2877")),_=Object(g["a"])(y,p,d,!1,null,null,null),b=_.exports,C=function(){var t=this,e=t._self._c;return e("el-form",{ref:"form",staticClass:"c-comment-subbox"},[e("div",{staticClass:"u-subbox-label"},[t._v(" 回复 "),e("el-link",{attrs:{type:"primary",target:"_blank",href:t.userHref}},[t._v("＠"+t._s(t.username))]),t._v(" ： ")],1),e("el-form-item",[e("el-input",{attrs:{type:"textarea",id:"id"+t.inputId,placeholder:"输入回复..."},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),e("el-form-item",[e("div",{staticClass:"c-comment-tools"},[e("Emotion",{staticClass:"c-comment-emotion",attrs:{type:"pop",max:6},on:{selected:t.handleEmotionSelected}})],1)]),e("el-form-item",[e("el-button",{attrs:{size:"mini",type:"primary",disabled:t.disableSubmitBtn},on:{click:function(e){return t.submintReply()}}},[t._v("提交")]),e("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){return t.hideForm()}}},[t._v("收起")])],1)],1)},w=[],k=i("c840"),x={props:["username","userHref","currentId"],data:function(){return{content:"",showUploader:!1,disableSubmitBtn:!1,inputId:""}},components:{Emotion:k["a"]},mounted:function(){this.currentId&&(this.inputId=this.currentId)},methods:{submintReply:function(){this.disableSubmitBtn=!0,this.$refs.uploader?this.$refs.uploader.upload():this.attachmentUploadFinish([])},hideForm:function(){this.$emit("hideForm")},attachmentUploadFinish:function(t){this.disableSubmitBtn=!1,this.$emit("doReply",{content:this.content,attachmentList:t}),this.content="",this.showUploader=!1},attachmentUplodError:function(){this.disableSubmitBtn=!1},handleEmotionSelected:function(t){var e=this;return Object(u["a"])(Object(l["a"])().mark((function i(){var s,n,o,a;return Object(l["a"])().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(s=document.querySelector("#id".concat(e.inputId)),n=t.key,!s.selectionStart&&0!==s.selectionStart){i.next=12;break}return o=s.selectionStart,a=s.selectionEnd,e.content=s.value.substring(0,o)+n+s.value.substring(a,s.value.length),i.next=8,e.$nextTick();case 8:s.focus(),s.setSelectionRange(a+n.length,a+n.length),i.next=13;break;case 12:e.content=n;case 13:case"end":return i.stop()}}),i)})))()}}},L=x,R=(i("803a"),Object(g["a"])(L,C,w,!1,null,null,null)),j=R.exports,O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-comment-wrapper"},[e("div",{staticClass:"m-comment-wrapper__right"},[e("div",{staticClass:"m-comment-wrapper__right-box"},[e("div",{staticClass:"m-reply-user"},[e("img",{staticClass:"u-avatar",attrs:{src:t.userInfo.avatar}}),e("div",[e("a",{staticClass:"u-name",attrs:{href:t.authorLink(t.userInfo.id)}},[t._v(t._s(t.userInfo.display_name))]),e("p",{staticClass:"u-reply-user"},[t._v(" 回复 "+t._s(t.replyUserInfo.display_name)+"： ")]),e("p",{staticClass:"u-content",domProps:{innerHTML:t._s(t.renderContent)}}),e("div",{staticClass:"u-toolbar"},[e("div",[e("el-button",{attrs:{type:"text",size:"small"},on:{click:t.addLike}},[e("div",{staticClass:"u-btn-content"},[e("img",{attrs:{width:"12",height:"14",src:i("2c87"),alt:"",srcset:""}}),t._v(" 赞 "),t.likeCountRender?e("span",{staticClass:"u-count"},[t._v(" ("+t._s(t.likeCountRender)+")")]):t._e()])]),e("el-button",{attrs:{type:"text",size:"small"},on:{click:t.onShowReply}},[e("i",{staticClass:"el-icon-chat-round"}),e("span",[t._v("回复")])])],1),e("div",[e("DeleteButton",{attrs:{post:t.post,type:"comment"}}),e("el-button",{attrs:{type:"text",size:"small"}},[e("i",{staticClass:"el-icon-attract"}),t._v(" 黑洞 ")]),e("AddBlockButton",{attrs:{post:t.post}}),e("ComplaintButton",{attrs:{post:t.post}}),e("span",{staticClass:"u-time"},[t._v(t._s(t.post.updated_at))])],1)]),e("span",{staticClass:"u-time u-mobile-time"},[t._v(t._s(t.post.updated_at))]),t.showReplyForReplyFrom?e("ReplyForReply",{attrs:{username:t.userInfo.display_name,"user-href":t.authorLink(t.userInfo.id)},on:{hideForm:function(e){t.showReplyForReplyFrom=!1},doReply:t.doReply}}):t._e()],1)])])])])},B=[],I=i("85e4"),M=i("506c"),F=i("81fc"),S=i("6f4a"),$=i("9616"),z=function(){var t=this,e=t._self._c;return e("el-button",{attrs:{type:"text",disabled:!t.allowBlock},on:{click:function(e){return t.addBlock()}}},[e("i",{staticClass:"el-icon-circle-close"}),t._v(" 拉黑 ")])},A=[],E=i("c9d2"),D={name:"add-block-button",props:["post"],computed:{isLogin:function(){return E["a"].isLogin()},allowBlock:function(){return this.isLogin&&this.post.user_id!=E["a"].getInfo().uid}},methods:{addBlock:function(){var t=this;this.$confirm("确定要拉黑此人？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(F["a"])(t.post.user_id).then((function(){t.$message.success("拉黑成功")})).catch((function(t){console.log(t)}))})).catch((function(t){}))}}},T=D,H=Object(g["a"])(T,z,A,!1,null,"87e5968e",null),U=H.exports,V=function(){var t=this,e=t._self._c;return e("el-button",{attrs:{type:"text",disabled:!t.allowReport},on:{click:t.onMiscfeedback}},[e("i",{staticClass:"el-icon-warning-outline"}),t._v(" 举报 ")])},P=[],q={name:"ComplaintButton",props:["post"],inject:["getTopicData","getReplyData"],computed:{isLogin:function(){return E["a"].isLogin()},allowReport:function(){return this.isLogin&&this.post.user_id!=E["a"].getInfo().uid}},methods:{onMiscfeedback:function(){var t=this,e=this.getTopicData(),i=this.getReplyData(),s=this.post.user_info||this.post.ext_user_info,n=s.display_name,o=i.layer||0,a=o?o+"楼":"楼主";this.$prompt("请输入要举报的内容","提示",{confirmButtonText:"确定",cancelButtonText:"取消",input:"textarea",inputPlaceholder:"请输入要举报的内容",inputValidator:function(t){if(!t)return"内容不能为空!"}}).then((function(i){var s=i.value,r="魔盒论坛《".concat(e.title,"》").concat(a,"的").concat(n,"：").concat(s);Object(F["d"])({client:e.client,content:r,public:0,subtype:"3",type:"1",refer:"/community/".concat(e.id,"#").concat(o)}).then((function(){t.$message.success("举报成功")}))}))}}},J=q,Q=Object(g["a"])(J,V,P,!1,null,"6bf9bc53",null),N=Q.exports,W=function(){var t=this,e=t._self._c;return t.allowDelete?e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.onDeleteClick()}}},[e("i",{staticClass:"el-icon-delete"}),t._v(" 删除 ")]):t._e()},X=[],G={name:"DeleteButton",inject:["getTopicData","getReplyList","getCommentsList"],props:["isMaster","post","type"],computed:{topicData:function(){return this.getTopicData()},isLogin:function(){return E["a"].isLogin()},allowDelete:function(){return!!this.isLogin&&(!this.isMaster&&(this.post.user_id==E["a"].getInfo().uid||this.topicData.user_id==E["a"].getInfo().uid))}},methods:{onDeleteClick:function(){"comment"===this.type?this.deleteComment():"reply"===this.type?this.deleteReply():this.$message.success("未知的组件类型："+this.type)},deleteReply:function(){var t=this;this.$confirm("确认是否删除该评论？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(F["c"])(t.post.id).then((function(){t.getReplyList()}))}))},deleteComment:function(){var t=this;this.$confirm("确认是否删除该评论？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(F["b"])(t.post.id).then((function(){t.$message.success("删除成功"),t.getCommentsList({index:1})}))}))}}},K=G,Y=Object(g["a"])(K,W,X,!1,null,"4e8548f2",null),Z=Y.exports,tt={name:"CommentItem",props:["post"],inject:["getTopicData","getReplyData","getCommentsList"],components:{ReplyForReply:j,AddBlockButton:U,ComplaintButton:N,DeleteButton:Z},data:function(){return{likeCount:0,renderContent:"",showReplyForReplyFrom:!1,commentsList:[]}},watch:{content:{handler:function(t){this.formatContent(t)},immediate:!0}},computed:{likeCountRender:function(){return this.likeCount>=100?"(99+)":0!=this.likeCount?"".concat(this.likeCount):""},userInfo:function(){return this.post.user_info},replyUserInfo:function(){return this.post.reply_for_user_info},comments:function(){return this.post.comments},content:function(){return this.post.content},id:function(){return this.post.id}},mounted:function(){},methods:{authorLink:I["authorLink"],formatContent:function(t){var e=this;return Object(u["a"])(Object(l["a"])().mark((function i(){var s;return Object(l["a"])().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return s=new M["a"](Object(S["a"])(t)),i.next=3,s._renderHTML();case 3:e.renderContent=i.sent;case 4:case"end":return i.stop()}}),i)})))()},onShowReply:function(){this.showReplyForReplyFrom=!this.showReplyForReplyFrom},doReply:function(t){var e=this,i=t.content,s=this.$route.params.id,n=this.post.topic_reply_id,o=this.userInfo.id;s&&n&&o?Object(F["k"])(s,n,{content:i,reply_for_user_id:o}).then((function(){e.getCommentsList()})).finally((function(){e.showReplyForReplyFrom=!1})):this.$message.error("回复失败：数据不正确"),this.showReplyForReplyFrom=!1},addLike:function(){this.isLike||(this.likeCount++,this.isLike||Object($["b"])("community",this.post.id,"likes"),this.isLike=!0)}}},et=tt,it=Object(g["a"])(et,O,B,!1,null,null,null),st=it.exports,nt=i("a974"),ot=i("a27f"),at={name:"ReplyItem",inject:["getTopicData","getReplyList","setOnlyAuthor"],props:["isMaster","post"],components:{DeleteButton:Z,ComplaintButton:N,AddBlockButton:U,CommentUser:b,ReplyForReply:j,CommentItem:st,Article:nt["a"]},provide:function(){var t=this;return{getReplyData:function(){return t.post},getCommentsList:this.getList}},data:function(){return{page:1,per:5,total:0,isCollapse:!1,isLike:!1,likeCount:0,showReplyForReplyFrom:!1,renderContent:"",commentsList:[]}},computed:{onlyAuthor:function(){var t=this.$route.query.onlyAuthor;return("true"==t||1==t)&&!0},likeCountRender:function(){return this.likeCount>=100?"99+":0!=this.likeCount?this.likeCount:""},allowBlackHole:function(){return this.isLogin&&!this.isMaster},isLogin:function(){return E["a"].isLogin()},userInfo:function(){return this.post&&this.post.user_info?this.post.user_info:this.post&&this.post.ext_user_info?this.post.ext_user_info:{}},userId:function(){return this.post&&this.post.user_info?this.post.user_info.id:this.post&&this.post.ext_user_info?this.post.ext_user_info.id:""},isPostOwner:function(){var t;return this.userId==(null===(t=E["a"].getInfo())||void 0===t?void 0:t.uid)}},watch:{"post.content":{handler:function(t){this.isMaster||this.formatContent(t)},immediate:!0},"post.comments":{handler:function(){this.post.comments&&(this.commentsList=this.post.comments)},immediate:!0},commentsList:{handler:function(){if(this.commentsList.length){var t=this.commentsList.map((function(t){return t.id})),e={post_type:"community",post_action:"likes",id:t.join(",")};Object(ot["b"])(e).then((function(t){}))}},immediate:!0},"post.likes":{handler:function(t){console.log(t),t&&(this.likeCount=t)}}},methods:{onCollapseChange:function(){this.isCollapse?this.commentsList=this.post.comments:(this.page=1,this.getList()),this.isCollapse=!this.isCollapse},authorLink:I["authorLink"],formatContent:function(t){var e=this;return Object(u["a"])(Object(l["a"])().mark((function i(){var s;return Object(l["a"])().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return s=new M["a"](Object(S["a"])(t)),i.next=3,s._renderHTML();case 3:e.renderContent=i.sent;case 4:case"end":return i.stop()}}),i)})))()},onShowReply:function(){this.isMaster?window.scrollTo(0,document.body.scrollHeight):this.showReplyForReplyFrom=!this.showReplyForReplyFrom},doReply:function(t){var e=this,i=t.content,s=this.$route.params.id,n=this.post.id;s&&n&&this.userId?Object(F["k"])(s,n,{content:i,reply_for_user_id:this.userId}).then((function(){e.getList()})).finally((function(){e.showReplyForReplyFrom=!1})):this.$message.error("回复失败：数据不正确")},changePage:function(){this.getList()},getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.isMaster){var i=this.$route.params.id,s=this.post.id;i&&s&&Object(F["e"])(i,s,Object(o["a"])({index:this.page,pageSize:this.per},e)).then((function(e){var i=e.data.data.list;i?(t.commentsList=i,t.isCollapse=!0):t.commentsList=[],t.page=e.data.data.page.index,t.total=e.data.data.page.total,t.current=e.data.data.page.current}))}},addLike:function(){this.isLike||(this.likeCount++,this.isLike||(this.isMaster?Object($["b"])("community_topic",this.post.id,"likes"):Object($["b"])("community_reply",this.post.id,"likes")),this.isLike=!0)},onEditClick:function(){location.href="#/community/reply/".concat(this.post.id)}}},rt=at,ct=(i("7e89"),Object(g["a"])(rt,r,c,!1,null,null,null)),lt=ct.exports,ut=function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-community-single",attrs:{id:"app"}},[e("Header"),t.post?e("Breadcrumb",{attrs:{name:"魔盒论坛",slug:"community",publishEnable:!1,adminEnable:!0,feedbackEnable:!0,crumbEnable:!0,showExtend:!0,subtypeMap:t.subtypeMap},scopedSlots:t._u([{key:"op-prepend",fn:function(){return[e("AdminDrop",{attrs:{"is-community":!0,post:t.post,"user-id":t.user_id}})]},proxy:!0},{key:"title",fn:function(){return[e("span",[t._v(" "+t._s(t.title)+" ")])]},proxy:!0}],null,!1,3056156650)},[e("publish-gate",{attrs:{slot:"op-append"},slot:"op-append"})],1):t._e(),e("div",[e("Main",{attrs:{withoutRight:!1}},[e("div",{staticClass:"m-community-single__main"},[e("div",{staticClass:"m-community-single__left"},[t._t("default"),e("Footer")],2),e("div",{staticClass:"m-community-single__right"},[t.post.id?e("PostTopic",{attrs:{type:"community",id:~~t.post.id}}):t._e()],1)])])],1)],1)},pt=[],dt=i("98e8"),ht=i("f175"),mt=i("bf34"),ft={name:"Single",props:["post"],data:function(){return{id:Object(I["getAppID"])(),subtypeMap:{1:"攻略心得",2:"萌新指南",3:"江湖故事",4:"煮酒论剑"}}},computed:{user_id:function(){return this.post?this.post.user_id:""},title:function(){return this.post?this.post.post_title:document.title}},mounted:function(){},methods:{getAppIcon:I["getAppIcon"]},components:{"publish-gate":dt["a"],AdminDrop:ht["a"],PostTopic:mt["a"]}},vt=ft,yt=(i("ec23"),Object(g["a"])(vt,ut,pt,!1,null,null,null)),gt=yt.exports,_t=function(){var t=this,e=t._self._c;return t.post?e("header",{staticClass:"m-single-header"},[e("div",{staticClass:"m-single-title"},[e("span",{staticClass:"u-title u-sub-block",attrs:{href:t.url,title:t.title}},[t.isOriginal?e("i",{staticClass:"u-original"},[t._v("原创")]):t._e(),t._t("title_before"),"publish"!=t.post.post_status||~~t.post.visible?e("i",{staticClass:"u-private"},["draft"==t.post.post_status||"pending"==t.post.post_status||~~t.post.visible?e("i",{staticClass:"el-icon-lock",staticStyle:{color:"#fb9b24"}}):t._e(),"dustbin"==t.post.post_status?e("i",{staticClass:"el-icon-delete",staticStyle:{color:"#c00"}}):t._e()]):t._e(),e("span",{staticClass:"u-title-text"},[t._v(t._s(t.title))])],2)]),e("div",{staticClass:"m-single-info"},[e("div",{staticClass:"u-author u-sub-block"},[e("i",{staticClass:"u-author-icon"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 16",width:"12",height:"16","aria-hidden":"true",fill:"#444","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M12 14.002a.998.998 0 01-.998.998H1.001A1 1 0 010 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"}})])]),e("a",{staticClass:"u-name",attrs:{href:t.author_link}},[t._v(t._s(t.author_name))])]),t._t("default"),e("div",{staticClass:"u-meta u-sub-block"},[e("em",{staticClass:"u-label"},[t._v("适用客户端")]),e("span",{staticClass:"u-value u-client",class:"i-client-"+t.client},[t._v(t._s(t.showClientLabel(t.client)))])]),e("span",{staticClass:"u-podate u-sub-block",attrs:{title:"发布日期:"+t.post_time}},[e("i",{staticClass:"u-icon-podate"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"#6a737d",viewBox:"0 0 485.2 485.2","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[e("path",{attrs:{d:"M60.7 75.8V15.2C60.7 6.8 67.4 0 75.8 0 84.2 0 91 6.8 91 15.2v60.7C91 84.2 84.2 91 75.8 91c-8.4 0-15.1-6.8-15.1-15.2zM318.4 91c8.4 0 15.2-6.8 15.2-15.2V15.2c0-8.4-6.8-15.2-15.2-15.2-8.4 0-15.2 6.8-15.2 15.2v60.7c.1 8.3 6.8 15.1 15.2 15.1zM60.7 182h60.7v60.7H60.7zM60.7 272.9h60.7v60.7H60.7zM151.6 182h60.7v60.7h-60.7zM151.6 272.9h60.7v60.7h-60.7z"}}),e("path",{attrs:{d:"M30 361.2v-210h334c.2 70.7.4 141.4.7 212.1 9.8 0 19.6-.1 29.3-.1V93.6c0-18.5-14.5-33.4-32.5-33.4H349v15.2c0 16.7-13.7 30.3-30.5 30.3S288 92.1 288 75.4V60.2H106v15.2c0 16.7-13.7 30.3-30.5 30.3S45 92.1 45 75.4V60.2H32.5c-18 0-32.5 15-32.5 33.4v267.2c0 9.2 3.6 17.5 9.5 23.6 7.8 8.1 18.5 9.3 23 9.8 22.1 2.4 165.3 2.9 361.5 1v-32c-120.5.3-241 .7-361.5 1-.8-1-1.7-2-2.5-3z"}}),e("path",{attrs:{d:"M242.6 182h60.6v60.7h-60.6zM242.6 272.9h60.7v60.7h-60.7z"}})])]),e("time",[t._v(t._s(t.post_date))])]),e("span",{staticClass:"u-modate u-sub-block",attrs:{title:"最后更新:"+t.update_time}},[e("i",{staticClass:"u-icon-modate"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"485.213",height:"485.212",viewBox:"0 0 485.213 485.212",fill:"#555","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[e("path",{attrs:{d:"M60.652 75.816V15.163C60.652 6.781 67.433 0 75.817 0c8.38 0 15.161 6.781 15.161 15.163v60.653c0 8.38-6.781 15.161-15.161 15.161-8.384.001-15.165-6.781-15.165-15.161zm257.772 15.162c8.378 0 15.163-6.781 15.163-15.161V15.163C333.587 6.781 326.802 0 318.424 0c-8.382 0-15.168 6.781-15.168 15.163v60.653c0 8.38 6.786 15.162 15.168 15.162zm166.788 272.928c0 66.996-54.312 121.307-121.303 121.307-66.986 0-121.302-54.311-121.302-121.307 0-66.986 54.315-121.3 121.302-121.3 66.991 0 121.303 54.313 121.303 121.3zm-30.322 0c0-50.161-40.81-90.976-90.98-90.976-50.166 0-90.976 40.814-90.976 90.976 0 50.171 40.81 90.98 90.976 90.98 50.17 0 90.98-40.809 90.98-90.98zM121.305 181.955H60.652v60.651h60.653v-60.651zM60.652 333.584h60.653V272.93H60.652v60.654zm90.977-90.978h60.654v-60.651h-60.654v60.651zm0 90.978h60.654V272.93h-60.654v60.654zM30.328 360.891V151.628H363.91v60.653h30.327V94c0-18.421-14.692-33.349-32.843-33.349h-12.647v15.166c0 16.701-13.596 30.325-30.322 30.325-16.731 0-30.326-13.624-30.326-30.325V60.651H106.14v15.166c0 16.701-13.593 30.325-30.322 30.325-16.733 0-30.327-13.624-30.327-30.325V60.651H32.859C14.707 60.651.001 75.579.001 94v266.892c0 18.36 14.706 33.346 32.858 33.346h179.424v-30.331H32.859c-1.374-.001-2.531-1.42-2.531-3.016zm272.928-118.285v-60.651h-60.648v60.651h60.648zm106.143 121.3h-45.49v-45.49c0-8.377-6.781-15.158-15.163-15.158s-15.159 6.781-15.159 15.158v60.658c0 8.378 6.777 15.163 15.159 15.163h60.653c8.382 0 15.163-6.785 15.163-15.163 0-8.382-6.781-15.168-15.163-15.168z"}})])]),e("time",[t._v(t._s(t.update_date))])]),e("span",{staticClass:"u-views u-sub-block"},[e("i",{staticClass:"el-icon-view"}),t._v(" "+t._s(t.views)+" ")]),t.wordCount?e("span",{staticClass:"u-word-count u-sub-block",attrs:{title:"累计字数"}},[e("i",{staticClass:"el-icon-sunny"}),t._v(" "+t._s(t.wordCount)+" ")]):t._e(),t.canEdit?e("a",{staticClass:"u-edit u-sub-block",attrs:{href:t.edit_link}},[e("i",{staticClass:"u-icon-edit el-icon-edit-outline"}),e("span",[t._v("编辑")])]):t._e()],2)]):t._e()},bt=[],Ct=(i("ac1f"),i("5319"),i("65c2")),wt=i("e4f1"),kt=i("1157"),xt=i.n(kt),Lt={name:"single-header",props:["post","stat"],data:function(){return{wordCount:0}},computed:{url:function(){return location.href},isOriginal:function(){var t;return!!~~(null===(t=this.post)||void 0===t?void 0:t.original)},title:function(){var t;return(null===(t=this.post)||void 0===t?void 0:t.post_title)||"无标题"},author_link:function(){var t;return Object(I["authorLink"])(null===(t=this.post)||void 0===t?void 0:t.post_author)},author_name:function(){var t,e;return(null===(t=this.post)||void 0===t||null===(e=t.author_info)||void 0===e?void 0:e.display_name)||"匿名"},post_date:function(){var t;return Object(wt["a"])(new Date(null===(t=this.post)||void 0===t?void 0:t.post_date))},update_date:function(){var t;return Object(wt["a"])(new Date(null===(t=this.post)||void 0===t?void 0:t.post_modified))},post_time:function(){var t;return Object(wt["b"])(new Date(null===(t=this.post)||void 0===t?void 0:t.post_date))},update_time:function(){var t;return Object(wt["b"])(new Date(null===(t=this.post)||void 0===t?void 0:t.post_modified))},views:function(){var t;return(null===(t=this.stat)||void 0===t?void 0:t.views)||"-"},edit_link:function(){var t,e;return Object(I["editLink"])(null===(t=this.post)||void 0===t?void 0:t.post_type,null===(e=this.post)||void 0===e?void 0:e.ID)},canEdit:function(){var t;return(null===(t=this.post)||void 0===t?void 0:t.post_author)==E["a"].getInfo().uid||E["a"].isEditor()},client:function(){var t;return(null===(t=this.post)||void 0===t?void 0:t.client)||"std"}},watch:{post:{deep:!0,handler:function(t){this.countWords()}}},methods:{showClientLabel:function(t){return Ct["__clients"][t]},countWords:function(){var t=this;this.$nextTick((function(){var e,i=null===(e=xt()(".c-article").text())||void 0===e?void 0:e.replace(/[\s|\n|\r|\t|\g|\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?|\，|\。|\？|\：|\；|\‘|\’|\”|\“|\、|\·|\！|\（|\）|\》|\《|\『|\』]/g,"");t.wordCount=(null===i||void 0===i?void 0:i.length)||0}))}},mounted:function(){}},Rt=Lt,jt=(i("6ea2"),Object(g["a"])(Rt,_t,bt,!1,null,null,null)),Ot=jt.exports,Bt=function(){var t=this,e=t._self._c;return e("el-form",{ref:"form",staticClass:"c-comment-box",attrs:{model:t.newComment}},[e("el-form-item",[e("el-input",{attrs:{rows:"3",type:"textarea",maxlength:t.maxLength,"show-word-limit":"",placeholder:"参与讨论...",id:t.inputId},model:{value:t.newComment.content,callback:function(e){t.$set(t.newComment,"content",e)},expression:"newComment.content"}}),e("div",{staticClass:"c-comment-tools"},[e("i",{staticClass:"el-icon-picture-outline u-upload-icon",on:{click:function(e){t.showUploader=!t.showUploader}}}),e("Emotion",{staticClass:"c-comment-emotion",attrs:{type:"pop",max:6},on:{selected:t.handleEmotionSelected}}),e("quickReply",{on:{reply:t.onQuickReply}})],1),t.showUploader?e("Uploader",{ref:"uploader",staticClass:"u-uploader",on:{onFinish:t.attachmentUploadFinish,onError:t.attachmentUplodError}}):t._e(),e("div",{staticClass:"u-toolbar"},[e("el-button",{staticClass:"u-publish",attrs:{type:"primary",disabled:t.disableSubmitBtn},on:{click:t.onSubmit}},[t._v("跟帖")])],1)],1)],1)},It=[],Mt=(i("13d5"),function(){var t=this,e=t._self._c;return e("div",[e("el-upload",{ref:"upload",attrs:{action:"https://cms.jx3box.com/api/cms/upload","list-type":"picture-card","on-preview":t.handlePictureCardPreview,"auto-upload":!1,"file-list":t.fileList,limit:t.maxCount,accept:t.acceptedExtensions.reduce((function(t,e){return t+".".concat(e,",")}),""),multiple:"","with-credentials":"","on-exceed":t.onExceed,"on-change":t.onChange,"on-success":t.onSuccess,"on-error":t.onError}},[e("i",{staticClass:"el-icon-plus"}),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(" 最多上传 "+t._s(t.maxCount)+" 张 "+t._s(t.acceptedExtensions.join(" / ").toUpperCase())+" 格式图片，单张图片不能超过 "+t._s(t.maxSize/1024/1024)+" MB ")])]),e("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("img",{attrs:{width:"60%",src:t.dialogImageUrl,alt:""}})])],1)}),Ft=[],St={data:function(){return{dialogImageUrl:"",dialogVisible:!1,fileList:[],successList:[],acceptedExtensions:["jpg","jpeg","png","gif"],maxCount:5,maxSize:2097152}},methods:{handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},onExceed:function(){this.$notify({title:"",message:"最多上传 ".concat(this.maxCount," 张图片！"),type:"error",duration:3e3,position:"bottom-right"})},onChange:function(t,e){"ready"==t.status&&(t.size>this.maxSize?(this.$notify({title:"",message:"单张图片大小不能超过 ".concat(this.maxSize/1024/1024," MB！"),type:"error",duration:3e3,position:"bottom-right"}),e.pop()):this.fileList=e)},upload:function(){this.fileList.length>0?this.$refs.upload.submit():this.$emit("onFinish",[])},onSuccess:function(t){this.successList=this.successList.concat(t.data),this.successList.length==this.fileList.length&&(this.$emit("onFinish",this.successList||[]),this.fileList=[],this.successList=[])},onError:function(){this.$notify({title:"",message:"图片上传失败!",type:"error",duration:3e3,position:"bottom-right"}),this.$emit("onError"),this.fileList=[]}}},$t=St,zt=Object(g["a"])($t,Mt,Ft,!1,null,null,null),At=zt.exports,Et=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-jx3box-reply"},[e("el-popover",{ref:"quickReply",attrs:{"visible-arrow":!0,placement:"top",trigger:"click","popper-class":"c-jx3box-reply-pop"}},[e("div",{staticClass:"c-jx3box-reply-pop__content"},[e("i",{staticClass:"el-icon-close u-close",on:{click:t.closePop}}),e("div",{staticClass:"u-title"},[t._v("快捷回复")]),e("div",{staticClass:"m-reply-list"},t._l(t.replyTemplate,(function(i,s){return e("div",{key:s,staticClass:"m-reply-list__item",on:{click:function(e){return t.reply(i)}}},[t._v(" "+t._s(i)+" ")])})),0)]),e("img",{staticClass:"u-reference",attrs:{slot:"reference",width:"24",height:"24",src:i("9c54"),alt:"comment"},slot:"reference"})])],1)},Dt=[],Tt={name:"QuickReply",data:function(){return{replyTemplate:["真不错，谢谢楼主#胜利#笨猪#胜利","辛苦了，感谢楼主的付出","谢谢楼主，很有用","剑三真好玩，魔盒真好用"]}},emits:["reply"],methods:{closePop:function(){this.$refs.quickReply&&this.$refs.quickReply.doClose()},reply:function(t){this.$emit("reply",t),this.closePop()}}},Ht=Tt,Ut=(i("e934"),Object(g["a"])(Ht,Et,Dt,!1,null,"1bb1d831",null)),Vt=Ut.exports,Pt={name:"CommentInputForm",components:{Uploader:At,Emotion:k["a"],quickReply:Vt},props:{isBottom:{type:Boolean,default:!1}},mounted:function(){this.isBottom&&(this.inputId="textarea-bottom")},data:function(){return{maxLength:500,showUploader:!1,disableSubmitBtn:!1,newComment:{content:""},inputId:"textarea-top",is_secret:!1}},methods:{onSubmit:function(){this.disableSubmitBtn=!0,this.$refs.uploader?this.$refs.uploader.upload():this.attachmentUploadFinish([])},onQuickReply:function(t){this.$emit("submit",{content:t,attachmentList:[],is_template:1})},attachmentUploadFinish:function(t){this.$emit("submit",{content:this.newComment.content,is_secret:this.is_secret?1:0,attachmentList:t}),this.newComment={content:""},this.showUploader=!1,this.disableSubmitBtn=!1},attachmentUplodError:function(){this.disableSubmitBtn=!1},handleEmotionSelected:function(t){this.insertVariable(t)},insertVariable:function(t){var e=this;return Object(u["a"])(Object(l["a"])().mark((function i(){var s,n,o,a;return Object(l["a"])().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(s=document.querySelector("#".concat(e.inputId)),n=t.key,!s.selectionStart&&0!==s.selectionStart){i.next=12;break}return o=s.selectionStart,a=s.selectionEnd,e.newComment.content=s.value.substring(0,o)+n+s.value.substring(a,s.value.length),i.next=8,e.$nextTick();case 8:s.focus(),s.setSelectionRange(a+n.length,a+n.length),i.next=13;break;case 12:e.newComment.content=n;case 13:case"end":return i.stop()}}),i)})))()}}},qt=Pt,Jt=(i("8d9b"),Object(g["a"])(qt,Bt,It,!1,null,null,null)),Qt=Jt.exports,Nt="community_topic",Wt={components:{CommentEditor:Qt,CommunitySingleLayout:gt,PostHeader:Ot,ReplyItem:lt},provide:function(){var t=this;return{getTopicData:function(){return t.post},getReplyList:this.getReplyList,setOnlyAuthor:this.setOnlyAuthor}},data:function(){return{layer:0,stat:"",page:1,per:10,total:0,post:{},replyList:[],categoryList:[],loading:!1,onlyAuthor:!1,number_queries:["per","page"]}},computed:{styles:function(){var t=this,e=this.categoryList.find((function(e){return e.value===t.post.category}));return e||{icon:"game",hoverColor:"rgba(235, 244, 255, 1)",color:"rgba(64, 128, 255, 1)"}},id:function(){return this.$route.params.id},postHeader:function(){if(this.post.id)return{ID:this.post.id,post_type:"community",post_title:this.post.title,author_info:{display_name:this.post.ext_user_info.display_name||"",user_avatar:this.post.ext_user_info.avatar,user_avatar_frame:this.post.ext_user_info.user_avatar_frame,deleted:0},post_date:this.post.created_at,post_modified:this.post.updated_at,star:10}}},created:function(){this.getJumpLayer()},mounted:function(){if(!this.id)return this.$message.error("文章id不存在");this.getCategoryList(),this.getDetails(),this.getReplyList()},watch:{"$route.query":{deep:!0,immediate:!0,handler:function(t){if(Object.keys(t).length)for(var e in t)this.number_queries.includes(e)?this[e]=~~t[e]:this[e]=t[e]}}},methods:{getJumpLayer:function(){var t=window.location.hash,e=t.substring(1).split("?")[0];e&&(this.layer=e,this.page=Math.ceil((this.layer-1)/this.per))},jumpLayer:function(){var t=this;this.$nextTick((function(){var e=document.getElementById("layer-"+t.layer);e&&(e.scrollIntoView(),window.scrollBy(0,-120))}))},setOnlyAuthor:function(t){this.page=1,this.onlyAuthor=t,this.getReplyList()},buildQuery:function(t){var e={index:this.page,pageSize:this.per,order_created_at:0};return this.onlyAuthor&&(e.user_id=this.post.user_id),this.replaceRoute({page:this.page,onlyAuthor:this.onlyAuthor}),e},getTopicData:function(){return this.post},getDetails:function(){var t=this;Object(F["g"])(this.id).then((function(e){t.post=e.data.data,Object($["a"])(Nt,t.id).then((function(e){t.stat=e.data,t.$set(t.post,"likes",t.stat.likes||0)})),Object($["b"])(Nt,t.id)}))},getReplyList:function(){var t=this;this.loading=!0;var e=this.buildQuery();Object(F["i"])(this.id,e).then((function(e){var i=e.data.data.list,s=e.data.data.page;if(null==i)t.replyList=[];else{t.replyList=i.map((function(t,e){return Object(o["a"])(Object(o["a"])({},t),{},{layer:(s.index-1)*s.pageSize+e+2})})),t.layer&&t.jumpLayer();var n=t.replyList.map((function(t){return"community_reply-".concat(t.id)})).join(",");Object(ot["b"])({post_type:"community_reply",post_action:"likes",id:n}).then((function(e){var i,s=null===(i=e.data)||void 0===i?void 0:i.data;t.replyList=t.replyList.map((function(e){var i,n;return e.likes=(null===(i=s["community_reply-".concat(e.id)])||void 0===i?void 0:i.likes)||0,t.$set(e,"likes",null===(n=s["community_reply-".concat(e.id)])||void 0===n?void 0:n.likes),e}))}))}t.total=s.total})).finally((function(){t.loading=!1}))},onReplyTopic:function(t){var e=this,i=t.attachmentList,s=t.content;if(!this.id)return this.$message.error("文章id不存在");Object(F["l"])(this.id,{client:location.href.includes("origin")?"origin":"std",content:s,extra_images:i}).then((function(t){e.getReplyList()}))},changePage:function(){this.getReplyList()},getCategoryList:function(){var t=this;Object(F["f"])({type:"community",search:this.post.category}).then((function(e){t.categoryList=Object(S["b"])(e.data.data)}))},replaceRoute:function(t){return this.$router.push({name:this.$route.name,query:Object.assign({},this.$route.query,t)}).then((function(){window.scrollTo(0,0)})).catch((function(t){}))}}},Xt=Wt,Gt=(i("0575"),Object(g["a"])(Xt,s,n,!1,null,null,null));e["default"]=Gt.exports},"0575":function(t,e,i){"use strict";i("cd73")},"076f":function(t,e,i){t.exports=i.p+"img/reply.7dfa9d81.svg"},"09fb":function(t,e,i){"use strict";i("a5d8")},"2c87":function(t,e,i){t.exports=i.p+"img/heart.60e0229c.svg"},"4a11":function(t,e,i){t.exports=i.p+"img/praise.f6d89055.svg"},"4d4c":function(t,e,i){},"679f":function(t,e,i){},"69a6":function(t,e,i){},"6ea2":function(t,e,i){"use strict";i("ff2d")},"7e89":function(t,e,i){"use strict";i("cefa")},"803a":function(t,e,i){"use strict";i("d914")},"8d9b":function(t,e,i){"use strict";i("4d4c")},"9c54":function(t,e,i){t.exports=i.p+"img/comment.2840ad61.svg"},a27f:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return o}));var s=i("41cb");function n(t){return Object(s["c"])().get("/api/summary/batch",{params:t})}function o(t){return Object(s["c"])().get("/api/next2/users/birthday/today",{params:t})}},a5d8:function(t,e,i){},cd73:function(t,e,i){},cefa:function(t,e,i){},d914:function(t,e,i){},e59c:function(t,e,i){t.exports=i.p+"img/collapse_2.b4244534.svg"},e934:function(t,e,i){"use strict";i("69a6")},ec23:function(t,e,i){"use strict";i("679f")},f315:function(t,e,i){t.exports=i.p+"img/collapse_1.74036d18.svg"},ff2d:function(t,e,i){}}]);
//# sourceMappingURL=chunk-24c86b0c.d8eb2cab.js.map