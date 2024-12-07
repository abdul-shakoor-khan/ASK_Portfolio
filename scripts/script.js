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
    <a href="${project.link}" class="portfolio-project">
          <div class="portfolio-img">
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

// Select the download button element using its class name '.js-about-btn'
const downloadButton = document.querySelector('.js-about-btn');

// Add an event listener to the button so that when it's clicked, the code inside the function is executed
downloadButton.addEventListener('click', () => {
  // Create an array of file objects with 'name' (filename) and 'url' (file path or URL) properties
  const files = [
    {
      name: 'my-resume.pdf',
      url: 'images/pdf/my-resume.pdf',
    }
  ]

  // Loop through the 'files' array and create a download link for each file
  files.forEach(file => {
    // Create a new anchor (<a>) element dynamically
    const anchor = document.createElement('a');
    // Set the href attribute of the anchor to the file's URL (where the file is located)
    anchor.href = file.url;
    // Set the download attribute to specify the filename when the file is saved
    anchor.download = file.name;
    // Programmatically trigger a click on the anchor to start the download
    anchor.click();
  });
});

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
