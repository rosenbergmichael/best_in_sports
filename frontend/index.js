document.addEventListener("DOMContentLoaded", () => {
  createForm()
  fetchPosts()    
  fetchRatings()

})


  const BASE_URL = "http://127.0.0.1:3000"


  //read- fetch posts index

  function fetchPosts(){
    fetch(`${BASE_URL}/posts`)
    .then(resp => resp.json())
    .then(posts => {
      for (const post of posts){
        let p = new Post(post.id, post.team, post.sport, post.moment, post.ratings)
        p.renderPost();
      }
    })
  }


  //create- create a new post

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

    function postFormSubmit(e){
      e.preventDefault();
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
        let p = new Post(post.id, post.team, post.sport, post.moment, post.ratings)
        p.renderPost();
        document.getElementById("postform").reset();
      })

    }

  //delete- delete a post

    function deletePost(){
      let postId = parseInt(event.target.dataset.id)

      fetch(`${BASE_URL}/posts/${postId}`, {
        method: 'DELETE'
      })

      this.location.reload()
    }




//read- fetch ratings index

 function fetchRatings(){
  fetch(`${BASE_URL}/ratings`)
  .then(resp => resp.json())
  .then(ratings => {
    for (const rating of ratings){
      let r = new Rating(rating.id, rating.rating, rating.post_id)
      // r.renderRating();
    }

  })
}


  //create- create a new rating


    // function createRatingForm(){
    //   let ratingsForm = document.getElementById("ratings-form")

    //   ratingsForm.innerHTML +=
    //   `
    //   <form id="ratingform">
    //     Rating: <input type="text" id="rating"><br>
    //     <input type="submit" value="Add Rating"
    //     <br>
    //   </form>
    //   `
    //   ratingsForm.addEventListener("submit", ratingFormSubmit)

    // }


    function ratingFormSubmit(e){
      e.preventDefault();

      let rating = e.target.querySelector(".rating").value
      let post_id = e.target.id
      let rat = {
        rating: {
          rating, post_id
        }
      }

      fetch(`${BASE_URL}/ratings`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(rat)
      })
      .then(resp => resp.json())
      .then(rat => {
        let r = new Rating(rating.id, rating.rating, rating.post_id)
        // fetchPosts();
        // r.renderRating();
        // renderPost()
        e.target.reset();
      })

    }
