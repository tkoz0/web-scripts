// ==UserScript==
// @name         pixiv-remove-stupid-empty-div
// @namespace    http://tampermonkey.net/
// @version      2024-05-19
// @description  get rid of the stupid div that takes up a bunch of useless space and gets annoying
// @author       You
// @match        https://www.pixiv.net/en/artworks/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

/*
This time there are variables named to annoy that friend against his favorite Blue Archive character

Just a hard coded 3 second timeout, appears to be enough/reasonable to wait until enough loads so
the new style element is added after the <link> tag for the css so display:none overrides it
*/

let marismells2 = setTimeout(() => {
    let marismells = document.createElement('style');
    marismells.innerText = '.bisbq { display: none; }';
    document.head.appendChild(marismells);
}, 3000);
