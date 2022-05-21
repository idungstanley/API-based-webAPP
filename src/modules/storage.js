class Storage {
  static setStorage = (comment) => {
    localStorage.setItem('store', JSON.stringify(comment));
  }

  static getStorage = () => JSON.parse(localStorage.getItem('store')) || []
}

export default Storage;
