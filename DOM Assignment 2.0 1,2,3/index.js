// // task 2

// const searchInput = document.querySelector(".search-field input");
// searchInput.setAttribute("placeholder", "Search My Project")

// // task 3

// const para = document.querySelector('.hero-left-section p');
// para.innerHTML = ` I am an aspiring <span>Full Stack JavaScript Developer</span>,
// <br />who is currently working as <span>an Employee</span> for <br />
// <span>iNeuron Intelligence Pvt Ltd.</span>`

// // task 4

// const avatar = document.querySelector(".hero-right-section img");
// avatar.setAttribute("src", "./hitesh.jpeg")

// // task 5

// const button = document.createElement("button");
// const buttonsContainer = document.querySelector('.hero-right-section-btns');

// button.innerText = `Support Me`
// buttonsContainer.appendChild(button);

// Dom 3 task 1
const form = document.querySelector(".mainWrapper");
const textInputs = form.querySelectorAll("input[type='text']");
const emailInputs = form.querySelectorAll("input[type='email']");
const textArea = form.querySelectorAll("textarea")

textInputs.forEach(input => {
    input.setAttribute("placeholder", "FSJS 2.0");
})
emailInputs.forEach(input => {
    input.setAttribute("placeholder", "fsjs@ineuron.ai");
})
textArea.forEach(input => {
    input.setAttribute("placeholder", "Hello World");
})