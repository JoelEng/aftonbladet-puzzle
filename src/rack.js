import tile from "./tile"

//The template is a grid of slots, each of which a tile can be placed into
const rack = document.createElement("div")
rack.classList.add("template")
rack.append(tile(0, 0))
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    rack.append(tile(i * 150, j * 100))
  }
}
export default rack