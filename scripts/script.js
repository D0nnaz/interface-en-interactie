console.log("Hello, script.js!");

document.addEventListener("DOMContentLoaded", function () {
  let counter = 0;
  const overlay = document.getElementById("overlay");
  const notebook = document.getElementById("notebook");
  const storyButton = document.getElementById("story-button");
  const notebookButton = document.getElementById("notebook-button");
  const counterDisplay = document.getElementById("counter");
  const closeButton = document.getElementById("close-button");
  const voiceOver = new Audio("../assets/mp3/voiceoverroom1.m4a");
  const resumeButton = document.getElementById("resume-voiceover");
  const disableButton = document.getElementById("disable-voiceover")
    
  resumeButton.addEventListener("click", () => {
    voiceOver.play();
  });

  disableButton.addEventListener("click", () => {
    voiceOver.pause();
  });
  voiceOver.addEventListener("ended", () => {
    overlay.style.display = "none";
  });
  storyButton.addEventListener("click", () => {
    overlay.style.display = "block";
    console.log(overlay.style.display);
    console.log("story button clicked");
  });

  notebookButton.addEventListener("click", () => {
    notebook.style.display =
      notebook.style.display === "none" ? "block" : "none";
    console.log(notebook.style.display);
    console.log("notebook button clicked");
  });

  document.querySelectorAll(".item").forEach((item, index) => {
    item.addEventListener("click", () => {
      if (!item.classList.contains("hide")) {
        item.classList.add("hide");
        counter++;
        counterDisplay.textContent = `${counter}/5`;
        console.log(counter);
      }
    });
  });
  window.addEventListener("load", () => {
    overlay.style.display = "block";
    voiceOver.play();
  });



  let isFirstTime = true;

  voiceOver.addEventListener("ended", () => {
    overlay.style.display = "none";
    if (notebook.style.display !== "none") {
      notebook.style.display = "none";
    }
  });

  closeButton.addEventListener("click", () => {
    overlay.style.display = "none";
    voiceOver.pause();
    if (isFirstTime && notebook.style.display === "none") {
      notebook.style.display = "block";
      isFirstTime = false;
    }
  });
});


