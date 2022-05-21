import setLike from './likeButton.js';

// Display single card/item
const displayCard = (container, albumImg = 'unknown', albumName = 'no-name',likes = 0, index) => {
  const likesCounter = likes;
  const div = document.createElement('div');
  const img = document.createElement('img');
  const i = document.createElement('i');
  const h3 = document.createElement('h3');
  const titleContainer = document.createElement('div');
  const likeIcon = document.createElement('img');
  const likesContainer = document.createElement('div');
  const descriptionText = document.createElement('p');
  const commentsButton = document.createElement('button');
  const reservationsButton = document.createElement('button');
  const itemId = document.querySelectorAll('#section > div').length;

  likeIcon.setAttribute('data-likes', likesCounter);
  likeIcon.setAttribute('data-itemId', itemId);
  descriptionText.setAttribute('data-cardid', itemId);
  descriptionText.textContent = `${likeIcon.dataset.likes} likes`;
  likeIcon.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/126/126473.png');
  likeIcon.classList.add('icon-size');
  likesContainer.classList.add('description-container');
  h3.innerHTML = albumName;
  img.setAttribute('src', albumImg);
  commentsButton.classList.add('comment');
  commentsButton.setAttribute('type', 'button');
  commentsButton.setAttribute('id', index);
  reservationsButton.setAttribute('type', 'button');
  commentsButton.textContent = 'Comments';
  reservationsButton.textContent = 'Reservation';
  div.classList.add('items-container');
  titleContainer.classList.add('title-like');
  i.addEventListener('click', setLike);

  likesContainer.append(i, descriptionText);
  i.append(likeIcon);
  titleContainer.append(h3, likesContainer);
  div.append(img, titleContainer, commentsButton, reservationsButton);
  container.append(div);
};

export default displayCard;