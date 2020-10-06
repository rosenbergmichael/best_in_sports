class Post{
  constructor(team, sport, moment){
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
    <li><h3>${this.team} (${this.sport})</h3>
    ${this.moment}   
    </li>
    <br>
    </ul>

    `
  }

}

