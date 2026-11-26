"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Check, Copy, X } from "lucide-react";
import { FaktryLogo } from "@/components/SwarmBotAvatar";

export interface PilotEstimateContext {
  vertical: string;
  annualRevenueM: number;
  monthlyDocs: number;
  weeklyManualHours: number;
  estAnnualRecoveryUsd: number;
  estMonthlyHoursSaved: number;
}

const PILOT_PHASES = [
  {
    days: "Days 1–3",
    title: "Share 30 days of exports",
    note: "CSV, Excel, or Google Sheets",
    accent: "border-t-emerald-500",
    pill: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    days: "Days 4–9",
    title: "Agents find leaks",
    note: "Tailored to your workflows",
    accent: "border-t-blue-600",
    pill: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    days: "Days 10–14",
    title: "Review verified dollars",
    note: "3× ROI guarantee",
    accent: "border-t-indigo-600",
    pill: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
];

export function PilotSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <>
      {/* 14-Day Pilot Steps */}
      <section id="pilot" className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl space-y-3">
              <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                14-Day Leakage Audit
              </span>
              <h2 className="font-display text-3xl font-semibold tracking-[-0.025em] text-slate-950 sm:text-[38px]">
                Find 3&times; our fee in 14 days—or pay nothing.
              </h2>
            </div>

            <button
              type="button"
              onClick={onOpenModal}
              className="rounded-full bg-emerald-600 px-6 py-3 text-[14px] font-semibold text-white shadow-xs hover:bg-emerald-500 transition-colors shrink-0"
            >
              Schedule 14-Day Pilot
            </button>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {PILOT_PHASES.map((phase) => (
              <div
                key={phase.days}
                className={`rounded-[22px] border border-slate-200 border-t-[3px] bg-slate-50/70 p-6 space-y-2.5 shadow-2xs ${phase.accent}`}
              >
                <span
                  className={`inline-block rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-semibold ${phase.pill}`}
                >
                  {phase.days}
                </span>
                <p className="font-display text-base font-semibold text-slate-950">
                  {phase.title}
                </p>
                <p className="text-xs text-slate-600">{phase.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navy-to-Emerald Executive CTA Banner */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] brand-gradient-card px-6 py-16 sm:px-12 text-center text-white shadow-md space-y-6">
            <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1 text-xs font-semibold text-emerald-200">
              AI Operations Platform
            </span>
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-[-0.03em] text-white sm:text-[42px] sm:leading-[1.12]">
              Launch your Agent Board in 14 days
            </h2>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-200/90">
              One workspace to spot leaks, manage every agent, and build custom
              workflows for your business.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <button
                type="button"
                onClick={onOpenModal}
                className="rounded-full bg-emerald-500 px-6 py-3 text-[14px] font-semibold text-slate-950 hover:bg-emerald-400 transition-colors shadow-xs"
              >
                Start 14-Day Pilot
              </button>
              <a
                href="#swarm-board"
                className="rounded-full border border-white/25 bg-white/10 px-6 py-3 text-[14px] font-medium text-white hover:bg-white/15 transition-colors"
              >
                Try Agent Simulation
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Footer({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-50/70">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2.5">
            <FaktryLogo className="h-5 w-6" />
            <span className="font-display text-base font-semibold text-slate-950">
              Faktry <span className="text-emerald-600">AI</span>
            </span>
          </a>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-medium text-slate-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            English (US)
          </span>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 text-[13px]">
          <div className="space-y-2.5">
            <p className="text-xs font-semibold text-slate-500">Platform</p>
            <ul className="space-y-2 text-slate-800">
              <li><a href="#swarm-board" className="hover:text-emerald-700 transition-colors">Agent Board</a></li>
              <li><a href="#swarm-board" className="hover:text-emerald-700 transition-colors">Agent Manager</a></li>
              <li><a href="#swarm-board" className="hover:text-emerald-700 transition-colors">Custom Agents</a></li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <p className="text-xs font-semibold text-slate-500">Business Value</p>
            <ul className="space-y-2 text-slate-800">
              <li><a href="#impact" className="hover:text-emerald-700 transition-colors">Plant Benchmarks</a></li>
              <li><a href="#roi-calculator" className="hover:text-emerald-700 transition-colors">ROI Calculator</a></li>
              <li><a href="#tools" className="hover:text-emerald-700 transition-colors">Connected Tools</a></li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <p className="text-xs font-semibold text-slate-500">Get Started</p>
            <ul className="space-y-2 text-slate-800">
              <li>
                <button type="button" onClick={onOpenModal} className="hover:text-emerald-700 transition-colors">
                  14-Day Leakage Audit
                </button>
              </li>
              <li><a href="mailto:info@faktryai.com" className="hover:text-emerald-700 transition-colors">info@faktryai.com</a></li>
              <li className="text-slate-500">&copy; 2026 Faktry AI</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PilotRequestModal({
  isOpen,
  onClose,
  estimate,
}: {
  isOpen: boolean;
  onClose: () => void;
  estimate: PilotEstimateContext | null;
}) {
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [erpSystem, setErpSystem] = useState("QuickBooks / NetSuite / Sage");
  const [notes, setNotes] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedBrief, setSubmittedBrief] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setErrorMsg(null);
      setCopied(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const sanitizeField = (val: string, maxLen: number) =>
    val.replace(/[<>]/g, "").trim().slice(0, maxLen);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCompany = sanitizeField(company, 100);
    const cleanEmail = sanitizeField(email, 120);
    const cleanErp = sanitizeField(erpSystem, 80);
    const cleanNotes = sanitizeField(notes, 400);

    if (cleanCompany.length < 2) {
      setErrorMsg("Please enter your company name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setErrorMsg("Please enter a valid work email address.");
      return;
    }

    setErrorMsg(null);
    const estLine = estimate
      ? `ROI Estimate: ~$${estimate.estAnnualRecoveryUsd.toLocaleString()}/yr saved · ${estimate.estMonthlyHoursSaved} hrs/mo (${estimate.vertical})`
      : "Pilot Scope: 30 days of historical exports";

    const brief = [
      "FAKTRY AI — 14-DAY PILOT REQUEST",
      `Company: ${cleanCompany}`,
      `Email: ${cleanEmail}`,
      `Systems: ${cleanErp}`,
      estLine,
      cleanNotes ? `Notes: ${cleanNotes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    setSubmittedBrief(brief);
  };

  const handleCopyBrief = async () => {
    if (!submittedBrief) return;
    try {
      await navigator.clipboard.writeText(submittedBrief);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setErrorMsg("Clipboard access blocked by browser.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pilot-modal-title"
    >
      <div className="relative w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl space-y-4">
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-3">
          <div>
            <p className="text-xs font-semibold text-emerald-700">Faktry AI · 14-Day Pilot</p>
            <h2 id="pilot-modal-title" className="mt-0.5 font-display text-lg font-semibold text-slate-950">
              Schedule Leakage Audit
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-900"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {estimate && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-3 text-xs text-emerald-950">
            <strong>Estimate:</strong> ~${estimate.estAnnualRecoveryUsd.toLocaleString()}/yr ·{" "}
            {estimate.estMonthlyHoursSaved} hrs/mo saved
          </div>
        )}

        {submittedBrief ? (
          <div className="space-y-3">
            <p className="text-sm font-semibold text-emerald-700">Pilot brief ready.</p>
            <pre className="whitespace-pre-wrap rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-xs text-slate-900">
              {submittedBrief}
            </pre>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={handleCopyBrief}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-800 hover:bg-slate-50"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copied" : "Copy"}
              </button>
              <a
                href={`mailto:info@faktryai.com?subject=${encodeURIComponent(
                  "Faktry AI 14-Day Pilot"
                )}&body=${encodeURIComponent(submittedBrief)}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-500"
              >
                Email Brief
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {errorMsg && (
              <div className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs text-rose-800">
                {errorMsg}
              </div>
            )}
            <div>
              <label htmlFor="pilot-company" className="block text-xs font-medium text-slate-600 mb-1">
                Company Name
              </label>
              <input
                id="pilot-company"
                type="text"
                required
                maxLength={100}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Apex Precision Manufacturing"
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm text-slate-950 focus:border-emerald-600 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="pilot-email" className="block text-xs font-medium text-slate-600 mb-1">
                Work Email
              </label>
              <input
                id="pilot-email"
                type="email"
                required
                maxLength={120}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm text-slate-950 focus:border-emerald-600 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="pilot-erp" className="block text-xs font-medium text-slate-600 mb-1">
                Current Systems
              </label>
              <select
                id="pilot-erp"
                value={erpSystem}
                onChange={(e) => setErpSystem(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-950 focus:border-emerald-600 focus:outline-none"
              >
                <option>QuickBooks / NetSuite / Sage</option>
                <option>MIE Trak Pro / Plant ERP</option>
                <option>DelmiaWorks / PlantStar</option>
                <option>Soft-Pak / WasteWorks / AMCS</option>
                <option>Google Sheets &amp; Excel</option>
              </select>
            </div>
            <div>
              <label htmlFor="pilot-notes" className="block text-xs font-medium text-slate-600 mb-1">
                Custom Agent Request (Optional)
              </label>
              <textarea
                id="pilot-notes"
                rows={2}
                maxLength={400}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Freight bills, vendor scorecards, shift handoffs"
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm text-slate-950 focus:border-emerald-600 focus:outline-none"
              />
            </div>
            <div className="flex justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-full bg-emerald-600 px-5 py-2 text-xs font-semibold text-white hover:bg-emerald-500"
              >
                Create Pilot Brief
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
