import "./style.css";
import { renderHeader } from "./header";
import { createMainElement } from "./mainElement";
import { renderHomePage } from "./home";
import { renderFooter } from "./footer";
import { renderContactPage } from "./contact";

renderHeader();
createMainElement();
// renderContactPage();
renderHomePage();
renderFooter();

/** TO DO
 * Add github icon hover animation
 * Add function to header.js to remove .current class from nav buttons
 * Rename HTML title in webpack config to "Restaurant Page"
 * Add menu to renderTab function on navButton event listener
 */
