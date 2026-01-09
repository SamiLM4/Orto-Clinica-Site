// Personalize: coloque seu número no formato internacional sem sinais, ex: 5511999999999
const WHATSAPP_NUMBER = '5511999999999';

// Ajusta links de WhatsApp que usam a classe .whatsapp caso estejam com placeholder
document.querySelectorAll('.whatsapp').forEach(el => {
  const href = el.getAttribute('href') || '';
  if (!href.includes('wa.me')) {
    el.setAttribute('href', `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%20quero%20saber%20mais`);
  }
});

// Configurar e-mail de destino (substitua pelo seu endereço)
const EMAIL_RECIPIENT = 'contato@exemplo.com'; // <-- altere para seu e-mail real

function buildMailLinks(form) {
  const name = form.name.value.trim();
  const senderEmail = form.email.value.trim();
  const message = form.message.value.trim();
  const subject = `Contato pelo site: ${name || 'Contato'}`;
  const body = `${message}\n\n--\nNome: ${name || ''}\nE-mail: ${senderEmail || ''}`;
  const mailto = `mailto:${EMAIL_RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL_RECIPIENT)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return { mailto, gmail, name };
}

document.getElementById('openMailClient')?.addEventListener('click', function() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const { mailto, name } = buildMailLinks(form);
  // Tenta abrir o cliente de e-mail
  window.location.href = mailto;
  const msg = document.getElementById('formMessage');
  if (msg) {
    msg.textContent = `Abrindo seu app de e-mail...`;
    msg.style.display = 'block';
  }
  form.reset();
});

document.getElementById('openGmail')?.addEventListener('click', function() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const { gmail } = buildMailLinks(form);
  window.open(gmail, '_blank', 'noopener');
  const msg = document.getElementById('formMessage');
  if (msg) {
    msg.textContent = `Abrindo o Gmail em nova aba...`;
    msg.style.display = 'block';
  }
  form.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  });
});