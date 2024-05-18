// DOM element selectors
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const moon = document.querySelector("#moon");
const body = document.querySelector("body");
const hLinks = document.querySelectorAll("#hLink");
const copyEmailButton = document.querySelector("#copy_email_button");
const quoteButton = document.querySelector("#quote_btn");
const homeBottom = document.querySelector("#homeBottom");

// Toggles the menu and changes hamburger icon color on click
hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("bg-white");
});

homeBottom.addEventListener("click", () => {
  window.location.href = "index.html";
});

// Downloads to Quotes
quoteButton.addEventListener("click", function () {
  const url = "./precios/PreciosPagPNG.png";
  const a = document.createElement("a");
  a.href = url;
  a.download = "Contizaciones-Gabriel-Medina.png"; // Suggests a filename for the downloaded file
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

// Copies email to clipboard and shows an alert temporarily
copyEmailButton.addEventListener("click", function () {
  const alertElement = document.getElementById("alert");
  alertElement.classList.toggle("hidden");
  alertElement.classList.add("opacity-0");

  const email = "gr31ml93@gmail.com";
  navigator.clipboard.writeText(email);

  setTimeout(() => {
    alertElement.classList.toggle("hidden");
    alertElement.classList.remove("opacity-0");
  }, 1000);
});

// Closes the menu when any link is clicked and changes hamburger icon color
hLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    hamburger.classList.toggle("bg-white");
  });
});

// Handles the download of a PDF file on button click
document.getElementById("download_btn").addEventListener("click", function () {
  const url = "./cv/Gabriel-Medina-CV.pdf";
  const a = document.createElement("a");
  a.href = url;
  a.download = "Gabriel-Medina-CV.pdf"; // Suggests a filename for the downloaded file
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

// Toggles the dark mode style on the body element
moon.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// Opens the default mail client with predefined email details
document.getElementById("sendEmail").addEventListener("click", function () {
  const emailAddress = "gr31ml93@gmail.com";
  const subject = encodeURIComponent("Desde tu GMDEV");
  const emailBody = encodeURIComponent("Hola! quiero hablar contigo!");

  const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${emailBody}`;
  window.location.href = mailtoLink;
});

// Changes the current language and updates the content accordingly
function changeLanguage(lng) {
  i18next.changeLanguage(lng, () => {
    updateContent(); // Update the content after language change
  });
}
