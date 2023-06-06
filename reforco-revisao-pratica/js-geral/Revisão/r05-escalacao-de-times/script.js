const playerName = document.getElementById('name')
const playerPosition = document.getElementById('position')
const playerNumber = document.getElementById('number')
const addBtn = document.getElementById('add-player-btn')
const sectionTeam = document.getElementById('time')

addBtn.addEventListener('click', (e) => {
  e.preventDefault()


  const createList = document.createElement('ul')
  const playerLi = document.createElement('li')

  const confirmacao = confirm(playerName.value + ' é ' + playerPosition.value + ' e camisa ' + playerNumber.value + '?')
  if(confirmacao){
    playerLi.id = 'player' + playerNumber
    playerLi.innerHTML = 'player: ' + playerName.value + ' (' + playerNumber.value + ') ' + playerPosition.value
    createList.appendChild(playerLi)
    sectionTeam.appendChild(createList)
  }

  
  
})

