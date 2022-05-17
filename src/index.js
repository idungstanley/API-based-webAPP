import "./style.css"
import displayCard from "./modules/displayCard.js";

// Display all items
const displayItems = async (artistId="271256") => {
  const container = document.getElementById('section');
  const response = await fetch(`https://itunes.apple.com/lookup?id=${artistId}&entity=album&limit=6`);
  const obj = await response.json();
  console.log(obj.results);
  for (let index = 1; index < obj.results.length; index++) {
    const element = obj.results[index];
    displayCard(container, element.artworkUrl100, element.collectionCensoredName, element.artistName);
  }
};

displayItems();