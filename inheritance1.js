class person{
    constructor(){
        this.species="homosapiens";
    }
eat(){
    console.log("eat");
}


sleep(){
    console.log('sleep');
}
work(){
    console.log("do nothing");
}
}

class engineer extends person{
    work(){
        console.log("i can work");
    }
}


let engobj=new engineer;
// class obj extends engineer{
    
// }