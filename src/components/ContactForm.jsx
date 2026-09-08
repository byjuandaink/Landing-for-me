import { useState } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { validateContactForm, hasErrors } from '../utils/validation';
import { sendContactMessage } from '../utils/api';
import '../styles/ContactForm.css';

const INITIAL_STATE = { name: '', email: '', message: '' };

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);
    setErrors(validationErrors);

    if (hasErrors(validationErrors)) return;

    setStatus('sending');
    try {
      await sendContactMessage(formData);
      setStatus('success');
      setFormData(INITIAL_STATE);
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="section contact">
      <p className="eyebrow">{t('contact.eyebrow')}</p>
      <h2 className="contact__title">{t('contact.title')}</h2>
      <p className="contact__subtitle">{t('contact.subtitle')}</p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-form__field">
          <label htmlFor="name">{t('contact.name')}</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="email">{t('contact.email')}</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="message">{t('contact.message')}</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
          />
        </div>

        <button className="btn btn--primary" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? t('contact.sending') : t('contact.send')}
        </button>

        {status === 'success' && <p className="contact-form__status contact-form__status--ok">{t('contact.success')}</p>}
        {status === 'error' && <p className="contact-form__status contact-form__status--error">{t('contact.error')}</p>}
      </form>
    </section>
  );
}
