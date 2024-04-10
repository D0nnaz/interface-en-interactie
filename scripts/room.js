console.log("Hello, script.js!");

function setupRoom(roomId, itemCount) {
  let counter = 0;
  const overlay = document.getElementById(`${roomId}-overlay`);
  const notebook = document.getElementById(`${roomId}-notebook`);
  const storyButton = document.getElementById(`${roomId}-story-button`);
  const storyAudio = new Audio(`../assets/mp3/story.mp3`);
  const notebookButton = document.getElementById(`${roomId}-notebook-button`);
  const notebookAudio = new Audio("../assets/mp3/notebook.mp3");
  const counterDisplay = document.getElementById(`${roomId}-counter`);
  const closeButton = document.getElementById(`${roomId}-close-button`);
  const voiceOver = new Audio(`../assets/mp3/${roomId}-voiceover.wav`);
  const pickUp = new Audio("../assets/mp3/pickup.mp3");
  const reminderAudio = new Audio("../assets/mp3/reminder.wav");
  const resumeButton = document.getElementById(`${roomId}-resume-voiceover`);
  const disableButton = document.getElementById(`${roomId}-disable-voiceover`);
  const passAudio = new Audio("../assets/mp3/pass.mp3");
  const exitButton = document.querySelector(".exit-button");

  let isFirstTime = localStorage.getItem(`${roomId}-isFirstTime`) !== "false";
  notebook.style.display = "none";

  if (isFirstTime) {
    overlay.style.display = "flex";
    voiceOver.play();
    localStorage.setItem(`${roomId}-isFirstTime`, "false");
  } else {
    overlay.style.display = "none";
    voiceOver.pause();
    counter = localStorage.getItem(`${roomId}-counter`) || 0;
    counterDisplay.textContent = `${counter}/${itemCount}`;

    document.querySelectorAll(`.${roomId}-item`).forEach((item, index) => {
      if (localStorage.getItem(`${roomId}-${item.id}`) === "found") {
        const itemValue = item.getAttribute("data-value");
        const notebookItem = document.createElement("li");
        notebookItem.textContent = itemValue;
        notebook.appendChild(notebookItem);
      }
    });
  }

  exitButton.addEventListener("click", () => {
    passAudio.play();
    setTimeout(() => {
      window.location.href = "hallway.html";
    }, 300);
  });

  resumeButton.addEventListener("click", () => {
    voiceOver.play();
  });

  disableButton.addEventListener("click", () => {
    voiceOver.pause();
  });

  voiceOver.addEventListener("ended", () => {
    if (isFirstTime === true && roomId === "room1") {
      reminderAudio.play();
    }

    overlay.style.display = "none";
  });

  storyButton.addEventListener("click", () => {
    overlay.style.display = "flex";
    storyAudio.play();
  });

  notebookButton.addEventListener("click", () => {
    notebook.style.display =
      notebook.style.display === "none" ? "flex" : "none";
    notebookAudio.play();
  });

  document.querySelectorAll(`.${roomId}-item`).forEach((item, index) => {
    if (localStorage.getItem(`${roomId}-${item.id}`) === "found") {
      item.classList.add("hide");
    }
    item.addEventListener("click", () => {
      if (!item.classList.contains("hide")) {
        pickUp.play();
        item.classList.add("hide");
        localStorage.setItem(`${roomId}-${item.id}`, "found");
        counter++;
        localStorage.setItem(`${roomId}-counter`, counter);
        counterDisplay.textContent = `${counter}/${itemCount}`;
        const itemValue = item.getAttribute("data-value");
        const notebookItem = document.createElement("li");
        notebookItem.textContent = itemValue;
        notebook.appendChild(notebookItem);
      }
    });
  });

  closeButton.addEventListener("click", () => {
    storyAudio.play();
    overlay.style.display = "none";
    voiceOver.pause();
    if (isFirstTime === true && roomId === "room1") {
      reminderAudio.play();
    }
    if (isFirstTime === true) {
      isFirstTime = false;
    }
  });
}

const knife = document.querySelector("#knife");
const love = document.querySelector("#love");

if (knife && love) {
  knife.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", "knife");
  });

  love.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  love.addEventListener("drop", (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");

    if (data === "knife") {
      const img = document.createElement("img");
      img.src = "../assets/images/room3/meme.webp";
      img.style.position = "fixed";
      img.style.top = "0";
      img.style.left = "0";
      img.style.width = "100vw";
      img.style.height = "100vh";
      img.style.zIndex = "1000";
      document.body.appendChild(img);

      setTimeout(() => {
        document.body.removeChild(img);
      }, 3000);
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const roomId = document.body.id;
  const itemCount = roomId === "room1" ? 5 : 4;
  setupRoom(roomId, itemCount);
});

const taylor = document.querySelector("#taylor");
const taylorAudio = new Audio("../assets/mp3/taylor.mp3");

taylor.addEventListener("click", () => {
  taylorAudio.play();
});
