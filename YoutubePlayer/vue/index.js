/*! ml.anteater under MIT License copyright 2018 Medialand */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("ml.anteater/YoutubePlayer")):"function"==typeof define&&define.amd?define(["ml.anteater/YoutubePlayer"],t):"object"==typeof exports?exports["ml.anteater"]=t(require("ml.anteater/YoutubePlayer")):e["ml.anteater"]=t(e["ml.anteater/YoutubePlayer"])}("undefined"!=typeof self?self:this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(8),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={name:"anteater-youtubeplayer",player:null,props:{id:{type:String},width:{type:Number,default:640},height:{type:Number,default:390},options:{type:Object}},data:function(){return{domID:"player-"+Date.now()+"-"+Math.floor(9999*Math.random())}},watch:{id:function(e){this.player&&(this.player.cueVideoById(e),this.player.playVideo())}},methods:{createPlayer:function(){var e=this;this.destroyPlayer();var t=new o.default(this.domID,this.id,this.width,this.height,this.options);return t.onStateChange.subscribe(function(t){return e.$emit("stateChange",t)}),t.onVideoProgress.subscribe(function(t){return e.$emit("videoProgress",t)}),t},destroyPlayer:function(){this.player&&(this.player.destroy(),this.player=null,delete this.player)},getPlayer:function(){return this.player?this.player.getPlayer():null}},mounted:function(){var e=this;(0,n.fetchScript)().subscribe(function(){e.player=e.createPlayer()})},beforeDestroy:function(){this.destroyPlayer()}},e.exports=t.default},,,,,function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(6);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(o).default}}),e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r.n(n);for(var u in n)"default"!==u&&function(e){r.d(t,e,function(){return n[e]})}(u);var a=r(9),i=r(7),s=i(o.a,a.a,!1,null,null,null);t.default=s.exports},function(e,t){e.exports=function(e,t,r,n,o,u){var a,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(a=e,i=e.default);var l="function"==typeof i?i.options:i;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId=o);var f;if(u?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},l._ssrRegister=f):n&&(f=n),f){var d=l.functional,c=d?l.render:l.beforeCreate;d?(l._injectStyles=f,l.render=function(e,t){return f.call(t),c(e,t)}):l.beforeCreate=c?[].concat(c,f):[f]}return{esModule:a,exports:i,options:l}}},function(t,r){t.exports=e},function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"anteater-youtubeplayer"},[r("div",{attrs:{id:e.domID}})])},o=[],u={render:n,staticRenderFns:o};t.a=u}])});