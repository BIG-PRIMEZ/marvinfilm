// Instagram Feed Handler
// Add your Instagram post URLs here
const instagramPosts = [
  'https://www.instagram.com/reel/DNNriXgMjry/',
  'https://www.instagram.com/reel/DRQEgrqDHqE/',
  // Add more Instagram post/reel URLs here
  // Example: 'https://www.instagram.com/p/POST_ID/',
];

async function loadInstagramPosts() {
  const grid = document.getElementById('instagramGrid');
  if (!grid) return;

  // Clear loading message
  grid.innerHTML = '';

  // If no posts configured, show placeholder message
  if (instagramPosts.length === 0) {
    grid.innerHTML = `
      <div class="instagram-placeholder-message">
        <p>Add your Instagram post URLs to js/instagram-feed.js</p>
      </div>
    `;
    return;
  }

  // Load each Instagram post using oEmbed API
  for (const postUrl of instagramPosts) {
    try {
      const response = await fetch(`https://graph.facebook.com/v18.0/instagram_oembed?url=${encodeURIComponent(postUrl)}&access_token=YOUR_ACCESS_TOKEN&omitscript=true`);

      if (response.ok) {
        const data = await response.json();
        const postContainer = document.createElement('div');
        postContainer.className = 'instagram-embed-wrapper';
        postContainer.innerHTML = data.html;
        grid.appendChild(postContainer);
      } else {
        // Fallback: use blockquote embed method (no API needed)
        loadInstagramEmbed(postUrl, grid);
      }
    } catch (error) {
      console.log('Using fallback embed method');
      loadInstagramEmbed(postUrl, grid);
    }
  }

  // Process Instagram embeds
  if (window.instgrm) {
    window.instgrm.Embeds.process();
  }
}

// Fallback method using Instagram's blockquote embed (no API required)
function loadInstagramEmbed(postUrl, container) {
  const wrapper = document.createElement('div');
  wrapper.className = 'instagram-embed-wrapper';

  const blockquote = document.createElement('blockquote');
  blockquote.className = 'instagram-media';
  blockquote.setAttribute('data-instgrm-permalink', postUrl);
  blockquote.setAttribute('data-instgrm-version', '14');
  blockquote.style.maxWidth = '100%';
  blockquote.style.minWidth = '326px';

  const link = document.createElement('a');
  link.href = postUrl;
  link.target = '_blank';
  link.textContent = 'View on Instagram';

  blockquote.appendChild(link);
  wrapper.appendChild(blockquote);
  container.appendChild(wrapper);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadInstagramPosts);
} else {
  loadInstagramPosts();
}

// Re-process embeds when Instagram script loads
window.addEventListener('load', () => {
  if (window.instgrm) {
    window.instgrm.Embeds.process();
  }
});
