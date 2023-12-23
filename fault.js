let a=prompt('enter first number')
let b=prompt('enter second number')
let c=prompt('enter operator')


let obj={
    '+':'-',
    '-':'+',
    '*':'/',
    '/':'*'

}


c=obj[c]
alert(`the result is ${eval(`${a} ${c} ${b}`)} `)


