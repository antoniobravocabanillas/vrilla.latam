"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { divisions } from "@/components/site-data";

export function SolutionLayerSystem() {
  const [active, setActive] = useState(1);
  const layerStatus = ["Demand engine", "Operational core", "Executive layer"];
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
  const layerOutputs = [
    {
      label: "Growth output",
      title: "Demanda ordenada antes de llegar al equipo comercial.",
      copy: "El sistema califica señales, prioriza oportunidades y convierte percepción en pipeline interpretable.",
      metrics: [
        ["Autoridad", "82%"],
        ["Pipeline", "74%"],
        ["Fit técnico", "68%"],
      ],
      signals: ["Mercado", "Lead", "Sector", "Valor"],
    },
    {
      label: "Systems output",
      title: "La operación deja de depender de memoria y mensajes sueltos.",
      copy: "Los flujos conectan responsables, entregables y estados para que campo y oficina operen con la misma lógica.",
      metrics: [
        ["Trazabilidad", "88%"],
        ["Automatización", "71%"],
        ["Coordinación", "79%"],
      ],
      signals: ["Campo", "Oficina", "QA/QC", "Entrega"],
    },
    {
      label: "Intelligence output",
      title: "Dirección lee la empresa sin perseguir información.",
      copy: "Los datos operativos se transforman en KPIs, alertas tempranas y lectura ejecutiva para decidir con control.",
      metrics: [
        ["Visibilidad", "91%"],
        ["Riesgo", "63%"],
        ["Decisión", "86%"],
      ],
      signals: ["KPI", "Riesgo", "Margen", "Avance"],
    },
  ];
  const output = layerOutputs[active];

  return (
    <div className="rounded-[2rem] border border-white/10 p-5 surface-panel">
      <div className="grid gap-3 md:grid-cols-3">
        {divisions.map((layer, index) => (
          <button
            key={layer.name}
            type="button"
            onClick={() => setActive(index)}
            onFocus={() => setActive(index)}
            aria-pressed={active === index}
            className={`rounded-[1.4rem] border p-4 text-left transition ${
              active === index
                ? "border-cyan-100/35 bg-white/[0.08]"
                : "border-white/10 bg-black/20 hover:bg-white/[0.04]"
            }`}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">Layer 0{index + 1}</p>
            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-xl tracking-[-0.03em]">{layer.name}</p>
              <span className={`size-2 rounded-full ${active === index ? "bg-cyan-100" : "bg-white/20"}`} />
            </div>
            <p className="mt-4 min-h-[4.5rem] text-sm leading-6 text-slate-300">{layer.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {layer.signals.map((signal) => (
                <span key={signal} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
                  {signal}
                </span>
              ))}
            </div>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">{layerStatus[index]}</p>
          </button>
        ))}
      </div>
      <div className="relative mt-5 overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#03070c]/80 shadow-inner">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),transparent_35%),radial-gradient(circle_at_18%_0%,rgba(165,238,255,0.12),transparent_34%)]" />
        <div className="relative z-10 flex items-center justify-between border-b border-white/8 bg-black/20 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/50">
          <span>Operational runtime</span>
          <span className="text-cyan-100/75">Layer 0{active + 1}</span>
        </div>
        <div className="relative z-10 grid gap-4 p-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-64 overflow-hidden rounded-[1.15rem] border border-white/8 bg-black/25 font-mono">
            <motion.div
              className="absolute bottom-0 top-0 w-px bg-gradient-to-b from-transparent via-cyan-100/80 to-transparent"
              animate={{ left: ["7%", "92%", "7%"], opacity: [0.12, 0.72, 0.12] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              key={`code-${active}`}
              className="absolute inset-x-3 top-3 space-y-2 text-[11px] leading-5 text-slate-300 sm:text-xs"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: ["0%", "-34%"] }}
              transition={{
                opacity: { duration: 0.28 },
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

          <motion.div
            key={`output-${active}`}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[1.15rem] border border-cyan-100/12 bg-white/[0.035] p-5"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">{output.label}</p>
            <h3 className="mt-4 text-2xl tracking-[-0.04em] text-white">{output.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{output.copy}</p>
            <div className="mt-6 grid gap-3">
              {output.metrics.map(([label, value], index) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    <span>{label}</span>
                    <span className="text-cyan-100/70">{value}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/8">
                    <motion.div
                      className="h-full rounded-full bg-cyan-100/75"
                      initial={{ width: "0%" }}
                      animate={{ width: value }}
                      transition={{ duration: 0.85, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {output.signals.map((signal) => (
                <span key={signal} className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-slate-300">
                  {signal}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
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
