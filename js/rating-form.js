// DOM elements
const form = document.getElementById('ratingForm');
const ratingStars = document.querySelectorAll('.rating-stars span');
const audio = document.getElementById('background-audio');
const homeButton = document.getElementById('homeButton');
const contactButton = document.getElementById('contactButton');
let selectedRating = 0;

// Rating stars
ratingStars.forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = parseInt(star.getAttribute('data-value'));
    updateRatingStars();
  });
});

function updateRatingStars() {
  ratingStars.forEach(star => {
    const value = parseInt(star.getAttribute('data-value'));
    if (value <= selectedRating) {
      star.style.color = '#FFD700';
    } else {
      star.style.color = '#ccc';
    }
  });
}

// Form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (selectedRating === 0) {
    alert("Please select a rating.");
    return;
  }

  const formData = {
    name: form.name.value,
    dessert: form.dessert.value,
    rating: selectedRating,
    comments: form.comments.value
  };

  console.log("Form Data Submitted:", formData);

  alert("Thank you for your feedback!");

  // Form and rating reset 
  form.reset();
  selectedRating = 0;
  updateRatingStars();
});

// Navigation buttons 
homeButton.addEventListener('click', () => {
  window.location.href = 'index.html';
});

contactButton.addEventListener('click', () => {
  window.location.href = 'contact.html';
});
