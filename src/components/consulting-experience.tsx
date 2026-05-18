"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const maturityAxes = [
  { key: "control", label: "Control", copy: "Visibilidad sobre avance, riesgo y dependencia." },
  { key: "process", label: "Proceso", copy: "Flujos repetibles y coordinación entre áreas." },
  { key: "commercial", label: "Comercial", copy: "Demanda, seguimiento y conversión estructurada." },
  { key: "intelligence", label: "Inteligencia", copy: "KPIs y lectura ejecutiva confiable." },
];

export function MaturityMap() {
  const [scores, setScores] = useState([2, 2, 2, 2]);
  const average = Math.round(scores.reduce((sum, value) => sum + value, 0) / scores.length);
  const verdict =
    average <= 2
      ? "Operación dependiente"
      : average === 3
        ? "Operación en transición"
        : "Operación estructurada";

  return (
    <div className="rounded-[2rem] border border-white/10 p-6 surface-panel">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-100/55">Maturity map</p>
          <h3 className="mt-4 text-2xl tracking-[-0.03em]">¿Qué tan estructurada está hoy tu operación?</h3>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-right">
          <p className="text-3xl tracking-[-0.04em]">{average}/5</p>
          <p className="mt-1 text-sm text-slate-400">{verdict}</p>
        </div>
      </div>
      <div className="mt-8 grid gap-5">
        {maturityAxes.map((axis, index) => (
          <div key={axis.key}>
            <div className="mb-3 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-white">{axis.label}</p>
                <p className="mt-1 text-sm text-slate-400">{axis.copy}</p>
              </div>
              <span className="text-sm text-cyan-100">{scores[index]}/5</span>
            </div>
            <input
              type="range"
              min={1}
              max={5}
              value={scores[index]}
              onChange={(event) =>
                setScores((current) =>
                  current.map((value, item) => (item === index ? Number(event.target.value) : value)),
                )
              }
              className="w-full accent-cyan-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const diagnosticQuestions = [
  {
    key: "perception",
    question: "¿Tu mercado percibe menos capacidad de la que realmente tienes?",
    solution: "Posicionamiento Corporativo Premium",
  },
  {
    key: "manual",
    question: "¿Tus procesos dependen demasiado de WhatsApp, Excel o memoria?",
    solution: "Digitalización Operacional",
  },
  {
    key: "sales",
    question: "¿Tienes demanda, pero el seguimiento comercial no es consistente?",
    solution: "Sistema Comercial Digital",
  },
  {
    key: "fragmented",
    question: "¿Tus herramientas y datos viven fragmentados entre áreas?",
    solution: "Infraestructura Digital Empresarial",
  },
];

export function SolutionRecommender() {
  const [answers, setAnswers] = useState<string[]>([]);
  const recommendation = useMemo(() => {
    const counts = answers.reduce<Record<string, number>>((acc, item) => {
      acc[item] = (acc[item] ?? 0) + 1;
      return acc;
    }, {});
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "Aún no hay suficiente señal";
  }, [answers]);

  return (
    <div className="rounded-[2rem] border border-white/10 p-6 surface-panel">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-100/55">Selector consultivo</p>
      <h3 className="mt-4 text-2xl tracking-[-0.03em]">Qué capa podría estar frenando tu empresa</h3>
      <div className="mt-6 grid gap-3">
        {diagnosticQuestions.map((item) => {
          const active = answers.includes(item.solution);
          return (
            <button
              key={item.key}
              type="button"
              onClick={() =>
                setAnswers((current) =>
                  active ? current.filter((value) => value !== item.solution) : [...current, item.solution],
                )
              }
              className={`rounded-[1.4rem] border p-4 text-left transition ${
                active ? "border-cyan-100/35 bg-white/[0.08]" : "border-white/10 bg-black/20 hover:bg-white/[0.04]"
              }`}
            >
              {item.question}
            </button>
          );
        })}
      </div>
      <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-black/20 p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">Lectura preliminar</p>
        <motion.p layout className="mt-4 text-xl">
          {recommendation}
        </motion.p>
      </div>
    </div>
  );
}
