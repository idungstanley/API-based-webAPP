const popUp = document.querySelector('.comment-popup');
export default class Comment {
  static createCommentPopUp = (data) => {
    const newArticle = document.createElement('article');
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
  <form id="form">
            <input
              type="text"
              name="name"
              id="input"
              placeholder="Add your Name"
            />
            <br />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button type="submit" class="btn">Submit</button>
          </form>
  `;
    popUp.appendChild(newArticle);
  }

  static displayCommentPopUp = (event, element) => {
    if (event.target.id === element.collectionId.toString()) {
      Comment.createCommentPopUp(element);
    }
  }

  static closePopUp = (event) => {
    const child = event.target;
    const parentContainer = child.parentElement.parentElement.parentElement;
    if (child.classList.contains('material-symbols-outlined')) {
      parentContainer.removeChild(child.parentElement.parentElement);
    }
  }
}
