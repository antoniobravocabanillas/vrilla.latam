"use client";

import { motion } from "framer-motion";

export function MethodBlueprint() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 p-5 surface-panel [perspective:1200px]">
      <div className="noise-mask absolute inset-0" />
      <motion.div
        className="absolute inset-10 rounded-[2rem] border border-cyan-100/10 bg-white/[0.02]"
        animate={{ rotateX: [68, 64, 68], rotateZ: [0, 1.5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {[12, 32, 52, 72].map((left, index) => (
          <motion.div
            key={left}
            className="absolute top-1/2 h-px w-24 bg-cyan-100/70"
            style={{ left: `${left}%` }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 3.5, delay: index * 0.35, repeat: Infinity }}
          />
        ))}
      </motion.div>
      {[
        ["Detectar", "Mapa de fricción", "12%", "16%"],
        ["Diseñar", "Blueprint", "34%", "32%"],
        ["Conectar", "Sistema", "56%", "48%"],
        ["Gobernar", "Escala", "76%", "66%"],
      ].map(([title, subtitle, left, top], index) => (
        <motion.div
          key={title}
          className="absolute rounded-2xl border border-white/10 bg-black/25 px-4 py-3 backdrop-blur-md"
          style={{ left, top }}
          animate={{ y: [0, -8, 0], rotateY: [0, index % 2 ? -4 : 4, 0] }}
          transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">{title}</p>
          <p className="mt-2 text-sm text-white">{subtitle}</p>
        </motion.div>
      ))}
    </div>
  );
}

export function CaseOperationsMap() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 p-5 surface-panel [perspective:1200px]">
      <motion.div
        className="absolute -left-1/3 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-cyan-100/10 to-transparent blur-2xl"
        animate={{ x: ["0%", "480%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/10"
        animate={{ rotateX: [68, 72, 68], rotateZ: [0, 360] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
        animate={{ rotateX: [70, 66, 70], rotateZ: [360, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      {[
        ["Campo", "8%", "20%"],
        ["QA/QC", "28%", "68%"],
        ["Oficina", "60%", "18%"],
        ["BI", "72%", "62%"],
        ["Dirección", "40%", "42%"],
      ].map(([label, left, top], index) => (
        <motion.div
          key={label}
          className="absolute rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm backdrop-blur-md"
          style={{ left, top }}
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
        >
          {label}
        </motion.div>
      ))}
      <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
        {["42 km", "128 ha", "0.8 mm"].map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center text-lg">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContactOrb() {
  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-white/10 p-5 surface-panel [perspective:1000px]">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(203,245,255,.12),transparent_42%)]"
        animate={{ opacity: [0.2, 0.7, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/20 bg-cyan-100/[0.03]"
        animate={{ rotateX: [0, 20, 0], rotateY: [0, 360, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />
      {[0, 1, 2].map((item) => (
        <motion.div
          key={item}
          className="absolute left-1/2 top-1/2 rounded-full border border-white/10"
          style={{
            width: 160 + item * 48,
            height: 160 + item * 48,
            marginLeft: -(160 + item * 48) / 2,
            marginTop: -(160 + item * 48) / 2,
          }}
          animate={{ rotate: item % 2 ? [360, 0] : [0, 360] }}
          transition={{ duration: 12 + item * 5, repeat: Infinity, ease: "linear" }}
        />
      ))}
      {["Contexto", "Fricción", "Alcance"].map((item, index) => (
        <motion.div
          key={item}
          className="absolute rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm backdrop-blur-md"
          style={{ left: `${12 + index * 28}%`, top: `${18 + index * 20}%` }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}
