let username = window.prompt("Enter your name: ");

// username = username.trim();

let latter = username[0].toUpperCase();


document.getElementById("test").textContent = `Hello ${latter}${username.slice(1)}`;

// closure function 
// function outerFunction() {
//     let outerVariable = "I am outside!";

//     function innerFunction() {
//         console.log(outerVariable);
//     }

//     return innerFunction;
// }
// **** callback function ****
function func1(callback){
    setTimeout(() => {console.log('test1');
    callback();
}, 1000);
}

function func2(){
console.log('test2');
}

func1(func2);

// ***************************

// ES6 Module = an external file that exports one or more values
//  (variables, functions, objects) and can be imported into another file.

//  object destructuring