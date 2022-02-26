import { currentTile, tiles, image } from "./globals"
import moveTile from "./moveTile"

//A tile is a puzzle piece
export default function tile(x, y, imgX, imgY) {
  const parentPos = document.getElementById("rack").getBoundingClientRect()
  let pos = { 
    x: `calc(${parentPos.left}px + ${x})`, 
    y: `calc(${parentPos.top}px + ${y})`
  }
  let correct = false

  //Initial state
  const tile = document.createElement("div")
  tile.classList.add("tile")
  tile.style.cssText = `
    left: ${pos.x};
    top: ${pos.y};
    width: ${tiles.width};
    height: ${tiles.height};
  `
  tile.img = {x: imgX, y: imgY}

  const img = document.createElement("img")
  img.src = image.src
  img.alt = "mountains"
  img.style.cssText = `
    width: ${image.width};
    position: absolute;
    left: calc(-${imgX} * ${tiles.width});
    top: calc(-${imgY} * ${tiles.height});
  `
  tile.append(img)

  const borderOverlay = document.createElement("div")
  borderOverlay.classList.add("borderOverlay")
  tile.append(borderOverlay)

  tile.checkCorrect = () => {
    if (correct) {
      tile.notCorrect()
    }
  }

  //called if tile is placed in the correct slot
  tile.isCorrect = () => {
    correct = true
    currentTile.correct = true
    tiles.correct++
  }

  //called if tile is placed incorrectly
  tile.notCorrect = () => {
    correct = false
    currentTile.correct = false
    tiles.correct--
  }

  //return a movable tile
  return moveTile(tile, pos)
}