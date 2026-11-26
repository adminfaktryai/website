"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaktryLogo } from "@/components/SwarmBotAvatar";

interface NavbarProps {
  onOpenAuditModal: () => void;
}

const NAV_LINKS = [
  { href: "#swarm-board", label: "Agent Board" },
  { href: "#impact", label: "Business Impact" },
  { href: "#roi-calculator", label: "ROI" },
  { href: "#tools", label: "Tools" },
  { href: "#pilot", label: "14-Day Pilot" },
];

export function Navbar({ onOpenAuditModal }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <FaktryLogo className="h-6 w-7" />
          <span className="font-display text-lg font-bold tracking-tight text-slate-950">
            Faktry <span className="text-emerald-600">AI</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7" aria-label="Primary Navigation">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-semibold text-slate-600 hover:text-emerald-700 transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <a
            href="#swarm-board"
            className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors"
          >
            Try Agents
          </a>
          <button
            type="button"
            onClick={onOpenAuditModal}
            className="rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-emerald-700 transition-colors"
          >
            Start 14-Day Pilot
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden rounded-full border border-slate-200 p-2 text-slate-700 hover:bg-slate-50"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-800"
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onOpenAuditModal();
            }}
            className="w-full rounded-full bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white"
          >
            Start 14-Day Pilot
          </button>
        </div>
      )}
    </header>
  );
}
