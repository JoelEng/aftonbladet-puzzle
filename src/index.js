import "./styles.scss"
import { tiles, image } from "./globals"
import template from "./template"
import rack from "./rack"
import tile from "./tile"
import slot from "./slot"

image.width = "600px"
image.height = "400px"
tiles.countX = 7
tiles.countY = 1
tiles.width = `calc(${image.width} / ${tiles.countX})`
tiles.height = `calc(${image.height} / ${tiles.countY})`

//Load image-button created
const imgLoader = document.createElement("input")
imgLoader.type = "file"
document.body.append(imgLoader)

//Main container created
const container = document.createElement("div")
container.classList.add("container")
document.body.append(container)

container.append(template)
for (let i = 0; i < tiles.countX; i++) {
  for (let j = 0; j < tiles.countY; j++) {
    template.append(slot(i, j))
  }
}
container.append(rack)
for (let i = 0; i < tiles.countX; i++) {
  for (let j = 0; j < tiles.countY; j++) {
    rack.append(tile(i, j, i, j))
  }
}

window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var images = document.querySelectorAll('img')
          for (let i = 0; i < images.length; i++) {
            images[i].src = URL.createObjectURL(this.files[0])
          }

          img.src = URL.createObjectURL(this.files[0])
      }
  });
});