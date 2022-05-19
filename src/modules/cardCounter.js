const cardCounter = () => {
  const cards = document.getElementById('section');
  const cardscount = document.getElementById('cards-count');
  cardscount.innerHTML = `Albums(${cards.childNodes.length-1})`;
};

export default cardCounter;