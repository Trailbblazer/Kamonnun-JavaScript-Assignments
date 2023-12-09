'use strict';

function collectNumbers() {
    var numbers = [];
    while (true) {
        var userInput = parseFloat(prompt("Enter the number (If you want to finish, enter 0 ):"));
        if (userInput === 0) {
            break;
        }
        if (!isNaN(userInput)) {
            numbers.push(userInput);
        } else {
            alert("Invalid input.");
        }
    }
    numbers.sort((a, b) => b - a);
    console.log("Numbers from largest to smallest:", numbers);
}
collectNumbers();

