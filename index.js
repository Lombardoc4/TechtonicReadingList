(() => {
    const crawlData = data;

    let i = 0;
    while (i < crawlData.length) {
        const { date, title, showAnchor, bookAnchor, bookImageSrc } = crawlData[i];

        const showTitle = document.createElement('p');
        showTitle.innerHTML = title;

        const showDate = document.createElement('p');
        showDate.innerHTML = `Interviewed on ${date}`;

        const showLink = document.createElement('a');
        showLink.innerHTML = 'Playlist Link';
        showLink.href = showAnchor;

        const bookLink = document.createElement('a');
        bookLink.innerHTML = 'Book Link';
        bookLink.href = bookAnchor;

        const bookImageLink = bookLink.cloneNode();

        bookImageLink.classList.add('preloader');
        const bookImg = document.createElement('img');
        bookImg.classList.add('bookImg');
        bookImg.src = bookImageSrc;
        bookImg.onload = () => bookImageLink.classList.remove('preloader');

        bookImageLink.appendChild(bookImg);


        const bookEntry = document.createElement('div');
        bookEntry.classList.add('bookEntry');

        const showInfo = document.createElement('div');
        showInfo.classList.add('showInfo');
        // showInfo.style.padding = '2em';

        showInfo.append(showTitle);
        showInfo.append(bookLink);
        showInfo.append(showDate);
        showInfo.append(showLink);

        bookEntry.append(bookImageLink);
        bookEntry.append(showInfo);

        const bookList = document.getElementById('booklist');
        bookList.append(bookEntry);

        i += 1;
    }

    const checkWindowSize = () => {
        // console.log(window.innerWidth);
        if (window.innerWidth < 720)
            document.getElementById('booklist').classList.add('mobile');
        else
            document.getElementById('booklist').classList.remove('mobile');
    };

    window.onresize = () => checkWindowSize();
    window.onload = () => checkWindowSize();

    // window.onload = () => document.getElementById('booklist').classList.add('mobile');
})();
