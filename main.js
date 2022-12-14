const navEmail = document.querySelector("#nav-email");
const desktopMenu = document.querySelector(".desktop-menu");
const logoMenu = document.querySelector(".logo-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const logoCart = document.querySelector(".logo-cart");
const cartMenu = document.querySelector(".detail-product")

navEmail.addEventListener("click", showDesktopMenu);
logoMenu.addEventListener("click", showMobileMenu);
logoCart.addEventListener("click", showCartMenu);

function showCartMenu() {
    cartMenu.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
}
function showDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    cartMenu.classList.add("inactive")
    mobileMenu.classList.add("inactive")
}
function showMobileMenu() {
    mobileMenu.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    cartMenu.classList.add("inactive");
}