const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navLinks');
const links = document.querySelector('.nav-inks li');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
