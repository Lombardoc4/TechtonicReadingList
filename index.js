((data) => {
    const qs = (selector, parent = document) => parent.querySelector(selector);
    const qsa = (selector, parent = document) => parent.querySelectorAll(selector);
    const createEl = el => document.createElement(el);
    const formatDate = (date) => {
        const yyyy = new Date(date).getFullYear();
        const mm = new Date(date).getMonth() + 1;
        const dd = new Date(date).getDay();

        if ([mm, dd, yyyy].includes('NaN')) return '';

        return `${mm}-${dd}-${yyyy}`;
    };
    const bookList = qs('#booklist');
    const imgPlaceholder = qs('.img-placeholder');
    const bookPlaceholder = qs('.book-entry-placeholder');
    const parseLength = 50;
    const parseTitle = copy => (copy.length <= parseLength ? copy : `${copy.slice(0, parseLength)}...`);


    const loadCard = async ({ date, title, showAnchor, bookSrc }, i) => {
            const bookTemplate = bookPlaceholder.cloneNode(true)
            bookTemplate.dataset.index = i;
            bookTemplate.classList.remove('book-entry-placeholder', 'd-none')

            // Update Show Date
            qs('.show-data', bookTemplate).innerHTML = date;

            // Update Title
            qs('.show-title', bookTemplate).innerHTML = title;

            // Add title attr to view full show title
            qs('.book-container', bookTemplate).title = title;

            // Update button anchors
            const [book, show] = qsa('.btn-group .btn', bookTemplate);
            book.href = bookSrc;
            show.href = showAnchor;

            // Add to DOM
            bookList.append(bookTemplate);
    };

    const lazyAddImage = () => {
        const unloadedBooks = qsa('.book-entry.lazy');

        for (let i = 0; i < unloadedBooks.length; i++) {
            const book = unloadedBooks[i]
            const bookData = data[book.dataset.index]
            const { top: elTop } = book.getBoundingClientRect();

            // if element out of view skip
            if (elTop > window.innerHeight) {
                return
            }

            // Clone Template
            const imgTemplate = imgPlaceholder.cloneNode(true);

            // Update outer anchor
            imgTemplate.href = bookData.bookSrc;
            imgTemplate.classList.remove('img-placeholder', 'd-none');


            // Update inner img
            const bookImg = qs('img', imgTemplate);
            bookImg.alt = bookData.title;
            bookImg.src = bookData.bookImageSrc;
            bookImg.onload = () => {
                bookImg.style.height = 'auto';
                imgTemplate.classList.remove('preloader');
            };

            // Add to DOM
            qs('.book-container', book).prepend(imgTemplate);
            book.classList.remove('lazy');
        }
    };


    const unFreezeScroll = () => {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    const filterContainer = qs('.filter-container');
    filterContainer.addEventListener('click', function(e)  {
        if (e.target === this){
            this.classList.remove('open');
        }
    })

    qs('#searchInput').addEventListener('input', (e) => {
        const input = e.target.value;
        // const filterContainer = qs('.filter-container');

        if (input.length <= 0) {
            // todo Hide list if visible
            filterContainer.classList.remove('open')

            unFreezeScroll();


            return;
        }

        if (!filterContainer.classList.contains('open')) {
            const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}`;
            document.body.style.left = 0;
            document.body.style.right = 0;

            filterContainer.classList.add('open');
        }
        // Loop through data
        const searchResults = [...data.filter(item =>
            new RegExp(input.toLowerCase(), 'gi').exec(item.title.toString().toLowerCase())?.length || false)
        ].reverse();


        const searchResContainer = qs('.search-results');
        searchResContainer.innerHTML = '';

        if (searchResults.length <= 0) {
            const msg = createEl('h2');
            msg.innerHTML = 'No Results';
            searchResContainer.append(msg);

        } else {
            // Add Options
            searchResults.map(res => {
                const date =  formatDate(res.date);
                const template = qs('.s-result').cloneNode(true);
                template.classList.remove('d-none');
                template.dataset.date = date;
                qs('.result-date', template).innerHTML = date;
                qs('img', template).src = res.bookImageSrc;
                qs('.result-title', template).innerHTML = res.title;

                template.addEventListener('click', () => {
                    unFreezeScroll();
                    filterContainer.classList.remove('open');


                    qs(`[title='${res.title}']`).scrollIntoView();

                })
                searchResContainer.append(template);
            });
        }


        searchResContainer.scrollTop = searchResContainer.scrollHeight;
    });

    window.addEventListener('load', async () => {

        for (let i = 0; i < data.length; i++) {
            loadCard(data[i], i);
        }
        lazyAddImage();
    });

    window.onscroll = () => {
        lazyAddImage();
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    };
})(data);
