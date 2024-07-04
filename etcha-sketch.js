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

let grids = document.querySelectorAll('#grid');
Array.from(grids);

grids.forEach((grid) => {
grid.addEventListener('mouseover', () =>{
    grid.setAttribute('style','background-color:blue;');
});
});

let reset = document.querySelector('button');
reset.addEventListener('click', ()=>{
    grids.forEach((grid)=>{
        grid.setAttribute('style','background-color:white;');
    });
});