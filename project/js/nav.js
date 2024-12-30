window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    const homeSection = document.getElementById("home");

    if (window.scrollY > homeSection.offsetHeight) {
        navbar.classList.add("white-background");
    } else {
        navbar.classList.remove("white-background");
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('.navbar-list a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjust for fixed navbar
            behavior: 'smooth'
        });
    });
});


// Navbar background change on scroll
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    const homeSection = document.getElementById("home");
    const aboutSection = document.getElementById("about");

    const scrollY = window.scrollY;
    const homeBottom = homeSection.offsetHeight;
    const aboutTop = aboutSection.offsetTop;

    if (scrollY < homeBottom) {
        navbar.classList.add("transparent");
        navbar.classList.remove("white-background");
    } else if (scrollY >= aboutTop - 50) { // Adjust offset if needed
        navbar.classList.remove("transparent");
        navbar.classList.add("white-background");
    }
});


