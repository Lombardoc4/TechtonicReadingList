(() => {
    window.addEventListener('load', () => {
        fetch('https://usnativeplants.com/visitor-counter/techtonic')
            .then(response => response.json())
            .then((visitData) => {
                const visitCounter = document.createElement('p');
                visitCounter.id = 'visitCounter';
                visitCounter.style.display = 'none';
                visitCounter.innerHTML = visitData.visitCount;
                document.body.append(visitCounter);
            });
    };
})();
