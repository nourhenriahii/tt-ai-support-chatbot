
document.getElementById('closebox').addEventListener('click', function() {
  const box = document.getElementById('appdownload-banner');
  // Add fade-out effect
  box.classList.add('fade-out');
  // Remove from DOM after animation    
  setTimeout(() => box.style.display = 'none', 500);
});
                        