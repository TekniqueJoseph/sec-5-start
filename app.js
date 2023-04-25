// let myName = 'Joseph'

// if (myName === 'Joseph') {
//     let hobbies = ['Sports', 'Cooking']
//     console.log('if', hobbies)

// }

// function greet() {
//     let age = 52;
//     let myName = 'Buju'
//     console.log('func=>',myName, age, hobbies)
// }

// console.log('log=>', myName, hobbies)

// greet()

// var undefined = 5
// const userName = 'Joseph'
// console.log(userName)


const bx = document.querySelector('.box');
bx.style.margin = "auto";
bx.style.marginTop = "150px"
bx.style.backgroundColor = "red";
bx.style.borderRadius = '50%';

function change() {
    bx.style.backgroundColor = 'black'
    bx.style.boxShadow = '2px 2px 12px 16px red'
}

document.querySelector(".box").addEventListener("click", change);