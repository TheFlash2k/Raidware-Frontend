const body = document.body;
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");
const div5 = document.getElementById("div5");
const div6 = document.getElementById("div6");
const navbar = document.getElementById("navbar");
const show = document.getElementsByClassName("show");
const hide = document.getElementsByClassName("hide");
const mySection = document.getElementById('mySection');
const darkModeToggle = document.getElementById("toggle");
const stretchButton = document.getElementById("stretchButton");
const createFormPage = document.getElementById('createFormPage');

darkModeToggle.addEventListener("change", function () {
  body.classList.toggle("dark-mode");
});

stretchButton.addEventListener("click", function () {
  navbar.classList.toggle("stretched");
  content.classList.toggle("stretched");
});

stretchButton.addEventListener('click', () => {
  mySection.classList.toggle('left-position');
});

create.addEventListener('click', () => {
  createFormPage.classList.toggle('top-position');
});

darkModeToggle.addEventListener("click", function () {
  if (div1.classList.contains("visible")) {
    div1.classList.remove("visible");
    div1.classList.add("hidden");
    div2.classList.remove("hidden");
    div2.classList.add("visible");
  } else {
    div1.classList.remove("hidden");
    div1.classList.add("visible");
    div2.classList.remove("visible");
    div2.classList.add("hidden");
  }
});

darkModeToggle.addEventListener("click", function () {
  if (div3.classList.contains("show")) {
    div3.classList.remove("show");
    div3.classList.add("hide");
    div4.classList.remove("hide");
    div4.classList.add("show");
  } else {
    div3.classList.remove("hide");
    div3.classList.add("show");
    div4.classList.remove("show");
    div4.classList.add("hide");
  }
});

darkModeToggle.addEventListener("click", function () {
  if (div5.classList.contains("show")) {
    div5.classList.remove("show");
    div5.classList.add("hide");
    div6.classList.remove("hide");
    div6.classList.add("show");
  } else {
    div5.classList.remove("hide");
    div5.classList.add("show");
    div6.classList.remove("show");
    div6.classList.add("hide");
  }
});