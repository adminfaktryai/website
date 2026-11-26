import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { KEY_NUMBERS } from "@/data/faktryData";

interface HeroSectionProps {
  onOpenAuditModal: () => void;
}

const STAT_ACCENTS = [
  "border-t-emerald-500 text-emerald-700",
  "border-t-blue-600 text-blue-700",
  "border-t-amber-500 text-amber-700",
  "border-t-indigo-600 text-indigo-700",
];

export function HeroSection({ onOpenAuditModal }: HeroSectionProps) {
  return (
    <section className="hero-aura border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6 sm:pt-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          {/* Left Headline + Pill Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-800">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Manufacturing &amp; Industrial Agents
            </div>

            <h1 className="font-display text-4xl font-bold tracking-[-0.03em] leading-[1.06] text-slate-950 sm:text-5xl lg:text-[56px]">
              Catch hidden profit leaks.{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Run every agent in one place.
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-colors"
              >
                Start 14-Day Pilot
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#swarm-board"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-2xs hover:bg-slate-50 transition-colors"
              >
                <Play className="h-3.5 w-3.5 text-emerald-600" />
                Run Agent Simulation
              </a>
            </div>
          </div>

          {/* Right Summary + Key Guarantees */}
          <div className="lg:col-span-5 space-y-4 lg:pb-1">
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              <strong className="font-semibold text-slate-950">Faktry AI</strong> finds
              billing and delivery errors in seconds, gives managers one board to
              control every agent, and builds custom agents as your business grows.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-emerald-200 bg-emerald-50/70 px-3 py-1 text-xs font-medium text-emerald-800">
                Zero ERP changes
              </span>
              <span className="rounded-full border border-blue-200 bg-blue-50/70 px-3 py-1 text-xs font-medium text-blue-800">
                Human sign-off gate
              </span>
              <span className="rounded-full border border-amber-200 bg-amber-50/70 px-3 py-1 text-xs font-medium text-amber-800">
                Custom agents on demand
              </span>
            </div>
          </div>
        </div>

        {/* Color-Accented 4-Stat Strip */}
        <div className="mt-10 grid grid-cols-2 gap-3.5 lg:grid-cols-4">
          {KEY_NUMBERS.map((n, idx) => (
            <div
              key={n.label}
              className={`rounded-2xl border border-slate-200 border-t-4 bg-white p-5 shadow-xs ${STAT_ACCENTS[idx % STAT_ACCENTS.length]}`}
            >
              <p className="font-display text-2xl font-bold tracking-tight text-slate-950 tabular-nums sm:text-3xl">
                {n.value}
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide">
                {n.label}
              </p>
              <p className="mt-1 text-xs text-slate-500">{n.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
