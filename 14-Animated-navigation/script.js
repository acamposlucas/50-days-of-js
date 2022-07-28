const toggleButton = document.getElementById("nav-toggler");
const nav = document.getElementById("primary-navigation");

let isMenuOpen = false;
toggleButton.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  isMenuOpen
    ? (nav.setAttribute("aria-expanded", "true"),
      toggleButton.setAttribute("aria-expanded", "true"))
    : (nav.setAttribute("aria-expanded", "false"),
      toggleButton.setAttribute("aria-expanded", "false"));
});
