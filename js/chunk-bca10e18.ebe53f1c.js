(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bca10e18"],{"0bb5":function(t,e,i){"use strict";i("56cf")},"109a":function(t,e,i){"use strict";i("3cbf")},"13a0":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t._self._c;return e("ListLayout",[e("div",{staticClass:"v-collection"},["list"==t.mode?e("List"):e("Single")],1)])},a=[],o=i("9398"),s=(i("ac1f"),i("841c"),i("498a"),function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"listRef",staticClass:"m-collection-box"},[e("div",{staticClass:"m-archive-search m-collection-search"},[e("a",{staticClass:"u-publish el-button el-button--primary",attrs:{href:t.publish_link}},[t._v("+ 创建小册")]),e("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入搜索内容",clearable:""},on:{clear:t.onSearch},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSearch.apply(null,arguments)}},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("i",{staticClass:"el-icon-search"}),t._v(" 关键词 ")]},proxy:!0},{key:"append",fn:function(){return[e("el-button",{staticClass:"u-btn",attrs:{icon:"el-icon-position"},on:{click:t.onSearch}})]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search="string"===typeof e?e.trim():e},expression:"search"}})],1),e("Banner",{attrs:{subtype:"collection"}}),t.data&&t.data.length?e("div",{staticClass:"m-collection-list"},[t._l(t.data,(function(i,n){return[e("collection-item",{key:n,style:t.isPhone?"":"width: calc(100% / ".concat(t.count,")"),attrs:{data:i}})]}))],2):e("el-alert",{staticClass:"m-collection-null",attrs:{title:"没有找到相关条目",type:"info","show-icon":""}}),e("el-pagination",{staticClass:"m-collection-pagination",attrs:{background:"","page-size":t.per,"hide-on-single-page":!0,"current-page":t.page,layout:"total, prev, pager, next, jumper",total:t.total},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"current-change":t.skipTop}})],1)}),l=[],r=i("5530"),c=(i("d3b7"),i("85e4")),u=(i("99af"),function(){var t=this,e=t._self._c;return e("a",{staticClass:"m-collection-item_v2",attrs:{href:"/collection/".concat(t.data.id),target:"_blank"},on:{mousemove:t.handleMove}},[e("div",{ref:"bookRef",staticClass:"u-image"},[e("el-image",{staticClass:"u-img u-cover",attrs:{src:t.resolveImagePath(t.data.image),fit:"cover"}},[e("img",{attrs:{slot:"error",src:"".concat(t.imgPath,"cover-").concat(t.randomNumber,".png")},slot:"error"})]),e("img",{ref:"mark".concat(t.data.id),staticClass:"u-img u-mark",attrs:{src:"".concat(t.imgPath,"light.png")}}),e("img"),e("el-image",{staticClass:"u-img u-box",attrs:{src:"".concat(t.imgPath,"box.svg"),fit:"fill"}})],1),e("div",{staticClass:"u-content"},[e("div",{staticClass:"u-title",attrs:{title:t.data.title}},[t._v(t._s(t.data.title))]),t.data.collection_user_info?e("div",{staticClass:"u-info"},[e("a",{staticClass:"u-user",attrs:{href:t.authorLink(t.data.user_id),target:"_blank"}},[e("img",{staticClass:"u-avatar",attrs:{src:t.showAvatar(t.data.collection_user_info.user_avatar)}}),e("span",{staticClass:"u-nickname",domProps:{textContent:t._s(t.data.collection_user_info.display_name)}})])]):t._e(),e("div",{staticClass:"u-time"},[e("el-button",{attrs:{type:"text",icon:"el-icon-date"}},[t._v(t._s(t.showDate(1e3*t.data.created)))]),e("el-button",{attrs:{type:"text",icon:"el-icon-refresh"}},[t._v(t._s(t.showDate(1e3*t.data.updated)))])],1)])])}),d=[],p=i("e4f1"),f=i("65c2"),m={name:"CollectionItemV2",props:{data:{type:Object,default:function(){}}},computed:{imgPath:function(){return"".concat(f["__imgPath"],"topic/bbs/")},randomNumber:function(){return Math.floor(4*Math.random())+1}},methods:{resolveImagePath:c["resolveImagePath"],authorLink:c["authorLink"],showAvatar:c["showAvatar"],showDate:p["a"],handleMove:function(t){var e=Math.floor(t.offsetX/100),i=-Math.floor(t.offsetX/60);this.$refs["mark".concat(this.data.id)].style.transform="translate(".concat(e,"px, ").concat(i,"px)")}}},h=m,v=(i("6d0c"),i("2877")),b=Object(v["a"])(h,u,d,!1,null,null,null),g=b.exports,_=i("73cd"),y=i("51b7"),C=i("cf45"),k={name:"CollectionList",props:[],components:{"collection-item":g,Banner:y["a"]},data:function(){return{loading:!1,data:[],page:1,total:1,pages:1,per:18,search:"",count:0}},computed:{publish_link:function(){return Object(c["publishLink"])("collection")},params:function(){return{page:this.page,per:this.per}},isPhone:function(){return Object(C["b"])()}},methods:{skipTop:function(){window.scrollTo(0,0)},loadData:function(){var t=this;this.loading=!0;var e=Object(r["a"])(Object(r["a"])({},this.params),{},{keyword:this.search});Object(_["b"])(e).then((function(e){var i,n,a,o;t.data=null===e||void 0===e||null===(i=e.data)||void 0===i||null===(n=i.data)||void 0===n?void 0:n.list,t.total=null===e||void 0===e||null===(a=e.data)||void 0===a||null===(o=a.data)||void 0===o?void 0:o.total})).finally((function(){t.loading=!1}))},onSearch:function(){1===this.page?this.loadData():this.page=1},showCount:function(){var t,e=null===(t=this.$refs.listRef)||void 0===t?void 0:t.clientWidth;this.count=Math.floor(e/260),this.per=this.isPhone?12:4*this.count}},watch:{params:{immediate:!0,deep:!0,handler:function(){this.loadData()}}},mounted:function(){this.showCount()}},w=k,x=(i("0bb5"),Object(v["a"])(w,s,l,!1,null,null,null)),D=x.exports,O=i("1ce6"),j={name:"Collection",props:[],components:{List:D,Single:O["default"],ListLayout:o["a"]},data:function(){return{}},computed:{mode:function(){var t;return null!==(t=this.$route)&&void 0!==t&&t.params.id?"single":"list"}},watch:{},methods:{},filters:{},created:function(){},mounted:function(){}},P=j,T=(i("658a"),Object(v["a"])(P,n,a,!1,null,null,null));e["default"]=T.exports},1827:function(t,e,i){},"1ce6":function(t,e,i){"use strict";i.r(e);i("a4d3"),i("e01a");var n=function(){var t=this,e=t._self._c;return e("CollectionLayout",{attrs:{"has-right":!1,post:t.collection||{}}},[e("div",{staticClass:"m-collection-single"},[t.collection?[e("div",{staticClass:"m-collection-detail-content"},[e("div",{staticClass:"m-collection-detail-header"},[e("header",{staticClass:"m-single-header"},[e("div",{staticClass:"m-single-title"},[e("span",{staticClass:"u-title u-sub-block",attrs:{href:t.url,title:t.collection.title}},[t.collection.public?t._e():e("i",{staticClass:"u-private el-icon-lock",attrs:{title:"仅自己可见"}}),e("span",{staticClass:"u-title-text"},[t._v(t._s(t.collection.title))])])]),e("div",{staticClass:"m-single-info"},[e("div",{staticClass:"u-author u-sub-block"},[e("i",{staticClass:"u-author-icon"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 16",width:"12",height:"16","aria-hidden":"true",fill:"#444","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M12 14.002a.998.998 0 01-.998.998H1.001A1 1 0 010 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"}})])]),e("a",{staticClass:"u-name",attrs:{href:t._f("authorLink")(t.collection.user_id)}},[t._v(t._s(t.collection.collection_user_info&&t.collection.collection_user_info.display_name))])]),e("span",{staticClass:"u-podate u-sub-block",attrs:{title:"发布日期"}},[e("i",{staticClass:"u-icon el-icon-date"}),e("time",[t._v(t._s(t.dateFormat(t.collection.created)))])]),e("span",{staticClass:"u-modate u-sub-block",attrs:{title:"最后更新"}},[e("i",{staticClass:"u-icon el-icon-refresh"}),e("time",[t._v(t._s(t.dateFormat(t.collection.updated)))])]),e("span",{staticClass:"u-views u-sub-block"},[e("i",{staticClass:"u-icon el-icon-view"}),t._v(" "+t._s(t.views)+" ")]),t.canEdit?e("a",{staticClass:"u-edit u-sub-block",attrs:{href:t.edit_link}},[e("i",{staticClass:"u-icon-edit el-icon-edit-outline"}),e("span",[t._v("编辑")])]):t._e(),t.canEdit?e("a",{staticClass:"u-delete u-sub-block",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.delete_handle(e,t.collection.id)}}},[e("i",{staticClass:"u-icon-remove el-icon-delete"}),e("span",[t._v("删除")])]):t._e()])])]),t.collection.description?[e("el-divider",{attrs:{"content-position":"left"}},[e("i",{staticClass:"el-icon-collection"}),t._v(" 小册简介 ")]),e("div",{staticClass:"u-description"},[e("p",{domProps:{innerHTML:t._s(t.resolveImagePath(t.collection.description))}})])]:t._e(),t.collection.posts&&t.collection.posts.length?[e("el-divider",{attrs:{"content-position":"left"}},[e("i",{staticClass:"el-icon-folder"}),t._v(" 小册文章 ")]),e("ul",{staticClass:"u-list"},t._l(t.collection.posts,(function(i,n){return e("li",{key:n,staticClass:"u-item"},[e("span",{staticClass:"u-item-order"},[t._v(t._s(n+1)+".")]),i.icon?e("img",{staticClass:"u-item-icon",attrs:{src:t.iconUrl(i.icon)}}):t._e(),"custom"===i.type?e("span",{staticClass:"u-item-link"},[e("i",{staticClass:"el-icon-link"}),t._v("站外链接 ")]):t._e(),"custom"!==i.type&&i.user_id?e("a",{staticClass:"u-item-author",attrs:{target:"_blank",href:t._f("authorLink")(i.user_id)}},[e("img",{staticClass:"u-avatar",attrs:{src:t.showAvatar(i.user_avatar)}}),e("span",{staticClass:"u-nickname",domProps:{textContent:t._s(i.user_nickname)}}),e("span",{staticClass:"u-div"},[t._v("/")])]):t._e(),e("a",{staticClass:"u-item-title",attrs:{target:"_blank",href:"custom"===i.type?i.url:t.getLink(i.post_type||i.type,i.id)}},[t._v(t._s(i.custom_title||i.title))]),i.updated?e("time",{staticClass:"u-updated",domProps:{textContent:t._s("最后更新于 "+t.formatDate(i.updated))}}):t._e()])})),0)]:t._e()],2),e("Thx",{staticClass:"m-thx",attrs:{postId:t.id,postType:"collection",postTitle:t.title,userId:t.author_id,adminBoxcoinEnable:!0,userBoxcoinEnable:!0,client:"all"}}),t.id?e("div",{staticClass:"m-comments"},[e("el-divider",{attrs:{"content-position":"left"}},[e("span",{staticStyle:{color:"#999999"}},[e("i",{staticClass:"el-icon-chat-line-square"}),t._v(" 讨论 ")])]),e("jx3-comment",{attrs:{id:t.id,category:"collection"}})],1):t._e()]:e("el-alert",{attrs:{title:"该剑三小册不存在或已被删除",type:"info",center:"","show-icon":"",closable:!1}})],2)])},a=[],o=(i("99af"),i("14d9"),i("d3b7"),i("ac1f"),i("5319"),i("23d8"));const s=Object.freeze({PRIVATE:0,PUBLIC:1,all(){return[this.PRIVATE,this.PUBLIC]}});var l=s,r=i("73cd"),c=i("fb92"),u=i("5a0c"),d=i.n(u),p=i("2b0e"),f=new p["default"],m=f,h=i("85e4"),v=i("c9d2"),b=i("9616"),g=i("65c2"),_=function(){var t=this,e=t._self._c;return e("div",[e("Header"),e("Breadcrumb",{attrs:{name:"剑三小册",slug:"collection",root:"/collection",publishEnable:!0,adminEnable:!1,feedbackEnable:!0,crumbEnable:!0},scopedSlots:t._u([{key:"op-prepend",fn:function(){return[t.isEditor?e("AdminDrop",{attrs:{post:t.finalPost,"user-id":t.user_id}}):t._e()]},proxy:!0}])}),e("LeftSidebar",{attrs:{uid:t.user_id}},[e("Nav",{staticClass:"m-nav",attrs:{id:t.id}})],1),e("Main",{attrs:{withoutRight:!t.hasRight}},[t._t("default"),e("RightSidebar",[e("Side",{staticClass:"m-extend",attrs:{id:t.id}})],1),e("Footer")],2)],1)},y=[],C=i("5530"),k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-single-nav"},[e("Author",{attrs:{uid:t.uid}})],1)},w=[],x={name:"single_nav",props:[],data:function(){return{}},computed:{uid:function(){return this.$store.state.user_id}},methods:{},mounted:function(){}},D=x,O=i("2877"),j=Object(O["a"])(D,k,w,!1,null,null,null),P=j.exports,T=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-single-side"},[t.id?e("PostTopic",{attrs:{type:"bps",id:~~t.id}}):t._e(),e("PostDirectory",{attrs:{id:"directory"}})],1)},I=[],S=i("6370"),$=i("bf34"),L={name:"single_side",props:["id"],data:function(){return{}},components:{PostDirectory:S["a"],PostTopic:$["a"]},computed:{hasDirectory:function(){var t;return null===(t=this.$store.state.extend)||void 0===t?void 0:t.directory},showSideCollection:function(){var t,e,i=null===(t=this.$store.state.post)||void 0===t?void 0:t.post_collection,n=!(null!==(e=this.$store.state.post)&&void 0!==e&&e.collection_collapse);return i&&n},collection_data:function(){var t;return null===(t=this.$store.state.extend)||void 0===t?void 0:t.collection_data}}},M=L,A=(i("a45a"),Object(O["a"])(M,T,I,!1,null,null,null)),E=A.exports,B=function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-admin-drop"},[e("el-dropdown",{attrs:{trigger:"click"},on:{command:t.handleCommand}},[e("el-button",{staticClass:"c-admin-button c-admin-drop__button",attrs:{type:"primary",size:t.buttonSize}},[e("i",{staticClass:"el-icon-setting"}),t._v(" 管理"),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t.hasPermission("update_post")?e("el-dropdown-item",{attrs:{command:"toggleAdminPanel",icon:"el-icon-setting"}},[e("span",[t._v("设置")])]):t._e(),t.hasPermission("create_system_message")?e("el-dropdown-item",{attrs:{command:"directMessage",icon:"el-icon-message"}},[e("span",[t._v("私信")])]):t._e(),t.hasPermission("push_banner")?e("el-dropdown-item",{attrs:{icon:"el-icon-upload",command:"designTask"}},[e("span",[t._v("推送")])]):t._e()],1)],1),e("design-task",{attrs:{post:t.post},model:{value:t.showDesignTask,callback:function(e){t.showDesignTask=e},expression:"showDesignTask"}}),e("CollectionAdmin",{model:{value:t.showDrawer,callback:function(e){t.showDrawer=e},expression:"showDrawer"}})],1)},V=[],Y=(i("a9e3"),function(){var t=this,e=t._self._c;return e("el-drawer",{staticClass:"c-admin",attrs:{title:"管理面板",visible:t.modelValue,"before-close":t.close,"append-to-body":!0,modal:!1,withHeader:!1}},[e("div",{staticClass:"c-admin-wrapper"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v("可见性变更")]),e("el-radio-group",{staticClass:"c-admin-status",attrs:{size:"small"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},t._l(t.visible_options,(function(i,n){return e("el-radio-button",{key:n,attrs:{label:n}},[t._v(t._s(i))])})),1),e("el-divider",{attrs:{"content-position":"left"}},[t._v("精选")]),e("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.star,callback:function(e){t.star=e},expression:"star"}}),e("el-divider",{attrs:{"content-position":"left"}},[t._v("元信息")]),e("div",{staticClass:"c-admin-title"},[e("el-input",{staticClass:"input-author drawer-item-content",attrs:{placeholder:"请输入小册标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}},[e("template",{slot:"prepend"},[t._v("标题")])],2)],1),e("el-divider",{attrs:{"content-position":"left"}},[t._v("封面海报")]),e("div",{staticClass:"c-admin-banner"},[e("el-upload",{staticClass:"c-admin-upload el-upload--picture-card",attrs:{action:t.uploadurl,"with-credentials":!0,"show-file-list":!1,"on-success":t.uploadSuccess,"on-error":t.uploadFail}},[t.image?e("img",{attrs:{src:t.image}}):e("i",{staticClass:"el-icon-plus"})]),e("el-input",{staticClass:"u-banner",model:{value:t.image,callback:function(e){t.image=e},expression:"image"}},[e("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("海报地址")]),e("span",{attrs:{slot:"append"},slot:"append"},[e("span",{staticClass:"u-btn",on:{click:t.removeBanner}},[e("i",{staticClass:"el-icon-circle-close"}),t._v(" 移除海报 ")])])])],1),e("el-divider",{attrs:{"content-position":"left"}},[t._v("其他")]),e("div",{staticClass:"c-admin-info"},[e("div",{staticClass:"c-admin-author"},[e("el-input",{staticClass:"input-author drawer-item-content",attrs:{placeholder:"请输入作者uid"},model:{value:t.post_author,callback:function(e){t.post_author=e},expression:"post_author"}},[e("template",{slot:"prepend"},[t._v("作者")])],2)],1)]),e("div",{staticClass:"c-admin-buttons"},[e("el-button",{attrs:{type:"primary",loading:t.pushing},on:{click:t.submit}},[t._v("提交")]),e("el-button",{attrs:{type:"plain"},on:{click:t.close}},[t._v("取消")])],1)],1)])}),R=[],F=(i("e9c4"),i("3ca3"),i("ddb0"),i("2b3d"),i("bf19"),i("9861"),i("88a7"),i("271a"),i("5494"),{name:"CollectionAdmin",props:{modelValue:{type:Boolean,default:!1}},model:{prop:"modelValue",event:"update:modelValue"},data:function(){return{type_options:[],post_author:"",visible:1,star:0,title:"",pushing:!1,uploadurl:g["__cms"]+"api/cms/upload",banner_preview:"",image:"",data:{}}},computed:{visible_options:function(){return{0:"私有",1:"公开"}},id:function(){return this.$route.params.id}},watch:{modelValue:function(t){t&&this.loadCollection()}},mounted:function(){this.initTypeOptions()},methods:{close:function(){this.$emit("update:modelValue",!1)},initTypeOptions:function(){var t=[];for(var e in g["__postType"])t.push({value:e,label:g["__postType"][e]});this.type_options=t},loadCollection:function(){var t=this;Object(r["a"])(this.id).then((function(e){t.data=e.data.data,t.post_author=t.data.user_id,t.visible=t.data.public,t.star=t.data.star,t.title=t.data.title,t.image=t.data.image}))},submit:function(){var t=this;this.pushing=!0,Object(r["f"])(this.id,{public:this.visible,title:this.title,image:this.image,description:this.data.description,mark:this.data.mark,star:this.star,posts:JSON.stringify(this.data.posts),user_id:~~this.post_author}).then((function(){t.$message({message:"更新成功",type:"success"}),m.$emit("updateCollection")})).finally((function(){t.pushing=!1}))},uploadSuccess:function(t,e,i){this.banner_preview=URL.createObjectURL(e.raw),this.image=t.data[0]},uploadFail:function(t,e,i){this.$message.error("上传失败"),console.log(t)},removeBanner:function(){this.image=""}}}),H=F,N=(i("5b9b"),Object(O["a"])(H,Y,R,!1,null,null,null)),z=N.exports,U=(i("b0c0"),function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{"custom-class":"m-design-task",width:t.isPhone?"95%":"600px",visible:t.modelValue,title:"快捷推送","append-to-body":""},on:{close:t.close},scopedSlots:t._u([{key:"footer",fn:function(){return[e("el-button",{on:{click:t.close}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.onConfirm}},[t._v("确 定")])]},proxy:!0}])},[e("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-position":t.isPhone?"top":"left","label-width":"80px"}},[e("el-form-item",{attrs:{label:"标题",prop:"title"}},[e("el-input",{attrs:{placeholder:"请输入标题"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),e("el-form-item",{attrs:{label:"类型",prop:"type"}},[e("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择类型",filterable:""},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},t._l(t.config,(function(t){return e("el-option",{key:t.id,attrs:{label:t.label,value:t.name}})})),1)],1),e("el-form-item",{attrs:{label:"版本"}},[e("el-radio-group",{model:{value:t.form.version,callback:function(e){t.$set(t.form,"version",e)},expression:"form.version"}},t._l(t.versions,(function(i,n){return e("el-radio-button",{key:n,attrs:{label:n}},[t._v(t._s(i))])})),1)],1),e("el-form-item",{attrs:{label:"备注"}},[e("el-input",{attrs:{placeholder:"请输入备注"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1),e("el-form-item",{staticClass:"m-star-line",attrs:{label:"星级"}},[e("el-rate",{attrs:{colors:t.colors},model:{value:t.form.star,callback:function(e){t.$set(t.form,"star",e)},expression:"form.star"}})],1)],1),e("el-divider",{attrs:{"content-position":"left"}},[t._v(" 近期推送 ")]),t.logs&&t.logs.length?[e("el-table",{attrs:{data:t.logs,border:"",size:"small","max-height":"300px"}},[e("el-table-column",{attrs:{label:"推送时间",prop:"push_at",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[t._v(" "+t._s(t.formatTime(i.push_at))+" ")]}}],null,!1,680415868)}),e("el-table-column",{attrs:{label:"推送人",prop:"pusher.display_name",align:"center"}}),e("el-table-column",{attrs:{label:"星级",prop:"star",align:"center"},scopedSlots:t._u([{key:"default",fn:function(i){var n=i.row;return[e("el-rate",{attrs:{disabled:"",colors:t.colors},model:{value:n.star,callback:function(e){t.$set(n,"star",e)},expression:"row.star"}})]}}],null,!1,1852470855)}),e("el-table-column",{attrs:{label:"备注",prop:"remark",align:"center"}})],1)]:e("el-alert",{attrs:{title:"当前文章暂无历史推送",type:"info","show-icon":"",closable:!1}})],2)}),q=[],J=(i("4de4"),i("9911"),i("a42e")),W=i("2ef0"),X={name:"CollectionDesignTask",props:{modelValue:{type:Boolean,default:!1},post:{type:Object,default:function(){}}},model:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],data:function(){return{form:{title:"",remark:"",star:0,subtype:"",version:"std",type:""},colors:["#99A9BF","#F7BA2A","#FF9900"],logs:[],config:[],isPhone:window.innerWidth<768,isEditor:v["a"].isEditor(),versions:{std:"旗舰",origin:"缘起",wujie:"无界",test:"体服"},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],type:[{required:!0,message:"请选择类型",trigger:"change"}]}}},computed:{client:function(){return this.$store.state.client||"std"}},watch:{modelValue:function(t){if(t){var e;if(this.post)this.form.title=this.post.post_title,null!==(e=this.post)&&void 0!==e&&e.post_type&&(this.form.type=this.post.post_type);this.loadLogs(),v["a"].isTeammate()&&this.loadConfig()}}},methods:{close:function(){this.$emit("update:modelValue",!1)},clearForm:function(){var t,e;this.form={title:"",remark:"",star:0,subtype:"",version:"std",type:""},null===(t=this.$refs)||void 0===t||null===(e=t.form)||void 0===e||e.clearValidate()},onConfirm:function(){var t,e=this;null!==(t=this.post)&&void 0!==t&&t.ID&&this.$refs.form.validate((function(t,i){if(t){var n,a,o=Object(W["pick"])(e.post,["client","author"]);o.client||(o.client=e.client),o.title=e.form.title,o.remark=e.form.remark,o.star=e.form.star,o.subtype=e.form.type,o.version=e.form.version,o.source_type="collection",o.source_id=String(null===(n=e.post)||void 0===n?void 0:n.ID),o.link="/collection/".concat(null===(a=e.post)||void 0===a?void 0:a.ID),o.flow=0,Object(J["a"])(o).then((function(){e.$message.success("提交成功"),e.close()}))}else console.log("error submit!!!",i)}))},onCancel:function(){this.close(),this.clearForm()},loadLogs:function(){var t,e,i=this;null!==(t=this.post)&&void 0!==t&&t.ID&&Object(J["d"])({source_id:null===(e=this.post)||void 0===e?void 0:e.ID}).then((function(t){i.logs=t.data.data||[]}))},loadConfig:function(){var t=this;Object(J["b"])({_no_page:1}).then((function(e){t.config=e.data.data||[],t.config=t.config.filter((function(t){return 1==t.parent_id}))}))},formatTime:function(t){return d()(t).format("YYYY-MM-DD HH:mm:ss")}}},G=X,K=(i("109a"),Object(O["a"])(G,U,q,!1,null,null,null)),Q=K.exports,Z={name:"AdminDrop",components:{CollectionAdmin:z,DesignTask:Q},props:{buttonSize:{type:String,default:"medium"},post:{type:Object,default:function(){}},userId:{type:Number,default:0}},data:function(){return{showDesignTask:!1,showDrawer:!1}},computed:{isEditor:function(){return v["a"].isEditor()},sourceId:function(){var t,e;return this.isCommunity?null===(t=this.post)||void 0===t?void 0:t.id:null===(e=this.post)||void 0===e?void 0:e.ID},sourceType:function(){return this.isCommunity?"community":null===(t=this.post)||void 0===t?void 0:t.post_type;var t}},methods:{handleCommand:function(t){this[t]()},toggleAdminPanel:function(){this.showDrawer=!0},directMessage:function(){var t=this;this.$prompt("请输入私信内容","管理私信",{confirmButtonText:"确定",cancelButtonText:"取消",inputPlaceholder:"请输入私信内容",inputValidator:function(t){if(!t)return"请输入私信内容"},beforeClose:function(e,i,n){if("confirm"===e){var a={source_id:String(t.sourceId),source_type:t.sourceType,user_id:t.userId,content:"运营通知："+i.inputValue,type:"system",subtype:"admin_message"};Object(r["e"])(a).then((function(){t.$message.success("私信成功"),n()}))}else n()}}).catch((function(){}))},designTask:function(){this.showDesignTask=!0},hasPermission:function(t){return v["a"].hasPermission(t)}}},tt=Z,et=(i("2f69"),Object(O["a"])(tt,B,V,!1,null,null,null)),it=et.exports,nt={name:"CollectionLayout",components:{Nav:P,Side:E,AdminDrop:it},props:{hasRight:{type:Boolean,default:!0},post:{type:Object,default:function(){}}},data:function(){return{id:Object(h["getAppID"])(),showDrawer:!1}},computed:{user_id:function(){return this.$store.state.user_id},isEditor:function(){return v["a"].isEditor()},finalPost:function(){var t,e,i;return Object(C["a"])(Object(C["a"])({},this.post),{},{post_title:this.post.title,ID:this.post.id,post_type:(null===(t=this.post)||void 0===t||null===(e=t.posts)||void 0===e||null===(i=e[0])||void 0===i?void 0:i.post_type)||""})}},methods:{onAdminClick:function(){this.showDrawer=!0}}},at=nt,ot=(i("25c0"),Object(O["a"])(at,_,y,!1,null,null,null)),st=ot.exports,lt={name:"CollectionSingle",props:[],components:{"jx3-comment":o["a"],CollectionLayout:st},data:function(){return{collection:"",publish:l,url:location.href,views:0,loading:!1}},computed:{edit_link:function(){return Object(h["editLink"])("collection",this.collection.id)},id:function(){var t;return null===(t=this.collection)||void 0===t?void 0:t.id},author_id:function(){var t;return(null===(t=this.collection)||void 0===t?void 0:t.user_id)||0},canEdit:function(){return this.author_id==v["a"].getInfo().uid||v["a"].isEditor()},title:function(){return this.collection.title}},watch:{"$route.params.id":{immediate:!0,handler:function(t){t&&(this.loadData(t),this.execStat(t))}}},methods:{getThumbnail:h["getThumbnail"],getLink:function(t,e){return Object(h["getLink"])(t,e)},getTypeLabel:h["getTypeLabel"],showAvatar:h["showAvatar"],resolveImagePath:h["resolveImagePath"],dateFormat:function(t){return Object(c["a"])(new Date(1e3*t))},delete_handle:function(t,e){var i=this;t.preventDefault(),this.$confirm("确认是否删除该剑三小册？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(r["d"])(e).then((function(t){i.$message.success("删除成功"),i.$router.push({name:"collection"})}))}))},loadData:function(t){var e=this;this.loading=!0,Object(r["a"])(t).then((function(t){var i;e.collection=(null===t||void 0===t||null===(i=t.data)||void 0===i?void 0:i.data)||{},e.$store.state.user_id=e.collection.user_id})).finally((function(){e.loading=!1}))},execStat:function(t){var e=this;Object(b["b"])("collection",t),Object(b["a"])("collection",t).then((function(t){e.views=t.data.views||0}))},formatDate:function(t){return d()(t).format("YYYY-MM-DD HH:mm:ss")},iconUrl:function(t){var e=t.replace("_","/");return"".concat(g["__imgPath"],"image/").concat(e,".png")}},filters:{authorLink:h["authorLink"]},created:function(){},mounted:function(){m.$on("updateCollection",(function(){location.reload()}))}},rt=lt,ct=(i("b44c"),Object(O["a"])(rt,n,a,!1,null,null,null));e["default"]=ct.exports},"1d81":function(t,e,i){},"206c":function(t,e,i){},"25c0":function(t,e,i){"use strict";i("82e0")},"2f69":function(t,e,i){"use strict";i("96f1")},"30a3":function(t,e,i){},"3cbf":function(t,e,i){},4208:function(t,e,i){!function(e,i){t.exports=i()}(0,(function(){"use strict";return function(t,e,i){t=t||{};var n=e.prototype,a={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(t,e,i,a){return n.fromToBase(t,e,i,a)}i.en.relativeTime=a,n.fromToBase=function(e,n,o,s,l){for(var r,c,u,d=o.$locale().relativeTime||a,p=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=p.length,m=0;m<f;m+=1){var h=p[m];h.d&&(r=s?i(e).diff(o,h.d,!0):o.diff(e,h.d,!0));var v=(t.rounding||Math.round)(Math.abs(r));if(u=r>0,v<=h.r||!h.r){v<=1&&m>0&&(h=p[m-1]);var b=d[h.l];l&&(v=l(""+v)),c="string"==typeof b?b.replace("%d",v):b(v,n,h.l,u);break}}if(n)return c;var g=u?d.future:d.past;return"function"==typeof g?g(c):g.replace("%s",c)},n.to=function(t,e){return o(t,e,this,!0)},n.from=function(t,e){return o(t,e,this)};var s=function(t){return t.$u?i.utc():i()};n.toNow=function(t){return this.to(s(this),t)},n.fromNow=function(t){return this.from(s(this),t)}}}))},"498a":function(t,e,i){"use strict";var n=i("23e7"),a=i("58a8").trim,o=i("c8d2");n({target:"String",proto:!0,forced:o("trim")},{trim:function(){return a(this)}})},"4a76":function(t,e,i){},"56cf":function(t,e,i){},"5a51":function(t,e,i){"use strict";i("d40a")},"5b9b":function(t,e,i){"use strict";i("4a76")},6370:function(t,e,i){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-single-directory"})},a=[],o={name:"PostDirectory",props:[],components:{},data:function(){return{}},computed:{},watch:{},methods:{},created:function(){},mounted:function(){}},s=o,l=(i("d841"),i("2877")),r=Object(l["a"])(s,n,a,!1,null,null,null);e["a"]=r.exports},"658a":function(t,e,i){"use strict";i("206c")},"6d0c":function(t,e,i){"use strict";i("30a3")},7524:function(t,e,i){},"80bb":function(t,e,i){},"82e0":function(t,e,i){},"891b":function(t,e,i){"use strict";i("7524")},9398:function(t,e,i){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Header"),e("Breadcrumb",{attrs:{name:"竹林茶馆",slug:"bbs",publishEnable:!1,topicEnable:!1,adminEnable:!1,feedbackEnable:!0,crumbEnable:!0}},[e("Info"),e("publish-gate",{attrs:{slot:"op-append"},slot:"op-append"})],1),e("LeftSidebar",[e("Nav")],1),e("Main",{attrs:{withoutRight:!1}},[e("div",{staticClass:"m-main"},[t._t("default")],2),e("RightSidebar",{staticClass:"m-bbs-right-side",attrs:{"show-toggle":!0}},[e("Side",{staticClass:"m-extend"})],1),e("Footer")],1)],1)},a=[],o=(i("b0c0"),i("8f33")),s=i("3fac"),l=i("ee7f"),r=i("98e8"),c=i("85e4"),u={name:"ListLayout",props:[],data:function(){return{}},computed:{slug:function(){return this.$route.name}},methods:{getAppIcon:c["getAppIcon"]},components:{Nav:s["a"],"publish-gate":r["a"],Info:o["a"],Side:l["a"]}},d=u,p=(i("891b"),i("2877")),f=Object(p["a"])(d,n,a,!1,null,null,null);e["a"]=f.exports},"96f1":function(t,e,i){},a42e:function(t,e,i){"use strict";i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o})),i.d(e,"d",(function(){return s})),i.d(e,"b",(function(){return l}));var n=i("41cb"),a=function(t){return Object(n["a"])().get("/api/cms/design/task/log",{params:t})},o=function(t){return Object(n["a"])().post("/api/cms/design/task",t)},s=function(t){return Object(n["a"])().get("/api/cms/design/task/log",{params:t})},l=function(t){return Object(n["a"])().get("/api/cms/config/banner/types",{params:t})}},a45a:function(t,e,i){"use strict";i("1d81")},a5de:function(t,e,i){t.exports=i.p+"img/topic_bg_bps.423bd2a8.svg"},b44c:function(t,e,i){"use strict";i("1827")},bf34:function(t,e,i){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.topicInfo,expression:"topicInfo"}],staticClass:"c-post-topic"},[e("div",{staticClass:"c-post-topic__banner"},[e("div",{staticClass:"c-topic-text"},[e("div",{staticClass:"c-topic-text__year"},[t._v(t._s(t.year))]),e("div",{staticClass:"c-topic-text__text"},[t._v(t._s(t.topicText))])]),e("img",{staticClass:"c-topic-bg",attrs:{src:i("a5de"),alt:""}})]),e("div",{staticClass:"c-post-topic__img"},[e("img",{attrs:{src:t.topicImage,alt:""}})])])},a=[],o=(i("caad"),i("4e82"),i("a9e3"),i("2532"),i("1509")),s=i("85e4"),l=i("5a0c"),r=i.n(l),c={name:"PostTopic",props:{type:{type:String,default:"bps"},id:{type:Number,default:46917},postBanner:{type:String,default:""}},data:function(){return{topicInfo:null}},computed:{topicText:function(){return this.topicInfo?"".concat(r()(this.topicInfo.created_at).format("MM月DD日"),"荣登头条榜"):""},year:function(){return this.topicInfo?r()(this.topicInfo.created_at).format("YYYY年"):""},topicImage:function(){var t,e=this.postBanner||(null===(t=this.topicInfo)||void 0===t?void 0:t.img);return(null===e||void 0===e?void 0:e.indexOf(".gif"))>-1?e:Object(s["getThumbnail"])(e,[520,156])},client:function(){return location.href.includes("origin")?"origin":"std"}},watch:{id:{immediate:!0,handler:function(t){t&&this.loadData()}}},methods:{loadData:function(){var t=this;Object(o["e"])(this.type,this.id,this.client).then((function(e){var i;if(null!==(i=e.data.data)&&void 0!==i&&i.list){var n=e.data.data.list.sort((function(t,e){return r()(e.created_at).isAfter(r()(t.created_at))?1:-1}));t.topicInfo=n[0]}}))}}},u=c,d=(i("5a51"),i("2877")),p=Object(d["a"])(u,n,a,!1,null,"268f4504",null);e["a"]=p.exports},c8d2:function(t,e,i){"use strict";var n=i("5e77").PROPER,a=i("d039"),o=i("5899"),s="​᠎";t.exports=function(t){return a((function(){return!!o[t]()||s[t]()!==s||n&&o[t].name!==t}))}},d40a:function(t,e,i){},d841:function(t,e,i){"use strict";i("80bb")},fb92:function(t,e,i){"use strict";i.d(e,"a",(function(){return l})),i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return c}));i("99af");var n=i("5a0c"),a=i.n(n),o=i("4208");function s(t){return a()().from(a()(t))}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=t.getFullYear(),a=t.getMonth()+1,o=t.getDate(),s=i?"".concat(n).concat(e).concat(r(a)).concat(e).concat(r(o)):"".concat(n).concat(e).concat(a).concat(e).concat(o);return s}function r(t){return t<10?"0"+t:t}function c(t){var e=a()(t),i=a()(),n=i.diff(e,"day");return 0===n?i.diff(e,"minute")<=60?{text:"刚刚",icon:"el-icon-loading"}:i.diff(e,"minute")<=120?{text:"2小时内",icon:"el-icon-time"}:{text:e.format("HH:mm"),icon:"el-icon-time"}:1===n?{text:"昨天",icon:"el-icon-time"}:n>=2&&n<=365?{text:e.format("MM-DD"),icon:"el-icon-date"}:{text:e.format("YYYY-MM-DD HH:mm:ss"),icon:"el-icon-date"}}i("a471"),a.a.locale("zh-cn"),a.a.extend(o)}}]);
//# sourceMappingURL=chunk-bca10e18.ebe53f1c.js.map