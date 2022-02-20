//A slot is a part of the template. Tiles are placed in slots and snap into place
export default function slot(x, y) {
  const slot = document.createElement("div")
  slot.classList.add("slot")
  slot.style.left = `${x}px`
  slot.style.top = `${y}px`
  return slot
}