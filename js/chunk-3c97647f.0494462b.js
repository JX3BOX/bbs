(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c97647f"],{"0621":function(t,s,a){"use strict";a("58e0")},"112a":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"v-paper"},["list"==t.mode?[a("PaperList",{attrs:{data:t.data}})]:[a("PaperSingle")]],2)},e=[],n=a("6212"),r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"v-paper-single"},[a("SingleTitle",{attrs:{item:t.data}}),a("div",{staticClass:"m-list"},[t._l(t.list,(function(s,i){return a("SingleCard",{key:s.id,attrs:{item:s,index:i+1,answer:t.answer,userAnswers:t.userAnswers,isSubmitted:t.isSubmitted},on:{changeVal:t.finalAnswer}})})),t.isLogin?t._e():a("div",{staticClass:"m-mark",on:{click:t.prompt}})],2),a("div",{staticClass:"u-submit",on:{click:t.submit}},[a("el-button",{staticClass:"u-btn"},[t._v("提交")])],1)],1)},l=[],c=a("b85c"),o=(a("4e82"),a("e9c4"),a("9430")),u=a("fb94"),d=a("6a7f"),p=a("c9d2"),f={name:"PaperSingle",props:[],components:{SingleCard:o["a"],SingleTitle:u["a"]},data:function(){return{isLogin:!1,data:{},list:[],answer:"",userAnswers:{},submitList:{},isSubmitted:!1}},methods:{loadData:function(){var t=this,s=this.$route.params.id;Object(d["c"])(s).then((function(s){var a=s.data;a.tags=JSON.parse(a.tags);var i,e=Object(c["a"])(a.questionDetailList);try{for(e.s();!(i=e.n()).done;){var n=i.value;n.options=JSON.parse(n.options),n.tags=JSON.parse(n.tags)}}catch(r){e.e(r)}finally{e.f()}t.data=a,t.list=a.questionDetailList}))},finalAnswer:function(t){var s,a;for(var i in t)s=i,t[i].length&&(a=t[i].sort()),a=t[i];this.$set(this.userAnswers,s,a)},prompt:function(){this.$message.error("请先登录")},submit:function(){var t=this;if("{}"==JSON.stringify(this.userAnswers))this.$alert("不能交白卷哦~","提交失败",{type:"error"});else{for(var s=this.data.questionDetailList,a=0;a<s.length;a++)for(var i in this.userAnswers)if(s[a].id==i){for(var e=[],n=0;n<s[a].options.length;n++)if(this.userAnswers[i].length)for(var r=0;r<this.userAnswers[i].length;r++)this.userAnswers[i][r]==n&&e.push(s[a].options[n]);else this.userAnswers[i]==n&&e.push(s[a].options[n]);this.$set(this.submitList,s[a].id,e)}Object(d["e"])(this.data.id,this.submitList,!0).then((function(s){console.log(s.data,"submitAnswer"),s.data.score&&(t.answer=s.data.paper.questionDetailList,t.isSubmitted=!0)}))}}},created:function(){p["a"].isLogin()?this.isLogin=!0:(this.prompt(),this.isLogin=!1),this.loadData()}},h=f,m=(a("0621"),a("2877")),v=Object(m["a"])(h,r,l,!1,null,null,null),g=v.exports,b={name:"Paper",props:[],components:{PaperList:n["a"],PaperSingle:g},data:function(){return{data:[],params:{pageIndex:1}}},computed:{mode:function(){return this.$route.params.id?"single":"list"}},methods:{getListData:function(){var t=this;Object(d["a"])(this.params).then((function(s){t.data=s.data.data||{}}))}},created:function(){"list"==this.mode&&this.getListData()},mounted:function(){},filters:{},watch:{}},w=b,C=(a("5b0b"),Object(m["a"])(w,i,e,!1,null,null,null));s["default"]=C.exports},"29b8":function(t,s,a){},"31f5":function(t,s,a){"use strict";a("29b8")},"58e0":function(t,s,a){},"5b0b":function(t,s,a){"use strict";a("750e")},6212:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"m-paper-list"},[a("el-row",{staticClass:"u-list",attrs:{gutter:20}},t._l(t.list,(function(s){return a("el-col",{key:"paper"+s.id,staticClass:"u-item",attrs:{span:12}},[a("router-link",{staticClass:"u-link",attrs:{to:{name:"paper",params:{id:s.id}}}},[a("div",{staticClass:"u-title",class:s.style},[t._v(" "+t._s(s.title)+" ")]),a("div",{staticClass:"u-tags"},t._l(s.tags,(function(s){return a("el-tag",{key:s,staticClass:"u-tag",attrs:{size:"small"}},[t._v(" "+t._s(s)+" ")])})),1),a("div",{staticClass:"u-desc",class:s.style},[a("svg",{class:"u-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"256",height:"256",viewBox:"0 0 256 256","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[a("path",{staticClass:"fil0",attrs:{d:"M129.254 5.842l102.93 59.427-31.87 18.4-.982-.566c.994-2.975-.028-5.876-2.019-8.167l-4.238-4.874-4.875-4.238c-4.609-4.007-11.22-2.951-13.087 3.295l-45.859-26.476-48.092 27.766c-3.008-2.576-6.243-4.596-7.711-5.336.556 3.007 1.122 5.906 1.436 8.959l-16.692 9.637-31.87-18.4L129.254 5.842zM236 71.878v118.854l-102.929 59.426v-36.801l71.059-41.026V90.279L236 71.878zm-110.561 178.28l-102.93-59.426V71.878l31.87 18.401v38.385a71.299 71.299 0 00-9.941 3.888c3.476 1.394 6.816 2.952 9.941 4.768v35.011l13.63 7.87c-.448 5.196-.681 10.447-.884 15.81 7.698-.047 17.263-.298 24.365-2.254l33.949 19.6v36.801zM73.64 189.497c.616-12.288.824-17.667 6.46-25.262 5.453 5.878 11.556 10.552 18.453 13.546a44.686 44.686 0 004.644 1.718c-10.202 9.114-15.093 9.273-29.557 9.998zm55.206-82.269a30.61 30.61 0 00-4.996 4.101c-2.432 2.476-4.35 5.302-5.436 8.228l6.691-6.474c1.381-1.335 2.902-4.048 3.741-5.855zm15.54-14.454c-2.664.429-4.875 1.064-6.833 1.861 2.112.623 4.007 1.195 6.817 2.037l.016-3.898zm15.213-7.165l1.942.821 1.516-1.49a56.852 56.852 0 00-6.694-2.647l3.236 3.316zm-7.44-4.519c-3.687-.918-7.615-1.549-11.775-1.863 2.509-1.954 8.004-2.992 11.839-3.871-6.24-2.525-17.137-2.863-26.058-.017-.495 1.506-1.483 3.868-2.685 4.952-1.586 1.43-3.063 2.694-4.373 3.915 10.1-4.479 20.923-4.799 31.527-1.855l1.525-1.261zM82.1 80.589c1.213 7.898-1.998 20.612-2.61 22.231-.613 1.618-1.421 3.479-4.084 10.137-2.664 6.658-2.451 19.463-.66 23.5-4.342-3.055-9.693-4.784-14.795-2.94 8.582 4.379 13.448 14.094 19.147 21.551 13.089 17.129 29.219 25.133 49.926 19.37 10.231-2.847 25.104-22.701 16.335-30.342-15.181 8.569-31.513-2.404-32.155-19.114-.467-12.171 12.786-24.526 25.65-26.107-5.249-1.572-7.043-2.387-13.788-1.313 6.068-4.449 10.642-7.967 21.017-8.998.637-1.192 1.667-2.01 2.687-2.853-12.985-3.363-31.961-2.924-48.429 18.886 4.904-10.82 8.443-15.182 20.698-27.127 3.233-3.151 2.587-7.771 2.183-10.966-3.448 5.663-9.754 8.745-18.349 12.542-6.518 2.879-12.428 7.647-16.78 13.669-1.091-4.665-2.175-8.865-5.993-12.126zm62.075 89.198a95.605 95.605 0 004.608-2.046c-4.35 7.066-14.86 14.943-33.852 17.435 20.304 5.345 39.698 2.31 51.914-10.359-.979 1.719-1.998 3.546-3.118 5.174 14.984-8.658 34.487-34.111 20.514-58.638 2.36 1.92 4.335 4.253 6.008 7.432.11-11.661-3.429-22.244-10.167-30.625l-3.947 4.018 7.299 7.124-5.446 6.584c-2.667 3.225-4.416 3.231-7.72 3.242l-4.616.018c-.087 1.544-.742 2.979-1.882 4.027l-.072 3.376c-.069 3.225-1.915 6.394-5.122 7.359l.001.005c-3.864 1.15-7.022 3.497-9.786 6.353 1.943 1.713 3.186 3.805 3.841 6.157 1.06 3.809.418 8.087-1.322 12.281-1.663 4.008-4.251 7.851-7.135 11.083zm-25.774-43.979l9.782-9.463c1.993-1.929 4.901-6.745 5.964-10.318.226-.761 1.197-1.434 2.541-1.463l6.485-.139.357-1.122c.196-.616.459-.706 1.011-.709l4.176-.02a.392.392 0 00.379-.39l.037-9.184c.007-1.797-.026-2.719 1.393-3.893l2.944-2.433 7.412 7.594 18.945-18.61 1.185-4.634c.463-1.81 1.741-1.749 3.146-.528l4.538 3.945 3.945 4.538c1.22 1.405 1.282 2.683-.528 3.146l-4.634 1.185-18.611 18.945 7.595 7.412-2.434 2.943c-1.173 1.42-2.096 1.387-3.892 1.394l-9.184.037a.39.39 0 00-.39.379l-.02 4.176c-.003.552-.093.815-.709 1.011l-1.122.358-.139 6.484c-.029 1.344-.703 2.315-1.463 2.541-3.573 1.063-8.389 3.971-10.318 5.964l-5.142 5.316c-5.88 2.918-11.824 2.547-17.096-2.205-3.029-2.731-5.197-6.561-5.943-10.779a20.577 20.577 0 01-.21-1.478z"}})]),a("div",{staticClass:"u-text"},[t._v(t._s(s.desc))])]),a("div",{staticClass:"u-info"},[a("div",[t._v("出卷人： "+t._s(s.createUser))]),a("div",{staticClass:"u-star"},[t._v(" 难度： "),a("el-rate",{attrs:{disabled:"","text-color":"#ff9900"},model:{value:s.hardStar,callback:function(a){t.$set(s,"hardStar",a)},expression:"item.hardStar"}})],1)])])],1)})),1)],1)},e=[],n=(a("d81d"),a("fb6a"),{name:"PaperList",props:["data"],components:{},data:function(){return{}},computed:{list:function(){var t;return null===(t=this.data)||void 0===t?void 0:t.map((function(t,s){try{t.tags=JSON.parse(t.tags).slice(0,3)}catch(a){console.log("解析试卷列表tag异常",a),t.tags=[]}return t}))}},watch:{},methods:{},filters:{},created:function(){},mounted:function(){}}),r=n,l=(a("31f5"),a("2877")),c=Object(l["a"])(r,i,e,!1,null,null,null);s["a"]=c.exports},"750e":function(t,s,a){}}]);
//# sourceMappingURL=chunk-3c97647f.0494462b.js.map