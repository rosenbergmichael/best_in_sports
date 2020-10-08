class Rating{
  constructor(id, rating){
    this.id = id;
    this.rating = rating;
  }

  //instance method thats going to render the object to the DOM
  
  renderRating() {
    let ratingsDiv = document.getElementById("ratings-container")

    ratingsDiv.innerHTML +=
    `
    <ul>
    <li>${this.rating} 
    </li>
    </ul>
    `
  }


}