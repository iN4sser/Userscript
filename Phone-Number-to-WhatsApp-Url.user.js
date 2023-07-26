// ==UserScript==
// @name        Phone Number to WhatsApp Url
// @namespace   https://www.in4sser.com
// @match       *://*/*
// @version     1.2
// @author      iN4sser
// @grant       GM_addStyle
// @run-at      document-end
// @icon        https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png
// @updateURL   https://github.com/iN4sser/Userscript/raw/main/Phone-Number-to-WhatsApp-Url.user.js
// @downloadURL https://github.com/iN4sser/Userscript/raw/main/Phone-Number-to-WhatsApp-Url.user.js
// @description هذا السكربت سيقوم بتحويل ارقام الجوالات في اي موقع إلى روابط واتس اب
// @require  https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// ==/UserScript==
document.addEventListener('DOMSubtreeModified', function () {
    document.querySelectorAll('a[href^="tel:"]').forEach(function (a) {
        var phoneNumber = a.href.replace(/^tel:/, '');
        phoneNumber = phoneNumber.replace(/[^0-9+]/g, '');
        phoneNumber = phoneNumber.replace(/\s/g, '');
        a.href = 'https://wa.me/' + phoneNumber;
    });
});

// check if anything on the page has changed every 100ms and replace the tel: links with whatsapp links
setInterval(function () {
    document.dispatchEvent(new Event('DOMSubtreeModified')); // trigger the event
}, 100); // check every 100ms
