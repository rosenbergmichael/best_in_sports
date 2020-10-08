document.addEventListener("DOMContentLoaded", () => {
  createForm()
  fetchPosts()
  
})

  const BASE_URL = "http://127.0.0.1:3000"


  //read- fetch posts index

  function fetchPosts(){
    fetch(`${BASE_URL}/posts`)
    .then(resp => resp.json())
    .then(posts => {
      // we do something with the data that we fetched
      for (const post of posts){
        let p = new Post(post.id, post.team, post.sport, post.moment)
        p.renderPost();
      }

    })
  }


  //create- create a new post

    //create form
    //add event listener
    //once form is submitted => fetch 'post' to my backend
    //do something with the returned object

    function createForm(){
      let postsForm = document.getElementById("posts-form")

      postsForm.innerHTML +=
      `
      <form id="postform">
        Team: <input type="text" id="team">
        Sport: <input type="text" id="sport"><br><br>
        Description: <textarea id="moment"></textarea><br><br>
        <input type="submit" value="Add"
        <br>
        <br>
        <br>
      </form>
      `
      postsForm.addEventListener("submit", postFormSubmit)

    }

    function postFormSubmit(){
      event.preventDefault();
      let team = document.getElementById("team").value
      let sport = document.getElementById("sport").value
      let moment = document.getElementById("moment").value

      let post = {
        team: team,
        sport: sport,
        moment: moment
      }

      fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
      })
      .then(resp => resp.json())
      .then(post => {
        let p = new Post(post.id, post.team, post.sport, post.moment)
        p.renderPost();
        document.getElementById("postform").reset();
      })

    }


  //update- update a post


  //delete- delete a post

    // function deletePost(){
    //   let postId = parseInt(event.target.dataset.id)

    //   fetch(`${BASE_URL}/posts/${postId}`, {
    //     method: 'DELETE'
    //   })

    //   this.location.reload()
    // }

  // let buttons = document.getElementsByClassName("delete-button")
  // console.log(buttons)
  // for (const button of buttons){
  //   button.addEventListener("click", () => {
  //     debugger;
  //   })
  // }








//  //read- fetch comments index

//  function fetchComments(){
//   fetch(`${BASE_URL}/comments`)
//   .then(resp => resp.json())
//   .then(comments => {
//     // we do something with the data that we fetched
//     for (const comment of comments){
//       let c = new Comment(comment.id, comment.body)
//       c.renderComment();
//     }

//   })
// }


  //create- create a new comment


    // function createCommentForm(){
    //   let commentsForm = document.getElementById("comments-form")

    //   commentsForm.innerHTML +=
    //   `
    //   <form id="commentform">
    //     Comment: <textarea id="body"></textarea><br>
    //     <input type="submit" value="Add Comment"
    //     <br>
    //   </form>
    //   `
    //   commentsForm.addEventListener("submit", commentFormSubmit)

    // }


    // function commentFormSubmit(){
    //   event.preventDefault();
    //   let body = document.getElementById("body").value

    //   let comment = {
    //     body: body
    //   }

    //   fetch(`${BASE_URL}/comments`, {
    //     method: "POST",
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(comment)
    //   })
    //   .then(resp => resp.json())
    //   .then(comment => {
    //     let c = new Comment(comment.id, comment.body)
    //     c.renderComment();
    //     document.getElementById("commentform").reset();
    //   })

    // }


     //delete- delete a comment

    //  function deleteComment(){
    //   let commentId = parseInt(event.target.dataset.id)

    //   fetch(`${BASE_URL}/comments/${commentId}`, {
    //     method: 'DELETE'
    //   })

    //   this.location.reload()
    // }
