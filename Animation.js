document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });
   
    // Observe each element with different animations
    document.querySelectorAll('.in-animation4,.in-animation5,.in-animation6, .in-animation7, .in-animation8').forEach(section => {
      observer.observe(section);
    });
   });