document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const openBtn = document.getElementById("openModal");
  const closeBtn = document.querySelector(".close");

  if (!modal || !openBtn || !closeBtn) {
    console.error("Modal elements not found. Check your HTML IDs and class names.");
    return;
  }

  // Open Modal with animation
  openBtn.addEventListener("click", () => {
    modal.classList.add("show");
    modal.style.display = "flex";
  });

  // Close Modal when clicking close button
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 200); // Wait for animation
  });

  // Close when clicking outside the modal-content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
      setTimeout(() => {
        modal.style.display = "none";
      }, 200);
    }
  });

  // Close Modal on Escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.remove("show");
      setTimeout(() => {
        modal.style.display = "none";
      }, 200);
    }
  });
});
