const photoCards = document.querySelectorAll('[data-gallery-card]');
const filterButtons = document.querySelectorAll('[data-gallery-filter]');
const uploadInput = document.querySelector('[data-photo-upload]');
const previewGrid = document.querySelector('[data-preview-grid]');
const previewHeading = document.querySelector('[data-preview-heading]');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.galleryFilter;
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    photoCards.forEach((card) => {
      const shouldShow = filter === 'all' || card.dataset.category === filter;
      card.style.display = shouldShow ? '' : 'none';
    });
  });
});

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
