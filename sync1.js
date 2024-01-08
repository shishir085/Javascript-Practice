console.log("one");
console.log("Two");
console.log("three");

function four() {

    return "four"

}
console.log(four());

// setTimeout(() => {
//     console.log("five");
// }, 3000);

// function five() {
//     console.log("five");
// }
// setTimeout(five,2000)


function six() {
    console.log("six"); 
}

setTimeout(six,2000)


setTimeout(()=>{
    console.log("seven");
},3000)



