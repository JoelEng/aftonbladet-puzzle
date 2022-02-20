import currentTile from "./globals"

//A slot is a part of the template. Tiles are placed in slots and snap into place
export default function slot(x, y) {
  const slot = document.createElement("div")
  slot.classList.add("slot")
  slot.onmouseup = handleDrop
  slot.style.left = `${x}px`
  slot.style.top = `${y}px`

  function handleDrop() {
    currentTile.handleDrop(slot.style.left, slot.style.top)
  }

  return slot
}