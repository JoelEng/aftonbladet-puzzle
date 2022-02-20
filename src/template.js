import slot from "./slot"

//The template is a grid of slots, each of which a tile can be placed into
const template = document.createElement("div")
template.classList.add("template")
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    template.append(slot(i * 150, j * 100))
  }
}
export default template