import "./styles.scss"
import { tiles, image } from "./globals"
import { addPuzzle, changeImage, numInput, puzzleField, reload } from "./utils.js"

tiles.countX = 4
tiles.countY = 3

//Load image-button created
const imgLoader = document.createElement("input")
imgLoader.type = "file"
imgLoader.onchange = changeImage
document.body.append(imgLoader)

numInput("Rows", tiles.countY)
numInput("Cols", tiles.countX)

const update = document.createElement("button")
update.onclick = reload
update.textContent = "Update"
document.body.append(update)

//Main container created
const container = document.createElement("div")
container.classList.add("container")
document.body.append(container)

//Add template and rack to container
container.append(puzzleField("template"))
container.append(puzzleField("rack"))
image.width = document.getElementById("template").clientWidth + "px"
image.height = `calc(${image.width} / 1.5)`

addPuzzle()