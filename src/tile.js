import { currentTile, tiles, image } from "./globals"

//A tile is a puzzle piece
export default function tile(x, y, imgX, imgY) {
  const parentPos = document.getElementById("rack").getBoundingClientRect()
  let posX = `calc(${parentPos.left}px + ${x})`
  let posY = `calc(${parentPos.top}px + ${y})`
  let mouseOriginX = 0
  let mouseOriginY = 0
  let correct = false

  //Initial state
  const tile = document.createElement("div")
  tile.classList.add("tile")
  tile.style.left = posX
  tile.style.top = posY
  tile.style.width = tiles.width
  tile.style.height = tiles.height

  const img = document.createElement("img")
  img.src = image.src
  img.alt = "mountains"
  img.style.width = image.width
  img.style.position = "absolute"
  img.style.left = `calc(-${imgX} * ${tiles.width})`
  img.style.top = `calc(-${imgY} * ${tiles.height})`
  tile.append(img)

  const borderOverlay = document.createElement("div")
  borderOverlay.classList.add("borderOverlay")
  tile.append(borderOverlay)

  //Triggers on clicking tile 
  tile.onmousedown = mouseDown
  function mouseDown(e) {
    if (correct) {
      notCorrect()
    }
    mouseOriginX = e.clientX
    mouseOriginY = e.clientY
    currentTile.handleDrop = handleDrop
    currentTile.x = imgX
    currentTile.y = imgY
    currentTile.isCorrect = isCorrect
    currentTile.notCorrect = notCorrect
    currentTile.mouseDown = mouseDown

    //Tile is moved to the front
    currentTile.zIndex++
    tile.style.zIndex = currentTile.zIndex
    
    //mouseMove and mouseUp are added on document-level so as to be detectable outside the tile
    document.addEventListener("mousemove", mouseMove)
    document.addEventListener("mouseup", mouseUp)
    tile.style.pointerEvents = "none"
    e.preventDefault()
  }
  
  function mouseMove(e) {
    tile.style.left = `calc(${posX} + ${e.clientX - mouseOriginX}px)`
    tile.style.top = `calc(${posY} + ${e.clientY - mouseOriginY}px)`
    e.preventDefault()
  }
  
  function mouseUp(e) {
    posX = tile.style.left
    posY = tile.style.top
    document.removeEventListener("mousemove", mouseMove)
    document.removeEventListener("mouseup", mouseUp)
    tile.style.pointerEvents = "all"
    e.preventDefault()
  }

  //Called from a slot-function when released over it
  function handleDrop(x, y) {
    posX = x
    posY = y
    tile.style.left = posX
    tile.style.top = posY
  }

  function isCorrect() {
    correct = true
    currentTile.correct = true
    tiles.correct++
  }

  function notCorrect() {
    correct = false
    currentTile.correct = false
    tiles.correct--
  }

  return tile
}