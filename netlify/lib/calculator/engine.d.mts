/* Types for the compiled engine in engine.mjs: only the parts the calculator's
   server reads. The full types live with the engine's source in the Hanma app. */

export interface Range { value: number; low: number; high: number }
export interface Estimate { method: string; value: number; note: string }
export interface MacroSplit { proteinG: number; carbG: number; fatG: number; fibreG: number }
export interface Flag { level: string; title: string; detail: string; action?: string }

export interface Session { label: string; met: number; minutes: number; perWeek: number; epocEligible: boolean }

export interface Assessment {
  sex: "female" | "male";
  ageYears: number;
  heightCm: number;
  weightKg: number;
  ancestry: string;
  goal: string;
  trainingAge: string;
  dailySteps: number;
  occupation: string;
  sessions: Session[];
  sleepHours: number;
  programmeWeeks: number;
  circumferences?: { neck: number; waist: number; hip?: number };
  clinical: Record<string, string | boolean>;
  measured?: { bodyFatPercent: number; method: string };
  ratePercentPerWeek?: number;
  calibratedMaintenanceKcal?: number;
  calibratedMaintenanceSeKcal?: number;
}

export interface Phase {
  name: string;
  startWeek: number;
  endWeek: number;
  intakeKcal: number;
  macros: MacroSplit;
  intent: string;
  maintenanceKcal?: number;
  basis?: string;
  intensity?: number;
  targetKgPerWeek?: number;
  askedKcal?: number;
  limitKcal?: number;
}

export interface WeekRow {
  week: number;
  phase: string;
  intakeKcal: number;
  tissueKg: number;
  scaleKg: number;
  expenditureKcal: number;
  fatMassKg: number;
  fatFreeMassKg: number;
  balanceKcal: number;
  deltaFatKg: number;
  deltaLeanKg: number;
}

export interface EngineResult {
  composition: {
    bmi: number;
    bodyFatPercent: Range & { estimates: Estimate[] };
    fatMassKg: number;
    fatFreeMassKg: number;
    ffmi: number;
  };
  energy: {
    rmr: Range & { estimates: Estimate[] };
    neat: { fromWaking: number; fromSteps: number; fromOccupation: number; total: number };
    eat: { total: number; perSession: { weeklyKcal: number }[] };
    tefRate: number;
    maintenance: Range;
    predictedMaintenance: Range;
    calibrationOffsetKcal?: number;
    factorCrossCheck: { factor: number; value: number };
  };
  trajectory: {
    phases: Phase[];
    weeks: WeekRow[];
    modelledEndpointKg: number;
    naiveEndpointKg: number;
    totalFatChangeKg: number;
    totalLeanChangeKg: number;
    adaptiveThermogenesisKcal: number;
    neatDriftKcal: number;
    floorHit?: { phase: string; askedKcal: number; floorKcal: number };
    ratePercent: number;
    recommendedRatePercent: number;
    rateChosen: boolean;
    capped: boolean;
    overCap: boolean;
  };
}

export interface CalibrationLog { day: number; weightKg: number; intakeKcal?: number; cycleDay?: number }
export interface CalibrationResult {
  ok: boolean;
  reason?: string;
  flags: Flag[];
  trendKgPerWeek: number;
  meanIntakeKcal: number;
  measuredMaintenance: number;
  se: number;
}

declare const HanmaEngine: {
  runEngine(a: Assessment): EngineResult;
  ancestryFactor(ancestry: string): { note: string };
  clinicalFlags(a: Assessment): Flag[];
  goalKind(goal: string): "deficit" | "surplus" | "recomp" | "hold";
  buildMacros(intake: number, weightKg: number, ffmKg: number, bodyFatPercent: number, goal: string, sex: string, trainingAge: string): MacroSplit;
  impliedDailyBalance(o: {
    trendKgPerWeek: number; maintenanceKcal: number; fatMassKg: number; ffmKg: number; weightKg: number; proteinG: number;
    sex: string; trainingAge: string; resistanceSessionsPerWeek: number; sleepHours: number;
  }): number;
  calibrate(logs: CalibrationLog[], predictedMaintenance: number, o: {
    menstruating: boolean; noWashout: boolean; balanceFromTrend: (kgPerWeek: number) => number;
  }): CalibrationResult;
};
export default HanmaEngine;
