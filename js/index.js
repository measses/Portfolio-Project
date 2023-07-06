//scroll sections

window.onscroll = () => {
    let header = document.querySelector("header");

    header.classList.toggle('sticky', window.scrollY > 100);
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