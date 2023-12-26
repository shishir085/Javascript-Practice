let changemode=document.querySelector(".boom")
let checkmode="light"

let fordark=()=>{

    if(checkmode==="light"){
        document.body.style.backgroundColor="#373737"
checkmode="dark";
document.body.style.color="white"

}
else{
document.body.style.backgroundColor="#ffffff"
    checkmode="light"
    document.body.style.color="black"
}
}

// changemode.addEventListener("mouseover",fordark)
changemode.addEventListener("click",fordark)
// changemode.addEventListener("dblclick",fordark)

