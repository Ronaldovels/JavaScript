// callback = a function passes as an argument
//            to another function

//       Ensures that a function is not going
//       to run before a task is completed. 
//       Helps us develop asynchronus code.
//       (When one function has to wait for another function)
//       that help us avoid erros and potential problems
//       Ex. Wait for a file to load


sum(2, 3, displayDOM)

function sum (x, y, callBack) {
    let result = x + y
    callBack(result)
}

function displayConsole(output){
    console.log(output)
}

function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output
}