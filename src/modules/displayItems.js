import displayCard from './displayCard.js';
import cardCounter from './cardCounter.js';
import updateAllLikes from './likesData.js';
import searchArtistId from './searchArtistId.js';
import searchArtistAlbums from './searchArtistAlbums.js';
import Comment from './comment.js';

const displayItems = async (artistName) => {
  const artistId = await searchArtistId(artistName);
  const container = document.getElementById('section');
  container.innerHTML = '';
  const obj = await searchArtistAlbums(artistId, 12);
  for (let index = 1; index < obj.results.length; index += 1) {
    const element = obj.results[index];
    displayCard(
      container,
      element.artworkUrl100,
      element.collectionCensoredName,
      0,
      element.collectionId,
    );
  }
  const btns = document.querySelectorAll('.comment');
  Array.from(btns).forEach((btn, index) => {
    const element = obj.results[index + 1];
    btn.addEventListener('click', async (event) => {
      Comment.displayCommentPopUp(event, element);
      const form = document.querySelector('#form');
      const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VonFwyCfU4bUnxbvPNPN/comments/';
      const getComment = await `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VonFwyCfU4bUnxbvPNPN/comments?item_id=${
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
        Comment.showPer(nameValue, textValue);
      });
      const sand = await Comment.getComment(getComment);
      Comment.showComment(sand);
      Comment.countComment(sand);
    });
  });
  cardCounter();
  updateAllLikes();
};

document
  .querySelector('.comment-popup')
  .addEventListener('click', (event) => Comment.closePopUp(event));

export default displayItems;