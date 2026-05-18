import { DiagnosticFlow } from "@/components/diagnostic-flow";
import { InteriorPage } from "@/components/interior-page";

export default function DiagnosticoPage() {
  return (
    <InteriorPage
      eyebrow="Diagnóstico"
      title="Lectura operacional inicial en menos de dos minutos."
      copy="Responde seis preguntas y obtén una primera lectura sobre madurez, fricción dominante y el tipo de intervención que probablemente necesita tu empresa."
    >
      <section className="container-shell max-w-5xl pb-24">
        <DiagnosticFlow />
      </section>
    </InteriorPage>
  );
}
