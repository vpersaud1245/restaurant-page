import chickenRamenImg from "./assets/ramen-images/chicken-ramen.jpg";
import porkRamenImg from "./assets/ramen-images/pork-ramen.jpg";
import seafoodRamenImg from "./assets/ramen-images/seafood-ramen.jpg";
import shoyuRamenImg from "./assets/ramen-images/shoyu-ramen.jpg";
import soyRamenImg from "./assets/ramen-images/soy-ramen.jpg";
import thaiBasilImg from "./assets/ramen-images/thai-basil-ramen.jpg";
import { setActiveNavButton } from "./header";

export const renderMenuPage = () => {
  // GET MAIN SECTION
  const mainElement = document.querySelector(".main");

  // CREATE MENU ELEMENT
  const menu = document.createElement("div");

  // ADD ELEMENT CLASS
  menu.classList.add("menu");

  // CREATE MENU ITEM ELEMENTS
  let menuItems = [
    createMenuItem(
      "Chicken Ramen",
      "380",
      "9.99",
      chickenRamenImg,
      "chicken-ramen-img"
    ),
    createMenuItem(
      "Pork Ramen",
      "560",
      "10.50",
      porkRamenImg,
      "pork-ramen-img"
    ),
    createMenuItem(
      "Seafood Ramen",
      "430",
      "14.99",
      seafoodRamenImg,
      "seafood-ramen-img"
    ),
    createMenuItem(
      "Shoyu Ramen",
      "295",
      "8.99",
      shoyuRamenImg,
      "shoyu-ramen-img"
    ),
    createMenuItem("Soy Ramen", "300", "9.99", soyRamenImg, "soy-ramen-img"),
    createMenuItem(
      "Thai Basil Ramen",
      "560",
      "15.99",
      thaiBasilImg,
      "thai-basil-ramen-img"
    ),
  ];

  // APPEND ELEMENTS TO DOM
  menuItems.forEach((item) => {
    menu.appendChild(item);
  });
  mainElement.appendChild(menu);

  // SET MENU NAV BUTTON TO ACTIVE
  setActiveNavButton("Menu");
};

const createMenuItem = (
  itemName,
  itemCalories,
  itemPrice,
  itemImgSrc,
  itemImgAlt
) => {
  // CREATE HTML ELEMENTS
  const menuItem = document.createElement("div");
  const menuItemImgBorder = document.createElement("div");
  const menuItemImg = document.createElement("img");
  const menuItemInfo = document.createElement("div");
  const menuItemName = document.createElement("p");
  const menuItemCalories = document.createElement("p");
  const menuItemPrice = document.createElement("p");

  // ADD ELEMENT CLASSES
  menuItem.classList.add("menu__item");
  menuItemImgBorder.classList.add("menu-item__img-border");
  menuItemImg.classList.add("menu-item__item-img");
  menuItemInfo.classList.add("menu-item__info");
  menuItemName.classList.add("menu-item-info__item-name");
  menuItemCalories.classList.add("menu-item-info__item-calories");
  menuItemPrice.classList.add("menu-item-info__item-price");

  // ADD MENU ITEM IMG SRC AND ALT
  menuItemImg.src = itemImgSrc;
  menuItemImg.alt = itemImgAlt;

  // ADD MENU ITEM INFO (name, calories, price)
  menuItemName.textContent = itemName;
  menuItemCalories.textContent = `${itemCalories} calories`;
  menuItemPrice.textContent = `$${itemPrice}`;

  //APPEND ELEMENTS TO DOM
  menuItemImgBorder.appendChild(menuItemImg);
  menuItemInfo.appendChild(menuItemName);
  menuItemInfo.appendChild(menuItemCalories);
  menuItemInfo.appendChild(menuItemPrice);
  menuItem.appendChild(menuItemImgBorder);
  menuItem.appendChild(menuItemInfo);

  return menuItem;
};
