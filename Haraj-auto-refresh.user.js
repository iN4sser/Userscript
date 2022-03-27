// ==UserScript==
// @name        تحديث تلقائي للإعلانات - haraj.com.sa
// @namespace   https://www.in4sser.com
// @match       *://haraj.com.sa/*
// @grant       none
// @version     1.4
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
		document.querySelector("#root > div > div.postWrapper > div.postMain > div.actions_wrapper.author_actions > button:nth-child(2)").click()
	}
});
}, 2000);
