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
{
  /* <a href="#"> Beverages (6)</a> */
}

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

{
  /* <a href="index.html" class="nav-link"> recipes </a> */
}
