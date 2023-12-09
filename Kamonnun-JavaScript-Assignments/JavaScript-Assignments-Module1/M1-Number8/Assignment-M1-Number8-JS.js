function generateLeapYearList() {
    var startYear = parseInt(document.getElementById("startYear").value);
    var endYear = parseInt(document.getElementById("endYear").value);

    var ulElement = document.getElementById("leapYearList");
    ulElement.innerHTML = "";

    if (!isNaN(startYear) && !isNaN(endYear) && startYear <= endYear) {
        var leapYears = [];
        for (var year = startYear; year <= endYear; year++) {
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                leapYears.push(year);
            }
        }

        if (leapYears.length > 0) {
            displayLeapYearList(leapYears);
        } else {
            ulElement.innerHTML = "<li>No leap years in the given range.</li>";
        }
    } else {
        ulElement.innerHTML = "<li>Invalid input. Please enter valid start and end years.</li>";
    }
}

function displayLeapYearList(leapYears) {
    var ulElement = document.getElementById("leapYearList");
    leapYears.forEach(function (year) {
        var liElement = document.createElement("li");
        liElement.textContent = year;
        ulElement.appendChild(liElement);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    generateLeapYearList();
});

