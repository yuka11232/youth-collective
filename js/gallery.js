const photoCards = document.querySelectorAll('[data-gallery-card]');
const filterButtons = document.querySelectorAll('[data-gallery-filter]');
const yearButtons = document.querySelectorAll('[data-gallery-year]');
const galleryCount = document.querySelector('[data-gallery-count]');
const uploadInput = document.querySelector('[data-photo-upload]');
const previewGrid = document.querySelector('[data-preview-grid]');
const previewHeading = document.querySelector('[data-preview-heading]');
let activeGalleryCategory = 'all';
let activeGalleryYear = 'all';

function updateGalleryFilters() {
  let visibleCount = 0;
  photoCards.forEach((card) => {
    const categoryMatch = activeGalleryCategory === 'all' || card.dataset.category === activeGalleryCategory;
    const yearMatch = activeGalleryYear === 'all' || card.dataset.year === activeGalleryYear;
    const shouldShow = categoryMatch && yearMatch;
    card.classList.toggle('is-hidden', !shouldShow);
    if (shouldShow) visibleCount += 1;
  });
  if (galleryCount) galleryCount.textContent = String(visibleCount);
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeGalleryCategory = button.dataset.galleryFilter;
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    updateGalleryFilters();
  });
});

yearButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeGalleryYear = button.dataset.galleryYear;
    yearButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    updateGalleryFilters();
  });
});

updateGalleryFilters();

if (uploadInput && previewGrid) {
  uploadInput.addEventListener('change', (event) => {
    const files = Array.from(event.target.files || []).filter((file) => file.type.startsWith('image/'));
    previewGrid.innerHTML = '';
    if (!files.length) {
      if (previewHeading) previewHeading.hidden = true;
      return;
    }
    if (previewHeading) previewHeading.hidden = false;
    files.slice(0, 12).forEach((file) => {
      const url = URL.createObjectURL(file);
      const item = document.createElement('div');
      item.className = 'preview-item';
      const image = document.createElement('img');
      image.src = url;
      image.alt = file.name.replace(/[-_]/g, ' ');
      image.onload = () => URL.revokeObjectURL(url);
      item.appendChild(image);
      previewGrid.appendChild(item);
    });
  });
}
