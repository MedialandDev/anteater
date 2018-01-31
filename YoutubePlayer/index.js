/*! ml.anteater 1.1.3 under MIT License copyright 2018 Medialand */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("rxjs/Rx"),require("rxjs/Subject")):"function"==typeof define&&define.amd?define(["rxjs/Rx","rxjs/Subject"],t):"object"==typeof exports?exports["ml.anteater"]=t(require("rxjs/Rx"),require("rxjs/Subject")):e["ml.anteater"]=t(e["rxjs/Rx"],e["rxjs/Subject"])}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([,function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchScript=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(2),u=n(3);n(4);var s=!1,l={autoplay:0,controls:1,autohide:1,enablejsapi:1,loop:0,disablekb:1,fs:1,modestbranding:0,showinfo:0,rel:0},c=function(){function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:640,a=this,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:390,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};if(o(this,e),this.loop=!1,!n)throw new Error("invalidate youtube id");this.onReady=new u.Subject,this.onStateChange=new u.Subject,this.onVideoProgress=new u.Subject;var d=r({},l,c);this.loop=1===d.loop,this.player=new YT.Player(t,{width:i,height:s,videoId:n,playerVars:d,events:{onReady:function(e){return a.onReady.next(e)},onStateChange:function(t){var n=t.data;a.onStateChange.next(n),n===e.STATE_ENDED&&1===a.loop&&a.playVideo()}}}),this.intervalId=setInterval(function(){a.onVideoProgress.next(a.getVideoLoadedFraction())},333)}return i(e,[{key:"subscribe",value:function(e,t){var n=this[e+"Subject"];return n?n.subscribe(t):null}},{key:"cueVideoById",value:function(e,t,n){this.player.cueVideoById(e,t,n)}},{key:"loadVideoById",value:function(e,t,n){this.player.loadVideoById(e,t,n)}},{key:"playVideo",value:function(){this.player.playVideo()}},{key:"pauseVideo",value:function(){this.player.pauseVideo()}},{key:"stopVideo",value:function(){this.player.stopVideo()}},{key:"seekTo",value:function(e,t){this.player.seekTo(e,t)}},{key:"setSize",value:function(e,t){this.player.setSize(e,t)}},{key:"getVideoLoadedFraction",value:function(){return this.player&&this.player.getVideoLoadedFraction?this.player.getVideoLoadedFraction():0}},{key:"getPlayer",value:function(){return this.player}},{key:"destroy",value:function(){this.onReady.unsubscribe(),this.onReady=null,this.onStateChange.unsubscribe(),this.onStateChange=null,this.onVideoProgress.unsubscribe(),this.onVideoProgress=null,this.player.destroy(),this.player=null,clearInterval(this.intervalId),this.intervalId=-1}}]),e}();c.ON_READY="onReady",c.ON_STATE_CHANGE="onStateChange",c.STATE_UNSTARTED=-1,c.STATE_ENDED=0,c.STATE_PLAYING=1,c.STATE_PAUSED=2,c.STATE_BUFFERING=3,c.STATE_CUED=5;var d=null,f=function(){return s?Promise.resolve():d||(d=new Promise(function(e){var t=document.createElement("script");t.src="https://www.youtube.com/iframe_api";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n),window.onYouTubeIframeAPIReady=function(){s=!0,d=null,window.onYouTubeIframeAPIReady=null,delete window.onYouTubeIframeAPIReady,e()}}))};t.fetchScript=function(){return a.Observable.fromPromise(f())};t.default=c},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict"}])});