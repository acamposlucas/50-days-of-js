const API_KEY =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=35e8e05f9bfa0667a268312efa9b3e52&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=35e8e05f9bfa0667a268312efa9b3e52&query="`;

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

getMovies(API_KEY);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  return showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieCard = document.createElement("div");
    movieCard.classList.add("movie");
    movieCard.innerHTML = `
    <img
      src="${IMG_PATH + poster_path}"
      alt="${title}"
    />
    <div class="movie-info">
      <h2>${title}</h2>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
      <h3>Overview</h3>
      <p>
        ${overview}
      </p>
    </div>
    `;
    main.appendChild(movieCard);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(`${SEARCH_API}${searchTerm}`);
    search.value = "";
  } else {
    window.location.reload();
  }
});
