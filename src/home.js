import saladImg from "./assets/salad-hero-img.png";

const createHomePage = () => {
  // CREATE HOME PAGE ELEMENTS
  const main = document.createElement("main");
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
  main.classList.add("main");
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
  titleWordSalad.textContent = "Salad";
  titleWordPack.textContent = "Pack";
  homeInfoContainerCaption.textContent = "Your top spot for healthy salads";
  homeInfoContainerContent.textContent =
    "Explore our selection of fresh greens, carefully picked ingredients, and delicious dressings.";
  viewMenuButton.textContent = "Check our Menu";

  // ADD HERO IMG SOURCE
  saladHeroImg.src = saladImg;

  // APPEND <SPAN> ELEMENTS TO TITLE - Individual words will allow different word colors
  homeInfoContainerTitle.appendChild(titleWordSalad, titleWordPack);

  // APPEND ELEMENTS TO DOM
  main.appendChild(homeContainer);
  homeContainer.appendChild(homeInfoContainer);
  homeContainer.appendChild(saladHeroImg);
  homeInfoContainer.appendChild(homeInfoContainerTitle);
  homeInfoContainer.appendChild(homeInfoContainerCaption);
  homeInfoContainer.appendChild(homeInfoContainerContent);
  homeInfoContainer.appendChild(viewMenuButton);
  document.body.appendChild(main);
};

export { createHomePage };
