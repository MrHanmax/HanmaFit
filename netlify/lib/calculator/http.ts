/* Small helpers shared by the calculator's functions. */
export const json = (body: unknown, status = 200): Response => new Response(JSON.stringify(body), {
  status,
  headers: { "content-type": "application/json", "cache-control": "no-store" },
});

/** The request's JSON body, or null if it is not a POST, too large or not an object. */
export async function readBody(req: Request): Promise<Record<string, unknown> | null> {
  if (req.method !== "POST") return null;
  const text = await req.text();
  if (text.length > 60000) return null;
  try {
    const b: unknown = JSON.parse(text);
    return b && typeof b === "object" && !Array.isArray(b) ? (b as Record<string, unknown>) : null;
  } catch { return null; }
}
