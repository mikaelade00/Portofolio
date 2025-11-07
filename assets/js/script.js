const buttons = document.querySelectorAll(".nav-links .nav-button");
const sections = document.querySelectorAll(".section");

// Set initial active section and button
sections[0].classList.add("active");
buttons[0].classList.add("active");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));

    btn.classList.add("active");
    const targetSectionId = btn.dataset.section;
    document.getElementById(targetSectionId).classList.add("active");
  });
});
