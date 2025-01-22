//copy menu for mobile
function copyMenu() {
  //copy inside .dpt-cat to .departments
  var dptCategory = document.querySelector(".categories");
  var dptPlace = document.querySelector(".all-categories");
  dptPlace.innerHTML = dptCategory.innerHTML;

  // copy inside nav to nav
  var mainNav = document.querySelector(".header-nav nav");
  var navPlace = document.querySelector(".off-canvas nav");
  navPlace.innerHTML = mainNav.innerHTML;

  // copy header-top .wrapper to .thetop-nav
  var topNav = document.querySelector(".header-top .wrapper");
  var topPlace = document.querySelector(".off-canvas .thetop-nav");
  topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();
// show mobile menu
const menuButton = document.querySelector(".trigger");
const closeButton = document.querySelector(".t-close");
const siteElement = document.querySelector(".site");

menuButton.addEventListener("click", function (event) {
  event.preventDefault();
  siteElement.classList.add("showmenu");
});

closeButton.addEventListener("click", function (event) {
  event.preventDefault();
  siteElement.classList.remove("showmenu");
});

// Show sub menu on mobile
// Select all elements with the class "has-child"
const subMenu = document.querySelectorAll(".has-child");

// Add an event listener to each "has-child" element
subMenu.forEach((hasChild) => {
  hasChild.addEventListener("click", function (event) {
    // Prevent the default action of the <a> element to stop page navigation
    event.preventDefault();

    // Close all other "has-child" elements
    subMenu.forEach((element) => {
      if (element !== hasChild) {
        element.classList.remove("expand");
      }
    });

    // Toggle the "expand" class on the clicked "has-child" element
    hasChild.classList.toggle("expand");
  });
});

// Slider
const swiper = new Swiper(".swiper", {
  // Optional parameters

  loop: true,
  // Autoplay settings
  autoplay: {
    delay: 3000, // Delay between slides in milliseconds (3000ms = 3 seconds)
    disableOnInteraction: false, // Keep autoplay running even after user interaction
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

// Show Search
const searchButton = document.querySelector(".t-search");
const tClose = document.querySelector(".search-close");
const showClass = document.querySelector(".site");

searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  showClass.classList.add("showsearch");
});

tClose.addEventListener("click", function (event) {
  event.preventDefault();
  showClass.classList.remove("showsearch");
});
