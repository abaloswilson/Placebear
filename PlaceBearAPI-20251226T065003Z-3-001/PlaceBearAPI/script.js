const bearForm = document.getElementById('bearForm');
const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const bearImage = document.getElementById('bearImage');
const themeToggle = document.getElementById('themeToggle');

bearForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const width = Math.max(100, Math.min(1000, parseInt(widthInput.value, 10)));
  const height = Math.max(100, Math.min(1000, parseInt(heightInput.value, 10)));
  bearImage.src = `https://placebear.com/${width}/${height}`;
});

// Theme toggle logic
let darkMode = true;
function setTheme(dark) {
  document.body.classList.toggle('dark-mode', dark);
  document.body.classList.toggle('light-mode', !dark);
  themeToggle.classList.toggle('dark', dark);
}
themeToggle.addEventListener('click', () => {
  darkMode = !darkMode;
  setTheme(darkMode);
});
setTheme(true);
