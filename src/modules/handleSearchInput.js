import displayItems from "../index.js";

const updaterArtistTitle = (artistName) => {
  const artistTitle = document.body.querySelector('.dra');
  artistTitle.innerHTML = artistName;
};

const handleSearchInput = (event) => {
  if(event.key === "Enter") {
    displayItems(event.target.value);
    updaterArtistTitle(event.target.value);
  }
};

export default handleSearchInput;