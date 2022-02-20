//A tile is a puzzle piece
export default function tile(x, y) {
  let posX = x + "px"
  let posY = y + "px"
  let mouseOriginX = 0
  let mouseOriginY = 0
  let test = "test"

  //Initial state
  const tile = document.createElement("div")
  tile.classList.add("tile")
  tile.textContent = test
  tile.style.left = posX
  tile.style.top = posY

  //Triggers on clicking tile 
  tile.onmousedown = mouseDown
  function mouseDown(e) {
    mouseOriginX = e.clientX
    mouseOriginY = e.clientY
    test = "test2"
    //mouseMove and mouseUp are added on document-level so as to be detectable outside the tile
    document.addEventListener("mousemove", mouseMove)
    document.addEventListener("mouseup", mouseUp)
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
  }

  return tile
}