/* Init App id */
// Check for an existing App id, if there isn't create one

const initId = async () => {
  if (localStorage.getItem('appId') === null) {
    const id = 'VonFwyCfU4bUnxbvPNPN';
    localStorage.setItem('appId', JSON.stringify(id));
  }
};

export default initId;