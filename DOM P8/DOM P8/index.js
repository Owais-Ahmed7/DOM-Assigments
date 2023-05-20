const section = document.querySelector("section aside");
section.style.overflow = 'auto';

const newTopicline = document.createElement('hr');
newTopicline.classList.add("hr-line");

const newTopicHeading = document.createElement("h2");
newTopicHeading.classList.add("new-head");
newTopicHeading.innerText = 'New Custom Heading';

const newTopicparagraph = document.createElement("p");
newTopicparagraph.classList.add("new-p");
newTopicparagraph.innerText = 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.'

section.appendChild(newTopicline);
section.appendChild(newTopicHeading);
section.appendChild(newTopicparagraph);

//change body color
const body = document.querySelector("body");
body.style.backgroundImage = 'none';
body.style.backgroundColor = 'rgb(250, 250, 250)';

//make navbar toggle functional
const toggleButton = document.querySelector(".navbar-toggler");
const navLinks = document.querySelector(".navbar-collapse");
toggleButton.addEventListener('click', () => {
    const isOpen = Array.from(navLinks.classList).includes('show');
    if (isOpen) navLinks.classList.remove('show');
    else navLinks.classList.add('show');
})