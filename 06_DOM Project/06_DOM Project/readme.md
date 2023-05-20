# Dom Assigment 6

> ### Assigment Didn't contain readme file so I had to write this myself to complete assigment

---

#### Task 1

> The user has to change the navbar brand logo to ineuron's logo.

#### After Update

![Task 1](./Output/DOM%20P3%20SS-1.png)

#### Project Solution

```JavaScript
//change navbar brand logo
   const navbarBrand = document.querySelector(".logo");
   navbarBrand.setAttribute("src", "./assets/ineuron-logo.png");
```

---

#### Task 2

> The user has to change the app per month price to '$10' and add a new social icon which is linkedin in footer.

#### After Update

![Task 1](./Output/DOM%20P3%20SS-2.png)

#### Project Solution

```JavaScript
 //change app price
const price = document.querySelector(".app .app_info .app_price span");
price.innerText = "$10";

//add linkedin icon in footer
const footerSocialIcons = document.querySelector("footer .footer_social");
const newSocialIcon = document.createElement("div");
newSocialIcon.classList.add("footer_social_ico");
newSocialIcon.innerHTML = `<i class="fa-brands fa-linkedin"></i>`;
footerSocialIcons.appendChild(newSocialIcon);
```