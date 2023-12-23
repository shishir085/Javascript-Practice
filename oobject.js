const info={
    name:'shishir',
    surname:'pandey',
    age:19,
    

}


// console.log(info.name,info.age);

for (const key in info) {
    if (Object.hasOwnProperty.call(info, key)) {
        const element = info[key];
        
    //  console.log(key,element);
    }
}


