const API_URL = import.meta.env.VITE_API_URL || '/api/contact';

export async function sendContactMessage({ name, email, message }) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message, sentAt: new Date().toISOString() }),
  });

  if (!response.ok) {
    throw new Error(`Error del servidor: ${response.status}`);
  }

  return response.json();
}
