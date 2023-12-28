import { renderContactPage } from "./contact";
import { renderHomePage } from "./home";
import { renderMenuPage } from "./menu";

const renderHeader = () => {
  // CREATE HEADER ELEMENTS
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const homeButton = document.createElement("button");
  const menuButton = document.createElement("button");
  const contactButton = document.createElement("button");

  // ADD ELEMENT CLASSES
  header.classList.add("header");
  homeButton.classList.add("nav__button", "nav__button--home-button");
  menuButton.classList.add("nav__button", "nav__button--menu-button");
  contactButton.classList.add("nav__button", "nav__button--contact-button");

  // ADD TEXT TO NAV BUTTONS
  homeButton.textContent = "Home";
  menuButton.textContent = "Menu";
  contactButton.textContent = "Contact";

  // APPEND ELEMENTS TO DOM
  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);
  header.appendChild(nav);
  document.body.appendChild(header);

  // APPEND NAV BUTTON EVENT LISTENER
  const navButtons = document.querySelectorAll(".nav__button");
  navButtons.forEach((navButton) => {
    navButton.addEventListener("click", (e) => {
      handleNavButtonClick(e, navButtons);
    });
  });
};

/*
  ----- NAV BUTTON CLICK HANDLER -----
*/
const handleNavButtonClick = (e, navButtons) => {
  let selectedTab = e.target.textContent;
  clearMainSection();
  resetNavButtonColors(navButtons);
  renderSelectedTab(selectedTab);
  // Render tab after resetting btn colors as active btn color is applied on page render function
};

/* 
  ----- NAV BUTTON CLICK HANDLER HELPER FUNCTIONS -----
*/

const clearMainSection = () => {
  const main = document.querySelector(".main");
  main.innerHTML = "";
};

const resetNavButtonColors = (navButtons) => {
  navButtons.forEach((navButton) => {
    if (navButton.classList.contains("active")) {
      navButton.classList.remove("active");
    }
  });
};

const renderSelectedTab = (tabToRender) => {
  if (tabToRender === "Contact") {
    renderContactPage();
    return;
  }
  if (tabToRender === "Home") {
    renderHomePage();
    return;
  }
  if (tabToRender === "Menu") {
    renderMenuPage();
    return;
  }
};

/* 
  ----- SET ACTIVE NAV BUTTON COLOR FUNCTIONS -----
*/

/**
 * Change the nav button background color from default to active
 * @param {*} navButtonName - "Home/Menu/Contact"
 */
const setActiveNavButton = (navButtonName) => {
  let navButton = findNavButtonFromName(navButtonName);
  navButton.classList.add("active");
};

const findNavButtonFromName = (navButtonName) => {
  if (navButtonName === "Home") {
    return document.querySelector(".nav__button--home-button");
  }
  if (navButtonName === "Menu") {
    return document.querySelector(".nav__button--menu-button");
  }
  if (navButtonName === "Contact") {
    return document.querySelector(".nav__button--contact-button");
  }
};

export { renderHeader, setActiveNavButton };
