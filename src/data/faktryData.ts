export interface AgentTile {
  id: string;
  name: string;
  shortGist: string;
  cadence: string;
  accent: "emerald" | "amber" | "blue" | "rose" | "indigo";
}

export interface CustomAgentPreset {
  id: string;
  name: string;
  shortDesc: string;
}

export interface SwarmNode {
  id: string;
  stepLabel: string;
  title: string;
  subtitle: string;
  kind: "input" | "agents" | "gate" | "output";
}

export interface SwarmPreviewFlow {
  id: string;
  name: string;
  impactLabel: string;
  hoursLabel: string;
  nodes: SwarmNode[];
  resultHeadline: string;
  resultBullets: string[];
}

export const KEY_NUMBERS = [
  { value: "1% – 4%", label: "Revenue leaked", sub: "Caught across billing & receiving" },
  { value: "100+ hrs", label: "Saved monthly", sub: "Returned to managers & finance" },
  { value: "Seconds", label: "Audit speed", sub: "Vs. days of manual spreadsheets" },
  { value: "3× ROI", label: "14-day guarantee", sub: "Proven on your past data first" },
];

export const SWARM_FLOWS: SwarmPreviewFlow[] = [
  {
    id: "savings",
    name: "Revenue & Cost Savings",
    impactLabel: "$8.5K–$11.3K / mo",
    hoursLabel: "110+ hrs / mo",
    nodes: [
      {
        id: "in",
        stepLabel: "01 · INPUT",
        title: "Sheets & ERP Data",
        subtitle: "Read-only POs, slips & bills",
        kind: "input",
      },
      {
        id: "ag",
        stepLabel: "02 · AGENTS",
        title: "Materials + Billing",
        subtitle: "Plus custom plant agents",
        kind: "agents",
      },
      {
        id: "gate",
        stepLabel: "03 · CONTROL",
        title: "Manager Approval Gate",
        subtitle: "Holds high-dollar items",
        kind: "gate",
      },
      {
        id: "out",
        stepLabel: "04 · OUTPUT",
        title: "Docs & Sheets Brief",
        subtitle: "Ready for 1-click sign-off",
        kind: "output",
      },
    ],
    resultHeadline: "Simulation Ready — Savings Brief Generated",
    resultBullets: [
      "Missed customer billing & duplicate supplier bills flagged",
      "Delivery weight shortages matched to vendor slips",
      "High-value adjustments held for manager approval",
    ],
  },
  {
    id: "operations",
    name: "Floor & Quality Sync",
    impactLabel: "$7.7K–$10.4K / mo",
    hoursLabel: "130+ hrs / mo",
    nodes: [
      {
        id: "in-2",
        stepLabel: "01 · INPUT",
        title: "Floor & QA Logs",
        subtitle: "Schedules & inspection files",
        kind: "input",
      },
      {
        id: "ag-2",
        stepLabel: "02 · AGENTS",
        title: "Schedule + Quality",
        subtitle: "Syncs shifts & claim proof",
        kind: "agents",
      },
      {
        id: "gate-2",
        stepLabel: "03 · CONTROL",
        title: "Supervisor Sign-Off",
        subtitle: "Reviews exceptions in 1 view",
        kind: "gate",
      },
      {
        id: "out-2",
        stepLabel: "04 · OUTPUT",
        title: "Shift & Claim Packet",
        subtitle: "Exported to Docs & Slack",
        kind: "output",
      },
    ],
    resultHeadline: "Simulation Ready — Floor & QA Brief Generated",
    resultBullets: [
      "Floor machine swaps synced back to office schedules",
      "Vendor claim proof bundled automatically",
      "Daily shift summary sent to leadership",
    ],
  },
];

export const AGENT_SWITCHBOARD: AgentTile[] = [
  {
    id: "materials",
    name: "Materials Agent",
    shortGist: "Checks deliveries vs. orders",
    cadence: "Daily",
    accent: "emerald",
  },
  {
    id: "billing",
    name: "Billing Agent",
    shortGist: "Catches overcharges & missed bills",
    cadence: "Live",
    accent: "amber",
  },
  {
    id: "schedule",
    name: "Schedule Agent",
    shortGist: "Syncs floor work with office plans",
    cadence: "Per Shift",
    accent: "blue",
  },
  {
    id: "quality",
    name: "Quality Agent",
    shortGist: "Builds dispute & audit packets",
    cadence: "On Demand",
    accent: "rose",
  },
  {
    id: "summary",
    name: "Summary Agent",
    shortGist: "Publishes weekly ROI briefs",
    cadence: "Weekly",
    accent: "indigo",
  },
];

export const CUSTOM_AGENT_OPTIONS: CustomAgentPreset[] = [
  {
    id: "freight",
    name: "Freight & Fuel Agent",
    shortDesc: "Flags carrier surcharge errors",
  },
  {
    id: "vendor",
    name: "Vendor Scorecard Agent",
    shortDesc: "Tracks late or short suppliers",
  },
  {
    id: "handoff",
    name: "Shift Handoff Agent",
    shortDesc: "Summarizes open jobs per shift",
  },
  {
    id: "margin",
    name: "Job Margin Agent",
    shortDesc: "Compares quote vs. actual cost",
  },
];

export const BUSINESS_HELP_CARDS = [
  {
    role: "Owners & CFOs",
    title: "Keep 1%–4% more margin",
    bullets: [
      "Stop overpaying vendors or double-paying bills",
      "Catch completed work that never got billed",
    ],
  },
  {
    role: "Plant Managers",
    title: "Manage every agent in one view",
    bullets: [
      "End manual cross-checking across spreadsheets",
      "Turn agents on/off or add new ones anytime",
    ],
  },
  {
    role: "Quality & Buyers",
    title: "Settle disputes in minutes",
    bullets: [
      "Delivery slips and inspection proof auto-gathered",
      "Ready-to-send vendor chargeback briefs",
    ],
  },
  {
    role: "IT & Systems",
    title: "Zero software replacement",
    bullets: [
      "Start Day 1 with simple CSV or Google Sheets",
      "Read-only access keeps your ERP untouched",
    ],
  },
];

export const BENCHMARK_CARDS = [
  {
    sector: "Precision Machining",
    savings: "$10,370",
    hours: "130 hrs",
    detail: "50+ machines · QA & vendor rate audits",
  },
  {
    sector: "Sheet Metal Fab",
    savings: "$9,700",
    hours: "132 hrs",
    detail: "Multi-bay · Change orders & WIP tracking",
  },
  {
    sector: "Injection Molding",
    savings: "$8,530",
    hours: "110 hrs",
    detail: "Automated lines · Material drift & JIT sync",
  },
  {
    sector: "Multi-Plant Steel",
    savings: "$10,990",
    hours: "134 hrs",
    detail: "3 plants · Mill surcharges & shift handoffs",
  },
];

export const CONNECTED_TOOLS = [
  {
    group: "AI & Cloud Core",
    caption: "Smart document reading + exact math verification",
    tools: ["Google Gemini", "Google Antigravity SDK", "Google Cloud", "Deterministic Math"],
  },
  {
    group: "Office & Alerts",
    caption: "Fits directly into your daily workflow",
    tools: ["Google Sheets", "Google Docs", "Excel / CSV", "Slack Alerts", "Email Briefs"],
  },
  {
    group: "Plant & Accounting",
    caption: "Works alongside your existing systems",
    tools: [
      "QuickBooks",
      "NetSuite",
      "Sage Intacct",
      "MIE Trak Pro",
      "DelmiaWorks",
      "PlantStar",
      "Soft-Pak",
      "WasteWorks",
      "Samsara",
    ],
  },
];
