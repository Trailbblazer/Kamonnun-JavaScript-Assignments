/* JavaScript Assignments Module 2 */

/* Number 10 */

'use strict';

function getCandidates() {
    var numberCandidates = parseInt(prompt("Enter the number of candidates:"));

    if (isNaN(numberCandidates) || numberCandidates <= 0) {
        alert("Invalid input. Please enter a valid number of candidates.");
        return getCandidates();
    }
    return numberCandidates;
}

function getCandidateNames(numberCandidates) {
    var candidates = [];
    for (var i = 1; i <= numberCandidates; i++) {
        var candidateName = prompt("Enter name for candidate " + i + ":");
        candidates.push({ name: candidateName, votes: 0 });
    }
    return candidates;
}

function getNumberVoters() {
    var numberVoters = parseInt(prompt("Enter the number of voters:"));

    if (isNaN(numberVoters) || numberVoters <= 0) {
        alert("Invalid input. Please enter a valid number of voters.");
        return getNumberVoters();
    }
    return numberVoters;
}

function conductVoting(candidates, numberVoters) {
    for (var i = 0; i < numberVoters; i++) {
        var vote = prompt("Voter " + (i + 1) + ": Enter the name of candidate you want to vote for (leave empty for no vote):");
        var candidate = candidates.find(candidate => candidate.name === vote);
        if (candidate) {
            candidate.votes++;
        }
    }
}

function announceResults(candidates) {
    candidates.sort((a, b) => b.votes - a.votes);
    console.log("The winner is " + candidates[0].name + " with " + candidates[0].votes + " votes.");
    console.log("Results:");
    candidates.forEach(candidate => {
        console.log(candidate.name + ": " + candidate.votes + " votes");
    });
}

var numberCandidates = getCandidates();
var candidateNames = getCandidateNames(numberCandidates);
var numberVoters = getNumberVoters();

conductVoting(candidateNames, numberVoters);
announceResults(candidateNames);
