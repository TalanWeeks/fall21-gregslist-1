import { ProxyState } from "../AppState.js"
import { getCarFormTemplate } from "../forms/carform.js"
import { carsService } from "../Services/CarsService.js"

function _drawCars() {
  let template = ''
  ProxyState.cars.forEach(car => template += car.CardTemplate)
  document.getElementById('listings').innerHTML = template
}

export class CarsController {
  constructor() {
  ProxyState.on('cars', _drawCars)
  carsService.getCars()
  
  }

  async addCar() {
    event.preventDefault() // do not forget this line on form submissions
    /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore
    const form = event.target
    // TODO get data from form

    const carData = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      price: form.price.value,
      color: form.color.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }

    try {
      await carsService.addCar(carData)
    } catch (e) {
      // TODO draw errors
      form.make.classList.add('border-danger')
      console.error('[TODO] you were supposed to do this', e)
      return
    }

    form.reset()

  }

  showCars() {
    _drawCars()
    document.getElementById('controls').innerHTML = `
      <button class="btn btn-info" onclick="app.carsController.toggleCarForm()">Add Car</button>
    `
    document.getElementById('forms').innerHTML = getCarFormTemplate()
  }

  showMiles() {

    // @ts-ignore
    document.getElementById('miles').textContent = event.target.value
  }

  toggleCarForm() {
    document.getElementById('car-form').classList.toggle('visually-hidden')
  }

  async deleteCar(carId) {
    try {
      // TODO alerty are you sure????
      await carsService.deleteCar(carId)
    } catch (error) {
      alert(error.message)
    }
  }

}