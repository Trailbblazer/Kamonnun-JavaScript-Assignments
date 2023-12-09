'use strict';

document.addEventListener('DOMContentLoaded', function () {
    var calculationInput = document.getElementById('calculation');
    var startButton = document.getElementById('start');
    var resultParagraph = document.getElementById('result');

    startButton.addEventListener('click', function () {
        var userInput = calculationInput.value;
        var matches = userInput.match(/(-?\d+)\s*([-+*/])\s*(-?\d+)/);

        if (matches && matches.length === 4) {
            var num1 = parseInt(matches[1]);
            var operator = matches[2];
            var num2 = parseInt(matches[3]);

                        var result;
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 !== 0) {
                        result = num1 / num2;
                    } else {
                        result = 'Cannot divide by zero';
                    }
                    break;
                default:
                    result = 'Invalid operator';
            }

            resultParagraph.textContent = 'Result: ' + result;
        } else {
            resultParagraph.textContent = 'Invalid input';
        }
    });
});