import currentTile from "./globals"

//A slot is a part of the template. Tiles are placed in slots and snap into place
export default function slot(x, y) {
  const slot = document.createElement("div")
  slot.classList.add("slot")
  slot.onmouseup = handleDrop
  slot.style.left = `${x}px`
  slot.style.top = `${y}px`

  function handleDrop() {
    const parentPos = document.getElementById("template").getBoundingClientRect()
    const posX = `calc(${slot.style.left} + ${parentPos.left}px`
    const posY = `calc(${slot.style.top} + ${parentPos.top}px`
    currentTile.handleDrop(posX, posY)
  }

  return slot
}