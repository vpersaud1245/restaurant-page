import gitHubLogo from "./assets/github-mark.svg";
import gitHubLogoHover from "./assets/github-mark-hover.svg";

const createFooter = () => {
  // CREATE FOOTER ELEMENTS
  const footer = document.createElement("footer");
  const gitHubLink = document.createElement("a");
  const gitHubLogoImg = document.createElement("img");
  const gitHubLogoImgHover = document.createElement("img");

  // ADD ELEMENT CLASSES
  footer.classList.add("footer");
  gitHubLink.classList.add("footer__git-hub-link");
  gitHubLogoImg.classList.add("git-hub-link__img");
  gitHubLogoImgHover.classList.add("git-hub-link__img--hover");

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
};

export { createFooter };
