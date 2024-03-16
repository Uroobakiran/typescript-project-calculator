// calculator in typescript using terminal input

let prompt = require("prompt-sync")();

let n1 = parseInt(prompt("enter your first number:"));
let n2 = parseInt(prompt("emter your second number:"));

let operator = prompt("enter operator (+,-,*,/):");

if(operator = "+"){
console.log(`the answer of ${n1} ${operator} ${n2} = ${n1 + n2}`);
}
if(operator = "-"){
    console.log(`the answer of ${n1} ${operator} ${n2} = ${n1 - n2}`);
}
if(operator = "*"){
        console.log(`the answer of ${n1} ${operator} ${n2} = ${n1 * n2}`);
}
if(operator = "/"){
            console.log(`the answer of ${n1} ${operator} ${n2} = ${n1/ n2}`);
} else {
    console.log("please select correct operator");
}
export{};
