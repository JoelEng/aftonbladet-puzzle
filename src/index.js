import "./styles.scss"
import template from "./template"
import rack from "./rack"
import tile from "./tile"
import slot from "./slot"

//Main container created
const container = document.createElement("div")
container.classList.add("container")
document.body.append(container)

container.append(template)
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    template.append(slot(i * 150, j * 100))
  }
}
container.append(rack)
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    rack.append(tile(i * 150, j * 100))
  }
}