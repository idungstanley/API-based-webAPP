// Display single card/item
const displayCard = (container, albumImg='unknown', albumName="no-name", artistName="NONE") => {
  const div = document.createElement('div');
  const img = document.createElement('img');
  const h3 = document.createElement('h3');
  h3.innerHTML = albumName;
  img.setAttribute('src', albumImg);
  div.classList.add('items-container');
  div.append(img,h3);
  container.append(div);
};

export default displayCard;