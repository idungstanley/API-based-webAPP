import './style.css';
import displayCard from './modules/displayCard.js';
import Comment from './modules/comment.js';
import initId from './modules/init.js';
import updateAllLikes from './modules/likesData.js';

// Display all items
const displayItems = async (artistId = '271256') => {
  const container = document.getElementById('section');
  const response = await fetch(
    `https://itunes.apple.com/lookup?id=${artistId}&entity=album&limit=6`,
  );
  const obj = await response.json();
  console.log(obj.results);
  for (let index = 1; index < obj.results.length; index += 1) {
    const element = obj.results[index];
    displayCard(
      container,
      element.artworkUrl100,
      element.collectionCensoredName,
      element.artistName,
      element.collectionId,
    );
  }

  const btns = document.querySelectorAll('.comment');
  Array.from(btns).forEach((btn, index) => {
    const element = obj.results[index + 1];
    btn.addEventListener('click', (event) => Comment.displayCommentPopUp(event, element));
  });
};
initId();
displayItems();
updateAllLikes();
document.querySelector('.comment-popup').addEventListener('click', (event) => Comment.closePopUp(event));
