"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { PremiumLink } from "@/components/ui-primitives";

type Question = {
  id: string;
  prompt: string;
  options: { label: string; score: number; friction: string }[];
};

const questions: Question[] = [
  {
    id: "coordination",
    prompt: "¿Cómo se coordinan hoy las tareas críticas entre campo y oficina?",
    options: [
      { label: "Principalmente por WhatsApp o llamadas", score: 1, friction: "coordinación" },
      { label: "Con algunos formatos, pero sin sistema central", score: 2, friction: "coordinación" },
      { label: "Con flujos definidos y responsables visibles", score: 4, friction: "control" },
    ],
  },
  {
    id: "visibility",
    prompt: "¿Qué tan fácil es para dirección saber el estado real de los proyectos?",
    options: [
      { label: "Depende de preguntar a varias personas", score: 1, friction: "visibilidad" },
      { label: "Hay reportes, pero llegan tarde o incompletos", score: 2, friction: "visibilidad" },
      { label: "Existe lectura ejecutiva confiable", score: 4, friction: "control" },
    ],
  },
  {
    id: "sales",
    prompt: "¿Cómo gestionan oportunidades y seguimiento comercial?",
    options: [
      { label: "De forma reactiva y manual", score: 1, friction: "comercial" },
      { label: "Con herramientas parciales, sin consistencia", score: 2, friction: "comercial" },
      { label: "Con pipeline medible y cadencia clara", score: 4, friction: "control" },
    ],
  },
  {
    id: "documents",
    prompt: "¿Dónde viven documentos, entregables y versiones críticas?",
    options: [
      { label: "En varias carpetas y conversaciones", score: 1, friction: "trazabilidad" },
      { label: "Hay repositorios, pero no siempre ordenados", score: 2, friction: "trazabilidad" },
      { label: "Con estructura, permisos y trazabilidad", score: 4, friction: "control" },
    ],
  },
  {
    id: "dependency",
    prompt: "Si el fundador se ausenta una semana, ¿qué ocurre?",
    options: [
      { label: "Muchas decisiones se traban", score: 1, friction: "dependencia" },
      { label: "La operación avanza, pero con fricción", score: 2, friction: "dependencia" },
      { label: "El sistema sostiene la continuidad", score: 4, friction: "control" },
    ],
  },
  {
    id: "scale",
    prompt: "Si la empresa duplicara su carga de trabajo mañana, ¿qué pasaría?",
    options: [
      { label: "El sistema colapsaría", score: 1, friction: "escala" },
      { label: "Se podría responder, pero con más desgaste", score: 2, friction: "escala" },
      { label: "La operación absorbería el crecimiento", score: 4, friction: "control" },
    ],
  },
];

function maturityFromScore(score: number) {
  if (score <= 10) return "Madurez inicial";
  if (score <= 17) return "Madurez intermedia";
  return "Madurez estructurada";
}

function interventionFor(friction: string) {
  switch (friction) {
    case "comercial":
      return {
        friction: "fricción comercial",
        solution: "Sistema Comercial Digital",
        intervention: "Estructurar captación, seguimiento y conversión.",
      };
    case "trazabilidad":
      return {
        friction: "fricción de trazabilidad",
        solution: "Digitalización Operacional",
        intervention: "Ordenar documentos, flujos y responsables.",
      };
    case "dependencia":
      return {
        friction: "dependencia del fundador",
        solution: "Infraestructura Digital Empresarial",
        intervention: "Distribuir control y reducir dependencia informal.",
      };
    case "escala":
      return {
        friction: "fricción de escala",
        solution: "Infraestructura Digital Empresarial",
        intervention: "Diseñar arquitectura preparada para crecimiento.",
      };
    case "visibilidad":
      return {
        friction: "falta de visibilidad ejecutiva",
        solution: "VRILLA Intelligence",
        intervention: "Construir lectura confiable para dirección.",
      };
    default:
      return {
        friction: "fricción de coordinación",
        solution: "Digitalización Operacional",
        intervention: "Conectar campo, oficina y decisión.",
      };
  }
}

export function DiagnosticFlow() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<{ score: number; friction: string }[]>([]);
  const complete = step >= questions.length;

  const result = useMemo(() => {
    const score = answers.reduce((sum, answer) => sum + answer.score, 0);
    const frictionCounts = answers.reduce<Record<string, number>>((acc, answer) => {
      acc[answer.friction] = (acc[answer.friction] ?? 0) + 1;
      return acc;
    }, {});
    const dominant = Object.entries(frictionCounts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "coordinación";
    return { score, maturity: maturityFromScore(score), ...interventionFor(dominant) };
  }, [answers]);

  function answerQuestion(score: number, friction: string) {
    setAnswers((current) => [...current, { score, friction }]);
    setStep((current) => current + 1);
  }

  function restart() {
    setStep(0);
    setAnswers([]);
  }

  return (
    <div className="rounded-[2rem] border border-white/10 p-6 surface-panel">
      {!complete ? (
        <>
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-100/55">
              Pregunta {step + 1} / {questions.length}
            </p>
            <div className="h-1.5 w-36 rounded-full bg-white/8">
              <motion.div
                className="h-1.5 rounded-full bg-cyan-100/80"
                animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
          <h2 className="mt-6 text-2xl tracking-[-0.03em]">{questions[step].prompt}</h2>
          <div className="mt-6 grid gap-3">
            {questions[step].options.map((option) => (
              <button
                key={option.label}
                type="button"
                onClick={() => answerQuestion(option.score, option.friction)}
                className="rounded-[1.4rem] border border-white/10 bg-black/20 p-4 text-left transition hover:border-cyan-100/35 hover:bg-white/[0.06]"
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-100/55">Resultado</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-slate-400">Nivel de madurez</p>
              <p className="mt-3 text-2xl">{result.maturity}</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-slate-400">Fricción dominante</p>
              <p className="mt-3 text-2xl">{result.friction}</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-slate-400">Solución sugerida</p>
              <p className="mt-3 text-2xl">{result.solution}</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-slate-400">Intervención recomendada</p>
              <p className="mt-3 leading-7 text-slate-200">{result.intervention}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <PremiumLink href="/contacto">Solicitar diagnóstico personalizado</PremiumLink>
            <button
              type="button"
              onClick={restart}
              className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-slate-200 transition hover:bg-white/[0.07]"
            >
              Repetir evaluación
            </button>
          </div>
        </>
      )}
    </div>
  );
}
