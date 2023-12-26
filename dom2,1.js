let newpara=document.createElement("p")
newpara.innerText="this is a normal paragraph"

let div=document.querySelector("div")


div.after(newpara)

let newheading=document.createElement("h1")
newheading.innerHTML="<i>This is a new heading</i>"

let div1=document.querySelector("div")

div1.before(newheading)

newheading.style.textAlign="center"

