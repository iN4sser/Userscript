// ==UserScript==
// @name        haraj.com.sa - Dark Mode
// @namespace   https://www.in4sser.com
// @match       *://haraj.com.sa/*
// @grant       none
// @version     1.2
// @author      iN4sser
// @grant       GM_addStyle
// @icon        https://v8-cdn.haraj.com.sa/assets/images/icon_96x96.5e07e9b4868f8e0113751d416f54a860.png
// @updateURL   https://github.com/iN4sser/Userscript/raw/main/Haraj-dark-mode.user.js
// @downloadURL https://github.com/iN4sser/Userscript/raw/main/Haraj-dark-mode.user.js
// @description هذا السكربت سيقوم باضافة الوضع الليلي في موقع حراج
// @require  https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// ==/UserScript==
GM_addStyle ( `
body, .header, .fFKWfs, #bodyTEXT, .ddm_wrapper{
  background: #15202b !important;
}
.kiyHpe, .iGsYXQ, .post.even, .headLinks, input.form-control, .postWrapper .postMain .details, .postWrapper .postMain .add_comment_wrapper textarea, .postWrapper .postMain .bottom_meta_wrapper .post_id_wrapper, ul.tabs_list.supTabs.list-container, .follow-switch-wrap, .singleContent, .postWrapper .postMain .comment_list_wrapper .comment_wrapper, .profile_content #profile_container .profile_header .cover{
  background-color: rgb(30, 39, 50) !important;
}
.post.odd, .postWrapper .postMain .details .post_header .post_header_wrapper, .profile_content #profile_container .profile_header .content{
  background-color: #15202b !important;
}
footer, .Box_unique121, .postWrapper .postMain .actions_wrapper, .postWrapper .postMain .tags_wrapper, .random-help-message, .addPost, .chat .messenger .message-list{
  background: rgb(30, 39, 50) !important;
}
.btn-info, .btn-primary, button.btn-info, button.btn-primary, input.btn-info, input.btn-primary, .Badge_123, .btn-link, a.next_post_btn, .postWrapper .postMain .tags_wrapper a, .postWrapper .postMain .tags_wrapper a:visited, .postWrapper .postMain .actions_wrapper .action_btn:hover, .btn-success, button.btn-success, input.btn-success, .tag-filters__item.btn, button.reply_btn, .icon_wrapper_com, span.ddm_option:hover{
  color: white !important;
  background-color: #0473c0 !important;
  border-color: unset !important;
}
.postWrapper .postMain .details, .brand-logos--svg, .postWrapper .postMain .comment_list_wrapper .comment_wrapper, .ddm_wrapper{
  border: unset !important;
}
.bhzglv, .ebrfLJ:hover{
  background: #0473c0 !important;
  color: white !important;
}
.postTitle a:link, .green{
  color: #0473c0 !important;
}
.post, .post:last-child {
  border-bottom: 1px dotted #dddddd29 !important;
}
.postTitle a:visited, .table a:visited {
  color: #897e7e;
}
::-webkit-scrollbar-thumb:hover {
  background: #004676;
}
::-webkit-scrollbar-thumb {
  background: #0473c0;
  border-radius: 10px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
.postWrapper .postMain .comment_list_wrapper .comment_wrapper .comment_body{
  color: white;
}
.chat .topics ul li.topic.selected {
    background-color: rgb(0 50 84) !important;
}
.userWrapper{
  background-color: unset;
}
` );
