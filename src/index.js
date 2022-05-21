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
    updateAllLikes();
  }
  const btns = document.querySelectorAll('.comment');
  Array.from(btns).forEach((btn, index) => {
    const element = obj.results[index + 1];
    btn.addEventListener('click', async (event) => {
<<<<<<< HEAD
      Comment.displayCommentPopUp(event, element);
      const form = document.querySelector('#form');
      const appId = Comment.getStorage();
      const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments/`;
      const getComment = await `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${
        index + 1
      }`;
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const name = document.querySelector('#input');
        const text = document.querySelector('#textarea');
        const nameValue = name.value;
        const textValue = text.value;
        await Comment.postAComment(
          commentUrl,
          index + 1,
          nameValue,
          textValue,
        );
        Comment.clearField();
        await Comment.getComment(getComment);
<<<<<<< HEAD
      });

      const sand = await Comment.getComment(getComment);
      await Comment.countComment(sand);
      await Comment.showComment(sand);
=======
        Comment.showPer(nameValue, textValue);
      });
      const sand = await Comment.getComment(getComment);
      Comment.showComment(sand);
      Comment.countComment(sand);
>>>>>>> 0870519f27d224ee1a64e353a2fe8f3ceec843d8
    });
  });
  cardCounter();
  updateAllLikes();
};
initId();
displayItems();

document
  .querySelector('.comment-popup')
  .addEventListener('click', (event) => Comment.closePopUp(event));
