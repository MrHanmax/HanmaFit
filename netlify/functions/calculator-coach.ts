// Coach access to the calculator.
//   login  { password }        → { coach }  a 30 day coach token
//   issue  { coach, i, name }  → { token }  a plan token for these figures
// Needs COACH_PASSWORD and UNLOCK_SECRET in Netlify: Site configuration →
// Environment variables. Without them coach access is simply off.

import type { Config } from "@netlify/functions";
import { normalise } from "../lib/calculator/model";
import { configured, verify, passwordMatches, coachToken, planToken } from "../lib/calculator/tokens";
import { json, readBody } from "../lib/calculator/http";

const pause = (ms: number) => new Promise((ok) => setTimeout(ok, ms));

export default async (req: Request): Promise<Response> => {
  const body = await readBody(req);
  if (!body) return json({ error: "Bad request" }, 400);
  if (!configured() || (process.env.COACH_PASSWORD || "").length < 8)
    return json({ error: "Coach access is not set up yet. Add COACH_PASSWORD and UNLOCK_SECRET in Netlify." }, 503);

  if (body.action === "login") {
    if (!passwordMatches(body.password)) { await pause(800); return json({ error: "Wrong password." }, 401); }
    return json({ coach: coachToken() });
  }
  if (!verify("coach", body.coach)) return json({ error: "Sign in again." }, 401);
  if (body.action === "check") return json({ ok: true });
  if (body.action === "issue") return json({ token: planToken(normalise(body.i), body.name) });
  return json({ error: "Unknown action" }, 400);
};

export const config: Config = { path: "/api/calculator/coach" };
