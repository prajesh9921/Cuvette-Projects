const viewRulesBtn = document.getElementById("view-rules");
const rulesBox = document.querySelector(".rules-box");
const closeRulesBtn = document.getElementById("close-rules");
const userScore = document.getElementById("myScore");
const computerScore = document.getElementById("systemScore");

// Setting local storage
const data = {
  user: 0,
  computer: 0,
  winner: "",
  pcChoice: "",
  userChoice: "",
};
if (!localStorage.getItem("myData")) {
  localStorage.setItem("myData", JSON.stringify(data));
}

// Function to update score board
function updateScoreBoard() {
  const retrievedData = JSON.parse(localStorage.getItem("myData"));
  computerScore.innerText = retrievedData.computer;
  userScore.innerText = retrievedData.user;
}

updateScoreBoard();

// Functions to open and close the rule box
closeRulesBtn.addEventListener("click", function () {
  rulesBox.style.display = "none";
  closeRulesBtn.style.display = "none";
});

const openRules = () => {
  rulesBox.style.display = "flex";
  closeRulesBtn.style.display = "flex";
};

// Game logic
function userChoice(choice) {
  gotoResult();
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];
  const result = determineWinner(choice, computerChoice);
  displayResult(choice, computerChoice, result);
}

function determineWinner(user, computer) {
  if (user === computer) {
    return "tie";
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "user";
  } else {
    return "computer";
  }
}

function displayResult(userChoice, computerChoice, result) {
  const oldData = JSON.parse(localStorage.getItem("myData"));

  if (result === "user") {
    const data = {
      user: oldData.user + 1,
      computer: oldData.computer,
      winner: "user",
      pcChoice: computerChoice,
      userChoice: userChoice,
    };
    localStorage.setItem("myData", JSON.stringify(data));
  } else if (result === "computer") {
    const data = {
      user: oldData.user,
      computer: oldData.computer + 1,
      winner: "computer",
      pcChoice: computerChoice,
      userChoice: userChoice,
    };
    localStorage.setItem("myData", JSON.stringify(data));
  } else {
    const data = {
      user: oldData.user,
      computer: oldData.computer,
      winner: "tie",
      pcChoice: computerChoice,
      userChoice: userChoice,
    };
    localStorage.setItem("myData", JSON.stringify(data));
  }
}

function gotoResult() {
  window.location.href = "./Screens/ResultPage/resultPage.html";
}
