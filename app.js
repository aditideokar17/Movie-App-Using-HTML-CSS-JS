

const URL = "http://www.omdbapi.com/?s=";
const api_key = "6c87537";

document.getElementById('search-btn').addEventListener('click', function () {
    const movieTitle = document.getElementById('input').value;
    searchMovie(movieTitle);
    
});



async function searchMovie(query) {
    if (query === '') {
        alert("Enter Valid Movie Name Please");

    }
    else {
        const res = await fetch(`${URL}${query}&apiKey=${api_key}`);

        const data = await res.json();
        displayResults(data.Search);
        // console.log(data.Search);
    }

}

function displayResults(movies) {
    const resultsDiv = document.getElementById('movie-info-box');
    resultsDiv.innerHTML = '';

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie';
        movieDiv.innerHTML = `
        <img src="${movie.Poster}" alt="${movie.Title}">
        <h2>${movie.Title}</h2>
        <p>${movie.Year}</p>
        `;
        resultsDiv.appendChild(movieDiv);
    });
}
