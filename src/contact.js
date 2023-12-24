export const renderContactPage = () => {
  // GET MAIN SECTION
  const main = document.querySelector(".main");

  // CREATE CONTACT PAGE ELEMENTS
  const contactContainer = document.createElement("div");
  const contactInfoSection = createContactInfo();
  const contactFormSection = createContactForm();

  // ADD ELEMENT CLASS
  contactContainer.classList.add("contact-container");

  // APPEND ELEMENTS TO DOM
  contactContainer.appendChild(contactInfoSection);
  contactContainer.appendChild(contactFormSection);
  main.appendChild(contactContainer);
};

/* 
  ----- CREATE CONTACT-INFO SECTION -----
*/

const createContactInfo = () => {
  // CREATE SECTION ELEMENTS
  const contactInfoSection = document.createElement("div");
  const phoneNumberSection = createContactInfoSection(
    "Phone Number",
    "(555)-555-5555",
    "pri"
  );
  const emailSection = createContactInfoSection(
    "Email Address",
    "saladpack@gmail.com",
    "pri"
  );
  const locationSection = createContactInfoSection(
    "Location",
    "4774 Haymond Rocks Road, Rogue River, Oregon",
    "sec"
  );
  const openingHoursSection = createContactInfoSection(
    "Opening Hours",
    "8AM - 9PM",
    "sec"
  );

  // ADD ELEMENT CLASSES
  contactInfoSection.classList.add("contact-container__contact-info");

  // APPEND ELEMENTS TO DOM
  contactInfoSection.appendChild(phoneNumberSection);
  contactInfoSection.appendChild(emailSection);
  contactInfoSection.appendChild(locationSection);
  contactInfoSection.appendChild(openingHoursSection);

  return contactInfoSection;
};

/**
 *Creates an instance of a section of the contact info block
 * @param {*} labelText
 * The text for the label in the section
 * @param {*} detailText
 * The text for the section detail
 * @param {*} detailTextColor
 * The color of the detail text ('pri' - for primary color), ('sec' - for default color)
 */
const createContactInfoSection = (labelText, detailText, detailTextColor) => {
  // CREATE SECTION ELEMENTS
  const section = document.createElement("div");
  const label = document.createElement("div");
  const detail = document.createElement("div");

  // ADD ELEMENT CLASSES
  section.classList.add("contact-info__section");
  label.classList.add("contact-info-section__label");
  detail.classList.add("contact-info-section__details");
  if (detailTextColor === "pri") {
    detail.classList.add("contact-info-section__details--pri-color");
  }

  // ADD TEXT TO LABEL AND DETAIL
  label.textContent = labelText;
  detail.textContent = detailText;

  // APPEND LABEL AND DETAIL TO SECTION
  section.appendChild(label);
  section.appendChild(detail);

  return section;
};

/* ----- END CONTACT-INFO SECTION ----- */

/* 
  ----- CREATE CONTACT FORM SECTION -----
*/

const createContactForm = () => {
  // CREATE SECTION ELEMENTS
  const contactForm = document.createElement("form");
  const formTitle = document.createElement("h1");
  const emailInput = document.createElement("input");
  const message = document.createElement("textarea");
  const submitButton = document.createElement("button");

  // ADD ELEMENT CLASSES
  contactForm.classList.add("contact-form");
  formTitle.classList.add("form__title");
  emailInput.classList.add("form__input", "form__input--email");
  message.classList.add("form__input", "form__input--message");
  submitButton.classList.add("form__submit-button");

  // SET FORM ACTION
  contactForm.action = "javascript:void(0);";

  // SET EMAIL INPUT ATTRIBUTES
  emailInput.type = "text";
  emailInput.placeholder = "Email Address";

  // ADD FORM TITLE TEXT
  formTitle.textContent = "Send us a message";

  // SET MESSAGE INPUT ATTRIBUTES
  message.name = "form_message";
  message.cols = "30";
  message.rows = "8";
  message.placeholder = "How can we help?";

  // SET SUBMIT BUTTON ATTRIBUTES AND TEXT
  submitButton.type = "submit";
  submitButton.textContent = "Send";

  // APPEND ELEMENTS TO DOM
  contactForm.appendChild(formTitle);
  contactForm.appendChild(emailInput);
  contactForm.appendChild(message);
  contactForm.appendChild(submitButton);

  return contactForm;
};

/* ----- END CONTACT FORM SECTION ----- */
