const popUp = document.querySelector('.comment-popup')
export default class Comment {
  static createCommentPopUp = (data) => {
    const newArticle = document.createElement('article')
    newArticle.innerHTML = `<div class= "wrapper">
    <div class= "flex"> 
  <img class="pop-image" src= ${data.artworkUrl100} alt="Image"/> 
  <span class='material-symbols-outlined white'>close</span>
  </div>
  <h2 class="white">Collection Name: ${data.collectionName}</h2>
  <div class= "pop-details">
    <a class="white border link" href="${data.collectionViewUrl}" target="_blank">Click Here To Listen</a>
    <p class="white border">Release Date: ${data.releaseDate}</p>
    <p class="white border">Price: $${data.collectionPrice}</p>
    <p class="white border">Genre Type: ${data.primaryGenreName}</p>
  </div>
  <fieldset class="fieldset">
  <legend class="count white"></legend>
  <ul class="store-comments white"></ul>
 </fieldset>
  <div>
  <h4 class= "white comment-header">Add a Comment</h4>
  <form id="form">
  <input
  type="text"
  name="name"
  maxlength="20"
              id="input"
              placeholder="Add your Name"
            />
            <br />
            <textarea name="" id="textarea" cols="30" rows="10" maxlength="100" placeholder= "insights"></textarea>
            <button type="submit" class="btn">Comment</button>
            </form>
            </div>
            </div>
  `
    popUp.appendChild(newArticle)
  }

  static displayCommentPopUp = (event, element) => {
    if (event.target.id === element.collectionId.toString()) {
      Comment.createCommentPopUp(element)
    }
  }

  static closePopUp = (event) => {
    const child = event.target
    const parentContainer =
      child.parentElement.parentElement.parentElement.parentElement
    if (child.classList.contains('material-symbols-outlined')) {
      parentContainer.removeChild(
        child.parentElement.parentElement.parentElement
      )
    }
  }
  static postAComment = async (url, id, userName, comment) => {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        item_id: id,
        username: userName,
        comment: comment,
      }),
    })
  }

  static getComment = async (url) => {
    let fetchData = await fetch(url)
    return fetchData.json()
  }
  static getStorage = () => {
    return JSON.parse(localStorage.getItem('appId'))
  }
  static clearField = () => {
    let name = document.querySelector('#input')
    let text = document.querySelector('#textarea')
    name.value = ''
    text.value = ''
  }

  static showComment = (comments) => {
    const fieldset = document.querySelector('fieldset')
    if (comments.length > 0) {
      comments.forEach((comment) => {
        const commentContainer = document.querySelector('.store-comments')
        const container = document.createElement('li')
        container.innerHTML = `${comment.creation_date} ${comment.username}: ${comment.comment}`
        commentContainer.appendChild(container)
      })
    } else {
      fieldset.style.display = 'none'
    }
  }

  static countComment = (comments) => {
    const count = document.querySelector('.count')
    if (comments.length > 0) {
      count.innerHTML = `Comment ( ${comments.length})`
    } else {
      count.innerHTML = ''
    }
  }
}
