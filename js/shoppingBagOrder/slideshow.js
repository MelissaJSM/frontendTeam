document.addEventListener("DOMContentLoaded", function() {
  let slides = document.querySelector('.slides');
  let images = slides.querySelectorAll('img');
  let totalImages = images.length;
  let currentIndex = 0;

  function moveSlide(index) {
    if (index >= totalImages - 4) {
      clearInterval(slideInterval);
    }
    slides.style.transform = `translateX(calc(-${index * (100 / 4)}%))`;
  }

  function prevSlide() {
    currentIndex = Math.max(0, currentIndex - 1);
    moveSlide(currentIndex);
  }

  function nextSlide() {
    currentIndex = Math.min(totalImages - 4, currentIndex + 1);
    moveSlide(currentIndex);
  }

  document.getElementById("prevBtn").addEventListener("click", prevSlide);
  document.getElementById("nextBtn").addEventListener("click", nextSlide);
  let slideInterval = setInterval(nextSlide, 3000);
});