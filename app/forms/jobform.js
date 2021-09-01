// NOTE creates a form in html to be imported and used inside the JobController



// TODO change form info to match job model
export function getJobFormTemplate(){
  return /*html*/`
  <form class="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.housesController.addHouse()"
  id="house-form">
  <div class="form-group">
    <label for="address" class="">Address:</label>
    <input type="text" class="form-control" name="address" id="address" required>    
  </div>

  <div class="form-group">
    <label for="bedrooms" class="">Bedrooms:</label>
    <input type="number" class="form-control" name="bedrooms" id="bedrooms" min="1" max="50" required>
  </div>

  <div class="form-group">
    <label for="baths" class="">Baths:</label>
    <input type="number" class="form-control" name="baths" id="baths" min="0" max="20" required>
  </div>

  <div class="form-group">
    <label for="sqrfeet">Square-Feet:</label>
    <input type="number" class="form-control" name="sqrfeet" id="sqrfeet" min="0" max="10000000" required>
    </div>

    <div class="form-group">
    <label for="description" class="">description:</label>
    <textarea type="text" class="form-control" name="description" id="description" rows="5"></textarea>
  </div>

  <div class="form-group">
    <label for="img" class="">img:</label>
    <input type="url" class="form-control" name="img" id="img" required>
  </div>

  <div class="button-group my-3">
    <button type="reset" class="btn btn-secondary">clear</button>
    <button type="submit" class="btn btn-primary">submit</button>
  </div>

</form>
  `
}