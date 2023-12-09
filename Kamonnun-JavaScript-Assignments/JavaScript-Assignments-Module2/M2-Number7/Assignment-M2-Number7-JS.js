/* JavaScript Assignments Module 2 */

/* Number 7 */

'use strict';

function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function mainProgram() {
    var sides = parseInt(prompt("Enter the number of sides on the dice:"));
    if (isNaN(sides) || sides <= 0) {
        alert("Invalid input. Please enter a valid number of sides.");
        return;
    }
    var rollResults = document.getElementById("rollResults");
    var results;
    while ((results = rollDice(sides)) !== sides) {
        var liElement = document.createElement("li");
        liElement.textContent = "Roll results: " + results;
        rollResults.appendChild(liElement);
    }
    var finalResults = document.createElement("li");
    finalResults.textContent = "Roll results: " + sides;
    rollResults.appendChild(finalResults);
}

mainProgram();
