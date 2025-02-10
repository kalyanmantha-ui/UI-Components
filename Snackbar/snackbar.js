document.addEventListener("DOMContentLoaded", () => {
    const snackbarContainer = document.getElementById("snackbarContainer");
    const showSnackbarBtn = document.getElementById("showSnackbar");
  
    function showSnackbar(message, type = "success", duration = 4000) {
      const snackbar = document.createElement("div");
      snackbar.className = `snackbar ${type}`;
      snackbar.innerHTML = `
        ${message}
        <span class="close-btn">&times;</span>
      `;
  
      snackbarContainer.appendChild(snackbar);
  
      // Remove snackbar on close button click
      snackbar.querySelector(".close-btn").addEventListener("click", () => {
        snackbar.style.animation = "fadeOut 0.5s forwards";
        setTimeout(() => snackbar.remove(), 500);
      });
  
      // Auto-remove snackbar after duration
      setTimeout(() => {
        snackbar.style.animation = "fadeOut 0.5s forwards";
        setTimeout(() => snackbar.remove(), 500);
      }, duration);
    }
  
    // Button Click: Show a demo snackbar
    showSnackbarBtn.addEventListener("click", () => {
      showSnackbar("This is a success message!", "success");
    });
  
    // Make `showSnackbar` function globally available
    window.showSnackbar = showSnackbar;
  });
  