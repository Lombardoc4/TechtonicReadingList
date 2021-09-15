(() => {
    window.onload = () => {
        fetch('https://usnativeplants.com/visitor-counter/Techtonic')
            .then(response => response.json())
            .then((data) => {
                const visitCounter = document.createElement('p');
                visitCounter.id = 'visitCounter';
                visitCounter.style.display = 'none';
                visitCounter.innerHTML = data.visitCount;
                document.body.append(visitCounter);
            });
    };
})();
