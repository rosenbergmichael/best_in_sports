class Comment{
  constructor(id, body){
    this.id = id;
    this.body = body;
  }

  //instance method thats going to render the object to the DOM
  
  renderComment() {
    let commentsDiv = document.getElementById("comments-container")

    commentsDiv.innerHTML +=
    `
    <ul>
    <li>${this.body} 
    </li>
    </ul>
    <button class="delete-button" data-id=${this.id} onclick="deleteComment()">Delete</button>
    `
  }


}