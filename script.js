// Play hover sound effect when hovering over nav links
const navLinks = document.querySelectorAll('nav ul li a');
const hoverSound = document.getElementById('hoverSound');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    hoverSound.play();
  });
});

// Play page load sound when the page is loaded
window.addEventListener('load', () => {
  const loadSound = document.getElementById('loadSound');
  loadSound.play();
});

// Toggle transcript visibility (for podcast pages)
const transcriptToggles = document.querySelectorAll('.transcript-toggle');
transcriptToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    const episode = e.target.closest('.episode');
    const transcript = episode.querySelector('.transcript');
    if (transcript.style.display === 'block') {
      transcript.style.display = 'none';
    } else {
      transcript.style.display = 'block';
    }
  });
});