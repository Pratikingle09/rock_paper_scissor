let buttons = document.querySelectorAll(".game-btn");
hideResult();
showNextButton(false);
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    let btn_selected = button.getAttributeNode("id").value;
    let pcChoice = pcSelected();
    Picked(btn_selected,pcChoice);
    if (btn_selected === pcChoice) {
      resultStatus.textContent = "TIE UP";
      showResult();
      hideGame();
      showNextButton(false);
    } else if (
      (btn_selected === "rock" && pcChoice === "sissors") ||
      (btn_selected === "scissors" && pcChoice === "paper") ||
      (btn_selected === "paper" && pcChoice === "rock")
    ) {
      resultStatus.textContent = "YOU WIN";
      showNextButton(true);
      showResult();
      hideGame();
      updateScore("your_score");

    } else {
         // Computer wins
         resultStatus.textContent = "YOU LOST";
         showResult();
         hideGame();
      showNextButton(false);
      updateScore("comp_score");
    }
  });
});
function updateScore(scoreType) {
    const scoreElement = document.querySelector("." + scoreType).querySelector('.digit');
    console.log(scoreElement)
    const currentScore = parseInt(scoreElement.textContent, 10);
    scoreElement.textContent = (currentScore + 1).toString();
  
    // Save the updated score in local storage
    localStorage.setItem(scoreType, currentScore + 1);
  }
  
  // Function to get the scores from local storage and update the display
  function getScoresFromLocalStorage() {
    const compScore = localStorage.getItem("comp_score");
    const personScore = localStorage.getItem("your_score");
  
    if (compScore) {
      const compScoreElement = document.querySelector(".comp_score").querySelector(".digit");
      compScoreElement.textContent = compScore;
    }
  
    if (personScore) {
      const personScoreElement = document.querySelector(".your_score").querySelector('.digit');
      personScoreElement.textContent = personScore;
    }
  }
let resultStatus = document.querySelector(".status h1");
const options = ["rock", "paper", "sissors"];
function pcSelected() {
  const randomValue = Math.floor(Math.random() * options.length);
  return options[randomValue];
}

function hideResult() {
  document.getElementById("result").style.display = "none";
  document.getElementById("picked").style.display = "none";
}
function hideGame() {
  document.getElementById("game").style.display = "none";
  document.getElementById("line").style.display = "none";
}
function showResult() {
  document.getElementById("result").style.display = "flex";
  document.getElementById("picked").style.display = "flex";
}
function showGame() {
  document.getElementById("game").style.display = "flex";
  document.getElementById("line").style.display = "flex";
}
function replay() {
  hideResult();
  showGame();
  showNextButton(false);
}
function hideRules() {
  document.getElementById("rule").style.display = "none";
}
function showRules() {
  document.getElementById("rule").style.display = "block";
}
function hideRulesWin()
{
    document.getElementById("idwin").style.display="none";
}
function showRulesWin()
{
    document.getElementById("idwin").style.display="block";
}
function showNextButton(cond) {
  if (cond) {
    document.getElementById("next").style.display = "block";
  } else {
    document.getElementById("next").style.display = "none";
  }
}
function Picked(val1,val2){
    document.querySelector('#person-score').querySelector('img').src=`${val1}.svg`;
    document.querySelector('#comp-score').querySelector('img').src=`${val2}.svg`;
}
function win(){
    window.location.href='win.html';
}
function home()
{
    window.location.href="index.html";
}
  

