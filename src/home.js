import ramenImg from "./assets/ramen-hero-img.svg";
import {
  setActiveNavButton,
  clearMainSection,
  resetNavButtonColors,
} from "./header";
import { renderMenuPage } from "./menu";

const renderHomePage = () => {
  // GET MAIN SECTION
  const main = document.querySelector(".main");

  // CREATE HOME PAGE ELEMENTS
  const homeContainer = document.createElement("div");
  const homeInfoContainer = document.createElement("div");
  const homeInfoContainerTitle = document.createElement("h1");
  const titleWordSalad = document.createElement("span");
  const titleWordPack = document.createElement("span");
  const homeInfoContainerCaption = document.createElement("h3");
  const homeInfoContainerContent = document.createElement("p");
  const viewMenuButton = document.createElement("button");
  const saladHeroImg = document.createElement("img");

  // ADD ELEMENT CLASSES
  homeContainer.classList.add("home-container");
  homeInfoContainer.classList.add("home__info-container");
  homeInfoContainerTitle.classList.add("home-info-container__title");
  titleWordSalad.classList.add("home-info-container__title--salad");
  titleWordPack.classList.add("home-info-container__title--pack");
  homeInfoContainerCaption.classList.add("home-info-container__caption");
  homeInfoContainerContent.classList.add("home-info-container__content");
  viewMenuButton.classList.add("home-info-container__view-menu-button");
  saladHeroImg.classList.add("home__hero-img");

  // ADD TEXT CONTENT TO ELEMENTS
  titleWordSalad.textContent = "Ramen";
  titleWordPack.textContent = "Pack";
  homeInfoContainerCaption.textContent = "Your top spot for healthy salads";
  homeInfoContainerContent.textContent =
    "Explore our selection of fresh greens, carefully picked ingredients, and delicious dressings.";
  viewMenuButton.textContent = "Check our Menu";

  // ADD HERO IMG SOURCE
  saladHeroImg.src = ramenImg;

  // APPEND <SPAN> ELEMENTS TO TITLE - Individual words will allow different word colors
  homeInfoContainerTitle.appendChild(titleWordSalad);
  homeInfoContainerTitle.appendChild(titleWordPack);

  // APPEND ELEMENTS TO DOM
  homeContainer.appendChild(homeInfoContainer);
  homeContainer.appendChild(saladHeroImg);
  homeInfoContainer.appendChild(homeInfoContainerTitle);
  homeInfoContainer.appendChild(homeInfoContainerCaption);
  homeInfoContainer.appendChild(homeInfoContainerContent);
  homeInfoContainer.appendChild(viewMenuButton);
  main.appendChild(homeContainer);

  // SET HOME NAV BUTTON TO ACTIVE
  setActiveNavButton("Home");

  // APPEND EVENT LISTENERS
  viewMenuButton.addEventListener("click", handleMenuButtonClick);
};

/*
  ----- EVENT LISTENER FUNCTIONS -----
*/
const handleMenuButtonClick = () => {
  const navButtons = document.querySelectorAll(".nav__button");
  clearMainSection();
  resetNavButtonColors(navButtons);
  renderMenuPage();
};

export { renderHomePage };
