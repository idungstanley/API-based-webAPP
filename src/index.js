import './style.css';
import displayCard from './modules/displayCard.js';
import Comment from './modules/comment.js';
import initId from './modules/init.js';
import cardCounter from './modules/cardCounter.js';
import updateAllLikes from './modules/likesData.js';
import '../Assets/images/icons8.png';

// Display all items
const displayItems = async (artistId = '271256') => {
  const container = document.getElementById('section');
  const response = await fetch(
    `https://itunes.apple.com/lookup?id=${artistId}&entity=album&limit=12`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const obj = await response.json();
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
  cardCounter();
  updateAllLikes();
};
initId();
displayItems();
updateAllLikes();
document.querySelector('.comment-popup').addEventListener('click', (event) => Comment.closePopUp(event));
