// Hamburger menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menu-btn');
  const headerNav = document.getElementById('header-nav');

  // Toggle menu when hamburger button is clicked
  menuBtn.addEventListener('click', function() {
    // Toggle active class on navigation menu
    headerNav.classList.toggle('active');
    // Toggle open class on hamburger button for icon animation
    menuBtn.classList.toggle('open');
  });

  // Close menu when clicking on a navigation link (optional enhancement)
  const navLinks = headerNav.querySelectorAll('a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      // Only close menu on mobile screens (480px or less)
      if (window.innerWidth <= 480) {
        headerNav.classList.remove('active');
        menuBtn.classList.remove('open');
      }
    });
  });

  // Close menu when clicking outside (optional enhancement)
  document.addEventListener('click', function(event) {
    const isClickInsideNav = headerNav.contains(event.target);
    const isClickOnMenuBtn = menuBtn.contains(event.target);
    
    // Only handle on mobile screens
    if (window.innerWidth <= 480) {
      if (!isClickInsideNav && !isClickOnMenuBtn && headerNav.classList.contains('active')) {
        headerNav.classList.remove('active');
        menuBtn.classList.remove('open');
      }
    }
  });
});
