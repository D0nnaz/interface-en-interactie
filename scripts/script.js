document.addEventListener("DOMContentLoaded", function () {
  const doorPasswords = {
    room1: "",
    room2: "12345",
    room3: "123",
    room4: "gypsyQuestions",
  };

  let incorrectPasswordAttempts = 0;

  const bellAudio = new Audio("../assets/mp3/bell.mp3");

  const deeDeeOverlay = document.createElement("div");
  deeDeeOverlay.id = "deeDeeOverlay";
  deeDeeOverlay.style.display = "none";
  deeDeeOverlay.textContent = "Dee Dee found you";
  document.body.appendChild(deeDeeOverlay);

  const gypsyQuestions = [
    { question: "Question 1 about Gypsy?", answer: "Sleep apnea" },
    { question: "Question 2 about Gypsy?", answer: "2005" },
    { question: "Question 3 about Gypsy?", answer: "16" },
  ];

  const audioDoor = new Audio("../assets/mp3/dooropen.mp3");
  const passAudio = new Audio("../assets/mp3/pass.mp3");
  const lockedAudio = new Audio("../assets/mp3/locked.wav");
  const wrongPassword = new Audio("../assets/mp3/wrong.wav");
  const passwordOverlay = document.getElementById("passwordOverlay");
  const passwordInput = document.getElementById("passwordInput");
  const gypsyQuestionForm = document.getElementById("gypsyQuestionForm");
  let activeDoor;

  document.querySelectorAll(".door").forEach((door) => {
    const doorId = door.id;

    if (localStorage.getItem(doorId) === "open") {
      door.src = "./assets/images/deuropen.png";
      door.classList.add("open-door");
      console.log("door already open");
    }

    door.addEventListener("click", () => {
      if (door.src.includes("deuropen")) {
        passAudio.play();
        setTimeout(() => {
          window.location.href = `/${doorId}.html`;
        }, 300);
      } else if (doorPasswords[doorId] === "gypsyQuestions") {
        gypsyQuestionForm.style.display = "flex";
      } else if (doorPasswords[doorId] && doorPasswords[doorId] !== "") {
        lockedAudio.play();
        setTimeout(() => {
          passwordOverlay.style.display = "flex";
        }, 500);

        activeDoor = door;
      } else if (!doorPasswords[doorId] || doorPasswords[doorId] === "") {
        door.src = "./assets/images/deuropen.png";
        door.classList.add("open-door");
        localStorage.setItem(doorId, "open");
        audioDoor.play();

        activeDoor = door;
      }
    });

    document
      .getElementById("checkGypsyAnswers")
      .addEventListener("click", function () {
        let correctAnswers = 0;
        let incorrectQuestions = [];
        for (let i = 0; i < gypsyQuestions.length; i++) {
          const userAnswer = document.getElementById(
            `gypsyAnswer${i + 1}`
          ).value;
          if (userAnswer === gypsyQuestions[i].answer) {
            correctAnswers++;
          } else {
            incorrectQuestions.push(i + 1);
            document
              .getElementById(`gypsyAnswer${i + 1}`)
              .classList.add("wrong-answer");
          }
        }
        if (correctAnswers === gypsyQuestions.length) {
          audioDoor.play();
          gypsyQuestionForm.style.display = "none";
          door.src = "../assets/images/deuropen.png";
          door.classList.add("open-door");
          localStorage.setItem(doorId, "open");
        } else {
          let incorrectQuestionsString = incorrectQuestions.join(", ");
          const errorElement = document.getElementById("error");
          errorElement.textContent =
            "Incorrect answers for questions: " + incorrectQuestionsString;
          errorElement.style.display = "block";
        }
      });
  });

  document
    .querySelector(".close-password")
    .addEventListener("click", function () {
      passwordOverlay.style.display = "none";
      gypsyQuestionForm.style.display = "none";
    });

  document
    .getElementById("submitPassword")
    .addEventListener("click", function () {
      if (passwordInput.value === doorPasswords[activeDoor.id]) {
        activeDoor.src = "./assets/images/deuropen.png";
        activeDoor.classList.add("open-door");
        localStorage.setItem(activeDoor.id, "open");
        passwordOverlay.style.display = "none";
        passwordInput.value = "";
        audioDoor.play();
      } else {
        passwordInput.value = "";
        wrongPassword.play();
      }
    });

  const resetButton = document.getElementById("resetButton");
  resetButton.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
  });
});

const smallScreenAudio = new Audio("../assets/mp3/smallScreen.wav");

window.addEventListener("resize", () => {
  if (window.innerWidth < 1792) {
    smallScreenAudio.play();
  }
});

document.querySelector(".disney-button").addEventListener("click", function () {
  const disneyFanAudio = new Audio("../assets/mp3/disney-fan.wav");
  passwordOverlay.style.display = "none";
  let disneyGif = document.querySelector(".disney");
  disneyFanAudio.play();
  disneyGif.style.display = "block";
  disneyGif.src = disneyGif.src;
  setTimeout(function () {
    disneyGif.style.display = "none";
  }, 2600);
});
