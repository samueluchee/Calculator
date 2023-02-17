var userInput = document.querySelector('.user-input')
var statement = '';


function press(i) {
    statement += i;
    userInput.value = statement
}

function equal() {
    var answer = eval(statement)
    userInput.value = answer
    statement = ''
}

function cancel() {
    statement = ''
    userInput.value = statement
}