((data) => {
    const qs = (selector, parent = document) => parent.querySelector(selector);
    const qsa = (selector, parent = document) => parent.querySelectorAll(selector);
    const createEl = (el) => document.createElement(el);
    const bookList = qs("#booklist");
    const imgPlaceholder = qs(".img-placeholder");
    const bookPlaceholder = qs(".book-entry-placeholder");
    const searchResultsContainer = qs(".search-results-container");
    const searchInput = qs("#searchInput")

    const ls = {
        key: 'techtonic-recents',
        max: 5
    }

    // const parseLength = 50;
    // const parseTitle = copy => (copy.length <= parseLength ? copy : `${copy.slice(0, parseLength)}...`);

    const scrollToOffset = (el, offset) => {
        const { top: elTop } = el.getBoundingClientRect();
        if (elTop !== offset) {
            window.scrollTo({ top: elTop + window.scrollY - offset, behavior: "smooth" });
        }
    };

    const handleLocalStorage = (value) => {
        const recents = window.localStorage.getItem(ls.key);
        let dataArr = recents ? JSON.parse(recents) : [];

        // * Only retain a certain number of items as recent
        if (dataArr.length > ls.max) {
            dataArr.pop();
        }

        dataArr.unshift(value);
        window.localStorage.setItem(ls.key, JSON.stringify(dataArr))
    }

    const loadCard = async ({ date, title, showAnchor, bookSrc }, i) => {
        const bookTemplate = bookPlaceholder.cloneNode(true);
        bookTemplate.dataset.index = i;
        bookTemplate.classList.remove("book-entry-placeholder", "d-none");

        // Update Show Date
        qs(".show-data", bookTemplate).innerHTML = date;

        // Update Title
        qs(".show-title", bookTemplate).innerHTML = title;

        // Target attribute when scrolling to book from search results
        // Add title attr to view full show title
        qs(".book-container", bookTemplate).title = title;

        // Update button anchors
        const [book, show] = qsa(".btn-group .btn", bookTemplate);
        book.href = bookSrc;
        show.href = showAnchor;

        // Add to DOM
        bookList.append(bookTemplate);
    };

    const lazyAddImage = () => {
        const unloadedBooks = qsa(".book-entry.lazy");

        for (let i = 0; i < unloadedBooks.length; i++) {
            const book = unloadedBooks[i];
            const bookData = data[book.dataset.index];
            const { top: elTop } = book.getBoundingClientRect();

            // if element out of view skip
            if (elTop > window.innerHeight) {
                return;
            }

            // Clone Template
            const imgTemplate = imgPlaceholder.cloneNode(true);

            // Update outer anchor
            imgTemplate.href = bookData.bookSrc;
            imgTemplate.classList.remove("img-placeholder", "d-none");

            // Update inner img
            const bookImg = qs("img", imgTemplate);
            bookImg.alt = bookData.title;
            bookImg.src = bookData.bookImageSrc;
            bookImg.onload = () => {
                bookImg.style.height = "auto";
                imgTemplate.classList.remove("preloader");
            };

            // Add to DOM
            qs(".book-container", book).prepend(imgTemplate);
            book.classList.remove("lazy");
        }
    };


    const closeSearchResults = () => {
        // Resume scrolling
        document.body.classList.remove("noscroll");

        // Hide Results
        searchResultsContainer.classList.remove("open");
    };

    const openSearchResults = () => {
        // Freeze body scrolling
        document.body.classList.add("noscroll");
        // Show Results
        searchResultsContainer.classList.add("open");
    };

    searchResultsContainer.addEventListener("click", function (e) {
        e.target === this && closeSearchResults();
    });

    // * OnFocus scroll search bar to top
    searchInput.addEventListener("focus", (e) => {
        // Scroll searchbar to top
        scrollToOffset(qs(".search-bar"), 32);

        // TODO: Below
        // if (recently-searched) {
            // openSearchResults()
            // show recently-searched
        // }
    })

    // On Input Reveal Results
    searchInput.addEventListener("input", (e) => {
        const input = e.target
        const {value} = input;

        // Scroll searchbar to top
        scrollToOffset(qs(".search-bar"), 32);

        // * Open Results Container
        if (!document.body.classList.contains("noscroll")) openSearchResults();

        // * Close container if input is empty
        if (value.length <= 0) {
            closeSearchResults();
            return;
        }

        // * Filter through data
        const searchResults = [
            ...data.filter(
                (item) =>
                    new RegExp(value.toLowerCase(), "gi").exec(item.title.toString().toLowerCase())?.length || false
            ),
        ];

        // * Reset Results to replace with new result
        const searchResContainer = qs(".search-results");
        searchResContainer.innerHTML = "";

        // * Handle no search results
        if (searchResults.length <= 0) {
            const msg = createEl("h2");
            msg.innerHTML = "No Results";
            searchResContainer.append(msg);

            return;
        }

        // * Add Results to DOM
        searchResults.map(({date, bookImageSrc, title}) => {
            const resultTemplate = qs(".s-result").cloneNode(true);
            resultTemplate.classList.remove("d-none");
            resultTemplate.addEventListener("click", () => {
                closeSearchResults();

                input.value = title;
                scrollToOffset(qs(`[title='${title}']`), 80);


                // Add to Local Storage
                handleLocalStorage(title)
            });

            // Update template values
            qs(".result-date", resultTemplate).innerHTML = date;
            qs("img", resultTemplate).src = bookImageSrc;
            qs(".result-title", resultTemplate).innerHTML = title;

            // Add to DOM
            searchResContainer.append(resultTemplate);

        });

    });

    qs('.clear-search').addEventListener('click', () => {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input', { bubbles: true }));
    })

    window.addEventListener("load", async () => {
        for (let i = 0; i < data.length; i++) loadCard(data[i], i);
        lazyAddImage();
    });

    window.onscroll = () => {
        lazyAddImage();
    };

})(data);
