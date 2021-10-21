// ==UserScript==
// @name        Whatsapp for POS
// @icon        https://i.imgur.com/r2qkepk.png
// @namespace   Violentmonkey Scripts
// @include     *://api.whatsapp.com/*
// @include     *://web.whatsapp.com/*
// @version     1.1
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
  document.getElementsByClassName('_4sWnG')[0].click();
  setTimeout(window.close,5000);
}

// Hide buttons
GM_addStyle ( `
header._1G3Wr {
    display: none;
}
header._23P3O {
    display: none;
}
` );
