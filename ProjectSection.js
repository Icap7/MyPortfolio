// Open Modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
  }
  
  // Close Modal
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const skillFills = document.querySelectorAll(".skill-fill");
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute("style").match(/width: \d+%;/)[0];
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  
    skillFills.forEach((fill) => {
      observer.observe(fill);
    });
  });
  