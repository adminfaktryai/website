import React from "react";
import { CONNECTED_TOOLS } from "@/data/faktryData";

const TOOL_THEMES = [
  {
    card: "border-blue-200/80 bg-gradient-to-b from-blue-50/60 to-white",
    pill: "bg-blue-100/80 text-blue-800 border-blue-200/80",
    chip: "border-blue-200/70 bg-white text-slate-800",
    tag: "AI Engine",
  },
  {
    card: "border-emerald-200/80 bg-gradient-to-b from-emerald-50/60 to-white",
    pill: "bg-emerald-100/80 text-emerald-800 border-emerald-200/80",
    chip: "border-emerald-200/70 bg-white text-slate-800",
    tag: "Docs & Alerts",
  },
  {
    card: "border-amber-200/80 bg-gradient-to-b from-amber-50/60 to-white",
    pill: "bg-amber-100/80 text-amber-800 border-amber-200/80",
    chip: "border-amber-200/70 bg-white text-slate-800",
    tag: "Plant & ERP",
  },
];

const SAFETY_PILLARS = [
  {
    title: "Read-only access",
    desc: "Start with simple CSV exports or Google Sheets. Faktry AI never writes to your production ERP without approval.",
    shape: "shield",
    panelBg: "bg-emerald-50/60 border-emerald-200/70",
  },
  {
    title: "Manager approval gate",
    desc: "High-dollar findings pause automatically in an approval queue until an authorized leader clicks approve.",
    shape: "gate",
    panelBg: "bg-blue-50/60 border-blue-200/70",
  },
  {
    title: "Private plant data",
    desc: "Your vendor pricing, customer lists, and operational numbers remain isolated and never train public models.",
    shape: "lock",
    panelBg: "bg-indigo-50/60 border-indigo-200/70",
  },
];

function SafetyWireframe({ shape }: { shape: string }) {
  return (
    <svg viewBox="0 0 180 96" className="h-24 w-full" fill="none" aria-hidden="true">
      {shape === "shield" && (
        <g stroke="#94A3B8" strokeWidth="1.2">
          <rect x="24" y="18" width="132" height="60" rx="10" strokeDasharray="3 3" />
          <circle cx="90" cy="48" r="20" fill="#FFFFFF" stroke="#059669" strokeWidth="1.5" />
          <path d="M82 48L88 54L99 42" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" />
        </g>
      )}
      {shape === "gate" && (
        <g stroke="#94A3B8" strokeWidth="1.2">
          <line x1="22" y1="48" x2="158" y2="48" strokeDasharray="3 3" />
          <rect x="64" y="26" width="52" height="44" rx="10" fill="#FFFFFF" stroke="#2563EB" strokeWidth="1.5" />
          <circle cx="90" cy="48" r="7" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.6" />
        </g>
      )}
      {shape === "lock" && (
        <g stroke="#94A3B8" strokeWidth="1.2">
          <circle cx="90" cy="48" r="34" strokeDasharray="3 3" />
          <rect x="74" y="42" width="32" height="24" rx="6" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="1.5" />
          <path d="M81 42V35C81 30 85 27 90 27C95 27 99 30 99 35V42" stroke="#4F46E5" strokeWidth="1.5" />
        </g>
      )}
    </svg>
  );
}

export function ToolsAndStackSection() {
  return (
    <>
      {/* Tools & Systems Band */}
      <section id="tools" className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-3">
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                Tools &amp; Connectors
              </span>
              <h2 className="font-display text-3xl font-semibold tracking-[-0.025em] text-slate-950 sm:text-[38px]">
                Built on Google AI. Connected to your tools.
              </h2>
            </div>
            <p className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-medium text-slate-600">
              Zero rip-and-replace · Day-1 CSV &amp; Google Sheets ready
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {CONNECTED_TOOLS.map((group, idx) => {
              const theme = TOOL_THEMES[idx % TOOL_THEMES.length];
              return (
                <div
                  key={group.group}
                  className={`rounded-[24px] border p-6 space-y-5 shadow-2xs ${theme.card}`}
                >
                  <div className="space-y-2">
                    <span
                      className={`inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${theme.pill}`}
                    >
                      {theme.tag}
                    </span>
                    <h3 className="font-display text-base font-semibold text-slate-950">
                      {group.group}
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-600">{group.caption}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.tools.map((tool) => (
                      <span
                        key={tool}
                        className={`rounded-full border px-3 py-1 text-xs font-medium shadow-2xs ${theme.chip}`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety, built in */}
      <section className="border-b border-slate-200/80 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-3">
              <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                Governance &amp; Controls
              </span>
              <h2 className="font-display text-3xl font-semibold tracking-[-0.025em] text-slate-950">
                Safety, built in
              </h2>
            </div>
            <p className="text-xs font-medium text-slate-600">
              Human oversight at every financial decision
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {SAFETY_PILLARS.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-slate-200 bg-white p-6 flex flex-col justify-between space-y-6 shadow-2xs"
              >
                <div className={`rounded-xl border p-4 ${item.panelBg}`}>
                  <SafetyWireframe shape={item.shape} />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display text-base font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
