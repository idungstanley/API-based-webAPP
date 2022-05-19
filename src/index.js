import './style.css';
import displayCard from './modules/displayCard.js';
import initId from './modules/init.js';
import updateAllLikes from './modules/likesData.js';

// Display all items
const displayItems = async (artistId = '271256') => {
  const container = document.getElementById('section');
  const response = await fetch(`https://itunes.apple.com/lookup?id=${artistId}&entity=album&limit=6`);
  const obj = await response.json();
  for (let index = 1; index < obj.results.length; index += 1) {
    const element = obj.results[index];
    displayCard(container, element.artworkUrl100, element.artistName);
  }
};
initId();
displayItems();
updateAllLikes();
