let container = document.querySelector('#container');

let square_amount = 256;

let createGrid = (square_amount) => {
    for(let i = 0; i < square_amount; i++){
    let square = document.createElement('div');
    square.setAttribute('id','grid');
    container.appendChild(square);
    };
};

createGrid(square_amount);