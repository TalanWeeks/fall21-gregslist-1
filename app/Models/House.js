import { generateId } from "../Utils/generateId.js";

export class House {

  constructor(houseData){
    this.id = houseData.id || generateId()
    this.address =  houseData.address
    this.bedrooms = houseData.bedrooms
    this.baths = houseData.baths
    this.sqrfeet = houseData.sqrfeet
    this.description = houseData.description
    this.img = houseData.img
  }

  get CardTemplate(){
    return /*html*/`
    <div class="col-lg-3 mb-4 listing">
      <div class="card">
      <img src="${this.img}" alt="listing image" class="rounded">
        <div class="card-body">
          <h5 class="d-flex justify-content-between">
            <span>Address: ${this.address}</span>
            <span>Bedrooms: ${this.bedrooms}</span>
            <span>Baths: ${this.baths}</span>
            <span>Square Feet: ${this.sqrfeet}</span>
            </h5>
            <p>Description: ${this.description}</p>           
        </div>
      </div>
    </div>
    `
  }
}