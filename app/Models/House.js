import { generateId } from "../Utils/generateId.js";

export class House {

  constructor(houseData){
    this.id = houseData.id 
    this.bedrooms = houseData.bedrooms
    this.bathrooms = houseData.bathrooms
    this.levels = houseData.levels
    this.year = houseData.year
    this.price = houseData.price
    this.description = houseData.description
    this.imgUrl = houseData.imgUrl
  }

  get CardTemplate(){
    return /*html*/`
    <div class="col-lg-3 mb-4 listing">
      <div class="card">
      <img src="${this.imgUrl}" alt="listing image" class="rounded">
        <div class="card-body">
          <h5 class="">
          <span>Bedrooms: ${this.bedrooms}</span>
          <span>Bathrooms: ${this.bathrooms}</span>
          <span>Levels: ${this.levels}</span>
          <span>Year: ${this.year}</span>
            <span>Price: $${this.price}</span>
            </h5>
            <p>Description: ${this.description}</p>
            <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>           
        </div>
      </div>
    </div>
    `
  }
}