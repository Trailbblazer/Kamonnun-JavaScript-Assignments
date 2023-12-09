'use strict';

let num1 = prompt("Give me the first number: ");
let num2 = prompt("Give me the second number: ");
let num3 = prompt("Give me the third number: ");

num1 = parseFloat(num1);
num2 = parseFloat(num2);
num3 = parseFloat(num3);

if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {

    var sum = num1 + num2 + num3;
    var product = num1 * num2 * num3;
    var average = (num1 + num2 + num3) / 3;

    document.getElementById("target").innerHTML =
        "Sum: " + sum + "<br>" +
        "Product: " + product + "<br>" +
        "Average: " + average;
}
else {
    document.getElementById("target").innerHTML = "Invalid input.";
}