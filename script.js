document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((el) => {
      el.classList.add('visible'); // Adds visible class to trigger fade-in
    });
  
    // Glitch text animation for header
    const headerTitle = document.querySelector('h1');
    headerTitle.addEventListener('mouseover', function() {
      headerTitle.classList.add('glitch');
      setTimeout(() => {
        headerTitle.classList.remove('glitch');
      }, 2000);
    });
  });
  