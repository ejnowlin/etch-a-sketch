const gridContainer = document.querySelector("#grid-container");
const gridSizeBtn = document.querySelector("#grid-size-btn");
var gridSquareSize = document.createElement("style");

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

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
    if (event.target.className === "square") {
        let red, green, blue;
        red = getRandomIntInclusive(0, 255);
        green = getRandomIntInclusive(0, 255);
        blue = getRandomIntInclusive(0, 255);

        let opacity = event.target.style.opacity;
        if (opacity === "") {
            opacity = "0";
            opacity = parseInt(opacity);
        } else {
            opacity = parseFloat(opacity);
        }

        if (event.target.style.backgroundColor === "") {
            event.target.style.cssText = `
            background-color: rgb(${red}, ${green}, ${blue});
            opacity: ${opacity += 0.1};`;
        } else {
            event.target.style.opacity = (opacity += 0.1);
        }
    }
});

gridSizeBtn.addEventListener("click", () => {
    let userInput = prompt("How many squares per side of the new grid?", "100 max");
    addNewGrid(userInput);
});
