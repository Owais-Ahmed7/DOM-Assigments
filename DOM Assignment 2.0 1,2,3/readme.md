# Dom Assigment 1

> ### Assigment Didn't contain readme file so I had to write this myself to complete assigment

---

#### Task 1

> The user has to append a new element to the navigation menu named 'Hire me' after the projects.

#### After Update

![Task 1](../DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task1Output.png)

#### Project Solution

```JavaScript
  const element = document.createElement("li");
  element.innerHTML = '<a>Hire me</a>'
  const parent = document.querySelector("header nav ul")
  parent.appendChild(element);
```

---

#### Task 2

> The user has to change the placeholder of navigation search input.

#### After Update

![Task 2](../DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task2Output.png)

#### Project Solution

```JavaScript
    const searchInput = document.querySelector(".search-field input");
    searchInput.setAttribute("placeholder", "Search My Project")
```

---

#### Task 3

> The user has to change the paragraph description in hero left section.

#### After Update

![Task 3](../DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task3Output.png)

#### Project Solution

```JavaScript
   const para = document.querySelector('.hero-left-section p');
   para.innerHTML = `I am an aspiring <span>Full Stack JavaScript Developer</span>,
    <br />who is currently working as <span>an Employee</span> for <br />
   <span>iNeuron Intelligence Pvt Ltd.</span>`
```

---

#### Task 4

> The user has to replace the avatar with Hitesh's sir avatar in hero right section.

#### After Update

![Task 4](../DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task4Output.png)

#### Project Solution

```JavaScript
   const avatar = document.querySelector(".hero-right-section img");
   avatar.setAttribute("src", "./hitesh.jpeg")
```

---

#### Task 5

> The user has to append a new button into buttons container in hero right section

#### After Update

![Task 5](../DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task5Output.png)

#### Project Solution

```JavaScript
   const button = document.createElement("button");
   const buttonsContainer = document.querySelector('.hero-right-section-btns');

   button.innerText = `Support Me`
   buttonsContainer.appendChild(button);
```

# Dom Assigment 2

#### Task 1

> The user has to change the color of the according headers to light pink "rgb(218, 218, 245)"

#### After Update

![Task 1](../DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task1Output.png)

#### Project Solution

```JavaScript
   const accordianWrapper = document.querySelectorAll(".accordian-wrapper h3");
   accordianWrapper.forEach(element => {
    element.style.backgroundColor = "rgb(218, 218, 245)";
   })
```

#### Task 2

> The user has to append a new accordian into accordian section with heading "Skill" and description as follow "I possess a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github."

#### After Update

![Task 2](../DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task2Output.png)

#### Project Solution

```JavaScript
   const accordianwrapper = document.querySelector(".accordian-wrapper");
   const accordian = document.createElement("div");
   accordian.classList.add("accordian");
   accordian.innerHTML = `<h3>Skills</h3>
   <p>I possess a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github.</p>`
   wrapper.appendChild(accordian);
```

# Dom Assigment 3

#### Task 1

> The user has to change the placeholders of the form inputs as show in image

#### After Update

![Task 1](../DOM%20Assignment%202.0%201%2C2%2C3/thirdAssignmentImage/task1Output.png)

#### Project Solution

```JavaScript
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
```