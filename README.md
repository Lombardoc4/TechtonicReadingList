# Techtonic Reading List
<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Lombardoc4/TechtonicReadingList">
    <img src="https://crislombardo.com/digi-art.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Techtonic Reading List</h3>

  <p align="center">
    A book list of authors that have been intervered on Mark Hurst's show, Techtonic on WFMU
    <br />
    <a href="https://github.com/Lombardoc4/TechtonicReadingList"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://lombardoc4.github.io/TechtonicReadingList/">Live Site</a>
    ·
    <a href="https://github.com/Lombardoc4/TechtonicReadingList/issues">Report Bug</a>
    ·
    <a href="https://github.com/Lombardoc4/TechtonicReadingList/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#project-features">Project Feautres</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Project Structure

[![Landing Screenshot][landing-screenshot]](https://lombardoc4.github.io/TechtonicReadingList/)

### Client

The client is composed of three files:
- `index.js`
    - Recent items with local storage
    - Dynamically load data
    - Lazy load images
    - Search Capabilities
- `index.html` & `index.css`
    - Template elements
      - Book Container
      - Search Results
    - Header
    - Search Bar
    - Book List


### Github Action - CRON
- `.github/workflows/getAuthor.yml`
  - CRON job runs at the start of the show
  - Setup node & run `getTechtonic/index.js`
  - Commits changes to repo
  - Send email if job fails
- `getTechtonicBook/`
  - `index.js`
    - Scrapes Techtonic playlist page on WFMU
    - Updates `data.js` with data from the scrape
  - `data.js`
    - Array of data points for Book List
  - `data-backup.js`
    - Data backup



<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Vanilla][Javascript.io]][Javascript-url]
* [![NodeJs][Node.js]][Node-url]
* [![Github][Github.io]][Github-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may set up the data fetch locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Make sure you have `Node` installed
1. install pnpm
  ```sh
  npm install pnpm@latest -g
  ```
2. Clone the repo
   ```sh
   git clone https://github.com/Lombardoc4/TechtonicReadingList.git
   ```
3. Change directory
   ```sh
   cd getTechtonicBook
   ```
4. Install NPM packages
   ```sh
   pnpm i
   ```

### Run Locally

* Run fetch
   ```sh
   pnpm run fetch
   ```

**Responses**
- Error:
  - Cannot get DOM from url
  - Missing book details
  - Missing book source
  - Could not write to file, data.js
- Success:
  - No new shows
  - News shows: ...

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
<!-- ## Usage -->
<!--
Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- ROADMAP -->
<!-- ## Roadmap -->
<!--
- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/Lombardoc4/TechtonicReadingList/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the GPL-3.0 License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Cris Lom - lom13@pm.me

Project Link: [https://github.com/Lombardoc4/TechtonicReadingList](https://github.com/Lombardoc4/TechtonicReadingList)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Mark Hurst](https://creativegood.com/mark-hurst/)
* [WFMU](https://www.wfmu.org/)
* [Techtonic](https://www.wfmu.org/playlists/TD)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Lombardoc4/TechtonicReadingList.svg?style=for-the-badge
[contributors-url]: https://github.com/Lombardoc4/TechtonicReadingList/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Lombardoc4/TechtonicReadingList.svg?style=for-the-badge
[forks-url]: https://github.com/Lombardoc4/TechtonicReadingList/network/members
[stars-shield]: https://img.shields.io/github/stars/Lombardoc4/TechtonicReadingList.svg?style=for-the-badge
[stars-url]: https://github.com/Lombardoc4/TechtonicReadingList/stargazers
[issues-shield]: https://img.shields.io/github/issues/Lombardoc4/TechtonicReadingList.svg?style=for-the-badge
[issues-url]: https://github.com/Lombardoc4/TechtonicReadingList/issues
[landing-screenshot]: img/landing.png
[Github.io]: https://img.shields.io/badge/Github%20Actions-000000?style=for-the-badge&logo=githubactions&logoColor=white
[Github-url]: https://github.com/Lombardoc4/TechtonicReadingList/actions
[Node.js]: https://img.shields.io/badge/NodeJs-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/en
[Javascript.io]: https://img.shields.io/badge/JavaScript-grey?style=for-the-badge&logo=javascript
[Javascript-url]: https://developer.mozilla.org/en-US/docs/Learn/JavaScript