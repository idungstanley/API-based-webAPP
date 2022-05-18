// Display single card/item
const displayCard = (container, albumImg = 'unknown', albumName = 'no-name') => {
  const div = document.createElement('div');
  const img = document.createElement('img');
  const h3 = document.createElement('h3');
  const titleContainer = document.createElement('div');
  const likeIcon = document.createElement('img');
  const likesContainer = document.createElement('div');
  const descriptionText = document.createElement('p');
  const commentsButton = document.createElement('button');
  const reservationsButton = document.createElement('button');
  
  descriptionText.textContent = '5 likes';
  likeIcon.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/126/126473.png');
  likeIcon.classList.add('icon-size');
  likesContainer.classList.add('description-container');
  h3.innerHTML = albumName;
  img.setAttribute('src', albumImg);
  commentsButton.setAttribute('type', 'button');
  reservationsButton.setAttribute('type', 'button');
  commentsButton.textContent = 'Comments';
  reservationsButton.textContent = 'Reservation';
  div.classList.add('items-container');
  titleContainer.classList.add('title-like');

  likesContainer.append(likeIcon, descriptionText);
  titleContainer.append(h3, likesContainer);
  div.append(img, titleContainer, commentsButton, reservationsButton);
  container.append(div);
};

export default displayCard;