import { ContactForm } from "@/components/contact-form";
import { MaturityMap, SolutionRecommender } from "@/components/consulting-experience";
import { HeroVisual } from "@/components/hero-visual";
import { BrokenSignal, LayerBridge, MiniArchitecture, PipelineRail } from "@/components/operational-ui";
import { PageShell } from "@/components/page-shell";
import {
  divisions,
  industries,
  methodSteps,
  packagedSolutions,
  problems,
  methodOutputs,
} from "@/components/site-data";
import { PremiumLink, Reveal, SectionHeading } from "@/components/ui-primitives";

const industrialCodes = ["FIELD", "BUILD", "ENG", "GEO", "RE", "MINE", "IND", "OPS"];

export default function Home() {
  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div className="section-veil absolute inset-0" />
        <div className="container-shell relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:py-20">
          <div className="space-y-8">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-100/70">
                Infraestructura operacional para empresas técnicas
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="text-balance text-4xl font-medium tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Transformamos empresas técnicas en operaciones digitales escalables.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Diseñamos sistemas, automatización y estructuras digitales para ordenar, controlar y hacer crecer empresas técnicas en LATAM.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="flex flex-col gap-3 sm:flex-row">
              <PremiumLink href="/contacto">Solicitar diagnóstico operacional</PremiumLink>
              <PremiumLink href="/soluciones" subtle>
                Explorar soluciones
              </PremiumLink>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="grid max-w-xl gap-3 sm:grid-cols-3">
                {[
                  ["Procesos", "conectados"],
                  ["Decisiones", "visibles"],
                  ["Escala", "controlada"],
                ].map(([title, value]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">{title}</p>
                    <p className="mt-2 text-sm text-white">{value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.18}>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      <section className="container-shell py-24 lg:py-28">
        <SectionHeading
          eyebrow="Acto 1 · Caos operacional"
          title="El problema no es solo marketing. Es operación desordenada."
          copy="Cuando la empresa crece sobre canales improvisados, la pérdida no está solo en ventas: aparece en tiempos, control, trazabilidad y capacidad de escalar."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <Reveal key={problem} delay={index * 0.04}>
              <BrokenSignal label={`Fricción 0${index + 1}`} value={problem} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell py-24 lg:py-28">
        <SectionHeading
          eyebrow="Acto 2–4 · Arquitectura conectada"
          title="Tres divisiones. Un mismo sistema operativo empresarial."
          copy="Growth, Systems e Intelligence no funcionan como servicios aislados, sino como capas conectadas de crecimiento, ejecución y control."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
          {divisions.map((division, index) => (
            <div key={division.name} className="contents">
              <Reveal delay={index * 0.08}>
                <article className="relative overflow-hidden rounded-[2rem] border border-white/10 p-6 surface-panel">
                  <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-cyan-300/10 blur-3xl" />
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-100/60">
                    Layer 0{index + 1}
                  </p>
                  <h3 className="mt-6 text-2xl tracking-[-0.03em]">{division.name}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{division.description}</p>
                  <MiniArchitecture label="Operational signals" metrics={division.signals} />
                </article>
              </Reveal>
              {index < divisions.length - 1 ? <LayerBridge /> : null}
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell py-24 lg:py-28">
        <SectionHeading
          eyebrow="Acto 5 · Módulos"
          title="Transformación empaquetada para problemas de fondo."
          copy="Cada solución es una pieza de infraestructura. No vende una tarea aislada; resuelve una falla estructural del negocio."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {packagedSolutions.map((solution, index) => (
            <Reveal key={solution.title} delay={index * 0.06}>
              <article className="relative overflow-hidden rounded-[1.9rem] border border-white/10 p-6 surface-panel">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-400/10 blur-3xl" />
                <p className="font-mono text-xs text-cyan-100/50">Module 0{index + 1}</p>
                <h3 className="mt-5 text-2xl tracking-[-0.03em]">{solution.title}</h3>
                <p className="mt-3 max-w-xl leading-7 text-slate-300">{solution.description}</p>
                <MiniArchitecture
                  label="System state"
                  metrics={["Entrada", "Proceso", "Control"]}
                />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <SectionHeading
            eyebrow="Acto 6 · Executive layer"
            title="Visibilidad ejecutiva para decisiones con menos intuición y más control."
            copy="La transformación no termina en automatizar. Culmina cuando dirección puede leer la empresa como un sistema: KPIs, trazabilidad, cuellos de botella y señales tempranas."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["KPI", "Margen por proyecto"],
              ["Trace", "Campo ↔ oficina"],
              ["Risk", "Dependencias críticas"],
            ].map(([tag, title], index) => (
              <Reveal key={title} delay={index * 0.08}>
                <article className="rounded-[1.6rem] border border-white/10 p-5 surface-panel">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">{tag}</p>
                  <p className="mt-6 text-lg">{title}</p>
                  <div className="mt-5 h-1.5 rounded-full bg-white/8">
                    <div className="h-1.5 rounded-full bg-cyan-100/75" style={{ width: `${58 + index * 14}%` }} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mt-8 rounded-[2rem] border border-white/10 p-5 surface-panel">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              ["Margen", "por proyecto"],
              ["Capacidad", "por cuadrilla"],
              ["Riesgo", "por dependencia"],
              ["Avance", "por frente"],
            ].map(([title, value]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">{title}</p>
                <p className="mt-4 text-lg text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-24 lg:py-28">
        <SectionHeading
          eyebrow="Acto 7 · Sectores"
          title="Diseñado para empresas donde la operación manda."
          copy="El lenguaje visual se adapta a verticales técnicas sin recurrir a íconos genéricos: cada sector entra al sistema con un código operacional propio."
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <Reveal key={industry} delay={index * 0.03}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-6 surface-panel">
                <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/35 to-transparent" />
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                  {industrialCodes[index]}
                </p>
                <p className="mt-6 text-slate-100">{industry}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell py-24 lg:py-28">
        <SectionHeading eyebrow="Pipeline" title="Del diagnóstico al control escalable." />
        <PipelineRail steps={methodSteps} />
        <div className="mt-5 grid gap-4 lg:grid-cols-5">
          {methodOutputs.map((item) => (
            <article key={item.step} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">{item.output}</p>
              <p className="mt-4 text-sm leading-6 text-slate-300">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-24 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-2">
          <MaturityMap />
          <SolutionRecommender />
        </div>
      </section>

      <section className="container-shell py-24 lg:py-28">
        <div className="grid gap-6 rounded-[2rem] border border-white/10 p-6 surface-panel lg:grid-cols-[0.72fr_1.28fr] lg:p-8">
          <Reveal>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/70">Caso ICC</p>
              <h2 className="mt-4 text-3xl tracking-[-0.04em] sm:text-4xl">Laboratorio operacional vivo</h2>
              <p className="mt-5 max-w-md leading-7 text-slate-300">
                ICC valida la arquitectura de VRILLA en una operación técnica real: campo, oficina, dirección y datos leyendo la misma verdad operacional.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  ["12+", "años de experiencia técnica"],
                  ["QA/QC", "entregables auditables"],
                  ["Nacional", "cobertura operativa"],
                  ["360°", "servicios, equipos y soporte"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xl tracking-[-0.03em] text-white">{value}</p>
                    <p className="mt-1 text-sm text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Digitalización de procesos",
                "Dashboards ejecutivos",
                "Trazabilidad de proyectos",
                "Conexión campo/oficina",
              ].map((item, index) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-100/50">Lab 0{index + 1}</p>
                  <p className="mt-4 text-slate-100">{item}</p>
                </div>
              ))}
              <div className="sm:col-span-2 rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">Validation map</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-4">
                  {["Campo", "Oficina", "BI", "Dirección"].map((item) => (
                    <div key={item} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-4 text-center text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-2 rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">Evidencia de operación</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {["42 km controlados", "128 ha georreferenciadas", "0.8 mm de tolerancia"].map((item) => (
                    <div key={item} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-4 text-sm text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell py-24 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            eyebrow="Diagnóstico"
            title="Solicita un diagnóstico operacional digital."
            copy="La conversación correcta no empieza con una web o una campaña. Empieza entendiendo dónde se rompe hoy tu operación y qué infraestructura necesita para crecer."
          />
          <ContactForm />
        </div>
      </section>
    </PageShell>
  );
}
