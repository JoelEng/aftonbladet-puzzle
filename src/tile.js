import currentTile from "./globals"

//A tile is a puzzle piece
export default function tile(x, y, imgX, imgY) {
  const parentPos = document.getElementById("rack").getBoundingClientRect()
  let posX = `calc(${parentPos.left}px + ${x}px)`
  let posY = `calc(${parentPos.top}px + ${y}px)`
  let mouseOriginX = 0
  let mouseOriginY = 0

  //Initial state
  const tile = document.createElement("div")
  tile.classList.add("tile")
  tile.style.left = posX
  tile.style.top = posY

  const img = document.createElement("img")
  img.src = "https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/mountains.jpg"
  img.alt = "mountains"
  img.width = "600"
  img.style.position = "absolute"
  img.style.left = `-${imgX}px`
  img.style.top = `-${imgY}px`
  tile.append(img)

  //Triggers on clicking tile 
  tile.onmousedown = mouseDown
  function mouseDown(e) {
    mouseOriginX = e.clientX
    mouseOriginY = e.clientY
    currentTile.handleDrop = handleDrop
    //mouseMove and mouseUp are added on document-level so as to be detectable outside the tile
    document.addEventListener("mousemove", mouseMove)
    document.addEventListener("mouseup", mouseUp)
    tile.style.pointerEvents = "none"
    e.preventDefault()
  }
  
  function mouseMove(e) {
    tile.style.left = `calc(${posX} + ${e.clientX - mouseOriginX}px)`
    tile.style.top = `calc(${posY} + ${e.clientY - mouseOriginY}px)`
  }
  
  function mouseUp(e) {
    posX = tile.style.left
    posY = tile.style.top
    document.removeEventListener("mousemove", mouseMove)
    document.removeEventListener("mouseup", mouseUp)
    tile.style.pointerEvents = "all"
  }

  //Called from a slot-function when released over it
  function handleDrop(x, y) {
    posX = x
    posY = y
    tile.style.left = posX
    tile.style.top = posY
  }

  return tile
}