(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{196:function(t,e,r){r(197),t.exports=r(464)},391:function(t,e,r){"use strict";var o=r(87);r.n(o).a},392:function(t,e,r){(t.exports=r(393)(!1)).push([t.i,'\n[v-cloak] { display: none;}\n.mw-1140{ max-width:1140px;\n}\n[draggable="true"] { user-select: none;\n}\n.cursor-move{ cursor:move;\n}\n.dragging{background-color:cornflowerblue}\n.dragover{background-color:cornflowerblue}\r\n',""])},464:function(t,e,r){"use strict";r.r(e);var o=r(28),n=r(189),i=r.n(n),a=r(190),s=r.n(a),d=r(191),c=r.n(d),l=r(192),u=r.n(l),f=r(193),v=r.n(f),h=r(194),p=r.n(h),g=r(195),m=r.n(g),_="https://www.youtube-nocookie.com/embed",b="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com",w="https://livestream.com",x=function(t){return t.split(/ |,/).map(function(t){return t?function(t){var e,r,o;if(!t)return null;if(o=t.match(/^((yt):)?([a-zA-Z0-9-_.]+)$/))e="yt:"+o[3],r=_+"/"+o[3];else if(o=t.match(/^https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9-_.]+)/))e="yt:"+o[1],r=_+"/"+o[1];else if(o=t.match(/^https:\/\/www.youtube\.com\/embed\/([a-zA-Z0-9-_.]+)/))e="yt:"+o[1],r=_+"/"+o[1];else if(o=t.match(/^https:\/\/youtu\.be\/([a-zA-Z0-9-_.]+)/))e="yt:"+o[1],r=_+"/"+o[1];else if(o=t.match(/^(tt):([a-zA-Z0-9-_.]+)$/))e=o[0],r="https://player.twitch.tv/?channel="+o[2]+"&autoplay=false";else if(o=t.match(/^https:\/\/www\.twitch\.tv\/([a-zA-Z0-9-_.]+)/))e="tt:"+o[1],r="https://player.twitch.tv/?channel="+o[1]+"&autoplay=false";else if(o=t.match(/^(fb):([a-zA-Z0-9-_.]+):(\d+)$/))e=o[0],r=b+"/"+o[2]+"/videos/"+o[3]+"&autoplay=false";else if(o=t.match(/^https:\/\/www\.facebook\.com\/([a-zA-Z0-9-_.]+)\/videos\/(\d+)/))e="fb:"+o[1]+":"+o[2],r=b+"/"+o[1]+"/videos/"+o[2]+"&autoplay=false";else if(o=t.match(/^(ls):(\d+):(\d+)$/))e=o[0],r=w+"/accounts/"+o[2]+"/events/"+o[3]+"/player";else if(!e&&(o=t.match(/^(ls):(\d+):(\d+):(\d+)$/)))e=o[0],r=w+"/accounts/"+o[1]+"/events/"+o[2]+"/videos/"+o[3]+"/player";else if(o=t.match(/^https:\/\/livestream\.com\/accounts\/(\d+)\/events\/(\d+)/))e="ls:"+o[1]+":"+o[2],r=w+"/accounts/"+o[1]+"/events/"+o[2]+"/player";else{if(!(o=t.match(/^https:\/\/livestream\.com\/accounts\/(\d+)\/events\/(\d+)\/videos\/(\d+)/)))return null;e="ls:"+o[1]+":"+o[2]+":"+o[3],r=w+"/accounts/"+o[1]+"/events/"+o[2]+"/videos/"+o[3]+"/player"}return{code:e,url:r,focus:!1,order:0,dragging:!1,dragover:!1}}(t):null}).filter(function(t){return t})},y=r(187),k=r.n(y),C=[{url:"https://oceanxdds.github.io/live_monitor/channel.txt",last:"",callback:function(t,e,r){e!=t.last&&(t.last=e,r([e]))}},{url:"https://ncehk2019.github.io/nce-live-datasrc/lives.json",last:"",callback:function(t,e,r){if(e&&e.lives){var o=e.lives.filter(function(t){return t.active}).map(function(t){return t["#id"]});t.last!=o.join()&&(t.last=o.join(),r(o))}}}],A={data:function(){return{version:"190622",url:"",videos:[],export_url:"",export_url_id:"export_url_id",auto:!1,auto_interval:null,live_mode:!0,dragged_video:null}},watch:{hash:function(){window.location.hash=this.hash,this.export_url="https://oceanxdds.github.io/live_monitor/"+this.hash},videos:function(){document.title=(this.videos.length?"("+this.videos.length+") ":"")+"Live Monitor"},auto:function(){if(clearInterval(this.auto_interval),this.auto){var t=this;this.auto_interval=setInterval(function(){t.syncLive()},6e5)}}},computed:{hash:function(){return"#"+this.videos.map(function(t){return t}).sort(function(t,e){return t.order-e.order}).map(function(t){return t.code}).join(",")}},mounted:function(){window.location.hash&&this.addVideo(window.location.hash.substr(1)),this.live_mode&&(this.syncLive(),this.auto=!0)},methods:{toggleAuto:function(){this.auto=!this.auto},syncLive:function(){var t,e=this;t=function(t){t.forEach(function(t){e.addVideo(t)})},C.forEach(function(e){k.a.get(e.url,{params:{time:(new Date).getTime()}}).then(function(r){e.callback(e,r.data,t)})})},addVideo:function(t){var e=this;t=t||this.url,x(t).forEach(function(t){e.videos.filter(function(e){return e.code==t.code}).length>0||(t.order=e.videos.length,e.videos.push(t))}),this.url=""},removeVideo:function(t){this.videos.splice(this.videos.indexOf(t),1),this.updateOrder()},focusVideo:function(t){this.videos.forEach(function(e){e.focus=e.code==t.code&&!e.focus})},moveLeft:function(t){if(0!=t.order){var e=this.videos.filter(function(e){return e.order==t.order-1})[0],r=[t.order,e.order];e.order=r[0],t.order=r[1]}},moveRight:function(t){if(t.order!=this.videos.length-1){var e=this.videos.filter(function(e){return e.order==t.order+1})[0],r=[e.order,t.order];t.order=r[0],e.order=r[1]}},updateOrder:function(){this.videos.map(function(t){return t}).sort(function(t,e){return t.order-e.order}).forEach(function(t,e){t.order=e})},copyUrl:function(){var t=document.createRange();t.selectNode(document.getElementById(this.export_url_id));var e=window.getSelection();e.removeAllRanges(),e.addRange(t),document.execCommand("copy"),e.removeAllRanges()},dragstart_handler:function(t){this.dragged_video=t,t.dragging=!0},dragend_handler:function(t){this.dragged_video=null,t.dragging=!1},dragenter_handler:function(t){t.dragover=!0},dragover_handler:function(t){t.dragover=!0},dragleave_handler:function(t){t.dragover=!1},dragclick_handler:function(t){t.dragover=!1},drop_handler:function(t){if(t.dragover=!1,this.dragged_video){var e=this.dragged_video,r=t,o=t.order;r.order<e.order?(this.videos.forEach(function(t){o<=t.order&&t.order<e.order&&t.order++}),e.order=o):e.order<r.order&&(this.videos.forEach(function(t){e.order<t.order&&t.order<=o&&t.order--}),e.order=o)}}}},E=(r(391),r(188)),z=Object(E.a)(A,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"shadow-sm"},[r("div",{staticClass:"container-fluid mw-1140 py-2"},[r("div",{staticClass:"d-flex"},[r("div",{staticClass:"mr-1 flex-fill"},[r("b-input-group",{attrs:{prepend:"",size:"sm"}},[r("b-input-group-append",[r("b-dropdown",{attrs:{size:"sm",split:"",text:"Reload",variant:"success"},on:{click:function(e){return t.syncLive()}}},[r("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.toggleAuto()}}},[t._v("\r\n                                    Auto reload | "),r("span",{staticClass:"font-weight-bold",class:{"text-success":t.auto,"text-secondary":!t.auto}},[t._v(t._s(t.auto?"On":"Off"))])]),t._v(" "),r("b-dropdown-text",{staticStyle:{width:"275px"}},[t._v("\r\n                                    Hong Kong Anti Extradition Bill\r\n                                ")])],1)],1),t._v(" "),r("b-form-input",{attrs:{placeholder:"YouTube, Twitch, Facebook, Livestream"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addVideo()}},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),t._v(" "),r("b-input-group-append",[r("b-button",{on:{click:function(e){return t.addVideo()}}},[t._v("Enter")])],1)],1)],1)])])]),t._v(" "),r("div",{staticClass:"container-fluid"},[t.videos.length?r("div",{staticClass:"form-row py-3"},t._l(t.videos,function(e){return r("div",{key:e.code,staticClass:"col-12 col-md-6 col-lg-4 col-xl-3",class:{"col-md-12":e.focus,"col-lg-8":e.focus,"col-xl-6":e.focus,dragging:e.dragging,dragover:e.dragover},style:{order:e.focus?0:e.order+1},attrs:{id:e.code}},[r("div",{staticClass:"border my-1 bg-white"},[r("div",{staticClass:"d-flex py-1 cursor-move",attrs:{draggable:"true"},on:{dragstart:function(r){return t.dragstart_handler(e)},dragend:function(r){return t.dragend_handler(e)},dragenter:function(r){return t.dragenter_handler(e)},dragover:function(r){return r.preventDefault(),t.dragover_handler(e)},dragleave:function(r){return t.dragleave_handler(e)},drop:function(r){return t.drop_handler(e)},click:function(r){return t.dragclick_handler(e)}}},[r("b-dropdown",{staticClass:"mx-1",attrs:{size:"sm",split:"",text:"CH"+(e.order+1),variant:"success"},on:{click:function(r){return t.focusVideo(e)}}},[r("b-dropdown-text",{staticStyle:{width:"275px"}},[r("b-form-input",{attrs:{size:"sm",value:e.code,disabled:""}})],1)],1),t._v(" "),r("div",{staticClass:"mx-1 ml-auto"},[r("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:function(r){return t.removeVideo(e)}}},[t._v("✕")])],1)],1),t._v(" "),r("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:e.url,allowfullscreen:"",draggable:"false"}})],1)])}),0):r("div",{staticClass:"py-5 text-center text-secondary"},[r("h6",[t._v("Watch Live from YouTube, Twitch, Facebook, Livestream in one page.")])])]),t._v(" "),r("div",{},[r("div",{staticClass:"container-fluid mw-1140 py-2"},[r("b-input-group",{attrs:{prepend:"Share",size:"sm"}},[r("b-form-input",{attrs:{id:t.export_url_id,disabled:""},model:{value:t.export_url,callback:function(e){t.export_url=e},expression:"export_url"}}),t._v(" "),r("b-input-group-append",[r("b-button",{attrs:{variant:"secondary"},on:{click:function(e){return t.copyUrl()}}},[t._v("Copy URL")])],1)],1)],1),t._v(" "),r("div",{staticClass:"container-fluid mw-1140 py-2"},[r("div",{staticClass:"d-flex"},[r("div",{staticClass:"mr-1 flex-fill"}),t._v(" "),r("div",{staticClass:"mx-1 p-2 small"},[t._v("\r\n                    Version: "+t._s(t.version)+"\r\n                ")]),t._v(" "),t._m(0),t._v(" "),t._m(1)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mx-1"},[e("a",{attrs:{href:"https://extradition.g0vhk.io/index-en.html",target:"_blank"}},[e("img",{attrs:{src:"images/theme/Bauhinia-32px.png",title:"Hong Kong Anti Extradition Bill"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ml-1"},[e("a",{attrs:{href:"https://github.com/oceanxdds/live_monitor",target:"_blank"}},[e("img",{attrs:{src:"images/theme/GitHub-Mark-32px.png",title:"GitHub"}})])])}],!1,null,null,null).exports;o.default.use(i.a),o.default.use(s.a),o.default.use(c.a),o.default.use(u.a),o.default.use(v.a),o.default.use(p.a),o.default.use(m.a),new o.default({el:"app",render:function(t){return t(z)}})},87:function(t,e,r){var o=r(392);"string"==typeof o&&(o=[[t.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(394)(o,n);o.locals&&(t.exports=o.locals)}},[[196,1,2]]]);