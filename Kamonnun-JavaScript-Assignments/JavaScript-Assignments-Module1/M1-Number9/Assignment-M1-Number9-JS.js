'use strict';

function checkPrimeNumber() {
    var userInput = document.getElementById("userInput").value;
    var parsedInput = parseFloat(userInput);

    if (!isNaN(parsedInput) && Number.isInteger(parsedInput) && parsedInput > 1) {
        var isPrime = true;
        for (var i = 2; i <= Math.sqrt(parsedInput); i++) {
            if (parsedInput % i === 0) {
                isPrime = false;
                break;
            }
        }
        document.getElementById("result").innerHTML = isPrime ? parsedInput + " is a prime number." : parsedInput + " is not a prime number.";
    } else {
        document.getElementById("result").innerHTML = "Invalid input. Please enter a positive integer that is greater than 1.";
    }
}

