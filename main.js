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

// Slider js code, learnt from slider docs
var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".product-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// var swiper = new Swiper(".review-slider", {
//   loop: true,
//   grabCursor: true,
//   spaceBetween: 20,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     640: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 3,
//     },
//   },
// });

// var swiper = new Swiper(".blogs-slider", {
//   loop: true,
//   grabCursor: true,
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     991: {
//       slidesPerView: 3,
//     },
//   },
// });

// var swiper = new Swiper(".clients-slider", {
//   loop: true,
//   grabCursor: true,
//   spaceBetween: 20,
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     640: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 3,
//     },
//     1024: {
//       slidesPerView: 4,
//     },
//   },
// });
// End slider js code