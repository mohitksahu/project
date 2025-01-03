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



// Select all dropdown buttons and contents
const dropdownButtons = document.querySelectorAll('.dropdown-button');
const dropdownContents = document.querySelectorAll('.dropdown-content');

// Add a click event listener to each dropdown button
dropdownButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // Toggle the 'show' class on the corresponding dropdown content
    const dropdownContent = button.nextElementSibling; // Assumes .dropdown-content is directly after the button
    if (dropdownContent && dropdownContent.classList.contains('dropdown-content')) {
      dropdownContent.classList.toggle('show');
    }
    
    // Close other open dropdowns (optional)
    dropdownContents.forEach((content) => {
      if (content !== dropdownContent) {
        content.classList.remove('show');
      }
    });

    // Stop event from propagating to document click listener
    event.stopPropagation();
  });
});

// Close dropdown if clicked outside
document.addEventListener('click', (event) => {
  dropdownContents.forEach((content) => {
    if (!content.classList.contains('show')) return;
    const parentButton = content.previousElementSibling;
    if (!parentButton.contains(event.target) && !content.contains(event.target)) {
      content.classList.remove('show');
    }
  });
});
