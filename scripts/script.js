import { projects } from "./projects.js";

document.addEventListener("DOMContentLoaded", () => {
  portfolioProjects();
});

let portfolioProjectsHTML = "";
function portfolioProjects() {
  projects.forEach(project => {

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
  document.querySelector(".js-portfolio-projects").innerHTML = portfolioProjectsHTML;
}



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