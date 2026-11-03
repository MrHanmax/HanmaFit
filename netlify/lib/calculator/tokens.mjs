/* Signed tokens for the calculator. Two kinds, both signed with UNLOCK_SECRET
   (set in Netlify: Site configuration, Environment variables):

   coach  proves the coach signed in with COACH_PASSWORD. Lasts 30 days.
   plan   unlocks the full plan for one body: the sex, age, height and weight
          it was issued for. Lasts a year. Forwarded to someone else, it opens
          nothing, because their figures do not match.

   A token is base64url(JSON) "." base64url(HMAC). Nothing is stored. */

import { createHmac, createHash, timingSafeEqual } from "node:crypto";

const b64 = (buf) => Buffer.from(buf).toString("base64url");
const secret = () => process.env.UNLOCK_SECRET || "";
export const configured = () => secret().length >= 24;

function mac(kind, body) {
  return b64(createHmac("sha256", secret()).update(kind + ":" + body).digest()).slice(0, 32);
}

export function sign(kind, payload) {
  const body = b64(JSON.stringify(payload));
  return body + "." + mac(kind, body);
}

export function verify(kind, token) {
  if (!configured() || typeof token !== "string" || token.length > 600) return null;
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;
  const want = Buffer.from(mac(kind, body)), got = Buffer.from(sig);
  if (want.length !== got.length || !timingSafeEqual(want, got)) return null;
  try {
    const p = JSON.parse(Buffer.from(body, "base64url").toString());
    if (!p || typeof p !== "object" || (p.exp && Date.now() > p.exp)) return null;
    return p;
  } catch { return null; }
}

export function passwordMatches(given) {
  const real = process.env.COACH_PASSWORD || "";
  if (real.length < 8 || typeof given !== "string") return false;
  const h = (s) => createHash("sha256").update(s).digest();
  return timingSafeEqual(h(given), h(real));
}

const DAY = 864e5;
export const coachToken = () => sign("coach", { role: "coach", exp: Date.now() + 30 * DAY });

export function planToken(i, name) {
  return sign("plan", {
    s: i.sex, a: Math.round(i.age), h: Math.round(i.height), w: Math.round(i.weight * 10) / 10,
    n: String(name || "").slice(0, 60), iat: Date.now(), exp: Date.now() + 365 * DAY,
  });
}

/* A plan token fits figures that are the same person: same sex, a birthday
   either way, a few centimetres of tape error, and weight within 15 percent,
   so the plan stays open as they lose or gain. */
export function planFits(p, i) {
  return !!p && p.s === i.sex && Math.abs(p.a - i.age) <= 1 && Math.abs(p.h - i.height) <= 3 &&
    i.weight >= p.w * 0.85 && i.weight <= p.w * 1.15;
}
