// ==UserScript==
// @name        Futbin Plus
// @namespace   iN4sser
// @match       *://*.futbin.com/*/squad/*
// @grant       none
// @version     1
// @author      Nasser Alrayes
// @description Display total player rating statistics on Futbin Squad pages for SBC.
// ==/UserScript==

(function() {
  'use strict';

  const elementList = Array.from(document.querySelectorAll('#area .pcdisplay-rat'));
  const numbers = elementList.reduce((obj, element) => {
    const elementText = element.textContent;
    const elementNumbers = elementText.match(/\d+/g);
    if (elementNumbers) {
      elementNumbers.forEach(number => {
        obj[number] = (obj[number] || 0) + 1;
      });
    }
    return obj;
  }, {});

  const resultDiv = document.createElement('div');
  resultDiv.className = 'TotalRating';
  const resultHtml = Object.entries(numbers).map(([number, count]) => `
    <span class="Number">${number}</span>
    <span class="Count">${count}</span>
    <br>
  `).join('');

  resultDiv.innerHTML = resultHtml;
  document.querySelector('#area').appendChild(resultDiv);
})();

// CSS
const style = document.createElement('style');
style.innerHTML = `
  .TotalRating {
    margin-top: 10px;
  }
  .Number, .Count {
    display: inline-block;
    width: 30px;
    height: 20px;
    margin: 1px;
    font-size: 14px;
    line-height: 1;
    text-align: center;
    padding: 5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: .35s;
    border-radius: 3px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
  }
  .Number {
    background: #00ffae;
    color: #212121;
  }
  .Count {
    background: #292929;
    color: #fff;
  }
`;

document.head.appendChild(style);
