export const renderContactPage = () => {
  // GET MAIN SECTION
  const main = document.querySelector(".main");

  // CREATE CONTACT PAGE ELEMENTS
  const contactContainer = document.createElement("div");
  const contactInfoSection = createContactInfoSection();
  const contactFormSection = createContactFormSection();

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

const createContactInfoSection = () => {
  // CREATE SECTION ELEMENTS
  const contactInfoSection = document.createElement("div");
  const phoneNumberSection = createPhoneNumberSection();
  const emailSection = createEmailSection();
  const locationSection = createLocationSection();
  const openingHoursSection = createOpeningHoursSection();

  // ADD ELEMENT CLASSES
  contactInfoSection.classList.add("contact-container__contact-info");

  // APPEND ELEMENTS TO DOM
  contactInfoSection.appendChild(phoneNumberSection);
  contactInfoSection.appendChild(emailSection);
  contactInfoSection.appendChild(locationSection);
  contactInfoSection.appendChild(openingHoursSection);

  return contactInfoSection;
};

const createPhoneNumberSection = () => {
  // CREATE SECTION ELEMENTS
  const phoneNumberSection = document.createElement("div");
  const phoneNumberLabel = document.createElement("div");
  const phoneNumberDetail = document.createElement("div");

  // ADD ELEMENT CLASSES
  phoneNumberSection.classList.add("contact-info__section");
  phoneNumberLabel.classList.add("contact-info-section__label");
  phoneNumberDetail.classList.add("contact-info-section__details--pri-color");

  // ADD PHONE NUMBER LABEL AND DETAIL TEXT
  phoneNumberLabel.textContent = "Phone Number";
  phoneNumberDetail.textContent = "(555)-555-5555";

  // APPEND ELEMENTS TO DOM
  phoneNumberSection.appendChild(phoneNumberLabel);
  phoneNumberSection.appendChild(phoneNumberDetail);

  return phoneNumberSection;
};

const createEmailSection = () => {
  // CREATE SECTION ELEMENTS
  const emailSection = document.createElement("div");
  const emailLabel = document.createElement("div");
  const emailDetail = document.createElement("div");

  // ADD ELEMENT CLASSES
  emailSection.classList.add("contact-info__section");
  emailLabel.classList.add("contact-info-section__label");
  emailDetail.classList.add("contact-info-section__details--pri-color");

  // ADD EMAIL LABEL AND DETAIL TEXT
  emailLabel.textContent = "Email";
  emailDetail.textContent = "saladpack@gmail.com";

  // APPEND ELEMENTS TO DOM
  emailSection.appendChild(emailLabel);
  emailSection.appendChild(emailDetail);

  return emailSection;
};

const createLocationSection = () => {
  // CREATE SECTION ELEMENTS
  const locationSection = document.createElement("div");
  const locationLabel = document.createElement("div");
  const locationDetail = document.createElement("div");

  // ADD ELEMENT CLASSES
  locationSection.classList.add("contact-info__section");
  locationLabel.classList.add("contact-info-section__label");
  locationDetail.classList.add("contact-info-section__details");

  // ADD LOCATION LABEL AND DETAIL TEXT
  locationLabel.textContent = "Location";
  locationDetail.textContent = "4774 Haymond Rocks Road, Rogue River, Oregon";

  // APPEND ELEMENTS TO DOM
  locationSection.appendChild(locationLabel);
  locationSection.appendChild(locationDetail);

  return locationSection;
};

const createOpeningHoursSection = () => {
  // CREATE SECTION ELEMENTS
  const openingHoursSection = document.createElement("div");
  const openingHoursLabel = document.createElement("div");
  const openingHoursDetail = document.createElement("div");

  // ADD ELEMENT CLASSES
  openingHoursSection.classList.add("contact-info__section");
  openingHoursLabel.classList.add("contact-info-section__label");
  openingHoursDetail.classList.add("contact-info-section__details");

  // ADD OPENING HOURS LABEL AND DETAIL TEXT
  openingHoursLabel.textContent = "Opening Hours";
  openingHoursDetail.textContent = "8AM-9PM";

  // APPEND ELEMENTS TO DOM
  openingHoursSection.appendChild(openingHoursLabel);
  openingHoursSection.appendChild(openingHoursDetail);

  return openingHoursSection;
};

/* ----- END CONTACT-INFO SECTION ----- */

/* 
  ----- CREATE CONTACT FORM SECTION -----
*/

const createContactFormSection = () => {
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
