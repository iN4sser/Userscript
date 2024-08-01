// ==UserScript==
// @name        Google Form Feedback Automation
// @namespace   Nasser Alrayes
// @match       *://*.google.*/forms/*
// @match       https://docs.google.com/*
// @grant       GM_addStyle
// @downloadURL https://github.com/iN4sser/Userscript/raw/main/Google-Form-Feedback-Automation.user.js
// @updateURL   https://github.com/iN4sser/Userscript/raw/main/Google-Form-Feedback-Automation.user.js
// @version     1.8
// @author      iN4sser
//@require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @description 10/5/2023, 1:10:51 PM
// ==/UserScript==
(function() {
    'use strict';

    // Add CSS to hide elements
    var style = document.createElement('style');
    style.innerHTML = `
        .DqBBlb,
        .I3zNcc.yF4pU,
        .v1CNvb.sId0Ce,
        .lrKTG > .Dq4amc,
        .T2dutf {
            display: none;
        }
        .teQAzf {
            width: 80% !important;
        }
        .nWQGrd.zwllIb.UHZXDe {
            width: 19%;
        }`;
    document.head.appendChild(style);

    // Function to click the buttons after a delay
    function clickButtons() {
        var buttonsSelector = "#mG61Hd > div.RH5hzf.RLS9Fe > div > div.ThHDze > div.DE3NNc.CekdCb > div.lRwqcd > div > div.e19J0b.CeoRYc";
        var buttons = document.querySelectorAll(buttonsSelector);

        // Check if the exclude button is present
        var excludeButtonSelector = "#mG61Hd > div.RH5hzf.RLS9Fe > div > div.ThHDze > div.DE3NNc.CekdCb > div.lRwqcd > div.uArJ5e.UQuaGc.Y5sE8d.VkkpIf.QvWxOd";
        var excludeButton = document.querySelector(excludeButtonSelector);

        // If the exclude button is not present, proceed to click buttons
        if (!excludeButton) {
            // Wait for 0.2 seconds before clicking each button
            buttons.forEach((button, index) => {
                setTimeout(() => {
                    button.click();
                }, index * 200); // 200 milliseconds delay between clicks
            });
        }
    }

    // Function to handle the click event on specified class children
    function handleClassChildrenClick() {
        var classChildrenSelector = "#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div > div > div > div.oyXaNc > div > div > span > div > div";
        var classChildren = document.querySelectorAll(classChildrenSelector);

        classChildren.forEach(child => {
            child.addEventListener('click', function() {
                setTimeout(() => {
                    clickButtons();
                }, 200);
            });
        });
    }

   // Function to click link inside class "c2gzEf"
    function clickLinkInsideC2gzEf() {
        var c2gzEfElement = document.querySelector(".c2gzEf");
        if (c2gzEfElement) {
            var link = c2gzEfElement.querySelector("a");
            if (link) {
                link.click(); // return to submit another answer
            }
        }
    }

    // Call the function to handle the click event
    handleClassChildrenClick();
  
    // Call the function to click link inside class "c2gzEf"
    clickLinkInsideC2gzEf();

})();
