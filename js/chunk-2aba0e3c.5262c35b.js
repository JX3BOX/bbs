(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2aba0e3c"],{"04d1":function(t,e,n){var i=n("342f"),o=i.match(/firefox\/(\d+)/i);t.exports=!!o&&+o[1]},"0608":function(t){t.exports=JSON.parse('{"#下雨":"下雨.gif","#严寒":"严寒.gif","#亲亲":"亲亲.gif","#傲慢":"傲慢.gif","#冷汗":"冷汗.gif","#凶恶":"凶恶.gif","#刀":"刀.gif","#发怒":"发怒.gif","#口水":"口水.gif","#可怜":"可怜.gif","#吐":"吐.gif","#吓":"吓.gif","#呆":"呆.gif","#呲牙":"呲牙.gif","#咖啡":"咖啡.gif","#唇":"唇.gif","#喜欢":"喜欢.gif","#嘴":"嘴.gif","#噢":"噢.gif","#困":"困.gif","#大笑":"大笑.gif","#太阳":"太阳.gif","#媚眼":"媚眼.gif","#害羞":"害羞.gif","#寒":"寒.gif","#尴尬":"尴尬.gif","#差劲":"差劲.gif","#巴掌":"巴掌.gif","#强":"强.gif","#得意":"得意.gif","#微笑":"微笑.gif","#心碎":"心碎.gif","#恐慌":"恐慌.gif","#恶心":"恶心.gif","#感叹号":"感叹号.gif","#扁嘴":"扁嘴.gif","#打雷":"打雷.gif","#拍手":"拍手.gif","#握手":"握手.gif","#撇嘴":"撇嘴.gif","#无奈":"无奈.gif","#昏":"昏.gif","#晕":"晕.gif","#月亮":"月亮.gif","#标记":"标记.gif","#樱桃":"樱桃.gif","#欣喜":"欣喜.gif","#沉默":"沉默.gif","#流汗":"流汗.gif","#流泪":"流泪.gif","#灯泡":"灯泡.gif","#烟花":"烟花.gif","#爱心":"爱心.gif","#狂汗":"狂汗.gif","#狡猾":"狡猾.gif","#狡诈":"狡诈.gif","#猪":"猪.gif","#玫瑰":"玫瑰.gif","#生气":"生气.gif","#电话":"电话.gif","#睡":"睡.gif","#礼物":"礼物.gif","#笨猪":"笨猪.gif","#第一名":"第一名.gif","#第三名":"第三名.gif","#第二名":"第二名.gif","#红灯":"红灯.gif","#绿灯":"绿灯.gif","#胜利":"胜利.gif","#舌头":"舌头.gif","#色":"色.gif","#花":"花.gif","#苹果":"苹果.gif","#菠萝":"菠萝.gif","#蒜头":"蒜头.gif","#蜡烛":"蜡烛.gif","#衰":"衰.gif","#西瓜":"西瓜.gif","#讨厌":"讨厌.gif","#讶异":"讶异.gif","#鄙视":"鄙视.gif","#酷":"酷.gif","#钱":"钱.gif","#锤子":"锤子.gif","#问号":"问号.gif","#阴险":"阴险.gif","#难过":"难过.gif","#雪糕":"雪糕.gif","#饮料":"饮料.gif","#馒头":"馒头.gif","#香蕉":"香蕉.gif","#骷髅":"骷髅.gif","#鬼脸":"鬼脸.gif","#黄灯":"黄灯.gif"}')},"0837":function(t,e,n){"use strict";n("b9c7")},"084d":function(t,e,n){},"0b4e":function(t,e,n){"use strict";n("e7d2")},"101d":function(t,e,n){},"23d8":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"c-comment"},[n("el-main",[n("CommentInputForm",{on:{submit:t.userSubmitInputForm}}),n("div",{staticClass:"c-comment-order"},[n("span",{staticClass:"u-label"},[t._v("排序模式：")]),n("el-radio-group",{attrs:{size:"mini"},on:{change:t.changeOrder},model:{value:t.isDesc,callback:function(e){t.isDesc=e},expression:"isDesc"}},[n("el-radio-button",{attrs:{label:"DESC"}},[t._v("最后靠前")]),n("el-radio-button",{attrs:{label:"ASC"}},[t._v("最早靠前")])],1)],1),t.isNormal?[t._l(t.commentList,(function(e){return n("div",{key:e.id,staticClass:"c-comment-list"},[n("CommentAvatar",{attrs:{"user-avatar":t._f("showAvatar")(e.avatar),"user-href":t._f("profileLink")(e.userId),username:e.displayName,avatarFrame:e.user_avatar_frame,withFrame:!0}}),n("CommentWithReply",{attrs:{"base-api":t.baseAPI,item:e,category:t.category,power:t.commentPower,"user-href":t._f("profileLink")(e.userId),username:e.displayName},on:{deleteComment:t.deleteComment,setTopComment:t.setTopComment,setStarComment:t.setStarComment}})],1)})),n("div",{staticClass:"c-comment-pages"},[t.commentList.length>5?n("CommentInputForm",{attrs:{isBottom:t.commentList.length>5},on:{submit:t.userSubmitInputForm}}):t._e(),n("div",{staticClass:"u-pages"},[n("el-pagination",{staticStyle:{"text-align":"right"},attrs:{background:"","hide-on-single-page":"","current-page":t.pager.index,"page-size":t.pager.pageSize,layout:"prev, pager, next, total",total:t.pager.total},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){return t.$set(t.pager,"index",e)},"update:current-page":function(e){return t.$set(t.pager,"index",e)}}})],1)],1)]:t._e()],2)],1)},o=[],a=(n("99af"),n("d3b7"),n("85e4")),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-comment-avatar"},[n("a",{staticClass:"u-avatar",attrs:{href:t.userHref,target:"_blank"}},[n("el-avatar",{staticClass:"u-avatar-pic",attrs:{shape:"square",size:t.avatarSize,src:t.userAvatar}})],1),n("el-link",{staticClass:"u-name",attrs:{type:"primary",target:"_blank",href:t.userHref}},[t._v(t._s(t.username))])],1)},s=[],c={props:["avatarSize","userAvatar","userHref","username","avatarFrame","withFrame"],data:function(){return{}},computed:{},methods:{},mounted:function(){}},l=c,u=(n("c0ba8"),n("2877")),m=Object(u["a"])(l,r,s,!1,null,null,null),p=m.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-form",{ref:"form",staticClass:"c-comment-box",attrs:{model:t.newComment}},[n("el-form-item",[n("Emotion",{staticClass:"c-comment-emotion",on:{selected:t.handleEmotionSelected}}),n("el-input",{attrs:{rows:"3",type:"textarea",maxlength:"300","show-word-limit":"",placeholder:"参与讨论...",id:t.inputId},model:{value:t.newComment.content,callback:function(e){t.$set(t.newComment,"content",e)},expression:"newComment.content"}}),t.showUploader?n("Uploader",{ref:"uploader",staticClass:"u-uploader",on:{onFinish:t.attachmentUploadFinish,onError:t.attachmentUplodError}}):t._e(),n("div",{staticClass:"u-toolbar"},[n("el-button",{staticClass:"u-admin",attrs:{type:"text",icon:"el-icon-picture",size:"mini"},on:{click:function(e){t.showUploader=!t.showUploader}}},[t._v("图片")]),n("el-button",{staticClass:"u-publish",attrs:{type:"primary",disabled:t.disableSubmitBtn},on:{click:t.onSubmit}},[t._v("发表评论")])],1)],1)],1)},f=[],h=n("1da1"),g=(n("96cf"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-upload",{ref:"upload",attrs:{action:"https://cms.jx3box.com/api/cms/upload","list-type":"picture-card","on-preview":t.handlePictureCardPreview,"auto-upload":!1,"file-list":t.fileList,limit:5,multiple:"","with-credentials":"","on-exceed":t.onExceed,"on-change":t.onChange,"on-success":t.onSuccess,"on-error":t.onError}},[n("i",{staticClass:"el-icon-plus"}),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(" 只能上传jpg/png/gif文件，且不超过2M的5张图片 ")])]),n("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("img",{attrs:{width:"60%",src:t.dialogImageUrl,alt:""}})])],1)}),y=[],b={data:function(){return{dialogImageUrl:"",dialogVisible:!1,fileList:[],successList:[]}},methods:{handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},onExceed:function(){this.$notify({title:"",message:"文件超过数量!",type:"error",duration:3e3,position:"bottom-right"})},onChange:function(t,e){"ready"==t.status&&(t.size>2048e3?(this.$notify({title:"",message:"图片大小不能超过500kb!",type:"error",duration:3e3,position:"bottom-right"}),e.pop()):this.fileList=e)},upload:function(){this.fileList.length>0?this.$refs.upload.submit():this.$emit("onFinish",[])},onSuccess:function(t){this.successList=this.successList.concat(t.data),this.successList.length==this.fileList.length&&(this.$emit("onFinish",this.successList||[]),this.fileList=[],this.successList=[])},onError:function(){this.$notify({title:"",message:"图片上传失败!",type:"error",duration:3e3,position:"bottom-right"}),this.$emit("onError"),this.fileList=[]}}},v=b,w=Object(u["a"])(v,g,y,!1,null,null,null),C=w.exports,_=n("c840"),x={components:{Uploader:C,Emotion:_["a"]},props:{isBottom:{type:Boolean,default:!1}},mounted:function(){this.isBottom&&(this.inputId="textarea-bottom")},data:function(){return{showUploader:!1,disableSubmitBtn:!1,newComment:{content:""},inputId:"textarea-top"}},methods:{onSubmit:function(){this.disableSubmitBtn=!0,this.$refs.uploader?this.$refs.uploader.upload():this.attachmentUploadFinish([])},attachmentUploadFinish:function(t){this.$emit("submit",{content:this.newComment.content,attachmentList:t}),this.newComment={content:""},this.showUploader=!1,this.disableSubmitBtn=!1},attachmentUplodError:function(){this.disableSubmitBtn=!1},handleEmotionSelected:function(t){console.log(t),this.insertVariable(t)},insertVariable:function(t){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function n(){var i,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=document.querySelector("#".concat(e.inputId)),!i.selectionStart&&0!==i.selectionStart){n.next=11;break}return o=i.selectionStart,a=i.selectionEnd,e.newComment.content=i.value.substring(0,o)+t+i.value.substring(a,i.value.length),n.next=7,e.$nextTick();case 7:i.focus(),i.setSelectionRange(a+t.length,a+t.length),n.next=12;break;case 11:e.newComment.content=t;case 12:case"end":return n.stop()}}),n)})))()}}},k=x,S=Object(u["a"])(k,d,f,!1,null,null,null),R=S.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-comment-cmt"},[n("div",[n("el-link",{staticClass:"u-name",attrs:{type:"primary",target:"_blank",href:t.userHref}},[t._v(t._s(t.username||"人字榜800线无名小侠"))]),t.item.is_top?n("span",{staticClass:"u-mark u-top"},[n("i",{staticClass:"el-icon-top"}),t._v("置顶")]):t._e(),t.item.is_star?n("span",{staticClass:"u-mark u-star"},[n("i",{staticClass:"el-icon-star-off"}),t._v("精华")]):t._e()],1),n("CommentContent",{attrs:{date:t.item.commentDate,content:t.item.content,"comment-id":t.item.id,attachments:t._f("stringToArray")(t.item.attachments),"can-delete":t.power.allow||t.power.uid==t.item.userId,"can-set-top":t.power.is_author&&!t.item.is_top,"can-cancel-top":t.power.is_author&&t.item.is_top,"can-set-star":!t.item.is_star&&t.power.group>=64,"can-cancel-star":t.item.is_star&&t.power.group>=64},on:{addNewReply:t.addNewReply,deleteComment:t.deleteComment,setTopComment:t.setTopComment,setStarComment:t.setStarComment}}),n("ReplyList",{attrs:{data:t.replyList,pager:t.pager,power:t.power},on:{addNewReply:t.addNewReply,deleteReply:t.deleteReply,goto:t.gotoReplyListIndex,resetReply:t.resetReply}})],1)},L=[],E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"u-cmt"},[""!=t.content?n("div",{staticClass:"u-text",domProps:{innerHTML:t._s(t.formatContent(t.content))}}):t._e(),t.attachments.length?n("div",{staticClass:"u-attachements"},t._l(t.attachments,(function(e){return n("el-image",{key:e,attrs:{src:t._f("showAttachment")(e),"preview-src-list":[t.showPreview(e)],lazy:""}})})),1):t._e(),n("div",{staticClass:"u-toolbar"},[n("el-button",{staticClass:"u-admin",attrs:{type:"text",size:"mini",icon:"el-icon-chat-round"},on:{click:function(e){t.showForm=!t.showForm}}},[t._v("回复")]),t.canDelete?n("el-button",{staticClass:"u-admin",attrs:{type:"text",icon:"el-icon-delete",size:"mini"},on:{click:function(e){return t.deleteComment()}}},[t._v("删除")]):t._e(),t.canSetTop?n("el-button",{staticClass:"u-admin",attrs:{type:"text",icon:"el-icon-top",size:"mini"},on:{click:function(e){return t.topComment(!0)}}},[t._v("置顶")]):t._e(),t.canCancelTop?n("el-button",{staticClass:"u-admin",attrs:{type:"text",icon:"el-icon-top",size:"mini"},on:{click:function(e){return t.topComment(!1)}}},[t._v("取消置顶")]):t._e(),t.canSetStar?n("el-button",{staticClass:"u-admin",attrs:{type:"text",icon:"el-icon-star-off",size:"mini"},on:{click:function(e){return t.starComment(!0)}}},[t._v("加精")]):t._e(),t.canCancelStar?n("el-button",{staticClass:"u-admin",attrs:{type:"text",icon:"el-icon-star-on",size:"mini"},on:{click:function(e){return t.starComment(!1)}}},[t._v("取消加精")]):t._e(),n("time",{staticClass:"u-date"},[n("i",{staticClass:"el-icon-time"}),t._v(" "+t._s(t.dataFormat(t.date))+" ")])],1),t.showForm?n("el-form",{ref:"form",staticClass:"c-comment-subbox",attrs:{model:t.newComment}},[n("el-form-item",[n("Emotion",{staticClass:"c-comment-emotion",on:{selected:t.handleEmotionSelected}}),n("el-input",{attrs:{type:"textarea",placeholder:"参与评论...",id:"id"+t.inputId},model:{value:t.newComment.content,callback:function(e){t.$set(t.newComment,"content",e)},expression:"newComment.content"}}),n("el-button",{staticClass:"u-admin",attrs:{type:"text",icon:"el-icon-picture",size:"mini"},on:{click:function(e){t.showUploader=!t.showUploader}}},[t._v("图片")])],1),n("el-form-item",[t.showUploader?n("Uploader",{ref:"uploader",on:{onFinish:t.attachmentUploadFinish,onError:t.attachmentUplodError}}):t._e()],1),n("el-form-item",[n("el-button",{attrs:{size:"mini",type:"primary",disabled:t.disableSubmitBtn},on:{click:function(e){return t.submit()}}},[t._v("提交")]),n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){t.showForm=!1}}},[t._v("收起")])],1)],1):t._e()],1)},F=[],$=(n("d81d"),n("506c"));function j(t){const e=new $["a"](t);return e.code}function U(t){return t>9?t:"0".concat(t)}var P={props:["content","date","hasReply","canDelete","canSetTop","canCancelTop","canSetStar","canCancelStar","attachments","commentId"],components:{Uploader:C,Emotion:_["a"]},data:function(){return{newComment:{content:""},showForm:!1,disableSubmitBtn:!1,showUploader:!1,inputId:"",previewList:[]}},mounted:function(){this.commentId&&(this.inputId=this.commentId)},computed:{_attachments:function(){return this.attachments.map((function(t){return Object(a["resolveImagePath"])(t)}))}},methods:{topComment:function(t){this.$emit("setTopComment",t)},starComment:function(t){this.$emit("setStarComment",t)},deleteComment:function(){var t=this;this.$confirm("确定删除该评论吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$emit("deleteComment")})).catch((function(){}))},dataFormat:function(t){var e=new Date(t);return e.getFullYear()+"-"+U(e.getMonth()+1)+"-"+U(e.getDate())+" "+U(e.getHours())+":"+U(e.getMinutes())+":"+U(e.getSeconds())},attachmentUploadFinish:function(t){this.disableSubmitBtn=!1,this.$emit("addNewReply",{content:this.newComment.content,attachmentList:t}),this.showUploader=!1,this.newComment={content:""}},attachmentUplodError:function(){this.disableSubmitBtn=!1},submit:function(){this.disableSubmitBtn=!0,this.$refs.uploader?this.$refs.uploader.upload():this.attachmentUploadFinish([])},hideForm:function(){},formatContent:j,handleEmotionSelected:function(t){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function n(){var i,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=document.querySelector("#id".concat(e.inputId)),console.log(i,t),!i.selectionStart&&0!==i.selectionStart){n.next=12;break}return o=i.selectionStart,a=i.selectionEnd,e.newComment.content=i.value.substring(0,o)+t+i.value.substring(a,i.value.length),n.next=8,e.$nextTick();case 8:i.focus(),i.setSelectionRange(a+t.length,a+t.length),n.next=13;break;case 12:e.newComment.content=t;case 13:case"end":return n.stop()}}),n)})))()},showPreview:function(t){return Object(a["resolveImagePath"])(t)}},filters:{showAttachment:function(t){return Object(a["resolveImagePath"])(t)+"?x-oss-process=style/comment_thumb"}}},T=P,A=(n("e314"),Object(u["a"])(T,E,F,!1,null,null,null)),O=A.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data.length?n("div",{staticClass:"c-comment-replylist"},[t._l(t.data,(function(e){return n("reply-item",{key:e.id,staticClass:"c-comment-reply",attrs:{reply:e,power:t.power},on:{deleteReply:t.deleteReply,addReply:t.addReply}})})),t.data.length>=3||t.showPager?n("el-row",[n("el-col",{attrs:{span:4}},[n("el-button",{directives:[{name:"show",rawName:"v-show",value:t.showPager,expression:"showPager"}],attrs:{type:"text"},on:{click:function(e){return t.showLess()}}},[t._v("收起")]),n("el-button",{directives:[{name:"show",rawName:"v-show",value:!t.showPager,expression:"!showPager"}],attrs:{type:"text"},on:{click:function(e){return t.showMore()}}},[t._v("查看更多")])],1),n("el-col",{staticClass:"c-comment-reply-pages",attrs:{span:20}},[n("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.showPager,expression:"showPager"}],attrs:{small:"","current-page":t.pager.index,"page-size":t.pager.pageSize,layout:"total, prev, pager, next",total:t.pager.total},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){return t.$set(t.pager,"index",e)},"update:current-page":function(e){return t.$set(t.pager,"index",e)}}})],1)],1):t._e()],2):t._e()},z=[],B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",[n("CommentAvatar",{attrs:{"user-avatar":t._f("showAvatar")(t.reply.avatar),"user-href":t._f("profileLink")(t.reply.userId),username:t.reply.displayName}}),n("CommentContentSimple",{attrs:{"comment-id":t.reply.id,date:t.reply.commentDate,content:t.reply.content,attachments:t._f("stringToArray")(t.reply.attachments),"can-delete":t.power.allow||t.power.uid==t.reply.userId,"can-reply":t.power.uid!=t.reply.userId,"user-href":t._f("profileLink")(t.reply.replyForUID),"reply-for-username":t.reply.replyForUsername,"reply-for-user-id":t.reply.replyForUID},on:{delete:t.deleteReply,showReplyInput:function(e){t.showReplyForReplyFrom=!t.showReplyForReplyFrom}}}),t.showReplyForReplyFrom?n("ReplyForReply",{attrs:{username:t.reply.displayName,"user-href":t._f("profileLink")(t.reply.userId),"current-id":t.reply.id},on:{hideForm:function(e){t.showReplyForReplyFrom=!1},doReply:t.doReply}}):t._e()],1)},N=[],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"u-reply"},[n("div",{staticClass:"u-reply-content"},[0!=t.replyForUserId?n("span",{staticClass:"u-reply-label"},[t._v(" 回复 "),n("el-link",{attrs:{type:"primary",target:"_blank",href:t.userHref}},[t._v("@"+t._s(t.replyForUsername))]),t._v(" : ")],1):t._e(),n("div",{staticClass:"u-reply-text",domProps:{innerHTML:t._s(t.formatContent(t.content))}})]),t.attachments.length?n("div",{staticClass:"u-attachements"},t._l(t.attachments,(function(e){return n("el-image",{key:e,attrs:{src:t._f("showAttachment")(e),"preview-src-list":[t.showPreview(e)],lazy:""}})})),1):t._e(),n("div",{staticClass:"u-toolbar"},[t.canReply?n("el-button",{staticClass:"u-admin",attrs:{type:"text",icon:"el-icon-chat-line-round",size:"mini"},on:{click:function(e){return t.showReplyForReplyInput()}}},[t._v("回复")]):t._e(),t.canDelete?n("el-button",{staticClass:"u-admin",attrs:{type:"text",icon:"el-icon-delete",size:"mini"},on:{click:function(e){return t.deleteComment()}}},[t._v("删除")]):t._e(),n("time",{staticClass:"u-date"},[n("i",{staticClass:"el-icon-time"}),t._v(" "+t._s(t.dataFormat(t.date))+" ")])],1)])},M=[];n("ac1f"),n("1276");function J(t){return t>9?t:"0".concat(t)}var V={props:["commentId","content","attachments","date","hasReply","canDelete","canReply","userHref","replyForUsername","replyForUserId"],data:function(){return{showInput:!1}},computed:{_attachments:function(){return this.attachments.map((function(t){return Object(a["resolveImagePath"])(t)}))}},filters:{profileLink:function(t){return Object(a["authorLink"])(t)},showAttachment:function(t){return Object(a["resolveImagePath"])(t)+"?x-oss-process=style/comment_thumb"}},methods:{formatContent:j,getPList:function(t){return t.split("\n")},deleteComment:function(){var t=this;this.$confirm("确定删除该评论吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$emit("delete",t.commentId)})).catch((function(){}))},dataFormat:function(t){var e=new Date(t);return e.getFullYear()+"-"+J(e.getMonth()+1)+"-"+J(e.getDate())+" "+J(e.getHours())+":"+J(e.getMinutes())+":"+J(e.getSeconds())},showReplyForReplyInput:function(){this.$emit("showReplyInput")},previewImg:function(t){this.$hevueImgPreview({multiple:!0,nowImgIndex:t,imgList:this._attachments,controlBar:!1,clickMaskCLose:!0})},showPreview:function(t){return Object(a["resolveImagePath"])(t)}}},q=V,W=(n("0b4e"),Object(u["a"])(q,H,M,!1,null,null,null)),G=W.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-form",{ref:"form",staticClass:"c-comment-subbox"},[n("div",{staticClass:"u-subbox-label"},[t._v(" 回复 "),n("el-link",{attrs:{type:"primary",target:"_blank",href:t.userHref}},[t._v("＠"+t._s(t.username))]),t._v(" ： ")],1),n("el-form-item",[n("Emotion",{staticClass:"c-comment-emotion",on:{selected:t.handleEmotionSelected}}),n("el-input",{attrs:{type:"textarea",id:"id"+t.inputId},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),n("el-button",{staticClass:"u-admin",attrs:{type:"text",icon:"el-icon-picture",size:"mini"},on:{click:function(e){t.showUploader=!t.showUploader}}},[t._v("图片")])],1),n("el-form-item",[t.showUploader?n("Uploader",{ref:"uploader",on:{onFinish:t.attachmentUploadFinish,onError:t.attachmentUplodError}}):t._e()],1),n("el-form-item",[n("el-button",{attrs:{size:"mini",type:"primary",disabled:t.disableSubmitBtn},on:{click:function(e){return t.submintReply()}}},[t._v("提交")]),n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){return t.hideForm()}}},[t._v("收起")])],1)],1)},Y=[],Q={props:["username","userHref","currentId"],data:function(){return{content:"",showUploader:!1,disableSubmitBtn:!1,inputId:""}},components:{Uploader:C,Emotion:_["a"]},mounted:function(){this.currentId&&(this.inputId=this.currentId)},methods:{submintReply:function(){this.disableSubmitBtn=!0,this.$refs.uploader?this.$refs.uploader.upload():this.attachmentUploadFinish([])},hideForm:function(){this.$emit("hideForm")},attachmentUploadFinish:function(t){this.disableSubmitBtn=!1,this.$emit("doReply",{content:this.content,attachmentList:t}),this.content="",this.showUploader=!1},attachmentUplodError:function(){this.disableSubmitBtn=!1},handleEmotionSelected:function(t){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function n(){var i,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=document.querySelector("#id".concat(e.inputId)),console.log(i,t),!i.selectionStart&&0!==i.selectionStart){n.next=12;break}return o=i.selectionStart,a=i.selectionEnd,e.content=i.value.substring(0,o)+t+i.value.substring(a,i.value.length),n.next=8,e.$nextTick();case 8:i.focus(),i.setSelectionRange(a+t.length,a+t.length),n.next=13;break;case 12:e.content=t;case 13:case"end":return n.stop()}}),n)})))()}}},X=Q,Z=(n("0837"),Object(u["a"])(X,K,Y,!1,null,null,null)),tt=Z.exports,et={props:["reply","power"],components:{CommentAvatar:p,CommentContentSimple:G,ReplyForReply:tt},backReplyList:[],data:function(){return{showReplyForReplyFrom:!1}},filters:{profileLink:function(t){return Object(a["authorLink"])(t)},stringToArray:function(t){return t?JSON.parse(t):[]},showAvatar:function(t){return Object(a["showAvatar"])(t,84)}},methods:{deleteReply:function(t){this.$emit("deleteReply",t)},doReply:function(t){t.replyForUID=this.reply.userId,t.replyForCommentId=this.reply.id,this.$emit("addReply",t),this.showReplyForReplyFrom=!1}}},nt=et,it=Object(u["a"])(nt,B,N,!1,null,null,null),ot=it.exports,at={props:["data","power","pager"],components:{ReplyItem:ot},data:function(){return{showPager:!1}},filters:{profileLink:function(t){return Object(a["authorLink"])(t)}},methods:{showMore:function(){this.showPager=!0,this.$emit("goto",1)},showLess:function(){this.showPager=!1,this.$emit("resetReply")},handleCurrentChange:function(t){this.$emit("goto",t)},deleteReply:function(t){this.$emit("deleteReply",t)},addReply:function(t){this.$emit("addNewReply",t)}}},rt=at,st=(n("8366"),Object(u["a"])(rt,D,z,!1,null,null,null)),ct=st.exports,lt=n("65c2"),ut=n("5c96");const mt=function(t,e){let n={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}};return gt(t,e,n)};var pt={};const dt=function(t,e,n){if(pt[t])if(Date.now()-pt[t].lastest<6e4){if(pt[t].count>=6)return ut["Notification"].warning({title:"系统",message:"你单身多久了? 动作这么快, 系统处理不过来 ( T_T )",duration:3e3,position:"bottom-right"}),new Promise((t,e)=>{e()});pt[t].count=pt[t].count+1}else Date.now()-pt[t].lastest>6e4&&(pt[t]={lastest:Date.now(),count:0});else pt[t]={lastest:Date.now(),count:0};let i={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)};return gt(t,e,i)},ft=function(t,e,n){let i={method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)};return gt(t,e,i)},ht=function(t,e){let n={method:"DELETE"};return gt(t,e,n)};function gt(t,e,n){let i=lt["__next"];if("/"==i[i.length-1]&&(i=i.substring(0,i.length-1)),t=i+t,n.credentials="include",e){let n=[];Object.keys(e).forEach(t=>{n.push(t+"="+e[t])});let i=lt["__next"];"/"==i[i.length-1]&&(i=i.substring(0,i.length-1)),t=t+"?"+n.join("&")}return fetch(t,n).then(t=>{switch(t.status){case 200:break;case 401:throw window.location.href=lt["__Links"].account.login+"?redirect="+encodeURIComponent(window.location.href),new Error("错误:"+t.statusText);case 403:throw window.location.href=lt["__Links"].account.login+"?redirect="+encodeURIComponent(window.location.href),new Error("错误:"+t.statusText);case 423:throw window.location.href=lt["__Links"].account.email_verify+"?redirect="+encodeURIComponent(window.location.href),new Error("错误:"+t.statusText);case 406:throw t.text().then(t=>{ut["Notification"].warning({title:"系统",message:t||"提交内容不合法,请重新提交",duration:3e3,position:"bottom-right"})}),new Error("错误:"+t.statusText);default:throw t.text().then(e=>{ut["Notification"].error({title:"系统:"+t.statusText,message:e||"系统错误,请稍后重试!",duration:3e3,position:"bottom-right"})}),new Error("错误:"+t.statusText)}let e=t.headers.get("Content-Type");switch(e=e&&e.split(";").shift(),e){case"application/json":return t.json();default:return t.text()}})}var yt={props:["item","baseApi","power","user-href","username"],components:{CommentContent:O,ReplyList:ct},data:function(){return{replyList:[],pager:{index:1,pageSize:10,pageTotal:1,total:0}}},filters:{stringToArray:function(t){return t?JSON.parse(t):[]}},created:function(){this.replyList=this.item.reply||[]},methods:{deleteComment:function(){this.$emit("deleteComment",this.item.id)},setTopComment:function(t){this.$emit("setTopComment",this.item.id,t)},setStarComment:function(t){this.$emit("setStarComment",this.item.id,t)},addNewReply:function(t){var e=this;dt("".concat(this.baseApi,"/comment/").concat(this.item.id,"/reply"),null,t).then((function(){e.$notify({title:"",message:"评论成功!",type:"success",duration:3e3,position:"bottom-right"}),e.loadReplyList(e.pager.index)})).catch((function(){}))},deleteReply:function(t){var e=this;ht("".concat(this.baseApi,"/comment/").concat(t)).then((function(){e.$notify({title:"",message:"删除成功!",type:"success",duration:3e3,position:"bottom-right"}),e.loadReplyList(e.pager.index)})).catch((function(){}))},gotoReplyListIndex:function(t){this.loadReplyList(t,6)},loadReplyList:function(t,e){var n=this;mt("".concat(this.baseApi,"/comment/").concat(this.item.id,"/reply/page/").concat(t,"?pageSize=").concat(e)).then((function(i){1==t&&3==e&&(n.item.reply=i.data||[]),n.replyList=i.data||[],n.pager=i.page})).catch((function(){}))},resetReply:function(){this.loadReplyList(1,3)}}},bt=yt,vt=(n("6c77"),Object(u["a"])(bt,I,L,!1,null,null,null)),wt=vt.exports,Ct=n("41cb"),_t=n("c9d2");const xt="cmt_order";async function kt(){return _t["a"].isLogin()?Object(Ct["a"])({mute:!0}).get("/api/cms/user/conf",{params:{key:xt}}).then(t=>t.data.data):new Promise(t=>{const e=localStorage.getItem(xt)||"DESC";t(e)})}async function St(t){return _t["a"].isLogin()?Object(Ct["a"])().post("/api/cms/user/conf",{val:t},{params:{key:xt}}).then(t=>t.data.data):new Promise(e=>{e(localStorage.setItem(xt,t))})}var Rt={name:"Comment",props:["id","category","normal","order"],components:{CommentAvatar:p,CommentWithReply:wt,CommentInputForm:R},data:function(){return{baseAPI:"",commentPower:{allow:!1,uid:-1},commentList:[],pager:{index:1,pageSize:10,pageTotal:1,total:0},isDesc:"DESC",loading:!1}},computed:{isNormal:function(){return void 0===this.normal||this.normal}},methods:{changeOrder:function(){this.reloadCommentList(this.pager.index),St(this.isDesc?"DESC":"ASC")},setTopComment:function(t,e){var n=this,i=e?"set":"cancel";ft("".concat(this.baseAPI,"/comment/").concat(t,"/top/").concat(i)).then((function(){n.reloadCommentList(n.pager.index)})).catch((function(){}))},setStarComment:function(t,e){var n=this,i=e?"set":"cancel";ft("".concat(this.baseAPI,"/comment/").concat(t,"/star/").concat(i)).then((function(){n.reloadCommentList(n.pager.index)})).catch((function(){}))},deleteComment:function(t){var e=this;ht("".concat(this.baseAPI,"/comment/").concat(t)).then((function(){e.$notify({title:"",message:"删除成功!",type:"success",duration:3e3,position:"bottom-right"}),e.reloadCommentList(e.pager.index)})).catch((function(){}))},reloadCommentList:function(t){var e=this;this.loading=!0;var n={};"DESC"===this.isDesc&&(n["desc"]=!0),mt("".concat(this.baseAPI,"/comment/page/").concat(t),n).then((function(t){e.commentList=t.data||[],e.pager=t.page})).catch((function(){})).finally((function(){e.loading=!1}))},handleCurrentChange:function(t){this.reloadCommentList(t)},userSubmitInputForm:function(t){var e=this;dt("".concat(this.baseAPI,"/comment"),null,t).then((function(t){t&&~~t.code>0?e.$notify({title:"评论失败",message:t.msg||"",type:"error",duration:3e3,position:"bottom-right"}):(e.$notify({title:"",message:"评论成功!",type:"success",duration:3e3,position:"bottom-right"}),1==e.pager.index&&e.reloadCommentList(e.pager.index))})).catch((function(){}))}},filters:{profileLink:function(t){return Object(a["authorLink"])(t)},showAvatar:function(t){return Object(a["showAvatar"])(t,144)}},created:function(){this.baseAPI="/api/comment/".concat(this.category,"/article/").concat(this.id)},mounted:function(){var t=this;kt().then((function(e){t.isDesc=e})).then((function(){mt("".concat(t.baseAPI,"/i-am-author")).then((function(e){t.commentPower=e})).catch((function(){}))})).finally((function(){t.reloadCommentList(1)}))}},It=Rt,Lt=(n("ae14"),Object(u["a"])(It,i,o,!1,null,null,null));e["a"]=Lt.exports},"3e43":function(t,e,n){"use strict";n("62e4f")},"4e82":function(t,e,n){"use strict";var i=n("23e7"),o=n("e330"),a=n("59ed"),r=n("7b0b"),s=n("07fa"),c=n("577e"),l=n("d039"),u=n("addb"),m=n("a640"),p=n("04d1"),d=n("d998"),f=n("2d00"),h=n("512ce"),g=[],y=o(g.sort),b=o(g.push),v=l((function(){g.sort(void 0)})),w=l((function(){g.sort(null)})),C=m("sort"),_=!l((function(){if(f)return f<70;if(!(p&&p>3)){if(d)return!0;if(h)return h<603;var t,e,n,i,o="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(i=0;i<47;i++)g.push({k:e+i,v:n})}for(g.sort((function(t,e){return e.v-t.v})),i=0;i<g.length;i++)e=g[i].k.charAt(0),o.charAt(o.length-1)!==e&&(o+=e);return"DGBEFHACIJK"!==o}})),x=v||!w||!C||!_,k=function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:c(e)>c(n)?1:-1}};i({target:"Array",proto:!0,forced:x},{sort:function(t){void 0!==t&&a(t);var e=r(this);if(_)return void 0===t?y(e):y(e,t);var n,i,o=[],c=s(e);for(i=0;i<c;i++)i in e&&b(o,e[i]);u(o,k(t)),n=o.length,i=0;while(i<n)e[i]=o[i++];while(i<c)delete e[i++];return e}})},"506c":function(t,e,n){"use strict";var i=n("1157"),o=n.n(i),a=n("0608"),r=n("65c2");class s{constructor(t){this._joke=o.a.trim(t),this.init()}init(){this.code=this._renderHTML()}_renderHTML(){let t=this._joke;const e=Object.keys(a),n=t=>{const e=Object.keys(t),n={};return e.forEach(t=>{const e=t.slice(1),i=r["__imgPath"]+`image/emotion/${e}.gif`;n[t]=i}),n},i=t=>{let e=n(a);return`<img src="${e[t]}" alt="${t}" title="${t}" />`},o=(t,e)=>{const n=new RegExp(Object.keys(e).join("|"),"gi");return t.replace(n,t=>e[t])},s=[/(#[\u4e00-\u9fa5]{1})/g,/(#[\u4e00-\u9fa5]{2})/g,/(#[\u4e00-\u9fa5]{3})/g];let c={};return s.forEach(n=>{if(n.test(t)){let o=t.match(n).filter(t=>e.includes(t)).reduce((t,e)=>({...t,[e]:i(e)}),{});c=Object.assign({},c,o)}}),Object.keys(c).length>0&&(t=o(t,c)),t}}e["a"]=s},"512ce":function(t,e,n){var i=n("342f"),o=i.match(/AppleWebKit\/(\d+)\./);t.exports=!!o&&+o[1]},"62e4f":function(t,e,n){},"6c77":function(t,e,n){"use strict";n("101d")},8366:function(t,e,n){"use strict";n("b07e")},ae14:function(t,e,n){"use strict";n("c2ee")},b07e:function(t,e,n){},b64b:function(t,e,n){var i=n("23e7"),o=n("7b0b"),a=n("df75"),r=n("d039"),s=r((function(){a(1)}));i({target:"Object",stat:!0,forced:s},{keys:function(t){return a(o(t))}})},b9c7:function(t,e,n){},c0ba8:function(t,e,n){"use strict";n("084d")},c2ee:function(t,e,n){},c840:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-jx3box-emotion"},[t._l(t.sortedEmotions,(function(e){return[n("span",{key:e.key,staticClass:"c-jx3box-emotion-item",on:{click:function(n){return t.handleEmotionClick(e.key)}}},[n("img",{attrs:{src:e.path,alt:e.key,title:e.key}})])]}))],2)},o=[],a=(n("b64b"),n("4e82"),n("d3b7"),n("159b"),n("fb6a"),n("0608")),r=n("65c2"),s={name:"Emotion",data:function(){return{sortedEmotions:[]}},created:function(){this.emotionSort()},methods:{emotionSort:function(){var t=this,e=Object.keys(a);e.sort((function(t,e){return t.localeCompare(e)})),e.forEach((function(e){var n=e.slice(1),i={key:e,value:a[e],path:r["__imgPath"]+"image/emotion/".concat(n,".gif")};t.sortedEmotions.push(i)}))},handleEmotionClick:function(t){this.$emit("selected",t)}}},c=s,l=(n("3e43"),n("2877")),u=Object(l["a"])(c,i,o,!1,null,"3af30d3b",null);e["a"]=u.exports},d81d:function(t,e,n){"use strict";var i=n("23e7"),o=n("b727").map,a=n("1dde"),r=a("map");i({target:"Array",proto:!0,forced:!r},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},d998:function(t,e,n){var i=n("342f");t.exports=/MSIE|Trident/.test(i)},e314:function(t,e,n){"use strict";n("f263")},e7d2:function(t,e,n){},f263:function(t,e,n){}}]);
//# sourceMappingURL=chunk-2aba0e3c.5262c35b.js.map