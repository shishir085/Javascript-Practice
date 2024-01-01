let student={
    name:'shishir',
    class:"bca",
    marks:80.3,
printmarks: function () {
    console.log(this.marks)
},
}
// student.printmarks()  

let employee={
    calctax(){
        console.log(' the tax rate is 10%');
    
        
    }
}

let karan={
salary:50000,
}

karan.__proto__=employee;


