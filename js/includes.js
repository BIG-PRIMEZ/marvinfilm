// Header HTML template
const headerHTML = `
<nav id="navbar">
  <div class="nav-container">
    <ul class="nav-left" id="navLeft">
      <li><a href="index.html" class="nav-link">Home</a></li>
      <li><a href="portfolio.html" class="nav-link">Portfolio</a></li>
      <li><a href="about.html" class="nav-link">About</a></li>
    </ul>
    <a href="index.html" class="logo">
      <img src="images/logo.jpg" alt="Marvin Film" class="logo-img">
    </a>
    <ul class="nav-right" id="navRight">
      <li><a href="testimonials.html" class="nav-link">Testimonials</a></li>
      <li><a href="contact.html" class="nav-link">Contact</a></li>
    </ul>
    <div class="hamburger" id="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</nav>
`;

// Footer HTML template
const footerHTML = `
<footer>
  <div class="container">
    <div class="footer-content">
      <p>© 2024 Marvin Film. All rights reserved.</p>
      <div class="social-links">
        <a href="#" class="social-link" aria-label="Instagram">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <a href="#" class="social-link" aria-label="TikTok">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
        </a>
        <a href="#" class="social-link" aria-label="YouTube">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
        </a>
      </div>
    </div>
  </div>
</footer>

<div class="back-to-top" id="backToTop">↑</div>
`;

// Load header and footer includes
function loadIncludes() {
  // Load header
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    headerPlaceholder.innerHTML = headerHTML;
  }

  // Load footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerHTML;
  }

  // Set active navigation link based on current page
  setActiveNavLink();

  // Initialize navigation after header is loaded
  if (typeof initializeNavigation === 'function') {
    initializeNavigation();
  }
}

// Set active class on current page's nav link
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.classList.remove('active');
    const linkHref = link.getAttribute('href');

    if (linkHref === currentPage ||
        (currentPage === '' && linkHref === 'index.html') ||
        (currentPage === '/' && linkHref === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Load includes when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadIncludes);
} else {
  loadIncludes();
}
