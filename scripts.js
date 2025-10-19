const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const modal = document.getElementById('newsletter-modal');
const newsletterButton = document.querySelector('[data-action="newsletter-open"]');
const newsletterForm = document.getElementById('newsletter-form');
const modalEmail = document.getElementById('modal-email');
const statusMessage = document.querySelector('.newsletter__status');

if (newsletterButton && modal) {
  newsletterButton.addEventListener('click', () => {
    if (typeof modal.showModal === 'function') {
      modal.showModal();
      modalEmail?.focus();
    } else {
      modal.setAttribute('open', 'true');
    }
  });
}

if (modal) {
  modal.addEventListener('close', () => {
    if (modal.returnValue === 'confirm' && modalEmail?.value) {
      pretendSubmit(modalEmail.value);
      modalEmail.value = '';
    }
  });
}

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = new FormData(newsletterForm).get('email');
    if (typeof email === 'string' && email.trim()) {
      pretendSubmit(email.trim());
      newsletterForm.reset();
    }
  });
}

function pretendSubmit(email) {
  if (!statusMessage) return;
  statusMessage.textContent = 'Thanks, ' + email + '! We will be in touch soon.';
  statusMessage.classList.add('newsletter__status--visible');
  setTimeout(() => {
    statusMessage.textContent = '';
    statusMessage.classList.remove('newsletter__status--visible');
  }, 6000);
}
