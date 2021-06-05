const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ae79cae84f394056b72c97b55ff6dd75&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const Search_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=ae79cae84f394056b72c97b55ff6dd75&query="';

const form = document.getElementById("form");
const Search = document.getElementById("search");
const main = document.getElementById("main");

//GEt initial movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
    <img
      src="${IMG_PATH + movie.poster_path}"
      alt="${movie.title}"
    />
    <div class="movie-info">
      <h3>${movie.title}</h3>
      <span class=${getClassByRate(movie.vote_average)}>${
      movie.vote_average
    }</span>
    </div>
    <div class="overview">
      <h3>Overview</h3>
      ${movie.overview}
    </div>`;

    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getMovies(Search_URL + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
