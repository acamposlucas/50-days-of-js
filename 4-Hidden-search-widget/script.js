const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.dataset.active = true;
  input.focus();
});

window.addEventListener("click", (e) => {
  handleClickOutsideSearchBox(e);
});

function handleClickOutsideSearchBox(e) {
  !search.contains(e.target) ? (search.dataset.active = false) : null;
}
