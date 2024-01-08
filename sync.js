

let button = document.querySelector('#colorChangeButton')
button.addEventListener('click', function () {
    document.body.style.backgroundColor = getRandomColor();
    // document.body.style.backgroundColor = colorchange();

});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    button.innerText = "Change Color :   " + color;
    return color;

}


// function colorchange() {
//     let colors = '0123456789ABCDEF'
//     let hash = '#'
//     for (let i = 0; i < 6; i++) {

// hash=hash+ colors[Math.floor(Math.random()*16)]
//     }
//     return hash;
// }