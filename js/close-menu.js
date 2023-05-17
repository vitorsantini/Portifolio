const navItems = document.querySelectorAll('.mobile-nav-item');
const navList = document.querySelector('.mobile-menu-list');


function AnimatedLinks(){
    navItems.forEach((link, index) => {
        link.style.animation
         ? (link.style.animation = "")
         : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.3}s`);
    });
}

function removeActive() {
    navList.classList.toggle('active');
    AnimatedLinks();
  }
  

navItems.forEach(function(navItem) {
  navItem.addEventListener('click', removeActive);
});
