(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{180:function(t,e,n){n(181),t.exports=n(434)},375:function(t,e,n){"use strict";var o=n(77);n.n(o).a},376:function(t,e,n){(t.exports=n(377)(!1)).push([t.i,"\n[v-cloak] { display: none;}\n.mw-1140{ max-width:1140px;\n}\n.bg-custom{ background-color:#f0f0f0;\n}\r\n",""])},434:function(t,e,n){"use strict";n.r(e);var o=n(33),a=n(175),s=n.n(a),i=n(176),r=n.n(i),c=n(177),l=n.n(c),d=n(178),u=n.n(d),v=n(179),h=n.n(v),p=n(119),f=n.n(p),m="https://www.youtube.com",b="https://www.youtube-nocookie.com/embed",_="https://www.facebook.com",g="https://www.facebook.com/plugins/video.php?href=",w="https://livestream.com",y={data:function(){return{version:"190617",url:"",exportUrlId:"expUrlId",videos:[],last_me:"",last_g0v:""}},watch:{hash:function(){window.location.hash=this.hash}},computed:{hash:function(){return"#"+this.videos.map(function(t){return t}).sort(function(t,e){return t.order-e.order}).map(function(t){return t.type+":"+t.code}).join(",")},export_url:function(){return"https://oceanxdds.github.io/live_monitor/"+this.hash}},created:function(){window.location.hash&&this.addVideo(window.location.hash.substr(1))},methods:{addVideo:function(t){var e=this;(t=t||this.url).split(/ |,/).filter(function(t){return t}).forEach(function(t){var n="",o="",a="",s="";n||(o=t.match(/^[a-zA-Z0-9-_:.]+$/))&&(2==(o=(n=o[0]).split(":")).length&&"yt"==o[0]?(n=o[1],a=b+"/"+n,s="yt"):2==o.length&&"tt"==o[0]?(a="https://player.twitch.tv/?channel="+(n=o[1])+"&autoplay=false",s="tt"):3==o.length&&"fb"==o[0]?(n=o[1]+":"+o[2],a=g+_+"/"+o[1]+"/videos/"+o[2]+"&autoplay=false",s="fb"):3==o.length&&"ls"==o[0]?(n=o[1]+":"+o[2],a=w+"/accounts/"+o[1]+"/events/"+o[2]+"/player",s="ls"):4==o.length&&"ls"==o[0]?(n=o[1]+":"+o[2]+":"+o[3],a=w+"/accounts/"+o[1]+"/events/"+o[2]+"/videos/"+o[3]+"/player",s="ls"):(a=b+"/"+n,s="yt")),!n&&t.match(m)&&(o=t.replace(m,"").match(/v=[a-zA-Z0-9-_.]+/))&&(n=o[0].replace("v=",""),a=b+"/"+n,s="yt"),!n&&t.match(m)&&(o=t.replace(m,"").match(/embed\/([a-zA-Z0-9-_.]+)/))&&(n=o[1],a=b+"/"+n,s="yt"),!n&&t.match("https://youtu.be")&&(o=t.replace("https://youtu.be","").match(/[a-zA-Z0-9-_.]+/))&&(n=o[0],a=b+"/"+n,s="yt"),!n&&t.match("https://www.twitch.tv")&&(o=t.replace("https://www.twitch.tv","").match(/[a-zA-Z0-9-_.]+/))&&(a="https://player.twitch.tv/?channel="+(n=o[0])+"&autoplay=false",s="tt"),!n&&t.match(_)&&(o=t.replace(_,"").match(/\/([a-zA-Z0-9-_.]+)\/videos\/(\d+)/))&&(n=o[1]+":"+o[2],a=g+_+"/"+o[1]+"/videos/"+o[2]+"&autoplay=false",s="fb"),!n&&t.match(w)&&(o=t.replace(w,"").match(/accounts\/(\d+)\/events\/(\d+)\/videos\/(\d+)/))&&(n=o[1]+":"+o[2]+":"+o[3],a=w+"/accounts/"+o[1]+"/events/"+o[2]+"/videos/"+o[3]+"/player",s="ls"),!n&&t.match(w)&&(o=t.replace(w,"").match(/accounts\/(\d+)\/events\/(\d+)/))&&(n=o[1]+":"+o[2],a=w+"/accounts/"+o[1]+"/events/"+o[2]+"/player",s="ls"),n&&(e.videos.filter(function(t){return t.code==n}).length>0||e.videos.push({code:n,focus:!1,url:a,type:s,order:e.videos.length}))}),this.url=""},removeVideo:function(t){this.videos.splice(this.videos.indexOf(t),1),this.updateOrder()},focusVideo:function(t){this.videos.forEach(function(e){e.focus=e.code==t.code&&!e.focus})},moveLeft:function(t){if(0!=t.order){var e=this.videos.filter(function(e){return e.order==t.order-1})[0],n=[t.order,e.order];e.order=n[0],t.order=n[1]}},moveRight:function(t){if(t.order!=this.videos.length-1){var e=this.videos.filter(function(e){return e.order==t.order+1})[0],n=[e.order,t.order];t.order=n[0],e.order=n[1]}},updateOrder:function(){this.videos.map(function(t){return t}).sort(function(t,e){return t.order-e.order}).forEach(function(t,e){t.order=e})},copyUrl:function(){var t=document.createRange();t.selectNode(document.getElementById(this.exportUrlId));var e=window.getSelection();e.removeAllRanges(),e.addRange(t),document.execCommand("copy"),e.removeAllRanges()},syncLive:function(){var t=this;f.a.get("https://oceanxdds.github.io/live_monitor/channel.txt",{params:{t:(new Date).getTime()}}).then(function(e){e.data!=t.last_me&&(t.last_me=e.data,t.addVideo(e.data))}),f.a.get("https://ncehk2019.github.io/nce-live-datasrc/lives.json",{params:{time:(new Date).getTime()}}).then(function(e){if(e.data&&e.data.lives){var n=e.data.lives.filter(function(t){return t.active}).map(function(t){return t["#id"]});t.last_g0v!=n.join()&&(t.last_g0v=n.join(),n.forEach(function(e){t.addVideo(e)}))}})}}},x=(n(375),n(174)),k=Object(x.a)(y,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"shadow-sm"},[n("div",{staticClass:"container-fluid mw-1140 py-2"},[n("div",{staticClass:"d-flex"},[n("div",{staticClass:"mr-1"},[n("b-button",{attrs:{size:"sm",pill:"",variant:"success"},on:{click:function(e){return t.syncLive()}}},[t._v("I ♥ HK")])],1),t._v(" "),n("div",{staticClass:"ml-1 flex-grow-1"},[n("b-input-group",{attrs:{prepend:"Source",size:"sm"}},[n("b-form-input",{attrs:{placeholder:"YouTube, Twitch, Facebook, Livestream"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addVideo()}},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),t._v(" "),n("b-input-group-append",[n("b-button",{on:{click:function(e){return t.addVideo()}}},[t._v("Enter")])],1)],1)],1)])])]),t._v(" "),n("div",{staticClass:"container-fluid"},[t.videos.length?n("div",{staticClass:"form-row py-3"},t._l(t.videos,function(e){return n("div",{key:e.code,staticClass:"col-12 col-md-6 col-lg-4 col-xl-3",class:{"col-md-12":e.focus,"col-lg-8":e.focus,"col-xl-6":e.focus},style:{order:e.focus?0:e.order+1}},[n("div",{staticClass:"border my-1"},[n("div",{staticClass:"d-flex py-1"},[n("div",{staticClass:"mx-1"},[n("b-button",{attrs:{variant:"success",size:"sm"},on:{click:function(n){return t.focusVideo(e)}}},[t._v("CH"+t._s(e.order+1))])],1),t._v(" "),n("div",{staticClass:"mx-1"},[n("b-form-input",{attrs:{size:"sm",value:e.type+":"+e.code,disabled:""}})],1),t._v(" "),n("div",{staticClass:"mx-1"},[n("b-button-group",[n("b-button",{attrs:{variant:"secondary",size:"sm"},on:{click:function(n){return t.moveLeft(e)}}},[t._v("<")]),t._v(" "),n("b-button",{attrs:{variant:"secondary",size:"sm"},on:{click:function(n){return t.moveRight(e)}}},[t._v(">")])],1)],1),t._v(" "),n("div",{staticClass:"mx-1 ml-auto"},[n("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:function(n){return t.removeVideo(e)}}},[t._v("✕")])],1)]),t._v(" "),n("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:e.url,allowfullscreen:""}})],1)])}),0):n("div",{staticClass:"py-5 text-center text-secondary"},[n("h6",[t._v("Watch Live from YouTube, Twitch, Facebook, Livestream in one page.")])])]),t._v(" "),n("div",{},[n("div",{staticClass:"container-fluid mw-1140 py-2"},[n("b-input-group",{attrs:{prepend:"Share",size:"sm"}},[n("b-form-input",{attrs:{id:t.exportUrlId,disabled:""},model:{value:t.export_url,callback:function(e){t.export_url=e},expression:"export_url"}}),t._v(" "),n("b-input-group-append",[n("b-button",{attrs:{variant:"secondary"},on:{click:function(e){return t.copyUrl()}}},[t._v("Copy URL")])],1)],1)],1),t._v(" "),n("div",{staticClass:"container py-2"},[n("div",{staticClass:"d-flex"},[n("div",{staticClass:"mr-1 flex-grow-1"}),t._v(" "),n("div",{staticClass:"ml-auto mx-1 p-2 small"},[t._v("\r\n                    Version: "+t._s(t.version)+"\r\n                ")]),t._v(" "),t._m(0),t._v(" "),t._m(1)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mx-1"},[e("a",{attrs:{href:"https://extradition.g0vhk.io/index-en.html",target:"_blank"}},[e("img",{attrs:{src:"images/theme/Bauhinia-32px.png",title:"Hong Kong Anti Extradition Law"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ml-1"},[e("a",{attrs:{href:"https://github.com/oceanxdds/live_monitor",target:"_blank"}},[e("img",{attrs:{src:"images/theme/GitHub-Mark-32px.png",title:"GitHub"}})])])}],!1,null,null,null).exports;o.default.use(s.a),o.default.use(r.a),o.default.use(l.a),o.default.use(u.a),o.default.use(h.a),new o.default({el:"app",render:function(t){return t(k)}})},77:function(t,e,n){var o=n(376);"string"==typeof o&&(o=[[t.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(378)(o,a);o.locals&&(t.exports=o.locals)}},[[180,1,2]]]);