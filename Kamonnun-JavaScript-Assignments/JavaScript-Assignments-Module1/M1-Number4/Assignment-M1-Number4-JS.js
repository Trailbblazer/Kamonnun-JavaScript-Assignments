'use strict';

function sortStudent() {
    var studentName = document.getElementById("studentName").value.trim();

    if (!studentName) {
        document.getElementById("sortingResult").innerHTML = "Please enter a valid name.";
        return;
    }

    var randomNumber = Math.floor(Math.random() * 4) + 1;
    var house;

    if (randomNumber >= 1 && randomNumber <= 4) {
        switch (randomNumber) {
            case 1:
                house = "Gryffindor";
                break;
            case 2:
                house = "Slytherin";
                break;
            case 3:
                house = "Hufflepuff";
                break;
            case 4:
                house = "Ravenclaw";
                break;
        }
        document.getElementById("sortingResult").innerHTML = studentName + ", you are " + house + ".";
    } else {
        document.getElementById("sortingResult").innerHTML = "An error occurred in sorting. Please try again.";
    }
}














