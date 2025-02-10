document.addEventListener("DOMContentLoaded", () => {
    const toastContainer = document.getElementById("toastContainer");
    const showToastBtn = document.getElementById("showToast");
  
    function showToast(message, type = "success", duration = 3000) {
      const toast = document.createElement("div");
      toast.className = `toast ${type}`;
      toast.innerHTML = `
        ${message}
        <span class="close-btn">&times;</span>
      `;
  
      toastContainer.appendChild(toast);
  
      // Remove toast on close button click
      toast.querySelector(".close-btn").addEventListener("click", () => {
        toast.style.animation = "fadeOut 0.5s forwards";
        setTimeout(() => toast.remove(), 500);
      });
  
      // Auto-remove toast after duration
      setTimeout(() => {
        toast.style.animation = "fadeOut 0.5s forwards";
        setTimeout(() => toast.remove(), 500);
      }, duration);
    }
  
    // Button Click: Show a demo toast
    showToastBtn.addEventListener("click", () => {
      showToast("This is a success toast!", "success");
    });
  
    // Make `showToast` function globally available
    window.showToast = showToast;
  });
  