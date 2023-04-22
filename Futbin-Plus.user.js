// ==UserScript==
// @name        Futbin Plus
// @namespace   iN4sser
// @match       *://*.futbin.com/*/squad/*
// @match       *://*.futbin.com/*/player/*
// @run-at      document-end
// @grant       none
// @version     1
// @author      Nasser Alrayes
// @description Display total player rating statistics on Futbin Squad pages for SBC.
// ==/UserScript==

// Squad rating statistics
function displayTotalPlayerRating() {
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
  }

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

  displayTotalPlayerRating();


  // YouTube Player Review
  function addYouTubeButton() {
    alert("Hello! I am an alert box!!");

    'use strict';

    const playerName = document.querySelector('.pcdisplay-name').textContent.trim();
    const searchUrl = `https://www.youtube.com/@InceptionFC/search?query=${playerName}`;
    const iconUrl = 'https://www.youtube.com/s/desktop/0953dc72/img/favicon_48x48.png';

    const iconHtml = `<a href="${searchUrl}" target="_blank"><img src="${iconUrl}" style="height: 25px; margin-left: 5px;"></a>`;

    const shareTooltip = document.querySelector('.link-holder.inline-block.pt-2');
    shareTooltip.insertAdjacentHTML('afterend', iconHtml);
  }

  addYouTubeButton(); // Call the function