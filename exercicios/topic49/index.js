// object = A group of properties and methods
//                properties = what an object has
//                methods = what an object can do
//                use . to access properties/methods

const car1 = {
    model:"Mustang",
    color:"Black",
    year:"2023",

    drive : function(){
        console.log("You drive the car")
    },

    brake : function(){
        console.log("You step on the brake")
    },
}

const car2 = {
    model:"Corvette",
    color:"Red",
    year:"2024",

    drive : function(){
        console.log("You drive the car")
    },

    brake : function(){
        console.log("You step on the brake")
    },
}

console.log(car2.model)
console.log(car2.color)
console.log(car2.year)

car2.drive()
car2.brake()
