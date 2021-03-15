// ==UserScript==
// @name        Download Directly
// @namespace   Violentmonkey Scripts
// @include     *://fem*.com/f/*
// @include     *://tool.baoxinh.com/*
// @include     *://*goo-2o*/*
// @include     *://*.movs4u.*/*
// @include     *://*1fichier*/*
// @include     *://*doodrive*/*
// @version     1.0
// @author      iN4sser
// @description 3/13/2021, 11:42:34 AM
// @run-at      document-idle
// @grant       GM_addStyle
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @updateURL   https://github.com/iN4sser/Userscript/raw/main/Download-Directly.user.js
// @downloadURL https://github.com/iN4sser/Userscript/raw/main/Download-Directly.user.js
// ==/UserScript==
// Start of Fembed auto Downloader
if (window.location.href.indexOf('femax20') > 0) {
	var oldUrl = window.location.href;
	var newURL = "https://tool.baoxinh.com/fembed.cg?url=" + oldUrl
	window.location.replace(newURL);
}
// Auto Select 720p to Download
Array.prototype.forEach.call(document.getElementsByTagName('a'), function(elem) {
	if (elem.innerHTML.indexOf('DOWNLOAD LINK 720p') > -1) {
		window.location = elem.href;
	}
});
// Auto Click the "Get Link" Button
Array.from(document.getElementsByClassName('btn bt-success hidden')).forEach(function(v) {
	v.removeAttribute("disabled");
});
setTimeout(function() {
	document.getElementById('gotolink').click();
}, 0);
// End of Fembed auto Downloader
// Akoam Skip Redirection on download
if (window.location.href.indexOf('goo-2o') > 0) {
Array.prototype.forEach.call(document.getElementsByTagName('a'), function (elem) {
    if (elem.innerHTML.indexOf('Click Here') > -1) {
        window.location = elem.href;
    }
});
}
// Skip The Download Redirection on movs4u
if (window.location.href.indexOf('movs4u' && 'download_link') > 0) {
    var imgs = document.getElementsByTagName("img");
for(var i=0; i<imgs.length; i++) {
    if(imgs[i].src == "https://www.movs4u.cc/d/d.png") imgs[i].click();
}
}
// 1Fichier auto Downloader/Cleaner
if (window.location.href.indexOf('1fichier') > 0) {
	GM_addStyle ( `
div#cookie_box {
    display: none !important;
}
` );
}
// 1Fichier auto Downloader/Cleaner
if (window.location.href.indexOf('doodrive') > 0) {
	GM_addStyle ( `
.uk-hidden, [hidden] {
    display: block!important;
}
` );
}
