import React from "react";
import { Building2, Clock, FileCheck2, ShieldCheck } from "lucide-react";
import { BENCHMARK_CARDS, BUSINESS_HELP_CARDS } from "@/data/faktryData";

const BENTO_ICONS = [Building2, Clock, FileCheck2, ShieldCheck];

const BENCHMARK_BARS = [
  { width: "w-11/12", bar: "bg-emerald-500", badge: "bg-emerald-50 text-emerald-800 border-emerald-200/80" },
  { width: "w-5/6", bar: "bg-blue-600", badge: "bg-blue-50 text-blue-800 border-blue-200/80" },
  { width: "w-3/4", bar: "bg-indigo-600", badge: "bg-indigo-50 text-indigo-800 border-indigo-200/80" },
  { width: "w-full", bar: "bg-amber-500", badge: "bg-amber-50 text-amber-800 border-amber-200/80" },
];

const HELP_THEMES = [
  {
    card: "border-emerald-200/80 bg-gradient-to-br from-emerald-50/60 to-white",
    icon: "border-emerald-200 bg-emerald-50 text-emerald-700",
    role: "bg-emerald-100/80 text-emerald-800",
  },
  {
    card: "border-blue-200/80 bg-gradient-to-br from-blue-50/60 to-white",
    icon: "border-blue-200 bg-blue-50 text-blue-700",
    role: "bg-blue-100/80 text-blue-800",
  },
  {
    card: "border-rose-200/80 bg-gradient-to-br from-rose-50/60 to-white",
    icon: "border-rose-200 bg-rose-50 text-rose-700",
    role: "bg-rose-100/80 text-rose-800",
  },
  {
    card: "border-amber-200/80 bg-gradient-to-br from-amber-50/60 to-white",
    icon: "border-amber-200 bg-amber-50 text-amber-700",
    role: "bg-amber-100/80 text-amber-800",
  },
];

export function BusinessImpactSection() {
  return (
    <section id="impact" className="border-b border-slate-200/80 bg-slate-50/70">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
            Business Impact
          </span>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.025em] text-slate-950 sm:text-[40px] sm:leading-[1.12]">
            Deploy agents that spot errors, save hours, and report back
          </h2>
        </div>

        {/* Top Asymmetric Row: Navy-to-Emerald Highlight Card + Modeled Plant Benchmarks */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="lg:col-span-5 rounded-[24px] brand-gradient-card p-8 text-white flex flex-col justify-between min-h-[290px] shadow-sm">
            <div className="space-y-4">
              <span className="inline-block rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold text-emerald-200">
                Built for non-technical teams
              </span>
              <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] leading-snug text-white">
                Keep your existing ERP. Gain a 24/7 audit team.
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-200/90 pt-6">
              Faktry AI works alongside your current accounting and shop-floor tools,
              surfacing verified exceptions without changing how your staff works.
            </p>
          </div>

          <div className="lg:col-span-7 rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8 space-y-5 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="font-display text-base font-semibold text-slate-950">
                  Modeled Monthly Plant Benchmarks
                </h3>
                <p className="text-xs text-slate-500">
                  Estimated monthly savings &amp; reclaimed team hours
                </p>
              </div>
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700">
                Verified in 14-day pilot
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {BENCHMARK_CARDS.map((bm, idx) => {
                const style = BENCHMARK_BARS[idx % BENCHMARK_BARS.length];
                return (
                  <div
                    key={bm.sector}
                    className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-4 space-y-3"
                  >
                    <p className="text-xs font-semibold text-slate-700">{bm.sector}</p>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-display text-2xl font-semibold tracking-[-0.02em] text-slate-950 tabular-nums">
                        {bm.savings}
                        <span className="text-xs font-normal text-slate-500">/mo</span>
                      </span>
                      <span
                        className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tabular-nums ${style.badge}`}
                      >
                        {bm.hours}/mo
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200/80">
                      <div className={`h-full rounded-full ${style.bar} ${style.width}`} />
                    </div>
                    <p className="text-[11px] text-slate-500">{bm.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2x2 Color-Coded Executive Value Bento Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {BUSINESS_HELP_CARDS.map((card, idx) => {
            const Icon = BENTO_ICONS[idx % BENTO_ICONS.length];
            const theme = HELP_THEMES[idx % HELP_THEMES.length];
            return (
              <div
                key={card.role}
                className={`rounded-[24px] border p-6 sm:p-7 flex flex-col justify-between space-y-7 shadow-2xs ${theme.card}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border shadow-2xs ${theme.icon}`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold ${theme.role}`}
                  >
                    {card.role}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-lg font-semibold text-slate-950">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {card.bullets.join(". ")}.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
