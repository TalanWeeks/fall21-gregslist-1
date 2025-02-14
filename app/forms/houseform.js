export function getHouseFormTemplate(){
  return /*html*/`
  <form class="bg-white rounded p-3 shadow visually-hidden" onsubmit="app.housesController.addHouse()"
  id="house-form">
  <div class="form-group">
    <label for="bedrooms" class="">Bedrooms:</label>
    <input type="number" class="form-control" name="bedrooms" id="bedrooms" min="1" max="50" required>
  </div>

  <div class="form-group">
    <label for="bathrooms" class="">Baths:</label>
    <input type="number" class="form-control" name="bathrooms" id="bathrooms" min="0" max="20" required>
  </div>

  <div class="form-group">
    <label for="levels" class="">Levels:</label>
    <input type="number" class="form-control" name="levels" id="levels" min="0" max="20" required>
  </div>

  <div class="form-group">
    <label for="year">Year:</label>
    <input type="number" class="form-control" name="year" id="year" min="0" max="10000000" required>
  </div>
  <div class="form-group">
    <label for="price">Price:</label>
    <input type="number" class="form-control" name="price" id="price" min="0" max="10000000" required>
  </div>
    
  <div class="form-group">
    <label for="imgUrl" class="">img:</label>
    <input type="url" class="form-control" name="imgUrl" id="imgUrl" required>
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