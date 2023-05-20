let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

// DOM TASK 1
const accordianWrapper = document.querySelectorAll(".accordian-wrapper h3");
accordianWrapper.forEach(element => {
  element.style.backgroundColor = "rgb(218, 218, 245)";
})

// task 2
const wrapper = document.querySelector(".accordian-wrapper");
const element = document.createElement("div");
element.classList.add("accordian");
element.innerHTML = `<h3>Skills</h3>
<p>I possess a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github.</p>`
wrapper.appendChild(element);
