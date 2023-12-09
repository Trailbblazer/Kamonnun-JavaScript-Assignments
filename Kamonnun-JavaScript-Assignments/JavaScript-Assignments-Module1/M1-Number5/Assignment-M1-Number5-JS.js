'use strict';

function checkLeapYear() {
    var year = parseInt(document.getElementById("year").value);
    var LeapYear = false;
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        LeapYear = true;
    }
    document.getElementById("result").innerHTML = LeapYear ? year + " is a leap year" : year + " is not a leap year.";
}
