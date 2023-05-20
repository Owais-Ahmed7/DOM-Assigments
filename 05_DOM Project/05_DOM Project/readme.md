# Dom Assigment 5

> ### Assigment Didn't contain readme file so I had to write this myself to complete assigment

---

#### Task 1

> The user has to complete following task based on the image given below.

#### After Update

![Task 1](./Output/DOM%20P2%20SS.png)

#### Project Solution

```JavaScript
//add new button in navbar
   const navContainer = document.querySelector(".navbar .nav-center");
   const buttonsContainer = navContainer.querySelectorAll("div")[2];

   const proPlanButton = document.createElement("a");
   proPlanButton.classList.add("btn");
   proPlanButton.innerText = "Pro Subscription";
   proPlanButton.setAttribute("href", "index.html");
   buttonsContainer.appendChild(proPlanButton);

//sidebar categories
   const recipesContainer = document.querySelector(
  ".recipes-container .tags-container div"
);
   const newRecipe = document.createElement("a");
   newRecipe.innerText = "Chinese (7)";
   newRecipe.setAttribute("href", "#");
   recipesContainer.appendChild(newRecipe);

//recipe gallery
const recipeGallery = document.querySelector(".recipe-gallery");
   const newRecipeCard = document.createElement("div");
   newRecipeCard.classList.add("card");
   newRecipeCard.innerHTML = `<a href="#" class="recipe-text">
<img src="./img/recipe-6.jpg" class="recipe-img " />
<h5 class="recipe-name">Nihari</h5>
<p class="recipe-disp">Prep : 1 hour | Cook : 4 hour</p>
</a>`;
   recipeGallery.appendChild(newRecipeCard);

//replace name in footer
   const footerName = document.querySelector(".page-footer p a");
   footerName.innerText = "Owais Ahmad";
```

---
