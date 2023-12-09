'use strict';

function calculateProbability() {
    var DiceNumber = parseInt(document.getElementById("DiceNumber").value);
    var sumOfEyes = parseInt(document.getElementById("sumOfEyes").value);
    if (!isNaN(DiceNumber) && !isNaN(sumOfEyes) && DiceNumber > 0 && sumOfEyes > DiceNumber && sumOfEyes <= DiceNumber * 6) {
        var successfulOutcomes = 0;
        var totalOutcomes = 10000;
        for (var i = 0; i < totalOutcomes; i++) {
            var sum = 0;
            for (var j = 0; j < DiceNumber; j++) {
                sum += Math.floor(Math.random() * 6) + 1;
            }
            if (sum === sumOfEyes) {
                successfulOutcomes++;
            }
        }
        var probability = (successfulOutcomes / totalOutcomes * 100).toFixed(2);
        document.getElementById("result").innerHTML = `Probability to get sum ${sumOfEyes} with ${DiceNumber} dice is ${probability}%`;
    } else {
        document.getElementById("result").innerHTML = "Invalid values.";
    }
}
