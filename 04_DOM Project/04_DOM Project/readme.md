# Dom Assigment 1

> ### Assigment Didn't contain readme file so I had to write this myself to complete assigment

---

#### Task 1

> The user has to change the background color of clash of clans troops stat section and color to white.

#### After Update

![Task 1](./Output/DOM%20P1%20SS.png)

#### Project Solution

```JavaScript
  const barbarian = document.querySelector(".clash-card__unit-stats--barbarian");
  const archer = document.querySelector(".clash-card__unit-stats--archer");
  const giant = document.querySelector(".clash-card__unit-stats--giant");
  const goblin = document.querySelector(".clash-card__unit-stats--goblin");
  const wizard = document.querySelector(".clash-card__unit-stats--wizard");

  barbarian.style.backgroundColor = "rgb(224, 159, 79)";
  archer.style.backgroundColor = "rgb(220, 95, 135)";
  giant.style.backgroundColor = "rgb(232, 149, 60)";
  goblin.style.backgroundColor = "rgb(142, 185, 73)";
  wizard.style.backgroundColor = "rgb(104, 170, 248)";

  const troopsStats = [barbarian, archer, giant, goblin, wizard];

  troopsStats.forEach(troop => {
    troop.style.setProperty("color", "rgb(250, 250, 250)", "important");
  })
```

---
