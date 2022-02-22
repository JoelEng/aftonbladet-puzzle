import { currentTile, tiles } from "./globals"

//A slot is a part of the template. Tiles are placed in slots and snap into place
export default function slot(x, y) {
  const slot = document.createElement("div")
  slot.classList.add("slot")
  slot.onmouseup = handleDrop
  slot.onmousedown = handleClick
  slot.style.left = `calc(${x} * ${tiles.width})`
  slot.style.top = `calc(${y} * ${tiles.height})`
  slot.style.width = tiles.width
  slot.style.height = tiles.height

  function handleClick(e) {
    //emulate pressing on current tile when slot is pressed
    currentTile.mouseDown && currentTile.mouseDown(e)
  }

  function handleDrop() {
    const parentPos = document.getElementById("template").getBoundingClientRect()
    const posX = `calc(${slot.style.left} + ${parentPos.left}px`
    const posY = `calc(${slot.style.top} + ${parentPos.top}px`
    currentTile.handleDrop && currentTile.handleDrop(posX, posY)

    if (currentTile.x === x && currentTile.y === y) {
      currentTile.isCorrect()
      checkWin()
    }
  }

  return slot
}

function checkWin() {
  if (tiles.correct == tiles.countX * tiles.countY) {
    const borders = document.getElementsByClassName("borderOverlay")
    for (let i = 0; i < borders.length; i++) {
      borders[i].style.border = "none"
    }
    alert("Congratulations, you've completed the puzzle!")
  }
}