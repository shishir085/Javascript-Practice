// explained arrry

let marvel = ["thor", "spider", 'ant', "iron"]

let dc = ["flash", 'wonder', 'aqua', 'super']


// marvel.push(dc)

// console.log(marvel);


// let heroes=marvel.concat(dc)


// console.log(heroes);

// console.log(heroes[4]);


// heroes.push('bat')

// console.log(heroes);



let newheros=[...marvel,...dc]  // spread function . it spreads all the array values just like concat 
console.log(newheros);


