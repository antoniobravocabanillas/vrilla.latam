import { InteriorPage } from "@/components/interior-page";
import { CaseEvidenceMatrix } from "@/components/interactive-systems";
import { CaseOperationsMap } from "@/components/platform-visuals";
import { Reveal, SectionHeading } from "@/components/ui-primitives";

export default function CasosPage() {
  return (
    <InteriorPage
      eyebrow="Casos"
      title="La evidencia no es un portafolio. Es una operación compleja que ya puede leerse."
      copy="ICC Topografía funciona como laboratorio real para validar coordinación, trazabilidad, control y lectura ejecutiva en una empresa técnica."
    >
      <section className="container-shell grid gap-8 pb-24 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <SectionHeading
          eyebrow="ICC Topografía"
          title="De capacidades técnicas dispersas a una operación interpretable."
          copy="La prueba no está en una interfaz bonita. Está en conectar campo, QA/QC, oficina, BI y dirección bajo una misma lógica operacional."
        />
        <Reveal delay={0.08}>
          <CaseOperationsMap />
        </Reveal>
      </section>

      <section className="container-shell grid gap-4 pb-24 lg:grid-cols-4">
        {[
          ["12+", "años de experiencia técnica"],
          ["QA/QC", "entregables auditables"],
          ["360°", "servicios + equipos + soporte"],
          ["Nacional", "cobertura operativa"],
        ].map(([value, label], index) => (
          <Reveal key={label} delay={index * 0.04}>
            <article className="rounded-[1.6rem] border border-white/10 p-5 surface-panel">
              <p className="text-2xl tracking-[-0.03em]">{value}</p>
              <p className="mt-3 text-sm text-slate-400">{label}</p>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="container-shell pb-24">
        <CaseEvidenceMatrix />
      </section>

      <section className="container-shell pb-24">
        <div className="rounded-[2rem] border border-white/10 p-6 surface-panel lg:p-8">
          <SectionHeading
            eyebrow="Lectura del caso"
            title="Qué valida ICC dentro del sistema VRILLA."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Operación", "Servicios técnicos, equipos, soporte y calibración coordinados en una sola arquitectura."],
              ["Trazabilidad", "Entregables, precisión y QA/QC convertidos en señales verificables."],
              ["Dirección", "Capacidad de leer avance, riesgo y cumplimiento sin perseguir información."],
            ].map(([title, body], index) => (
              <Reveal key={title} delay={index * 0.04}>
                <article className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                  <h2 className="text-xl tracking-[-0.03em]">{title}</h2>
                  <p className="mt-4 leading-7 text-slate-300">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {["42 km controlados", "128 ha georreferenciadas", "0.8 mm de tolerancia"].map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-slate-200">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </InteriorPage>
  );
}
