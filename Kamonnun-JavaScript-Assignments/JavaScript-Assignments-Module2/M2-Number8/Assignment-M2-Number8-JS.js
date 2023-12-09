/* JavaScript Assignments Module 2 */

/* Number 8 */

'use strict';

function concat(stringsArray) {
    var results = '';
    for (var i = 0; i < stringsArray.length; i++) {
        results += stringsArray[i];
    }
    return results;
}

var namesArray = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
var concatenatedString = concat(namesArray);
document.getElementById('results').textContent = 'Concatenated String: ' + concatenatedString;
