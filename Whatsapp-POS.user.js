// ==UserScript==
// @name        Whatsapp for POS
// @icon        https://i.imgur.com/r2qkepk.png
// @namespace   Violentmonkey Scripts
// @include     *://api.whatsapp.com/*
// @include     *://web.whatsapp.com/*
// @version     1.9.2
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
  document.querySelector("#main > footer > div.x1n2onr6.xhtitgo.x9f619.x78zum5.x1q0g3np.xuk3077.x193iq5w.x122xwht.x1bmpntp.xy80clv.xgkeump.x26u7qi.xs9asl8.x1swvt13.x1pi30zi.xnpuxes.copyable-area > div > span:nth-child(2) > div > div._ak1r > div.x123j3cw.xs9asl8.x9f619.x78zum5.x6s0dn4.xl56j7k.x1ofbdpd.x100vrsf.x1fns5xo > button").click();
  setTimeout(window.close,7000);
}

// Hide buttons
GM_addStyle ( `
header._1G3Wr, ._3iu7m, header._23P3O, .ldL67._2i3T7._191H_, ._2i3w0 {
    display: none;
}
` );
