let defaultResult = 0
let currentResult = defaultResult
let logEntries = []


function createOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription =  `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription)
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    }
    logEntries.push(logEntry)
    console.log(logEntry.operation)
    console.log(logEntries)
}


function add(){
    const enteredNumber = parseFloat(userInput.value)
    const initialResult = currentResult;
    currentResult += enteredNumber
    createOutput('+', initialResult, enteredNumber)
    writeToLog('ADD', initialResult, enteredNumber, currentResult)
}

function subtract() {
    const enteredNumber = parseFloat(userInput.value)
    const initialResult = currentResult;
    currentResult -= enteredNumber
    createOutput('-', initialResult, enteredNumber)
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult)
}


function multiply() {
    const enteredNumber = parseFloat(userInput.value)
    const initialResult = currentResult;
    currentResult *= enteredNumber
    createOutput('*', initialResult, enteredNumber)
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}

function divide() {
    const enteredNumber = parseFloat(userInput.value)
    const initialResult = currentResult;
    currentResult /= enteredNumber
    createOutput('/', initialResult, enteredNumber)
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult)
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)

