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
let gameOver = false; // earlier made the mistake not to make it global

const checkDraw = ()=>{
  let boxtext = document.querySelectorAll('.boxtext');
  let allFilled = true;
  boxtext.forEach(box =>{
    if(box.innerHTML === '') allFilled  = false; // empty
  })
  if(allFilled === true && gameOver === false){
     document.querySelector(".info").innerHTML = `Game is tied. No one managed to win.`;
     afterLossAudio.play();
     document.querySelector('#lose').style.width = "200px";
  }
}

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
      gameOver = true;
      document.querySelector(".info").innerHTML = `GAME OVER.... ${turn} won the game`;
      document.querySelector("#imgWin").style.width = "200px";
      
    }
  });
      if(!gameOver)checkDraw();
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
    console.log(gameOver);
    if (!gameOver)
      document.querySelector(".info").innerHTML = `Turn for ${turn}`;
  });
});

  reset.addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    gameOver = false;
    Array.from(boxtexts).forEach((element) => {
      element.innerHTML = "";
      turn = "X";
      document.querySelector(".info").innerHTML = `Turn for ${turn}`;
      document.querySelector("#imgWin").style.width = "0px";
      document.querySelector("#lose").style.width = "0px";
    });
  });

switchSymbol.addEventListener("click", () => {
  changeTurn();
  gameOver = false;
  let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach((element) => {
      element.innerHTML = "";
    });
  document.querySelector(".info").innerHTML = ` Turn for ${turn}`;
});
