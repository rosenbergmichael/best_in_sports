document.addEventListener("DOMContentLoaded", () => {
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
      }

    })
  }


  //create- create a new post



  //update- update a post



  //delete- delete a post

