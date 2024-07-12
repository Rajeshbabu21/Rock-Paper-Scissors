// to track thr computres pick
let computerchoice;


// to track scores
let scores = {
  
  win: 0,
  lose: 0,
  tie: 0,
};


// track the win and onload
 scores = JSON.parse(localStorage.getItem("scores")) || {
  win: 0,
  lose: 0,
  tie: 0,
};

// Function to reset scores to zero
function reset() {
  scores.win = 0;
  scores.lose = 0;
  scores.tie = 0;

  
  // Update HTML elements to 0
  document.getElementById("win").textContent = `win : ${scores.win}`;
  document.getElementById("lose").textContent = `lose : ${scores.lose}`;
  document.getElementById("tie").textContent = `tie : ${scores.tie}`;
  
  saveScores();

}

// value from the button
function choice(choiceparam) {

  // computer's choice
  let computerchoice1 = Math.random();

  // Assign computer's choice 
  if (computerchoice1 >= 0 && computerchoice1 < 1 / 3) {
    computerchoice = "rock";
  } 
  
  else if (computerchoice1 >= 1 / 3 && computerchoice1 < 2 / 3) {
    computerchoice = "paper";
  } 
  
  else {
    computerchoice = "scissors";
  }


  // calculate  the result 
  let res;

  //person choice is rock 
  if (choiceparam === "rock") {
    if (computerchoice === "rock") {
      res = "tie";
    } else if (computerchoice === "scissors") {
      res = "win";
    } else {
      res = "lose";
    }
  }

  //person choice is paper
  else if (choiceparam === "paper") {
    if (computerchoice === "rock") {
      res = "win";
    } else if (computerchoice === "scissors") {
      res = "lose";
    } else {
      res = "tie";
    }
  } 
  
  else {
    //person choice is scissors
    if (computerchoice === "scissors") {
      res = "tie";
    } else if (computerchoice === "paper") {
      res = "win";
    } else {
      res = "lose";
    }
  }

  // Update scores based on the result
  if (res === "win") {
    scores.win += 1;
  }
  
  else if (res === "lose") {
    scores.lose += 1;
  } 
  else {
    scores.tie += 1;
  }

  // Update HTML to display scores in dom
  toshow();
}

// Function to save scores to localStorage
function saveScores() {
  localStorage.setItem("scores", JSON.stringify(scores));
}

// Function to update the HTML with current scores and computer's choice
function toshow() {
  document.getElementById("win").textContent = `win : ${scores.win}`;
  document.getElementById("lose").textContent = `lose : ${scores.lose}`;
  document.getElementById("tie").textContent = `tie : ${scores.tie}`;
  // console.log(computerchoice)
  
  let todos = "";
  

  let html = `<p>Computers choice : ${ computerchoice}</p>`;

  todos += html;

  document.querySelector(".com").innerHTML = todos;
}

// Initial display of scores and computer's choice
toshow();


