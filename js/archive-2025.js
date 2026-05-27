const archiveItems = document.querySelectorAll('[data-archive-item]');
const archiveFilterButtons = document.querySelectorAll('[data-archive-filter]');
let activeArchiveFilter = 'all';

function updateArchiveFilter() {
  archiveItems.forEach((item) => {
    const shouldShow = activeArchiveFilter === 'all' || item.dataset.category === activeArchiveFilter;
    item.classList.toggle('is-hidden', !shouldShow);
  });
}

archiveFilterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeArchiveFilter = button.dataset.archiveFilter;
    archiveFilterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    updateArchiveFilter();
  });
});

updateArchiveFilter();
