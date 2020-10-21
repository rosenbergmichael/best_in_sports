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





# Post has_many ratings
# Rating belongs_to post

# Post
# -team: string
# -sport: string
# -moment: text

# Rating
# -rating: integer
