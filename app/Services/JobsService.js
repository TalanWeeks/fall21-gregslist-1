import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";



// @ts-ignore

const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/jobs"
})


class JobsService {

  async deleteJob(jobId){

    await api.delete(jobId)

    ProxyState.jobs = ProxyState.jobs.filter(j => j.id !== jobId)
  }

  async addJob(jobData){

    let res = await api.post('', jobData)
    console.log('what was the response in the jobs?', res)
    ProxyState.jobs = [...ProxyState.jobs, new Job(res.data)]

    }

  async getJobs(){
    let res = await api.get()
    console.log('what was the res', res)
    ProxyState.jobs = res.data.map(j => new Job (j))
    console.log('what is a job', ProxyState.jobs)        
      }  

}
export const jobsService = new JobsService()