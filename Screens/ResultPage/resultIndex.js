const rulesBox = document.querySelector(".rules-box");
const closeRulesBtn = document.getElementById("close-rules");

closeRulesBtn.addEventListener("click", function () {
  rulesBox.style.display = "none";
  closeRulesBtn.style.display = "none";
});

const openRules = () => {
  rulesBox.style.display = "flex";
  closeRulesBtn.style.display = "flex";
};

const oldData = JSON.parse(localStorage.getItem("myData"));
const UserScore = oldData.user;
const PcScore = oldData.computer;
const gameWinner = oldData.winner;
const usersChoice = oldData.userChoice;
const computerChoice = oldData.pcChoice;

const nextBtn = document.getElementById("next-btn");

const userScore = document.getElementById("myScore");
const pcScore = document.getElementById("systemScore");
const userImage = document.getElementById("userImg");
const pcImage = document.getElementById("pcImg");
const resultText = document.getElementById("result-text");

const userWinnerCard1 = document.querySelector(".user-circle-one");
const userWinnerCard2 = document.querySelector(".user-circle-two");
const userWinnerCard3 = document.querySelector(".user-circle-three");

const pcWinnerCard1 = document.querySelector(".pc-circle-one");
const pcWinnerCard2 = document.querySelector(".pc-circle-two");
const pcWinnerCard3 = document.querySelector(".pc-circle-three");

const userCardOuterShell = document.querySelector(".user-card-outershell");
const pcCardOuterShell = document.querySelector(".pc-card-outerShell");

if (gameWinner === "user") {
  pcWinnerCard1.style.cssText =
    "background-color: transparent; box-shadow: none";
  pcWinnerCard2.style.cssText =
    "background-color: transparent; box-shadow: none";
  pcWinnerCard3.style.cssText =
    "background-color: transparent; box-shadow: none";
  pcCardOuterShell.style.backgroundColor = "#89C15E";
  nextBtn.style.display = "block";
} else if (gameWinner === "computer") {
  userWinnerCard1.style.cssText =
    "background-color: transparent; box-shadow: none";
  userWinnerCard2.style.cssText =
    "background-color: transparent; box-shadow: none";
  userWinnerCard3.style.cssText =
    "background-color: transparent; box-shadow: none";
  userCardOuterShell.style.backgroundColor = "#89C15E";
} else {
  pcWinnerCard1.style.cssText =
    "background-color: transparent; box-shadow: none";
  pcWinnerCard2.style.cssText =
    "background-color: transparent; box-shadow: none";
  pcWinnerCard3.style.cssText =
    "background-color: transparent; box-shadow: none";
  pcCardOuterShell.style.backgroundColor = "#0074B6";
  userWinnerCard1.style.cssText =
    "background-color: transparent; box-shadow: none";
  userWinnerCard2.style.cssText =
    "background-color: transparent; box-shadow: none";
  userWinnerCard3.style.cssText =
    "background-color: transparent; box-shadow: none";
  userCardOuterShell.style.backgroundColor = "#0074B6";
}

userScore.innerText = UserScore;
pcScore.innerText = PcScore;

if (gameWinner === "tie") {
  resultText.innerText = "TIE UP";
} else {
  resultText.innerText = gameWinner === "user" ? "YOU WIN" : "YOU LOST";
}

if (usersChoice === "rock") {
  userImage.src = "../../assets/images/rock.png";
} else if (usersChoice === "paper") {
  userImage.src = "../../assets/images/paper.png";
} else {
  userImage.src = "../../assets/images/scissor.png";
}

if (computerChoice === "rock") {
  pcImage.src = "../../assets/images/rock.png";
} else if (computerChoice === "paper") {
  pcImage.src = "../../assets/images/paper.png";
} else {
  pcImage.src = "../../assets/images/scissor.png";
}

