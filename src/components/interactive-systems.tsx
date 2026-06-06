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
  const codeStreams = [
    [
      "const demand = qualify(source.latam);",
      "brand.authority.sync(market.signal);",
      "pipeline.route({ lead, sector, urgency });",
      "crm.context.attach(company.profile);",
      "growth.score.update(opportunity.value);",
    ],
    [
      "operation.map(field, office, delivery);",
      "workflow.normalize(whatsapp, excel);",
      "automation.trigger('handoff.ready');",
      "traceability.lock(project.id);",
      "systems.queue.resolve(bottleneck);",
    ],
    [
      "kpi.margin.read(project.current);",
      "risk.signal.detect(dependency.field);",
      "executive.view.update(control.panel);",
      "bi.trace.connect(scope, delivery);",
      "decision.layer.publish(snapshot);",
    ],
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
      <div className="relative mt-5 h-44 overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#03070c]/80 font-mono shadow-inner sm:h-40">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),transparent_35%),radial-gradient(circle_at_18%_0%,rgba(165,238,255,0.12),transparent_34%)]" />
        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-white/8 bg-black/20 px-4 py-3 text-[10px] uppercase tracking-[0.22em] text-cyan-100/50">
          <span>Operational runtime</span>
          <span className="text-cyan-100/75">Layer 0{active + 1}</span>
        </div>
        <motion.div
          className="absolute bottom-0 top-10 w-px bg-gradient-to-b from-transparent via-cyan-100/80 to-transparent"
          animate={{ left: ["7%", "92%", "7%"], opacity: [0.18, 0.75, 0.18] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          key={active}
          className="absolute inset-x-4 top-14 space-y-2 text-[11px] leading-5 text-slate-300 sm:text-xs"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: ["0%", "-38%"] }}
          transition={{
            opacity: { duration: 0.35 },
            y: { duration: 9, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          }}
        >
          {[...codeStreams[active], ...codeStreams[active]].map((line, index) => (
            <div
              key={`${line}-${index}`}
              className="grid grid-cols-[2.25rem_1fr] gap-3 rounded-lg border border-white/[0.035] bg-white/[0.025] px-3 py-1.5"
            >
              <span className="select-none text-cyan-100/35">{String(index + 1).padStart(2, "0")}</span>
              <span>
                <span className="text-cyan-100/60">vrilla.</span>
                <span className="text-slate-200">{line}</span>
                {index === active + 1 ? <span className="ml-1 animate-pulse text-cyan-100">|</span> : null}
              </span>
            </div>
          ))}
        </motion.div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#03070c] to-transparent" />
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
