/*----- constants -----*/

const player1 = 'X';
const player2 = 'O';
const winning_combo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//cannot strictly compare arrays
//do an empty array for winning combo? and then push each id of the box clicked
// to the player1score array and 
/*----- app's state (variables) -----*/

let playCount = [];
let playCombo = [];
let totalMvs = [];
let player1Score = [];
let player2Score = [];



/*----- cached element references -----*/




/*----- event listeners -----*/
//when play again button is clicked

document.querySelector('.board').addEventListener('click', handleCellClick);
 
document.querySelector('.play-again').addEventListener('click', handleButtonClick);



/*----- functions -----*/
init ();
// when you click the cell, the function puts an x or an o
function handleCellClick(evt) {
    let player1 = document.getElementById(evt.path['0'].id);
    player1.textContent = 'X';

};


//alternating x and o for player1 and player2
function handleCellClick(evt){
    totalMvs ++; //moves through each move one by one
    if(totalMvs % 2 !== 0){
        evt.target.textContent = player1;
        player1Score.push(evt.target.textContent);
      } else {
        evt.target.textContent = player2;
    };
};
 
//need to not allow player to click a cell that is already occupied
//if td already has a value, return the function

// function handleTDClick(evt) {
//     let playLetter = document.getElementById(evt.path["0"].id);
//     playCount.push(evt.target.value);
//     renderTurnMessage();
//     if (playLetter.textContent === ("X") || (playLetter.textContent === ("O"))) {
//         return 
//     } 
//     else if (playCount.length % 2 === 1) {
//         playLetter.textContent = playerX;
//         playerXScore.push(playLetter.id)
//     } else if (playCount.length % 2 === 0) {
//         playLetter.textContent = playerO;
//         playerOScore.push(playLetter.id)
//     }
//  return   
// };


//need a function to check for a winner, running through the nested array of possible winning combos
// function checkWinner() {

// }
//function for a tie

//function for reset game button
// set page to refresh
function handleButtonClick(evt) {
    let PlayButton = document.getElementById('play-again');
    window.location.reload(true)
};