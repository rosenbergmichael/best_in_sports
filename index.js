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
      <form>
        Team: <input type="text" id="team"><br><br>
        Sport: <input type="text" id="sport"><br><br>
        Description: <input type="text" id="moment"><br><br>
        <input type="submit" value="Add"
        <br>
        <br>
        <br>
        <h2>All Posts</h2>
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
      })

    }


  //update- update a post


  //delete- delete a post

    function deletePost(){
      let postId = parseInt(event.target.dataset.id)

      fetch(`${BASE_URL}/posts/${postId}`, {
        method: 'DELETE'
      })

      this.location.reload()
    }

  // let buttons = document.getElementsByClassName("delete-button")
  // console.log(buttons)
  // for (const button of buttons){
  //   button.addEventListener("click", () => {
  //     debugger;
  //   })
  // }
