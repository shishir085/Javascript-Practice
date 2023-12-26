let btn1=document.querySelector(".bttn1")

btn1.addEventListener("click",(event)=>{
   
    console.log("handler 1");
})

const handler2=(event)=>{
    console.log("handler 2");

}

btn1.addEventListener("click",handler2)


btn1.addEventListener("click",(event)=>{
    console.log("handler 3");


})

btn1.addEventListener("click",(event)=>{

    console.log("handler 4");
})



