const navEmail = document.querySelector("#nav-email");
navEmail.addEventListener("click", showDesktopMenu);

const desktopMenu = document.querySelector(".desktop-menu");

const logoMenu = document.querySelector(".logo-menu");
logoMenu.addEventListener("click", showMobileMenu);

const mobileMenu = document.querySelector(".mobile-menu");

function showDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}
function showMobileMenu() {
    mobileMenu.classList.toggle("inactive");
}