//change navbar brand logo
const navbarBrand = document.querySelector(".logo");
navbarBrand.setAttribute("src", "./assets/ineuron-logo.png");

//change app price
const price = document.querySelector(".app .app_info .app_price span");
price.innerText = "$10";

//add linkedin icon in footer
const footerSocialIcons = document.querySelector("footer .footer_social");
const newSocialIcon = document.createElement("div");
newSocialIcon.classList.add("footer_social_ico");
newSocialIcon.innerHTML = `<i class="fa-brands fa-linkedin"></i>`;
footerSocialIcons.appendChild(newSocialIcon);