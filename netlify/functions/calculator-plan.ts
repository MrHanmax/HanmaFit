// The calculator's working. The page at /calculator sends its figures here and
// renders what comes back. The full plan leaves only for a signed in coach or
// a visitor holding a plan token issued for their own figures; everyone else
// gets the free view. See netlify/lib/calculator/ for the engine and tokens.

import type { Config } from "@netlify/functions";
import { plan, normalise } from "../lib/calculator/model";
import { verify, planFits } from "../lib/calculator/tokens";
import { json, readBody } from "../lib/calculator/http";

export default async (req: Request): Promise<Response> => {
  const body = await readBody(req);
  if (!body) return json({ error: "Bad request" }, 400);
  const coach = !!verify("coach", body.coach);
  const i = normalise(body.i);
  const token = body.unlock ? verify("plan", body.unlock) : null;
  const fits = planFits(token, i);
  const paid = body.want !== "free" && (coach || fits);
  try {
    const out = plan(body.i, { paid, cal: paid ? body.cal : undefined, unitW: body.units });
    return json({ paid, coach, unlock: token ? (fits ? "ok" : "mismatch") : body.unlock ? "invalid" : null, name: fits && token ? token.n : "", ...out });
  } catch {
    return json({ error: "These figures could not be calculated." }, 422);
  }
};

export const config: Config = { path: "/api/calculator/plan" };
