// Variabelen
let selectedBlock = null;
const gameArea = document.getElementById("game-area");
const blocks = document.querySelectorAll(".block");
const gameCells = [];

// Maak de cellen van de game area
for (let i = 0; i < 80; i++) {
  const cell = document.createElement("div");
  cell.classList.add("game-cell");
  gameArea.appendChild(cell);
  gameCells.push(cell);
}

// Voeg click event listeners toe voor de blokken in de sidebar
blocks.forEach(block => {
  block.addEventListener("click", () => {
    selectedBlock = block;
    blocks.forEach(b => b.classList.remove("selected"));
    block.classList.add("selected");
  });
});

// Voeg click event listeners toe voor de cellen in de game area
gameCells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (selectedBlock && !cell.classList.contains("block-placed")) {
      const newBlock = document.createElement("div");
      newBlock.classList.add("block-placed");

      // Afhankelijk van welk blok is geselecteerd, stel de achtergrondkleur in
      switch (selectedBlock.id) {
        case "grass":
          newBlock.style.backgroundColor = "#7CFC00";
          break;
        case "stone":
          newBlock.style.backgroundColor = "#808080";
          break;
        case "wood":
          newBlock.style.backgroundColor = "#8B4513";
          break;
      }

      cell.appendChild(newBlock);
    }
  });
});
