'use strict';

document.addEventListener('DOMContentLoaded', function () {
    var listItem1 = document.createElement('li');
    listItem1.textContent = 'First item';

    var listItem2 = document.createElement('li');
    listItem2.textContent = 'Second item';

    listItem2.classList.add('my-item');
    var listItem3 = document.createElement('li');

    listItem3.textContent = 'Third item';
    var targetElement = document.getElementById('target');

    targetElement.appendChild(listItem1);
    targetElement.appendChild(listItem2);
    targetElement.appendChild(listItem3);
});
