"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui-primitives";

const method = [
  ["01", "Escuchamos", "Antes de proponer, entendemos contexto, objetivos, fricciones y capacidad real de ejecución."],
  ["02", "Diagnosticamos", "Convertimos desorden operativo en prioridades, oportunidades y un mapa claro de intervención."],
  ["03", "Construimos", "Integramos estrategia, sistemas, automatización, inteligencia y crecimiento en soluciones ejecutables."],
  ["04", "Escalamos", "Optimizamos lo construido para que la empresa gane control, visibilidad y capacidad de crecimiento."],
];

const principles = [
  ["Problemas reales", "No vendemos servicios por vender. Entramos cuando existe una fricción que puede convertirse en mejora medible."],
  ["Pensamiento sistémico", "Leemos estrategia, operación, tecnología, marketing, personas e información como partes de un mismo sistema."],
  ["Resultados", "La actividad no es progreso. Priorizamos eficiencia, crecimiento, rentabilidad, control y escalabilidad."],
  ["Innovación con propósito", "Usamos automatización, IA y tecnología cuando simplifican trabajo y generan ventaja real."],
  ["Integridad", "Preferimos perder una venta antes que recomendar una solución que no aporte valor."],
  ["Largo plazo", "Construimos relaciones, procesos y sistemas pensados para seguir generando valor después de la implementación."],
];

const contrast = [
  ["No somos", "Agencia tradicional", "No reducimos el problema a campañas, redes, piezas o presencia digital aislada."],
  ["No somos", "Software factory", "No construimos lo que se pide sin comprender primero el negocio y su operación."],
  ["Sí somos", "Partner de transformación", "Diagnosticamos, diseñamos e implementamos sistemas para operar mejor y crecer con estructura."],
  ["Sí somos", "Growth + Systems + Intelligence", "Conectamos crecimiento comercial, arquitectura operacional y lectura ejecutiva en una sola estrategia."],
];

export function AboutExperience() {
  return (
    <>
      <section className="container-shell grid gap-10 pb-24 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal direction="left">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/70">Claim principal</p>
            <h2 className="mt-5 text-balance text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl">
              Escuchamos. Diagnosticamos. Construimos. Escalamos.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              VRILLA existe para transformar organizaciones con alto potencial en empresas más inteligentes, eficientes y escalables. No empezamos preguntando qué servicio necesita el cliente; empezamos entendiendo qué objetivo quiere alcanzar.
            </p>
          </div>
        </Reveal>
        <Reveal direction="right" delay={0.08}>
          <OperationalBeliefPanel />
        </Reveal>
      </section>

      <section className="container-shell pb-24">
        <div className="grid gap-4 lg:grid-cols-4">
          {method.map(([number, title, body], index) => (
            <Reveal key={title} delay={index * 0.045} direction={index % 2 === 0 ? "left" : "right"}>
              <article className="group relative min-h-[280px] overflow-hidden rounded-[2rem] border border-white/10 p-6 surface-panel">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/45 to-transparent" />
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-200/10 blur-3xl transition duration-700 group-hover:bg-cyan-200/16" />
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-100/55">{number}</p>
                <h3 className="mt-8 text-2xl tracking-[-0.045em] text-white">{title}</h3>
                <p className="mt-5 leading-7 text-slate-300">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <Reveal direction="left">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/70">Filosofía</p>
              <h2 className="mt-5 text-balance text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl">
                Las empresas no crecen por trabajar más. Crecen cuando construyen mejores sistemas.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Creemos que la tecnología debe servir a las personas y al negocio. Debe simplificar, liberar tiempo y convertir la complejidad en claridad operativa.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map(([title, body], index) => (
              <Reveal key={title} delay={index * 0.035} direction="right">
                <article className="min-h-[220px] rounded-[1.8rem] border border-white/10 p-5 surface-panel">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">Principio 0{index + 1}</p>
                  <h3 className="mt-5 text-xl tracking-[-0.035em] text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell pb-24">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 p-6 surface-panel lg:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(189,248,255,0.12),transparent_34%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal direction="left">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/70">Posicionamiento</p>
                <h2 className="mt-5 text-balance text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl">
                  No vendemos herramientas. Diseñamos sistemas que ayudan a operar mejor.
                </h2>
              </div>
            </Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {contrast.map(([type, title, body], index) => (
                <Reveal key={`${type}-${title}`} delay={index * 0.04} direction="right">
                  <article className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                    <p className={`font-mono text-[10px] uppercase tracking-[0.22em] ${type === "Sí somos" ? "text-cyan-100/70" : "text-slate-500"}`}>{type}</p>
                    <h3 className="mt-4 text-lg tracking-[-0.03em] text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function OperationalBeliefPanel() {
  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-[2.4rem] border border-white/10 p-6 surface-panel">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_42%,rgba(176,243,255,0.15),transparent_34%)]" />
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/55 to-transparent" />
      <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 100 100" preserveAspectRatio="none">
        {[
          "M12 72 C 28 50, 38 44, 52 50 S 72 70, 88 28",
          "M14 28 C 28 34, 38 20, 50 30 S 72 40, 88 20",
          "M18 84 C 34 76, 50 76, 66 64 S 82 54, 92 58",
        ].map((d, index) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke="rgba(190,244,255,.55)"
            strokeWidth="0.35"
            strokeDasharray="3 4"
            animate={{ pathLength: [0.18, 1, 0.18], opacity: [0.2, 0.85, 0.2] }}
            transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>
      <div className="relative grid min-h-[380px] content-between gap-4">
        <div className="grid gap-3 sm:grid-cols-3">
          {["Growth", "Systems", "Intelligence"].map((item, index) => (
            <motion.div
              key={item}
              className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-md"
              animate={{ y: [0, index === 1 ? -8 : 6, 0] }}
              transition={{ duration: 4.5 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">Layer 0{index + 1}</p>
              <p className="mt-4 text-lg text-white">{item}</p>
            </motion.div>
          ))}
        </div>
        <div className="rounded-[1.7rem] border border-white/10 bg-black/25 p-5 backdrop-blur-md">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">Operating belief</p>
          <p className="mt-4 max-w-2xl text-xl leading-8 tracking-[-0.03em] text-white">
            El crecimiento sostenible aparece cuando estrategia, operación y tecnología trabajan en una misma dirección.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {["Claridad", "Control", "Escala"].map((signal, index) => (
              <div key={signal} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-slate-300">{signal}</span>
                  <motion.span
                    className="size-2 rounded-full bg-cyan-100"
                    animate={{ opacity: [0.35, 1, 0.35], scale: [1, 1.35, 1] }}
                    transition={{ duration: 2.8, delay: index * 0.25, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
