const characters = document.querySelectorAll('.characters')
const nav = document.querySelector('.name-area')
const deathGrid = document.querySelector('.death-grid')
const deathGridDisplay = document.querySelector('.death-grid-display')
const nameInput = document.querySelector('#name-input')
const signIn = document.querySelector('.sign-in')
const submitBtn = document.querySelector('.submit-btn')
const selectedCharacters = []

const renderSelect = () => {
  const username = `<h3>${nameInput.value}</h3>`
  signIn.style.display = 'none'
  deathGrid.style.display = 'grid'
  nav.style.display = 'flex'
  nav.insertAdjacentHTML('afterbegin', username)
}

const checkIfFilled = () => {
  if (characters[8].parentNode.firstElementChild.innerText) {
    nav.children[2].removeAttribute("hidden")
  }
}

const renderEmoji = (deathGridArr) => {
  deathGridArr.forEach((gridEl) => {
    gridEl.addEventListener('click', (e) => {
      e.currentTarget.insertAdjacentHTML('afterbegin', '<p>☠️⚰️<p/>')
    })
  })
}

const renderGrid = () => {
  deathGrid.style.display = 'none'
  deathGridDisplay.style.display = 'grid'
  submitBtn.style.display = 'none'
  const deathGridArr = Array.from(deathGridDisplay.children)
  deathGridArr.forEach((gridEl, index) => {
    const p = `<p>${selectedCharacters[index]}</p>` 
    gridEl.insertAdjacentHTML('afterbegin', p)
  })
  renderEmoji(deathGridArr)
}

characters.forEach((character, index) => {
  character.addEventListener('change', (e) => {
    const selectionText = e.target.parentNode.firstElementChild
    if (selectionText) {
      selectionText.parentNode.removeChild(selectionText)
    }
    const name = e.target.value
    selectedCharacters.push(name)
    const p = `<p>${name}</p>`
    characters[index].insertAdjacentHTML('beforebegin', p)
    checkIfFilled()
  })
})