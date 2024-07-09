let container = document.querySelector('#container');

let grid_Sides = 16;

let createGrid = (grid_Sides) => {
    for(let i = 0; i < grid_Sides; i++){
    let line = document.createElement('div');
    line.setAttribute('id','line');
    for(let j = 0; j < grid_Sides;j++){
    let block = document.createElement('div')
    block.setAttribute('id','block')
    //block.textContent = j;
    line.appendChild(block);
    };
    container.appendChild(line);
    };
};

createGrid(grid_Sides);

let blocks = document.querySelectorAll('#block');
Array.from(blocks);

blocks.forEach((block) => {
block.addEventListener('mouseover', () =>{
    block.setAttribute('style','background-color:blue;');
});
});

let reset = document.querySelector('button');
reset.addEventListener('click', ()=>{
    blocks.forEach((block)=>{
        block.setAttribute('style','background-color:white;');
    });
});