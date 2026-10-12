// Runs automatically on every Netlify form submission and copies trial leads into Brevo.
// Set BREVO_API_KEY (and optionally BREVO_LIST_ID) in Netlify: Site configuration → Environment variables.
// Goal, time and source stay in Netlify Forms; only standard Brevo fields are sent so the call never fails on a missing attribute.
// Without the key, leads still arrive in Netlify Forms and its email notifications.

export default async (req) => {
  const { payload } = await req.json();
  if (payload?.form_name !== 'trial') return new Response('ignored');

  const key = process.env.BREVO_API_KEY;
  if (!key) return new Response('no brevo key, stored in Netlify Forms only');

  const d = payload.data || {};
  const phone = d.whatsapp ? `+${String(d.whatsapp).replace(/\D/g, '')}` : undefined;
  const listId = Number(process.env.BREVO_LIST_ID);

  const body = {
    updateEnabled: true,
    attributes: {
      FIRSTNAME: d.name || '',
      SMS: phone,
    },
    ...(listId ? { listIds: [listId] } : {}),
  };

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: { 'api-key': key, 'content-type': 'application/json', accept: 'application/json' },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  if (!res.ok) console.error('Brevo rejected the lead', res.status, text);
  return new Response(res.ok ? 'sent to brevo' : `brevo error ${res.status}`);
};
