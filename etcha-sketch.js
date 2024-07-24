let container = document.querySelector('#container');
let input = document.querySelector('input');
let blocks = [];
let opacity = 1;




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
    gridInteract();

};

let gridInteract = () =>{
    let blocks = document.querySelectorAll('#block');
    Array.from(blocks);
   
    let darken = 0;

    blocks.forEach((block)=>{
        block.addEventListener('mouseover', ()=>{
            let colors = rgb();
            block.style.backgroundColor =`rgb(${colors[0]},${colors[1]},${colors[2]})`;
            block.style.opacity = `${opacity - darken}`;
            darken = darken + 0.1
            return darken ;
        
            
        });
    });
};


let reset = document.querySelector('#reset');
reset.addEventListener('click', ()=>{
    if(input.value > 100 || input.value < 1){
    alert('Please enter a number from 1-100');
    return input.value ='';
        
    }else{
    container.textContent = ''
    grid_Sides = input.value;
    input.value = '';
    createGrid(grid_Sides);

    }
});

let start = document.querySelector('#start');
start.addEventListener('click',()=>{
    if(input.value > 100 || input.value < 1){
    alert('Please enter a number from 1-100');
    return input.value ='';
        
    }else{
    start.setAttribute('style','display:none;');
    reset.setAttribute('style','display:block;');
    grid_Sides = input.value;
    input.value = '';
    createGrid(grid_Sides);
    }
});

let rgb = () =>{
    let rgbArray = [];
    for (let i = 0; i < 3; i++){
    rgbArray.push(Math.floor(Math.random()*255));
}
return rgbArray;
};