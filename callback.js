function sum(a,b) {
    // console.log(a+b);
}

function calculator(a,b,sumcallback) {
    sumcallback(a,b)
}

calculator(1,4,(a,b)=>{
    console.log(a+b);
});