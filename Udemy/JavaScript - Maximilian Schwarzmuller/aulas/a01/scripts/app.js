let defaultResult = 0
let currentResult = defaultResult

function add(){
    currentResult += parseFloat(userInput.value)
    outputResult(currentResult, '')
}

addBtn.addEventListener('click', add)

