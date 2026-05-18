import { InteriorPage } from "@/components/interior-page";
import { MethodScrollTrace } from "@/components/interactive-systems";
import { OperationalMesh } from "@/components/operational-mesh";
import { MethodBlueprint } from "@/components/platform-visuals";
import { methodOutputs } from "@/components/site-data";
import { SectionHeading } from "@/components/ui-primitives";

export default function MetodoPage() {
  return (
    <InteriorPage
      eyebrow="Método"
      title="No aplicamos recetas. Diseñamos una secuencia de intervención para operaciones reales."
      copy="El método VRILLA convierte desorden en arquitectura, arquitectura en sistema y sistema en gobierno digital."
    >
      <section className="container-shell grid gap-8 pb-24 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <SectionHeading
          eyebrow="Blueprint"
          title="Cada fase produce un activo operativo concreto."
          copy="No avanzamos por hitos decorativos, sino por evidencia: primero se ve la fricción, luego la arquitectura, después el sistema y finalmente la capacidad de escalar."
        />
        <div className="relative">
          <OperationalMesh variant="compact" className="absolute inset-0 opacity-[0.08]" />
          <MethodBlueprint />
        </div>
      </section>

      <section className="container-shell pb-24">
        <div className="grid gap-4 lg:grid-cols-5">
          {methodOutputs.map((item, index) => (
            <article key={item.output} className="rounded-[1.6rem] border border-white/10 p-5 surface-panel">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">0{index + 1}</p>
              <h2 className="mt-5 text-xl tracking-[-0.03em]">{item.output}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell pb-24">
        <MethodScrollTrace />
      </section>

      <section className="container-shell pb-24">
        <div className="rounded-[2rem] border border-white/10 p-6 surface-panel lg:p-8">
          <SectionHeading
            eyebrow="Lógica operativa"
            title="La transformación solo es real cuando cambia la manera en que la empresa decide."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              ["1", "Detectamos dónde se fuga tiempo, margen o control."],
              ["2", "Modelamos la operación objetivo, no solo las herramientas."],
              ["3", "Conectamos flujos, responsables y lectura ejecutiva."],
              ["4", "Instalamos reglas para escalar sin volver al caos."],
            ].map(([number, copy]) => (
              <div key={number} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <p className="font-mono text-xs text-cyan-100/55">{number}</p>
                <p className="mt-5 leading-7 text-slate-200">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </InteriorPage>
  );
}
