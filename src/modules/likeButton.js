// Manage all interactions when like icon is clicked
async function setLike() {
  const likeIcon = this.firstChild;
  const likesNumber = likeIcon.dataset.likes;
  const cardId = likeIcon.dataset.itemid;
  const appId = JSON.parse(localStorage.getItem('appId'));
  if (likesNumber == 0) { // If clicked first time
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`,{
    method:'POST',
    body:JSON.stringify({
      "item_id": `${cardId}`
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    console.log(response);
  }
}

export default setLike;