const containerEle = document.querySelector(".container");
const tileInputEle = document.querySelector("#number-of-tiles");
const rainbowEle = document.querySelector("#rainbow");
const tileBtn = document.querySelector("#tile-btn");

function clearBoard() {
  containerEle.innerHTML = "";
}

function calculateRandomValue() {
  return Math.floor(Math.random() * 256);
}

function colorTilesHandler() {
  const isRainbowChecked = rainbowEle.checked;

  if (isRainbowChecked) {
    const redValue = calculateRandomValue();
    const greenValue = calculateRandomValue();
    const blueValue = calculateRandomValue();
    this.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  } else {
    this.classList.add("black-square");
  }
}

function populateContainer(numOfTiles) {
  if (numOfTiles > 100) {
    alert("Max number of tiles is 100. Please enter a lower number");
    return;
  }

  tileInputEle.value = "";

  clearBoard();
  containerEle.style.gridTemplateColumns = `repeat(${numOfTiles}, 1fr)`;
  containerEle.style.gridTemplateRows = `repeat(${numOfTiles}, 1fr)`;

  const totalTiles = numOfTiles * numOfTiles;

  for (let i = 0; i <= totalTiles; i++) {
    const squareEle = document.createElement("div");
    containerEle.appendChild(squareEle);
    squareEle.addEventListener("mouseover", colorTilesHandler);
  }
}

tileBtn.addEventListener("click", () => {
  const inputNumber = +tileInputEle.value;
  populateContainer(inputNumber);
});
