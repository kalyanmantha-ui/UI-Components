document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    }
  
    window.changeSlide = function(direction) {
      currentSlide = (currentSlide + direction + slides.length) % slides.length;
      showSlide(currentSlide);
    };
  
    // Auto slide every 3 seconds
    setInterval(() => {
      changeSlide(1);
    }, 3000);
  
    // Keyboard navigation
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        changeSlide(-1);
      } else if (event.key === "ArrowRight") {
        changeSlide(1);
      }
    });
  
    // Show first slide initially
    showSlide(currentSlide);
  });
  