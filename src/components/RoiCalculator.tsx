"use client";

import React, { useMemo, useState } from "react";

interface RoiCalculatorProps {
  onRequestPilotWithEstimate: (summary: {
    vertical: string;
    annualRevenueM: number;
    monthlyDocs: number;
    weeklyManualHours: number;
    estAnnualRecoveryUsd: number;
    estMonthlyHoursSaved: number;
  }) => void;
}

const VERTICALS: Record<string, { label: string; rate: number }> = {
  cnc: { label: "Precision Machining & Aerospace", rate: 0.016 },
  sheet_metal: { label: "Sheet Metal & Fabrication", rate: 0.018 },
  molding: { label: "Plastics & Packaging", rate: 0.015 },
  hauling: { label: "Waste, Aggregates & Hauling", rate: 0.022 },
};

export function RoiCalculator({ onRequestPilotWithEstimate }: RoiCalculatorProps) {
  const [vertical, setVertical] = useState("cnc");
  const [annualRevenueM, setAnnualRevenueM] = useState(25);
  const [monthlyDocs, setMonthlyDocs] = useState(1800);
  const [weeklyManualHours, setWeeklyManualHours] = useState(45);

  const calc = useMemo(() => {
    const profile = VERTICALS[vertical] || VERTICALS.cnc;
    const revUsd = Math.max(5, Math.min(150, annualRevenueM)) * 1_000_000;
    const estAnnualRecoveryUsd = Math.round(revUsd * profile.rate * 0.45);
    const estMonthlyRecoveryUsd = Math.round(estAnnualRecoveryUsd / 12);
    const estMonthlyHoursSaved = Math.round(
      Math.max(10, Math.min(120, weeklyManualHours)) * 4.3 * 0.72 +
        Math.min(45, (monthlyDocs / 1000) * 12)
    );
    return {
      label: profile.label,
      estAnnualRecoveryUsd,
      estMonthlyRecoveryUsd,
      estMonthlyHoursSaved,
    };
  }, [vertical, annualRevenueM, monthlyDocs, weeklyManualHours]);

  return (
    <section id="roi-calculator" className="border-b border-slate-200/80 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-50 via-[#F2F8F6] to-blue-50/40 p-6 sm:p-10 grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
          {/* Left Sliders */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                ROI Estimator
              </span>
              <h2 className="font-display text-3xl font-semibold tracking-[-0.025em] text-slate-950">
                Estimate your plant&apos;s annual savings
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="roi-vertical" className="block text-xs font-medium text-slate-600 mb-1.5">
                  Industry
                </label>
                <select
                  id="roi-vertical"
                  value={vertical}
                  onChange={(e) => setVertical(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-950 focus:border-emerald-600 focus:outline-none"
                >
                  {Object.entries(VERTICALS).map(([k, v]) => (
                    <option key={k} value={k}>
                      {v.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <label htmlFor="roi-revenue" className="text-slate-600">Annual Revenue</label>
                  <span className="font-semibold text-emerald-700 tabular-nums">${annualRevenueM}M</span>
                </div>
                <input
                  id="roi-revenue"
                  type="range"
                  min={5}
                  max={150}
                  step={5}
                  value={annualRevenueM}
                  onChange={(e) => setAnnualRevenueM(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <label htmlFor="roi-docs" className="text-slate-600">Monthly Tickets &amp; Invoices</label>
                  <span className="font-semibold text-blue-700 tabular-nums">{monthlyDocs.toLocaleString()}</span>
                </div>
                <input
                  id="roi-docs"
                  type="range"
                  min={300}
                  max={8000}
                  step={100}
                  value={monthlyDocs}
                  onChange={(e) => setMonthlyDocs(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <label htmlFor="roi-hours" className="text-slate-600">Weekly Manual Checking Hours</label>
                  <span className="font-semibold text-indigo-700 tabular-nums">{weeklyManualHours} hrs</span>
                </div>
                <input
                  id="roi-hours"
                  type="range"
                  min={10}
                  max={120}
                  step={5}
                  value={weeklyManualHours}
                  onChange={(e) => setWeeklyManualHours(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Right Elevated Summary Card */}
          <div className="lg:col-span-6 rounded-2xl border border-slate-200 border-t-[3px] border-t-emerald-500 bg-white p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between border-b border-slate-200 pb-4 gap-2">
              <span className="text-xs font-medium text-slate-600">{calc.label}</span>
              <span className="whitespace-nowrap rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-800">
                3&times; Pilot Guarantee
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <span className="text-xs font-medium text-slate-500">Est. Annual Cash Saved</span>
                <p className="mt-1 font-display text-3xl font-semibold tracking-[-0.03em] text-emerald-700 tabular-nums lg:text-[32px] xl:text-4xl">
                  ${calc.estAnnualRecoveryUsd.toLocaleString()}
                </p>
                <p className="mt-1 text-xs font-medium text-emerald-600 tabular-nums">
                  ~${calc.estMonthlyRecoveryUsd.toLocaleString()} / mo
                </p>
              </div>
              <div>
                <span className="text-xs font-medium text-slate-500">Monthly Hours Returned</span>
                <p className="mt-1 font-display text-3xl font-semibold tracking-[-0.03em] text-blue-700 tabular-nums lg:text-[32px] xl:text-4xl">
                  {calc.estMonthlyHoursSaved} hrs
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Back to ops &amp; finance
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                onRequestPilotWithEstimate({
                  vertical: calc.label,
                  annualRevenueM,
                  monthlyDocs,
                  weeklyManualHours,
                  estAnnualRecoveryUsd: calc.estAnnualRecoveryUsd,
                  estMonthlyHoursSaved: calc.estMonthlyHoursSaved,
                })
              }
              className="w-full rounded-full bg-emerald-600 px-5 py-3 text-[13px] font-semibold text-white hover:bg-emerald-500 transition-colors shadow-xs"
            >
              Test This in a 14-Day Pilot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
