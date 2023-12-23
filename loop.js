// let a=-5

// if (a>0)
// {console.log('positive');}
// else if(a<0){
//     console.log('negative')
// }
// else{
//     console.log('zero');
// }

/*
for ( i=0;i<100;i++)
{
    console.log(i);
}
*/

let obj={
    name:'shisir',
    surname:'pandey',
    course:'bca',
    semester:"third"
}

     for (const key in obj) {
      
            const element = obj[key];
            console.log(`${key}: ${element}`);
       
     }


//      let apple='shishir'
//      let ball = ' pandey'

// console.log(`my name is ${apple+ ball} `);



let myinfo={
    name:'shishir',
address:"butwal",
study:'bachelor'
}


for (const key in myinfo) {
  
        const element = myinfo[key];
        
    console.log(`${key}= ${element}`);
}