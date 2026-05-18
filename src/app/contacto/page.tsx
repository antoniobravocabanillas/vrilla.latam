import { ContactForm } from "@/components/contact-form";
import { InteriorPage } from "@/components/interior-page";
import { ContactSignalMeter } from "@/components/interactive-systems";
import { ContactOrb } from "@/components/platform-visuals";
import { SectionHeading } from "@/components/ui-primitives";
import { PremiumLink } from "@/components/ui-primitives";

export default function ContactoPage() {
  return (
    <InteriorPage
      eyebrow="Contacto"
      title="El diagnóstico no es una llamada comercial. Es la primera lectura de tu operación."
      copy="Antes de recomendar herramientas, necesitamos entender contexto, fricción y complejidad."
    >
      <section className="container-shell grid gap-8 pb-24 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <SectionHeading
          eyebrow="Lectura inicial"
          title="Tres señales bastan para saber si una empresa necesita arquitectura nueva."
          copy="Qué depende de personas, qué no es visible y qué se rompe cuando la operación crece."
        />
        <ContactOrb />
      </section>

      <section className="container-shell grid gap-8 pb-24 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div className="grid gap-4">
          {[
            ["01", "Recibimos tu contexto operacional."],
            ["02", "Detectamos la capa de mayor fricción."],
            ["03", "Definimos si tiene sentido avanzar a diagnóstico."],
          ].map(([number, copy]) => (
            <div key={number} className="rounded-[1.5rem] border border-white/10 p-5 surface-panel">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">{number}</p>
              <p className="mt-4 leading-7 text-slate-200">{copy}</p>
            </div>
          ))}
          <ContactSignalMeter />
          <div className="rounded-[1.5rem] border border-white/10 p-5 surface-panel">
            <p className="text-sm leading-6 text-slate-300">
              Si prefieres una primera lectura antes de escribirnos, completa el diagnóstico interactivo.
            </p>
            <div className="mt-4">
              <PremiumLink href="/diagnostico" subtle>
                Ir al diagnóstico
              </PremiumLink>
            </div>
          </div>
        </div>
        <ContactForm />
      </section>
    </InteriorPage>
  );
}
