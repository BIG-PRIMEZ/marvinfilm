// Initialize navigation functionality
function initializeNavigation() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLeft = document.getElementById('navLeft');
  const navRight = document.getElementById('navRight');

  if (!navbar || !hamburger || !navLeft || !navRight) {
    console.error('Navigation elements not found');
    return;
  }

  // Scroll behavior for navbar background
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Hamburger menu toggle for split navigation
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLeft.classList.toggle('active');
    navRight.classList.toggle('active');
    document.body.style.overflow = navLeft.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu when clicking on nav links
  const allNavLinks = [...navLeft.querySelectorAll('.nav-link'), ...navRight.querySelectorAll('.nav-link')];
  allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLeft.classList.remove('active');
      navRight.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLeft.contains(e.target) && !navRight.contains(e.target)) {
      hamburger.classList.remove('active');
      navLeft.classList.remove('active');
      navRight.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}
