export default class Comment {
  static createCommentPopUp = (data) => {
    let newArticle = document.createElement('article');
    newArticle.innerHTML = `<div> 
  <img src= ${data.url} alt="Image"/> 
  <span class='material-symbols-outlined'>close</span>
  </div>`;
  }

  static showCommentPopUp = () => {}
}
