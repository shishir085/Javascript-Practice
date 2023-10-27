// slice and splice  




// slice/splice (starting postiton of value , total no of value to be removed from the array to the right)

let myarray = [3, 5, 7, 4, 9, 66, 8, 56, 45, 55, 2, 68, 34]


console.log("A",myarray);

const array1= myarray.slice(1,4) //takes out the selected values also last value-1  it means starting position is one and total values to print is 4-1=3


console.log(array1);
console.log("B",myarray);

const array2 =myarray.splice(2,6)  // takes out the selected values and also removes from the main array
console.log(array2);
console.log("C",myarray);
