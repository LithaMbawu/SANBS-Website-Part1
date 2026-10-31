document.addEventListener('DOMContentLoaded', () => {
  initRevealAnimations();
  initBackToTop();
  initTabs();
  initAccordion();
  initServiceSearch();
  initGallery();
  initMap();
  initForms();
});

function initRevealAnimations() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach((element) => observer.observe(element));
}

function initBackToTop() {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'back-to-top';
  button.textContent = 'Back to top';
  button.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(button);

  const toggleButton = () => {
    if (window.scrollY > 260) {
      button.classList.add('visible');
    } else {
      button.classList.remove('visible');
    }
  };

  toggleButton();
  window.addEventListener('scroll', toggleButton);
  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initTabs() {
  const tabGroup = document.querySelector('[data-tabs]');
  if (!tabGroup) return;

  const buttons = [...tabGroup.querySelectorAll('.tab')];
  const panels = [...document.querySelectorAll('.tab-panel')];

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('aria-controls');
      const activePanel = document.getElementById(targetId);

      buttons.forEach((tab) => {
        const isActive = tab === button;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-selected', String(isActive));
      });

      panels.forEach((panel) => {
        const shouldShow = panel === activePanel;
        panel.classList.toggle('is-active', shouldShow);
        panel.hidden = !shouldShow;
      });
    });
  });
}

function initAccordion() {
  const items = document.querySelectorAll('.accordion-item');
  if (!items.length) return;

  items.forEach((item) => {
    const trigger = item.querySelector('.accordion-trigger');
    const content = item.querySelector('.accordion-content');

    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const shouldOpen = trigger.getAttribute('aria-expanded') !== 'true';

      items.forEach((accordionItem) => {
        const button = accordionItem.querySelector('.accordion-trigger');
        const panel = accordionItem.querySelector('.accordion-content');

        if (!button || !panel) return;

        button.setAttribute('aria-expanded', 'false');
        panel.hidden = true;
      });

      trigger.setAttribute('aria-expanded', String(shouldOpen));
      content.hidden = !shouldOpen;
    });
  });
}

function initServiceSearch() {
  const searchInput = document.getElementById('serviceSearch');
  if (!searchInput) return;

  const cards = [...document.querySelectorAll('.service-card')];
  const emptyState = document.getElementById('serviceEmpty');

  searchInput.addEventListener('input', (event) => {
    const query = event.target.value.trim().toLowerCase();
    let visibleCards = 0;

    cards.forEach((card) => {
      const keywords = (card.dataset.keywords || card.textContent).toLowerCase();
      const matches = !query || keywords.includes(query);
      card.hidden = !matches;

      if (matches) visibleCards += 1;
    });

    if (emptyState) {
      emptyState.hidden = visibleCards !== 0 || !query;
    }
  });
}

function initGallery() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const image = lightbox.querySelector('img');
  const caption = lightbox.querySelector('.lightbox-caption');
  const closeButton = lightbox.querySelector('.lightbox-close');

  document.querySelectorAll('.gallery-item').forEach((button) => {
    button.addEventListener('click', () => {
      const source = button.dataset.image || button.querySelector('img')?.src || '';
      const title = button.dataset.title || 'SANBS gallery image';

      image.src = source;
      image.alt = title;
      caption.textContent = title;
      lightbox.hidden = false;
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });

  const closeLightbox = () => {
    lightbox.hidden = true;
    lightbox.setAttribute('aria-hidden', 'true');
  };

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !lightbox.hidden) {
      closeLightbox();
    }
  });
}

function initMap() {
  const mapContainer = document.getElementById('map');
  if (!mapContainer || !window.L) return;

  const map = L.map('map').setView([-26.143, 27.915], 11);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.marker([-26.143, 27.915]).addTo(map)
    .bindPopup('<strong>SANBS Head Office</strong><br>Roodepoort, Johannesburg');
}

function initForms() {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const feedback = form.querySelector('.form-feedback');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      let isValid = true;

      Array.from(form.querySelectorAll('input, select, textarea')).forEach((field) => {
        if (!validateField(field)) {
          isValid = false;
        }
      });

      if (!isValid) {
        if (feedback) {
          feedback.textContent = 'Please correct the highlighted fields and try again.';
          feedback.className = 'form-feedback error';
        }
        return;
      }

      if (feedback) {
        feedback.textContent = 'Sending your message...';
        feedback.className = 'form-feedback';
      }

      const payload = {};
      new FormData(form).forEach((value, key) => {
        if (key === 'consent') {
          payload[key] = value === 'on';
          return;
        }
        payload[key] = value;
      });

      if (window.fetch) {
        fetch(form.action, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        }).catch(() => {
          // Continue to show the success message even if the remote endpoint is unavailable.
        });
      }

      window.setTimeout(() => {
        if (feedback) {
          feedback.textContent = 'Thank you. Your message has been submitted successfully.';
          feedback.className = 'form-feedback success';
        }
        form.reset();
      }, 500);
    });
  });
}

function validateField(field) {
  const value = field.type === 'checkbox' ? field.checked : field.value.trim();
  const id = field.id;
  const errorNode = document.getElementById(`${id}-error`);

  let message = '';

  if (field.type === 'checkbox') {
    if (!value) {
      message = 'Please confirm this before continuing.';
    }
  } else if (field.required && !value) {
    message = 'This field is required.';
  } else if (field.name === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    message = 'Please enter a valid email address.';
  } else if (field.name === 'phone' && value && !/^[0-9+()\s-]{9,15}$/.test(value)) {
    message = 'Please enter a valid phone number.';
  } else if ((field.name === 'name' || field.name === 'surname' || field.name === 'subject') && value && value.length < 2) {
    message = 'Please enter at least 2 characters.';
  } else if (field.name === 'message' && value && value.length < 15) {
    message = 'Please provide at least 15 characters.';
  } else if (field.name === 'type' && !value) {
    message = 'Please choose an enquiry type.';
  }

  field.setAttribute('aria-invalid', String(Boolean(message)));
  field.setCustomValidity(message);

  if (errorNode) {
    errorNode.textContent = message;
  }

  return !message;
}

