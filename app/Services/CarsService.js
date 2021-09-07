import { ProxyState } from "../AppState.js"
import { Car } from "../Models/Car.js"


// @ts-ignore
const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/cars"
})
  class CarsService {
    async deleteCar(carId) {
      await api.delete(carId)
      ProxyState.cars = ProxyState.cars.filter(c => c.id !== carId)
    }
    async addCar(carData) {
      // TODO this is gonna be different
      let res = await api.post('', carData)
      console.log('what was the response??', res);
      ProxyState.cars = [...ProxyState.cars, new Car(res.data)]
    }
  
    async getCars() {
      let response = await api.get()
      console.log('what was the response', response)
      ProxyState.cars = response.data.map(c => new Car(c))
      console.log('what is a car', ProxyState.cars)
    }
}

// singleton pattern
export const carsService = new CarsService()