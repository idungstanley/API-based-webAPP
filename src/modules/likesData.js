import updateLikeCounter from './updateLikeCounter.js';

const updateAllLikes = async () => {
  const appId = JSON.parse(localStorage.getItem('appId'));
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const obj = await response.json();
  let list = await obj;
  list = list.slice(1);
  list.forEach((element) => {
    updateLikeCounter(element.item_id, element.likes);
  });
};

export default updateAllLikes;