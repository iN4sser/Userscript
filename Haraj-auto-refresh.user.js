// ==UserScript==
// @name        تحديث تلقائي للإعلانات - haraj.com.sa
// @namespace   https://www.in4sser.com
// @match       *://haraj.com.sa/*
// @grant       none
// @version     1.5
// @author      iN4sser
// @grant       GM_addStyle
// @updateURL   https://github.com/iN4sser/Userscript/raw/main/Haraj-auto-refresh.user.js
// @downloadURL https://github.com/iN4sser/Userscript/raw/main/Haraj-auto-refresh.user.js
// @description هذا السكربت سيقوم بتحديث اعلاناتك مباشرة بمجرد الدخول عليها
// @require  https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// ==/UserScript==

setTimeout(function() {
 Array.prototype.forEach.call(document.getElementsByTagName('button'), function(elem) {
	if (elem.innerHTML.indexOf('تحديث') > -1) {
		document.querySelector("#__next > div > div.px-3.xl\\:px-0.mx-auto.grid.max-w-7xl.grid-cols-1.gap-2.lg\\:grid-cols-4 > div.col-span-full.md\\:col-span-3 > div:nth-child(4) > div > div > button:nth-child(2)").click()
	}
});
}, 2000);
