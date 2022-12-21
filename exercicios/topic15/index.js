
document.getElementById("myButton").onclick = function() {


    const myCheckBox = (document.getElementById("myCheckBox"))
    const visaBtn = (document.getElementById("visaBtn"))
    const mastercardBtn = (document.getElementById("mastercardBtn"))
    const paypal = (document.getElementById("paypalBtn"))


    if (myCheckBox.checked) {
        console.log("You are subscribed")
    } else {
        console.log("You are not subscribed")
    }

    if (visaBtn.checked){
        console.log("You are paying with a Visa!")
    }
    else if(mastercardBtn.checked) {
        console.log("You are paying with a MasterCard!")
    }
    else if (paypal.checked){
        console.log("You are paying with PayPal")
    }
    else {
        console.log ("You must select a payment type!")
    }
}