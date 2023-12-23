let arr=[1,35,57,43,6,5,3]
// let newarr=[]


// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }

//same as above


let newarr=arr.map(e=>e**2)

console.log(newarr);

let ball=newarr.sort((a,b)=>a-b)
console.log(ball);


let cat=newarr.filter(e=>{
    if (e>9) {
        return true
    }
})

console.log(cat);