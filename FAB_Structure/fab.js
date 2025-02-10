document.addEventListener("DOMContentLoaded", () => {
    const fabButton = document.getElementById("fab");
    const fabContainer = document.querySelector(".fab-container");
  
    fabButton.addEventListener("click", () => {
      fabContainer.classList.toggle("active");
    });
  
    // Close FAB menu when clicking outside
    document.addEventListener("click", (event) => {
      if (!fabContainer.contains(event.target) && event.target !== fabButton) {
        fabContainer.classList.remove("active");
      }
    });
  });
  