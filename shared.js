const navLinks = document.querySelector('.mobile-nav__links');
const toggleButton = document.querySelector('.toggle-button');
const backdrop = document.querySelector('.backdrop');
const mobileNav = document.querySelector('.mobile-nav');

// use const instead of var

// console.dir('.mobile-nav');

toggleButton.addEventListener('click', function() {
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
});

navLinks.addEventListener('click', function() {
    mobileNav.classList.remove("open");
    backdrop.classList.remove("open");
});

backdrop.addEventListener('click', function() {
    mobileNav.classList.remove("open");
    backdrop.classList.remove("open");
});