(() => {
    const crawlData = data;

    const checkWindowSize = () => {
        // console.log(window.innerWidth);
        if (window.innerWidth < 720)
            document.getElementById('booklist').classList.add('mobile');
        else
            document.getElementById('booklist').classList.remove('mobile');
    };

    const loadCards = () => {
        let i = 0;
        while (i < crawlData.length) {
            const { date, title, showAnchor, bookAnchor, bookImageSrc } = crawlData[i];

            const showTitle = document.createElement('h1');
            showTitle.innerHTML = title;

            const showDate = document.createElement('p');
            showDate.innerHTML = date;

            const showCopy = document.createElement('div');
            showCopy.classList.add('showCopy');

            const showLink = document.createElement('a');
            showLink.innerHTML = 'Playlist Link';
            showLink.href = showAnchor;
            showLink.role = 'button';
            showLink.classList.add('btn');

            const bookLink = document.createElement('a');
            bookLink.innerHTML = 'Book Link';
            bookLink.href = bookAnchor;
            bookLink.target = '_blank';

            const btnGroup = document.createElement('div');
            btnGroup.classList.add('btn-group');

            const bookImageLink = bookLink.cloneNode();
            bookLink.classList.add('btn');

            bookImageLink.classList.add('preloader', 'imgLink');
            const bookImg = document.createElement('img');
            bookImg.classList.add('bookImg');
            bookImg.src = bookImageSrc;
            bookImg.onload = () => bookImageLink.classList.remove('preloader');

            bookImageLink.appendChild(bookImg);
            bookImageLink.append(showCopy);

            const bookEntry = document.createElement('div');
            bookEntry.classList.add('bookEntry');

            const showInfo = document.createElement('div');
            showInfo.classList.add('showInfo');
            // showInfo.style.padding = '2em';

            showCopy.append(showTitle);
            showCopy.append(showDate);
            btnGroup.append(bookLink);
            btnGroup.append(showLink);
            // showInfo.append(btnGroup);

            bookEntry.append(bookImageLink);
            bookEntry.append(btnGroup);

            const bookList = document.getElementById('booklist');
            bookList.append(bookEntry);

            i += 1;
        }
    };


    window.onresize = () => checkWindowSize();
    window.onload = () => {
        checkWindowSize();
        loadCards();
    };
})();
