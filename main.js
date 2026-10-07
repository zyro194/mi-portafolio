document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.classList.remove('hidden');
      status.className = 'text-center text-sm mt-4 text-emerald-400 font-semibold';
      status.textContent = '¡Gracias por contactarme! Tu mensaje ha sido enviado correctamente.';
      form.reset();
    });
  }
});
