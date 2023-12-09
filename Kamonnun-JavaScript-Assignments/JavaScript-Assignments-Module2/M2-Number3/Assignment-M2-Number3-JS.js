'use strict';

function collectDogNames() {
    var dogNames = [];
    var i = 0;

    while (i < 6) {
        var name = prompt(`Enter name for dog ${i + 1}:`);
        if (name !== null && name.trim() !== "") {
            dogNames.push(name.trim());
            i++;
        } else {
            alert("Invalid name.");
        }
    }

    dogNames.sort((a, b) => b.localeCompare(a));
    displayDogNames(dogNames);
}

function displayDogNames(names) {
    var ulElement = document.getElementById("dogLists");
    ulElement.innerHTML = "";

    names.forEach(name => {
        var liElement = document.createElement("li");
        liElement.textContent = name;
        ulElement.appendChild(liElement);
    });
}
