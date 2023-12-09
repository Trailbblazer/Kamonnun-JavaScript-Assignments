'use strict';
function searchTVSeries(query) {
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('results').innerHTML = '';

            data.forEach(tvShow => {
                const article = document.createElement('article');

                const titleElement = document.createElement('h2');
                titleElement.textContent = tvShow.show.name;
                article.appendChild(titleElement);

                const linkElement = document.createElement('a');
                linkElement.href = tvShow.show.url;
                linkElement.target = '_blank';
                linkElement.textContent = 'Details';
                article.appendChild(linkElement);

                const imageElement = document.createElement('img');
                imageElement.src = tvShow.show.image?.medium || 'no-image-available.png';
                imageElement.alt = tvShow.show.name;
                article.appendChild(imageElement);

                const summaryElement = document.createElement('div');
                summaryElement.innerHTML = tvShow.show.summary;
                article.appendChild(summaryElement);

                document.getElementById('results').appendChild(article);
            });
        })
        .catch(error => console.error(error));
}

document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const query = document.getElementById('query').value;

    searchTVSeries(query);
});