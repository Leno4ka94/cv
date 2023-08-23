var didScroll;
var lastScrollTop = 0;
var delta = 5;
var Navbar = document.getElementById("header");
const mybutton = document.getElementById("GoTop");
window.onscroll = function () { 
  didScroll = true;
  scrollFunction() };

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = window.scrollY;

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > Navbar.clientHeight){
        // Scroll Down
        Navbar.classList.remove('nav-down');
        Navbar.classList.add('nav-up');
    } else {
          Navbar.classList.remove('nav-up');
          Navbar.classList.add('nav-down');
        }

    lastScrollTop = st;
}

function scrollFunction() {
if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}