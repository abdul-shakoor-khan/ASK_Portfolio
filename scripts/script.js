// Import the 'projects' array from the projects.js file.
import { projects } from "./projects.js";

// Wait for the DOM to be fully loaded before executing any scripts.
document.addEventListener("DOMContentLoaded", () => {
  // Here we Call the function to display the portfolio projects.
  portfolioProjects();
});

// Empty string to store the HTML content of the projects.
let portfolioProjectsHTML = "";

// Function to loop through each project in the 'projects' array and generate HTML.

function portfolioProjects() {
  // Iterate over each project object in the 'projects' array.
  projects.forEach(project => {

    // HTML structure for each project using template literals and project data.
    portfolioProjectsHTML += `
    <a href="#" class="portfolio-project">
          <div class="port-div">
            <img src="${project.image}" alt="${project.caption_heading}">
          </div>
          <div class="portfolio-caption">
            <i class="ri-shield-check-fill caption-icon"></i>
            <p class="portfolio-caption-heading">${project.caption_heading}</p>
            <p class="portfolio-caption-description">
              ${project.caption_description}
            </p>
          </div>
        </a>
    `
  });
  // HTML content into the element with the class 'js-portfolio-projects'.
  document.querySelector(".js-portfolio-projects").innerHTML = portfolioProjectsHTML;
}

// Swiper carousel for portfolio images.
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});