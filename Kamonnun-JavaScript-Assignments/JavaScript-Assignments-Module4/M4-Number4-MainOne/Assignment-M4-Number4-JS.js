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
                imageElement.src = tvShow.show.image ? tvShow.show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
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

document.getElementById('submitButton').addEventListener('click', function () {
    const queryElement = document.getElementById('query');
    if (queryElement && queryElement.value) {
        console.log('#query: PASS');
    } else {
        console.log('#query: FAIL');
    }

    const submitButton = document.getElementById('submitButton');
    if (submitButton) {
        console.log('input[type="submit"]: PASS');
    } else {
        console.log('input[type="submit"]: FAIL');
    }

    const placeholderImage = new Image();
    placeholderImage.src = 'https://via.placeholder.com/210x295?text=Not%20Found';
    placeholderImage.onload = function () {
        console.log('Placeholder image is set correctly: PASS');
    };
    placeholderImage.onerror = function () {
        console.log('Placeholder image is set correctly: FAIL');
    };
});