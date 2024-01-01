// classes in js

class toyotacar {
    constructor(brand,milage){
        console.log('creating new objects');
        this.brand=brand;
        this.milage=milage;
    }
    start() {
        console.log("start")
    }

    stop() {
        console.log("stop");
    }

  
}

let fortuner=new toyotacar("fortuner",20);
// fortuner.setbrand("fortuner")
let lexus=new toyotacar("lexus",30);
 
// lexus.setbrand("lexus")