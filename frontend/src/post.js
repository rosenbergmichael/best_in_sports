class Post{
  constructor(id, team, sport, moment){
    this.id = id;
    this.team = team;
    this.sport = sport;
    this.moment = moment;
  }

  //render post instance method

  renderPost() {
    let postsDiv = document.getElementById("posts-container")

    postsDiv.innerHTML +=
    `
    <ul>
    <br>
    <li><h3>${this.team} (${this.sport})</h3>
    <p>${this.moment}</p>
    <h4>Rating: </h4>
    <h4>Average Rating: </h4>
    </li>
    <br>
    </ul>
    
    `
  }

}

// removed from line 25

// <button class="delete-button" data-id=${this.id} onclick="deletePost()">Delete</button>

// // removed from lines 20 and 21
// <h4>Add a Comment</h4>
// <h3>Comments: </h3> 