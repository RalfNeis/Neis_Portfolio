function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".mobile-menu-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (link) link.classList.toggle('active', entry.isIntersecting);
    });
  }, { root: null, threshold: 0.55 });

  sections.forEach(section => observer.observe(section));
});

/* --- MODAL LOGIC --- */

function openProjectModal(card) {
    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.getElementById("modalBody");

    // 1. Get Title from the clicked card
    const title = card.querySelector("h3").innerText;
    
    // 2. Get the hidden content from the clicked card
    const content = card.querySelector(".project-details-content").innerHTML;

    // 3. Inject data into the modal
    modalTitle.innerText = title;
    modalBody.innerHTML = content;
    
    // 4. Show the modal
    modal.style.display = "block";
    
    // 5. Disable background scrolling
    document.body.style.overflow = "hidden"; 
}

function closeProjectModal() {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling
}

// Close modal if user clicks outside the content box
window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target == modal) {
        closeProjectModal();
    }
}