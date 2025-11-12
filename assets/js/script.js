const buttons = document.querySelectorAll(".nav-links .nav-button");
const sections = document.querySelectorAll(".section");

// Function to activate a section and its corresponding button
function activateSection(sectionId) {
  buttons.forEach(b => b.classList.remove("active"));
  sections.forEach(s => s.classList.remove("active"));

  const targetButton = document.querySelector(`.nav-button[data-section="${sectionId}"]`);
  const targetSection = document.getElementById(sectionId);

  if (targetButton) {
    targetButton.classList.add("active");
  }
  if (targetSection) {
    targetSection.classList.add("active");
  }
}

// Handle initial page load based on URL hash or default to "about"
document.addEventListener("DOMContentLoaded", () => {
  const initialSectionId = window.location.hash ? window.location.hash.substring(1) : "about";
  activateSection(initialSectionId);
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
