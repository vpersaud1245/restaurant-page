import gitHubLogo from "./assets/github-mark.svg";
import gitHubLogoHover from "./assets/github-mark-hover.svg";

const renderFooter = () => {
  // CREATE FOOTER ELEMENTS
  const footer = document.createElement("footer");
  const gitHubLink = document.createElement("a");
  const gitHubLogoImg = document.createElement("img");
  const gitHubLogoImgHover = document.createElement("img");

  // ADD ELEMENT CLASSES
  footer.classList.add("footer");
  gitHubLink.classList.add("footer__git-hub-link");
  gitHubLogoImg.classList.add(
    "git-hub-link__img",
    "git-hub-link__img--non-hover"
  );
  gitHubLogoImgHover.classList.add(
    "git-hub-link__img",
    "git-hub-link__img--hover"
  );

  // LINK GITHUB PROFILE TO ANCHOR ELEMENT
  gitHubLink.href = "https://github.com/vpersaud1245";
  gitHubLink.target = "_blank";

  // ADD GITHUB LOGO AND THE LOGO HOVER IMG SOURCES TO IMG ELEMENTS
  gitHubLogoImg.src = gitHubLogo;
  gitHubLogoImgHover.src = gitHubLogoHover;

  // APPEND GITHUB LOGOS TO LINK ELEMENT
  gitHubLink.append(gitHubLogoImg);
  gitHubLink.append(gitHubLogoImgHover);

  // APPEND LINK TO FOOTER
  // & FOOTER TO BODY
  footer.append(gitHubLink);
  document.body.append(footer);

  // ADD HOVER EVENT LISTNER TO GITHUB LINK
  gitHubLink.onmouseover = (e) => {
    handleLinkHover(e, gitHubLogoImg, gitHubLogoImgHover);
  };
};

/*
  ----- EVENT LISTENER FUNCTIONS -----
*/
const handleLinkHover = (e, logoImg, logoHoverImg) => {
  // MAKE HOVER IMG SHOW AND MOVE UP
  logoImg.style.opacity = "0";
  logoHoverImg.style.transform = "translateY(-5px)";

  // ADD EVENT LISTENER TO FIRE WHEN HOVER IS COMPLETE
  e.target.onmouseleave = (e) => {
    logoHoverImg.style.transform = "translateY(0)";
    setTimeout(() => {
      logoImg.style.opacity = "100";
    }, 200);
  };
};

export { renderFooter };
