console.log("Hello, index.js!");

const video = document.querySelector("video");
const startLink = document.getElementById("start-link");
const fullscreenButton = document.getElementById("fullscreen-button");

video.addEventListener("ended", () => (startLink.style.display = "block"));

video.controls = false;
video.autoplay = true;
video.muted = false;
video.loop = false;

fullscreenButton.addEventListener("click", () => {
  video.requestFullscreen();
});

window.addEventListener("DOMContentLoaded", () => {
  video.currentTime = 0;
  startLink.style.display = "none";
});

video.addEventListener("click", () => {
  video.play();
});
