let btn1=document.querySelector(".bttn1")


btn1.onclick=(event)=>{
    console.log('you clicked 1 time');
    alert('you clicked')
    console.dir(btn1);
console.log(event.type);
console.log(event.target);
console.log(event.clientX);
console.log(event.clientY);
}


let  btn2=document.querySelector(".bttn2")

btn2.ondblclick=(event)=>{
    console.log("You Clicked double");
    console.log(event.type);
    console.dir(btn2);
    console.log(event.target);
    console.log(event.clientX);
    console.log(event.clientY);
}

let btn3=document.querySelector(".divv")

btn3.onmouseover=(event)=>{
    console.log("you are over div");
    console.dir(btn3);
    console.log(event.type);
    console.log(event.target);
    console.log(event.clientX,event.clientY);

}
