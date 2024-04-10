// console.log("Hello, index.js!");

// const video = document.querySelector("video");
// const startLink = document.getElementById("start-link");

// video.addEventListener("ended", () => (startLink.style.display = "block"));

// video.controls = false;
// video.autoplay = true;
// video.muted = true;
// video.loop = false;
// video.requestFullscreen();

// window.addEventListener("DOMContentLoaded", () => {
//   video.currentTime = 0;
//   video.play();
//   startLink.style.display = "none";
// });

// video.play();



window.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("index.html")) {
    const audio = new Audio("../assets/mp3/intro.wav");
    audio.play();
  }
});

var button = document.getElementById('publishButton');
var section = document.getElementById('congratsSection');

section.style.display = 'none';

button.addEventListener('click', function() {
  section.style.display = 'flex';
  button.style.display = 'none';
});

  const resetButton = document.getElementById("resetButton");
  resetButton.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
  });
