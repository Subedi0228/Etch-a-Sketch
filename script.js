const sizeBtn = document.querySelector(".sizeButton");
const rainbowBtn = document.querySelector(".rainbowButton");
const blackBtn = document.querySelector(".blackButton");
const clearBtn = document.querySelector(".clearButton");
const grid = document.querySelector(".grid");

var gridSize = 16;
let color = "black";
makeGrid(16);


sizeBtn.addEventListener('click', e => {
    let size = prompt("Please select a size between 1 and 100");
    if(size == "" || size == null) return;
    console.log(`the text is: ${size}`);
    while (size > 100 || size < 0) {
        size = prompt("Please select a size between 1 and 100");
        if(size == "" || size == null) return;
    }
    let r = document.querySelector(":root");
    r.style.setProperty('--size', size);
    makeGrid(size);
    gridSize = size;
})

function makeGrid(size) {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    for (let i = 0; i < size * size; i++) {
        let newElement = document.createElement('div');
        newElement.classList.add('gridCell');
        newElement.addEventListener('mouseover', e => {
            let color = getColor();
            console.log(color);
            newElement.style.backgroundColor = color;
        });
        grid.appendChild(newElement);
    }
}

function getColor() {
    if(color == "black"){
        return "000000";
    } else{
    return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
    }
}

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

blackBtn.addEventListener('click', e => {
    color = "black";
    blackBtn.style.borderColor = "gray";
    rainbowBtn.style.borderColor = "lightgray";
})
rainbowBtn.addEventListener('click', e => {
    color = "rainbow";
    rainbowBtn.style.borderColor = "gray";
    blackBtn.style.borderColor = "lightgray";
})
clearBtn.addEventListener('click', e => {
    makeGrid(gridSize);
})


