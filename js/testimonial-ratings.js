// Testimonial Star Ratings
document.addEventListener('DOMContentLoaded', function() {
  const ratingElements = document.querySelectorAll('.testimonial-rating[data-rating]');

  ratingElements.forEach(element => {
    const rating = parseFloat(element.getAttribute('data-rating'));
    const maxStars = 5;
    let starsHTML = '';

    for (let i = 1; i <= maxStars; i++) {
      if (i <= rating) {
        // Full star
        starsHTML += '<span>★</span>';
      } else if (i - 0.5 === rating) {
        // Half star (using a special character or you can style it differently)
        starsHTML += '<span class="half-star">★</span>';
      } else {
        // Empty star
        starsHTML += '<span class="empty-star">☆</span>';
      }
    }

    element.innerHTML = starsHTML;
  });
});
