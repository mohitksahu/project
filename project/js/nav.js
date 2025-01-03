
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    const sections = document.querySelectorAll("section");
    const scrollY = window.scrollY;

    // Change navbar background based on scroll position
    const homeSection = document.getElementById("home");
    const homeBottom = homeSection.offsetHeight;

    if (scrollY < homeBottom) {
        navbar.classList.add("transparent");
        navbar.classList.remove("white-background");
    } else {
        navbar.classList.remove("transparent");
        navbar.classList.add("white-background");
    }

    // Highlight active section in navbar
    sections.forEach((section) => {
        const sectionTop = section.offsetTop -200; // Adjust for navbar height
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            const currentId = section.getAttribute("id");
            document.querySelectorAll(".navbar-list a").forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href").substring(1) === currentId) {
                    link.classList.add("active");
                }
            });
        }
    });
});



// Smooth scroll for anchor links
document.querySelectorAll(".navbar-list a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjust for fixed navbar height
            behavior: "smooth",
        });
    });
});
