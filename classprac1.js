let data = "Secret Data"
class user {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewdata() {
        console.log(`Data=${data}`);

    }

}
class admin extends user {

    constructor(name,email){
        super(name,email);
    }
   
editdata(){
    data="some new value"
}

}




let student1 = new user("Shishir", "shishir@gmail.com");
let student2 = new user("Noob", "nob@gmail.com");
let teacher1= new user("dean","dean@email.com")

let admin1= new user("admin","admin@gmail.com")