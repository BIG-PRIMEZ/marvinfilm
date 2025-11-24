const contactForm = document.getElementById('contactForm');
const messageField = document.getElementById('message');
const charCount = document.getElementById('charCount');

if (messageField && charCount) {
  messageField.addEventListener('input', () => {
    charCount.textContent = messageField.value.length;
  });
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showError(formGroup, message) {
  formGroup.classList.add('error');
  const errorMessage = formGroup.querySelector('.error-message');
  if (errorMessage) {
    errorMessage.textContent = message;
  }
}

function clearError(formGroup) {
  formGroup.classList.remove('error');
}

function validateField(field) {
  const formGroup = field.closest('.form-group');
  clearError(formGroup);

  if (field.hasAttribute('required') && !field.value.trim()) {
    showError(formGroup, `${field.previousElementSibling.textContent} is required`);
    return false;
  }

  if (field.type === 'email' && field.value && !validateEmail(field.value)) {
    showError(formGroup, 'Please enter a valid email address');
    return false;
  }

  return true;
}

if (contactForm) {
  const inputs = contactForm.querySelectorAll('input, select, textarea');

  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));

    input.addEventListener('input', () => {
      const formGroup = input.closest('.form-group');
      if (formGroup.classList.contains('error')) {
        validateField(input);
      }
    });
  });

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    let isValid = true;
    inputs.forEach(input => {
      if (!validateField(input)) {
        isValid = false;
      }
    });

    if (!isValid) {
      showToast('Please fill in all required fields correctly', 'error');
      return;
    }

    const submitBtn = contactForm.querySelector('.submit-btn');
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    submitBtn.textContent = 'Sending...';

    // Web3Forms Configuration
    // Get your access key from https://web3forms.com/
    // Just enter marvinfilm04@gmail.com on their site and get the key instantly
    const WEB3FORMS_ACCESS_KEY = '131d6ec5-893f-4b1b-9316-6a8cd817586a';

    // Prepare form data for Web3Forms
    const formData = new FormData();
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', 'New Wedding Inquiry from Website');
    formData.append('name', document.getElementById('name').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('phone', document.getElementById('phone').value || 'Not provided');
    formData.append('Wedding Date', document.getElementById('weddingDate').value);
    formData.append('Venue/Location', document.getElementById('venue').value);
    formData.append('Guest Count', document.getElementById('guestCount').value || 'Not specified');
    formData.append('Package Interest', document.getElementById('package').value || 'Not specified');
    formData.append('message', document.getElementById('message').value);

    // Check if Web3Forms is configured
    if (WEB3FORMS_ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE') {
      console.log('Web3Forms not configured. Form data:', Object.fromEntries(formData));

      submitBtn.disabled = false;
      submitBtn.classList.remove('loading');
      submitBtn.textContent = 'Send Inquiry';

      showToast('Demo mode: Please configure Web3Forms to enable email sending.', 'error');
      return;
    }

    // Send email using Web3Forms
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        console.log('Email sent successfully:', data);

        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        submitBtn.textContent = 'Send Inquiry';

        showToast('Message sent successfully! We\'ll get back to you soon.', 'success');

        contactForm.reset();
        if (charCount) charCount.textContent = '0';
      } else {
        throw new Error(data.message || 'Failed to send message');
      }

    } catch (error) {
      console.error('Email send failed:', error);

      submitBtn.disabled = false;
      submitBtn.classList.remove('loading');
      submitBtn.textContent = 'Send Inquiry';

      showToast('Failed to send message. Please try again or contact us directly.', 'error');
    }
  });
}

function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const toastIcon = document.getElementById('toastIcon');
  const toastMessage = document.getElementById('toastMessage');

  toastIcon.textContent = type === 'success' ? '✓' : '✗';
  toastMessage.textContent = message;

  toast.classList.remove('success', 'error');
  toast.classList.add(type);

  setTimeout(() => toast.classList.add('show'), 100);

  setTimeout(() => {
    toast.classList.remove('show');
  }, 5000);
}
