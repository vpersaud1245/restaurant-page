import "./style.css";
import { renderHeader } from "./header";
import { createMainElement } from "./mainElement";
import { renderHomePage } from "./home";
import { renderFooter } from "./footer";

renderHeader();
createMainElement();
renderHomePage();
renderFooter();

/** TO DO
 * Add github icon hover animation
 * Rename HTML title in webpack config to "Restaurant Page" when complete
 * Add fade out to page
 */
