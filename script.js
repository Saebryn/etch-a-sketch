const gridSize = 4;

function drawGrid(gridSize) {
    for(i = 0; i < gridSize; i++) {
        console.log(i);
        const columns = document.createElement('div');
        container.appendChild(columns);
    }
}




const container = document.querySelector('.container');

drawGrid(gridSize);
