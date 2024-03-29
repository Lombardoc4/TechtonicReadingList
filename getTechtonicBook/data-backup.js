const data = [
    {
        "date": "February 13, 2023",
        "title": "Susan Linn, author, \"Who's Raising the Kids?\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/124657",
        "bookSrc": "https://thenewpress.com/books/whos-raising-kids",
        "bookImageSrc": "https://www.wfmu.org/Gfx/playlist_images/TD/who_s-raising-the-kids-cover_6763144243245490_pt.jpg"
    },
    {
        "date": "January 23, 2023",
        "title": "Sarah Lamdan, author, \"Data Cartels\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/124012",
        "bookSrc": "https://www-sup.stanford.edu/books/title/?id=33205",
        "bookImageSrc": "https://wfmu.org/Gfx/playlist_images/TD/data-cartels1200_6745138276498419_pt.jpg"
    },
    {
        "date": "December 12, 2022",
        "title": "Rachel Ignotofsky, author, \"The History of the Computer\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/122648",
        "bookAnchor": "https://www.indiebound.org/book/9781984857422",
        "bookImageSrc": "https://images.booksense.com/images/422/857/9781984857422.jpg"
    },
    {
        "date": "December 5, 2022",
        "title": "On game design: Eric Zimmerman, author, \"The Rules We Break\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/122380",
        "bookAnchor": "https://www.indiebound.org/book/9781648960673",
        "bookImageSrc": "https://images.booksense.com/images/673/960/9781648960673.jpg"
    },
    {
        "date": "November 21, 2022",
        "title": "David Sax, author, \"The Future is Analog\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/121868",
        "bookAnchor": "https://www.indiebound.org/book/9781541701557",
        "bookImageSrc": "https://images.booksense.com/images/557/701/9781541701557.jpg"
    },
    {
        "date": "November 7, 2022",
        "title": "Carissa Véliz, author, \"Privacy is Power\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/121426",
        "bookAnchor": "https://www.indiebound.org/book/9781612199672",
        "bookImageSrc": "https://images.booksense.com/images/672/199/9781612199672.jpg"
    },
    {
        "date": "October 24, 2022",
        "title": "Adrian Hon, author, \"You've Been Played\"",
        "showAnchor": "https://wfmu.org/playlists/shows/120981",
        "bookAnchor": "https://www.indiebound.org/book/9781541600171",
        "bookImageSrc": "https://images.booksense.com/images/171/600/9781541600171.jpg"
    },
    {
        "date": "October 3, 2022",
        "title": "Douglas Rushkoff on his new book, \"Survival of the Richest: Escape Fantasies of the Tech Billionaires\"",
        "showAnchor": "https://wfmu.org/playlists/shows/120314",
        "bookAnchor": "https://www.indiebound.org/book/9780393881066",
        "bookImageSrc": "https://images.booksense.com/images/066/881/9780393881066.jpg"
    },
    {
        "date": "September 19, 2022",
        "title": "Aaron Sachs, author, \"Up from the Depths\" – on Melville, Mumford, and difficult times",
        "showAnchor": "https://www.wfmu.org/playlists/shows/119863",
        "bookAnchor": "https://www.indiebound.org/book/9780691215419",
        "bookImageSrc": "https://images.booksense.com/images/419/215/9780691215419.jpg"
    },
    {
        "date": "August 8, 2022",
        "title": "James Bridle, author, \"Ways of Being\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/118497",
        "bookAnchor": "https://us.macmillan.com/books/9780374601119/waysofbeing",
        "bookImageSrc": "https://mpd-biblio-covers.imgix.net/9780374601119.jpg?w=900"
    },
    {
        "date": "July 25, 2022",
        "title": "Paris Marx, author, \"Road to Nowhere: What Silicon Valley Gets Wrong about the Future of Transportation\"",
        "showAnchor": "https://wfmu.org/playlists/shows/117967",
        "bookAnchor": "https://www.versobooks.com/books/3995-road-to-nowheree",
        "bookImageSrc": "https://cdn-ed.versobooks.com/images/000016/335/9781839765889-3b28f9aa5a46b802d7808eb0ace1b06e.jpg"
    },
    {
        "date": "July 18, 2022",
        "title": "Ben Tarnoff, author, \"Internet for the People\"",
        "showAnchor": "https://wfmu.org/playlists/shows/117816",
        "bookAnchor": "https://www.versobooks.com/books/3927-internet-for-the-people",
        "bookImageSrc": "https://cdn-ed.versobooks.com/images/000015/906/9781839762024-ebf8b39b639224180effcdd0266a448a.jpg"
    },
    {
        "date": "June 27, 2022",
        "title": "Jonathan Crary, author, \"Scorched Earth: Beyond the Digital Age to a Post-Capitalist World\"",
        "showAnchor": "https://wfmu.org/playlists/shows/117145",
        "bookAnchor": "https://www.versobooks.com/books/3965-scorched-earth",
        "bookImageSrc": "https://cdn-ed.versobooks.com/images/000016/152/9781784784447-708f8f7584bda2efdb0514488e07f9cd.jpg"
    },
    {
        "date": "June 13, 2022",
        "title": "Jennifer Egan, author, \"The Candy House\"",
        "showAnchor": "https://wfmu.org/playlists/shows/116690",
        "bookAnchor": "https://www.indiebound.org/book/9781476716763",
        "bookImageSrc": "https://images.booksense.com/images/763/716/9781476716763.jpg"
    },
    {
        "date": "May 30, 2022",
        "title": "Jeff Deutsch, author, \"In Praise of Good Bookstores\"",
        "showAnchor": "https://wfmu.org/playlists/shows/116196",
        "bookAnchor": "https://press.princeton.edu/books/hardcover/9780691207766/in-praise-of-good-bookstores",
        "bookImageSrc": "https://pup-assets.imgix.net/onix/images/9780691207766.jpg?w=1500&auto=format"
    },
    {
        "date": "May 9, 2022",
        "title": "Carolyn Chen, author, \"Work Pray Code: When Work Becomes Religion in Silicon Valley\"",
        "showAnchor": "https://wfmu.org/playlists/shows/115544",
        "bookAnchor": "https://www.indiebound.org/book/9780691219080",
        "bookImageSrc": "https://images.booksense.com/images/080/219/9780691219080.jpg"
    },
    {
        "date": "April 11, 2022",
        "title": "Sasha Stiles, poet and artist, on her book \"Technelegy\"",
        "showAnchor": "https://wfmu.org/playlists/shows/114436",
        "bookAnchor": "https://blackspringpressgroup.com/products/technelegy",
        "bookImageSrc": "https://cdn.shopify.com/s/files/1/0985/7354/products/Cover_Stiles_pre_1200x.jpg?v=1627557139"
    },
    {
        "date": "April 4, 2022",
        "title": "Justin E. H. Smith, author, \"The Internet Is Not What You Think It Is\"",
        "showAnchor": "https://wfmu.org/playlists/shows/114234",
        "bookAnchor": "https://www.indiebound.org/book/9780691212326",
        "bookImageSrc": "https://images.booksense.com/images/326/212/9780691212326.jpg"
    },
    {
        "date": "February 21, 2022",
        "title": "Kelly Weill, author, \"Off the Edge: Flat Earthers, Conspiracy Culture, and Why People Will Believe Anything\"",
        "showAnchor": "https://wfmu.org/playlists/shows/112917",
        "bookAnchor": "https://www.indiebound.org/book/9781643750682",
        "bookImageSrc": "https://images.booksense.com/images/682/750/9781643750682.jpg"
    },
    {
        "date": "February 7, 2022",
        "title": "Alec MacGillis, author, \"Fulfillment: Winning and Losing in One-Click America\"",
        "showAnchor": "https://wfmu.org/playlists/shows/112493",
        "bookAnchor": "https://www.indiebound.org/book/9780374159276",
        "bookImageSrc": "https://images.booksense.com/images/276/159/9780374159276.jpg"
    },
    {
        "date": "January 17, 2022",
        "title": "Darren Byler, author, \"In the Camps\"",
        "showAnchor": "https://wfmu.org/playlists/shows/111772",
        "bookAnchor": "https://www.indiebound.org/book/9781735913629",
        "bookImageSrc": "https://images.booksense.com/images/629/913/9781735913629.jpg"
    },
    {
        "date": "December 27, 2021",
        "title": "Mark Schatzker, author, \"The End of Craving\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/111128",
        "bookAnchor": "https://www.indiebound.org/book/9781501192470",
        "bookImageSrc": "https://images.booksense.com/images/470/192/9781501192470.jpg"
    },
    {
        "date": "November 15, 2021 ",
        "title": "Tyson Yunkaporta, author, \"Sand Talk\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/109787",
        "bookAnchor": "https://www.indiebound.org/book/9781737589709",
        "bookImageSrc": "https://images.booksense.com/images/709/589/9781737589709.jpg"
    },
    {
        "date": "November 8, 2021",
        "title": "Tyson Yunkaporta, author, \"Sand Talk\"",
        "showAnchor": "https://wfmu.org/playlists/shows/109486",
        "bookAnchor": "https://www.indiebound.org/book/9780062975621",
        "bookImageSrc": "https://images.booksense.com/images/621/975/9780062975621.jpg"
    },
    {
        "date": "November 1, 2021",
        "title": "David Yoon, author, \"Version Zero\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/109323",
        "bookAnchor": "https://www.indiebound.org/book/9780593190357",
        "bookImageSrc": "https://images.booksense.com/images/357/190/9780593190357.jpg"
    },
    {
        "date": "October 11, 2021",
        "title": "David Bodanis, author of \"The Art of Fairness\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/108697",
        "bookAnchor": "https://www.abramsbooks.com/product/art-of-fairness_9781419756351/",
        "bookImageSrc": "https://www.abramsbooks.com/cover_images/1/9781419756351_s3.jpg"
    },
    {
        "date": "September 27, 2021",
        "title": "Joe Turow, author, \"The Voice Catchers\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/108276",
        "bookAnchor": "https://www.indiebound.org/book/9780300248036",
        "bookImageSrc": "https://images.booksense.com/images/036/248/9780300248036.jpg"
    },
    {
        "date": "August 23, 2021",
        "title": "Shannon Mattern, author, \"A City Is Not A Computer\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/107151",
        "bookAnchor": "https://press.princeton.edu/books/paperback/9780691208053/a-city-is-not-a-computer",
        "bookImageSrc": "https://pup-assets.imgix.net/onix/images/9780691208053.jpg?w=410&auto=format"
    },
    {
        "date": "August 16, 2021",
        "title": "The WeWork fiasco - with Eliot Brown, author, \"The Cult of We\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/106894",
        "bookAnchor": "https://www.indiebound.org/book/9780593237113",
        "bookImageSrc": "https://images.booksense.com/images/113/237/9780593237113.jpg"
    },
    {
        "date": "June 19, 2021",
        "title": "Jon Fasman, author, \"We See It All\" ",
        "showAnchor": "https://www.wfmu.org/playlists/shows/105971",
        "bookAnchor": "https://www.indiebound.org/book/9781541730670",
        "bookImageSrc": "https://images.booksense.com/images/670/730/9781541730670.jpg"
    },
    {
        "date": "July 12, 2021",
        "title": "Annette LeMay Burke, photographer and author, \"Fauxliage\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/105743",
        "bookAnchor": "http://atelierlemay.com/book/index.html",
        "bookImageSrc": "https://d11pj51h4ledry.cloudfront.net/wp-content/uploads/2021/03/29135720/Annette_LeMay_Burke_Fauxliage_Book.jpg"
    },
    {
        "date": "June 28, 2021",
        "title": "Craig Taylor, author, \"New Yorkers: A City and Its People in Our Time\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/105312",
        "bookAnchor": "https://www.indiebound.org/book/9780393242324",
        "bookImageSrc": "https://images.booksense.com/images/324/242/9780393242324.jpg"
    },
    {
        "date": "June 7, 2021",
        "title": "Amelia Pang, author, \"Made in China,\" on forced labor creating American products",
        "showAnchor": "https://www.wfmu.org/playlists/shows/104586",
        "bookAnchor": "https://www.indiebound.org/book/9781616209179",
        "bookImageSrc": "https://images.booksense.com/images/179/209/9781616209179.jpg"
    },
    {
        "date": "May 10, 2021",
        "title": "Pete Davis, author, \"Dedicated\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/103744",
        "bookAnchor": "https://www.indiebound.org/book/9781982140908",
        "bookImageSrc": "https://images.booksense.com/images/908/140/9781982140908.jpg"
    },
    {
        "date": "May 3, 2021",
        "title": "Frank Pasquale, author, \"New Laws of Robotics\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/103517",
        "bookAnchor": "https://www.hup.harvard.edu/catalog.php?isbn=9780674975224",
        "bookImageSrc": "https://www.hup.harvard.edu/images/jackets/9780674975224-lg.jpg"
    },
    {
        "date": "April 26, 2021",
        "title": "Dennis Glover, author, \"Factory 19\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/103307",
        "bookAnchor": "https://www.blackincbooks.com.au/books/factory-19",
        "bookImageSrc": "https://www.blackincbooks.com.au/sites/default/files/styles/book_large/public/Factory%2019%20%28online%29%20%281%29.jpg"
    },
    {
        "date": "April 19, 2021",
        "title": "Bob Ostertag, musician and author, \"Facebooking the Anthropocene in Raja Ampat\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/103086",
        "bookAnchor": "https://pmpress.org/index.php?l=product_detail&p=1142",
        "bookImageSrc": "https://pmpress.org/images/products/large_1142_facebooking_the_anthropocene.jpg"
    },
    {
        "date": "April 5, 2021",
        "title": "Tim Harford, author, \"The Data Detective\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/102661",
        "bookAnchor": "https://timharford.com/books/datadetective/",
        "bookImageSrc": "https://timharford.com/wp-content/uploads/2020/11/data-detective.png"
    },
    {
        "date": "March 22, 2021",
        "title": "Paul Kingsnorth, author, \"Alexandria\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/102231",
        "bookAnchor": "https://www.indiebound.org/book/9781644450352",
        "bookImageSrc": "https://images.booksense.com/images/352/450/9781644450352.jpg"
    },
    {
        "date": "February 22, 2021",
        "title": "Annie Jacobsen, author, \"First Platoon\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/101390",
        "bookAnchor": "https://www.indiebound.org/book/9781524746667",
        "bookImageSrc": "https://images.booksense.com/images/667/746/9781524746667.jpg"
    },
    {
        "date": "February 15, 2021",
        "title": "Andrea Pitzer, author, \"Icebound: Shipwrecked at the Edge of the World\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/101180",
        "bookAnchor": "https://www.indiebound.org/book/9781982113346",
        "bookImageSrc": "https://images.booksense.com/images/346/113/9781982113346.jpg"
    },
    {
        "date": "February 1, 2021",
        "title": "Adrian Daub, author, \"What Tech Calls Thinking\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/100846",
        "bookAnchor": "https://www.indiebound.org/book/9780374538644",
        "bookImageSrc": "https://www.wfmu.org/Gfx/playlist_images/TD/what-tech-calls-thinking-cover_6122120008698823_pt.jpg"
    },
    {
        "date": "January 25, 2021",
        "title": "Jonathan Lethem, author, \"The Arrest\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/100618",
        "bookAnchor": "https://www.indiebound.org/book/9780062938787",
        "bookImageSrc": "https://www.wfmu.org/Gfx/playlist_images/TD/The-Arrest-by-Jonathan-Lethem-Book-Review-Book-and_6115903776324783_pt.jpg"
    },
    {
        "date": "January 18, 2021",
        "title": "Sarah Brayne, author, \"Predict and Surveil: Data, Discretion, and the Future of Policing.\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/100409",
        "bookAnchor": "https://global.oup.com/academic/product/policing-data-9780190684099?cc=us&lang=en&",
        "bookImageSrc": "https://global.oup.com/academic/covers/pdp/9780190684099"
    },
    {
        "date": "January 4, 2021",
        "title": "The past and future of the office with Sheila Liming, author of \"Office\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/99914",
        "bookAnchor": "https://www.indiebound.org/book/9781501348679",
        "bookImageSrc": "https://images.booksense.com/images/679/348/9781501348679.jpg"
    },
    {
        "date": "December 21, 2020",
        "title": "Station Manager Ken with Poet and Author Elisa Gabbert on Doomscrolling, Contagious Conversion Disorder and More",
        "showAnchor": "https://www.wfmu.org/playlists/shows/99544",
        "bookAnchor": "http://www.elisagabbert.com/the-unreality-of-memory/",
        "bookImageSrc": "./img/TheUnrealityOfMemory.jpg"
    },
    {
        "date": "November 30, 2020",
        "title": "Adrian Hon, author, \"A New History of the Future in 100 Objects\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/98894",
        "bookAnchor": "https://www.indiebound.org/book/9780262539371",
        "bookImageSrc": "https://images.booksense.com/images/371/539/9780262539371.jpg"
    },
    {
        "date": "November 2, 2020",
        "title": "William Deresiewicz, author, \"The Death of the Artist\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/98099",
        "bookAnchor": "https://us.macmillan.com/books/9781250125514",
        "bookImageSrc": "https://images.macmillan.com/folio-assets/macmillan_us_frontbookcovers_350W/9781250125514.jpg"
    },
    {
        "date": "October 26, 2020",
        "title": "Station Manager Ken Fills in: Interview with Author &amp; Journalist Matt Taibbi",
        "showAnchor": "https://www.wfmu.org/playlists/shows/97897",
        "bookAnchor": "https://www.indiebound.org/book/9780385529969",
        "bookImageSrc": "https://images.booksense.com/images/969/529/9780385529969.jpg"
    },
    {
        "date": "October 5, 2020",
        "title": "Alan Jacobs, author, \"Breaking Bread with the Dead\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/97257",
        "bookAnchor": "https://www.penguinrandomhouse.com/books/608945/breaking-bread-with-the-dead-by-alan-jacobs/",
        "bookImageSrc": "https://images4.penguinrandomhouse.com/cover/9781984878403"
    },
    {
        "date": "September 7, 2020",
        "title": "Cory Doctorow, author, \"How to Destroy Surveillance Capitalism\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/96381",
        "bookAnchor": "https://onezero.medium.com/how-to-destroy-surveillance-capitalism-8135e6744d59",
        "bookImageSrc": "https://miro.medium.com/max/2600/1*vrrdFKdk2Rej6E7A_M4lFA.gif"
    },
    {
        "date": "August 24, 2020",
        "title": "Katie Mack, author, \"The End of Everything\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/95943",
        "bookAnchor": "http://www.astrokatie.com/book",
        "bookImageSrc": "https://images.squarespace-cdn.com/content/v1/52060eb0e4b021ed6a208a73/1611953703422-B5HI45V8AHCOHT3XTPI8/ke17ZwdGBToddI8pDm48kBDCGSZMTsEKV9FW6FXfR4RZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Xj1nVWs2aaTtWBneO2WM-teihA1JYWR-3Or7_-5P6lhA54g9fAgNExaK_3pjsk8OQ/book+with+NYT+sticker.jpg?format=750w"
    },
    {
        "date": "August 17, 2020",
        "title": "Elaine Kasket, author, \"All the Ghosts in the Machine\" - on the afterlife of data",
        "showAnchor": "https://www.wfmu.org/playlists/shows/95722",
        "bookAnchor": "https://www.indiebound.org/book/9781472141903",
        "bookImageSrc": "https://images.booksense.com/images/903/141/9781472141903.jpg"
    },
    {
        "date": "August 10, 2020",
        "title": "Joel Kotkin, author, \"The Coming of Neo-Feudalism\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/95455",
        "bookAnchor": "https://bookshop.org/books/the-coming-of-neo-feudalism-a-warning-to-the-global-middle-class/9781641770941",
        "bookImageSrc": "https://images-production.bookshop.org/spree/images/attachments/11038373/original/9781641770941.jpg?1588837170"
    },
    {
        "date": "July 27, 2020",
        "title": "Discussing free speech with Scott Johnston, author, \"Campusland\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/95057",
        "bookAnchor": "https://us.macmillan.com/books/9781250222374",
        "bookImageSrc": "https://images.macmillan.com/folio-assets/macmillan_us_frontbookcovers_350W/9781250222374.jpg"
    },
    {
        "date": "July 20, 2020",
        "title": "Ed Park, author of \"Personal Days,\" on reading during a pandemic",
        "showAnchor": "https://www.wfmu.org/playlists/shows/94829",
        "bookAnchor": "https://www.indiebound.org/book/9780812978575",
        "bookImageSrc": "https://images.booksense.com/images/575/978/9780812978575.jpg"
    },
    {
        "date": "July 6, 2020",
        "title": "Ben Green, author, \"The Smart Enough City\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/94402",
        "bookAnchor": "https://smartenoughcity.mitpress.mit.edu/pub/foreword/release/1",
        "bookImageSrc": "https://www.wfmu.org/Gfx/playlist_images/TD/smart-enough-city-cover450_5940416650899620.jpg"
    },
    {
        "date": "May 25, 2020",
        "title": "Steven Levy, author, \"Facebook: The Inside Story\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/93497",
        "bookAnchor": "https://www.indiebound.org/book/9780735213159",
        "bookImageSrc": "https://images.booksense.com/images/159/213/9780735213159.jpg"
    },
    {
        "date": "May 11, 2020",
        "title": "Jathan Sadowski, author, \"Too Smart: How Digital Capitalism is Extracting Data, Controlling Our Lives, and Taking Over the World\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/93184",
        "bookAnchor": "https://mitpress.mit.edu/books/too-smart",
        "bookImageSrc": "https://mitpress.mit.edu/sites/default/files/styles/large_book_cover/http/mitp-content-server.mit.edu%3A18180/books/covers/cover/%3Fcollid%3Dbooks_covers_0%26isbn%3D9780262538589%26type%3D.jpg?itok=RxCyQeeg"
    },
    {
        "date": "April 20, 2020",
        "title": "Toby Ord, author, \"The Precipice: Existential Risk and the Future of Humanity\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/92739",
        "bookAnchor": "https://bookshop.org/books/the-precipice-existential-risk-and-the-future-of-humanity/9780316484916",
        "bookImageSrc": "https://images-production.bookshop.org/spree/images/attachments/94650/original/9780316484916.jpg?1589085597"
    },
    {
        "date": "April 13, 2020",
        "title": "David Sax, author, \"The Soul of an Entrepreneur\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/92622",
        "bookAnchor": "https://bookshop.org/books/the-soul-of-an-entrepreneur-work-and-life-beyond-the-startup-myth/9781541736009",
        "bookImageSrc": "https://images-production.bookshop.org/spree/images/attachments/10185308/original/SoulofanEntrepreneur.jpg?1591796338"
    },
    {
        "date": "March 30, 2020",
        "title": "Kyle Chayka, author, \"The Longing for Less: Living with Minimalism\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/92340",
        "bookAnchor": "https://www.indiebound.org/book/9781635572100",
        "bookImageSrc": "https://images.booksense.com/images/100/572/9781635572100.jpg"
    },
    {
        "date": "February 24, 2020",
        "title": "Rana Foroohar, author, \"Don't Be Evil: How Big Tech Betrayed Its Founding Principles – And All Of Us\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/91591",
        "bookAnchor": "https://www.indiebound.org/book/9781984823984",
        "bookImageSrc": "https://images.booksense.com/images/984/823/9781984823984.jpg"
    },
    {
        "date": "February 3, 2020",
        "title": "David Courtwright, author, \"The Age of Addiction\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/91199",
        "bookAnchor": "https://www.hup.harvard.edu/catalog.php?isbn=9780674737372",
        "bookImageSrc": "https://www.hup.harvard.edu/images/jackets/9780674737372.jpg"
    },
    {
        "date": "January 27, 2020",
        "title": "Melanie Mitchell, author, \"Artificial Intelligence: A Guide for Thinking Humans\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/91064",
        "bookAnchor": "https://www.indiebound.org/book/9780374257835",
        "bookImageSrc": "https://images.booksense.com/images/835/257/9780374257835.jpg"
    },
    {
        "date": "January 13, 2020",
        "title": "Aaron Roth, co-author, \"The Ethical Algorithm\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/90783",
        "bookAnchor": "https://global.oup.com/academic/product/the-ethical-algorithm-9780190948207?cc=us&lang=en&",
        "bookImageSrc": "https://global.oup.com/academic/covers/pdp/9780190948207"
    },
    {
        "date": "December 9, 2019",
        "title": "Doug Hill, author, \"Not So Fast: Thinking Twice About Technology\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/90042",
        "bookAnchor": "https://www.indiebound.org/book/9780820355498",
        "bookImageSrc": "https://images.booksense.com/images/498/355/9780820355498.jpg"
    },
    {
        "date": "November 11, 2019",
        "title": "Tim Maughan, author, \"Infinite Detail\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/89435",
        "bookAnchor": "https://www.indiebound.org/book/9780374175412",
        "bookImageSrc": "https://images.booksense.com/images/412/175/9780374175412.jpg"
    },
    {
        "date": "October 14, 2019",
        "title": "Astra Taylor, author, \"Democracy May Not Exist, But We’ll Miss it When It’s Gone\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/88916",
        "bookAnchor": "https://us.macmillan.com/books/9781250179845",
        "bookImageSrc": "https://images.macmillan.com/folio-assets/macmillan_us_frontbookcovers_350W/9781250179845.jpg"
    },
    {
        "date": "September 16, 2019",
        "title": "Sarah T. Roberts, author of \"Behind the Screen\" on content moderators",
        "showAnchor": "https://www.wfmu.org/playlists/shows/88340",
        "bookAnchor": "https://www.behindthescreen-book.com/",
        "bookImageSrc": "https://creativegood.com/img/misc/behind-the-screen.jpg"
    },
    {
        "date": "September 9, 2019",
        "title": "Arthur Holland Michel, author, \"Eyes in the Sky\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/88222",
        "bookAnchor": "https://www.hmhco.com/shop/books/eyes-in-the-sky/9780544972001",
        "bookImageSrc": "https://www.hmhco.com/shop/books/assets/product/9780544972001.gif"
    },
    {
        "date": "September 2, 2019",
        "title": "Carl Miller, author, \"The Death of the Gods: The New Global Power Grab\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/88078",
        "bookAnchor": "https://www.penguin.co.uk/books/111/1114124/the-death-of-the-gods/9781786090126.html",
        "bookImageSrc": "https://www.penguin.co.uk/content/dam/prh/books/111/1114124/9781786090126.jpg.transform/PRHDesktopWide_small/image.jpg"
    },
    {
        "date": "August 26, 2019",
        "title": "Jeremiah Moss, author, \"Vanishing New York\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/87938",
        "bookAnchor": "https://www.indiebound.org/book/9780062439697",
        "bookImageSrc": "https://images.booksense.com/images/697/439/9780062439697.jpg"
    },
    {
        "date": "August 12, 2019",
        "title": "Amy Webb, author of \"The Big Nine,\" talks about AI and our future",
        "showAnchor": "https://www.wfmu.org/playlists/shows/87517",
        "bookAnchor": "https://www.indiebound.org/book/9781541773752",
        "bookImageSrc": "https://images.booksense.com/images/752/773/9781541773752.jpg"
    },
    {
        "date": "July 15, 2019",
        "title": "Matt Stroud, author, \"Thin Blue Lie\" ",
        "showAnchor": "https://www.wfmu.org/playlists/shows/87071",
        "bookAnchor": "https://www.indiebound.org/book/9781250108296",
        "bookImageSrc": "https://images.booksense.com/images/296/108/9781250108296.jpg"
    },
    {
        "date": "July 1, 2019",
        "title": "Archive show: Shoshana Zuboff, author, \"The Age of Surveillance Capitalism\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/86779",
        "bookAnchor": "https://www.indiebound.org/book/9781610395694",
        "bookImageSrc": "https://images.booksense.com/images/694/395/9781610395694.jpg"
    },
    {
        "date": "June 17, 2019",
        "title": "Damon Krukowski, podcaster and author, \"Ways of Hearing\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/86480",
        "bookAnchor": "https://www.indiebound.org/book/9780262039642",
        "bookImageSrc": "https://images.booksense.com/images/642/039/9780262039642.jpg"
    },
    {
        "date": "June 10, 2019",
        "title": "Jenny Odell, author, \"How to Do Nothing\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/86382",
        "bookAnchor": "https://www.indiebound.org/book/9781612197494",
        "bookImageSrc": "https://images.booksense.com/images/494/197/9781612197494.jpg"
    },
    {
        "date": "June 3, 2019",
        "title": "Joseph Menn, author, \"Cult of the Dead Cow\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/86237",
        "bookAnchor": "https://www.indiebound.org/book/9781541762381",
        "bookImageSrc": "https://images.booksense.com/images/381/762/9781541762381.jpg"
    },
    {
        "date": "May 27, 2019",
        "title": "Justin E. H. Smith, author, \"Irrationality: A History of the Dark Side of Reason\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/86103",
        "bookAnchor": "https://www.indiebound.org/book/9780691178677",
        "bookImageSrc": "https://images.booksense.com/images/677/178/9780691178677.jpg"
    },
    {
        "date": "May 13, 2019",
        "title": "Shoshana Zuboff, author, \"The Age of Surveillance Capitalism\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/85846",
        "bookAnchor": "https://www.indiebound.org/book/9781610395694",
        "bookImageSrc": "https://images.booksense.com/images/694/395/9781610395694.jpg"
    },
    {
        "date": "May 6, 2019",
        "title": "Roger McNamee, author, \"Zucked: Waking Up to the Facebook Catastrophe\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/85699",
        "bookAnchor": "https://www.zuckedbook.com/",
        "bookImageSrc": "https://www.zuckedbook.com/wp-content/uploads/2020/01/ZuckedPaperback-668x1024.jpg"
    },
    {
        "date": "April 15, 2019",
        "title": "Clive Thompson, author, \"Coders\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/85306",
        "bookAnchor": "https://www.indiebound.org/book/9780735220560",
        "bookImageSrc": "https://images.booksense.com/images/560/220/9780735220560.jpg"
    },
    {
        "date": "February 25, 2019",
        "title": "Tim Harford, author and economist, on kicking his smartphone addiction (plus, a cameo by Catherine Price!)",
        "showAnchor": "https://www.wfmu.org/playlists/shows/84406",
        "bookAnchor": "https://timharford.com/2019/02/how-behavioural-economics-helped-me-kick-my-smartphone-addiction/",
        "bookImageSrc": "https://timharford.com/wp-content/uploads/2021/01/DD-HTMTWAU.png"
    },
    {
        "date": "February 4, 2019",
        "title": "Prof. Susan Crawford, author, \"Fiber\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/84002",
        "bookAnchor": "https://yalebooks.yale.edu/book/9780300228502/fiber",
        "bookImageSrc": "https://yalebooks.yale.edu/sites/default/files/styles/book_jacket/public/imagecache/external/2d2211191de6e81f5f723e43c12d92c0.jpg?itok=s7mj0cAM"
    },
    {
        "date": "January 28, 2019",
        "title": "Douglas Rushkoff, author, \"Team Human\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/83873",
        "bookAnchor": "https://wwnorton.com/books/9780393651690",
        "bookImageSrc": "https://cdn.wwnorton.com/dam_booktitles/335/img/cover/9780393541533_300.jpeg"
    },
    {
        "date": "January 21, 2019",
        "title": "Prof. Safiya Noble, author, \"Algorithms of Oppression\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/83738",
        "bookAnchor": "https://www.indiebound.org/book/9781479837243",
        "bookImageSrc": "https://images.booksense.com/images/243/837/9781479837243.jpg"
    },
    {
        "date": "December 10, 2018",
        "title": "Rex Sorgatz, author, \"The Encyclopedia of Misinformation\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/82932",
        "bookAnchor": "https://www.abramsbooks.com/product/encyclopedia-of-misinformation_9781419729119/",
        "bookImageSrc": "https://www.abramsbooks.com/cover_images/9/9781419729119_s3.jpg"
    },
    {
        "date": "November 26, 2018",
        "title": "Jonathan Tepper, author, \"The Myth of Capitalism\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/82666",
        "bookAnchor": "https://www.mythofcapitalism.com/",
        "bookImageSrc": "https://images.booksense.com/images/195/548/9781119548195.jpg"
    },
    {
        "date": "November 19, 2018",
        "title": "Frank Pasquale, author of \"The Black Box Society,\" on secret algorithms",
        "showAnchor": "https://www.wfmu.org/playlists/shows/82516",
        "bookAnchor": "https://www.hup.harvard.edu/catalog.php?isbn=9780674970847",
        "bookImageSrc": "https://www.hup.harvard.edu/images/jackets/9780674970847.jpg"
    },
    {
        "date": "October 22, 2018",
        "title": "Yasha Levine, author, \"Surveillance Valley\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/81998",
        "bookAnchor": "https://surveillancevalley.com/",
        "bookImageSrc": "https://surveillancevalley.com/content/1-home/9781785784781-345x555.jpg"
    },
    {
        "date": "August 13, 2018",
        "title": "James Bridle, author of \"New Dark Age\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/80777",
        "bookAnchor": "https://www.versobooks.com/books/2698-new-dark-age",
        "bookImageSrc": "https://cdn-ed.versobooks.com/images/000014/910/New-Dark-Age-1050-68c855ddda933cf03904a56f8e65c5f6.jpg"
    },
    {
        "date": "July 16, 2018",
        "title": "Jaron Lanier, author, \"Ten Arguments for Deleting Your Social Media Accounts Right Now\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/80248",
        "bookAnchor": "http://www.jaronlanier.com/tenarguments.html",
        "bookImageSrc": "https://images.macmillan.com/folio-assets/macmillan_us_frontbookcovers_350W/9781250196682.jpg"
    },
    {
        "date": "June 25, 2018",
        "title": "Siva Vaidhyanathan, author \"Antisocial Media: How Facebook Disconnects Us and Undermines Democracy\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/79875",
        "bookAnchor": "https://www.indiebound.org/book/9780190841164",
        "bookImageSrc": "https://images.booksense.com/images/164/841/9780190841164.jpg"
    },
    {
        "date": "June 11, 2018",
        "title": "Brett Frischmann, co-author, \"Re-Engineering Humanity\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/79640",
        "bookAnchor": "https://www.reengineeringhumanity.com/",
        "bookImageSrc": "./img/Re-engineering_Humanity.png"
    },
    {
        "date": "June 4, 2018",
        "title": "Andrew Keen, author, \"How to Fix the Future\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/79517",
        "bookAnchor": "https://www.indiebound.org/book/9780802126641",
        "bookImageSrc": "https://images.booksense.com/images/641/126/9780802126641.jpg"
    },
    {
        "date": "May 28, 2018",
        "title": "Meredith Broussard, author, \"Artificial Unintelligence\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/79354",
        "bookAnchor": "https://mitpress.mit.edu/books/artificial-unintelligence",
        "bookImageSrc": "https://mitpress.mit.edu/sites/default/files/styles/large_book_cover/http/mitp-content-server.mit.edu%3A18180/books/covers/cover/%3Fcollid%3Dbooks_covers_0%26isbn%3D9780262537018%26type%3D.jpg?itok=WcxeDtIw"
    },
    {
        "date": "May 14, 2018",
        "title": "David Sax, author, \"The Revenge of Analog\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/79064",
        "bookAnchor": "https://www.hachettebookgroup.com/titles/david-sax/the-revenge-of-analog/9781610395724/",
        "bookImageSrc": "https://www.hachettebookgroup.com/wp-content/uploads/2017/06/9781610395724.jpg?fit=450%2C675"
    },
    {
        "date": "May 7, 2018",
        "title": "Anya Kamenetz, author, \"The Art of Screen Time\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/78935",
        "bookAnchor": "https://www.indiebound.org/book/9781610396721",
        "bookImageSrc": "https://images.booksense.com/images/721/396/9781610396721.jpg"
    },
    {
        "date": "April 16, 2018",
        "title": "Catherine Price, author, \"How to Break Up With Your Phone\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/78440",
        "bookAnchor": "https://www.indiebound.org/book/9780399581120",
        "bookImageSrc": "https://images.booksense.com/images/120/581/9780399581120.jpg"
    },
    {
        "date": "February 5, 2018",
        "title": "Christopher Potter, author of \"Earth Gazers,\" on tech and our image of humanity",
        "showAnchor": "https://www.wfmu.org/playlists/shows/77248",
        "bookAnchor": "https://www.indiebound.org/book/9781681776361",
        "bookImageSrc": "https://images.booksense.com/images/361/776/9781681776361.jpg"
    },
    {
        "date": "January 15, 2018",
        "title": "Jonathan Taplin, author of \"Move Fast and Break Things,\" on Big Tech undermining democracy",
        "showAnchor": "https://www.wfmu.org/playlists/shows/76913",
        "bookAnchor": "https://www.indiebound.org/book/9780316275774",
        "bookImageSrc": "https://images.booksense.com/images/774/275/9780316275774.jpg"
    },
    {
        "date": "January 8, 2018",
        "title": "Jace Clayton, aka DJ /rupture, author, \"Uproot: Travels in 21st-Century Music and Digital Culture\"",
        "showAnchor": "https://www.wfmu.org/playlists/shows/76803",
        "bookAnchor": "https://www.indiebound.org/book/9780374533427",
        "bookImageSrc": "https://images.booksense.com/images/427/533/9780374533427.jpg"
    },
    {
        "date": "December 18, 2017",
        "title": "Steven Levy, tech journalist and author",
        "showAnchor": "https://www.wfmu.org/playlists/shows/76405",
        "bookAnchor": "https://www.indiebound.org/book/9780735213159",
        "bookImageSrc": "https://images.booksense.com/images/159/213/9780735213159.jpg"
    },
    {
        "date": "December 4, 2017",
        "title": "Nir Eyal, author of \"Hooked,\" on building habit-forming apps",
        "showAnchor": "https://www.wfmu.org/playlists/shows/76209",
        "bookAnchor": "https://www.nirandfar.com/hooked/",
        "bookImageSrc": "https://www.nirandfar.com/wp-content/uploads/2019/11/Hooked-updated-cover-US-742x1024.png"
    },
    {
        "date": "October 9, 2017",
        "title": "Why you should play games, feat. game designer &amp; author Eric Zimmerman",
        "showAnchor": "https://www.wfmu.org/playlists/shows/75248",
        "bookAnchor": "http://www.ericzimmerman.com/publications",
        "bookImageSrc": "https://images.squarespace-cdn.com/content/v1/579b8aa26b8f5b8f49605c96/1472657289144-DI0FCV97DR5W7HJCTWF9/ke17ZwdGBToddI8pDm48kM404wW70LBJRMB97BMqW8tZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVF8xLWqvtoP__VZSPZ-OmvnzWmeHpZeVxF-sWPShfcRBYQNYiICRxjrKbuetpzyt5E/rules_of_play_front_page_photo2.jpg?format=750w"
    }
]