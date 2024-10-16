let gameResult = document.getElementById("gameResult")
let userInput = document.getElementById("userInput")
let randomNumber = Math.ceil(Math.random() * 100)

function checkGuess() {
    let userGuess = parseInt(userInput.value)
    if (userGuess > randomNumber) {
        gameResult.textContent = "Too High,Try Again";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else if (userGuess < randomNumber) {
        gameResult.textContent = "Too low,try agin";
        gameResult.style.backgroundColor = '#1e217c';

    }
    else if (userGuess === randomNumber) {

        gameResult.textContent = "congratulations! you guessed the right number"
        gameResult.style.backgroundColor = "green";
    }
    else {
        gameResult.textContent = "Please enter a vaild input";
        gameResult.style.backgroundColor = "red";
    }

}