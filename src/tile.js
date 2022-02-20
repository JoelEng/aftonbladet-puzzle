import currentTile from "./globals"

//A tile is a puzzle piece
export default function tile(x, y) {
  let posX = x + "px"
  let posY = y + "px"
  let mouseOriginX = 0
  let mouseOriginY = 0

  //Initial state
  const tile = document.createElement("div")
  tile.classList.add("tile")
  tile.style.left = posX
  tile.style.top = posY

  //Triggers on clicking tile 
  tile.onmousedown = mouseDown
  function mouseDown(e) {
    mouseOriginX = e.clientX
    mouseOriginY = e.clientY
    tile.textContent = "moved"
    currentTile.handleDrop = handleDrop
    //mouseMove and mouseUp are added on document-level so as to be detectable outside the tile
    document.addEventListener("mousemove", mouseMove)
    document.addEventListener("mouseup", mouseUp)
    tile.style.pointerEvents = "none"
    e.preventDefault()
  }
  
  function mouseMove(e) {
    console.log("det här ska va rätt", tile.getBoundingClientRect().top)
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