const updateLikeCounter = (cardId, likes) => {
  console.log(cardId);
  const pElement = document.querySelector(`[data-cardid="${cardId}"]`);
  pElement.textContent = `${likes} likes`;
};

export default updateLikeCounter;