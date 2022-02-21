import { currentTile, tiles } from "./globals"

//A slot is a part of the template. Tiles are placed in slots and snap into place
export default function slot(x, y) {
  const slot = document.createElement("div")
  slot.classList.add("slot")
  slot.onmouseup = handleDrop
  slot.onmousedown = handleClick
  slot.style.left = `${x}px`
  slot.style.top = `${y}px`

  function handleClick(e) {
    //emulate pressing on current tile when slot is pressed
    currentTile.mouseDown(e)
  }

  function handleDrop() {
    if (currentTile.x === x && currentTile.y === y) {
      currentTile.isCorrect()
      checkWin()
    }

    const parentPos = document.getElementById("template").getBoundingClientRect()
    const posX = `calc(${slot.style.left} + ${parentPos.left}px`
    const posY = `calc(${slot.style.top} + ${parentPos.top}px`
    currentTile.handleDrop(posX, posY)
  }

  return slot
}

function checkWin() {
  if (tiles.correct == 4) {
    console.log("You've won!")
  }
}