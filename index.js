(() => {
    const crawlData = data;
    // console.log(crawlData);

    //
    let i = 0;
    while (i < crawlData.length) {
        const { date, title, showAnchor, bookAnchor, bookImageSrc } = crawlData[i];

        const showTitle = document.createElement('p');
        showTitle.innerHTML = title;

        const showDate = document.createElement('p');
        showDate.innerHTML = `Interviewed on ${date}`;
        // showDate.style.fontWeight = 'bold';

        const showLink = document.createElement('a');
        showLink.innerHTML = 'Playlist Link';
        showLink.href = showAnchor;

        const bookLink = document.createElement('a');
        bookLink.innerHTML = 'Book Link';
        bookLink.href = bookAnchor;
        // bookLink.style.fontSize = '1.5em';

        const bookLinkClone = bookLink.cloneNode();

        const bookImg = document.createElement('img');
        bookImg.style.width = '160px';
        bookImg.style.boxShadow = '0 10px 5px -5px grey';
        bookImg.src = bookImageSrc;

        bookLinkClone.appendChild(bookImg);

        const showInfo = document.createElement('div');

        const bookEntry = document.createElement('div');
        bookEntry.style.display = 'flex';
        bookEntry.style.alignItems = 'center';
        bookEntry.style.width = '50%';

        const bookInfo = document.createElement('div');

        bookInfo.append(bookLinkClone);
        bookInfo.style.padding = '2em 0';
        showInfo.style.padding = '2em';

        showInfo.append(showTitle);
        showInfo.append(bookLink);
        showInfo.append(showDate);
        showInfo.append(showLink);

        bookEntry.append(bookInfo);
        bookEntry.append(showInfo);
        // bookEntry.style.outline = '1px solid black';

        const bookList = document.getElementById('booklist');
        bookList.append(bookEntry);
        bookList.style.display = 'flex';
        bookList.style.flexWrap = 'wrap';
        // bookList.style.alignItems = 'center';
        bookList.style.margin = 'auto';

        bookList.style.maxWidth = '1000px';

        // document.getElementById('booklist').append(bookSite);
        // document.getElementById('booklist').append(bookImage);

        i += 1;
    }
})();
