/* Short links for the calculator: hanmafit.com/c/<id> stands for
   /calculator#p=<figures>&u=<plan token>. Kept in a Netlify Blobs store.
   Outside Netlify (local tests) a store in memory stands in. */

import { getStore } from "@netlify/blobs";
import { randomBytes } from "node:crypto";

export interface ShortLink { p: string; u?: string; t: number }

interface Store {
  get(key: string, opts: { type: "json" }): Promise<unknown>;
  setJSON(key: string, value: unknown): Promise<unknown>;
}

// Shared across functions loaded in one process, as the real store is.
const g = globalThis as { __hanmaLinks?: Map<string, unknown> };
const memory = (g.__hanmaLinks ??= new Map<string, unknown>());
const memoryStore: Store = {
  async get(key) { return memory.get(key) ?? null; },
  async setJSON(key, value) { memory.set(key, value); return undefined; },
};

export function store(): Store {
  try { return getStore({ name: "calculator-links", consistency: "strong" }) as unknown as Store; }
  catch { return memoryStore; }
}

const ALPHABET = "abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789";
/** Eight characters from 56: about 10^14 links before two could collide. */
export function newId(): string {
  return Array.from(randomBytes(8), (b) => ALPHABET[b % ALPHABET.length]).join("");
}

export const validId = (id: unknown): id is string => typeof id === "string" && /^[a-zA-Z0-9]{8}$/.test(id);
export const validFigures = (p: unknown): p is string => typeof p === "string" && p.length > 10 && p.length < 4000 && /^[A-Za-z0-9_-]+$/.test(p);
