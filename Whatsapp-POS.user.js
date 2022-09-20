// ==UserScript==
// @name        Whatsapp for POS
// @icon        https://i.imgur.com/r2qkepk.png
// @namespace   Violentmonkey Scripts
// @include     *://api.whatsapp.com/*
// @include     *://web.whatsapp.com/*
// @version     1.6
// @author      iN4sser
// @namespace   iN4sser
// @grant       GM_addStyle
// @grant       window.close
// @require     https://code.jquery.com/jquery-3.6.0.min.js
// @license     GPL version 2 or any later version; http://www.gnu.org/licenses/gpl-2.0.txt
// @run-at      document-start
// @description This script will redirect any "api.whatsapp.com" to "web.whatsapp.com" and auto send any text and close the page in 5 sec, and prevent the user from clicking logout
// @updateURL   https://github.com/iN4sser/Userscript/raw/main/Whatsapp-POS.user.js
// @downloadURL https://github.com/iN4sser/Userscript/raw/main/Whatsapp-POS.user.js
// ==/UserScript==

// Redirect
if (location.href.match("api.whatsapp")) {
	location.href = location.href.replace("api", "web");
}

// auto send/quit
window.onload=function(){
  setInterval(autoClick,100);
}
function autoClick(){   
  document.querySelector("#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div._3HQNh._1Ae7k").click();
  setTimeout(window.close,5000);
}

// Hide buttons
GM_addStyle ( `
header._1G3Wr, ._3iu7m, header._23P3O, .ldL67._2i3T7._191H_, ._2i3w0 {
    display: none;
}
` );
