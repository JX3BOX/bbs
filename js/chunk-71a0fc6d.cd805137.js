(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71a0fc6d"],{"0837":function(t,e,n){"use strict";n("b9c7")},"084d":function(t,e,n){},"0886":function(t,e,n){},"0b4e":function(t,e,n){"use strict";n("e7d2")},"23d8":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"c-comment"},[n("el-main",[n("CommentInputForm",{on:{submit:t.userSubmitInputForm}}),n("div",{staticClass:"c-comment-order"},[n("span",[t._v("排序模式：")]),n("el-switch",{on:{change:t.changeOrder},model:{value:t.isDesc,callback:function(e){t.isDesc=e},expression:"isDesc"}}),n("b",[t._v(t._s(t.isDesc?"最后靠前":"最早靠前"))])],1),t.isNormal?[t._l(t.commentList,(function(e){return n("div",{key:e.id,staticClass:"c-comment-list"},[n("Avatar",{attrs:{"user-avatar":t._f("showAvatar")(e.avatar),"user-href":t._f("profileLink")(e.userId),username:e.displayName,avatarFrame:e.user_avatar_frame,withFrame:!0}}),n("CommmentWithReply",{attrs:{"base-api":t.baseAPI,item:e,category:t.category,power:t.commentPower,"user-href":t._f("profileLink")(e.userId),username:e.displayName},on:{deteleComment:t.deteleComment}})],1)})),n("div",{staticClass:"c-comment-pages"},[t.commentList.length>5?n("CommentInputForm",{attrs:{isBottom:t.commentList.length>5},on:{submit:t.userSubmitInputForm}}):t._e(),n("div",{staticClass:"u-pages"},[n("el-pagination",{staticStyle:{"text-align":"right"},attrs:{background:"","hide-on-single-page":"","current-page":t.pager.index,"page-size":t.pager.pageSize,layout:"prev, pager, next, total",total:t.pager.total},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){return t.$set(t.pager,"index",e)},"update:current-page":function(e){return t.$set(t.pager,"index",e)}}})],1)],1)]:t._e()],2)],1)},a=[],o=(n("99af"),n("d3b7"),n("85e4")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-comment-avatar"},[n("a",{staticClass:"u-avatar",attrs:{href:t.userHref,target:"_blank"}},[n("el-avatar",{staticClass:"u-avatar-pic",class:{isCircle:t.isCircle},attrs:{shape:"square",size:t.avatarSize,src:t.userAvatar}}),t.frameName?n("i",{staticClass:"u-avatar-frame"},[n("img",{attrs:{src:t.frameUrl}})]):t._e()],1),n("el-link",{staticClass:"u-name",attrs:{type:"primary",target:"_blank",href:t.userHref}},[t._v(t._s(t.username))])],1)},r=[],c=n("65c2"),l={props:["avatarSize","userAvatar","userHref","username","avatarFrame","withFrame"],data:function(){return{}},computed:{frames:function(){return this.$store.state.frames},frameName:function(){return this.avatarFrame&&this.frames[this.avatarFrame]?this.avatarFrame:""},frameUrl:function(){if(this.frameName){var t=this.frames[this.frameName].files.s.file;return c["__imgPath"]+"image/avatar/".concat(this.frameName,"/").concat(t)}return""},isCircle:function(){return this.frameName&&"circle"==this.frames[this.frameName].style}},methods:{},mounted:function(){}},u=l,m=(n("c0ba"),n("2877")),d=Object(m["a"])(u,s,r,!1,null,null,null),p=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-form",{ref:"form",staticClass:"c-comment-box",attrs:{model:t.newComment}},[n("el-form-item",[n("Emotion",{staticClass:"c-comment-emotion",on:{selected:t.handleEmotionSelected}}),n("el-input",{attrs:{rows:"3",type:"textarea",maxlength:"300","show-word-limit":"",placeholder:"参与讨论...",id:t.inputId},model:{value:t.newComment.content,callback:function(e){t.$set(t.newComment,"content",e)},expression:"newComment.content"}}),t.showUploader?n("Uploader",{ref:"uploader",staticClass:"u-uploader",on:{onFinish:t.attachmentUploadFinish,onError:t.attachmentUplodError}}):t._e(),n("div",{staticClass:"u-toolbar"},[n("el-button",{staticClass:"u-admin",attrs:{type:"text",icon:"el-icon-picture",size:"mini"},on:{click:function(e){t.showUploader=!t.showUploader}}},[t._v("图片")]),n("el-button",{staticClass:"u-publish",attrs:{type:"primary",disabled:t.disableSubmitBtn},on:{click:t.onSubmit}},[t._v("发表评论")])],1)],1)],1)},f=[],g=n("1da1"),y=(n("96cf"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-upload",{ref:"upload",attrs:{action:"https://server.jx3box.com/upload","list-type":"picture-card","on-preview":t.handlePictureCardPreview,"auto-upload":!1,"file-list":t.fileList,limit:3,multiple:"","with-credentials":"","on-exceed":t.onExceed,"on-change":t.onChange,"on-success":t.onSuccess,"on-error":t.onError}},[n("i",{staticClass:"el-icon-plus"}),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(" 只能上传jpg/png/gif文件，且不超过500k的３张图片 ")])]),n("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("img",{attrs:{width:"60%",src:t.dialogImageUrl,alt:""}})])],1)}),b=[],v={data:function(){return{dialogImageUrl:"",dialogVisible:!1,fileList:[],successList:[]}},methods:{handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},onExceed:function(){this.$notify({title:"",message:"文件超过数量!",type:"error",duration:3e3,position:"bottom-right"})},onChange:function(t,e){"ready"==t.status&&(t.size>512e3?(this.$notify({title:"",message:"图片大小不能超过500kb!",type:"error",duration:3e3,position:"bottom-right"}),e.pop()):this.fileList=e)},upload:function(){this.fileList.length>0?this.$refs.upload.submit():this.$emit("onFinish",[])},onSuccess:function(t){this.successList=this.successList.concat(t.data.list),this.successList.length==this.fileList.length&&(this.$emit("onFinish",this.successList||[]),this.fileList=[],this.successList=[])},onError:function(){this.$notify({title:"",message:"图片上传失败!",type:"error",duration:3e3,position:"bottom-right"}),this.$emit("onError"),this.fileList=[]}}},w=v,k=Object(m["a"])(w,y,b,!1,null,null,null),_=k.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-jx3box-emotion"},[t._l(t.sortedEmotions,(function(e){return[n("span",{key:e.key,staticClass:"c-jx3box-emotion-item",on:{click:function(n){return t.handleEmotionClick(e.key)}}},[n("img",{attrs:{src:e.path,alt:e.key,title:e.key}})])]}))],2)},x=[],j=(n("b64b"),n("4e82"),n("159b"),n("fb6a"),n("e9a5")),R={name:"Emotion",data:function(){return{sortedEmotions:[]}},created:function(){this.emotionSort()},methods:{emotionSort:function(){var t=this,e=Object.keys(j);e.sort((function(t,e){return t.localeCompare(e)})),e.forEach((function(e){var n=e.slice(1),i={key:e,value:j[e],path:c["__imgPath"]+"image/emotion/".concat(n,".gif")};t.sortedEmotions.push(i)}))},handleEmotionClick:function(t){this.$emit("selected",t)}}},L=R,E=(n("f7729"),Object(m["a"])(L,C,x,!1,null,"305c0178",null)),I=E.exports,F={components:{Uploader:_,Emotion:I},props:{isBottom:{type:Boolean,default:!1}},mounted:function(){this.isBottom&&(this.inputId="textarea-bottom")},data:function(){return{showUploader:!1,disableSubmitBtn:!1,newComment:{content:""},inputId:"textarea-top"}},methods:{onSubmit:function(){this.disableSubmitBtn=!0,this.$refs.uploader?this.$refs.uploader.upload():this.attachmentUploadFinish([])},attachmentUploadFinish:function(t){this.$emit("submit",{content:this.newComment.content,attachmentList:t}),this.newComment={content:""},this.showUploader=!1,this.disableSubmitBtn=!1},attachmentUplodError:function(){this.disableSubmitBtn=!1},handleEmotionSelected:function(t){console.log(t),this.insertVariable(t)},insertVariable:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function n(){var i,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=document.querySelector("#".concat(e.inputId)),!i.selectionStart&&0!==i.selectionStart){n.next=11;break}return a=i.selectionStart,o=i.selectionEnd,e.newComment.content=i.value.substring(0,a)+t+i.value.substring(o,i.value.length),n.next=7,e.$nextTick();case 7:i.focus(),i.setSelectionRange(o+t.length,o+t.length),n.next=12;break;case 11:e.newComment.content=t;case 12:case"end":return n.stop()}}),n)})))()}}},S=F,$=Object(m["a"])(S,h,f,!1,null,null,null),O=$.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-comment-cmt"},[n("el-link",{staticClass:"u-name",attrs:{type:"primary",target:"_blank",href:t.userHref}},[t._v(t._s(t.username||"人字榜800线无名小侠"))]),n("CommentContent",{attrs:{date:t.item.commentDate,content:t.item.content,"comment-id":t.item.id,attachments:t._f("stringToArray")(t.item.attachments),"can-delete":t.power.allow||t.power.uid==t.item.userId},on:{addNewReply:t.addNewReply,deteleComment:t.deteleComment}}),n("ReplyList",{attrs:{data:t.replyList,pager:t.pager,power:t.power},on:{addNewReply:t.addNewReply,deleteReply:t.deleteReply,goto:t.gotoReplyListIndex,resetReply:t.resetReply}})],1)},P=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"u-cmt"},[""!=t.content?n("div",{staticClass:"u-text",domProps:{innerHTML:t._s(t.formatContent(t.content))}}):t._e(),t.attachments.length?n("div",{staticClass:"u-attachements"},t._l(t.attachments,(function(e){return n("el-image",{key:e,attrs:{src:t._f("showAttachment")(e),"preview-src-list":t._attachments,lazy:""}})})),1):t._e(),n("div",{staticClass:"u-toolbar"},[n("el-button",{staticClass:"u-admin",attrs:{type:"text",size:"mini",icon:"el-icon-chat-round"},on:{click:function(e){t.showForm=!t.showForm}}},[t._v("回复")]),t.canDelete?n("el-button",{staticClass:"u-admin",attrs:{type:"text",icon:"el-icon-delete",size:"mini"},on:{click:function(e){return t.deleteComment()}}},[t._v("删除")]):t._e(),n("time",{staticClass:"u-date"},[n("i",{staticClass:"el-icon-time"}),t._v(" "+t._s(t.dataFormat(t.date))+" ")])],1),t.showForm?n("el-form",{ref:"form",staticClass:"c-comment-subbox",attrs:{model:t.newComment}},[n("el-form-item",[n("Emotion",{staticClass:"c-comment-emotion",on:{selected:t.handleEmotionSelected}}),n("el-input",{attrs:{type:"textarea",placeholder:"参与评论...",id:"id"+t.inputId},model:{value:t.newComment.content,callback:function(e){t.$set(t.newComment,"content",e)},expression:"newComment.content"}}),n("el-button",{staticClass:"u-admin",attrs:{type:"text",icon:"el-icon-picture",size:"mini"},on:{click:function(e){t.showUploader=!t.showUploader}}},[t._v("图片")])],1),n("el-form-item",[t.showUploader?n("Uploader",{ref:"uploader",on:{onFinish:t.attachmentUploadFinish,onError:t.attachmentUplodError}}):t._e()],1),n("el-form-item",[n("el-button",{attrs:{size:"mini",type:"primary",disabled:t.disableSubmitBtn},on:{click:function(e){return t.submit()}}},[t._v("提交")]),n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){t.showForm=!1}}},[t._v("收起")])],1)],1):t._e()],1)},N=[],D=(n("d81d"),n("506c"));function T(t){const e=new D["a"](t);return e.code}function B(t){return t>9?t:"0".concat(t)}var z={props:["content","date","hasReply","canDelete","attachments","commentId"],components:{Uploader:_,Emotion:I},data:function(){return{newComment:{content:""},showForm:!1,disableSubmitBtn:!1,showUploader:!1,inputId:""}},mounted:function(){this.commentId&&(this.inputId=this.commentId)},computed:{_attachments:function(){return this.attachments.map((function(t){return Object(o["resolveImagePath"])(t)}))}},methods:{deleteComment:function(){this.$emit("deteleComment")},dataFormat:function(t){var e=new Date(t);return e.getFullYear()+"-"+B(e.getMonth()+1)+"-"+B(e.getDate())+" "+B(e.getHours())+":"+B(e.getMinutes())+":"+B(e.getSeconds())},attachmentUploadFinish:function(t){this.disableSubmitBtn=!1,this.$emit("addNewReply",{content:this.newComment.content,attachmentList:t}),this.showUploader=!1,this.newComment={content:""}},attachmentUplodError:function(){this.disableSubmitBtn=!1},submit:function(){this.disableSubmitBtn=!0,this.$refs.uploader?this.$refs.uploader.upload():this.attachmentUploadFinish([])},hideForm:function(){},formatContent:T,handleEmotionSelected:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function n(){var i,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=document.querySelector("#id".concat(e.inputId)),console.log(i,t),!i.selectionStart&&0!==i.selectionStart){n.next=12;break}return a=i.selectionStart,o=i.selectionEnd,e.newComment.content=i.value.substring(0,a)+t+i.value.substring(o,i.value.length),n.next=8,e.$nextTick();case 8:i.focus(),i.setSelectionRange(o+t.length,o+t.length),n.next=13;break;case 12:e.newComment.content=t;case 13:case"end":return n.stop()}}),n)})))()}},filters:{showAttachment:function(t){return Object(o["resolveImagePath"])(t)+"?x-oss-process=style/comment_thumb"}}},M=z,J=(n("e314"),Object(m["a"])(M,A,N,!1,null,null,null)),H=J.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data.length?n("div",{staticClass:"c-comment-replylist"},[t._l(t.data,(function(e){return n("reply-item",{key:e.id,staticClass:"c-comment-reply",attrs:{reply:e,power:t.power},on:{deleteReply:t.deleteReply,addReply:t.addReply}})})),t.data.length>=3||t.showPager?n("el-row",[n("el-col",{attrs:{span:4}},[n("el-button",{directives:[{name:"show",rawName:"v-show",value:t.showPager,expression:"showPager"}],attrs:{type:"text"},on:{click:function(e){return t.showLess()}}},[t._v("收起")]),n("el-button",{directives:[{name:"show",rawName:"v-show",value:!t.showPager,expression:"!showPager"}],attrs:{type:"text"},on:{click:function(e){return t.showMore()}}},[t._v("查看更多")])],1),n("el-col",{staticClass:"c-comment-reply-pages",attrs:{span:20}},[n("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.showPager,expression:"showPager"}],attrs:{small:"","current-page":t.pager.index,"page-size":t.pager.pageSize,layout:"total, prev, pager, next",total:t.pager.total},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){return t.$set(t.pager,"index",e)},"update:current-page":function(e){return t.$set(t.pager,"index",e)}}})],1)],1):t._e()],2):t._e()},q=[],V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",[n("Avatar",{attrs:{"user-avatar":t._f("showAvatar")(t.reply.avatar),"user-href":t._f("profileLink")(t.reply.userId),username:t.reply.displayName}}),n("CommentContentSimple",{attrs:{"comment-id":t.reply.id,date:t.reply.commentDate,content:t.reply.content,attachments:t._f("stringToArray")(t.reply.attachments),"can-delete":t.power.allow||t.power.uid==t.reply.userId,"can-reply":t.power.uid!=t.reply.userId,"user-href":t._f("profileLink")(t.reply.replyForUID),"reply-for-username":t.reply.replyForUsername,"reply-for-user-id":t.reply.replyForUID},on:{delete:t.deleteReply,showReplyInput:function(e){t.showReplyForReplyFrom=!t.showReplyForReplyFrom}}}),t.showReplyForReplyFrom?n("ReplyForReply",{attrs:{username:t.reply.displayName,"user-href":t._f("profileLink")(t.reply.userId),"current-id":t.reply.id},on:{hideForm:function(e){t.showReplyForReplyFrom=!1},doReply:t.doReply}}):t._e()],1)},Y=[],W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"u-reply"},[n("div",{staticClass:"u-reply-content"},[0!=t.replyForUserId?n("span",{staticClass:"u-reply-label"},[t._v(" 回复 "),n("el-link",{attrs:{type:"primary",target:"_blank",href:t.userHref}},[t._v("@"+t._s(t.replyForUsername))]),t._v(" : ")],1):t._e(),n("div",{staticClass:"u-reply-text",domProps:{innerHTML:t._s(t.formatContent(t.content))}})]),t.attachments.length?n("div",{staticClass:"u-attachements"},t._l(t.attachments,(function(e){return n("el-image",{key:e,attrs:{src:t._f("showAttachment")(e),"preview-src-list":t._attachments,lazy:""}})})),1):t._e(),n("div",{staticClass:"u-toolbar"},[t.canDelete?n("el-button",{staticClass:"u-admin",attrs:{type:"text",icon:"el-icon-delete",size:"mini"},on:{click:function(e){return t.deleteComment()}}},[t._v("删除")]):t._e(),t.canReply?n("el-button",{staticClass:"u-admin",attrs:{type:"text",icon:"el-icon-chat-line-round",size:"mini"},on:{click:function(e){return t.showReplyForReplyInput()}}},[t._v("回复")]):t._e(),n("time",{staticClass:"u-date"},[n("i",{staticClass:"el-icon-time"}),t._v(" "+t._s(t.dataFormat(t.date))+" ")])],1)])},G=[];n("ac1f"),n("1276");function K(t){return t>9?t:"0".concat(t)}var Q={props:["commentId","content","attachments","date","hasReply","canDelete","canReply","userHref","replyForUsername","replyForUserId"],data:function(){return{showInput:!1}},computed:{_attachments:function(){return this.attachments.map((function(t){return Object(o["resolveImagePath"])(t)}))}},filters:{profileLink:function(t){return Object(o["authorLink"])(t)},showAttachment:function(t){return Object(o["resolveImagePath"])(t)+"?x-oss-process=style/comment_thumb"}},methods:{formatContent:T,getPList:function(t){return t.split("\n")},deleteComment:function(){this.$emit("delete",this.commentId)},dataFormat:function(t){var e=new Date(t);return e.getFullYear()+"-"+K(e.getMonth()+1)+"-"+K(e.getDate())+" "+K(e.getHours())+":"+K(e.getMinutes())+":"+K(e.getSeconds())},showReplyForReplyInput:function(){this.$emit("showReplyInput")}}},Z=Q,tt=(n("0b4e"),Object(m["a"])(Z,W,G,!1,null,null,null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-form",{ref:"form",staticClass:"c-comment-subbox"},[n("div",{staticClass:"u-subbox-label"},[t._v(" 回复 "),n("el-link",{attrs:{type:"primary",target:"_blank",href:t.userHref}},[t._v("＠"+t._s(t.username))]),t._v(" ： ")],1),n("el-form-item",[n("Emotion",{staticClass:"c-comment-emotion",on:{selected:t.handleEmotionSelected}}),n("el-input",{attrs:{type:"textarea",id:"id"+t.inputId},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),n("el-button",{staticClass:"u-admin",attrs:{type:"text",icon:"el-icon-picture",size:"mini"},on:{click:function(e){t.showUploader=!t.showUploader}}},[t._v("图片")])],1),n("el-form-item",[t.showUploader?n("Uploader",{ref:"uploader",on:{onFinish:t.attachmentUploadFinish,onError:t.attachmentUplodError}}):t._e()],1),n("el-form-item",[n("el-button",{attrs:{size:"mini",type:"primary",disabled:t.disableSubmitBtn},on:{click:function(e){return t.submintReply()}}},[t._v("提交")]),n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){return t.hideForm()}}},[t._v("收起")])],1)],1)},it=[],at={props:["username","userHref","currentId"],data:function(){return{content:"",showUploader:!1,disableSubmitBtn:!1,inputId:""}},components:{Uploader:_,Emotion:I},mounted:function(){this.currentId&&(this.inputId=this.currentId)},methods:{submintReply:function(){this.disableSubmitBtn=!0,this.$refs.uploader?this.$refs.uploader.upload():this.attachmentUploadFinish([])},hideForm:function(){this.$emit("hideForm")},attachmentUploadFinish:function(t){this.disableSubmitBtn=!1,this.$emit("doReply",{content:this.content,attachmentList:t}),this.content="",this.showUploader=!1},attachmentUplodError:function(){this.disableSubmitBtn=!1},handleEmotionSelected:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function n(){var i,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=document.querySelector("#id".concat(e.inputId)),console.log(i,t),!i.selectionStart&&0!==i.selectionStart){n.next=12;break}return a=i.selectionStart,o=i.selectionEnd,e.content=i.value.substring(0,a)+t+i.value.substring(o,i.value.length),n.next=8,e.$nextTick();case 8:i.focus(),i.setSelectionRange(o+t.length,o+t.length),n.next=13;break;case 12:e.content=t;case 13:case"end":return n.stop()}}),n)})))()}}},ot=at,st=(n("0837"),Object(m["a"])(ot,nt,it,!1,null,null,null)),rt=st.exports,ct={props:["reply","power"],components:{Avatar:p,CommentContentSimple:et,ReplyForReply:rt},backReplyList:[],data:function(){return{showReplyForReplyFrom:!1}},filters:{profileLink:function(t){return Object(o["authorLink"])(t)},stringToArray:function(t){return t?JSON.parse(t):[]},showAvatar:function(t){return Object(o["showAvatar"])(t,28)}},methods:{deleteReply:function(t){this.$emit("deleteReply",t)},doReply:function(t){t.replyForUID=this.reply.userId,t.replyForCommentId=this.reply.id,this.$emit("addReply",t),this.showReplyForReplyFrom=!1}}},lt=ct,ut=Object(m["a"])(lt,V,Y,!1,null,null,null),mt=ut.exports,dt={props:["data","power","pager"],components:{ReplyItem:mt},data:function(){return{showPager:!1}},filters:{profileLink:function(t){return Object(o["authorLink"])(t)}},methods:{showMore:function(){this.showPager=!0,this.$emit("goto",1)},showLess:function(){this.showPager=!1,this.$emit("resetReply")},handleCurrentChange:function(t){this.$emit("goto",t)},deleteReply:function(t){this.$emit("deleteReply",t)},addReply:function(t){this.$emit("addNewReply",t)}}},pt=dt,ht=(n("8366"),Object(m["a"])(pt,X,q,!1,null,null,null)),ft=ht.exports,gt=n("ee8f"),yt=n("5c96");const bt=function(t,e){let n={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}};return _t(t,e,n)};var vt={};const wt=function(t,e,n){if(vt[t])if(Date.now()-vt[t].lastest<6e4){if(vt[t].count>=6)return yt["Notification"].warning({title:"系统",message:"你单身多久了? 动作这么快, 系统处理不过来 ( T_T )",duration:3e3,position:"bottom-right"}),new Promise((t,e)=>{e()});vt[t].count=vt[t].count+1}else Date.now()-vt[t].lastest>6e4&&(vt[t]={lastest:Date.now(),count:0});else vt[t]={lastest:Date.now(),count:0};let i={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)};return _t(t,e,i)},kt=function(t,e){let n={method:"DELETE"};return _t(t,e,n)};function _t(t,e,n){let i="https://next2.jx3box.com/";if("/"==i[i.length-1]&&(i=i.substring(0,i.length-1)),t=i+t,n.credentials="include",e){let n=[];Object.keys(e).forEach(t=>{n.push(t+"="+e[t])});let i="https://next2.jx3box.com/";"/"==i[i.length-1]&&(i=i.substring(0,i.length-1)),t=t+"?"+n.join("&")}return fetch(t,n).then(t=>{switch(t.status){case 200:break;case 401:throw window.location.href=gt["JX3BOX"].__Links.account.login+"?redirect="+encodeURIComponent(window.location.href),new Error("错误:"+t.statusText);case 403:throw window.location.href=gt["JX3BOX"].__Links.account.login+"?redirect="+encodeURIComponent(window.location.href),new Error("错误:"+t.statusText);case 423:throw window.location.href=gt["JX3BOX"].__Links.account.email_verify+"?redirect="+encodeURIComponent(window.location.href),new Error("错误:"+t.statusText);case 406:throw t.text().then(t=>{yt["Notification"].warning({title:"系统",message:t||"提交内容不合法,请重新提交",duration:3e3,position:"bottom-right"})}),new Error("错误:"+t.statusText);default:throw t.text().then(e=>{yt["Notification"].error({title:"系统:"+t.statusText,message:e||"系统错误,请稍后重试!",duration:3e3,position:"bottom-right"})}),new Error("错误:"+t.statusText)}let e=t.headers.get("Content-Type");switch(e=e&&e.split(";").shift(),e){case"application/json":return t.json();default:return t.text()}})}var Ct={props:["item","baseApi","power","user-href","username"],components:{CommentContent:H,ReplyList:ft},data:function(){return{replyList:[],pager:{index:1,pageSize:10,pageTotal:1,total:0}}},filters:{stringToArray:function(t){return t?JSON.parse(t):[]}},created:function(){this.replyList=this.item.reply||[]},methods:{deteleComment:function(){this.$emit("deteleComment",this.item.id)},addNewReply:function(t){var e=this;wt("".concat(this.baseApi,"/comment/").concat(this.item.id,"/reply"),null,t).then((function(){e.$notify({title:"",message:"评论成功!",type:"success",duration:3e3,position:"bottom-right"}),e.loadReplyList(e.pager.index)})).catch((function(){}))},deleteReply:function(t){var e=this;kt("".concat(this.baseApi,"/comment/").concat(t)).then((function(){e.$notify({title:"",message:"删除成功!",type:"success",duration:3e3,position:"bottom-right"}),e.loadReplyList(e.pager.index)})).catch((function(){}))},gotoReplyListIndex:function(t){this.loadReplyList(t,6)},loadReplyList:function(t,e){var n=this;bt("".concat(this.baseApi,"/comment/").concat(this.item.id,"/reply/page/").concat(t,"?pageSize=").concat(e)).then((function(i){1==t&&3==e&&(n.item.reply=i.data||[]),n.replyList=i.data||[],n.pager=i.page})).catch((function(){}))},resetReply:function(){this.loadReplyList(1,3)}}},xt=Ct,jt=Object(m["a"])(xt,U,P,!1,null,null,null),Rt=jt.exports,Lt=n("bc3a"),Et=n.n(Lt),It=n("41cb"),Ft=n("c9d2");const St="commentDefaultOrderMode";async function $t(){return Ft["a"].isLogin()?Object(It["b"])().get("/api/cms/user/my/meta",{params:{key:St}}).then(t=>t.data.data):new Promise(t=>{t(localStorage.getItem(St))})}async function Ot(t){return Ft["a"].isLogin()?Object(It["b"])().post("/api/cms/user/my/meta",{val:t},{params:{key:St}}).then(t=>t.data.data):new Promise(e=>{e(localStorage.setItem(St,t))})}var Ut={name:"Comment",props:["id","category","normal","order"],components:{Avatar:p,CommmentWithReply:Rt,CommentInputForm:O},data:function(){return{baseAPI:"",commentPower:{allow:!1,uid:-1},commentList:[],pager:{index:1,pageSize:10,pageTotal:1,total:0},isDesc:"desc"==this.order,loading:!1}},computed:{isNormal:function(){return void 0===this.normal||this.normal}},methods:{changeOrder:function(){this.reloadCommentList(this.pager.index),Ot(this.isDesc?"desc":"asc")},deteleComment:function(t){var e=this;kt("".concat(this.baseAPI,"/comment/").concat(t)).then((function(){e.$notify({title:"",message:"删除成功!",type:"success",duration:3e3,position:"bottom-right"}),e.reloadCommentList(e.pager.index)})).catch((function(){}))},reloadCommentList:function(t){var e=this;this.loading=!0;var n={};this.isDesc&&(n["desc"]=!0),bt("".concat(this.baseAPI,"/comment/page/").concat(t),n).then((function(t){e.commentList=t.data||[],e.pager=t.page})).catch((function(){})).finally((function(){e.loading=!1}))},handleCurrentChange:function(t){this.reloadCommentList(t)},userSubmitInputForm:function(t){var e=this;wt("".concat(this.baseAPI,"/comment"),null,t).then((function(){e.$notify({title:"",message:"评论成功!",type:"success",duration:3e3,position:"bottom-right"}),1==e.pager.index&&e.reloadCommentList(e.pager.index)})).catch((function(){}))},loadFrames:function(){var t=this;Et.a.get(c["__imgPath"]+"data/user_avatar_frame.json").then((function(e){e.data&&(t.$store.state.frames=e.data)}))}},filters:{profileLink:function(t){return Object(o["authorLink"])(t)},showAvatar:function(t){return Object(o["showAvatar"])(t,48)}},created:function(){this.baseAPI="/api/comment/".concat(this.category,"/article/").concat(this.id)},mounted:function(){var t=this;$t().then((function(e){t.isDesc="desc"==e})).then((function(){t.reloadCommentList(1),t.loadFrames(),bt("".concat(t.baseAPI,"/i-am-author")).then((function(e){t.commentPower=e})).catch((function(){}))}))}},Pt=Ut,At=(n("ae14"),Object(m["a"])(Pt,i,a,!1,null,null,null));e["a"]=At.exports},"33a5":function(t){t.exports=JSON.parse('{"0":"江湖","1":"天策","2":"万花","3":"纯阳","4":"七秀","5":"少林","6":"藏剑","7":"丐帮","8":"明教","9":"五毒","10":"唐门","18":"苍云","19":"长歌","20":"霸刀","21":"蓬莱","22":"凌雪","23":"衍天"}')},"506c":function(t,e,n){"use strict";var i=n("1157"),a=n.n(i),o=n("e9a5"),s=n("65c2");class r{constructor(t){this._joke=a.a.trim(t),this.init()}init(){this.code=this._renderHTML()}_renderHTML(){let t=this._joke;const e=Object.keys(o),n=/(#[\u4e00-\u9fa5]{1})/g,i=/(#[\u4e00-\u9fa5]{2})/g,a=/(#[\u4e00-\u9fa5]{3})/g,r=t=>{const e=Object.keys(t),n={};return e.forEach(t=>{const e=t.slice(1),i=s["__imgPath"]+`image/emotion/${e}.gif`;n[t]=i}),n},c=t=>{let e=r(o);return`<img src="${e[t]}" />`},l=t.match(n)?t.match(n).filter(t=>e.includes(t)):[];l.forEach(e=>t=t.replace(e,c));const u=t.match(i)?t.match(i).filter(t=>e.includes(t)):[];u.forEach(e=>t=t.replace(e,c));const m=t.match(a)?t.match(a).filter(t=>e.includes(t)):[];return m.forEach(e=>t=t.replace(e,c)),t}}e["a"]=r},"5ca7":function(t,e,n){},"818b":function(t){t.exports=JSON.parse('{"title":" &raquo; 魔盒（JX3BOX） - 一站式剑网3资源工具站","keys":"jx3box,剑三魔盒,剑三宏,剑三插件,剑三辅助,副本攻略,副本解包,团队监控,捏脸数据,剑3数据库,成就百科,剑三成就,剑3,剑网3,剑三box,通识百科","desc":"JX3BOX - 剑三魔盒是一个以剑网3游戏为主的专业攻略资源站，这里干货满满，大神多多，为你的武侠江湖之路助力。剑三魔盒，玩家贴心的小助手。"}')},8366:function(t,e,n){"use strict";n("b07e")},"976f":function(t,e,n){"use strict";n("5ca7")},ae14:function(t,e,n){"use strict";n("c2ee")},b07e:function(t,e,n){},b64b:function(t,e,n){var i=n("23e7"),a=n("7b0b"),o=n("df75"),s=n("d039"),r=s((function(){o(1)}));i({target:"Object",stat:!0,forced:r},{keys:function(t){return o(a(t))}})},b9c7:function(t,e,n){},c0ba:function(t,e,n){"use strict";n("084d")},c2ee:function(t,e,n){},d81d:function(t,e,n){"use strict";var i=n("23e7"),a=n("b727").map,o=n("1dde"),s=o("map");i({target:"Array",proto:!0,forced:!s},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},e314:function(t,e,n){"use strict";n("f263")},e7d2:function(t,e,n){},e9a5:function(t){t.exports=JSON.parse('{"#下雨":"下雨.gif","#严寒":"严寒.gif","#亲亲":"亲亲.gif","#傲慢":"傲慢.gif","#冷汗":"冷汗.gif","#凶恶":"凶恶.gif","#刀":"刀.gif","#发怒":"发怒.gif","#口水":"口水.gif","#可怜":"可怜.gif","#吐":"吐.gif","#吓":"吓.gif","#呆":"呆.gif","#呲牙":"呲牙.gif","#咖啡":"咖啡.gif","#唇":"唇.gif","#喜欢":"喜欢.gif","#嘴":"嘴.gif","#噢":"噢.gif","#困":"困.gif","#大笑":"大笑.gif","#太阳":"太阳.gif","#媚眼":"媚眼.gif","#害羞":"害羞.gif","#寒":"寒.gif","#尴尬":"尴尬.gif","#差劲":"差劲.gif","#巴掌":"巴掌.gif","#强":"强.gif","#得意":"得意.gif","#微笑":"微笑.gif","#心碎":"心碎.gif","#恐慌":"恐慌.gif","#恶心":"恶心.gif","#感叹号":"感叹号.gif","#扁嘴":"扁嘴.gif","#打雷":"打雷.gif","#拍手":"拍手.gif","#握手":"握手.gif","#撇嘴":"撇嘴.gif","#无奈":"无奈.gif","#昏":"昏.gif","#晕":"晕.gif","#月亮":"月亮.gif","#标记":"标记.gif","#樱桃":"樱桃.gif","#欣喜":"欣喜.gif","#沉默":"沉默.gif","#流汗":"流汗.gif","#流泪":"流泪.gif","#灯泡":"灯泡.gif","#烟花":"烟花.gif","#爱心":"爱心.gif","#狂汗":"狂汗.gif","#狡猾":"狡猾.gif","#狡诈":"狡诈.gif","#猪":"猪.gif","#玫瑰":"玫瑰.gif","#生气":"生气.gif","#电话":"电话.gif","#睡":"睡.gif","#礼物":"礼物.gif","#笨猪":"笨猪.gif","#第一名":"第一名.gif","#第三名":"第三名.gif","#第二名":"第二名.gif","#红灯":"红灯.gif","#绿灯":"绿灯.gif","#胜利":"胜利.gif","#舌头":"舌头.gif","#色":"色.gif","#花":"花.gif","#苹果":"苹果.gif","#菠萝":"菠萝.gif","#蒜头":"蒜头.gif","#蜡烛":"蜡烛.gif","#衰":"衰.gif","#西瓜":"西瓜.gif","#讨厌":"讨厌.gif","#讶异":"讶异.gif","#鄙视":"鄙视.gif","#酷":"酷.gif","#钱":"钱.gif","#锤子":"锤子.gif","#问号":"问号.gif","#阴险":"阴险.gif","#难过":"难过.gif","#雪糕":"雪糕.gif","#饮料":"饮料.gif","#馒头":"馒头.gif","#香蕉":"香蕉.gif","#骷髅":"骷髅.gif","#鬼脸":"鬼脸.gif","#黄灯":"黄灯.gif"}')},ecfb:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"v-joke"},[t.id?n("div",{staticClass:"m-joke-single-container"},[n("div",{staticClass:"m-joke-goback"},[n("el-button",{attrs:{size:"mini",icon:"el-icon-arrow-left"},on:{click:t.goBack}},[t._v("返回列表")]),t._m(0)],1),n("el-row",{staticClass:"v-joke-list",attrs:{gutter:20}},[n("el-col",{staticClass:"item",attrs:{span:24}},[n("div",{staticClass:"v-joke-list-item"},[n("joke-item",{attrs:{joke:t.joke,mode:"single"}})],1)])],1),t.joke.tags&&t.joke.tags.length?n("div",{staticClass:"m-joke-tags"},[n("i",{staticClass:"el-icon-price-tag"}),t._l(t.joke.tags,(function(e,i){return n("span",{key:i,staticClass:"u-tag"},[t._v(t._s(e))])}))],2):t._e(),n("div",{staticClass:"m-single-comment"},[n("el-divider",{attrs:{"content-position":"left"}},[t._v("评论")]),t.id&&!t.joke.comment?n("Comment",{attrs:{id:t.id,category:"post"}}):n("el-alert",{attrs:{title:"作者没有开启评论功能",type:"warning","show-icon":""}})],1)],1):n("div",{staticClass:"m-joke-list-container"},[n("div",{staticClass:"m-joke-search",attrs:{slot:"search-before"},slot:"search-before"},[n("el-input",{attrs:{placeholder:"请输入搜索内容"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[n("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("关键词")]),n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1),n("div",{staticClass:"m-joke-types"},[n("el-tabs",{model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[n("el-tab-pane",{attrs:{name:"all",label:"全部"}}),t._l(t.schoolmap,(function(e,i){return n("el-tab-pane",{key:i,attrs:{name:i}},[n("div",{staticStyle:{"min-width":"57px"},attrs:{slot:"label"},slot:"label"},[n("img",{staticClass:"u-icon",attrs:{src:t._f("showSchoolIcon")(i),alt:e}}),t._v(" "+t._s(e)+" ")])])}))],2)],1),t.jokes&&t.jokes.length?n("el-row",{staticClass:"v-joke-list",attrs:{gutter:20}},t._l(t.jokes,(function(e){return n("el-col",{key:e.ID,staticClass:"item",attrs:{span:24}},[n("div",{staticClass:"v-joke-list-item"},[n("joke-item",{attrs:{joke:e},on:{update:t.handleJokeUpdate}})],1)])})),1):n("el-alert",{attrs:{title:"没有找到相关条目",type:"info","show-icon":""}}),n("el-pagination",{staticClass:"v-joke-pagination",attrs:{background:"","page-size":t.per,"hide-on-single-page":!0,"current-page":t.page,layout:"total, prev, pager, next, jumper",total:t.total},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"current-change":t.skipTop}})],1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"u-doc",attrs:{href:"/tool/23239",target:"_blank"}},[n("i",{staticClass:"el-icon-info"}),t._v("游戏内获取或发布骚话 ")])}],o=(n("ac1f"),n("841c"),n("b64b"),n("4e82"),n("159b"),n("d3b7"),n("65c2")),s=n("e9a5"),r=n("41cb"),c=function(t){var e=Object.assign(t,{type:"joke"});return Object(r["b"])().get("/api/cms/posts",{params:e})};function l(t){return Object(r["b"])().get("/api/cms/post/".concat(t))}var u=function(t){var e=t.id,n=t.data;return Object(r["b"])().put("/api/cms/post/".concat(e,"/setting"),n)},m=function(t){return Object(r["b"])().put("/api/cms/post/".concat(t,"/setting"),{post_status:"dustbin"})},d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-joke-item"},[n("div",{staticClass:"content"},[t.isEditor?n("i",{staticClass:"u-star-op",class:t.isMark?"on":"",on:{click:t.handleMark}},[t._v("★")]):n("i",{directives:[{name:"show",rawName:"v-show",value:t.isMark,expression:"isMark"}],staticClass:"u-star"},[t._v("★")]),n("span",{staticClass:"u-sentence",domProps:{innerHTML:t._s(t.parse(t.joke.post_title))}})]),n("div",{staticClass:"misc"},[n("div",{staticClass:"op"},[n("el-link",{staticClass:"copy-btn",attrs:{type:"primary",disabled:t.disabled},on:{click:function(e){return t.handleCopy(t.joke.post_title)}}},[n("i",{staticClass:"el-icon-document-copy"}),t._v(" "+t._s(t.copyLabel)+" ")]),"single"!==t.mode?n("router-link",{staticClass:"el-link el-link--primary is-underline copy-btn",attrs:{to:"/joke/"+t.joke.ID}},[n("i",{staticClass:"el-icon-chat-dot-square"}),t._v("评论 ")]):t._e(),"single"===t.mode?n("a",{staticClass:"u-edit el-link el-link--primary is-underline",attrs:{href:t.editLink("joke",t.joke.ID),target:"_blank"}},[n("i",{staticClass:"el-icon-edit-outline"}),t._v(" 编辑 ")]):t._e()],1),n("div",{staticClass:"u-other"},[n("div",{staticClass:"user"},[n("img",{attrs:{width:"24",height:"24",src:t._f("showAvatar")(t.joke.author_info&&t.joke.author_info.user_avatar)}}),t.joke.post_author&&1!=t.joke.post_author?n("a",{attrs:{href:t._f("authorLink")(t.joke.post_author),target:"_blank"}},[t._v(t._s(t.joke.author))]):n("span",[t._v(t._s(t.joke.author||"匿名"))])]),n("div",{staticClass:"u-time"},[n("span",{staticClass:"u-date"},[n("i",{staticClass:"el-icon-date"}),t._v("  "),n("time",[t._v(t._s(t._f("dateFormat")(t.joke.post_date)))])])])])]),n("i",{directives:[{name:"show",rawName:"v-show",value:t.isEditor,expression:"isEditor"}],staticClass:"el-icon-close u-joke-delete",attrs:{title:"删除"},on:{click:t.delJoke}})])},p=[],h=n("506c"),f=n("fb92"),g=n("85e4"),y=n("c9d2"),b={name:"joke_item",props:["joke","mode"],data:function(){var t,e;return{copyLabel:"点击复制",disabled:!1,isMark:!(null===(t=this.joke)||void 0===t||null===(e=t.mark)||void 0===e||!e.length)}},mounted:function(){var t,e;this.isMark=!(null===(t=this.joke)||void 0===t||null===(e=t.mark)||void 0===e||!e.length)},filters:{dateFormat:function(t){return Object(f["a"])(new Date(t))},showAvatar:function(t){return Object(g["showAvatar"])(t,24)},authorLink:g["authorLink"]},computed:{isEditor:function(){return y["a"].isEditor()}},methods:{parse:function(t){var e=new h["a"](t);return e.code},handleCopy:function(t){var e=this;this.disabled=!0,navigator.clipboard.writeText(t).then((function(){e.copyLabel="已复制",setTimeout((function(){e.copyLabel="点击复制",e.disabled=!1}),3e3)}))},editLink:g["editLink"],handleMark:function(){var t=this,e=this.isMark?[]:["recommended"];u({id:this.joke.ID,data:{mark:e}}).then((function(){t.$notify({title:"成功",message:t.isMark?"取消加精成功":"加精成功",type:"success"}),t.isMark=!!e.length,t.$forceUpdate()})).catch((function(e){t.$notify({title:"错误",message:(null===e||void 0===e?void 0:e.message)||"设置失败，请重试或者联系管理员",type:"error"})}))},delJoke:function(){var t=this;this.$confirm("此操作将会删除该骚话，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){m(t.joke.ID).then((function(){t.$notify({title:"成功",message:"删除成功",type:"success"}),"single"===t.mode?t.$router.go(-1):t.$emit("update")})).catch((function(e){t.$notify({title:"错误",message:(null===e||void 0===e?void 0:e.message)||"删除失败，请重试或者联系管理员",type:"error"})}))}))}}},v=b,w=n("2877"),k=Object(w["a"])(v,d,p,!1,null,null,null),_=k.exports,C=n("33a5"),x=n("23d8"),j={name:"Joke",components:{"joke-item":_,Comment:x["a"]},data:function(){return{loading:!1,sortedEmotions:[],schoolmap:C,type:"all",search:"",per:10,page:1,total:1,jokes:[],joke:""}},computed:{id:function(){return this.$route.params.id},params:function(t){var e=t.search,n=t.page,i=t.per,a={per:i,page:n,order:"post_date-DESC"};return"all"!=this.type&&(a.subtype=this.type),e&&Object.assign(a,{search:e}),a},keys:function(){return[this.search,this.page,this.per,this.type,this.id]}},filters:{showSchoolIcon:function(t){return o["__imgPath"]+"image/school/"+t+".png"}},methods:{sortEmotion:function(){var t=this,e=Object.keys(s);e.sort((function(t,e){return t.localeCompare(e)})),e.forEach((function(e){var n={key:e,value:s[e]};t.sortedEmotions.push(n)}))},loadList:function(){var t=this;this.loading=!0,c(this.params).then((function(e){t.jokes=e.data.data.list,t.total=e.data.data.total})).catch((function(t){})).finally((function(){t.loading=!1}))},loadSingle:function(){var t=this;this.loading=!0,l(this.id).then((function(e){t.joke=e.data.data})).finally((function(){t.loading=!1}))},init:function(){this.id?this.loadSingle():this.loadList()},goBack:function(){this.$router.push("/joke")},handleJokeUpdate:function(){this.loadList()},skipTop:function(){window.scrollTo(0,0)}},watch:{keys:{handler:function(){this.init()},deep:!0,immediate:!0}},created:function(){this.sortEmotion()}},R=j,L=(n("976f"),Object(w["a"])(R,i,a,!1,null,null,null));e["default"]=L.exports},ee8f:function(t,e,n){const i=n("65c2"),a=n("818b");t.exports={JX3BOX:i,SEO:a}},f263:function(t,e,n){},f7729:function(t,e,n){"use strict";n("0886")},fb92:function(t,e,n){"use strict";n("99af");function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=t.getFullYear(),o=t.getMonth()+1,s=t.getDate(),r=n?"".concat(i).concat(e).concat(a(o)).concat(e).concat(a(s)):"".concat(i).concat(e).concat(o).concat(e).concat(s);return r}function a(t){return t<10?"0"+t:t}e["a"]=i}}]);
//# sourceMappingURL=chunk-71a0fc6d.cd805137.js.map