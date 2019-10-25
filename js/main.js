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

/*----- app's state (variables) -----*/
//whose turn it is
//winner

let playCount = [];
let playCombo = ''; 


/*----- cached element references -----*/




/*----- event listeners -----*/
//when a cell is clicked
//when play again button is clicked

document.querySelector('.board').addEventListener('click', handleCellClick);
 

// document.getElementById('play-again')
//     .addEventListener('click', handleButtonClick);



/*----- functions -----*/
//handlers(deals with event)
//global state
// when you click the cell, the function puts an x or an o
function handleCellClick(evt) {
    let player1 = document.getElementById(evt.path['0'].id);
    player1.textContent = 'X';
}