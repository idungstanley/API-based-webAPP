const updateLikeCounter = (cardId, likes) => {
  const pElement = document.querySelector(`[data-cardid="${cardId}"]`);
  const likeIcon = document.querySelector(`[data-itemid="${cardId}"]`);
  likeIcon.setAttribute('data-likes', likes);
  pElement.textContent = `${likes} likes`;
};

export default updateLikeCounter;