/*
    Author: Kane Miller
    Date: 10-21-2024
    File: scripts.js
    Description: Script to cycle through projects on the portfolio webpage using a button and form validation for the contact form.
*/

// Project navigation script
let currentProjectIndex = 1;
const totalProjects = 9;

function showProject(index) {
    for (let i = 1; i <= totalProjects; i++) {
        document.getElementById('project' + i).style.display = 'none';
    }
    document.getElementById('project' + index).style.display = 'block';
    currentProjectIndex = index;
}

document.getElementById('nextProjectButton').addEventListener('click', function() {
    currentProjectIndex++;
    if (currentProjectIndex > totalProjects) {
        currentProjectIndex = 1;
    }
    showProject(currentProjectIndex);
});

document.getElementById('prevProjectButton').addEventListener('click', function() {
    currentProjectIndex--;
    if (currentProjectIndex < 1) {
        currentProjectIndex = totalProjects;
    }
    showProject(currentProjectIndex);
});

function switchProject(index) {
    showProject(index);
}

window.onload = function() {
    showProject(currentProjectIndex);
};

// Form validation script for the contact form
const form = document.querySelector(".contact-form");
form.addEventListener("submit", function (event) {
    const email = document.getElementById("email").value;
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
});
