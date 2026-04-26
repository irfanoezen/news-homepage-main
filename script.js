const body = document.querySelector("body");
const menu = document.querySelector(".nav__list");
const menuBtn = document.querySelector("#menuBtn");
const menuIcon = document.querySelector(".menu-icon");
const navOverlay = document.querySelector(".nav__overlay");
//const mobileView = window.matchMedia("(width<=48em)");

menuBtn.addEventListener("click", toggleMenu);
//mobileView.addEventListener("change", (event) => {});

function toggleMenu() {
	menu.classList.toggle("active");
	if (menu.classList.contains("active")) {
		menuIcon.setAttribute("src", "assets/images/icon-menu-close.svg");
		body.style.overflowY = "hidden";
		navOverlay.classList.add("active");
	} else {
		menuIcon.setAttribute("src", "assets/images/icon-menu.svg");
		body.style.overflowY = "visible";
		navOverlay.classList.remove("active");
	}
}
