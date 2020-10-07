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
    <h3>Comments: </h3> 
    </li>
    <br>
    </ul>

    <button class="delete-button" data-id=${this.id} onclick="deletePost()">Delete</button>
    <br>
    <br>
    `
  }

}

