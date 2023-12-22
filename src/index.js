import "./style.css";
import saladImg from "./assets/salad-hero-img.png";

let saladHeroImg = document.createElement("img");
saladHeroImg.src = saladImg;
saladHeroImg.classList.add("home__hero-img");

let homeContainer = document.querySelector(".home-container");
homeContainer.append(saladHeroImg);
