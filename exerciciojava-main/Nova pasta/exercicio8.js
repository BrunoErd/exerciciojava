var board = document.getElementById('board');
var message = document.getElementById('message');


let jogadorAtual = 'X';
let cels = Array(9).fill('');
let gamerover = false;

for (let i = 0; i <9; i++){
    let cel = document.createElement('div');
    cell.clasList('cell')
    cell.addEventListenner('click', () => handleCellClick(i))
    board.appendChild(cell);
}

function handleCellClick(index)
