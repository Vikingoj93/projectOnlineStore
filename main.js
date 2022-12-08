const navEmail = document.querySelector("#nav-email");
navEmail.addEventListener("click", showDesktopMenu);

const desktopMenu = document.querySelector(".desktop-menu");

function showDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}