'use strict';

document.addEventListener('DOMContentLoaded', function () {

    var triggerElement = document.getElementById('trigger');
    var targetImage = document.getElementById('target');

    var originalImageSrc = 'img/picA.jpg';
    triggerElement.addEventListener('mouseover', function () {
        targetImage.src = 'img/picB.jpg';
    });
    triggerElement.addEventListener('mouseout', function () {
        targetImage.src = originalImageSrc;
    });
});

