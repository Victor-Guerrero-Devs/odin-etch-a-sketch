const containerEle = document.querySelector(".container");
const tileInputEle = document.querySelector("#number-of-tiles");
const tileBtn = document.querySelector("#tile-btn");

function clearBoard() {
  containerEle.innerHTML = "";
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
    squareEle.addEventListener("mouseover", () => {
      squareEle.classList.add("black-square");
    });
  }
}

tileBtn.addEventListener("click", () => {
  const inputNumber = +tileInputEle.value;
  populateContainer(inputNumber);
});
