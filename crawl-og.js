/* eslint-disable no-useless-catch */
const { JSDOM } = require('jsdom');
const axios = require('axios');
const fs = require('fs');

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

const createDom = (data) => {
    // console.log(data);
    const dom = new JSDOM(`${data}`);
    const docBody =  dom.window.document.body;
};

const getShowList = (document) => {

};

// Make an axios request to
async function getWebContent(url) {
    try {
        return await axios.get(url);
    } catch (error) {
        console.error(error);
    }
}

const initURL = 'https://www.wfmu.org/playlists/TD';

const makeRecord = (el) => {
    const date = el.textContent.substring(1, el.textContent.indexOf(':')).trim();
    const title = el.querySelector('b').innerHTML;
    const allAnchors = el.querySelectorAll('a');

    return { date, title, allAnchors };

    // Function
    // arrayEach(allAnchors, async (anchor) => {
    //     const hrefAttr = anchor.getAttribute('href');
    //     if (hrefAttr && hrefAttr.includes('/playlist')) {
    //         const showAnchor = `https://www.wfmu.org${hrefAttr}`;

    //         // Function
    //         const bookList = await getBookSite(showAnchor, title);
    //         // console.log('bookList', bookList);
    //         // showList.push({ date, title, showAnchor, bookList });
    //     }
    // });
};

const getDom = async (url) => {
    const { data } = await getWebContent(url);
    const dom = new JSDOM(data);
    // console.log('results', dom.window.document.body);

    // TODO :
    // Figure out arrays and making more async functions

    // const bookRecords = [];
    // getWebContent(initURL)
    //     .then(({ data }) => {
    //         const dom = new JSDOM(data);
    //         return dom.window.document.body;
    //     })
    //     .then((domBody) => {
    //         arrayEach(domBody.querySelectorAll('.showlist li'), (el, i) => {
    //             if (el.querySelector('b').innerHTML.toUpperCase().includes('AUTHOR'))
    //                 bookRecords.push(makeRecord(el));
    //         });
    //         // console.log(bookRecords);
    //     });
    // console.log('document', document);
    // const dom = new JSDOM(data);
};

getDom(initURL);

'<em>What Tech Calls Thinking: An Inquiry Into the Intellectual Bedrock of Silicon Valley</em>'.includes();

const getBookSite = (siteURL, bookTitle) => {
    const bookList = [];
    JSDOM.fromURL(siteURL).then((dom) => {
        arrayEach(dom.window.document.querySelectorAll('#show_top_html a'), async (el) => {
            // console.log(el.innerHTML);
            const justTitle = bookTitle.substring(bookTitle.indexOf('"') + 1, bookTitle.lastIndexOf('"')).trim();
            // console.log();

            if (el.innerHTML.includes(justTitle))
                bookList.push(el.href);
                // console.log(el.href);
        });
    });
    // console.log(bookList);
    return new Promise((res) => { res(bookList); });
};

const init = () => {
    JSDOM.fromURL('https://www.wfmu.org/playlists/TD').then((dom) => {
        const showList = [];

        // Function
        arrayEach(dom.window.document.querySelectorAll('.showlist li'), (el, i) => {
            if (el.querySelector('b').innerHTML.toUpperCase().includes('AUTHOR')) {
                const date = el.textContent.substring(1, el.textContent.indexOf(':')).trim();
                const title = el.querySelector('b').innerHTML;
                const allAnchors = el.querySelectorAll('a');

                // Function
                arrayEach(allAnchors, async (anchor) => {
                    const hrefAttr = anchor.getAttribute('href');
                    if (hrefAttr && hrefAttr.includes('/playlist')) {
                        const showAnchor = `https://www.wfmu.org${hrefAttr}`;

                        // Function
                        const bookList = await getBookSite(showAnchor, title);
                        // console.log('bookList', bookList);
                        showList.push({ date, title, showAnchor, bookList });
                    }
                });
            }
        });

        fs.writeFile('titleList.json', JSON.stringify(showList, null, ' '), (err) => {
            if (err)
                throw err;
            console.log('data is saved.');
        });
    });

    // JSDOM is an async function try to chain to it

    // !! Use Then StateMents to take data process it pass the data and dom to the next, process and add then print to file
    // .then((showList) => {

    // });
};

// init();
