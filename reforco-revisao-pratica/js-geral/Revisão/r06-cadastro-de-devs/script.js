const devForm = document.getElementById('dev-form')
const devName = document.getElementById('dev-name').value
const devs = []
const addTechBtn = document.getElementById('add-tech')
const removeTechBtn = document.getElementById('remove-tech')
const signupBtn = document.getElementById('signup-btn')
let deletarNumber = 0




function createLabel(title) {
  const createLabel = document.createElement('label')
  createLabel.innerText = title

  devForm.appendChild(createLabel)
}

function createInput(type, name, value, label = '',) {
  const newInput = document.createElement('input')
  newInput.type = type
  // newInput.id = id
  newInput.name = name
  newInput.value = value
  newInput.className = 'deletar' + deletarNumber

  
  const inputLabel = document.createElement('label')
  inputLabel.innerText = label
  inputLabel.className = 'deletar' + deletarNumber
  devForm.append(newInput, inputLabel)

 
}


//Criar o evento de nova tecnologia
addTechBtn.addEventListener('click', () => {
  const techName = createInput('text', 'techname', '')
  const radio = createInput('radio', 'exp', '0-2', '0-2 anos')
  const radio2 = createInput('radio', 'exp', '3-4', '3-4 anos')
  const radio3 = createInput('radio', 'exp', '5+', '5+ anos')
  deletarNumber++
})

//Criar o evento de remover tecnologia

removeTechBtn.addEventListener('click', () => {
  const removerTechs = document.querySelectorAll(`.deletar[class='${'deletar' + deletarNumber}']`)



})


//Cadastro
signupBtn.addEventListener('click', (e) => {
  e.preventDefault()

  // console.log(devName);
})