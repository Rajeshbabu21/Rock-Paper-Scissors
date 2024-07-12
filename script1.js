// for random choices
let computerchoice;

// to track scores
let scores = {
  win: 0,
  lose: 0,
  tie: 0,
};

scores = JSON.parse(localStorage.getItem("scores")) || {
  win: 0,
  lose: 0,
  tie: 0,
};

// to reset the scores

function reset() {
  scores.win = 0;
  scores.lose = 0;
  scores.tie = 0;

  document.getElementById("win").textContent = `win : ${0}`;
  document.getElementById("lose").textContent = `lose : ${0}`;
  document.getElementById("tie").textContent = `tie : ${0}`;
  // console.log(scores);
  // scoreupdate();
}

// console.log(computerchoice);

// to stoew the result
let res;

// based on the input
function choice(choiceparam) {
  let computerchoice1 = Math.random();
  // to get the computer score
  if (computerchoice1 >= 0 && computerchoice1 < 1 / 3) {
    computerchoice = "rock";
  } else if (computerchoice1 >= 1 / 3 && computerchoice1 < 2 / 3) {
    computerchoice = "paper";
  } else {
    computerchoice = "scissors";
  }

  // rock
  if (choiceparam === "rock") {
    if (computerchoice === "rock") {
      res = "tie";
    } else if (computerchoice === "scissors") {
      res = "win";
    } else {
      res = "lose";
    }
  }

  // paer
  else if (choiceparam === "paper") {
    if (computerchoice === "rock") {
      res = "win";
    } else if (computerchoice === "scissors") {
      res = "lose";
    } else {
      res = "tie";
    }
  } else {
    //scissors
    if (computerchoice === "scissors") {
      res = "tie";
    } else if (computerchoice === "paper") {
      res = "win";
    } else {
      res = "lose";
    }
  }

  // to store the result in the win loose tie variable
  if (res === "win") {
    scores.win += 1;
  } else if (res === "lose") {
    scores.lose += 1;
  } else {
    scores.tie += 1;
  }

  toshow();
}

function saveScores() {
  localStorage.setItem("scores", JSON.stringify(scores));
}

function toshow() {
  document.getElementById("win").textContent = `win : ${scores.win}`;
  document.getElementById("lose").textContent = `lose : ${scores.lose}`;
  document.getElementById("tie").textContent = `tie : ${scores.tie}`;
}
toshow();
