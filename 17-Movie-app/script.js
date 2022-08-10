const API_KEY =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=35e8e05f9bfa0667a268312efa9b3e52&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=35e8e05f9bfa0667a268312efa9b3e52&query="`;

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");
const nav = document.getElementById("nav");

const PREVIOUS_PAGE = document.getElementById("previousPage");
const NEXT_PAGE = document.getElementById("nextPage");
const PAGE = document.getElementById("page");

let currentPage = 1;
let nextPage = currentPage + 1;
let previousPage = currentPage - 1;
let lastUrl = "";
let totalPages = 100;

getMovies(API_KEY);

async function getMovies(url) {
  lastUrl = url;
  const res = await fetch(lastUrl);
  const data = await res.json();

  currentPage = data.page;
  nextPage = currentPage + 1;
  previousPage = currentPage - 1;
  lastUrl = "";
  totalPages = data.total_pages;

  return showMovies(data.results);
}

NEXT_PAGE.addEventListener("click", () => {
  const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=35e8e05f9bfa0667a268312efa9b3e52&page=${nextPage}`;
  getMovies(url);
});

PREVIOUS_PAGE.addEventListener("click", () => {
  const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=35e8e05f9bfa0667a268312efa9b3e52&page=${previousPage}`;

  getMovies(url);
});

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
