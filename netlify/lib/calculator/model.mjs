/* The calculator's working, moved off the page. The page sends the figures it
   reads from its form; this turns them into an Assessment, runs the engine and
   hands back the shape the page's renderers read. A visitor who has not
   unlocked gets the free view: the baseline, maintenance, the phases that start
   in the first four weeks and those four weeks themselves. Everything after
   that, the endpoint and the calibration stay here. */

import HE from "./engine.mjs";

export const FREE_WEEKS = 4;
const LB = 2.2046226;

const ENUMS = {
  sex: ["female", "male"],
  ancestry: ["south_asian", "east_asian", "southeast_asian", "european", "african", "hispanic", "middle_eastern", "unspecified"],
  goal: ["fat_loss", "recomposition", "muscle_gain", "weight_gain", "maintenance"],
  tage: ["untrained", "novice", "intermediate", "advanced", "veteran"],
  job: ["seated", "seated_active", "standing", "light_manual", "heavy_manual"],
  bfMethod: ["dxa", "bia_multifrequency", "bia_consumer", "skinfold_jp7", "none"],
  diabetes: ["none", "family_history", "prediabetes", "type_2", "type_1", "unspecified"],
  thyroid: ["none", "hypothyroid_treated", "hypothyroid_untreated", "hyperthyroid"],
};
const pick = (v, list, d) => (list.includes(v) ? v : d);
const num = (v, lo, hi, d) => { const x = Number(v); return Number.isFinite(x) ? Math.min(hi, Math.max(lo, x)) : d; };

/* The form as the page read it, checked and clamped, so nothing a browser
   sends can push the engine outside the ranges the form itself allows. */
export function normalise(raw) {
  const r = raw && typeof raw === "object" ? raw : {};
  const sessions = (Array.isArray(r.sessions) ? r.sessions : []).slice(0, 6).map((x) => ({
    label: String(x && x.label || "Session").slice(0, 60),
    met: num(x && x.met, 1, 15, 5),
    resist: !!(x && x.resist),
    n: Math.round(num(x && x.n, 0, 14, 0)),
    mins: Math.round(num(x && x.mins, 0, 300, 0)),
  })).filter((x) => x.n > 0 && x.mins > 0);
  const c = r.clinical || {};
  const sex = pick(r.sex, ENUMS.sex, "female");
  const bf = Number(r.bf);
  const i = {
    sex, age: num(r.age, 16, 90, 30), height: num(r.height, 120, 230, 165), weight: num(r.weight, 30, 260, 70),
    ancestry: pick(r.ancestry, ENUMS.ancestry, "unspecified"), goal: pick(r.goal, ENUMS.goal, "fat_loss"),
    steps: Math.round(num(r.steps, 0, 40000, 7000)), job: pick(r.job, ENUMS.job, "seated"), sleep: num(r.sleep, 3, 12, 7),
    sessions,
    neck: num(r.neck, 0, 80, 0), waist: num(r.waist, 0, 220, 0), hip: num(r.hip, 0, 220, 0),
    tage: pick(r.tage, ENUMS.tage, "novice"), weeks: Math.round(num(r.weeks, 8, 52, 24)),
    bf: Number.isFinite(bf) ? num(bf, 3, 65, 25) : NaN, bfGiven: Number.isFinite(bf) && bf > 0,
    bfMethod: pick(r.bfMethod, ENUMS.bfMethod, "bia_multifrequency"),
    clinical: {
      diabetes: pick(c.diabetes, ENUMS.diabetes, "none"), thyroid: pick(c.thyroid, ENUMS.thyroid, "none"),
      pcos: sex === "female" && !!c.pcos, pregnantOrPostpartum: sex === "female" && !!c.pregnantOrPostpartum,
      disorderedEatingHistory: !!c.disorderedEatingHistory, creatineSupplement: !!c.creatineSupplement,
    },
    rate: r.rate === null || r.rate === undefined ? null : num(r.rate, 0.05, 1.5, null),
  };
  i.sess = i.sessions.filter((x) => x.resist).reduce((a, x) => a + x.n, 0);
  i.sessAll = i.sessions.reduce((a, x) => a + x.n, 0);
  return i;
}

function toAssessment(i) {
  const a = {
    sex: i.sex, ageYears: i.age, heightCm: i.height, weightKg: i.weight, ancestry: i.ancestry,
    goal: i.goal, trainingAge: i.tage, dailySteps: i.steps, occupation: i.job,
    sessions: i.sessions.map((x) => ({ label: x.label, met: x.met, minutes: x.mins, perWeek: x.n, epocEligible: x.met >= 5 })),
    sleepHours: i.sleep, programmeWeeks: i.weeks,
    circumferences: i.neck && i.waist ? { neck: i.neck, waist: i.waist, hip: i.sex === "female" ? i.hip : undefined } : undefined,
    clinical: i.clinical,
  };
  if (i.bfGiven) a.measured = { bodyFatPercent: i.bf, method: i.bfMethod || "bia_multifrequency" };
  if (i.rate !== null && i.rate !== undefined) a.ratePercentPerWeek = i.rate;
  if (i.calMaint) { a.calibratedMaintenanceKcal = i.calMaint; a.calibratedMaintenanceSeKcal = i.calSe; }
  return a;
}

function run(i) {
  const a = toAssessment(i), res = HE.runEngine(a);
  const c = res.composition, en = res.energy, t = res.trajectory;
  const half = (x) => (x.high - x.low) / 2;
  const weekly = en.eat.perSession.reduce((s, x) => s + x.weeklyKcal, 0);
  const last = t.weeks[t.weeks.length - 1];
  const weeks = t.weeks.map((w) => ({
    w: w.week, phase: w.phase, intake: w.intakeKcal, tissue: w.tissueKg, scale: w.scaleKg, spend: w.expenditureKcal,
    fat: w.fatMassKg, lean: w.fatFreeMassKg, bal: w.balanceKcal, dF: w.deltaFatKg, dL: w.deltaLeanKg,
  }));
  return {
    bmi: c.bmi, bf: c.bodyFatPercent.value, bfSe: half(c.bodyFatPercent), fm: c.fatMassKg, ffm: c.fatFreeMassKg, ffmi: c.ffmi,
    comp: c.bodyFatPercent.estimates.map((e) => [e.method, e.value, e.note]),
    rmr: en.rmr.value, rmrSe: half(en.rmr),
    eqs: en.rmr.estimates.map((e) => [e.method, e.value, 0, e.note]),
    waking: en.neat.fromWaking, stepKcal: en.neat.fromSteps, occ: en.neat.fromOccupation, neat: en.neat.total, eat: en.eat.total,
    tRate: en.tefRate, maint: en.maintenance.value, maintSe: half(en.maintenance),
    predMaint: en.predictedMaintenance.value, predSe: half(en.predictedMaintenance),
    cal: en.calibrationOffsetKcal, calibrated: !!a.calibratedMaintenanceKcal,
    factor: en.factorCrossCheck.factor, factorVal: en.factorCrossCheck.value,
    sessKcal: i.sessAll ? weekly / i.sessAll : 0,
    ancNote: HE.ancestryFactor(i.ancestry).note,
    clinical: HE.clinicalFlags(a),
    traj: {
      // The eighth entry is the phase's average weekly change in tissue, so the
      // page can quote it without holding the weeks it comes from.
      phases: t.phases.map((p) => {
        const start = p.startWeek < 2 ? i.weight : weeks[p.startWeek - 2].tissue;
        const chg = (weeks[p.endWeek - 1].tissue - start) / (p.endWeek - p.startWeek + 1);
        return [p.name, p.startWeek, p.endWeek, p.intakeKcal, { p: p.macros.proteinG, c: p.macros.carbG, f: p.macros.fatG }, p.intent, p, chg];
      }),
      weeks,
      fm: last.fatMassKg, ffm: last.fatFreeMassKg, end: t.modelledEndpointKg, dFat: t.totalFatChangeKg, dLean: t.totalLeanChangeKg,
      naive: t.naiveEndpointKg, at: t.adaptiveThermogenesisKcal, drift: t.neatDriftKcal,
      floorHit: t.floorHit ? [t.floorHit.phase, t.floorHit.askedKcal, t.floorHit.floorKcal] : null,
      rate: t.ratePercent, kind: HE.goalKind(i.goal), capped: t.capped, recommended: t.recommendedRatePercent,
      chosen: t.rateChosen, overCap: t.overCap, start: i.weight,
    },
  };
}

/* ── calibration ─────────────────────────────────────────────────── */

/* Daily log lines: an optional date, then weight, then intake. A dash marks a
   missing reading. Dates, where given, set the day count; otherwise lines are
   consecutive days. */
function parseLog(text, toKg) {
  const rows = []; let day = 0, firstDate = null;
  String(text || "").slice(0, 20000).split(/\n/).slice(0, 400).forEach((raw) => {
    let line = raw.trim(); if (!line) return;
    let date = null, m;
    if ((m = /^(\d{4})-(\d{1,2})-(\d{1,2})\b/.exec(line))) date = Date.UTC(+m[1], +m[2] - 1, +m[3]);
    else if ((m = /^(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?(?=[\s,;]|$)/.exec(line)) || (m = /^(\d{1,2})\.(\d{1,2})\.(\d{2,4})(?=[\s,;]|$)/.exec(line))) {
      const y = m[3] ? (+m[3] < 100 ? 2000 + +m[3] : +m[3]) : 2026;
      date = Date.UTC(y, +m[2] - 1, +m[1]);
    }
    if (m && date !== null) line = line.slice(m[0].length);
    const tok = line.split(/[\s,;\t]+/).filter(Boolean).slice(0, 3);
    const nums = tok.map((x) => { const v = parseFloat(x.replace(/[^0-9.]/g, "")); return x.trim() === "-" || !isFinite(v) ? null : v; });
    let w = nums[0], k = nums.length > 1 ? nums[1] : null, cd = nums.length > 2 ? nums[2] : null;
    if (cd !== null && (cd < 1 || cd > 45)) cd = null;
    if (w !== null && k !== null && w > 600 && k < 600) { const sw = w; w = k; k = sw; }
    if (w !== null) w = toKg(w);
    if (w !== null && (w < 30 || w > 250)) w = null;
    if (k !== null && (k < 500 || k > 9000)) k = null;
    if (date !== null) { if (firstDate === null) firstDate = date; day = Math.round((date - firstDate) / 864e5) + 1; }
    else day += 1;
    rows.push({ day, w, k, cd: cd === null ? null : Math.round(cd) });
  });
  return rows;
}

/* The daily balance behind a weekly trend, from the body model rather than a
   flat 7,700 kcal a kilo: part of a trained person's slow gain is lean tissue
   at 1,800 a kilo, and a steady weight under training is a small deficit. */
function balanceFor(kgWeek, i, r, intake) {
  return HE.impliedDailyBalance({
    trendKgPerWeek: kgWeek, maintenanceKcal: r.predMaint, fatMassKg: r.fm, ffmKg: r.ffm, weightKg: i.weight,
    proteinG: HE.buildMacros(intake, i.weight, r.ffm, r.bf, i.goal, i.sex, i.tage).proteinG,
    sex: i.sex, trainingAge: i.tage, resistanceSessionsPerWeek: i.sess, sleepHours: i.sleep,
  });
}

function calibrate(i, r, cs, unitW) {
  const toKg = (v) => (unitW === "lb" ? v / LB : v);
  const out = { ok: false, warn: [] };
  let slope, slopeSe, meanK, kSe, days, engine = null;
  if (cs.mode === "weekly") {
    const K = +cs.intake, Wk = +cs.weeks, A = toKg(+cs.from), Z = toKg(+cs.to);
    if (!(K > 0 && Wk > 0 && A > 0 && Z > 0)) { out.reason = "Fill in all four figures."; return out; }
    if (Wk < 2) { out.reason = "At least two weeks between the averages are needed for a trend to show through the noise."; return out; }
    slope = (Z - A) / (Wk * 7); slopeSe = Math.SQRT2 * 0.3 / (Wk * 7);
    meanK = K; kSe = K * 0.05; days = Wk * 7;
    out.warn.push("Estimated intake carries most of the uncertainty here. A logged fortnight narrows it.");
  } else {
    const rows = parseLog(cs.log, toKg);
    if (!rows.length) { out.reason = "Paste or type your logs above."; return out; }
    const skip = cs.wash ? 7 : 0;
    const use = rows.filter((x) => x.day > skip);
    const ws = use.filter((x) => x.w !== null), ks = use.filter((x) => x.k !== null);
    const span = use.length ? use[use.length - 1].day - use[0].day + 1 : 0;
    if (ws.length < 10 || span < 14) {
      out.reason = (skip ? "With the first week set aside, " : "") + ws.length + " weight readings across " + span +
        " days. At least ten readings across fourteen days are needed before a trend means anything.";
      return out;
    }
    if (ks.length < 7) { out.reason = "Only " + ks.length + " days carry an intake figure. Weight alone cannot separate a change in requirement from a change in what was eaten."; return out; }
    const meanKGuess = ks.reduce((a, x) => a + x.k, 0) / ks.length;
    // Regression on every reading, luteal fluid modelled out where cycle days
    // are given, the trend priced by the body model.
    const res = HE.calibrate(rows.filter((x) => x.w !== null).map((x) => ({
      day: x.day, weightKg: x.w, intakeKcal: x.k === null ? undefined : x.k, cycleDay: x.cd === null ? undefined : x.cd,
    })), r.predMaint, {
      menstruating: i.sex === "female" && i.age < 55, noWashout: !cs.wash,
      balanceFromTrend: (kgw) => balanceFor(kgw, i, r, meanKGuess),
    });
    if (!res.ok) { out.reason = res.reason; return out; }
    res.flags.forEach((f) => {
      if (/differs from the prediction|Prediction confirmed|agree within/i.test(f.title)) return;
      out.warn.push(f.title + ". " + f.detail);
    });
    slope = res.trendKgPerWeek / 7; meanK = res.meanIntakeKcal; days = span; engine = res;
  }
  const bal = balanceFor(slope * 7, i, r, meanK);
  let measured, se;
  if (engine) { measured = engine.measuredMaintenance; se = engine.se; }
  else {
    const dB = (balanceFor((slope + 0.002) * 7, i, r, meanK) - balanceFor((slope - 0.002) * 7, i, r, meanK)) / 0.004;
    measured = meanK - bal; se = Math.sqrt(kSe * kSe + Math.pow(slopeSe * dB, 2));
  }
  out.ok = true; out.maint = Math.round(measured); out.se = Math.max(40, Math.round(se));
  out.trend = slope * 7; out.meanK = meanK; out.bal = bal; out.days = days;
  return out;
}

/* ── the free view ───────────────────────────────────────────────── */

/* What a visitor who has not unlocked receives. Later phases keep their name
   and weeks, so the page can show what is coming, and nothing else. Later
   weeks keep only their number and a coarse shape for the blurred line on the
   chart: a fraction of its own height, never a weight. */
function freeView(r) {
  const t = r.traj, open = (p) => p[1] <= FREE_WEEKS;
  const tail = t.weeks.slice(FREE_WEEKS - 1).map((w) => w.tissue);
  const lo = Math.min(...tail), range = Math.max(0.5, Math.max(...tail) - lo);
  const shape = (v) => Math.round((v - lo) / range * 50) / 50;
  return {
    ...r,
    traj: {
      ...t,
      phases: t.phases.map((p) => (open(p) ? p : [p[0], p[1], p[2], 0, { p: 0, c: 0, f: 0 }, "", { locked: true }, 0])),
      weeks: t.weeks.map((w, k) => (k < FREE_WEEKS ? (k === FREE_WEEKS - 1 ? { ...w, f: shape(w.tissue) } : w) : { w: w.w, f: shape(w.tissue) })),
      fm: null, ffm: null, end: null, dFat: null, dLean: null, naive: null, at: null, drift: null,
    },
  };
}

/* The whole calculation for one request. paid decides what leaves. */
export function plan(rawInputs, { paid, cal, unitW }) {
  const i = normalise(rawInputs);
  let r = run(i);
  let c = { ok: false, reason: "" };
  if (paid && cal && typeof cal === "object") {
    c = calibrate(i, r, cal, unitW === "lb" ? "lb" : "kg");
    if (c.ok && cal.use) { i.calMaint = c.maint; i.calSe = c.se; r = run(i); }
  }
  return paid ? { r, c } : { r: freeView(r), c: { ok: false, reason: "" } };
}
