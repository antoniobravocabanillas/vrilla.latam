import { InteriorPage } from "@/components/interior-page";
import { industries } from "@/components/site-data";

export default function IndustriasPage() {
  return (
    <InteriorPage
      eyebrow="Industrias"
      title="Especialistas en contextos donde la complejidad operacional es real."
      copy="Trabajamos con compañías donde campo, oficina, documentos, ventas y dirección necesitan funcionar como un mismo sistema."
    >
      <section className="container-shell grid gap-4 pb-20 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry) => (
          <article key={industry} className="rounded-[1.5rem] border border-white/10 p-6 text-lg surface-panel">
            {industry}
          </article>
        ))}
      </section>
      <section className="container-shell grid gap-4 pb-20 lg:grid-cols-3">
        {[
          ["Campo distribuido", "Operaciones que se rompen entre cuadrillas, oficina y aprobación."],
          ["Documentación crítica", "Entregables, certificados y expedientes que deben ser trazables."],
          ["Dirección sin visibilidad", "Gerencia que necesita leer riesgo, avance y margen sin perseguir información."],
        ].map(([title, body]) => (
          <article key={title} className="rounded-[1.75rem] border border-white/10 p-6 surface-panel">
            <h2 className="text-xl tracking-[-0.03em]">{title}</h2>
            <p className="mt-4 leading-7 text-slate-300">{body}</p>
          </article>
        ))}
      </section>
    </InteriorPage>
  );
}
