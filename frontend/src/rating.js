class Rating{
  constructor(id, rating, post_id){
    this.id = id;
    this.rating = rating;
    this.post_id = post_id;
  }

  //instance method thats going to render the object to the DOM
  
  renderRating() {
    let ratingsDiv = document.getElementById("ratings-container")

    // ratingsDiv.innerHTML +=
    // `
    // <ul>
    // <li>${this.rating}
    // <p>post id: ${this.post_id}</p>
    // </li>
    // </ul>
    // `
    
  }


}