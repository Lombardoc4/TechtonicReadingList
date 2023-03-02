const AWS   = require('aws-sdk');
const { JSDOM } = require('jsdom');
const axios = require('axios');

const initURL = 'https://www.wfmu.org/playlists/TD';

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
async function getWebContent(url) {
    try {
        return axios.get(url);
    } catch (error) {
        console.error(error);
        return { data: [] };
    }
}

const getDom = async (url) => {
    const { data } = await getWebContent(url);
    if (data.length === 0)
        return false;


    const dom = new JSDOM(data);
    return dom.window.document;
};


const getBookData = async (showAnchor) => {
    const bookData = {
        bookSrc:      '',
        bookImageSrc: '',
    };
    const showDom = await getDom(showAnchor);

    // Get Book Src
    const bookLink = showDom.querySelector('#show_top_html a');
    bookData.bookSrc = bookLink.getAttribute('href');

    // Get Image Src
    const bookImage = showDom.querySelector('#show_image_top_favables_section img');
    bookData.bookImageSrc = bookImage.getAttribute('src');

    return bookData;
};

const getShowData = async () => {
    const dom = await getDom(initURL);
    const latestShow = dom.querySelector('.showlist li');

    if (dom && latestShow && latestShow.querySelector('b').innerHTML.toUpperCase().includes('AUTHOR')) {
        const showData = makeRecord(latestShow);
        const bookData = await getBookData(showData.showAnchor);

        return { ...showData, ...bookData };
    }
};

exports.handler = async (event) => {
    // Read the JSON file from S3
    const bucket_name = 'crislombardo.com';
    const key_name = 'techtonic/data.json';
    const s3 = new AWS.S3();


    const file = await s3.getObject({
        Bucket: bucket_name,
        Key:    key_name,
    }).promise();


    //   const data = JSON.parse(file.Body.toString());

    // Update the file with new data
    //   data.timestamp = new Date().toISOString();
    //   const updatedFile = JSON.stringify(data);
    const showData = await getShowData();


    if (file && showData) {
        const parsedFile = JSON.parse(file.Body.toString());

        // console.log('showData', showData);

        parsedFile.unshift(showData);

        // console.log('final parseFile', parsedFile);

        // Write the updated file back to S3
        await s3.putObject({
            Bucket: bucket_name,
            Key:    key_name,
            Body:   JSON.stringify(parsedFile),
        }).promise();
    }

    // TODO implement
    const response = {
        statusCode: 200,
        body:       JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
