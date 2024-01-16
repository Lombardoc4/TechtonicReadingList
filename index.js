((data) => {
    const qs = (selector, parent = document) => parent.querySelector(selector);
    const qsa = (selector, parent = document) => parent.querySelectorAll(selector);
    const createEl = (el, opts) => Object.assign(document.createElement(el), opts);

    const el = {
        bookList: qs("#booklist"),
        bookPlaceholder: qs(".book-entry-placeholder"),
        searchResultsContainer: qs(".search-results-container"),
        searchInput: qs("#searchInput"),
        searchResults: qs(".search-results")
    }
    const ls = {
        key: 'techtonic-recents',
        max: 5
    }

    const scrollToOffset = (el, offset) => {
        const { top: elTop } = el.getBoundingClientRect();
        if (elTop !== offset) {
            window.scrollTo({ top: elTop + window.scrollY - offset, behavior: "smooth" });
        }
    };

    const readLS = () => {
        const recents = window.localStorage.getItem(ls.key);
        return recents ? JSON.parse(recents) : [];
    }

    const addToLS = (value) => {
        const dataArr = readLS();

        // If item is in list bring to front
        if (dataArr.includes(value)) {
            const index = dataArr.findIndex(title => title === value)
            dataArr.splice(index, 1)
            dataArr.unshift(value)
        } else {
            // * Only retain a certain number of items as recent
            if (dataArr.length > ls.max) {
                dataArr.pop();
            }
            dataArr.unshift(value);
        }
        window.localStorage.setItem(ls.key, JSON.stringify(dataArr))
    }

    const getRecentBooks = () => {
        const recents = readLS();
        if (recents.length <= 0) {
            return recents;
        }
        return recents.map(title => data.find(book => book.title === title));
    }


    const loadCards = () => {
        for (let i = 0; i < data.length; i++)  {
            const { date, title, showAnchor, bookSrc } = data[i]
            const bookTemplate = el.bookPlaceholder.cloneNode(true);
            bookTemplate.dataset.index = i;
            bookTemplate.classList.remove("book-entry-placeholder", "d-none");

            // Update Show Date
            qs(".show-data", bookTemplate).innerHTML = date;

            // Update Title
            qs(".show-title", bookTemplate).innerHTML = title;

            // Target attribute when scrolling to book from search results
            // Add title attr to view full show title
            bookTemplate.title = title;

            // Update button anchors
            const [book, show] = qsa(".btn-group .btn", bookTemplate);
            book.href = bookSrc;
            show.href = showAnchor;

            // Add to DOM
            el.bookList.append(bookTemplate);
        }
    };

    const lazyAddImages = () => {
        const unloadedBooks = qsa(".book-entry.lazy");

        for (let i = 0; i < unloadedBooks.length; i++) {
            const book = unloadedBooks[i];
            const bookData = data[book.dataset.index];
            const { top: elTop } = book.getBoundingClientRect();

            // if element out of view skip
            if (elTop > window.innerHeight) {
                return;
            }

            const imgContainer = qs('.img-placeholder', book)

            // Update outer anchor
            imgContainer.href = bookData.bookSrc;
            imgContainer.classList.remove("img-placeholder", "d-none");

            // Update inner img
            const bookImg = qs("img", imgContainer);
            bookImg.alt = bookData.title;
            bookImg.src = bookData.bookImageSrc;
            bookImg.onload = () => {
                bookImg.style.height = "auto";
                imgContainer.classList.remove("preloader");
            };

            book.classList.remove("lazy");
        }
    };


    const closeSearchResults = () => {
        // Resume scrolling
        document.body.classList.remove("noscroll");
        // Hide Results
        el.searchResultsContainer.classList.remove("open");
    };

    const openSearchResults = () => {
        // Freeze body scrolling
        document.body.classList.add("noscroll");
        // Show Results
        el.searchResultsContainer.classList.add("open");
    };

    const clearSearchInput = () => {
        el.searchInput.value = "";
        el.searchInput.dispatchEvent(new Event('input', { bubbles: true }));
        qs('.book-entry.active')?.classList.remove('active');
    }

    const clearSearchResults = () => {
        el.searchResults.innerHTML = "";
    }

    const createSearchResult = ({date, bookImageSrc, title}) => {
        const resultTemplate = qs(".s-result").cloneNode(true);
        resultTemplate.classList.remove("d-none");
        resultTemplate.addEventListener("click", () => {
            closeSearchResults();

            el.searchInput.value = title;
            const bookEl =  qs(`[title='${title}']`)
            scrollToOffset(bookEl, 84);
            qs('.book-entry.active')?.classList.remove('active');

            bookEl.classList.add('active')

            // Add to Local Storage
            addToLS(title)
        });

        // Update template values
        qs(".result-date", resultTemplate).innerHTML = date;
        qs("img", resultTemplate).src = bookImageSrc;
        qs(".result-title", resultTemplate).innerHTML = title;

        // Add to DOM
        el.searchResults.append(resultTemplate);
    }


    // * OnFocus scroll search bar to top
    el.searchInput.addEventListener("focus", (e) => {
        // Scroll searchbar to top
        scrollToOffset(qs(".search-bar"), 32);

        // * Display recently viewed items
        const recents = getRecentBooks()
        if (recents.length > 0) {
            openSearchResults()
            clearSearchResults();
            recents.map(createSearchResult)
        }
    })

    // *** On Input Reveal Results
    el.searchInput.addEventListener("input", (e) => {
        const input = e.target
        const {value} = input;

        // Scroll searchbar to top
        scrollToOffset(qs(".search-bar"), 32);

        // Open Results Container
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
        clearSearchResults()

        // * Handle no search results
        if (searchResults.length <= 0) {
            el.searchResults.append(createEl("h2", {innerHTML: 'No Results'}));
            return;
        }

        // * Add Results to DOM
        searchResults.map(createSearchResult);

    });

    qs('.clear-search').addEventListener('click', clearSearchInput)
    qs('.focus-search').addEventListener('click', () => el.searchInput.focus())

    el.searchResultsContainer.addEventListener("click", function (e) {
        e.target === this && closeSearchResults();
    });

    window.addEventListener("load", async () => {
        loadCards();
        lazyAddImages();
    });

    window.onscroll = () => {
        lazyAddImages();
    };

})(data);
