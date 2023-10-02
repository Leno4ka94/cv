const mobileMenu = document.querySelector('nav');
const menuBtn = document.querySelector('.burger');
const mobileLinks = document.querySelectorAll('.nav-link');
const bodyLock = document.querySelector('body');

menuBtn.addEventListener("click", showMenu);

function showMenu() {
  mobileMenu.classList.toggle('active');
  menuBtn.classList.toggle('active');
  bodyLock.classList.toggle('lock');
}

// Iterate over each mobile link and add a click event listener
mobileLinks.forEach(link => {
  link.addEventListener('click', (event) => {
      mobileMenu.classList.remove('active');
      menuBtn.classList.remove('active');
      bodyLock.classList.remove('lock');
  });
});


