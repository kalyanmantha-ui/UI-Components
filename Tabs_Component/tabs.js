document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanels = document.querySelectorAll(".tab-panel");
  
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetTab = button.getAttribute("data-tab");
  
        // Remove active class from all buttons and panels
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        tabPanels.forEach((panel) => panel.classList.remove("active"));
  
        // Activate the clicked tab and its content
        button.classList.add("active");
        document.getElementById(targetTab).classList.add("active");
      });
    });
  
    // Enable arrow key navigation
    let currentIndex = 0;
  
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % tabButtons.length;
      } else if (event.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + tabButtons.length) % tabButtons.length;
      } else {
        return;
      }
  
      tabButtons[currentIndex].click();
      tabButtons[currentIndex].focus();
    });
  });
  