'use strict';

document.addEventListener('DOMContentLoaded', function () {
    var inputNum1 = document.getElementById('num1');
    var inputNum2 = document.getElementById('num2');
    var operationSelect = document.getElementById('operation');
    var startButton = document.getElementById('start');
    var resultParagraph = document.getElementById('result');

    startButton.addEventListener('click', function () {
        var num1 = parseFloat(inputNum1.value);
        var num2 = parseFloat(inputNum2.value);
        var operation = operationSelect.value;
        var result;
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'sub':
                result = num1 - num2;
                break;
            case 'multi':
                result = num1 * num2;
                break;
            case 'div':

                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = 'Cannot divide by zero';
                }
                break;
            default:
                result = 'Invalid operation';
        }

        resultParagraph.textContent = 'Result: ' + result;
    });
});