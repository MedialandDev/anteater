/*! anteater 1.0.0 under MIT License copyright 2018 Medialand */
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.anteater=n():e.anteater=n()}("undefined"!=typeof self?self:this,function(){return function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=12)}({12:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.scrape=n.shareRedirect=n.share=n.getMe=n.logout=n.loginRedirect=n.login=n.getLoginStatus=n.init=n.getAccessToken=n.getUserID=n.FACEBOOK_STATUS_NOT_AUTHORIZED=n.FACEBOOK_STATUS_CONNECTED=void 0;var o=(t(13),n.FACEBOOK_STATUS_CONNECTED="connected"),r=(n.FACEBOOK_STATUS_NOT_AUTHORIZED="not_authorized",!1),i={userID:"",accessToken:"",appId:""};n.getUserID=function(){return i.userID},n.getAccessToken=function(){return i.accessToken},n.init=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"v2.10";return r?Promise.resolve():new Promise(function(t){i.appId=e,window.fbAsyncInit=function(){FB.init({appId:e,autoLogAppEvents:!0,xfbml:!0,version:n}),r=!0,t()},function(e,n,t){var o,r=e.getElementsByTagName(n)[0];e.getElementById(t)||(o=e.createElement(n),o.id=t,o.src="//connect.facebook.net/zh_TW/sdk.js",r.parentNode.insertBefore(o,r))}(document,"script","facebook-jssdk")})},n.getLoginStatus=function(){return new Promise(function(e,n){FB.getLoginStatus(function(t){var r=t.status,c=t.authResponse;r===o?(i.userID=c.userID,i.accessToken=c.accessToken,e(i)):n()})})},n.login=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new Promise(function(n,t){FB.login(function(e){var o=e.authResponse;o?(i.userID=o.userID,i.accessToken=o.accessToken,n(i)):t(new Error("Facebook login cancelled"))},{scope:e})})},n.loginRedirect=function(e,n){var t=["client_id="+e,"redirect_uri="+encodeURIComponent(n)];window.location.href="https://www.facebook.com/dialog/oauth?"+t.join("&").toString()},n.logout=function(){return new Promise(function(e){FB.logout(function(n){return e(n)})})},n.getMe=function(){return new Promise(function(e){return FB.api("/me",function(n){return e(n)})})},n.share=function(e){return new Promise(function(n){FB.ui({method:"share",mobile_iframe:!0,href:e},function(e){n(e)})})},n.shareRedirect=function(e,n,t){var o=["app_id="+n,"display=popup","href="+encodeURIComponent(e),"redirect_uri="+encodeURIComponent(t)];window.location.href="https://www.facebook.com/dialog/share?"+o.join("&").toString()},n.scrape=function(e){return new Promise(function(n,t){var o=new XMLHttpRequest;o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.open("POST","https://graph.facebook.com/"),o.onload=function(){200===o.status?n(o.responseText):t(o.status)},o.send("id="+e+"&scrape=true")})}},13:function(e,n,t){"use strict"}})});