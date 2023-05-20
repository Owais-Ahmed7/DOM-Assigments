# Dom Assigment 9

> ### Assigment Didn't contain readme file so I had to write this myself to complete assigment

---

#### Task 1

> The user has to change the color of the heading to the following color 'rgb(202, 49, 66)' and fix the cart icon in cart button.

#### After Update

![Task 1](./ass9.1-after.png)

#### Project Solution

```JavaScript
  const container = document.querySelector(".container");
  const title = container.querySelector(".title");
  title.style.color = 'rgb(202, 49, 66)';

  const addToCartIcon = container.querySelector(".add-to-cart img");
  addToCartIcon.setAttribute("src", "./images/icon-cart.svg");
```

---

#### Task 2

> The user has to change the background color of card button on hover to the following 'rgb(202, 49, 66)'.

#### After Update

![Task 1](./ass9.2-after.png)

#### Project Solution

```JavaScript
  const cartButton = container.querySelector(".add-to-cart");
  cartButton.addEventListener('mouseenter', () => {
      cartButton.style.backgroundColor = 'rgb(202, 49, 66)';
  });

  cartButton.addEventListener('mouseleave', () => {
    cartButton.style.backgroundColor = 'rgb(79, 127, 105)';
  })
```

---
