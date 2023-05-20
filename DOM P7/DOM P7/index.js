//remove langauges that have 2.0 in their name
const languagesContainer = document.querySelector(".main__languages");
const languageLinks = languagesContainer.querySelectorAll("a");

const excludedLanguages = [];
languageLinks.forEach(link => {
  if (link.textContent.includes("2.0")) {
    excludedLanguages.push(link);
    link.remove();
  }
});

//form submit
const inputElement = document.querySelector('.main__form-input');
const form = document.querySelector(".main__form form");
const submitButton = form.querySelector("button");
inputElement.removeAttribute('disabled');
submitButton.removeAttribute('disabled');

inputElement.addEventListener("change", (e) => {
    const value = e.target.value;
    inputElement.value = value;
})

form.addEventListener('submit', (e) => {
    excludedLanguages.forEach(language => {
        languagesContainer.appendChild(language);
    })
})