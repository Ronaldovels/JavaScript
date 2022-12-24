class Car {
    
    constructor(model,year, color ){
        this.model = model
        this.year = year
        this.color = color
    }
}

const car1= new Car("Mustang", 2023, "black" )
const car2 = new Car("Corvette", 2024, "red" )
const car3 = new Car("Lambo", 2022, "purple")

changeColor(car3, "gold")
displayInfo(car3)

function displayInfo(car){
    console.log(car.model)
    console.log(car.year)
    console.log(car.color)
}

function changeColor(car, color){
    car.color = color
}