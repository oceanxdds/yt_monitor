(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(t,o,e){e(160),t.exports=e(372)},338:function(t,o,e){"use strict";var n=e(74);e.n(n).a},339:function(t,o,e){(t.exports=e(340)(!1)).push([t.i,"\n[v-cloak] { display: none;}\r\n",""])},372:function(t,o,e){"use strict";e.r(o);var n=e(50),r=e(158),s="https://www.youtube.com",c={data:function(){return{url:"",videos:[]}},created:function(){},methods:{addVideo:function(t){var o="";t||(o=this.url.match(/^[a-zA-Z0-9]+$/))&&(t=o[0]),t||this.url.match(s)&&(o=this.url.replace(s,"").match(/v=[a-zA-Z0-9]+/))&&(t=o[0].replace("v=","")),t||this.url.match("https://youtu.be")&&(o=this.url.replace("https://youtu.be","").match(/[a-zA-Z0-9]+/))&&(t=o[0]),t&&(this.videos.filter(function(o){return o.code==t}).length>0||this.videos.push({code:t,focus:!1,url:"https://www.youtube.com/embed/"+t}))},removeVideo:function(t){this.videos=this.videos.filter(function(o){return o.code!=t})},focusVideo:function(t){this.videos.map(function(o){o.focus=o.code==t&&!o.focus})}}},i=(e(338),e(153)),u=Object(i.a)(c,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container-fluid"},[e("b-input-group",{staticClass:"my-3",attrs:{prepend:"YouTube"}},[e("b-form-input",{attrs:{placeholder:"ID, or URL, or Short URL"},model:{value:t.url,callback:function(o){t.url=o},expression:"url"}}),t._v(" "),e("b-input-group-append",[e("b-button",{attrs:{size:"sm",text:"Button",variant:"primary"},on:{click:function(o){return t.addVideo()}}},[t._v("Go")])],1)],1),t._v(" "),e("div",{staticClass:"form-row my-3"},t._l(t.videos,function(o){return e("div",{key:o.code,staticClass:"col-12 col-md-6 col-lg-4 col-xl-3",class:{"col-md-12":o.focus,"col-lg-8":o.focus,"col-xl-6":o.focus}},[e("div",{staticClass:"border"},[t._v("\n                "+t._s(o.code)+"\n                "),e("b-button",{attrs:{variant:"secondary",size:"sm"},on:{click:function(e){return t.focusVideo(o.code)}}},[t._v("Focus")]),t._v(" "),e("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:function(e){return t.removeVideo(o.code)}}},[t._v("×")]),t._v(" "),e("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:o.url,allowfullscreen:""}})],1)])}),0)],1)},[],!1,null,null,null).exports;n.default.use(r.a),new n.default({el:"app",render:function(t){return t(u)}})},74:function(t,o,e){var n=e(339);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(341)(n,r);n.locals&&(t.exports=n.locals)}},[[159,1,2]]]);