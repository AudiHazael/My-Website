document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // Display one slide at a time
    spaceBetween: 1000, // Adjust the spacing between slides
    pagination: {
      el: '.swiper-pagination', // Specify the pagination element
      clickable: true, // Allow users to click on pagination dots to navigate
    },
    autoplay: {
      delay: 5000, // Automatically advance slides every 5 seconds
      disableOnInteraction: false, // Continue autoplay even when the user interacts with the slider
    },
    // Change the effect to 'slide' for a sliding animation
    effect: 'slide',
    // Optional: Customize the sliding animation duration (in milliseconds)
    speed: 1000, // Set to 1000 milliseconds (1 second) for a slower slide animation
  });
});
