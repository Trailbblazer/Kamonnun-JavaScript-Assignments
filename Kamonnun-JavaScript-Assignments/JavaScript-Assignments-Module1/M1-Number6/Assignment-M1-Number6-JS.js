'use strict';

function calculatesqrt() {
    var shouldCalculate = confirm("Should I calculate the square root?");
    if (shouldCalculate) {
        var input = prompt("Enter a number:");

        if (input === null) {
            document.getElementById("result").innerHTML = "The square root is not calculated.";
        } else {
            var number = parseFloat(input);
            if (!isNaN(number)) {
                if (number >= 0) {
                    var squareRoot = Math.sqrt(number);
                    document.getElementById("result").innerHTML = "The square root is: " + squareRoot;
                } else {
                    document.getElementById("result").innerHTML = "Cannot calculate the square root of a negative number.";
                }
            } else {
                document.getElementById("result").innerHTML = "Invalid input. Please enter a valid number.";
            }
        }
    } else {
        document.getElementById("result").innerHTML = "The square root is not calculated.";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    calculatesqrt();
});
