(() => {
    const crawlData = data;


    const checkWindowSize = () => {
        const resizeContainers = ['#booklist', 'header'];

        let i = 0;
        while (i < resizeContainers.length) {
            const container = document.querySelector(resizeContainers[i]);
            container.classList.remove('sm', 'md');

            if (window.innerWidth < 666)
                container.classList.add('sm');
            if (window.innerWidth >= 666 && window.innerWidth < 992)
                container.classList.add('md');

            i += 1;
        }
    };

    const loadCards = async () => {
        let i = 0;
        while (i < crawlData.length) {
            const { date, title, showAnchor, bookAnchor } = crawlData[i];

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
            bookLink.rel= 'noreferrer';


            const btnGroup = document.createElement('div');
            btnGroup.classList.add('btn-group');

            // const bookImageLink = bookLink.cloneNode();
            bookLink.classList.add('btn');

            // bookImageLink.classList.add('preloader', 'imgLink');
            // const bookImg = document.createElement('img');
            // bookImg.classList.add('bookImg');
            // bookImg.style.height = '0';
            // bookImg.src = bookImageSrc;
            // bookImg.onload = () => {
            //     bookImg.style.height = 'auto';
            //     bookImageLink.classList.remove('preloader');
            // };

            // bookImageLink.appendChild(bookImg);

            const bookEntry = document.createElement('div');

            bookEntry.classList.add('bookEntry', 'lazy');
            bookEntry.dataset.entry = i;

            const showInfo = document.createElement('div');
            showInfo.classList.add('showInfo');
            // showInfo.style.padding = '2em';

            showCopy.append(showTitle);
            showCopy.append(showDate);
            btnGroup.append(bookLink);
            btnGroup.append(showLink);
            // showInfo.append(btnGroup);

            // bookEntry.append(showCopy);
            bookEntry.append(btnGroup);

            const bookList = document.getElementById('booklist');
            bookList.append(bookEntry);


            i += 1;
        }
    };


    const lazyAddImage = () => {
        const allBooks = document.querySelectorAll('.bookEntry.lazy');

        let i = 0;
        while (i < allBooks.length) {
            const id = allBooks[i].dataset.entry;
            // console.log(i);
            const elPosition = allBooks[i].getBoundingClientRect();
            if (elPosition.top < window.innerHeight) {

                allBooks[i].classList.remove('lazy');

                const bookImageLink = document.createElement('a');
                bookImageLink.href = data[id].bookAnchor;
                bookImageLink.target = '_blank';
                bookImageLink.rel= 'noreferrer';
                bookImageLink.classList.add('preloader', 'imgLink');
                const bookImg = document.createElement('img');
                bookImg.classList.add('bookImg');
                bookImg.alt = data[id].title;
                bookImg.style.height = '0';
                bookImg.src = data[id].bookImageSrc;
                bookImg.onload = () => {
                    bookImg.style.height = 'auto';
                    bookImageLink.classList.remove('preloader');
                };

                bookImageLink.appendChild(bookImg);
                allBooks[i].prepend(bookImageLink);
            } else {
                return;
            }
            i += 1;
        }
    };

    window.onresize = () => checkWindowSize();
    window.addEventListener('load', async () => {
        await loadCards();
        checkWindowSize();
        lazyAddImage();
    });
    window.onscroll = () => {
        lazyAddImage();
    };
})();
