export default class Comment {
  static createCommentPopUp = (data) => {
    let newArticle = document.createElement('article');
    newArticle.innerHTML = `<div> 
  <img src= ${data.url} alt="Image"/> 
  <span class='material-symbols-outlined'>close</span>
  </div>
  <h2>Space ${data.count}</h2>
  <div class= "pop-details">
  <p>Fuel titatium</p>
  <p>Length: 10000</p>
  <p>Weight: 10000</p>
  <p>Power: 10000</p>
  </div>`
  ;
  }

  static showCommentPopUp = () => {}
}
