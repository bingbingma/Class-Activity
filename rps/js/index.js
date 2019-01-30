var rps = ["Rock", "Scissors", "Paper"];
var ROCK = rps[0];
var SCISSORS = rps[1];
var PAPER = rps[2];

function rpsRnd() {
  return Math.floor(Math.random() * 3);
}

function getWinner(humanPlay, computerPlay) {
  if (humanPlay === computerPlay) {
    return "<h4>Tie</h4>";
  }
  if (humanPlay === rps[0] && computerPlay === rps[1]) {
    return "<h4>Human Wins</h4>";
  }
  if (humanPlay === rps[1] && computerPlay === rps[2]) {
    return "<h4>Human Wins</h4>";
  }
  if (humanPlay === rps[2] && computerPlay === rps[0]) {
    return "<h4>Human wins</h4>";
  }
  if (humanPlay === rps[1] && computerPlay === rps[0]) {
    return "<h4>Human Loses</h4>";
  }
  if (humanPlay === rps[2] && computerPlay === rps[1]) {
    return "<h4>Human Loses</h4>";
  }
  if (humanPlay === rps[0] && computerPlay === rps[2]) {
    return "<h4>Human Loses</h4>";
  }
}

$("#btnRock").on("click", f => {
  var humanPlay = ROCK;
  var computerPlay = rps[rpsRnd()];

  document.getElementById("par").innerHTML =
    "<h4>Human plays: </h4>" +
    humanPlay +
    "<br>" +
    "<h4>Computer plays: </h4>" +
    computerPlay +
    "<br>" +
    getWinner(humanPlay, computerPlay);
});

$("#btnPaper").on("click", f => {
  var humanPlay = PAPER;
  var computerPlay = rps[rpsRnd()];
  console.log("DEBUG human played on paper click ==>", humanPlay);

  document.getElementById("par").innerHTML =
    "<h4>Human plays: </h4>" +
    humanPlay +
    "<br>" +
    "<h4>Computer plays: </h4>" +
    computerPlay +
    "<br>" +
    getWinner(humanPlay, computerPlay);
});

$("#btnScissors").on("click", f => {
  var humanPlay = SCISSORS;
  var computerPlay = rps[rpsRnd()];

  document.getElementById("par").innerHTML =
    "<h4>Human plays: </h4>" +
    humanPlay +
    "<br>" +
    "<h4>Computer plays: </h4>" +
    computerPlay +
    "<br>" +
    getWinner(humanPlay, computerPlay);
});

// remember this shorthand method
// document.getElementById("par2").innerHTML=
//   `Human: ${rps[rpsRnd()]} Computer: ${rps[rpsRnd()]}`;
