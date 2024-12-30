// Carousel functionality
let currentSlide = 0;

// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            } else {
                entry.target.classList.remove("fade-in");
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        card.classList.add("hidden");
        observer.observe(card);
    });
});


function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    updateCarousel();
}

function updateCarousel() {
    const slides = document.querySelectorAll('.carousel-item');
    const newTransform = -100 * currentSlide + '%';
    document.querySelector('.carousel-inner').style.transform = `translateX(${newTransform})`;
}


