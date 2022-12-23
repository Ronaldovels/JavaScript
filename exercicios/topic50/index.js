// this = reference to a particular object
//           the object depends on the immediate context

const car1 = {
    model:"Mustang",
    color:"Black",
    year: 2023,

    drive : function(){
        console.log(`You drive the ${this.model}`)
    }
}

const car2 = {
    model:"Corvette",
    color:"Red",
    year: 2024,

    drive : function(){
        console.log(`You drive the ${this.model}`)
    }
}

car1.drive()
car2.drive()