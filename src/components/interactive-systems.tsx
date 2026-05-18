"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export function SolutionLayerSystem() {
  const [active, setActive] = useState(1);
  const layers = [
    { title: "Growth", copy: "Entrada, autoridad y demanda calificada." },
    { title: "Systems", copy: "Procesos, automatización y coordinación." },
    { title: "Intelligence", copy: "KPIs, trazabilidad y decisión." },
  ];

  return (
    <div className="rounded-[2rem] border border-white/10 p-5 surface-panel">
      <div className="grid gap-3 md:grid-cols-3">
        {layers.map((layer, index) => (
          <button
            key={layer.title}
            type="button"
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            className={`rounded-[1.4rem] border p-4 text-left transition ${
              active === index
                ? "border-cyan-100/35 bg-white/[0.08]"
                : "border-white/10 bg-black/20 hover:bg-white/[0.04]"
            }`}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">Layer 0{index + 1}</p>
            <p className="mt-4 text-xl">{layer.title}</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">{layer.copy}</p>
          </button>
        ))}
      </div>
      <div className="relative mt-5 h-24 overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/20">
        {[0, 1, 2].map((item) => (
          <motion.div
            key={item}
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-100/0 via-cyan-100/80 to-cyan-100/0"
            animate={{
              width: active === item ? ["10%", "85%", "10%"] : "10%",
              opacity: active === item ? [0.1, 1, 0.1] : 0.08,
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>
    </div>
  );
}

export function MethodScrollTrace() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="rounded-[2rem] border border-white/10 p-5 surface-panel">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">Progression trace</p>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/8">
        <motion.div className="h-full rounded-full bg-cyan-100/80" style={{ width }} />
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-5">
        {["Detectar", "Diseñar", "Conectar", "Optimizar", "Gobernar"].map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CaseEvidenceMatrix() {
  const [active, setActive] = useState(0);
  const items = [
    { title: "Campo", copy: "Captura y ejecución técnica." },
    { title: "QA/QC", copy: "Validación y precisión." },
    { title: "BI", copy: "Lectura y trazabilidad." },
    { title: "Dirección", copy: "Decisión y control." },
  ];

  return (
    <div className="rounded-[2rem] border border-white/10 p-5 surface-panel">
      <div className="grid gap-3 sm:grid-cols-4">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            className={`rounded-[1.3rem] border p-4 text-left transition ${
              active === index ? "border-cyan-100/35 bg-white/[0.08]" : "border-white/10 bg-black/20"
            }`}
          >
            <p className="text-sm">{item.title}</p>
          </button>
        ))}
      </div>
      <div className="mt-4 rounded-[1.4rem] border border-white/10 bg-black/20 p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">Active evidence</p>
        <p className="mt-4 text-xl">{items[active].title}</p>
        <p className="mt-3 text-slate-300">{items[active].copy}</p>
      </div>
    </div>
  );
}

export function ContactSignalMeter() {
  const [filled, setFilled] = useState([false, false, false]);
  const labels = ["Contexto", "Fricción", "Alcance"];

  return (
    <div className="rounded-[2rem] border border-white/10 p-5 surface-panel">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">Diagnostic state</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {labels.map((label, index) => (
          <button
            key={label}
            type="button"
            onClick={() =>
              setFilled((current) => current.map((value, item) => (item === index ? !value : value)))
            }
            className={`rounded-[1.3rem] border p-4 text-left transition ${
              filled[index] ? "border-cyan-100/35 bg-white/[0.08]" : "border-white/10 bg-black/20"
            }`}
          >
            <span className={`mb-4 block size-2 rounded-full ${filled[index] ? "bg-cyan-100" : "bg-white/20"}`} />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
