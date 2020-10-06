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
        let p = new Post(post.team, post.sport, post.moment)
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
        Team: <input type="text id="team"><br>
        Sport: <input type="text id="sport"><br>
        Description: <input type="text id="moment"><br><br>
        <input type="submit" value="Add"
        <br>
        <br>
      </form>
      `
    }


  //update- update a post



  //delete- delete a post

