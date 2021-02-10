/* eslint-disable no-useless-catch */
const { JSDOM } = require('jsdom');
const axios = require('axios');
const fs = require('fs');

const initURL = 'https://www.wfmu.org/playlists/TD';
const allRecords = [];

const arrayEach = (object, callback) => {
    let i = 0;
    const length = object ? object.length : 0;
    if (typeof length == 'number' && length > -1) {
        while (i < length) {
            callback(object[i], i, object);
            i += 1;
        }
    }
};

const makeRecord = (el) => {
    // First site
    const date = el.textContent.substring(1, el.textContent.indexOf(':')).trim();
    const title = el.querySelector('b').innerHTML;
    const allAnchors = el.querySelectorAll('a');
    let showAnchor;

    arrayEach(allAnchors, async (anchor) => {
        const hrefAttr = anchor.getAttribute('href');
        if (hrefAttr && hrefAttr.includes('/playlist'))
            showAnchor = `https://www.wfmu.org${hrefAttr}`;
    });

    return { date, title, showAnchor };
};

// Make an axios request to
function getWebContent(url) {
    try {
        return axios.get(url);
    } catch (error) {
        console.error(error);
    }
}

const getDom = async (url) => {
    const { data } = await getWebContent(url);
    const dom = new JSDOM(data);
    // console.log('results', dom.window.document.body.innerHTML);
    return dom.window.document;
};

const getBookLinks = async (showList) => {
    arrayEach(showList, async (showAnchor, i) => {
        const subpageDom = await getDom(showAnchor);
        let bookLink;

        arrayEach(subpageDom.querySelectorAll('.everything a'), (anchor) => {
            // console.log('anchor', anchor.href);
            if (anchor.href && anchor.href.toUpperCase().includes('BOOK'))
                bookLink = anchor;
        });
        if (bookLink === undefined)
            bookLink = 'No Link Found';
        allRecords[i] = { ...allRecords[i], showAnchor, bookLink };
    });
};

const getShowList = async (dom) => {
    const allShowAnchors = [];

    arrayEach(dom.querySelectorAll('.showlist li'), (el) => {
        if (el.querySelector('b').innerHTML.toUpperCase().includes('AUTHOR'))
            allRecords.push(makeRecord(el));
            // const { date, title, showAnchor } = makeRecord(el);
            // allRecords.push({ date, title });
            // allShowAnchors.push(showAnchor);
            // return showAnchor;

        // showRecords.push(makeRecord(el));
    });
    return allShowAnchors;
};

const init = async () => {
    const dom = await getDom(initURL);

    const showList = await getShowList(dom);
    // const bookLinks = await getBookLinks(showList);

    // console.log('tester', bookLinks);

    // return allShowAnchors;
    // })

    // console.log(allRecords);
};

init().then(() => {
    arrayEach(allRecords, async (record, i) => {
        const { title, showAnchor } =  record;
        // console.log('showAnchor', showAnchor);
        const anchorPage = await getDom(showAnchor);
        const possibleBook = anchorPage.querySelector('.everything em');
        // const childAnchor = possibleBook.firstElementChild
        console.log(title, possibleBook.parentElement.href, possibleBook.firstChild.href);
        // if possibleBook.parentNode
    });
    // fs.writeFile('titleList.js', `const data =${JSON.stringify(allRecords, null, ' ')}`, (err) => {
    //     if (err)
    //         throw err;
    //     console.log('data is saved.');
    // });
});

// getDom(initURL)
//     .then((dom) => {
//         const allShowAnchors = [];
//         arrayEach(dom.querySelectorAll('.showlist li'), (el) => {
//             if (el.querySelector('b').innerHTML.toUpperCase().includes('AUTHOR')) {
//                 const { date, title, showAnchor } = makeRecord(el);
//                 allRecords.push({ date, title });
//                 allShowAnchors.push(showAnchor);
//             }
//             // showRecords.push(makeRecord(el));
//         });
//         return allShowAnchors;
//     })
//     // Get Subpage
//     .then((allShowAnchors) => {
//         // For each anchor get the dom
//         arrayEach(allShowAnchors, (showAnchor, i) => {
//             getDom(showAnchor)
//                 .then((dom) => {
//                     let bookLink;
//                     arrayEach(dom.querySelectorAll('.everything a'), (anchor) => {
//                         // console.log('anchor', anchor.href);
//                         if (anchor.href && anchor.href.toUpperCase().includes('BOOK'))
//                             bookLink = anchor;
//                         // else
//                     });
//                     if (bookLink === undefined)
//                         bookLink = 'No Link Found';
//                     // console.log(i);
//                     // bo
//                     allRecords[i] = { ...allRecords[i], showAnchor, bookLink };
//                     // console.log(dom.body.innerHTML);
//                 });
//         });

//         // console.log(allShowAnchor.length);
//         // arrayEach((allRecords) =>
//     })
//     .then(() => {
//         console.log('allThem', allRecords);
//     });
