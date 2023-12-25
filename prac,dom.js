
let elem=document.querySelector("h2")

let newtext=' from Apna College Students'

// elem.innerText=elem.innerText+newtext


let divs = document.querySelectorAll(".box")

// divs[0].innerText="new first div"
// divs[1].innerText="new second div"
// divs[2].innerText="new third div"
idx=0
for (divs of divs) {
    divs.innerText=`new unique value ${idx}`
    idx++;
}


 