const buttons = document.querySelectorAll(".nav-links .nav-button");
const sections = document.querySelectorAll(".section");

// Function to activate a section and its corresponding button
function activateSection(sectionId) {
  const targetButton = document.querySelector(`.nav-button[data-section="${sectionId}"]`);
  const targetSection = document.getElementById(sectionId);

  // Only proceed if the target section exists (relevant for index page)
  if (targetSection) {
    buttons.forEach(b => b.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));

    if (targetButton) {
      targetButton.classList.add("active");
    }
    targetSection.classList.add("active");
  }
}

// Add image zoom modal to body
const modal = document.createElement('div');
modal.className = 'image-modal';
modal.innerHTML = '<img src="" alt="Zoomed image">';
document.body.appendChild(modal);

const modalImg = modal.querySelector('img');

// Image Zoom Functionality
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG' && e.target.closest('.project-image')) {
    modalImg.src = e.target.src;
    modal.classList.add('active');
  } else if (modal.classList.contains('active')) {
    modal.classList.remove('active');
  }
});

// Handle initial page load based on URL hash or default to "about"
document.addEventListener("DOMContentLoaded", () => {
  // Only handle section switching if we are on the main portfolio page (index.html)
  if (document.querySelector('.sidebar')) {
    const initialSectionId = window.location.hash ? window.location.hash.substring(1) : "about";
    activateSection(initialSectionId);
  }

  if (window.lucide) {
    lucide.createIcons();
  }
});

// Add event listeners to navigation buttons
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetSectionId = btn.dataset.section;
    activateSection(targetSectionId);
    // Update URL hash without reloading the page
    history.pushState(null, '', `#${targetSectionId}`);
  });
});
