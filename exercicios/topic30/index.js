const anwser = Math.floor(Math.random() * 10 + 1)
let guesses = 0

document.getElementById("submitButton").onclick = function() {

    let guess = document.getElementById("guessField").value
    guesses+=1

    if(guess == anwser) {
        alert(`${anwser} is the #. It took you ${guesses} guesses`)
    } 
    else if(guess < anwser) {
        alert("Too small!")
    } else {
        alert("To large!")
    }


}