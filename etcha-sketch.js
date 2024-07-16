let container = document.querySelector('#container');
let input = document.querySelector('input');
let blocks = document.querySelectorAll('#block');
Array.from(blocks);



let createGrid = (grid_Sides) => {
    for(let i = 0; i < grid_Sides; i++){
    let line = document.createElement('div');
    line.setAttribute('id','line');
    
    for(let j = 0; j < grid_Sides;j++){
    let block = document.createElement('div')
    block.setAttribute('id','block')
    line.appendChild(block);
    };

    container.appendChild(line);
    };
};


let reset = document.querySelector('#reset');
reset.addEventListener('click', ()=>{
    container.textContent = ''
    grid_Sides = input.value;
    input.value = '';
    createGrid(grid_Sides);


});

let start = document.querySelector('#start');
start.addEventListener('click',()=>{

    start.setAttribute('style','display:none;');
    reset.setAttribute('style','display:block;');
    grid_Sides = input.value;
    input.value = '';
    createGrid(grid_Sides);

});
