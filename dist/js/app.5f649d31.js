(function(t){function e(e){for(var i,r,l=e[0],o=e[1],c=e[2],d=0,p=[];d<l.length;d++)r=l[d],s[r]&&p.push(s[r][0]),s[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,l=1;l<a.length;l++){var o=a[l];0!==s[o]&&(i=!1)}i&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},s={1:0},n=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;n.push([9,0]),a()})({"18C7":function(t,e,a){},9:function(t,e,a){t.exports=a("Vtdi")},CC0l:function(t,e,a){"use strict";var i=a("yHda"),s=a.n(i);s.a},HwCA:function(t,e,a){},UsOx:function(t,e,a){},Vtdi:function(t,e,a){"use strict";a.r(e);a("VRzm");var i=a("Kw5r"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"fade"}},[t.initialized?t._e():a("loading-screen",[a("img",{attrs:{src:"https://cloudinary-res.cloudinary.com/image/upload/v1521663307/MiniFlix-Logo_620x180.png",alt:"Netflix",width:"112",height:"28"}})])],1),a("nav",{staticClass:"navbar is-fixed-top",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"navbar-menu"},[a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("div",{staticClass:"field is-grouped"},[a("p",{staticClass:"control"},[a("a",{staticClass:"button is-dark",on:{click:function(e){t.showModal=!0}}},[t._m(1),a("span",[t._v("Upload")])])]),a("p",{staticClass:"control"},[a("a",{staticClass:"button is-dark"},[a("social-sharing",{attrs:{title:"Build a Mini Netflix from scratch",url:"https://cloudinary.gitbooks.io/build-a-mini-netflix-clone-with-vue/content"},inlineTemplate:{render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("network",{attrs:{network:"twitter"}},[a("i",{staticClass:"fab fa-twitter"}),t._v("\n                      Share\n                    ")])},staticRenderFns:[]}})],1)])])])])])])]),a("video-player",{attrs:{"cloudinary-instance":t.cloudinaryInstance,movies:t.movies,"active-movie-index":t.activeMovie},on:{"choose-movie":t.updatePlayer}}),t._m(2),a("video-list",{attrs:{"cloudinary-instance":t.cloudinaryInstance,movies:t.movies,"active-movie-index":t.activeMovie},on:{"choose-movie":t.updatePlayer}}),a("upload-modal",{attrs:{"show-modal":t.showModal,"is-processing-upload":t.isUploading},on:{"handle-upload":t.uploadToServer,close:function(e){t.showModal=!1}}})],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-item",attrs:{href:"/"}},[a("img",{attrs:{src:"https://cloudinary-res.cloudinary.com/image/upload/v1521663307/MiniFlix-Logo_620x180.png",alt:"Netflix",width:"112",height:"28"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-cloud-upload-alt"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h2",{staticClass:"is-size-3"},[t._v("Movies")])])}],r=a("iv4g"),l=(a("ls82"),a("MECJ")),o={cloudinary:{cloudName:"jrtell",uploadPreset:"v63gpw1l"},api:{url:"https://wt-3ab4f5008e0b86a1e53e234e9d9ee5aa-0.sandbox.auth0-extend.com/server"},fallbackMovie:{title:"Black Panther",trailer:"mini-netflix/trailers/Marvel_Studios_Black_Panther_-_Official_Trailer_nmrtr7"}},c=a("vDqi"),u=a.n(c),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loading-screen"},[t._t("default"),a("div",{staticClass:"loader"})],2)},p=[],v={name:"loadingscreen"},f=v,h=(a("pCvv"),a("KHd+")),m=Object(h["a"])(f,d,p,!1,null,"5a896546",null),g=m.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"player-bg"},[a("video",{staticClass:"cld-video-player player-bg-video",attrs:{id:"trailer",autoplay:"",controls:""}})])}],y=(a("xfY5"),{name:"videoplayer",props:{cloudinaryInstance:{required:!0},movies:{type:Array},activeMovieIndex:{type:Number,default:0}},computed:{playlist:function(){return this.movies.map(function(t){return{publicId:t.trailer,info:{title:t.title}}})}},watch:{playlist:function(t){this.setPlaylist(t)},activeMovieIndex:function(t){this.player.playlist().playAtIndex(t)}},mounted:function(){var t=this;this.player=this.cloudinaryInstance.videoPlayer("trailer",{transformation:{crop:"crop",height:500,aspect_ratio:"16:9",gravity:"center"}}),this.player.volume(localStorage.getItem("playerVolume")||.4),this.player.on("volumechange",this.onVolumeChanged),this.player.on("sourcechanged",this.onSourceChanged),this.setPlaylist(this.playlist),document.hidden&&this.player.mute(),window.onfocus=function(){return t.player.unmute()},window.onblur=function(){return t.player.mute()}},methods:{onVolumeChanged:function(){localStorage.setItem("playerVolume",this.player.volume())},onSourceChanged:function(){this.$emit("choose-movie",this.player.playlist().currentIndex())},setPlaylist:function(t){!t||t.length<1||this.player.playlist(t,{autoAdvance:!0,repeat:!0,presentUpcoming:8})}}}),w=y,_=(a("sSJR"),Object(h["a"])(w,b,C,!1,null,null,null)),x=_.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"video-list-container"},[a("div",{staticClass:"video-list"},[a("div",{staticClass:"columns is-mobile"},t._l(t.movies,function(e,i){return a("div",{key:e._id,staticClass:"column is-narrow"},[a("div",{staticClass:"banner-container",class:{"is-active":t.activeMovieIndex===i},on:{click:function(e){t.$emit("choose-movie",i)},mouseover:function(e){t.showPreview(i)}}},[a("img",{staticClass:"banner",attrs:{src:t.bannerUrl(e.banner),alt:e.title}}),t.currentPreviewIndex===i?a("video",{staticClass:"preview",attrs:{autoplay:"",muted:"",loop:"",src:t.previewUrl(e.trailer)},domProps:{muted:!0},on:{mouseleave:t.hidePreview}}):t._e(),t.activeMovieIndex===i?a("span",{staticClass:"playing-label is-size-4"},[t._v("Playing")]):t._e()])])})),a("div",{staticClass:"columns is-mobile"},t._l(12,function(e){return a("div",{directives:[{name:"show",rawName:"v-show",value:t.movies.length<1,expression:"movies.length < 1"}],key:e,staticClass:"column is-narrow"},[a("div",{staticClass:"placeholder-banner"})])}))])])},M=[],S=a("yT7P"),k={width:200,height:300,quality:"auto",crop:"fill",effect:"auto_saturation",fetchFormat:"auto"},U={name:"videolist",props:{cloudinaryInstance:{required:!0},movies:{type:Array,required:!0},activeMovieIndex:{type:Number,default:0}},data:function(){return{currentPreviewIndex:null}},methods:{showPreview:function(t){this.currentPreviewIndex=t},hidePreview:function(){this.currentPreviewIndex=null},bannerUrl:function(t){return this.cloudinaryInstance.url(t,k)},previewUrl:function(t){return this.cloudinaryInstance.video_url(t,Object(S["a"])({},k,{duration:7,audioCodec:"none"}))}}},V=U,I=(a("ftsU"),Object(h["a"])(V,P,M,!1,null,"7a49cdb6",null)),O=I.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("sweet-modal",t._g({ref:"modal",attrs:{"modal-theme":"dark","overlay-theme":"dark"}},t.$listeners),[a("form",{staticClass:"has-text-left",on:{submit:function(e){return e.preventDefault(),t.emitUpload(e)}}},[a("div",{staticClass:"columns is-mobile"},[a("div",{staticClass:"column is-narrow step-container"},[a("p",{staticClass:"step"},[t._v("1")]),a("p",{staticClass:"check"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.isStep1Valid,expression:"isStep1Valid"}],staticClass:"icon is-small is-right"},[a("i",{staticClass:"fas fa-check"})])])]),a("div",{staticClass:"column"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label has-text-white"},[t._v("Name")]),a("div",{staticClass:"control has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input",class:{"is-success":t.isStep1Valid},attrs:{type:"text",placeholder:"Enter the movie title..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])])])]),a("div",{staticClass:"columns is-mobile"},[a("div",{staticClass:"column is-narrow step-container"},[a("p",{staticClass:"step"},[t._v("2")]),a("p",{staticClass:"check"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.isStep2Valid,expression:"isStep2Valid"}],staticClass:"icon is-small is-right"},[a("i",{staticClass:"fas fa-check"})])])]),a("div",{staticClass:"column"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label has-text-white"},[t._v("Upload Banner")]),a("span",{staticClass:"has-text-white"},[t._v(t._s(t.banner))]),a("div",{staticClass:"file"},[a("label",{staticClass:"file-label"},[a("input",{staticClass:"file-input",attrs:{type:"file",disabled:t.bannerProgress>0},on:{change:t.uploadBanner}}),a("span",{staticClass:"file-cta"},[a("span",{staticClass:"file-icon"},[a("i",{staticClass:"fas fa-upload"})]),a("span",{staticClass:"file-label"},[t._v("Choose an image")])])])])]),t.bannerProgress?a("progress",{staticClass:"progress is-danger",attrs:{max:"100"},domProps:{value:t.bannerProgress}},[t._v(t._s(t.bannerProgress)+"%")]):t._e()])]),a("div",{staticClass:"columns is-mobile"},[a("div",{staticClass:"column is-narrow step-container"},[a("p",{staticClass:"step"},[t._v("3")]),a("p",{staticClass:"check"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.isStep3Valid,expression:"isStep3Valid"}],staticClass:"icon is-small is-right"},[a("i",{staticClass:"fas fa-check"})])])]),a("div",{staticClass:"column"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label has-text-white"},[t._v("Upload Video")]),a("span",{staticClass:"has-text-white"},[t._v(t._s(t.trailer))]),a("div",{staticClass:"file"},[a("label",{staticClass:"file-label"},[a("input",{staticClass:"file-input",attrs:{type:"file",disabled:t.trailerProgress>0},on:{change:t.uploadTrailer}}),a("span",{staticClass:"file-cta"},[a("span",{staticClass:"file-icon"},[a("i",{staticClass:"fas fa-upload"})]),a("span",{staticClass:"file-label"},[t._v("Choose a video")])])])])]),t.trailerProgress?a("progress",{staticClass:"progress is-danger",attrs:{max:"100"},domProps:{value:t.trailerProgress}},[t._v(t._s(t.trailerProgress)+"%")]):t._e()])]),a("div",{staticClass:"columns is-centered is-mobile"},[a("div",{staticClass:"column is-narrow"},[a("button",{staticClass:"button is-danger",class:{"is-loading":t.isProcessingUpload},attrs:{disabled:!t.isAllStepsValid}},[t._v("\n          Submit\n        ")])])])])])},$=[],N=a("sK6a"),E={name:"uploadmodal",components:{SweetModal:N["a"],SweetModalTab:N["b"]},props:{showModal:{type:Boolean,required:!0},isProcessingUpload:{type:Boolean,required:!1}},data:function(){return{title:"",banner:null,trailer:null,bannerProgress:0,trailerProgress:0}},computed:{isStep1Valid:function(){return""!==this.title},isStep2Valid:function(){return null!==this.banner},isStep3Valid:function(){return null!==this.trailer},isAllStepsValid:function(){return this.isStep1Valid&&this.isStep2Valid&&this.isStep3Valid}},watch:{showModal:function(t){t?this.$refs.modal.open():this.$refs.modal.close()}},methods:{uploadBanner:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e){var a,i,s,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e.target.files[0]){t.next=2;break}return t.abrupt("return");case 2:return a=this.buildFormData(e.target.files[0]),t.next=5,this.uploadFile({formData:a,progressBar:"bannerProgress",type:"image"});case 5:i=t.sent,s=i.public_id,n=void 0===s?null:s,this.banner=n;case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),uploadTrailer:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e){var a,i,s,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e.target.files[0]){t.next=2;break}return t.abrupt("return");case 2:return a=this.buildFormData(e.target.files[0]),t.next=5,this.uploadFile({formData:a,progressBar:"trailerProgress",type:"video"});case 5:i=t.sent,s=i.public_id,n=void 0===s?null:s,this.trailer=n;case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),uploadFile:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e){var a,i,s,n,r,l;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.formData,i=e.progressBar,s=e.type,t.prev=1,n="https://api.cloudinary.com/v1_1/"+o.cloudinary.cloudName+"/"+s+"/upload",t.next=5,u.a.post(n,a,this.axiosConfig(i));case 5:return r=t.sent,l=r.data,t.abrupt("return",l);case 10:return t.prev=10,t.t0=t["catch"](1),t.abrupt("return",!1);case 13:case"end":return t.stop()}},t,this,[[1,10]])}));return function(e){return t.apply(this,arguments)}}(),buildFormData:function(t){var e=new FormData;return e.append("upload_preset",o.cloudinary.uploadPreset),e.append("file",t),e},emitUpload:function(){var t={title:this.title,banner:this.banner,trailer:this.trailer};this.isAllStepsValid&&(this.$emit("handle-upload",t),this.title="",this.banner=null,this.trailer=null)},axiosConfig:function(t){var e=this;return{onUploadProgress:function(a){e[t]=Math.floor(100*a.loaded/a.total)}}}}},T=E,R=(a("CC0l"),Object(h["a"])(T,j,$,!1,null,"166dca5c",null)),B=R.exports,D={name:"app",components:{LoadingScreen:g,VideoPlayer:x,VideoList:O,UploadModal:B},data:function(){return{initialized:!1,movies:[],activeMovie:0,showModal:!1,isUploading:!1}},computed:{activeMovieTitle:function(){return this.movies[this.activeMovie]?this.movies[this.activeMovie].title:null}},watch:{activeMovieTitle:function(t){document.title="Netflix | playing "+t}},created:function(){this.cloudinaryInstance=window.cloudinary.Cloudinary.new({cloud_name:o.cloudinary.cloudName,secure:!0}),this.fetchMovies()},methods:{fetchMovies:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.a.get(o.api.url+"/movies");case 2:e=t.sent,a=e.data,this.movies=a,this.initialized=!0;case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),updatePlayer:function(t){this.activeMovie=t},uploadToServer:function(t){var e=this;this.isUploading=!0,u.a.post(o.api.url+"/movies",t).then(function(t){e.movies=[t.data].concat(Object(r["a"])(e.movies)),e.showModal=!1,e.isUploading=!1})}}},F=D,A=(a("wxKG"),Object(h["a"])(F,s,n,!1,null,"4ad03e1a",null)),K=A.exports;a("ksaK"),a("5Upn");a("EIbZ"),window.cloudinary=a("GU7I"),i["default"].config.productionTip=!1,i["default"].config.performance=!0;var q=a("UplU");i["default"].use(q),new i["default"]({render:function(t){return t(K)}}).$mount("#app")},ftsU:function(t,e,a){"use strict";var i=a("HwCA"),s=a.n(i);s.a},pCvv:function(t,e,a){"use strict";var i=a("vDYK"),s=a.n(i);s.a},sSJR:function(t,e,a){"use strict";var i=a("UsOx"),s=a.n(i);s.a},vDYK:function(t,e,a){},wxKG:function(t,e,a){"use strict";var i=a("18C7"),s=a.n(i);s.a},yHda:function(t,e,a){}});
//# sourceMappingURL=app.5f649d31.js.map