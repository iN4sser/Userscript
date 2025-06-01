// ==UserScript==
// @name         Phone Number to WhatsApp Url
// @namespace    https://www.in4sser.com
// @match        *://*/*
// @version      1.3
// @author       iN4sser
// @grant        GM_addStyle
// @run-at       document-end
// @icon         https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png
// @updateURL    https://github.com/iN4sser/Userscript/raw/main/Phone-Number-to-WhatsApp-Url.user.js
// @downloadURL  https://github.com/iN4sser/Userscript/raw/main/Phone-Number-to-WhatsApp-Url.user.js
// @description  هذا السكربت سيقوم بتحويل ارقام الجوالات في اي موقع إلى روابط واتس اب
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// ==/UserScript==

function convertPhoneLinksToWhatsApp() {
    document.querySelectorAll('a[href^="tel:"]').forEach(function (a) {
        let phoneNumber = a.href.replace(/^tel:/, '').replace(/\s/g, '').replace(/[^0-9+]/g, '');

        // If the number starts with 05, replace it with 9665
        if (/^05/.test(phoneNumber)) {
            phoneNumber = phoneNumber.replace(/^05/, '9665');
        }

        a.href = 'https://wa.me/' + phoneNumber;
    });
}

// Initial run
convertPhoneLinksToWhatsApp();

// Keep checking every 100ms
setInterval(convertPhoneLinksToWhatsApp, 100);
