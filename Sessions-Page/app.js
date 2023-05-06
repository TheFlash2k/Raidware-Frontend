const body = document.body;
const cmd = document.getElementById("cmd");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");
const navbar = document.getElementById("navbar");
const stretch = document.getElementById("dummy1");
const hide = document.getElementsByClassName("hide");
const show = document.getElementsByClassName("show");
const terminal = document.getElementById("terminal1");
const mySection = document.getElementById('mySection');
const darkModeToggle = document.getElementById("toggle");
const stretchButton = document.getElementById("stretchButton");
const closeTerminal = document.getElementById("closeTerminal1");


darkModeToggle.addEventListener("change", function () {
  body.classList.toggle("dark-mode");
});

stretchButton.addEventListener("click", function () {
  navbar.classList.toggle("stretched");
  content.classList.toggle("stretched");
});

terminal.addEventListener('click', () => {
  stretch.style.height = '350px';
  terminal.style.display = 'none';
  closeTerminal.style.display = 'block';
});


closeTerminal.addEventListener('click', () => {
  stretch.style.height = '50px';
  closeTerminal.style.display = 'none';
  terminal.style.display = 'block';
});

stretchButton.addEventListener('click', () => {
  mySection.classList.toggle('left-position');
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