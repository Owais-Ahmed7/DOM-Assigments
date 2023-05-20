//change heading color
const container = document.querySelector(".container");
const title = container.querySelector(".title");
title.style.color = 'rgb(202, 49, 66)';

const addToCartIcon = container.querySelector(".add-to-cart img");
addToCartIcon.setAttribute("src", "./images/icon-cart.svg");

//change cart button background color
const cartButton = container.querySelector(".add-to-cart");
cartButton.addEventListener('mouseenter', () => {
    cartButton.style.backgroundColor = 'rgb(202, 49, 66)';
});

cartButton.addEventListener('mouseleave', () => {
    cartButton.style.backgroundColor = 'rgb(79, 127, 105)';
})