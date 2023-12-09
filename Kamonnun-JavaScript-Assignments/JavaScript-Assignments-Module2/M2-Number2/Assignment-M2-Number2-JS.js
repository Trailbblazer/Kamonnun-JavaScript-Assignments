'use strict';

function collectParticipants() {
    var ParticipantsNo = parseInt(document.getElementById("ParticipantsNo").value);

    if (!isNaN(ParticipantsNo) && ParticipantsNo > 0) {
        var participantNames = [];

        for (var i = 0; i < ParticipantsNo; i++) {
            var name = prompt(`Enter the name for participant ${i + 1}:`);
            participantNames.push(name);
        }

        participantNames.sort();

        displayParticipantNames(participantNames);
    } else {
        alert("Invalid input. Please enter a valid number of participants.");
    }
}

function displayParticipantNames(names) {
    var olElement = document.getElementById("participantLists");
    olElement.innerHTML = "";

    names.forEach(function(name) {
        var liElement = document.createElement("li");
        liElement.textContent = name;
        liElement.classList.add("participant-item"); // Add a class to the list item
        olElement.appendChild(liElement);
    });
}

