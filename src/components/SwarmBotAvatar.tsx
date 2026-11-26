import React from "react";

export function FaktryLogo({ className = "h-5 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 136 116" className={className} fill="none" aria-hidden="true">
      <path
        d="M 45 1 L 135 1 L 116 28 Q 111 34 103 34 L 32 34 Q 16 34 1 39 C 6 30 16 14 27 6 C 34 2 40 1 45 1 Z"
        fill="#0F172A"
      />
      <path
        d="M 33 51 L 101 51 L 83 75 Q 79 80 73 80 L 36 80 L 1 114 L 1 78 C 1 68 12 56 24 52 C 28 51 31 51 33 51 Z"
        fill="#0F172A"
      />
    </svg>
  );
}

export function GradientOrb({
  variant = "sage",
  size = "sm",
}: {
  variant?: "sage" | "copper" | "iris";
  size?: "xs" | "sm" | "md" | "lg";
}) {
  const cls =
    variant === "copper"
      ? "orb-copper"
      : variant === "iris"
        ? "orb-iris"
        : "orb-sage";

  const sizeCls =
    size === "xs"
      ? "h-4 w-4"
      : size === "sm"
        ? "h-6 w-6"
        : size === "lg"
          ? "h-16 w-16"
          : "h-9 w-9";

  return (
    <span
      className={`inline-block shrink-0 rounded-full shadow-inner ${cls} ${sizeCls}`}
      aria-hidden="true"
    />
  );
}

export type BotMood = "happy" | "scanning" | "thinking" | "proud" | "alert";
export type BotSize = "2xs" | "xs" | "sm" | "md" | "lg";

const BOT_SIZE_CLASSES: Record<BotSize, string> = {
  "2xs": "w-6 h-6",
  xs: "w-7 h-7",
  sm: "w-9 h-9",
  md: "w-14 h-14",
  lg: "w-20 h-20",
};

const BOT_ALIASES: Record<string, string> = {
  materials: "bom_guard",
  freight: "bom_guard",
  ticket_hawk: "bom_guard",
  billing: "cost_sentry",
  margin: "cost_sentry",
  bill_sentry: "cost_sentry",
  schedule: "line_pulse",
  handoff: "line_pulse",
  dispatch_pulse: "line_pulse",
  quality: "quality_shield",
  vendor: "quality_shield",
  dispute_shield: "quality_shield",
  summary: "plant_beacon",
  ops_beacon: "plant_beacon",
  report_beacon: "plant_beacon",
};

const BOT_THEMES: Record<
  string,
  {
    body: string;
    bodyLight: string;
    stroke: string;
    glow: string;
    cheek: string;
    eye: string;
  }
> = {
  bom_guard: {
    body: "#10b981",
    bodyLight: "#d1fae5",
    stroke: "#047857",
    glow: "#6ee7b7",
    cheek: "#fda4af",
    eye: "#34d399",
  },
  cost_sentry: {
    body: "#f59e0b",
    bodyLight: "#fef3c7",
    stroke: "#b45309",
    glow: "#fcd34d",
    cheek: "#fb7185",
    eye: "#fbbf24",
  },
  line_pulse: {
    body: "#3b82f6",
    bodyLight: "#dbeafe",
    stroke: "#1d4ed8",
    glow: "#93c5fd",
    cheek: "#f9a8d4",
    eye: "#38bdf8",
  },
  quality_shield: {
    body: "#f43f5e",
    bodyLight: "#ffe4e6",
    stroke: "#be123c",
    glow: "#fda4af",
    cheek: "#fecdd3",
    eye: "#fb7185",
  },
  plant_beacon: {
    body: "#6366f1",
    bodyLight: "#e0e7ff",
    stroke: "#4338ca",
    glow: "#a5b4fc",
    cheek: "#f9a8d4",
    eye: "#a78bfa",
  },
};

export function AgentBotAvatar({
  agentId,
  mood = "happy",
  size = "sm",
  className = "",
}: {
  agentId: string;
  mood?: BotMood;
  size?: BotSize;
  className?: string;
}) {
  const id = BOT_ALIASES[agentId] || agentId;
  const t = BOT_THEMES[id] || BOT_THEMES.bom_guard;
  const sizeCls = BOT_SIZE_CLASSES[size];
  const isBouncing = mood === "proud" || mood === "happy";
  const isScanning = mood === "scanning" || mood === "thinking";

  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 select-none ${sizeCls} ${className}`}
    >
      <svg
        viewBox="0 0 100 108"
        className="w-full h-full drop-shadow-2xs overflow-visible"
        aria-hidden="true"
      >
        <ellipse
          cx="50"
          cy="101"
          rx="26"
          ry="4.5"
          fill={t.body}
          opacity={isBouncing ? "0.28" : "0.18"}
        />

        {id === "bom_guard" && (
          <g>
            <path d="M 28 29 Q 50 10 72 29 Z" fill={t.stroke} />
            <rect x="24" y="27" width="52" height="5" rx="2.5" fill={t.body} />
            <circle cx="50" cy="14" r="3.5" fill="#fef08a" />
          </g>
        )}

        {id === "cost_sentry" && (
          <g>
            <line
              x1="50"
              y1="26"
              x2="50"
              y2="12"
              stroke={t.stroke}
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle
              cx="50"
              cy="10"
              r="5"
              fill="#fde047"
              stroke={t.stroke}
              strokeWidth="2"
            />
          </g>
        )}

        {id === "line_pulse" && (
          <g>
            <line
              x1="36"
              y1="27"
              x2="29"
              y2="13"
              stroke={t.stroke}
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="28" cy="11" r="4" fill="#38bdf8" />
            <line
              x1="64"
              y1="27"
              x2="71"
              y2="13"
              stroke={t.stroke}
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="72" cy="11" r="4" fill="#38bdf8" />
          </g>
        )}

        {id === "quality_shield" && (
          <g>
            <path
              d="M 43 22 L 50 10 L 57 22 Z"
              fill="#fda4af"
              stroke={t.stroke}
              strokeWidth="2"
            />
            <circle cx="50" cy="10" r="3" fill="#ffffff" />
          </g>
        )}

        {id === "plant_beacon" && (
          <g>
            <path
              d="M 39 27 A 11 11 0 0 1 61 27 Z"
              fill="#c7d2fe"
              stroke={t.stroke}
              strokeWidth="2"
            />
            <line
              x1="50"
              y1="16"
              x2="50"
              y2="8"
              stroke={t.stroke}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle
              cx="50"
              cy="7"
              r="4"
              fill="#e879f9"
              className={isScanning ? "animate-ping" : "animate-pulse"}
            />
          </g>
        )}

        <rect x="13" y="45" width="7" height="14" rx="3.5" fill={t.stroke} />
        <rect x="80" y="45" width="7" height="14" rx="3.5" fill={t.stroke} />

        <path
          d={mood === "proud" ? "M 19 64 Q 7 50 11 40" : "M 19 64 Q 8 72 13 80"}
          fill="none"
          stroke={t.stroke}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d={mood === "proud" ? "M 81 64 Q 93 50 89 40" : "M 81 64 Q 92 72 87 80"}
          fill="none"
          stroke={t.stroke}
          strokeWidth="5"
          strokeLinecap="round"
        />

        <rect
          x="19"
          y="25"
          width="62"
          height="68"
          rx="26"
          fill={t.bodyLight}
          stroke={t.stroke}
          strokeWidth="3"
        />

        <rect
          x="26"
          y="35"
          width="48"
          height="24"
          rx="11"
          fill="#0f172a"
          stroke={t.body}
          strokeWidth="2"
        />

        {mood === "proud" ? (
          <g stroke={t.eye} strokeWidth="3" fill="none" strokeLinecap="round">
            <path d="M 35 48 Q 39 42 43 48" />
            <path d="M 57 48 Q 61 42 65 48" />
          </g>
        ) : mood === "thinking" || mood === "scanning" ? (
          <g>
            <circle cx="39" cy="46" r="4" fill={t.eye} />
            <rect x="55" y="44" width="10" height="4" rx="2" fill={t.eye} />
            <line
              x1="31"
              y1="52"
              x2="69"
              y2="52"
              stroke={t.glow}
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
          </g>
        ) : (
          <g>
            <circle cx="39" cy="46" r="4.5" fill={t.eye} />
            <circle cx="40.5" cy="44.5" r="1.5" fill="#ffffff" />
            <circle cx="61" cy="46" r="4.5" fill={t.eye} />
            <circle cx="62.5" cy="44.5" r="1.5" fill="#ffffff" />
            {id === "cost_sentry" && (
              <circle
                cx="61"
                cy="46"
                r="7"
                fill="none"
                stroke="#fde047"
                strokeWidth="1.4"
              />
            )}
          </g>
        )}

        <circle cx="32" cy="54" r="2.8" fill={t.cheek} opacity="0.7" />
        <circle cx="68" cy="54" r="2.8" fill={t.cheek} opacity="0.7" />
        <path
          d={mood === "alert" ? "M 45 64 Q 50 61 55 64" : "M 44 62 Q 50 67 56 62"}
          fill="none"
          stroke={t.stroke}
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        <rect
          x="32"
          y="70"
          width="36"
          height="15"
          rx="5"
          fill="#ffffff"
          stroke={t.body}
          strokeWidth="1.5"
        />

        {id === "bom_guard" && (
          <g stroke={t.stroke} strokeWidth="1.8" fill="none" strokeLinecap="round">
            <line x1="40" y1="78" x2="60" y2="78" />
            <line x1="50" y1="73" x2="50" y2="82" />
            <circle cx="41" cy="80" r="2" fill={t.body} />
            <circle cx="59" cy="80" r="2" fill={t.body} />
          </g>
        )}
        {id === "cost_sentry" && (
          <text
            x="50"
            y="81"
            textAnchor="middle"
            fontSize="10"
            fontWeight="bold"
            fill={t.stroke}
          >
            $$$
          </text>
        )}
        {id === "line_pulse" && (
          <path
            d="M 37 78 L 43 78 L 46 73 L 50 82 L 54 75 L 57 78 L 63 78"
            fill="none"
            stroke={t.stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        {id === "quality_shield" && (
          <path
            d="M 45 78 L 49 81 L 56 74"
            fill="none"
            stroke={t.stroke}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        {id === "plant_beacon" && (
          <g>
            <rect x="38" y="79" width="4" height="4" rx="1" fill="#34d399" />
            <rect x="44" y="76" width="4" height="7" rx="1" fill="#60a5fa" />
            <rect x="50" y="73" width="4" height="10" rx="1" fill="#818cf8" />
            <rect x="56" y="75" width="4" height="8" rx="1" fill="#f472b6" />
          </g>
        )}
      </svg>
    </div>
  );
}
