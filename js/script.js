const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");
const currentYear = document.getElementById("current-year");

menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        isOpen.toString()
    );
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );
    });
});

currentYear.textContent = new Date().getFullYear();