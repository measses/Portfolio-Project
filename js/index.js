
//toggle menu/navbar script
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x'); 
  navbar.classList.toggle('active');
}





//scroll sections
let header = document.querySelector("header");
let sections = document.querySelectorAll("section");
let navLinks= document.querySelectorAll("header nav a");
window.onscroll = () => {

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  })
  

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x'); 
    navbar.classList.remove('active');
}

document.addEventListener('click', function(event) {
    var cursorEffect = document.createElement('div');
    cursorEffect.classList.add('cursor-effect');
    cursorEffect.style.left = event.clientX + 'px';
    cursorEffect.style.top = event.clientY + 'px';
    document.body.appendChild(cursorEffect);
  
    setTimeout(function() {
      cursorEffect.remove();
    }, 200);
  });

