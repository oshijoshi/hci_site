function lightbox() {
  const lightbox = document.createElement('div');
  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);
  var images = document.querySelectorAll("img");
  images.forEach(image => {
    image.addEventListener("click", e=>{
      lightbox.className = "active";
      var focus = document.createElement("img");
      focus.src = image.src;
      focus.className = "lightboximg";
      while(lightbox.firstChild){
        lightbox.removeChild(lightbox.firstChild);
      }
      lightbox.appendChild(focus);
    });
  });
  lightbox.addEventListener("click", e=>{
    if(e.target != e.currentTarget)
      return;
    lightbox.classList.remove("active");
  });
}
// look into adding optional click through gallery.

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function scrollFunction() {
  var topButton = document.getElementById("topBtn");
  if (window.pageYOffset > 100) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}