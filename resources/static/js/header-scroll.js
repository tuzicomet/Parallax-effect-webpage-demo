/*
    header-scroll.js - Script for handling header scrolling on the Botanica website.

    This script adds a "scrolled" class to the body element when the user scrolls down,
    allowing for styling changes in the CSS.

    Author: Leonard Lau
    Last Updated: 30/12/2023
*/

// Wait for the Document Object Model (DOM) content to fully load before executing the script
// NOTE: The DOM is a programming interface for web documents. By "DOM content," we are  
// referring to the content of the HTML document that the browser has loaded.
document.addEventListener("DOMContentLoaded", function () {
    // Get the element with the ID "header-top"
    var headerTop = document.getElementById("header-top");

    // Add a scroll event listener to the window
    window.addEventListener("scroll", function () {
        // Get the current scroll position of the window
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Check if the scroll position is greater than 0 (user scrolled down)
        if (scrollPosition > 0) {
            // Add the "scrolled" class to the body element
            // This class will be used for styling changes in the CSS
            document.body.classList.add("scrolled");
        } else {
            // Remove the "scrolled" class from the body element
            // This class is removed when the user scrolls back to the top
            document.body.classList.remove("scrolled");
        }
    });
});