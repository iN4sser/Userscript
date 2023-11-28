// ==UserScript==
// @name        Google Form Feedback Automation
// @namespace   Nasser Alrayes
// @match       *://*.google.*/forms/*
// @match       https://docs.google.com/*
// @grant       GM_addStyle
// @downloadURL https://github.com/iN4sser/Userscript/raw/main/Google-Form-Feedback-Automation.user.js
// @updateURL   https://github.com/iN4sser/Userscript/raw/main/Google-Form-Feedback-Automation.user.js
// @version     1.4
// @author      iN4sser
//@require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @description 10/5/2023, 1:10:51 PM
// ==/UserScript==
(function() {
    'use strict';

    // Add CSS to hide elements
    var style = document.createElement('style');
    style.innerHTML = '.DqBBlb, .I3zNcc.yF4pU, .v1CNvb.sId0Ce { display: none; } .teQAzf { width: 80% !important; } .nWQGrd.zwllIb.UHZXDe { width: 19%; }';
    document.head.appendChild(style);

    // Function to click the "Next" button
    function clickNextButton() {
        var nextButton = document.querySelector("#mG61Hd > div.RH5hzf.RLS9Fe > div > div.ThHDze > div > div.lRwqcd > div:nth-child(2)");
        if (nextButton) {
            nextButton.click();
        }
    }

    // Function to handle the click event on the specified class
    function handleClassClick() {
        var classElement = document.querySelector(".nWQGrd.zwllIb.UHZXDe");

        if (classElement) {
            classElement.addEventListener('click', function() {
                clickNextButton();
            });
        }
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

    // Function to handle clicks on any child element to trigger a click on the submit button
    function handleChildClick(childNumber) {
        var childElement = document.querySelector("#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div > div > div > div.oyXaNc > div > div > span > div > div:nth-child(" + childNumber + ")");

        if (childElement) {
            childElement.addEventListener('click', function() {
                clickSubmitButton();
            });
        }
    }

    // Function to click the submit button
    function clickSubmitButton() {
        var submitButton = document.querySelector("#mG61Hd > div.RH5hzf.RLS9Fe > div > div.ThHDze > div > div.lRwqcd > div > div.e19J0b.CeoRYc");
        if (submitButton) {
            submitButton.click();
        }
    }

    // Function to handle other elements
    function handleOtherElements() {
        for (let i = 1; i <= 9; i++) {
            handleChildClick(i);
        }

        var selector = "#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div > div > div > div.oyXaNc > div > div > span > div > div";
        var elements = document.querySelectorAll(selector);

        elements.forEach(function(element) {
            element.addEventListener('click', function() {
                clickNextButton();
            });
        });
    }

    // Call the function to handle the click event
    handleClassClick();

    // Call the function to click link inside class "c2gzEf"
    clickLinkInsideC2gzEf();

    // Call the function to handle clicks on any child element
    handleOtherElements();

})();
