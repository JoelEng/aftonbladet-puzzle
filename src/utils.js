import "./styles.scss"
import tile from "./tile"
import slot from "./slot"
import { tiles, image } from "./globals"

/*
  This is a collection of functions that come in handy in this project.
*/

//Populates template and rack with slots and tiles respectively. Called once initially, and when update button is pressed
export function addPuzzle() {
  tiles.width = `calc(${image.width} / ${tiles.countX})`
  tiles.height = `calc(${image.height} / ${tiles.countY})`
  for (let i = 0; i < tiles.countX; i++) {
    for (let j = 0; j < tiles.countY; j++) {
      template.append(slot(i, j))
    }
  }
  const widthRange = `calc(${image.width} - ${tiles.width})`
  const heightRange = `calc(${image.height} - ${tiles.height})`
  for (let i = 0; i < tiles.countX; i++) {
    for (let j = 0; j < tiles.countY; j++) {
      const x = `calc(${Math.random()} * ${widthRange})`
      const y = `calc(${Math.random()} * ${heightRange})`
      rack.append(tile(x, y, i, j))
    }
  }
}

//Creates a field for number input. Used exclusively for the "Rows" and "Cols" inputs
export function numInput(name, defaultNum) {
  const label = document.createElement("label")
  label.for = name.toLowerCase()
  label.textContent = name + ": "
  document.body.append(label)
  const input = document.createElement("input")
  input.type = "number"
  input.id = name.toLowerCase()
  input.defaultValue = defaultNum
  input.min = "1"
  input.style.width = "3rem"
  document.body.append(input)
}

export function changeImage() {
  if (this.files && this.files[0]) {
    const images = document.querySelectorAll('img')
    const url =  URL.createObjectURL(this.files[0])
    for (let i = 0; i < images.length; i++) {
      images[i].src = url
    }
    image.src = url //Keep changes on tile count update
  }
}

export function reload() {
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

export function puzzleField(name) {
  //The rack contains all puzzle pieces
  const field = document.createElement("div")
  field.classList.add("field")
  field.id = name
  return field
}