import "./styles.scss"
import template from "./template"
import rack from "./rack"

//Main container created
const container = document.createElement("div")
container.classList.add("container")
document.body.append(container)

container.append(template)
container.append(rack)