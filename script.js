const themeBtn = document.getElementById('theme-toggle');
const countBtn = document.getElementById('interactive-btn');
const countSpan = document.getElementById('count');
let count = 0;

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

countBtn.addEventListener('click', () => {
  count++;
  countSpan.textContent = count;
});