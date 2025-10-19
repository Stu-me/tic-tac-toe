console.log("welcome to tic-tac-toe");
// audios
let gameAudio = new Audio("Harry.Potter.Theme.mp3");
let onSelectionAudio = new Audio("beep-329314.mp3");
let afterLossAudio = new Audio("loser.mp3");
let afterWinAudio = new Audio("applause-01-253125.mp3");
let turn = "X";
let play = false;
const reset = document.querySelector("#reset");
const switchSymbol = document.querySelector("#switch");
//functoions
const changeTurn = () => {
  if (turn === "X") return (turn = "O");
  return (turn = "X");
};
let gameOver = false;
const checkWin = () => {
  let boxtext = document.querySelectorAll(".boxtext");
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  win.forEach((e) => {
    if (
      boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML &&
      boxtext[e[1]].innerHTML === boxtext[e[2]].innerHTML &&
      boxtext[e[1]].innerHTML != ""
    ) {
      document.querySelector(
        ".info"
      ).innerHTML = `GAME OVER.... ${turn} won the game`;
      document.querySelector("#imgWin").style.width = "200px";
      gameOver = true;
    }
  });
  if (gameOver === true) {
  }
};

//game logic

let boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerHTML === "") {
      boxtext.innerHTML = turn;
      checkWin();
      changeTurn(turn);
      onSelectionAudio.play();
    }
    if (!gameOver)
      document.querySelector(".info").innerHTML = `Turn for ${turn}`;
  });
});

  reset.addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach((element) => {
      element.innerHTML = "";
      turn = "X";
      document.querySelector(".info").innerHTML = `Turn for ${turn}`;
      document.querySelector("#imgWin").style.width = "0px";
    });
  });

switchSymbol.addEventListener("click", () => {
  changeTurn();
  let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach((element) => {
      element.innerHTML = "";
      document.querySelector(".info").innerHTML = `Turn for ${turn}`;
    });

  document.querySelector(".info").innerHTML = ` Turn for ${turn}`;
});
