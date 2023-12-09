'use strict';

const names = ['John', 'Paul', 'Jones'];

document.addEventListener('DOMContentLoaded', function () {
    var targetElement = document.getElementById('target');
    for (var i = 0; i < names.length; i++) {
        targetElement.innerHTML += '<li>' + names[i] + '</li>';
    }
});