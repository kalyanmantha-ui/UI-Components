document.addEventListener("DOMContentLoaded", () => {
    const tooltipBtn = document.getElementById("tooltipBtn");
  
    tooltipBtn.addEventListener("mouseenter", () => {
      tooltipBtn.classList.add("show-tooltip");
    });
  
    tooltipBtn.addEventListener("mouseleave", () => {
      tooltipBtn.classList.remove("show-tooltip");
    });
  
    // Accessibility: Show tooltip on focus, hide on blur
    tooltipBtn.addEventListener("focus", () => {
      tooltipBtn.classList.add("show-tooltip");
    });
  
    tooltipBtn.addEventListener("blur", () => {
      tooltipBtn.classList.remove("show-tooltip");
    });
  });
  