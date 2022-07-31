// ==UserScript==
// @name        Phone Number to WhatsApp Url
// @namespace   https://www.in4sser.com
// @match       *://*/*
// @version     1.0
// @author      iN4sser
// @grant       GM_addStyle
// @run-at      document-end
// @icon        https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png
// @updateURL   https://github.com/iN4sser/Userscript/raw/main/Phone-Number-to-WhatsApp-Url.user.js
// @downloadURL https://github.com/iN4sser/Userscript/raw/main/Phone-Number-to-WhatsApp-Url.user.js
// @description هذا السكربت سيقوم بتحويل ارقام الجوالات في اي موقع إلى روابط واتس اب
// @require  https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// ==/UserScript==
jQuery('a').each(function() {
    this.href = this.href.replace("tel:", "https://web.whatsapp.com/send/?phone=");
});
