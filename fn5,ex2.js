let num= prompt('Enter a number')

let arr=[]

for (let i =  1; i <= num; i++) {

   arr[i-1]=i
}

let sum=arr.reduce((prev,curr)=>{
    return prev+curr
} )
console.log(sum);

let mul=arr.reduce((prev,curr)=>{
    return prev*curr
} )
console.log(mul);