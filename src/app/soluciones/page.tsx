import { InteriorPage } from "@/components/interior-page";
import { SolutionLayerSystem } from "@/components/interactive-systems";
import { SolutionsArchitecture, SolutionModuleVisual } from "@/components/solutions-visual";
import { divisions } from "@/components/site-data";
import { PremiumLink, Reveal, SectionHeading } from "@/components/ui-primitives";

const solutionModules = [
  {
    title: "Posicionamiento Corporativo Premium",
    trigger: "Cuando la empresa ejecuta bien, pero el mercado todavía no percibe su verdadera capacidad.",
    change: "Autoridad, claridad y una presencia capaz de sostener ventas de mayor valor.",
    kind: "positioning" as const,
  },
  {
    title: "Digitalización Operacional",
    trigger: "Cuando los procesos dependen de WhatsApp, Excel y memoria operativa.",
    change: "Flujos repetibles, trazabilidad y menos dependencia de personas clave.",
    kind: "operations" as const,
  },
  {
    title: "Sistema Comercial Digital",
    trigger: "Cuando la demanda existe, pero seguimiento, priorización y conversión no están estructurados.",
    change: "Proceso comercial visible, medible y conectado con la capacidad real de entrega.",
    kind: "commercial" as const,
  },
  {
    title: "Infraestructura Digital Empresarial",
    trigger: "Cuando herramientas, datos y decisiones viven fragmentados entre áreas.",
    change: "Arquitectura integrada para crecer sin perder control operacional.",
    kind: "infrastructure" as const,
  },
];

export default function SolucionesPage() {
  return (
    <InteriorPage
      eyebrow="Soluciones"
      title="No vendemos servicios aislados. Diseñamos arquitectura para que la empresa opere como sistema."
      copy="Cada intervención de VRILLA reorganiza una parte crítica del negocio: percepción, flujo operativo, sistema comercial o infraestructura digital."
    >
      <section className="container-shell grid gap-8 pb-24 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Arquitectura"
            title="Tres capas conectadas. Una sola operación."
            copy="Growth genera entrada, Systems ordena la ejecución e Intelligence devuelve lectura ejecutiva. Separadas son áreas; conectadas se convierten en infraestructura empresarial."
          />
        </div>
        <Reveal delay={0.08}>
          <SolutionsArchitecture />
        </Reveal>
      </section>

      <section className="container-shell pb-24">
        <div className="grid gap-5 lg:grid-cols-3">
          {divisions.map((division, index) => (
            <Reveal key={division.name} delay={index * 0.06}>
              <article className="relative overflow-hidden rounded-[2rem] border border-white/10 p-6 surface-panel">
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-300/10 blur-3xl" />
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-100/55">Layer 0{index + 1}</p>
                <h2 className="mt-6 text-2xl tracking-[-0.03em]">{division.name}</h2>
                <p className="mt-4 leading-7 text-slate-300">{division.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {division.signals.map((signal) => (
                    <span key={signal} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
                      {signal}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell pb-24">
        <SolutionLayerSystem />
      </section>

      <section className="container-shell pb-24">
        <SectionHeading
          eyebrow="Módulos"
          title="Cuatro transformaciones. Cuatro fallas estructurales resueltas."
          copy="No eliges un paquete decorativo. Identificamos qué capa está frenando la empresa y diseñamos la intervención adecuada."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {solutionModules.map((solution, index) => (
            <Reveal key={solution.title} delay={index * 0.05}>
              <article className="rounded-[1.9rem] border border-white/10 p-6 surface-panel">
                <h3 className="text-2xl tracking-[-0.03em]">{solution.title}</h3>
                <div className="mt-5 grid gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">Se activa cuando</p>
                    <p className="mt-2 leading-7 text-slate-300">{solution.trigger}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">Qué cambia</p>
                    <p className="mt-2 leading-7 text-slate-100">{solution.change}</p>
                  </div>
                </div>
                <SolutionModuleVisual kind={solution.kind} />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell pb-24">
        <div className="rounded-[2rem] border border-white/10 p-6 surface-panel lg:p-8">
          <SectionHeading
            eyebrow="Transformación"
            title="El cambio visible no es una entrega. Es una empresa que deja de operar por excepción."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              ["Antes", "WhatsApp, Excel, seguimiento informal, fundador como nodo central."],
              ["Después", "Flujos visibles, datos conectados, responsables claros y decisiones trazables."],
              ["Antes", "Ventas reactivas y percepción menor a la capacidad real."],
              ["Después", "Autoridad comercial, pipeline medible y estructura lista para escalar."],
            ].map(([label, body], index) => (
              <Reveal key={`${label}-${index}`} delay={index * 0.04}>
                <article className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">{label}</p>
                  <p className="mt-4 leading-7 text-slate-200">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell grid gap-6 pb-24 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Dimensionamiento"
          title="La inversión se define por complejidad, no por catálogo."
          copy="VRILLA no publica precios fijos porque cada empresa requiere un nivel distinto de arquitectura, integración y acompañamiento."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ["Diagnóstico", "Mapa de fricción, prioridades y alcance real."],
            ["Implementación", "Diseño, automatización, integración y adopción."],
            ["Evolución", "Optimización, gobierno y escalabilidad."],
          ].map(([title, body], index) => (
            <Reveal key={title} delay={index * 0.04}>
              <article className="rounded-[1.6rem] border border-white/10 p-5 surface-panel">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">0{index + 1}</p>
                <h3 className="mt-5 text-xl tracking-[-0.03em]">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell pb-24">
        <div className="rounded-[2rem] border border-white/10 p-6 surface-panel lg:flex lg:items-center lg:justify-between lg:p-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/70">Siguiente paso</p>
            <h2 className="mt-4 text-3xl tracking-[-0.04em] sm:text-4xl">Mapeemos qué capa está frenando tu operación.</h2>
          </div>
          <div className="mt-6 lg:mt-0">
            <PremiumLink href="/contacto">Solicitar diagnóstico operacional</PremiumLink>
          </div>
        </div>
      </section>
    </InteriorPage>
  );
}
