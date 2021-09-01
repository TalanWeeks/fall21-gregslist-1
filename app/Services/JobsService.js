import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";




// NOTE define what HouseServices the class does when imported


class JobsServices {

  // NOTE this function sets a variable to a new version of the Job model using the jobData that we should have. After setting up the new variable we update our array in the AppState and add our new job model into the array
  addJob(jobData) {
    var testJob = new Job(jobData)

    ProxyState.jobs = [...ProxyState.jobs, testJob]
  }

}

// NOTE this section sets a contant (unchangeable) variable equal to new instance of the jobservices file to be called but not manipulated in other files.
export const jobsServices = new JobsServices()