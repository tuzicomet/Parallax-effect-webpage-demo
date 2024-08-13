/*
    header-menu.js - Script for handling the header menu functionality on the Botanica website.

    This script includes the logic for toggling the menu bar and managing the overlay.

    Author: Leonard Lau
    Last Updated: 30/12/2023
*/

// Get the menu icon, menu bar, and overlay elements
const menuIcon = document.querySelector('.menu-icon');
const menuBar = document.querySelector('.menu-bar');
const overlay = document.querySelector('.overlay');

// Toggle the 'active' class on the menu bar when the icon is clicked
menuIcon.addEventListener('click', () => {
    // Toggle the 'active' class on the menu bar for opening and closing the menu
    menuBar.classList.toggle('active');
    // Toggle the 'open' class on the overlay for a dimming effect when the menu is open
    overlay.classList.toggle('open');
});

// Add an event listener to close the menu when clicking outside the menu bar
document.addEventListener('click', (event) => {
    // Check if the click is outside the menu bar and menu icon
    if (!menuBar.contains(event.target) && !menuIcon.contains(event.target)) {
        // Remove the 'active' class from the menu bar to close the menu
        menuBar.classList.remove('active');
        // Remove the 'open' class from the overlay to remove the dimming effect
        overlay.classList.remove('open');
    }
});