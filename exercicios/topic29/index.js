//toLocaleString() = returns a string with a language
//                   sensitive representation of this number

// number.toLocaleString(locale, {options})

// 'locale' = specify that language (undefined = default set in browser)
// 'options' = object with formatting options

let myNum = 100

//myNum = myNum.toLocaleString("en-US")
//myNum = myNum.toLocaleString("pt-BR")
//myNum = myNum.toLocaleString("de-DE")

//myNum = myNum.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})

//myNum = myNum.toLocaleString(undefined, {style: "percent"})

myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"})

console.log(myNum)