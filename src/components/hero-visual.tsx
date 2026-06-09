"use client";

import { motion } from "framer-motion";
import { OperationalMesh } from "@/components/operational-mesh";

const nodes = [
  { label: "Campo", status: "sync", x: "8%", y: "22%" },
  { label: "Operación", status: "active", x: "34%", y: "11%" },
  { label: "Ventas", status: "routing", x: "66%", y: "22%" },
  { label: "Dirección", status: "reading", x: "80%", y: "56%" },
  { label: "BI", status: "stable", x: "48%", y: "71%" },
  { label: "Documentos", status: "verified", x: "16%", y: "67%" },
];

const traces = [
  "M12 27 C 22 24, 28 18, 39 18",
  "M39 18 C 52 18, 58 22, 68 27",
  "M68 27 C 79 31, 83 42, 82 56",
  "M82 56 C 73 65, 63 72, 49 72",
  "M49 72 C 35 72, 24 72, 18 67",
  "M18 67 C 12 57, 11 40, 12 27",
];

export function HeroVisual() {
  return (
    <div className="relative h-[470px] overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.03] p-4 surface-panel ambient-glow sm:h-[560px]">
      <div className="noise-mask absolute inset-0" />
      <OperationalMesh variant="hero" className="absolute inset-0 rounded-none opacity-55" />
      <motion.div
        className="absolute -right-10 top-4 h-56 w-56 rounded-full bg-cyan-200/10 blur-3xl"
        animate={{ x: [0, -24, 0], y: [0, 18, 0], opacity: [0.35, 0.9, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl"
        animate={{ scale: [1, 1.24, 1], opacity: [0.25, 0.8, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute left-4 top-4 right-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-md">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-100/55">Operational architecture</p>
          <p className="mt-1 text-sm text-white">Arquitectura conectada</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-300" />
          </span>
          Live
        </div>
      </div>

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line" x1="0" x2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,.08)" />
            <stop offset="50%" stopColor="rgba(138,232,255,.95)" />
            <stop offset="100%" stopColor="rgba(255,255,255,.08)" />
          </linearGradient>
        </defs>
        {traces.map((d, index) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke="url(#line)"
            strokeWidth="0.55"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 5 + index * 0.3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {nodes.map((node, index) => (
        <motion.div
          key={node.label}
          className="absolute min-w-28 rounded-2xl border border-white/10 bg-black/30 px-3 py-3 text-xs text-slate-200 shadow-2xl backdrop-blur-md"
          style={{ left: node.x, top: node.y }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5 + index, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center justify-between gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-100/60">{node.status}</p>
            <span className="size-1.5 rounded-full bg-cyan-100" />
          </div>
          <p className="mt-1 font-medium">{node.label}</p>
        </motion.div>
      ))}

      <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
        {[
          ["96%", "Trazabilidad"],
          ["24", "Flujos activos"],
          ["03", "Alertas críticas"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="rounded-2xl border border-white/10 bg-black/25 px-3 py-3 backdrop-blur-md"
          >
            <p className="text-lg tracking-[-0.03em] text-white">{value}</p>
            <p className="mt-1 text-[11px] text-slate-400">{label}</p>
          </div>
        ))}
      </div>

      <div className="absolute bottom-[92px] right-4 w-44 rounded-2xl border border-white/10 bg-black/25 p-3 backdrop-blur-md">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-100/55">Executive signal</p>
        <div className="mt-3 space-y-2">
          {[68, 82, 56].map((width, index) => (
            <div key={width} className="h-1.5 rounded-full bg-white/8">
              <motion.div
                className="h-1.5 rounded-full bg-cyan-100/80"
                animate={{ width: [`${Math.max(width - 18, 20)}%`, `${width}%`, `${Math.max(width - 18, 20)}%`] }}
                transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
