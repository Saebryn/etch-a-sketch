let gridSize = 5;

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const divRows = document.createElement('div');
        divRows.classList.add('row');
        container.appendChild(divRows);

        for (let i = 0; i < gridSize; i++) {
            const divColumns = document.createElement('div');
            divColumns.classList.add('column');
            divRows.appendChild(divColumns);
        }
    }
    const gridCells = document.querySelectorAll('.column');
    gridCells.forEach((cell) => {
        cell.addEventListener('mouseenter', function(hoveredCell) {
            hoveredCell.target.style.backgroundColor = "black";
        })
    })
}

function clearGrid() {
    const columnClear = document.querySelector('.row');
    while (columnClear.firstChild) {
        columnClear.removeChild(columnClear.lastChild);
    }
    const rowClear = document.querySelector('.container');
    while (rowClear.firstChild) {
        rowClear.removeChild(rowClear.lastChild);
    }

}

function resetGrid() {
    gridSize = prompt("Enter number of rows in the grid.");
    while (isNaN(gridSize)) {
        gridSize = prompt("Invalid. Enter number of rows in the grid.");
    }
    clearGrid();
    createGrid(gridSize);
}



const container = document.querySelector('.container');

createGrid(gridSize);



const resetButton = document.querySelector('.resetButton');
resetButton.addEventListener('click', resetGrid);
