const darkModeToggle = document.getElementById("toggle");
const body = document.body;
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

darkModeToggle.addEventListener("change", function () {
  body.classList.toggle("dark-mode");
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
