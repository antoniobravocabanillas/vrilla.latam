"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type MeshVariant = "hero" | "compact" | "footer";
type MeshState = "growth" | "systems" | "intelligence" | "diagnostic" | "neutral";

const nodes = [
  { left: "8%", top: "25%" },
  { left: "24%", top: "14%" },
  { left: "42%", top: "32%" },
  { left: "58%", top: "18%" },
  { left: "72%", top: "38%" },
  { left: "88%", top: "22%" },
  { left: "18%", top: "68%" },
  { left: "38%", top: "72%" },
  { left: "60%", top: "64%" },
  { left: "82%", top: "72%" },
];

const connections = [
  "M8 25 C 14 20, 19 16, 24 14",
  "M24 14 C 31 18, 36 25, 42 32",
  "M42 32 C 49 25, 54 20, 58 18",
  "M58 18 C 66 22, 70 30, 72 38",
  "M72 38 C 78 31, 84 25, 88 22",
  "M18 68 C 24 62, 31 54, 42 32",
  "M38 72 C 43 60, 49 46, 58 18",
  "M60 64 C 63 54, 68 46, 72 38",
  "M82 72 C 79 60, 76 49, 72 38",
];

export function OperationalMesh({
  variant = "hero",
  className = "",
  state = "neutral",
}: {
  variant?: MeshVariant;
  className?: string;
  state?: MeshState;
}) {
  const height =
    variant === "hero" ? "h-[520px]" : variant === "footer" ? "h-[260px]" : "h-[320px]";

  const stateGlow = {
    neutral: "from-cyan-200/10",
    growth: "from-sky-300/14",
    systems: "from-blue-300/14",
    intelligence: "from-teal-200/14",
    diagnostic: "from-indigo-200/14",
  }[state];

  return (
    <div className={`mesh-surface relative overflow-hidden rounded-[2rem] ${height} ${className}`}>
      <motion.div
        className={`absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br ${stateGlow} to-transparent blur-3xl`}
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-1/4 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-cyan-100/10 to-transparent blur-2xl"
        animate={{ x: ["0%", "430%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
      />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`mesh-line-${variant}`} x1="0" x2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,.04)" />
            <stop offset="50%" stopColor="rgba(203,245,255,.72)" />
            <stop offset="100%" stopColor="rgba(255,255,255,.04)" />
          </linearGradient>
        </defs>
        {connections.map((d, index) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke={`url(#mesh-line-${variant})`}
            strokeWidth="0.35"
            strokeDasharray="3 4"
            animate={{ opacity: [0.05, 1, 0.05], pathLength: [0, 1, 0] }}
            transition={{ duration: 3.4 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>
      {[
        { left: ["8%", "24%", "42%", "58%", "72%", "88%"], top: ["25%", "14%", "32%", "18%", "38%", "22%"] },
        { left: ["18%", "38%", "60%", "82%"], top: ["68%", "72%", "64%", "72%"] },
      ].map((track, index) => (
        <motion.span
          key={index}
          className="absolute size-3 rounded-full bg-cyan-100 shadow-[0_0_30px_rgba(196,243,255,.85)]"
          animate={{ left: track.left, top: track.top, opacity: [0, 1, 1, 0] }}
          transition={{ duration: 5 + index * 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {nodes.map((node, index) => (
        <motion.span
          key={`${node.left}-${node.top}`}
          className="absolute size-2 rounded-full border border-cyan-100/30 bg-cyan-100 shadow-[0_0_24px_rgba(196,243,255,.5)]"
          style={{ left: node.left, top: node.top }}
          animate={{ scale: [0.7, 1.35, 0.7], opacity: [0.25, 1, 0.25] }}
          transition={{ duration: 2.7 + index * 0.16, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

const pillarNodes = [
  { label: "Growth", href: "/soluciones", left: "16%", top: "28%" },
  { label: "Systems", href: "/metodo", left: "48%", top: "18%" },
  { label: "Intelligence", href: "/casos", left: "76%", top: "42%" },
  { label: "Diagnóstico", href: "/contacto", left: "56%", top: "72%" },
];

export function MeshPillarNav() {
  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-white/10 p-5 surface-panel">
      <OperationalMesh variant="compact" className="absolute inset-0 rounded-none opacity-70" />
      {pillarNodes.map((pillar, index) => (
        <motion.div
          key={pillar.label}
          className="absolute"
          style={{ left: pillar.left, top: pillar.top }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link
            href={pillar.href}
            className="group block rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-md transition hover:border-cyan-100/40 hover:bg-white/[0.08]"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">Pilar</p>
            <p className="mt-2 text-sm text-white">{pillar.label}</p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
