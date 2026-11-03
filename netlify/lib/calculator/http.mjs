/* Small helpers shared by the calculator's functions. */
export const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { "content-type": "application/json", "cache-control": "no-store" },
});

export async function readBody(req) {
  if (req.method !== "POST") return null;
  const text = await req.text();
  if (text.length > 60000) return null;
  try { const b = JSON.parse(text); return b && typeof b === "object" ? b : null; } catch { return null; }
}
