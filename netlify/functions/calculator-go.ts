// Opens a short link: /c/<id> → /calculator#p=<figures>&u=<plan token>.
// The figures travel after the #, which the browser keeps and never sends on.

import type { Config, Context } from "@netlify/functions";
import { store, validId, type ShortLink } from "../lib/calculator/links";

export default async (_req: Request, context: Context): Promise<Response> => {
  const id = context.params?.id;
  const link = validId(id) ? ((await store().get(id, { type: "json" })) as ShortLink | null) : null;
  const to = link ? "/calculator#p=" + link.p + (link.u ? "&u=" + link.u : "") : "/calculator";
  return new Response(null, { status: 302, headers: { location: to, "cache-control": "no-store" } });
};

export const config: Config = { path: "/c/:id" };
