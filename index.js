console.log("Hello world");

const num1 = 10;
const num2 = 5;

const divide = (num1, num2) => num1 / num2;
const multiply = (num1, num2) => num1 * num2;
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const sum1 = () => console.log(divide(10, 5));
const mult = (num1, num2) => (multiply(num1,num2));
const sum3 = () => console.log(add(3,5));
const sum4 = () => console.log(subtract(9,5));
console.log("divide: " + sum1(), mult(), sum3(), sum4());

function func(){
    var m = document.getElementById("num1").value;
    var u = document.getElementById("num2").value;
    // document.getElementById("output").innerHTML = mult(m, u);
    var result = document.createElement("P");
    result.innerHTML = mult(m, u);
    document.body.appendChild(result);
    document.getElementById("response").innerHTML = "you've just done a calculation";
    
}



