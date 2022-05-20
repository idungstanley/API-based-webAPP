class Storage {
  static setStorage = (comment) => {
    localStorage.setItem('store', JSON.stringify(comment))
  }

  static getStorage = () => {
    return JSON.parse(localStorage.getItem('store')) || []
  }
}

export default Storage
