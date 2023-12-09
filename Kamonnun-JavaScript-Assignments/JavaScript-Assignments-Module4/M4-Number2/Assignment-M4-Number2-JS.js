'use strict';
function searchTVSeries(query) {
            fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
                .then(response => response.json())
                .then(data => {
                    console.log('Search Result:', data);
                })
                .catch(error => console.error(error));
        }

        document.getElementById('submitButton').addEventListener('click', function (event) {
        event.preventDefault();
        const query = document.getElementById('query').value;
        searchTVSeries(query);
});