/* JavaScript Assignments Module 2 */

/* Number 6 */

'use strict';

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function mainProgram() {
    var rollResults = document.getElementById("rollResults");
    var results;
    while ((results = rollDice()) !== 6) {
        var liElement = document.createElement("li");
        liElement.textContent = "Roll results: " + results;
        rollResults.appendChild(liElement);
    }

    var finalResultElement = document.createElement("li");
    finalResultElement.textContent = "Roll results: 6";
    rollResults.appendChild(finalResultElement);
}

mainProgram();

