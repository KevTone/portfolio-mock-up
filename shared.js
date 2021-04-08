var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

console.dir('.mobile-nav');

toggleButton.addEventListener('click', function() {
    mobileNav.style.display = 'block';
    mobileNav.classList.add("open");
});