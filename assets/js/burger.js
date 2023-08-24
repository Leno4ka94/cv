const mobileMenu = document.querySelector('.nav');
const menuBtn = document.querySelector('.burger');
const bodyLock = document.querySelector('body');
menuBtn.addEventListener("click", showMenu);

function showMenu() {
  mobileMenu.classList.toggle('active');
  menuBtn.classList.toggle('active');
  bodyLock.classList.toggle('lock');
};


mobileMenu.onclick = function(event) {
  if (event.target !== button)
    mobileMenu.style.display = "none";
    event.stopPropagation();
}