  
// ==UserScript==
// @name        Movs4u+
// @namespace   https://www.in4sser.com
// @match       *://www.movs4u.*/download_link/*
// @grant       none
// @version     1.0
// @author      iN4sser
// @grant       GM_addStyle
// @updateURL   https://raw.githubusercontent.com/iN4sser/Userscript/raw/main/Movs4u-Plus.user.js
// @downloadURL https://raw.githubusercontent.com/iN4sser/Userscript/raw/main/Movs4u-Plus.user.js
// @description This script will include some mods and fixes for movs4u website
// ==/UserScript==
var imgs = document.getElementsByTagName("img");
for(var i=0; i<imgs.length; i++) {
    if(imgs[i].src == "https://www.movs4u.cc/d/d.png") imgs[i].click();
}
