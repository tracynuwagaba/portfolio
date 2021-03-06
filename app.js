// jshint esversion:6
const toggle = document.querySelector(".navbar__toggle");
// jshint esversion:6
const menu = document.querySelector(".navbar__menu");

// Toggle mobile menu
const toggleMenu = () => {
    if (menu.classList.contains("active")) {
        // jshint esversion:6
        menu.classList.remove("active");

        // adds the menu (hamburger)
        // jshint esversion:6
        toggle.querySelector("a").innerHTML = "<i class = 'fas fa-bars'></i>";
    } else {
        // jshint esversion:6
        menu.classList.add("active");

        // adds the close (x) icon
        // jshint esversion:6
        toggle.querySelector("a").innerHTML = "<i class = 'fas fa-times'></i>";
    }
}

// Event listener
// jshint esversion:6
toggle.addEventListener('click', toggleMenu, false);