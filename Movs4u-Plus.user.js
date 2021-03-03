  
// ==UserScript==
// @name        Movs4u+
// @namespace   https://www.in4sser.com
// @include       *://*.movs4u.*/*
// @grant       none
// @version     1.0
// @author      iN4sser
// @grant       GM_addStyle
// @updateURL   https://raw.githubusercontent.com/iN4sser/Userscript/raw/main/Movs4u-Plus.user.js
// @downloadURL https://raw.githubusercontent.com/iN4sser/Userscript/raw/main/Movs4u-Plus.user.js
// @description This script will include some mods and fixes for movs4u website
// ==/UserScript==

// Skip The Download Redirection
if (window.location.href.indexOf('movs4u' && 'download_link') > 0) {
    var imgs = document.getElementsByTagName("img");
for(var i=0; i<imgs.length; i++) {
    if(imgs[i].src == "https://www.movs4u.cc/d/d.png") imgs[i].click();
}
}
