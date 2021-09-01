import { ProxyState } from "../AppState.js"
import { jobsServices } from "../Services/JobsService.js"
import { getJobFormTemplate } from "../forms/jobform.js"



// NOTE this function creates a blank template to be added to. It then takes the information in the arrays in the AppState and for every array component it finds it will add the information to the job.Cardtemplate. It looks for the data that you defined further down in this file (jobData)
function _drawJobs(){
  let template = ``

  ProxyState.jobs.forEach(job =>template += job.CardTemplate)
  document.getElementById("listings").innerHTML = template
}

// NOTE this is looking for a change to jobs in proxy state and if a change occurs it will call the function drawJobs
export class JobsController{
  constructor() {
    ProxyState.on("jobs", _drawJobs)
  }


  // NOTE in this instance event.prevent default is preventing the form from resetting when you click submit
  addJob(){
    event.preventDefault()

    /**
     * @type {HTMLFormElement}
     */

    //@ts-ignore
    const form = event.target

    const jobData ={
      companyName: form.companyName.value,
      jobTitle: form.jobTitle.value,
      address: form.address.value,
      pay: form.pay.value,
      description: form.description.value,
      img: form.img.value
    }

    try{
      jobsServices.addJob(jobData)
    } catch (e){
      form.companyName.classList.add("border-danger")
      console.error("TODO fix me",e)
      return
    }
    form.reset()
  }

  // NOTE this function is drawing our form to the screen
  showJobs(){
    _drawJobs()
    document.getElementById("controls").innerHTML = `
    <button class="btn btn-success" onclick="app.jobsController.toggleJobForm()">Add Job</button>
    `

    document.getElementById('forms').innerHTML = getJobFormTemplate()
  }

  // NOTE this function is adding the toggleable class of visually hidden to our div with the id of "job-form"

  toggleJobForm(){
    document.getElementById("job-form").classList.toggle("visually-hidden")
  }
}