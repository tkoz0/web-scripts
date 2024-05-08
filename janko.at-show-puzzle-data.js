// ==UserScript==
// @name         janko.at-show-puzzle-data
// @namespace    http://tampermonkey.net/
// @version      2024-05-08
// @description  try to take over the world!
// @author       You
// @match        https://www.janko.at/Raetsel/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

window.addEventListener('load', () => {
    let data = document.getElementById('data');
    if (data !== undefined) {
        let text = document.createElement('verbatim');
        text.innerText = data.innerText;
        let textcontainer = document.createElement('details');
        let textsummary = document.createElement('summary');
        textsummary.innerHTML = 'show puzzle data';
        textcontainer.appendChild(textsummary);
        let textdiv = document.createElement('div');
        textdiv.style = 'border: 2px solid black; background: white; font-family: monospace;';
        textdiv.appendChild(text);
        textcontainer.appendChild(textdiv);
        document.body.appendChild(textcontainer);
    }
});
