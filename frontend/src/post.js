class Post{
  constructor(id, team, sport, moment, ratings){
    this.id = id;
    this.team = team;
    this.sport = sport;
    this.moment = moment;
    this.ratings = ratings.map((r) => {
      return new Rating(r.id, r.rating, r.post_id)
    });
  }


  render() {
    let allRatings = this.ratings.map((rating) => {
      return rating.render();
      }).join('')

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

    <h4>Ratings: </h4>
    <ul class="ratings">
    ${allRatings}
    </ul>

    </li>
    </ul>
    <input type="button" value="Delete" class="deletebutton" data-id="${this.id}" onClick="deletePost()">

    `

    postsDiv.addEventListener("submit", ratingFormSubmit)

  }
}


{/* <input type="button" value="Delete" class="deletebutton" data-id="${this.id}" onClick="deletePost()"></input> */}

 // <button class="deletebutton" data-id=${this.id}>Delete</button>
    // onClick="deletePost()"
  
// let buttonElement = postsDiv.querySelector(".deletebutton")
// buttonElement.addEventListener("click", deletePost);