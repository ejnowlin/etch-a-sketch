const gridContainer = document.querySelector("#grid-container");

for (let i = 0; i < 256; i++) {
    gridContainer.appendChild(document.createElement("div"));
}
