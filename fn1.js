// Create a function using the "function" keyword that takes a String as an argument &
// returns the number of vowels in the string.


function string(str) {
    let tot = 0
    for (let i = 0; i < str.length; i++) {

        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            tot++;
        }
    }
    console.log(tot);
}

// string('shishirpandey')

//by using arrow function

const arrfun = (str) => {
    let tot = 0
    for (let i = 0; i < str.length; i++) {



        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            tot++;

        }
       
    }
    console.log(tot);
}

arrfun('ppk')