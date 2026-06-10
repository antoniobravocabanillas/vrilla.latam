import { ContactForm } from "@/components/contact-form";
import { HeroVisual } from "@/components/hero-visual";
import { PageShell } from "@/components/page-shell";
import { PremiumLink, Reveal } from "@/components/ui-primitives";

const operatingSignals = ["Growth", "Systems", "Intelligence", "AI aplicada"];

const benefits = [
  {
    label: "Control operativo",
    title: "Más control operativo",
    body: "Centraliza procesos, indicadores y seguimiento para que dirección vea qué está pasando sin perseguir información.",
    signal: "Procesos + métricas + responsables",
  },
  {
    label: "Eficiencia",
    title: "Menos dependencia manual",
    body: "Automatiza tareas repetitivas, reduce fricción interna y libera tiempo del equipo para trabajo de mayor valor.",
    signal: "Menos retrabajo, más cadencia",
  },
  {
    label: "Crecimiento",
    title: "Mejor seguimiento comercial",
    body: "Ordena leads, pipeline, contacto y oportunidades para que el crecimiento no dependa de memoria o improvisación.",
    signal: "Demanda conectada a operación",
  },
  {
    label: "Decisión",
    title: "Decisiones con datos",
    body: "Convierte información dispersa en visibilidad ejecutiva, señales accionables y lectura clara de riesgo, avance y prioridad.",
    signal: "BI ejecutivo sin ruido",
  },
];

const processSteps = [
  {
    title: "Diagnóstico",
    body: "Escuchamos, analizamos y detectamos cuellos de botella reales.",
  },
  {
    title: "Arquitectura",
    body: "Diseñamos el sistema adecuado para el negocio, no una solución genérica.",
  },
  {
    title: "Implementación",
    body: "Construimos activos digitales, automatizaciones, dashboards o plataformas según prioridad.",
  },
  {
    title: "Escalamiento",
    body: "Medimos, optimizamos y preparamos la operación para crecer.",
  },
];

const caseBefore = [
  "Procesos manuales",
  "Información dispersa",
  "Seguimiento inconsistente",
  "Decisiones intuitivas",
];

const caseAfter = [
  "Pipeline controlado",
  "Automatización comercial",
  "Métricas claras",
  "Decisiones basadas en datos",
  "Crecimiento escalable",
];

function SystemLine({ label, width }: { label: string; width: string }) {
  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-100/55">{label}</span>
      <div className="h-px bg-white/10">
        <div className="h-px bg-cyan-100/70" style={{ width }} />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div className="section-veil absolute inset-0" />
        <div className="container-shell relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:py-20">
          <div className="space-y-8">
            <Reveal direction="left">
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-100/70">
                VRILLA | Transformación operacional digital
              </p>
            </Reveal>
            <Reveal direction="left" delay={0.06}>
              <h1 className="text-balance text-5xl font-semibold tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                Sistemas digitales para operar mejor, vender con más control y escalar con inteligencia.
              </h1>
            </Reveal>
            <Reveal direction="left" delay={0.12}>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                VRILLA integra estrategia, tecnología, automatización e inteligencia artificial para transformar operaciones, fortalecer sistemas comerciales y construir organizaciones preparadas para crecer.
              </p>
            </Reveal>
            <Reveal direction="left" delay={0.16}>
              <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-100/60">
                {operatingSignals.map((signal) => (
                  <span key={signal} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5">
                    {signal}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal direction="left" delay={0.2} className="flex flex-col gap-3 sm:flex-row">
              <PremiumLink href="/contacto">Solicitar Diagnóstico</PremiumLink>
              <PremiumLink href="/metodo" subtle>
                Ver cómo trabajamos
              </PremiumLink>
            </Reveal>
            <Reveal direction="left" delay={0.26}>
              <p className="max-w-xl border-l border-cyan-100/30 pl-4 text-sm leading-6 text-slate-400">
                No vendemos páginas web, campañas ni software aislado. Diseñamos sistemas digitales para que las organizaciones operen mejor, crezcan con control y tomen mejores decisiones.
              </p>
            </Reveal>
          </div>
          <Reveal direction="right" delay={0.12}>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      <section className="container-shell py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <Reveal direction="left">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/70">Qué mejora VRILLA</p>
              <h2 className="mt-5 max-w-3xl text-balance text-4xl font-medium tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
                Transformación visible en la operación, no pantallas decorativas.
              </h2>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.06}>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              El objetivo no es sumar herramientas. Es integrar crecimiento, operación e inteligencia para reducir fricción, aumentar control y crear una base preparada para escalar.
            </p>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 0.04} direction={index % 2 === 0 ? "left" : "right"}>
              <article className="relative min-h-[285px] overflow-hidden rounded-[1.8rem] border border-white/10 p-5 surface-panel">
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/45 to-transparent" />
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">{benefit.label}</p>
                <h3 className="mt-6 text-2xl tracking-[-0.04em] text-white">{benefit.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{benefit.body}</p>
                <div className="mt-7 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Señal esperada</p>
                  <p className="mt-2 text-sm text-cyan-50/85">{benefit.signal}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal direction="up" delay={0.08}>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[2rem] border border-white/10 p-5 surface-panel sm:flex-row sm:items-center">
            <p className="max-w-2xl text-sm leading-6 text-slate-300">
              Sin cifras inventadas: las métricas de impacto se publican solo cuando existe validación real del cliente o del equipo Growth.
            </p>
            <PremiumLink href="/contacto">Solicitar Diagnóstico</PremiumLink>
          </div>
        </Reveal>
      </section>

      <section className="container-shell py-24 lg:py-28">
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-[2.6rem] border border-white/12 bg-gradient-to-br from-[#05080D] to-[#071A1E] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.42)] lg:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,250,255,0.12),transparent_36%)]" />
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/55 to-transparent" />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/70">Caso real ? Operaci?n integrada</p>
              <div className="mt-5 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
                <div>
                  <h2 className="max-w-3xl text-balance text-4xl font-medium tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
                    De 12 hojas Excel a 1 dashboard operativo.
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                    Centralizamos la operaci?n, eliminamos versiones duplicadas y convertimos datos dispersos en decisiones visibles.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-cyan-100/15 bg-white/[0.04] p-5 text-center shadow-[0_0_70px_rgba(201,250,255,0.08)]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-100/65">Resultado visible</p>
                  <p className="mt-3 text-5xl font-semibold tracking-[-0.065em] text-white drop-shadow-[0_0_24px_rgba(201,250,255,0.18)] sm:text-6xl">
                    18 h/semana
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">recuperadas para decidir y ejecutar.</p>
                </div>
              </div>

              <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
                <article className="rounded-[2rem] border border-white/12 bg-white/[0.04] p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-rose-100/55">Antes ? caos operativo</p>
                  <h3 className="mt-5 text-2xl tracking-[-0.04em] text-white">12 hojas Excel</h3>
                  <div className="mt-6 grid gap-3">
                    {caseBefore.slice(1).map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-300">
                        {item}
                      </div>
                    ))}
                  </div>
                </article>

                <div className="hidden min-w-16 items-center justify-center lg:flex">
                  <span className="rounded-full border border-cyan-100/20 bg-cyan-100/10 px-4 py-3 text-2xl text-cyan-50 shadow-[0_0_36px_rgba(201,250,255,0.1)]">?</span>
                </div>

                <article className="rounded-[2rem] border border-cyan-100/20 bg-white/[0.04] p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-100/65">Despu?s ? control centralizado</p>
                  <h3 className="mt-5 text-2xl tracking-[-0.04em] text-white">1 dashboard operativo</h3>
                  <div className="mt-6 grid gap-3">
                    {caseAfter.slice(1).map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-100">
                        {item}
                      </div>
                    ))}
                  </div>
                </article>
              </div>

              <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[2rem] border border-white/12 bg-black/20 p-5 sm:flex-row sm:items-center">
                <div>
                  <p className="text-2xl font-medium tracking-[-0.04em] text-white">18 horas/semana recuperadas</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Tiempo que antes se perd?a consolidando informaci?n, ahora se usa para decidir y ejecutar.
                  </p>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/65">
                    Menos fricci?n. M?s control. Mejor margen.
                  </p>
                </div>
                <PremiumLink href="/contacto">Solicitar Diagn?stico</PremiumLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-shell py-24 lg:py-28">
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-[2.6rem] border border-white/10 p-6 surface-panel lg:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(184,245,255,0.1),transparent_36%)]" />
            <div className="relative grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/70">Nuestro proceso</p>
                <h2 className="mt-5 text-balance text-4xl font-medium tracking-[-0.055em] text-white sm:text-5xl">
                  Diagnóstico → Arquitectura → Implementación → Escalamiento.
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Una secuencia institucional para transformar operaciones reales sin sobrediseñar, sin vender piezas sueltas y sin perder foco en resultados.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {processSteps.map((step, index) => (
                  <article key={step.title} className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-black/20 p-5">
                    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-cyan-100/60 via-cyan-100/15 to-transparent" />
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">0{index + 1}</p>
                    <h3 className="mt-5 text-2xl tracking-[-0.04em] text-white">{step.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-slate-300">{step.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>



      <section className="container-shell py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
          <Reveal direction="left">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/70">Solicitar Diagnóstico</p>
              <h2 className="mt-5 max-w-2xl text-balance text-4xl font-medium tracking-[-0.055em] text-white sm:text-5xl">
                El siguiente paso no es comprar herramientas. Es entender qué sistema necesita tu operación.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Comparte el principal desafío de tu empresa. Te responderemos con una primera lectura consultiva y el siguiente paso recomendado.
              </p>
              <div className="mt-8 grid max-w-xl gap-4 rounded-[2rem] border border-white/10 p-5 surface-panel">
                <SystemLine label="claridad" width="78%" />
                <SystemLine label="control" width="84%" />
                <SystemLine label="escala" width="70%" />
              </div>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
