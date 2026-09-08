const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm({ name, email, message }) {
  const errors = {};

  if (!name || name.trim().length < 2) {
    errors.name = 'name';
  }

  if (!email || !EMAIL_REGEX.test(email.trim())) {
    errors.email = 'email';
  }

  if (!message || message.trim().length < 10) {
    errors.message = 'message';
  }

  return errors;
}

export function hasErrors(errors) {
  return Object.keys(errors).length > 0;
}
