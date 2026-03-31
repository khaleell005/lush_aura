  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.1 });
  reveals.forEach(r => obs.observe(r));

  // Gallery filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Nav scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.style.boxShadow = '0 4px 24px rgba(200,105,138,0.1)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });

  // WhatsApp form redirect
  function sendToWhatsApp() {
    const firstName = document.querySelector('input[placeholder="Amina"]').value || 'Not provided';
    const lastName = document.querySelector('input[placeholder="Bello"]').value || 'Not provided';
    const email = document.querySelector('input[type="email"]').value || 'Not provided';
    const phone = document.querySelector('input[type="tel"]').value || 'Not provided';
    const interest = document.querySelector('input[placeholder*="Custom scarf"]').value || 'Not provided';
    const message = document.querySelector('textarea').value || 'Not provided';

    const whatsappMsg = `Hello Lush Aura! I'd like to make an inquiry.%0A%0A*Name:* ${firstName} ${lastName}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Interest:* ${interest}%0A*Message:* ${message}`;
    
    window.open(`https://wa.me/2348123093987?text=${whatsappMsg}`, '_blank');
  }