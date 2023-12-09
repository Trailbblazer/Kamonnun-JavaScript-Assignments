'use strict';

function rollDice() {
    var Rolls = parseInt(document.getElementById("Rolls").value);
    if (!isNaN(Rolls) && Rolls > 0) {
        var sum = 0;
        for (var i = 0; i < Rolls; i++) {
            var rollResult = Math.floor(Math.random() * 6) + 1;
            console.log("Roll #" + (i + 1) + ": " + rollResult);
            sum += rollResult;
        }
        document.getElementById("result").innerHTML = "Sum of dice rolls: " + sum;
    } else {
        document.getElementById("result").innerHTML = "Invalid number. Please enter a valid number of dice rolls.";
    }
}
