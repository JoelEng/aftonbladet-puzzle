import "./styles.scss"
import { tiles, image } from "./globals"
import template from "./template"
import rack from "./rack"
import tile from "./tile"
import slot from "./slot"

tiles.countX = 4
tiles.countY = 3

//Load image-button created
const imgLoader = document.createElement("input")
imgLoader.type = "file"
imgLoader.onchange = changeImage
document.body.append(imgLoader)

const rowsLabel = document.createElement("label")
rowsLabel.for = "rows"
rowsLabel.textContent = "Rows: "
document.body.append(rowsLabel)
const rows = document.createElement("input")
rows.type = "number"
rows.id = "rows"
rows.defaultValue = tiles.countY
rows.min = "1"
rows.style.width = "3rem"
document.body.append(rows)

const colsLabel = document.createElement("label")
colsLabel.for = "cols"
colsLabel.textContent = "Columns: "
document.body.append(colsLabel)
const cols = document.createElement("input")
cols.type = "number"
cols.id = "cols"
cols.defaultValue = tiles.countX
cols.min = "1"
cols.style.width = "3rem"
document.body.append(cols)

const update = document.createElement("button")
update.onclick = reload
update.textContent = "Update"
document.body.append(update)

//Main container created
const container = document.createElement("div")
container.classList.add("container")
document.body.append(container)
container.append(template)
container.append(rack)
image.width = template.clientWidth + "px"
image.height = `calc(${image.width} / 1.5)`

addPuzzle()
//Populates template and rack with slots and tiles respectively. Called once initially, and when update button is pressed
function addPuzzle() {
  tiles.width = `calc(${image.width} / ${tiles.countX})`
  tiles.height = `calc(${image.height} / ${tiles.countY})`
  for (let i = 0; i < tiles.countX; i++) {
    for (let j = 0; j < tiles.countY; j++) {
      template.append(slot(i, j))
    }
  }
  for (let i = 0; i < tiles.countX; i++) {
    for (let j = 0; j < tiles.countY; j++) {
      rack.append(tile(i, j, i, j))
    }
  }
}

function changeImage() {
  if (this.files && this.files[0]) {
    const images = document.querySelectorAll('img')
    const url =  URL.createObjectURL(this.files[0])
    for (let i = 0; i < images.length; i++) {
      images[i].src = url
    }
    image.src = url //Keep changes on tile count update
  }
}

function reload() {
  //reset template and rack
  while(template.firstElementChild) {
    template.firstElementChild.remove();
  }
  while(rack.firstElementChild) {
    rack.firstElementChild.remove();
  }
  tiles.countX = cols.valueAsNumber
  tiles.countY = rows.valueAsNumber
  tiles.correct = 0
  addPuzzle()
}