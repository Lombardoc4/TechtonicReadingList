(() => {
    let data = [];

    const checkWindowSize = () => {
        const resizeContainers = ['#booklist', 'body'];

        let i = 0;
        while (i < resizeContainers.length) {
            const container = document.querySelector(resizeContainers[i]);
            container.classList.remove('sm', 'md');
            if (window.innerWidth < 992)
                container.classList.add(window.innerWidth < 666 ? 'sm' : 'md');

            i += 1;
        }
    };

    const loadCards = async () => {
        let i = 0;
        while (i < data.length) {
            const { date, title, showAnchor, bookAnchor } = data[i];

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
            bookLink.rel = 'noreferrer';
            bookLink.classList.add('btn');

            const btnGroup = document.createElement('div');
            btnGroup.classList.add('btn-group');

            const bookEntry = document.createElement('div');
            bookEntry.classList.add('bookEntry', 'lazy');
            bookEntry.dataset.entry = i;

            const showInfo = document.createElement('div');
            showInfo.classList.add('showInfo');

            showCopy.append(showTitle);
            showCopy.append(showDate);
            btnGroup.append(bookLink);
            btnGroup.append(showLink);

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
            const elPosition = allBooks[i].getBoundingClientRect();

            if (elPosition.top < window.innerHeight) {
                allBooks[i].classList.remove('lazy');

                const bookImageLink = document.createElement('a');
                bookImageLink.href = data[id].bookAnchor;
                bookImageLink.target = '_blank';
                bookImageLink.rel = 'noreferrer';
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
        checkWindowSize();
        const fetchData = await fetch('http://crislombardo.com.s3-website-us-east-1.amazonaws.com/techtonic/data.json');
        data = await fetchData.json();

        await loadCards(data);
        lazyAddImage();
    });


    // Todo: Remove function after all load
    window.onscroll = () => {
        lazyAddImage();
    };
})();
