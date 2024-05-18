// ==UserScript==
// @name         pixiv-popular-works-links
// @namespace    http://tampermonkey.net/
// @version      2024-05-07
// @description  show clickable links for the popular works you can see without premium
// @author       You
// @match        https://www.pixiv.net/en/tags/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hibbard.eu
// @grant        none
// ==/UserScript==

/*
This depends on finding things by class names. Hopefully they don't change or the script will break. Pixiv has class names that look randomly generated.

Why are the variables named "yuukasmells"? Because I asked someone for a variable name and they picked something against by favorite Blue Archive character.
*/

let yuukasmells = function() {

    //let links = [].slice.call($('.sc-jn70pf-0')[0].children[1].children).map(a => a.children[0].children[0].children[0].children[0].href);
    //let links = [].slice.call(document.getElementsByClassName('sc-jn70pf-0')[0].children[1].children).map(a => a.children[0].children[0].children[0].children[0].href);

    // pull links from the premium content container thing
    let links = [...document.getElementsByClassName('sc-jn70pf-3')[0].getElementsByTagName('a')].map(x => x.href);

    // make the background change on hover so it is easier to see which one you click on
    let yuukastyle = document.createElement('style');
    yuukastyle.innerHTML = '.yuukasmells:hover { background: #625c96; }';
    document.head.appendChild(yuukastyle);

    // the list that will contain clickable links
    let linklist = document.createElement('ol');

    // put links in the list
    document.getElementsByClassName('sc-jgyytr-0')[0].appendChild(linklist);
    links.forEach(link => {
        let linkelem = document.createElement('a');
        linkelem.classList.add('yuukasmells');
        linkelem.style.display = 'block';
        linkelem.target = '_blank';
        linkelem.href = link;
        linkelem.innerHTML = link;
        linklist.appendChild(linkelem);
    });

    // finally put the link on the page
    document.getElementsByClassName('sc-jgyytr-0')[0].appendChild(linklist);

}

/*
the interval seems to keep repeating forever, no idea why
so the counter makes it stop after a while
this thing keeps trying to make the link list until the pixiv javascript has loaded it
*/

let yuukasmellscounter = 0;
let yuukasmells2 = setInterval(() => {

    ++yuukasmellscounter;
    if (yuukasmellscounter > 10) {
        clearInterval(yuukasmells2);
        return;
    }

    // test if the thing containing the links is present and has 4 links
    let testvalue = document.getElementsByClassName('sc-jn70pf-3');
    if (testvalue.length && testvalue[0].getElementsByTagName('a').length === 4) {
        clearInterval(yuukasmells2);
        yuukasmells();
    }

}, 1000);
