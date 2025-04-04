// ==UserScript==
// @name         Snapchat Chats Mass Delete
// @namespace    iN4sser
// @match        https://www.snapchat.com/web/*
// @grant        GM_addStyle
// @version      2.2
// @author       iN4sser
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @description  Clicks ONLY the correct delete button using SVG path match
// ==/UserScript==

GM_addStyle(`
    #toggleDeleteBtn {
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 9999;
        padding: 8px 16px;
        background-color: #ff4444;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-family: Arial, sans-serif;
    }
    #toggleDeleteBtn:hover {
        background-color: #cc0000;
    }
    #toggleDeleteBtn.active {
        background-color: #00cc00;
    }
`);

$(document).ready(function () {
    const toggleButton = $('<button id="toggleDeleteBtn">Start Auto-Delete</button>');
    $('body').append(toggleButton);

    let isActive = false;

    $('#toggleDeleteBtn').on('click', function () {
        isActive = !isActive;
        $(this)
            .text(isActive ? 'Stop Auto-Delete' : 'Start Auto-Delete')
            .toggleClass('active', isActive);

        console.log(isActive ? '✅ Auto-delete ON' : '⏹️ Auto-delete OFF');
    });

    // Target SVG path 'd' attribute
    const targetPathD = "M9.75 4.624a.626.626 0 0 0 0 1.252h4.5a.626.626 0 1 0 0-1.252h-4.5ZM6 6.874a.626.626 0 1 0 0 1.252h.874v7.624a2.876 2.876 0 0 0 2.876 2.876h4.5a2.876 2.876 0 0 0 2.876-2.876V8.126h.499a.626.626 0 1 0 0-1.252H6Zm9.873 1.252H8.127v7.624c0 .897.727 1.624 1.624 1.624h4.5c.897 0 1.623-.727 1.623-1.624V8.126Zm-5.373.998c.346 0 .626.28.626.626v6a.626.626 0 1 1-1.252 0v-6c0-.346.28-.626.626-.626Zm3 0c.346 0 .626.28.626.626v6a.626.626 0 1 1-1.252 0v-6c0-.346.28-.626.626-.626Z";

    const observer = new MutationObserver((mutations) => {
        if (!isActive) return;

        mutations.forEach((mutation) => {
            if (!mutation.addedNodes.length) return;

            $(mutation.addedNodes).each(function () {
                const $node = $(this);

                // Look for all .NcaQH buttons in this added node
                $node.find('button.NcaQH').each(function () {
                    const btn = this;
                    const svgPath = $(btn).find('path').attr('d');

                    if (svgPath && svgPath.trim() === targetPathD.trim()) {
                        console.log('🟢 Matched delete button by path:', btn);
                        setTimeout(() => {
                            btn.click();
                            console.log('🗑️ Clicked matched delete button!');
                        }, 300);
                    } else {
                        console.log('⛔ Ignored button - not matching path');
                    }
                });
            });
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    console.log('🚀 Snapchat SVG-targeted Mass Delete script loaded. Click red button to start.');
});
