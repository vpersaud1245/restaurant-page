const renderHeader = () => {
  // CREATE HEADER ELEMENTS
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const homeButton = document.createElement("button");
  const menuButton = document.createElement("button");
  const contactButton = document.createElement("button");

  // ADD ELEMENT CLASSES
  header.classList.add("header");
  homeButton.classList.add(
    "nav__button",
    "nav__button--home-button",
    "current"
  );
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
};

// ADD NAV BUTTON EVENT LISTNERS

const navButtons = document.querySelectorAll(".nav__button");

navButtons.forEach((navButton) => {
  navButton.addEventListener("click", switchPageTab);
});

// NAV BUTTON CLICK EVENT HELPER FUNCTIONS

/*
switchPageTab(e) {
  let tabToRender = e.target.textContent;
  clear main tab 

}

renderSelectedTab(tabToRender) {
  if contact page {
    render contact page 
    return
  }

  if home page {
    render home page
    return
  }

  if menu page {
    render menu page
    return
  }
}
*/

function clearMainSection() {
  const main = document.querySelector(".main");
  main.innerHTML = "";
}

export { renderHeader, clearMainSection };
