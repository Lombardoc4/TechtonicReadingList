(() => {
    let data = [];

    const qs = (selector, parent = document) => parent.querySelector(selector);

    const qsa = (selector, parent = document) => parent.querySelectorAll(selector);

    const createEl = el => document.createElement(el);

    const formatDate = (date) => {
        const yyyy = new Date(date).getFullYear();
        const mm = new Date(date).getMonth() + 1;
        const dd = new Date(date).getDay();

        return `${mm}-${dd}-${yyyy}`;
    };

    const parseLength = 65;
    const parseTitle = copy => (copy.length <= parseLength ? copy : `${copy.slice(0, parseLength)}...`);

    const checkWindowSize = () => {
        const resizeContainers = ['#booklist', 'body'];

        let i = 0;
        while (i < resizeContainers.length) {
            const container = qs(resizeContainers[i]);
            container.classList.remove('sm', 'md');
            if (window.innerWidth < 992)
                container.classList.add(window.innerWidth < 666 ? 'sm' : 'md');

            i += 1;
        }
    };

    const loadCards = async () => {
        let i = 0;
        let year = 0;

        while (i < data.length) {
            const { date, title, showAnchor, bookAnchor } = data[i];
            const itemDate = new Date(date).getFullYear();

            const showTitle = createEl('b');
            showTitle.innerHTML = parseTitle(title);

            const showDate = createEl('p');
            showDate.classList.add('bookDate');
            showDate.innerHTML = formatDate(date);

            const showCopy = createEl('div');
            showCopy.classList.add('showCopy');

            const showLink = createEl('a');
            showLink.innerHTML = 'Playlist';
            showLink.href = showAnchor;
            showLink.target = '_blank';
            showLink.role = 'button';
            showLink.classList.add('btn');

            const bookLink = createEl('a');
            bookLink.innerHTML = 'Book';
            bookLink.href = bookAnchor;
            bookLink.target = '_blank';
            bookLink.rel = 'noreferrer';
            bookLink.classList.add('btn');

            const btnGroup = createEl('div');
            btnGroup.classList.add('btn-group');

            const bookEntry = createEl('div');
            bookEntry.classList.add('bookEntry', 'lazy');
            bookEntry.dataset.entry = i;
            if (itemDate !== year) {
                bookEntry.id = itemDate;
                year = itemDate;
            }

            const bookContainer = createEl('div');


            const showInfo = createEl('div');
            showInfo.classList.add('showInfo');

            showCopy.append(showDate);
            showCopy.append(showTitle);
            btnGroup.append(bookLink);
            btnGroup.append(showLink);

            bookContainer.append(showCopy);
            bookContainer.append(btnGroup);


            bookEntry.append(bookContainer);
            // bookEntry.append(btnGroup);

            const bookList = qs('#booklist');
            bookList.append(bookEntry);

            i += 1;
        }
    };


    const lazyAddImage = () => {
        const allBooks = qsa('.bookEntry.lazy');

        let i = 0;
        while (i < allBooks.length) {
            const id = allBooks[i].dataset.entry;
            const elPosition = allBooks[i].getBoundingClientRect();

            if (elPosition.top < window.innerHeight) {
                allBooks[i].classList.remove('lazy');

                const bookImageLink = createEl('a');
                bookImageLink.href = data[id].bookAnchor;
                bookImageLink.target = '_blank';
                bookImageLink.rel = 'noreferrer';
                bookImageLink.classList.add('preloader', 'imgLink');
                const bookImg = createEl('img');
                bookImg.classList.add('bookImg');
                bookImg.alt = data[id].title;
                bookImg.style.height = '0';
                bookImg.src = data[id].bookImageSrc;
                bookImg.onload = () => {
                    bookImg.style.height = 'auto';
                    bookImageLink.classList.remove('preloader');
                };

                bookImageLink.appendChild(bookImg);
                qs('div', allBooks[i]).prepend(bookImageLink);
            } else {
                return;
            }
            i += 1;
        }
    };

    // Add Dates to side nav
    // start from min year go to now then reverse array
    const addNavYears = () => {
        let addYear = new Date().getFullYear();
        const minYear = new Date(data[data.length - 1].date).getFullYear();
        while (addYear >= minYear) {
            const headerList = qs('.yearList');
            const yearLink = createEl('a');
            yearLink.setAttribute('href', `#${addYear}`);
            yearLink.innerHTML = addYear;

            const yearItem = createEl('div');

            yearItem.append(yearLink);

            headerList.append(yearItem);

            addYear -= 1;
        }
    };


    window.onresize = () => checkWindowSize();
    window.addEventListener('load', async () => {
        checkWindowSize();
        const fetchData = await fetch('https://d3bo5irzey98y0.cloudfront.net/techtonic/data.json');
        data = await fetchData.json();

        await loadCards(data);
        lazyAddImage();
        addNavYears();
    });


    window.onscroll = () => {
        lazyAddImage();
    };
})();
