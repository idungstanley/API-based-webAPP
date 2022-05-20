const popUp = document.querySelector('.comment-popup')
export default class Comment {
  static createCommentPopUp = (data) => {
    const newArticle = document.createElement('article')
    newArticle.innerHTML = `<div class= "flex"> 
  <img src= ${data.artworkUrl100} alt="Image"/> 
  <span class='material-symbols-outlined'>close</span>
  </div>
  <h2>Collection Name: ${data.collectionName}</h2>
  <div class= "pop-details">
    <a href="${data.collectionViewUrl}" target="_blank">Click Here To Listen</a>
    <p>Release Date: ${data.releaseDate}</p>
    <p>Price: $${data.collectionPrice}</p>
    <p>Genre Type: ${data.primaryGenreName}</p>
  </div>
  <div class="store-comments"></div>
  <div>
  <h4>Add a Comment</h4>
  <form id="form">
  <input
  type="text"
  name="name"
              id="input"
              placeholder="Add your Name"
            />
            <br />
            <textarea name="" id="textarea" cols="30" rows="10" placeholder= "insights"></textarea>
            <button type="submit" class="btn">Comment</button>
            </form>
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
    const parentContainer = child.parentElement.parentElement.parentElement
    if (child.classList.contains('material-symbols-outlined')) {
      parentContainer.removeChild(child.parentElement.parentElement)
    }
  }
  static postAComment = async (url, id, userName, comment) => {
    await fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        item_id: id,
        userName: userName,
        comment: comment,
      }),
    })
  }

  static getComment = async (url) => {
    let fetchData = await fetch(url);
    return fetchData.json()
  }
  static getStorage = () => {
    return JSON.parse(localStorage.getItem('appId'))
  }

}
