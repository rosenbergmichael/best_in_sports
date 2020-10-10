class Post{
  constructor(id, team, sport, moment, ratings){
    this.id = id;
    this.team = team;
    this.sport = sport;
    this.moment = moment;
    this.ratings = ratings;
  }

  //render post instance method

  renderPost() {
    let postsDiv = document.getElementById("posts-container")
    let allRatings = this.ratings.map((element) => {
      return element.rating;
      })

    // let averagerating= (allRatings) => allRatings.reduce((a,b) => a + b)/allRatings.length;
    //   console.log(averagerating(allRatings));
      
    postsDiv.innerHTML +=
    `
    <ul>
    <br>
    <li><h3>${this.team} (${this.sport})</h3>
    <p>${this.moment}</p>
    <br>
    <form id="${this.id}">
        <strong>Rating(0-100): </strong><input type="text" class="rating"><br>
        <input type="submit" value="Add Rating">
        <br>
      </form>

    <h4>Ratings: </h4>${allRatings}
    </li>
    </ul>
    <button class="delete-button" data-id=${this.id} onclick="deletePost()">Delete</button>
    `

    postsDiv.addEventListener("submit", ratingFormSubmit)
    
  }
}



// REMOVE DELETE WHEN DONE WITH PROJECT, JUST KEEPING TO TEST POSTS)

