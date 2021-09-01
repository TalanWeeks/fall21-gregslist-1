import { ProxyState } from "../AppState.js"
import { getHouseFormTemplate } from "../forms/houseform.js"
import { housesService } from "../Services/HousesService.js"

function _drawHouses() {
  let template = ``
  ProxyState.houses.forEach(house => template += house.CardTemplate)
  document.getElementById('listings').innerHTML = template
}

export class HousesController {
  constructor() {
    ProxyState.on(`houses`,_drawHouses)
    
  }

  addHouse(){
    event.preventDefault()

    /**
     * @type {HTMLFormElement}
     */

     // @ts-ignore
    const form = event.target

    const houseData = {
      address: form.address.value,
      bedrooms: form.bedrooms.value,
      baths: form.baths.value,
      sqrfeet: form.sqrfeet.value,
      description: form.description.value,
      img: form.img.value
    }

    try{
      housesService.addHouse(houseData)
    } catch (e) {
      form.address.classList.add(`border-danger`)
      console.error(`TODO FIX ME`, e)
      return
    }

    form.reset()
  }

  showHouses() {
    _drawHouses()
    document.getElementById('controls').innerHTML = `
      <button class="btn btn-success" onclick="app.housesController.toggleHouseForm()">Add House</button>
    `
    
    document.getElementById('forms').innerHTML = getHouseFormTemplate()
  }

  toggleHouseForm() {
    document.getElementById(`house-form`).classList.toggle("visually-hidden")
  }

}