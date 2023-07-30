
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


  window.onload = function() {
    ScrollReveal().reveal('.home-content', {
        duration: 1300,    
        distance: '20px',  
        origin: 'left',  
    });
    ScrollReveal().reveal('.home-sci', {
      duration: 1400,   
      distance: '20px',  
      origin: 'bottom',  
  });
  ScrollReveal().reveal('.about', {
    duration: 1400,   
    distance: '20px',  
    origin: 'top',  
});
ScrollReveal().reveal('.education', {
  duration: 1400,   
  distance: '20px',  
  origin: 'left',  
});
ScrollReveal().reveal('.skills', {
  duration: 1400,   
  distance: '25px',  
  origin: 'right',  
});
ScrollReveal().reveal('.contact', {
  duration: 1400,   
  distance: '25px',  
  origin: 'bottom',  
});
  
};


window.onload = function() {
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalOverlay = document.getElementById('modalOverlay');
  
  openModalBtn.addEventListener('click', function(event) {
    event.preventDefault();
    modalOverlay.style.display = 'flex';
  });
  
  closeModalBtn.addEventListener('click', function() {
    modalOverlay.style.display = 'none';
  });
  
}


toastr.options = {
  positionClass: 'toast-top-center', // Bildirimin ekranın üst ortasında gösterilmesini sağlar
  closeButton: true, // Kapatma düğmesi gösterilsin
};

const btn = document.querySelector('.btn');

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  btn.textContent = 'Sending...';

  const serviceID = 'default_service'; 
  const templateID = 'template_uo9fxwu'; 

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.textContent = 'Send Email';
      toastr.success('E-posta başarıyla gönderildi!');
      this.reset();
    })
    .catch((err) => {
      btn.textContent = 'Send Email';
      toastr.error('E-posta gönderirken bir hata oluştu.');
      console.error(err);
    });
});