// NOTE this imports a file with a function that gives things a random 16 character id. shouts out jake

import { generateId } from "../Utils/generateId";


// NOTE this defines the data we are looking for when dealing with a job. setting it equal to what our user will put into our form.

export class Job {

  constructor(jobData){
    this.id = jobData.id || generateId()
    this.companyName = jobData.companyName
    this.address = jobData.address 
    this.jobTitle = jobData.jobTitle
    this.pay = jobData.pay
    this.description = jobData.description
    this.img = jobData.img    
  }


  // NOTE this is where we define what our card will look like when it pops up on our img. Its put into a function to be called when we need it.

  get CardTemplate(){
    return /*html*/`
    <div class="col-lg-3 mb-4 listing">
      <div class="card">
      <img src="${this.img}" alt="listing image" class="rounded">
        <div class="card-body">
          <h5 class="">
            <span>Company: ${this.companyName}</span>
            <span>Job Title: ${this.jobTitle}</span>
            <span>Address: ${this.address}</span>
            <span>Pay: ${this.pay}</span>            
          </h5>
            <p>Description: ${this.description}</p>           
        </div>
      </div>
    </div>
    `
  }

}