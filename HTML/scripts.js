document.addEventListener('DOMContentLoaded', () => {
  // Configuración del Intersection Observer
  const observerOptions = {
    root: null, // Observa en el viewport del navegador
    rootMargin: '0px',
    threshold: 0.1 // El 10% del elemento debe estar visible para activar la animación
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target); // Deja de observar una vez que el elemento está en vista
      }
    });
  }, observerOptions);

  // Observa todos los elementos con la clase .animate-on-scroll
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});
