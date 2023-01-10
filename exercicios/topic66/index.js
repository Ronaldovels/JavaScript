// console.time() = Starts a timer you can use to 
//                  track how long an operation takes
//                  Give each timer a unique name.

console.time("Response time")

alert("click the ok button")
setTimeout(() => console.log("HELLO"), 3000)

console.timeEnd("Response time")