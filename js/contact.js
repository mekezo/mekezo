// i18next Initialization
i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        "home": "Home",
        "products": "Products",
        "comfort": "Comfort",
        "safety": "Safety",
        "style": "Style",
        "about": "About",
        "contact": "Contact Us",
        "contact_us": "Contact Us",
        "contact_title": "Contact Us - Mekezo",
        "full_name_placeholder": "Full Name",
        "email_placeholder": "Email",
        "phone_placeholder": "Phone Number",
        "message_placeholder": "Message",
        "send_button": "Send",
        "location": "Ethiopia, Addis Ababa, near Piyasa",
        "sending": "Sending...",
        "success_message": "Message sent successfully!",
        "error_message": "Failed to send message: ",
        "copyright": "Mekezo. All rights reserved."
      }
    },
    am: {
      translation: {
        "home": "ቤት",
        "products": "ምርቶች",
        "comfort": "ምቾት",
        "safety": "ደህንነት",
        "style": "ስታይል",
        "about": "ስለ እኛ",
        "contact": "ያግኙን",
        "contact_us": "ያግኙን",
        "contact_title": "ያግኙን - መከዞ",
        "full_name_placeholder": "ሙሉ ስም",
        "email_placeholder": "ኢሜይል",
        "phone_placeholder": "ስልክ ቁጥር",
        "message_placeholder": "መልዕክት",
        "location": "ኢትዮጵያ፣አዲስ አበባ፣ ፒያሣ አቅራቢያ",
        "send_button": "ላክ",
        "sending": "በመላክ ላይ...",
        "success_message": "መልዕክት በተሳካ ሁኔታ ተልኳል!",
        "error_message": "መልዕክት ለመላክ አልተሳካም: ",
        "copyright": "መከዞ. ሁሉም መብቶች የተጠበቁ ናቸው."
      }
    }
  }
}, function (err, t) {
  updateContent();
});

// Update Content Function
function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const i18nValues = el.getAttribute('data-i18n').split(';');
    i18nValues.forEach(value => {
      if (value.startsWith('[')) {
        const match = value.match(/\[(.+)\](.+)/);
        if (match) {
          const attr = match[1];
          const key = match[2];
          el.setAttribute(attr, i18next.t(key));
        }
      } else {
        el.innerHTML = i18next.t(value);
      }
    });
  });
  document.getElementById('current-year').textContent = new Date().getFullYear();
  document.title = i18next.t('contact_title');
}

// Language Switcher
document.getElementById('language-select').addEventListener('change', function () {
  i18next.changeLanguage(this.value, updateContent);
});

// Theme Toggle
document.getElementById('theme-icon').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    this.classList.remove('fa-sun');
    this.classList.add('fa-moon');
    this.setAttribute('aria-label', 'Switch to light mode');
  } else {
    this.classList.remove('fa-moon');
    this.classList.add('fa-sun');
    this.setAttribute('aria-label', 'Switch to dark mode');
  }
});

// Initialize theme icon based on default dark mode
document.getElementById('theme-icon').classList.remove('fa-moon');
document.getElementById('theme-icon').classList.add('fa-sun');
document.getElementById('theme-icon').setAttribute('aria-label', 'Switch to light mode');

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const statusMessage = document.getElementById('status-message');
  statusMessage.textContent = i18next.t('sending');
  statusMessage.style.color = ''; // Reset color
  console.log('Form submitted:', {
    name: this.name.value,
    email: this.email.value,
    phone: this.phone.value,
    message: this.message.value
  });

  emailjs.send("service_zkqj9lm", "template_zzm5tpg", {
    from_name: this.name.value,
    from_email: this.email.value,
    phone: this.phone.value,
    message: this.message.value
  })
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      statusMessage.textContent = i18next.t('success_message');
      statusMessage.style.color = 'green';
      this.reset();
      setTimeout(() => statusMessage.textContent = '', 3000);
    }, (error) => {
      console.error('FAILED...', error);
      statusMessage.textContent = i18next.t('error_message') + error.text;
      statusMessage.style.color = 'red';
    });
});

// Enter Key Submission
document.getElementById('contact-form').addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
    e.preventDefault();
    this.dispatchEvent(new Event('submit'));
  }
});