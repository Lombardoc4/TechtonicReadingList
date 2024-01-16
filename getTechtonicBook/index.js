// const AWS   = require('aws-sdk');
const { JSDOM } = require("jsdom");
const axios = require("axios");
const fs = require("fs");

const config = {
    techtonicUrl: "https://www.wfmu.org/playlists/TD",
    jsFile: "data.js",
    backupFile: "data-backup.js",
};

let dataFile = fs.readFileSync(config.jsFile, "utf8");

const ObjEach = (object, callback) => {
    let i = 0;
    const length = object ? object.length : 0;

    if (typeof length == "number" && length > -1) {
        while (i < length) {
            callback(object[i], i, object);
            i += 1;
        }
    }
};



// Make an axios request to
async function getWebContent(url) {
    let data = null;
    try {
        data = await axios.get(url);
    } catch (err) {
        console.error("Error response:");
        console.error(err.response.data); // ***
        console.error(err.response.status); // ***
        console.error(err.response.headers); // ***
    } finally {
        return { data };
    }
}

const getDom = async (url) => {
    const { data } = await getWebContent(url);
    return data ? new JSDOM(data).window : { document: false };
};

const showDetails = (el) => {
    // Preview DOM Here: https://www.wfmu.org/playlists/TD

    // Todo: Watch for errors with these values
    const date = el.textContent.substring(1, el.textContent.indexOf(":")).trim();
    const title = el.querySelector("b").innerHTML;
    const allAnchors = el.querySelectorAll("a");
    let showAnchor;

    // Search through anchors to file one with playlist
    ObjEach(allAnchors, async (anchor) => {
        const hrefAttr = anchor.getAttribute("href");

        if (hrefAttr && hrefAttr.includes("/playlist")) showAnchor = `https://www.wfmu.org${hrefAttr}`;
    });

    return { date, title, showAnchor };
};

const bookDetails = (el) => {
    // Get Book Src
    const bookLink = el.querySelector("#show_top_html a");
    bookData.bookSrc = bookLink ? bookLink.getAttribute("href") : "";

    // Get Image Src
    const bookImage = el.querySelector("#show_image_top_favables_section img");
    bookData.bookImageSrc = bookImage ? bookImage.getAttribute("src") : "";

    return bookData;
};

const getShowData = async () => {
    const { document } = await getDom(config.techtonicUrl);

    if (!document) {
        throw Error(`Cannot get DOM from ${config.techtonicUrl}`);
    }

    const shows = [document.querySelector(".showlist li")];
    const newShows = [];

    // * If need to get missing shows
    // * Update date to last recorded show
    // const cutoffDate = new Date("February 13, 2023");
    // const showDate = (el) => {
    //     return el.textContent.substring(1, el.textContent.indexOf(":")).trim();
    // };
    // const shows = Array.from(document.querySelectorAll(".showlist li")).filter((show) => new Date(showDate(show)) > cutoffDate);


    // Loops throw all shows
    for (let i = shows.length; i >= 0; i--) {
        const show = shows[i];

        // * Check if show and show has an author then returns data
        if (show && show.querySelector("b").innerHTML.toUpperCase().includes("AUTHOR")) {
            const { date, title, showAnchor } = showDetails(show);

            // Handle Missing show info
            if (!date || !title || !showAnchor) {
                throw Error("Missing Details:", {
                    date,
                    title,
                    showAnchor,
                });
            }

            //
            const { document: showDocument } = await getDom(showAnchor);

            const { bookSrc, bookImageSrc } = bookDetails(showDocument);

            // Handle missing book source info
            if (!bookSrc || !bookImageSrc) {
                throw Error("Missing book source:", {
                    bookSrc,
                    bookImageSrc,
                });
            }

            // * Add new show data to front of data array
            dataFile = dataFile.replace(
                "[",
                `[
            {
                "date": ${JSON.stringify(date)},
                "title": ${JSON.stringify(title)},
                "showAnchor": ${JSON.stringify(showAnchor)},
                "bookSrc": ${JSON.stringify(bookSrc)},
                "bookImageSrc": ${JSON.stringify(bookImageSrc)}
            },`
            );

            // Perserve Data for confirmation
            newShows.push({ date, title, showAnchor, bookSrc, bookImageSrc });
        }
    }

    return newShows;
};

const createBackUp = () => {
    fs.writeFileSync(config.backupFile, fs.readFileSync(config.jsFile, "utf8"), 'utf8')
}

getShowData()
    .then((shows) => {
        if (shows.length === 0) console.log("No new shows");
        else {
            createBackUp()

            // Replace file with updated data
            try {
                fs.writeFileSync(config.jsFile, dataFile, "utf8");
                console.log("New Shows:", shows);

            } catch (err) {
                console.error('Could not write to file', config.jsFile, err);
            }
        }
    })
    .catch((err) => {
        console.error("err", err);
        // Exit with failure cause github to send email
        process.exit(1);
    });
