const container = document.querySelector('#container');
let size = 16;
createGrid(size);
let pixels = document.querySelectorAll('.pixel');
classicHover(pixels);

const reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
    resetGrid(pixels);
});

const newGrid = document.querySelector('#new');

newGrid.addEventListener('click', () => {
    resetGrid(pixels);
    document.getElementById('container').innerHTML = "";
    createNewGrid(size);
    pixels = document.querySelectorAll('.pixel');
    classicHover(pixels);
});

function createGrid(size) {
    for (let i = 0; i < size; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j = 0; j < size; j++){
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            row.appendChild(pixel);
        }
    };
};
function resetGrid(pixels){
    pixels.forEach((pixel) => {
        if (pixel.classList.contains('hov') === true){
            pixel.classList.remove('hov');
    }
});
};


function createNewGrid(size){
    size = prompt('Size of new table?');
    if (size > 100){
        size = 100;
    }
    createGrid(size);
}

function classicHover(pixels){
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            if (pixel.classList.contains('hov') === false){
                pixel.classList.add('hov');
            }
        });
    });
}
