# Dom Assigment 8

> ### Assigment Didn't contain readme file so I had to write this myself to complete assigment

---

#### Task 1

> The user has to add another Topic in Topics in right sidebar and make it scrollable.

#### After Update

![Task 1](./ass8.1-after.png)

#### Project Solution

```JavaScript
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
```

---

#### Task 2

> The user has to make the container background color white and remove background image.

#### After Update

![Task 1](./ass8.2-after.png)

#### Project Solution

```JavaScript
  const body = document.querySelector("body");
  body.style.backgroundImage = 'none';
  body.style.backgroundColor = 'rgb(250, 250, 250)';
```

---

#### Task 3

> The user has to make the navbar toggle functional like is the image.

#### After Update

![Task 1](./ass8.3-after.png)

#### Project Solution

```JavaScript
  const toggleButton = document.querySelector(".navbar-toggler");
  const navLinks = document.querySelector(".navbar-collapse");
  toggleButton.addEventListener('click', () => {
      const isOpen = Array.from(navLinks.classList).includes('show');
      if (isOpen) navLinks.classList.remove('show');
      else navLinks.classList.add('show');
  })
```