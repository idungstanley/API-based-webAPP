const updateLikeCounter = (cardId, likes) => {
  const pElement = document.querySelector(`[data-cardid="${cardId}"]`);
  pElement.textContent = `${likes} likes`;
};

export default updateLikeCounter;