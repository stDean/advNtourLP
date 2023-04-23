// get a reference to the header and navbar class
let navbar = document.querySelector(".header .navbar");

// add class name to the menu
document.querySelector("#menu-btn").addEventListener("click", () => {
  navbar.classList.add("active");
});

// remove the active class on menu close
document.querySelector("#nav-close").addEventListener("click", () => {
  navbar.classList.remove("active");
});

// get the search div
let searchForm = document.querySelector(".search-form");

// get the search button and add the active class
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.add("active");
};

// remove the active class on close button
document.querySelector("#close-search").onclick = () => {
  searchForm.classList.remove("active");
};