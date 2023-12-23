function first() {
    let first1 = 'Crazy'
    let first2 = 'Amazing'
    let first3 = 'Fire'

    let a = Math.random() * 10
    if (a > 0 && a <= 3) {
       return first1
       



    }
    else if (a > 3 && a <= 6) {
        return first2

    }
    else {
        return first3


    }
}

function second() {
    let second1 = 'Engine'
    let second2 = 'Food'
    let second3 = 'Garments'
    let b = Math.random() * 10
    if (b > 0 && b <= 3) {
        return second1



    }
    else if (b > 3 && b <= 6) {
        return second2

    }
    else {
        return second3


    }

} function third() {
    let third1 = 'Bros'
    let third2 = 'Limited'
    let third3 = 'Hub'
    let c = Math.random() * 10
    if (c > 0 && c <= 3) {
        return third1



    }
    else if (c > 3 && c <= 6) {
        return third2

    }
    else {
        return third3


    }


}

console.log(` The Name of Company is ${first()} ${second()} ${third()}`);
