"use client";

import { motion } from "framer-motion";

const architectureNodes = [
  { label: "Demanda", x: "8%", y: "20%" },
  { label: "Ventas", x: "34%", y: "20%" },
  { label: "Operación", x: "58%", y: "42%" },
  { label: "Dirección", x: "80%", y: "18%" },
  { label: "BI", x: "78%", y: "68%" },
];

export function SolutionsArchitecture() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 p-5 surface-panel">
      <div className="noise-mask absolute inset-0" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {[
          "M12 24 C 24 24, 28 22, 38 24",
          "M38 24 C 48 25, 54 33, 58 43",
          "M58 43 C 67 39, 73 28, 80 22",
          "M58 43 C 68 51, 74 61, 79 69",
        ].map((d, index) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke="rgba(196,243,255,.8)"
            strokeWidth="0.55"
            strokeDasharray="4 4"
            animate={{ opacity: [0.2, 1, 0.2], pathLength: [0.2, 1, 0.2] }}
            transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>
      {architectureNodes.map((node, index) => (
        <motion.div
          key={node.label}
          className="absolute rounded-2xl border border-white/10 bg-black/25 px-3 py-3 text-sm backdrop-blur-md"
          style={{ left: node.x, top: node.y }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
        >
          {node.label}
        </motion.div>
      ))}
      <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
        {["Entrada", "Sistema", "Control"].map((item, index) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">{item}</p>
            <motion.div
              className="mt-3 h-1.5 rounded-full bg-cyan-100/75"
              animate={{ width: [`${38 + index * 12}%`, `${76 - index * 7}%`, `${38 + index * 12}%`] }}
              transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function SolutionModuleVisual({
  kind,
}: {
  kind: "positioning" | "operations" | "commercial" | "infrastructure";
}) {
  const content = {
    positioning: ["Señal", "Autoridad", "Confianza"],
    operations: ["Flujo", "Trazabilidad", "Control"],
    commercial: ["Entrada", "Seguimiento", "Conversión"],
    infrastructure: ["Nodos", "Integración", "Escala"],
  }[kind];

  return (
    <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-black/20 p-4">
      <div className="grid gap-3">
        {content.map((item, index) => (
          <div key={item} className="flex items-center gap-3">
            <motion.span
              className="size-2 rounded-full bg-cyan-100"
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 2.5, delay: index * 0.2, repeat: Infinity }}
            />
            <div className="h-px flex-1 bg-white/10">
              <motion.div
                className="h-px bg-cyan-100/80"
                animate={{ width: ["22%", "88%", "22%"] }}
                transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <span className="text-xs text-slate-300">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
