"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui-primitives";

type Industry = {
  name: string;
  code: string;
  friction: string;
  system: string;
  executiveSignal: string;
  metric: string;
};

export const industrySystems: Industry[] = [
  {
    name: "Topografía",
    code: "TOPO",
    friction: "Cuadrillas, entregables y aprobaciones viven en canales separados.",
    system: "Trazabilidad campo-oficina, estados por proyecto y control documental.",
    executiveSignal: "Avance real por frente",
    metric: "82%",
  },
  {
    name: "Construcción",
    code: "BUILD",
    friction: "Obra, administración, proveedores y gerencia operan con lecturas distintas.",
    system: "Flujos de avance, alertas de desviación y lectura ejecutiva de riesgos.",
    executiveSignal: "Riesgo operativo visible",
    metric: "71%",
  },
  {
    name: "Ingeniería",
    code: "ENG",
    friction: "Proyectos complejos se diluyen entre versiones, responsables y revisiones.",
    system: "Arquitectura de entregables, responsables, hitos y gobierno de información.",
    executiveSignal: "Control de entregables",
    metric: "64%",
  },
  {
    name: "Geomática",
    code: "GEO",
    friction: "Datos técnicos valiosos no siempre se traducen en decisión empresarial.",
    system: "Capas de datos, mapas de flujo y tableros interpretables para dirección.",
    executiveSignal: "Datos accionables",
    metric: "88%",
  },
  {
    name: "Real Estate Técnico",
    code: "RE",
    friction: "Activos, expedientes, clientes y seguimiento comercial quedan fragmentados.",
    system: "Pipeline consultivo, biblioteca documental y control por oportunidad.",
    executiveSignal: "Valor por activo",
    metric: "76%",
  },
  {
    name: "Minería",
    code: "MINE",
    friction: "Operación, seguridad, cumplimiento y reportes exigen trazabilidad constante.",
    system: "Protocolos digitales, evidencias, indicadores y alertas de cumplimiento.",
    executiveSignal: "Cumplimiento operativo",
    metric: "69%",
  },
  {
    name: "Industria",
    code: "IND",
    friction: "Producción, mantenimiento y administración no comparten una lectura única.",
    system: "Cadencias, tableros, automatizaciones y gobierno operacional por área.",
    executiveSignal: "Capacidad instalada",
    metric: "73%",
  },
  {
    name: "Logística Operativa",
    code: "OPS",
    friction: "Despachos, rutas, incidencias y clientes generan fricción invisible.",
    system: "Estados operativos, alertas, responsables y visibilidad de servicio.",
    executiveSignal: "Servicio bajo control",
    metric: "79%",
  },
];

const operatingPatterns = [
  {
    title: "Campo distribuido",
    body: "Equipos, supervisores y oficina necesitan operar sobre una verdad compartida, no sobre mensajes sueltos.",
    signal: "Campo ? Oficina",
  },
  {
    title: "Documentación crítica",
    body: "Entregables, certificados, expedientes y evidencias deben vivir con versión, estado y responsable.",
    signal: "Documento ? Trazabilidad",
  },
  {
    title: "Dirección sin visibilidad",
    body: "Gerencia no debería perseguir información: debe leer avance, riesgo y margen desde una capa ejecutiva.",
    signal: "Operación ? Decisión",
  },
];

export function IndustriesExperience() {
  return (
    <>
      <section className="container-shell grid gap-10 pb-24 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <Reveal direction="left">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/70">Sector intelligence</p>
            <h2 className="mt-5 text-balance text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl">
              No tratamos industrias como nichos. Las leemos como sistemas operativos.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Cada vertical tiene una fricción distinta, pero el patrón se repite: información dispersa, decisiones lentas y capacidad técnica que no se convierte en control empresarial.
            </p>
          </div>
        </Reveal>
        <Reveal direction="right" delay={0.08}>
          <IndustryCommandPanel />
        </Reveal>
      </section>

      <section className="container-shell pb-24">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {industrySystems.map((industry, index) => (
            <Reveal key={industry.name} delay={index * 0.035} direction={index % 2 === 0 ? "left" : "right"}>
              <IndustryCard industry={industry} index={index} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell pb-24">
        <div className="grid gap-5 lg:grid-cols-3">
          {operatingPatterns.map((pattern, index) => (
            <Reveal key={pattern.title} delay={index * 0.05} direction="up">
              <article className="group relative min-h-[260px] overflow-hidden rounded-[2rem] border border-white/10 p-6 surface-panel">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/45 to-transparent" />
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-200/10 blur-3xl transition duration-700 group-hover:bg-cyan-200/16" />
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-100/55">Patrón 0{index + 1}</p>
                <h3 className="mt-5 text-2xl tracking-[-0.04em] text-white">{pattern.title}</h3>
                <p className="mt-5 leading-7 text-slate-300">{pattern.body}</p>
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/60">{pattern.signal}</span>
                    <motion.span
                      className="h-1.5 w-16 rounded-full bg-cyan-100/70"
                      animate={{ opacity: [0.35, 1, 0.35], width: [42, 74, 42] }}
                      transition={{ duration: 3 + index, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell pb-24">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 p-6 surface-panel lg:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(189,248,255,0.12),transparent_36%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <Reveal direction="left">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/70">Criterio VRILLA</p>
                <h2 className="mt-5 max-w-2xl text-balance text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl">
                  Entramos donde la operación ya es suficientemente compleja para necesitar arquitectura.
                </h2>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.08}>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["01", "Trazabilidad", "Saber qué pasó, quién responde y qué sigue."],
                  ["02", "Control", "Convertir ejecución diaria en lectura gerencial."],
                  ["03", "Escala", "Crecer sin sumar caos, dependencia ni retrabajo."],
                ].map(([number, title, body]) => (
                  <div key={title} className="rounded-[1.4rem] border border-white/10 bg-black/20 p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">{number}</p>
                    <h3 className="mt-5 text-lg tracking-[-0.03em] text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function IndustryCard({ industry, index }: { industry: Industry; index: number }) {
  return (
    <article className="group relative min-h-[310px] overflow-hidden rounded-[2rem] border border-white/10 p-5 surface-panel transition duration-500 hover:-translate-y-1 hover:border-cyan-100/25">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(184,245,255,0.13),transparent_32%)] opacity-70 transition duration-500 group-hover:opacity-100" />
      <div className="absolute -right-16 top-10 h-40 w-40 rounded-full bg-cyan-200/10 blur-3xl" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-100/55">{industry.code}</p>
          <motion.span
            className="size-2 rounded-full bg-cyan-100"
            animate={{ opacity: [0.35, 1, 0.35], scale: [1, 1.35, 1] }}
            transition={{ duration: 2.8, delay: index * 0.15, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <h3 className="mt-6 text-2xl tracking-[-0.045em] text-white">{industry.name}</h3>
        <div className="mt-6 space-y-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">Fricción dominante</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">{industry.friction}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">Sistema requerido</p>
            <p className="mt-2 text-sm leading-6 text-slate-100">{industry.system}</p>
          </div>
        </div>
        <div className="mt-auto pt-6">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs text-slate-300">{industry.executiveSignal}</span>
              <span className="font-mono text-xs text-cyan-100">{industry.metric}</span>
            </div>
            <div className="mt-3 h-px bg-white/10">
              <motion.div
                className="h-px bg-cyan-100/75"
                initial={{ width: "28%" }}
                whileInView={{ width: industry.metric }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function IndustryCommandPanel() {
  return (
    <div className="relative min-h-[440px] overflow-hidden rounded-[2.4rem] border border-white/10 p-6 surface-panel">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_42%,rgba(176,243,255,0.16),transparent_34%)]" />
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/55 to-transparent" />
      <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 100 100" preserveAspectRatio="none">
        {[
          "M12 68 C 26 46, 38 35, 52 44 S 76 66, 88 30",
          "M10 26 C 26 34, 36 24, 48 30 S 74 42, 90 20",
          "M18 80 C 34 75, 50 76, 66 64 S 80 52, 92 56",
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
      <div className="relative grid h-full min-h-[390px] grid-cols-2 gap-3 sm:grid-cols-4">
        {industrySystems.slice(0, 8).map((industry, index) => (
          <motion.div
            key={industry.code}
            className="self-center rounded-2xl border border-white/10 bg-black/20 p-3 backdrop-blur-md"
            animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
            transition={{ duration: 4.5 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-100/55">{industry.code}</span>
              <ArrowUpRight className="size-3 text-cyan-100/60" />
            </div>
            <p className="mt-3 text-sm text-white">{industry.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
