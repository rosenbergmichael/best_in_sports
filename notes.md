# TO DO

-Either fix or remove delete functionality

-Clean up code, commit

-Walk through code to make sure I can explain it all

-Remember and understand adding button to change background color/DOM manipulation, event listeners, getElementByClass/Id, etc.

-Continue watching DOM manip videos/reviewing notes



# FOR 2ND PROJECT REVIEW:

Change Background Color Button:

<!-- <button class="changecolor">Change Color</button> -->

<!-- let chngclr = postsForm.querySelector(".changecolor")
     chngclr.addEventListener("click", changeColor); -->


 <!-- function changeColor() {
      var cntner = document.getElementsByClassName('container')
      cntner[0].style.backgroundColor = 'yellow';
    } -->


-1. Need to fix 'Add Rating' so that ratings are added to DOM once button is clicked, not reloading page

-2. For Delete functionality, ensure code doesn't refresh the page to manipulate DOM; add event listener
rather than onClick tag in HTML




# For Review:

-1. Toy Tales lab/anything requiring you to do all 3 pillars for practice, KNOW 3 PILLARS

-2. Watch videos regarding how to add a button to change background color/simple JS videos



IF TIME/CAN FIGURE IT OUT:

-3.Either get rid of Delete functionality, OR

-4. Delete post shouldn't reload page, should use JS to manipulate(find and remove) DOM
    -Similar to line 71?  second .then like in create new post fetch ?
    - Post.js fix line 37 (delete button) (postdiv querely selector button? can add event listener that way)
      // Edit for line 37: 
     <!-- <button class="delete-button" data-id=${this.id} onclick="deletePost()">Delete</button> -->



Average rating/sort by rating/etc. :

<!-- // let averagerating= (allRatings) => allRatings.reduce((a,b) => a + b)/allRatings.length;
//   console.log(averagerating(allRatings)); -->
      



Delete functionality from Post.js :
<!-- 
{/* <input type="button" value="Delete" class="deletebutton" data-id="${this.id}" onClick="deletePost()"></input> */}

 // <button class="deletebutton" data-id=${this.id}>Delete</button>
    // onClick="deletePost()"
  
// let buttonElement = postsDiv.querySelector(".deletebutton")
// buttonElement.addEventListener("click", deletePost); -->


Delete functions from index.js that might not be used :
<!-- 
//delete- delete a post

    function deletePost(){
      let postId = parseInt(event.target.dataset.id)
      // console.log(postId)
      fetch(`${BASE_URL}/posts/${postId}`, {
        method: 'DELETE', 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      
      renderPosts()

    }


    // New delete ?

    // let buttons = document.getElementsByClassName("delete-button")
    // console.log(buttons)
    // for (const button of buttons){
    //   button.addEventListener("click", () => {
    //     debugger;
    //   })
    // } -->


Ratings functions from index.js that weren't being used :

<!-- 
//read- fetch ratings index

//  function fetchRatings(){
//   fetch(`${BASE_URL}/ratings`)
//   .then(resp => resp.json())
//   .then(ratings => {
//     for (const rating of ratings){
//       let r = new Rating(rating.id, rating.rating, rating.post_id)
//       // r.renderRating();
//     }

//   })
// }


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

    // } -->