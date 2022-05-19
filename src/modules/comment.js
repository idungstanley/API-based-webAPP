const popUp = document.querySelector('.comment-popup')
export default class Comment {
  static createCommentPopUp = (data) => {
    const newArticle = document.createElement('article')
    newArticle.innerHTML = `<div class= "flex"> 
  <img src= ${data.artworkUrl100} alt="Image"/> 
  <span class='material-symbols-outlined'>close</span>
  </div>
  <h2>Space ${data.index}</h2>
  <div class= "pop-details">
    <p>Fuel titatium</p>
    <p>Length: 10000</p>
    <p>Weight: 10000</p>
    <p>Power: 10000</p>
  </div>`
    popUp.appendChild(newArticle)
  }
  static displayCommentPopUp = (event, element) => {
    if (event.target.id == element.collectionId) {
      Comment.createCommentPopUp(element)
    }
  }
  static closePopUp = (event) => {
    let child =  event.target
    if (child.classList.contains(material - symbols - outlined)) {
      console.log(child.parentElement)
    }
  }
}
