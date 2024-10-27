/*
    Author: Kane Miller
    Date: 10-21-2024
    File: scripts.js
    Version: 2.0
    Description: This script manages project navigation and form validation for the portfolio webpage.
                 It allows cycling through projects using navigation buttons and validates the contact form.
*/

// Project navigation script
let currentProjectIndex = 1;
const totalProjects = 9;

function showProject(index) {
    // Hide all projects and remove the 'active-project' class from each title
    for (let i = 1; i <= totalProjects; i++) {
        document.getElementById('project' + i).style.display = 'none';
        document.querySelector('#projects-list li:nth-child(' + i + ')').classList.remove('active-project');
    }
    // Show the selected project and highlight its title
    document.getElementById('project' + index).style.display = 'block';
    document.querySelector('#projects-list li:nth-child(' + index + ')').classList.add('active-project');
    currentProjectIndex = index;
}

// Add event listeners for the navigation buttons
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

// Function to switch projects when a title is clicked
function switchProject(index) {
    showProject(index);
}

// Initialize the first project view when the page loads
window.onload = function() {
    showProject(currentProjectIndex);
};

// Form validation script for the contact form
const form = document.querySelector(".contact-form");
form.addEventListener("submit", function(event) {
    const email = document.getElementById("email").value;
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
});
