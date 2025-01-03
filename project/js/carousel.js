// Carousel Functionality
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const slideInterval = 3000; // Slide duration in milliseconds

// Function to update carousel position and active dot
function updateCarousel(index) {
  const offset = -index * 100; // Move carousel to show the selected slide
  carouselInner.style.transform = `translateX(${offset}%)`;

  // Update active dot
  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle('active', dotIndex === index);
  });
}

// Auto-slide functionality
function autoSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel(currentIndex);
}

// Start auto-sliding
let autoSlideInterval = setInterval(autoSlide, slideInterval);

// Pause auto-slide on mouseover and resume on mouseleave
carouselInner.addEventListener('mouseover', () => clearInterval(autoSlideInterval));
carouselInner.addEventListener('mouseleave', () => {
  autoSlideInterval = setInterval(autoSlide, slideInterval);
});

// Dot navigation functionality
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    clearInterval(autoSlideInterval); // Pause auto-slide when user interacts
    currentIndex = index;
    updateCarousel(currentIndex);
    autoSlideInterval = setInterval(autoSlide, slideInterval); // Resume auto-slide
  });
});
