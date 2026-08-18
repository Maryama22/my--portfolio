// Theme Toggle Logic
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = themeBtn.querySelector('i');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  } else {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  }
});

// Interactive Counter Logic
const counterBtn = document.getElementById('counter-btn');
const countDisplay = document.getElementById('count-value');
let count = 0;

counterBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});

// Form Submission Feedback
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formStatus.style.color = '#10b981';
  formStatus.textContent = 'Thank you! Your message has been submitted successfully.';
  contactForm.reset();
});