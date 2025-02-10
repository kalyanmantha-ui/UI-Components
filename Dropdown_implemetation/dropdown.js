document.addEventListener("DOMContentLoaded", () => {
    const dropdownBtn = document.getElementById("dropdownBtn");
    const dropdownMenu = document.getElementById("dropdownMenu");
  
    // Toggle dropdown visibility
    dropdownBtn.addEventListener("click", () => {
      dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });
  
    // Hide dropdown when clicking outside
    document.addEventListener("click", (event) => {
      if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = "none";
      }
    });
  
    // Handle keyboard navigation (Arrow keys & Enter)
    let dropdownItems = Array.from(dropdownMenu.querySelectorAll(".dropdown-item"));
    let currentIndex = -1;
  
    dropdownBtn.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        currentIndex = (currentIndex + 1) % dropdownItems.length;
        dropdownItems[currentIndex].focus();
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        currentIndex = (currentIndex - 1 + dropdownItems.length) % dropdownItems.length;
        dropdownItems[currentIndex].focus();
      } else if (event.key === "Enter" && currentIndex !== -1) {
        dropdownBtn.innerText = dropdownItems[currentIndex].innerText;
        dropdownMenu.style.display = "none";
      }
    });
  });
  