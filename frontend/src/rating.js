class Rating{
  constructor(id, rating, post_id){
    this.id = id;
    this.rating = rating;
    this.post_id = post_id;
  }

  
  render() {
    
    return `
    <li>${this.rating}
    </li>
    ` 
    
  }
  
}

