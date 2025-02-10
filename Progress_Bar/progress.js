document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById("progressBar");
    const startBtn = document.getElementById("startProgress");
    const pauseBtn = document.getElementById("pauseProgress");
    const resetBtn = document.getElementById("resetProgress");
    const speedControl = document.getElementById("speedControl");
    const speedLabel = document.getElementById("speedLabel");
    const setProgressInput = document.getElementById("setProgress");
    const applyProgressBtn = document.getElementById("applyProgress");
  
    let progress = 0;
    let interval;
    let speed = parseInt(speedControl.value);
  
    function updateProgress() {
      if (progress < 100) {
        progress += 1;
        progressBar.style.width = progress + "%";
      } else {
        clearInterval(interval);
      }
    }
  
    startBtn.addEventListener("click", () => {
      if (!interval) {
        interval = setInterval(updateProgress, speed);
      }
    });
  
    pauseBtn.addEventListener("click", () => {
      clearInterval(interval);
      interval = null;
    });
  
    resetBtn.addEventListener("click", () => {
      clearInterval(interval);
      interval = null;
      progress = 0;
      progressBar.style.width = "0%";
    });
  
    // Adjust speed dynamically
    speedControl.addEventListener("input", () => {
      speed = parseInt(speedControl.value);
      speedLabel.textContent = `Speed: ${speed}ms`;
  
      if (interval) {
        clearInterval(interval);
        interval = setInterval(updateProgress, speed);
      }
    });
  
    // Set progress manually
    applyProgressBtn.addEventListener("click", () => {
      let newProgress = parseInt(setProgressInput.value);
      if (!isNaN(newProgress) && newProgress >= 0 && newProgress <= 100) {
        progress = newProgress;
        progressBar.style.width = progress + "%";
      }
    });
  });
  