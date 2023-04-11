let defaultResult = 0
let currentResult = defaultResult
let logEntries = []


function createOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription =  `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription)
}

function add(){
    const enteredNumber = parseFloat(userInput.value)
    const initialResult = currentResult;
    currentResult += enteredNumber
    createOutput('+', initialResult, enteredNumber)
    const logEntry = {
        operation: 'ADD',
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult
    }
    logEntries.push(logEntry)
    console.log(logEntries)
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

