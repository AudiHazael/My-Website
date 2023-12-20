// Make sure this code is placed within a document ready or window load event
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('#product-slider', {
    // Use the unique ID
    direction: 'vertical', // Set the direction to vertical
    loop: true, // Enable loop mode for continuous scrolling
  });
});
