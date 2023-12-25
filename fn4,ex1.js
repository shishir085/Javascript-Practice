let marks=[56,89,73,,45,65,76,79,75,54,58,97,99,91,93,57,84,69,96]

let flter= marks.filter((val)=>{
    return val>=70

    
})

let sorted=flter.sort((a,b)=>a-b)
console.log(sorted);