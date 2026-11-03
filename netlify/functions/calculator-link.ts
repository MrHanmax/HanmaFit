// Makes a short link for a set of figures, and for a paid plan when a plan
// token comes with them: POST { p, u? } → { url }. Only a token this site
// signed is kept, so a short link can never carry a forged unlock.

import type { Config } from "@netlify/functions";
import { verify } from "../lib/calculator/tokens";
import { json, readBody } from "../lib/calculator/http";
import { store, newId, validFigures, type ShortLink } from "../lib/calculator/links";

export default async (req: Request): Promise<Response> => {
  const body = await readBody(req);
  if (!body || !validFigures(body.p)) return json({ error: "Bad request" }, 400);
  const link: ShortLink = { p: body.p, t: Date.now() };
  if (body.u !== undefined) {
    if (!verify("plan", body.u)) return json({ error: "That plan link is not valid." }, 400);
    link.u = body.u as string;
  }
  const id = newId();
  await store().setJSON(id, link);
  return json({ url: new URL(req.url).origin + "/c/" + id });
};

export const config: Config = { path: "/api/calculator/link" };
