let  newbtn=document.createElement("button")
newbtn.innerText=("Click me!")

let bdy=document.querySelector("body")
bdy.prepend(newbtn)
newbtn.style.backgroundColor="red"
newbtn.style.color="white"


// qn 2


let para=document.querySelector("p")
para.getAttribute("class")
para.setAttribute("class","apple")
