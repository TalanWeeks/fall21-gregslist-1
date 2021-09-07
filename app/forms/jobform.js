// NOTE creates a form in html to be imported and used inside the JobController

export function getJobFormTemplate(){  
  return /*html*/`
  <form class="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.jobsController.addJob()"
  id="job-form">

  <div class="form-group">
    <label for="jobTitle" class="">Job Title:</label>
    <input type="text" class="form-control" name="jobTitle" id="jobTitle" required>
  </div>
  
  <div class="form-group">
    <label for="company" class="">Company:</label>
    <input type="text" class="form-control" name="company" id="company" required>
  </div>
  

  <div class="form-group">
    <label for="rate" class="">Rate:</label>
    <input type="text" class="form-control" name="rate" id="rate" required>    
  </div>

  <div class="form-group">
    <label for="hours">Hours:</label>
    <input type="number" class="form-control" name="hours" id="hours" min="0" max="1000000000" required>
    </div>

    <div class="form-group">
    <label for="description" class="">description:</label>
    <textarea type="text" class="form-control" name="description" id="description" rows="5"></textarea>
  </div>


  <div class="button-group my-3">
    <button type="reset" class="btn btn-secondary">clear</button>
    <button type="submit" class="btn btn-primary">submit</button>
  </div>

</form>
  `
}