  
// ==UserScript==
// @name        Movs4u+
// @namespace   https://www.in4sser.com
// @include       *://*.movs4u.*/*
// @grant       none
// @version     1.0
// @author      iN4sser
// @grant       GM_addStyle
// @updateURL   https://raw.githubusercontent.com/iN4sser/Userscript/raw/main/Movs4u-Plus.user.js
// @downloadURL https://raw.githubusercontent.com/iN4sser/Userscript/raw/main/Movs4u-Plus.user.js
// @description This script will include some mods and fixes for movs4u website
// ==/UserScript==

// Skip The Download Redirection
if (window.location.href.indexOf('movs4u' && 'download_link') > 0) {
    var imgs = document.getElementsByTagName("img");
for(var i=0; i<imgs.length; i++) {
    if(imgs[i].src == "https://www.movs4u.cc/d/d.png") imgs[i].click();
}
}

// Styling
GM_addStyle ( `
div#dt_contenedor, body{
  direction:rtl !important;
}
.module .sidebar{
  float: left;
  right: unset;
  left: 0;
}
.module .content{
  float: right;
  margin-right: unset;
  margin-left: 340px;
}
.dt_mainmeta nav.genres ul li i, .dt_mainmeta nav h2:before, .module .content header span, .headitems{
  float: left;
}
.module .content header h1, .module .content header h2, header.main .hbox .logo, .head-main-nav ul.main-header li a, .head-main-nav ul.main-header li, .head-main-nav ul.main-header, .head-main-nav, .dtsingle .content, ul.smenu, .single_tabs, #seasons .se-c .se-q span.se-t, #seasons .se-c .se-q, #single .content .sbox, #serie_contenido, #seasons, #seasons .se-c, #seasons .se-c .se-a ul.episodios li .episodiotitle, #seasons .se-c .se-a ul.episodios li .imagen, #seasons .se-c .se-a ul.episodios li .numerando, ul.smenu li, .sbox .custom_fields, .sbox .custom_fields b.variante, .owl-carousel .owl-item{
  float: right;
}
header.main .hbox .search form input[type=text]{
  text-align: center;
}
.dtsingle .sidebar{
  position: relative;
}
#seasons .se-c .se-q{
  padding-right: 105px;
  padding-left: unset;
}
#seasons .se-c .se-a ul.episodios li .episodiotitle{
  padding-right: 190px;
  padding-left: unset;
}
#seasons .se-c .se-q span.se-t, .owl-wrapper{
  right: 0;
  left: unset;
}
` );
