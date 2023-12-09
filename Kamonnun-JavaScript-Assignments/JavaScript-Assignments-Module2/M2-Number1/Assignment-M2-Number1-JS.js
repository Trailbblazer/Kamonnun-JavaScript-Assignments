'use strict';

var numbers = [];
var count = 0;

while (count < 5) {
    var userInput = parseFloat(prompt(`Enter number ${count + 1}:`));

    if (!isNaN(userInput)) {
        numbers.push(userInput);
        count++;
    } else {
        console.log("Invalid input.");
    }
}
console.log("Numbers in reverse order:");
for (var i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}
