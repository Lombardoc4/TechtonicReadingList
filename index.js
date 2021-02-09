(() => {
    console.log(data);

    //
    let i = 0;
    while (i < data.length) {
        const { date, title, showAnchor, bookAnchor, bookImageSrc } = data[i];

        const showTitle = document.createElement('h3');
        showTitle.innerHTML = title;

        const showDate = document.createElement('p');
        showDate.innerHTML = date;

        const showLink = document.createElement('a');
        showLink.innerHTML = 'Playlist Link';
        showLink.href = showAnchor;

        const bookLink = document.createElement('a');
        bookLink.innerHTML = 'Book Link';
        bookLink.href = bookAnchor;
        bookLink.style.fontSize = '2em';

        const bookLinkClone = bookLink.cloneNode();

        const bookImg = document.createElement('img');
        bookImg.style.width = '200px';
        bookImg.src = bookImageSrc;

        bookLinkClone.appendChild(bookImg);

        const showInfo = document.createElement('div');

        const bookEntry = document.createElement('div');
        bookEntry.style.display = 'flex';
        bookEntry.style.width = '50%';

        const bookInfo = document.createElement('div');

        bookInfo.append(bookImg);
        bookInfo.style.padding = '1em';
        showInfo.style.padding = '1em';


        showInfo.append(bookLink);
        showInfo.append(showTitle);
        showInfo.append(showDate);
        showInfo.append(showLink);

        bookEntry.append(bookInfo);
        bookEntry.append(showInfo);
        bookEntry.style.outline = '1px solid black';


        const bookList = document.getElementById('booklist');
        bookList.append(bookEntry);
        bookList.style.display = 'flex';
        bookList.style.flexWrap = 'wrap';

        // document.getElementById('booklist').append(bookSite);
        // document.getElementById('booklist').append(bookImage);

        i += 1;
    }
})();
