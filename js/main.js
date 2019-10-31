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
let move = 1;


/*----- cached element references -----*/




/*----- event listeners -----*/

document.querySelector('.board').addEventListener('click', handleCellClick);

document.getElementById('reset').addEventListener('click', handleButtonClick);


/*----- functions -----*/
// init ();
// 
function handleCellClick(evt) {
    let currentCell = evt.target;
    if (currentCell.textContent) return

    if (move === 1) {
        currentCell.textContent = player1;
        move *= -1;
    } else {
        currentCell.textContent = player2;
        move *= -1;
    };
};


 
//need to not allow player to click a cell that is already occupied
//if td already has a value, return the function


//function for reset game button
function handleButtonClick(evt) {
    window.location.reload(true)
};