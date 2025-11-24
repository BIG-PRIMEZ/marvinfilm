const portfolioVideos = [
  {
    id: 1,
    title: "Katherine & Osagu",
    thumbnail: "https://vumbnail.com/1140013171.jpg",
    videoUrl: "https://player.vimeo.com/video/1140013171",
    category: "wedding",
    featured: true,
    description: "A beautiful wedding celebration captured with cinematic storytelling. Every moment preserved with artistic precision and emotional depth.",
    couple: "Katherine & Osagu",
    venue: "Beautiful Venue",
    location: "Nigeria",
    year: "2024",
    camera: "Professional Cinema Camera",
    lens: "Cinema Lenses",
    format: "4K"
  },
  {
    id: 2,
    title: "Elizabth & Efosa",
    thumbnail: "https://vumbnail.com/1140018502.jpg",
    videoUrl: "https://player.vimeo.com/video/1140018502",
    category: "wedding",
    featured: true,
    description: "A beautiful wedding celebration captured with cinematic storytelling. Every moment preserved with artistic precision and emotional depth.",
    couple: "Elizabth & Efosa",
    venue: "Beautiful Venue",
    location: "Nigeria",
    year: "2024",
    camera: "Professional Cinema Camera",
    lens: "Cinema Lenses",
    format: "4K"
  },
  {
    id: 3,
    title: "Sandra & Sesan",
    thumbnail: "https://vumbnail.com/1140021816.jpg",
    videoUrl: "https://player.vimeo.com/video/1140021816",
    category: "wedding",
    featured: true,
    description: "A beautiful wedding celebration captured with cinematic storytelling. Every moment preserved with artistic precision and emotional depth.",
    couple: "Sandra & Sesan",
    venue: "Beautiful Venue",
    location: "Nigeria",
    year: "2024",
    camera: "Professional Cinema Camera",
    lens: "Cinema Lenses",
    format: "4K"
  },
  {
    id: 4,
    title: "Tejiri & Sodie",
    thumbnail: "https://vumbnail.com/1140024672.jpg",
    videoUrl: "https://player.vimeo.com/video/1140024672",
    category: "wedding",
    featured: false,
    description: "A beautiful wedding celebration captured with cinematic storytelling. Every moment preserved with artistic precision and emotional depth.",
    couple: "Tejiri & Sodie",
    venue: "Beautiful Venue",
    location: "Nigeria",
    year: "2024",
    camera: "Professional Cinema Camera",
    lens: "Cinema Lenses",
    format: "4K"
  },
  {
    id: 5,
    title: "Iyobosa & David",
    thumbnail: "https://vumbnail.com/1140027606.jpg",
    videoUrl: "https://player.vimeo.com/video/1140027606",
    category: "wedding",
    featured: false,
    description: "A beautiful wedding celebration captured with cinematic storytelling. Every moment preserved with artistic precision and emotional depth.",
    couple: "Iyobosa & David",
    venue: "Beautiful Venue",
    location: "Nigeria",
    year: "2024",
    camera: "Professional Cinema Camera",
    lens: "Cinema Lenses",
    format: "4K"
  },
  {
    id: 6,
    title: "Atalia & Friends",
    thumbnail: "https://vumbnail.com/1140029152.jpg",
    videoUrl: "https://player.vimeo.com/video/1140029152",
    category: "wedding",
    featured: false,
    description: "A beautiful wedding celebration captured with cinematic storytelling. Every moment preserved with artistic precision and emotional depth.",
    couple: "Beautiful Couple",
    venue: "Beautiful Venue",
    location: "Nigeria",
    year: "2024",
    camera: "Professional Cinema Camera",
    lens: "Cinema Lenses",
    format: "4K"
  },
  {
    id: 7,
    title: "Bisola & Nosa",
    thumbnail: "https://vumbnail.com/1140031965.jpg",
    videoUrl: "https://player.vimeo.com/video/1140031965",
    category: "wedding",
    featured: false,
    description: "A beautiful wedding celebration captured with cinematic storytelling. Every moment preserved with artistic precision and emotional depth.",
    couple: "Bisola & Nosa",
    venue: "Beautiful Venue",
    location: "Nigeria",
    year: "2024",
    camera: "Professional Cinema Camera",
    lens: "Cinema Lenses",
    format: "4K"
  },
  {
    id: 8,
    title: "Ann",
    thumbnail: "https://vumbnail.com/1140033704.jpg",
    videoUrl: "https://player.vimeo.com/video/1140033704",
    category: "wedding",
    featured: false,
    description: "A beautiful wedding celebration captured with cinematic storytelling. Every moment preserved with artistic precision and emotional depth.",
    couple: "Ann",
    venue: "Beautiful Venue",
    location: "Nigeria",
    year: "2024",
    camera: "Professional Cinema Camera",
    lens: "Cinema Lenses",
    format: "4K"
  }
];

function renderFeaturedVideos() {
  const featuredGrid = document.getElementById('featuredGrid');
  if (!featuredGrid) return;

  const featured = portfolioVideos.filter(video => video.featured);

  featuredGrid.innerHTML = featured.map(video => `
    <div class="featured-card hover-lift hover-zoom reveal" data-id="${video.id}">
      <img src="${video.thumbnail}" alt="${video.title}" class="featured-thumbnail">
      <div class="featured-overlay">
        <h3 class="featured-title">${video.title}</h3>
        <p class="featured-category">${video.category}</p>
      </div>
    </div>
  `).join('');

  featuredGrid.querySelectorAll('.featured-card').forEach(card => {
    card.addEventListener('click', () => {
      const videoId = parseInt(card.getAttribute('data-id'));
      openModal(videoId);
    });
  });

  document.querySelectorAll('.reveal').forEach(el => {
    if (!el.classList.contains('active')) {
      observer.observe(el);
    }
  });
}

function renderPortfolioGrid(filter = 'all') {
  const portfolioGrid = document.getElementById('portfolioGrid');
  if (!portfolioGrid) return;

  const filteredVideos = filter === 'all'
    ? portfolioVideos
    : portfolioVideos.filter(video => video.category === filter);

  portfolioGrid.style.opacity = '0';

  setTimeout(() => {
    portfolioGrid.innerHTML = filteredVideos.map(video => `
      <div class="portfolio-card hover-lift hover-zoom" data-id="${video.id}">
        <img src="${video.thumbnail}" alt="${video.title}" class="portfolio-thumbnail">
        <div class="portfolio-overlay">
          <h3 class="portfolio-title">${video.title}</h3>
          <p class="portfolio-category">${video.category}</p>
        </div>
        <div class="portfolio-play-icon">▶</div>
      </div>
    `).join('');

    portfolioGrid.querySelectorAll('.portfolio-card').forEach(card => {
      card.addEventListener('click', () => {
        const videoId = parseInt(card.getAttribute('data-id'));
        openModal(videoId);
      });
    });

    portfolioGrid.style.opacity = '1';
  }, 300);
}

function setupFilterButtons() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  if (!filterButtons.length) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');
      renderPortfolioGrid(filter);
    });
  });
}

function openModal(videoId) {
  const video = portfolioVideos.find(v => v.id === videoId);
  if (!video) return;

  const modal = document.getElementById('videoModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalInfo = document.getElementById('modalInfo');
  const modalDescription = document.getElementById('modalDescription');
  const modalIframe = document.getElementById('modalIframe');

  modalTitle.textContent = video.title;
  modalInfo.innerHTML = `
    <span>Venue: ${video.venue}</span>
    <span>Location: ${video.location}</span>
    <span>Year: ${video.year}</span>
  `;
  modalDescription.innerHTML = `
    <p>${video.description}</p>
    <div class="modal-tech-specs">
      <div class="tech-spec"><span class="tech-label">Camera</span><span class="tech-value">${video.camera}</span></div>
      <div class="tech-spec"><span class="tech-label">Lens</span><span class="tech-value">${video.lens}</span></div>
      <div class="tech-spec"><span class="tech-label">Format</span><span class="tech-value">${video.format}</span></div>
    </div>
  `;
  modalIframe.src = `${video.videoUrl}?autoplay=1`;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('videoModal');
  const modalIframe = document.getElementById('modalIframe');

  modal.classList.remove('active');
  modalIframe.src = '';
  document.body.style.overflow = '';
}

function setupModal() {
  const modal = document.getElementById('videoModal');
  const closeBtn = document.getElementById('modalClose');

  if (!modal) return;

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedVideos();
    renderPortfolioGrid();
    setupFilterButtons();
    setupModal();
  });
} else {
  renderFeaturedVideos();
  renderPortfolioGrid();
  setupFilterButtons();
  setupModal();
}
