document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.animation = `fadeIn 1s ease forwards`;
      }, index * 200); //  image delay 
    });
  });
  