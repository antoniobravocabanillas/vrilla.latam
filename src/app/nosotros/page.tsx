import { InteriorPage } from "@/components/interior-page";

export default function NosotrosPage() {
  return (
    <InteriorPage
      eyebrow="Nosotros"
      title="VRILLA existe para modernizar la operación de empresas que ya sostienen trabajo real."
      copy="No construimos adornos digitales. Diseñamos estructuras que ayudan a compañías técnicas a crecer sin perder control."
    >
      <section className="container-shell grid gap-4 pb-20 lg:grid-cols-3">
        {[
          ["Criterio", "Priorizamos claridad operativa sobre ruido táctico."],
          ["Sistema", "Pensamos en conexiones, dependencias y escalabilidad."],
          ["LATAM", "Diseñamos para la realidad de empresas tradicionales de la región."],
        ].map(([title, body]) => (
          <article key={title} className="rounded-[1.75rem] border border-white/10 p-6 surface-panel">
            <h2 className="text-2xl tracking-[-0.03em]">{title}</h2>
            <p className="mt-4 leading-7 text-slate-300">{body}</p>
          </article>
        ))}
      </section>
    </InteriorPage>
  );
}
