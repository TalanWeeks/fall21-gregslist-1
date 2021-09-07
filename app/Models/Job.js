// NOTE this imports a file with a function that gives things a random 16 character id. shouts out jake

import { generateId } from "../Utils/generateId.js";


// NOTE this defines the data we are looking for when dealing with a job. setting it equal to what our user will put into our form.

export class Job {

  constructor(jobData){
    this.id = jobData.id 
    this.jobTitle = jobData.jobTitle
    this.company = jobData.company
    this.rate = jobData.rate
    this.hours = jobData.hours
    this.description = jobData.description  
  }


  // NOTE this is where we define what our card will look like when it pops up on our img. Its put into a function to be called when we need it.

  get CardTemplate(){
    return /*html*/`
    <div class="col-lg-3 mb-4 listing">
      <div class="card">
        <div class="card-body">
          <h5 class="">
          <h5>Job Title: ${this.jobTitle}</h5><br>
            <span>Company: ${this.company}</span><br>
            <span>Rate: ${this.rate}</span><br>
            <span>Hours: ${this.hours}</span> <br>           
          </h5>
            <p>Description: ${this.description}</p>    
            <button class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>         
        </div>
      </div>
    </div>
    `
  }

}