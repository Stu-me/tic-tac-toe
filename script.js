console.log('welcome to tic-tac-toe');
let gameAudio = new Audio('Harry.Potter.Theme.mp3');
let choseAudio = new Audio('evil-laugh-89423.mp3');
let loserAudio = new Audio('loser.mp3');
let winAudio = new Audio('applause-01-253125.mp3');
let turn = 'x';
let play = false;
const resetBtn = document.querySelector('#reset');
const blocks =  Array.from.(document.querySelectorAll('.boxtext'));

const changeTurn = ()=>{
    if(turn === 'x') return 'o';
    return 'x';
};

const checkWin = ()=>{

}
// add eventlisteners
blocks.forEach(element => {
    element.
});
