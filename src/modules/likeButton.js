import updateLikeCounter from './updateLikeCounter.js';

// Add like to item using Involvement API
async function setLike() {
  const likeIcon = this.firstChild;
  let likesNumber = likeIcon.dataset.likes;
  const cardId = likeIcon.dataset.itemid;
  const appId = JSON.parse(localStorage.getItem('appId'));

  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: `${cardId}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  likeIcon.setAttribute('data-likes', likesNumber = Number(likesNumber) + 1);
  updateLikeCounter(cardId, likesNumber);
}

export default setLike;