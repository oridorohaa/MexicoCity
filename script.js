const toggleSwitch = document.querySelector("input[type='checkbox']");
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// Dark or Light IMGS
function imageMode(color) {
  image1.src = `img/undraw_eating_together_${color}.svg`;
  image2.src = `img/undraw_having_fun_${color}.svg`;
  image3.src = `img/undraw_explore_re_${color}.svg`;
}

//DRY CODE --- putting two functions into one using turnary
function toggleDarkLightMode(isDark) {
  nav.style.backgroundColor = isDark
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 /50%)";
  textBox.style.backgroundColor = isDark
    ? "rgb(255 255 255 /50%)"
    : "rgb(0 0 0 / 50%)";
  console.log(toggleIcon.children);
  // to target all elements of the same parent <div>
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  //Dry Code
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  isDark ? imageMode("dark") : imageMode("light");
}

// // Dark Mode Styles
// function darkMode() {
//   nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
//   textBox.style.backgroundColor = "rgb(255 255 255 /50%)";
//   console.log(toggleIcon.children);
//   // to target all elements of the same parent <div>
//   toggleIcon.children[0].textContent = "Dark Mode";
//   //Dry Code
//   toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
//   imageMode("dark");
// }

// // Light Mode Styles
// function lightMode() {
//   nav.style.backgroundColor = "rgb(255 255 255 /50%)";
//   textBox.style.backgroundColor = "rgb(0 0 0 /50%)";
//   toggleIcon.children[0].textContent = "LightMode";
//   //   Dry Code
//   toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
//   imageMode("light");
// }

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggleDarkLightMode(false);
  }
}

// Event Listner
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage for Theme

const currentTheme = localStorage.getItem("theme");
// always check if it exists first before you try to retreave it
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    toggleDarkLightMode(true);
  }
}
