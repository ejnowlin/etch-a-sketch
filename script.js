const gridContainer = document.querySelector("#grid-container");
const gridSizeBtn = document.querySelector("#grid-size-btn");
var gridSquareSize = document.createElement("style");

function addNewGrid(input) {
    let newGridSize = 1;

    if (parseInt(input) > 0 && parseInt(input) <= 100) {
        newGridSize = parseInt(input);
    } else {
        alert("Invalid input. Click the button again and enter a number from 1-100.");
    }

    while (gridContainer.firstElementChild) {
        gridContainer.removeChild(gridContainer.firstElementChild);
    }

    for (let i = 0; i < (newGridSize * newGridSize); i++) {
        const div = document.createElement("div");
        gridContainer.appendChild(div);
        div.classList.toggle("square");
    }

    let divSide = gridContainer.clientWidth / newGridSize;
    gridSquareSize.innerHTML = `
        div.square {
        width: ${divSide}px;
        height: ${divSide}px;
        }`;
    document.head.appendChild(gridSquareSize);
}

gridContainer.addEventListener("mouseover", (event) => {
    if (event.target.className === "square")
        event.target.style.cssText = "background-color: grey;";
});

gridSizeBtn.addEventListener("click", () => {
    let userInput = prompt("How many squares per side of the new grid?", "100 max");
    addNewGrid(userInput);
});
