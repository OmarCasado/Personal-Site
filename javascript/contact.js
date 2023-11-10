"use strict";

document.addEventListener('DOMContentLoaded', function() {
    var nameInput = document.getElementById('name');
    var sectionTitle = document.querySelector('.section-title');

    nameInput.addEventListener('input', function() {
    var name = nameInput.value;
    sectionTitle.textContent = "Hi " + name + "!";
    });
});