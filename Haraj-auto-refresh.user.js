// ==UserScript==
// @name     تحديث تلقائي للإعلانات - haraj.com.sa
// @name:en     haraj.com.sa - Auto Update
// @namespace   https://www.in4sser.com
// @match       *://haraj.com.sa/*
// @grant       none
// @version     1.5.3
// @author      iN4sser
// @grant       GM_addStyle
// @downloadURL https://github.com/iN4sser/Userscript/raw/main/Haraj-auto-refresh.user.js
// @updateURL   https://github.com/iN4sser/Userscript/raw/main/Haraj-auto-refresh.user.js
// @description هذا السكربت سيقوم بتحديث اعلاناتك مباشرة بمجرد الدخول عليها
// @description:en This script will auto-update any post you open in your browser
// @require  https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// ==/UserScript==

setTimeout(function() {
 Array.prototype.forEach.call(document.getElementsByTagName('button'), function(elem) {
	if (elem.innerHTML.indexOf('تحديث') > -1) {
		document.querySelector("#__next > div > div.grid.max-w-7xl.grid-cols-1.gap-2.px-2.md\\:mx-auto.lg\\:grid-cols-4 > div.col-span-full.md\\:col-span-3 > div.px-3 > div.relative > div > div > button:nth-child(2)").click()
	}
});
}, 2500);
