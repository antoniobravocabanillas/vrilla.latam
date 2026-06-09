"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PremiumLink, Reveal } from "@/components/ui-primitives";

type Industry = {
  name: string;
  code: string;
  friction: string;
  system: string;
  executiveSignal: string;
  metric: string;
  phase: "primary" | "expansion";
};

const primaryIndustries: Industry[] = [
  {
    name: "Topografía y Geomática",
    code: "TOPO",
    friction: "Levantamientos, entregables, campo y oficina operan con información fragmentada.",
    system: "Trazabilidad campo-oficina, estados por proyecto y control documental especializado.",
    executiveSignal: "Avance real por frente",
    metric: "82%",
    phase: "primary",
  },
  {
    name: "Construcción",
    code: "CONST",
    friction: "Obra, administración, proveedores y gerencia trabajan con lecturas distintas.",
    system: "Flujos de avance, evidencias, alertas de desviación y lectura ejecutiva de riesgos.",
    executiveSignal: "Riesgo operativo visible",
    metric: "71%",
    phase: "primary",
  },
  {
    name: "Ingeniería",
    code: "ING",
    friction: "Proyectos complejos se diluyen entre versiones, responsables, revisiones y entregables.",
    system: "Arquitectura de entregables, responsables, hitos y gobierno de información.",
    executiveSignal: "Control de entregables",
    metric: "64%",
    phase: "primary",
  },
  {
    name: "Real Estate Técnico",
    code: "INMOB",
    friction: "Activos, expedientes, oportunidades y seguimiento comercial quedan fragmentados.",
    system: "Pipeline consultivo, biblioteca documental y control comercial por oportunidad.",
    executiveSignal: "Valor por activo",
    metric: "76%",
    phase: "primary",
  },
];

const expansionIndustries: Industry[] = [
  {
    name: "Industria y Manufactura",
    code: "IND",
    friction: "Producción, mantenimiento y administración no comparten una lectura única.",
    system: "Cadencias, tableros, automatizaciones y gobierno operacional por área.",
    executiveSignal: "Capacidad instalada",
    metric: "73%",
    phase: "expansion",
  },
  {
    name: "Minería",
    code: "MINA",
    friction: "Operación, seguridad, cumplimiento y reportes exigen trazabilidad constante.",
    system: "Protocolos digitales, evidencias, indicadores y alertas de cumplimiento.",
    executiveSignal: "Cumplimiento operativo",
    metric: "69%",
    phase: "expansion",
  },
  {
    name: "Logística Operativa",
    code: "LOGI",
    friction: "Despachos, rutas, incidencias y clientes generan fricción invisible.",
    system: "Estados operativos, alertas, responsables y visibilidad de servicio.",
    executiveSignal: "Servicio bajo control",
    metric: "79%",
    phase: "expansion",
  },
  {
    name: "Retail Operativo",
    code: "COMERC",
    friction: "Ventas, inventario, atención y gestión diaria pierden margen por falta de sistema.",
    system: "Lectura comercial, automatización operativa y control por punto de contacto.",
    executiveSignal: "Margen bajo control",
    metric: "67%",
    phase: "expansion",
  },
];

export const industrySystems = [...primaryIndustries, ...expansionIndustries];

const operatingPatterns = [
  {
    title: "Campo distribuido",
    body: "Equipos, supervisores y oficina necesitan operar sobre una verdad compartida, no sobre mensajes sueltos.",
    signal: "Campo → Oficina",
  },
  {
    title: "Documentación crítica",
    body: "Entregables, certificados, expedientes y evidencias deben vivir con versión, estado y responsable.",
    signal: "Documento → Trazabilidad",
  },
  {
    title: "Dirección sin visibilidad",
    body: "Gerencia no debería perseguir información: debe leer avance, riesgo y margen desde una capa ejecutiva.",
    signal: "Operación → Decisión",
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

      <IndustryPhase
        eyebrow="Fase 01 · Sectores primarios"
        title="Donde VRILLA puede generar impacto inmediato."
        copy="Verticales técnicas con alto valor económico, procesos complejos y baja madurez digital. Aquí concentramos foco comercial, aprendizaje y validación operativa."
        industries={primaryIndustries}
      />

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

      <IndustryPhase
        eyebrow="Fase 02 · Expansión"
        title="Módulos próximos a integrarse al sistema."
        copy="Sectores donde la misma arquitectura puede escalar una vez consolidado el modelo comercial y operativo en las verticales primarias."
        industries={expansionIndustries}
        expansion
      />

      <section className="container-shell pb-24">
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-[2.4rem] border border-cyan-100/15 p-8 text-center surface-panel lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(190,248,255,0.13),transparent_34%)]" />
            <div className="relative mx-auto max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/70">Diagnóstico por contexto</p>
              <h2 className="mt-5 text-balance text-3xl font-medium tracking-[-0.045em] text-white sm:text-4xl">
                ¿Tu industria no está en la lista o requiere una solución a medida?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Analizamos tu operación como un sistema, no como un nicho. Si existe fricción operativa, trazabilidad débil o baja visibilidad ejecutiva, podemos mapear el camino.
              </p>
              <div className="mt-8">
                <PremiumLink href="/contacto">Solicitar Diagnóstico Operacional</PremiumLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function IndustryPhase({
  eyebrow,
  title,
  copy,
  industries,
  expansion = false,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  industries: Industry[];
  expansion?: boolean;
}) {
  return (
    <section className="container-shell pb-24">
      <div className="mb-10 grid gap-6 lg:grid-cols-[0.72fr_1fr] lg:items-end">
        <Reveal direction="left">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/70">{eyebrow}</p>
            <h2 className="mt-4 max-w-2xl text-balance text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl">{title}</h2>
          </div>
        </Reveal>
        <Reveal direction="right" delay={0.06}>
          <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{copy}</p>
        </Reveal>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {industries.map((industry, index) => (
          <Reveal key={industry.name} delay={index * 0.035} direction={index % 2 === 0 ? "left" : "right"}>
            <IndustryCard industry={industry} index={index} expansion={expansion} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function IndustryCard({ industry, index, expansion }: { industry: Industry; index: number; expansion: boolean }) {
  return (
    <article
      className={`group relative min-h-[330px] overflow-hidden rounded-[2rem] p-5 transition duration-500 hover:-translate-y-1 ${
        expansion
          ? "border border-dashed border-white/10 opacity-60 hover:border-cyan-100/25 hover:opacity-100"
          : "border border-white/12 opacity-100 hover:border-cyan-100/25 surface-panel"
      }`}
    >
      <div className={`absolute inset-0 transition duration-500 ${expansion ? "bg-white/[0.025]" : "bg-[radial-gradient(circle_at_80%_10%,rgba(184,245,255,0.13),transparent_32%)] opacity-70 group-hover:opacity-100"}`} />
      <div className="absolute -right-16 top-10 h-40 w-40 rounded-full bg-cyan-200/10 blur-3xl" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between gap-4">
          <p className={`font-mono text-[10px] uppercase tracking-[0.24em] ${expansion ? "text-slate-400 group-hover:text-cyan-100/70" : "text-cyan-100"}`}>
            [{industry.code}]
          </p>
          <motion.span
            className={`size-2 rounded-full ${expansion ? "bg-slate-500 group-hover:bg-cyan-100" : "bg-cyan-100"}`}
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
        {industrySystems.map((industry, index) => (
          <motion.div
            key={industry.code}
            className={`self-center rounded-2xl border p-3 backdrop-blur-md ${industry.phase === "primary" ? "border-white/10 bg-black/20" : "border-dashed border-white/10 bg-black/10 opacity-70"}`}
            animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
            transition={{ duration: 4.5 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-100/55">[{industry.code}]</span>
              <ArrowUpRight className="size-3 text-cyan-100/60" />
            </div>
            <p className="mt-3 text-sm text-white">{industry.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
