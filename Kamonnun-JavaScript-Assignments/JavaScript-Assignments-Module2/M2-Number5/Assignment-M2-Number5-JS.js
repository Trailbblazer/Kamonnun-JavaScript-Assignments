'use strict';
function collectNumbers() {
    var numbers = [];
    var userInput;

    while (true) {
        userInput = parseFloat(prompt("Enter the number (If you want to finish, enter 0):"));

        if (userInput === null) {
            alert("Operation cancelled.");
            break;
        } else if (!isNaN(userInput)) {
            if (numbers.includes(userInput)) {
                alert("You've already entered this number. Operation stopped.");
                break;
            }
            numbers.push(userInput);
        } else {
            alert("Invalid input.");
        }
    }

    numbers.sort((a, b) => a - b);
    console.log("All the numbers in ascending order:", numbers);
}