import { currentTile, tiles, image } from "./globals"

//Defines a movable/draggable component
export default function moveTile(tile, pos) {
  let mouseOrigin = { x: 0, y: 0}

  //Triggers on clicking tile 
  tile.onmousedown = mouseDown
  function mouseDown(e) {
    tile.checkCorrect()
    mouseOrigin.x = e.clientX
    mouseOrigin.y = e.clientY
    
    //change the global currentTile to tile
    Object.assign(currentTile, {
      handleDrop: handleDrop,
      x: tile.img.x,
      y: tile.img.y,
      isCorrect: tile.isCorrect,
      notCorrect: tile.notCorrect,
      mouseDown: mouseDown,
    })

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
    tile.style.left = `calc(${pos.x} + ${e.clientX - mouseOrigin.x}px)`
    tile.style.top = `calc(${pos.y} + ${e.clientY - mouseOrigin.y}px)`
    e.preventDefault()
  }
  
  function mouseUp(e) {
    pos.x = tile.style.left
    pos.y = tile.style.top
    document.removeEventListener("mousemove", mouseMove)
    document.removeEventListener("mouseup", mouseUp)
    tile.style.pointerEvents = "all"
    e.preventDefault()
  }

  //Called from a slot-function when released over it
  //Snaps tile into place
  function handleDrop(x, y) {
    pos.x = x
    pos.y = y
    tile.style.left = pos.x
    tile.style.top = pos.y
  }

  return tile
}