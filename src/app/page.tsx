import { HeroVisual } from "@/components/hero-visual";
import { PageShell } from "@/components/page-shell";
import { PremiumLink, Reveal } from "@/components/ui-primitives";

const trustCodes = ["CONST", "TOPO", "ING", "INMOB"];

const operationalFriction = [
  ["Hojas de cálculo", "Versiones interminables que no explican avance, margen ni riesgo real."],
  ["Equipos desconectados", "Campo, oficina, ventas y dirección operando con lecturas distintas."],
  ["Datos que no cuadran", "Indicadores fragmentados que obligan a decidir tarde o por intuición."],
  ["Dependencia crítica", "Cuellos de botella que viven en una persona, no en un sistema."],
];

const architectureLayers = [
  {
    number: "01",
    title: "Growth",
    subtitle: "Adquisición",
    body: "Digitalizamos y estructuramos canales de entrada para predecir demanda y sostener oportunidades comerciales calificadas.",
  },
  {
    number: "02",
    title: "Systems",
    subtitle: "Operación",
    body: "Eliminamos procesos manuales y conectamos la cadena de valor a un ecosistema operativo con responsables, estados y trazabilidad.",
    core: true,
  },
  {
    number: "03",
    title: "Intelligence",
    subtitle: "Decisión",
    body: "Convertimos data dispersa en cuadros de mando, señales ejecutivas y lectura operativa en tiempo real.",
  },
];

const executiveSignals = [
  ["Rendimiento operativo", "94%"],
  ["Cuellos de botella", "0 críticos"],
  ["Sincronización", "Activa"],
  ["Arquitectura", "Integrada"],
];

export default function Home() {
  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div className="section-veil absolute inset-0" />
        <div className="container-shell relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[0.86fr_1.14fr] lg:py-20">
          <div className="space-y-8">
            <Reveal direction="left">
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-100/70">
                VRILLA | Transformación Operacional Digital
              </p>
            </Reveal>
            <Reveal direction="left" delay={0.06}>
              <h1 className="text-balance text-5xl font-semibold tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                Menos fricción. Mayor margen. Control total.
              </h1>
            </Reveal>
            <Reveal direction="left" delay={0.12}>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                No vendemos software aislado ni campañas de marketing. Diseñamos e implementamos arquitecturas digitales para empresas técnicas y operativas en LATAM. Crecimiento, sistemas e inteligencia centralizada.
              </p>
            </Reveal>
            <Reveal direction="left" delay={0.18} className="flex flex-col gap-3 sm:flex-row">
              <PremiumLink href="/contacto">Solicitar Diagnóstico Operacional</PremiumLink>
              <PremiumLink href="/soluciones" subtle>
                Ver arquitectura
              </PremiumLink>
            </Reveal>
            <Reveal direction="left" delay={0.24}>
              <div className="max-w-2xl rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-slate-500">Arquitecturas para</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {trustCodes.map((code) => (
                    <span key={code} className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] text-cyan-100/75">
                      [{code}]
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal direction="right" delay={0.12}>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      <section className="container-shell py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <Reveal direction="left">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/70">El problema</p>
              <h2 className="mt-5 max-w-3xl text-balance text-4xl font-medium tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
                El crecimiento rompe los sistemas tradicionales.
              </h2>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.06}>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Hojas de cálculo interminables, equipos desconectados, datos que no cuadran y cuellos de botella que dependen de una sola persona. Si tu facturación crece pero tu margen operativo disminuye, tu problema no es de ventas. Es de arquitectura.
            </p>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {operationalFriction.map(([title, body], index) => (
            <Reveal key={title} delay={index * 0.04} direction={index % 2 === 0 ? "left" : "right"}>
              <article className="relative min-h-[230px] overflow-hidden rounded-[1.8rem] border border-white/10 p-5 surface-panel">
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-rose-200/40 to-transparent" />
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-rose-100/50">Fricción 0{index + 1}</p>
                <h3 className="mt-6 text-xl tracking-[-0.035em] text-white">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell py-24 lg:py-28">
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-[2.6rem] border border-white/10 p-6 surface-panel lg:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_0%,rgba(184,245,255,0.13),transparent_34%)]" />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/70">Nuestra arquitectura</p>
              <h2 className="mt-5 max-w-3xl text-balance text-4xl font-medium tracking-[-0.055em] text-white sm:text-5xl">
                Un ecosistema, tres capas de integración.
              </h2>
              <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1.15fr_1fr] lg:items-center">
                {architectureLayers.map((layer, index) => (
                  <article
                    key={layer.title}
                    className={`relative overflow-hidden rounded-[2rem] border p-6 ${layer.core ? "border-cyan-100/25 bg-cyan-100/[0.055] lg:order-none" : "border-white/10 bg-black/20"}`}
                  >
                    <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/45 to-transparent" />
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-100/60">[{layer.number}] {layer.title}</p>
                    <h3 className="mt-6 text-2xl tracking-[-0.04em] text-white">{layer.subtitle}</h3>
                    <p className="mt-4 min-h-28 leading-7 text-slate-300">{layer.body}</p>
                    <div className="mt-6 h-px bg-white/10">
                      <div className="h-px bg-cyan-100/75" style={{ width: `${68 + index * 8}%` }} />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-shell py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <Reveal direction="left">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/70">La ventaja VRILLA</p>
              <h2 className="mt-5 max-w-2xl text-balance text-4xl font-medium tracking-[-0.055em] text-white sm:text-5xl">
                Ingeniería de procesos. No intuición.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Detrás de cada arquitectura hay análisis operacional, criterio de software, automatización y estrategia de crecimiento. Construimos activos digitales que le pertenecen a tu empresa.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.08}>
            <div className="relative overflow-hidden rounded-[2.3rem] border border-white/10 p-6 surface-panel">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(184,245,255,0.14),transparent_34%)]" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-100/60">Interfaz operacional</p>
                  <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 font-mono text-[10px] text-emerald-100">Activa</span>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {executiveSignals.map(([label, value], index) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">{label}</p>
                      <p className="mt-4 text-2xl tracking-[-0.04em] text-white">{value}</p>
                      <div className="mt-4 h-1.5 rounded-full bg-white/8">
                        <div className="h-1.5 rounded-full bg-cyan-100/75" style={{ width: `${62 + index * 8}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell py-24 lg:py-28">
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-[2.6rem] border border-cyan-100/15 p-8 text-center surface-panel lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(190,248,255,0.13),transparent_34%)]" />
            <div className="relative mx-auto max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/70">Diagnóstico operacional</p>
              <h2 className="mt-5 text-balance text-4xl font-medium tracking-[-0.055em] text-white sm:text-5xl">
                La transformación no es comprar herramientas. Es integrarlas.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Escuchamos, diagnosticamos y diseñamos la arquitectura que permite operar mejor, decidir con datos y escalar sin sumar caos.
              </p>
              <div className="mt-8">
                <PremiumLink href="/contacto">Solicitar Diagnóstico Operacional</PremiumLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
