let marks = [34, 46, 45, 32, 65, 87, 54, 56, 57, 4]

// console.log(marks[4]);


// marks[3]=33


// console.log();




let heroes = ['ironman', 'hulk', 'superman', 'spiderman', 'captain', 'shaktiman']




for (let i = 0; i < heroes.length; i++) {
    // console.log(heroes[i]);


}


for (const element of heroes) {
    // console.log(element);

}


//////////////////////////////////////////////////////////////////////////////////////////////////
//average of given marks

let mark = [85, 97, 44, 37, 76, 60]


let len = mark.length
let sum=0

for (let i = 0; i < mark.length; i++) {

 sum=sum+mark[i]

}

avg = sum / len
// console.log(avg);

/////////////////////////////////////////////////////////////////////////


//price after discount 10%


let oldprice=[250,645,300,900,50]


for (let i = 0; i < oldprice.length; i++) {
    
    let disprice = oldprice[i]*0.1



    newprice=oldprice[i]-disprice
console.log(newprice);
}


