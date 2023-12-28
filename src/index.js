import "./style.css";
import { renderHeader } from "./header";
import { createMainElement } from "./mainElement";
import { renderHomePage } from "./home";
import { renderFooter } from "./footer";
import { renderContactPage } from "./contact";
import { renderMenuPage } from "./menu";

import porkRamenImg from "./assets/ramen-images/pork-ramen.jpg";

renderHeader();
createMainElement();
// renderMenuPage();
// renderContactPage();
renderHomePage();
renderFooter();

// let menuItemImgChicken = document.querySelector("[alt='chicken-ramen-img'");
// menuItemImgChicken.src = chickenRamenImg;

// let menuItemPork = document.querySelector("[alt='pork-ramen-img'");
// menuItemPork.src = porkRamenImg;
/** TO DO
 * Add github icon hover animation
 * Rename HTML title in webpack config to "Restaurant Page" when complete
 * Add menu to renderTab function on navButton event listener
 * Rebrand to Ramen
 */
