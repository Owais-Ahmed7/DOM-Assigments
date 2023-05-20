# Dom Assigment 7

> ### Assigment Didn't contain readme file so I had to write this myself to complete assigment

---

#### Task 1

> The user has to complete the task give in image.

#### After Update

![Task 1](./ass7.1-after.png)

#### Project Solution

```JavaScript
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
```

---

#### Task 2

> The user has to complete the task give in image.

#### After Update

![Task 1](./ass7.2-after.png)

#### Project Solution

```JavaScript
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
```

---
