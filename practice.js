let score = [{
  win:0,
  lose:0,
  tie:0
}]

for(let i=0;i<score.length;i++)
{
  const obj = score[i]

  console.log(obj)
}




let scores = JSON.parse(localStorage.getItem("scores")) || {
  win: 0,
  lose: 0,
  tie: 0,
};

function reset() {
  scores.win = 0;
  scores.lose = 0;
  scores.tie = 0;
  scoreupdate();
  saveScores();
}

function choice(choiceparam) {
  let computerchoice = Math.random();

  if (computerchoice >= 0 && computerchoice < 1 / 3) {
    computerchoice = "rock";
  } else if (computerchoice >= 1 / 3 && computerchoice < 2 / 3) {
    computerchoice = "paper";
  } else {
    computerchoice = "scissors";
  }

  let res;

  if (choiceparam === "rock") {
    if (computerchoice === "rock") {
      res = "tie";
    } else if (computerchoice === "scissors") {
      res = "win";
    } else {
      res = "lose";
    }
  } else if (choiceparam === "paper") {
    if (computerchoice === "rock") {
      res = "win";
    } else if (computerchoice === "scissors") {
      res = "lose";
    } else {
      res = "tie";
    }
  } else if (choiceparam === "scissors") {
    if (computerchoice === "scissors") {
      res = "tie";
    } else if (computerchoice === "paper") {
      res = "win";
    } else {
      res = "lose";
    }
  }

  if (res === "win") {
    scores.win += 1;
  } else if (res === "lose") {
    scores.lose += 1;
  } else {
    scores.tie += 1;
  }

  scoreupdate();
  saveScores();
  toshow();
}

function saveScores() {
  localStorage.setItem("scores", JSON.stringify(scores));
}

function toshow() {
  document.getElementById("win").textContent = `Win: ${scores.win}`;
  document.getElementById("lose").textContent = `Lose: ${scores.lose}`;
  document.getElementById("tie").textContent = `Tie: ${scores.tie}`;
}

function scoreupdate() {
  toshow();
}

toshow();
