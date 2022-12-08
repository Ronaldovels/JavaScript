// How to accept user input

// EASY WAY with a window prompt

    //let username =  window.prompt("Whats you name")
    //console.log(username)


// DIFFICULT WAY HTML textbox

    document.getElementById('botao').onclick = function() {


        username = document.getElementById("inome").value;
        console.log(username)
        document.getElementById("label").innerHTML = "Helo " + username
    }