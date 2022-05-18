/* Init App id */
// Check for an existing App id, if there isn't create one

const initId = async () => {
  if (localStorage.getItem('appId') === null) {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const id = await response.text();
    localStorage.setItem('appId', JSON.stringify(id));
  }
}

export default initId;