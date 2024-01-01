class parent {

    constructor() {
        console.log('this is constructor');
    }
    hello() {
        console.log('hello');
    }
}


class child extends parent {

}

let obj = new child();