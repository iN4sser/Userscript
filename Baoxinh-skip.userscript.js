// ==UserScript==
// @name        Direct Link - Fembed API
// @namespace   Violentmonkey Scripts
// @match       *://tool.baoxinh.com/forex.cg*
// @grant       none
// @version     1.0
// @author      iN4sser
// @grant       GM_addStyle
// @description 2/28/2021, 10:10:31 PM
// @require  https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// ==/UserScript==
Array.from(document.getElementsByClassName('btn bt-success hidden')).forEach(function(v){v.removeAttribute("disabled");});
setTimeout(function() {
    document.getElementById('gotolink').click();
}, 0);

GM_addStyle ( `
    .panel-heading.text-center, .col-md-12, .navbar-default, div#timer, footer.container, .filename{
    display: none !important;
}
.hidden {
    visibility: unset !important;
    height: unset !important;
    overflow: unset !important;
    display: block;
}
button[disabled], html input[disabled], button#gotolink {
    cursor: pointer;
    display: block !important;
}
button#gotolink {
    visibility: visible !important;
    text-align: center;
    margin: 0 auto;
    width: 100%;
    line-height: 5;
}
body{
  visibility: hidden !important;
}
` );
