import './style.css'
import displayCard from './modules/displayCard.js'
import Comment from './modules/comment.js'
import initId from './modules/init.js'
// Display all items
const displayItems = async (artistId = '271256') => {
  const container = document.getElementById('section')
  const response = await fetch(
    `https://itunes.apple.com/lookup?id=${artistId}&entity=album&limit=6`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
  )
  const obj = await response.json()
  for (let index = 1; index < obj.results.length; index += 1) {
    const element = obj.results[index]
    displayCard(
      container,
      element.artworkUrl100,
      element.collectionCensoredName,
      element.artistName,
      element.collectionId
    )
  }

  const btns = document.querySelectorAll('.comment')
  Array.from(btns).forEach((btn, index) => {
    const element = obj.results[index + 1]
    btn.addEventListener('click', (event) =>
      Comment.displayCommentPopUp(event, element)
    )
  })
}
displayItems()
initId()


document
  .querySelector('.comment-popup')
  .addEventListener('click', (event) => {
    Comment.closePopUp(event);
  });

  const form = document.querySelector('#form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    let name = document.querySelector('#input')
    let text = document.querySelector('#textarea')
  });



