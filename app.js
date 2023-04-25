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
bx.style.marginTop = "70px"
bx.style.backgroundColor = "indigo";
bx.style.borderRadius = '50%';

// function change() {
//     bx.style.backgroundColor = 'black'
//     bx.style.boxShadow = '2px 2px 12px 16px red'
// }

// document.querySelector(".box").addEventListener("click", change);

bx.addEventListener('click', function onClick(event) {
    const backgroundColor = bx.style.backgroundColor;
    if (backgroundColor === 'indigo') {
      bx.style.backgroundColor = 'gold';
      bx.style.boxShadow = '2px 2px 12px 16px red'
  
      // 👇️ optionally change text color
      // btn.style.color = 'white';
    } else {
      bx.style.backgroundColor = 'indigo';
      bx.style.boxShadow = 'none'
  
      // 👇️ optionally change text color
      // btn.style.color = 'blue';
    }
  })