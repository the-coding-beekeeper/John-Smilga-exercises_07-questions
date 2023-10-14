const allContainers = document.querySelectorAll('.container');
allContainers.forEach((container) => {
  container.addEventListener('click', () => {
    container.classList.toggle('hidden-text');
  });
});