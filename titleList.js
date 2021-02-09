const data = [
    {
        date:         'February 1, 2021',
        title:        'Adrian Daub, author, "What Tech Calls Thinking"',
        showAnchor:   'https://www.wfmu.org/playlists/shows/100846',
        bookAnchor:   'https://www.indiebound.org/book/9780374538644',
        bookImageSrc: 'https://www.wfmu.org/Gfx/playlist_images/TD/what-tech-calls-thinking-cover_6122120008698823_pt.jpg',
    },
    {
        date:         'January 25, 2021',
        title:        'Jonathan Lethem, author, "The Arrest"',
        showAnchor:   'https://www.wfmu.org/playlists/shows/100618',
        bookAnchor:   'https://www.indiebound.org/book/9780062938787',
        bookImageSrc: 'https://www.wfmu.org/Gfx/playlist_images/TD/The-Arrest-by-Jonathan-Lethem-Book-Review-Book-and_6115903776324783_pt.jpg',
    },
    {
        date:         'January 18, 2021',
        title:        'Sarah Brayne, author, "Predict and Surveil: Data, Discretion, and the Future of Policing."',
        showAnchor:   'https://www.wfmu.org/playlists/shows/100409',
        bookAnchor:   'https://global.oup.com/academic/product/policing-data-9780190684099?cc=us&lang=en&',
        bookImageSrc: 'https://global.oup.com/academic/covers/pdp/9780190684099',
    },
    {
        date:         'January 4, 2021',
        title:        'The past and future of the office with Sheila Liming, author of "Office"',
        showAnchor:   'https://www.wfmu.org/playlists/shows/99914',
        bookAnchor:   'https://www.indiebound.org/book/9781501348679',
        bookImageSrc: 'https://images.booksense.com/images/679/348/9781501348679.jpg',
    },
    {
        date:         'December 21, 2020',
        title:        'Station Manager Ken with Poet and Author Elisa Gabbert on Doomscrolling, Contagious Conversion Disorder and More',
        showAnchor:   'https://www.wfmu.org/playlists/shows/99544',
        bookAnchor:   'http://www.elisagabbert.com/the-unreality-of-memory/',
        bookImageSrc: 'http://www.elisagabbert.com/wp-content/uploads/2020/02/8A8433E1-9CD1-4303-A381-2C198342C7EA.png',
    },
    {
        date:         'November 30, 2020',
        title:        'Adrian Hon, author, "A New History of the Future in 100 Objects"',
        showAnchor:   'https://www.wfmu.org/playlists/shows/98894',
        bookAnchor:   'https://www.indiebound.org/book/9780262539371',
        bookImageSrc: 'https://images.booksense.com/images/371/539/9780262539371.jpg',
    },
    {
        date:         'November 2, 2020',
        title:        'William Deresiewicz, author, "The Death of the Artist"',
        showAnchor:   'https://www.wfmu.org/playlists/shows/98099',
        bookAnchor:   'https://us.macmillan.com/books/9781250125514',
        bookImageSrc: 'https://images.macmillan.com/folio-assets/macmillan_us_frontbookcovers_350W/9781250125514.jpg',
    },
    {
        date:         'October 26, 2020',
        title:        'Station Manager Ken Fills in: Interview with Author &amp; Journalist Matt Taibbi',
        showAnchor:   'https://www.wfmu.org/playlists/shows/97897',
        bookAnchor:   'https://www.indiebound.org/book/9780385529969',
        bookImageSrc: 'https://images.booksense.com/images/969/529/9780385529969.jpg',
    },
    {
        date:         'October 5, 2020',
        title:        'Alan Jacobs, author, "Breaking Bread with the Dead"',
        showAnchor:   'https://www.wfmu.org/playlists/shows/97257',
        bookAnchor:   'https://www.penguinrandomhouse.com/books/608945/breaking-bread-with-the-dead-by-alan-jacobs/',
        bookImageSrc: 'https://images4.penguinrandomhouse.com/cover/9781984878403',
    },
    {
        date:         'September 7, 2020',
        title:        'Cory Doctorow, author, "How to Destroy Surveillance Capitalism"',
        showAnchor:   'https://www.wfmu.org/playlists/shows/96381',
        bookAnchor:   'https://onezero.medium.com/how-to-destroy-surveillance-capitalism-8135e6744d59',
        bookImageSrc: 'https://miro.medium.com/max/2600/1*vrrdFKdk2Rej6E7A_M4lFA.gif',
    },
    {
        date:         'August 24, 2020',
        title:        'Katie Mack, author, "The End of Everything"',
        showAnchor:   'https://www.wfmu.org/playlists/shows/95943',
        bookAnchor:   'http://www.astrokatie.com/book',
        // eslint-disable-next-line max-len
        bookImageSrc: 'https://images.squarespace-cdn.com/content/v1/52060eb0e4b021ed6a208a73/1611953703422-B5HI45V8AHCOHT3XTPI8/ke17ZwdGBToddI8pDm48kBDCGSZMTsEKV9FW6FXfR4RZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Xj1nVWs2aaTtWBneO2WM-teihA1JYWR-3Or7_-5P6lhA54g9fAgNExaK_3pjsk8OQ/book+with+NYT+sticker.jpg?format=750w',
    },
    {
        date:         'August 17, 2020',
        title:        'Elaine Kasket, author, "All the Ghosts in the Machine" - on the afterlife of data',
        showAnchor:   'https://www.wfmu.org/playlists/shows/95722',
        bookAnchor:   'https://onezero.medium.com/how-to-destroy-surveillance-capitalism-8135e6744d59',
        bookImageSrc: 'https://miro.medium.com/max/2600/1*vrrdFKdk2Rej6E7A_M4lFA.gif',
    },
    {
        date:         'August 10, 2020',
        title:        'Joel Kotkin, author, "The Coming of Neo-Feudalism"',
        showAnchor:   'https://www.wfmu.org/playlists/shows/95455',
        bookAnchor:   'https://bookshop.org/books/the-coming-of-neo-feudalism-a-warning-to-the-global-middle-class/9781641770941',
        bookImageSrc: 'https://images-production.bookshop.org/spree/images/attachments/11038373/original/9781641770941.jpg?1588837170',

    },
    {
        date:         'July 27, 2020',
        title:        'Discussing free speech with Scott Johnston, author, "Campusland"',
        showAnchor:   'https://www.wfmu.org/playlists/shows/95057',
        bookAnchor:   'https://us.macmillan.com/books/9781250222374',
        bookImageSrc: 'https://images.macmillan.com/folio-assets/macmillan_us_frontbookcovers_350W/9781250222374.jpg',
    },
    {
        date:         'July 20, 2020',
        title:        'Ed Park, author of "Personal Days," on reading during a pandemic',
        showAnchor:   'https://www.wfmu.org/playlists/shows/94829',
        bookAnchor:   'https://www.indiebound.org/book/9780812978575',
        bookImageSrc: 'https://images.booksense.com/images/575/978/9780812978575.jpg',
    },
    {
        date:         'July 6, 2020',
        title:        'Ben Green, author, "The Smart Enough City"',
        showAnchor:   'https://www.wfmu.org/playlists/shows/94402',
        bookAnchor:   'https://smartenoughcity.mitpress.mit.edu/pub/foreword/release/1',
        bookImageSrc: 'https://www.wfmu.org/Gfx/playlist_images/TD/smart-enough-city-cover450_5940416650899620.jpg',
    },
    {
        date:         'May 25, 2020',
        title:        'Steven Levy, author, "Facebook: The Inside Story"',
        showAnchor:   'https://www.wfmu.org/playlists/shows/93497',
        bookAnchor:   'https://www.indiebound.org/book/9780735213159',
        bookImageSrc: 'https://images.booksense.com/images/159/213/9780735213159.jpg',
    },
    {
        date:         'May 11, 2020',
        title:        'Jathan Sadowski, author, "Too Smart: How Digital Capitalism is Extracting Data, Controlling Our Lives, and Taking Over the World"',
        showAnchor:   'https://www.wfmu.org/playlists/shows/93184',
        bookAnchor:   'https://mitpress.mit.edu/books/too-smart',
        bookImageSrc: 'https://mitpress.mit.edu/sites/default/files/styles/large_book_cover/http/mitp-content-server.mit.edu%3A18180/books/covers/cover/%3Fcollid%3Dbooks_covers_0%26isbn%3D9780262538589%26type%3D.jpg?itok=RxCyQeeg',
    },
    {
        date:         'April 20, 2020',
        title:        'Toby Ord, author, "The Precipice: Existential Risk and the Future of Humanity"',
        showAnchor:   'https://www.wfmu.org/playlists/shows/92739',
        bookAnchor:   'https://bookshop.org/books/the-precipice-existential-risk-and-the-future-of-humanity/9780316484916',
        bookImageSrc: 'https://images-production.bookshop.org/spree/images/attachments/94650/original/9780316484916.jpg?1589085597',
    },
    {
        date:         'April 13, 2020',
        title:        'David Sax, author, "The Soul of an Entrepreneur"',
        showAnchor:   'https://www.wfmu.org/playlists/shows/92622',
        bookAnchor:   'https://bookshop.org/books/the-soul-of-an-entrepreneur-work-and-life-beyond-the-startup-myth/9781541736009',
        bookImageSrc: 'https://images-production.bookshop.org/spree/images/attachments/10185308/original/SoulofanEntrepreneur.jpg?1591796338',
    },
    {
        date:         'March 30, 2020',
        title:        'Kyle Chayka, author, "The Longing for Less: Living with Minimalism"',
        showAnchor:   'https://www.wfmu.org/playlists/shows/92340',
        bookAnchor:   'https://www.indiebound.org/book/9781635572100',
        bookImageSrc: 'https://images.booksense.com/images/100/572/9781635572100.jpg',
    },
    {
        date:         'February 24, 2020',
        title:        "Rana Foroohar, author, \"Don't Be Evil: How Big Tech Betrayed Its Founding Principles – And All Of Us\"",
        showAnchor:   'https://www.wfmu.org/playlists/shows/91591',
        bookAnchor:   'https://www.indiebound.org/book/9781984823984',
        bookImageSrc: 'https://images.booksense.com/images/984/823/9781984823984.jpg',
    },
    {
        date:         'February 3, 2020',
        title:        'David Courtwright, author, "The Age of Addiction"',
        showAnchor:   'https://www.wfmu.org/playlists/shows/91199',
        bookAnchor:   'https://www.hup.harvard.edu/catalog.php?isbn=9780674737372',
        bookImageSrc: 'https://www.hup.harvard.edu/images/jackets/9780674737372.jpg',
    },
    {
        date:         'January 27, 2020',
        title:        'Melanie Mitchell, author, "Artificial Intelligence: A Guide for Thinking Humans"',
        showAnchor:   'https://www.wfmu.org/playlists/shows/91064',
        bookAnchor:   'https://www.indiebound.org/book/9780374257835',
        bookImageSrc: 'https://images.booksense.com/images/835/257/9780374257835.jpg',
    },
    {
        date:         'January 13, 2020',
        title:        'Aaron Roth, co-author, "The Ethical Algorithm"',
        showAnchor:   'https://www.wfmu.org/playlists/shows/90783',
        bookAnchor:   'https://global.oup.com/academic/product/the-ethical-algorithm-9780190948207?cc=us&lang=en&',
        bookImageSrc: 'https://global.oup.com/academic/covers/pdp/9780190948207',

    },
    {
        date:       'December 9, 2019',
        title:      'Doug Hill, author, "Not So Fast: Thinking Twice About Technology"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/90042',
    },
    {
        date:       'November 11, 2019',
        title:      'Tim Maughan, author, "Infinite Detail"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/89435',
    },
    {
        date:       'October 14, 2019',
        title:      'Astra Taylor, author, "Democracy May Not Exist, But We’ll Miss it When It’s Gone"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/88916',
    },
    {
        date:       'September 16, 2019',
        title:      'Sarah T. Roberts, author of "Behind the Screen," on content moderators',
        showAnchor: 'https://www.wfmu.org/playlists/shows/88340',
    },
    {
        date:       'September 9, 2019',
        title:      'Arthur Holland Michel, author, "Eyes in the Sky"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/88222',
    },
    {
        date:       'September 2, 2019',
        title:      'Carl Miller, author, "The Death of the Gods: The New Global Power Grab"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/88078',
    },
    {
        date:       'August 26, 2019',
        title:      'Jeremiah Moss, author, "Vanishing New York"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/87938',
    },
    {
        date:       'August 12, 2019',
        title:      'Amy Webb, author of "The Big Nine," talks about AI and our future',
        showAnchor: 'https://www.wfmu.org/playlists/shows/87517',
    },
    {
        date:       'July 15, 2019',
        title:      'Matt Stroud, author, "Thin Blue Lie" ',
        showAnchor: 'https://www.wfmu.org/playlists/shows/87071',
    },
    {
        date:       'July 1, 2019',
        title:      'Archive show: Shoshana Zuboff, author, "The Age of Surveillance Capitalism"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/86779',
    },
    {
        date:       'June 17, 2019',
        title:      'Damon Krukowski, podcaster and author, "Ways of Hearing"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/86480',
    },
    {
        date:       'June 10, 2019',
        title:      'Jenny Odell, author, "How to Do Nothing"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/86382',
    },
    {
        date:       'June 3, 2019',
        title:      'Joseph Menn, author, "Cult of the Dead Cow"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/86237',
    },
    {
        date:       'May 27, 2019',
        title:      'Justin E. H. Smith, author, "Irrationality: A History of the Dark Side of Reason"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/86103',
    },
    {
        date:       'May 13, 2019',
        title:      'Shoshana Zuboff, author, "The Age of Surveillance Capitalism"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/85846',
    },
    {
        date:       'May 6, 2019',
        title:      'Roger McNamee, author, "Zucked: Waking Up to the Facebook Catastrophe"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/85699',
    },
    {
        date:       'April 15, 2019',
        title:      'Clive Thompson, author, "Coders"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/85306',
    },
    {
        date:       'February 25, 2019',
        title:      'Tim Harford, author and economist, on kicking his smartphone addiction (plus, a cameo by Catherine Price!)',
        showAnchor: 'https://www.wfmu.org/playlists/shows/84406',
    },
    {
        date:       'February 4, 2019',
        title:      'Prof. Susan Crawford, author, "Fiber"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/84002',
    },
    {
        date:       'January 28, 2019',
        title:      'Douglas Rushkoff, author, "Team Human"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/83873',
    },
    {
        date:       'January 21, 2019',
        title:      'Prof. Safiya Noble, author, "Algorithms of Oppression"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/83738',
    },
    {
        date:       'December 10, 2018',
        title:      'Rex Sorgatz, author, "The Encyclopedia of Misinformation"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/82932',
    },
    {
        date:       'November 26, 2018',
        title:      'Jonathan Tepper, author, "The Myth of Capitalism"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/82666',
    },
    {
        date:       'November 19, 2018',
        title:      'Frank Pasquale, author of "The Black Box Society," on secret algorithms',
        showAnchor: 'https://www.wfmu.org/playlists/shows/82516',
    },
    {
        date:       'October 22, 2018',
        title:      'Yasha Levine, author, "Surveillance Valley"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/81998',
    },
    {
        date:       'August 13, 2018',
        title:      'James Bridle, author of "New Dark Age"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/80777',
    },
    {
        date:       'July 16, 2018',
        title:      'Jaron Lanier, author, "Ten Arguments for Deleting Your Social Media Accounts Right Now"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/80248',
    },
    {
        date:       'June 25, 2018',
        title:      'Siva Vaidhyanathan, author "Antisocial Media: How Facebook Disconnects Us and Undermines Democracy"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/79875',
    },
    {
        date:       'June 11, 2018',
        title:      'Brett Frischmann, co-author, "Re-Engineering Humanity"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/79640',
    },
    {
        date:       'June 4, 2018',
        title:      'Andrew Keen, author, "How to Fix the Future"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/79517',
    },
    {
        date:       'May 28, 2018',
        title:      'Meredith Broussard, author, "Artificial Unintelligence"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/79354',
    },
    {
        date:       'May 14, 2018',
        title:      'David Sax, author, "The Revenge of Analog"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/79064',
    },
    {
        date:       'May 7, 2018',
        title:      'Anya Kamenetz, author, "The Art of Screen Time"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/78935',
    },
    {
        date:       'April 16, 2018',
        title:      'Catherine Price, author, "How to Break Up With Your Phone"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/78440',
    },
    {
        date:       'February 5, 2018',
        title:      'Christopher Potter, author of "Earth Gazers," on tech and our image of humanity',
        showAnchor: 'https://www.wfmu.org/playlists/shows/77248',
    },
    {
        date:       'January 15, 2018',
        title:      'Jonathan Taplin, author of "Move Fast and Break Things," on Big Tech undermining democracy',
        showAnchor: 'https://www.wfmu.org/playlists/shows/76913',
    },
    {
        date:       'January 8, 2018',
        title:      'Jace Clayton, aka DJ /rupture, author, "Uproot: Travels in 21st-Century Music and Digital Culture"',
        showAnchor: 'https://www.wfmu.org/playlists/shows/76803',
    },
    {
        date:       'December 18, 2017',
        title:      'Steven Levy, tech journalist and author',
        showAnchor: 'https://www.wfmu.org/playlists/shows/76405',
    },
    {
        date:       'December 4, 2017',
        title:      'Nir Eyal, author of "Hooked," on building habit-forming apps',
        showAnchor: 'https://www.wfmu.org/playlists/shows/76209',
    },
    {
        date:       'October 9, 2017',
        title:      'Why you should play games, feat. game designer &amp; author Eric Zimmerman',
        showAnchor: 'https://www.wfmu.org/playlists/shows/75248',
    },
];
