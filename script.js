const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.18,
  }
);

document
  .querySelectorAll(".panel, .project-card, .timeline-item, .artifact-panel, .contact-card")
  .forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });
