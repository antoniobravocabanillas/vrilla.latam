import { IndustriesExperience } from "@/components/industries-visual";
import { InteriorPage } from "@/components/interior-page";

export default function IndustriasPage() {
  return (
    <InteriorPage
      eyebrow="Industrias"
      title="Arquitectura operacional para industrias donde el margen depende del control."
      copy="VRILLA trabaja con empresas técnicas y operativas de LATAM que necesitan conectar campo, oficina, documentos, ventas y dirección en una sola infraestructura digital."
    >
      <IndustriesExperience />
    </InteriorPage>
  );
}
