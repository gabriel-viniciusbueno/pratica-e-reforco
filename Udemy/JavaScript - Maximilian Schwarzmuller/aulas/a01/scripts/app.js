let defaultResult = 0
let currentResult = defaultResult


function createOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription =  `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription)
}

function add(){
    const enteredNumber = parseFloat(userInput.value)
    const initialResult = currentResult;
    currentResult += enteredNumber
    createOutput('+', initialResult, enteredNumber)
}

function subtract() {
    const enteredNumber = parseFloat(userInput.value)
    const initialResult = currentResult;
    currentResult -= enteredNumber
    createOutput('-', initialResult, enteredNumber)
}

function multiply() {
    const enteredNumber = parseFloat(userInput.value)
    const initialResult = currentResult;
    currentResult *= enteredNumber
    createOutput('*', initialResult, enteredNumber)
}

function divide() {
    const enteredNumber = parseFloat(userInput.value)
    const initialResult = currentResult;
    currentResult /= enteredNumber
    createOutput('/', initialResult, enteredNumber)
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)

