"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  Database,
  FileCheck2,
  Pause,
  Play,
  Plus,
  RefreshCw,
  ShieldAlert,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import {
  AGENT_SWITCHBOARD,
  CUSTOM_AGENT_OPTIONS,
  SWARM_FLOWS,
  SwarmNode,
} from "@/data/faktryData";
import {
  AgentBotAvatar,
  BotMood,
  GradientOrb,
} from "@/components/SwarmBotAvatar";

interface SwarmBoardShowcaseProps {
  onOpenAuditModal: () => void;
}

type ShowcaseTab = "board" | "manager" | "custom";

const NODE_STYLES: Record<
  SwarmNode["kind"],
  {
    badge: string;
    borderIdle: string;
    iconBg: string;
    icon: typeof Database;
  }
> = {
  input: {
    badge: "bg-emerald-50 text-emerald-800 border-emerald-200",
    borderIdle: "border-slate-200 hover:border-emerald-300",
    iconBg: "bg-emerald-600 text-white",
    icon: Database,
  },
  agents: {
    badge: "bg-blue-50 text-blue-800 border-blue-200",
    borderIdle: "border-slate-200 hover:border-blue-300",
    iconBg: "bg-blue-600 text-white",
    icon: Sparkles,
  },
  gate: {
    badge: "bg-amber-50 text-amber-800 border-amber-200",
    borderIdle: "border-slate-200 hover:border-amber-300",
    iconBg: "bg-amber-500 text-white",
    icon: ShieldAlert,
  },
  output: {
    badge: "bg-indigo-50 text-indigo-800 border-indigo-200",
    borderIdle: "border-slate-200 hover:border-indigo-300",
    iconBg: "bg-indigo-600 text-white",
    icon: FileCheck2,
  },
};

export function SwarmBoardShowcase({ onOpenAuditModal }: SwarmBoardShowcaseProps) {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>("board");

  const [flowId, setFlowId] = useState(SWARM_FLOWS[0].id);
  const [simRunning, setSimRunning] = useState(false);
  const [simStep, setSimStep] = useState(-1);
  const [simDone, setSimDone] = useState(false);

  const [selectedAgentId, setSelectedAgentId] = useState(AGENT_SWITCHBOARD[0].id);
  const [activeMap, setActiveMap] = useState<Record<string, boolean>>({
    materials: true,
    billing: true,
    schedule: true,
    quality: true,
    summary: true,
  });
  const [approvalLimit, setApprovalLimit] = useState("$500+");

  const [selectedCustomId, setSelectedCustomId] = useState(CUSTOM_AGENT_OPTIONS[0].id);
  const [addedCustomIds, setAddedCustomIds] = useState<string[]>([]);

  const flow = SWARM_FLOWS.find((f) => f.id === flowId) || SWARM_FLOWS[0];

  const handleSelectFlow = (id: string) => {
    setFlowId(id);
    setSimRunning(false);
    setSimStep(-1);
    setSimDone(false);
  };

  const handleRunSimulation = () => {
    setSimDone(false);
    setSimRunning(true);
    setSimStep(0);
  };

  useEffect(() => {
    if (!simRunning) return;
    if (simStep >= flow.nodes.length) {
      setSimRunning(false);
      setSimDone(true);
      return;
    }
    const t = setTimeout(() => setSimStep((s) => s + 1), 450);
    return () => clearTimeout(t);
  }, [simRunning, simStep, flow.nodes.length]);

  const toggleAgent = (id: string) => {
    setActiveMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddCustom = (id: string) => {
    if (!addedCustomIds.includes(id)) {
      setAddedCustomIds((prev) => [...prev, id]);
      setActiveMap((prev) => ({ ...prev, [id]: true }));
    }
  };

  const allAgents = [
    ...AGENT_SWITCHBOARD,
    ...CUSTOM_AGENT_OPTIONS.filter((c) => addedCustomIds.includes(c.id)).map((c) => ({
      id: c.id,
      name: c.name,
      shortGist: c.shortDesc,
      cadence: "Custom",
      accent: "emerald" as const,
    })),
  ];

  const selectedAgent =
    allAgents.find((a) => a.id === selectedAgentId) || allAgents[0];

  const selectedCustom =
    CUSTOM_AGENT_OPTIONS.find((c) => c.id === selectedCustomId) ||
    CUSTOM_AGENT_OPTIONS[0];

  const activeCount = allAgents.filter((a) => activeMap[a.id]).length;

  const squadMood: BotMood = simRunning
    ? "scanning"
    : simDone
      ? "proud"
      : "happy";

  const flowBotIds =
    flow.id === "savings"
      ? ["materials", "billing", "summary"]
      : ["schedule", "quality", "summary"];

  return (
    <section id="swarm-board" className="border-b border-slate-200 bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cool Mist Product Container */}
        <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-100/90 via-[#F2F6FA] to-emerald-50/50 p-4 sm:p-6 shadow-sm space-y-4">
          {/* Segmented Tab Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-1">
            <div className="inline-flex flex-wrap items-center gap-1.5 rounded-full bg-white/80 border border-slate-200/80 p-1 shadow-2xs">
              <button
                type="button"
                onClick={() => setActiveTab("board")}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  activeTab === "board"
                    ? "bg-slate-950 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                <GradientOrb variant="sage" size="xs" />
                Agent Board
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("manager")}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  activeTab === "manager"
                    ? "bg-slate-950 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                <GradientOrb variant="copper" size="xs" />
                Manage Agents ({activeCount}/{allAgents.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("custom")}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  activeTab === "custom"
                    ? "bg-slate-950 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                <GradientOrb variant="iris" size="xs" />
                Custom Agents
              </button>
            </div>

            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/90 border border-slate-200 px-3 py-1 text-[11px] font-semibold text-slate-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Interactive Agent Preview
            </span>
          </div>

          {/* TAB 1: SWARM BOARD SIMULATION */}
          {activeTab === "board" && (
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <GradientOrb variant="sage" size="md" />
                    <div>
                      <h2 className="font-display text-lg font-bold text-slate-950">
                        {flow.name}
                      </h2>
                      <div className="mt-0.5 flex flex-wrap items-center gap-2 text-xs">
                        <span className="font-semibold text-emerald-700">
                          {flow.impactLabel}
                        </span>
                        <span className="text-slate-300">·</span>
                        <span className="font-semibold text-blue-700">
                          {flow.hoursLabel} returned
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setActiveTab("manager")}
                      title="View & manage all 5 agents"
                      className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 hover:border-slate-300 transition-colors"
                    >
                      {AGENT_SWITCHBOARD.map((ag) => (
                        <AgentBotAvatar
                          key={ag.id}
                          agentId={ag.id}
                          size="2xs"
                          mood={activeMap[ag.id] ? squadMood : "alert"}
                        />
                      ))}
                    </button>
                    <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
                      Manager gate: {approvalLimit}
                    </span>
                  </div>
                </div>

                {/* Color-Coded 4-Node Flow */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
                  {flow.nodes.map((node, idx) => {
                    const style = NODE_STYLES[node.kind];
                    const Icon = style.icon;
                    const isCurrent = simRunning && simStep === idx;
                    const isFinished = simDone || (simRunning && simStep > idx);

                    return (
                      <div key={node.id} className="flex items-stretch gap-2">
                        <div
                          className={`w-full rounded-2xl border p-4 transition-all ${
                            isCurrent
                              ? "border-blue-500 bg-blue-50/50 ring-2 ring-blue-200"
                              : isFinished
                                ? "border-emerald-400 bg-emerald-50/40"
                                : `bg-white ${style.borderIdle}`
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span
                              className={`rounded-md border px-2 py-0.5 font-mono text-[10px] font-bold ${style.badge}`}
                            >
                              {node.stepLabel}
                            </span>
                            {isFinished ? (
                              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white">
                                <Check className="h-3.5 w-3.5" />
                              </span>
                            ) : (
                              <span
                                className={`inline-flex h-6 w-6 items-center justify-center rounded-lg ${style.iconBg}`}
                              >
                                <Icon className="h-3.5 w-3.5" />
                              </span>
                            )}
                          </div>
                          <p className="mt-3 text-sm font-bold text-slate-950">
                            {node.title}
                          </p>
                          <p className="mt-1 text-xs text-slate-600">{node.subtitle}</p>
                          {node.kind === "agents" && (
                            <div className="mt-2.5 flex items-center gap-1.5">
                              {flowBotIds.map((botId) => (
                                <AgentBotAvatar
                                  key={botId}
                                  agentId={botId}
                                  size="2xs"
                                  mood={activeMap[botId] ? squadMood : "alert"}
                                />
                              ))}
                            </div>
                          )}
                        </div>

                        {idx < flow.nodes.length - 1 && (
                          <div className="hidden lg:flex items-center text-slate-300 shrink-0">
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Compact Result Banner */}
                <div
                  className={`rounded-xl border p-4 transition-colors ${
                    simDone
                      ? "border-emerald-200 bg-emerald-50/70"
                      : "border-slate-200 bg-slate-50/80"
                  }`}
                >
                  <p
                    className={`text-xs font-bold ${
                      simDone ? "text-emerald-800" : "text-slate-800"
                    }`}
                  >
                    {simDone
                      ? flow.resultHeadline
                      : "Click Run Agent Board Simulation to watch all steps execute"}
                  </p>
                  <div className="mt-1.5 flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-600">
                    {flow.resultBullets.map((b) => (
                      <span key={b} className="inline-flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Pill Action Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-1">
                <div className="flex flex-wrap items-center gap-2">
                  {SWARM_FLOWS.map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => handleSelectFlow(f.id)}
                      className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all ${
                        f.id === flow.id
                          ? "border-blue-600 bg-blue-600 text-white shadow-xs"
                          : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                      }`}
                    >
                      {f.name}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setActiveTab("custom")}
                    className="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold text-indigo-800 hover:bg-indigo-100 transition-colors"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    Add Custom Agent
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleRunSimulation}
                  disabled={simRunning}
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 disabled:opacity-60 transition-colors"
                >
                  {simRunning ? (
                    <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Play className="h-3.5 w-3.5" />
                  )}
                  {simRunning ? "Running Simulation..." : "Run Agent Board Simulation"}
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: MANAGE ALL AGENTS */}
          {activeTab === "manager" && (
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
              <div className="lg:col-span-6 rounded-2xl border border-slate-200 bg-white p-4 space-y-1.5">
                <p className="px-2 pb-2 text-xs font-semibold text-slate-500">
                  Core &amp; Custom Operations Agents
                </p>
                {allAgents.map((ag) => {
                  const isSelected = ag.id === selectedAgent.id;
                  const isOn = Boolean(activeMap[ag.id]);
                  return (
                    <button
                      key={ag.id}
                      type="button"
                      onClick={() => setSelectedAgentId(ag.id)}
                      className={`w-full rounded-xl px-3.5 py-2.5 text-left transition-colors flex items-center justify-between gap-3 ${
                        isSelected
                          ? "bg-blue-50/70 ring-1 ring-blue-200"
                          : "hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <AgentBotAvatar
                          agentId={ag.id}
                          size="xs"
                          mood={isOn ? "happy" : "alert"}
                        />
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-950 truncate">
                            {ag.name}
                          </p>
                          <p className="text-xs text-slate-500 truncate">
                            {ag.shortGist}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                          isOn
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-slate-100 text-slate-500 border border-slate-200"
                        }`}
                      >
                        {isOn ? "Active" : "Paused"}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="lg:col-span-6 rounded-2xl border border-slate-200 bg-white p-6 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <AgentBotAvatar
                        agentId={selectedAgent.id}
                        size="md"
                        mood={activeMap[selectedAgent.id] ? "proud" : "alert"}
                      />
                      <div>
                        <p className="text-xs font-semibold text-blue-700">Agent Settings</p>
                        <h3 className="mt-0.5 font-display text-xl font-bold text-slate-950">
                          {selectedAgent.name}
                        </h3>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleAgent(selectedAgent.id)}
                      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                        activeMap[selectedAgent.id]
                          ? "bg-slate-950 text-white hover:bg-slate-800"
                          : "bg-emerald-600 text-white hover:bg-emerald-700"
                      }`}
                    >
                      {activeMap[selectedAgent.id] ? (
                        <>
                          <Pause className="h-3 w-3" /> Pause Agent
                        </>
                      ) : (
                        <>
                          <Play className="h-3 w-3" /> Resume Agent
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-600">
                    {selectedAgent.shortGist}. Flagged items above your sign-off limit
                    wait cleanly for a manager&apos;s approval.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="rounded-xl border border-blue-100 bg-blue-50/40 p-3.5">
                      <span className="text-[11px] font-medium text-blue-700">Schedule</span>
                      <p className="mt-1 text-sm font-bold text-slate-950">
                        {selectedAgent.cadence}
                      </p>
                    </div>
                    <div className="rounded-xl border border-amber-100 bg-amber-50/40 p-3.5">
                      <span className="text-[11px] font-medium text-amber-800">Sign-Off Rule</span>
                      <div className="mt-1 flex items-center gap-1.5">
                        <SlidersHorizontal className="h-3.5 w-3.5 text-amber-700" />
                        <select
                          aria-label="Manager approval threshold"
                          value={approvalLimit}
                          onChange={(e) => setApprovalLimit(e.target.value)}
                          className="bg-transparent text-sm font-bold text-slate-950 focus:outline-none cursor-pointer"
                        >
                          <option value="$250+">$250+</option>
                          <option value="$500+">$500+</option>
                          <option value="$1,000+">$1,000+</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-xs font-medium text-slate-600">
                    {activeCount} of {allAgents.length} agents running
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveTab("custom")}
                    className="text-xs font-semibold text-indigo-700 hover:underline"
                  >
                    + Add custom agent
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CUSTOM AGENTS ON DEMAND */}
          {activeTab === "custom" && (
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
              <div className="lg:col-span-6 rounded-2xl border border-slate-200 bg-white p-4 space-y-1.5">
                <p className="px-2 pb-2 text-xs font-semibold text-slate-500">
                  Pick a workflow to build a custom agent
                </p>
                {CUSTOM_AGENT_OPTIONS.map((opt) => {
                  const isSelected = opt.id === selectedCustom.id;
                  const isAdded = addedCustomIds.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedCustomId(opt.id)}
                      className={`w-full rounded-xl px-3.5 py-3 text-left transition-colors flex items-center justify-between gap-3 ${
                        isSelected
                          ? "bg-indigo-50/70 ring-1 ring-indigo-200"
                          : "hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <AgentBotAvatar
                          agentId={opt.id}
                          size="xs"
                          mood={isSelected ? "thinking" : "happy"}
                        />
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-950 truncate">{opt.name}</p>
                          <p className="text-xs text-slate-500 truncate">{opt.shortDesc}</p>
                        </div>
                      </div>
                      {isAdded && (
                        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                          Added
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="lg:col-span-6 rounded-2xl border border-slate-200 bg-white p-6 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <AgentBotAvatar
                    agentId={selectedCustom.id}
                    size="md"
                    mood="thinking"
                  />
                  <h3 className="font-display text-xl font-bold text-slate-950">
                    {selectedCustom.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {selectedCustom.shortDesc}. Tailored to your exact spreadsheets and
                    managed inside the same Agent Board with human sign-off.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 border-t border-slate-100 pt-4">
                  <button
                    type="button"
                    onClick={() => handleAddCustom(selectedCustom.id)}
                    className="rounded-full border border-indigo-200 bg-indigo-50 px-5 py-2 text-xs font-semibold text-indigo-800 hover:bg-indigo-100 transition-colors"
                  >
                    {addedCustomIds.includes(selectedCustom.id)
                      ? "Added to Manage Agents"
                      : "+ Preview on Agent Board"}
                  </button>
                  <button
                    type="button"
                    onClick={onOpenAuditModal}
                    className="rounded-full bg-emerald-600 px-5 py-2 text-xs font-semibold text-white hover:bg-emerald-700 transition-colors"
                  >
                    Request Custom Agent
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
