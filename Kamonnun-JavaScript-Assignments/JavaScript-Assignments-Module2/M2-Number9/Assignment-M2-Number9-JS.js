/* JavaScript Assignments Module 2 */

/* Number 9 */

'use strict';

function even(numbersArray) {
    var evenArray = [];

    for (var i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] % 2 === 0) {
            evenArray.push(numbersArray[i]);
        }
    }
    return evenArray;
}
var numbersArray = [2, 7, 4];
var evenNumbersArray = even(numbersArray);
console.log('Original Numbers Array:', numbersArray);
console.log('Even Numbers Array:', evenNumbersArray);
